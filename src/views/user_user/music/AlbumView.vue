<template>
  <div class="container-fluid mt-3">
    <div class="container">
      <div class="row">
        <div class="containder col-4 d-flex justify-content-start">
          <img :src="album.cover" class="w-75">
        </div>
        <div class="container col-8">
          <div class="container mb-5">
            <h1>{{ album.name}}</h1>
            <p>{{ album.desc }}</p>
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
      <tbody v-if="tracks">
      <SongElementList :place="tracks.id" :cover="tracks.img" :title="tracks.name"
                       :album="tracks.album" :addDate="'09-09-2023'" :time="'23:19'"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import SongElementList from "@/components/SongElementList.vue";
import api from "@/services/api";

export default {
  components: {
    SongElementList
  },
  data() {
    return {
      album: [],
      tracks: [],
    };
  },
  created() {
    const id = this.$route.params.id;
    api.get(`/api/Album/GetAlbymById/${id}`)
        .then(response => {
          this.album = response.data;
          console.log(this.album);
        })
        .catch(error => {
          console.error('Błąd podczas pobierania ścieżek:', error);
        });
  },
  // mounted() {
  //   this.getAllTracks();
  // },
  methods: {}
}
</script>