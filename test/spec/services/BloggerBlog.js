(function() {
  'use strict';

  describe('Service: BloggerBlog', function() {
    var $httpBackend, BloggerBlog;
    beforeEach(module('WallyAppServices'));
    BloggerBlog = {};
    $httpBackend = {};
    beforeEach(inject(function(_BloggerBlog_, _$httpBackend_, $rootScope) {
      var scope;
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      BloggerBlog = _BloggerBlog_;
      $httpBackend.whenGET('blogs/blogs.json').respond([
        {
          name: 'QLH'
        }, {
          name: 'LLB'
        }
      ]);
      return $httpBackend.whenGET('blogs/1.json').respond({
        name: 'Quiet Like Horses'
      });
    }));
    it('should fetch 2 blogs from XHR', function() {
      var blogs;
      blogs = BloggerBlog.query();
      $httpBackend.flush();
      expect(blogs.length).toBe(2);
      return expect(blogs[0].name).toBe('QLH');
    });
    return it('should fetch one blog from XHR by id', function() {
      var blog;
      return blog = BloggerBlog.get({
        blogId: 1
      }, function(blog) {
        return expect(blog.name).toBe('Quiet Like Horses');
      });
    });
  });

}).call(this);
