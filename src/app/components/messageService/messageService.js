/**
 * Created by tiantan on 2016/8/16.
 */

  angular
    .module('angularJsdemo')
    .factory("messageService",["$rootScope",function ($rootScope) {
      var messageArray=[];
      var messageWEIYI=[];
      var i=0;
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
            key:i
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

