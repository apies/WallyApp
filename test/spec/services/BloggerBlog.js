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
      $httpBackend.whenGET('api/blogs.json').respond([
        {
          name: 'QLH'
        }, {
          name: 'LLB'
        }
      ]);
      return $httpBackend.whenGET('api/blogs/1.json').respond({
        name: 'Quiet Like Horses'
      });
    }));
    it('should fetch 2 blogs from XHR', function() {
      var blogs;
      blogs = BloggerBlog.all();
      $httpBackend.flush();
      expect(blogs[0].name).toBe('QLH');
      return expect(blogs[1].name).toBe('LLB');
    });
    return it('should fetch one blog from XHR the cool angular $resource way', function() {
      var blog;
      blog = BloggerBlog.find(1);
      $httpBackend.flush();
      return expect(blog.name).toBe('Quiet Like Horses');
    });
  });

}).call(this);
