( function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController)
  LunchCheckController.$inject=[$scope];
  function LunchCheckController($scope){
    $scope.name;
$scope.count=function(){
  $scope.words=[];
  var words=$scope.name.split(',');
  var i=words.length;
  if(i>0&&i<=3 && $scope.name!="" /*&& $scope.name.trim()*/){
    $scope.name="Enjoy!";
  }
  else if(i>3 && $scope.name!="" /*&& $scope.name.trim()*/){
    $scope.name="Too Much!";
  }
else{
  $scope.name="Please enter data first";
}
};
  }

})()
