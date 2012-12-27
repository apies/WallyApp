(function() {
  'use strict';

  describe('Controller: MyBlogsCtrl', function() {
    var MyBlogsCtrl, scope;
    beforeEach(module('WallyApp'));
    MyBlogsCtrl = {};
    scope = {};
    beforeEach(inject(function($controller, _$httpBackend_, $rootScope) {
      var $httpBackend;
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      $httpBackend.whenGET('blogs/blogs.json').respond([
        {
          name: 'QLH'
        }, {
          name: 'LLB'
        }
      ]);
      MyBlogsCtrl = $controller('MyBlogsCtrl', {
        $scope: scope
      });
      return $httpBackend.flush();
    }));
    it('should attach a list of awesomeThings to the scope', function() {
      return expect(scope.awesomeThings.length).toBe(3);
    });
    return it('should fetch a list of blogs from the BloggerBlog service', function() {
      expect(scope.blogs.length).toBe(2);
      return expect(scope.blogs[0].name).toBe('QLH');
    });
  });

}).call(this);
