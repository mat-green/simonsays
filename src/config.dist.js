requirejs.config({
    paths: {
        // External libraries
        'angular': [
            '//ajax.googleapis.com/ajax/libs/angularjs/1.4.14/angular.min',
            'lib/angular/angular'
        ],
        'angular-ui-router': [
            '//unpkg.com/angular-ui-router@0.3.1/release/angular-ui-router',
            'lib/angular-ui-router/release/angular-ui-router'
        ],
        'angular-ui-bootstrap': [
            'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.2.5/ui-bootstrap-tpls.min',
            'lib/angular-bootstrap/ui-bootstrap-tpls.min'
        ],
        'angularMocks': 'lib/angular-mocks/angular-mocks',
        'placeholders': 'lib/angular-placeholders/dist/placeholders-0.0.1-SNAPSHOT',
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
