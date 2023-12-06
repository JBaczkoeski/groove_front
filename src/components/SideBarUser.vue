<template>
  <div class="container-fluid flex-column p-3 side-bar-border side-bar-st">
    <ul class="nav nav-pills flex-column mb-auto mt-5">
      <li class="nav-item text-start">
        <a href="/konto" class="nav-link mt-3 mb-2" aria-current="page">
          <i class="fa-regular fa-user fa-2xl icon"></i>
          Ustawienia konta
        </a>
      </li>
      <li class="nav-item text-start">
        <a href="/konto/subskrypcja" class="nav-link mt-3 mb-2 " aria-current="page">
          <i class="fa-solid fa-dollar-sign fa-2xl icon"></i>
          Subskrybcja
        </a>
      </li>
      <li class="nav-item text-start">
        <a href="/konto/zostanArtysta" class="nav-link mt-3 mb-2 " aria-current="page">
          <i class="fa-solid fa-microphone fa-2xl icon"></i>
          Artysta
        </a>
      </li>
      <li class="nav-item text-start">
        <a href="/konto/zamowienia" class="nav-link mt-3 mb-2">
          <i class="fa-solid fa-file-invoice fa-2xl icon"></i>
          Zamówienia
        </a>
      </li>
      <li class="nav-item text-start">
        <a href="/konto/usun" class="nav-link mt-3">
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
  height: 100%;
  padding-bottom: 20px;
  border-right: 3px solid #CCCCCC;
}
@media (max-width: 576px) {
  .side-bar-st {
    min-height: 50vh;
  }
}
</style>