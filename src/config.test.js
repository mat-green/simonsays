var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return (/(.spec|.test)\.js$/).test(file);
});

requirejs.config({
    paths: {
        // External libraries
        'angular': 'lib/angular/angular',
        'placeholders': 'lib/angular-placeholders/dist/placeholders-0.0.1-SNAPSHOT',
        'angular-ui-router': 'lib/angular-ui-router/release/angular-ui-router',
        'angular-ui-bootstrap': 'lib/angular-bootstrap/ui-bootstrap-tpls.min',
        'angularMocks': 'lib/angular-mocks/angular-mocks',
        // Application references
        'templates-app': 'templates-app',
        'templates-common': 'templates-common',
        'plusOne': 'plusOne'
    },

    baseUrl: '/base/target/build',

    shim: {
        // External libraries
        'angular': { 'exports': 'angular' },
        'placeholders': { 'exports': 'placeholders', 'deps': ['angular']  },
        'angular-ui-router': { 'deps': ['angular'] },
        'angular-ui-bootstrap': { 'deps': ['angular'] },
        'angularMocks': { 'deps': ['angular'], 'exports': 'angular.mock' },
        // Each template to be included in tests should be included below.
        'templates-app': { 'deps': ['angular'] },
        'templates-common': { 'deps': ['angular'] }
    },

    // Ask Require.js to load these files (all our tests).
    deps: tests,

    // Set test to start run once Require.js is done.
    callback: window.__karma__.start
});
