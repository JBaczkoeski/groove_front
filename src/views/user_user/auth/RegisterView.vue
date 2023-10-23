<template>
  <form @submit.prevent="register" style="margin-top: 50px"
        class="container col-5 shadow d-flex rounded-5 justify-content-center align-items-center flex-column container-flex center-vertical">
    <h1 class="text-center mt-4">Rejestracja</h1>

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
    register() {
      this.$store.dispatch('auth/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
      });
    }
  }
}

</script>

<style scoped>
.center-vertical {
  margin-top: 130px;
}
</style>