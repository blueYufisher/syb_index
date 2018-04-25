<template>
  <div class="home">
    <div class="banner">
      <!--首页滚动图-->
      <image-show></image-show>
    </div>
    <div v-loading="loading" element-loading-text="加载中...">
      <section class="w mt30 clearfix" v-for="(index,i) in infos" :key="i">
        <home-news :index="index"></home-news>
      </section>
      <section class="w mt30 clearfix">
        <home-server></home-server>
      </section>
      <section class="w mt30 clearfix">
        <home-news :index="4"></home-news>
      </section>
      <section class="w mt30 clearfix">
        <div class="home_project_line">
          <div></div>
        </div>
        <router-link to="/project" class="news_more">更多</router-link>
        <h3 class="home_project_title">团队风采</h3>
        <div slot="content" class="floors">
          <home-projects :msg="item" v-for="(item,i) in projects" :key="i"></home-projects>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  /*eslint-disable */
  import {findProjectNumByVisit} from '/api/index.js'
  import ImageShow from '/components/imageShow'
  import homeNews from '/components/homeNews'
  import homeServer from '/components/homeServer'
  import homeProjects from '/components/homeProjects'
  // import { setStore, getStore } from '/utils/storage.js'
  export default {
    data () {
      return {
        serverUrl: process.env.API_ROOT,  // 打包部署上线时
        // banner: {},
        // bgOpt: {
        //   px: 0,
        //   py: 0,
        //   w: 0,
        //   h: 0
        // },
        projects:[],
        infos: [1, 2, 3],
        // hot: [],
        loading: true,
        // notify: '1',
        // dialogVisible: false
      }
    },
    methods: {
      // bgOver (e) {
      //   this.bgOpt.px = e.offsetLeft
      //   this.bgOpt.py = e.offsetTop
      //   this.bgOpt.w = e.offsetWidth
      //   this.bgOpt.h = e.offsetHeight
      // },
      // bgMove (dom, eve) {
      //   let bgOpt = this.bgOpt
      //   let X, Y
      //   let mouseX = eve.pageX - bgOpt.px
      //   let mouseY = eve.pageY - bgOpt.py
      //   if (mouseX > bgOpt.w / 2) {
      //     X = mouseX - (bgOpt.w / 2)
      //   } else {
      //     X = mouseX - (bgOpt.w / 2)
      //   }
      //   if (mouseY > bgOpt.h / 2) {
      //     Y = bgOpt.h / 2 - mouseY
      //   } else {
      //     Y = bgOpt.h / 2 - mouseY
      //   }
      //   dom.style['-webkit-transform'] = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
      //   dom.style.transform = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
      // },
      // bgOut (dom) {
      //   dom.style['-webkit-transform'] = 'rotateY(0deg) rotateX(0deg)'
      //   dom.style.transform = 'rotateY(0deg) rotateX(0deg)'
      // },
      // showNotify () {
      //   var value = getStore('notify')
      //   if (this.notify !== value) {
      //     this.dialogVisible = true
      //     setStore('notify', this.notify)
      //   }
      // }
    },
    mounted () {
      findProjectNumByVisit(10).then(res => {
        // console.log(res)
        let data = res.data
        data.forEach((item, index) => {
          if (item.picList) {
            item.picList[0].picUrl = this.serverUrl + "\\images\\" + item.picList[0].picUrl;
          }
        })
        this.projects = data
        this.loading = false
      })
      // this.showNotify()
    },
    components: {
      ImageShow,
      homeNews,
      homeServer,
      homeProjects
    }
  }
</script>
<style scoped lang="scss" type="text/scss">
  .home {
    display: flex;
    flex-direction: column;
  }

  .banner, .banner span, .banner div {
    font-family: "Microsoft YaHei";
    transition: all .3s;
    -webkit-transition: all .3s;
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear;
  }

  .banner {
    perspective: 3000px;
    position: relative;
    z-index: 19;
  }

  .bg {
    position: relative;
    width: 1220px;
    height: 500px;
    margin: 20px auto;
    background: url("http://static.smartisanos.cn/index/img/store/home/banner-3d-item-1-box-1_61bdc2f4f9.png") center no-repeat;
    background-size: 100% 100%;
    border-radius: 10px;
    transform-style: preserve-3d;
    -webkit-transform-origin: 50% 50%;
    -webkit-transform: rotateY(0deg) rotateX(0deg);
  }

  .img {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 5px;
    left: 0;
    background: url("http://static.smartisanos.cn/index/img/store/home/banner-3d-item-1-box-3_8fa7866d59.png") center no-repeat;
    background-size: 95% 100%;
  }

  .text {
    position: absolute;
    top: 20%;
    right: 10%;
    font-size: 30px;
    color: #fff;
    text-align: right;
    font-weight: lighter;
  }

  .copyright {
    position: absolute;
    bottom: 10%;
    right: 10%;
    font-size: 10px;
    color: #fff;
    text-align: right;
    font-weight: lighter;
  }

  .a {
    -webkit-transform: translateZ(40px);
  }

  .b {
    -webkit-transform: translateZ(20px);
  }

  .c {
    -webkit-transform: translateZ(0px);
  }

  .sk_item {
    width: 170px;
    height: 225px;
    padding: 0 14px 0 15px;
    > div {
      width: 100%;
    }
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /*transition: all .3s;*/
      &:hover {
        /*transform: translateY(-5px);*/
      }
    }
    img {
      width: 130px;
      height: 130px;
      margin: 17px 0;
    }
    .sk_item_name {
      color: #999;
      display: block;
      max-width: 100%;
      _width: 100%;
      overflow: hidden;
      font-size: 12px;
      text-align: left;
      height: 32px;
      line-height: 16px;
      word-wrap: break-word;
      word-break: break-all;
    }
    .sk_item_price {
      padding: 3px 0;
      height: 25px;
    }
    .price_new {
      font-size: 18px;
      font-weight: 700;
      margin-right: 8px;
      color: #f10214;
    }
    .price_origin {
      color: #999;
      font-size: 12px;
    }
  }

  .box {
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-top: 29px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, .14);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);

  }

  ul.box {
    display: flex;
    li {
      flex: 1;
      img {
        display: block;
        width: 305px;
        height: 200px;
      }
    }
  }

  .mt30 {
    margin-top: 15px;
  }

  /*.hot {*/
    /*display: flex;*/
    /*> div {*/
      /*flex: 1;*/
      /*width: 25%;*/
    /*}*/
  /*}*/

  .floors {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .imgbanner {
      width: 50%;
      height: 430px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .home_project_line {
    height: 1px;
    background: #dbdbdb;
    font-size: 0;
    margin-bottom: 5px;
    div {
      height: 1px;
      width: 100px;
      background: #f60;
      font-size: 0;
    }
  }
  .home_project_title {
    padding-left: 5px;
    font-size: 16px;
    line-height: 30px;
    /*font-width: 750;*/
    font-weight: 700;
  }
  .news_more:active, .news_more:link, .news_more:visited {
    float: right;
    background: url(../../assets/images/home_news_more.jpg) no-repeat 0 0;
    width: 49px;
    padding-left: 10px;
    height: 18px;
    text-align: left;
    display: block;
    line-height: 18px;
    color: #fff;
    margin-top: 3px;
  }
  .news_more:hover {
    color: #fff;
    background: url(../../assets/images/home_news_more.jpg) no-repeat 100% 0;
  }


</style>
