/**
 * Created by tiantan on 2016/6/22.
 */

 angular
   .module('angularJsdemo')
   .controller('chartController',['$scope', function ($scope) {
     var vm=$scope.vm={};
     vm.isActive=false;
     vm.changeStyle=function(){
       vm.isActive=vm.isActive?false:true;
     }
   }])
