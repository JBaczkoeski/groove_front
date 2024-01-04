<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-3 col-md-2 p-0">
        <SideBarUser/>
      </div>
      <div class="col-12 col-sm-9 mt-5 mb-4 ms-4">
        <div class="row">
          <div class="col-12 mt-2 text-center border-bottom border-3">
            <h2>Zamówienia</h2>
          </div>
          <div class="col-12">
            <div class="table-responsive">
              <table class="table text-center table-dark-song">
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
                <ordersElement v-for="order in orders" :key="order.id" :id="1" :series_number="order.orderNumber"
                               :order_date="formatDate(order.orderDate)" :price="order.orderCost"/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarUser from "@/components/SideBarUser.vue";
import ordersElement from "@/components/OrdersElement.vue";
import api from "@/services/api";

export default {
  components: {
    SideBarUser,
    ordersElement,
  },
  data() {
    return {
      orders: []
    }
  },
  mounted() {
    this.getOrders()
  },
  methods: {
    getOrders() {
      api.get('/api/User/GetUserOrders').then(
          response => {
            this.orders = response.data.$values
          }
      )
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;

      return `${formattedDay}-${formattedMonth}-${year}`;
    }
  }
}
</script>