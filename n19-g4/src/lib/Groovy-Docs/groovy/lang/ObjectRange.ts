import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.ObjectRange', [
	[/* class description */
		[/* text */ 't', `Represents an inclusive list of objects from a value to a value using
 comparators.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Note: This class is similar to `],
			[/* reference */ 'r', `groovy.lang.IntRange`, `IntRange`],
			[/* text */ 't', `. If you make any changes to this
 class, you might consider making parallel changes to `],
			[/* reference */ 'r', `groovy.lang.IntRange`, `IntRange`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Comparable,java.lang.Comparable)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* reference */ 'r', `groovy.lang.ObjectRange`, `ObjectRange`],
				[/* text */ 't', `. Creates a reversed range if
 `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` < `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the first value in the range.`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the last value in the range.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Comparable,java.lang.Comparable,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* reference */ 'r', `groovy.lang.ObjectRange`, `ObjectRange`],
				[/* text */ 't', ` assumes smaller <= larger, else behavior is undefined.
 Caution: Prefer the other constructor when in doubt.
 `],
				[/* block */ 'b', `
 Optimized Constructor avoiding initial computation of comparison.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'compareTo(java.lang.Comparable,java.lang.Comparable)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'decrement(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Decrements by one`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to decrement`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the decremented value`]
			]
		]],
		[/* method */ 'increment(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Increments by one`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to increment`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the incremented value`]
			]
		]],
		[/* method */ 'checkBoundaryCompatibility()', [
			[/* method description */
				[/* text */ 't', `throws IllegalArgumentException if to and from are incompatible, meaning they e.g. (likely) produce infinite sequences.
 Called at construction time, subclasses may override cautiously (using only members to and from).`]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'contains(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Iterates over all values and returns true if one value matches.`]
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
		[/* method */ 'equals(groovy.lang.ObjectRange)', [
			[/* method description */
				[/* text */ 't', `Compares an `],
				[/* reference */ 'r', `groovy.lang.ObjectRange`, `ObjectRange`],
				[/* text */ 't', ` to another `],
				[/* reference */ 'r', `groovy.lang.ObjectRange`, `ObjectRange`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `the object to check equality with`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the ranges are equal`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			/* method description */,
			/* parameters */,
			/* throws */,
			/* return */ UDF
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
				[/* parameter */ 'step', [/* parameter description */
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
				[/* block */ 'b', `Steps through the range, calling a closure for each item.`]
			],
			[/* parameters */
				[/* parameter */ 'step', [/* parameter description */
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
