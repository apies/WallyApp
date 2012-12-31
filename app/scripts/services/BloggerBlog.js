(function() {
  'use strict';

  var BloggerBlogModel;

  BloggerBlogModel = function($http, $q, $rootScope) {
    var BloggerBlog;
    BloggerBlog = function(data) {
      return angular.extend(this, data);
    };
    BloggerBlog.all = function() {
      var result;
      result = [];
      $http.get("api/blogs.json").then(function(response) {
        var blog, _i, _len, _ref, _results;
        _ref = response.data;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          blog = _ref[_i];
          _results.push(result.push(blog));
        }
        return _results;
      });
      return result;
    };
    BloggerBlog.find = function(blogId) {
      var blog, result;
      result = {};
      blog = new BloggerBlog(result.blog);
      $http.get("api/blogs/" + blogId + ".json").then(function(response) {
        return blog.instantiate(response.data);
      });
      return blog;
    };
    BloggerBlog.prototype.say = function() {
      return "Hello " + this.name;
    };
    BloggerBlog.prototype.instantiate = function(data) {
      return angular.extend(this, data);
    };
    return BloggerBlog;
  };

  angular.module('WallyAppServices', []).factory('BloggerBlog', ['$http', '$q', BloggerBlogModel]);

}).call(this);
