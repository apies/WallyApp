'use strict';


#found this pattern from Misko:
#http://stackoverflow.com/questions/11850025/recommended-way-of-getting-data-from-the-server/11850027#comment15909222_11850027

BloggerBlogModel = ($http, $q, $scope) ->
	
	BloggerBlog = (data) ->
		angular.extend(@, data)
	BloggerBlog.find = (blogId) ->
		$http.get("api/blogs/#{blogId}.json").then( (response) ->
			return new BloggerBlog(response.data) 
		)
	BloggerBlog.all = () ->
		$http.get("api/blogs.json").then( (response) ->
			result = response.data
			return result
		)
	BloggerBlog::say = () ->
		"Hello #{@name}"

	BloggerBlog 

  


angular.module('WallyAppServices', []).factory('BloggerBlog', ['$http','$q', BloggerBlogModel])

