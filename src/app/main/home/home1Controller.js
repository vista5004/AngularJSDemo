/**
 * Created by tiantan on 2016/7/19.
 */
(function(){
  angular.module("angularJsdemo")
    .controller("home1Controller",["$scope","getUpdateService","$rootElement",function($scope,getUpdateService,$rootElement){
      var vm=$scope.vm={};
      var id=null;
      var ids=["A","B","C","D","E"];
      $scope.openUpdateContent= function (data) {
        id="#"+data.update.id;
        console.log($(id));
        $(id).slideToggle();
        //$scope.isUpdateContentOpen=!$scope.isUpdateContentOpen;
      };

      var promise=getUpdateService.updateGet();
      promise.then(function (data) {
        for(var i=0;i<data.length;i++){
          data[i].id=ids[i]
        }
        vm.updateContents=data;
      }, function () {
        console.log("fail to load data");
      })
    }])

})()
