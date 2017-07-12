'use strict';

/**
 * @ngdoc overview
 * @name sprawlClocksFrontApp
 * @description
 * # sprawlClocksFrontApp
 *
 * Main module of the application.
 */
angular
  .module('sprawlClocksFrontApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        templateUrl: '404.html'
      });
  });
