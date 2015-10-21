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
     * A utility function to get all app CSS sources.
     */
    function filterForCSS(files) {
        return files.filter(function(file) {
            return file.match(/\.css$/);
        });
    }

    /*
     * The index.html template includes the stylesheet and javascript sources
     * based on dynamic names calculated in this Gruntfile. This task assembles
     * the list into variables for the template to use and then runs the
     * compilation.
     */
    grunt.registerMultiTask('index', 'Process index.html template', function() {
        var files = grunt.config('files');
        var dirRE = new RegExp('^(' + files.src_dir + '|' + files.develop_dir + '|' + files.compile_dir + ')\/', 'g');
        var jsFiles = filterForJS(this.filesSrc).map(function(file) {
            return file.replace(dirRE, '');
        });
        var cssFiles = filterForCSS(this.filesSrc).map(function(file) {
            return file.replace(dirRE, '');
        });

        grunt.file.copy('src/templates/index.html', this.data.dir + '/index.html', {
            process : function(contents, path) {
                return grunt.template.process(contents, {
                    data : {
                        scripts : jsFiles,
                        styles : cssFiles,
                        version : grunt.config('pkg.version')
                    }
                });
            }
        });
    });

};
