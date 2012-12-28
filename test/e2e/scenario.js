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
          return element("a:contains('Quiet')").click();
        });
        return it('should be able to transition to the quiet like horses blog home view', function() {
          var current_path;
          expect(element(".my-blog").text()).toMatch(/Quiet Like Horses/i);
          element("a:contains('Manage')").click();
          current_path = browser().location().url();
          expect(current_path).toBe("/myblog/2360593805083673688");
          return expect(element(".blog-name-header").text()).toMatch(/Quiet Like Horses/i);
        });
      });
    });
  });

}).call(this);
