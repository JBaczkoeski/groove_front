import {createApp} from 'vue'
import App from './App.vue'
import router from './helpers/router'
import store from './store'
import axios from "axios"
import globalCss from "@/assets/global.css"

const app = createApp(App)

app.config.globalProperties.$axios = axios

app.use(globalCss)
app.use(store)
app.use(router)
app.mount('#app')
