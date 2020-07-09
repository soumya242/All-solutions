/*(function () {
'use strict';

angular.module('ShoppingList')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['ShoppingListService', 'items'];
function MainShoppingListController(ShoppingListService, items) {
  var mainList = this;
  mainList.items = items;
}

})();
*/
(function () {
'use strict';

angular.module('ShoppingList')
.controller('MainCategoryController', MainCategoryController);
MainCategoryController.$inject = ['ShoppingListService', 'items'];
function MainCategoryController(ShoppingListService, items) {
  var categories = this;
  categories.items = items;
}
})();
