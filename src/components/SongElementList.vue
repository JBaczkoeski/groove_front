<template>
  <tr>
    <th scope="row" class="pt-5">{{ place }}</th>
    <td><img :src="cover" alt="Opis obrazu" class="shadow cover-album"></td>
    <td class="pt-5">{{ title }}</td>
    <td class="pt-5">{{ album }}</td>
    <td class="pt-5">{{ addDate }}</td>
    <td class="pt-5">{{ time }}</td>
  </tr>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    place: Number,
    cover: String,
    title: String,
    album: String,
    addDate: String,
    time: String,
  },
  setup(props) {
    const placeRef = ref(props.place);
    const coverRef = ref(props.cover);
    const titleRef = ref(props.title);
    const albumRef = ref(props.album);
    const addDateRef = ref(props.addDate);
    const timeRef = ref(props.time);

    return {
      placeRef,
      coverRef,
      titleRef,
      albumRef,
      addDateRef,
      timeRef,
    };
  }
}
</script>

<style>
.cover-album{
  width: 100px;
}
</style>