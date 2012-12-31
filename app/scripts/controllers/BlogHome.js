(function() {
  'use strict';

  var BlogHomeControl;

  BlogHomeControl = function($scope, BloggerBlog, $routeParams) {
    return $scope.blog = BloggerBlog.find($routeParams.blogId);
  };

  angular.module('WallyApp').controller('BlogHomeCtrl', ['$scope', 'BloggerBlog', '$routeParams', BlogHomeControl]);

}).call(this);
