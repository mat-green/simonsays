module.exports = function(grunt) {

    /*
     * This file/module contains all configuration for the build process.
     */
    grunt.config.set('files', {
        /* The `base` contains the references to the top level directories that
         * are use throught the build.
         *
         * The `src` property is the location of the project source code.
         *
         * The `build` property is a generated location as part of the build to
         * produce the files needed for development, unit testing, user
         * acceptance testing, preview and distribution of the project.
         */
        base: {
          src: 'src',
          build: 'target',
        },
        /*
         * The `development` folder is where the build generates a working
         * version of our project to be unit and user acceptance tests. The
         * `distribution` folder is where our application resides once it's
         * completely built ready for distribution. The `documents` folder is
         * where the comment generate API documentation will resides. The
         * `reports` directory is where the test output will reside.
         */
        development: '<%= files.base.build %>/build',
        distribution: '<%= files.base.build %>/www',
        documents: '<%= files.base.build %>/docs',
        reports: '<%= files.base.build %>/reports',
        /*
         * This is a collection of file patterns that refer to our app code (the
         * stuff in `src/`). These file paths are used in the configuration of
         * build tasks. `js` is all project javascript, less tests. `ctpl` contains
         * our reusable components' (`src/common`) template HTML files, while
         * `atpl` contains the same, but for our app's code. `html` is just our
         * main HTML file, `less` is our main stylesheet, and `unit` contains our
         * app's unit tests.
         */
        app: {
            assets: '<%= files.base.src %>/assets',
            config: {
                build: 'config.build.js',
                test: 'config.test.js',
                distribution: 'config.dist.js'
            },
            js : [
                '<%= files.base.src %>/app/**/*.js',
                '<%= files.base.src %>/common/**/*.js',
                '<%= files.base.src %>/assets/**/*.js',
                '!<%= files.base.src %>/**/*.spec.js'
            ],
            jsunit : ['<%= files.base.src %>/app/**/*.spec.js'],

            coffee : ['<%= files.base.src %>/app/**/*.coffee', '<%= files.base.src %>/common/**/*.coffee', '!<%= files.base.src %>/**/*.spec.coffee'],
            coffeeunit : ['<%= files.base.src %>/app/**/*.spec.coffee'],

            atpl : ['<%= files.base.src %>/app/**/*.tpl.html'],
            ctpl : ['<%= files.base.src %>/common/**/*.tpl.html'],

            html : ['<%= files.base.src %>/templates/index.html'],
            less : '<%= files.base.src %>/less/main.less'
        },
        /*
         * This is a collection of files used during testing only.
         */
        test: {
          js : [ '<%= files.base.src %>/lib/angular-mocks/angular-mocks.js' ]
        },
        /*
         * This is the same as `files.app`, except it contains patterns that
         * reference vendor code (`src/lib/`) that we need to place into the
         * build process somewhere. While the `files.app` property ensures all
         * standardized files are collected for compilation, it is the user's
         * job to ensure non-standardized (i.e. vendor-related) files are
         * handled appropriately in `files.vendor.js`.
         *
         * The `files.vendor.js` property holds files to be automatically used
         * testing and made available as fall back when project is distributed.
         * Each `vendor.js` entry must have  `lib` that is used during
         * development to be able to debug code. `cdn` and `dist` are used
         * during the creation of distribution. `cdn` being an optional url of
         * the resource from a Content Distribution Network to save the projects
         * bandwidth costs. `dist` being an optional fall back of a minified
         * version of the library, otherwisse the lib value is used.
         *
         * The `files.vendor.css` property holds any CSS files to be
         * automatically included in our app.
         *
         * The `files.vendor.fonts` property holds any font resource files to be
         * automatically included in our app.
         *
         * The `files.vendor.assets` property holds any assets to be copied along
         * with our app's assets. This structure is flattened, so it is not
         * recommended that you use wildcards.
         *
         * The `files.vendor.require` is the require.js library needed for the
         * application to work.
         *
         * TODO: use CDN versions in distribution when possible.
         */
        vendor: {
            js : [
                { lib: '<%= files.base.src %>/lib/angular/angular.js' },
                { lib: '<%= files.base.src %>/lib/angular-bootstrap/ui-bootstrap-tpls.min.js' },
                { lib: '<%= files.base.src %>/lib/angular-resource/angular-resource.js' }, 
                { lib: '<%= files.base.src %>/lib/angular-segmentio/angular-segmentio.js' },
                { lib: '<%= files.base.src %>/lib/angular-ui-router/release/angular-ui-router.js' },
                { lib: '<%= files.base.src %>/lib/domReady/domReady.js' },
                { lib: '<%= files.base.src %>/lib/angular-placeholders/dist/placeholders-0.0.1-SNAPSHOT.min.js' }
            ],
            css : [],
            fonts : [],
            assets : [],
            require: '<%= files.base.src %>/lib/requirejs/require.js'
        }
    });
};
