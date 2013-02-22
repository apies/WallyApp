'use strict';


#found this pattern from Misko Hevery:
#http://stackoverflow.com/questions/11850025/recommended-way-of-getting-data-from-the-server/11850027#comment15909222_11850027

angular.module('WallyAppServices', ['OrmServiceModule']).factory('BloggerBlog', ['$http', 'BloggerModel', ($http, BloggerModel) ->
	class BloggerBlog extends BloggerModel
		@all: () ->
			blogs = []
			$http.get("api/blogs.json").then( (response) ->
				blogs.push new BloggerBlog(params) for params in response.data
			)
			blogs
		@find: (blogId) ->
			blog = new BloggerBlog
			$http.get("api/blogs/#{blogId}.json").then( (response) ->
				blog.instantiate(response.data)
			)
			blog
])

