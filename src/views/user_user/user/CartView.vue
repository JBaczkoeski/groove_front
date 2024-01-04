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
      <UserCartList v-for="(item,index) in items" :key="item.itemId" :place="index" :id="item.itemId" :name="item.albumName ?? item.trackName" :price="item.price" :quant="item.quantity" :type="item.type"/>
      </tbody>
    </table>
    <div class="container col-12 text-end h3">Cena końcowa: {{price}} <button @click="Buy" class="btn submit-button-green">Kup teraz</button></div>
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
      items: [],
      price: null
    }
  },
  mounted(){
    this.getCart()
    this.getPrice()
  },
  methods:{
    getCart(){
      api.get('/api/Shopping/GetCart').then(response =>
      {
        this.items = response.data.$values
        console.log(this.items)
      })
    },
    getPrice(){
      api.get('/api/Shopping/GetCartPrice').then(response =>
      {
        this.price = response.data
      })
    },
    Buy(){
      api.post('/api/Shopping/PayForCartByBalance').then(Response =>{
        if (Response.status === 200) {
          window.location.reload()
        }
      })
    }
  }
}
</script>

<style>

</style>