<template>
  <div>
    <UserList></UserList>
  <AddUser></AddUser>
  </div>
</template>

<script>
  import AddUser from '../components/AddUser.vue';
  import UserList from '../components/userList.vue';
  export default {
    components: {
      AddUser,
      UserList
    },
    data() {
      return {
        msg: '首页'
      }
    }
  }
</script>

<style>
</style>
