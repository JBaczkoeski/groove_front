import { createStore } from 'vuex';

export default createStore({
    state: {
        user: null,
        isLoggedIn: false
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            state.isLoggedIn = true;
        },
        logout(state) {
            state.user = null;
            state.isLoggedIn = false;
        }
    },
    actions: {
        login({ commit }, user) {
            commit('setUser', user);
            localStorage.setItem('isLoggedIn', true);
        },
        logout({ commit }) {
            commit('logout');
            localStorage.setItem('isLoggedIn', false);
        }
    },
    modules: {}
});