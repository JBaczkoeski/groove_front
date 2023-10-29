<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-2 p-0">
        <side-bar/>
      </div>
      <div class="col-12 col-sm-9 mt-5 mb-4">
        <div class="container border border-3 rounded rounded-5 p-4 shadow">
          <div class="row">
            <div class="col-12">
              <h2 class="text-center mt-5 mb-3">Aplikowanie do wytwórni</h2>
            </div>
            <div class="col-12 col-md-8 offset-md-2">
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">Imię i nazwisko</label>
                  <input
                      v-model="song.name"
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                  />
                </div>
                <div class="mb-3">
                  <label for="author" class="form-label">Wytwórnia</label>
                  <select
                      v-model="song.author"
                      class="form-control"
                      id="author"
                      name="author"
                  >
                    <option value="wytwornia1">Wytwórnia 1</option>
                    <option value="wytwornia2">Wytwórnia 2</option>
                    <option value="wytwornia3">Wytwórnia 3</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">Wiadomość do wytwórni</label>
                  <textarea
                      v-model="song.description"
                      class="form-control"
                      id="description"
                      rows="3"
                      name="description"
                  ></textarea>
                </div>
                <div class="text-center">
                  <button
                      @click="handleSave()"
                      :disabled="isSaving"
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
