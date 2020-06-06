<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="inputData" placeholder="输入一些内容" />
    <button @click="postData">提交输入的内容</button>
  </div>
</template>

<script>
  import axios from 'axios';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      inputData:''
    }
  },
 methods:{
   postData(){
     this.$http.get('http://localhost:3000/todo').then(res=>{
       console.log(res.body);
     })
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
