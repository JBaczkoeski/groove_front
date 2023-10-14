
import axios from '@/helpers/axios';


const state = {
    token: null,
    user: null,
};

const getters = {
    isAuthenticated: (state) => !!state.token,
};

const actions = {
    async login({ commit }, { email, password }) {
        try {
            const response = await axios.post('/login', { email, password });
            const { token, user } = response.data;
            commit('setToken', token);
            commit('setUser', user);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    logout({ commit }) {
        commit('setToken', null);
        commit('setUser', null);
    },
};

const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setUser(state, user) {
        state.user = user;
    },
};

const authStore = pinia.defineStore({
    id: 'auth',
    state,
    actions,
    getters,
    mutations,
});

export default authStore;