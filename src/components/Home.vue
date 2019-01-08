<template>
  <div class="wrapper">
    <div class="header">
      <el-dropdown>
        <font-awesome-icon icon="user-circle" size="2x"/>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>用户名</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="sidebar">
      i am sidebar
    </div>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <transition name="fade-transform" mode="out-in">
        <router-view></router-view>
      </transition>    </div>
  </div>

</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style>

</style>
