import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.NumberRange', [
	[/* class description */
		[/* text */ 't', `Represents an immutable list of Numbers from a value to a value with a particular step size.

 In general, it isn't recommended using a NumberRange as a key to a map. The range
 0..3 is deemed to be equal to 0.0..3.0 but they have different hashCode values,
 so storing a value using one of these ranges couldn't be retrieved using the other.`]
	],
	/* class sees */ UDF,
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Number,java.lang.Number,java.lang.Number,boolean,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `groovy.lang.NumberRange`],
				[/* text */ 't', `.
 Creates a reversed range if `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` &lt; `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `.`]
			],
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Number,java.lang.Number,boolean,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `groovy.lang.NumberRange`],
				[/* text */ 't', `.
 Creates a reversed range if `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` &lt; `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `.`]
			],
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Number,java.lang.Number,java.lang.Number,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* reference */ 'r', `groovy.lang.NumberRange`],
				[/* text */ 't', `.
 Creates a reversed range if `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` &lt; `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `.`]
			],
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Number,java.lang.Number)', [
			[/* constructor description */
				[/* text */ 't', `Creates an inclusive `],
				[/* reference */ 'r', `groovy.lang.NumberRange`],
				[/* text */ 't', ` with step size 1.
 Creates a reversed range if `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` &lt; `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `.`]
			],
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Number,java.lang.Number,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* reference */ 'r', `groovy.lang.NumberRange`],
				[/* text */ 't', ` with step size 1.
 Creates a reversed range if `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` &lt; `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `.`]
			],
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Number,java.lang.Number,java.lang.Number)', [
			[/* constructor description */
				[/* text */ 't', `Creates an inclusive `],
				[/* reference */ 'r', `groovy.lang.NumberRange`],
				[/* text */ 't', `.
 Creates a reversed range if `],
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
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `An object is deemed equal to this NumberRange if it represents a List of items and
 those items equal the list of discrete items represented by this NumberRange.`]
			],
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
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A NumberRange's hashCode is based on hashCode values of the discrete items it represents.`]
			],
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
				[/* text */ 't', `iterates over all values and returns true if one value matches.
 Also see containsWithinBounds.`]
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
		[/* method */ 'step(int,groovy.lang.Closure)', [
			[/* method description */
				[/* text */ 't', `Steps through the range, calling a closure for each item.`]
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
		[/* method */ 'getStepSize()', [
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'fastEquals(groovy.lang.NumberRange)', [
			[/* method description */
				[/* text */ 't', `Compares a `],
				[/* reference */ 'r', `groovy.lang.NumberRange`],
				[/* text */ 't', ` to another `],
				[/* reference */ 'r', `groovy.lang.NumberRange`],
				[/* text */ 't', ` using only a strict comparison
 of the NumberRange properties. This won't return true for some ranges which represent the same
 discrete items, use equals instead for that but will be much faster for large lists.`]
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
