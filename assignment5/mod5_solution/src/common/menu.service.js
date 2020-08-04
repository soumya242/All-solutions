(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });

  };

 service.getitemDetails=function(dish){
   var response = $http({
     method: "GET",
     url: (ApiBasePath + "/menu_items.json")
   });
   return response.then(function(result){
     var menu_data=result.data;
     var founditems=[];
   menu_data.menu_items.forEach(function(i){
   if(i.short_name.indexOf(search)!=-1){
     founditems.push({
   name:i.name,
   short_name:i.short_name,
   description:i.description
     });
   }
   });
 }
};

})();
