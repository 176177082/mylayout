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
        <template v-for="item in regioname">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <font-awesome-icon icon="home" size="lg"></font-awesome-icon><span slot="title">{{ item.title }}</span>
              </template>
              <template v-for="subItem in item.subs">
                <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                  <template slot="title">{{ subItem.title }}</template>
                  <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                    {{ threeItem.title }}
                  </el-menu-item>
                </el-submenu>
                <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                  {{ subItem.title }}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <font-awesome-icon icon="home" size="lg"></font-awesome-icon><span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>

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
  import { removeToken } from '../libs/cookie'
  import { mapState } from 'vuex'
  import store from '../store'

  export default {
    name: 'Home',
    data () {
      return {
        collapse: false,
        username: 'admin',
        regioname: [],
        items: [
          {
            icon: 'el-icon-lx-home',
            index: 'dashboard',
            title: '任务区域管理'
          },
          {
            icon: 'el-icon-rank',
            index: '2',
            title: '2018东南方向1800幅',
            subs: [
              {
                index: '/taskpackagelist',
                title: '任务包列表'
              },
              {
                index: '/taskpackagepartition',
                title: '任务包列表划分'
              }
            ]
          },
          {
            icon: 'el-icon-rank',
            index: '1',
            title: '2018东南方向1800幅1',
            subs: [
              {
                index: '/taskpackagelist',
                title: '任务包列表'
              },
              {
                index: '/taskpackagepartition',
                title: '任务包列表划分'
              }
            ]
          }
        ]
      }
    },
  //   mounted: {
  //     ...mapState([
  //       'regiontasknames'
  //     ]),
  //     this.regioname = this.regiontasknames
  //
  // }
  // ,
    created () {
      this.regioname = store.state.regiontask.regiontasknames
      console.log('ppppp')
      console.log(store.state.regiontask.regiontasknames)
      console.log(this.regiontasknames)
      this.setregioname()
    },
    // ...mapState('user', {
    //   userName: state => state.userName
    // }),
    computed: {
      ...mapState({
        regiontasknames: state => state.regiontask.regiontasknames
      })
    },
    methods: {
      handleCommand (command) {
        if (command === 'loginout') {
          removeToken()
          this.$router.push('/login')
        }
      },
      setregioname () {
        console.log('ppppp111111')
        console.log(store.state.regiontask.regiontasknames)
        this.regioname = store.state.regiontask.regiontasknames
        console.log(this.regioname)
      },
      // 侧边栏折叠
      collapseChage () {
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
