<template>
  <div class="container-fluid d-flex flex-column p-3 text-white side-bar-filter side-bar-border">
    <ul class="nav nav-pills flex-column mb-auto mt-4">
      <form>
        <li class="nav-item">
          <p class="head mt-3 fw-bold">CENA</p>
          <div class="d-flex justify-content-center row">
            <p class="mt-3 fw-bold">OD:
              <input type="text" id="price" name="price" required minlength="1" maxlength="4" size="1"
                     class="form-control"/>
              DO: <input type="text" id="price" name="price" required minlength="1" maxlength="4" size="1"
                         class="form-control"/>
            </p>
          </div>
        </li>

        <li class="nav-item mt-4">
          <select class="form-select mb-1" aria-label="Default select example">
            <option selected disabled>Wytwórnia</option>
            <option v-for="studio in studios" :key="studio.id">{{ studio.name }}</option>
          </select>
        </li>

        <li class="nav-item mt-4">
          <select class="form-select mb-1" aria-label="Default select example">
            <option selected disabled>Artysta</option>
            <option v-for="artist in artists" :key="artist.id">{{ artist.name }}</option>
          </select>
        </li>

        <submit-button type="submit" class="btn btn-warning mt-4 fw-bold" :label="'Filtruj produkty'"></submit-button>
      </form>
    </ul>

  </div>
</template>

<script>
import api from "@/services/api";
import SubmitButton from "@/components/SubmitButton.vue";

export default {
  components: {SubmitButton},
  data() {
    return {
      artists: [],
      studios: []
    };
  },
  mounted() {
    this.getAllArtist()
    this.getAllStudios()
  },
  methods: {
    getAllArtist() {
      api.get('/api/Artist/GetAllArtists').then(
          response => {
            this.artists = response.data.$values;
          }
      )
    },
    getAllStudios() {
      api.get('/api/Studio/GetAllStudios').then(
          response => {
            this.studios = response.data.$values;
          }
      )
    }
  }
}
</script>

<style>
.side-bar-filter {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
}

@media (max-width: 576px) {
  .side-bar-filter {
    min-height: 100%;
  }
}
</style>