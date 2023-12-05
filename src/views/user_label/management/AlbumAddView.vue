<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-2 p-0">
        <SideBarManagmentLabel/>
      </div>

      <div class="container col-9 d-flex justify-content-center h-75">
        <div class="row">
          <div class="container col-12">
            <h2 class="text-center mt-5 mb-3">Dodawanie albumu</h2>
          </div>
          <div class="card card-dark border border-3 rounded rounded-5 mb-5">
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="type">Rodzaj albumu</label>
                  <select v-model="type" id="type" type="number" class="form-control mt-2 input-field  mb-2">
                    <option value="free">Darmowy</option>
                    <option value="pay">Płatny</option>
                  </select>
                </div>
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
                <div class="form-group mb-2 mt-3">
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
                <label :for="'cover' + index">lub dodaj link do zdjęcia</label>
                <input v-model="ImgUrl" class="form-control mt-2 input-field  mb-3">
                <label for="price">Cena</label>
                <input v-model="Price" id="price" type="number" class="form-control mt-2 input-field  mb-3">
                <label for="price">Artysta</label>
                <select v-model="Artist" id="price" type="number" class="form-select mt-2 input-field  mb-5">
                  <option v-for="artist in artists" :key="artist.id" :value="artist.id">{{artist.name}}</option>
                </select>
                <p class="fw-bold h3">Utwory:</p>
                <div class="form-group mt-4" v-for="(track, index) in tracks" :key="index">
                  <p class="fw-bold"> Nr {{ index + 1 }}</p>
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
                  <input v-model="track.ImgUrl" class="form-control mt-2 input-field" required>
                  <label for="cover" class="mt-3">Plik mp3 utworu</label>
                  <input
                      type="file"
                      @change="handleMp3FileChange(index, $event)"
                      class="form-control mt-2 input-field"
                      id="cover"
                      name="cover"
                      accept=".mp3"
                      required
                  />
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
import SideBarManagmentLabel from "@/components/SideBarManagmentLabel.vue";
import api from "@/services/api";
import index from "vuex";

export default {
  computed: {
    index() {
      return index
    }
  },
  data() {
    return {
      Name: null,
      Author: null,
      Img: null,
      Price: null,
      Description: null,
      ImgUrl: null,
      Artist: null,
      type: null,
      artists: [],
      tracks: [
        {
          Name: null,
          Author: null,
          Img: null,
          Description: null,
          ImgUrl: null,
          file: null,
          Mp3File: '',
        }
      ]
    }
  },
  components: {
    SideBarManagmentLabel
  },
  mounted(){
    this.getArtists()
  },
  methods: {
    getArtists() {
      api.get('/api/Studio/GetArtistByStudio').then(response=>{
        this.artists = response.data.$values
      })
    },
    handleMp3FileChange(index, event) {
      this.tracks[index].Mp3File = event.target.files[0];
      console.log(this.tracks[index].Mp3File)
    },
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
    async handleSave() {
      const formData = new FormData();

      formData.append('Name', this.Name);
      if (this.Img === null) {
        this.Img = this.ImgUrl;
      }
      formData.append('Img', this.Img);
      formData.append('Desc', 'Description');
      formData.append('Price', this.Price);
      formData.append('ArtistId', this.Artist);

      this.tracks.forEach((track, index) => {
        formData.append(`Tracks[${index}][name]`, track.Name);
        formData.append(`Tracks[${index}][img]`, track.Img || track.ImgUrl);
        formData.append(`Tracks[${index}].Mp3File`, track.Mp3File);
      });

      try {

        let url = '';
        if(this.type === 'pay')
        {
          url = '/api/Studio/CreateAlbumWithTracksPaid'
        }
        else
        {
          url = '/api/Studio/CreateAlbumWithTracksFree'
        }

        const response = await api.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Utwór został pomyślnie dodany:', response);
      } catch (error) {
        console.error('Wystąpił błąd podczas dodawania utworu:', error);
      }
    }
  }
}
</script>
