(function() {
  'use strict';

  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  describe('Service: BloggerModel', function() {
    var BloggerModel;
    beforeEach(module('OrmServiceModule'));
    BloggerModel = {};
    beforeEach(inject(function(_BloggerModel_, _$httpBackend_, $rootScope) {
      var scope;
      scope = $rootScope.$new();
      return BloggerModel = _BloggerModel_;
    }));
    it('should be able to make a new instance of itself when it already has data', function() {
      var blog;
      blog = new BloggerModel({
        name: 'Quiet Like Horses'
      });
      return expect(blog.name).toBe('Quiet Like Horses');
    });
    it('should give itself model attributes with instantiate for use with promises', function() {
      var blog;
      blog = new BloggerModel;
      blog.instantiate({
        name: 'Quiet Like Horses'
      });
      return expect(blog.name).toBe('Quiet Like Horses');
    });
    return it('should be a base for more specific Blogger models', function() {
      var BloggerUser, user;
      BloggerUser = (function(_super) {

        __extends(BloggerUser, _super);

        function BloggerUser() {
          return BloggerUser.__super__.constructor.apply(this, arguments);
        }

        BloggerUser.prototype.thing = 'thing';

        return BloggerUser;

      })(BloggerModel);
      user = new BloggerUser;
      user.instantiate({
        name: 'Alan Pies',
        age: 28
      });
      return expect(user.name).toBe('Alan Pies');
    });
  });

}).call(this);
