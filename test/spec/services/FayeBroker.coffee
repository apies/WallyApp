'use strict'

describe 'Service: FayeBroker', () ->

  # load the service's module
  beforeEach module 'FayeService'

  # instantiate service
  FayeBroker = {}
  $httpBackend = {}
  beforeEach inject (_FayeBroker_, _$httpBackend_, $rootScope) ->
    $httpBackend = _$httpBackend_
    scope = $rootScope.$new()
    FayeBroker = _FayeBroker_
    #$httpBackend.whenGET('api/blogs.json').respond([{name: 'QLH'},{name: 'LLB'}])
    #$httpBackend.whenGET('api/blogs/1.json').respond({name: 'Quiet Like Horses'})

    
  it 'should be able to instantiate itself', () ->
    service = new FayeBroker(name: 'PIES')
    expect(service.name).toBe('PIES')
    
