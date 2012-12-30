'use strict'

MyBlogsControl = ($scope, BloggerBlog) ->
 	$scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'AngularJS']
 	#$scope.blogs = BloggerBlog.all()
 	
 	BloggerBlog.all().then( (blogs) ->
 		$scope.blogs = blogs
 	)
 	$scope.selectBlog = (blog) ->
 		blogg.activeBlog = '' for blogg in $scope.blogs
 		blog.activeBlog = 'active'
 		$scope.selectedBlog = blog
 		console.log "...#{blog.name}:#{blog.activeBlog}"

angular.module('WallyApp').controller('MyBlogsCtrl', ['$scope', 'BloggerBlog', MyBlogsControl])