import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getCookieToken } from './libs/cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText }
  from '@fortawesome/vue-fontawesome'

// 全局在开发环境下，导入mock，对所有请求进行拦截
if (process.env.NODE_ENV !== 'production') require('./mock')

library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false
Vue.use(ElementUI)

function hasPermission (roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}
// register global progress.
const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  const token = getCookieToken()
  if (token) { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // console.log('a')
      // console.log(store.state.user.roles)
      // console.log('b')
      if (to.meta && to.meta.role) { // 判断即将进入的页面是否需要权限
        if (hasPermission(store.state.user.roles, to.meta.role)) { // 判断权限
          next()
        } else {
          next('/401')
        }
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
