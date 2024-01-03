<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-2 p-0">
        <side-bar-managment-label/>
      </div>
      <div class="container col-9 mt-3">
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
            <ArtistElementList
                v-for="(artist,index) in artists" :key="artist.id" :name="artist.name" :place="index"
            />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarManagmentLabel from "@/components/SideBarManagmentLabel.vue";
import ArtistElementList from "@/components/ArtistElementList.vue";
import api from "@/services/api";

export default {
  components: {
    SideBarManagmentLabel,
    ArtistElementList,
  },
  data(){
    return {
      artists: []
    }
  },
  mounted() {
    this.getArtists();
  },
  methods:{
    getArtists(){
      api.get('/api/Studio/GetArtistByStudio').then(Response=>{
          this.artists = Response.data.$values
        console.log(this.artists)
      })
    }
  }
}
</script>

<style>

</style>