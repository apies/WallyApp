'use strict' 

describe 'Controller: MyBlogsCtrl', () ->

  # load the controller's module
  beforeEach module 'WallyApp'

  MyBlogsCtrl = {}
  scope = {}
  $httpBackend = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, _$httpBackend_, $rootScope) ->
    $httpBackend = _$httpBackend_
    scope = $rootScope.$new()
    $httpBackend.whenGET('api/blogs.json').respond([{name: 'QLH'},{name: 'LLB'}])
    
    MyBlogsCtrl = $controller 'MyBlogsCtrl', {
      $scope: scope
    }
    $httpBackend.flush()
    

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3

  it 'should fetch a list of blogs from the BloggerBlog service', () ->
    expect(scope.blogs.length).toBe(2)
    expect(scope.blogs[0].name).toBe('QLH') 

  it 'should be able to select a blog', () ->
    scope.selectBlog(scope.blogs[0])
    expect(scope.selectedBlog).toBe(scope.blogs[0])
    
