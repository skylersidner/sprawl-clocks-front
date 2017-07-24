'use strict';

describe('Service: clocksService', function () {

  // load the service's module
  beforeEach(module('sprawlClocksFrontApp'));

  // instantiate service
  var clocksService;
  beforeEach(inject(function (_clocksService_) {
    clocksService = _clocksService_;
  }));

  it('should do something', function () {
    expect(!!clocksService).toBe(true);
  });

});
