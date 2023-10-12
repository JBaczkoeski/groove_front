import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HelloWorld },
    //     Tutaj bartuś będziemy dodawać nowe ścieżki na razie chuja tu jest
    ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
