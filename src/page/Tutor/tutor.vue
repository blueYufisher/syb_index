<template>
  <div class="home">
    <!--  bread_crumbs  -->
    <div class="bread_crumbs">
      <ul id="crumbs">
        <li><span>当前位置：</span></li>
        <li><router-link to="/"><a class="crumbs_index">网站首页</a></router-link></li>
        <li><span>&nbsp;/&nbsp;</span></li>
        <li><a href="#" class="crumbs_paper">创业导师</a></li>
      </ul>
    </div>
    <!--  bread_crumbs 结束  -->
    <div v-loading="loading" element-loading-text="加载中...">
      <section class="w mt30 clearfix">
        <div class="container_bg">
          <div class="container">
            <div class="news_padding">
              <div class="w670 fl">
                <div class="news-list">
                  <ul v-for="(tutor, i) in tutors">
                    <li>
                      <p class="img">
                        <router-link :to="{path:'/detail', query:{type: 6, id: tutor.id}}" target="_blank">
                          <a target='_blank' class='subCaseImg'>
                            <img v-lazy="tutor.picUrl" alt='tutor.title' width=120 height=120/>
                          </a>
                        </router-link>
                      </p>
                      <div class="cnt">
                          <h4><router-link :to="{path:'/detail', query:{type: 6, id: tutor.id}}" target="_blank"><a target="_blank"><b>{{tutor.title}}</b></a></router-link></h4>
                          <p class="source">浏览次数：{{tutor.visit}} &#160;|&#160;{{tutor.releaseTime}}</p>
                          <p class="summary">项目简介： {{tutor.note}} </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <el-pagination layout="total, sizes, prev, pager, next, jumper"
                               @size-change="handleSizeChange"
                               @current-change="handleCurrentChange"
                               :current-page.sync="page"
                               :page-sizes="pageSizesList"
                               :page-size="pageSize"
                               :total="totalDataNumber"
                               style="float:right;margin-top: 15px">
                </el-pagination>
              </div>
              <div class="w245 fr">
                <div class="hot_news_title">
                  <h3 class="orange">为你推荐</h3>
                </div>
                <ul class="marketingArticle" v-for="(hotInfo, i) in hotList">
                  <li><a href=''><router-link :to="{path:'/detail', query:{type: 6, id: hotInfo.id}}">{{hotInfo.title}}</router-link></a></li>
                </ul>
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
  import $ from 'jquery'
  import {limitInfosByTypeAndCurrentPageAndPageSize, findInfoNumByVisit} from '/api/index.js'
  import {formatDate} from '/common/js/util.js'

  export default {
    data() {
      return {
        serverUrl: process.env.API_ROOT,  // 打包部署上线时
        pageNums: -1,
        crumbs_active: '',
        choosePage: 1,
        tutors: [],
        classValue: -1,
        page: 1,
        pageSize: 10,
        pageSizesList: [1, 10, 20, 50],
        totalDataNumber: 0,//数据的总数,
        loading: true,
        hotList: [],
      }
    },
    computed: {
    },
    methods: {
      baseDetails (type, id) {
        this.$router.push({path: 'detail/type=' + type + '&id=' + id})
      },
      changePage(v) {
        this.choosePage = v
      },
      getData(page, pageSize) {
        let _this = this
        limitInfosByTypeAndCurrentPageAndPageSize(6, page, pageSize).then(res => {
          _this.totalDataNumber = res.data.totalRecord
          _this.tutors = _this.renderData(res.data.resultList)
          _this.loading = false
        })
      },
      renderData (resultList) {
        let data = resultList
        data.forEach((item, index) => {
          item.picUrl = this.serverUrl + '\\images\\' + item.picUrl
          item.releaseTime = formatDate(item.releaseTime, 'yyyy-MM-dd')
        })
        return data
      },
      //改变页码
      handleCurrentChange (val) {
        this.page = val;
        this.getData(this.page, this.pageSize)
        // this.switchType(this.pageNums)
        // this.getData(this.pageNums, this.page, this.pageSize);
      },
      //改变每页显示数量
      handleSizeChange (val) {
        let _this = this,
          pageSize = `${val}`;
        this.page = 1;
        this.pageSize = parseInt(pageSize)
        this.getData(this.page, this.pageSize)
        // this.switchType(this.pageNums)
      },
      getHotList () {
        let _this = this
        let params = {
          num: 10,
          ints: [6]
        }
        findInfoNumByVisit(JSON.stringify(params)).then(res => {
          _this.hotList = res.data.resultList
        })
      },

    },
    // watch: {
    //   "$route": function (to, from) {
    //     let _this = this;
    //     this.page = 1
    //     // console.log(to, from);
    //     let num = to.fullPath;
    //     _this.pageNums = num
    //     getData(this.page, this.pageSize)
    //     //from 对象中包含当前地址
    //     //to 对象中包含目标地址
    //     //其实还有一个next参数的，这个参数是控制路由是否跳转的，如果没写，可以不用写next()来代表允许路由跳转，如果写了就必须写next(),否则路由是不会生效的。
    //   }
    // },
    mounted() {
      let _this = this
      let num = this.$route.fullPath
      _this.pageNums = num
      this.getData(this.page, this.pageSize)
      this.getHotList()

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

  .container {
    width: 1220px;
    margin: 0 auto;
    .news_padding {
      padding: 25px 0 0;
      .w245 {
        width: 20%;
      }
      .fl {
        float: left;
      }
      .w670 {
        width: 80%;
      }
      .fr {
        float: right;
      }
    }
  }

  #lmenu {
    width: 80%
  }


  a {
    color: #666;
    text-decoration: none;
    outline: none;
    blr: expression(this.onFocus=this.blur())
  }

  a:hover, a:active, a:focus {
    color: #f60
  }

  .news-list ul {
  }

  .news-list li {
    zoom: 1;
    clear: both;
    border-bottom: 1px dotted #D7D7D7;
    padding: 15px 0
  }

  .news-list li:after {
    clear: both;
    content: "";
    display: block;
    height: 0;
    visibility: hidden
  }
  .news-list .img {
    border: 2px solid #CCCCCC;
    float: left;
    margin-right: 14px;
    overflow: hidden;
    padding: 2px;
    /* width: 350px; */
  }
  img {
    vertical-align: middle;
    border: none;
  }

  .news-list h4 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 2px
  }

  .news-list .cnt {
    float: left;
    width: 80%;
  }
  .news-list .source {
    margin-bottom: 2px;
  }
  .news-list .summary {
    line-height: 1.6;
    margin-top: 8px;
  }


  .news_more{
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
  .el-pagination {
    float: right;
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
