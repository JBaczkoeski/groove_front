<template>
  <div class="container-fluid mt-3">
    <div class="container my-5">
      <div class="row">
        <div class="containder col-12 col-sm-4 ms-sm-0 ms-4 d-flex justify-content-start">
          <img :src="album.img" class="w-75 shadow img-fluid" alt="okładka albumu">
        </div>
        <div class="container col-8">
          <div class="container mb-5">
            <h1>{{ album.name }}</h1>
            <p>{{ album.desc }}</p>
          </div>
          <div class="container fw-bold mt-5">
            <p>Wykonwaca: {{ album.artist ?? 'Brak' }} * 14 utworów, 48 min 54sek </p>
          </div>
        </div>
      </div>
    </div>
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
      <SongElementList v-for="(track, index) in tracks" :key="track.id"
                       :place="index" :cover="track.img" :title="track.name"
                       :album="track.album" :addDate="'09-09-2023'" :time="'23:19'"/>
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

          const albumId = response.data.id;

          api.get(`/api/Track/GetTrackByAlbumId/${albumId}`)
              .then(response => {
                this.tracks = response.data.$values;
                console.log(this.tracks);
              })
              .catch(error => {
                console.error('Błąd podczas pobierania ścieżek:', error);
              });

        })
        .catch(error => {
          console.error('Błąd podczas pobierania ścieżek:', error);
        });



  }
}
</script>