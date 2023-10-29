<template>
  <tr class="text-center">
    <th scope="row" class="pt-5">{{ placeRef + 1 }}</th>
    <td class="pt-5">{{ name }}</td>
    <td class="pt-5">{{ lastName }}</td>
    <td class="pt-5">{{ song }}</td>
    <td class="pt-5">{{ addDate }}</td>
    <td class="pt-5"><button class="btn btn-primary">Sprawdź</button> <button class="btn btn-success">Zaakceptuj</button> <button class="btn btn-danger">Usuń</button></td>
  </tr>
</template>

<script>
import { ref } from 'vue';
export default {
  props: {
    id: Number,
    name: String,
    lastName: String,
    song: String,
    addDate: String,
  },
  setup(props) {
    const idRef = ref(props.id);
    const nameRef = ref(props.name);
    const lastNameRef = ref(props.lastName);
    const songRef = ref(props.song);
    const addDateRef = ref(props.addDate);


    return {
      idRef,
      nameRef,
      lastNameRef,
      songRef,
      addDateRef,
    };
  },
}
</script>

<style>

</style>