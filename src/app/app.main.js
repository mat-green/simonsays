define(['angular', 'app/app.module', 'placeholders'], function (angular, app) {
    'use strict';

    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        angular.bootstrap(document.documentElement, [app.name]);
    } else {
        document.onreadystatechange = function () {
            if (document.readyState === 'interactive') {
                angular.bootstrap(document.documentElement, [app.name]);
            }
        };
    }
});
