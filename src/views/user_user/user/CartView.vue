<template>
  <div class="table-responsive">
    <table class="table table-dark-song">
      <thead>
      <tr class="text-center">
        <th scope="col">#</th>
        <th scope="col">Tytuł</th>
        <th scope="col">Ilość</th>
        <th scope="col">Cena</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <UserCartList v-for="item in items" :key="item.id" :name="item.albumName ?? item.trackName" :price="item.price" :quant="item.quantity"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserCartList from "@/components/UserCartList.vue";
import api from "@/services/api";

export default {
  components:{
    UserCartList
  },
  data(){
    return {
      items: []
    }
  },
  mounted(){
    this.getCart()
  },
  methods:{
    getCart(){
      api.get('/api/Shopping/GetCart').then(response =>
      {
        this.items = response.data.$values
        console.log(this.items)
      })
    },
  }
}
</script>

<style>

</style>