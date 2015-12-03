'use strict';

describe('Service: studiodb', function () {

  // load the service's module
  beforeEach(module('bikramAltApp'));

  // instantiate service
  var studiodb;
  beforeEach(inject(function (_studiodb_) {
    studiodb = _studiodb_;
  }));

  it('should do something', function () {
    expect(!!studiodb).toBe(true);
  });

});
