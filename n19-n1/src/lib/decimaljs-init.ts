import Decimal from 'decimal.js';

Decimal.set({
	precision: 100,     // default is 20
	toExpNeg: -9e15,	// default is -7, try to never use exponential notation
	toExpPos: 9e15		// default is 20, try to never use exponential notation
});