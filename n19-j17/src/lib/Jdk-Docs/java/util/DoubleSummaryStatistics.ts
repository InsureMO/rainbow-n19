import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.DoubleSummaryStatistics', [
	[/* class description */
		[/* text */ 't', `A state object for collecting statistics such as count, min, max, sum, and
 average.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This class is designed to work with (though does not require)
 `],
			[/* text */ 't', `streams`],
			[/* text */ 't', `. For example, you can compute
 summary statistics on a stream of doubles with:
 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `DoubleSummaryStatistics stats = doubleStream.collect(DoubleSummaryStatistics::new,
                                                      DoubleSummaryStatistics::accept,
                                                      DoubleSummaryStatistics::combine);`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `DoubleSummaryStatistics`],
			[/* text */ 't', ` can be used as a
 `],
			[/* reference */ 'r', `java.util.stream.Stream#collect(java.util.stream.Collector)`, `reduction`],
			[/* text */ 't', `
 target for a `],
			[/* reference */ 'r', `java.util.stream.Stream`, `stream`],
			[/* text */ 't', `. For example:

 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `DoubleSummaryStatistics stats = people.stream()
     .collect(Collectors.summarizingDouble(Person::getWeight));`]
		]],
		[/* text */ 't', `

 This computes, in a single pass, the count of people, as well as the minimum,
 maximum, sum, and average of their weights.`],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty instance with zero count, zero sum,
 `],
				[/* inline code block */ 'i', `Double.POSITIVE_INFINITY`],
				[/* text */ 't', ` min, `],
				[/* inline code block */ 'i', `Double.NEGATIVE_INFINITY`],
				[/* text */ 't', `
 max and zero average.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(long,double,double,double)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a non-empty instance with the specified `],
				[/* inline code block */ 'i', `count`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `min`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `max`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `sum`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` is zero then the remaining arguments are ignored and
 an empty instance is constructed.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the arguments are inconsistent then an `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', `
 is thrown.  The necessary consistent argument conditions are:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `count >= 0`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `(min <= max && !isNaN(sum)) || (isNaN(min) && isNaN(max) && isNaN(sum))`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'count', [/* parameter description */
					[/* text */ 't', `the count of values`]
				]],
				[/* parameter */ 'min', [/* parameter description */
					[/* text */ 't', `the minimum value`]
				]],
				[/* parameter */ 'max', [/* parameter description */
					[/* text */ 't', `the maximum value`]
				]],
				[/* parameter */ 'sum', [/* parameter description */
					[/* text */ 't', `the sum of all values`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the arguments are inconsistent`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'getAverage()', [
			[/* method description */
				[/* text */ 't', `Returns the arithmetic mean of values recorded, or zero if no
 values have been recorded.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The computed average can vary numerically and have the
 special case behavior as computing the sum; see `],
					[/* reference */ 'r', `#getSum()`, `getSum()`],
					[/* text */ 't', `
 for details.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the arithmetic mean of values, or zero if none`]
			]
		]],
		[/* method */ 'getMax()', [
			[/* method description */
				[/* text */ 't', `Returns the maximum recorded value, `],
				[/* inline code block */ 'i', `Double.NaN`],
				[/* text */ 't', ` if any recorded
 value was NaN or `],
				[/* inline code block */ 'i', `Double.NEGATIVE_INFINITY`],
				[/* text */ 't', ` if no values were
 recorded. Unlike the numerical comparison operators, this method
 considers negative zero to be strictly smaller than positive zero.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum recorded value, `],
				[/* inline code block */ 'i', `Double.NaN`],
				[/* text */ 't', ` if any recorded
 value was NaN or `],
				[/* inline code block */ 'i', `Double.NEGATIVE_INFINITY`],
				[/* text */ 't', ` if no values were
 recorded`]
			]
		]],
		[/* method */ 'getMin()', [
			[/* method description */
				[/* text */ 't', `Returns the minimum recorded value, `],
				[/* inline code block */ 'i', `Double.NaN`],
				[/* text */ 't', ` if any recorded
 value was NaN or `],
				[/* inline code block */ 'i', `Double.POSITIVE_INFINITY`],
				[/* text */ 't', ` if no values were
 recorded. Unlike the numerical comparison operators, this method
 considers negative zero to be strictly smaller than positive zero.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minimum recorded value, `],
				[/* inline code block */ 'i', `Double.NaN`],
				[/* text */ 't', ` if any recorded
 value was NaN or `],
				[/* inline code block */ 'i', `Double.POSITIVE_INFINITY`],
				[/* text */ 't', ` if no values were
 recorded`]
			]
		]],
		[/* method */ 'getSum()', [
			[/* method description */
				[/* text */ 't', `Returns the sum of values recorded, or zero if no values have been
 recorded.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The value of a floating-point sum is a function both of the
 input values as well as the order of addition operations. The
 order of addition operations of this method is intentionally
 not defined to allow for implementation flexibility to improve
 the speed and accuracy of the computed result.

 In particular, this method may be implemented using compensated
 summation or other technique to reduce the error bound in the
 numerical sum compared to a simple summation of `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', `
 values.

 Because of the unspecified order of operations and the
 possibility of using differing summation schemes, the output of
 this method may vary on the same input values.

 `]
				]],
				[/* block */ 'b', `Various conditions can result in a non-finite sum being
 computed. This can occur even if the all the recorded values
 being summed are finite. If any recorded value is non-finite,
 the sum will be non-finite:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If any recorded value is a NaN, then the final sum will be
 NaN.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `If the recorded values contain one or more infinities, the
 sum will be infinite or NaN.

 `],
						[/* list */ 'l', [
							[/* block */ 'b', `If the recorded values contain infinities of opposite sign,
 the sum will be NaN.

 `],
							[/* block */ 'b', `If the recorded values contain infinities of one sign and
 an intermediate sum overflows to an infinity of the opposite
 sign, the sum may be NaN.

 `]
						]]
					]]
				]],
				[/* text */ 't', `

 It is possible for intermediate sums of finite values to
 overflow into opposite-signed infinities; if that occurs, the
 final sum will be NaN even if the recorded values are all
 finite.

 If all the recorded values are zero, the sign of zero is
 `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` guaranteed to be preserved in the final sum.`],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the sum of values, or zero if none`]
			]
		]],
		[/* method */ 'getCount()', [
			[/* method description */
				[/* text */ 't', `Return the count of values recorded.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the count of values`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a non-empty string representation of this object suitable for
 debugging. The exact presentation format is unspecified and may vary
 between implementations and versions.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the object.`]
			]
		]],
		[/* method */ 'accept(double)', [
			[/* method description */
				[/* text */ 't', `Records another value into the summary information.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the input value`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'combine(java.util.DoubleSummaryStatistics)', [
			[/* method description */
				[/* text */ 't', `Combines the state of another `],
				[/* inline code block */ 'i', `DoubleSummaryStatistics`],
				[/* text */ 't', ` into this
 one.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `another `],
					[/* inline code block */ 'i', `DoubleSummaryStatistics`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `other`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
