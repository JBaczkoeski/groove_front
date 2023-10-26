<template>
  <div class="row">
    <side-bar class="container col-2"/>
    <div class="container col-9 mt-3">
      <table class="table">
        <thead>
        <tr class="text-center">
          <th scope="col">#</th>
          <th scope="col"></th>
          <th scope="col">Tytuł</th>
          <th scope="col">Album</th>
          <th scope="col">Data dodania</th>
          <th scope="col"><i class="fa-regular fa-clock fa-lg"></i></th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody v-if="tracks">
        <SongElementList/>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBarArtist.vue'
import SongElementList from "@/components/SongElementList.vue";

export default {
  components: {
    SideBar,
    SongElementList
  }
}
</script>