<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-3 col-md-2 p-0">
        <SideBarAccountArtist/>
      </div>
      <div class="container col-12 col-sm-9 my-5 mb-4 text-center">
        <div class="my-5">
          <h2 class="fw-bold">Usunięcie konta </h2>
          <p class="mt-3">
            Usuwanie konta artysty jest procesem nieodwracalnym. Po wykonaniu tej operacji, utracisz dostęp do
            wszystkich utworów muzycznych, tekstów piosenek, oraz innych materiałów, które dodałeś do swojego konta,
            wraz z całą historią ich publikacji i wszelkimi uzyskanymi wynikami. Bardzo ważne jest, abyś przed podjęciem
            tej decyzji rozważył(a) wszystkie konsekwencje. Jeśli jesteś pewny(a), że chcesz usunąć swoje konto, upewnij
            się, że zarchiwizowałeś(aś) lub skopiowałeś(aś) wszelkie istotne treści, których chcesz zachować. Po
            usunięciu konta nie będzie możliwości jego przywrócenia ani odzyskania utraconych informacji. Zawsze warto
            zastanowić się nad innymi dostępnymi opcjami przed podjęciem tej ostatecznej decyzji.
          </p>
        </div>
        <SubmitButton @click="deleteAccount" :class="'btn-danger col-3 mt-2 mb-5'" :label="'Usuń konto'"/>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitButton from "@/components/SubmitButton.vue";
import SideBarAccountArtist from "@/components/SideBarAccountArtist.vue";
import api from "@/services/api";

export default{
  components:{
    SubmitButton,
    SideBarAccountArtist
  },
  methods:{
    deleteAccount() {
      api.delete('/api/Artist/DeleteArtist')
          .then(response => {
            if (response.status === 200) {
              console.log('Artysta został usunięty.');
              this.$store.dispatch('auth/logout');
            } else {
              console.error('Błąd podczas  usuwania artysty!', response);
            }
          })
          .catch(error => {
            console.error('Wystąpił błąd:', error);
          })
        }
      },
}


</script>