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
              <th scope="col">Data aplikacji</th>
              <th scope="col"></th>
            </tr>

            </thead>
            <tbody>
            <ArtistApllyElementList
               v-for="(aplication,index) in aplications" :key="aplication.$id" :id="aplication.id" :name="aplication.artistName" :place="index" :addDate="formatDateTime(aplication.created)"
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
import api from "@/services/api";

export default {
  components: {
    SideBarLabel,
    ArtistApllyElementList,
  },
  data() {
    return {
      aplications: []
    }
  },
  mounted() {
    this.getAplication()
  },
  methods: {
     getAplication() {
      api.get('/api/Studio/ShowAllRequests').then(response => {
        this.aplications = response.data.$values;
        console.log(this.aplications)
      })
    },
    formatDateTime(dateTime) {
      const date = new Date(dateTime);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
    }
  }
}
</script>