define([
    'require',
    'angular',
    'angularMocks',
    'app/app.module',
], function (require, angular) {
    var AppCtrl, createAppController, location, scope;

    describe( 'AppCtrl', function() {
      describe( 'isCurrentUrl', function() {

        beforeEach(angular.mock.module( require('app/app.module') ) );

        beforeEach(angular.mock.inject(function ($injector) {
            location = $injector.get('$location');
            scope = $injector.get('$rootScope').$new();
            var controller = $injector.get('$controller');
            createAppController = function() {
                print('$controller'+controller);
                return controller(require('app/app.controller'), { '$location': location, '$scope': scope});
            };
        }));

        it( 'should pass a dummy test', inject( function() {
            AppCtrl = createAppController();
            scope.$digest();
            expect( AppCtrl ).toBeTruthy();
        }));
      });
    });
});
