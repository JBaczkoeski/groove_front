<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark side-bar pt-5" style="width: 280px;">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/artysta/utwory" class="nav-link text-white mt-3 mb-2" aria-current="page">
          <i class="fa-solid fa-compact-disc fa-2xl" style="color: #ffffff;"></i>
          Utwory artysty
        </a>
      </li>
      <li>
        <a href="/artysta/albumy" class="nav-link text-white mt-3 mb-2">
          <i class="fa-solid fa-record-vinyl fa-2xl" style="color: #ffffff;"></i>
          Albumy artysty
        </a>
      </li>
      <li class="nav-item">
        <a href="/artysta/utwory/dodawanie" class="nav-link text-white mt-3 mb-2 " aria-current="page">
          <i class="fa-solid fa-plus fa-2xl" style="color: #ffffff;"></i>
          Dodawanie utworu
        </a>
      </li>
      <li>
        <a href="/artysta/utwory/wytwornia" class="nav-link text-white mt-3 mb-2">
          <i class="fa-solid fa-money-bill-1-wave fa-2xl" style="color: #ffffff;"></i>
          Wytwórnia
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style>
.side-bar {
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

</style>