<template>
  <el-container>
    <el-header>
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="6">
          <img src="../assets/ps4.png" alt />
        </el-col>
        <el-col class="header-title">
          <h1>后台管理系统</h1>
        </el-col>
        <el-col :span="6">
          <div class="header-logout">
            欢迎39期星耀会员
            <a href="#">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col>
            <el-menu
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              background-color="#545C64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :router="true"
              :unique-opened="true"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>

                <el-menu-item index="/user">
                  <i class="el-icon-menu"></i>
                  <span>用户管理</span>
                </el-menu-item>
              </el-submenu>

              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限管理</span>
                </template>
                <el-menu-item index="1-4-1">
                  <i class="el-icon-menu"></i>
                  <span>角色列表</span>
                </el-menu-item>
                <el-menu-item index="1-4-1">
                  <i class="el-icon-menu"></i>
                  <span>权限列表</span>
                </el-menu-item>
              </el-submenu>

              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>商品管理</span>
                </template>
                <el-menu-item index="1-4-1">
                  <i class="el-icon-menu"></i>
                  <span>商品列表</span>
                </el-menu-item>
                <el-menu-item index="1-4-1">
                  <i class="el-icon-menu"></i>
                  <span>分类参数</span>
                </el-menu-item>
                <el-menu-item index="1-4-1">
                  <i class="el-icon-menu"></i>
                  <span>商品分类</span>
                </el-menu-item>
              </el-submenu>

              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>订单管理</span>
                </template>
                <el-menu-item index="1-4-1">
                  <i class="el-icon-menu"></i>
                  <span>订单列表</span>
                </el-menu-item>
              </el-submenu>

              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>数据统计</span>
                </template>
                <el-menu-item index="1-4-1">
                  <i class="el-icon-menu"></i>
                  <span>数据报表</span>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /sr

export default {};
</script>


<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-aside[data-v-fae5bece] {
    padding-right: 0;
  }
}
.el-container .el-header {
  background-color: #409eff;
  padding: 0;
  .header-title {
    text-align: center;
    h1 {
      margin: 0;
    }
  }
  .header-logout {
    text-align: right;
  }
}

.el-aside {
  padding-right: 20px;

  .tac {
    width: 100%;
    height: 100%;
    background-color: #545c64;
  }

  .el-submenu__title {
    width: 200px;
  }
}

.el-col img {
  // width: 200px;
  height: 60px;
  display: block;
}
</style>
