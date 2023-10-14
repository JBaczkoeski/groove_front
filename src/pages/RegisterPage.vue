<template>
  <div>

  </div>

  <form @submit.prevent="register"
        class="container col-5 shadow d-flex justify-content-center align-items-center flex-column container-flex center-vertical">
    <h1 class="text-center">Rejestracja</h1>

    <div class="col-7 mt-4">
      <label for="name">Nazwa:</label>
      <input v-model="name" type="text" id="name" required class="form-control">
    </div>

    <div class="col-7 mt-4">
      <label for="email">E-mail:</label>
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

    <SubmitButton :class="'btn-success mt-4 mb-5'" :label="'Zarejestruj się'"/>
  </form>


</template>

<script>
import SubmitButton from "@/components/SubmitButton.vue";

export default {
  name: 'RegisterPage',
  components: {SubmitButton},

  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('https://groovesync.azurewebsites.net/api/Account/Register', {
          name: this.name,
          email: this.email,
          password: this.password,
          ComfirmedPassword: this.confirm_password,

        });
        this.$router.push('/logowanie');
      } catch (error) {
        console.error('Błąd rejestracji:', error)
      }
    }
  }

}

</script>

<style scoped>
.center-vertical {
  margin-top: 130px;
}
</style>