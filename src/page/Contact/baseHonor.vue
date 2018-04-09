<template>
  <div class="about">
    <div class="honorlist commonwebbox">
      <ul class="clearfix">
        <li>
          <div class="honordiv"><span><img src="../../assets/images/pai1.jpg"></span>
            <p class="name">广州市创业孵化示范基地</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img src="../../assets/images/pai2.jpg"></span>
            <p class="name">广东省创业带动就业孵化基地</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img src="../../assets/images/pai3.jpg"></span>
            <p class="name">粤港澳（国际）大学城创新创业实践基地（广东工业大学基地）</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img src="../../assets/images/pai4.jpg"></span>
            <p class="name">广东省互联网交通运输创客空间</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img src="../../assets/images/pai5.jpg"></span>
            <p class="name">广东省众创空间试点单位</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img src="../../assets/images/pai6.jpg"></span>
            <p class="name">青创空间</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img src="../../assets/images/pai7.jpg"></span>
            <p class="name">大学城高校创新创业生态圈</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img src="../../assets/images/pai8.jpg"></span>
            <p class="name">中国青年大学城创业板服务中心</p></div>
        </li>
        <li>
          <div class="honordiv"><span><img src="../../assets/images/pai9.jpg"></span>
            <p class="name">大学生创新创业服务基地</p></div>
        </li>

      </ul>
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
  .commonwebbox {
    border-bottom: 1px solid #ccc;
  }
  .honorlist {
    overflow: hidden;
    ul {
      /*width: 1134px;*/
      margin-top: 15px;
      li {
        width: 32%;
        text-align: center;
        margin-top: 15px;
        overflow: hidden;
        float: left;
        margin-right: 15px;
        .honordiv {
          background: #f2f2f2;
          padding-top: 20px;
          span {
            display: block;
            /*width: 361px;*/
            height: 291px;
            overflow: hidden;
            img {
              display: block;
              width: 310px;
              height: 260px;
              margin: 0 auto;
              -webkit-transition: all 0.5s;
              -moz-transition: all 0.5s;
              -o-transition: all 0.5s;
            }
          }
          .name {
            height: 46px;
            line-height: 24px;
            overflow: hidden;
            font-size: 14px;
            color: #333;
          }
        }
      }
    }
  }
</style>
