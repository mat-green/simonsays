module.exports = function(config) {
    config.set({
        /*
         * From where to look for files, starting with the location of this file.
         */
        basePath : '../',

        logLevel : config.LOG_DEBUG,

        /**
         * This is the list of file patterns to load into the browser during testing.
         */
        files : [
            {
                pattern: '<%= base %>/app/**/*.js',
                included: false
            }, {
                pattern: '<%= base %>/common/**/*.js',
                included: false
            }, {
                pattern: '<%= base %>/lib/**/*.js',
                included: false
            }, {
                pattern: '<%= base %>/*.js',
                included: false
            }, {
                pattern: 'src/app/**/*.spec.js',
                included: false
            }, {
                pattern: 'src/app/**/*.mock.js',
                included: false
            },
            'src/config.test.js'
        ],

        exclude : [ 'src/app/*main.js' ],

        /**
         * Disable file watching by default.
         */
        autoWatch : false,

        frameworks : ['jasmine', 'requirejs'],

        /*
         * The list of browsers to launch to test on. This includes only "PhantomJS" by
         * default, but other browser names include:
         * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
         *
         * Note that you can also use the executable name of the browser, like "chromium"
         * or "firefox", but that these vary based on your operating system.
         *
         * You may also leave this blank and manually navigate your browser to
         * http://localhost:9018/ when you're running tests. The window/tab can be left
         * open and the tests will automatically occur there during the build. This has
         * the aesthetic advantage of not launching a browser every time you save.
         */
        browsers : ['PhantomJS'],

        // map of preprocessors that is used mostly for plugins
        preprocessors : {
            // 'app/partials/directives/*.html': 'html2js',
            // 'app/partials/*.html': 'html2js'

            // test coverage
            '<%= base %>/app/**/*.js' : ['coverage'],
            '<%= base %>/common/**/*.js' : ['coverage'],
            '**/*.coffee' : ['coffee']
        },

        reporters : ['dots', 'progress', 'coverage'],

        // list of karma plugins
        plugins : [
            'karma-coffee-preprocessor',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            'karma-requirejs'
        ],

        // plugin settings
        coverageReporter : {
            // type of file to output, use text to output to console
            type : 'cobertura',
            // directory where coverage results are saved
            dir : '<%= reports %>/',
            subdir : 'coverage',
            // if type is text or text-summary, you can set the file name
            file : 'cobertura.xml'
        },
        junitReporter : {
            outputDir : '<%= reports %>/tests/',
            outputFile : 'junit.xml',
            suite : ''
        },

        /*
         * On which port should the browser connect, on which port is the test runner
         * operating, and what is the URL path for the browser to use.
         */
        port : 9018,
        runnerPort : 9100,
        urlRoot : '/'

    });
};
