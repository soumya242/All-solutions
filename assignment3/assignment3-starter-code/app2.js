(function(){
'use strict';
angular.module("NarrowItDownApp",[])
.controller("NarrowItDownController",NarrowItDownController)
.service("MenuSearchService",MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('founditems',Founditems);

function Founditems(){
var ddo={
templateUrl:"found.html",
scope:{
  founditems:'<',
  onRemove:'&'
}
};
return ddo;
}
NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
var list=this;
list.search="";
list.founditems=[];

list.removeItem=function(itemIndex){
  service.removeItem(itemIndex);
};

list.narrow=function(search){
  var promise = MenuSearchService.getMenuCategories();
  promise.then(function (response) {
    list.founditems = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

for(var i=0;i<list.founditems.length; i++){
  if(list.founditems[i].description==search){
  founditems.push(c[i]);
  }
  else{
  console.log("It is not working");
}
};
};
}
MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http,ApiBasePath){
  var service=this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response;
  };
service.removeItem=function(itemIndex){
  founditems.splice(itemIndex,1);
};


  }
})();
