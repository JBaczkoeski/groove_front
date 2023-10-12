<template>
  <form @submit.prevent="login">
    <div>
      <label for="email">E-mail:</label>
      <input v-model="email" type="email" id="email" required>
    </div>
    <div>
      <label for="password">Hasło:</label>
      <input v-model="password" type="password" id="password" required>
    </div>
    <button type="submit">Zaloguj się</button>
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
        const response = await this.$axios.post('/login',{
          email: this.email,
          password: this.password
        });
        console.log('Zalogowano:', response.data)

      }catch (error){
        console.error('Błąd logowanie:', error)
      }
    }
  },
}
</script>