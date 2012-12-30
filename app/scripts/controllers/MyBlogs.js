(function() {
  'use strict';

  var MyBlogsControl;

  MyBlogsControl = function($scope, BloggerBlog) {
    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'AngularJS'];
    BloggerBlog.all().then(function(blogs) {
      return $scope.blogs = blogs;
    });
    return $scope.selectBlog = function(blog) {
      var blogg, _i, _len, _ref;
      _ref = $scope.blogs;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        blogg = _ref[_i];
        blogg.activeBlog = '';
      }
      blog.activeBlog = 'active';
      $scope.selectedBlog = blog;
      return console.log("..." + blog.name + ":" + blog.activeBlog);
    };
  };

  angular.module('WallyApp').controller('MyBlogsCtrl', ['$scope', 'BloggerBlog', MyBlogsControl]);

}).call(this);
