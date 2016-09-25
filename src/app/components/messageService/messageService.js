/**
 * Created by tiantan on 2016/8/16.
 */

  angular
    .module('angularJsdemo')
    .factory("messageService",["$rootScope","$location",function ($rootScope,$location) {
      var messageArray=[];
      var messageWEIYI=[];
      var i=0;
      var routeName={         //标题名字与路由关键字对应关系
        "EChart":"Echart",
        "D3":"D3",
        "HighChart":"HighChart",
        "主页1":"home1",
        "主页2":"home2",
        "主页3":"home3",
        "收件箱":"consignee",
        "发件箱":"outBox",
        "写信":"letterWriting",
        "排版":"composing",
        "字体图标":"fontIcon",
        "按钮":"button",
        "选项卡&面板":'tab',
        "通知&提示":"notice",
        "标签&进度条":"progressBar",
        "视频&音频":"video",
        "弹窗":"modal",
        "树形图":"tree",
        "Toastr通知":"Toastr",
        "文本对比":"text",
        "加载动画":"loading",
        "小部件":"components",
        "基本表单":"normalForm",
        "基本验证":"normalValidate",
        "高级表单":"advanceForm",
        "表单向导":"formGuide",
        "文件上传":"upLoadFile",
        "文本编辑器":"fileEditor",
        "自动补全":"autoComplete",
        "日期选择":"datePicker",
        "联系人":"contacts",
        "个人资料":"personData",
        "项目管理":"projectManagement",
        "团队管理":"teamManagement",
        "信息流":"informationFlow",
        "客户管理":"customerManagement",
        "文件管理器":"fileManagement",
        "日历":"calendar",
        "博客":"blog",
        "FAQ":"FAQ",
        "时间轴":"timeAxis",
        "标签墙":"labelWall",
        "单据":"ticket",
        "搜索结果":"searchResult",
        "论坛":"forum",
        "即时通讯":"IM",
        "登录&注册":"loginAndRegister",
        "404页面":"404Page",
        "500页面":"500Page",
        "空白页":"emptyPage",
        "基本图库":"basicPhoto",
        "图片切换":"photoSwitch",
        "Blueimp相册":"Blueimp",
        "基本表格":"basicTable",
        "Ng-table":"ngTable",
        "jqGrid":"jqGrid",
        "FooTable":"fooTable",
        "表单构造器":"formCreater",
        "布局":"layout",
        "CSS动画":"CSSAnimation"
      };
      var sendMessage= function () {
        $rootScope.$broadcast("tittleName");
      };
      var storeMessage= function (item) {
        if(messageWEIYI.indexOf(item)>-1){
         return false
        }else{
          messageWEIYI.push(item);
          messageArray.push({
            tittle:item,
            key:i,
            route:routeName[item]
          });
          i=i+1;
        }
      };
      var destoryMessage= function (item) {

        var index=messageWEIYI.indexOf(item);
        /*console.log(messageWEIYI);
        console.log(item);*/
        messageWEIYI.splice(index,1);
        messageArray.splice(index,1);
        //console.log(messageArray.length-1);
        //console.log(index);
        if(messageArray.length===index){//只有在删除topbar 最后一个标签的时候，自动向前移动，
          var route=messageArray[index-1].route;
          $location.path("/home/"+route);
        }
      };
      var isHasMessage= function (item) {
        return messageWEIYI.indexOf(item);
      };
      var popMessage= function () {
        if(messageWEIYI.length>0){
          return messageArray.pop();
        }
      };
     return{
       sendMessage:sendMessage,
       storeMessage:storeMessage,
       destoryMessage:destoryMessage,
       isHasMessage:isHasMessage,
       popMessage:popMessage,
       messageArray:messageArray
     }
    }]);

