<template>
  <el-card class="box-card" style="margin-bottom: 30px;">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <span size="medium">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="座右铭" width="580">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.motto }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          time: '2016-05-02',
          name: '王小虎',
          motto: '上海市普陀区金沙江路 1518 弄'
        }, {
          time: '2016-05-04',
          name: '王小虎',
          motto: '上海市普陀区金沙江路 1517 弄'
        }, {
          time: '2016-05-01',
          name: '王小虎',
          motto: '上海市普陀区金沙江路 1519 弄'
        }, {
          time: '2016-05-03',
          name: '王小虎',
          motto: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    mounted() {
      this.getUserList();
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },

     async getUserList(){
       const res=await this.$http.get("http://localhost:3000/userList");
       console.log(res.body);
       this.tableData=this.tableData.concat(res.body);
      }
    }
  }
</script>
