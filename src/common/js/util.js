/*eslint-disable */
export const formatDate = (v, format) => {
  /**
   格式化时间显示方式、用法:format="yyyy-MM-dd hh:mm:ss";
   */
  if (!v) return "";
  var d = new Date(v);
  if (typeof v === 'string') {
    if (v.indexOf("/Date(") > -1)
      d = new Date(parseInt(v.replace("/Date(", "").replace(")/", ""), 10));
    else
      d = new Date(Date.parse(v.replace(/-/g, "/").replace("T", " ").split(".")[0]));//.split(".")[0] 用来处理出现毫秒的情况，截取掉.xxx，否则会出错
  }
  var o = {
    "M+": d.getMonth() + 1,  //month
    "d+": d.getDate(),       //day
    "h+": d.getHours(),      //hour
    "m+": d.getMinutes(),    //minute
    "s+": d.getSeconds(),    //second
    "q+": Math.floor((d.getMonth() + 3) / 3),  //quarter
    "S": d.getMilliseconds() //millisecond
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
}
