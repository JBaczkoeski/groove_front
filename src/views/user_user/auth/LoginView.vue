<template>
  <form @submit.prevent="login"
        class="container col-12 dark-form rounded rounded-5 col-sm-5 d-flex justify-content-center align-items-center flex-column container-flex">
    <h3 class="mt-5">Logowanie</h3>
    <div class="col-7 mt-4">
      <label for="email">E-mail:</label>
      <input v-model="email" type="email" id="email" class="form-control input-field" required>
    </div>
    <div class="col-7 mt-4">
      <label for="password">Hasło:</label>
      <input v-model="password" type="password" id="password" class="form-control input-field" required>
      <p v-if="error" class="text-danger">{{ error }}</p>
    </div>
    <div class="col-7 mt-4 text-center">
      <SubmitButton :customClass="'submit-button-green mt-4 mb-5'" :label="'Zaloguj'"/>
    </div>
  </form>

</template>

<script>
import SubmitButton from "@/components/SubmitButton.vue";

export default {
  name: 'LoginForm',
  components: {
    SubmitButton
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
      });
    }
  },
  computed: {
    error() {
      return this.$store.state.auth.error;
    }
  }
}
</script>

<style>
.container-flex {
  margin-top: 100px;
}
</style>