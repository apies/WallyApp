(function() {
  'use strict';

  angular.module('WallyApp', ['WallyAppServices', 'WallyAppServices2']).config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'views/MyBlogs.html',
        controller: 'MyBlogsCtrl'
      }).when('/myblog/:blogId', {
        templateUrl: 'views/BlogHome.html',
        controller: 'BlogHomeCtrl'
      });
    }
  ]);

}).call(this);
