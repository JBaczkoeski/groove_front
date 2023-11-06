<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-2 p-0">
        <side-bar/>
      </div>
      <div class="container col-9 mt-3">
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
                           :track="'http://127.0.0.1:8080/music/Travis_2.mp3'" :id="track.id" :place="index"
                           :cover="track.img" :title="track.name" :album="track.album" :addDate="'09-09-2023'"
                           :time="'23:19'"/>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBarArtist.vue'
import SongElementList from "@/components/ArtistSongElementList.vue";
import api from "@/services/api";

export default {
  components: {
    SideBar,
    SongElementList
  },
  data(){
    return {
      tracks: []
    }
  },
  mounted() {
    this.getAllTracks();
  },
  methods: {
    getAllTracks() {
      const UserId = 4;
      api.get(`/api/Track/GetTrackByArtistId/${UserId}`)
          .then(response => {
            this.tracks = response.data.$values;
          })
          .catch(error => {
            console.error('Błąd podczas pobierania ścieżek:', error);
          });
    }
  }
}
</script>
