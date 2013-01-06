'use strict'; 


#experimenting with DI


angular.module('FayeService', []).factory('FayeBroker', [ '$http', ($http, $rootScope) ->
	class FayeBroker
		constructor: (data) ->
			#@client = new Faye.Client('http://localhost:9292/faye')
			angular.extend(@, data)
		subscribe: (path, callback) ->
			$rootScope.$apply @client.subscribe(path, callback)
])

