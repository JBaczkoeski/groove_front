<template>
  <div class="card border border-0 shadow me-3 mb-3 text-center rounded-5"
       style="width: 19rem;">
    <img :src="cover" class="w-75 mt-4" style="margin-left: 34px;" alt="album cover">
    <div class="card-body row">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">Wykonawca: {{ author }}</p>
      <p class="card-text col-6"><i class="fa-solid fa-music fa-lg me-1" style="color: #000000;"></i>{{ songs }}
        piosenek</p>
      <p class="card-text col-6"><i class="fa-regular fa-clock fa-lg me-1" style="color: #000000;"></i> {{ albumLenght }}
        minut</p>
      <a href="#" class="btn btn-success rounded rounded-5 my-4">Podgląd</a>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  props: {
    id: Number,
    cover: String,
    title: String,
    author: String,
    songs: Number,
    albumLenght: Number
  },

  setup(props) {
    const idRef = ref(props.id);
    const coverRef = ref(props.cover);
    const titleRef = ref(props.title);
    const authorRef = ref(props.author);
    const songsRef = ref(props.songs);
    const albumLenghtRef = ref(props.albumLenght);

    return {
      idRef,
      coverRef,
      titleRef,
      authorRef,
      songsRef,
      albumLenghtRef
    };
  }
}
</script>


<style scoped>

</style>