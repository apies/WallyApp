'use strict'
 
describe 'Service: BloggerPost', () ->

  # load the service's module
  beforeEach module 'WallyAppServices2'
  #beforeEach module 'OrmServiceModule'

  # instantiate service
  BloggerPost = {}
  $httpBackend = {}
  BloggerModel = {}
  postParams = {}
  beforeEach inject (_BloggerPost_,  _$httpBackend_, _BloggerModel_ ) ->
    $httpBackend = _$httpBackend_
    BloggerPost = _BloggerPost_
    BloggerModel = _BloggerModel_
    $httpBackend.whenGET('api/blogs/2360593805083673688/posts.json').respond([{title: 'Post 1'},{title: 'Post2'}])
    postParams =  
      id: '1'
      blog:
        id: '2360593805083673688'
      title: 'Quiet Like Horses Post2' 
      content: "<img border=\"0\" height=\"214\" src=\"http://4.bp.blogspot.com/-DVkPAZvmdsk/T5DgSvXY8PI/AAAAAAAANSE/N4eEtvPsyFI/s320/whaley.jpg\" width=\"320\" />"
    $httpBackend.whenGET('api/blogs/2360593805083673688/posts/1.json').respond(postParams)
    

  it 'should fetch 2 posts from XHR', () ->
    posts = BloggerPost.all('2360593805083673688')
    $httpBackend.flush()
    expect(posts.length).toBe(2)
    expect(posts[0].title).toBe('Post 1')

  it 'should fetch one post from XHR by id', () ->
    post = BloggerPost.find(blogId: '2360593805083673688', postId: 1 )
    $httpBackend.flush()
    expect(post.title).toBe('Quiet Like Horses Post2')

  it 'can it extend BloggerModel', () ->
    class BloggerThing extends BloggerModel
      thing: 'ALan'
    thing = new BloggerThing(thingType: 'Blog')
    expect(thing.thingType).toBe('Blog')

  it 'can send restful put updates to save to server', () ->
    post = BloggerPost.find(blogId: '2360593805083673688', postId: 1 )
    $httpBackend.flush()
    $httpBackend.expectPUT('api/blogs/2360593805083673688/posts/1.json', postParams ).respond(postParams)
    post['title'] = (word[0].toUpperCase() + word[1..-1].toLowerCase() for word in post['title'].split /\s+/).join ' '
    post.updateAttributes()


