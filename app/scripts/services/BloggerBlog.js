(function() {
  'use strict';

  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  angular.module('WallyAppServices', ['OrmServiceModule']).factory('BloggerBlog', [
    '$http', 'BloggerModel', function($http, BloggerModel) {
      var BloggerBlog;
      return BloggerBlog = (function(_super) {

        __extends(BloggerBlog, _super);

        function BloggerBlog() {
          return BloggerBlog.__super__.constructor.apply(this, arguments);
        }

        BloggerBlog.all = function() {
          var blogs;
          blogs = [];
          $http.get("api/blogs.json").then(function(response) {
            var params, _i, _len, _ref, _results;
            _ref = response.data;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              params = _ref[_i];
              _results.push(blogs.push(new BloggerBlog(params)));
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

        return BloggerBlog;

      })(BloggerModel);
    }
  ]);

}).call(this);
