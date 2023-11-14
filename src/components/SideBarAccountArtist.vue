<template>
  <div class="container-fluid d-flex flex-column p-3 text-white side-bar-st">
    <ul class="nav nav-pills flex-column mb-auto mt-5">
      <li class="nav-item">
        <a href="/artysta/konto" class="nav-link text-white mt-3 mb-2" aria-current="page">
          <i class="fa-regular fa-user fa-2xl" style="color: #ffffff;"></i>
          Ustawienia konta
        </a>
      </li>
      <li>
        <a href="/artysta/konto/usun" class="nav-link text-white mt-3">
          <i class="fa-solid fa-trash fa-2xl" style="color: #ffffff;"></i>
          Usunięcie konta
        </a>
      </li>
    </ul>
  </div>
</template>
<style>
.side-bar-st {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 20px;
  border-right: 3px solid #CCCCCC;
}
@media (max-width: 576px) {
  .side-bar-st {
    min-height: 50vh;
  }
}
</style>