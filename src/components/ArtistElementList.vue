<template>
  <tr class="text-center">
    <th scope="row" class="pt-5">{{ placeRef + 1 }}</th>
    <td class="pt-5">{{ name }}</td>
    <td class="pt-5">
      <button @click="makeAdmin(userId)" class="btn btn-primary me-3">Mianuj adminem</button>
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
    userId: Number,
    addDate: String,
    place: Number
  },
  setup(props) {
    const idRef = ref(props.id);
    const nameRef = ref(props.name);
    const userIdRef = ref(props.userId);
    const addDateRef = ref(props.addDate);
    const placeRef = ref(props.place);

    return {
      idRef,
      nameRef,
      userIdRef,
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
    makeAdmin(id){
      api.post(`/api/Studio/MakeArtistAnAdm?artistId=${id}`)
          .then(response=>{
        if (response.status === 200){
          window.location.reload();
        }
      });

    }
  },
}
</script>