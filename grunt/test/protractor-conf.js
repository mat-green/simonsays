exports.config = {
  // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.42.0.jar',
  // chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  // location of E2E test specs
  specs: [
    '../../src/scenarios/*.js'
  ],

  // configure multiple browsers to run tests
  // multiCapabilities: [{
  //   'browserName': 'firefox'
  // }, {
  //   'browserName': 'chrome'
  // }, {
  //   'browserName': 'safari'
  // }],

  // or configure a single browser

  capabilities: {
    'browserName': 'chrome'
  },


  // url where your app is running, relative URLs are prepending with this URL
  baseUrl: 'http://127.0.0.1:9000/',

  // testing framework, jasmine is the default
  framework: 'jasmine'
};
