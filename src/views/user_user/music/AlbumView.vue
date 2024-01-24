<template>
  <div class="container-fluid mt-3">
    <div class="container my-5">
      <div class="row">
        <div class="containder col-12 col-sm-4 ms-sm-0 ms-4 d-flex justify-content-start">
          <img :src="album.img" class="w-75 shadow img-fluid" alt="okładka albumu">
        </div>
        <div class="container col-5">
          <div class="container mb-5">
            <h1>{{ album.name }}</h1>
            <p>{{ album.desc }}</p>
          </div>
          <div class="container fw-bold mt-5">
            <p>Wykonwaca: {{ album.artist ?? 'Brak' }} * 14 utworów, 48 min 54sek </p>
            <p v-if="this.isLiked === false">
              <button class="btn btn-dark" @click="likedbyuser">Lubie to! <i class="fa-regular fa-thumbs-up fa-2xl icon"></i></button>
            </p>
            <p v-else>
              <button class="btn btn-dark" @click="disLikeByUser">Nie lubie! <i class="fa-regular fa-thumbs-down fa-2xl icon"></i></button>
            </p>
          </div>
        </div>
        <div class="container col-3 pt-5 text-center mt-4">
          <p class="h2 mb-3">Cena: 49.99 zł</p>
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-dark-song">
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
      isLiked: false,
    };
  },
  created() {
    const id = this.$route.params.id;

    api.get(`/api/Album/GetAlbymById/${id}`)
        .then(response => {
          console.log(response.data)
          this.album = response.data;
          this.tracks = response.data.tracks.$values
          this.liked = response.data.likedByUsers
          console.log(this.liked)
        })
        .catch(error => {
          console.error('Błąd podczas pobierania ścieżek:', error);
        });
  },
  methods: {
    likedbyuser() {
      const albumId = this.$route.params.id;

      api.post(`/api/User/LikeAlbum/${albumId}`).then(response => {
        if (response.status === 200) {
          this.isLiked = true;
        }
        console.log(this.isLiked)
      })
          .catch(error => {
            console.error('Błąd:',error)
          })
    },
    disLikeByUser() {
      const albumId = this.$route.params.id;

      api.post(`/api/User/DislikeAlbum/${albumId}`).then(response => {
        if (response.status === 200) {
          this.isLiked = false;
        }
        console.log(this.isLiked)

      })
          .catch(error => {
            console.error('Błąd:',error)
          })
    }
  }


}
</script>