import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import widoków
import Home from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from "@/pages/RegisterPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/logowanie', component: LoginPage },
        { path: '/rejestracja', component: RegisterPage },
    //     Tutaj bartuś będziemy dodawać nowe ścieżki na razie chuja tu jest
    ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
