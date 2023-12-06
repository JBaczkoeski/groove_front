<template>
  <div class="container-fluid d-flex flex-column p-3 side-bar-st side-bar-border">
    <ul class="nav nav-pills flex-column mb-auto mt-5">
      <li class="nav-item text-start">
        <a href="/artysta/konto" class="nav-link dark mt-3 mb-2" aria-current="page">
          <i class="fa-regular fa-user fa-2xl icon"></i>
          Ustawienia konta
        </a>
      </li>
      <li class="nav-item text-start">
        <a href="/artysta/konto/usun" class="nav-link dark mt-3">
          <i class="fa-solid fa-trash fa-2xl icon"></i>
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