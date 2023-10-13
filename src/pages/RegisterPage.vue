<template>
  <div>

  </div>

  <form @submit.prevent="register" class="container col-5 shadow d-flex justify-content-center align-items-center flex-column text-center container-flex center-vertical">

    <div class="col-7 mt-4">
      <h1 class="text-center">Rejestracja</h1>
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

    <button type="submit" class="btn btn-success mt-4 mb-5">Zarejestruj się</button>
  </form>


</template>

<script>
export default {
  name: 'RegisterPage',

  data() {
    return {
      email: '',
      password: '',
      confirm_password: '',
    }
  },
  methods: {
    async register() {
      try {
        const response = await this.$axios.post('/register', {
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password,

        });
        this.$router.push('/logowanie');
        console.log('Zarejestrowano:', response.data)

      } catch (error) {
        console.error('Błąd rejestracji:', error)
      }
    }
  }

}

</script>

<style scoped>
.center-vertical{
margin-top: 130px;
}
</style>