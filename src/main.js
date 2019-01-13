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

router.beforeEach((to, from, next) => {
  NProgress.start()
  const token = getCookieToken()
  if (!token && to.name !== 'login') {
    // 未登录且要跳转的页面不是登录页
    next({
      name: 'login' // 跳转到登录页
    })
  } else if (!token && to.name === 'login') {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else {
    if (token && to.name === 'login') {
      // 已登录且要跳转的页面是登录页
      next({
        name: 'home' // 跳转到homeName页
      })
    } else {
      next()
      console.log('未写权限判断的路由')
      NProgress.done()
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
