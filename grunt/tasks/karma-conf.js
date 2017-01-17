module.exports = function(grunt) {

    /*
     * A utility function to get all app JavaScript sources.
     */
    function filterForJS(files) {
        return files.filter(function(file) {
            return file.match(/\.js$/);
        });
    }

    /*
     * In order to avoid having to specify manually the files needed for karma to
     * run, we use grunt to manage the list for us. The `karma/*` files are
     * compiled as grunt templates for use by Karma. Yay!
     */
    grunt.registerMultiTask('karma-conf', 'Process karma configuration template', function() {
        var jsFiles = filterForJS(this.filesSrc);

        grunt.file.copy('grunt/templates/karma-conf.js.tpl', this.data.dir + '/karma-conf.js', {
            process : function(contents, path) {
                return grunt.template.process(contents, {
                    data : {
                        scripts : jsFiles
                    }
                });
            }
        });
    });

};
