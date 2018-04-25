/*eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import VueCookie from 'vue-cookie'
import { loginCheckWithoutCode } from './api'
import { Button, Pagination, Checkbox, Icon, Autocomplete, Loading, Message, Notification, Steps, Step, Table, TableColumn, Input, Dialog, Select, Option, Form, FormItem } from 'element-ui'
import { getStore } from '/utils/storage'
// import $ from 'jquery'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Pagination)
Vue.use(Checkbox)
Vue.use(Icon)
Vue.use(Autocomplete)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.use(infiniteScroll)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: require('./assets/images/loading.gif')
  // attempt: 1
})
// Vue.config.devtools = true
// Vue.config.productionTip = false
Vue.config.productionTip = false;
const whiteList =
  ['/home', '/login', '/project',
    '/service', '/search', '/refreshsearch', '/about', '/tutor',
    '/base', '/guide', '/detail', '/projectDetail', '/contact', '/contact/aboutBase', '/contact/baseHonor', '/contact/brandStory', '/contact/contactUs'] // 不需要登陆的页面
router.beforeEach(function (to, from, next) {
  let params = {
    params: {
      token: getStore('token')
    },
    username: '',
    password: ''
  }
  // console.log("beforeEach:" ,to)
  let userParams = JSON.parse(getStore("user"))
  if (userParams !== null) {
    params.username = userParams.username
    params.password = userParams.password
  }
  // console.log(userParams)
  loginCheckWithoutCode(params.username, params.password).then(res => {
    // console.log(res)
    if (!JSON.parse(res.status)) { // 没登录
      if (whiteList.indexOf(to.path) !== -1) { // 白名单
        next()
      } else {
        next('/login')
      }
    } else {
      store.commit('RECORD_USERINFO', {info: res.result})
      if (to.path === '/login') { //  跳转到
        next({path: '/'})
      }
      next()
    }
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
