module.exports = function(config) {
    config.set({
        //  root path location that will be used to resolve all relative paths in files and exclude sections
        basePath : '../../',

        logLevel: config.LOG_INFO,

        // files to include, ordered by dependencies
        files : [
            // include relevant Angular files and libs
            'build/www/vendor/angular/angular.js',
            'build/www/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'build/www/vendor/angular-ui-router/release/angular-ui-router.js',
            'build/www/vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
            'src/vendor/angular-mocks/angular-mocks.js',

            // include JS files
            'build/www/*.js',
            'build/www/app/**/*.js',
            'build/www/common/**/*.js',

            // include html template files
            // 'app/partials/directives/*.html',
            // 'app/partials/*.html',

            // include unit test specs
            'src/app/**/*.spec.js'
        ],
        // files to exclude
        exclude : [
            'src/vendor/angular/angular-loader.js',
            'src/vendor/angular/*.min.js',
            'src/vendor/angular/angular-scenario.js'
        ],

        // karma has its own autoWatch feature but Grunt watch can also do this
        autoWatch : false,

        // testing framework, be sure to install the correct karma plugin
        frameworks : ['jasmine'],

        // browsers to test against, be sure to install the correct browser launcher plugins
        browsers : ['PhantomJS'],

        // map of preprocessors that is used mostly for plugins
        preprocessors : {
            // 'app/partials/directives/*.html': 'html2js',
            // 'app/partials/*.html': 'html2js'

            // test coverage
            'build/www/app/**/*.js' : ['coverage'],
            'build/www/common/**/*.js' : [ 'coverage'],
            '**/*.coffee': ['coffee'],
        },

        reporters : ['dots', 'progress', 'junit', 'coverage'],

        // list of karma plugins
        plugins : [
            'karma-coffee-preprocessor',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-phantomjs-launcher'
        ],

        // plugin settings
        coverageReporter : {
            // type of file to output, use text to output to console
            type : 'cobertura',
            // directory where coverage results are saved
            dir : 'build/reports/',
            subdir: 'coverage',
            // if type is text or text-summary, you can set the file name
            file: 'cobertura.xml'
        },
        junitReporter : {
            outputDir: 'build/reports/tests/',
            outputFile: 'junit.xml',
            suite: ''
        }
    });
};
