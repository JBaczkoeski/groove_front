<template>
  <button type="submit" :class="['btn', customClass]">{{ label }}</button>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    customClass: String,
    label: String
  },
  setup(props) {
    const classRef = ref(props.customClass);
    const labelRef = ref(props.label);

    return {
      classRef,
      labelRef
    };
  }
}
</script>
