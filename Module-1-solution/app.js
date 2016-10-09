(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.menuItems = "";
  $scope.favoriteFood = function () {
  		if ($scope.menuItems){
  		var food = splitString($scope.menuItems);
   		if (food <= 3 && food > 0) {$scope.message = "Enjoy!";}
   		if (food > 3)               {$scope.message = "Too much!";}
   		$scope.number = food;
 }else{
     $scope.message = "Please enter data first";
     $scope.number = food = 0;
   }



   splitString.inject = ['$scope'];
   function splitString(stringToSplit) {
     var arrayOfStrings = stringToSplit.split(',');
     var food = 0
     for (var i = 0; i < arrayOfStrings.length; i++){
       if (!(arrayOfStrings[i].length == 0 || !arrayOfStrings[i].trim())){
         food++;
       }
     }
     return food;
   };
 };
}
})();
