<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <img src="./assets/logo.png" class="logo me-3" alt="Opis obrazu">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse col-8" id="navbarNav">
        <ul class="navbar-nav" v-if="!isLogged">
          <li class="nav-item">
            <NavLink :to="'/'" :label="'Strona główna'"/>
          </li>
        </ul>
        <ul class="navbar-nav" v-if="isLogged">
          <li class="nav-item">
            <NavLink :to="'/utwory'" :label="'Utwory'"/>
          </li>
          <li class="nav-item">
            <NavLink :to="'/'" :label="'COŚ'"/>
          </li>
          <li class="nav-item">
            <NavLink :to="'/'" :label="'COŚ'"/>
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
      <div class="container col-3 d-flex justify-content-end" v-if="isLogged">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink :to="'/utwory'" :label="'Konto'"/>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click="logout">Wyloguj</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex';


import NavLink from './components/NavbarHref.vue';

export default {
  name: 'App',

  components: {
    NavLink
  },

  methods:{
    logout(){
      this.$store.commit('logout')
    }

  },

  computed: {
    ...mapState({
      isLogged: state => state.auth.isLogged,
      token: state => state.auth.token
    })
  },
}
</script>
<style>
 .logo{
    width: 60px;
 }
</style>