<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark side-bar pt-5" style="width: 280px;">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/konto" class="nav-link text-white mb-2" aria-current="page">
          <i class="fa-regular fa-user fa-2xl" style="color: #ffffff;"></i>
          Ustawienia konta
        </a>
      </li>
      <li>
        <a href="/konto/zamowienia" class="nav-link text-white mb-2">
          <i class="fa-solid fa-file-invoice fa-2xl" style="color: #ffffff;"></i>
          Zamówienia
        </a>
      </li>
      <li>
        <a href="/konto/usun" class="nav-link text-white">
          <i class="fa-solid fa-trash fa-2xl" style="color: #ffffff;"></i>
          Usunięcie konta
        </a>
      </li>
    </ul>
<!--    <div class="dropdown">-->
<!--      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">-->
<!--        <strong>mdo</strong>-->
<!--      </a>-->
<!--      może się przyda zobaczymy-->
<!--      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">-->
<!--        <li><a class="dropdown-item" href="#">New project...</a></li>-->
<!--        <li><a class="dropdown-item" href="#">Settings</a></li>-->
<!--        <li><a class="dropdown-item" href="#">Profile</a></li>-->
<!--        <li><hr class="dropdown-divider"></li>-->
<!--        <li><a class="dropdown-item" href="#">Sign out</a></li>-->
<!--      </ul>-->
<!--    </div>-->
  </div>
</template>

<script>

</script>

<style>
.side-bar{
  margin-left: -12px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>