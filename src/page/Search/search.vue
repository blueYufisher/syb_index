<template>
  <div class="goods">
    <div class="search-result">
      <h2>
        搜索
        <em>"{{key}}"</em>
        的结果
      </h2>
    </div>
    <div class="navbar">
      <ul>
        <li class="navitem"><a href="#" :class="{active:isActive == 1}" @click="changeNav(1)">全站</a></li>
        <li class="navitem"><a href="#" :class="{active:isActive == 2}" @click="changeNav(2)">社区咨询</a></li>
        <li class="navitem"><a href="#" :class="{active:isActive == 3}" @click="changeNav(3)">团队风采</a></li>
        <li class="navitem"><a href="#" :class="{active:isActive == 4}" @click="changeNav(4)">创业导师</a></li>
        <li class="navitem"><a href="#" :class="{active:isActive == 5}" @click="changeNav(5)">创业服务</a></li>
        <li class="navitem"><a href="#" :class="{active:isActive == 6}" @click="changeNav(6)">服务指南</a></li>
      </ul>
    </div>
    <div v-loading="loading" element-loading-text="加载中..." class="img-item" v-if="infos != ''">
      <!--infos-->
      <div class="news-list">
        <ul v-for="(info, i) in infos">
          <li>
            <p class="icon search-icon" ></p>
            <div class="cnt">
              <h4>
                <router-link :to="{path:'/detail', query:{type: info.type, id: info.id}}" target="_blank"><a target="_blank"><b>{{info.title}}</b></a></router-link>
              </h4>
              <p class="source"><!--来源:未知&#160;&#160;-->日期：{{info.updateTime}}&#160;&#160;点击：
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

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 40, 80]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
    <div v-loading="loading" element-loading-text="加载中..." class="img-item" v-else-if="projects != ''">
      <!--projects-->
      <div class="news-list">
        <ul v-for="(project, i) in projects">
          <li>
            <p class="img">
              <router-link :to="{path:'/projectDetail', query:{id: project.id}}" target="_blank">
                <a target='_blank' class='subCaseImg'>
                  <img v-lazy="project.picUrl" alt='project.projName' width=120 height=120/>
                </a>
              </router-link>
            </p>
            <div class="cnt">
              <h4><router-link :to="{path:'/projectDetail', query:{id: project.id}}" target="_blank"><a target="_blank"><b>{{project.projName}}</b></a></router-link></h4>
              <p class="source">浏览次数：{{project.visit}} &#160;|&#160;{{project.enterTime}}</p>
              <p class="summary">项目简介： {{project.note}} </p>
            </div>
          </li>
        </ul>
      </div>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 40, 80]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
    <div v-loading="loading" element-loading-text="加载中..." class="img-item" v-else-if="infos_projects != ''">
      <!--infos_projects-->
      <div class="news-list">
        <ul v-for="(info_project, i) in infos_projects">
          <li>
            <p class="icon search-icon" ></p>
            <div class="cnt">
              <h4 v-if="info_project.type !== 4">
                <router-link :to="{path:'/detail', query:{type: info_project.type, id: info_project.id}}" target="_blank"><a target="_blank"><b>{{info_project.title}}</b></a></router-link>
              </h4>
              <h4 v-else>
                <router-link :to="{path:'/projectDetail', query:{id: info_project.id}}" target="_blank"><a target="_blank"><b>{{info_project.title}}</b></a></router-link>
              </h4>
              <p class="source"><!--来源:未知&#160;&#160;-->日期：{{info_project.updateTime}}&#160;&#160;点击：
                {{info_project.visit}}</p>
              <p class="summary">
                {{info_project.note}}</p>
              <router-link :to="{path:'/detail', query:{type: info_project.type, id: info_project.id}}" target="_blank"  v-if="info_project.type !== 4">
                <a class="news_more" target="_blank">详情</a>
              </router-link>
              <router-link :to="{path:'/projectDetail', query:{id: info_project.id}}" target="_blank"  v-else>
                <a class="news_more" target="_blank">详情</a>
              </router-link>
            </div>
          </li>
        </ul>
      </div>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 40, 80]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
    <div v-loading="loading" element-loading-text="加载中..." class="no-info" v-else-if="infos == '' && projects == '' && infos_projects == ''">
      <div class="no-data">
        <img src="../../assets/images/no-search.png">
        <br> 抱歉！没有为您找到相关的文章
      </div>
    </div>
    <div v-else>
    <div class="no-data">
      <img src="../../assets/images/error.png">
      <br> 抱歉！出错了...
    </div>
    <section class="section">
      <y-shelf title="为您推荐">
        <div slot="content" class="recommend">
          <mall-goods :msg="item" v-for="(item,i) in recommend" :key="i"></mall-goods>
        </div>
      </y-shelf>
    </section>
  </div>
    <div>
      <div class="commend" v-if="infsosRecommend != ''">
        <div class="home_server_line">
          <div></div>
        </div>
        <h3>为你推荐</h3>
        <div class="news-list" style="width: 100%">
          <ul v-for="(info, i) in infsosRecommend">
            <li>
              <p class="icon like"></p>
              <div class="cnt">
                <h4>
                  <router-link :to="{path:'/detail', query:{type: info.type, id: info.id}}" target="_blank"><a
                    target="_blank"><b>{{info.title}}</b></a></router-link>
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
      </div>
      <div class="commend" v-if="projectsRecommend != ''">
        <div class="home_server_line">
          <div></div>
        </div>
        <h3>为你推荐</h3>
        <div class="news-list" style="width: 100%">
          <ul v-for="(project, i) in projectsRecommend">
            <li>
              <p class="icon like"></p>
              <div class="cnt">
                <h4>
                  <router-link :to="{path:'/projectDetail', query:{id: project.id}}" target="_blank"><a target="_blank"><b>{{project.projName}}</b></a>
                  </router-link>
                </h4>
                <p class="source"><!--来源:未知&#160;&#160;-->日期：{{project.enterTime}}&#160;&#160;点击：</small>
                  {{project.visit}}</p>
                <p class="summary">
                  {{project.note}}</p>
                <router-link :to="{path:'/projectDetail', query:{id: project.id}}" target="_blank">
                  <a class="news_more" target="_blank">详情</a>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="commend" v-if="infos_projectsRecommend != ''">
        <div class="home_server_line">
          <div></div>
        </div>
        <h3>为你推荐</h3>
        <div class="news-list" style="width: 100%">
          <ul v-for="(info_project, i) in infos_projectsRecommend">
            <li>
              <p class="icon like"></p>
              <div class="cnt">
                <h4 v-if="info_project.type !== 4">
                  <router-link :to="{path:'/detail', query:{type: info_project.type, id: info_project.id}}" target="_blank"><a target="_blank"><b>{{info_project.title}}</b></a></router-link>
                </h4>
                <h4 v-else>
                  <router-link :to="{path:'/projectDetail', query:{id: info_project.id}}" target="_blank"><a target="_blank"><b>{{info_project.title}}</b></a></router-link>
                </h4>
                <p class="source"><!--来源:未知&#160;&#160;-->日期：{{info_project.updateTime}}&#160;&#160;点击：</small>
                  {{info_project.visit}}</p>
                <p class="summary">
                  {{info_project.note}}</p>
                <router-link :to="{path:'/detail', query:{type: info_project.type, id: info_project.id}}" target="_blank"  v-if="info_project.type !== 4">
                  <a class="news_more" target="_blank">详情</a>
                </router-link>
                <router-link :to="{path:'/projectDetail', query:{id: info_project.id}}" target="_blank"  v-else>
                  <a class="news_more" target="_blank">详情</a>
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
  /* eslint-disable */
  // import {getSearch} from '/api/goods.js'
  import {searchInfoByTypeId, searchProjectByProjNameOrCompanyName, findInfoNumByVisit,
    findProjectNumByVisit, fullTextSearch, fullTextRecommendByVisit} from '/api/index.js'
  import {formatDate} from '/common/js/util.js'
  import YButton from '/components/YButton'
  import YShelf from '/components/shelf'
  import YHeader from '/common/header_self'
  import YFooter from '/common/footer_self'
  import {getStore} from '/utils/storage'
  export default {
    data () {
      return {
        serverUrl: process.env.API_ROOT,  // 打包部署上线时
        projects: [],
        infos: [],
        infos_projects: [],
        min: '',
        max: '',
        loading: true,
        searching: true,
        timer: null,
        sortType: 1,
        windowHeight: null,
        windowWidth: null,
        sort: '',
        infsosRecommend: [],
        projectsRecommend: [],
        infos_projectsRecommend: [],
        currentPage: 1,
        pageSize: 10,
        total: 0,
        key: '',
        isActive: -1,
        _infoProj: -1,
        _ints: []
      }
    },
    methods: {
      handleSizeChange (val) {
        this.pageSize = val
        this._getSearch()
        this.loading = true
      },
      handleCurrentChange (val) {
        this.currentPage = val
        this._getSearch()
        this.loading = true
      },
      _getSearch () {
        let infoProj = getStore('info_proj')
        if (infoProj === '1') {
          let ints = getStore('ints')
          let params = {
            currentPage: this.currentPage,
            pageSize: this.pageSize,
            ints: JSON.parse(ints),
            title: this.key,
            note: this.key
          }
          searchInfoByTypeId(JSON.stringify(params)).then(res => {
            if (res.status) {
              let data = res.data.resultList
              data.forEach((item, index) => {
                item.updateTime = formatDate(item.updateTime, 'yyyy-MM-dd')
              })
              this.infos = data
              this.total = res.data.totalRecord
            }
            this.loading = false
            this.searching = false
          })
        } else if (infoProj === '2') {
          let params = {
            projName: this.key,
            companyName: this.key
          }
          searchProjectByProjNameOrCompanyName(this.currentPage, this.pageSize, JSON.stringify(params)).then(res => {
            if (res.status) {
              let data = res.data.resultList
              data.forEach((item, index) => {
                item.picUrl = this.serverUrl + '\\images\\' + item.picUrl
                item.enterTime = formatDate(item.enterTime, 'yyyy-MM-dd')
              })
              this.projects = data
              this.total = res.data.totalRecord
            }
            this.loading = false
            this.searching = false
          })
        } else if (infoProj === '3') {
          let params = {
            title: this.key,
            content: this.key,
            companyName: this.key
          }
          fullTextSearch(this.currentPage, this.pageSize, JSON.stringify(params)).then(res => {
            if (res.status) {
              let data = res.data.resultList
              data.forEach((item, index) => {
                item.updateTime = formatDate(item.updateTime, 'yyyy-MM-dd')
              })
              this.infos_projects = data
              this.total = res.data.totalRecord
            }
            this.loading = false
            this.searching = false
          })
        }
      },
      _getRecommendSearch () {
        let infoProj = getStore('info_proj')
        if (infoProj === '1') {
          let ints = getStore('ints')
          let params = {
            num: 10,
            ints: JSON.parse(ints)
          }
          findInfoNumByVisit(JSON.stringify(params)).then(res => {
            if (res.status) {
              let data = res.data.resultList
              data.forEach((item, index) => {
                item.releaseTime = formatDate(item.releaseTime, 'yyyy-MM-dd')
              })
              this.infsosRecommend = data
            }
          })
        } else if (infoProj === '2') {
          findProjectNumByVisit(10).then(res => {
            if (res.status) {
              let data = res.data
              data.forEach((item, index) => {
                item.enterTime = formatDate(item.enterTime, 'yyyy-MM-dd')
              })
              this.projectsRecommend = data
            }
          })
        } else if (infoProj === '3') {
          fullTextRecommendByVisit(10).then(res => {
            if (res.status) {
              let data = res.data
              data.forEach((item, index) => {
                item.updateTime = formatDate(item.updateTime, 'yyyy-MM-dd')
              })
              this.infos_projectsRecommend = data
            }
          })
        }
      },
      __getSearch__ (infoProj, _ints) {
        this.loading = true
        this.infos = []
        this.projects = []
        this.infos_projects = []
        if (infoProj === 1) {
          let params = {
            currentPage: this.currentPage,
            pageSize: this.pageSize,
            ints: _ints,
            title: this.key,
            content: this.key
          }
          searchInfoByTypeId(JSON.stringify(params)).then(res => {
            if (res.status) {
              let data = res.data.resultList
              data.forEach((item, index) => {
                item.updateTime = formatDate(item.updateTime, 'yyyy-MM-dd')
              })
              this.infos = data
              this.total = res.data.totalRecord
            }
            this.loading = false
            this.searching = false
          })
        } else if (infoProj === 2) {
          let params = {
            projName: this.key,
            companyName: this.key,
            content: this.key
          }
          searchProjectByProjNameOrCompanyName(this.currentPage, this.pageSize, JSON.stringify(params)).then(res => {
            if (res.status) {
              let data = res.data.resultList
              data.forEach((item, index) => {
                item.picUrl = this.serverUrl + '\\images\\' + item.picUrl
                item.enterTime = formatDate(item.enterTime, 'yyyy-MM-dd')
              })
              this.projects = data
              this.total = res.data.totalRecord
            }
            this.loading = false
            this.searching = false
          })
        } else if (infoProj === 3) {
          let params = {
            title: this.key,
            content: this.key,
            companyName: this.key
          }
          fullTextSearch(this.currentPage, this.pageSize, JSON.stringify(params)).then(res => {
            if (res.status) {
              let data = res.data.resultList
              data.forEach((item, index) => {
                item.updateTime = formatDate(item.updateTime, 'yyyy-MM-dd')
              })
              this.infos_projects = data
              this.total = res.data.totalRecord
            }
            this.loading = false
            this.searching = false
          })
        }
      },
      // 默认排序
      reset () {
        this.sortType = 1
        this.sort = ''
        this.currentPage = 1
        this.loading = true
        this._getSearch()
      },
      // 价格排序
      sortByPrice (v) {
        v === 1 ? this.sortType = 2 : this.sortType = 3
        this.sort = v
        this.currentPage = 1
        this.loading = true
        this._getSearch()
      },
      changeNav (v) {
        this.isActive = v
      }
    },
    watch: {
      'isActive': function () {
        console.log(this.isActive)
        switch (this.isActive){
          case 1:
            this._infoProj = 3
            break
          case 2:
            this._infoProj = 1
            this._ints = [1, 2, 3]
            break
          case 3:
            this._infoProj = 2
            break
          case 4:
            this._infoProj = 1
            this._ints = [6]
            break
          case 5:
            this._infoProj = 1
            this._ints = [5, 7, 8, 9, 14]
            break
          case 6:
            this._infoProj = 1
            this._ints = [10, 11, 12, 13]
            break
        }
        this.__getSearch__(this._infoProj, this._ints)
      }
    },
    created () {
    },
    mounted () {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
      this.key = this.$route.query.key
      // console.log('serverUrl:', this.serverUrl)
      this._getSearch()
      this._getRecommendSearch()
      this.isActive = getStore('searchType')
    },
    components: {
      YButton,
      YShelf,
      YHeader,
      YFooter
    }
  }
</script>
<style scoped lang="scss" type="text/scss">
  @import "../../assets/style/mixin";
  @import "../../assets/style/theme";
  @media (max-width: 1220px) {
    .navbar{
      width: 100%;
    }
    .news-list{
      width: 96%!important;
      margin: 0 2%!important;
      .icon{
        width: 5% !important;
      }
      .img{
        display: none!important;
      }
      .cnt{
        width: 90%!important;
      }
    }
    .commend{
      width: 96%!important;
      margin: 0 2%!important;
    }
  }
  @media (max-width: 680px) {
    .news-list {
      .icon, .img {
        display: none!important;
      }
      .cnt{
        width: 95%!important;
        margin-left: 2%;
      }
    }
  }
  @media (max-width: 510px) {

  }
  .search-result{
    width: 1220px;
    height: 25px;
    margin: 10px auto 20px auto;
    color:#333333;
    font-size: 16px;
    line-height: 25px;
    padding: 30px 0;
    h2{
      font-size: 100%;
      font-weight: normal;
      em{
        color: #ff6600;
      }
    }
  }
  .navbar{
    width: 1220px;
    height: 50px;
    margin: 0 auto;
    margin-bottom: 10px;
    background-color: #f96706;
    ul{
      list-style-type: none;
      line-height: 50px;
      .navitem{
        float: left;
        a{
          display: block;
          padding:0 15px;
          text-decoration: none;
          color:#FFF;
          font-size: 14px;
          &:not(.active):hover {
            color: #FFF;
            font-size: 16px;
            font-weight: bold;
          }
        }
        .active{
          color:#ff6600;
          font-weight:bold;
          border-top: 2px #ff6600 solid;
          border-bottom: 1px #ff6600 solid;
          background: #FFFFFF;
          height: 49px;
        }
      }
    }
  }


  .nav {
    height: 60px;
    line-height: 60px;
    > div {
      display: flex;
      align-items: center;
      a {
        padding: 0 15px;
        height: 100%;
        @extend %block-center;
        font-size: 12px;
        color: #999;
        &.active {
          color: #5683EA;
        }
        &:hover {
          color: #5683EA;
        }
      }
      input {
        @include wh(80px, 30px);
        border: 1px solid #ccc;
      }
      input + input {
        margin-left: 10px;
      }
    }
    .price-interval {
      padding: 0 15px;
      @extend %block-center;
      input[type=number] {
        border: 1px solid #ccc;
        text-align: center;
        background: none;
        border-radius: 5px;
      }
    }
  }

  .goods-box {
    > div {
      float: left;
      border: 1px solid #efefef;
    }
  }

  .nav-subs {
    position: relative;
    margin-top: -40px;
    z-index: 20;
    height: 90px;
    background: #f7f7f7;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .04);
    .nav-sub-wrappers {
      padding: 31px 0;
      height: 90px;
      position: relative;
    }
    .w {
      display: flex;
      justify-content: space-between;
    }
    .nav-lists {
      height: 28px;
      line-height: 28px;
      display: flex;
      align-items: center;
      height: 100%;
      li:first-child {
        padding-left: 0;
        a {
          padding-left: 10px;
        }
      }
      li {
        position: relative;
        float: left;
        padding-left: 2px;
        a {
          display: block;
          // cursor: default;
          padding: 0 10px;
          color: #666;
          &.active {
            font-weight: bold;
          }
        }
        a:hover {
          color: #5683EA;
        }
      }
      li:before {
        content: ' ';
        position: absolute;
        left: 0;
        top: 13px;
        width: 2px;
        height: 2px;
        background: #bdbdbd;
      }
    }
  }

  .section {
    padding-top: 8vw;
    margin-bottom: -5vw;
    width: 1218px;
    align-self: center;
  }

  @media (min-width: 1px) {
    .nav-subs .nav-sub-wrappers:after {
      display: block;
    }
  }

  .recommend {
    display: flex;
    > div {
      flex: 1;
      width: 25%;
    }
  }

  .img-item{
    /*display: flex;*/
    flex-direction: column;
  }

  .el-pagination{
    align-self: flex-end;
    margin-top: 20px;
    text-align: center;
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
  .news-list{
    width: 60%;
    margin: 0 auto;
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
    width: 84%;
  }
  .news-list .source {
    margin-bottom: 2px;
  }
  .news-list .summary {
    line-height: 1.6;
    margin-top: 8px;
  }

  .info {
    background: url(../../assets/images/info-sign.png) no-repeat 0 0
  }

  .search-icon{
    background: url(../../assets/images/search-32.png) no-repeat 0 0
  }

  .like{
    background: url(../../assets/images/like-quality-32.png) no-repeat 0 0
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

  .no-info {
    padding: 100px 0;
    text-align: center;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    .no-data{
      align-self: center;
    }
  }

  .commend {
    width: 60%;
    margin: 0 auto;
    /*height: 200px;*/
    padding: 15px 0;
    .home_server_line {
      height: 1px;
      background: #dbdbdb;
      font-size: 0;
      div {
        height: 1px;
        width: 100px;
        background: #f60;
        font-size: 0;
      }
    }
  }

  .commend h3 {
    font-size: 16px;
    line-height: 30px;
    font-weight: 700;
  }


</style>
