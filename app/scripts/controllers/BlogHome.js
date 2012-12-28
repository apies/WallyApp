(function() {
  'use strict';

  var BlogHomeControl;

  BlogHomeControl = function($scope, BloggerBlog, $routeParams) {
    return $scope.blog = BloggerBlog.get({
      blogId: $routeParams.blogId
    }, function(blogg) {
      return console.log(blogg);
    });
  };

  angular.module('WallyApp').controller('BlogHomeCtrl', ['$scope', 'BloggerBlog', '$routeParams', BlogHomeControl]);

}).call(this);
