<template>
  <div class="container-fluid d-flex flex-column p-3 text-white bg-dark side-bar-label">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/wytwornia/panel" class="nav-link text-white mt-3 mb-2" aria-current="page">
          <i class="fa-solid fa-table-columns fa-2xl" style="color: #ffffff;"></i>
          Panel główny
        </a>
      </li>
      <li class="nav-item">
        <a href="/wytwornia/aplikacje" class="nav-link text-white mt-3 mb-2 " aria-current="page">
          <i class="fa-solid fa-users-line fa-2xl" style="color: #ffffff;"></i>
          Aplikacje artystow
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white mt-3 mb-2 " aria-current="page">
          <i class="fa-solid fa-record-vinyl fa-2xl" style="color: #ffffff;"></i>
          Albumy
        </a>
      </li>

      <li>
        <a href="/wytwornia/konto/usun" class="nav-link text-white mt-3">
          <i class="fa-solid fa-trash fa-2xl" style="color: #ffffff;"></i>
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
}
@media (max-width: 576px) {
  .side-bar-label {
    min-height: 50vh;
  }
}
</style>