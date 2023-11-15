<template>
  <div class="container-fluid d-flex flex-column p-3 text-white side-bar-label p-0">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/wytwornia/panel" class="nav-link text-white mt-3 mb-2" aria-current="page">
          <i class="fa-solid fa-table-columns fa-xl" style="color: #CCCCCC;"></i>
          Panel główny
        </a>
      </li>
      <li class="nav-item">
        <a href="/wytwornia/artysci/aplikacje" class="nav-link text-white mt-3 mb-2 " aria-current="page">
          <i class="fa-solid fa-users-line fa-xl" style="color: #CCCCCC;"></i>
          Aplikacje artystow
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white mt-3 mb-2" aria-current="page">
          <i class="fa-solid fa-compact-disc fa-2xl" style="color: #ffffff;"></i>
          Utwory
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white mt-3 mb-2">
          <i class="fa-solid fa-record-vinyl fa-2xl" style="color: #ffffff;"></i>
          Albumy
        </a>
      </li>
      <li class="nav-item">
        <a href="/wytwornia/utwory/dodawanie" class="nav-link text-white mt-3 mb-2 " aria-current="page">
          <i class="fa-solid fa-plus fa-2xl" style="color: #ffffff;"></i>
          Dodawanie utworu
        </a>
      </li>
      <li class="nav-item">
        <a href="/wytwornia/albumy/dodawanie" class="nav-link text-white mt-3 mb-2 " aria-current="page">
          <i class="fa-solid fa-folder-plus fa-2xl" style="color: #ffffff;"></i>
          Dodawanie albumu
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