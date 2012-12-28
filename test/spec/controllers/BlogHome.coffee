'use strict'

describe 'Controller: BlogHomeCtrl', () ->

  # load the controller's module
  beforeEach module 'WallyApp'

  BlogHomeCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject (_$httpBackend_, $rootScope, $routeParams, $controller) ->
    $httpBackend = _$httpBackend_
    $httpBackend.whenGET('blogs/1.json').respond({name: 'QLH'})

    $routeParams.blogId = 1
    scope = $rootScope.$new()
    BlogHomeCtrl = $controller 'BlogHomeCtrl', {
      $scope: scope
    }
    $httpBackend.flush()

  it 'should have all the blogs details on the blog model', () ->
    expect(scope.blog.name).toBe('QLH') #.notToBeUndefined()
