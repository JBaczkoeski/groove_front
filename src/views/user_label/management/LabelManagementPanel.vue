<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-2 p-0">
        <side-bar-label/>
      </div>
      <div class="container col-12 col-sm-10 mt-3">
        <div class="row d-flex justify-content-center">
          <div class="container col-3 mx-5 rounded-5 border border-3 text-center mb-5 py-2">
            <h3 class="border border-3 rounded-4 p-3 border block-header">Ilość albumów:</h3>
            <p class="fw-bold h2 my-4">
              3
            </p>
          </div>
          <div class="container col-3 mx-5 rounded-5 border border-3 text-center mb-5 py-2">
            <h3 class="border border-3 rounded-4 p-3 border block-header">Ilość artystów:</h3>
            <p class="fw-bold h2 my-4">
              7
            </p>
          </div>
          <div class="container col-3 mx-5 rounded-5 border border-3 text-center mb-5 py-2">
            <h3 class="border border-3 rounded-4 p-3 border block-header">Ilość aplikacji artystów:</h3>
            <p class="fw-bold h2 my-4">
              9
            </p>
          </div>
          <div class="table-responsive">
            <table class="table table-dark-song">
              <thead>
              <tr class="text-center">
                <th scope="col">#</th>
                <th scope="col">Imię</th>
                <th scope="col"></th>
              </tr>

              </thead>
              <tbody>
              <ArtistApllyElementList
                  v-for="(artist,index) in artists" :key="artist.id" :id="artist.id" :name="artist.name" :artistId="artist.userId" :place="index"
              />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarLabel from '@/components/SideBarManagmentLabel.vue';
import api from "@/services/api";
import ArtistApllyElementList from "@/components/ArtistApllyElementList.vue";

export default {
  components: {
    ArtistApllyElementList,
    SideBarLabel,
  },
  data() {
    return {
      requests: [],
      artists: [],
    };
  },
  mounted () {
    this.applySum();
    this.getAllArtist()
  },
  methods: {
    applySum() {
      api.get ('/api/Studio/ShowAllRequests')
          .then (response => {
            this.requests = response.data.$values;
          })
          .catch(error => {
            console.error('Błąd podczas pobierania zapytan:', error);
          });
    },
    getAllArtist() {
      api.get(`/api/Studio/GetArtistByStudio`).then(
          response => {
            this.artists = response.data.$values
            console.log(this.artists)
          }
      )
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

.block-header {
  font-weight: bold;
  background-color: #001F3F;
}
</style>