define([
    'require',
    'angular',
    'angularMocks',
    'app/app.module',
], function (require, angular) {
    var scope;
    var rootScope;
/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
    describe( 'home section', function() {
        beforeEach( angular.mock.module( require('app/app.module') ) );

        beforeEach(angular.mock.inject(function($rootScope){
            scope = $rootScope.$new();
            rootScope = $rootScope;
        }));

        it( 'should have a dummy test', inject( function() {
          expect( true ).toBeTruthy();
        }));
    });
});
