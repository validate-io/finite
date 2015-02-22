Finite
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a finite number.


## Installation

``` bash
$ npm install validate.io-finite
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isFiniteNumber = require( 'validate.io-finite' );
```

#### isFiniteNumber( value )

Validates if a `value` is a finite `number`.

``` javascript
var value = Number.MAX_VALUE;

var bool = isFiniteNumber( value );
// returns true
```

__Note__: this method differs from the `global` method `isFinite()` in that the `global` method will validate non-numeric values. For any non-numeric `value`, this method returns `false`.


## Examples

``` javascript
var isFiniteNumber = require( 'validate.io-finite' );

console.log( isFiniteNumber( Number.MAX_VALUE ) );
// returns true

console.log( isFiniteNumber( Number.POSITIVE_INFINITY ) );
// returns false

console.log( isFiniteNumber( NaN ) );
// returns false

console.log( isFiniteNumber( '5' ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-finite.svg
[npm-url]: https://npmjs.org/package/validate.io-finite

[travis-image]: http://img.shields.io/travis/validate-io/finite/master.svg
[travis-url]: https://travis-ci.org/validate-io/finite

[coveralls-image]: https://img.shields.io/coveralls/validate-io/finite/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/finite?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/finite.svg
[dependencies-url]: https://david-dm.org/validate-io/finite

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/finite.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/finite

[github-issues-image]: http://img.shields.io/github/issues/validate-io/finite.svg
[github-issues-url]: https://github.com/validate-io/finite/issues
