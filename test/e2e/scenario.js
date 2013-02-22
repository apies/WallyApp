(function() {

  describe('WallyApp', function() {
    return describe('MyBlogs View', function() {
      beforeEach(function() {
        return browser().navigateTo('../../../../index.html');
      });
      it('should see both of sobrinas blogs', function() {
        return expect(repeater('.blogs li').count()).toBe(2);
      });
      it('should be able to select one of sobrinas blogs', function() {
        element("a:contains('Loud')").click();
        expect(element(".active").text()).toMatch(/Loud Like Bulls/i);
        return expect(element(".my-blog").text()).toMatch(/Loud Like Bulls/i);
      });
      return describe('BlogHome View', function() {
        beforeEach(function() {
          element("a:contains('Quiet')").click();
          return element("a:contains('Manage')").click();
        });
        it('should be able to transition to the quiet like horses blog home view', function() {
          var current_path;
          expect(element(".blog-name-header").text()).toMatch(/Quiet Like Horses/i);
          current_path = browser().location().url();
          expect(current_path).toBe("/myblog/2360593805083673688");
          return expect(element(".blog-name-header").text()).toMatch(/Quiet Like Horses/i);
        });
        it('should contain a list of posts', function() {
          return expect(repeater('.posts li').count()).toBeGreaterThan(820);
        });
        it('should select a post when i click on one of the posts in the list', function() {
          element("a:contains('Happy Holidays!')").click();
          return expect(element(".post-title").text()).toBe('Happy Holidays!');
        });
        return it('should filter the post list as the user types into the search box', function() {
          expect(repeater('.posts li').count()).toBeGreaterThan(820);
          input('query').enter('rings');
          return expect(repeater('.posts li').count()).toBeLessThan(80);
        });
      });
    });
  });

}).call(this);
