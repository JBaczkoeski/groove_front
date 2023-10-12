<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Logo :(</router-link>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse col-8" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Strona główna</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/features" class="nav-link">Funkcje</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/pricing" class="nav-link">Cennik</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
            >Wyłączone</a
            >
          </li>
        </ul>
      </div>
      <div class="container col-3 d-flex justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/login" class="nav-link me-2">Logowanie</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Rejestracja</router-link>
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
export default {
  name: 'App',
}
</script>
