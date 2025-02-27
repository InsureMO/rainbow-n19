import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.IntRange', [
	[/* class description */
		[/* text */ 't', `Represents a list of Integer objects starting at and potentially including a specified
 `],
		[/* inline code block */ 'i', `from`],
		[/* text */ 't', ` value up (or down) to and potentially including a given `],
		[/* inline code block */ 'i', `to`],
		[/* text */ 't', ` value.
 `],
		[/* block */ 'b', `
 Instances of this class may be either inclusive aware or non-inclusive aware. See the
 relevant constructors for creating each type. Inclusive aware IntRange instances are
 suitable for use with Groovy's range indexing - in particular if the from or to values
 might be negative. This normally happens underneath the covers but is worth keeping
 in mind if creating these ranges yourself explicitly.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Note: the design of this class might seem a little strange at first. It contains Boolean
 flags, `],
			[/* inline code block */ 'i', `inclusiveLeft`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `inclusiveRight`],
			[/* text */ 't', `, which can be `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `false`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `. This design is for backwards compatibility reasons.
 Groovy uses this class under the covers to represent range indexing, e.g.
 `],
			[/* inline code block */ 'i', `someList[x..y]`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `someString[x..<y]`],
			[/* text */ 't', `. In early versions of Groovy the
 ranges in these expressions were represented under the covers by the
 `],
			[/* inline code block */ 'i', `new IntRange(x, y)`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `new IntRange(x, y-1)`],
			[/* text */ 't', `. This turns out to be a
 lossy abstraction when x and/or y are negative values. Now the latter case is
 represented by `],
			[/* inline code block */ 'i', `new IntRange(false, x, y)`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Note: This class is a copy of `],
			[/* reference */ 'r', `groovy.lang.ObjectRange`],
			[/* text */ 't', ` optimized for `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', `. If you make any
 changes to this class, you might consider making parallel changes to `],
			[/* reference */ 'r', `groovy.lang.ObjectRange`],
			[/* text */ 't', `.`]
		]]
	],
	/* class sees */ UDF,
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(boolean,boolean,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new inclusive aware `],
				[/* inline code block */ 'i', `IntRange`]
			],
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]],
		[/* constructor */ '<init>(boolean,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new inclusive aware `],
				[/* inline code block */ 'i', `IntRange`],
				[/* text */ 't', `.`]
			],
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]],
		[/* constructor */ '<init>(int,int,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new non-inclusive aware `],
				[/* inline code block */ 'i', `IntRange`],
				[/* text */ 't', `.`]
			],
			/* constructor sees */ UDF,
			/* constructor parameters */ UDF,
			/* constructor throwns */ UDF
		]],
		[/* constructor */ '<init>(int,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new non-inclusive aware `],
				[/* inline code block */ 'i', `IntRange`],
				[/* text */ 't', `. If `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` is greater than
 `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', `, a reverse range is created with `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', ` swapped.`]
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
		[/* method */ 'equals(groovy.lang.IntRange)', [
			[/* method description */
				[/* text */ 't', `Compares an `],
				[/* reference */ 'r', `groovy.lang.IntRange`],
				[/* text */ 't', ` to another `],
				[/* reference */ 'r', `groovy.lang.IntRange`],
				[/* text */ 't', `.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Determines if this object is equal to another object. Delegates to
 `],
				[/* reference */ 'r', `java.util.AbstractList.equals(Object)`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `that`],
				[/* text */ 't', ` is anything
 other than an `],
				[/* reference */ 'r', `groovy.lang.IntRange`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 It is not necessary to override `],
					[/* inline code block */ 'i', `hashCode`],
					[/* text */ 't', `, as
 `],
					[/* reference */ 'r', `java.util.AbstractList.hashCode()`],
					[/* text */ 't', ` provides a suitable hash code.`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that equals is generally handled by `],
					[/* external link */ 'a', `../../org/codehaus/groovy/runtime/DefaultGroovyMethods.html#equals(java.util.List,java.util.List)`, `DefaultGroovyMethods.equals(List, List)`],
					[/* text */ 't', `
 instead of this method.`]
				]]
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
			/* method description */ UDF,
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'containsAll(java.util.Collection)', [
			/* method description */ UDF,
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
		[/* method */ 'getFrom()', [
			[/* method description */
				[/* block */ 'b', `The lower value in the range.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getInclusiveRight()', [
			[/* method description */
				[/* text */ 't', `Returns the inclusiveRight flag. Null for non-inclusive aware ranges or non-null for inclusive aware ranges.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getInclusive()', [
			[/* method description */
				[/* text */ 't', `Returns the same as `],
				[/* inline code block */ 'i', `getInclusiveRight`],
				[/* text */ 't', `, kept here for backwards compatibility.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getInclusiveLeft()', [
			[/* method description */
				[/* text */ 't', `Returns the inclusiveLeft flag. Null for non-inclusive aware ranges or non-null for inclusive aware ranges.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'containsWithinBounds(java.lang.Object)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Indicates whether an object is greater than or equal to the `],
					[/* inline code block */ 'i', `from`],
					[/* text */ 't', `
 value for the range and less than or equal to the `],
					[/* inline code block */ 'i', `to`],
					[/* text */ 't', ` value.
 `],
					[/* block */ 'b', `
 This may be true even for values not contained in the range.

 Example: from = 1.5, to = 3, next() increments by 1
 containsWithinBounds(2) == true
 contains(2) == false`]
				]]
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
				[/* text */ 't', `Creates a new NumberRange with the same `],
				[/* inline code block */ 'i', `from`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `to`],
				[/* text */ 't', ` as this
 IntRange but with a step size of `],
				[/* inline code block */ 'i', `stepSize`],
				[/* text */ 't', `.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getFromInt()', [
			[/* method description */
				[/* text */ 't', `Gets the 'from' value as a primitive integer.`]
			],
			/* method sees */ UDF,
			/* method parameters */ UDF,
			/* method throwns */ UDF,
			/* method return */ UDF
		]],
		[/* method */ 'getToInt()', [
			[/* method description */
				[/* text */ 't', `Gets the 'to' value as a primitive integer.`]
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
