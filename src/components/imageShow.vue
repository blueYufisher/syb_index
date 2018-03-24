<template>
  <!-- 制作一个框架包裹slider -->
  <div style="width:100%;height:400px">
    <!-- 配置slider组件 -->
    <slider :pages="pages" :sliderinit="sliderinit">
      <!-- 设置loading,可自定义 -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>
<script>
  /*eslint-disable */
  import slider from 'vue-concise-slider'// import slider components
  var slider1 = require('../assets/images/1_0951409571.jpg')
  var slider2 = require('../assets/images/1_1616412971.jpg')
  var slider3 = require('../assets/images/1_1616412753.jpg')
  var slider4 = require('../assets/images/1_1616418145.png')
  var slider5 = require('../assets/images/1_1618571012.png')
  export default {
    data () {
      return {
        //Image list
        pages:[
          {
            html: '<div class="slider1"></div>',
            style: {
              'background': 'url(' + slider1 + ')'
            }
          },
          {
            html: '<div class="slider2"></div>',
            style: {
              'background': 'url(' + slider2 + ')'
            }
          },
          {
            html: '<div class="slider3"></div>',
            style: {
              'background': 'url(' + slider3 + ')'
            }
          },
          {
            html: '<div class="slider4"></div>',
            style: {
              'background': 'url(' + slider4 + ')'
            }
          },
          {
            html: '<div class="slider5"></div>',
            style: {
              'background': 'url(' + slider5 + ')'
            }
          }
        ],
        //Sliding configuration [obj]
        sliderinit: {
          currentPage: 0,
          thresholdDistance: 500,
          thresholdTime: 500,
          autoplay:3000,
          loop:true,
          // direction:'vertical',
          infinite:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          duration: 1000
        }
      }
    },
    components: {
      slider
    },
    methods: {
      // // Listener event
      // slide (data) {
      //   console.log(data)
      // },
      // onTap (data) {
      //   console.log(data)
      // },
      // onInit (data) {
      //   console.log(data)
      // }
    }
  }
</script>
<style scoped lang="scss" type="text/scss">

</style>
