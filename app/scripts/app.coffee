'use strict'


angular.module('WallyApp', []).config(['$routeProvider', ($routeProvider) ->
	$routeProvider.when('/', {templateUrl: 'views/MyBlogs.html', controller: 'MyBlogsCntrl'}).otherwise(redirectTo: '/')
])

# angular.module('WallyApp', [])
#   .config ['$routeProvider', ($routeProvider) ->
#     $routeProvider
#       .when '/',
#         templateUrl: 'views/main.html'
#         controller: 'MainCtrl'
#       .otherwise
#         redirectTo: '/'
#   ]
