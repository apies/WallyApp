'use strict'


angular.module('WallyApp', ['WallyAppServices']).config(['$routeProvider', ($routeProvider) ->
	$routeProvider.when('/', {templateUrl: 'views/MyBlogs.html', controller: 'MyBlogsCtrl'}).otherwise(redirectTo: '/')
])


