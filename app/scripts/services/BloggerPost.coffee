'use strict';

# BloggerPostModel = ($resource) ->
#   $resource('blogs/:blogId/posts/:postId.json', {}, {query: { method: 'GET', params: {postId: 'posts' },isArray: 'true'}})

#found this pattern from Misko Hevery:
#http://stackoverflow.com/questions/11850025/recommended-way-of-getting-data-from-the-server/11850027#comment15909222_11850027

angular.module('WallyAppServices2', ['OrmServiceModule']).factory('BloggerPost', [ '$http', 'BloggerModel', ($http, BloggerModel) ->
	class BloggerPost extends BloggerModel
		@find: ({blogId, postId}) ->
			post = new BloggerPost
			$http.get("api/blogs/#{blogId}/posts/#{postId}.json").then( (response) ->
				post.instantiate(response.data) 
			)
			post
		@all: (blogId) ->
			posts = []
			$http.get("api/blogs/#{blogId}/posts.json").then( (response) ->
				posts.push post for post in response.data
			)
			posts
		say: () ->
			"Hello #{@title}"
])

