<template>
  <tr class="text-center">
    <th scope="row" class="pt-5">{{ placeRef + 1 }}</th>
    <td class="pt-5">{{ name }}</td>
    <td class="pt-5">
      <button @click="headAdmin(id)" class="btn btn-primary me-3">Mianuj adminem</button>
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
    const placeRef = ref(props.place);

    return {
      idRef,
      nameRef,
      placeRef
    };
  },
  methods:{
    headAdmin(id){
      api.post(`/api/Admin/MainNewHeadAdmin?newadminId=${id}`)
          .then(Response=>{
            if (Response.status === 200){
            window.location.reload();
          }
      });
    }
  }
}
</script>

<style>

</style>