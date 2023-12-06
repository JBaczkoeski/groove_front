<template>
  <div class="container-fluid d-flex flex-column p-3 side-bar-ar">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/artysta/utwory" class="nav-link dark mt-3 mb-2 text-start" aria-current="page">
          <i class="fa-solid fa-compact-disc fa-2xl icon"></i>
          Utwory artysty
        </a>
      </li>
      <li class="nav-item">
        <a href="/artysta/albumy" class="nav-link dark mt-3 mb-2 text-start">
          <i class="fa-solid fa-record-vinyl fa-2xl icon"></i>
          Albumy artysty
        </a>
      </li>
      <li class="nav-item">
        <a href="/artysta/utwory/dodawanie" class="nav-link dark mt-3 mb-2 text-start" aria-current="page">
          <i class="fa-solid fa-plus fa-2xl icon"></i>
          Dodawanie utworu
        </a>
      </li>
      <li class="nav-item">
        <a href="/artysta/albumy/dodawanie" class="nav-link dark mt-3 mb-2 text-start" aria-current="page">
          <i class="fa-solid fa-folder-plus fa-2xl icon"></i>
          Dodawanie albumu
        </a>
      </li>
      <li class="nav-item">
        <a href="/artysta/utwory/wytwornia" class="nav-link dark mt-3 mb-2 text-start">
          <i class="fa-solid fa-money-bill-1-wave fa-2xl icon"></i>
          Wytwórnia
        </a>
      </li>
    </ul>
  </div>
</template>
<style>
.side-bar-ar {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  border-right: 3px solid #CCCCCC;
}

@media (max-width: 576px) {
  .side-bar-ar {
    min-height: 50vh !important;
  }
}
</style>