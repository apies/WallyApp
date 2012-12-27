'use strict'

describe 'Controller: MyBlogsCtrl', () ->

  # load the controller's module
  beforeEach module 'WallyApp'

  MyBlogsCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller) ->
    scope = {}
    MyBlogsCtrl = $controller 'MyBlogsCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3;
