'use strict';

var isFiniteNumber = require( './../lib' );

console.log( isFiniteNumber( Number.MAX_VALUE ) );
// returns true

console.log( isFiniteNumber( Number.POSITIVE_INFINITY ) );
// returns false

console.log( isFiniteNumber( NaN ) );
// returns false

console.log( isFiniteNumber( '5' ) );
// returns false
