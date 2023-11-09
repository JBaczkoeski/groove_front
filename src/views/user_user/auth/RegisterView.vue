<template>
  <div class="container d-flex justify-content-center mt-4">
    <div class="btn-group col-12 col-sm-8" style="margin-bottom: -60px">
      <button v-for="(type, index) in types"
              :key="index"
              @click="selectedType = type"
              :class="['btn select-button rounded-5', selectedType === type ? 'btn-primary active' : 'btn-secondary']">
        {{ type }}
      </button>
    </div>
  </div>
  <form @submit.prevent="register(selectedType)" style="margin-top: 50px; margin-bottom: 50px"
        class="container col-12 col-sm-5 dark-form d-flex rounded-5 justify-content-center align-items-center flex-column container-flex center-vertical">
    <h1 class="text-center mt-4">Rejestracja</h1>
<!--user-->
    <div class="col-8 mt-4" v-if="selectedType === 'Użytkownik'">
      <div class="mt-4">
        <label for="name">Nazwa :</label>
        <input v-model="name" type="text" id="name" required class="form-control">
      </div>

      <div class="mt-4">
        <label for="email">E-mail:</label>
        <input v-model="email" type="email" id="email" required class="form-control">
      </div>

      <div class="mt-4">
        <label for="password">Hasło:</label>
        <input v-model="password" type="password" id="password" required class="form-control">
      </div>

      <div class="mt-4">
        <label for="confirm_password">Potwierdź hasło:</label>
        <input v-model="confirm_password" type="password" id="confirm_password" required class="form-control">
      </div>
    </div>
<!--label-->
    <div class="col-8 mt-4" v-if="selectedType === 'Wytwórnia'">
      <div class="mt-4">
        <label for="name">Nazwa:</label>
        <input v-model="name" type="text" id="name" required class="form-control">
      </div>

      <div class="mt-4">
        <label for="email">E-mail:</label>
        <input v-model="email" type="email" id="email" required class="form-control">
      </div>

      <div class="mt-4">
        <label for="password">Hasło:</label>
        <input v-model="password" type="password" id="password" required class="form-control">
      </div>

      <div class="mt-4">
        <label for="confirm_password">Potwierdź hasło:</label>
        <input v-model="confirm_password" type="password" id="confirm_password" required class="form-control">
      </div>
    </div>
<!--artist-->
    <div class="col-8 mt-4" v-if="selectedType === 'Artysta'">
      <div class="mt-4">
        <label for="name">Nazwa:</label>
        <input v-model="name" type="text" id="name" required class="form-control">
      </div>

      <div class="mt-4">
        <label for="email">E-mail:</label>
        <input v-model="email" type="email" id="email" required class="form-control">
      </div>

      <div class="mt-4">
        <label for="password">Hasło:</label>
        <input v-model="password" type="password" id="password" required class="form-control">
      </div>

      <div class="mt-4">
        <label for="confirm_password">Potwierdź hasło:</label>
        <input v-model="confirm_password" type="password" id="confirm_password" required class="form-control">
      </div>
    </div>
    <SubmitButton :class="'submit-button-green btn-lg mt-4 mb-5'" :label="'Zarejestruj się'"/>
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
      selectedType: 'Użytkownik',
    }
  },
  methods: {
    register(selectedType) {
      if (selectedType === 'Użytkownik') {
        this.$store.dispatch('auth/register', {
          type: selectedType,
          name: this.name,
          email: this.email,
          password: this.password,
          comfirmedPassword: this.confirm_password,
        });
      }
      if (selectedType === 'Wytwórnia') {
        this.$store.dispatch('auth/register', {
          type: selectedType,
          name: this.name,
          email: this.email,
          password: this.password,
          ComfirmedPassword: this.confirm_password,
        });
      }
      if (selectedType === 'Artysta') {
        this.$store.dispatch('auth/register', {
          type: selectedType,
          name: this.name,
          email: this.email,
          password: this.password,
          ComfirmedPassword: this.confirm_password,
        });
      }
    },
  },

  computed: {
    types() {
      return ['Użytkownik', 'Wytwórnia', 'Artysta']
    }
  }
}

</script>

<style>
.select-button {
  font-size: 1rem; /* Dostosuj wielkość czcionki */
  margin-bottom: 1rem; /* Dostosuj marginesy */
}
</style>