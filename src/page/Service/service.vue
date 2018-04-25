<template>
  <div class="home">
    <!--  bread_crumbs  -->
    <div class="bread_crumbs">
      <ul id="crumbs">
        <li><span>当前位置：</span></li>
        <li><router-link to="/"><a class="crumbs_index">网站首页</a></router-link></li>
        <li><span>&nbsp;/&nbsp;</span></li>
        <li><a href="#" class="crumbs_paper">创业服务</a></li>
        <li><span>&nbsp;/&nbsp;</span></li>
        <li><router-link to="/service?url=teacher"><a class="crumbs_paper" id="crumbs_active">{{crumbs_active}}</a></router-link></li>
      </ul>
    </div>
    <!--  bread_crumbs 结束  -->
    <div v-loading="loading" element-loading-text="加载中...">
      <section class="w mt30 clearfix">
        <div class="container_bg">
          <div class="container">
            <div class="news_padding">
              <div class="w245 fl">
                <ul id="lmenu" class="tmo_list2">
                  <li class="ll first"><span>创业服务</span></li>
                  <li class="ll" @click="changePage(5)" :class="{active:choosePage===5}">
                    <router-link to="/service?url=teacher">
                      <div></div>
                      <span>创业校友</span>
                    </router-link>
                  </li>
                  <li class="ll" @click="changePage(7)" :class="{active:choosePage===7}">
                    <router-link to="/service?url=train">
                      <div></div>
                      <span>创业技能培训</span>
                    </router-link>
                  </li>
                  <li class="ll" @click="changePage(8)" :class="{active:choosePage===8}">
                    <router-link to="/service?url=policy">
                      <div></div>
                      <span>创业政策</span>
                    </router-link>
                  </li>
                  <li class="ll" @click="changePage(9)" :class="{active:choosePage===9}">
                    <router-link to="/service?url=funds">
                      <div></div>
                      <span>创业基金</span>
                    </router-link>
                  </li>
                  <li class="ll" @click="changePage(14)" :class="{active:choosePage===14}">
                    <router-link to="/service?url=bases">
                      <div></div>
                      <span>协同创新平台</span>
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="w670 fr">
                <div class="breadcrumb"></div>
                <!--  quad  -->
                <div class="news-list">
                  <ul v-for="(info, i) in infos">
                    <li>
                      <p class="icon" :class="classObject"></p>
                      <div class="cnt">
                        <h4>
                          <router-link :to="{path:'/detail', query:{type: info.type, id: info.id}}" target="_blank"><a target="_blank"><b>{{info.title}}</b></a></router-link>
                        </h4>
                        <p class="source"><!--来源:未知&#160;&#160;-->日期：{{info.releaseTime}}&#160;&#160;点击：</small>
                          {{info.visit}}</p>
                        <p class="summary">
                          {{info.note}}</p>
                        <router-link :to="{path:'/detail', query:{type: info.type, id: info.id}}" target="_blank">
                          <a class="news_more" target="_blank">详情</a>
                        </router-link>
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
  import {limitInfosByTypeAndCurrentPageAndPageSize} from '/api/index.js'
  import {formatDate} from '/common/js/util.js'

  export default {
    data() {
      return {
        pageNums: -1,
        crumbs_active: '',
        choosePage: 6,
        infos: [],
        classValue: -1,
        page: 1,
        pageSize: 10,
        pageSizesList: [1, 10, 20, 50],
        totalDataNumber: 0,//数据的总数,
        loading: true,
      }
    },
    computed: {
      classObject: function () {
        return {
          teacher: this.classValue === 5,
          train: this.classValue === 7,
          policy: this.classValue === 8,
          funds: this.classValue === 9,
          bases: this.classValue === 14
        }
      }
    },
    methods: {
      baseDetails (type, id) {
        this.$router.push({path: 'detail/type=' + type + '&id=' + id})
      },
      changePage(v) {
        this.choosePage = v
      },
      switchType(num) {
        let _this = this,
          page = this.page,
          pageSize = this.pageSize
        switch (num) {
          case "/service?url=teacher":
            _this.crumbs_active = "创业校友"
            _this.getData(5, page, pageSize)
            break;

          case "/service?url=train":
            _this.crumbs_active = "创业技能培训"
            _this.getData(7, page, pageSize)
            break;

          case "/service?url=policy":
            _this.crumbs_active = "创业政策"
            _this.getData(8, page, pageSize)
            break;

            case "/service?url=funds":
            _this.crumbs_active = "创业基金"
            _this.getData(9, page, pageSize)
            break;

            case "/service?url=bases":
            _this.crumbs_active = "协同创新平台"
            _this.getData(14, page, pageSize)
            break;
        }
      },
      getData(type, page, pageSize) {
        let _this = this
        _this.choosePage = type
        limitInfosByTypeAndCurrentPageAndPageSize(type, page, pageSize).then(res => {
          _this.totalDataNumber = res.data.totalRecord
          _this.infos = _this.renderData(res.data.resultList)
          _this.classValue = type
          _this.loading = false
        })
      },
      renderData (resultList) {
        let data = resultList
        data.forEach((item, index) => {
          item.releaseTime = formatDate(item.releaseTime, 'yyyy-MM-dd')
        })
        return data
      },
      //改变页码
      handleCurrentChange (val) {
        this.page = val;
        this.switchType(this.pageNums)
        // this.getData(this.pageNums, this.page, this.pageSize);
      },
      //改变每页显示数量
      handleSizeChange (val) {
        let _this = this,
          pageSize = `${val}`;
        this.page = 1;
        this.pageSize = parseInt(pageSize)
        this.switchType(this.pageNums)
      },

    },
    watch: {
      "$route": function (to, from) {
        let _this = this;
        this.page = 1
        // console.log(to, from);
        let num = to.fullPath;
        _this.pageNums = num
        this.switchType(num)
        //from 对象中包含当前地址
        //to 对象中包含目标地址
        //其实还有一个next参数的，这个参数是控制路由是否跳转的，如果没写，可以不用写next()来代表允许路由跳转，如果写了就必须写next(),否则路由是不会生效的。
      }
    },
    mounted() {
      let _this = this
      let num = this.$route.fullPath
      _this.pageNums = num
      this.switchType(num)

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
  .tmo_list2 li span{
    display: block;
  }

  .tmo_list2 {
    li {
      height: 50px;
      line-height: 50px;
      background: #c7cfd1;
      &.active {
        background-image: url("../../assets/images/li_bg.png")
      }
      &.first {
        background: #F60;
        span {
          font-size: 17px;
          font-weight: bold;
          color: white;
          margin-left: 10px;
        }
        &.span {
          font-size: 17px;
          font-weight: bold;
          color: white;
          margin-left: 10px
        }
      }
      span {
        font-size: 14px;
        margin-left: 20px
      }
    }
  }

  li.ll:not(.first):hover {
    background: url("../../assets/images/li_bg.png")
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

  .news-list h4 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 2px
  }

  .news-list .icon {
    width: 40px;
    height: 42px;
    padding-top: 5px;
    text-align: center;
    display: block;
    float: left;
    margin-right: 20px;
    line-height: 13px;
    color: #fff
  }
  .news-list .cnt {
    float: left;
    width: 93%;
  }
  .news-list .source {
    margin-bottom: 2px;
  }
  .news-list .summary {
    line-height: 1.6;
    margin-top: 8px;
  }

  .train{background:url(../../assets/images/train.png) no-repeat 0 0}
  .teacher{background:url(../../assets/images/teacher.png) no-repeat 0 0}
  .policy{background:url(../../assets/images/policy.png) no-repeat 0 0}
  .funds{background:url(../../assets/images/funds.png) no-repeat 0 0}
  .bases{background:url(../../assets/images/bases.png) no-repeat 0 0}

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

</style>
