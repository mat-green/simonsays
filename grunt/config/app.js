module.exports = function(grunt) {

    /*
     * This file/module contains all configuration for the build process.
     */
    grunt.config.set('files', {
        src_dir: 'src',
        build_dir: 'target',
        /*
         * The `develop_dir` folder is where our projects are compiled during
         * development and the `compile_dir` folder is where our app resides once it's
         * completely built.
         */
        develop_dir: '<%= files.build_dir %>/build',
        compile_dir: '<%= files.build_dir %>/www',
        docs_dir: '<%= files.build_dir %>/docs',
        reports_dir: '<%= files.build_dir %>/reports',
        src_assets_dir: '<%= files.src_dir %>/assets',
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
            configjs: 'config.build.js',
            requirejs: '<%= files.src_dir %>/lib/requirejs/require.js',
            js : [
                '<%= files.src_dir %>/app/**/*.js',
                '<%= files.src_dir %>/common/**/*.js',
                '<%= files.src_dir %>/assets/**/*.js',
                '!<%= files.src_dir %>/**/*.spec.js'
            ],
            jsunit : ['<%= files.src_dir %>/app/**/*.spec.js'],

            coffee : ['<%= files.src_dir %>/app/**/*.coffee', '<%= files.src_dir %>/common/**/*.coffee', '!<%= files.src_dir %>/**/*.spec.coffee'],
            coffeeunit : ['<%= files.src_dir %>/app/**/*.spec.coffee'],

            atpl : ['<%= files.src_dir %>/app/**/*.tpl.html'],
            ctpl : ['<%= files.src_dir %>/common/**/*.tpl.html'],

            html : ['<%= files.src_dir %>/templates/index.html'],
            less : '<%= files.src_dir %>/less/main.less'
        },
        /*
         * This is a collection of files used during testing only.
         */
        test: {
            js : [ '<%= files.src_dir %>/lib/angular-mocks/angular-mocks.js' ]
        },
        /*
         * This is the same as `files.app`, except it contains patterns that
         * reference vendor code (`vendor/`) that we need to place into the build
         * process somewhere. While the `files.app` property ensures all
         * standardized files are collected for compilation, it is the user's job
         * to ensure non-standardized (i.e. vendor-related) files are handled
         * appropriately in `files.vendor.js`.
         *
         * The `files.vendor.js` property holds files to be automatically
         * concatenated and minified with our project source files.
         *
         * The `files.vendor.css` property holds any CSS files to be automatically
         * included in our app.
         *
         * The `files.vendor.assets` property holds any assets to be copied along
         * with our app's assets. This structure is flattened, so it is not
         * recommended that you use wildcards.
         */
        vendor: {
            js : [
                '<%= files.app.requirejs %>',
                '<%= files.src_dir %>/lib/angular/angular.js',
                '<%= files.src_dir %>/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
                '<%= files.src_dir %>/lib/angular-segmentio/angular-segmentio.js',
                '<%= files.src_dir %>/lib/angular-ui-router/release/angular-ui-router.js',
                '<%= files.src_dir %>/lib/domReady/domReady.js',
                '<%= files.src_dir %>/lib/angular-placeholders/dist/placeholders-0.0.1-SNAPSHOT.js',
                '<%= files.src_dir %>/lib/angular-mocks/angular-mocks.js'
            ],
            css : [],
            fonts : [],
            assets : []
        }
    });
};
