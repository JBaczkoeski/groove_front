<template>
  <div class="container-fluid d-flex flex-column p-3 text-white side-bar-filter">
    <ul class="nav nav-pills flex-column mb-auto mt-4">
      <li class="nav-item d-flex justify-content-center">
        <a class="nav-link text-white mt-3 mb-2 fw-bold" aria-current="page">
          <i class="fa-solid fa-filter fa-2xl" style="color: #ffffff;"></i>
          Filtruj
        </a>
      </li>

      <li class="nav-item">
        <p class="head mt-3 fw-bold">CENA</p>
        <div class="d-flex justify-content-center">
          <p class="mt-3 fw-bold">OD: <input type="text" id="price" name="price" required minlength="1" maxlength="4"
                                             size="1" class=""/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            DO: <input type="text" id="price" name="price" required minlength="1" maxlength="4" size="1" class=""/>
          </p>
        </div>
      </li>

      <li class="nav-item mt-4">
        <select class="form-select mb-1" aria-label="Default select example">
          <option selected disabled>Wytwórnia</option>
          <option v-for="studio in studios" :key="studio.id">{{studio.name}}</option>
        </select>
      </li>

      <li class="nav-item mt-4">
        <select class="form-select mb-1" aria-label="Default select example">
          <option selected disabled>Artysta</option>
          <option v-for="artist in artists" :key="artist.id">{{artist.name}}</option>
        </select>
      </li>

      <button type="button" class="btn btn-warning mt-4 fw-bold">Filtruj produkty</button>
    </ul>

  </div>
</template>

<script>
import api from "@/services/api";

export default {
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
  height: 100%;
  border-right: 3px solid #CCCCCC;
}

@media (max-width: 576px) {
  .side-bar-filter {
    min-height: 50vh;
  }
}
</style>