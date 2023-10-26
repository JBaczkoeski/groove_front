<template>
  <div class="container pt-3">
    <div class="container col-12">
      <h1 class="text-center mt-4 mb-4">Sklep</h1>
      <div class="col-3">
        <select class="form-select" aria-label="Default select example">
          <option selected>Sortuj</option>
          <option value="1">Od najtańszych</option>
          <option value="2">Od najdroższych</option>
          <option value="3">Od najdłuższych</option>
          <option value="4">Od najkrótszych</option>
        </select>
      </div>
    </div>
    <hr class="hr">

    <div class="row d-flex justify-content-center">
      <ShopSingleAlbum v-for="album in albums" :key="album.id" :cover="album.img" :title="album.name" :album-lenght="59"
                       :author="album.author" :songs="14" :id="album.id"/>
    </div>
  </div>
</template>

<script>

import ShopSingleAlbum from "@/components/ShopSingleAlbum.vue";
import api from "@/services/api";

export default {
  components: {
    ShopSingleAlbum
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
            return true;
          })
          .catch(error => {
            console.error('Błąd podczas pobierania ścieżek:', error);
          });
    }
  }
}
</script>

<style>
.hr {
  position: relative;
  height: 1px;
  border: 1px solid black;
}
</style>