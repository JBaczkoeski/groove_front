<template>
  <div v-if="showPlayer"
       class="container col-12 fixed-bottom mb-5 rounded rounded-pill music-player-container bg-dark py-3 text-white">
    <div class="row text-center">
      <div class="container col-2 margin-left-radius">
        <img :src="coverAlbum" alt="Okładka"
             class="shadow w-75 border border-white border-5 rounded rounded-circle">
      </div>
      <div class="container col-2 mt-3" style="margin-left: -100px">
        <p class="fw-bold">{{ title }}</p>
        <p>{{ currentTrack.artist }}</p>
      </div>
      <div class="container col-1 liked mt-5">
        <div class="row">
          <div class="container" style="margin-top: -50px">
            <button @click="hidePlayer" class="btn btn-secondary rounded-circle">
              <i class="fa-regular fa-eye-slash icon"></i>
            </button>
          </div>
        </div>
        <div class="container mt-3">
          <button @click="toggleLike" class="btn btn-secondary rounded-circle">
            <i v-if="isLiked" class="fas fa-heart icon"></i>
            <i v-else class="far fa-heart icon"></i>
          </button>
        </div>
      </div>
      <div class="container col-6 margin-left-radius mt-3">
        <button @click="prevTrack" class="btn btn-secondary rounded-circle">
          <i class="fas fa-backward"></i>
        </button>
        <button @click="togglePlayback" class="btn btn-primary mx-4 rounded-circle">
          <i v-if="isPlaying" class="fas fa-pause icon"></i>
          <i v-else class="fas fa-play icon"></i>
        </button>
        <button @click="nextTrack" class="btn btn-secondary rounded-circle">
          <i class="fas fa-forward icon"></i>
        </button>
        <div class="container col-12">
          <div class="row">
            <div class="container col-2 mt-4">{{ formatTime(currentTime) }}</div>
            <div class="container col-8">
              <input type="range" class="form-range mt-4" min="0" :max="currentTrack.duration" v-model="currentTime"
                     @input="handleTimeChange">
            </div>
            <div class="container col-2 mt-4" v-if="currentTrack.duration !== null">
              {{ formatTime(currentTrack.duration) }}
            </div>
          </div>
        </div>
      </div>
      <div class="container col-2 mt-5 margin-left-radius">
        <div class="row">
          <div class="container col-3">
            <button @click="toggleMute" class="btn btn-secondary rounded-circle">
              <i v-if="isMuted" class="fas fa-volume-off icon"></i>
              <i v-else class="fas fa-volume-up icon"></i>
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
import {mapState} from "vuex";
import store from "@/store";
import api from "@/services/api";

export default {
  data() {
    return {
      currentTrack: {
        title: "",
        artist: "Oskar sukiennik",
        albumCover: "",
        duration: null,
      },
      isPlaying: false,
      isMuted: false,
      currentTime: null,
      audio: new Audio(),
      volume: 50,
      isLiked: false,
    };
  },

  methods: {
    play() {
      this.audio.play();
    },
    async togglePlayback() {
      if (this.audio.paused) {
        if (this.audio.src !== this.track) {
          this.audio.pause();
          this.audio.src = this.track;
          await this.audio.load();
        }
        await this.audio.play();
        this.isPlaying = true;
      } else {
        await this.audio.pause();
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
        store.dispatch('player/togglePlayer', false);
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

    toggleLike() {
      this.isLiked = !this.isLiked;
      if (this.isLiked) {
        const trackId = this.trackId;
        api.post(`/api/User/LikeTrack/${trackId}`)
        console.log('Utwór polubiony!');
      } else {
        const trackId = this.trackId;
        api.post(`/api/User/DislikeTrack/${trackId}`)
        console.log('Utwór niepolubiony.');
      }
    },

    hidePlayer() {
      store.dispatch('player/togglePlayer', false);
    },

    async checkIfLiked() {
      try {
        const trackId = this.trackId;
        const response = await api.get(`/api/User/CheckIfLiked/${trackId}`);
        this.isLiked = response.data.isLiked; // Załóżmy, że odpowiedź API zwraca isLiked
        console.log('Stan polubienia utworu:', this.isLiked);
      } catch (error) {
        console.error('Błąd podczas pobierania stanu polubienia:', error);
      }
    },
  },

  mounted() {
    this.audio.addEventListener('loadedmetadata', () => {
      this.currentTrack.duration = Math.floor(this.audio.duration);
    });

    this.audio.addEventListener('timeupdate', this.handleTimeUpdate);

    this.audio.volume = this.volume / 100;

    this.updateCurrentTime();

    this.checkIfLiked();
  },

  computed: {
    ...mapState('player', ['showPlayer', 'track', 'title', 'coverAlbum', 'trackId'],'auth', ['token']),

  },

  watch: {
    track(showPlayer){
      if(showPlayer){
        this.audio.src = this.track;
      }
    },
    volume(newVolume) {
      this.audio.volume = newVolume / 100;
    },
  },
}
</script>

<style>
.music-player-container {
  height: 158px;
}

.margin-left-radius {
  margin-left: -30px;
  margin-top: -10px;

}

.liked {
  margin-left: -80px;
  margin-right: -15px;
}
</style>