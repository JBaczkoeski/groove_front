<template>
  <tr>
    <th scope="row">{{id}}</th>
    <td>{{series_number}}</td>
    <td>{{order_date}}</td>
    <td>{{price}}</td>
    <td class="d-flex justify-content-center">
      <a href="#" ><i class="fa-solid fa-file-invoice-dollar fa-2xl icon"></i></a>
      <a href="#"><i class="fa-solid fa-file-arrow-down fa-2xl ms-4 icon"></i></a>
      <a href="#"><i class="fa-solid fa-trash fa-2xl ms-4 icon"></i></a>
    </td>
  </tr>
</template>

<script>
import {ref} from "vue";

  export default {
    props: {
      id: Number,
      series_number: String,
      order_date: Date,
      price: Number
    },
    setup(props){
      const idRef = ref(props.id);
      const series_numberRef = ref(props.series_number);
      const order_dateRef = ref(props.order_date);
      const priceRef = ref(props.price);

      return {
        idRef,
        series_numberRef,
        order_dateRef,
        priceRef
      }
    }
  }
</script>

<style scoped>

</style>