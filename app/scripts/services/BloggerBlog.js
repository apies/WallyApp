(function() {
  'use strict';

  var BloggerBlogModel;

  BloggerBlogModel = function($http) {
    var BloggerBlog;
    return BloggerBlog = (function() {

      function BloggerBlog(data) {
        angular.extend(this, data);
      }

      BloggerBlog.all = function() {
        var blogs;
        blogs = [];
        $http.get("api/blogs.json").then(function(response) {
          var blog, _i, _len, _ref, _results;
          _ref = response.data;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            blog = _ref[_i];
            _results.push(blogs.push(blog));
          }
          return _results;
        });
        return blogs;
      };

      BloggerBlog.find = function(blogId) {
        var blog;
        blog = new BloggerBlog;
        $http.get("api/blogs/" + blogId + ".json").then(function(response) {
          return blog.instantiate(response.data);
        });
        return blog;
      };

      BloggerBlog.prototype.instantiate = function(data) {
        return angular.extend(this, data);
      };

      BloggerBlog.prototype.say = function(data) {
        return "Hello " + this.name;
      };

      return BloggerBlog;

    })();
  };

  angular.module('WallyAppServices', []).factory('BloggerBlog', ['$http', '$q', BloggerBlogModel]);

}).call(this);
