import { createStore } from 'vuex';
import auth from './auth';
import song from './song';
import player from "@/store/player";

export default createStore({
    modules: {
        auth,
        song,
        player
    },
});