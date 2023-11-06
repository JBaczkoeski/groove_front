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
                      v-model="Name"
                      type="text"
                      class="form-control mt-2"
                      id="name"
                      name="name"/>
                </div>
                <div class="form-group">
                  <label for="text">Autor</label>
                  <input
                      v-model="Author"
                      type="text"
                      class="form-control mt-2"
                      id="author"
                      name="author"/>
                </div>
                <div class="form-group mt-4">
                  <label for="cover">Okładka</label>
                  <input
                      type="file"
                      @change="handleFileChange"
                      class="form-control mt-2"
                      id="cover"
                      name="cover"
                      accept="image/*"
                  />
                  <label for="cover">lub dodaj link do zdjęcia</label>
                  <input type="text" v-model="ImgUrl" class="form-control mt-2">
                </div>
                <div class="form-group">
                  <label for="description">Opis</label>
                  <textarea
                      v-model="Description"
                      class="form-control mt-2"
                      id="description"
                      rows="3"
                      name="description"></textarea>
                </div>
                <div class="form-group text-center">
                  <button
                      @click="handleSave()"
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
import api from "@/services/api";

export default {
  data() {
    return {
      Name: '',
      Author: '',
      Img: '',
      Description: '',
      ImgUrl: '',
    }
  },
  components: {
    sideBar
  },

  methods: {
    handleFileChange(event) {
      this.Img = event.target.files[0].name;
      console.log(this.Img)
    },
    handleSave() {
      const UserId = localStorage.getItem('userId')

      if(this.Img === ''){
        console.log(this.Img)
        console.log('brak')
        this.Img = this.ImgUrl;
      }

      api.post('/api/Artist/AddTrack', {
        Name: this.Name,
        Author: this.Author,
        Img: this.Img,
        Description: this.Description,
        UserId:UserId
      });
    },
  }
}
</script>