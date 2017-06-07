# The `grunt` Directory

## The Build System

The best way to learn about the build system is by familiarizing yourself with
[Grunt][gruntjs] and then reading through the heavily documented build
configuration (`grunt/config/') and task (`grunt/tasks`) scripts. The 
`Gruntfile.js` is universal making it easy to add more tasks but there are lots
already to make you very productive with this kickstarter. What follows in this 
section is a quick introduction to the tasks provided and that should be plenty
to get you started.

The driver of the process is the `grunt/config/watch.js` configuration, which
watches for file changes using `grunt-contrib-watch` and executes one of nine
tasks when a file changes:

* `watch:gruntfile` - When `Gruntfile.js` changes, this task runs the linter
  (`jshint`) on that one file and reloads the configuration.
* `watch:assets` - When any file within `src/assets/` changes, all asset files
  are copied to `build/www/`.
* `watch:html` - When `src/templates/index.html.tpl` changes, it is compiled as
  a Grunt template, so script names, etc., are dynamically replaced with the
  correct values configured dynamically by Grunt.
* `watch:less` - When any `*.less` file within `src/less` changes, the
  `src/less/main.less` file is linted and copied into
  `build/www/<pkg.name>-<pkg.version>.css`.
* `watch:jssrc` - When any JavaScript file within `src/` that does not end in
  `.spec.js` changes, all JavaScript sources are linted, all unit tests are run,
  and the all source files are re-copied to `build/www`.
* `watch:coffeesrc` - When any `*.coffee` file in `src/` that doesn't match
  `*.spec.coffee` changes, the Coffee scripts are compiled independently into
  `build/www` in a structure mirroring where they were in `src/` so it's easy to
  locate problems. For example, the file
  `src/common/titleService/titleService.coffee` is compiled to
  `build/src/common/titleService/titleService.js`.
* `watch:tpls` - When any `*.tpl.html` file within `src/app/` or `src/common`
  changes, all templates are put into strings in a JavaScript file (technically
  two, one for `src/common/` and another for `src/app/`) that will add the
  template to AngularJS's
  [`$templateCache`](http://docs.angularjs.org/api/ng.$templateCache) so
  template files are part of the initial JavaScript payload and do not require
  any future XHR.  The template cache files are `build/template-app.js` and
  `build/template-common.js`.
* `watch:jsunit` - When any `*.spec.js` file in `src/` changes, the test files
  are linted and the unit tests are executed.
* `watch:coffeeunit` - When any `*.spec.coffee` file in `src/` changes, the test
  files are linted, compiled their tests executed.

As covered in the previous section, `grunt dev` will execute a full build
up-front and then run any of the aforementioned `watch:*` tasks as needed to
ensure the fastest possible build. So whenever you're working on your project,
start with:

```sh
$ npm start
```

And everything will be done automatically!

## Directory Structure Overview

At a high level, the structure looks roughly like this:

```
yet-another-angularjs-seed/
grunt/
  +- config/
  |  +- <task configuration files>
  +- tasks/
  |  +- <custom build tasks>
  +- templates/
  |  +- module.prefix
  |  +- module.suffix
  +- test/
     +- karma-conf.js
     +- protractor-conf.js
```

What follows is a brief description of each entry:
* `grunt/` - contains the grunt task configuration and build tasks.
* `grunt/config/` - contains the grunt task configuration files following a
  modular design. Therefore when adding more grunt tasks a configuration will
  need to be added here. See the less.js as good example on how it can be used.
* `grunt/config/files.js` - contains the list of vendor files to be used within
  your app.
* `grunt/tasks/` - contains any custom tasks to support the build pipline.
* `templates/module.prefix` and `template/module.suffix` - our compiled
  application script is wrapped in these, which by default are used to place the
  application inside a self-executing anonymous function to ensure no clashes
  with other libraries.
* `test/karma-conf.js` and `test/protactor-conf.js` - our testing configuration
  that control the reporting.


[gruntjs]: http://gruntjs.org