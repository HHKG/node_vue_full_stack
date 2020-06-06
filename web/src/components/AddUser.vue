<template>
  <div>
    <el-card class="box-card">
      <el-radio-group v-model="labelPosition" size="small">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="right">右对齐</el-radio-button>
        <el-radio-button label="top">顶部对齐</el-radio-button>
      </el-radio-group>
      <div style="margin: 20px;"></div>
      <el-form :label-position="labelPosition" label-width="80px" :model="UserData">
        <el-form-item label="姓名">
          <el-input v-model="UserData.name"></el-input>
        </el-form-item>
        <el-form-item label="座右铭">
          <el-input v-model="UserData.motto"></el-input>
        </el-form-item>
        <el-form-item label="写入时间">
          <el-input v-model="UserData.time"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        UserData: {
          name: '',
          motto: '',
          time: ''
        }
      };
    },
    methods: {
      async onSubmit() {
        console.log(this.UserData);
        // http://localhost:3000/todo
        const res = await this.$http.post('http://localhost:3000/userList',this.UserData);
        if (res.body.length) {
          this.$message({
            showClose: true,
            message: '提交成功，请在上表查看！',
            type: 'success'
          });
        }
      }
    }
  }
</script>
<style>
</style>
