<template>
  <div class="container-fluid pt-3">
    <div class="row d-flex justify-content-center">
      <SingleAlbum v-for="album in albums" :key="album.id" :cover="album.img" :title="album.name" :album-lenght="59" :author="album.author" :songs="14" :id="album.id"/>
    </div>
  </div>
</template>

<script>
import SingleAlbum from "@/components/SingleAlbum.vue";
import api from "@/services/api";

export default {
  components: {
    SingleAlbum
  },
  data() {
    return {
      albums: []
    };
  },
  mounted() {
    this.getAllTracks();
  },
  methods: {
    getAllTracks() {
      const userId = localStorage.getItem('user_id');
      api.get(`/api/User/GetAllUserLikedAlbums/${userId}`)
          .then(response => {
            this.albums = response.data.$values;
            return true;
          })
          .catch(error => {
            console.error('Błąd podczas pobierania ścieżek:', error);
          });
    }
  }
}
</script>

<style scoped>

</style>