<template>
  <div class="home_project">
    <div class="good-img">
      <router-link :to="{path:'/projectDetail', query:{id: msg.id}}">
        <img v-lazy="msg.picList[0].picUrl" :alt="msg.projName">
      </router-link>
    </div>
    <h6 class="good-title" v-html="msg.projName">{{msg.projName}}</h6>
    <div class="good-price pr">
    </div>
  </div>
</template>
<script>
  // import YButton from '/components/YButton'
  // import { addCart } from '/api/goods.js'
  // import { mapMutations, mapState } from 'vuex'
  // import { getStore } from '/utils/storage'
  export default {
    props: {
      msg: {}
    },
    data () {
      return {}
    },
    methods: {
      // ...mapMutations(['ADD_CART', 'ADD_ANIMATION', 'SHOW_CART']),
      // goodsDetails (id) {
      //   this.$router.push({path: 'goodsDetails/productId=' + id})
      // },
      // addCart (id, price, name, img) {
      //   if (!this.showMoveImg) {     // 动画是否在运动
      //     if (this.login) { // 登录了 直接存在用户名下
      //       addCart({userId: getStore('userId'), productId: id, productNum: 1}).then(res => {
      //         // 并不重新请求数据
      //         this.ADD_CART({productId: id, salePrice: price, productName: name, productImg: img})
      //       })
      //     } else { // 未登录 vuex
      //       this.ADD_CART({productId: id, salePrice: price, productName: name, productImg: img})
      //     }
      //     // 加入购物车动画
      //     var dom = event.target
      //     // 获取点击的坐标
      //     let elLeft = dom.getBoundingClientRect().left + (dom.offsetWidth / 2)
      //     let elTop = dom.getBoundingClientRect().top + (dom.offsetHeight / 2)
      //     // 需要触发
      //     this.ADD_ANIMATION({moveShow: true, elLeft: elLeft, elTop: elTop, img: img})
      //     if (!this.showCart) {
      //       this.SHOW_CART({showCart: true})
      //     }
      //   }
      // }
    },
    computed: {
      // ...mapState(['login', 'showMoveImg', 'showCart'])
    },
    mounted () {
    },
    components: {
      // YButton
    }
  }
</script>
<style scoped lang="scss" type="text/scss">
  @import "../assets/style/mixin";
  @import "../assets/style/theme";
  @media (max-width: 768px){
    .home_project{
      width: 49% !important;
    }
  }
  /*.home_project {*/
    /*!*width: 950px;*!*/
    /*height: 200px;*/
    /*padding: 15px 0;*/

  /*}*/
  .home_project {
    background: #fff;
    width: 19%;
    margin:0.5%;
    transition: all .5s;
    height: 180px;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 1px 1px 20px #999;
      /*.good-price p {*/
        /*display: none;*/
      /*}*/
      /*.ds {*/
        /*display: flex;*/
      /*}*/
    }
/*    .ds {
      @extend %block-center;
      width: 100%;
      display: none;
    }*/

    .good-img {
      margin:5px auto;
      a{
        display:flex;
        display: -webkit-flex;
        align-items:center;
        justify-content:center;
        height:113px;
      }
      img {
        margin: 10px auto;
        /* @include wh(113px);*/
        width:113px;
        max-height:113px;
      }
    }
    .good-price {
      margin: 15px 0;
      height: 30px;
      text-align: center;
      line-height: 30px;
      color: #e4393c;
      font-size: 20px;
    }
    .good-title {
      line-height: 1.2;
      font-size: 16px;
      color: #424242;
      margin: 0 auto;
      padding: 0 14px;
      text-align: center;
      overflow: hidden;
    }
    h3 {
      text-align: center;
      line-height: 1.2;
      font-size: 12px;
      color: #d0d0d0;
      padding: 10px;
    }

  }
</style>
