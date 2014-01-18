sushi
=====

> A minimal starting point for using ES6 today.

There are currently a ton of tooling options when it comes to trying to transpile ES6 today. Using just a module transpiler doesn't get you all the way and so you ideally want something that also transpiles ES6 language semantics at the same time. This project is an effort to work out a Grunt toolchain that can do this with a level of ease.

WIP. Come back later.

## Toolchain workflow

### Build

* Begin with scripts in a `lib` directory
* Transpile ES6 modules to AMD
* Transpile ES6 modules to CommonJS
* Concatenate AMD
* Concatenate CommonJS
* Concatenate a build for the browser
* Run concatenated builds through Traceur
* Export builds to window
* Uglify browser build
* Copy over an index.html to run

## Features

* ES6 module transpiler + setup (AMD, CJS)
* Traceur compiler + setup
* JSHint linting
* Concat + Uglify
* Mocha + PhantomJS for unit testing
* YUIDoc
* Watch task

