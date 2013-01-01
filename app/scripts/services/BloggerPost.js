(function() {
  'use strict';

  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  angular.module('WallyAppServices2', ['OrmServiceModule']).factory('BloggerPost', [
    '$http', 'BloggerModel', function($http, BloggerModel) {
      var BloggerPost;
      return BloggerPost = (function(_super) {

        __extends(BloggerPost, _super);

        function BloggerPost() {
          return BloggerPost.__super__.constructor.apply(this, arguments);
        }

        BloggerPost.find = function(_arg) {
          var blogId, post, postId;
          blogId = _arg.blogId, postId = _arg.postId;
          post = new BloggerPost;
          $http.get("api/blogs/" + blogId + "/posts/" + postId + ".json").then(function(response) {
            return post.instantiate(response.data);
          });
          return post;
        };

        BloggerPost.all = function(blogId) {
          var posts;
          posts = [];
          $http.get("api/blogs/" + blogId + "/posts.json").then(function(response) {
            var post, _i, _len, _ref, _results;
            _ref = response.data;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              post = _ref[_i];
              _results.push(posts.push(post));
            }
            return _results;
          });
          return posts;
        };

        BloggerPost.prototype.say = function() {
          return "Hello " + this.title;
        };

        return BloggerPost;

      })(BloggerModel);
    }
  ]);

}).call(this);
