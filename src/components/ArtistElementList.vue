<template>
  <tr class="text-center">
    <th scope="row" class="pt-5">{{ placeRef + 1 }}</th>
    <td class="pt-5">{{ name }}</td>
    <td class="pt-5">{{ lastName }}</td>
    <td class="pt-5">{{ addDate }}</td>
    <td class="pt-5">
      <button class="btn btn-primary me-3">Sprawdź</button>
      <button class="btn btn-success me-3">Napisz</button>
      <button class="btn btn-danger">Usuń</button>
    </td>
  </tr>
</template>

<script>
import {ref} from 'vue';

export default {
  props: {
    id: Number,
    name: String,
    lastName: String,
    addDate: String,
    place: Number
  },
  setup(props) {
    const idRef = ref(props.id);
    const nameRef = ref(props.name);
    const lastNameRef = ref(props.lastName);
    const addDateRef = ref(props.addDate);
    const placeRef = ref(props.place);

    return {
      idRef,
      nameRef,
      lastNameRef,
      addDateRef,
      placeRef
    };
  },
}
</script>

<style>

</style>