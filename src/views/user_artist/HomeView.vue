<template>
  <div class="container-fluid">
    <div class="row">
      <div class="container justify-content-center text-center d-flex mt-4">
        <div class="row">
          <h3>Najpopularniejsze albumy wytwórni</h3>
          <div class="card border border-0 shadow shadow-lg me-5 mb-3 text-center rounded-5 mt-5" style="width: 19rem; margin-left: 250px">
            <img src="../../assets/logo.png" class="w-75 mt-4" style="margin-left: 34px;" alt="album cover">
            <div class="card-body row">
              <h5 v-if="title" class="card-title">{{ title }}</h5>
              <p v-if="author" class="card-text">Wykonawca: {{ author }}</p>
              <p v-if="studio" class="card-text">Studio: {{ studio }}</p>
              <p v-if="songs" class="card-text col-6"><i class="fa-solid fa-music fa-lg me-1" style="color: #000000;"></i>{{ songs }}
                piosenek</p>
              <p v-if="albumLenght" class="card-text col-6"><i class="fa-regular fa-clock fa-lg me-1" style="color: #000000;"></i> {{ albumLenght }}
                minut</p>
              <a :href="`/album/show/`" class="btn btn-success rounded rounded-5 my-4">Podgląd</a>
            </div>
          </div>
          <div class="card border border-0 shadow me-5 mb-3 text-center rounded-5 mt-5" style="width: 19rem;">
            <img src="../../assets/logo.png" class="w-75 mt-4" style="margin-left: 34px;" alt="album cover">
            <div class="card-body row">
              <h5 v-if="title" class="card-title">{{ title }}</h5>
              <p v-if="author" class="card-text">Wykonawca: {{ author }}</p>
              <p v-if="studio" class="card-text">Studio: {{ studio }}</p>
              <p v-if="songs" class="card-text col-6"><i class="fa-solid fa-music fa-lg me-1" style="color: #000000;"></i>{{ songs }}
                piosenek</p>
              <p v-if="albumLenght" class="card-text col-6"><i class="fa-regular fa-clock fa-lg me-1" style="color: #000000;"></i> {{ albumLenght }}
                minut</p>
              <a :href="`/album/show/`" class="btn btn-success rounded rounded-5 my-4">Podgląd</a>
            </div>
          </div>
          <div class="card border border-0 shadow me-3 mb-3 text-center rounded-5 mt-5" style="width: 19rem;">
            <img src="../../assets/logo.png" class="w-75 mt-4" style="margin-left: 34px;" alt="album cover">
            <div class="card-body row">
              <h5 v-if="title" class="card-title">{{ title }}</h5>
              <p v-if="author" class="card-text">Wykonawca: {{ author }}</p>
              <p v-if="studio" class="card-text">Studio: {{ studio }}</p>
              <p v-if="songs" class="card-text col-6"><i class="fa-solid fa-music fa-lg me-1" style="color: #000000;"></i>{{ songs }}
                piosenek</p>
              <p v-if="albumLenght" class="card-text col-6"><i class="fa-regular fa-clock fa-lg me-1" style="color: #000000;"></i> {{ albumLenght }}
                minut</p>
              <a :href="`/album/show/`" class="btn btn-success rounded rounded-5 my-4">Podgląd</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      cover: '/public/images/logo.png',
      title: 'Kocham matematykę i programowanie',
      author: 'Oskar Sukiennik',
      studio: 'Prawobżerze label',
      songs: '13',
      albumLenght: 13
    }
  }
}
</script>
