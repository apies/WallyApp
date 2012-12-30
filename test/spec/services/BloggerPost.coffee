# 'use strict'

# describe 'Service: BloggerPost', () ->

#   # load the service's module
#   beforeEach module 'WallyApp'

#   # instantiate service
#   BloggerPost = {}
#   beforeEach inject (_BloggerPost_, _$httpBackend_, $rootScope) ->
#     $httpBackend = _$httpBackend_
#     scope = $rootScope.$new()
#     BloggerPost = _BloggerPost_
#     $httpBackend.whenGET('blogs/2360593805083673688/posts.json').respond([{title: 'Post 1'},{title: 'Post2'}])
#     $httpBackend.whenGET('blogs/2360593805083673688/1.json').respond({title: 'Quiet Like Horses Post2'})

#   it 'should fetch 2 blogs from XHR', () ->
#     blogs = BloggerPost.query(blogId: 2360593805083673688)
#     $httpBackend.flush()
#     expect(blogs.length).toBe(2)
#     expect(blogs[0].title).toBe('Post 1')

#   # it 'should fetch one blog from XHR by id', () ->
#   #   #for some reason this one succeeds without flush
#   #   blog = BloggerBlog.get(blogId: 1, (blog) ->
#   #     expect(blog.name).toBe('Quiet Like Horses')
#   #   )
#   #   #$httpBackend.flush()
