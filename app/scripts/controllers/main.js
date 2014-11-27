'use strict';

/**
 * @ngdoc function
 * @name tggApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tggApp
 */
var app = angular.module('tggApp');

app.controller('MainCtrl', ['$scope', '$modal',
  function ($scope, $modal) {

    function startGame() {
      $scope.gameStarted = true;
      nextTurn();
    }

    function resetGame() {
      $scope.player1Reset();
      $scope.player2Reset();
      $scope.gameStarted = false;
      $scope.offense = undefined;
      $scope.defense = undefined;
      $scope.winner = undefined;
    }

    function nextTurn() {
      if (!$scope.offense) {
        if (Math.random() >= 0.5) {
          $scope.offense = $scope.player1;
          $scope.defense = $scope.player2;
        } else {
          $scope.offense = $scope.player2;
          $scope.defense = $scope.player1;
        }
      } else {
        var placeHolder = $scope.defense;
        $scope.defense = $scope.offense;
        $scope.offense = placeHolder;
      }
    }

    function executeAttack() {
      $scope.defense.attacked($scope.offense.attack());
      if ($scope.defense.health <= 0) {
        $scope.winner = $scope.offense;
        $scope.loser = $scope.defense;
        $scope.defense.health = 0;
        openModal();
      } else {
        nextTurn();
      }
    }

    function openModal() {
      var modalInstance = $modal.open({
        templateUrl: 'views/templates/winnerModal.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          item: function () {
            return resetGame;
          },
          winner: function () {
            return $scope.winner;
          }
        }
      });
      modalInstance.result.then(function (runFunction) {
        runFunction();
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    }

    $scope.openModal = openModal;
    $scope.startGame = startGame;
    $scope.resetGame = resetGame;
    $scope.executeAttack = executeAttack;
  }]);


app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, item, winner) {

  $scope.item = item;
  $scope.winner = winner;
  $scope.ok = function () {
    $modalInstance.close($scope.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});