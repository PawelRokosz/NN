    var app = angular.module('myApp', []);

    var List = angular.module('ShopingListApp', []);
    app.controller('ShopingListCtrl', function($scope) {
      $scope.products = ["Dobry humor", "Odwaga", "Zaufanie"];
      $scope.addItem = function() {
        if (!$scope.addProduct) {
          return;
        }
        if ($scope.products.indexOf($scope.addProduct) == -1) {
          $scope.products.push($scope.addProduct);
        }
      }
      $scope.removeItem = function(x) {
        $scope.errortext = "Usunięto element";
        $scope.products.splice(x, 1);
      }
    });
