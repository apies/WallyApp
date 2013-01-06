(function() {
  'use strict';

  angular.module('FayeService', []).factory('FayeBroker', [
    '$http', function($http, $rootScope) {
      var FayeBroker;
      return FayeBroker = (function() {

        function FayeBroker(data) {
          angular.extend(this, data);
        }

        FayeBroker.prototype.subscribe = function(path, callback) {
          return $rootScope.$apply(this.client.subscribe(path, callback));
        };

        return FayeBroker;

      })();
    }
  ]);

}).call(this);
