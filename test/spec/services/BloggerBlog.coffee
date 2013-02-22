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
    $httpBackend.whenGET('api/blogs.json').respond([{name: 'QLH'},{name: 'LLB'}])
    $httpBackend.whenGET('api/blogs/1.json').respond({name: 'Quiet Like Horses'})

    
  it 'should fetch 2 blogs from XHR', () ->
    blogs = BloggerBlog.all()
    $httpBackend.flush()
    expect(blogs[0].name).toBe('QLH')
    expect(blogs[1].name).toBe('LLB')


  it 'should fetch one blog from XHR the cool angular $resource way', () ->
    blog = BloggerBlog.find(1)
    $httpBackend.flush()
    expect(blog.name).toBe('Quiet Like Horses')

    



