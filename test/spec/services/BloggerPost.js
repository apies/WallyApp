(function() {
  'use strict';

  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  describe('Service: BloggerPost', function() {
    var $httpBackend, BloggerModel, BloggerPost, postParams;
    beforeEach(module('WallyAppServices2'));
    BloggerPost = {};
    $httpBackend = {};
    BloggerModel = {};
    postParams = {};
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
      postParams = {
        id: '1',
        blog: {
          id: '2360593805083673688'
        },
        title: 'Quiet Like Horses Post2',
        content: "<img border=\"0\" height=\"214\" src=\"http://4.bp.blogspot.com/-DVkPAZvmdsk/T5DgSvXY8PI/AAAAAAAANSE/N4eEtvPsyFI/s320/whaley.jpg\" width=\"320\" />"
      };
      return $httpBackend.whenGET('api/blogs/2360593805083673688/posts/1.json').respond(postParams);
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
      return expect(post.title).toBe('Quiet Like Horses Post2');
    });
    it('can it extend BloggerModel', function() {
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
    return it('can send restful put updates to save to server', function() {
      var post, word;
      post = BloggerPost.find({
        blogId: '2360593805083673688',
        postId: 1
      });
      $httpBackend.flush();
      $httpBackend.expectPUT('api/blogs/2360593805083673688/posts/1.json', postParams).respond(postParams);
      post['title'] = ((function() {
        var _i, _len, _ref, _results;
        _ref = post['title'].split(/\s+/);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          word = _ref[_i];
          _results.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
        }
        return _results;
      })()).join(' ');
      return post.updateAttributes();
    });
  });

}).call(this);
