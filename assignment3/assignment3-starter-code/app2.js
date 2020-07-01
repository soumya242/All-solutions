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
},
controller:NarrowItDownController,
controllerAs:'list',
bindToController:true
};
return ddo;
}

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
var list=this;
list.search="";
list.founditems="";


list.removeItem=function(itemIndex){
  list.founditems.splice(itemIndex,1);
};

list.narrow=function(){

  list.nothingfound="";
if(list.search){
    var promise = MenuSearchService.getMatchedMenuItems(list.search.toLowerCase());
    promise.then(function (founditems) {
       if(founditems.length==0)
       {
         list.nothingfound="Nothing Found";
       }
        list.founditems=founditems;
    }) }
    else{
      list.nothingfound="Nothing Found";
      list.founditems="";
    }

};
};

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http,ApiBasePath){
  var service=this;

  service.getMatchedMenuItems = function (search) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response.then(function(result){
 var menu_data=result.data;
 var founditems=[];
menu_data.menu_items.forEach(function(i){
if(i.description.indexOf(search)!=-1){
  founditems.push({
name:i.name,
short_name:i.short_name,
description:i.description
  });
}
});
return founditems;
});
  };
  }
})();
