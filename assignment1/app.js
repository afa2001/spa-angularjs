(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('Assignment1Controller', Assignment1Controller);

Assignment1Controller.$inject = ['$scope', '$filter'];
function Assignment1Controller($scope, $filter) {
  $scope.lunchItems = "";
  $scope.boarder = "black";

  $scope.checkLunch = function () {
    if(!$scope.lunchItems.trim())
    {
        $scope.lunchAdvice='Please enter data first';
        $scope.msgColor="red";
        $scope.boarder="red";
        console.log("Please enter data first");
    }
    else {

      var lunchItem = $scope.lunchItems.split(',');
      var validEntries = 0;
      //loop through the array to count only the number of non-empty/null elements
      for(var i = 0; i < lunchItem.length; i++)
      {
        if(lunchItem[i].trim())
        {
          validEntries++;
        }
      }
      console.log(validEntries);
      if(validEntries <= 3)
      {
        $scope.lunchAdvice='Enjoy!';
        console.log('Enjoy!');
      }
      else {
        console.log('Too much!');
        $scope.lunchAdvice="Too much!";
      }
      $scope.msgColor="green";
      $scope.boarder="green";
    }
  };
}

})();
