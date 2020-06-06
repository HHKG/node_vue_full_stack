<template>
  <div>
    <div>创建分类</div>
    <el-form label-width="120px">
      <el-form-item label="名称">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default{
    data(){
     return{
       formData:{
         name:''
       }
     }
    },
    methods:{
     async save(){
       console.log("save")
        const res=await axios.post('http://localhost:3000/admin/categorise',this.formData);
        this.$router.push('/list');
        this.$message({
          type:"success",
          message:'保存成功！'
        })
      }
    }
  }
</script>

<style>
</style>
