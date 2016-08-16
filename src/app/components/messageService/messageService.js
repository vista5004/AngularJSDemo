/**
 * Created by tiantan on 2016/8/16.
 */

  angular
    .module('angularJsdemo')
    .factory("messageService",["$rootScope",function ($rootScope) {
      var messageArray=[];
      var sendMessage= function (message) {
        $rootScope.$broadcast("tittleName",message);
      };
      var storeMessage= function (item) {
        if(messageArray.indexOf(item)===-1){
          messageArray.push(item);
        }
      };
      var destoryMessage= function (item) {
        if(messageArray.indexOf(item)>-1){
            var index=messageArray.indexOf(item);
            messageArray.splice(index,1);
        }
      };
      var isHasMessage= function (item) {
        return messageArray.indexOf(item);
      };
      var popMessage= function () {
        return messageArray;
      };
     return{
       sendMessage:sendMessage,
       storeMessage:storeMessage,
       destoryMessage:destoryMessage,
       isHasMessage:isHasMessage,
       popMessage:popMessage
     }
    }]);

