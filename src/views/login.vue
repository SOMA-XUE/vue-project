<template>
  <el-row type="flex" class="row-bg" justify="center" align="middle">
    <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :label-position="labelPosition"
        :rules="rules"
      >
        <el-form-item label="Username" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="Password" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">Login</el-button>
          <el-button @click="resetForm('form')">Reset</el-button>
        </el-form-item>
        <p v-if="errMsg">用户名或者密码错误</p>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      labelPosition: "top",
      errMsg:false,
      form: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          {
            required: true,
            message: "please input your name",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "Length between 3 to 5 ",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "input password", trigger: "blur" },
          {
            min: 3,
            max: 7,
            message: "Length between 3 to 5 ",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      // 表单验证，valid为true=》通过
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
            url: "http://localhost:8888/api/private/v1/login",
            method: "post",
            data: this.form
          }).then(({ data: { data, meta } }) => {


            if (meta.status == 200) {
              // console.log(res.data.meta.msg)
              localStorage.setItem("token", data.token);
              this.$router.push("/home");
              // console.log(data);
            } else {
              this.errMsg = true
              return false;
            }

          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.row-bg {
  height: 100%;
}
.el-form {
  border-radius: 10px;
  border: 3px solid #66b1ff;
  padding: 40px 20px;
}
</style>



