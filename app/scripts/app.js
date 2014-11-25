'use strict';

/**
 * @ngdoc overview
 * @name tggApp
 * @description
 * # tggApp
 *
 * Main module of the application.
 */
var app = angular
  .module('tggApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

app.run(function($rootScope, $log){
  $rootScope.$log = $log.debug;
});