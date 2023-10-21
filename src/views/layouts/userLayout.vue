<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <img src="../../assets/logo.png" class="logo me-3" alt="Opis obrazu">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse col-8" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink :to="'/'" :label="'Strona główna'"/>
          </li>
        </ul>
        <ul class="navbar-nav" v-if="isLogged">
          <li class="nav-item">
            <NavLink :to="'/utwory'" :label="'Utwory'"/>
          </li>
          <li class="nav-item">
            <NavLink :to="'/albumy'" :label="'Albumy'"/>
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
            <NavLink :to="'/konto'" :label="'Konto'"/>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click="logout">Wyloguj</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
  <div
      class="container-fluid col-12 fixed-bottom mb-5 rounded rounded-pill music-player-container bg-dark py-3 text-white">
    <div class="row text-center">
      <div class="container col-2 margin-left-radius">
        <img src="https://images.genius.com/88995b369b9b98d6a02eafa49be445ef.1000x1000x1.png" alt="Opis obrazu"
             class="shadow w-50 border border-white border-5 rounded rounded-circle">
      </div>
      <div class="container col-2 mt-3" style="margin-left: -100px">
        <p class="fw-bold">Kocham studia i matematykę</p>
        <p>Oskar Sukiennik</p>
      </div>
      <div class="container col-6 margin-left-radius mt-3">
        <button @click="prevTrack" class="btn btn-secondary rounded-circle">
          <i class="fas fa-backward"></i>
        </button>
        <button @click="togglePlayback" class="btn btn-primary mx-4 rounded-circle">
          <i v-if="isPlaying" class="fas fa-pause"></i>
          <i v-else class="fas fa-play"></i>
        </button>
        <button @click="nextTrack" class="btn btn-secondary rounded-circle">
          <i class="fas fa-forward"></i>
        </button>
        <div class="container col-12">
          <div class="row">
            <div class="container col-2 mt-4">{{ formatTime(currentTime) }}</div>
            <div class="container col-8">
              <input type="range" class="form-range mt-4" min="0" :max="currentTrack.duration" v-model="currentTime"
                     @input="handleTimeChange">
            </div>
            <div class="container col-2 mt-4" v-if="currentTrack.duration !== null" >{{ formatTime(currentTrack.duration) }}</div>
          </div>
        </div>
      </div>
      <div class="container col-2 mt-5 margin-left-radius">
        <div class="row">
          <div class="container col-3">
            <button @click="toggleMute" class="btn btn-secondary rounded-circle">
              <i v-if="isMuted" class="fas fa-volume-off"></i>
              <i v-else class="fas fa-volume-up"></i>
            </button>
          </div>
          <div class="container col-9" style="margin-top: 5px">
            <input type="range" class="form-range" min="0" max="100" v-model="volume">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import NavLink from '../../components/NavbarHref.vue';
import {mapState} from "vuex";

export default {
  name: 'App',

  components: {
    NavLink
  },

  data() {
    return {
      currentTrack: {
        title: "Nazwa Utworu",
        artist: "Nazwa Artysty",
        albumCover: "ścieżka/do/okładki.jpg",
        duration: null,
      },
      isPlaying: false,
      isMuted: false,
      currentTime: null,
      audio: new Audio(),
      volume: 50,
    };
  },

  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
    },
    play() {
      this.audio.play();
    },
    pause() {
      this.audio.pause();
    },
    togglePlayback() {
      if (this.audio.paused) {
        this.play();
        this.isPlaying = true;
      } else {
        this.pause();
        this.isPlaying = false;
      }
    },
    prevTrack() {
      // Tu można dodać logikę przejścia do poprzedniego utworu
    },
    nextTrack() {
      // Tu można dodać logikę przejścia do następnego utworu
    },
    toggleMute() {
      this.isMuted = !this.isMuted;
      this.audio.muted = this.isMuted;
    },
    updateCurrentTime() {
      this.currentTime = Math.floor(this.audio.currentTime);
      this.timeInterval = setInterval(() => {
        this.currentTime = Math.floor(this.audio.currentTime);
      }, 1000);
    },

    handleTimeUpdate() {
      if (this.audio.currentTime >= this.currentTrack.duration) {
        this.isPlaying = false;
        this.currentTime = 0;
        this.audio.pause();
      }
    },

    handleTimeChange() {
      this.audio.currentTime = this.currentTime;
    },

    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    },

  },

  watch: {
    volume(newVolume) {
      this.audio.volume = newVolume / 100;
    },
  },

  mounted() {
    this.audio.src = "http://127.0.0.1:8080/music/Travis_2.mp3";

    this.audio.addEventListener('loadedmetadata', () => {
      this.currentTrack.duration = Math.floor(this.audio.duration);
    });


    this.audio.addEventListener('timeupdate', this.handleTimeUpdate);

    this.audio.volume = this.volume / 100;

    this.updateCurrentTime();
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

.music-player-container {
  width: 1650px;
  height: 158px;
}

.margin-left-radius {
  margin-left: -50px
}
</style>