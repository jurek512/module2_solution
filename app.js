(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyShoppingController', ToBuyListController)
.controller('AlreadyBoughtShoppingController', BoughtListController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyListController.$inject = ['$scope', 'ShoppingListCheckOffService'];

function ToBuyListController($scope, BuyingService) {
  $scope.items = BuyingService.getItemsToBuy();
  $scope.bought = BuyingService.addToBought;
}

BoughtListController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function BoughtListController($scope, BuyingService) {
  $scope.items = BuyingService.getItemsBought();
}

function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [{'name':'cookies','quantity':1},{'name':'drinks','quantity':2},{'name':'candy','quantity':3}];
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
