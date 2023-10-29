<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark side-bar-label pt-5" style="width: 280px;">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/wytwornia/albumy" class="nav-link text-white mt-3 mb-2" aria-current="page">
          <i class="fa-solid fa-compact-disc fa-2xl" style="color: #ffffff;"></i>
          Albumy wytworni
        </a>
      </li>
      <li class="nav-item">
        <a href="/wywornia/albumy/dodawanie" class="nav-link text-white mt-3 mb-2 " aria-current="page">
          <i class="fa-solid fa-plus fa-2xl" style="color: #ffffff;"></i>
          Dodawanie albumu
        </a>
      </li>
      <li>
        <a href="/wytwornia/aplikacje" class="nav-link text-white mt-3 mb-2">
          <i class="fa-solid fa-record-vinyl fa-2xl" style="color: #ffffff;"></i>
          Aplikacje do wytworni
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
<style>
.side-bar-label {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 20px;
}
@media (max-width: 576px) {
  .side-bar-label {
    min-height: 50vh;
  }
}
</style>