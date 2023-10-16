<template>
  <div class="container-fluid mt-3">
    <div class="container">
      <div class="row">
        <div class="containder col-4 d-flex justify-content-start">
          <img src="https://glamrap.pl/wp-content/uploads/2021/03/sentino-czary-mary.jpg" class="w-75">
        </div>
        <div class="container col-8">
          <div class="container mb-5">
            <h1>Sentino Czary mary</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div class="container fw-bold mt-5">
            <p>Wykonwaca: Sentino * 14 utworów, 48 min 54sek </p>
          </div>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col"></th>
        <th scope="col">Tytuł</th>
        <th scope="col">Album</th>
        <th scope="col">Data dodania</th>
        <th scope="col"><i class="fa-regular fa-clock fa-lg"></i></th>
      </tr>
      </thead>
      <tbody v-if="tracks.length">
      <SongElementList v-for="track in tracks" :key="track.id" :place="track.id" :cover="track.img" :title="track.name"
                       :album="track.album" :addDate="'09-09-2023'" :time="'23:19'"/>
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