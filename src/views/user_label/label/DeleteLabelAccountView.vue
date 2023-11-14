<script setup>
import SubmitButton from "@/components/SubmitButton.vue";
import SidebarAccountLabel from "@/components/SidebarAccountLabel.vue";
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-3 col-md-2 p-0">
        <SidebarAccountLabel/>
      </div>
      <div class="container col-12 col-sm-9 my-5 mb-4 text-center">
        <div class="my-5">
          <h2 class="fw-bold">Usunięcie konta </h2>
          <p class="mt-3">
            Usuwanie konta wytwórni muzycznej jest procesem nieodwracalnym. Po dokonaniu tej operacji, tracisz dostęp do
            wszystkich umów i umówionych projektów związanych z wytwórnią, wraz z historią transakcji i wszelkimi
            zapisami artystów. Ważne jest, abyś przed podjęciem tej decyzji rozważył wszystkie konsekwencje.
            Jeśli jesteś pewny, że chcesz usunąć konto wytwórni, upewnij się, że skopiowałeś lub zarchiwizowałeś
            wszelkie istotne dane, umowy, utwory lub informacje dotyczące artystów, których chcesz zachować. Po
            usunięciu konta nie będzie możliwości jego przywrócenia ani odzyskania utraconych danych. Pamiętaj, że jest
            to ostateczny krok i warto rozważyć inne opcje dostępne przed podjęciem tej decyzji.
          </p>
        </div>
        <SubmitButton :class="'btn-danger col-3 mt-2 mb-5'" :label="'Usuń konto'"/>
      </div>
    </div>
  </div>
</template>