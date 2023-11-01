<template>
  <div>
    {{}}
    <user-layout v-if="role.includes('user') && role[1] !== 'artist' && role[0] !== 'studiohead'|| role.length === 0"/>
    <admin-layout v-if="role[1] === 'admin'"/>
    <label-layout v-if="role[0] === 'studiohead'"/>
    <artist-layout v-if="role[1] === 'artist'"/>
  </div>
</template>

<script>
import userLayout from "@/views/layouts/userLayout.vue";
import adminLayout from "@/views/layouts/adminLayout.vue";
import labelLayout from "@/views/layouts/labelLayout.vue";
import artistLayout from "@/views/layouts/artistLayout.vue";
import {mapState} from "vuex";

export default {
  components: {
    adminLayout,
    userLayout,
    labelLayout,
    artistLayout
  },

  computed: {
    role() {
      const storedRoles = localStorage.getItem('role');
      return storedRoles ? JSON.parse(storedRoles) : [];
    },
    ...mapState('auth', ['token', 'isLogged']),

  },
}
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


</style>