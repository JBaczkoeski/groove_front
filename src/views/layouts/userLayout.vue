<template>
    <nav class="navbar navbar-expand-lg dark nav-dark">
      <div class="container-fluid">
        <a href="/">
          <img src="../../assets/logo.png" class="logo me-4 me-sm-0" alt="Opis obrazu">
        </a>
        <a href="/" class="btn">
        <p class="mt-1 h3 brand">Groove Music</p>
        </a>
        <button class="navbar-toggler ms-4 ms-sm-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse col-6" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink :to="'/'" :label="'Strona główna'"/>
            </li>
          </ul>
          <ul class="navbar-nav" v-if="isLogged">
            <li class="nav-item">
              <NavLink :to="'/sklep'" :label="'Sklep'"/>
            </li>
            <li class="nav-item">
              <NavLink :to="'/utwory'" :label="'Utwory'"/>
            </li>
            <li class="nav-item">
              <NavLink :to="'/polubione/utwory'" :label="'Polubione utwory'"/>
            </li>
            <li class="nav-item">
              <NavLink :to="'/albumy'" :label="'Albumy'"/>
            </li>
            <li class="nav-item">
              <NavLink :to="'/polubione/albumy'" :label="'Polubione albumy'"/>
            </li>
          </ul>
        </div>
        <div class="container col-3 d-flex justify-content-end" v-if="!isLogged">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink :to="'/logowanie'" :label="'Logowanie'"/>
            </li>
            <li class="nav-item">
              <NavLink :to="'/rejestracja'" :label="'Rejestracja'"/>
            </li>
          </ul>
        </div>
        <div class="container col-1 d-flex justify-content-end" v-if="isLogged">
          <ul class="navbar-nav">

          </ul>
        </div>
        <div class="container col-2 d-flex justify-content-end" v-if="isLogged">
          <ul class="navbar-nav">
            <li class="nav-item ms-2 mt-2">
              <NavLink :to="'/konto'" :label="'Konto'"/>
            </li>
            <li class="nav-item ms-2 mt-2">
              <button class="nav-link dark" @click="logout">Wyloguj</button>
            </li>
            <li>
              <a class="nav-link" href="/koszyk"><i class="fa-solid fa-cart-shopping fa-xl mt-4 icon"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <MusicPlayer/>
</template>
<script>

import NavLink from '../../components/NavbarHref.vue';
import MusicPlayer from "@/components/MusicPlayer.vue";
import {mapState} from "vuex";

export default {
  name: 'App',

  components: {
    NavLink,
    MusicPlayer
  },

  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
    },
  },
  computed: {
    ...mapState('auth', ['isLogged', 'user']),

  },
}
</script>
<style>
.logo {
  width: 80px;
}
.user-profile {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
</style>