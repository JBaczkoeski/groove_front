<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-3 col-md-2 p-0">
        <SideBarUser/>
      </div>
      <div class="col-12 col-sm-9 col-md-10 mt-5 mb-4">
        <div class="container border border-3 rounded rounded-5 p-4 shadow">
          <div class="row">
            <div class="col-12">
              <h2 class="text-center mb-4">Ustawienia konta</h2>
            </div>
            <div class="col-12 col-md-6 offset-md-3">
              <form @submit.prevent="changeUserData" class="row d-flex justify-content-center">
                <div class="mb-3 col-12 col-sm-6">
                  <label for="name" class="form-label">Nazwa:</label>
                  <input v-model="name" type="text" id="name" required class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="email" class="form-label">E-mail:</label>
                  <input v-model="email" type="email" id="email" required class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="phone">Telefon:</label>
                  <input v-model="email" type="number" id="phone" required class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="street">Ulica:</label>
                  <input v-model="email" type="text" id="street" required class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="postal_code">Kod pocztowy:</label>
                  <input v-model="email" type="text" id="postal_code" required class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="city">Miasto:</label>
                  <input v-model="email" type="text" id="city" required class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="password">Hasło:</label>
                  <input v-model="password" type="password" id="password" required class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="confirm_password">Potwierdź hasło:</label>
                  <input v-model="confirm_password" type="password" id="confirm_password" required class="form-control">
                </div>

                <SubmitButton class="btn-secondary col-12 col-md-6 mt-4" label="Zmień dane"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitButton from "@/components/SubmitButton.vue";
import SideBarUser from "@/components/SideBarUser.vue";
import api from "@/services/api";

export default {
  components: {
    SubmitButton,
    SideBarUser
  },
  data() {
    return {
      user: [],
      name: 'Oskar',
      email: 'Oskar.Sukiennik@gmail.com',
      password: 'Oskar12313123',
      confirm_password: 'Oskar12313123'
    }
  },
  mounted() {
    this.GetUserInformation();
  },
  methods: {
    GetUserInformation() {
      const token = localStorage.getItem('token');
      api.get(`/api/User/GetUserInfo?token=${token}`)
          .then(response => {
            this.user = response.data.$value;
            console.log(this.user);
          });
    },
    changeUserData() {
      // Tutaj dodaj logikę do zmiany danych użytkownika
    }
  },
}
</script>
