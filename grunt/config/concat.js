module.exports = function(grunt) {

    /*
     * `grunt concat` concatenates multiple source files into a single file.
     */
    grunt.config.set('concat', {
        /**
         * The `build_css` target concatenates compiled CSS and vendor CSS
         * together.
         */
        build_css : {
            src : ['<%= vendor_files.css %>', '<%= build_dir %>/<%= pkg.name %>-<%= pkg.version %>.css'],
            dest : '<%= build_dir %>/<%= pkg.name %>-<%= pkg.version %>.css'
        },
        /**
         * The `compile_js` target is the concatenation of our application source
         * code and all specified vendor source code into a single file.
         */
        compile_js : {
            options : {
                banner : '<%= meta.banner %>'
            },
            src : [
                'src/vendor/angular/angular.js',
                'src/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
                'src/vendor/angular-ui-router/release/angular-ui-router.js',
                'src/vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
                'grunt/templates/module.prefix',
                'build/www/**/*.js',
                'grunt/templates/module.suffix'
            ],
            dest : '<%= compile_dir %>/<%= pkg.name %>-<%= pkg.version %>.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};
