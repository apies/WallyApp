(function() {
  'use strict';

  var BloggerBlogModel;

  BloggerBlogModel = function($http, $q, $scope) {
    var BloggerBlog;
    BloggerBlog = function(data) {
      return angular.extend(this, data);
    };
    BloggerBlog.find = function(blogId) {
      return $http.get("api/blogs/" + blogId + ".json").then(function(response) {
        return new BloggerBlog(response.data);
      });
    };
    BloggerBlog.all = function() {
      return $http.get("api/blogs.json").then(function(response) {
        return response.data;
      });
    };
    BloggerBlog.prototype.say = function() {
      return "Hello " + this.name;
    };
    return BloggerBlog;
  };

  angular.module('WallyAppServices', []).factory('BloggerBlog', ['$http', '$q', BloggerBlogModel]);

}).call(this);
