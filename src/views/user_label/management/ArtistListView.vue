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
                v-for="(artist,index) in artists" :userId="artist.id" :id="artist.userId" :key="artist.id" :name="artist.name" :place="index"
            />
            </tbody>
            <tbody>
            <h2 class="ms-5 ps-5">Admini</h2>
            <StudioAdminList
                v-for="(admin,index) in admins" :userId="admin.id" :id="admin.userId" :key="admin.id" :name="admin.studio.name" :place="index"
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
import StudioAdminList from "@/components/StudioAdminList.vue";
import api from "@/services/api";

export default {
  components: {
    SideBarManagmentLabel,
    ArtistElementList,
    StudioAdminList
  },
  data(){
    return {
      artists: [],
      admins: [],
    }
  },
  mounted() {
    this.getArtists();
    this.getAdmins();
  },
  methods:{
    getArtists(){
      api.get('/api/Studio/GetArtistByStudio').then(Response=>{
          this.artists = Response.data.$values
       // console.log(this.artists)
      })
    },
    getAdmins(){
      api.get('/api/Studio/GetAllAdmins').then(Response=>{
        this.admins = Response.data.$values
        console.log(this.admins)
      })
    }
  }
}
</script>

<style>

</style>