'use strict'

MyBlogsControl = ($scope, BloggerBlog) ->
 	$scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'AngularJS']
 	#$scope.blogs = BloggerBlog.all()

 	$scope.blogs = BloggerBlog.all()
 	

 	
 	$scope.selectBlog = (blog) ->
 		blogg.activeBlog = '' for blogg in $scope.blogs
 		blog.activeBlog = 'active'
 		$scope.selectedBlog = blog

angular.module('WallyApp').controller('MyBlogsCtrl', ['$scope', 'BloggerBlog', MyBlogsControl])