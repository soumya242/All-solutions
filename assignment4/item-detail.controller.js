(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['ShoppingListService','$stateParams', 'items','founditems'];
function ItemDetailController(ShoppingListService,$stateParams, items,founditems) {
  var itemDetail = this;
  itemDetail.founditems = founditems;
}
})();
