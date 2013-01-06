(function() {
  'use strict';

  describe('Controller: BlogHomeCtrl', function() {
    var $httpBackend, BlogHomeCtrl, scope;
    beforeEach(module('WallyApp'));
    BlogHomeCtrl = {};
    scope = {};
    $httpBackend = {};
    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.whenGET('api/blogs/1.json').respond({
        name: 'QLH'
      });
      $httpBackend.whenGET('api/blogs/1/posts.json').respond([
        {
          id: 1,
          title: 'QLH Post 1'
        }, {
          id: 2,
          title: 'QLH Post 2'
        }
      ]);
      $httpBackend.whenGET('api/blogs/1/posts/1.json').respond({
        title: 'QLH Post 1'
      });
      $httpBackend.whenGET('api/blogs/1/posts/2.json').respond({
        title: 'QLH Post 2'
      });
      $routeParams.blogId = 1;
      scope = $rootScope.$new();
      BlogHomeCtrl = $controller('BlogHomeCtrl', {
        $scope: scope
      });
      return $httpBackend.flush();
    }));
    it('should have all the blogs details on the blog model', function() {
      return expect(scope.blog.name).toBe('QLH');
    });
    it('should contain the posts for said blog', function() {
      expect(scope.posts.length).toBe(2);
      return expect(scope.posts[0].title).toBe('QLH Post 1');
    });
    it('should be able to select a post', function() {
      scope.selectPost(scope.posts[0]);
      $httpBackend.flush();
      return expect(scope.selectedPost.title).toBe(scope.posts[0].title);
    });
    return it('when i select a post old selected post is no longer active', function() {
      scope.selectPost(scope.posts[0]);
      expect(scope.posts[0].active).toBe('active');
      scope.selectPost(scope.posts[1]);
      expect(scope.posts[0].active).toBe('');
      return expect(scope.posts[1].active).toBe('active');
    });
  });

}).call(this);
