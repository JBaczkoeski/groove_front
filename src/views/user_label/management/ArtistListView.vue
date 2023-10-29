<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-2 p-0">
        <side-bar-managment-label/>
      </div>
      <div class="container col-9 mt-3">
        <div class="table-responsive">
          <table class="table">
            <thead>
            <tr class="text-center">
              <th scope="col">#</th>
              <th scope="col">Imię</th>
              <th scope="col">Nazwisko</th>
              <th scope="col">Data dołączenia</th>
              <th scope="col"></th>
            </tr>

            </thead>
            <tbody>
            <ArtistElementList
                :key="1" :name="'Oskar'" :lastName="'Sukiennik'" :addDate="'09-09-2023'"
            />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarManagmentLabel from "@/components/SideBarManagmentLabel.vue";
import ArtistElementList from "@/components/ArtistElementList.vue";

export default {
  components: {
    SideBarManagmentLabel,
    ArtistElementList,
  },
}
</script>

<style>

</style>