'use strict'

BlogHomeControl = ($scope, BloggerBlog, $routeParams) ->
    $scope.blog = BloggerBlog.find($routeParams.blogId)
    console.log $scope.blog


angular.module('WallyApp').controller('BlogHomeCtrl', ['$scope', 'BloggerBlog','$routeParams', BlogHomeControl])



