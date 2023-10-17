import { createRouter, createWebHistory } from 'vue-router';

import HomePage from "@/views/HomeView.vue";
import LoginPage from '@/views/auth/LoginView.vue'
import RegisterPage from "@/views/auth/RegisterView.vue";
import SongsPage from "@/views/music/SongsView.vue";
import AlbumView from "@/views/music/AlbumView.vue";
import UserView from "@/views/user/UserView.vue";
import UserOrdersView from "@/views/user/UserOrdersView.vue";
import DeleteAccountView from "@/views/user/DeleteAccountView.vue";
import AlbumsView from "@/views/music/AlbumsView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/logowanie', component: LoginPage },
        { path: '/rejestracja', component: RegisterPage },
        { path: '/login', component: RegisterPage},
        { path: '/konto/usun', component: DeleteAccountView},
        { path: '/konto', component: UserView},
        { path: '/konto/zamowienia', component: UserOrdersView},
        { path: '/utwory', component: SongsPage},
        { path: '/albumy', component: AlbumsView},
        { path: '/album', component: AlbumView},


        //     Tutaj bartuś będziemy dodawać nowe ścieżki na razie chuja tu jest
    ]
})

export default router;

