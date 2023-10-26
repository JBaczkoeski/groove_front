<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark side-bar-st pt-5" style="width: 280px;">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/konto" class="nav-link text-white mt-3 mb-2" aria-current="page">
          <i class="fa-regular fa-user fa-2xl" style="color: #ffffff;"></i>
          Ustawienia konta
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white mt-3 mb-2 " aria-current="page">
          <i class="fa-solid fa-dollar-sign fa-2xl" style="color: #ffffff;"></i>
          Subskrybcja
        </a>
      </li>
      <li class="nav-item">
        <a href="/konto/zostanArtysta" class="nav-link text-white mt-3 mb-2 " aria-current="page">
          <i class="fa-solid fa-microphone fa-2xl" style="color: #ffffff;"></i>
          Artysta
        </a>
      </li>
      <li>
        <a href="/konto/zamowienia" class="nav-link text-white mt-3 mb-2">
          <i class="fa-solid fa-file-invoice fa-2xl" style="color: #ffffff;"></i>
          Zamówienia
        </a>
      </li>
      <li>
        <a href="/konto/usun" class="nav-link text-white mt-3">
          <i class="fa-solid fa-trash fa-2xl" style="color: #ffffff;"></i>
          Usunięcie konta
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style>
.side-bar-st {
  margin-left: -25px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-bottom: 20px;
}
</style>