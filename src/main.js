import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import axios from "axios";
import store from './store'

// import widoków
import HomePage from "@/pages/HomePage.vue";
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from "@/pages/RegisterPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/logowanie', component: LoginPage },
        { path: '/rejestracja', component: RegisterPage },
    //     Tutaj bartuś będziemy dodawać nowe ścieżki na razie chuja tu jest
    ]
})

const app = createApp(App)

app.config.globalProperties.$axios = axios;
app.use(store)
app.use(router)
app.mount('#app')
