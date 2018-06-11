<template>
  <div class="home">
    <!--  bread_crumbs  -->
    <div class="bread_crumbs">
      <ul id="crumbs">
        <li><span>当前位置：</span></li>
        <li><a href="index.html" class="crumbs_index">网站首页</a></li>
        <li><span>&nbsp;/&nbsp;</span></li>
        <li><a href="about.html" class="crumbs_paper">关于社区</a></li>
      </ul>
    </div>
    <!--  bread_crumbs 结束  -->
    <div v-loading="loading" element-loading-text="加载中...">
      <section class="w mt30 clearfix">
        <div class="contentwrap">
          <div class="content">
            <div class="area havemenu">
              <div class="pagetitle"><span>社区简介</span></div>
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
              <div class="mt10" style="text-align: center">
                <img v-lazy="img" alt="关于我们" width=805 height=448 style="margin: 0 auto;box-shadow: 1px 1px 20px #999;" ref="bg"
                     @mouseover="bgOver($refs.bg)"
                     @mousemove="bgMove($refs.bg,$event)"
                     @mouseout="bgOut($refs.bg)">
              </div>
              <div class="contentbox">
                <span style="font-size:16px;">&nbsp; &nbsp; &nbsp; &nbsp;&ldquo;播种青春创业希望、催生创新创业梦想、汇集多方创业资源、引领校园创业新风！&rdquo;，为搭建我校学生创业实践平台，增强学生创业意识，培养学生创业能力，广东工业大学大学生创业（孵化）基地于2009年10月孕育而生。</span><br/>
                <br/>
                <div><span style="font-size:16px;">&nbsp; &nbsp; &nbsp; &nbsp; 基地作为学校学生的校内创业实践平台，为在校创业学生提供&ldquo;场地免费、网络免费、设施免费、培训免费、指导免费、服务免费&rdquo;的&ldquo;六免&rdquo;创业服务。2011年9月，基地成立&ldquo;南极星创客联盟&rdquo;学生创业社团组织，充分发挥学生的自我管理、教育与服务，为创业团队提供人员招聘、活动场地申请、对接落实各级创业优惠政策等服务，开展了广工大创业节、创业集市、创业沙龙、校园创业新星评选、走访广工大 创业者、基地开放日等一系列的校园创业文化活动，营造了积极向上的校园创业氛围。<br/>
	<br/>
	　　基地积极借助以创业校友为主体的社会资源，以&ldquo;先创业带动后创业、先创业风投后创业、后创业补充先创业、先后创业合作&rdquo;的&ldquo;四创合作&rdquo;模式协同推动校园创业，强化创业校友对在校学生创业的指导与引领作用。2014年，基地引入创业校友组建的基地管理服务公司，协助学校市场化运营管理基地，后成立了广州力燎企业管理有限责任公司，借助校友的经验、资源、人脉等对基地进行专业化管理，对每个入驻基地项目给予&ldquo;一块场地、一个企业导师、一个校内导师、一个基金池、一个推广平台、一个服务团队&rdquo;的&ldquo;六个一&rdquo;创业联动帮扶服务。与此同时，基地还与学校协同创新平台开展全方位的孵化合作，充分利用协同创新平台的创业资源，深度孵化学生创业项目。<br/>
	<br/>
	　　目前，基地在孵学生创业项目108个，其中已注册公司63个，拟注册公司8个，带动着1500名参与创业实践的学生活跃在大学校园。基地出孵项目104个，其中，推荐入驻政府科技创业园项目4个，入驻政府创业孵化苗圃项目12个，累计获校级以上创新创业实践项目127项，带动就业1000余人，实现了创业带动就业的倍增效应。基地的发展得到了省市政府部门的充分肯定，2011年、2014年、2015年、2016年分别被评为&ldquo;广州市创业（孵化）示范基地&rdquo;、&ldquo;省级创业带动就业孵化基地&rdquo;、&ldquo;大学生创新创业教育示范学校&rdquo;、教育部首批&nbsp;&ldquo;创新创业典型经验高校&rdquo;、人力资源社会保障部&ldquo;全国创业孵化示范基地&rdquo;。</span>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div class="homeCenterNav">
            <ul>
              <li class="homeCenterNavImg01">
                <p><strong>广工创新创业社区</strong></p>
                <p>依托广工大创业基地给更多的创业者提供办公、交流与协作的场地与氛围，欢迎加入我们，相互支持、协同创业。</p>
              </li>
              <li class="homeCenterNavImg02">
                <p><strong>助力创业者梦想起航</strong></p>
                <p>汇聚着一群有梦想，有能力的年轻人，我们将帮助有梦想、有追求的创业者成长壮大，助力创业者梦想起航</p>
              </li>
              <li class="homeCenterNavImg03">
                <p><strong>广工创业（孵化）基地</strong></p>
                <p>整合学校平台、创业经验、优秀校友，注入技术、管理和资本等资源，将创业（孵化）基地打造成广工人创业摇篮。</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  /*eslint-disable */
  import {setStore, getStore} from '/utils/storage.js'
  var aboutImg = require("../../assets/images/IMG_2407.jpg")
  export default {
    data() {
      return {
        img: aboutImg,
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
    },
    components: {}
  }
</script>
<style scoped lang="scss" type="text/scss">

  @media (max-width: 1220px) {
    .w{
      width: 100%;
    }
    .homeCenterNav li{
      width: 33.3%!important;
    }
  }

  @media (max-width: 1000px) {
    .homeCenterNav li{
      width: 100%!important;
      p{
        width: 100%!important;
      }
    }
  }

  @media (max-width: 805px) {
    .area {
      img {
        margin: 0 auto;
        width: 95%;
        height: auto;
      }
      .contentbox{
        margin: 0 auto;
        width: 95%;
      }
    }
  }

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
      width: 100%;
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
      width: 100%;
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
        .homeCenterNavImg01 {
          background: url(../../assets/images/home_nav_img01.png) no-repeat scroll 0 0 transparent;
          height: 112px;
          border-left: 1px solid #ccc;
          /*padding: 15px 0 0 110px;*/
          /*width: 406px;*/
        }
        .homeCenterNavImg02 {
          background: url(../../assets/images/home_nav_img02.png) no-repeat scroll 0 0 transparent;
          height: 112px;
          border-left: 1px solid #ccc;
          /*padding: 15px 0 0 110px;*/
          /*width: 406px;*/
        }
        .homeCenterNavImg03 {
          background: url(../../assets/images/home_nav_img03.png) no-repeat scroll 0 0 transparent;
          height: 112px;
          border-right: 1px solid #ccc;
          /*padding: 15px 0 0 110px;*/
          /*width: 406px;*/
        }
      }
    }
  }

</style>
