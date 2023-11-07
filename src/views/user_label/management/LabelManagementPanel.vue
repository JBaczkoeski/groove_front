<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-2 p-0">
        <side-bar-label/>
      </div>
      <div class="container col-12 col-sm-10 mt-3">
        <div class="row d-flex justify-content-center">
          <div class="container col-3 mx-5 rounded-5 border border-3 border-dark shadow-lg text-center mb-5 py-2">
            <h3 class="border border-3 rounded-4 p-3 border-dark border">Ilość albumów:</h3>
            <p class="fw-bold h2 my-4">
              3
            </p>
          </div>
          <div class="container col-3 mx-5 rounded-5 border border-3 border-dark shadow-lg text-center mb-5 py-2">
            <h3 class="border border-3 rounded-4 p-3 border-dark border">Ilość artystów:</h3>
            <p class="fw-bold h2 my-4">
              7
            </p>
          </div>
          <div class="container col-3 mx-5 rounded-5 border border-3 border-dark shadow-lg text-center mb-5 py-2">
            <h3 class="border border-3 rounded-4 p-3 border-dark border">Ilość aplikacji artystów:</h3>
            <p class="fw-bold h2 my-4">
              9
            </p>
          </div>
          <div class="container col-3 mx-5 rounded-5 border border-3 border-dark shadow-lg text-center mb-5 py-2">
            <h3 class="border border-3 rounded-4 p-3 border-dark border">Ilość zakupionych albumów:</h3>
            <p class="fw-bold h2 my-4">
              777
            </p>
          </div>
          <div class="container col-3 mx-5 rounded-5 border border-3 border-dark shadow-lg text-center mb-5 py-2">
            <h3 class="border border-3 rounded-4 p-3 border-dark border">Najlepszy artysta:</h3>
            <p class="fw-bold h2 mt-5">
              Oskar Sukiennik
            </p>
          </div>
          <div class="container col-3 mx-5 rounded-5 border border-3 border-dark shadow-lg text-center mb-5 py-2">
            <h3 class="border border-3 rounded-4 p-3 border-dark border">Najlepiej sprzedający się album:</h3>
            <p class="fw-bold h2 mt-3">
              Kocham programowanie i matematyke
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarLabel from '@/components/SideBarManagmentLabel.vue';

export default {
  components: {
    SideBarLabel,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

p {
  font-size: 20px;
}

h3 {
  font-weight: bold;
  background-color: #90b381;
}
</style>