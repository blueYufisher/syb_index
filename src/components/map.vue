<template>
  <!--地图容器-->
  <div id="XSDFXPage" class="XSDFXPage" style="width:100%;height:550px;border:#ccc solid 1px;"></div></template>
<script>
  /*eslint-disable */
  import mapIcon from '../assets/images/mapIcon.png'
  export default {
    name: '',
    data() {
      return {
        markerArr: [{
          title: "广东工业大学大学生创业基地",
          content: "广东工业大学大学生创业基地",
          point: "113.401273|23.045468",
          isOpen: 0,
          icon: {w: 32, h: 32, l: 0, t: -2, x: 8, lb: 14}
        }
        ]
      }
    },
    methods: {
      initMap() {
        this.createMap();//创建地图
        this.setMapEvent();//设置地图事件
        this.addMapControl();//向地图添加控件
        this.addMarker();//向地图中添加marker
      },
      createMap() {
        var map = new BMap.Map("XSDFXPage");//在百度地图容器中创建一个地图
        var point = new BMap.Point(113.401273, 23.045468);//定义一个中心点坐标
        map.centerAndZoom(point, 18);//设定地图的中心点和坐标并将地图显示在地图容器中(当前层级18级)
        window.map = map;//将map变量存储在全局
      },
      setMapEvent() {
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
      },
      addMapControl() {
        // //向地图中添加缩放控件
        // var ctrl_nav = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_ZOOM});
        // map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1});
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
        map.addControl(ctrl_sca);
        //左上角，添加默认缩放平移控件
        var ctrl_nav = new BMap.NavigationControl();
        map.addControl(ctrl_nav);
        // //右上角，仅包含平移和缩放按钮
        // var ctrl_small = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});
        // map.addControl(ctrl_small);
      },
      addMarker() {
        var _this = this;
        for (var i = 0; i < this.markerArr.length; i++) {
          var json = this.markerArr[i];
          var p0 = json.point.split("|")[0];
          var p1 = json.point.split("|")[1];
          var point = new BMap.Point(p0, p1);
          var iconImg = this.createIcon(json.icon);
          var marker = new BMap.Marker(point, {icon: iconImg});
          var iw = this.createInfoWindow(i);
          var label = new BMap.Label(json.title, {"offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)});
          marker.setLabel(label);
          map.addOverlay(marker);
          label.setStyle({
            borderColor: "#808080",
            color: "#333",
            cursor: "pointer"
          });

          var opts = {
            width : 400,     // 信息窗口宽度
            height: 50,     // 信息窗口高度
            title : "广东工业大学学生创业（孵化）基地"
          }
          var infoWindow = new BMap.InfoWindow("地址：大学城外环西路100号广东工业大学教学6号楼209-2", opts);  // 创建信息窗口对象
          map.openInfoWindow(infoWindow,point); //开启信息窗口
          (function () {
            var index = i;
            var _iw = _this.createInfoWindow(i);
            var _marker = marker;
            _marker.addEventListener("click", function () {
              this.openInfoWindow(_iw);
              // searchInfoWindow.open(_marker);
            });
            _iw.addEventListener("open", function () {
              // _marker.getLabel().hide();
              map.openInfoWindow(infoWindow,point); //开启信息窗口
            })
            _iw.addEventListener("close", function () {
              _marker.getLabel().show();
            })
            label.addEventListener("click", function () {
              _marker.openInfoWindow(_iw);
            })
            if (!!json.isOpen) {
              label.hide();
              _marker.openInfoWindow(_iw);
            }
          })()
        }
      },
      createInfoWindow(i) {
        var json = this.markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
        return iw;
      },
      createIcon(json) {
        var icon = new BMap.Icon(mapIcon, new BMap.Size(json.w, json.h), {
          imageOffset: new BMap.Size(-json.l, -json.t),
          infoWindowOffset: new BMap.Size(json.lb + 5, 1),
          offset: new BMap.Size(json.x, json.h)
        })
        return icon;
      }
    },
    mounted() {
      this.initMap();

      //   // 百度地图API功能
      //   // 创建Map实例
      //   var map = new BMap.Map("XSDFXPage", {enableMapClick: true});
      //   // 初始化地图,设置中心点坐标和地图级别
      //   map.centerAndZoom(new BMap.Point(113.401273, 23.045468), 18);
      //   // 添加地图类型控件
      //   map.addControl(new BMap.MapTypeControl());
      //   // 设置地图显示的城市 此项是必须设置的
      //   map.setCurrentCity("杭州");
      //   // 开启鼠标滚轮缩放
      //   map.enableScrollWheelZoom(true);
      //   // 设置定时器，对地图进行自动移动
      //   setTimeout(function () {
      //     map.panTo(new BMap.Point(113.262232, 23.154345));
      //   }, 2000);
      //   setTimeout(function () {
      //     map.setZoom(14);
      //   }, 4000);
      //   /************************************************
      //    添加折线
      //    *************************************************/
      //   var pointGZ = new BMap.Point(113.262232, 23.154345);
      //   var pointHK = new BMap.Point(110.35, 20.02);
      //   setTimeout(function () {
      //     var polyline = new BMap.Polyline([pointGZ, pointHK], {
      //       strokeColor: "blue",
      //       strokeWeight: 5,
      //       strokeOpacity: 0.5
      //     });
      //     map.addOverlay(polyline);
      //   }, 6000);
      //   /************************************************
      //    添加工具条、比例尺控件
      //    *************************************************/
      //   map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT}));
      //   map.addControl(new BMap.NavigationControl());
      //   map.addControl(new BMap.NavigationControl({
      //     anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
      //     type: BMAP_NAVIGATION_CONTROL_SMALL
      //   }));
      //
      //   /************************************************
      //    添加自定义控件类，放大ZoomControl
      //    *************************************************/
      //   function ZoomControl() {
      //     //默认停靠位置和偏移量
      //     this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
      //     this.defaultOffset = new BMap.Size(50, 23);
      //   }
      //
      //   //通过JavaScript的prototype属性继承于BMap.Control
      //   ZoomControl.prototype = new BMap.Control();
      //   //自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
      //   //在本方法中创建div容器，并将其添加到地图容器中
      //   ZoomControl.prototype.initialize = function (map) {
      //     //创建一个DOM元素
      //     var div = document.createElement('div');
      //     //添加文字说明
      //     div.appendChild(document.createTextNode('放大两级'));
      //     //添加样式
      //     div.style.color = '#40C5CC';
      //     div.style.cursor = 'pointer';
      //     div.style.border = '3px solid gray';
      //     div.style.backgroundColor = '#eee';
      //     //绑定事件，点击触发
      //     div.onclick = function (e) {
      //       map.setZoom(map.getZoom() + 2);
      //     }
      //     //添加DOM元素到地图上
      //     map.getContainer().appendChild(div);
      //     //将DOM元素返回
      //     return div;
      //   }
      //   //创建控件
      //   var myZoomCtrl = new ZoomControl();
      //   map.addControl(myZoomCtrl)
      //
      //   /************************************************
      //    添加添加城市列表控件
      //    *************************************************/
      //   map.addControl(new BMap.CityListControl({
      //     anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
      //     offset: new BMap.Size(130, 23)
      //     // 切换城市之间事件
      //     // onChangeBefore: function(){
      //     //    alert('before');
      //     // },
      //     // 切换城市之后事件
      //     // onChangeAfter:function(){
      //     //   alert('after');
      //     // }
      //   }));
      //   /************************************************
      //    添加新图标
      //    *************************************************/
      //     //定义新图标
      //   var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(300, 157));
      //   //创建标注
      //   var marker = new BMap.Marker(pointHK, {icon: myIcon});
      //   var marker1 = new BMap.Marker(pointGZ, {icon: myIcon});
      //   //将标注放大地图上
      //   map.addOverlay(marker);
      //   map.addOverlay(marker1);
      //   //文字提示
      //   var label = new BMap.Label('广州西站', {offset: new BMap.Size(140, 10)});
      //   marker1.setLabel(label);
      //   //添加新图标的监听事件
      //   marker1.addEventListener('click', function () {
      //     var p = marker1.getPosition();//获取位置
      //     alert("点击的位置是：" + p.lng + ',' + p.lat);
      //   })
      //
      //   /************************************************
      //    添加曲线
      //    *************************************************/
      //   var beijingPosition = new BMap.Point(116.432045, 39.910683),
      //     hangzhouPosition = new BMap.Point(120.129721, 30.314429),
      //     taiwanPosition = new BMap.Point(121.491121, 25.127053);
      //   var point = [beijingPosition, hangzhouPosition, taiwanPosition];
      //
      //   var curve = new BMapLib.CurveLine(point, {strokeColor: "blue", strokeWeight: 3, strokeOpacity: 0.5});//创建弧线
      //   map.addOverlay(curve);//添加到地图上
      //   curve.enableEditing();//开启编辑功能
      //
      //   /************************************************
      //    给地图添加右键菜单
      //    *************************************************/
      //   var menu = new BMap.ContextMenu();
      //
      //   var txtMenuItem = [
      //     {
      //       text: '放大',
      //       callback: function () {
      //         map.zoomIn()
      //       }
      //     },
      //     {
      //       text: '缩小',
      //       callback: function () {
      //         map.zoomOut()
      //       }
      //     }
      //   ];
      //   for (var i = 0; i < txtMenuItem.length; i++) {
      //     menu.addItem(new BMap.MenuItem(txtMenuItem[i].text, txtMenuItem[i].callback, 100));
      //   }
      //   map.addContextMenu(menu);
    }
  }
</script>
<style scoped>
  html, body, .XSDFXPage {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
  }
  .iw_poi_title {color:#CC5522;font-size:14px;font-weight:bold;overflow:hidden;padding-right:13px;white-space:nowrap}
  .iw_poi_content {font:12px arial,sans-serif;overflow:visible;padding-top:4px;white-space:-moz-pre-wrap;word-wrap:break-word}
</style>
