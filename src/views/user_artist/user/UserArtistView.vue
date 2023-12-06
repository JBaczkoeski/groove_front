<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-3 col-md-2 p-0">
        <SideBarAccountArtist style="min-height: 858px"/>
      </div>
      <div class="col-12 col-sm-9 col-md-10 mt-5 mb-4 ">
        <div class="container border border-3 rounded rounded-5 p-4 shadow bg-dark-grey">
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
                  <input v-model="telephone" type="number" id="phone" class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="street">Ulica:</label>
                  <input v-model="street" type="text" id="street" class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="postal_code">Kod pocztowy:</label>
                  <input v-model="postalCode" type="text" id="postal_code" class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="city">Miasto:</label>
                  <input v-model="city" type="text" id="city" class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="password">Hasło:</label>
                  <input v-model="password" type="password" id="password" class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="confirm_password">Potwierdź hasło:</label>
                  <input v-model="confirm_password" type="password" id="confirm_password" class="form-control">
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
import SideBarAccountArtist from "@/components/SideBarAccountArtist.vue";
import api from "@/services/api";
import {mapState} from "vuex";

export default {
  components: {
    SubmitButton,
    SideBarAccountArtist
  },
  data() {
    return {
      user: [],
      name: '',
      email: '',
      telephone: '',
      street: '',
      postalCode: '',
      city: '',
      country: 'Polska',
      password: '',
      confirm_password: '',
      image: '',
    }
  },
  mounted() {
    this.GetUserInformation();
  },
  methods: {
    GetUserInformation() {
      const token = localStorage.getItem('token');
      api.get(`/api/User/GetUserInfo`, {
        token: token
      })
          .then(response => {
            this.user = response.data;
            this.email = this.user.email;
            this.name = this.user.name;
            this.telephone = response.data.userInformation.phoneNumber;
            this.street = response.data.userInformation.street;
            this.postalCode = response.data.userInformation.postalCode;
            this.city = response.data.userInformation.city;

          });
    },
    changeUserData() {
      const userId = localStorage.getItem('userId');
      api.post(`/api/Account/SaveUserInformation/${userId}`, {
        name: this.name,
        email: this.email,
        phoneNumber: this.telephone,
        City: this.city,
        Street: this.street,
        Country: this.country,
        PostalCode: this.postalCode,
      })
    }
  },
  computed: {
    ...mapState('auth', ['token']),

  },
}
</script>
