<template>
  <div>
    <h1>Rejestracja</h1>
  </div>

  <form @submit.prevent="register">
    <div>
      <label for="email">E-mail:</label>
      <input v-model="email" type="email" id="email" required>
    </div>

    <div>
      <label for="password">Hasło:</label>
      <input v-model="password" type="password" id="password" required>
    </div>

    <div>
      <label for="confirm_password">Potwierdź hasło:</label>
      <input v-model="confirm_password" type="confirm_password" id="confirm_password" required>
    </div>

    <button type="submit">Zarejestruj się</button>
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
        const response = await this.$axios.post( '/register', {
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password,

        })
      }catch (error){
        console.error('Błąd rejestracji:', error)
      }
    }
  }

}

</script>

<style scoped>

</style>