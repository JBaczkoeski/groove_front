<template>
  <div class="container-fluid">
    <div class="row">
      <div class="container col-9 mt-3">
        <div class="table-responsive">
          <table class="table table-dark-song">
            <thead>
            <tr class="text-center">
              <th scope="col">#</th>
              <th scope="col">Imię</th>
              <th scope="col"></th>
            </tr>

            </thead>
            <tbody>
            <UsersElementList
                v-for="user in users" :key="user.id" :name="user.email" :place="0"
            />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import UsersElementList from "@/components/UsersElementList.vue";
import api from "@/services/api";

export default defineComponent({
  components: {
    UsersElementList,
  },
  data(){
    return{
      users: []
    }
  },
  mounted() {
    this.getUsers()
  },
  methods:{
    getUsers(){
      api.get('/api/Admin/GetAllUsers').then(Response=>{
        this.users = Response.data.$values;
        console.log(this.users)
      })
    }
  }
})
</script>