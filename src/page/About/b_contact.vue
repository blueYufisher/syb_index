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
    <div v-loading="loading" element-loading-text="加载中...">
      <section class="w mt30 clearfix">
        <div class="contentwrap">
          <div class="content">
            <div class="area havemenu">
              <div class="pagetitle"><span>联系我们</span></div>
              <div class="article-toolbar">
                <span class="article-assist">
                    <!--<span class="origin">来源:</span>-->
                    <span class="author">发布时间：</span><span class="time">2017-09-01</span>
                </span>
                <span class="article-statist">
                    <!--<span class="article-view">浏览量：<em id="m2oclicks" data-id="724"-->
                  <!--data-app="news" data-mod="news" data-column="78">921</em>-->
                  <!--</span>-->
                </span>
              </div>
              <div class="contentbox" style="border-top:1px solid #e3e3e3">
                <div class="article-main">
                  <table style="border-collapse:collapse;width:554px;margin-left:150px">
                    <tbody>
                    <tr>
                      <td width="138" valign="top" style="width:138px;padding:10px 0 10px 15px "><p
                        style="margin-top:5px;line-height: 200%;"><span
                        style=";font-family: 宋体;letter-spacing: 0;font-size: 13px;background: rgb(255, 255, 255)">办公地址：</span>
                      </p></td>
                      <td width="415" valign="top" style="width:416px;padding:10px 0 10px 15px "><p
                        style="margin-top:5px"><span
                        style="font-family: 宋体;letter-spacing: 0;font-size: 13px;background: rgb(255, 255, 255)">大学城外环西路100号广东工业大学教学6号楼209-2</span>
                      </p></td>
                    </tr>
                    <tr>
                      <td width="138" valign="top" style="width:138px;padding:10px 0 10px 15px "><p
                        style="margin-top:5px;line-height:18px"><span
                        style="font-family: 宋体;letter-spacing: 0;font-size: 13px;background: rgb(255, 255, 255)">邮政编码：</span>
                      </p></td>
                      <td width="415" valign="top" style="width:416px;padding:10px 0 10px 15px "><p
                        style="margin-top:5px;line-height:18px"><span
                        style="font-family: 宋体;letter-spacing: 0;font-size: 13px;background: rgb(255, 255, 255)">510006</span>
                      </p></td>
                    </tr>
                    <tr>
                      <td width="138" valign="top" style="width:138px;padding:10px 0 10px 15px "><p
                        style="margin-top:5px;line-height:18px"><span
                        style="font-family: 宋体;letter-spacing: 0;font-size: 13px;background: rgb(255, 255, 255)">办公时间：</span>
                      </p></td>
                      <td width="415" valign="top" style="width:416px;padding:10px 0 10px 15px "><p
                        style="margin-top:5px;line-height:18px"><span
                        style="font-family: 宋体;letter-spacing: 0;font-size: 13px;background: rgb(255, 255, 255)">周一至周五上午9：00--下午5：00（国定节假日除外）</span>
                      </p></td>
                    </tr>
                    <tr>
                      <td width="138" valign="top" style="width:138px;padding:10px 0 10px 15px "><p
                        style="margin-top:5px;line-height:18px"><span
                        style="font-family: 宋体;letter-spacing: 0;font-size: 13px;background: rgb(255, 255, 255)">联系电话：</span>
                      </p></td>
                      <td width="415" valign="top" style="width:416px;padding:10px 0 10px 15px "><p
                        style="margin-top:5px;line-height:18px"><span
                        style="font-family: 宋体;letter-spacing: 0;font-size: 13px;background: rgb(255, 255, 255)">020-39322612</span>
                      </p></td>
                    </tr>
                    <tr>
                      <td width="554" valign="top" colspan="2" style="width:554px;padding:10px 0 10px 15px "><p
                        style="margin-top:5px;text-align:center;line-height:18px"><span
                        style="font-family:#39;color:rgb(134,134,134);font-size:16px"></span></p>
                        <p style="text-align: center;">
                          <!--<img class="image" imageid="1343"-->
                                                            <!--src="../../assets/images/map.png"-->
                                                            <!--style="float: none;">-->
                        <b-map></b-map>
                        </p>
                        <p style="margin-top:5px;text-align:center;line-height:18px"><span
                          style="font-family:#39;color:rgb(134,134,134);font-size:16px"></span><br></p>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <p><br></p></div>
              </div>
            </div>
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
        banner: {},
        bgOpt: {
          px: 0,
          py: 0,
          w: 0,
          h: 0
        },
        projects: [],
        infos: [1, 2, 3],
        floors: [],
        hot: [],
        loading: false,
        notify: '1',
        dialogVisible: false
      }
    },
    methods: {
      bgOver(e) {
        this.bgOpt.px = e.offsetLeft
        this.bgOpt.py = e.offsetTop
        this.bgOpt.w = e.offsetWidth
        this.bgOpt.h = e.offsetHeight
      },
      bgMove(dom, eve) {
        let bgOpt = this.bgOpt
        let X, Y
        let mouseX = eve.pageX - bgOpt.px
        let mouseY = eve.pageY - bgOpt.py
        if (mouseX > bgOpt.w / 2) {
          X = mouseX - (bgOpt.w / 2)
        } else {
          X = mouseX - (bgOpt.w / 2)
        }
        if (mouseY > bgOpt.h / 2) {
          Y = bgOpt.h / 2 - mouseY
        } else {
          Y = bgOpt.h / 2 - mouseY
        }
        dom.style['-webkit-transform'] = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
        dom.style.transform = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
      },
      bgOut(dom) {
        dom.style['-webkit-transform'] = 'rotateY(0deg) rotateX(0deg)'
        dom.style.transform = 'rotateY(0deg) rotateX(0deg)'
      },
      showNotify() {
        var value = getStore('notify')
        if (this.notify !== value) {
          this.dialogVisible = true
          setStore('notify', this.notify)
        }
      }
    },
    mounted() {
      this.loading = false
      this.showNotify()
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
            font-size: 25px;
            font-weight: 700;
            color: #333;
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
        /*.homeCenterNavImg01 {*/
        /*background: url(/static/images/home_nav_img01.png) no-repeat scroll 0 0 transparent;*/
        /*height: 112px;*/
        /*border-left: 1px solid #ccc;*/
        /*!*padding: 15px 0 0 110px;*!*/
        /*!*width: 406px;*!*/
        /*}*/
        /*.homeCenterNavImg02 {*/
        /*background: url(/static/images/home_nav_img02.png) no-repeat scroll 0 0 transparent;*/
        /*height: 112px;*/
        /*border-left: 1px solid #ccc;*/
        /*!*padding: 15px 0 0 110px;*!*/
        /*!*width: 406px;*!*/
        /*}*/
        /*.homeCenterNavImg03 {*/
        /*background: url(/static/images/home_nav_img03.png) no-repeat scroll 0 0 transparent;*/
        /*height: 112px;*/
        /*border-right: 1px solid #ccc;*/
        /*!*padding: 15px 0 0 110px;*!*/
        /*!*width: 406px;*!*/
        /*}*/
      }
    }
  }

</style>
