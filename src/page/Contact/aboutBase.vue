<template>
  <div class="about">
    <dl class="qiyejs clearfix">
      <dt class="img1">
        <img src="../../assets/images/643507226585700506.jpg" title="关于我们.jpg" alt="关于我们.jpg">
      </dt>
      <dd class="text fr">
        <h2>广东工业大学创业（孵化）基地</h2>
        <p class="bor"><br></p>
        <p class="jj">
          <strong>“播种青春创业希望、催生创新创业梦想、汇集多方创业资源、引领校园创业新风！”</strong>，为搭建我校学生创业实践平台，增强学生创业意识，培养学生创业能力，广东工业大学大学生创业(孵化)基地于2009年10月孕育而生。基地作为学校学生的校内创业实践平台，为在校创业学生提供“场地免费、网络免费、设施免费、培训免费、指导免费、服务免费”的“六免”创业服务。
        </p>
      </dd>
    </dl>
    <div class="faznumber">
      <ul class="clearfix">
        <li>
          <p>
            <strong>2009</strong>年
          </p>
          <p class="text">创立年份</p>
        </li>
        <li>
          <p><strong>100</strong>个</p>
          <p class="text">项目在孵</p>
        </li>
        <li>
          <p><strong>63</strong>个</p>
          <p class="text">项目注册</p>
        </li>
        <li>
          <p><strong>1500</strong>人</p>
          <p class="text">参与创业实践</p>
        </li>
        <li>
          <p><strong>2000</strong>人</p>
          <p class="text">累计带动就业</p>
        </li>
      </ul>
    </div>
    <div class="shizhibuyi">
      <dl class="qiyejs clearfix">
        <dd class="text fl">
          <h2>基地孵化模式</h2>
          <p class="bor"><br></p>
          <p class="jj">基地构建“团队/项目+竞赛+初孵+深孵”四位一体的创业实训链条；建立了“N+1+N+N”四级创新创业训练孵化平台，即N个学院创新工作室，1个校内孵化基地，N个协同育人平台，N个校外训练孵化平台；形成“学校/技术创新教师-企业/产品开发导师-市场/企业成长讲师”的“三对一”实践指导机制；实施创业项目与企业对接的“创新兴趣组—创新团队—创业培育—创业初孵团队—创业深孵团队”的团队五级培育机制；集聚协同创新平台孵化基金、校友创新创业孵化基金、教师创新创业扶持资金以及社会投融资机构投资基金扶持学生创业。形成了集资金、导师、平台、市场、政策等多渠道、立体化创业孵化资源的多级孵化链条。</p>
        </dd>
        <dt class="img2">
          <img src="../../assets/images/modebase.png">
          <!--<video class="videolink" href="javascript:;" src="http://job.gdut.edu.cn/syb/20170409.mp4"></video>-->
        </dt>
      </dl>
    </div>
  </div>
</template>
<script>
  /*eslint-disable */

  export default {
    data() {
      return {}
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
  .qiyejs {
    margin-top: 35px;
    /*padding-top: 51px;*/
    .img1 {
      float: left;
      overflow: hidden;
      img {
        display: block;
        width: 553px;
        height: 411px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
      }
    }
    .img2 {
      float: left;
      position: relative;
      overflow: hidden;
      padding: 52px 56px 0 34px;
      img {
        /*width: 539px;*/
        height: 334px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
      }
      .videolink {
        display: block;
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: url(../../assets/images/btn.png) no-repeat center center;
        cursor: pointer;
        width: 539px;
        height: 334px;
      }
    }
    .text {
      width: 555px;
      padding: 52px 56px 0 34px;
      h2 {
        font-size: 30px;
        color: #333;
        margin-bottom: 12px;
        font-weight: bold;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
      }
      span {
        font-size: 16px;
        color: #666;
        text-transform: uppercase;
      }
      .bor {
        border-top: 5px solid #ff6600;
        width: 42px;
        margin-top: 28px;
      }
      .jj {
        font-size: 15px;
        color: #333;
        line-height: 35px;
        margin-top: 14px;
        /*height: 265px;*/
        overflow: hidden;
        text-indent: 20px;
      }
    }
    .fr {
      float: right;
    }
    .fl {
      float: left;
    }
  }

  .faznumber {
    overflow: hidden;
    padding-top: 60px;
    /*padding-bottom: 67px;*/
    ul {
      width: 1150px;
      padding-left: 43px;
      li {
        float: left;
        /*margin-right: 162px;*/
        width: 20%;
        text-align: center;
        font-size: 14px;
        color: #666;
        img {
          border: 0px;
        }
        .text {
          font-size: 14px;
          color: #666;
          margin-top: 15px;
        }
        p{
          color: #ff6600;
          strong{
            font-size: 45px;
          }
        }
      }
    }
  }

  .shizhibuyi {
    /*background: url(../../assets/images/bg222.png) no-repeat right center;*/
    height: 436px;
    .qiyejs .text .bor{
      margin-top: 20px;
    }
    .qiyejs .text .jj{
      margin-top: 0;
    }
  }
</style>
