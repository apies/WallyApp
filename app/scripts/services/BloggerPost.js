(function() {
  'use strict';

  var BloggerPostModel;

  BloggerPostModel = function($http) {
    var BloggerPost;
    return BloggerPost = (function() {
      var say;

      function BloggerPost(data) {
        angular.extend(this, data);
      }

      BloggerPost.find = function(_arg) {
        var blogId, post, postId;
        blogId = _arg.blogId, postId = _arg.postId;
        post = new BloggerPost();
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

      BloggerPost.prototype.instantiate = function(data) {
        return angular.extend(this, data);
      };

      say = function() {
        return "Hello " + this.title;
      };

      return BloggerPost;

    })();
  };

  angular.module('WallyAppServices').factory('BloggerPost', ['$http', BloggerPostModel]);

}).call(this);
