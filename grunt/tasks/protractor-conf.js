module.exports = function(grunt) {
    /*
     * In order to avoid having to specify manually the port needed for
     * protractor use, we use grunt to manage the port from connect for us.
     * Compiled as grunt templates for use by Protractor. Yay!
     */
    grunt.registerMultiTask('protractor-conf', 'Process protractor configuration template', function() {
        var obj = {
            port: this.data.port,
            baseUrl: 'http://127.0.0.1:<%= port %>'
        };
        grunt.file.copy('grunt/templates/protractor-conf.js.tpl', this.data.dest + '/protractor-conf.js', {
            process : function(contents, path) {
                return grunt.template.process(contents, {data: obj});
            }
        });
    });

};
