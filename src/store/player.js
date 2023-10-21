export default {
    namespaced: true,

    state: {
        showPlayer: localStorage.getItem('showPlayer') === 'true' || false,
        track: localStorage.getItem('track') === '',
    },

    mutations: {
        setShowPlayer(state, value) {
            state.showPlayer = value;
        }
    },

    actions: {
        togglePlayer({ commit }, value) {
            commit('setShowPlayer', value);
        }
    }
};