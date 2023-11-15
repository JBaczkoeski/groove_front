<template>
  <tr class="text-center">
    <th scope="row" class="pt-5">{{ indexRef + 1 }}</th>
    <td class="pt-5">{{ name }}</td>
    <td class="pt-5">{{ addDate }}</td>
    <td class="pt-5">
      <button @click="acceptApply(id)" class="btn btn-success me-3">Zaakceptuj</button>
      <button @click="deleteApply(id)" class="btn btn-danger">Usuń</button>
    </td>
  </tr>
</template>

<script>
import {ref} from 'vue';
import api from "@/services/api";

export default {
  props: {
    id: Number,
    place: Number,
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
    const placeRef = ref(props.place);

    return {
      idRef,
      nameRef,
      lastNameRef,
      songRef,
      addDateRef,
      placeRef
    };
  },
  methods: {
    acceptApply(id) {
      api.post(`/api/Studio/AcceptRequest?requestId=${id}`)
      window.location.reload();
    },
    deleteApply(id) {
      api.delete(`/api/Studio/DeclineRequest?requestId=${id}`)

    }
  }
}
</script>

<style>

</style>