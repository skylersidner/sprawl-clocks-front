'use strict';

/**
 * @ngdoc function
 * @name sprawlClocksFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sprawlClocksFrontApp
 */
angular.module('sprawlClocksFrontApp')
  .controller('mainCtrl', ['clocksService', function (clocksService) {

    this.test = 'Hello World';

    this.clocks = clocksService.getClocks();

    this.setClockRealmType = function (realmType) {
      return {
        corporate: (realmType === 'Corporate'),
        threat: (realmType === 'Threat')
      };
    };


  }]);
