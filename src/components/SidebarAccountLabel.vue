<template>
  <div class="container-fluid d-flex flex-column p-3 text-white side-bar-label p-0">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/wytwornia/konto" class="nav-link text-white mt-3 mb-2" aria-current="page">
          <i class="fa-regular fa-user fa-2xl" style="color: #ffffff;"></i>
          Ustawienia konta
        </a>
      </li>
      <li>
        <a href="/wytwornia/konto/usun" class="nav-link text-white mt-3">
          <i class="fa-solid fa-trash fa-xl" style="color: #CCCCCC;"></i>
          Usunięcie konta
        </a>
      </li>
    </ul>
  </div>
</template>
<style>
.side-bar-label {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 20px;
  border-right: 3px solid #CCCCCC;
}
@media (max-width: 576px) {
  .side-bar-label {
    min-height: 50vh;
  }
}
</style>
<script setup>
</script>