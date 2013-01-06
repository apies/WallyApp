(function() {
  'use strict';

  describe('Service: FayeBroker', function() {
    var $httpBackend, FayeBroker;
    beforeEach(module('FayeService'));
    FayeBroker = {};
    $httpBackend = {};
    beforeEach(inject(function(_FayeBroker_, _$httpBackend_, $rootScope) {
      var scope;
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      return FayeBroker = _FayeBroker_;
    }));
    return it('should be able to instantiate itself', function() {
      var service;
      service = new FayeBroker({
        name: 'PIES'
      });
      return expect(service.name).toBe('PIES');
    });
  });

}).call(this);
