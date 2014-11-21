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
  $scope.gameStarted = false;

  function startGame(){
    $scope.gameStarted = true;
  }
  function nextTurn(){
    if (!$scope.offense){
      if (Math.random >= .5){
        $scope.offense = $scope.player1;
        $scope.defense = $scope.player2;
      }else{
        $scope.offense = $scope.player2;
        $scope.defense = $scope.player1;
      }
    }else{
      var placeHolder = $scope.defense;
      $scope.defense = $scope.offense;
      $scope.offense = placeHolder;
    }
  }

  function report(message){
    console.log(message);
  }

  $scope.startGame = startGame;
  $scope.report = report;
  $scope.nextTurn = nextTurn;



}]);
