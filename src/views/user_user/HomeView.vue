<template>
  <div class="container-fluid mt-5">
    <div class="row justify-content-center">
      <div class="col-12 text-center mb-5">
        <img src="@/assets/baner.jpg" alt="baner" class="img-fluid shadow-lg">
      </div>
    </div>

    <div class="row text-center shadow py-3">
      <div class="col-12 col-sm-6 pt-5">
        <h2> Prosty i intuicyjny odtwarzacz</h2>
        <p class="lead">
          Nasza aplikacja posiada prosty i intuicyjny odtwarzacz.
        </p>
      </div>
      <div class="col-12 col-sm-5">
        <img class="img-fluid" src="@/assets/playerPhoto.png" alt="player">
      </div>
    </div>

    <div class="row text-center mt-5">
      <div class="col-12 col-sm-6">
        <h2> Ogromna baza albumów</h2>
        <p class="lead">
          Nasza aplikacja posiada ogromną bazę albumów.
        </p>
      </div>
      <div class="col-12 col-sm-5 shadow">
        <img class="img-fluid" src="@/assets/playerPhoto.png" alt="Zdjęcie promocyjne">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.container-fluid {
  padding: 0;
}

.row {
  margin-right: 0;
  margin-left: 0;
}
</style>