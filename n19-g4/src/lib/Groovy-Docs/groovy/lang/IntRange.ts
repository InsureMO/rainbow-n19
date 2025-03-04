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
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(int,int,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new non-inclusive aware `],
				[/* inline code block */ 'i', `IntRange`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the first value in the range.`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the last value in the range.`]
				]],
				[/* parameter */ 'reverse', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the range should count from
                `],
					[/* inline code block */ 'i', `to`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `from`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `from`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `to`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>(boolean,boolean,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new inclusive aware `],
				[/* inline code block */ 'i', `IntRange`]
			],
			[/* parameters */
				[/* parameter */ 'inclusiveLeft', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the from value is included in the range.`]
				]],
				[/* parameter */ 'inclusiveRight', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the to value is included in the range.`]
				]],
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the first value in the range.`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the last value in the range.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(boolean,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new inclusive aware `],
				[/* inline code block */ 'i', `IntRange`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the first value in the range.`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the last value in the range.`]
				]],
				[/* parameter */ 'inclusiveRight', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the to value is included in the range.`]
				]]
			],
			/* throws */ UDF
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
			[/* parameters */
				[/* parameter */ 'from', [/* parameter description */
					[/* text */ 't', `the first number in the range.`]
				]],
				[/* parameter */ 'to', [/* parameter description */
					[/* text */ 't', `the last number in the range.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the range would contain more than `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html#MAX_VALUE`, `Integer.MAX_VALUE`],
					[/* text */ 't', ` values.`]
				]]
			]
		]]
	],
	[/* methods */
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
			[/* parameters */
				[/* parameter */ 'stepSize', [/* parameter description */
					[/* text */ 't', `the desired step size`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new NumberRange`]
			]
		]],
		[/* method */ 'contains(java.lang.Object)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'containsAll(java.util.Collection)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
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
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the object to check against the boundaries of the range`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the object is between the from and to values`]
			]
		]],
		[/* method */ 'equals(groovy.lang.IntRange)', [
			[/* method description */
				[/* text */ 't', `Compares an `],
				[/* reference */ 'r', `groovy.lang.IntRange`],
				[/* text */ 't', ` to another `],
				[/* reference */ 'r', `groovy.lang.IntRange`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `the object to compare for equality`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the ranges are equal`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Determines if this object is equal to another object. Delegates to
 `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/8/docs/api/java/util/AbstractList.html#equals-java.lang.Object-`, `AbstractList.equals(Object)`],
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
					[/* external link */ 'a', `https://docs.oracle.com/javase/8/docs/api/java/util/AbstractList.html#hashCode--`, `AbstractList.hashCode()`],
					[/* text */ 't', ` provides a suitable hash code.`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that equals is generally handled by `],
					[/* reference */ 'r', `groovy.lang.codehaus.groovy.runtime.DefaultGroovyMethods#equals(java.util.List,java.util.List)`],
					[/* text */ 't', `
 instead of this method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `the object to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the objects are equal`]
			]
		]],
		[/* method */ 'isReverse()', [
			[/* method description */
				[/* block */ 'b', `Indicates whether this is a reverse range which iterates backwards
 starting from the to value and ending on the from value`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this is a reverse range`]
			]
		]],
		[/* method */ 'getFromInt()', [
			[/* method description */
				[/* text */ 't', `Gets the 'from' value as a primitive integer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the 'from' value as a primitive integer.`]
			]
		]],
		[/* method */ 'getToInt()', [
			[/* method description */
				[/* text */ 't', `Gets the 'to' value as a primitive integer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the 'to' value as a primitive integer.`]
			]
		]],
		[/* method */ 'hashCode()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'size()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getInclusive()', [
			[/* method description */
				[/* text */ 't', `Returns the same as `],
				[/* inline code block */ 'i', `getInclusiveRight`],
				[/* text */ 't', `, kept here for backwards compatibility.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getInclusiveLeft()', [
			[/* method description */
				[/* text */ 't', `Returns the inclusiveLeft flag. Null for non-inclusive aware ranges or non-null for inclusive aware ranges.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getInclusiveRight()', [
			[/* method description */
				[/* text */ 't', `Returns the inclusiveRight flag. Null for non-inclusive aware ranges or non-null for inclusive aware ranges.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'get(int)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getFrom()', [
			[/* method description */
				[/* block */ 'b', `The lower value in the range.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the lower value in the range.`]
			]
		]],
		[/* method */ 'getTo()', [
			[/* method description */
				[/* block */ 'b', `The upper value in the range.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the upper value in the range`]
			]
		]],
		[/* method */ 'inspect()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the verbose `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/8/docs/api/java/lang/String.html`, `String`],
				[/* text */ 't', ` representation of this `],
				[/* reference */ 'r', `groovy.lang.Range`],
				[/* text */ 't', ` as would be typed into a console to create the `],
				[/* reference */ 'r', `groovy.lang.Range`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'toString()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'iterator()', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the list formed by stepping through the range by the indicated interval.`]
			]
		]],
		[/* method */ 'subList(int,int)', [
			/* method description */ UDF,
			/* parameters */ UDF,
			/* throws */ UDF,
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
					[/* reference */ 'r', `groovy.lang.Closure`],
					[/* text */ 't', ` to call`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
