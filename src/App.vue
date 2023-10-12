<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Logo :(</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse col-8" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink :to="'/'" :label="'Strona główna'"/>
          </li>
          <li class="nav-item">
            <NavLink :to="'/'" :label="'Funkcje'"/>
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
            <NavLink :to="'/user'" :label="'Konto'"/>
          </li>
          <li class="nav-item">
            <NavLink :to="'/logout'" :label="'Wyloguj'"/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="mb-5">
    <router-view></router-view>
  </div>
</template>

<script>
import NavLink from './components/NavbarHref.vue';
export default {
  components: {
    NavLink
  },
  name: 'App',
  data(){
    return {
      isLogged: false
    }
  }
}
</script>
