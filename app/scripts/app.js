(function() {
  'use strict';

  angular.module('WallyApp', []).config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'views/MyBlogs.html',
        controller: 'MyBlogsCntrl'
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);

}).call(this);
