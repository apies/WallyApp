'use strict'  

describe 'Service: BloggerModel', () ->

  # load the service's module
  beforeEach module 'OrmServiceModule'

  # instantiate service
  BloggerModel = {}

  beforeEach inject (_BloggerModel_, _$httpBackend_, $rootScope) ->
    scope = $rootScope.$new()
    BloggerModel = _BloggerModel_

  it 'should be able to make a new instance of itself when it already has data', () ->
    blog  = new BloggerModel(name: 'Quiet Like Horses')
    expect(blog.name).toBe('Quiet Like Horses')

  it 'should give itself model attributes with instantiate for use with promises', () ->
    blog  = new BloggerModel
    blog.instantiate(name: 'Quiet Like Horses')
    expect(blog.name).toBe('Quiet Like Horses')
  it 'should be a base for more specific Blogger models', () ->
    class BloggerUser extends BloggerModel
      thing: 'thing'
    user = new BloggerUser
    user.instantiate(name: 'Alan Pies', age: 28)
    expect(user.name).toBe('Alan Pies')

