import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.NumberRange', [
	[/* class description */
		[/* text */ 't', `Represents an immutable list of Numbers from a value to a value with a particular step size.

 In general, it isn't recommended using a NumberRange as a key to a map. The range
 0..3 is deemed to be equal to 0.0..3.0 but they have different hashCode values,
 so storing a value using one of these ranges couldn't be retrieved using the other.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Number,java.lang.Number,java.lang.Number)', [
			[/* constructor description */
				[/* text */ 't', `Creates an inclusive `],
				[/* reference */ 'r', `groovy.lang.NumberRange`, `NumberRange`],
				[/* text */ 't', `.
 Creates a reversed range if `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` < `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `start of the range`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `end of the range`]
				]],
				[/* parameter */ 'stepSize', [/* parameter description */
					[/* text */ 't', `the gap between discrete elements in the range`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Number,java.lang.Number,boolean,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `groovy.lang.NumberRange`, `NumberRange`],
				[/* text */ 't', `.
 Creates a reversed range if `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` < `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `start of the range`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `end of the range`]
				]],
				[/* parameter */ 'inclusiveLeft', [/* parameter description */
					[/* text */ 't', `whether the range is includes the lower bound`]
				]],
				[/* parameter */ 'inclusiveRight', [/* parameter description */
					[/* text */ 't', `whether the range is includes the upper bound`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Number,java.lang.Number,java.lang.Number,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `groovy.lang.NumberRange`, `NumberRange`],
				[/* text */ 't', `.
 Creates a reversed range if `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` < `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `start of the range`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `end of the range`]
				]],
				[/* parameter */ 'stepSize', [/* parameter description */
					[/* text */ 't', `the gap between discrete elements in the range`]
				]],
				[/* parameter */ 'inclusive', [/* parameter description */
					[/* text */ 't', `whether the range is inclusive (upper bound)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Number,java.lang.Number,java.lang.Number,boolean,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `groovy.lang.NumberRange`, `NumberRange`],
				[/* text */ 't', `.
 Creates a reversed range if `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` < `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `start of the range`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `end of the range`]
				]],
				[/* parameter */ 'stepSize', [/* parameter description */
					[/* text */ 't', `the gap between discrete elements in the range`]
				]],
				[/* parameter */ 'inclusiveLeft', [/* parameter description */
					[/* text */ 't', `whether the range is includes the lower bound`]
				]],
				[/* parameter */ 'inclusiveRight', [/* parameter description */
					[/* text */ 't', `whether the range is includes the upper bound`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Number,java.lang.Number)', [
			[/* constructor description */
				[/* text */ 't', `Creates an inclusive `],
				[/* reference */ 'r', `groovy.lang.NumberRange`, `NumberRange`],
				[/* text */ 't', ` with step size 1.
 Creates a reversed range if `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` < `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the first value in the range`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the last value in the range`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Number,java.lang.Number,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* reference */ 'r', `groovy.lang.NumberRange`, `NumberRange`],
				[/* text */ 't', ` with step size 1.
 Creates a reversed range if `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` < `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `start of the range`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `end of the range`]
				]],
				[/* parameter */ 'inclusive', [/* parameter description */
					[/* text */ 't', `whether the range is inclusive`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'by(java.lang.Number)', [
			[/* method description */
				[/* text */ 't', `For a NumberRange with step size 1, creates a new NumberRange with the same
 `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', ` as this NumberRange
 but with a step size of `],
				[/* inline code block */ 'i', `stepSize`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'stepSize', [/* parameter description */
					[/* text */ 't', `the desired step size`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a new NumberRange`]
			]
		]],
		[/* method */ 'contains(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `iterates over all values and returns true if one value matches.
 Also see containsWithinBounds.`]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'containsWithinBounds(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks whether a value is between the from and to values of a Range`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value of interest`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the value is within the bounds`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `An object is deemed equal to this NumberRange if it represents a List of items and
 those items equal the list of discrete items represented by this NumberRange.`]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `the object to be compared for equality with this NumberRange`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified object is equal to this NumberRange`]
			]
		]],
		[/* method */ 'fastEquals(groovy.lang.NumberRange)', [
			[/* method description */
				[/* text */ 't', `Compares a `],
				[/* reference */ 'r', `groovy.lang.NumberRange`, `NumberRange`],
				[/* text */ 't', ` to another `],
				[/* reference */ 'r', `groovy.lang.NumberRange`, `NumberRange`],
				[/* text */ 't', ` using only a strict comparison
 of the NumberRange properties. This won't return true for some ranges which represent the same
 discrete items, use equals instead for that but will be much faster for large lists.`]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `the NumberRange to check equality with`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the ranges are equal`]
			]
		]],
		[/* method */ 'isReverse()', [
			[/* method description */
				[/* block */ 'b', `Indicates whether this is a reverse range which iterates backwards
 starting from the to value and ending on the from value`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this is a reverse range`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A NumberRange's hashCode is based on hashCode values of the discrete items it represents.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the hashCode value`]
			]
		]],
		[/* method */ 'size()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'get(int)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'getFrom()', [
			[/* method description */
				[/* block */ 'b', `The lower value in the range.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the lower value in the range.`]
			]
		]],
		[/* method */ 'getStepSize()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'getTo()', [
			[/* method description */
				[/* block */ 'b', `The upper value in the range.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the upper value in the range`]
			]
		]],
		[/* method */ 'inspect()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the verbose `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/8/docs/api/java/lang/String.html`, `String`],
				[/* text */ 't', ` representation of this `],
				[/* reference */ 'r', `groovy.lang.Range`, `Range`],
				[/* text */ 't', ` as would be typed into a console to create the `],
				[/* reference */ 'r', `groovy.lang.Range`, `Range`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'toString()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'iterator()', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'step(int)', [
			[/* method description */
				[/* block */ 'b', `Forms a list by stepping through the range by the indicated interval.`]
			],
			[/* parameters */
				[/* parameter */ 'numSteps', [/* parameter description */
					[/* text */ 't', `the amount by which to step. If negative, steps through the range backwards.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the list formed by stepping through the range by the indicated interval.`]
			]
		]],
		[/* method */ 'subList(int,int)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'step(int,groovy.lang.Closure)', [
			[/* method description */
				[/* text */ 't', `Steps through the range, calling a closure for each item.`]
			],
			[/* parameters */
				[/* parameter */ 'numSteps', [/* parameter description */
					[/* text */ 't', `the amount by which to step. If negative, steps through the range backwards.`]
				]],
				[/* parameter */ 'closure', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `groovy.lang.Closure`, `Closure`],
					[/* text */ 't', ` to call`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
