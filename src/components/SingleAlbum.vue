<template>
  <div
      class="card border border-3 d-flex justify-content-center shadow my-3 mx-2 text-center rounded-5 col-12 col-sm-3 card-dark">
    <img v-if="cover !== undefined && cover !== ''" :src="cover" style="margin-left: 50px" class="w-75 mt-4 rounded-4"
         alt="album cover">
    <div class="card-body row">
      <h5 v-if="title" class="card-title mb-4">{{ title }}</h5>
      <p v-if="author" class="card-text">Wykonawca: {{ author }}</p>
      <p v-if="studio" class="card-text">Studio: {{ studio }}</p>
      <p v-if="songs" class="card-text col-6"><i class="fa-solid fa-music fa-lg me-1"
                                                 style="color: #CCCCCC;"></i>{{ songs }} piosenek</p>
      <p v-if="albumLenght" class="card-text col-6"><i class="fa-regular fa-clock fa-lg me-1"
                                                       style="color: #CCCCCC;"></i> {{ albumLenght }} minut</p>
      <a :href="`/album/show/${id}`" style="max-height: 45px" class="btn btn-success rounded rounded-pill my-4">Podgląd</a>
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