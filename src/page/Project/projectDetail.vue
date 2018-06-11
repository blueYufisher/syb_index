<template>
  <div class="home">
    <div v-loading="loading" element-loading-text="加载中...">
      <section class="w mt30 clearfix">
        <div class="contentwrap">
          <div class="content">
            <div class="marketingContent">
              <div class="marketingLft">
                <div class="articleCntTitle">
                  <h1>{{project.projName}}</h1>
                </div>
                <div class="articleCopyright">
                  <!--<span class='origin'></span>-->
                  <span class="visit">浏览次数：{{projectVisit}}</span>
                  <span class="updateTime">更新时间：{{project.updateTime}}</span>
                  <span class="projectStatus">状态：{{project.status?"出孵":"在孵"}}</span>
                </div>
                <div class="articleDetail">【内容提要】{{project.note}}</div>
                <div class="articleCoverPic"><img v-lazy="picUrl" v-if="picUrl" alt="" style="margin: 10px auto; padding: 5px; list-style: none; vertical-align: middle; border: 1px solid rgb(221, 221, 221); border-radius: 3px; box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 8px; background: rgb(251, 251, 251); color: rgb(51, 51, 51); font-family: &quot;Microsoft Yahei&quot;, verdana; font-size: 14px; white-space: normal;height: 150px;"></div>
                <div class="articleContent" v-html='project.content'>
                </div>
                <ul class="articleUl">
                  <li>
                    <div class="relatedTitle pre" v-if="post_pre">
                      上一篇：
                      <a href=''>
                        <router-link :to="{path:'/projectDetail', query:{id: preProject.id}}">
                          {{preProject.projName}}
                        </router-link>
                      </a>
                    </div>
                    <div class="relatedTitle pre" v-if="err_pre">
                      上一篇：没有了
                    </div>
                  </li>
                  <li>
                    <div class="relatedTitle next" v-if="post_next">
                      下一篇：
                      <a href=''>
                        <router-link :to="{path:'/projectDetail', query:{id: nextProject.id}}">
                          {{nextProject.projName}}
                        </router-link>
                      </a>
                    </div>
                    <div class="relatedTitle next" v-if="err_next">
                      下一篇：没有了
                    </div>
                  </li>
                </ul>
                <div class="articleComment">
                  <div class="comment-title">
                    <strong class="comments-sta">评论</strong>
                  </div>
                  <div class="comments-container">
                    <!--<div class="comments-loading hide">载入中...</div>-->
                    <div class="comments-box" id="goToReplyEditor">
                      <div class="pull-left">
                        <img class="avatar-32 " src="../../assets/images/L.png" alt="">
                      </div>
                      <div class="comments-box-content">
                        <div class="form-group mb0">
                          <textarea name="text" rows="3" class="form-control" placeholder="请给出客观的评论……" v-model="commentTxt"></textarea>
                          <div class="mt15 text-right">
                            <!--<button type="button" class="hide"></button>-->
                            <button class=" btn btn-primary" type="button" @click="submitComment">发布评论</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="comments-list" v-if="comments_list != ''">
                      <div class="words">
                        <h3><strong>最新评论</strong></h3>
                        <ul class="comment-say" v-for = "(comment, i) in comments_list">
                          <li class="comment-say-li comment-level-1" data-parent-comment-id="0">
                            <div class="csl-img">
                              <a rel="nofollow">
                                <img src="../../assets/images/L.png" width="32" height="32">
                              </a>
                            </div>
                            <div class="csl-body cmt-body">
                              <div class="cont">
                                <a rel="nofollow" class="name replyName">匿名游客</a>
                                <span class="cntCmt lv1-cmt">{{comment.crContent}}</span>
                              </div>
                              <div class="time">
                                <span>{{comment.createTime}}</span>
                                <a href="javascript:;" class="respond-coin" title="回复" @click="changeReply(i)">
                                  <i></i><em>回复</em>
                                </a>
                                <span class="support" @click="changeLike(i)">
                                  <i :class="comment.isLike?'like':'dislike'"></i><em class="z-count">({{comment.thumbs}})</em>
                                </span>
                              </div>
                              <div class="respond-submit" :class="{disappear:!comment.isReply}">
                                <div class="text"><input type="text" v-model="replyTxt">
                                  <div class="tip" ref="reply">回复<a>匿名游客</a>：</div>
                                </div>
                                <div class="sub">
                                  <button @click="submitComment2($refs.reply)">提交</button>
                                </div>
                              </div>
                              <ul class="csl-respond "></ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="marketingRgt">
                <!--<div class="hot_news_title">-->
                <!--<h3 class="orange">最新文章</h3>-->
                <!--</div>-->
                <!--<ul class="marketingArticle">-->
                <!--</ul>-->
                <div class="hot_news_title">
                  <h3 class="orange">推荐内容</h3>
                </div>
                <ul class="marketingArticle" v-for="(hotProject, i) in hotList">
                  <li><a href=''><router-link :to="{path:'/projectDetail', query:{id: hotProject.id}}">{{hotProject.projName}}</router-link></a></li>
                </ul>
                <!--<div class="hot_news_title">-->
                <!--<h3 class="orange">点击排行</h3>-->
                <!--</div>-->
                <!--<ul class="marketingArticle">-->
                <!--</ul>-->
                <!--<div class="clr"></div>-->
              </div>
            </div>
          </div>
          <div class="clr"></div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  /*eslint-disable */
  import $ from 'jquery'
  import {
    getProjectByIdReturnPreNextProj, findProjectNumByVisit,
    modifyProjectVisit, selectPictureById,
    selectCommentListByProjectId, addCommentReply, updateThumbs
  } from '/api/index.js'
  import {formatDate} from '/common/js/util.js'
  import userAvatar from '../../assets/images/L.png'

  export default {
    data() {
      return {
        serverUrl: process.env.API_ROOT,  // 打包部署上线时
        project: [],
        picUrl: '',
        preProject: [],
        nextProject: [],
        hotList: [],
        projectVisit: -1,
        project_type: -1,
        project_id: -1,
        post_pre: null,
        post_next: null,
        err_pre: null,
        err_next: null,
        crumbs_active: '',
        loading: true,
        comments_list:[],
        commentTxt:'',
        replyTxt:'',
        subComment: false
      }
    },
    computed: {
      // classObject: function () {
      //   return {
      //     activity: this.classValue === 1,
      //     news: this.classValue === 2,
      //     knowledge: this.classValue === 3
      //   }
      // }
    },
    methods: {
      getData () {
        let _this = this
        this.post_pre = this.post_next = null
        this.err_pre = this.err_next = null
        getProjectByIdReturnPreNextProj(this.project_id).then(res => {
          _this.project = res.data.resultList[0]
          _this.project.updateTime = formatDate(_this.project.updateTime, "yyyy-MM-dd")
          _this.preProject = res.data.preText[0]
          _this.nextProject = res.data.nextText[0]
          if (_this.preProject !== undefined) {
            _this.post_pre = res.status
          } else {
            _this.err_pre = res.status
          }
          if (_this.nextProject !== undefined) {
            _this.post_next = res.status
          } else {
            _this.err_next = res.status
          }
          if (_this.project.logo !== 119){
            selectPictureById(_this.project.logo).then(res => {
              _this.picUrl = this.serverUrl + '\\images\\' + res.data.url
            })
          }
          _this.loading  = false
        })
      },
      getHotList () {
        let _this = this
        findProjectNumByVisit(10).then(res => {
          _this.hotList = res.data
        })
      },
      _modifyProjectVisit () {
        let _this = this
        modifyProjectVisit(this.project_id).then(res => {
          _this.projectVisit = res.data
        })
      },
      getCommentList() {
        let _this = this
        selectCommentListByProjectId(this.project_id).then(res => {
          let data = res.data
          data.forEach((item, index) => {
            // if (item.picList) {
            //   item.picList[0].picUrl = this.serverUrl + "\\images\\" + item.picList[0].picUrl;
            // }
            item.createTime = formatDate(item.createTime, "MM月dd日 hh:mm")
            item.isLike = false
            item.isReply = false
          })
          _this.comments_list = data
          // this.userface = this.userInfo.userface !== null ?
          //   this.serverUrl + "\\avatar\\" + this.userInfo.userface
          //   : userAvatar;
        })
      },
      changeLike(index) {
        let comment = this.comments_list[index]
        comment.isLike = !comment.isLike
        let params = {
          infoId: this.project_id,
          infoType: 4,
          thumbsStatus: comment.isLike,
          thumbsType: 0,
          toCrId: comment.commentReplyId
        }
        updateThumbs(JSON.stringify(params)).then(res => {
          if (res.status){
            comment.thumbs = res.data
          }
        })
      },
      changeReply(index) {
        let comment = this.comments_list[index]
        comment.isReply = !comment.isReply
      },
      submitComment(){
        let _this = this
        let params = {
          infoId: this.project_id,
          infoType: 4,
          thumbs: 0,
          crContent: this.commentTxt
        }
        addCommentReply(JSON.stringify(params)).then(res => {
          if (res.status){
            _this.getCommentList()
          }
        })
        this.commentTxt = ''
      },
      submitComment2(e){
        let reply = e[0].innerText + this.replyTxt
        let _this = this
        let params = {
          infoId: this.project_id,
          infoType: 4,
          thumbs: 0,
          crContent: reply
        }
        addCommentReply(JSON.stringify(params)).then(res => {
          if (res.status){
            _this.getCommentList()
          }
        })
        this.replyTxt = ''
      }
    },
    watch: {
      "$route": function (to, from) {
        let _this = this;
        // console.log(to, from);
        let url = to.fullPath;
        this.project_id = url.split("?")[1].split("=")[1];
        this.picUrl = ''
        this.getData()
        this.getHotList()
        this._modifyProjectVisit()
        //from 对象中包含当前地址
        //to 对象中包含目标地址
        //其实还有一个next参数的，这个参数是控制路由是否跳转的，如果没写，可以不用写next()来代表允许路由跳转，如果写了就必须写next(),否则路由是不会生效的。
      }
    },
    mounted() {
      let _this = this
      let url = this.$route.fullPath
      this.project_id = url.split("?")[1].split("=")[1];
      this.picUrl = ''
      this.getData()
      this.getHotList()
      this._modifyProjectVisit()
      this.getCommentList()
      // console.log(this.project_type, this.project_id)
      // this.switchType(num)

    },
    components: {}
  }
</script>
<style scoped lang="scss" type="text/scss">
  @media (max-width: 1220px) {
    .w{
      width: 100%;
    }
    .w245{
      width: 18%!important;
      margin-right: 2%;
    }
    .w670{
      width: 78%!important;
      margin-left: 2%;
    }
    .news-list {
      .img {
        width: 10%;
        img {
          width: 100% !important;
          height: auto;
        }
      }
      .cnt{
        width: 85%!important;
      }
    }
  }
  @media (max-width: 768px) {
    .marketingContent {
      .marketingRgt {
        display: none;
      }
      .marketingLft{
        width: 95%!important;
        margin-left: 2%;
        border-right: 0;
      }
    }
    .articleCoverPic img{
      margin: 0 auto;
      display: block;
    }
  }
  @media (max-width: 510px) {

  }
  /*面包屑*/
  .bread_crumbs { /*border-top:1px solid #dbdbdb;*/
    border-bottom: 1px solid #dbdbdb;
    height: 37px;
    width: 1220px;
    margin: 0 auto;
    margin-top: 10px
  }

  ul#crumbs {
    overflow: hidden;
    line-height: 35px
  }

  ul#crumbs li {
    float: left;
    list-style: none
  }

  ul#crumbs li span {
    font-size: 12px
  }

  ul#crumbs li a:link, ul#crumbs li a:visited {
    text-decoration: none;
    font-size: 12px
  }

  .crumbs_index:link, .crumbs_index:visited {
    color: #666
  }

  .crumbs_paper:link, .crumbs_paper:visited {
    color: #666
  }

  .crumbs_index:hover, .crumbs_paper:hover {
    color: #F60
  }

  .home {
    display: flex;
    flex-direction: column;
  }

  .mt30 {
    margin-top: 15px;
  }

  a:link, a:visited {
    color:#666666;
    text-decoration:none
  }
  a:hover, a:active {
    text-decoration:underline;
    color:red
  }
  .clr {
    clear:both;
    width:0px;
    height:0px;
    overflow:hidden
  }


  .marketingLft {
    float:left;
    width:65%;
    min-height:803px;
    padding:0px 13px 20px 0px;
    border-right:1px dotted #CCC;

  }
  .marketingRgt {
    float:right;
    width:30%;
    min-height:100px;
  }
  .marketingLft p {
    margin:12px 0px;
    text-indent:24px;
    color:#666;
  }
  .marketingH1, .marketingTitle {
    font-size:16px;
    line-height:46px;
    font-weight:bold;
    margin-top:8px;
    font-family:'寰蒋闆呴粦';
  }
  .marketingList {
    float:left;
    width:310px;
    padding:8px;
    margin:0px 10px 0px 5px;
    height:420px;
  }
  .subTitle {
    font-size:16px;
    font-weight:bold;
    font-family:'寰蒋闆呴粦', '榛戜綋';
    margin-top:5px;
    line-height:46px;
  }
  .marketingDetail {
    border:1px solid #ECECEC;
    color:#999;
    height:80px;
    padding:5px;
    margin-bottom:10px;
  }
  .marketingDetail img {
    margin-right:8px;
  }
  .marketingList ul li {
    background:url(/static/images/dot3.jpg) 3px center no-repeat;
    padding-left:13px;
    border-bottom:1px dotted #ECECEC;
  }
  .marketingList a:link, .marketingList a:visited {
    color:#666;
    text-decoration:none;
  }
  .marketingList a:hover, .marketingList a:active {
    color:#7eb712;
    text-decoration:none;
  }
  .marketingArticle{margin-bottom:5px;}
  .marketingArticle li {
    border-bottom:1px dashed #dbdbdb;
    background:url(../../assets/images/icon_org.jpg) no-repeat 0 15px;
    padding: 5px 0 5px 10px;
  }
  .marketingArticle a:link, .marketingArticle a:visited {
    color:#666;
  }
  .marketingArticle a:hover, .marketingArticle a:active {
    color:#F60;
  }
  .articleUl {
    margin: 15px 0;
  }
  .articleUl li {
    border-bottom:1px dotted #CCC;
    padding:5px;
    margin-left:5px;
  }
  .listTitle, .relatedTitle {
    font-weight:bold;
    font-family:'寰蒋闆呴粦';
  }
  .relatedTitle {
    background:none;
    padding-left:8px;
  }
  .listTitle a:link, .listTitle a:visited, .relatedTitle a:link, .relatedTitle a:visited {
    color:#666;
  }
  .listTitle a:hover, .listTitle a:active, .relatedTitle a:hover, .relatedTitle a:active {
    color:#F60;
  }
  .listDetail {
    text-indent:24px;
  }
  .listDetail a:link, .listDetail a:visited {
    color:#666;
    text-decoration:none;
  }
  .copyRight span {
    margin-left:24px;
    color:#999;
  }
  .marketingList .articleTitle {
    text-align:center;
  }
  .marketingList .articleTitle {
    height:90px;
    color:#666;
  }
  .articleCopyright {
    border-top:1px dotted #ececec;
    border-bottom:1px dotted #ececec;
    height:22px;
    /*padding:5px 0;*/
    color:#999;
    text-align:center;
  }
  .articleCopyright span {
    margin:0px 12px;
  }
  .marketingLft .articleDetail {
    border:1px dashed #CCC;
    background:#F9F9F9;
    padding:5px;
    /*width:664px;*/
    text-indent:24px;
    margin-top:20px;
    color:#555;
  }
  .articleCntTitle h1 {
    font-size:20px;
    font-family:Microsoft Yahei,"瀹嬩綋","瀹嬩綋",verdana;
    margin:20px 0px ;
    color:#333;
    font-weight:bold;
    text-align:center;
  }
  .articleContent ul li {
    list-style:square;
    margin-left:42px;
    color:#666;
  }

  .articleContent {
    color: #333;
    line-height: 25px;
    font-size: 14px;
    /*width: 675px;*/
    overflow: hidden;
    font-family: Microsoft Yahei, verdana;
  }

  .articleContent img{border-radius:3px;box-shadow:rgba(0,0,0,0.15) 0 0 8px;background:#FBFBFB;border:1px solid #ddd;margin:10px auto;padding:5px;}

  .orange {
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    color: #f60;
  }

  .articleComment{
    margin-top: 50px;
    border-top: 2px solid #ececec;
    .comment-title{
      margin-top: 20px;
      margin-bottom: 10px;
      strong{
        display: block;
        font-size: 16px;
      }
    }
    .comments-container{
      border: 0;
      box-shadow: none;
      /*border-top: 1px solid rgba(0,0,0,0.09);*/
      background: #FFFFFF;
      .comments-box {
        /*background: #FAFAFA;*/
        /*box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.09);*/
        border-radius: 2px 2px 0px 0px;
        padding: 15px 20px;
        /*border-top: 1px solid rgba(0,0,0,0.09);*/
        margin-top: -1px;
        .pull-left {
          float: left;
          .avatar-32 {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 1px solid #ccc;
          }
          img {
            vertical-align: middle;
          }
        }
        .comments-box-content {
          padding-left: 47px;
          .form-group {
            position: relative;
            margin-bottom: 0px;
            .form-control {
              display: block;
              width: 100%;
              height: 34px;
              padding: 6px 12px;
              font-size: 14px;
              line-height: 1.42858;
              color: #555;
              background-color: #fff;
              background-image: none;
              border: 1px solid #ccc;
              border-radius: 4px;
              -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
              box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
              -webkit-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
              -o-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
              transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
            }
            textarea {
              max-height: 132px;
              min-height: 90px;
              resize: vertical;
            }
            .text-right {
              text-align: right;
              margin-top: 15px;
              .hide {
                display: none;
              }
              .btn {
                -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.05);
                box-shadow: 0 1px 1px rgba(0,0,0,0.05);
                display: inline-block;
                margin-bottom: 0;
                font-weight: normal;
                text-align: center;
                vertical-align: middle;
                cursor: pointer;
                background-image: none;
                border: 1px solid transparent;
                white-space: nowrap;
                padding: 6px 12px;
                font-size: 14px;
                line-height: 1.42858;
                border-radius: 4px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
              }
              .btn-primary {
                color: #fff;
                background-color: #ff6600;
                border-color: #ff6600;
                &:hover{
                  background-color: #f43838;
                }
              }
            }
          }
        }
      }
      .comments-list{
        h3 {
          font-size: 14px;
          color: #999999;
          height: 40px;
          line-height: 40px;
          border-bottom: solid 1px #ECECEC;
          position: relative;
          margin-top: 4px;
          font-weight: normal;
          .lp-comment .words h3 strong {
            font-size: 20px;
            color: #D55252;
            position: absolute;
            bottom: -1px;
            left: 0;
            border-bottom: 2px solid #D55252;
            font-size: 16px;
            color: #ec6b44;
            border-bottom: 0;
          }
        }
        .comment-say{
          li{
            /*border-bottom-style: solid;*/
            padding: 20px 0 8px;
            border-bottom: dashed 1px #ECECEC;
            .csl-img {
              width: 40px;
              float: left;
              position: relative;
              z-index: 1;
              a {
                text-decoration: none;
                color: #333;
                border: 0;
                font-size: 100%;
                margin: 0;
                padding: 0;
                vertical-align: baseline;
                -webkit-transition: all 0.3s ease-in;
                -moz-transition: all 0.3s ease-in;
                transition: all 0.3s ease-in;
                -o-transition: all 0.3s ease-in;
                img {
                  border-radius: 50%;
                  border: 1px solid #ccc;
                }
              }
            }
            .csl-body {
              position: relative;
              padding-left: 55px;
              .cont {
                color: #666666;
                font-size: 14px;
                padding-bottom: 10px;
                word-break: break-all;
                word-wrap: break-word;
                overflow: auto;
                a.name {
                  display: inline-block;
                  font-size: 14px;
                  color: #888;
                }
                span {
                  display: block;
                  padding-top: 8px;
                  line-height: 22px;
                }
              }
              .time {
                font-size: 12px;
                color: #cccccc;
                height: 14px;
                line-height: 14px;
                span:first-child {
                  position: absolute;
                  /* left: 158px; */
                  top: 3px;
                  right: 0;
                }
                a.respond-coin {
                  float: none;
                  /* margin-right: 4px; */
                  margin-right: 10px;
                  i {
                    background: url(../../assets/images/icons8-topic-14.png) no-repeat;
                    width: 14px;
                    height: 13px;
                    display: inline-block;
                    vertical-align: 1px;
                  }
                  em {
                    color: #a0a0a0;
                    font-size: 14px;
                    position: relative;
                    top: -3px;
                    margin-left: 8px;
                  }
                }
                .support {
                  float: none;
                  color: #a0a0a0;
                  display: inline-block;
                  position: relative;
                  top: -2px;
                  i.dislike {
                    background: url(../../assets/images/icons8-thumbs-up-14.png) no-repeat;
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    vertical-align: 1px;
                  }
                  i.like {
                    background: url(../../assets/images/icons8-thumbs-up-filled-14.png) no-repeat;
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    vertical-align: 1px;
                  }
                  em {
                    color: #a0a0a0;
                    font-size: 13px;
                    position: relative;
                    top: -3px;
                    margin-left: 8px;
                  }
                }
                span {
                  color: #888;
                  font-size: 14px;
                  padding-right: 22px;
                  display: inline-block;
                  cursor: pointer;
                  top: -2px;
                  position: relative;
                }
              }
              .csl-respond {
                padding: 10px 0 0px;
              }
              .respond-submit {
                margin: 5px 0 0 12px;
                .text {
                  position: relative;
                  padding-left: 120px;
                  box-sizing: border-box;
                  input {
                    border-radius: 2px;
                    padding-right: 10px;
                    height: 37px;
                    width: 100%;
                    line-height: 14px;
                    font-size: 14px;
                    /*line-height: 37px\9;*/
                    color: #5A5A5A;
                    border: solid 1px #EEEEEE;
                    /*background: #F7F7F7;*/
                  }
                  .tip {
                    font-size: 14px;
                    color: #999999;
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    a {
                      padding: 0 5px;
                    }
                  }
                }
                .sub {
                  padding-top: 14px;
                  button {
                    border-radius: 4px;
                    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.05);
                    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
                    cursor: pointer;
                    width: 85px;
                    height: 33px;
                    color: #fff;
                    font-size: 14px;
                    background-color: #ff6600;
                    border: 0;
                    outline: 0;
                    float: right;
                    &:hover{
                      background-color: #f43838;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .disappear {
    display: none;
  }

</style>
