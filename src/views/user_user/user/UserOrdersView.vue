<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <SideBarUser style="height:657px;"/>
      </div>
      <div class="container col-8 mt-5 mb-4 ms-4">
        <div class="row">
          <div class="container col-12 mt-2 text-center border-bottom border-3">
            <h2>Zamówienia</h2>
          </div>
          <table class="table text-center">
            <thead>
            <tr>
              <th scope="col">L.p.</th>
              <th scope="col">Numer</th>
              <th scope="col">Data</th>
              <th scope="col">Kwota</th>
              <th scope="col">Akcje</th>
            </tr>
            </thead>
            <tbody>
            <ordersElement :id="1" :series_number="'asd123'" :order_date="20323-10-17" :price="53"/>
            <ordersElement :id="2" :series_number="'a122222'" :order_date="20323-10-17" :price="22"/>
            <ordersElement :id="3" :series_number="'as3333'" :order_date="20323-10-17" :price="45"/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarUser from "@/components/SideBarUser.vue";
import ordersElement from "@/components/OrdersElement.vue";

export default {
  components: {
    SideBarUser,
    ordersElement,
  },
}
</script>