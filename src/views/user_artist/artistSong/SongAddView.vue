<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-2 p-0">
        <sideBar/>
      </div>
      <div class="container col-9 d-flex justify-content-center h-75 ">
        <div class="row">
          <div class="container col-12">
            <h2 class="text-center mt-5 mb-3">Dodawanie utworu</h2>
          </div>
          <div class="card card-dark border border-3 rounded rounded-5">
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="name" class="mt-3">Tytuł</label>
                  <input
                      v-model="Name"
                      type="text"
                      class="form-control mt-2 input-field"
                      id="name"
                      name="name"/>
                </div>
                <div class="form-group">
                  <label for="text" class="mt-3">Autor</label>
                  <input
                      v-model="Author"
                      type="text"
                      class="form-control mt-2 input-field"
                      id="author"
                      name="author"/>
                </div>
                <div class="form-group mt-2">
                  <label for="cover" class="mt-3">Okładka</label>
                  <input
                      type="file"
                      @change="handleFileChange"
                      class="form-control mt-2 input-field"
                      id="cover"
                      name="cover"
                      accept="image/*"
                  />
                  <label for="cover" class="mt-2">lub dodaj link do zdjęcia</label>
                  <input type="text" v-model="ImgUrl" class="form-control mt-2 input-field">
                </div>
                <div class="form-group mt-2">
                  <label for="cover" class="mt-3">Plik mp3 utworu</label>
                  <input
                      type="file"
                      @change="handleMp3FileChange"
                      class="form-control mt-2 input-field"
                      id="cover"
                      name="cover"
                      accept=".mp3"
                  />
                </div>
                <div class="form-group">
                  <label for="description" class="mt-3">Opis</label>
                  <textarea
                      v-model="Description"
                      class="form-control mt-2 input-field"
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
      Img: null,
      Description: '',
      ImgUrl: '',
      mp3File: null,
    }
  },
  components: {
    sideBar
  },

  methods: {
    handleMp3FileChange(event) {
      this.mp3File = event.target.files[0];

    },
    handleFileChange(event) {
      this.Img = event.target.files[0].name;
    },
    async handleSave() {
      const UserId = localStorage.getItem('userId');

      const formData = new FormData();
      formData.append('Name', this.Name);
      formData.append('Author', this.Author);
      if (this.Img === null)
      {
        formData.append('Img', this.ImgUrl);
      }else {
        formData.append('Img', this.Img);
      }
      formData.append('Description', this.Description);
      formData.append('UserId', UserId);
      console.log(this.mp3File)
      formData.append('mp3File', this.mp3File);

      try {
        const response = await api.post('/api/Artist/AddTrack', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Plik MP3 został pomyślnie przesłany!', response);
      } catch (error) {
        console.error('Wystąpił błąd podczas przesyłania pliku MP3:', error);
      }
    },
  }
}
</script>