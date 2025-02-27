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
			[/* reference */ 'r', `groovy.lang.IntRange`],
			[/* text */ 't', `. If you make any changes to this
 class, you might consider making parallel changes to `],
			[/* reference */ 'r', `groovy.lang.IntRange`],
			[/* text */ 't', `.`]
		]]
	],
	/* class sees */ UDF,
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Comparable,java.lang.Comparable,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* reference */ 'r', `groovy.lang.ObjectRange`],
				[/* text */ 't', ` assumes smaller &lt;= larger, else behavior is undefined.
 Caution: Prefer the other constructor when in doubt.
 `],
				[/* block */ 'b', `
 Optimized Constructor avoiding initial computation of comparison.`]
			],
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Comparable,java.lang.Comparable)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* reference */ 'r', `groovy.lang.ObjectRange`],
				[/* text */ 't', `. Creates a reversed range if
 `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` &lt; `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `.`]
			],
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'get(int)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'equals(groovy.lang.ObjectRange)', [
			[/* method description */
				[/* text */ 't', `Compares an `],
				[/* reference */ 'r', `groovy.lang.ObjectRange`],
				[/* text */ 't', ` to another `],
				[/* reference */ 'r', `groovy.lang.ObjectRange`],
				[/* text */ 't', `.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'equals(java.lang.Object)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'toString()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'compareTo(java.lang.Comparable,java.lang.Comparable)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'size()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'subList(int,int)', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'iterator()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'contains(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Iterates over all values and returns true if one value matches.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'increment(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Increments by one`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'step(int,groovy.lang.Closure)', [
			[/* method description */
				[/* block */ 'b', `Steps through the range, calling a closure for each item.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'step(int)', [
			[/* method description */
				[/* block */ 'b', `Forms a list by stepping through the range by the indicated interval.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'decrement(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Decrements by one`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getFrom()', [
			[/* method description */
				[/* block */ 'b', `The lower value in the range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'containsWithinBounds(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks whether a value is between the from and to values of a Range`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'checkBoundaryCompatibility()', [
			[/* method description */
				[/* text */ 't', `throws IllegalArgumentException if to and from are incompatible, meaning they e.g. (likely) produce infinite sequences.
 Called at construction time, subclasses may override cautiously (using only members to and from).`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getTo()', [
			[/* method description */
				[/* block */ 'b', `The upper value in the range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'isReverse()', [
			[/* method description */
				[/* block */ 'b', `Indicates whether this is a reverse range which iterates backwards
 starting from the to value and ending on the from value`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'inspect()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]]
	],
]);
