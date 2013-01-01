(function() {
  'use strict';

  var BlogHomeControl;

  BlogHomeControl = function($scope, BloggerBlog, $routeParams) {
    $scope.blog = BloggerBlog.find($routeParams.blogId);
    return console.log($scope.blog);
  };

  angular.module('WallyApp').controller('BlogHomeCtrl', ['$scope', 'BloggerBlog', '$routeParams', BlogHomeControl]);

}).call(this);
