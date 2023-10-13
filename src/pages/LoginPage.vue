<template>
  <form @submit.prevent="login" class="container col-5 shadow d-flex justify-content-center align-items-center flex-column text-center container-flex">
    <h3 class="mt-5">Logowanie</h3>
    <div class="col-7 mt-4">
      <label for="email">E-mail:</label>
      <input v-model="email" type="email" id="email" class="form-control" required>
    </div>
    <div class="col-7 mt-4">
      <label for="password">Hasło:</label>
      <input v-model="password" type="password" id="password" class="form-control" required>
    </div>
    <div class="col-7 mt-4">
      <button type="submit" class="btn btn-success mt-4 mb-5">Zaloguj się</button>
    </div>
  </form>

</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post('/login', {
          email: this.email,
          password: this.password
        });
        console.log('Zalogowano', response.data)
      } catch (error) {
        console.error('Błąd logowanie:', error)
      }
    }
  },
}
</script>

<style>
.container-flex {
  margin-top: 150px;
}
</style>