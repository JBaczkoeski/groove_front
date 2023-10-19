<template>
  <div class="container-fluid mt-3">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col"></th>
        <th scope="col">Tytuł</th>
        <th scope="col">Album</th>
        <th scope="col">Data dodania</th>
        <th scope="col"><i class="fa-regular fa-clock fa-lg"></i></th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody v-if="tracks.length">
      <SongElementList v-for="track in tracks" :key="track.id" :place="track.id" :cover="track.img" :title="track.name" :album="track.album" :addDate="'09-09-2023'" :time="'23:19'"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import SongElementList from "@/components/SongElementList.vue";
import axios from "axios";

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
      axios.get('/api/Track/GetAllTracks')
          .then(response => {
            this.tracks = response.data;
            console.log(this.tracks);
          })
          .catch(error => {
            console.error('Błąd podczas pobierania ścieżek:', error);
          });
    }
  }
}
</script>
