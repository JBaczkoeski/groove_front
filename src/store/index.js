import { createStore } from 'vuex';
import auth from './auth';
import song from './song';

export default createStore({
    modules: {
        auth,
        song,
    },
});