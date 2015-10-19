module.exports = function ( grunt ) {

    var fs = require('fs');
    var path = require('path');
    var matchdep = require('matchdep');

    /* add all configuration files */
    var configPath = path.resolve('grunt/config');
    fs.readdirSync(configPath)
        .forEach(function (fileName) {
            require(path.join(configPath, fileName))(grunt);
        });

    /* add all tasks */
    var taskPath = path.resolve('grunt/tasks');
    fs.readdirSync(taskPath)
        .forEach(function (fileName) {
            require(path.join(taskPath, fileName))(grunt);
        });

};
