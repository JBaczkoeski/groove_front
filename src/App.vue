<template>
<div>
<user-layout v-if="guard === 'user'"/>
<admin-layout v-if="guard === 'admin'"/>
<label-layout v-if="guard === 'label'"/>
<artist-layout v-if="guard === 'artist'"/>
</div>
</template>

<script>
import userLayout from "@/views/layouts/userLayout.vue";
import adminLayout from "@/views/layouts/adminLayout.vue";
import labelLayout from "@/views/layouts/labelLayout.vue";
import artistLayout from "@/views/layouts/artistLayout.vue";
import {mapState} from "vuex";

export default {
  data(){
    return {
      guard: 'artist'
    }
  },
  components:{
    adminLayout,
    userLayout,
    labelLayout,
    artistLayout
  },
  computed: {
    ...mapState('auth', ['user']),

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