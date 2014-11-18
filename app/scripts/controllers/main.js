'use strict';

/**
 * @ngdoc function
 * @name tggApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tggApp
 */
var app = angular.module('tggApp');

app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  $scope.report = function(message){
    console.log(message);
  };


  }]);
