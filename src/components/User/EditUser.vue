<template>
  <div>
      <h1>Edit User</h1>
      <form v-on:submit.prevent="editUser">
        <p>title: <input type="text" v-model="user.title"></p>
        <p>author: <input type="text" v-model="user.author"></p>
        <p>total_page: <input type="text" v-model="user.total_page"></p>
        <p>publisher: <input type="text" v-model="user.publisher"></p>
        <p>category: <input type="text" v-model="user.category"></p>
        <p>price: <input type="text" v-model="user.price"></p>
          <p><button type="submit">edit user</button></p>
      </form>
      <hr>
      <!-- <div>
          <p>ชื่อ: {{ user.name }}</p>
          <p>นามสกุล: {{ user.lastname }}</p>
          <p>Email: {{ user.email }}</p>
          <p>Password: {{ user.password }}</p>
          <p></p>
      </div> -->
  </div>
</template>
<script>
import UsersService from '@/services/UsersService'
export default {
  data() {
      return {
        title: {
          author: "",
          total_page: "",
          publisher: "",
          category: "",
          price: ""
          }
      }
  },
  methods: {
      async editUser() {
          try {
              await UsersService.put(this.user)
              this.$router.push({
                  name: 'users'
              })
          } catch (err) {
              console.log(err)
          }
      }
  },
  async created() {
      try {
          let userId = this.$route.params.userId
          this.user = (await UsersService.show(userId)).data
      } catch (error) {
          console.log(error)
      }
  }
}
</script>
<style scoped></style>