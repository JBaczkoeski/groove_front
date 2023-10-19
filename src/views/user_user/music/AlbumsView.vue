<template>
  <div class="container pt-3">
    <div class="row d-flex justify-content-center">
      <SingleAlbum v-for="album in albums" :key="album.id" :cover="'https://glamrap.pl/wp-content/uploads/2021/03/sentino-czary-mary.jpg'" :title="album.name" :album-lenght="59" :author="'Oskar Sukiennik'" :songs="14" :id="album.id"/>
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
      api.get('/api/Album/GetAllAlbums')
          .then(response => {
            this.albums = response.data.$values;
            console.log(this.albums);
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