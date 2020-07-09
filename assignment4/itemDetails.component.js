(function () {
'use strict';

angular.module('ShoppingList')
.component('itemDetails', {
  templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
  bindings: {
    founditems: '<'
  }
});

})();
