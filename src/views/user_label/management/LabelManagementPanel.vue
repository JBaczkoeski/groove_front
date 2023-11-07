<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-2 p-0">
        <side-bar-label/>
      </div>
      <div class="container col-9 mt-3">
        <div class="row">
          <div class="container col-3 rounded-5 border border-3 shadow-lg text-center mb-5">
            <h3 class="border border-0 rounded-4 mt-2 p-2">Ilość albumów:</h3>
            <p class="fw-bold h1">
              3
            </p>
          </div>

          <div class="container col-3 rounded-5 border border-3 shadow-lg text-center mb-5">
            <h3 class="border border-0 rounded-4 mt-2 p-2">Ilość artystów:</h3>
            <p>
              7
            </p>
          </div>
        </div>

        <div class="row">
          <div class="container col-3 rounded-5 border border-3 shadow-lg text-center mb-5">
            <h3 class="border border-0 rounded-4 mt-2 p-2">Ilość aplikacji artystów:</h3>
            <p>
              9
            </p>
          </div>

          <div class="container col-3 rounded-5 border border-3 shadow-lg text-center mb-5">
            <h3 class="border border-0 rounded-4 mt-2 p-2">Ilość zakupionych albumów:</h3>
            <p>
              777
            </p>
          </div>
        </div>

        <div class="row">
          <div class="container col-3 rounded-5 border border-3 shadow-lg text-center mb-5">
            <h3 class="border border-0 rounded-4 mt-2 p-2">Najlepszy artysta:</h3>
            <p>
              Oskar Sukiennik
            </p>
          </div>

          <div class="container col-3 rounded-5 border border-3 shadow-lg text-center mb-5">
            <h3 class="border border-0 rounded-4 mt-2 p-2">Najlepiej sprzedający się album:</h3>
            <p>
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

p{
  font-size: 20px;
}

h3{
  font-weight: bold;
  background-color: #90b381;
}
</style>