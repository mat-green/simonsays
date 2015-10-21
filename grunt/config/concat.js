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
                '<%= files.develop_dir %>/<%= pkg.name %>-<%= pkg.version %>.css'
            ],
            dest : '<%= files.develop_dir %>/<%= pkg.name %>-<%= pkg.version %>.css'
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
                '<%= files.vendor.js %>',
                'grunt/templates/module.prefix',
                '<%= files.develop_dir %>/app/**/*.js',
                '<%= files.develop_dir %>/common/**/*.js',
                '<%= html2js.app.dest %>',
                '<%= html2js.common.dest %>',
                'grunt/templates/module.suffix'
            ],
            dest : '<%= files.compile_dir %>/<%= pkg.name %>-<%= pkg.version %>.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};
