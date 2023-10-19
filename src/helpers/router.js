import { createRouter, createWebHistory } from 'vue-router';

import HomePage from "@/views/user_user/HomeView.vue";
import LoginPage from '@/views/user_user/auth/LoginView.vue'
import RegisterPage from "@/views/user_user/auth/RegisterView.vue";
import SongsPage from "@/views/user_user/music/SongsView.vue";
import AlbumView from "@/views/user_user/music/AlbumView.vue";
import UserView from "@/views/user_user/user/UserView.vue";
import UserOrdersView from "@/views/user_user/user/UserOrdersView.vue";
import DeleteAccountView from "@/views/user_user/user/DeleteAccountView.vue";
import AlbumsView from "@/views/user_user/music/AlbumsView.vue";

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
        { path: '/formularz', component: SongFormView},
        { path: '/album/show/:id', component: AlbumView},


        //     Tutaj bartuś będziemy dodawać nowe ścieżki na razie chuja tu jest
    ]
})

export default router;

