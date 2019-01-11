<template>
  <div class="wrapper">
    <div class="header">
      <!-- 折叠按钮 -->
      <div class="collapse-btn" v-on:click="collapseChage">
        <i class="el-icon-menu"></i>
      </div>
      <div class="rgsmanage">作业流程控制系统</div>

      <div class="header-right">
        <!-- 用户头像 -->
        <div class="user-avator">
          <font-awesome-icon icon="users-cog" size="lg"/>
        </div>

        <el-dropdown class="user-name" size="small" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
              {{username}} <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
    </div>
    <div class="sidebar">
      <el-menu class="sidebar-el-menu"  router background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" v-bind:collapse="collapse">
        <el-menu-item index="/taskpackagelist">
          <font-awesome-icon icon="home" size="lg"></font-awesome-icon>
          <span slot="title"> 主页</span>
        </el-menu-item>
        <el-menu-item index="/taskpackagelist">
          <font-awesome-icon icon="list-alt" size="lg" />
          <span slot="title"> 任务包列表</span>
        </el-menu-item>
        <el-menu-item index="/taskpackagepartition">
          <font-awesome-icon icon="clipboard-list" size="lg"/>
          <span slot="title"> 任务包划分</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content-box" v-bind:class="{'content-collapse':collapse}">
      <transition name="fade-transform" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        collapse: false,
        username: 'admin'
       }
    },
    methods: {
      // 侧边栏折叠
      collapseChage () {
        debugger
        this.collapse = !this.collapse
      }
    }
  }
</script>

<style scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
  }

  .collapse-btn{
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }

  .rgsmanage{
    float: left;
    width:250px;
    line-height: 70px;
  }

  .header-right{
    float: right;
    padding-right: 50px;
    display: flex;
    height: 70px;
    align-items: center;
  }

  .user-avator{
    margin-left: 20px;
  }
  .user-avator img{
    display: block;
    width:40px;
    height:40px;
    border-radius: 50%;
  }
  .user-name{
    margin-left: 10px;
  }
  .el-dropdown-link{
    color: #fff;
    cursor: pointer;
  }
  .el-dropdown-menu__item{
    text-align: center;
  }

  .sidebar{
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom:0;
    overflow-y: scroll;
  }

  .sidebar::-webkit-scrollbar{
    width: 0;
  }

  .sidebar-el-menu:not(.el-menu--collapse){
    width: 250px;
  }

  .sidebar > ul {
    height:100%;
  }

</style>
