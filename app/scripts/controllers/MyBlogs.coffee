'use strict'

MyBlogsControl = ($scope, BloggerBlog) ->
 	$scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'AngularJS']
 	$scope.blogs = BloggerBlog.query()

angular.module('WallyApp').controller('MyBlogsCtrl', ['$scope', 'BloggerBlog', MyBlogsControl])