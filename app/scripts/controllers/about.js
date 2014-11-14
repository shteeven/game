'use strict';

/**
 * @ngdoc function
 * @name gameApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gameApp
 */
angular.module('gameApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.num = 0;
    $scope.adding = function(){
      $scope.awesomeThings.push($scope.num);
      $scope.num++;
    };
  });
