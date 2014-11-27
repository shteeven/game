'use strict';
/**
 * Created by Shtav on 11/17/14.
 */
var app = angular.module('tggApp');

app.directive('player', function() {
  return {
    restrict: 'AE',
    replace:true,
    scope:{
      playerStats:'=',
      reset: '=',
      name: '='
    },
    templateUrl: 'views/templates/player.html',
    link:function($scope){
      $scope.range = [1,2,3,4,5];

      function reset(){
        $scope.playerStats = {
          level: 0,
          health:0,
          maxHealth:0,
          name: $scope.name,
          attack:function(){return null;},
          attacked:function(){return null;}
        };
        $scope.level = undefined;
        $scope.lastAttack = 0;
      }
      function update(val){
        $scope.playerStats.level = val;
        $scope.playerStats.health = val*10+50;
        $scope.playerStats.maxHealth = val*10+50;
        $scope.playerStats.attack = function(){
          $scope.lastAttack = Math.round(val*3+2*Math.random()+15*Math.random());
          return $scope.lastAttack;
        };
        $scope.playerStats.attacked = function(hit){ $scope.playerStats.health -= hit; };
      }
      $scope.reset = reset;
      $scope.update = update;
    }
  };
});