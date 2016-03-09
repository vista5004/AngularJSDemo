<!DOCTYPE html>
<html lang="en" ng-app="selectApp">
<head>
	<meta charset="UTF-8">
	<title></title>
  <script src="lib/angular.min.js" type="text/javascript"></script>
  <script src="lib/angular-animate.js" type="text/javascript"></script>
  <script src="lib/jquery-2.1.4.min.js" type="text/javascript"></script>
  <style>
    *{
      padding: 0;
      margin: 0;
    }
    body {
      margin: 0;
    }
    li{
      list-style-type: none;
    }
    a{
      text-decoration: none;
    }
    .modalground{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.3;
    }
    .windowContent{
      width: 960px;
      height: 600px;
      border-radius: 5px;
      background-color: rgb(255,255,255);
      position: relative;
      margin: 0 auto;
      top: 80px;
      z-index: 999;
    }
    .closeButton {
      position: absolute;
      top: 15px;
      right: 15px;
      border: 0px;
    }
    .closeButton span{
      color: rgb(197,197,197);
      font-size: 24px;
      background-color: rgb(247,247,247);
    }
    .closeButton span:hover{
      color: rgb(101, 101, 101);
    }
    .window_tittle{
      width: 100%;
      height: 60px;
      background-color: rgb(247,247,247);
    }
    .window_tittle .tittle_name{
      position: absolute;
      left: 20px;
      top: 20px;
      font-size: 20px;
      color: rgb(116, 128, 126);
    }
    .window_tittle .tittle_message{
      position: absolute;
      left: 90px;
      top: 23px;
      font-size: 14px;
      color: rgb(163,175,173);
    }
    .window_left{
      width: 200px;
      height: 540px;
      position: absolute;
      top: 60px;
      background-color: rgb(247,247,247);
    }
    .window_left ul{
      width: 100%;
      height: 100%;
    }
    .window_left ul .window_left_li{
      width: 200px;
      height: 50px;
      display: block;
      float: left;
    }
    .window_left ul .window_left_li a{
      display: block;
      width:200px;
      height: 50px;
      font-size: 16px;
      line-height: 50px;
      position: absolute;
      text-align: left;
      text-indent: 20px;
      color: rgb(116, 128, 126);
    }
    .liHidden{
      z-index: 999;
      background-color: rgb(247, 247, 247);
    }
    .liShow{
      background-color: rgb(255,255,255);
      border-bottom: 1px solid gray;
    }
    .window_left ul .window_left_add{
      width: 99px;
      height: 49px;
      position: absolute;
      bottom: 60px;
      border-top: 1px solid gray;
      border-right: 1px solid #bfbfbf;
    }
    .window_left ul .window_left_add a{
      display: inline-block;
      width: 100%;
      height: 100%;
      font-size: 16px;
      text-align: center;
      line-height: 50px;
      color:rgb(116, 128, 126);
    }
    .window_left ul .window_left_add a:hover{
      color: #0066bb;
    }
    .window_left ul .window_left_make{
      width: 99px;
      height: 49px;
      position: absolute;
      left: 100px;
      bottom: 60px;
      border-top: 1px solid gray;
    }
    .window_left ul .window_left_make a {
      display: inline-block;
      width: 100%;
      height: 100%;
      font-size: 16px;
      line-height: 50px;
      text-align: center;
      color:rgb(116, 128, 126);
    }
    .window_left ul .window_left_update{
      width: 200px;
      height: 60px;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .window_left ul .window_left_update .updataBox{
      width: 194px;
      height: 54px;
      margin-left: 3px;
      margin-top: 3px;
    }
    .window_left ul .window_left_update .updataBox .update_message{
      position: absolute;
      top: -25px;
      left: 80px;
      font-size: 14px;
      width: 400px;
      height: 20px;
      color: white;
      border-radius: 3px;
      text-align: center;
      line-height: 20px;
      background-color: rgb(67,75,68);
    }
    .window_left ul .window_left_update .updataBox span{
      border-top: 10px solid  rgb(67,75,68);
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      position: absolute;
      top: -10px;
      left: 100px;
    }
    .window_left ul .window_left_update .updataBox .update_tittle{
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 54px;
      font-size: 16px;
      color:white;
      overflow: hidden;
      background-color: #08a1ef;
    }

    .window_left ul .window_left_update .updataBox .update_tittle input{
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0px;
      opacity: 0;
    }
    /*右侧图片列表*/
    .window_right{
      height: 545px;
      width: 760px;
      position:absolute;
      top: 60px;
      left: 200px;
    }
    .window_right .img_tittle_list{
      width: 720px;
      height: 50px;
      border-bottom:1px solid rgb(204,204,204);
      margin-left: 15px;
    }
    .window_right .img_tittle_list ul{
      width: 100%;
      height:100%;
      float: left;
    }
    .window_right .img_tittle_list ul li.img_tittle_li{
      display:inline-block;
      width: auto;
      height: 16px;
      line-height: 16px;
      margin-top: 17px;
      margin-right: 15px;
    }
    .window_right .img_tittle_list ul li.img_tittle_li a{
      font-size: 14px;
      font-weight:500;
      color: rgb(116, 128, 126);
    }
    .window_right .img_tittle_list ul li.img_tittle_li .isClicked{
      color: #0066bb
    }
    .window_right .img_tittle_list ul li.img_tittle_li a:hover{
      color: #0066bb
    }
    .window_right .img_list_icon{
      z-index: 999;
      position: absolute;
      height: 420px;
      width: 720px;
      margin-left: 15px;
    }
    .window_right .img_list_icon .icon_tittle{
      z-index: 999;
      height: 38px;
      width: 720px;
    }
    .window_right .img_list_icon .icon_tittle ul{
      width: 100%;
      height: 100%;
      float:left;
    }
    .window_right .img_list_icon .icon_tittle ul li.icon_tittle_li{
      display: inline-block;
      width: auto;
      height: 14px;
      margin-top: 14px;
      margin-right:14px;
    }
    .window_right .img_list_icon .icon_tittle ul li.icon_tittle_li a{
      font-size: 14px;
      color: rgb(116, 128, 126);
    }
    .window_right .img_list_icon .icon_tittle ul li.icon_tittle_li a.isClicked2{
      color: #0066bb
    }
    .window_right .img_list_icon .icon_tittle ul li.icon_tittle_li a:hover{
      color: #0066bb
    }
    .window_right .img_list_icon .img_list{
      width: 720px;
      height: 380px;
      position: absolute;
      margin-top: 5px;
    }
    .window_right .img_list_icon .img_list ul{
      width: 100%;
      height: 100%;
      float: left;
    }
    .window_right .img_list_icon .img_list ul .icon_img_li{
      display: inline-block;
      width: 115px;
      height: 115px;
      margin-right: 5px;
      background-color: gainsboro;
    }
    .window_right .img_list_icon .img_list ul .icon_img_li img{
      width: 115px;
      height: 115px;
    }
  </style>
</head>
<body ng-controller="selectController">

</body>
<script>
  angular.module('selectApp',["selectDirective","selectServer","selectController","template/window.html","template/window.html","template/window-img.html"]);
  //控制器层
  angular.module('selectController',[])
    .controller('selectController',['$scope','model',function ($scope,model) {
      model.open({
        backgroundStyle:'modalground',
        templateUrl:'template/window.html',
        className:'windowContent'
      });


    }])

  //服务层
  angular.module('selectServer',[])
    .factory('model',['$animate','$compile','$rootScope','$document','$timeout','$q', function ($animate, $compile, $rootScope, $document, $timeout, $q) {
      var body=$document.find('body').eq(0);
      var modelStack={
        open: function (modalInstance) {
          /*下面是背景*/
          var newRoot=$rootScope.$new(true);
          var backGround=angular.element('<div ><div>');
          backGround.attr({
            class:modalInstance.backgroundStyle,
          });
          var backGroundLink=$compile(backGround)(newRoot);
          body.append(backGroundLink);
          /*下面是对话框*/
          var modalContent=angular.element('<div model-window="modal-window"></div>');
          modalContent.attr({
            'template-url':modalInstance.templateUrl,
            'size':modalInstance.size,
            'class':modalInstance.className
          });
          var modalContentLink=$compile(modalContent)(newRoot);
          body.append(modalContentLink);
        }
      };
      return modelStack;
    }])

  //指令层
  angular.module('selectDirective',["template/window-list.html","template/window-img.html","template/window.html"])
    //整体区域
    .directive('modelWindow',['$animate','$q','$injector', function ($animate, $q,$injector) {
      return{
        restrict:'EA',
        replace:true,
        templateUrl: function (tElement, tAttrs) {
          return tAttrs.templateUrl;
        },
        link: function (scope,element,attr) {

        }
      }
    }])
    //顶层指令，用来继承
    .directive('listContainer',["$http","$q","$controller" ,function ($http,$q,$controller) {
      return{
        restrict:'EA',
        replace:true,
        templateUrl:"template/window-list.html",
        controller: function ($scope) {//通过子指令继承这个指令完成通信
          this.scopeGroup=[];
          //添加数组
          this.addScope= function (scope) {
            var that=this;
            this.scopeGroup.push(scope);
            $scope.$on('destroy', function () { //如果监听到当前作用域消失，则把这个作用域删除
              that.removeScope(scope);
            })
          };
          this.removeScope= function (scope) {
            var that=this;
            var index=this.scopeGroup.indexOf(scope);
            if(index>-1){
              that.scopeGroup.splice(index,1);
            }
          };
          this.other= function (scope) {
            var that=this;
            for(var i=0;i<that.scopeGroup.length;i++){
              if(that.scopeGroup[i]!=scope){
                that.scopeGroup[i].isShow=false;
              }
            }
          }
        }
      }
    }])

    //左侧区域单独的指令
    .directive('liA',["$http","$q","$controller","$animate",function ($http,$q,$controller,$animate){
      return{
        restrict:'EA',
        require:'^listContainer',
        scope:{
          isShow:'=?'
        },
        template:'<li class="window_left_li" ng-class="{\'liShow\':isShow}" ng-click="getSystemFile();changeStyle()"><a href="">图片库</a></li>',
        link: function (scope, element, attr, listContainer) {
          scope.isShow=true;
          listContainer.addScope(scope);
          scope.changeStyle= function () {
            scope.isShow=true
          };
          scope.$watch('isShow', function (value) {
            if(value==true){
              listContainer.other(scope);
            }
          })
        }
      }
    }])
    .directive('liB',["$http","$q","$controller","$animate",function ($http,$q,$controller,$animate){
      return{
        restrict:'EA',
        require:'^listContainer',
        scope:{
          isShow:'=?'
        },
        template:'<li class="window_left_li" ng-class="{\'liShow\':isShow}" ng-click="getUserFile();changeStyle()"> <a href="">我的图片</a></li>',
        link: function (scope, element, attr, listContainer) {
          listContainer.addScope(scope);
          scope.changeStyle= function () {
            scope.isShow=true;
            console.log(1);
          };
          scope.$watch('isShow', function (value) {
            if(value){
              listContainer.other(scope);
            }
          })
        }
      }
    }])
  /*右侧图片展示区模块*/
    .directive('imgList',['$http','$q','$animate', function ($http,$q,$animate) {
      return{
        restrict:'EA',
        replace:true,
        templateUrl:'template/window-img.html',
        link: function (scope, element, attr) {
          scope.isGroupShow=1;
          scope.isContentShow=1;
          scope.isClicked=1;
          scope.isClicked2=1;
          scope.getSysImgList= function (id) {
            scope.isGroupShow=id;
            scope.isClicked=id;
          };
          scope.message= function (id) {
            scope.isClicked2=id;
            console.log(id)
          };
          scope.getTopicList= function (id) {
            scope.isContentShow=id;

          };
          scope.imgLists=[
            {tittle:"最新",id:1},
            {tittle:"图标",id:2},
            {tittle:"动画",id:3},
            {tittle:"节日",id:4},
            {tittle:"风格",id:5},
            {tittle:"企业",id:6},
            {tittle:"行业",id:7},
            {tittle:"个人",id:8},
            {tittle:"正版授权",id:9},
            {tittle:"海外",id:10},
            {tittle:"背景",id:11}
          ];
          scope.iconGroups=[
            {
              id:1,
              contents:[
                {
                  id:1,
                  iconLists:[
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:1},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:2},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:3},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:4},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:5},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:6},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:7},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:8},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:9},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:10},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:11},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:12},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:13},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:14},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:15},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:16},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:17},
                    {src:"http://p3.wmpic.me/article/2016/01/25/1453693103_qrvxuXVN.jpg",alt:18},
                  ]
                }
              ]
            },
            {
              id:2,
              tittleGroup:[
                {tittle:"图标",id:1},
                {tittle:"线条",id:2},
                {tittle:"边框",id:3},
                {tittle:"纯色",id:4},
                {tittle:"天气",id:5},
                {tittle:"符号",id:6}
              ],
              contents:[
                {
                  id:1,
                  iconLists:[
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:1},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:2},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:3},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:4},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:5},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:6},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:7},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:8},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:9},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:10},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:11},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:12},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:13},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:14},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:15},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:16},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:17},
                    {src:"http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg",alt:18},
                  ]
                },
                {
                  id:2,
                  iconLists:[
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:1},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:2},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:3},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:4},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:5},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:6},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:7},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:8},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:9},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:10},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:11},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:12},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:13},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:14},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:15},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:16},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:17},
                    {src:"http://img02.tooopen.com/images/20160125/tooopen_sy_155368082418.jpg",alt:18},
                  ]
                },
                {
                  id:3,
                  iconLists:[
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:1},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:2},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:3},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:4},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:5},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:6},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:7},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:8},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:9},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:10},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:11},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:12},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:13},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:14},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:15},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:16},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:17},
                    {src:"http://p2.wmpic.me/article/2016/01/21/1453344115_kSidwrUH.jpg",alt:18},
                  ]
                },
              ]
            },
          ]
        }
      }
    }])


  /*缓存*/
  angular.module('template/window.html',[])
    .run(['$templateCache', function ($templateCache) {
      $templateCache.put('template/window.html','<div class="windowContent">' +
        '<div class="close_content"> ' +
          '<button type="button" ng-click="close()" class="closeButton"><span>×</span></button>' +
        '</div>' +
        '<div class="window_tittle">' +
          '<span class="tittle_name">素材库</span>' +
          '<span class="tittle_message">单击使用</span>' +
        '<div>' +
        '<div class="window_left">' +
          '<ul list-container></ul>' +
        '</div>' +
        '<div class="window_right">' +
          '<div img-list></div>' +
        '</div>'+
        '</div>')
    }])
  //左侧区域单独的缓存
  angular.module('template/window-list.html',[])
    .run(['$templateCache', function ($templateCache) {
      $templateCache.put('template/window-list.html',
        '<ul>' +
          '<li-a > 图片库 </li-a>' +
          '<li-b > 我的图片 </li-b>' +
          '<li class="window_left_add"> <a href="" ng-click="createTag">添加分组</a></li>' +
          '<li class="window_left_make"> <a href="" >在线制作</a></li>' +
          '<li class="window_left_update">' +
            '<div class="updataBox">' +
              '<div class="update_message" ng-show="isUpdateFileMessageShow">大小不超过3M，支持格式：jpg、png、gif，一次最多上传6张</div>' +
              '<span ng-show="isUpdateFileMessageShow"></span>' +
              '<em class="update_tittle" ng-mouseover="isUpdateFileMessageShow=true" ng-mouseleave="isUpdateFileMessageShow=false">上传 <input type="file" multiple="multiple"></em>' +
            '</div>' +
          '</li>' +
        '</ul>')
    }])
  //右侧区域单独的缓存
  angular.module('template/window-img.html',[])
    .run(['$templateCache', function ($templateCache) {
        $templateCache.put('template/window-img.html','' +
          '<div ng-init="isGroupShow=1">' +
            '<div class="img_tittle_list">' +
              '<ul>' +
                '<li class="img_tittle_li" ng-repeat="list in imgLists" ><a href="" ng-click="getSysImgList(list.id);" ng-class="{\'isClicked\':isClicked===list.id }">{{list.tittle}}</a></li>' +
              '</ul>' +
            '</div>' +
            '<div class="img_list_icon" ng-show="groupFlag" ng-repeat="group in iconGroups" >' +
              '<div ng-class="{\'icon_tittle\':isGroupShow === group.id}"  ng-show="groupFlag=(isGroupShow === group.id)">' +
                '<ul>' +
                  '<li class="icon_tittle_li" ng-repeat="listTittle in group.tittleGroup"> <a href="" ng-show="listTittle.tittle" ' +
          'ng-click="message(listTittle.id);getTopicList(listTittle.id)" ng-class="{\'isClicked2\':isClicked2 ==={{listTittle.id}}}" ">{{listTittle.tittle}}</a></li>' +
                '</ul>' +
              '</div>' +
              '<div ng-class="{\'img_list\':isGroupShow === group.id}"  ng-repeat="content in group.contents">' +
              '<div >' +
                '<ul ng-show="isContentShow===content.id">' +
                  '<li ng-repeat="imgList in content.iconLists" class="icon_img_li"><img ng-src="{{imgList.src}}" alt="{{imgList.alt}}"/></li>' +
                '</ul>' +
              '</div>' +
              '</div>' +
            '</div>' +
          '</div>')
    }])
</script>
</html>

