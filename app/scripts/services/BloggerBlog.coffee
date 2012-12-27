'use strict';

BloggerBlogModel = ($resource) ->
  $resource('blogs/:blogId.json', {}, {query: { method: 'GET', params: {blogId: 'blogs' },isArray: 'true'}})


angular.module('WallyAppServices', ['ngResource']).factory('BloggerBlog', ['$resource',  BloggerBlogModel])

