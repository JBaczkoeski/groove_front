<template>
  <div class="container-fluid d-flex justify-content-center">
    <div class="row">
      <div class="container col-12">
        <h2 class="text-center mt-5 mb-3">Edytowanie utworu</h2>
      </div>
      <div class="card d-flex justify-content-center">
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="name">Tytuł</label>
              <input
                  v-model="song.name"
                  type="text"
                  class="form-control mt-2"
                  id="name"
                  name="name"/>
            </div>
            <div class="form-group">
              <label for="text">Autor</label>
              <input
                  v-model="song.author"
                  type="text"
                  class="form-control mt-2"
                  id="author"
                  name="author"/>
            </div>
            <div class="form-group">
              <label for="photo">Zdjęcie</label>
              <input
                  @change="selectFileChange"
                  type="file"
                  class="form-control mt-2"
                  id="photo"
                  name="photo"/>
            </div>
            <div class="form-group">
              <label for="description">Opis</label>
              <textarea
                  v-model="song.description"
                  class="form-control mt-2"
                  id="description"
                  rows="3"
                  name="description"></textarea>
            </div>
            <button
                @click="handleSave()"
                :disabled="isSaving"
                type="button"
                class="btn btn-success mt-3">
              Dodaj
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import api from '../services/api.js'


// import SideBarAdmin from "@/components/SideBarAdmin.vue";
// import songElementList from "@/components/songElementList.vue";
export default {
  data() {
    return {
      song: {
        name: '',
        author: '',
        photo: null,
        description: ''
      },

      isSaving: false
    }
  },

  methods: {
    handleSave() {
      this.isSaving = true
      this.$store.dispatch('song/edit', {
        name: this.name,
        author: this.author,
        photo: this.photo,
        description: this.description
      })
    },
    selectFileChange(event) {
      const filePhoto = event.target.files[0];
      this.photo = filePhoto;
    }
  }
}
</script>


<style>

</style>