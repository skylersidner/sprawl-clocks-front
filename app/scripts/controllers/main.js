'use strict';

/**
 * @ngdoc function
 * @name sprawlClocksFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sprawlClocksFrontApp
 */
angular.module('sprawlClocksFrontApp')
  .controller('mainCtrl', function () {

    this.test = 'Hello World';

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

    this.setClockRealmType = function (realmType) {
      return {
        corporate: (realmType === 'Corporate'),
        threat: (realmType === 'Threat')
      };
    };


  });
