<template>
  <div class="container-fluid mt-3">
    <table class="table">
      <thead>
      <tr class="text-center">
        <th scope="col">#</th>
        <th scope="col"></th>
        <th scope="col">Tytuł</th>
        <th scope="col">Album</th>
        <th scope="col">Data dodania</th>
        <th scope="col"><i class="fa-regular fa-clock fa-lg"></i></th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody v-if="tracks">
      <SongElementList v-for="(track, index) in tracks" :key="track.id" :id="track.id" :place="index" :cover="track.img" :title="track.name" :album="track.album" :addDate="'09-09-2023'" :time="'23:19'"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import SongElementList from "@/components/SongElementList.vue";
// import axios from "axios";
import api from "@/services/api";

export default {
  components: {
    SongElementList
  },
  data() {
    return {
      tracks: []
    };
  },
  mounted() {
    this.getAllTracks();
  },
  methods: {
    getAllTracks() {
      api.get('/api/Track/GetAllTracks' )
          .then(response => {
            this.tracks = response.data.$values;
          })
          .catch(error => {
            console.error('Błąd podczas pobierania ścieżek:', error);
          });
    }
  }
}
</script>
