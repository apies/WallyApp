(function() {

  describe('WallyApp', function() {
    return describe('MyBlogs View', function() {
      beforeEach(function() {
        return browser().navigateTo('../../../../index.html');
      });
      return it('should see both of sobrinas blogs', function() {
        return expect(repeater('.blogs li').count()).toBe(2);
      });
    });
  });

}).call(this);
