(function() {

  describe('WallyApp', function() {
    return describe('MyBlogs View', function() {
      beforeEach(function() {
        return browser().navigateTo('../../../../index.html');
      });
      it('should see both of sobrinas blogs', function() {
        return expect(repeater('.blogs li').count()).toBe(2);
      });
      return it('should be able to select one of sobrinas blogs', function() {
        element("a:contains('Loud')").click();
        expect(element(".active").text()).toMatch(/Loud Like Bulls/i);
        return expect(element(".my-blog").text()).toMatch(/Loud Like Bulls/i);
      });
    });
  });

}).call(this);
