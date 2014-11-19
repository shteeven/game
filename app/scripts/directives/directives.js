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
        $scope.playerStats.attack = function(){return (val*2+3*Math.random()+15*Math.random())};
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
    link:function($scope){
      $scope.attacked = function(hit){
        $scope.playerStats.health -= hit;
      };
      $scope.attack = function(){
        $scope.latestAttack = $scope.playerStats.attack();
      };
      $scope.player = {name:$scope.name, stats:$scope.playerStats};
      $scope.player.name = $scope.name;

      $scope.report = function(){
        console.log($scope.name);
      };
    }
  };
});