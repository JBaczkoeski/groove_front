<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <img src="../../assets/logo.png" class="logo" alt="Opis obrazu">
      <p class="navbar-brand brand">Groove Music</p>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse col-6" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink :to="'/admin/zarzadznie'" :label="'Zarządzanie serwisem'"/>
          </li>
        </ul>
      </div>
      <div class="container col-3 d-flex justify-content-end" v-if="isLogged">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink :to="'/konto'" :label="'Konto'"/>
          </li>
          <li class="nav-item">
            <button class="nav-link dark" @click="logout">Wyloguj</button>
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