'use strict';
/**
 * Created by Shtav on 11/17/14.
 */
var app = angular.module('tggApp');

app.directive('level', function() {
  return {
    restrict: 'AE',
    replace:true,
    scope:{level:'='},
    template: '<div><select ng-model="level" ng-options="level for level in range">'+
      '<option value="">Choose your level:</option> <!-- default --></select></div>',
    link:function(scope){
      scope.range = [1,2,3,4,5];
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
      scope.player = {level:0, health:0, attack:function(){return (this.level*5+20)*Math.random();}};
      scope.player.health = scope.player.level*10+50;
      scope.report = function(message){
        console.log(message);
      };
    }
  };
});