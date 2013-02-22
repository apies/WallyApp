(function() {
  'use strict';

  describe('Controller: BlogHomeCtrl', function() {
    var $httpBackend, BlogHomeCtrl, scope;
    beforeEach(module('WallyApp'));
    BlogHomeCtrl = {};
    scope = {};
    $httpBackend = {};
    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      var postFixture1, postFixture2, postFixture3;
      $httpBackend = _$httpBackend_;
      postFixture1 = {
        id: "106129962369819294",
        title: "Happy Valentine's Day!",
        replies: {
          totalItems: 3
        }
      };
      postFixture2 = {
        id: "206129962369234564",
        title: "I Love Pizza!",
        replies: {
          totalItems: 7
        }
      };
      postFixture3 = {
        id: "306962365204234564",
        title: "Wedding Photos!",
        replies: {
          totalItems: 37
        }
      };
      $httpBackend.whenGET('api/blogs/1.json').respond({
        name: 'QLH'
      });
      $httpBackend.whenGET('api/blogs/1/posts.json').respond([postFixture1, postFixture2, postFixture3]);
      $httpBackend.whenGET('api/blogs/1/posts/106129962369819294.json').respond(postFixture1);
      $httpBackend.whenGET('api/blogs/1/posts/206129962369234564.json').respond(postFixture2);
      $httpBackend.whenGET('api/blogs/1/posts/306962365204234564.json').respond(postFixture3);
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
      expect(scope.posts.length).toBe(3);
      return expect(scope.posts[0].title).toBe('Happy Valentine\'s Day!');
    });
    it('should be able to select a post', function() {
      scope.selectPost(scope.posts[0]);
      $httpBackend.flush();
      return expect(scope.selectedPost.title).toBe(scope.posts[0].title);
    });
    it('when i select a post old selected post is no longer active', function() {
      scope.selectPost(scope.posts[0]);
      expect(scope.posts[0].active).toBe('active');
      scope.selectPost(scope.posts[1]);
      expect(scope.posts[0].active).toBe('');
      return expect(scope.posts[1].active).toBe('active');
    });
    return it('can order the posts by the number of comments', function() {
      scope.orderByComments();
      return expect(scope.orderProp).toBe('totalComments');
    });
  });

}).call(this);
