/**
 * Created by tiantan on 2016/6/24.
 */

angular
  .module('angularJsdemo')
  .controller("financeController",["$scope","getDataService", function ($scope,getDataservice) {
    var vm=$scope.vm={};
    vm.isSpanActiveOfFinance1=false;
    vm.isSpanActiveOfFinance2=false;
    vm.isSpanActiveOfFinance3=false;
    vm.isSpanActive1= function () {
      vm.isSpanActiveOfFinance1=!vm.isSpanActiveOfFinance1;
      vm.isSpanActiveOfFinance2=false;
      vm.isSpanActiveOfFinance3=false;
    };
    vm.isSpanActive2= function () {
      vm.isSpanActiveOfFinance2=!vm.isSpanActiveOfFinance2;
      vm.isSpanActiveOfFinance1=false;
      vm.isSpanActiveOfFinance3=false;
    };
    vm.isSpanActive3= function () {
      vm.isSpanActiveOfFinance3=!vm.isSpanActiveOfFinance3;
      vm.isSpanActiveOfFinance1=false;
      vm.isSpanActiveOfFinance2=false;
    };

    var promise=getDataservice.getFinanceJSON();
    promise.then(function (data) {
      vm.personGroup=data;
      console.log(data)
    }, function (data) {

    })
  }])
