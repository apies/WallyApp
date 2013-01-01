(function() {
  'use strict';

  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  describe('Service: BloggerPost', function() {
    var $httpBackend, BloggerModel, BloggerPost;
    beforeEach(module('WallyAppServices2'));
    BloggerPost = {};
    $httpBackend = {};
    BloggerModel = {};
    beforeEach(inject(function(_BloggerPost_, _$httpBackend_, _BloggerModel_) {
      $httpBackend = _$httpBackend_;
      BloggerPost = _BloggerPost_;
      BloggerModel = _BloggerModel_;
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
    it('should fetch 2 posts from XHR', function() {
      var posts;
      posts = BloggerPost.all('2360593805083673688');
      $httpBackend.flush();
      expect(posts.length).toBe(2);
      return expect(posts[0].title).toBe('Post 1');
    });
    it('should fetch one post from XHR by id', function() {
      var post;
      post = BloggerPost.find({
        blogId: '2360593805083673688',
        postId: 1
      });
      $httpBackend.flush();
      expect(post.title).toBe('Quiet Like Horses Post2');
      return expect(post.say()).toBe('Hello Quiet Like Horses Post2');
    });
    return it('can it extend BloggerModel', function() {
      var BloggerThing, thing;
      BloggerThing = (function(_super) {

        __extends(BloggerThing, _super);

        function BloggerThing() {
          return BloggerThing.__super__.constructor.apply(this, arguments);
        }

        BloggerThing.prototype.thing = 'ALan';

        return BloggerThing;

      })(BloggerModel);
      thing = new BloggerThing({
        thingType: 'Blog'
      });
      return expect(thing.thingType).toBe('Blog');
    });
  });

}).call(this);
