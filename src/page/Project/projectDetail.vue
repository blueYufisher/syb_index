<template>
  <div class="home">
    <div v-loading="loading" element-loading-text="加载中...">
      <section class="w mt30 clearfix">
        <div class="contentwrap">
          <div class="content">
            <div class="marketingContent">
              <div class="marketingLft">
                <div class="articleCntTitle">
                  <h1>{{project.projName}}</h1>
                </div>
                <div class="articleCopyright">
                  <!--<span class='origin'></span>-->
                  <span class="visit">浏览次数：{{projectVisit}}</span>
                  <span class="updateTime">更新时间：{{project.updateTime}}</span></div>
                <div class="articleDetail">【内容提要】{{project.note}}</div>
                <div class="articleCoverPic"><img v-lazy="picUrl" v-if="picUrl" alt="" style="margin: 10px auto; padding: 5px; list-style: none; vertical-align: middle; border: 1px solid rgb(221, 221, 221); border-radius: 3px; box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 8px; background: rgb(251, 251, 251); color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, verdana; font-size: 14px; white-space: normal;height: 150px;"></div>
                <div class="articleContent" v-html='project.content'>
                </div>
                <ul class="articleUl">
                  <li>
                    <div class="relatedTitle pre" v-if="post_pre">
                      上一篇：
                      <a href=''>
                        <router-link :to="{path:'/projectDetail', query:{id: preProject.id}}">
                          {{preProject.projName}}
                        </router-link>
                      </a>
                    </div>
                    <div class="relatedTitle pre" v-if="err_pre">
                      上一篇：没有了
                    </div>
                  </li>
                  <li>
                    <div class="relatedTitle next" v-if="post_next">
                      下一篇：
                      <a href=''>
                        <router-link :to="{path:'/projectDetail', query:{id: nextProject.id}}">
                          {{nextProject.projName}}
                        </router-link>
                      </a>
                    </div>
                    <div class="relatedTitle next" v-if="err_next">
                      下一篇：没有了
                    </div>
                  </li>
                </ul>
              </div>
              <div class="marketingRgt">
                <!--<div class="hot_news_title">-->
                <!--<h3 class="orange">最新文章</h3>-->
                <!--</div>-->
                <!--<ul class="marketingArticle">-->
                <!--</ul>-->
                <div class="hot_news_title">
                  <h3 class="orange">推荐内容</h3>
                </div>
                <ul class="marketingArticle" v-for="(hotProject, i) in hotList">
                  <li><a href=''><router-link :to="{path:'/projectDetail', query:{id: hotProject.id}}">{{hotProject.projName}}</router-link></a></li>
                </ul>
                <!--<div class="hot_news_title">-->
                <!--<h3 class="orange">点击排行</h3>-->
                <!--</div>-->
                <!--<ul class="marketingArticle">-->
                <!--</ul>-->
                <!--<div class="clr"></div>-->
              </div>
            </div>
          </div>
          <div class="clr"></div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  /*eslint-disable */
  import $ from 'jquery'
  import {getProjectByIdReturnPreNextProj, findProjectNumByVisit, modifyProjectVisit, selectPictureById} from '/api/index.js'
  import {formatDate} from '/common/js/util.js'

  export default {
    data() {
      return {
        serverUrl: process.env.API_ROOT,  // 打包部署上线时
        project: [],
        picUrl: '',
        preProject: [],
        nextProject: [],
        hotList: [],
        projectVisit: -1,
        project_type: -1,
        project_id: -1,
        post_pre: null,
        post_next: null,
        err_pre: null,
        err_next: null,
        crumbs_active: '',
      }
    },
    computed: {
      // classObject: function () {
      //   return {
      //     activity: this.classValue === 1,
      //     news: this.classValue === 2,
      //     knowledge: this.classValue === 3
      //   }
      // }
    },
    methods: {
      getData () {
        let _this = this
        this.post_pre = this.post_next = null
        this.err_pre = this.err_next = null
        getProjectByIdReturnPreNextProj(this.project_id).then(res => {
          _this.project = res.data.resultList[0]
          _this.project.updateTime = formatDate(_this.project.updateTime, "yyyy-MM-dd")
          _this.preProject = res.data.preText[0]
          _this.nextProject = res.data.nextText[0]
          if (_this.preProject !== undefined) {
            _this.post_pre = res.status
          } else {
            _this.err_pre = res.status
          }
          if (_this.nextProject !== undefined) {
            _this.post_next = res.status
          } else {
            _this.err_next = res.status
          }
          if (_this.project.logo !== 119){
            selectPictureById(_this.project.logo).then(res => {
              _this.picUrl = this.serverUrl + '\\images\\' + res.data.url
            })
          }
        })
      },
      getHotList () {
        let _this = this
        findProjectNumByVisit(10).then(res => {
          _this.hotList = res.data
        })
      },
      _modifyProjectVisit () {
        let _this = this
        modifyProjectVisit(this.project_id).then(res => {
          _this.projectVisit = res.data
        })
      }
    },
    watch: {
      "$route": function (to, from) {
        let _this = this;
        // console.log(to, from);
        let url = to.fullPath;
        this.project_id = url.split("?")[1].split("=")[1];
        this.picUrl = ''
        this.getData()
        this.getHotList()
        this._modifyProjectVisit()
        //from 对象中包含当前地址
        //to 对象中包含目标地址
        //其实还有一个next参数的，这个参数是控制路由是否跳转的，如果没写，可以不用写next()来代表允许路由跳转，如果写了就必须写next(),否则路由是不会生效的。
      }
    },
    mounted() {
      let _this = this
      let url = this.$route.fullPath
      this.project_id = url.split("?")[1].split("=")[1];
      this.picUrl = ''
      this.getData()
      this.getHotList()
      this._modifyProjectVisit()
      // console.log(this.project_type, this.project_id)
      // this.switchType(num)

    },
    components: {}
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

  a:link, a:visited {
    color:#666666;
    text-decoration:none
  }
  a:hover, a:active {
    text-decoration:underline;
    color:red
  }
  .clr {
    clear:both;
    width:0px;
    height:0px;
    overflow:hidden
  }


  .marketingLft {
    float:left;
    width:65%;
    min-height:803px;
    padding:0px 13px 20px 0px;
    border-right:1px dotted #CCC;

  }
  .marketingRgt {
    float:right;
    width:30%;
    min-height:100px;
  }
  .marketingLft p {
    margin:12px 0px;
    text-indent:24px;
    color:#666;
  }
  .marketingH1, .marketingTitle {
    font-size:16px;
    line-height:46px;
    font-weight:bold;
    margin-top:8px;
    font-family:'寰蒋闆呴粦';
  }
  .marketingList {
    float:left;
    width:310px;
    padding:8px;
    margin:0px 10px 0px 5px;
    height:420px;
  }
  .subTitle {
    font-size:16px;
    font-weight:bold;
    font-family:'寰蒋闆呴粦', '榛戜綋';
    margin-top:5px;
    line-height:46px;
  }
  .marketingDetail {
    border:1px solid #ECECEC;
    color:#999;
    height:80px;
    padding:5px;
    margin-bottom:10px;
  }
  .marketingDetail img {
    margin-right:8px;
  }
  .marketingList ul li {
    background:url(/static/images/dot3.jpg) 3px center no-repeat;
    padding-left:13px;
    border-bottom:1px dotted #ECECEC;
  }
  .marketingList a:link, .marketingList a:visited {
    color:#666;
    text-decoration:none;
  }
  .marketingList a:hover, .marketingList a:active {
    color:#7eb712;
    text-decoration:none;
  }
  .marketingArticle{margin-bottom:5px;}
  .marketingArticle li {
    border-bottom:1px dashed #dbdbdb;
    background:url(../../assets/images/icon_org.jpg) no-repeat 0 15px;
    padding: 5px 0 5px 10px;
  }
  .marketingArticle a:link, .marketingArticle a:visited {
    color:#666;
  }
  .marketingArticle a:hover, .marketingArticle a:active {
    color:#F60;
  }
  .articleUl {
    margin-bottom:15px;
  }
  .articleUl li {
    border-bottom:1px dotted #CCC;
    padding:5px;
    margin-left:5px;
  }
  .listTitle, .relatedTitle {
    font-weight:bold;
    font-family:'寰蒋闆呴粦';
  }
  .relatedTitle {
    background:none;
    padding-left:8px;
  }
  .listTitle a:link, .listTitle a:visited, .relatedTitle a:link, .relatedTitle a:visited {
    color:#666;
  }
  .listTitle a:hover, .listTitle a:active, .relatedTitle a:hover, .relatedTitle a:active {
    color:#F60;
  }
  .listDetail {
    text-indent:24px;
  }
  .listDetail a:link, .listDetail a:visited {
    color:#666;
    text-decoration:none;
  }
  .copyRight span {
    margin-left:24px;
    color:#999;
  }
  .marketingList .articleTitle {
    text-align:center;
  }
  .marketingList .articleTitle {
    height:90px;
    color:#666;
  }
  .articleCopyright {
    border-top:1px dotted #ececec;
    border-bottom:1px dotted #ececec;
    height:22px;
    padding:5px 0;
    color:#999;
    text-align:center;
  }
  .articleCopyright span {
    margin:0px 12px;
  }
  .marketingLft .articleDetail {
    border:1px dashed #CCC;
    background:#F9F9F9;
    padding:5px;
    /*width:664px;*/
    text-indent:24px;
    margin-top:20px;
    color:#555;
  }
  .articleCntTitle h1 {
    font-size:20px;
    font-family:Microsoft Yahei,"瀹嬩綋","瀹嬩綋",verdana;
    margin:20px 0px ;
    color:#333;
    font-weight:bold;
    text-align:center;
  }
  .articleContent ul li {
    list-style:square;
    margin-left:42px;
    color:#666;
  }

  .articleContent {
    color: #333;
    line-height: 25px;
    font-size: 14px;
    /*width: 675px;*/
    overflow: hidden;
    font-family: Microsoft Yahei, verdana;
  }

  .articleContent img{border-radius:3px;box-shadow:rgba(0,0,0,0.15) 0 0 8px;background:#FBFBFB;border:1px solid #ddd;margin:10px auto;padding:5px;}

  .orange {
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    color: #f60;
  }
</style>
