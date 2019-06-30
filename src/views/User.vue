<template>
  <el-table :data="userList" style="width: 100%" :stripe="true">
    <el-table-column label="姓名" width="180" prop="username"></el-table-column>

    <el-table-column label="邮箱" width="180" prop="email"></el-table-column>

    <el-table-column label="电话" width="180" prop="mobile"></el-table-column>

    <el-table-column label="用户状态" width="240">
      <template v-slot="{row}">
        <el-switch v-model="row.type" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </template>
    </el-table-column>

    <el-table-column label="操作" width="">
      <el-button type="primary" plain size="mini" icon="el-icon-edit"></el-button>
      <el-button type="danger" icon="el-icon-delete" size="mini" plain></el-button>
      <el-button type="success" icon="el-icon-check" size="mini" plain>分配角色</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";


export default {
  data() {
    return {
      userList: []
    };
  },
  created() {
      axios({
          url: "http://localhost:8888/api/private/v1/users",
          params:{
              pagesize:5,
              pagenum:1
          },
          headers:{
              Authorization:localStorage.getItem('token')
          }
      }).then(res => {
          console.log(res);
          this.userList = res.data.data.users
      })
  }
};
</script>

