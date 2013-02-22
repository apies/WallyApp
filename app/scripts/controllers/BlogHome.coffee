'use strict' 

BlogHomeControl = ($scope, BloggerBlog, BloggerPost, $routeParams) ->
    $scope.blog = BloggerBlog.find($routeParams.blogId)
    $scope.posts = BloggerPost.all($routeParams.blogId)
    $scope.selectPost = (post) ->
    	_post.active = '' for _post in $scope.posts
    	post.active = 'active'
    	sPost = BloggerPost.find( blogId: $routeParams.blogId, postId: post.id)
    	$scope.selectedPost = sPost
    $scope.orderByComments = () ->
        $scope.orderProp = 'totalComments'
    	



angular.module('WallyApp').controller('BlogHomeCtrl', ['$scope', 'BloggerBlog', 'BloggerPost' ,'$routeParams', BlogHomeControl])



