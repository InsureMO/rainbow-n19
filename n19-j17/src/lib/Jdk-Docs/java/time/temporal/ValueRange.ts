import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.ValueRange', [
	[/* class description */
		[/* text */ 't', `The range of valid values for a date-time field.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 All `],
			[/* reference */ 'r', `java.time.temporal.TemporalField`],
			[/* text */ 't', ` instances have a valid range of values.
 For example, the ISO day-of-month runs from 1 to somewhere between 28 and 31.
 This class captures that valid range.
 `]
		]],
		[/* block */ 'b', `
 It is important to be aware of the limitations of this class.
 Only the minimum and maximum values are provided.
 It is possible for there to be invalid values within the outer range.
 For example, a weird field may have valid values of 1, 2, 4, 6, 7, thus
 have a range of '1 - 7', despite that fact that values 3 and 5 are invalid.
 `],
		[/* block */ 'b', `
 Instances of this class are not tied to a specific field.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this range is equal to another range.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based on the four values, minimum, largest minimum,
 smallest maximum and maximum.
 Only objects of type `],
					[/* inline code block */ 'i', `ValueRange`],
					[/* text */ 't', ` are compared, other types return false.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other range`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this range as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The format will be '{min}/{largestMin} - {smallestMax}/{max}',
 where the largestMin or smallestMax sections may be omitted, together
 with associated slash, if they are the same as the min or max.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this range, not null`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this range.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'of(long,long)', [
			[/* method description */
				[/* text */ 't', `Obtains a fixed value range.
 `],
				[/* block */ 'b', `
 This factory obtains a range where the minimum and maximum values are fixed.
 For example, the ISO month-of-year always runs from 1 to 12.`]
			],
			[/* parameters */
				[/* parameter */ 'min', [/* parameter description */
					[/* text */ 't', `the minimum value`]
				]],
				[/* parameter */ 'max', [/* parameter description */
					[/* text */ 't', `the maximum value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the minimum is greater than the maximum`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the ValueRange for min, max, not null`]
			]
		]],
		[/* method */ 'of(long,long,long,long)', [
			[/* method description */
				[/* text */ 't', `Obtains a fully variable value range.
 `],
				[/* block */ 'b', `
 This factory obtains a range where both the minimum and maximum value may vary.`]
			],
			[/* parameters */
				[/* parameter */ 'minSmallest', [/* parameter description */
					[/* text */ 't', `the smallest minimum value`]
				]],
				[/* parameter */ 'minLargest', [/* parameter description */
					[/* text */ 't', `the largest minimum value`]
				]],
				[/* parameter */ 'maxSmallest', [/* parameter description */
					[/* text */ 't', `the smallest maximum value`]
				]],
				[/* parameter */ 'maxLargest', [/* parameter description */
					[/* text */ 't', `the largest maximum value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if
     the smallest minimum is greater than the smallest maximum,
  or the smallest maximum is greater than the largest maximum,
  or the largest minimum is greater than the largest maximum,
  or the smallest minimum is greater than the largest minimum`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the ValueRange for smallest min, largest min, smallest max, largest max, not null`]
			]
		]],
		[/* method */ 'of(long,long,long)', [
			[/* method description */
				[/* text */ 't', `Obtains a variable value range.
 `],
				[/* block */ 'b', `
 This factory obtains a range where the minimum value is fixed and the maximum value may vary.
 For example, the ISO day-of-month always starts at 1, but ends between 28 and 31.`]
			],
			[/* parameters */
				[/* parameter */ 'min', [/* parameter description */
					[/* text */ 't', `the minimum value`]
				]],
				[/* parameter */ 'maxSmallest', [/* parameter description */
					[/* text */ 't', `the smallest maximum value`]
				]],
				[/* parameter */ 'maxLargest', [/* parameter description */
					[/* text */ 't', `the largest maximum value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if
     the minimum is greater than the smallest maximum,
  or the smallest maximum is greater than the largest maximum`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the ValueRange for min, smallest max, largest max, not null`]
			]
		]],
		[/* method */ 'isIntValue()', [
			[/* method description */
				[/* text */ 't', `Checks if all values in the range fit in an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks that all valid values are within the bounds of an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For example, the ISO month-of-year has values from 1 to 12, which fits in an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.
 By comparison, ISO nano-of-day runs from 1 to 86,400,000,000,000 which does not fit in an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This implementation uses `],
					[/* reference */ 'r', `getMinimum()`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `getMaximum()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if a valid value always fits in an `],
				[/* inline code block */ 'i', `int`]
			]
		]],
		[/* method */ 'isValidValue(long)', [
			[/* method description */
				[/* text */ 't', `Checks if the value is within the valid range.
 `],
				[/* block */ 'b', `
 This checks that the value is within the stored range of values.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to check`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the value is valid`]
			]
		]],
		[/* method */ 'checkValidValue(long,java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Checks that the specified value is valid.
 `],
				[/* block */ 'b', `
 This validates that the value is within the valid range of values.
 The field is only used to improve the error message.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to check`]
				]],
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field being checked, may be null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value that was passed in`]
			]
		]],
		[/* method */ 'checkValidIntValue(long,java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Checks that the specified value is valid and fits in an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This validates that the value is within the valid range of values and that
 all valid values are within the bounds of an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.
 The field is only used to improve the error message.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to check`]
				]],
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field being checked, may be null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value that was passed in`]
			]
		]],
		[/* method */ 'getMinimum()', [
			[/* method description */
				[/* text */ 't', `Gets the minimum value that the field can take.
 `],
				[/* block */ 'b', `
 For example, the ISO day-of-month always starts at 1.
 The minimum is therefore 1.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minimum value for this field`]
			]
		]],
		[/* method */ 'getMaximum()', [
			[/* method description */
				[/* text */ 't', `Gets the maximum value that the field can take.
 `],
				[/* block */ 'b', `
 For example, the ISO day-of-month runs to between 28 and 31 days.
 The maximum is therefore 31.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum value for this field`]
			]
		]],
		[/* method */ 'isValidIntValue(long)', [
			[/* method description */
				[/* text */ 't', `Checks if the value is within the valid range and that all values
 in the range fit in an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method combines `],
					[/* reference */ 'r', `isIntValue()`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `isValidValue(long)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to check`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the value is valid and fits in an `],
				[/* inline code block */ 'i', `int`]
			]
		]],
		[/* method */ 'isFixed()', [
			[/* method description */
				[/* text */ 't', `Is the value range fixed and fully known.
 `],
				[/* block */ 'b', `
 For example, the ISO day-of-month runs from 1 to between 28 and 31.
 Since there is uncertainty about the maximum value, the range is not fixed.
 However, for the month of January, the range is always 1 to 31, thus it is fixed.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the set of values is fixed`]
			]
		]],
		[/* method */ 'getLargestMinimum()', [
			[/* method description */
				[/* text */ 't', `Gets the largest possible minimum value that the field can take.
 `],
				[/* block */ 'b', `
 For example, the ISO day-of-month always starts at 1.
 The largest minimum is therefore 1.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the largest possible minimum value for this field`]
			]
		]],
		[/* method */ 'getSmallestMaximum()', [
			[/* method description */
				[/* text */ 't', `Gets the smallest possible maximum value that the field can take.
 `],
				[/* block */ 'b', `
 For example, the ISO day-of-month runs to between 28 and 31 days.
 The smallest maximum is therefore 28.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the smallest possible maximum value for this field`]
			]
		]]
	],
]);
