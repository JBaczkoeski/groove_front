<template>
  <nav class="navbar navbar-expand-lg dark">
    <div class="container-fluid nav-dark">
      <img src="../../assets/logo.png" class="logo" alt="Opis obrazu">
      <p class="h3 me-2 mt-2" style="margin-top: 10px; color: #CCCCCC !important;">Groove Music Label</p>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse col-6" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink :to="'/wytwornia'" :label="'Panel główny'"/>
          </li>
          <li class="nav-item">
            <NavLink :to="'/wytwornia/panel'" :label="'Zarządzanie'"/>
          </li>
        </ul>
      </div>
      <div class="container col-3 d-flex justify-content-end" v-if="isLogged">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink :to="'/wytwornia/konto'" :label="'Konto'"/>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click="logout" style="color: #CCCCCC">Wyloguj</button>
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
  width: px;
}
</style>