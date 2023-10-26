<template>
  <div class="row">
    <side-bar class="container col-2"/>
    <div class="container col-9 d-flex justify-content-center h-75">
      <div class="row">
        <div class="container col-12">
          <h2 class="text-center mt-5 mb-3">Aplikowanie do wytwórni</h2>
        </div>
        <div class="card">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="name">Imię i nazwisko</label>
                <input
                    v-model="song.name"
                    type="text"
                    class="form-control mt-2"
                    id="name"
                    name="name"/>
              </div>
              <div class="form-group">
                <label for="author">Wytwórnia</label>
                <select v-model="song.author" class="form-control mt-2" id="author" name="author">
                  <option value="wytwornia1">Wytwórnia 1</option>
                  <option value="wytwornia2">Wytwórnia 2</option>
                  <option value="wytwornia3">Wytwórnia 3</option>
                </select>
              </div>
              <div class="form-group">
                <label for="description">Wiadomość do wytwórni</label>
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
                  Aplikuj!
                </button>
              </div>
            </form>
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