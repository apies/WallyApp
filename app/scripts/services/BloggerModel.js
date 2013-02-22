(function() {
  'use strict';

  angular.module('OrmServiceModule', []).factory('BloggerModel', [
    function($scope) {
      var BloggerModel;
      return BloggerModel = (function() {

        function BloggerModel(data) {
          this.instantiate(data);
        }

        BloggerModel.prototype.instantiate = function(data) {
          this.attributes = data;
          return angular.extend(this, data);
        };

        return BloggerModel;

      })();
    }
  ]);

}).call(this);
