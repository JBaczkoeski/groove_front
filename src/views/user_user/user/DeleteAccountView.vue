<script setup>

import SubmitButton from "@/components/SubmitButton.vue";
import SideBarUser from "@/components/SideBarUser.vue";
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <SideBarUser style="height:657px;"/>
      </div>
      <div class="container col-7 my-5 mb-4 text-center">
        <div class="container my-5">
          <h2 class="fw-bold">Usunięcie konta </h2>
          <p class="mt-3">
            Usunięcie konta jest procesem nieodwracalnym. Po dokonaniu tej operacji, tracisz dostęp do wszystkich
            zakupionych i zamówionych utworów, wraz z całym historią płatności. Ważne jest, aby przed podjęciem tej
            decyzji rozważyć wszystkie konsekwencje. Jeżeli jesteś pewny, że chcesz usunąć konto, upewnij się, że
            skopiowałeś lub zarchiwizowałeś wszelkie istotne dane lub treści, które chcesz zachować. Po usunięciu konta,
            nie będzie możliwości jego przywrócenia ani odzyskania utraconych informacji. Zawsze pamiętaj, że to
            ostateczny krok i warto zastanowić się, czy nie ma innych opcji dostępnych do rozważenia przed podjęciem tej
            decyzji.
          </p>
        </div>
        <div class="container p t-5">
        <SubmitButton :class="'btn-danger col-3 mt-2 mb-5'" :label="'Usuń konto'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>