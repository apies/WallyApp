'use strict'

BlogHomeControl = ($scope, BloggerBlog, $routeParams) ->
    BloggerBlog.find($routeParams.blogId).then( (blogg) ->
    	$scope.blog = blogg
    )


angular.module('WallyApp').controller('BlogHomeCtrl', ['$scope', 'BloggerBlog','$routeParams', BlogHomeControl])



