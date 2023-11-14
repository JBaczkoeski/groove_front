import {createRouter, createWebHistory} from 'vue-router';
import store from "@/store";

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
import BecomeAnArtist from "@/views/user_user/user/BecomeAnArtist.vue";
import ShopView from "@/views/user_user/ShopView.vue";
import SubscriptionView from "@/views/user_user/user/SubscriptionView.vue";
import LabelApllyArtistView from "@/views/user_label/management/LabelApllyArtistView.vue";
import ArtistListView from "@/views/user_label/management/ArtistListView.vue";
import AdminHome from "@/views/user_admin/HomeView.vue";
import ServiceManagment from "@/views/user_admin/ServiceManagment.vue";
import OrderView from "@/views/user_user/user/OrderView.vue";
import AlbumAddView from "@/views/user_artist/artistSong/AlbumAddView.vue";
import LabelManagementPanel from "@/views/user_label/management/LabelManagementPanel.vue";
import CartView from "@/views/user_user/user/CartView.vue";
import UserArtistView from "@/views/user_artist/user/UserArtistView.vue";
import DeleteArtistAccountView from "@/views/user_artist/user/DeleteArtistAccountView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //user konto i logowanie ogolne
        {path: '/', component: HomeView},
        {path: '/logowanie', component: LoginView},
        {path: '/rejestracja', component: RegisterView},
        {path: '/konto/usun', component: DeleteAccountView, meta:{requiresAuth: true}},
        {path: '/konto', component: UserView, meta:{requiresAuth: true}},
        {path: '/konto/zamowienia', component: UserOrdersView, meta:{requiresAuth: true}},
        {path: '/konto/subskrypcja', component:SubscriptionView, meta:{requiresAuth: true}},
        {path: '/konto/zostanArtysta', component: BecomeAnArtist, meta:{requiresAuth: true}},
        {path: '/konto/zamowienie', component: OrderView},
        // user utwory
        {path: '/utwory', component: SongsView},
        {path: '/utwor/show/:id', component: SongView},
        {path: '/albumy', component: AlbumsView},
        {path: '/album', component: AlbumView},
        {path: '/album/show/:id', component: AlbumView},
        //sklep ogolny
        {path: '/sklep', component: ShopView},
        {path: '/koszyk', component: CartView},

        //Wytwórnia
        {path: '/wytwornia', component: LabelHomeView},
        {path: '/wytwornia/utwory/dodawanie', component: SongAddView},
        {path: '/wytwornia/artysci', component: ArtistListView},
        {path: '/wytwornia/artysci/aplikacje', component: LabelApllyArtistView},
        {path: '/wytwornia/panel', component: LabelManagementPanel},

        //Artysta
        {path: '/artysta', component: ArtistHomeView},
        {path: '/artysta/utwory', component: ArtistSongView},
        {path: '/artysta/utwory/dodawanie', component: ArtistSongAddView},
        {path: '/artysta/utwory/wytwornia', component: ApllyLabelView},
        {path: '/artysta/albumy', component: ArtistAlbumsView},
        {path: '/artysta/albumy/dodawanie', component: AlbumAddView},
        {path: '/artysta/konto', component: UserArtistView},
        {path: '/artysta/konto/usun', component: DeleteArtistAccountView},

        //Admin
        {path: '/admin', component:AdminHome},
        {path: '/admin/zarzadznie', component: ServiceManagment}
    ],
})

router.beforeEach((to,from,next) => {
    const isAuthenticated = store.state.auth.isLogged;
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/logowanie');
    }else {
        next();
    }
})

export default router;

