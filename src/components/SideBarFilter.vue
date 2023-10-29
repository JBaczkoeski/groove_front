<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark side-bar-filter pt-5" style="width: 200px;">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item d-flex justify-content-center">
        <a class="nav-link text-white mt-3 mb-2" aria-current="page">
          <i class="fa-solid fa-filter fa-2xl" style="color: #ffffff;"></i>
          Filtruj
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link text-white mt-3 mb-2" aria-current="page">
          <i class="fa-solid fa-user fa-2xl" style="color: #ffffff;"></i>
          Artysta
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link text-white mt-3 mb-2" aria-current="page">
          <i class="fa-solid fa-users-line fa-2xl" style="color: #ffffff;"></i>
          Wytwórnia
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style>
.side-bar-filter {
  margin-left: -40px;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 20px;
}
</style>