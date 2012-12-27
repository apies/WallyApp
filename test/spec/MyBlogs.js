(function() {
  'use strict';

  describe('Controller: MyBlogsCtrl', function() {
    var MyBlogsCtrl, scope;
    beforeEach(module('WallyApp'));
    MyBlogsCtrl = {};
    scope = {};
    beforeEach(inject(function($controller) {
      scope = {};
      return MyBlogsCtrl = $controller('MyBlogsCtrl', {
        $scope: scope
      });
    }));
    return it('should attach a list of awesomeThings to the scope', function() {
      return expect(scope.awesomeThings.length).toBe(3);
    });
  });

}).call(this);
