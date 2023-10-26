<template>
  <div class="row">
    <side-bar class="container col-2"/>
    <div class="container col-9 pt-3">
      <div class="row d-flex justify-content-center">
        <SingleAlbum v-for="i in 6" :key ="i" :cover="'https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'" :title="'Drzewo'" :album-lenght="59" :author="'Oskar'" :songs="14" :id="1"/>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from '@/components/SideBarArtist.vue';
import SingleAlbum from "@/components/SingleAlbum.vue";
import api from "@/services/api";
export default {
  components: {
    sideBar,
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

</style>