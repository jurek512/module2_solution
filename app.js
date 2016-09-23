(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyShoppingController', ToBuyListController)
.controller('AlreadyBoughtShoppingController', BoughtListController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyListController.$inject = ['ShoppingListCheckOffService'];

function ToBuyListController(BuyingService) {
  var ctrl1 = this;
  ctrl1.items = BuyingService.getItemsToBuy();
  ctrl1.bought = BuyingService.addToBought;
}

BoughtListController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function BoughtListController($scope, BuyingService) {
  var ctrl2 = this;
  ctrl2.items = BuyingService.getItemsBought();
}

function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [{'name':'cookies','quantity':1},
  {'name':'drinks','quantity':2},
  {'name':'candy','quantity':3},
  {'name':'sugar','quantity':7},
  {'name':'oranges','quantity':10}
  ];

  var itemsBought = [];

  service.getItemsToBuy = function() {
    return itemsToBuy;
  };

  service.getItemsBought = function() {
    return itemsBought;
  };

  service.addToBought = function(index) {
    var bought = itemsToBuy[index];
    itemsToBuy.splice(index, 1);
    itemsBought.push(bought);
  };
}

})();
