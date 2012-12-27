(function() {
  'use strict';

  var BloggerBlogModel;

  BloggerBlogModel = function($resource) {
    return $resource('blogs/:blogId.json', {}, {
      query: {
        method: 'GET',
        params: {
          blogId: 'blogs'
        },
        isArray: 'true'
      }
    });
  };

  angular.module('WallyAppServices', ['ngResource']).factory('BloggerBlog', ['$resource', BloggerBlogModel]);

}).call(this);
