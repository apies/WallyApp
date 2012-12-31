'use strict';


#found this pattern from Misko Hevery:
#http://stackoverflow.com/questions/11850025/recommended-way-of-getting-data-from-the-server/11850027#comment15909222_11850027

BloggerBlogModel = ($http, $q, $rootScope) ->
	
	BloggerBlog = (data) ->
		angular.extend(@, data)
	BloggerBlog.all = () ->
		result = []
		$http.get("api/blogs.json").then( (response) ->
			result.push blog for blog in response.data
		)
		return result
	BloggerBlog.find = (blogId) ->
		result = {}
		blog = new BloggerBlog(result.blog)
		$http.get("api/blogs/#{blogId}.json").then( (response) ->
			blog.instantiate(response.data)
		)
		return blog
	BloggerBlog::say = () ->
		"Hello #{@name}"
	BloggerBlog::instantiate = (data) ->
		angular.extend(@, data)


	BloggerBlog 

  


angular.module('WallyAppServices', []).factory('BloggerBlog', ['$http','$q', BloggerBlogModel])

