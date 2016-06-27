/**
 * Created by tiantan on 2016/6/22.
 */

 angular
   .module('angularJsdemo')
   .controller('chartController',['$scope',"getDataService","$rootScope", function ($scope,getDataService,$rootScope) {
     var vm=$scope.vm={};
     vm.isActiveOverview=false;
     vm.changeStyleOverview=function(){
       vm.isActiveOverview=vm.isActiveOverview?false:true;
     };
     vm.isActiveLazy=false;
     vm.changeStyleLazy= function () {
       vm.isActiveLazy=vm.isActiveLazy?false:true;
     };
     /**/
     vm.datasets=["1","2"];
     var promise=getDataService.getOverviewJSON();
     promise.then(function (data) {
       vm.data1=data;
       vm.data2=data.map(function (item) {
         return angular.extend({}, item, {
           age: item.age + 100
         });
       });

     }, function () {

     });
     vm.changeDs= function () {
       var message=vm.dataset==="1"?vm.data1:vm.data2;
       $rootScope.$broadcast("lazyLoadingDataset",message)
     }
   }])
