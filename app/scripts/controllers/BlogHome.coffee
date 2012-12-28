'use strict'

BlogHomeControl = ($scope, BloggerBlog, $routeParams) ->
    $scope.blog = BloggerBlog.get(blogId: $routeParams.blogId, (blogg) ->
    	console.log(blogg)
    )


angular.module('WallyApp').controller('BlogHomeCtrl', ['$scope', 'BloggerBlog','$routeParams', BlogHomeControl])



