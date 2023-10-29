<template>
  <div>
    <user-layout v-if="role === 'user'"/>
    <admin-layout v-if="role === 'admin'"/>
    <label-layout v-if="role === 'label'"/>
    <artist-layout v-if="role === 'artist'"/>
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
  data(){
    return{
      role: 'label'
    }
  },
  computed: {
    // role() {
    //   const storedRole = localStorage.getItem('role');
    //   return storedRole === 'user' ? storedRole : 'user';
    // },
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