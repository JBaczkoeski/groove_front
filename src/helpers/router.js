import {createRouter, createWebHistory} from 'vue-router';

import HomeView from "@/views/user_user/HomeView.vue";
import LoginView from '@/views/user_user/auth/LoginView.vue'
import RegisterView from "@/views/user_user/auth/RegisterView.vue";
import SongsView from "@/views/user_user/music/SongsView.vue";
import AlbumView from "@/views/user_user/music/AlbumView.vue";
import UserView from "@/views/user_user/user/UserView.vue";
import UserOrdersView from "@/views/user_user/user/UserOrdersView.vue";
import DeleteAccountView from "@/views/user_user/user/DeleteAccountView.vue";
import AlbumsView from "@/views/user_user/music/AlbumsView.vue";
import SongAddView from "@/views/user_label/song/SongAddView.vue";
import SongView from "@/views/user_user/music/SongView.vue";
import LabelHomeView from "@/views/user_label/HomeView.vue";
import ArtistHomeView from "@/views/user_artist/HomeView.vue";
import ArtistSongAddView from "@/views/user_artist/artistSong/SongAddView.vue";
import ArtistSongView from "@/views/user_artist/artistSong/SongsView.vue";
import ApllyLabelView from "@/views/user_artist/artistSong/ApllyLabelView.vue";
import ArtistAlbumsView from "@/views/user_artist/artistSong/ArtistAlbumsView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomeView},
        {path: '/logowanie', component: LoginView},
        {path: '/rejestracja', component: RegisterView},
        {path: '/login', component: RegisterView},
        {path: '/konto/usun', component: DeleteAccountView},
        {path: '/konto', component: UserView},
        {path: '/konto/zamowienia', component: UserOrdersView},
        {path: '/utwory', component: SongsView},
        {path: '/utwor/show/:id', component: SongView},
        {path: '/albumy', component: AlbumsView},
        {path: '/album', component: AlbumView},
        {path: '/album/show/:id', component: AlbumView},

        {path: '/wytwornia', component: LabelHomeView},
        {path: '/wytwornia/utwory/dodawanie', component: SongAddView},

        {path: '/artysta', component: ArtistHomeView},
        {path: '/artysta/utwory', component: ArtistSongView},
        {path: '/artysta/utwory/dodawanie', component: ArtistSongAddView},
        {path: '/artysta/utwory/wytwornia', component: ApllyLabelView},
        {path: '/artysta/albumy', component: ArtistAlbumsView},

    ]
})

export default router;

