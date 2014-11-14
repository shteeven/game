'use strict';

/**
 * @ngdoc function
 * @name gameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gameApp
 */
angular.module('gameApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
