<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-2 p-0">
        <side-bar/>
      </div>

      <div class="container col-9 d-flex justify-content-center h-75">
        <div class="row">
          <div class="container col-12">
            <h2 class="text-center mt-5 mb-3">Dodawanie albumu</h2>
          </div>
          <div class="card card-dark border border-3 rounded rounded-5">
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="name">Tytuł</label>
                  <input
                      v-model="Name"
                      type="text"
                      class="form-control mt-2 input-field"
                      id="name"
                      name="name"
                  />
                </div>
                <div class="form-group mb-5 mt-3">
                  <label for="'cover'">Okładka</label>
                  <input
                      type="file"
                      @change="handleFileChange()"
                      class="form-control mt-2 input-field"
                      :id="'cover'"
                      :name="'cover'"
                      accept="image/*"
                  />
                </div>
                <p class="fw-bold h3">Utwory:</p>
                <div class="form-group mt-4" v-for="(track, index) in tracks" :key="index">
                  <p class="fw-bold"> Nr {{index + 1}}</p>
                  <label :for="'name' + index">Tytuł utworu</label>
                  <input
                      v-model="track.Name"
                      type="text"
                      class="form-control mt-2 mb-3 input-field"
                      :id="'name' + index"
                      :name="'name' + index"
                  />
                  <label :for="'cover' + index">Okładka utworu</label>
                  <input
                      type="file"
                      @change="handleFileChange(index, $event)"
                      class="form-control mt-2 input-field"
                      :id="'cover' + index"
                      :name="'cover' + index"
                      accept="image/*"
                  />
                  <label :for="'cover' + index">lub dodaj link do zdjęcia</label>
                  <input v-model="track.ImgUrl" class="form-control mt-2 input-field">
                </div>
                <div class="form-group text-center">
                  <button @click="addTrack" type="button" class="btn btn-success mt-3 me-4 shadow">
                    Dodaj utwór
                  </button>
                  <button @click="removeTrack(index)" type="button" class="btn btn-danger mt-3">
                    Usuń utwór
                  </button>
                </div>
                <div class="form-group text-center">
                  <button
                      @click="handleSave"
                      type="button"
                      class="btn btn-success mt-3 btn-lg shadow"
                  >
                    Zapisz
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
// import api from "@/services/api";

export default {
  data() {
    return {
      Name: '',
      Author: '',
      Img: '',
      Description: '',
      ImgUrl: '',
      tracks: [
        {
          Name: '',
          Author: '',
          Img: '',
          Description: '',
          ImgUrl: '',
          file: null
        }
      ]
    }
  },
  components: {
    sideBar
  },

  methods: {
    handleFileChange(index, event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.tracks[index].ImgUrl = file.name;
          this.tracks[index].Img = file.name;
          this.tracks[index].file = file;
        };

        reader.readAsDataURL(file);
      } else {
        this.tracks[index].Img = this.tracks[index].ImgUrl;
        this.tracks[index].file = null;
      }
    },
    addTrack() {
      this.tracks.push({
        Name: '',
        Author: '',
        Img: '',
        Description: '',
        ImgUrl: '',
        file: null
      });
    },
    removeTrack(index) {
      this.tracks.splice(index, 1);
    },
    handleSave() {
       const userId = localStorage.getItem('token');

      const formDataArray = this.tracks.map(track => {
        const formData = new FormData();
        formData.append('Name', track.Name);
        if (track.Img === '')
        {
          formData.append('Img', track.ImgUrl);
        }else {
          formData.append('Img', track.Img);
        }
        return formData;
      });

      const extractedData = formDataArray.map(formData => ({
        Name: formData.get('Name'),
        Img: formData.get('Img')
      }));

///api/Artist/AddAlbum
      api.post('/api/Artist/AddTrackToAlbum\n',{
        Track: extractedData,
        userId: userId
      })
      console.log(extractedData);
    }
      // Teraz masz tablicę formDataArray z danymi do wysłania na serwer.
      // Możesz je wysłać w osobnych żądaniach lub jako jedno żądanie zależnie od Twoich wymagań.
  }
}
</script>
