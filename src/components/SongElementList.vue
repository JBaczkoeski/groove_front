<template>
  <tr class="text-center">
    <th scope="row" class="pt-5">{{ placeRef + 1 }}</th>
    <td><img :src="cover" alt="Opis obrazu" class="shadow cover-album"></td>
    <td class="pt-5">{{ title }}</td>
    <td class="pt-5">{{ albumName }}</td>
    <td class="pt-5">{{ addDate }}</td>
    <td class="pt-5">{{ time }}</td>
    <td class="pt-5">

      <a @click="deleteTrackFromAlbum(albumId, id)" class="btn">
        <i class="fa-solid fa-trash fa-2xl icon"></i>
      </a>
      <a @click="load(track,title,cover,id)" class="btn">
        <i class="fa-solid fa-play fa-2xl icon"></i>
      </a>
    </td>
  </tr>
</template>

<script>
import {ref} from 'vue';
import {useStore} from "vuex";
import api from "@/services/api";

export default {
  props: {
    id: Number,
    place: Number,
    cover: String,
    title: String,
    album: String,
    addDate: String,
    time: String,
    track: String,
    edit: Boolean,
    albumId: Number,
    albumName: String
  },
  setup(props) {
    const idRef = ref(props.id);
    const placeRef = ref(props.place);
    const coverRef = ref(props.cover);
    const titleRef = ref(props.title);
    const albumRef = ref(props.album);
    const addDateRef = ref(props.addDate);
    const timeRef = ref(props.time);
    const trackRef = ref(props.track);
    const editRef = ref(props.edit);
    const albumIdRef = ref(props.albumId);
    const albumNameRef = ref(props.albumName);
    const store = useStore();

    const load = (track, title, cover, id) => {
      store.dispatch('player/togglePlayer', true);
      store.dispatch('player/musicPlayer', track);
      store.dispatch('player/TitlePlayer', title);
      store.dispatch('player/CoverAlbumPlayer', cover);
      store.dispatch('player/TrackIdPlayer', id);
    };

    return {
      idRef,
      placeRef,
      coverRef,
      titleRef,
      albumRef,
      addDateRef,
      timeRef,
      trackRef,
      load,
      editRef,
      albumIdRef,
      albumNameRef
    };
  },
  methods: {
    deleteTrackFromAlbum(albumId, id) {
      api.delete(`/api/Artist/RemoveFromAlbum?trackId=${id}&albumId=${albumId}`)
    }
  }
}
</script>

<style>
.cover-album {
  width: 100px;
}
</style>