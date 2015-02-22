/**
*
*	VALIDATE: finite
*
*
*	DESCRIPTION:
*		- Validates if a value is a finite number.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isNumber = require( 'validate.io-number' );

// VARIABLES //

var pinf = Number.POSITIVE_INFINITY,
	ninf = Number.NEGATIVE_INFINITY;

// ISFINITE //

/**
* FUNCTION: isFiniteNumber( value )
*	Validates if a value is a finite number.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a finite number
*/
function isFiniteNumber( value ) {
	return isNumber( value ) && value !== pinf && value !== ninf;
} // end FUNCTION isFiniteNumber()


// EXPORTS //

module.exports = isFiniteNumber;
