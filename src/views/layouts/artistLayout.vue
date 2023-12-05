<template>
  <nav class="navbar navbar-expand-lg dark">
    <div class="container-fluid nav-dark">
      <img src="../../assets/logo.png" class="logo" alt="Opis obrazu">
      <p class="mt-1 h3 me-2 brand">Groove Music Artist</p>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse col-6" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink :to="'/'" :label="'Panel główny'"/>
          </li>
          <li class="nav-item">
            <NavLink :to="'/utwory'" :label="'Utwory'"/>
          </li>
          <li class="nav-item">
            <NavLink :to="'/artysta/utwory'" :label="'Wydawanie'"/>
          </li>
        </ul>
      </div>
      <div class="container col-3 d-flex justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink :to="'/artysta/konto'" :label="'Konto'"/>
          </li>
          <li class="nav-item">
            <button class="nav-link dark" @click="logout" style="color: #CCCCCC">Wyloguj</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>
<script>

import NavLink from '../../components/NavbarHref.vue';
import {mapState} from "vuex";

export default {
  name: 'App',

  components: {
    NavLink,
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
</style>