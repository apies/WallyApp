'use strict'


angular.module('WallyApp', ['WallyAppServices']).config(['$routeProvider', ($routeProvider) ->
	$routeProvider.when('/', {templateUrl: 'views/MyBlogs.html', controller: 'MyBlogsCtrl'}).when('/myblog/:blogId', {templateUrl: 'views/BlogHome.html', controller: 'BlogHomeCtrl'})
	#$routeProvider.otherwise(redirectTo: '/')
])


