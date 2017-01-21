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
});
