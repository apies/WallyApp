(function() {
  'use strict';

  'use strict';

  var BloggerPostModel;

  BloggerPostModel = function($http) {
    var BloggerPost;
    BloggerPost = function(data) {
      return angular.extend(this, data);
    };
    BloggerPost.find = function(_arg) {
      var blogId, postId;
      blogId = _arg.blogId, postId = _arg.postId;
      return $http.get("api/blogs/" + blogId + "/posts/" + postId + ".json").then(function(response) {
        return new BloggerPost(response.data);
      });
    };
    BloggerPost.all = function(blogId) {
      return $http.get("api/blogs/" + blogId + "/posts.json").then(function(response) {
        return response.data;
      });
    };
    BloggerPost.prototype.say = function() {
      return "Hello " + this.title;
    };
    return BloggerPost;
  };

  angular.module('WallyAppServices').factory('BloggerPost', ['$http', BloggerPostModel]);

}).call(this);
