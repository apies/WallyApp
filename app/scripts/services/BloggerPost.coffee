'use strict';

# BloggerPostModel = ($resource) ->
#   $resource('blogs/:blogId/posts/:postId.json', {}, {query: { method: 'GET', params: {postId: 'posts' },isArray: 'true'}})

'use strict';


#found this pattern from Misko Hevery:
#http://stackoverflow.com/questions/11850025/recommended-way-of-getting-data-from-the-server/11850027#comment15909222_11850027

BloggerPostModel = ($http) ->
	
	BloggerPost = (data) ->
		angular.extend(@, data)
	BloggerPost.find = ({blogId, postId}) ->
		$http.get("api/blogs/#{blogId}/posts/#{postId}.json").then( (response) ->
			return new BloggerPost(response.data) 
		)
	BloggerPost.all = (blogId) ->
		$http.get("api/blogs/#{blogId}/posts.json").then( (response) ->
			return response.data
		)
	BloggerPost::say = () ->
		"Hello #{@title}"

	BloggerPost   


angular.module('WallyAppServices').factory('BloggerPost', ['$http',  BloggerPostModel])

