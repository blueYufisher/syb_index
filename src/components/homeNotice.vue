<template>
  <div class="clearfix cont_enforce">
    <div class="active flo">
      <div data-v-f74957b6="" class="home_news_line">
        <div data-v-f74957b6=""></div>
      </div>
      <div class="title">
        <div class="ac">{{infos_first_title}}</div>
        <div>
          <router-link :to="url_one" class="news_more">更多</router-link>
        </div>
      </div>
      <ul v-for="(info, i) in infos_first">
        <li>
          <div class="monthdate">
            <div class="month">{{info.month}}</div>
            <div class="date">{{info.day}}</div>
          </div>
          <div class="activelist">
            <div class="activetitle">
              <router-link :to="{path:'/detail', query:{type: info.type, id: info.id}}">
                <a target="_blank">{{info.title}}</a>
              </router-link>
            </div>
            <!--<div class="activedate">{{info.releaseTime}}</div>-->
            <div class="activelocation">浏览次数：
              <label>{{info.visit}}</label>
            </div>
            <div class="activelocation" style="margin-left: 10px">评论：
              <label>{{info.comments}}</label>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="active flo">
      <div data-v-f74957b6="" class="home_news_line">
        <div data-v-f74957b6=""></div>
      </div>
      <div class="title">
        <div class="ac">{{infos_second_title}}</div>
        <div>
          <router-link :to="url_two" class="news_more">更多</router-link>
        </div>
      </div>
      <ul v-for="(info, i) in infos_second">
        <li>
          <div class="monthdate">
            <div class="month">{{info.month}}</div>
            <div class="date">{{info.day}}</div>
          </div>
          <div class="activelist">
            <div class="activetitle">
              <router-link :to="{path:'/detail', query:{type: info.type, id: info.id}}">
                <a target="_blank">{{info.title}}</a>
              </router-link>
            </div>
            <!--<div class="activedate">{{info.releaseTime}}</div>-->
            <div class="activelocation">浏览次数：
              <label>{{info.visit}}</label>
            </div>
            <div class="activelocation" style="margin-left: 10px">评论：
              <label>{{info.comments}}</label>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  // import YButton from '/components/YButton'
  import {selectInfoByNumAndType} from '/api/index.js'
  import {formatDate} from '/common/js/util.js'

  export default {
    props: {
      index: {}
    },
    data () {
      return {
        infos_first: [],
        infos_first_title: '栏目新闻',
        infos_second: [],
        infos_second_title: '创业沙龙',
        url_one: '/base?url=news',
        url_two: '/base?url=activity',
        month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    },
    methods: {
      goodsDetails (id) {
        this.$router.push({path: 'goodsDetails/productId=' + id})
      },
      getData (one, two) {
        let _this = this
        selectInfoByNumAndType(3, one).then(res => {
          _this.infos_first = _this.renderData(res.data.resultList)
          // _this.infos_first_title = _this.infos_first[0].typeTitle
          // console.log(_this.infos_first)
        })
        selectInfoByNumAndType(3, two).then(res => {
          _this.infos_second = _this.renderData(res.data.resultList)
          // _this.infos_second_title = _this.infos_second[0].typeTitle
          // console.log(_this.infos_second)
        })
      },
      renderData (resultList) {
        let data = resultList
        data.forEach((item, index) => {
          item.month = new Date(item.releaseTime).getMonth()
          item.month = this.month[item.month]
          item.day = new Date(item.releaseTime).getDate()
          item.releaseTime = formatDate(item.releaseTime, 'yyyy-MM-dd hh:mm:ss')
          if (!item.typeList[0].isParent) {
            item.title = item.typeList[0].typeTitle + '  |  ' + item.title
          }
        })
        return data
      }
    },
    mounted () {
      // let _this = this
      // console.log(this.index)
      this.getData(1, 2)
    },
    components: {
      // YButton
    }
  }
</script>
<style scoped lang="scss" type="text/scss">
  @media (max-width: 1220px) {
    .home_news{
      width: 48% !important;
    }
  }
  @media (max-width: 768px) {
    .home_news{
      width: 100% !important;
    }
  }

  [v-cloak] {
    display: none;
  }
  .clearfix {
    zoom: 1;
  }

  .home_news {
    width: 600px;
    height: 180px;
    padding: 15px 0;
  }

  .fr {
    float: right;
  }

  .fl {
    float: left;
  }

  .home_news_line, .home_server_line {
    height: 1px;
    background: #dbdbdb;
    font-size: 0;
  }

  .home_news_line {
    height: 1px;
    background: #dbdbdb;
    font-size: 0;
    margin-bottom: 5px;
  }

  .news_more:active, .news_more:link, .news_more:visited {
    float: right;
    background: url(../assets/images/home_news_more.jpg) no-repeat 0 0;
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
    background: url(../assets/images/home_news_more.jpg) no-repeat 100% 0;
  }

  .home_news h3 {
    padding-left: 5px;
  }

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
  }

  .home_news_line div, .home_server_line div {
    height: 1px;
    width: 100px;
    background: #f60;
    font-size: 0;
  }

  .home_news_line div {
    height: 1px;
    width: 100px;
    background: #f60;
    font-size: 0;
  }

  .home_news li {
    padding: 4px 0 4px 15px;
    background: url(../assets/images/icon_org.jpg) no-repeat 0 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .home_news li span {
    float: right;
    color: #999;
  }

  a {
    color: #666;
    text-decoration: none;
    outline: none;
    /*blr: expression(this.onFocus=this.blur());*/
  }

  a:hover, a:active, a:focus {
    color: #f60;
  }
  /*Other部分*/

  .cont_enforce {
    display: flex;
    width: 1220px;
    /*嵌入时候可以100%或者不填*/
    margin: 0 auto;
    justify-content: space-between;
    box-sizing: content-box;
    margin-bottom: -15px;
  }

  .cont_enforce .active {
    width: 600px;
  }

  .cont_enforce .active .title {
    display: flex;
    justify-content: space-between;
    box-sizing: content-box;

  }

  /*.cont_enforce .active a {*/
    /*text-decoration: none;*/
    /*font-size: 14px;*/
    /*box-sizing: content-box;*/
    /*font-family: arial;*/
  /*}*/

  /*.cont_enforce .active .title a {*/
    /*width: 49px;*/
    /*height: 18px;*/
    /*text-align: left;*/
    /*display: block;*/
    /*line-height: 18px;*/
    /*color: #fff;*/
    /*margin-top: 3px;*/
    /*background: #ccc;*/
    /*padding-left: 5px;*/
    /*box-sizing: content-box;*/
  /*}*/

  .cont_enforce .active .title .ac {
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    box-sizing: content-box;
    color: #666;
    padding-left: 5px;
  }

  .cont_enforce .active ul {
    margin: 0;
    box-sizing: content-box;
  }

  .cont_enforce .active ul li {
    height: 45px;
    padding: 6px 0px;
    margin: 0;
    box-sizing: content-box;
  }

  .cont_enforce .active ul li .monthdate {
    width: 58.5px;
    /*height: 51px;*/
    height: 35px;
    display: inline-block;
    float: left;
    box-sizing: content-box;
    margin-left: 5px;
  }

  .cont_enforce .active ul li .monthdate .month {
    width: 58.5px;
    height: 20px;
    padding: 4px 0px;
    text-align: center;
    background: #009B95;
    color: #fff;
    box-sizing: content-box;
  }

  .cont_enforce .active ul li .monthdate .date {
    border: 1px solid #CDCDCD;
    width: 56.5px;
    height: 15px;
    border: 1px solid #CDCDCD;
    border-top: none;
    text-align: center;
    color: #333;
    box-sizing: content-box;
  }

  .cont_enforce .active ul li .activelist {
    width: 525px;
    height: 35px;
    padding-left: 8px;
    float: left;
    font-size: 12px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: content-box;
  }

  .cont_enforce .active ul li .activelist .activetitle {
    height: 14px;
    padding-bottom: 5px;
    box-sizing: content-box;
  }

  .cont_enforce .active ul li .activelist .activedate {
    font-size: 12px;
    color: #969696;
    padding-bottom: 3px;
    box-sizing: content-box;
  }

  .cont_enforce .active ul li .activelist .activelocation {
    font-size: 12px;
    color: #969696;
    box-sizing: content-box;
    float: left;
  }

  .cont_enforce .active li a {
    display: block;
    width: 100%;
    color: #404040;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: content-box;
  }

  .cont_enforce .active li a:hover {
    color: #F96706;
  }
</style>
