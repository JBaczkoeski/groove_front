<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-3 col-md-2 p-0">
        <SideBarUser/>
      </div>
      <div class="container col-12 col-sm-9 my-5 mb-4 text-center">
        <div class="my-5">
          <h2 class="fw-bold">Subskrypcja</h2>
          <p class="mt-3 h4">
            Witaj w niezwykłym świecie muzyki!
            Otwórz drzwi do niezapomnianego doświadczenia dźwiękowego, które ożywi Twoje emocje i pobudzi wyobraźnię.

            Dzięki naszej wyjątkowej subskrypcji za jedyne 19,99 zł miesięcznie, masz nieograniczony dostęp do niezliczonych utworów, albumów i artystów. To nie tylko muzyka - to podróż przez różnorodne gatunki, nastroje i historie, które zainspirują Cię w każdej chwili.

            Dołączając do naszej społeczności subskrybentów, nie tylko odblokowujesz bogactwo dźwięków, ale również wspierasz niezależnych artystów, którzy dzielą się z Tobą swoją pasją i talentem.

            Nie czekaj dłużej! Kliknij poniżej i rozpocznij swoją muzyczną przygodę z nami już teraz!

          </p>
        </div>
        <SubmitButton :class="'btn-success col-3 mt-2 mb-5'" :label="'Kup dostęp'"/>
      </div>
    </div>
  </div>
</template>
<script>
import SideBarUser from "@/components/SideBarUser.vue";
import SubmitButton from "@/components/SubmitButton.vue";

export default {
  components:{
    SubmitButton,
    SideBarUser
  }
}
</script>
