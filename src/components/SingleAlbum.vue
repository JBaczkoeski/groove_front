<template>
  <div class="card border border-0 shadow me-3 mb-3 text-center rounded-5"
       style="width: 19rem;">
    <img v-if="cover" :src="cover" class="w-75 mt-4 rounded-4" style="margin-left: 34px;" alt="album cover">
    <div class="card-body row">
      <h5 v-if="title" class="card-title">{{ title }}</h5>
      <p v-if="author" class="card-text">Wykonawca: {{ author }}</p>
      <p v-if="studio" class="card-text">Studio: {{ studio }}</p>
      <p v-if="songs" class="card-text col-6"><i class="fa-solid fa-music fa-lg me-1" style="color: #000000;"></i>{{ songs }}
        piosenek</p>
      <p v-if="albumLenght" class="card-text col-6"><i class="fa-regular fa-clock fa-lg me-1" style="color: #000000;"></i> {{ albumLenght }}
        minut</p>
      <a :href="`/album/show/${id}`" class="btn btn-success rounded rounded-5 my-4">Podgląd</a>
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
    studio: String,
    songs: Number,
    albumLenght: Number
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
  }
}
</script>


<style scoped>

</style>