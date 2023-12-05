<template>
  <div class="card border border-2 m-4 text-center rounded-5 card-dark col-12 col-sm-4 d-flex justify-content-center">
    <img v-if="cover" :src="cover" class="w-75 mt-4 rounded-5 album_img" style="margin-left: 50px;" alt="album cover">
    <div class="card-body row">
      <h5 v-if="title" class="card-title">{{ title }}</h5>
      <p v-if="author" class="card-text">Wykonawca: {{ author }}</p>
      <p v-if="studio" class="card-text">Studio: {{ studio }}</p>
      <div class="container col-6">
        <a @click="addAlbumToCart(id)" class="btn btn-success rounded rounded-5 my-4">Dodaj do koszyka</a>
      </div>
      <div class="container col-6">
        <a :href="`/album/show/${id}`" class="btn btn-primary rounded rounded-5 my-4">Sprawdź</a>
      </div>
      <div class="container row">
        <div class="container col-6">

        </div>
        <div class="container col-6 h4">
          Cena: {{price}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import api from "@/services/api";

export default {
  props: {
    id: Number,
    cover: String,
    title: String,
    author: String,
    studio: String,
    price: Number
  },

  data(){
    return{
      artists: []
    }
  },

  setup(props) {
    const idRef = ref(props.id);
    const coverRef = ref(props.cover);
    const titleRef = ref(props.title);
    const authorRef = ref(props.author);
    const studioRef = ref(props.studio);
    const priceRef = ref(props.price)

    return {
      idRef,
      coverRef,
      titleRef,
      authorRef,
      studioRef,
      priceRef
    };
  },
  methods: {
    addAlbumToCart(id) {
      api.post(`/api/Shopping/AddTrackToCart?trackId=${id}&quantity=1`,{
        albumId: id,
        qty: 1
      })
    },
  }
}
</script>


<style>

</style>