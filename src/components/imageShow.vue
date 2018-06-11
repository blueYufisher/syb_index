<template>
  <!-- 制作一个框架包裹slider -->
  <div class="inner">
    <div class="moduleOne">
      <!-- 配置slider组件 -->
      <slider :pages="pages" :sliderinit="sliderinit">
        <!-- 设置loading,可自定义 -->
        <div slot="loading">loading...</div>
      </slider>
    </div>
    <div class="moduleTwo">
      <div class="newest-info clr" id="newest-info">
        <div class="small">
          <ul v-for="(info, i) in infos" v-if="i<=1">
            <li>
              <div class="pic">
                <router-link :to="{path:'/detail', query:{type: info.type, id: info.id}}">
                <a target="_blank" title="">
                  <img v-lazy="info.picList[0].picUrl"
                    alt="" style="margin:0 auto;max-height: 223px;">
                </a>
                </router-link>
              </div>
              <div class="txt">
                <router-link :to="{path:'/detail', query:{type: info.type, id: info.id}}">
                <a target="_blank" title="">{{info.title}}</a>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
        <div class="small">
          <ul v-for="(info, i) in infos" v-if="i>1">
            <li>
              <div class="pic">
                <router-link :to="{path:'/detail', query:{type: info.type, id: info.id}}">
                  <a target="_blank" title="">
                    <img v-lazy="info.picList[0].picUrl"
                         alt="" style="margin:0 auto;max-height: 223px;">
                  </a>
                </router-link>
              </div>
              <div class="txt">
                <router-link :to="{path:'/detail', query:{type: info.type, id: info.id}}">
                  <a target="_blank" title="">{{info.title}}</a>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  /*eslint-disable */
  import slider from 'vue-concise-slider'// import slider components
  var slider1 = require('../assets/images/2018.png')
  var slider2 = require('../assets/images/1_1616412971.jpg')
  var slider3 = require('../assets/images/1_1616412753.jpg')
  var slider4 = require('../assets/images/1_1616418145.png')
  var slider5 = require('../assets/images/1_1618571012.png')
  import {selectInfoNumByReleaseTime} from '/api/index.js'
  export default {
    data() {
      return {
        //Image list
        serverUrl: process.env.API_ROOT,  // 打包部署上线时
        pages: [
          {
            html: '<div class="slider1"></div>',
            style: {
              'background': 'url(' + slider1 + ')'
            }
          },
          {
            html: '<div class="slider2"></div>',
            style: {
              'background': 'url(' + slider2 + ')'
            }
          },
          {
            html: '<div class="slider3"></div>',
            style: {
              'background': 'url(' + slider3 + ')'
            }
          },
          {
            html: '<div class="slider4"></div>',
            style: {
              'background': 'url(' + slider4 + ')'
            }
          },
          {
            html: '<div class="slider5"></div>',
            style: {
              'background': 'url(' + slider5 + ')'
            }
          }
        ],
        //Sliding configuration [obj]
        sliderinit: {
          currentPage: 0,
          thresholdDistance: 500,
          thresholdTime: 500,
          // autoplay: 3000,
          autoplay: 300000,
          loop: true,
          // direction:'vertical',
          infinite: 1,
          slidesToScroll: 1,
          timingFunction: 'ease',
          duration: 1000
        },
        infos:[]
      }
    },
    components: {
      slider
    },
    methods: {
      getData(){
        let _this = this;
        selectInfoNumByReleaseTime(4).then(res => {
          let data = res.data
          data.forEach((item, index) => {
            if (item.picList) {
              item.picList[0].picUrl = this.serverUrl + "\\images\\" + item.picList[0].picUrl;
            }
          })
          _this.infos = data;
        })
      }
    },
    mounted(){
     this.getData();
    }
  }
</script>
<style scoped lang="scss" type="text/scss">
  @media (max-width: 768px) {
    .inner{
      height: auto!important;
    }
    .moduleOne{
      width: 100%!important;
      padding-bottom: 3px;
      border-left: 2px solid #fff;
      border-right: 2px solid #fff;
      .slider-item{
        width: 100%;
        max-height: 500px!important;
      }
    }
    .moduleTwo{
      width: 100%;
      .small{
        display: flex;
        ul{
          width: 50%;
        }
      }
      li{
        min-height: 223px;
        width: 100% !important;
        line-height: 223px;
        background: #DDDDDD;
        div.pic{
          display: inline-block;
          vertical-align: middle;
        }
        img{
          width: 100%;
          display: inline-block;
          vertical-align: middle;
        }
        .txt{
          width: 100% !important;
        }
      }
    }
    .slider-wrapper{
      padding-bottom:100%;
    }
  }

  .inner {
    width: 100%;
    height:450px;
    margin: 0 auto;
    position: relative;
    .moduleOne {
      float: left;
      width: 60%;
      height: 450px;
      border-bottom: 2px solid #fff;
    }
    .moduleTwo {
      overflow: hidden;
      .small{
        overflow: hidden;
        ul{
          li{
            width: 50%;
            float: left;
            border-left: 2px solid #fff;
            position: relative;
            overflow: hidden;
            border-bottom: 2px solid #fff;
            .pic {
              a {
                position: relative;
                display: block;
                img{
                  transition: all ease-in-out 0.3s;
                  -moz-transition: all ease-in-out 0.3s;
                  -webkit-transition: all ease-in-out 0.3s;
                  display: block;
                }
              }
            }
            .txt{
              position: absolute;
              left: 0;
              bottom: 0;
              z-index: 1;
              height: 40px;
              line-height: 42px;
              padding: 0 20px;
              width: 100%;
              background-image: -webkit-linear-gradient(180deg, rgba(0,0,0,0.01) 5%, rgba(0,0,0,0.4) 100%);
              background-image: -moz-linear-gradient(180deg, rgba(0,0,0,0.01) 5%, rgba(0,0,0,0.4) 100%);
              background-image: linear-gradient(180deg, rgba(0,0,0,0.01) 5%, rgba(0,0,0,0.4) 100%);
              -webkit-transition: all 0s ease-out;
              -moz-transition: all 0s ease;
              transition: all 0s ease;
              a{
                color: #fff;
                font-size: 14px;
                display: block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }
  }

  .small li .pic a:hover:before {
    content: "";
    background: rgba(0, 0, 0, 0);
  }

  .small li .pic a:before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    transition: all ease-in-out 0.3s;
    -moz-transition: all ease-in-out 0.3s;
    -webkit-transition: all ease-in-out 0.3s;
  }
</style>
