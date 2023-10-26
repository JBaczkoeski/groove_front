<template>
  <div class="container d-flex justify-content-center mt-4">
    <div class="btn-group">
      <button v-for="(type, index) in types"
              :key="index"
              @click="selectedType = type"
              :class="['btn select-button rounded-5',selectedType === type ? 'btn-primary bg-primary text-white':'btn-secondary',]"
      >{{ type }}
      </button>
    </div>
  </div>
  <form @submit.prevent="register(selectedType)" style="margin-top: 50px"
        class="container col-5 shadow d-flex rounded-5 justify-content-center align-items-center flex-column container-flex center-vertical">
    <h1 class="text-center mt-4">Rejestracja</h1>

    <div class="col-8 mt-4" v-if="selectedType === 'Użytkownik'">
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
    <SubmitButton :class="'btn-success btn-lg mt-4 mb-5'" :label="'Zarejestruj się'"/>
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
          confirm_password: this.confirm_password,
        });
      }
      if (selectedType === 'Artysta') {
        this.$store.dispatch('auth/register', {
          type: selectedType,
          name: this.name,
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password,
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
.center-vertical {
  margin-top: 130px;
}

.select-button {
  background-color: white;
  color: black;
  margin-bottom: -50px;
  margin-left: 100px;
  margin-right: 100px;
  border: 0px;
  font-size: 25px;
}

</style>