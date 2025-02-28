import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.LongSummaryStatistics', [
	[/* class description */
		[/* text */ 't', `A state object for collecting statistics such as count, min, max, sum, and
 average.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This class is designed to work with (though does not require)
 `],
			[/* external link */ 'a', `stream/package-summary.html`, `streams`],
			[/* text */ 't', `. For example, you can compute
 summary statistics on a stream of longs with:
 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `LongSummaryStatistics stats = longStream.collect(LongSummaryStatistics::new,
                                                  LongSummaryStatistics::accept,
                                                  LongSummaryStatistics::combine);`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `LongSummaryStatistics`],
			[/* text */ 't', ` can be used as a
 `],
			[/* external link */ 'a', `stream/Stream.html#collect(java.util.stream.Collector)`, `reduction`],
			[/* text */ 't', `
 target for a `],
			[/* reference */ 'r', `java.util.stream.Stream`],
			[/* text */ 't', `. For example:

 `]
		]],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `LongSummaryStatistics stats = people.stream()
                                     .collect(Collectors.summarizingLong(Person::getAge));`]
		]],
		[/* text */ 't', `

 This computes, in a single pass, the count of people, as well as the minimum,
 maximum, sum, and average of their ages.`],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an empty instance with zero count, zero sum,
 `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` min, `],
				[/* inline code block */ 'i', `Long.MIN_VALUE`],
				[/* text */ 't', ` max and zero
 average.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(long,long,long,long)', [
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
						[/* inline code block */ 'i', `min <= max`]
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
		[/* method */ 'accept(int)', [
			[/* method description */
				[/* text */ 't', `Records a new `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value into the summary information.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the input value`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'accept(long)', [
			[/* method description */
				[/* text */ 't', `Records a new `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value into the summary information.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the input value`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'combine(java.util.LongSummaryStatistics)', [
			[/* method description */
				[/* text */ 't', `Combines the state of another `],
				[/* inline code block */ 'i', `LongSummaryStatistics`],
				[/* text */ 't', ` into this
 one.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `another `],
					[/* inline code block */ 'i', `LongSummaryStatistics`]
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
		]],
		[/* method */ 'getCount()', [
			[/* method description */
				[/* text */ 't', `Returns the count of values recorded.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the count of values`]
			]
		]],
		[/* method */ 'getSum()', [
			[/* method description */
				[/* text */ 't', `Returns the sum of values recorded, or zero if no values have been
 recorded.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the sum of values, or zero if none`]
			]
		]],
		[/* method */ 'getMin()', [
			[/* method description */
				[/* text */ 't', `Returns the minimum value recorded, or `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` if no
 values have been recorded.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minimum value, or `],
				[/* inline code block */ 'i', `Long.MAX_VALUE`],
				[/* text */ 't', ` if none`]
			]
		]],
		[/* method */ 'getAverage()', [
			[/* method description */
				[/* text */ 't', `Returns the arithmetic mean of values recorded, or zero if no values have been
 recorded.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The arithmetic mean of values, or zero if none`]
			]
		]],
		[/* method */ 'getMax()', [
			[/* method description */
				[/* text */ 't', `Returns the maximum value recorded, or `],
				[/* inline code block */ 'i', `Long.MIN_VALUE`],
				[/* text */ 't', ` if no
 values have been recorded`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum value, or `],
				[/* inline code block */ 'i', `Long.MIN_VALUE`],
				[/* text */ 't', ` if none`]
			]
		]]
	],
]);
