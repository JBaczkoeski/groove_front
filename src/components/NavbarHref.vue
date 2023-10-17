<template>
  <router-link :to="to" :class="['nav-link', customClass]">{{ label }}{{ icon }}</router-link>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    to: String,
    label: String,
    icon: String,
    customClass:String
  },
  setup(props) {
    const toRef = ref(props.to);
    const labelRef = ref(props.label);
    const iconRef = ref(props.icon);
    const customClassRef = ref(props.customClass);

    return {
      toRef,
      labelRef,
      iconRef,
      customClassRef
    };
  }
}
</script>