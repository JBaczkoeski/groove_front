<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <img src="../../assets/logo.png" class="logo" alt="Opis obrazu">
        <p class="navbar-brand" style="margin-top: 10px">Groove Music</p>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse col-6" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink :to="'/'" :label="'Strona główna'"/>
            </li>
            <li class="nav-item">
              <NavLink :to="'/'" :label="'Sklep'"/>
            </li>
          </ul>
          <ul class="navbar-nav" v-if="isLogged">
            <li class="nav-item">
              <NavLink :to="'/utwory'" :label="'Utwory'"/>
            </li>
            <li class="nav-item">
              <NavLink :to="'/albumy'" :label="'Albumy'"/>
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
            <li class="nav-item">
              <img class="user-profile" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/103488860_1966332453498047_1673215677078360732_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=be3454&_nc_ohc=rmDTA4aETMoAX_qeicJ&_nc_ht=scontent-waw1-1.xx&oh=00_AfAyw3rAT-5ug63--8tht5KkIln2olXMLrkOemt4v65FvA&oe=656206C2" alt="Oskar">
            </li>
            <li class="nav-item mt-2">
              <NavLink :to="'/konto'" :label="'Konto'"/>
            </li>
            <li class="nav-item mt-2">
              <button class="nav-link" @click="logout">Wyloguj</button>
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
  width: 60px;
}
.user-profile {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}
</style>