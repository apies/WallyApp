'use strict';

BloggerPostModel = ($resource) ->
  $resource('blogs/:blogId/posts/:postId.json', {}, {query: { method: 'GET', params: {postId: 'posts' },isArray: 'true'}})
  


angular.module('WallyAppServices').factory('BloggerPost', ['$resource',  BloggerPostModel])

