'use strict';

/**
 * @ngdoc service
 * @name sprawlClocksFrontApp.clocksService
 * @description
 * # clocksService
 * Service in the sprawlClocksFrontApp.
 */
angular.module('sprawlClocksFrontApp')
  .service('clocksService', function () {

    this.clocks = [
      {
        'id':0,
        'realm':{
          'id':0,
          'name':'Corporate'
        },
        'name':'Example Corporate Clock 1',
        'countdown':{
          'id':0,
          'value':'1200'
        },
        'description':'This is an example'
      },
      {
        'id':1,
        'realm':{
          'id':0,
          'name':'Corporate'
        },
        'name':'Example Corporate Clock 2',
        'countdown':{
          'id':1,
          'value':'1500'
        },
        'description':'This is another example'
      },
      {
        'id':2,
        'realm':{
          'id':1,
          'name':'Threat'
        },
        'name':'Example Threat Clock 1',
        'countdown':{
          'id':2,
          'value':'2100'
        },
        'description':'This is still another example'
      }
    ];

    this.getClocks = function() {
      return this.clocks;
    };
  });
