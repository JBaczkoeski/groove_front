<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-2 p-0">
        <side-bar style="min-height: 150vh"/>
      </div>
      <div class="container col-12 col-sm-9 pt-3">
        <div class="row d-flex justify-content-center">
          <SingleAlbumArtist v-for="album in albums" :key="album.id"
                       :cover="album.img"
                       :title="album.name" :album-lenght="59" :author="'Oskar'" :songs="14" :id="1"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from '@/components/SideBarArtist.vue';
import SingleAlbumArtist from "@/components/SingleAlbumArtist.vue";
import api from "@/services/api";

export default {
  components: {
    sideBar,
    SingleAlbumArtist
  },
  data() {
    return {
      albums: [],
    };
  },
  mounted() {
    this.getAlbums()
  },
  methods: {
    // getAllTracks() {
    //   api.get('/api/Album/GetAllAlbums')
    //       .then(response => {
    //         this.albums = response.data.$values;
    //         return true;
    //       })
    //       .catch(error => {
    //         console.error('Błąd podczas pobierania ścieżek:', error);
    //       });
    // },

    getAlbums(){
      api.get(`/api/Artist/GetAlbumByUserId`)
          .then(response => {
            this.albums = response.data.$values;
            console.log(this.albums)
            return true;
          })
          .catch(error => {
            console.error('Błąd podczas pobierania Id albumu', error);
          });
    },
  }
}
</script>
