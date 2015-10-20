describe('ngBoilerplate', function() {
  browser.get('/');

  it("should load", function() {
    expect(browser.getTitle()).toBe('Home | ngBoilerplate');
  });
});