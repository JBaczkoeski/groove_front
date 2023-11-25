import router from "@/helpers/router";
import api from '@/services/api';
import jwt_decode from "jwt-decode";

const state = {
    isLogged: localStorage.getItem('isLogged') === 'true' || false,
    error: null
};

const mutations = {
    SET_IS_LOGGED(state, value) {
        state.isLogged = value;
        localStorage.setItem('isLogged', value);
    },
    SET_TOKEN(state, value) {
        state.user = value;
        localStorage.setItem('token', value);
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
};

const actions = {
    async login({commit}, {email, password}) {
        try {
            const response = await api.post('/api/Account/Login', {
                email,
                password
            });

            if (response.status === 200) {
                commit('SET_IS_LOGGED', true);
                if (response.data.token) {
                    var jwtToken = jwt_decode(response.data.token);
                    console.log(jwtToken);
                    commit('SET_TOKEN', response.data.token);
                    const roles = jwtToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
                    localStorage.setItem('userId', jwtToken['UserId']);
                    localStorage.setItem('role', roles);
                }
                 await router.push('/utwory');
                 location.reload();
            } else {
                console.log(response);
                commit('SET_ERROR', `Błąd podczas logowania: ${{response}}`);
            }
        } catch (error) {
            console.error(error)
        }
    },

    async register({commit}, {type, name, email, password, comfirmedPassword, ComfirmedPassword}) {
        try {
            if (type === 'Użytkownik') {

                const response = await api.post('/api/Account/Register', {
                    name,
                    email,
                    password,
                    comfirmedPassword
                });

                if (response.status === 200) {
                    const data = response.data;
                    commit('SET_TOKEN', data.token);
                    location.reload();
                } else {
                    return false;
                }
            }

            if (type === 'Wytwórnia') {
                const response = await api.post('/api/Account/RegisterAsStudio', {
                    name,
                    email,
                    password,
                    ComfirmedPassword
                });

                if (response.status === 200) {
                    const data = response.data;
                    commit('SET_TOKEN', data.token);
                    location.reload();
                } else {
                    return false;
                }
            }

            if (type === 'Artysta') {
                const response = await api.post('/api/Account/RegsiterAsArtist', {
                    name,
                    email,
                    password,
                    ComfirmedPassword
                });

                if (response.status === 200) {
                    const data = response.data;
                    commit('SET_TOKEN', data.token);
                    location.reload();
                } else {
                    return false;
                }
            }

        } catch (error) {
            console.error('Błąd podczas rejestracji:', error);
            return false;
        }
    },

    logout({commit}) {
        commit('SET_IS_LOGGED', false);
        commit('SET_TOKEN', '');
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
        location.reload();
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
