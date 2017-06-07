describe('ngBoilerplate', function() {
  browser.get('/');

  it("should load", function() {
    expect(browser.getTitle()).toBe('Play | Simon Says');
  });

  describe('open What is it?', function() {
      it('should open What is it? page when clicked', function() {
          // var button = element(by.linkText('Play'));
          // button.click();
          // expect(browser.getTitle()).toBe('Play | Simon Says');
      });
  });
});
