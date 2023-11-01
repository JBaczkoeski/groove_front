<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-3 col-md-2 p-0">
        <SideBarUser style="min-height: 858px"/>
      </div>
      <div class="col-12 col-sm-9 col-md-10 mt-5 mb-4">
        <div class="container border border-3 rounded rounded-5 p-4 shadow">
          <div class="row">
            <div class="col-12">
              <h2 class="text-center mb-4">Ustawienia konta</h2>
            </div>
            <div class="col-12 col-md-6 offset-md-3">
              <form @submit.prevent="changeUserData" class="row d-flex justify-content-center">
                <div class="col-12">
                  <img class="rounded-circle shadow" style="width: 200px; height: 200px" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/103488860_1966332453498047_1673215677078360732_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=be3454&_nc_ohc=rmDTA4aETMoAX_qeicJ&_nc_ht=scontent-waw1-1.xx&oh=00_AfAyw3rAT-5ug63--8tht5KkIln2olXMLrkOemt4v65FvA&oe=656206C2" alt="Oskar">
<!--                  <input class="ms-4" type="file" v-model="image">-->
                </div>

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
                  <input v-model="telephone" type="number" id="phone" required class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="street">Ulica:</label>
                  <input v-model="street" type="text" id="street" required class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="postal_code">Kod pocztowy:</label>
                  <input v-model="postal" type="text" id="postal_code" required class="form-control">
                </div>

                <div class="mb-3 col-12 col-sm-6">
                  <label for="city">Miasto:</label>
                  <input v-model="city" type="text" id="city" required class="form-control">
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
      telephone: '123456789',
      street: 'Prawobrzeska',
      postal: '74-500',
      city: 'Szczecin',
      password: 'Oskar12313123',
      confirm_password: 'Oskar12313123',
      image: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/103488860_1966332453498047_1673215677078360732_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=be3454&_nc_ohc=rmDTA4aETMoAX_qeicJ&_nc_ht=scontent-waw1-1.xx&oh=00_AfAyw3rAT-5ug63--8tht5KkIln2olXMLrkOemt4v65FvA&oe=656206C2'
    }
  },
  mounted() {
    this.GetUserInformation();
  },
  methods: {
    GetUserInformation() {
      const token = localStorage.getItem('userId');
      api.get(`/api/User/GetUserInfo/${token}`)
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
