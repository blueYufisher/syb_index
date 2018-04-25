<template>
  <div class="home">
    <!--  bread_crumbs  -->
    <div class="bread_crumbs">
      <ul id="crumbs">
        <li><span>当前位置：</span></li>
        <li><a href="index.html" class="crumbs_index">网站首页</a></li>
        <li><span>&nbsp;/&nbsp;</span></li>
        <li><a href="about.html" class="crumbs_paper">联系我们</a></li>
      </ul>
    </div>
    <!--  bread_crumbs 结束  -->
    <div>
      <section class="w mt30 clearfix">
        <div class="contentwrap">
          <div class="content">
            <div class="area havemenu">
              <div class="pagetitle"><span>关于创业梦工场</span></div>
            </div>
            <div class="jiaruyineng">
              <ul class="clearfix">
                <li @click="changePage(1)" :class="{cur:choosePage===1}">
                  <router-link to="/contact/aboutBase">
                    <p class="iconbox">
                      <img class="img1" src="../../assets/images/icons8-skyscrapers-55.png">
                      <img class="img2" src="../../assets/images/icons8-skyscrapers-55-hover.png">
                    </p>
                    <p class="text">基地概况</p>
                  </router-link>
                </li>
                <!--<li @click="changePage(2)" :class="{cur:choosePage===2}">-->
                  <!--<router-link to="/contact/brandStory">-->
                    <!--<p class="iconbox">-->
                      <!--<img class="img1" src="../../assets/images/pinpaigushi.png">-->
                      <!--<img class="img2" src="../../assets/images/pinpaigushiho.png">-->
                    <!--</p>-->
                    <!--<p class="text">品牌故事</p>-->
                  <!--</router-link>-->
                <!--</li>-->
                <!--<li @click="changePage(3)" :class="{cur:choosePage===3}">-->
                <!--<a href="/AboutUs/Culture/index.html">-->
                <!--<p class="iconbox">-->
                <!--<img class="img1" src="../../assets/images/qiyewenhua.png">-->
                <!--<img class="img2" src="../../assets/images/qiyewenhuaho.png">-->
                <!--</p>-->
                <!--<p class="text">企业文化</p>-->
                <!--</a>-->
                <!--</li>-->
                <li @click="changePage(4)" :class="{cur:choosePage===4}">
                  <router-link to="/contact/baseHonor">
                    <p class="iconbox">
                      <img class="img1" src="../../assets/images/icons8-prize.png">
                      <img class="img2" src="../../assets/images/icons8-prize-hover.png">
                    </p>
                    <p class="text">资质荣誉</p>
                  </router-link>
                </li>
                <li @click="changePage(5)" :class="{cur:choosePage===5}">
                  <router-link to="/contact/contactUs">
                    <p class="iconbox">
                      <img class="img1" src="../../assets/images/icons8-phone.png">
                      <img class="img2" src="../../assets/images/icons8-phone-hover.png">
                    </p>
                    <p class="text">联系我们</p>
                  </router-link>
                </li>
              </ul>
            </div>
            <router-view></router-view>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  /*eslint-disable */
  import {setStore, getStore} from '/utils/storage.js'
  import BMap from '/components/map'

  export default {
    components: {
      BMap
    },
    data() {
      return {
        choosePage: 1,
      }
    },
    methods: {
      changePage(v) {
        this.choosePage = v
      },
      getPage() {
        let url = this.$route.fullPath.split('?')[0]
        // console.log(url)
        if (this.$route.path === '/contact/aboutBase') {
          this.changePage(1)
        } else if (this.$route.path === '/contact/baseHonor') {
          this.changePage(4)
        } else if (this.$route.path === '/contact/contactUs') {
          this.changePage(5)
        }
      }
    },
    mounted() {
      this.getPage()
    }
  }
</script>
<style scoped lang="scss" type="text/scss">

  /*面包屑*/
  .bread_crumbs { /*border-top:1px solid #dbdbdb;*/
    border-bottom: 1px solid #dbdbdb;
    height: 37px;
    width: 1220px;
    margin: 0 auto;
    margin-top: 10px
  }

  ul#crumbs {
    overflow: hidden;
    line-height: 35px
  }

  ul#crumbs li {
    float: left;
    list-style: none
  }

  ul#crumbs li span {
    font-size: 12px
  }

  ul#crumbs li a:link, ul#crumbs li a:visited {
    text-decoration: none;
    font-size: 12px
  }

  .crumbs_index:link, .crumbs_index:visited {
    color: #666
  }

  .crumbs_paper:link, .crumbs_paper:visited {
    color: #666
  }

  .crumbs_index:hover, .crumbs_paper:hover {
    color: #F60
  }

  .home {
    display: flex;
    flex-direction: column;
  }

  .mt30 {
    margin-top: 15px;
  }

  .contentwrap {
    width: 100%;
    display: block;
    padding: 20px 0;
    background: #FFF;
    .content {
      width: 1220px;
      margin: 0 auto;
      padding: 0;
      .area {
        width: 100%;
        padding: 0;
        overflow: hidden;
        .pagetitle {
          height: 35px;
          line-height: 35px;
          text-align: center;
          span {
            display: block;
            color: #eb6100;
            font-size: 24px;
            font-weight: bold;
          }
        }
        .article-toolbar {
          text-align: center;
          color: #989898;
          font-size: 12px;
          font-family: arial;
          height: 28px;
          line-height: 28px;
          .time {
            padding: 0 15px 0 12px;
            color: #989898;
          }
        }
        .mt10 {
          margin-top: 10px;
          img {
            vertical-align: middle;
            border: none;
          }
        }
        .contentbox {
          padding: 10px 0;
          overflow: hidden;
          font-size: 14px;
          line-height: 25px;
        }
      }
      .havemenu {
        overflow: hidden;
        width: 100%;
        padding: 0;
        /* background: url(../images/bg_menu.jpg) repeat-y; */
      }
    }
    .homeCenterNav {
      margin: 0 auto;
      width: 1220px;
      border-top: #F60 2px solid;
      ul {
        height: 127px;
        margin: 0 auto;
        li {
          float: left;
          width: 406px;
          padding: 15px 0 0 150px;
          p {
            line-height: 20px;
            width: 185px;
          }
        }

      }
    }
  }

  .jiaruyineng {
    background: url(../../assets/images/jryn2.png) repeat-x center center;
    width: 100%;
    height: 115px;
    overflow: hidden;
    ul {
      padding-top: 25px;
      text-align: center;
      ::before, ::after {
        content: " ";
        display: table;
      }
      li {
        text-align: center;
        /*width: 55px;*/
        width: 10%;
        margin: 0 36px;
        display: inline-block;
        padding: 0 10px;
        background-color: #fff;
        vertical-align: middle;
        a {
          text-decoration: none;
          color: #1a1a1a;
          .iconbox {
            display: block;
            height: 55px;
            margin-bottom: 14px;
            img {
              display: block;
              width: 55px;
              height: 55px;
              margin: 0 auto;
              border: 1px #ccc solid;
              border-radius: 50%;
            }
          }
          .text {
            margin: 0 auto;
            width: 65px;
            text-align: center;
            /*margin-right: 0;*/
            font-size: 16px;
            color: #666;
            height: 21px;
            overflow: hidden;
            /*margin-left: -5px;*/
          }
        }
        :hover {
          .img1 {
            display: none;
          }
          .img2 {
            display: block;
          }
          .text {
            color: #eb6100;
          }
        }
      }
      .cur {
        .img1 {
          display: none;
            margin: 0 auto;
        }
        .img2 {
          display: block;
          margin: 0 auto;
        }
        .text {
          color: #eb6100;
          margin: 0 auto;
        }
      }
    }
    .img2:not(.cur) {
      display: none;
    }
  }

</style>
