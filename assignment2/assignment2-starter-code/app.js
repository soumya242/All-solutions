(function () {
'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController ',ToBuyController )
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListService',ShoppingListService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var list1 = this;
list1.items = ShoppingListService.getItems();

  list1.removeItem = function (itemIndex) {
  ShoppingListService.removeItem(itemIndex);
  ShoppingListService.addItem(listofitems2[itemIndex].name,listofitems2[itemIndex].quantity);
}
}

// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var list2 = this;
  list2.items = ShoppingListService.getItems2();

  list2.itemName = "";
  list2.itemQuantity = "";

  list2.addItem = function () {
    try {
      ShoppingListService.addItem(list2.itemName, list2.itemQuantity);
    } catch (error) {
      list2.errorMessage = error.message;
    }

  }
}
// If not specified, maxItems assumed unlimited
function ShoppingListService() {
  var service = this;
  var listofitems=[{ name:"cookies",
      quantity:"10"
    },
    {
      name:"Drinka",
      quantity:"10"
    },
    {
      name:"chocos",
      quantity:"10"
    },
    {
      name:"chips",
      quantity:"10"
    },
    {
      name:"pastries",
      quantity:"10"
    },
  ];
var listofitems2=[];
 service.addItem = function (itemName, quantity) {
      var item = {
        name:itemName,
        quantity: quantity
      };
      listofitems2.push(item);
    }
 service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return listofitems;
  };

  service.getItems2 = function () {
    return listofitems2;
  };
};

})();
