(function() {
  'use strict';

  describe('Controller: BlogHomeCtrl', function() {
    var BlogHomeCtrl, scope;
    beforeEach(module('WallyApp'));
    BlogHomeCtrl = {};
    scope = {};
    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      var $httpBackend;
      $httpBackend = _$httpBackend_;
      $httpBackend.whenGET('api/blogs/1.json').respond({
        name: 'QLH'
      });
      $routeParams.blogId = 1;
      scope = $rootScope.$new();
      BlogHomeCtrl = $controller('BlogHomeCtrl', {
        $scope: scope
      });
      return $httpBackend.flush();
    }));
    return it('should have all the blogs details on the blog model', function() {
      return expect(scope.blog.name).toBe('QLH');
    });
  });

}).call(this);
