<template>
  <div class="container col-5 shadow d-flex justify-content-center align-items-center flex-column container-flex">>
    <h3 class="mt-5">Logowanie</h3>
    <!-- Carousel -->
    <div id="demo" class="carousel slide" data-bs-ride="carousel">

      <!-- Znaczniki -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>

      <!-- Slajdy -->
     <!-- <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="" alt="Los Angeles" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="" alt="Chicago" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="" alt="New York" class="d-block w-100">
        </div>
      </div>
    -->
      <!-- '<-- -->' -->
      <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
}
</script>
