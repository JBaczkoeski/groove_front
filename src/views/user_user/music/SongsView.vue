<template>
  <div class="container-fluid mt-3">
    <div class="table-responsive">
      <table class="table table-hover table-dark-song">
        <thead>
        <tr class="text-center ">
          <th scope="col">#</th>
          <th scope="col"></th>
          <th scope="col">Tytuł</th>
          <th scope="col">Album</th>
          <th scope="col">Data dodania</th>
          <th scope="col"><i class="fa-regular fa-clock fa-lg" style="color: #CCCCCC"></i></th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody v-if="tracks">
        <SongElementList v-for="(track, index) in tracks" :key="track.id"
                         :track="'http://127.0.0.1:8080/music/Travis_2.mp3'" :id="track.id" :place="index"
                         :cover="track.img" :title="track.name" :album="track.album" :addDate="'09-09-2023'"
                         :time="'23:19'"/>
        </tbody>
      </table>
    </div>
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
      api.get('/api/Track/GetAllTracks')
          .then(response => {
            this.tracks = response.data.value.$values;
          })
          .catch(error => {
            console.error('Błąd podczas pobierania ścieżek:', error);
          });
    }
  }
}
</script>
