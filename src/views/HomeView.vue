<template>
  <div class="baner mt-4 d-flex justify-content-center  shadow shadow-lg">
    <img src="../assets/baner.jpg" alt="baner" class="banner">
  </div>

  <hr class="divider">

  <div class="row text-center">
    <div class="col-6 pt-5">

      <h2> Prosty i intuicyjny odtwarzacz</h2>
      <p class="lead">
        Nasza aplikacja posiada prosty i intuicyjny odtwarzacz.
      </p>
    </div>
    <div class="col-5 shadow me-3">
      <img class="right-image"
           src="../assets/playerPhoto.png">
    </div>
  </div>

  <hr class="divider">

  <div class="row text-center mt-5">
    <div class="col-5 shadow ms-5">
      <img class="left-image"
           src="../assets/playerPhoto.png">
    </div>
    <div class="col-6">

      <h2> Ogromna baza albumów</h2>
      <p class="lead">
        Nasza aplikacja posiada ogromną bazę albumów.
      </p>
    </div>

  </div>

  <hr class="divider">

</template>

<script>

export default {
  name: 'HomePage',
}
</script>

<style>
.right-image{
  width: 600px;
  height: 300px;
}
.banner{
  width: 1500px;
}
.left-image {
  width: 600px;
  height: 300px;
}


</style>