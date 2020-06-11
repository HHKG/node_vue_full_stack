<template>
  <div>
    <div v-for="item in carrouselImage">{{item}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        carrouselImage: ['轮播1', '轮播2', '轮播3']
      }
    }
  }
</script>

<style scoped="scoped">
</style>
