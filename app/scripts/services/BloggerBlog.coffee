'use strict';


#found this pattern from Misko Hevery:
#http://stackoverflow.com/questions/11850025/recommended-way-of-getting-data-from-the-server/11850027#comment15909222_11850027

BloggerBlogModel = ($http) ->
	class BloggerBlog
		constructor: (data) ->
			angular.extend(@, data)
		@all: () ->
			blogs = []
			$http.get("api/blogs.json").then( (response) ->
				blogs.push blog for blog in response.data
			)
			blogs
		@find: (blogId) ->
			blog = new BloggerBlog
			$http.get("api/blogs/#{blogId}.json").then( (response) ->
				blog.instantiate(response.data)
			)
			blog
		instantiate: (data) ->
			angular.extend(@, data)
		say: (data) ->
			"Hello #{@name}"

angular.module('WallyAppServices', []).factory('BloggerBlog', ['$http','$q', BloggerBlogModel])

