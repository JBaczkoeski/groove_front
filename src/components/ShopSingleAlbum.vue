<template>
  <div class="card border border-2 mx-1 mb-3 text-center rounded-5 card-dark col-3">
    <img v-if="cover" :src="cover" class="w-75 mt-4 rounded-5" style="margin-left: 38px;" alt="album cover">
    <div class="card-body row">
      <h5 v-if="title" class="card-title">{{ title }}</h5>
      <p v-if="author" class="card-text">Wykonawca: {{ author }}</p>
      <p v-if="studio" class="card-text">Studio: {{ studio }}</p>
      <p v-if="songs" class="card-text col-6"><i class="fa-solid fa-music fa-lg me-1" style="color: #CCCCCC;"></i>{{ songs }}
        piosenek</p>
      <p v-if="albumLenght" class="card-text col-6"><i class="fa-regular fa-clock fa-lg me-1" style="color: #CCCCCC;"></i> {{ albumLenght }}
        minut</p>
      <div class="container col-6">
        <a @click="addAlbumToCart(id)" class="btn btn-success rounded rounded-5 my-4">Dodaj do koszyka</a>
      </div>
      <div class="container col-6">
      <a :href="`/album/show/${id}`" class="btn btn-primary rounded rounded-5 my-4">Sprawdź</a>
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
    songs: Number,
    albumLenght: Number
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
    const songsRef = ref(props.songs);
    const albumLenghtRef = ref(props.albumLenght);

    return {
      idRef,
      coverRef,
      titleRef,
      authorRef,
      studioRef,
      songsRef,
      albumLenghtRef
    };
  },
  methods: {
    addAlbumToCart(id) {
      api.post(`/api/Shopping/AddAlbumToCart?albumId=${id}&qty=1`,{
        albumId: id,
        qty: 1
      })
    },
  }
}
</script>


<style>

</style>