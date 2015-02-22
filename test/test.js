/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isFiniteNumber = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-finite', function tests() {

	it( 'should export a function', function test() {
		expect( isFiniteNumber ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isFiniteNumber( Number.MAX_VALUE );
		assert.ok( bool );

		bool = isFiniteNumber( 5 );
		assert.ok( bool );

		bool = isFiniteNumber( new Number( 5 ) );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			'5',
			Number.POSITIVE_INFINITY,
			Number.NEGATIVE_INFINITY,
			0/0,
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isFiniteNumber( value );
		}
	});

});
