'use strict'

describe 'Service: BloggerPost', () ->

  # load the service's module
  beforeEach module 'WallyAppServices2'

  # instantiate service
  BloggerPost = {}
  $httpBackend = {}
  beforeEach inject (_BloggerPost_, _$httpBackend_, $rootScope) ->
    $httpBackend = _$httpBackend_
    scope = $rootScope.$new()
    BloggerPost = _BloggerPost_
    $httpBackend.whenGET('api/blogs/2360593805083673688/posts.json').respond([{title: 'Post 1'},{title: 'Post2'}])
    $httpBackend.whenGET('api/blogs/2360593805083673688/posts/1.json').respond({title: 'Quiet Like Horses Post2'})

  it 'should fetch 2 posts from XHR', () ->
    posts = BloggerPost.all('2360593805083673688')
    $httpBackend.flush()
    expect(posts.length).toBe(2)
    expect(posts[0].title).toBe('Post 1')

  it 'should fetch one post from XHR by id', () ->
    post = BloggerPost.find(blogId: '2360593805083673688', postId: 1 )
    $httpBackend.flush()
    expect(post.title).toBe('Quiet Like Horses Post2')
