<template>
  <div class="about">
    <div class="honorlist commonwebbox">
      <ul class="clearfix">
        <li>
          <div class="honordiv"><span><img v-lazy="img1"></span>
            <p class="name">广州市创业孵化示范基地</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img2"></span>
            <p class="name">广东省创业带动就业孵化基地</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img3"></span>
            <p class="name">粤港澳（国际）大学城创新创业实践基地（广东工业大学基地）</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img4"></span>
            <p class="name">广东省互联网交通运输创客空间</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img5"></span>
            <p class="name">广东省众创空间试点单位</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img6"></span>
            <p class="name">青创空间</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img7"></span>
            <p class="name">大学城高校创新创业生态圈</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img8"></span>
            <p class="name">中国青年大学城创业板服务中心</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img9"></span>
            <p class="name">大学生创新创业服务基地</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img10"></span>
            <p class="name">全国毕业生就业典型经验高校</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img11"></span>
            <p class="name">粤港机器人学院</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img12"></span>
            <p class="name">全国创新创业典型经验高校</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img13"></span>
            <p class="name">南海（广工大）创新创业人才服务站</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img14"></span>
            <p class="name">全国大学生创业示范园</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img15"></span>
            <p class="name">广东省产学研专利育成转化中心（高端装备制造产业）</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img16"></span>
            <p class="name">广州市高校毕业生“创业就业e站”</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img17"></span>
            <p class="name">全国首批深化创新创业教育改革示范高校</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img18"></span>
            <p class="name">全国高校实践育人创新创业基地</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img19"></span>
            <p class="name">粤港澳高校创新创业联盟</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img20"></span>
            <p class="name">广东公共交通一卡通创客空间</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img21"></span>
            <p class="name">全国创业孵化示范基地</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img22"></span>
            <p class="name">广东青年就业创业指导工作站</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img23"></span>
            <p class="name">广东省大学生创新创业教育示范学校</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img v-lazy="img24"></span>
            <p class="name">独角兽牧场创新创业联合孵化基地</p></div>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
  /*eslint-disable */
  var pai1 = require("../../assets/images/pai1.jpg")
  var pai2 = require("../../assets/images/pai2.jpg")
  var pai3 = require("../../assets/images/pai3.jpg")
  var pai4 = require("../../assets/images/pai4.jpg")
  var pai5 = require("../../assets/images/pai5.jpg")
  var pai6 = require("../../assets/images/pai6.jpg")
  var pai7 = require("../../assets/images/pai7.jpg")
  var pai8 = require("../../assets/images/pai8.jpg")
  var pai9 = require("../../assets/images/pai9.jpg")
  var pai10 = require("../../assets/images/pai10.jpg")
  var pai11 = require("../../assets/images/pai11.jpg")
  var pai12 = require("../../assets/images/pai12.jpg")
  var pai13 = require("../../assets/images/pai13.jpg")
  var pai14 = require("../../assets/images/pai14.jpg")
  var pai15 = require("../../assets/images/pai15.jpg")
  var pai16 = require("../../assets/images/pai16.jpg")
  var pai17 = require("../../assets/images/pai17.jpg")
  var pai18 = require("../../assets/images/pai18.jpg")
  var pai19 = require("../../assets/images/pai19.jpg")
  var pai20 = require("../../assets/images/pai20.jpg")
  var pai21 = require("../../assets/images/pai21.jpg")
  var pai22 = require("../../assets/images/pai22.jpg")
  var pai23 = require("../../assets/images/pai23.jpg")
  var pai24 = require("../../assets/images/pai24.jpg")
  export default {
    data() {
      return {
        img1: pai1,
        img2: pai2,
        img3: pai3,
        img4: pai4,
        img5: pai5,
        img6: pai6,
        img7: pai7,
        img8: pai8,
        img9: pai9,
        img10: pai10,
        img11: pai11,
        img12: pai12,
        img13: pai13,
        img14: pai14,
        img15: pai15,
        img16: pai16,
        img17: pai17,
        img18: pai18,
        img19: pai19,
        img20: pai20,
        img21: pai21,
        img22: pai22,
        img23: pai23,
        img24: pai24
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {

    },
    components: {}
  }
</script>
<style scoped lang="scss" type="text/scss">
  @media (max-width: 1110px) {
    .honorlist ul li{
      width: 48% !important;
      margin: 0 1% !important;
    }
  }
  @media (max-width: 768px) {
    .honorlist ul li{
      width: 96% !important;
      margin: 0 2% !important;
      span{
        height: auto!important;
        img{
          width: 100% !important;
          height: 100% !important;
        }
      }
    }
  }
  .commonwebbox {
    border-bottom: 1px solid #ccc;
  }
  .honorlist {
    overflow: hidden;
    ul {
      /*width: 1134px;*/
      margin-top: 15px;
      li {
        width: 32%;
        text-align: center;
        margin-top: 15px;
        overflow: hidden;
        float: left;
        margin-right: 15px;
        .honordiv {
          background: #f2f2f2;
          padding-top: 20px;
          span {
            display: block;
            /*width: 361px;*/
            height: 291px;
            overflow: hidden;
            img {
              display: block;
              width: 310px;
              height: 260px;
              margin: 0 auto;
              -webkit-transition: all 0.5s;
              -moz-transition: all 0.5s;
              -o-transition: all 0.5s;
            }
          }
          .name {
            height: 46px;
            line-height: 24px;
            overflow: hidden;
            font-size: 14px;
            color: #333;
          }
        }
      }
    }
  }
</style>
