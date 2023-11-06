import { createStore } from 'vuex';
import auth from './auth';
import player from "@/store/player";

export default createStore({
    modules: {
        auth,
        player
    },
});