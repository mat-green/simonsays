# [Yet Another Angular Seed](https://github.com/New-Edge-Engineering/yet-another-angularjs-seed)

A project kickstarter for [AngularJS](angularjs) web applications inspired by:

* [ng-boilerplate][ngbp] created by @joshdmiller
* [Better Grunt files (for organised developers)][eddify] by Andrew Eddie
* [RENEWING THE GRUNT & LIVERELOAD MAGIC][rhumaric] by Rhumaric
* [AngularJS Testing Starter][mknabe]

With the intention of being used within a continuous delivery process, i.e.
executed by [Jenkins][jenkins].

## Introduction

### Pre-requisites

* [git][git] to access the code from github
* [nodejs][node] for execution of grunt and bower
* [npm][npm] for project library management

## Quick Start

Install the pre-requisites, then open a terminal and execute the following:

```sh
$ sudo npm -g install grunt-cli karma bower
$ git clone git://github.com/New-Edge-Engineering/yet-another-angularjs-seed
$ cd yet-another-angularjs-seed
$ npm start
```

This should open [Google Chrome][chrome] with the web page displayed

Happy hacking!

## Purpose

The original `ngBoilerplate` is designed to make life easy by providing a basic 
framework with which to kickstart AngularJS projects. It contains a best-
practice directory structure to ensure code reusability and maximum scalability.
This kickstarter also comes prepackaged with the most popular design frameworks
around: [Twitter Bootstrap](http://getbootstrap.com),
[Angular UI](http://angular-ui.github.io),
[Angular Bootstrap](http://angular-ui.github.io/bootstrap),
[Font Awesome](http://fortawesome.github.com/Font-Awesome), and
[LESS](http://lesscss.org). Lastly, it contains a sophisticated
[Grunt](http://gruntjs.org)-based build system to ensure maximum productivity.
All you have to do is clone it and start coding!

## Philosophy

The principal goal of this kickstarter is to set projects up for long-term
success.  So this kickstarter tries to follow best practices everywhere it can.
These are:

- Properly orchestrated modules to encourage drag-and-drop component re-use.
- Tests exist alongside the component they are testing with no separate `test`
  directory required; the build process should be sophisticated enough to handle
  this.
- Speaking of which, the build system should work automagically, without
  involvement from the developer. It should do what needs to be done, while
  staying out of the way. Components should end up tested, linted, compiled,
  and minified, ready for use in a production environment.
- Integration with popular tools like Bower, Karma, Protractor and LESS.
- *Encourages* test-driven development. It's the only way to code.
- A directory structure that is cogent, meaningful to new team members, and
  supporting of the above points.
- Well-documented, to show new developers *why* things are set up the way they
  are.
- It should be responsive to evidence. Community feedback is therefore crucial
  to the success of this kickstarter.

But this kickstarter is not an example of an AngularJS app: this is a project
kickstarter. If you're looking for an example of what a complete, non-trivial
AngularJS app that does something real looks like, complete with a REST backend
and authentication and authorization, then take a look at
[`angular-app`](http://github.com/angular-app/angular-app), which does just
that - and does it well.

## Learn

### Directory Structure Overview

At a high level, the structure looks roughly like this:

```
yet-another-angularjs-seed/
  +- grunt/
  |  +- config/
  |  |  +- <task configuration files>
  |  +- tasks/
  |  |  +- <custom build tasks>
  |  +- templates/
  |  |  +- module.prefix
  |  |  +- module.suffix
  |  +- test/
  |     +- karma-conf.js
  |     +- protractor-conf.js
  +- src/
  |  +- app/
  |  |  +- <app logic>
  |  +- assets/
  |  |  +- <static files>
  |  +- common/
  |  |  +- <reusable code>
  |  +- less/
  |  |  +- main.less
  |  +- scenarios/
  |  |  +- <protractor behaviour driven tests>
  |  +- templates
  |  |  +- index.html.tpl
  |  +- vendor/
  |     +- angular-bootstrap/
  |     +- bootstrap/
  |     +- placeholders/
  +- .bowerrc
  +- bower.json
  +- Gruntfile.js
  +- package.json
```

What follows is a brief description of each entry, but most directories contain
their own `README.md` file with additional documentation, so browse around to
learn more.

* `grunt/` - contains the grunt task configuration and build tasks. 
  [Read more &raquo;](grunt/README.md)
* `src/` - the application code. [Read more &raquo;](src/README.md)
* `.bowerrc` - the Bower configuration file. This tells Bower what to install
  components into the `src/vendor/` directory.
* `bower.json` - this is our project configuration for Bower and it contains the
  list of Bower dependencies we need.
* `Gruntfile.js` - the univeral build script; [see "The Build System" &raquo;](grunt/README.md)
- `package.json` - metadata about the app, used by NPM and our build script. Our
  NPM dependencies are listed here.

### Detail Installation/Kickstarting A Project

This section provides a little more detailed understanding of what goes into
getting this kickstarter up and running. Though this kickstarter is really
simple to use, it might help to have an understanding of the tools involved
here, like Node.js and Grunt and Bower. If you're completely new to highly
organized, modern JavaScript development, take a few short minutes to read [this
overview of the tools](tools.md) before continuing with this section.

Okay, ready to go? Here it is:

this kickstarter uses [Grunt][gruntjs] as its build system, so [Node.js][node]
is required. Also, Grunt by default no longer comes with a command-line utility
and Karma and Bower must end up in your global path for the build system to find
it, so they must be installed independently. Once you have Node.js installed,
you can simply use `npm` to make it all happen:

```sh
$ npm -g install grunt-cli karma bower
```

If you're on Linux (like I am) then throw `sudo` in front of that command.  If
you're on Windows, then open the terminal `As Administrator`.

Next, you can either clone this repository using [Git][git], download it as a
zip file from GitHub, or merge the branch into your existing repository.
Assuming you're starting from scratch, simply clone this repository using git:

```sh
$ git clone http://github.com/New-Edge-Engineering/yet-another-angularjs-seed <my-project-name>
$ cd <my-project-name>
```

You will need to change the remote if you want to push to a canonical repo:

```sh
$ git remote remove origin
$ git remote add origin <our git url>
```

And then execute the following to enable you start seeing changes happen as you
develop:

```sh
$ npm start
```

This will read the `dependencies` (empty by default) and the `devDependencies`
(which contains our build requirements) from `package.json` and install
everything needed into a folder called `node_modules/`.

There are many Bower packages used by this kickstarter, like Twitter Bootstrap
and Angular UI, which are listed in `bower.js`. These will be installed into the
`src/vendor/` directory. In the future, when you want to add a new Bower package
to your app, run the `install` command:

```sh
$ bower install packagename --save-dev
```

The `--save-dev` flag tells Bower to add the package at its current version to
our project's `bower.js` file so should another developer download our
application (or we download it to a different computer) all our dependencies
will be installed for us. Neat!

Technically, this kickstarter is now ready to go.

However, prior to hacking on your application, you will want to modify the
`package.json` file to contain your project's information. Do not remove any
items from the `devDependencies` array as all are needed for the build process
to work.

The built files are placed in the `build/www/` directory by default. You can
simply open the `build/www/index.html` file in your browser and check it out!
Because everything is compiled, no XHR requests are needed to retrieve
templates, so until this needs to communicate with your backend there is no need
to run it from a web server.

`npm start` executes `grunt dev` that will first run a partial build before
watching for file changes. With this setup, any file that changes will trigger
only those build tasks necessary to bring the app up to date. For example, when
a template file changes, the templates are recompiled and concatenated, but when
a test/spec file changes, only the tests are run. This allows the watch command
to complete in a fraction of the time it would ordinarily take.

In addition, if you're running a Live Reload plugin in your browser (see below),
you won't even have to refresh to see the changes! When the `watch` task detects
a file change, it will reload the page for you. Sweet.

When you're ready to push your app into production, just run the `package`
command:

```sh
$ npm run package
```

This will concatenate and minify your sources and place them by default into the
`buld/dist/` directory and create a versioned package of your application in
`build/`. There will be three main files: `index.html`, `your-app-name.js`, and
`your-app-name.css`. All of the vendor dependencies like Bootstrap styles and
AngularJS itself have been added to them for super-easy deploying. If you use
any assets (`src/assets/`) then they will be copied to `buld/dist/` as is.

Lastly, a complete build is always available by simply running the default
task, which runs `distribute` that combines `build` and `compile`:

```sh
$ grunt
```

### Build vs. Compile

To make the build even faster, tasks are placed into two categories: build and
compile. The build tasks (like those we've been discussing) are the minimal
tasks required to run your app during development.

Compile tasks, however, get your app ready for production. The compile tasks
include concatenation, minification, compression, etc. These tasks take a little
bit longer to run and are not at all necessary for development so are not called
automatically during build or watch.

To initiate a full compile, you simply run the default task:

```sh
$ grunt
```

This will perform a build and then a compile. The compiled site - ready for
uploading to the server! - is located in `build/dist/`, taking a cue from
traditional software development. To test that your full site works as
expected, open the `build/dist/index.html` file in your browser. Voila!

### Live Reload!

this kickstarter also includes [Live Reload](http://livereload.com/), so you no
longer have to refresh your page after making changes! You need a Live Reload
browser plugin for this:

- Chrome - [Chrome Webstore](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
- Firefox - [Download from Live Reload](http://download.livereload.com/2.0.8/LiveReload-2.0.8.xpi)
- Safari - [Download from Live Reload](http://download.livereload.com/2.0.9/LiveReload-2.0.9.safariextz)
- Internet Explorer - Surely you jest.

Note that if you're using the Chrome version with `file://` URLs (as is the
default with this kickstarter) you need to tell Live Reload to allow it. Go to
`Menu -> Tools -> Extensions` and check the "Allow access to file URLs" box next
to the Live Reload plugin.

When you load your page, click the Live Reload icon in your toolbar and
everything should work magically. w00t!

If you'd prefer to not install a browser extension, then you must add the
following to the end of the `body` tag in `index.html`:

```html
<script src="http://localhost:35729/livereload.js"></script>
```

Boom!

## Feedback

### Reporting Issuses

See the [issues list][yaas] and feel free to submit your own!

### Contributing

This is an opinionated kickstarter, but the opinions are fluid and
evidence-based. Don't like the way I did something? Think you know of a better
way? Have an idea to make this more useful? Let me know! You can contact me
through all the usual channels or you can open an issue on the GitHub page. If
you're feeling ambitious, you can even submit a pull request - how thoughtful
of you!

So join the team! We're good people.


[angularjs]: http://angularjs.org
[bower]: http://bower.io
[chrome]: https://www.google.com/chrome/
[eddify]: http://eddify.me/posts/better-grunt-files-for-organised-developers.html
[git]: http://git-scm.com/
[gruntjs]: http://gruntjs.org
[jasmine]: http://pivotal.github.com/jasmine/
[jenkins]: https://jenkins-ci.org/
[karma]: http://karma-runner.github.io
[mknabe]: https://github.com/mknabe/angular-testing-starter
[ngbp]: http://bit.ly/ngBoilerplate
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[rhumaric]: http://rhumaric.com/2013/07/renewing-the-grunt-livereload-magic/
[yaas]: http://github.com/New-Edge-Engineering/yet-another-angularjs-seed/issues
