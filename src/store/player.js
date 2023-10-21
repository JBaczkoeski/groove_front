export default {
    namespaced: true,

    state: {
        showPlayer: localStorage.getItem('showPlayer') === 'true' || false,
        track: localStorage.getItem('track') === '"http://127.0.0.1:8080/music/Travis_2.mp3"',
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