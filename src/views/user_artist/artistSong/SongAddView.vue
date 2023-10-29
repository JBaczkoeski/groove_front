<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-2 p-0">
        <side-bar/>
      </div>
      <div class="container col-9 d-flex justify-content-center h-75">
        <div class="row">
          <div class="container col-12">
            <h2 class="text-center mt-5 mb-3">Dodawanie utworu</h2>
          </div>
          <div class="card">
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
                  <label for="photo">Okładka</label>
                  <input
                      v-on:change="SelectFileChange"
                      type="file"
                      class="form-control mt-2"
                      id="photo"
                      name="photo"
                      accept="image/*"
                      required
                  />
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
                <div class="form-group text-center">
                  <button
                      @click="handleSave()"
                      :disabled="isSaving"
                      type="button"
                      class="btn btn-success mt-3 btn-lg shadow">
                    Dodaj nowy utwór
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
  components: {
    sideBar
  },

  methods: {
    handleSave() {
      this.isSaving = true
      this.$store.dispatch('song/createSong', this.song)
      //location.reload();
    },
    SelectFileChange(event) {
      const filePhoto = event.target.files[0];
      this.song.photo = filePhoto;
    }
  }
}
</script>

<style scoped>

</style>