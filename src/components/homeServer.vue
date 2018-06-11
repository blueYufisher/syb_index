<template>
  <div class="clearfix">
    <div class="home_server">
      <div class="home_server_line">
        <div></div>
      </div>
      <!--<a class="news_more" href='/syb/chuangyexiaoyou/' title="创业服务">更多</a></span>-->
      <h3>创业服务</h3>
      <ul style="margin-top: 10px">
        <li>
          <router-link to="/service?url=train"><a ><img src="../assets/images/c_guide01.png" alt=""></a></router-link>
          <p class="images_title"><router-link to="/service?url=train"><a >创业培训</a></router-link></p>
        </li>
        <li class="arrow_right">
          <img src="../assets/images/fast_forward_72px_1205437_easyicon.net.png" alt="">
        </li>
        <li>
          <router-link to="/guide?url=enter"><a ><img src="../assets/images/c_guide03.png" alt=""></a></router-link>
          <p class="images_title"><router-link to="/guide?url=enter"><a >团队入驻</a></router-link></p>
        </li>
        <li class="arrow_right">
          <img src="../assets/images/fast_forward_72px_1205437_easyicon.net.png" alt="">
        </li>
        <li>
          <router-link to="/guide?url=assess"><a ><img src="../assets/images/c_guide04.png" alt=""></a></router-link>
          <p class="images_title"><router-link to="/guide?url=assess"><a >工商财税</a></router-link></p>
        </li>
        <li class="arrow_right">
          <img src="../assets/images/fast_forward_72px_1205437_easyicon.net.png" alt="">
        </li>
        <li>
          <router-link to="/guide?url=manage"><a ><img src="../assets/images/c_guide05.png" alt=""></a></router-link>
          <p class="images_title"><router-link to="/guide?url=manage"><a>团队管理</a></router-link></p>
        </li>
        <li class="arrow_right">
          <img src="../assets/images/fast_forward_72px_1205437_easyicon.net.png" alt="">
        </li>
        <li>
          <router-link to="/guide?url=hatch"><a ><img src="../assets/images/c_guide02.png" alt=""></a></router-link>
          <p class="images_title"><router-link to="/guide?url=hatch"><a >出孵追踪</a></router-link></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {
    props: {
      msg: {}
    },
    data () {
      return {}
    },
    methods: {
    },
    mounted () {
    }
  }
</script>
<style scoped lang="scss" type="text/scss">
  @media (max-width: 1220px) {
    .arrow_right {
      display: none;
    }
    .home_server ul li:not(.arrow_right){
      width: 20%;
    }
  }

  .clearfix {
    zoom: 1;
  }
  .home_server {
    /*width: 950px;*/
    height: 200px;
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
    h3 {
      font-size: 16px;
      line-height: 30px;
      font-weight: 700;
    }
    ul {
      overflow: hidden;
      margin-top: 10px;
      li {
        float: left;
        width: 11%;
        a {
          color: #666;
          text-decoration: none;
          outline: none;
          blr: expression(this.onFocus=this.blur());
          img {
            vertical-align: middle;
            border: none;
          }
        }
        .images_title {
          margin-top: 10px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-family: "Microsoft YaHei";
          font-size: 16px;
          width: 115px;
          a {
            cursor: pointer;
          }
        }
      }
      li.arrow_right {
        width: 8%;
        margin: 20px 15px 0px 23px;
        img {
          vertical-align: middle;
          border: none;
        }
      }
    }
  }

</style>
