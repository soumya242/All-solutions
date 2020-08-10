(function () {
"use strict";
angular.module('public')

.controller('SignUpController', SignUpController);
SignUpController.$inject=['MenuService'];
function SignUpController(MenuService) {
   var vm = this;
  vm.user={};
  vm.dish={};
 vm.showMessage=false;
 vm.showError=false;

 vm.signup=function(form){
   vm.showMessage=false;
   vm.showError=false;
  if(form.$invalid){
    console.log("form not valid");
    return;
  }

  MenuService.getFavoriteDish(vm.dish).then(function(response) {
      vm.user.favoriteDishDetails = response.data;
      console.log(vm.user.dish);
      MenuService.saveUser(vm.user);
      vm.showMessage = true;
  }, function(error) {
      console.log(error);
      vm.showError = true;
  });

 }
  };



})();
