(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.toBuyItems = ShoppingListService.getToBuyItems();
  
  itemAdder.update = function(itemIndex) {
    try {
      ShoppingListService.updateItem(itemIndex);
      itemAdder.toBuyItems = ShoppingListService.getToBuyItems();
      itemAdder.remains = itemAdder.toBuyItems.length;
      console.log(itemAdder.remains);
    }
    catch(error) {
      itemAdder.errorMessage = "Everything is bought";
    }
  }

  
}


AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var showList = this;

  

  showList.boughtItems = ShoppingListService.getBoughtItems();

}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [ 
    {
      name: "apple",
      quantity: 10
    },
    {
      name: "banana",
      quantity: 2
    },
    {
      name: "pear",
      quantity: 6
    },
    {
      name: "durian",
      quantity: 8
    },
    {
      name: "avocado",
      quantity: 1
    }

  ];

  var boughtItems = [

  ];

  service.updateItem = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };
}

})();
