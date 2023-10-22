export default {
    namespaced: true,

    state: {
        showPlayer: localStorage.getItem('showPlayer') === 'true' || false,
        track: localStorage.getItem('track') || '',
        title: localStorage.getItem('title') || '',
        coverAlbum: localStorage.getItem('coverAlbum') || '',
    },

    mutations: {
        setShowPlayer(state, value) {
            state.showPlayer = value;
        },
        setMusicPlayer(state, value) {
            state.track = value;
        },
        setTitlePlayer(state, value) {
            state.title = value;
        },
        setCoverAlbumPlayer(state, value) {
            state.coverAlbum = value;
        },
    },

    actions: {
        togglePlayer({ commit }, value) {
            commit('setShowPlayer', value);
        },
        musicPlayer({ commit }, value) {
            commit('setMusicPlayer', value);
        },
        TitlePlayer({ commit }, value) {
            commit('setTitlePlayer', value);
        },
        CoverAlbumPlayer({ commit }, value) {
            commit('setCoverAlbumPlayer', value);
        },
    }
};