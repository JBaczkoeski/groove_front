<template>
<div>
<user-layout/>
</div>
</template>

<script>
import userLayout from "@/views/layouts/userLayout.vue";
import {mapState} from "vuex";

export default {
  components:{
    userLayout
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