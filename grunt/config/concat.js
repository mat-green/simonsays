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
            src : [
                '<%= files.vendor.css %>',
                '<%= files.development %>/<%= pkg.name %>-<%= pkg.version %>.css'
            ],
            dest : '<%= files.development %>/<%= pkg.name %>-<%= pkg.version %>.css'
        },
        /**
         * The `compile_js` target is the concatenation of our application
         * source code and all specified vendor source code into a single file.
         */
        compile_js : {
            options : {
                banner : '<%= meta.banner %>'
            },
            src : [
                '<%= files.vendor.js %>',
                'grunt/templates/module.prefix',
                '<%= html2js.app.dest %>',
                '<%= html2js.common.dest %>',
                '<%= files.development %>/app/**/*.js',
                '<%= files.development %>/common/**/*.js',
                '<%= files.development %>/assets/**/*.js',
                'grunt/templates/module.suffix'
            ],
            dest : '<%= files.distribution %>/<%= pkg.name %>-<%= pkg.version %>.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};
