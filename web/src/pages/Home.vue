<template>
  <div>
    <HeaderTop></HeaderTop>
    <CarouselBlock></CarouselBlock>
<!--    <UserList></UserList>
    <AddUser></AddUser> -->
  </div>
</template>

<script>
  import AddUser from '../components/AddUser.vue';
  import UserList from '../components/userList.vue';
  import HeaderTop from '../components/HeaderTop.vue';
  import CarouselBlock from '../components/CarouselBlock.vue'
  
  export default {
    
    components: {
      AddUser,
      UserList,
      HeaderTop,
      CarouselBlock
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
