<template>
  <div>
    <HeaderTop></HeaderTop>
    <UserList></UserList>
    <AddUser></AddUser>
  </div>
</template>

<script>
  import AddUser from '../components/AddUser.vue';
  import UserList from '../components/userList.vue';
  import HeaderTop from '../components/HeaderTop.vue';
  export default {
    components: {
      AddUser,
      UserList,
      HeaderTop,
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
