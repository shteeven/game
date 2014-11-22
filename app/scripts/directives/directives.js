'use strict';
/**
 * Created by Shtav on 11/17/14.
 */
var app = angular.module('tggApp');

app.directive('player', function() {
  return {
    restrict: 'AE',
    replace:true,
    scope:{ playerStats:'=' },
    templateUrl: 'views/templates/player.html',
    link:function($scope){

      $scope.range = [1,2,3,4,5];
      $scope.playerStats = {
        level: 0,
        health:0,
        lastAttack:0,
        attack:function(){return null;},
        attacked:function(hit){return null;}
      };


      function update(val){
        $scope.playerStats.level = val;
        $scope.playerStats.health = val*10+50;
        $scope.playerStats.attack = function(){return Math.round(val*3+2*Math.random()+15*Math.random());};
        $scope.playerStats.attacked = function(hit){ $scope.playerStats.health -= hit; }

      }
      function attack(){
        $scope.latestAttack = $scope.playerStats.attack();
      }

      $scope.attack = attack;
      $scope.update = update;
    }
  };
});