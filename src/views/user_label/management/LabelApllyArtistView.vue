<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-2 p-0">
        <side-bar-label/>
      </div>
      <div class="container col-9 mt-3">
        <div class="table-responsive">
          <table class="table table-dark-song">
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
            <ArtistApllyElementList
                :key="1" :name="'Oskar'" :lastName="'Sukiennik'" :song="'POLITECHNIKA'" :addDate="'09-09-2023'"
            />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarLabel from '@/components/SideBarManagmentLabel.vue';
import ArtistApllyElementList from "@/components/ArtistApllyElementList.vue";

export default {
  components: {
    SideBarLabel,
    ArtistApllyElementList,
  },
}
</script>

<style>

</style>