'use strict';
/**
 * Created by Shtav on 11/17/14.
 */
var app = angular.module('tggApp');

app.directive('level', function() {
  return {
    restrict: 'AE',
    replace:true,
    scope:{playerStats:'='},
    template: '<div><select ng-model="level" ng-change="update(level)" ng-options="level for level in range">'+
      '<option value="">Choose your level:</option> <!-- default --></select></div>',
    link:function($scope){
      $scope.range = [1,2,3,4,5];
      $scope.playerStats = {level: 0, health:0, attack:function(){return null}};
      $scope.update = function(val){
        $scope.level = val;
        $scope.playerStats.level = val;
        $scope.playerStats.health = val*10+50;
        $scope.playerStats.attack = function(){return (val*5+20)*Math.random();};
      };
    }
  };
});
app.directive('player', function() {
  return {
    restrict: 'AE',
    replace:true,
    scope:{ player:'=' },
    templateUrl: 'views/templates/player.html',
    link:function(scope){

      scope.report = function(message){
        console.log(message);
      };
    }
  };
});