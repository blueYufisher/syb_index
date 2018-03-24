<template>
  <div class="footer">
    <div class="container">
      <!--<div class="footer">-->
        <!--<p>-->
          <!--<a href='admin/index.html' target='_blank'>后台管理系统</a>-->
          <!--<br/>友情提示：本站建议使用IE7及以上版本，分辨率1024×768及以上可获得最佳浏览体验-->
          <!--&lt;!&ndash;<span class='tongji'>&ndash;&gt;-->
          <!--&lt;!&ndash;<a href='http://www.4lianpai.com/' target='_blank'>纸模型</a>&ndash;&gt;-->
          <!--&lt;!&ndash;<a href='http://www.4lianpai.com' target='_blank'>四连拍纸模网</a>&ndash;&gt;-->
          <!--&lt;!&ndash;</span>&ndash;&gt;-->
        <!--</p>-->
      <!--</div>-->

      <div class="siteinfo">
        <ul class="c0">
          <h3 class="c1">友情链接</h3>
          <ul>
            <li class="c2"><a class="c3" target="_blank" href="http://www.gdut.edu.cn/">广东工业大学</a></li>
            <li class="c2"><a class="c3" target="_blank" href="http://job.gdut.edu.cn/unijob/index.php/web/Index/index"> 广东工业大学学生就业指导中心</a></li>
          </ul>
        </ul>
        <ul class="c0">
          <h3 class="c1">协同创新平台</h3>
          <ul>
            <li class="c2"><a class="c3" target="_blank" href="http://www.fsggdcnc.com/">佛山广工大数控装备协同创新研究院</a></li>
            <li class="c2"><a class="c3" target="_blank" href="http://www.gzicc.cn/">广州国家现代服务业集成电路设计产业化基地</a></li>
            <li class="c2"><a class="c3" target="_blank" href="http://www.gdut-hy.com/">河源广工大协同创新研究院</a></li>
            <li class="c2"><a class="c3" target="_blank" href="http://www.ggdiot.com/">惠州协同创新研究院</a></li>
          </ul>
        </ul>
        <!--<ul class="c0">-->
          <!--<h3 class="c1">自助服务</h3>-->
          <!--<ul>-->
            <!--<li class="c2"><a class="c3" target="_blank" href="http://blog.exrick.cn">个人博客</a></li>-->
            <!--<li class="c2"><a class="c3" target="_blank" href="http://blog.exrick.cn/intro/">个人简介</a></li>-->
            <!--<li class="c2"><a class="c3" target="_blank" href="https://www.bilibili.com/video/av15860053/">个人视频</a></li>-->
          <!--</ul>-->
        <!--</ul>-->
        <!--<ul class="c0">-->
          <!--<h3 class="c1">其他项目</h3>-->
          <!--<ul>-->
            <!--<li class="c2"><a class="c3" target="_blank" href="http://xpay.exrick.cn">XPay支付系统</a></li>-->
            <!--<li class="c2"><a class="c3" target="_blank" href="http://shouji.baidu.com/software/11783429.html">数据共享</a></li>-->
            <!--<li class="c2"><a class="c3" target="_blank" href="https://github.com/Exrick">待开发...</a></li>-->
          <!--</ul>-->
        <!--</ul>-->
        <!--<ul class="c0">-->
          <!--<h3 class="c1">友情链接</h3>-->
          <!--<ul>-->
            <!--<li class="c2"><a class="c3" target="_blank" href="http://yucccc.com/">宇cccc</a></li>-->
            <!--<li class="c2"><a class="c3" target="_blank" href="http://www.smartisan.com">Smartisan</a></li>-->
            <!--<li class="c2"><a class="c3" target="_blank" href="https://cn.vuejs.org/">Vue</a></li>-->
          <!--</ul>-->
        <!--</ul>-->
        <!--<ul class="c0">-->
          <!--<h3 class="c1">关注我吧</h3>-->
          <!--<ul>-->
            <!--<li class="c2"><a class="c3" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1012139570&site=qq&menu=yes">腾讯 QQ</a></li>-->
            <!--<li class="c2"><a class="c3" target="_blank" href="http://weibo.com/2255094222/profile">新浪微博</a></li>-->
            <!--<li class="c2"><a class="c3" target="_blank" href="mailto:1012139570@qq.com">官方邮箱</a></li>-->
          <!--</ul>-->
        <!--</ul>-->

        <ul class="c4 nav-logo">
            <li><h1>
              <router-link to="/" title="创业梦工场"></router-link>
            </h1></li>
          <!--<li class="tel"><a class="c5" target="_blank">创业梦工场</a></li>-->
          <!--<li class="time">广东工业大学大学生创业（孵化）基地</li>-->
          <!--<li class="online">-->
            <!--<y-button text="在线帮助" class="button" @btnClick="open3"></y-button>-->
          <!--</li>-->
        </ul>
      </div>

      <div class="copyright">
        <h4 class="content-c2">Copyright © 2015-{{date}} 广东工业大学学生就业指导中心 All Rights Reserved @BlueFisher</h4>
        <!--<ul class="privacy">-->
          <!--<li class="content-c1"><a class="content-c0" @click="open1">法律声明</a></li>-->
          <!--<li class="content-c1"><a class="content-c0" @click="open2">隐私条款</a></li>-->
          <!--<li class="content-c1"><a class="content-c0" target="_blank" href="https://github.com/Exrick">开发者中心</a></li>-->
        <!--</ul>-->
      </div>
      <div class="cop">
        <a class="content-c3" href="http://www.miibeian.gov.cn/" target="_blank">
          <span class="content-c3">粤ICP备05008833号</span>
          <!--<span class="content-c3">蜀ICP证16030308号</span>-->
        </a>
      </div>
    </div>
    <!--<div class="footer">-->
      <!--<p>-->
        <!--<a href='admin/index.html' target='_blank'>后台管理系统</a>-->
        <!--<br/>友情提示：本站建议使用IE7及以上版本，分辨率1024×768及以上可获得最佳浏览体验-->
        <!--&lt;!&ndash;<span class='tongji'>&ndash;&gt;-->
        <!--&lt;!&ndash;<a href='http://www.4lianpai.com/' target='_blank'>纸模型</a>&ndash;&gt;-->
        <!--&lt;!&ndash;<a href='http://www.4lianpai.com' target='_blank'>四连拍纸模网</a>&ndash;&gt;-->
        <!--&lt;!&ndash;</span>&ndash;&gt;-->
      <!--</p>-->
    <!--</div>-->
  </div>
</template>
<script>
  import YButton from '/components/YButton'
  export default {
    data () {
      return {
        date: ''
      }
    },
    mounted () {
      this.date = new Date()
      this.date = this.date.getFullYear()
    },
    methods: {
    },
    components: {
      YButton
    }
  }
</script>
<style scoped lang="scss" type="text/scss">
  /*#footerbg {*/
    /*background: #d6d6d6;*/
    /*clear: both;*/
    /*margin-top: 25px;*/
    /*height: 110px;*/
    /*.footer {*/
      /*width: 950px;*/
      /*text-align: center;*/
      /*margin: 0 auto;*/
      /*p{*/
        /*padding: 40px 0 0;*/
        /*height: 60px;*/
        /*a:link,a:visited{*/
          /*color: #2d2b2b;*/
        /*}*/
        /*a:hover{*/
          /*color: #f96706;*/
        /*}*/
      /*}*/
    /*}*/
  /*}*/
  .footer {
    padding: 50px 0 20px;
    border-top: 1px solid #e6e6e6;
    background: #f9f9f9;
    margin-top: 60px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    width: 1220px;
  }

  .siteinfo {
    height: 100px;
    padding: 50px 0 130px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
  }

  .c0 {
    width: 30%;
    line-height: 1;
    float: left;
  }

  .c1 {
    color: #646464;
    font-size: 12px;
    padding: 0 0 14px;
  }

  .c2 {
    color: #c3c3c3;
    font-size: 12px;
    padding: 6px 0;
  }

  .c3 {
    color: #969696;
  }
  .c3:hover{
    color: #f96706;
  }

  .c4 {
    position: absolute;
    right: 0;
    overflow: hidden;
    line-height: 34px;
  }

  .tel {
    font-size: 30px;
    line-height: 1;
    color: #646464;
    top: -2px;
    position: relative;
  }

  .c5 {
    color: #646464;
    right: -70px;
    position: relative;
  }

  .time {
    margin-top: 5px;
    //right: -4px;
    position: relative;
    clear: both;
    width: 241px;
    font-size: 12px;
    line-height: 18px;
    color: #c3c3c3;
    text-align: right;
  }

  .online {
    clear: both;
    width: 241px;
    font-size: 12px;
    line-height: 18px;
    color: #c3c3c3;
    text-align: right;
  }

  .button {
    width: 130px;
    height: 34px;
    font-size: 14px;
    color: #5079d9;
    border: 1px solid #dcdcdc;
    margin-top: 8px;
  }

  .copyright {
    color: #434d55;
    font-size: 12px;
    padding: 40px 0 0;
    display: flex;
    align-items: left;
  }

  .privacy {
    float: left;
    margin: 0 0 0 12px;
  }

  .content-c0 {
    color: #5079d9;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: #3A5FCD;
    }


  }

  .content-c1 {
    float: left;
    line-height: 12px;
    padding: 1px 10px 0;
    border-left: 1px solid #ccc;
  }

  .content-c2 {
    float: left;
    height: 15px;
    line-height: 15px;
    color: #757575;
  }

  .cop {
    clear: both;
    padding: 10px 0 0;
    height: 15px;
  }

  .content-c3 {
    margin-right: 20px;
    color: #bdbdbd;
    font-size: 12px;
    height: 12px;
    line-height: 1;
  }
  .nav-logo h1{
    height: 100%;
    display: flex;
    align-items: center;
    > a {
      background: url(../assets/images/logo.png) no-repeat 50%;
      //background-size: cover;
      display: block;
      //@include wh(50px, 40px);
      //text-indent: -9999px;
      //background-position: 0 0;
      width: 250px;
      height: 84px;
      line-height: 84px;
      text-indent: 120px;
    }
  }
</style>
