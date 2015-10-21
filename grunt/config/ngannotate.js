module.exports = function (grunt) {

    /*
     * The banner is the comment that is placed at the top of our compiled
     * source files. It is first processed as a Grunt template, where the `<%=`
     * pairs are evaluated based on this very configuration object.
     */
    grunt.config.set('ngAnnotate', {
        options: {
            singleQuotes: true
        },
        app: {
            files: [
                {
                    src: [ 'app/**/*.js', '!app/**/*.spec.js' ],
                    dest: '<%= files.develop_dir %>/',
                    cwd: '<%= files.src_dir %>',
                    expand: true
                }
            ]
        },
        common: {
            files: [
                {
                    src: [ 'common/**/*.js', '!common/**/*.spec.js' ],
                    dest: '<%= files.develop_dir %>/',
                    cwd: '<%= files.src_dir %>',
                    expand: true
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-ng-annotate');
};
