<template>
  <div class="baner mt-4 d-flex justify-content-center">
    <img src="../../assets/baner.jpg" alt="baner" class="banner">
  </div>

  <div class="row text-center mt-3 shadow py-3">
    <div class="col-6 pt-5">

      <h2> Prosty i intuicyjny odtwarzacz</h2>
      <p class="lead">
        Nasza aplikacja posiada prosty i intuicyjny odtwarzacz.
      </p>
    </div>
    <div class="col-5 me-3">
      <img class="right-image"
           src="../../assets/playerPhoto.png">
    </div>
  </div>

  <div class="row text-center mt-5">
    <div class="col-5 shadow ms-5">
      <img class="left-image"
           src="../../assets/playerPhoto.png">
    </div>
    <div class="col-6">

      <h2> Ogromna baza albumów</h2>
      <p class="lead">
        Nasza aplikacja posiada ogromną bazę albumów.
      </p>
    </div>

  </div>

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