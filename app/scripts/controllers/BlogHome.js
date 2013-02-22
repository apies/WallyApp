(function() {
  'use strict';

  var BlogHomeControl;

  BlogHomeControl = function($scope, BloggerBlog, BloggerPost, $routeParams) {
    $scope.blog = BloggerBlog.find($routeParams.blogId);
    $scope.posts = BloggerPost.all($routeParams.blogId);
    $scope.selectPost = function(post) {
      var sPost, _i, _len, _post, _ref;
      _ref = $scope.posts;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        _post = _ref[_i];
        _post.active = '';
      }
      post.active = 'active';
      sPost = BloggerPost.find({
        blogId: $routeParams.blogId,
        postId: post.id
      });
      return $scope.selectedPost = sPost;
    };
    return $scope.orderByComments = function() {
      return $scope.orderProp = 'totalComments';
    };
  };

  angular.module('WallyApp').controller('BlogHomeCtrl', ['$scope', 'BloggerBlog', 'BloggerPost', '$routeParams', BlogHomeControl]);

}).call(this);
