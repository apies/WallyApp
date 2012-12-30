(function() {
  'use strict';

  var BlogHomeControl;

  BlogHomeControl = function($scope, BloggerBlog, $routeParams) {
    return BloggerBlog.find($routeParams.blogId).then(function(blogg) {
      return $scope.blog = blogg;
    });
  };

  angular.module('WallyApp').controller('BlogHomeCtrl', ['$scope', 'BloggerBlog', '$routeParams', BlogHomeControl]);

}).call(this);
