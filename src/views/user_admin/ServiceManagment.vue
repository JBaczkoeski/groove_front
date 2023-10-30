<template>
  <div class="container mt-5 border border-3 rounded-5 p-3">
    <h1 class="text-center">Panel Administracyjny</h1>

    <!-- Formularz do edycji informacji o stronie -->
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="logo" class="form-label">Logotyp strony</label>
        <input type="file" class="form-control" id="logo" ref="logoInput">
      </div>
      <div class="mb-3">
        <label for="nazwa" class="form-label">Nazwa strony</label>
        <input type="text" class="form-control" id="nazwa" v-model="nazwa">
      </div>
      <div class="mb-3">
        <label for="zawieszenie" class="form-label">Zawieszenie strony</label>
        <div class="d-flex align-items-center">
          <select v-model="zawieszenie" class="form-select me-3">
            <option value="nie">Nie</option>
            <option value="tak">Tak</option>
          </select>
          <div v-if="zawieszenie === 'tak'" class="form-check form-switch">
            <input class="form-check-input" type="checkbox" v-model="opcja1" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">Opcja 1</label>
          </div>
          <div v-if="zawieszenie === 'tak'" class="form-check form-switch">
            <input class="form-check-input" type="checkbox" v-model="opcja2" id="flexSwitchCheckDefault2">
            <label class="form-check-label" for="flexSwitchCheckDefault2">Opcja 2</label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Zapisz</button>
    </form>

    <!-- Dodatkowe funkcjonalności -->
    <div class="mt-5">
      <h2>Dodatkowe funkcjonalności</h2>
      <ul>
        <li v-for="funkcja in funkcje" :key="funkcja.id">{{ funkcja.nazwa }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: null,
      nazwa: '',
      zawieszenie: 'nie',
      opcja1: false,
      opcja2: false,
      funkcje: [
        { id: 1, nazwa: 'Statystyki odwiedzin' },
        { id: 2, nazwa: 'Zarządzanie użytkownikami' },
        { id: 3, nazwa: 'Dodawanie nowych treści' },
        // Dodaj więcej funkcji według potrzeb
      ]
    };
  },
  methods: {
    submitForm() {
      // Tutaj można umieścić logikę zapisu danych
      // np. wysłanie danych na serwer
      console.log('Zapisano dane:', this.logo, this.nazwa, this.zawieszenie, this.opcja1, this.opcja2);
    }
  }
};
</script>

<style scoped>
/* Dodatkowe style, jeśli są potrzebne */
@media (max-width: 576px) {
  .form-control {
    width: 100%;
  }
}
</style>