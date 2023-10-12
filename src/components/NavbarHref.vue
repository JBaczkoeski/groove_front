<template>
  <router-link :to="to" class="nav-link">{{ label }}</router-link>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    to: String,
    label: String
  },
  setup(props) {
    const toRef = ref(props.to);
    const labelRef = ref(props.label);

    return {
      toRef,
      labelRef
    };
  }
}
</script>