# find-newer-npm-package [![Build Status](https://travis-ci.org/kesla/find-newer-npm-package.png?branch=master)](https://travis-ci.org/kesla/find-newer-npm-package)

Given a npm version &amp; a list of available npm versions, get all newer (based upon semver ^ or ~) packages

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install find-newer-npm-package --save
```


## Tests

```sh
npm install
npm test
```

## Dependencies

- [array-from](https://github.com/studio-b12/array-from): A ponyfill for the ES 2015 (ES6) `Array.from()`.
- [es6-set](https://github.com/medikoo/es6-set): ECMAScript6 Set polyfill
- [semver](https://github.com/npm/node-semver): The semantic version parser used by npm.

## Dev Dependencies

- [babel-cli](https://github.com/babel/babel/tree/master/packages): Babel command line.
- [babel-core](https://github.com/babel/babel/tree/master/packages): Babel compiler core.
- [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages): Babel preset for all es2015 plugins.
- [babel-tape-runner](https://github.com/wavded/babel-tape-runner): Babel + Tape for running your ES Next tests
- [package-json-to-readme](https://github.com/zeke/package-json-to-readme): Generate a README.md from package.json contents
- [semistandard](https://github.com/Flet/semistandard): All the goodness of `feross/standard` with semicolons sprinkled on top.
- [snazzy](https://github.com/feross/snazzy): Format JavaScript Standard Style as Stylish (i.e. snazzy) output
- [tapava](https://github.com/kesla/tapava): the syntax of ava, run through tape


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
