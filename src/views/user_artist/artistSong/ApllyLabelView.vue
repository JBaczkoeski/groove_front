<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-2 p-0">
        <side-bar/>
      </div>
      <div class="col-12 col-sm-9 col-md-10 mt-5 mb-4">
        <div class="container border border-3 rounded rounded-5 p-4 shadow">
          <div class="row">
            <div class="col-12">
              <h2 class="text-center mt-5 mb-3">Aplikowanie do wytwórni</h2>
            </div>
            <div class="col-12 col-md-8 offset-md-2">
              <form>
                <div class="mb-3">
                  <label for="author" class="form-label">Wytwórnia</label>
                  <select
                      v-model="label"
                      class="form-select input-field"
                      id="author"
                      name="author"
                  >
                    <option v-for="studio in studios" :key="studio.id" :value="studio.id">{{ studio.name }}</option>
                  </select>
                </div>
                <div class="text-center">
                  <button
                      @click="handleSave()"
                      type="button"
                      class="btn btn-success btn-lg shadow"
                  >
                    Aplikuj!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from '@/components/SideBarArtist.vue'
import api from "@/services/api";
export default {
  data() {
    return {
      label: '',
      studios: []
    }
  },
  components: {
    sideBar
  },
  mounted() {
    this.getAllStudios();
  },
  methods: {
    async handleSave() {
      try {
        const response = await api.post(`/api/Artist/ApplyToStudio?studioId=${this.label}`);
        console.log('Sukces!', response);
      } catch (error) {
        console.error('Błąd podczas aplikowania do studia:', error);
      }
    },
    getAllStudios() {
      api.get(`/api/Studio/GetAllStudios`)
          .then(response => {
            this.studios = response.data.$values;
          })
          .catch(error => {
            console.error('Błąd podczas pobierania ścieżek:', error);
          });
    }
  }
}
</script>
