<template>
  <tr class="text-center">
    <th scope="row" class="pt-5">{{ placeRef + 1 }}</th>
    <td class="pt-5">{{ name }}</td>
    <td class="pt-5">
      <button @click="makeAdmin(userid)" class="btn btn-primary me-3">Mianuj adminem</button>
      <button @click="deleteArtist(id)" class="btn btn-danger">Usuń</button>
    </td>
  </tr>
</template>

<script>
import {ref} from 'vue';
import api from "@/services/api";

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
  methods: {
    deleteArtist(id){
      api.delete(`/api/Studio/RemoveArtistFromStudio?artistId=${id}`)
          .then(response => {
            if (response.status === 200)
              window.location.reload();
          });
    },
    makeAdmin(userId){
      api.post(`/api/Studio/MakeArtistAnAdm?artistId=${userId}`)
          .then(response=>{
        if (response.status === 200){
          window.location.reload();
        }
      });

    }
  },
}
</script>

<style>

</style>