import { createApp } from 'vue'
import App from './App.vue'
import router from './helpers/router'
import store from './store'
import axios from "axios";

// import widoków


const app = createApp(App)

app.config.globalProperties.$axios = axios

app.use(store)
app.use(router)
app.mount('#app')
