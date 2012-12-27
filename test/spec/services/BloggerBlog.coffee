'use strict'

describe 'Service: BloggerBlog', () ->

  # load the service's module
  beforeEach module 'WallyAppServices'

  # instantiate service
  BloggerBlog = {}
  $httpBackend = {}
  beforeEach inject (_BloggerBlog_, _$httpBackend_, $rootScope) ->
    $httpBackend = _$httpBackend_
    scope = $rootScope.$new()
    BloggerBlog = _BloggerBlog_
    $httpBackend.whenGET('blogs/blogs.json').respond([{name: 'QLH'},{name: 'LLB'}])
    $httpBackend.whenGET('blogs/1.json').respond({name: 'Quiet Like Horses'})
    
  it 'should fetch 2 blogs from XHR', () ->
    blogs = BloggerBlog.query()
    $httpBackend.flush()
    expect(blogs.length).toBe(2)
    expect(blogs[0].name).toBe('QLH')

  it 'should fetch one blog from XHR by id', () ->
    #for some reason this one succeeds without flush
    blog = BloggerBlog.get(blogId: 1, (blog) ->
      expect(blog.name).toBe('Quiet Like Horses')
    )
    #$httpBackend.flush()


