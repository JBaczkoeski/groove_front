export default {
    namespaced: true,

    state: {
        showPlayer: localStorage.getItem('showPlayer') === 'true' || false,
        track: localStorage.getItem('track') || '',
        title: localStorage.getItem('title') || '',
        coverAlbum: localStorage.getItem('coverAlbum') || '',
        trackId: localStorage.getItem('trackId') || '',
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
        setTrackIdPlayer(state, value) {
            state.trackId = value;
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
        TrackIdPlayer({ commit }, value) {
            commit('setTrackIdPlayer', value)
        }
    },

    getters:{
        getTrackId: state => {
            return state.trackId
        }
    }
};