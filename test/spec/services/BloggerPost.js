(function() {
  'use strict';

  describe('Service: BloggerPost', function() {
    var $httpBackend, BloggerPost;
    beforeEach(module('WallyAppServices'));
    BloggerPost = {};
    $httpBackend = {};
    beforeEach(inject(function(_BloggerPost_, _$httpBackend_, $rootScope) {
      var scope;
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      BloggerPost = _BloggerPost_;
      $httpBackend.whenGET('api/blogs/2360593805083673688/posts.json').respond([
        {
          title: 'Post 1'
        }, {
          title: 'Post2'
        }
      ]);
      return $httpBackend.whenGET('api/blogs/2360593805083673688/posts/1.json').respond({
        title: 'Quiet Like Horses Post2'
      });
    }));
    iit('should fetch 2 posts from XHR', function() {
      BloggerPost.all('2360593805083673688').then(function(data) {
        var posts;
        posts = data;
        expect(posts.length).toBe(2);
        return expect(posts[0].title).toBe('Post 1');
      });
      return $httpBackend.flush();
    });
    return it('should fetch one blog from XHR by id', function() {
      return BloggerPost.find({
        blogId: '2360593805083673688',
        postId: 1
      }).then(function(blog) {
        return expect(blog.name).toBe('Quiet Like Horses');
      });
    });
  });

}).call(this);
