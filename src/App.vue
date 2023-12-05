<template>
  <div :class="themeClass" class="text-center page">
    <button class="btn submit-button-bg" v-if="this.isDarkTheme === false" @click="toggleTheme"><i class="fa-regular fa-moon fa-2xl" style="color: #000000;"></i></button>
    <button class="btn submit-button-bg" v-else @click="toggleTheme"><i class="fa-regular fa-sun fa-2xl" style="color: #ffffff;"></i></button>
    <user-layout v-if="role.includes('user') && role[1] !== 'artist' && role[0] !== 'studiohead' && role[1] !== 'admin' || role.length === 0"/>
    <admin-layout v-if="role[1] === 'admin'"/>
    <label-layout v-if="role[0] === 'studiohead' && role[1] !== 'admin'"/>
    <artist-layout v-if="role[1] === 'artist'"/>
  </div>
</template>

<script>
import userLayout from "@/views/layouts/userLayout.vue";
import adminLayout from "@/views/layouts/adminLayout.vue";
import labelLayout from "@/views/layouts/labelLayout.vue";
import artistLayout from "@/views/layouts/artistLayout.vue";
import { mapState } from "vuex";

export default {
  components: {
    adminLayout,
    userLayout,
    labelLayout,
    artistLayout
  },
  computed: {
    ...mapState('auth', ['token', 'isLogged']),
    role() {
      if (localStorage.getItem('role') === null) {
        return ['user'];
      } else {
        const roles = localStorage.getItem('role');
        return roles.split(',');
      }
    },
    themeClass() {
      return {
        'dark': this.isDarkTheme,
        'light': !this.isDarkTheme
      };
    }
  },
  data() {
    return {
      isDarkTheme: localStorage.getItem('isDarkTheme') === 'true' // Pobieranie z local storage
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      localStorage.setItem('isDarkTheme', this.isDarkTheme); // Zapis do local storage
    }
  }
};
</script>

<style>
body {
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  border: 2px solid transparent;
}

.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 20px;
  border-right: 3px solid #CCCCCC;
}
@media (max-width: 576px) {
  .page {
    min-height: 50vh;
  }
}
</style>
