<template>
  <tr class="text-center">
    <th scope="row" class="pt-5">{{ placeRef + 1 }}</th>
    <td class="pt-5">{{ name }}</td>
    <td class="pt-5">
      <button v-if="type === 'Album'" @click="increaseAlbum(id)" class="btn"><i class="fa-solid fa-plus fa-xl mb-1 icon"></i></button>
      <button v-if="type === 'Track'" @click="increaseTrack(id)" class="btn"><i class="fa-solid fa-plus fa-xl mb-1 icon"></i></button>
      {{ quant }}
      <button v-if="type === 'Album'" @click="decreaseAlbum(id)" class="btn"><i class="fa-solid fa-minus fa-xl mb-1 icon"></i></button>
      <button v-if="type === 'Track'" @click="decreaseTrack(id)" class="btn"><i class="fa-solid fa-minus fa-xl mb-1 icon"></i></button>
    </td>
    <td class="pt-5">{{ price }}</td>
    <td class="pt-5">
      <button @click="deleteAlbum(id)" v-if="type === 'Album'" class="btn btn-danger">Usuń</button>
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
    place: Number
  },
  setup(props) {
    const idRef = ref(props.id);
    const nameRef = ref(props.name);
    const priceRef = ref(props.price);
    const quantRef = ref(props.quant);
    const placeRef = ref(props.place)

    return {
      idRef,
      nameRef,
      priceRef,
      quantRef,
      placeRef
    };
  },
  methods:{
    async increaseTrack(id) {
      await api.post(`/api/Shopping/IncreseTrack?trackId=${id}`)
      location.reload()
    },
    async increaseAlbum(id) {
      await api.post(`/api/Shopping/IncreaseAlbum?albumId=${id}`)
      location.reload()
    },
    async deleteTrack(id) {
      await api.delete(`/api/Shopping/RemoveTrackFromCart?albumId=${id}`)
      location.reload()
    },
    async deleteAlbum(id) {
      await api.delete(`/api/Shopping/DecreaseAlbum?albumId=${id}`)
      location.reload()

    },
    async decreaseTrack(id) {
      await api.delete(`/api/Shopping/DecreaseTrack?albumId=${id}`)
      location.reload()
    },
    async decreaseAlbum(id) {
      await api.delete(`/api/Shopping/DecreaseAlbum?albumId=${id}`)
      location.reload()
    },
  }
}
</script>

<style>

</style>