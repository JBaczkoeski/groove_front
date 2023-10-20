<template>
  <div class="container-fluid mt-3">
    <div class="container my-5">
      <div class="row">
        <div class="containder col-4 d-flex justify-content-start">
          <img :src="track.img" class="w-75 shadow" alt="okładka albumu">
        </div>
        <div class="container col-8">
          <div class="container mb-5">
            <h1>{{ track.name }}</h1>
            <p>{{ track.desc }}</p>
          </div>
          <div class="container fw-bold mt-5">
            <p>Wykonwaca: {{ track.artist ?? 'Brak' }} * 14 utworów, 48 min 54sek </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  data() {
    return {
      track: [],
    };
  },
  created() {
    const id = this.$route.params.id;

    api.get(`/api/Track/GetTrackById/${id}`)
        .then(response => {
          this.track = response.data;
          console.log(this.track);
        })
        .catch(error => {
          console.error('Błąd podczas pobierania ścieżek:', error);
        });
  },
}
</script>