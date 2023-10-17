<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <SideBarUser/>
      </div>
      <div class="container col-7 border border-3 rounded rounded-5 mt-5 mb-4 shadow">
        <div class="row">
          <div class="container col-12 mt-2 text-center border-bottom border-3">
            <h2>Ustwienia konta</h2>
          </div>
          <div class="container col-12 ms-5 mt-3">
            <form class="d-flex justify-content-center align-items-center flex-column">
              <div class="col-7 mt-4">
                <label for="name">Nazwa:</label>
                <input v-model="name" type="text" id="name" required class="form-control">
              </div>

              <div class="col-7 mt-4">
                <label for="email">E-mail:</label>
                <input v-model="email" type="email" id="email" required class="form-control">
              </div>

              <div class="col-7 mt-4">
                <label for="email">Telefon:</label>
                <input v-model="email" type="email" id="email" required class="form-control">
              </div>

              <div class="col-7 mt-4">
                <label for="email">Ulica:</label>
                <input v-model="email" type="email" id="email" required class="form-control">
              </div>

              <div class="col-7 mt-4">
                <label for="email">Kod pocztowy:</label>
                <input v-model="email" type="email" id="email" required class="form-control">
              </div>

              <div class="col-7 mt-4">
                <label for="email">Miasto:</label>
                <input v-model="email" type="email" id="email" required class="form-control">
              </div>

              <div class="col-7 mt-4">
                <label for="password">Hasło:</label>
                <input v-model="password" type="password" id="password" required class="form-control">
              </div>

              <div class="col-7 mt-4">
                <label for="confirm_password">Potwierdź hasło:</label>
                <input v-model="confirm_password" type="password" id="confirm_password" required class="form-control">
              </div>

              <SubmitButton :class="'btn-secondary col-3 mt-4 mb-5 mb-2'" :label="'Zmień dane'"/>
            </form>
          </div>
        </div>
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
    SideBarUser
  },
  data() {
    return {
      name: 'Oskar',
      email: 'Oskar.Sukiennik@gmail.com',
      password: 'Oskar12313123',
      confirm_password: 'Oskar12313123'
    }
  }
}
</script>