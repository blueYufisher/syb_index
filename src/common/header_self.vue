<template>
  <div class="header-box">
    <div>
      <header class="w">
        <div class="w-box">
          <div class="nav-logo">
            <h1 @click="changePage(1)">
              <router-link to="/" title="创业梦工场"></router-link>
            </h1>
          </div>
          <div class="right-box">
            <div class="nav-list" v-if="searchIf">
              <el-autocomplete
                :placeholder="placeholder"
                icon="search"
                v-model="input"
                minlength=1
                maxlength=100
                :fetch-suggestions="querySearchAsync"
                @select="handleSelect"
                :on-icon-click="handleIconClick">
              </el-autocomplete>
              <!--<router-link to="/goods"><a @click="changePage(2)">全部商品</a></router-link>-->
              <!--<router-link to="/thanks"><a @click="changePage(3)">捐赠</a></router-link>-->
              <!-- <router-link to="/">Smartisan M1 / M1L</router-link>
              <router-link to="/">Smartisan OS</router-link>
              <router-link to="/">欢喜云</router-link>
              <router-link to="/">应用下载</router-link>
              <router-link to="/">官方论坛</router-link> -->
            </div>
            <div class="nav-aside" ref="aside" :class="{fixed:st}">
              <div class="user pr">
                <a href="http://job.gdut.edu.cn/syb/admin/index.html#/login" target=_blank>个人中心</a>
                <!--用户信息显示-->
                <div class="nav-user-wrapper pa" v-if="login">
                  <div class="nav-user-list">
                    <ul>
                      <!--头像-->
                      <li class="nav-user-avatar">
                        <div>
                          <span class="avatar">
                            <img :src="this.sysUserAvatar"/>
                          </span>
                        </div>
                        <p class="name">{{sysUserName}}</p>
                      </li>
                      <li>
                        <a href="admin/index.html#/project" target=_blank>后台管理系统</a>
                      </li>
                      <li>
                        <a href="javascript:;" @click="_loginOut">退出</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <slot name="navnav">
        <div class="nav-sub" :class="{fixed:st}">
          <div class="nav-sub-bg"></div>
          <div class="nav-sub-wrapper" :class="{fixed:st}" id="navigation">
            <div class="w">
              <ul class="nav-list2">
                <li class="p_menu">
                  <router-link to="/"><a @click="changePage(1)" :class="{active:choosePage===1}">网站首页</a></router-link>
                </li>
                <li class="p_menu">
                  <router-link to="/about"><a @click="changePage(2)" :class="{active:choosePage===2}">关于社区</a>
                  </router-link>
                </li>
                <li class="p_menu" @mouseover="bgOver($refs.nav)" @mouseout="bgOut($refs.nav)">
                  <a :class="{active:choosePage===3}" ref="nav">社区资讯</a>
                  <ul class="smenu" :class="{disappear:hoverNav!=='社区资讯'}">
                    <li @click="changePage(3)">
                      <router-link to="/base?url=activity">创业沙龙</router-link>
                    </li>
                    <li @click="changePage(3)">
                      <router-link to="/base?url=news">新闻通知</router-link>
                    </li>
                    <li @click="changePage(3)">
                      <router-link to="/base?url=knowledge">创业知识</router-link>
                    </li>
                  </ul>
                  <!--<router-link to="/thanks"><a @click="changePage(3)" :class="{active:choosePage===3}">社区资讯</a></router-link>-->
                </li>
                <li class="p_menu">
                  <router-link to="/project"><a @click="changePage(4)" :class="{active:choosePage===4}">团队风采</a>
                  </router-link>
                </li>
                <li class="p_menu">
                  <router-link to="/tutor"><a @click="changePage(5)" :class="{active:choosePage===5}">创业导师</a>
                  </router-link>
                </li>
                <li class="p_menu" @mouseover="bgOver($refs.nav1)" @mouseout="bgOut($refs.nav1)">
                  <a :class="{active:choosePage===6}" ref="nav1">创业服务</a>
                  <ul class="smenu" :class="{disappear:hoverNav!=='创业服务'}">
                    <li @click="changePage(6)">
                      <router-link to="/service?url=teacher">创业校友</router-link>
                    </li>
                    <li @click="changePage(6)">
                      <router-link to="/service?url=train">创业培训</router-link>
                    </li>
                    <li @click="changePage(6)">
                      <router-link to="/service?url=policy">创业政策</router-link>
                    </li>
                    <li @click="changePage(6)">
                      <router-link to="/service?url=funds">创业基金</router-link>
                    </li>
                    <li @click="changePage(6)">
                      <router-link to="/service?url=bases">合作基地</router-link>
                    </li>
                  </ul>
                  <!--<router-link to="/thanks"><a @click="changePage(3)" :class="{active:choosePage===3}">创业服务</a></router-link>-->
                </li>
                <li class="p_menu" @mouseover="bgOver($refs.nav2)" @mouseout="bgOut($refs.nav2)">
                  <a :class="{active:choosePage===7}" ref="nav2">服务指南</a>
                  <ul class="smenu" :class="{disappear:hoverNav!=='服务指南'}">
                    <li @click="changePage(7)">
                      <router-link to="/guide?url=enter">团队入驻</router-link>
                    </li>
                    <li @click="changePage(7)">
                      <router-link to="/guide?url=assess">工商财税</router-link>
                    </li>
                    <li @click="changePage(7)">
                      <router-link to="/guide?url=manage">团队管理</router-link>
                    </li>
                    <li @click="changePage(7)">
                      <router-link to="/guide?url=hatch">出孵追踪</router-link>
                    </li>
                  </ul>
                  <!--<router-link to="/thanks"><a @click="changePage(3)" :class="{active:choosePage===3}">服务指南</a></router-link>-->
                </li>
                <li class="p_menu">
                  <router-link to="/contact/aboutBase"><a @click="changePage(8)"
                                                          :class="{active:choosePage===8}">联系我们</a></router-link>
                </li>
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </slot>
      <div id="hr"></div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  // import YButton from '/components/YButton'
  import {mapMutations, mapState} from 'vuex'
  import {searchInfosByTitleOrNote, searchProjectByProjNameOrCompanyName, searchInfoByTypeId, logout} from '/api/index'
  // import {loginOut} from '/api/index'
  import {setStore, getStore, removeStore} from '/utils/storage'
  // import $ from 'jquery'
  // import { hoverNavSmenu } from '../common/js/util'
  // import store from '../store/'
  import 'element-ui/lib/theme-default/index.css'
  import userface from '../assets/images/user-256.png'

  export default {
    data() {
      return {
        serverUrl: process.env.API_ROOT,  // 打包部署上线时
        user: {},
        // 查询数据库的商品
        st: false,
        // 头部购物车显示
        cartShow: false,
        positionL: 0,
        positionT: 0,
        timerCartShow: null, // 定时隐藏购物车
        input: '',
        choosePage: 1,
        searchResults: [],
        timeout: null,
        token: '',
        hoverNav: '',
        searchIf: false,
        url_num: '',
        sysUserName: '',
        sysUserAvatar: '',
        placeholder: ''
      }
    },
    computed: {
      ...mapState([
        'cartList', 'login', 'receiveInCart', 'showCart', 'userInfo'
      ]),
      // // 计算价格
      // totalPrice() {
      //   var totalPrice = 0
      //   this.cartList && this.cartList.forEach(item => {
      //     totalPrice += (item.productNum * item.salePrice)
      //   })
      //   return totalPrice
      // },
      // // 计算数量
      // totalNum() {
      //   var totalNum = 0
      //   this.cartList && this.cartList.forEach(item => {
      //     totalNum += (item.productNum)
      //   })
      //   return totalNum
      // }
    },
    methods: {
      ...mapMutations(['RECORD_USERINFO']),
      bgOver(e) {
        // console.log(e.text)
        this.hoverNav = e.text
      },
      bgOut(e) {
        // console.log(e)
        this.hoverNav = ''
      },
      handleIconClick(ev) {
        if (this.$route.path === '/search') {
          this.$router.push({
            path: '/refreshsearch',
            query: {
              key: this.input
            }
          })
        } else {
          this.$router.push({
            path: '/search',
            query: {
              key: this.input
            }
          })
        }
      },
      // 导航栏文字样式改变
      changePage(v) {
        this.choosePage = v
      },
      // 搜索框提示
      loadAll() {
        let _this = this
        return new Promise((resolve, reject) => {
          switch (this.url_num) {
            case "/base":
              setStore("ints", [1, 2, 3])
              setStore("info_proj", 1)
              _this.postInfoData(1, 10, [1, 2, 3]).then(array => {
                // console.log("array:", array)
                // _this.searchResults = array
                resolve(array)
              }).catch(() => {
                reject([])
              })
              break;

            case "/project":
              setStore("info_proj", 2)
              _this.postProjData(1, 10).then(array => {
                // console.log("array:", array)
                // _this.searchResults = array
                resolve(array)
              }).catch(() => {
                reject([])
              })
              break;

            case "/tutor":
              setStore("ints", [6])
              setStore("info_proj", 1)
              _this.postInfoData(1, 10, [6]).then(array => {
                // console.log("array:", array)
                // _this.searchResults = array
                resolve(array)
              }).catch(() => {
                reject([])
              })
              break;

            case "/service":
              setStore("ints", [5, 7, 8, 9, 14])
              setStore("info_proj", 1)
              _this.postInfoData(1, 10, [5, 7, 8, 9, 14]).then(array => {
                // console.log("array:", array)
                // _this.searchResults = array
                resolve(array)
              }).catch(() => {
                reject([])
              })
              break;

            case "/guide":
              setStore("ints", [10, 11, 12, 13])
              setStore("info_proj", 1)
              _this.postInfoData(1, 10, [10, 11, 12, 13]).then(array => {
                // console.log("array:", array)
                // _this.searchResults = array
                resolve(array)
              }).catch(() => {
                reject([])
              })
              break;
          }
        })
      },
      postInfoData(currentPage, pageSize, ints) {
        let postInfoObj = {
          currentPage: currentPage,
          pageSize: pageSize,
          ints: ints,
          title: this.input,
          note: this.input
        }
        this.searchResults = []
        return new Promise((resolve, reject) => {
          searchInfoByTypeId(JSON.stringify(postInfoObj)).then(res => {
            // console.log(res.resultList)
            let array = []
            let maxSize = 5
            if (res.data.resultList.length <= 5) {
              maxSize = res.data.resultList.length
            }
            for (let i = 0; i < maxSize; i++) {
              let obj = {}
              obj.value = res.data.resultList[i].title
              array.push(obj)
            }
            if (array.length !== 0) {
              resolve(array)
            } else {
              reject()
            }
          })
        })
      },
      postProjData(currentPage, pageSize) {
        let postProjObj = {
          projName: this.input,
          companyName: this.input
        }
        this.searchResults = []
        return new Promise((resolve, reject) => {
          searchProjectByProjNameOrCompanyName(currentPage, pageSize, JSON.stringify(postProjObj)).then(res => {
            // console.log(res.resultList)
            let array = []
            let maxSize = 5
            if (res.data.resultList.length <= 5) {
              maxSize = res.data.resultList.length
            }
            for (let i = 0; i < maxSize; i++) {
              let obj = {}
              obj.value = res.data.resultList[i].projName
              array.push(obj)
            }
            if (array.length !== 0) {
              resolve(array)
            } else {
              reject()
            }
          })
        })
      },
      querySearchAsync(queryString, cb) {
        let _this = this
        if (this.input === undefined) {
          cb([])
          return
        }
        this.input = this.input.trim()
        if (this.input === '') {
          cb([])
          return
        } else {
          this.loadAll().then(array => {
            cb(array)
          }).catch(array => {
            cb([])
          })
        }
      },
      handleSelect(item) {
        this.input = item.value
      },
      // // 登陆时获取一次购物车商品
      // _getCartList() {
      //   getCartList({userId: getStore('userId')}).then(res => {
      //     if (res.success === true) {
      //       setStore('buyCart', res.result)
      //     }
      //     // 重新初始化一次本地数据
      //   }).then(this.INIT_BUYCART)
      // },
      // // 删除商品
      // delGoods(productId) {
      //   if (this.login) { // 登陆了
      //     cartDel({userId: getStore('userId'), productId}).then(res => {
      //       this.EDIT_CART({productId})
      //     })
      //   } else {
      //     this.EDIT_CART({productId})
      //   }
      // },
      // 控制顶部
      // navFixed() {
      //   if (this.$route.path === '/goods' || this.$route.path === '/home' || this.$route.path === '/goodsDetails' || this.$route.path === '/thanks') {
      //     var st = document.documentElement.scrollTop || document.body.scrollTop
      //     st >= 100 ? this.st = true : this.st = false
      //     // 计算小圆当前位置
      //     let num = document.querySelector('.num')
      //     this.positionL = num.getBoundingClientRect().left
      //     this.positionT = num.getBoundingClientRect().top
      //     this.ADD_ANIMATION({cartPositionL: this.positionL, cartPositionT: this.positionT})
      //   } else {
      //     return
      //   }
      // },
      // 退出登陆
      _loginOut() {
        // let params = {
        //   params: {
        //     token: this.token
        //   }
        // }
        logout().then(res => {
          removeStore('user')
          window.location.href = '/'
        })
      },
      // 通过路由改变导航文字样式
      getPage() {
        let url = this.$route.fullPath.split('?')[0]
        // console.log(url)
        if (this.$route.path === '/' || this.$route.path === '/home') {
          this.changePage(1)
        } else if (this.$route.path === '/about') {
          this.changePage(2)
        } else if (url === '/base') {
          this.placeholder = "请输入文字搜索社区咨询";
          this.changePage(3)
        } else if (this.$route.path === '/project') {
          this.placeholder = "请输入文字搜索团队";
          this.changePage(4)
        } else if (this.$route.path === '/tutor') {
          this.placeholder = "请输入文字搜索创业导师";
          this.changePage(5)
        } else if (url === '/service') {
          this.placeholder = "请输入文字搜索创业服务";
          this.changePage(6)
        } else if (url === '/guide') {
          this.placeholder = "请输入文字搜索服务指南";
          this.changePage(7)
        } else if (this.$route.path === '/contact/aboutBase' ||
          this.$route.path === '/contact/baseHonor' || this.$route.path === '/contact/contactUs') {
          this.changePage(8)
        } else {
          this.changePage(-1)
        }
      }
    },
    watch: {
      "$route": function (to, from) {
        let _this = this
        this.input = ''
        this.url_num = to.path
        if (to.path === '/home' || to.path === '/detail' || to.path === '/about' ||
          to.path === '/contact/aboutBase' || to.path === '/contact/baseHonor' ||
          to.path === '/contact/contactUs' || to.path === '/projectDetail') {
          this.searchIf = false
        } else {
          this.searchIf = true
        }
        this.getPage()
        //from 对象中包含当前地址
        //to 对象中包含目标地址
        //其实还有一个next参数的，这个参数是控制路由是否跳转的，如果没写，可以不用写next()来代表允许路由跳转，如果写了就必须写next(),否则路由是不会生效的。
      }
    },
    mounted() {
      // hoverNavSmenu();
      // this.hoverNavSmenu();
      var User = localStorage.getItem('user');
      // console.log(User);
      // var user = this.getLoginUser;
      if (User) {
        User = JSON.parse(User);
        this.sysUserName = User.userName || '';
        this.sysUserAvatar = User.userface !== null ?
          this.serverUrl + "\\avatar\\" + User.userface
          : userface;
      }
      this.token = getStore('token')
      if (this.login) {
        // this._getCartList()
      } else {
        // this.INIT_BUYCART()
      }
      // this.searchDisplay()
      this.getPage()
      // window.addEventListener('scroll', this.navFixed)
      // window.addEventListener('resize', this.navFixed)
      if (typeof (this.$route.query.key) !== undefined) {
        this.input = this.$route.query.key
      }
      if (this.$route.path === '/home' || this.$route.path === '/detail' || this.$route.path === '/about' || this.$route.path === '/contact' || this.$route.path === '/projectDetail') {
        this.searchIf = false
      } else {
        this.searchIf = true
      }
    },
    components: {}
  }
</script>
<style scoped lang="scss" type="text/scss">
  @import "../assets/style/theme";
  @import "../assets/style/mixin";

  .move_in_cart {
    animation: mymove .5s ease-in-out;
  }

  @keyframes mymove {
    0% {
      transform: scale(1)
    }
    25% {
      transform: scale(.8)
    }
    50% {
      transform: scale(1.2)
    }
    75% {
      transform: scale(.9)
    }
    100% {
      transform: scale(1)
    }
  }

  @-moz-keyframes mymove {
    0% {
      transform: scale(1)
    }
    25% {
      transform: scale(.8)
    }
    50% {
      transform: scale(1.2)
    }
    75% {
      transform: scale(.9)
    }
    100% {
      transform: scale(1)
    }
  }

  @-webkit-keyframes mymove {
    0% {
      transform: scale(1)
    }
    25% {
      transform: scale(.8)
    }
    50% {
      transform: scale(1.2)
    }
    75% {
      transform: scale(.9)
    }
    100% {
      transform: scale(1)
    }
  }

  @-o-keyframes mymove {
    0% {
      transform: scale(1)
    }
    25% {
      transform: scale(.8)
    }
    50% {
      transform: scale(1.2)
    }
    75% {
      transform: scale(.9)
    }
    100% {
      transform: scale(1)
    }
  }

  .header-box {
    background: $head-bgc;
    /*background-image: -webkit-linear-gradient(#000, #121212);*/
    /*background-image: linear-gradient(#000, #121212);*/
    width: 100%;

  }

  header {
    height: 100px;
    z-index: 30;
    position: relative;
  }

  .w-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    // position: relative;
    h1 {
      height: 100%;
      display: flex;
      align-items: center;
      > a {
        background: url(../assets/images/logo.png) no-repeat 50%;
        //background-size: cover;
        display: block;
        //@include wh(50px, 40px);
        //text-indent: -9999px;
        //background-position: 0 0;
        width: 250px;
        height: 84px;
        line-height: 84px;
        text-indent: 120px;
      }
    }
    .nav-list {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 22px;
      .el-autocomplete {
        width: 20vw;
      }
      a {
        width: 110px;
        color: #c8c8c8;
        display: block;
        font-size: 14px;
        padding: 0 25px;
        &:hover {
          color: #fff;
        }
      }
      a:nth-child(2) {
        // width: 5vw;
        margin-left: -10px;
      }
      // a:nth-child(3){
      //   width: 5vw;
      // }
    }
    .nav-aside {
      position: relative;
      &:before {
        background: #333;
        background: hsla(0, 0%, 100%, .2);
        content: " ";
        @include wh(1px, 13px);
        overflow: hidden;
        // position: absolute;
        display: flex;
        align-items: center;
        // top: 4px;
        left: 0;
      }
      &.fixed {
        width: 262px;
        position: fixed;
        left: 50%;
        top: 19px;
        margin-left: 451px;
        margin-top: 0;
        z-index: 32;
        top: -40px;
        -webkit-transform: translate3d(0, 59px, 0);
        transform: translate3d(0, 59px, 0);
        -webkit-transition: -webkit-transform .3s cubic-bezier(.165, .84, .44, 1);
        transition: transform .3s cubic-bezier(.165, .84, .44, 1);
        .user {
          &:hover {
            a:before {
              background-position: -215px 0;
            }
          }
        }
        .shop {
          &:hover {
            a:before {
              background-position: -210px -22px;
            }
          }
        }
      }
    }

    .right-box {
      display: flex;
    }
    .nav-aside {
      display: flex;
      align-items: center;
    }
    // 用户
    .user {
      margin-left: 41px;
      width: 36px;
      &:hover {
        a:before {
          background-position: -125px 0;
        }
        .nav-user-wrapper {
          top: 18px;
          visibility: visible;
          opacity: 1;
          -webkit-transition: opacity .15s ease-out;
          transition: opacity .15s ease-out;
        }
      }
      > a {
        position: relative;
        @include wh(36px, 20px);
        display: block;
        text-indent: -9999px;
        &:before {
          content: " ";
          position: absolute;
          left: 8px;
          top: 0;
          @include wh(20px);
          background: url(../assets/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) -155px 0;
          background-size: 240px 107px;
          transition: none;
        }

      }
      li + li {
        text-align: center;
        position: relative;
        border-top: 1px solid #f5f5f5;
        line-height: 44px;
        height: 44px;
        color: #616161;
        font-size: 12px;
        &:hover {
          background: #fafafa;
        }
        a {
          display: block;
          color: #616161;
        }
      }
      .nav-user-avatar {
        > div {
          position: relative;
          margin: 0 auto 8px;
          @include wh(46px);
          text-align: center;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            border-radius: 50%;
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .06);
          }
          .avatar {
            border-radius: 50%;
            display: block;
            @include wh(100%);
            background-repeat: no-repeat;
            background-size: contain;
            img {
              width: 46px;
              height: 46px;
              border-radius: 50%;
              /*margin: 10px 0px 10px 10px;*/
              float: right;
            }
          }

        }
        .name {
          margin-bottom: 16px;
          font-size: 12px;
          line-height: 1.5;
          text-align: center;
          color: #757575;
        }
      }
      .nav-user-wrapper {
        width: 168px;
        transform: translate(-50%);
        left: 50%;
      }
      .nav-user-list {
        width: 168px;
        &:before {
          left: 50%;
        }

      }
    }
    .shop {
      position: relative;
      float: left;
      margin-left: 21px;
      width: 61px;
      z-index: 99;
      &:hover {
        a:before {
          content: " ";
          background-position: 0 -22px;
        }
      }
      .nav-user-wrapper.active {
        top: 18px;
        visibility: visible;
        opacity: 1;
        -webkit-transition: opacity .15s ease-out;
        transition: opacity .15s ease-out;
      }
      > a {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        display: block;
        right: 0;
        z-index: 1;
        &:before {
          display: block;
          @include wh(30px, 100%);
          content: " ";
          background: url(../assets/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) 0 -22px;
          background-size: 240px 107px;
          background-position: -150px -22px;
        }
      }
      .cart-num {
        position: relative;
        display: block;
        margin-left: 31px;
        margin-top: -1px;
        min-width: 30px;
        text-indent: 0;
        line-height: 20px;
        > i {
          background: #eb746b;
          background-image: -webkit-linear-gradient(#eb746b, #e25147);
          background-image: linear-gradient(#eb746b, #e25147);
          box-shadow: inset 0 0 1px hsla(0, 0%, 100%, .15), 0 1px 2px hsla(0, 0%, 100%, .15);
          text-align: center;
          font-style: normal;
          display: inline-block;
          @include wh(20px);
          line-height: 20px;
          border-radius: 10px;
          color: #fff;
          font-size: 12px;
          &.no {
            background: #969696;
            background-image: -webkit-linear-gradient(#A4A4A4, #909090);
            background-image: linear-gradient(#A4A4A4, #909090);
            box-shadow: inset 0 0 1px #838383, 0 1px 2px #838383;
          }
        }

      }
      .nav-user-wrapper {
        right: 0;
        width: 360px;
        .nav-user-list {
          &:before {
            right: 34px;
          }
        }
      }
      .nav-user-list {
        padding: 0;
        width: 100%;
        .full {
          border-radius: 8px;
          overflow: hidden;
        }
        .nav-cart-items {
          max-height: 363px;
          overflow-x: hidden;
          overflow-y: auto;
        }
        .cart-item {
          height: 120px;
          width: 100%;
          overflow: hidden;
          border-top: 1px solid #f0f0f0;
          &:hover {
            background: #fcfcfc;
            .del {
              display: block;
            }
          }

        }
        li:first-child .cart-item:first-child {
          border-top: none;
          border-radius: 8px 8px 0 0;
          overflow: hidden;
        }
        .cart-item-inner {
          padding: 20px;
          position: relative;
        }
        .item-thumb {
          position: relative;
          float: left;
          width: 80px;
          height: 80px;
          border-radius: 3px;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 2;
            border: 1px solid #f0f0f0;
            border: 0 solid transparent;
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .06);
            border-radius: 3px;
          }
          img {
            display: block;
            @include wh(80px, 80px);
            border-radius: 3px;
            overflow: hidden;
          }
        }
        .item-desc {
          margin-left: 98px;
          display: table;
          @include wh(205px, 80px);
          h4 {
            color: #000;
            width: 185px;
            overflow: hidden;
            word-break: keep-all;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 14px;
            line-height: 16px;
            margin-bottom: 10px;
          }
          .attrs span {
            position: relative;
            display: inline-block;
            margin-right: 20px;
            font-size: 14px;
            line-height: 14px;
            color: #999;
          }
          .attrs span:last-child {
            margin-right: 0;
          }
          h6 {
            color: #cacaca;
            font-size: 12px;
            line-height: 14px;
            margin-top: 20px;
            span {
              display: inline-block;
              font-weight: 700;
              color: #cacaca;
            }
            .price-icon, .price-num {
              color: #d44d44;
            }
            .price-num {
              margin-left: 5px;
              font-size: 14px;
            }
            .item-num {
              margin-left: 10px;
            }
          }

        }
        .cart-cell {
          display: table-cell;
          vertical-align: middle;
        }
        .del {
          display: none;
          overflow: hidden;
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .nav-cart-total {
        box-sizing: content-box;
        position: relative;
        padding: 20px;
        height: 40px;
        background: #fafafa;
        border-top: 1px solid #f0f0f0;
        border-radius: 0 0 8px 8px;
        box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, .5), 0 -3px 8px rgba(0, 0, 0, .04);
        background: -webkit-linear-gradient(#fafafa, #f5f5f5);
        background: linear-gradient(#fafafa, #f5f5f5);
        p {
          margin-bottom: 4px;
          line-height: 16px;
          font-size: 12px;
          color: #c1c1c1;
        }
        h5 {
          line-height: 20px;
          font-size: 14px;
          color: #6f6f6f;
          span {
            font-size: 18px;
            color: #de4037;
            display: inline-block;
            font-weight: 700;
          }
          span:first-child {
            font-size: 12px;
            margin-right: 5px;
          }
        }
        h6 {
          position: absolute;
          right: 20px;
          top: 20px;
          width: 108px;
        }
      }
    }
  }

  @media (max-height: 780px) {
    .nav-cart-items {
      max-height: 423px !important;
    }
  }

  @media (max-height: 900px) {
    .nav-cart-items {
      max-height: 544px !important;
    }
  }

  @media (max-height: 1080px) {
    .nav-cart-items {
      max-height: 620px !important;
    }
  }

  // 用户信息弹出
  .nav-user-wrapper {
    position: absolute;
    z-index: 30;
    padding-top: 18px;
    opacity: 0;
    visibility: hidden;
    top: -3000px;
    .nav-user-list {
      position: relative;
      padding-top: 20px;
      background: #fff;
      border: 1px solid #d6d6d6;
      border-color: rgba(0, 0, 0, .08);
      border-radius: 8px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, .15);
      z-index: 10;
      &:before {
        position: absolute;
        content: " ";
        background: url(../assets/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) no-repeat -49px -43px;
        background-size: 240px 107px;
        @include wh(20px, 8px);
        top: -8px;
        margin-left: -10px;
      }
    }
  }

  .nav-sub {
    position: relative;
    z-index: 20;
    height: 50px;
    background: #f7f7f7;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .04);
    &.fixed {
      position: fixed;
      z-index: 21;
      height: 60px;
      top: 0;
      left: 0;
      right: 0;
      border-bottom: 1px solid #dadada;
      background-image: -webkit-linear-gradient(#fff, #f1f1f1);
      background-image: linear-gradient(#fff, #f1f1f1);
    }
    .nav-sub-wrapper {
      //padding: 10px 0;
      height: 50px;
      position: relative;
      &.fixed {
        padding: 0;
        height: 100%;
        display: flex;
        align-items: center;
      }
      &:after {
        content: " ";
        position: absolute;
        top: 89px;
        left: 50%;
        margin-left: -610px;
        width: 1220px;
        background: #000;
        height: 1px;
        display: none;
        opacity: 0;
        -webkit-transition: opacity .3s ease-in;
        transition: opacity .3s ease-in;
      }
    }
    .w {
      display: flex;
      justify-content: space-between;
    }
    .nav-list2 {
      height: 28px;
      line-height: 50px;
      display: flex;
      align-items: center;
      height: 100%;
      /*li:first-child:not(.smenu li) {*/
      /*padding-left: 0;*/
      /*a {*/
      /*padding-left: 10px;*/
      /*}*/
      /*}*/
      li {
        position: relative;
        float: left;
        padding-left: 2px;
        a {
          display: block;
          padding: 0 10px;
          color: #2d2b2b;
          &.active {
            font-weight: bold;
            color: #f96706;
          }
        }
        a:hover {
          color: #f96706;
        }
        ul.smenu {
          position: absolute;
          z-index: 999;
          /*width: 86px;*/
          top: 50px;
          right: -15px;
          box-shadow: 0 0 10px rgba(0, 0, 0, .3);
          background: #fff;
          li {
            width: 95px;
            height: 45px;
            line-height: 45px;
            text-align: left;
            cursor: pointer;
            color: #222;
            a {
              width: 90px;
              display: inline-block; /*max-width:240px;*/
              overflow: hidden;
              word-wrap: normal;
              white-space: nowrap;
              text-overflow: ellipsis;
              text-align: center;
              padding: 0 16px;
            }
            a:link, a:visited {
              color: #666;
              cursor: pointer;
              text-decoration: none;
            }
            a:hover {
              background: #F60;
              color: #fff;
            }
          }
          /*li:hover{*/
          /*background:#F60;*/
          /*color:#fff;*/
          /*}*/
        }
        /*ul.disappear{display: none;}*/
      }
      li:before:not(.smenu li) {
        content: ' ';
        position: absolute;
        left: 0;
        top: 13px;
        width: 2px;
        height: 2px;
        background: #bdbdbd;
      }
    }
  }

  @media (min-width: 1px) {
    .nav-sub .nav-sub-wrapper:after {
      display: block;
    }
  }

  .cart-con {
    /*display: flex;*/
    text-align: center;
    position: relative;
    p {
      padding-top: 185px;
      color: #333333;
      font-size: 16px;
    }
  }

  .cart-con:before {
    position: absolute;
    content: ' ';
    left: 50%;
    transform: translate(-50%, -70%);
    top: 50%;
    width: 76px;
    height: 62px;
    /*background: url("../assets/static/images/cart-empty-new.png") no-repeat;*/
    background-size: cover;

  }

  #hr {
    height: 2px;
    background: #f60;
    clear: both;
    font-size: 0;
  }

  .disappear {
    display: none;
  }

</style>

