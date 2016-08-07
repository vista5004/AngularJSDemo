/**
 * Created by tiantan on 2016/6/23.
 */
angular
  .module('angularJsdemo')
  .factory("getUpdateService",["$http","$q", function ($http,$q) {
      var baseUrl="app/data/updateJSON.json";
      var updateGet= function () {
        var deferred=$q.defer();
        $http({
          method:'GET',
          url:baseUrl
        }).success(function (date,status,headers,config) {
          deferred.resolve(date);
        }).error(function () {
          deferred.reject(data)
        });
        return deferred.promise;
      }


    return{
      updateGet:updateGet
    }
  }])
