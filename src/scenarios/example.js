describe('ngBoilerplate', function() {
  browser.get('/');

  it("should load", function() {
    expect(browser.getTitle()).toBe('Home | ngBoilerplate');
  });

  describe('open What is it?', function() {
      it('should open What is it? page when clicked', function() {
          var button = element(by.linkText('What is it?'));
          button.click();
          expect(browser.getTitle()).toBe('What is It? | ngBoilerplate');
      });
  });
});