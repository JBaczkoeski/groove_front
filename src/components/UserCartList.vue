<template>
  <tr class="text-center">
    <th scope="row" class="pt-5">{{ placeRef + 1 }}</th>
    <td class="pt-5">{{ name }}</td>
    <td class="pt-5">{{ quant }}</td>
    <td class="pt-5">{{ price }}</td>
    <td class="pt-5">
      <button class="btn btn-primary me-3">Sprawdź</button>
      <button class="btn btn-success me-3">Napisz</button>
      <button @click="deleteItem(id)" v-if="type === 'Album'" class="btn btn-danger">Usuń</button>
      <button @click="deleteTrack(id)" v-if="type === 'Track'" class="btn btn-danger">Usuń</button>
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
    price: String,
    quant: Number,
    type: String,
  },
  setup(props) {
    const idRef = ref(props.id);
    const nameRef = ref(props.name);
    const priceRef = ref(props.price);
    const quantRef = ref(props.quant);


    return {
      idRef,
      nameRef,
      priceRef,
      quantRef,
    };
  },
  methods:{
    deleteItem(id){
      api.delete(`/api/Shopping/RemoveAlbumFromCart?albumId=${id}`)
    },
    deleteTrack(id){
      api.delete(`/api/Shopping/RemoveTrackFromCart?albumId=${id}`)
    }
  }
}
</script>

<style>

</style>