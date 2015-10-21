# The `src` Directory

## Overview

The `src/` directory contains all code used in the application along with all
tests of such code.

```
src/
  +- app/
  |  +- about/
  |  +- home/
  |  +- app.js
  |  +- app.spec.js
  +- assets/
  |  +- favicon.gif
  |  +- humans.txt
  |  +- robots.txt
  +- common/
  |  +- plusOne/
  +- less/
  |  +- main.less
  |  +- variables.less
  +- scenarios/
  +- templates/
  |  +- index.html
  +- vendor/
     +- angular-bootstrap/
     +- bootstrap/
     +- placeholders/
```

- `src/app/` - application-specific code, i.e. code not likely to be reused in
  another application. [Read more &raquo;](app/README.md)
- `src/assets/` - static files like fonts and images. 
  [Read more &raquo;](assets/README.md)
- `src/common/` - third-party libraries or components likely to be reused in
  another application. [Read more &raquo;](common/README.md)
- `src/less/` - LESS CSS files. [Read more &raquo;](less/README.md)
- `src/scenarios/` - [Protractor][protractor] end to end behaviour driven tests.
- `src/index.html` - this is the HTML document of the single-page application.
  See below.
* `src/vendor/` - third-party libraries. [Bower][bower] will install packages 
  here. Anything added to this directory will need to be manually added to 
  `grunt/config/app.js` and `grunt/test/karma-unit.js` to be picked up by the 
  build system.

See each directory for a detailed explanation.

## `index.html`

The `index.html` file is the HTML document of the single-page application (SPA)
that should contain all markup that applies to everything in the app, such as
the header and footer. It declares with `ngApp` that is this kickstarter's, main
`AppCtrl` controller, and contains the `ngView` directive into which route
templates are placed.

Unlike any other HTML document (e.g. the templates), `index.html` is compiled as
a Grunt template, so variables from `Gruntfile.js` and `package.json` can be
referenced from within it. Changing `name` in `package.json` from
"yet-another-angularjs-seed" will rename the resultant CSS and JavaScript placed
in `build/`, so this HTML references them by variable for convenience.


[bower]: http://bower.io
[protractor]: https://github.com/angular/protractor