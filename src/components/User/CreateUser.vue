<template>
    <div>
      <h1>Create User</h1>
      <form v-on:submit.prevent = "createUser">
        <p>title: <input type="text" v-model="user.title"></p>
        <p>author: <input type="text" v-model="user.author"></p>
        <p>total_page: <input type="text" v-model="user.total_page"></p>
        <p>publisher: <input type="text" v-model="user.publisher"></p>
        <p>category: <input type="text" v-model="user.category"></p>
        <p>price: <input type="text" v-model="user.price"></p>
        <p><button type="submit">create user</button></p>
      </form>
    </div>
  </template>
  
  <script>
  import UsersService from "@/services/UsersService";
  
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
      };
    },
    methods: {
      async createUser(){
        try{
          await UsersService.post(this.user)
          this.$router.push('/users')
        }catch(err){
          console.log(err)
        }
      }
    }
  };
  </script>
  
  <style></style>