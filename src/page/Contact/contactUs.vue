<template>
  <div class="about">
    <div class="contentbox">
      <div class="article-main" style="margin-top: 25px">
        <table style="border-collapse:collapse;width:554px;margin-left:150px">
          <tbody>
          <tr>
            <td>
              <div class="linewrap">
                <ul class="lineguihau clearfix">
                  <li><h5>办公地址</h5>
                    <p>大学城外环西路100号广东工业大学教学6号楼209-2</p>
                  </li>
                  <li><h5>邮政编码</h5>
                    <p>510006</p>
                  </li>
                </ul>
              </div>
            </td>
            <td>
              <div class="linewrap">
                <ul class="lineguihau clearfix">
                  <li><h5>办公时间</h5>
                    <p>周一至周五上午9：00--下午5：00（国定节假日除外）</p>
                  </li>
                  <li><h5>联系电话</h5>
                    <p>020-39322612</p>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="linewrap">
                <ul class="lineguihau clearfix">
                  <li><h5>驾车</h5>
                    <p><strong>地点：广东工业大学</strong></p>
                    <p><strong>线路：</strong>大学城外环西路100号广东工业大学教学6号楼209-2</p></a></li>
                  <li><h5>公交车</h5>
                    <p><strong>站台：广工站</strong></p>
                    <p><strong>线路：</strong>86路、大学城专线1路、大学城专线2路、大学城专线3路、大学城专线4路、大学城环线1路、大学城环线2路、番202路</p></a></li>
                </ul>
              </div>
            </td>
            <td>
              <div class="linewrap">
                <ul class="lineguihau clearfix">
                  <li><h5>地铁</h5>
                    <p><strong>站台：大学城站（B出口）</strong></p>
                    <p><strong>线路：</strong>乘坐 4号线 在 大学城南站 下车 步行1.1公里</p></li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td width="554" valign="top" colspan="2" style="width:100%;">
                <b-map></b-map>
            </td>
          </tr>
          </tbody>
        </table>
        <p><br></p></div>
    </div>
  </div>
</template>
<script>
  /*eslint-disable */
  import {setStore, getStore} from '/utils/storage.js'
  import BMap from '/components/map'

  export default {
    data() {
      return {}
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {

    },
    components: {
      BMap
    },
  }
</script>
<style scoped lang="scss" type="text/scss">
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

  .linewrap {
    overflow: hidden;
    padding-top: 14px;
    /*padding-bottom: 46px;*/
    .lineguihau {
      /*width: 1220px;*/
      li {
        float: left;
        width: 445px;
        margin-right: 160px;
        margin-top: 30px;
        h5 {
          font-size: 18px;
          color: #ff6600;
          margin-bottom: 13px;
          font-weight: bold;
          height: 21px;
          overflow: hidden;
        }
        p {
          font-size: 16px;
          color: #333;
          line-height: 24px;
          overflow: hidden;
        }
      }
    }
  }
</style>
