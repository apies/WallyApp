'use strict'; 


#experimenting with DI


angular.module('OrmServiceModule', []).factory('BloggerModel', [ ($scope) ->
	class BloggerModel
		constructor: (data) ->
			angular.extend(@, data)
		instantiate: (data) ->
			angular.extend(@, data)
])
