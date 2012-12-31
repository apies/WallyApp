(function() {
  'use strict';

  describe('Controller: MyBlogsCtrl', function() {
    var $httpBackend, MyBlogsCtrl, scope;
    beforeEach(module('WallyApp'));
    MyBlogsCtrl = {};
    scope = {};
    $httpBackend = {};
    beforeEach(inject(function($controller, _$httpBackend_, $rootScope) {
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      $httpBackend.whenGET('api/blogs.json').respond([
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
    it('should fetch a list of blogs from the BloggerBlog service', function() {
      expect(scope.blogs.length).toBe(2);
      return expect(scope.blogs[0].name).toBe('QLH');
    });
    return it('should be able to select a blog', function() {
      scope.selectBlog(scope.blogs[0]);
      return expect(scope.selectedBlog).toBe(scope.blogs[0]);
    });
  });

}).call(this);
