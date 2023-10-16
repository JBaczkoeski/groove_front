<template>
  <form @submit.prevent="login" class="container col-5 shadow d-flex justify-content-center align-items-center flex-column container-flex">
    <h3 class="mt-5">Logowanie</h3>
    <div class="col-7 mt-4">
      <label for="email">E-mail:</label>
      <input v-model="email" type="email" id="email" class="form-control" required>
    </div>
    <div class="col-7 mt-4">
      <label for="password">Hasło:</label>
      <input v-model="password" type="password" id="password" class="form-control" required>
    </div>
    <div class="col-7 mt-4 text-center">
      <SubmitButton :customClass="'btn-success mt-4 mb-5'" :label="'Zaloguj'"/>
    </div>
  </form>

</template>

<script>
import SubmitButton from "@/components/SubmitButton.vue";

export default {
  name: 'LoginForm',
  components:{
    SubmitButton
  },
  data() {
    return {
      email: '',
      password: ''
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
}
</script>

<style>
.container-flex {
  margin-top: 150px;
}
</style>