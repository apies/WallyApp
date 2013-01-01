(function() {
  'use strict';

  angular.module('OrmServiceModule', []).factory('BloggerModel', [
    function($scope) {
      var BloggerModel;
      return BloggerModel = (function() {

        function BloggerModel(data) {
          angular.extend(this, data);
        }

        BloggerModel.prototype.instantiate = function(data) {
          return angular.extend(this, data);
        };

        return BloggerModel;

      })();
    }
  ]);

}).call(this);
