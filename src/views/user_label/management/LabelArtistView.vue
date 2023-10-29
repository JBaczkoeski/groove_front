<template>
  <div class="row">
    <side-bar-label class="container col-2"/>
    <div class="container col-9 mt-3">
      <table class="table">
        <thead>
        <tr class="text-center">
          <th scope="col">#</th>
          <th scope="col">Imię</th>
          <th scope="col">Nazwisko</th>
          <th scope="col">Utwór</th>
          <th scope="col">Data aplikacji</th>
          <th scope="col"></th>
        </tr>

        </thead>
        <tbody>
          <ArtistElementList
            :key = "1" :name = "'Oskar'" :lastName = "'Sukiennik'" :song = "'POLITECHNIKA'" :addDate = "'09-09-2023'"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SideBarLabel from '@/components/SideBarLabel.vue';
import ArtistElementList from "@/components/ArtistElementList.vue";

export default {
  components: {
    SideBarLabel,
    ArtistElementList,
  },
}
</script>

<style>

</style>