import router from "@/helpers/router";

const state = {
    isLogged: false,
    token: '',
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
            const response = await fetch('/api/Account/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
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
            const response = await fetch('/api/Account/Register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, confirm_password }),
            });

            if (response.ok) {
                const data = await response.json();
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