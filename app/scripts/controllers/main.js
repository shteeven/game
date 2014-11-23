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
    nextTurn();
  }
  function resetGame(){
    $scope.player1Reset();
    $scope.player2Reset();
    $scope.gameStarted = false;
    $scope.offense = undefined;
    $scope.defense = undefined;
    $scope.winner = undefined;
  }
  function nextTurn(){
    if (!$scope.offense){
      if (Math.random() >= 0.5){
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
  function executeAttack(){
    $scope.defense.attacked($scope.offense.attack());
    if ($scope.defense.health <= 0) {
      $scope.winner = $scope.offense;
      $scope.defense.health = 0;
    }else{
      nextTurn();
    }
  }
  function report(message){
    console.log(message);
  }

  $scope.report = report;
  $scope.startGame = startGame;
  $scope.resetGame = resetGame;
  $scope.executeAttack = executeAttack;



}]);
