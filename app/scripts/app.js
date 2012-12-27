(function() {
  'use strict';

  angular.module('WallyApp', ['WallyAppServices']).config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'views/MyBlogs.html',
        controller: 'MyBlogsCtrl'
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);

}).call(this);
