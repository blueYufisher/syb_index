<template>
  <div class="clearfix">
    <div class="home_news fl" id="first">
      <div class="home_news_line">
        <div></div>
      </div>
      <router-link :to="url_one[index-1]" class="news_more">更多</router-link>
      <h3 v-cloak>{{infos_first_title}}</h3>
      <ul v-for="(info, i) in infos_first">
        <li><span>{{info.releaseTime}}</span>
          <router-link :to="{path:'/detail', query:{type: info.type, id: info.id}}">
            <a target="_blank">{{info.title}}</a>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="home_news fr" id="second">
      <div class="home_news_line">
        <div></div>
      </div>
      <router-link :to="url_two[index-1]" class="news_more">更多</router-link >
      <h3 v-cloak>{{infos_second_title}}</h3>
      <ul v-for="(info, i) in infos_second">
        <li><span>{{info.releaseTime}}</span>
          <router-link :to="{path:'/detail', query:{type: info.type, id: info.id}}">
            <a target="_blank">{{info.title}}</a>
          </router-link>
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
        infos_first_title: '',
        infos_second: [],
        infos_second_title: '',
        url_one: ['/base?url=news', '/service?url=policy', '/tutor', '/service?url=bases'],
        url_two: ['/base?url=activity', '/base?url=knowledge', '/service?url=teacher', '/service?url=funds']
      }
    },
    methods: {
      goodsDetails (id) {
        this.$router.push({path: 'goodsDetails/productId=' + id})
      },
      getData (one, two) {
        let _this = this
        selectInfoByNumAndType(5, one).then(res => {
          _this.infos_first = _this.renderData(res.data.resultList)
          _this.infos_first_title = _this.infos_first[0].typeTitle
          // console.log(_this.infos_first)
        })
        selectInfoByNumAndType(5, two).then(res => {
          _this.infos_second = _this.renderData(res.data.resultList)
          _this.infos_second_title = _this.infos_second[0].typeTitle
          // console.log(_this.infos_second)
        })
      },
      renderData (resultList) {
        let data = resultList
        data.forEach((item, index) => {
          item.releaseTime = formatDate(item.releaseTime, 'yyyy-MM-dd')
        })
        return data
      }
    },
    mounted () {
      let _this = this
      // console.log(this.index)
      switch (this.index) {
        case 1:
          _this.getData(2, 1)
          break
        case 2:
          _this.getData(8, 3)
          break
        case 3:
          _this.getData(6, 5)
          break
        case 4:
          _this.getData(14, 9)
          break
      }
    },
    components: {
      // YButton
    }
  }
</script>
<style scoped lang="scss" type="text/scss">
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
</style>
