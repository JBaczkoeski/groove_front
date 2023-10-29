<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-3 col-md-2 p-0">
        <SideBarUser/>
      </div>
      <div class="container col-12 col-sm-9 my-5 mb-4 text-center">
        <div class="my-5">
          <h2 class="fw-bold">Zostań artystą</h2>
          <p class="mt-3">
            Jesteś gotowy na niezwykłą przygodę? Kliknij ten przycisk i otwórz drzwi do świata sztuki! Możesz zostać
            artystą i wyrażać swoją wyjątkową wizję, tworzyć dzieła, które poruszają serca innych ludzi. Sztuka to droga
            do wyrażenia swoich emocji, myśli i marzeń w niepowtarzalny sposób. Nie potrzebujesz wcześniejszego
            doświadczenia ani mistrzowskich umiejętności - wystarczy Twoja pasja i zaangażowanie.

            Zostań artystą, a twoja twórczość będzie Twoim osobistym śladem w historii sztuki. Niech twoje dzieła mówią
            światu to, co masz do powiedzenia. Kliknij przycisk i rozpocznij swoją artystyczną podróż już teraz!
          </p>
        </div>
        <SubmitButton :class="'btn-success col-3 mt-2 mb-5'" :label="'Zostań artystą'"/>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitButton from "@/components/SubmitButton.vue";
import SideBarUser from "@/components/SideBarUser.vue";

export default {
  components: {
    SubmitButton,
    SideBarUser,
  }
}
</script>
