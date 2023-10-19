import router from "@/helpers/router";
import api from '@/services/api';

const state = {
    isLogged: localStorage.getItem('isLogged') === 'true' || false,
    token: localStorage.getItem('token') || '',
};

const mutations = {
    SET_IS_LOGGED(state, value) {
        state.isLogged = value;
    },
    SET_TOKEN(state, value) {
        state.token = value;
    },
};

const actions = {
    async login({ commit }, { email, password }) {
        try {
            const response = await api.post('/api/Account/Login', {
                email,
                password
            });

            if (response.status === 200) {
                const data = response.data;
                commit('SET_IS_LOGGED', true);
                commit('SET_TOKEN', data.token);
                await router.push('/utwory');
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Błąd podczas logowania:', error);
            return false;
        }
    },

    async register({ commit }, { name, email, password, confirm_password }) {
        try {
            const response = await api.post('/api/Account/Register', {
                name,
                email,
                password,
                confirm_password
            });

            if (response.status === 200) {
                const data = response.data;
                commit('SET_IS_LOGGED', true);
                commit('SET_TOKEN', data.token);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Błąd podczas rejestracji:', error);
            return false;
        }
    },

    logout({ commit }) {
        commit('SET_IS_LOGGED', false);
        commit('SET_TOKEN', '');
        router.push('/');
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
