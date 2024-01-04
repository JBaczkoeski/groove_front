<template>
  <div>
    <div class="row pt-3" style="margin-top: -16px">
      <div class="container col-10 col-sm-10">
        <h1 class="text-center mt-4 mb-4 ">Sklep</h1>
        <p class="mt-2 mb-4">
          <button @click="showAlbums()" class="btn submit-button-bg btn-lg mt-2">Albumy</button>
          <button @click="showTracks()" class="btn submit-button-bg btn-lg ms-2 mt-2">Utwory</button>
        </p>
        <div v-if="visible === 'albums'" class="row d-flex justify-content-center top-border pt-5">
          <PuchasedSingleAlbum v-for="album in albums" :key="album.id" :cover="album.img" :title="album.name"
                           :album-lenght="59" :price="album.price"
                           :author="album.author" :songs="14" :id="album.id"/>
        </div>
        <div v-else class="row d-flex justify-content-center border-top border-3 pt-5">
          <PuchasedSingleTrack v-for="track in tracks" :key="track.id" :cover="track.img" :title="track.name"
                           :price="track.price"
                           :author="track.author" :id="track.id"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PuchasedSingleTrack from "@/components/PuchasedSingleTrack.vue";
import PuchasedSingleAlbum from "@/components/PuchasedSingleAlbum.vue";
import api from "@/services/api";

export default {
  components: {
    PuchasedSingleAlbum,
    PuchasedSingleTrack
  },
  data() {
    return {
      albums: [],
      tracks: [],
      visible: 'albums',
    };
  },
  mounted() {
    this.getAllAlbums();
    this.getAllTracks();
  },
  methods: {
    getAllAlbums() {
      api.get('/api/User/GetPurchasedAlbumsByUser')
          .then(response => {
            this.albums = response.data.$values;
            return true;
          })
          .catch(error => {
            console.error('Błąd podczas pobierania ścieżek:', error);
          });
    },
    getAllTracks() {
      api.get('/api/User/GetPurchasedTracksByUser').then(
          response=>{
            this.tracks = response.data.$values
          }
      ).catch(error => {
        console.error('Błąd podczas pobierania ścieżek:', error);
      });
    },
    showAlbums() {
      this.visible = 'albums'
    },
    showTracks() {
      this.visible = 'tracks'
    },
    sortItems(event) {
      const option = event.target.value;
      if (this.visible === 'albums') {
        if (option === '1') {
          this.albums.sort((a, b) => a.price - b.price);
        } else if (option === '2') {
          this.albums.sort((a, b) => b.price - a.price);
        }
      } else if (this.visible === 'tracks') {
        if (option === '1') {
          this.tracks.sort((a, b) => a.price - b.price);
        } else if (option === '2') {
          this.tracks.sort((a, b) => b.price - a.price);
        }
      }
    }

  }
}
</script>