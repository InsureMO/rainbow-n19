import {RegisteredValueAction, RegisteredValueActionWithParams} from './action-types';
import {has, isBlank, isEmpty, isNotBlank, isNotEmpty, isNotNull, isNull, notHas} from './test-any-actions';
import {after, before, between, notAfter, notBefore, notBetween} from './test-dayjs-actions';
import {
	isDecimal,
	isGreaterThan,
	isGreaterThanOrEqual,
	isInRange,
	isInteger,
	isLessThan,
	isLessThanOrEqual,
	isNegative,
	isNotInRange,
	isNotNegative,
	isNotPositive,
	isNotZero,
	isPositive,
	isZero
} from './test-decimal-actions';
import {
	endsWith,
	includes,
	isNotAnyOf,
	isOneOf,
	notEndsWith,
	notIncludes,
	notStartsWith,
	regexp,
	startsWith
} from './test-string-actions';

const testers = {
	// any
	isNull: {type: 'func', func: isNull} as RegisteredValueAction,
	isNotNull: {type: 'func', func: isNotNull} as RegisteredValueAction,
	isEmpty: {type: 'func', func: isEmpty} as RegisteredValueAction,
	isNotEmpty: {type: 'func', func: isNotEmpty} as RegisteredValueAction,
	isBlank: {type: 'func', func: isBlank} as RegisteredValueAction,
	isNotBlank: {type: 'func', func: isNotBlank} as RegisteredValueAction,
	has: {type: 'param', func: has} as RegisteredValueActionWithParams<typeof has>,
	notHas: {type: 'param', func: notHas} as RegisteredValueActionWithParams<typeof notHas>,
	hasNot: {type: 'param', func: notHas} as RegisteredValueActionWithParams<typeof notHas>,
	// string
	startsWith: {type: 'param', func: startsWith} as RegisteredValueActionWithParams<typeof startsWith>,
	notStartsWith: {type: 'param', func: notStartsWith} as RegisteredValueActionWithParams<typeof notStartsWith>,
	endsWith: {type: 'param', func: endsWith} as RegisteredValueActionWithParams<typeof endsWith>,
	notEndsWith: {type: 'param', func: notEndsWith} as RegisteredValueActionWithParams<typeof notEndsWith>,
	includes: {type: 'param', func: includes} as RegisteredValueActionWithParams<typeof includes>,
	notIncludes: {type: 'param', func: notIncludes} as RegisteredValueActionWithParams<typeof notIncludes>,
	regexp: {type: 'param', func: regexp} as RegisteredValueActionWithParams<typeof regexp>,
	regex: {type: 'param', func: regexp} as RegisteredValueActionWithParams<typeof regexp>,
	matches: {type: 'param', func: regexp} as RegisteredValueActionWithParams<typeof regexp>,
	isOneOf: {type: 'param', func: isOneOf} as RegisteredValueActionWithParams<typeof isOneOf>,
	isNotAnyOf: {type: 'param', func: isNotAnyOf} as RegisteredValueActionWithParams<typeof isNotAnyOf>,
	// decimal, return decimal if test pass
	isNumber: {type: 'func', func: isDecimal} as RegisteredValueAction,
	isDecimal: {type: 'func', func: isDecimal} as RegisteredValueAction,
	isInteger: {type: 'func', func: isInteger} as RegisteredValueAction,
	isInt: {type: 'func', func: isInteger} as RegisteredValueAction,
	isPositive: {type: 'func', func: isPositive} as RegisteredValueAction,
	isNotPositive: {type: 'func', func: isNotPositive} as RegisteredValueAction,
	isNegative: {type: 'func', func: isNegative} as RegisteredValueAction,
	isNotNegative: {type: 'func', func: isNotNegative} as RegisteredValueAction,
	isZero: {type: 'func', func: isZero} as RegisteredValueAction,
	isNotZero: {type: 'func', func: isNotZero} as RegisteredValueAction,
	// decimal with params, return decimal if test pass
	isGreaterThan: {type: 'param', func: isGreaterThan} as RegisteredValueActionWithParams<typeof isGreaterThan>,
	gt: {type: 'param', func: isGreaterThan} as RegisteredValueActionWithParams<typeof isGreaterThan>,
	isGreaterThanOrEqual: {
		type: 'param', func: isGreaterThanOrEqual
	} as RegisteredValueActionWithParams<typeof isGreaterThanOrEqual>,
	gte: {type: 'param', func: isGreaterThanOrEqual} as RegisteredValueActionWithParams<typeof isGreaterThanOrEqual>,
	isLessThan: {type: 'param', func: isLessThan} as RegisteredValueActionWithParams<typeof isLessThan>,
	lt: {type: 'param', func: isLessThan} as RegisteredValueActionWithParams<typeof isLessThan>,
	isLessThanOrEqual: {
		type: 'param', func: isLessThanOrEqual
	} as RegisteredValueActionWithParams<typeof isLessThanOrEqual>,
	lte: {type: 'param', func: isLessThanOrEqual} as RegisteredValueActionWithParams<typeof isLessThanOrEqual>,
	isInRange: {type: 'param', func: isInRange} as RegisteredValueActionWithParams<typeof isInRange>,
	within: {type: 'param', func: isInRange} as RegisteredValueActionWithParams<typeof isInRange>,
	isNotInRange: {type: 'param', func: isNotInRange} as RegisteredValueActionWithParams<typeof isNotInRange>,
	notWithin: {type: 'param', func: isNotInRange} as RegisteredValueActionWithParams<typeof isNotInRange>,
	// date with params, return dayjs if test pass
	before: {type: 'param', func: before} as RegisteredValueActionWithParams<typeof before>,
	notBefore: {type: 'param', func: notBefore} as RegisteredValueActionWithParams<typeof notBefore>,
	after: {type: 'param', func: after} as RegisteredValueActionWithParams<typeof after>,
	notAfter: {type: 'param', func: notAfter} as RegisteredValueActionWithParams<typeof notAfter>,
	between: {type: 'param', func: between} as RegisteredValueActionWithParams<typeof between>,
	notBetween: {type: 'param', func: notBetween} as RegisteredValueActionWithParams<typeof notBetween>
};
export const AllTesters: Readonly<typeof testers> = testers;