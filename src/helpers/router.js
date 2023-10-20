import { createRouter, createWebHistory } from 'vue-router';

import HomeView from "@/views/user_user/HomeView.vue";
import LoginView from '@/views/user_user/auth/LoginView.vue'
import RegisterView from "@/views/user_user/auth/RegisterView.vue";
import SongsView from "@/views/user_user/music/SongsView.vue";
import AlbumView from "@/views/user_user/music/AlbumView.vue";
import UserView from "@/views/user_user/user/UserView.vue";
import UserOrdersView from "@/views/user_user/user/UserOrdersView.vue";
import DeleteAccountView from "@/views/user_user/user/DeleteAccountView.vue";
import AlbumsView from "@/views/user_user/music/AlbumsView.vue";
import SongFormView from "@/views/user_label/song/SongFormView.vue";
import SongView from "@/views/user_user/music/SongView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/logowanie', component: LoginView },
        { path: '/rejestracja', component: RegisterView },
        { path: '/login', component: RegisterView},
        { path: '/konto/usun', component: DeleteAccountView},
        { path: '/konto', component: UserView},
        { path: '/konto/zamowienia', component: UserOrdersView},
        { path: '/utwory', component: SongsView},
        { path: '/utwor/show/:id', component:SongView},
        { path: '/albumy', component: AlbumsView},
        { path: '/album', component: AlbumView},
        { path: '/formularz', component: SongFormView},
        { path: '/album/show/:id', component: AlbumView},
        //     Tutaj bartuś będziemy dodawać nowe ścieżki na razie chuja tu jest
    ]
})

export default router;

