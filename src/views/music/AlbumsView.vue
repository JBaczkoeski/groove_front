<template>
  <div class="container pt-3">
    <div class="row d-flex justify-content-center">
      <SingleAlbum  v-for="index in 8" :key="index" :cover="'https://glamrap.pl/wp-content/uploads/2021/03/sentino-czary-mary.jpg'" :title="'Czary mary'" :album-lenght="59" :author="'Oskar Sukiennik'" :songs="14" :id="1"/>
    </div>
  </div>
</template>

<script>
import SingleAlbum from "@/components/SingleAlbum.vue";

export default{
  components:{
    SingleAlbum
  }
}
</script>

<style scoped>

</style>