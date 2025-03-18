import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Boolean', [
	[/* class description */
		[/* text */ 't', `The Boolean class wraps a value of the primitive type
 `],
		[/* inline code block */ 'i', `boolean`],
		[/* text */ 't', ` in an object. An object of type
 `],
		[/* inline code block */ 'i', `Boolean`],
		[/* text */ 't', ` contains a single field whose type is
 `],
		[/* inline code block */ 'i', `boolean`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `In addition, this class provides many methods for
 converting a `],
			[/* inline code block */ 'i', `boolean`],
			[/* text */ 't', ` to a `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` and a
 `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` to a `],
			[/* inline code block */ 'i', `boolean`],
			[/* text */ 't', `, as well as other
 constants and methods useful when dealing with a
 `],
			[/* inline code block */ 'i', `boolean`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `value-based`],
			[/* text */ 't', `
 class; programmers should treat instances that are
 `],
			[/* reference */ 'r', `#equals(java.lang.Object)`, `equal`],
			[/* text */ 't', ` as interchangeable and should not
 use instances for synchronization, or unpredictable behavior may
 occur. For example, in a future release, synchronization may fail.`]
		]]
	],
	[/* fields */
		[/* field */ 'FALSE', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` object corresponding to the primitive
 value `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'TRUE', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` object corresponding to the primitive
 value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'TYPE', [
			[/* field description */
				[/* text */ 't', `The Class object representing the primitive type boolean.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(boolean)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` object representing the
 `],
				[/* inline code block */ 'i', `value`],
				[/* text */ 't', ` argument.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value of the `],
					[/* inline code block */ 'i', `Boolean`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Allocates a `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` object representing the value
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the string argument is not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 and is equal, ignoring case, to the string `],
				[/* inline code block */ 'i', `"true"`],
				[/* text */ 't', `.
 Otherwise, allocates a `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` object representing the
 value `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the string to be converted to a `],
					[/* inline code block */ 'i', `Boolean`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'booleanValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` object as a boolean
 primitive.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the primitive `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value of this object.`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the argument is not
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and is a `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` object that
 represents the same `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value as this object.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to compare with.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the Boolean objects represent the
          same value; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'compareTo(java.lang.Boolean)', [
			[/* method description */
				[/* text */ 't', `Compares this `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` instance with another.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Boolean`],
					[/* text */ 't', ` instance to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `zero if this object represents the same boolean value as the
          argument; a positive value if this object represents true
          and the argument represents false; and a negative value if
          this object represents false and the argument represents true`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for this `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the integer `],
				[/* inline code block */ 'i', `1231`],
				[/* text */ 't', ` if this object represents
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `; returns the integer `],
				[/* inline code block */ 'i', `1237`],
				[/* text */ 't', ` if this
 object represents `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object representing this Boolean's
 value.  If this object represents the value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `,
 a string equal to `],
				[/* inline code block */ 'i', `"true"`],
				[/* text */ 't', ` is returned. Otherwise, a
 string equal to `],
				[/* inline code block */ 'i', `"false"`],
				[/* text */ 't', ` is returned.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a string representation of this object.`]
			]
		]],
		[/* method */ 'describeConstable()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', ` containing the nominal descriptor for this
 instance.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', ` describing the `],
				[/* reference */ 'r', `java.lang.Boolean`, `Boolean`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'getBoolean(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the system property named
 by the argument exists and is equal to, ignoring case, the
 string `],
				[/* inline code block */ 'i', `"true"`],
				[/* text */ 't', `.
 A system property is accessible through `],
				[/* inline code block */ 'i', `getProperty`],
				[/* text */ 't', `, a
 method defined by the `],
				[/* inline code block */ 'i', `System`],
				[/* text */ 't', ` class.  `],
				[/* block */ 'b', [
					[/* text */ 't', ` If there is no
 property with the specified name, or if the specified name is
 empty or null, then `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the system property name.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `for the same reasons as
          `],
					[/* reference */ 'r', `java.lang.System#getProperty(java.lang.String)`, `System.getProperty`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value of the system property.`]
			]
		]],
		[/* method */ 'logicalAnd(boolean,boolean)', [
			[/* method description */
				[/* text */ 't', `Returns the result of applying the logical AND operator to the
 specified `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` operands.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first operand`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second operand`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the logical AND of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`]
			]
		]],
		[/* method */ 'logicalOr(boolean,boolean)', [
			[/* method description */
				[/* text */ 't', `Returns the result of applying the logical OR operator to the
 specified `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` operands.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first operand`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second operand`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the logical OR of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`]
			]
		]],
		[/* method */ 'logicalXor(boolean,boolean)', [
			[/* method description */
				[/* text */ 't', `Returns the result of applying the logical XOR operator to the
 specified `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` operands.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first operand`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second operand`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the logical XOR of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`]
			]
		]],
		[/* method */ 'parseBoolean(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Parses the string argument as a boolean.  The `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', `
 returned represents the value `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the string argument
 is not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and is equal, ignoring case, to the string
 `],
				[/* inline code block */ 'i', `"true"`],
				[/* text */ 't', `.
 Otherwise, a false value is returned, including for a null
 argument.`],
				[/* block */ 'b', [
					[/* text */ 't', `
 Example: `],
					[/* inline code block */ 'i', `Boolean.parseBoolean("True")`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 Example: `],
					[/* inline code block */ 'i', `Boolean.parseBoolean("yes")`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` containing the boolean
                 representation to be parsed`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the boolean represented by the string argument`]
			]
		]],
		[/* method */ 'compare(boolean,boolean)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` values.
 The value returned is identical to what would be returned by:
 `],
				[/* code block */ 'c', `    Boolean.valueOf(x).compareTo(Boolean.valueOf(y))
 `]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` to compare`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` to compare`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `x == y`],
				[/* text */ 't', `;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `!x && y`],
				[/* text */ 't', `; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `x && !y`]
			]
		]],
		[/* method */ 'hashCode(boolean)', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value; compatible with
 `],
				[/* inline code block */ 'i', `Boolean.hashCode()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to hash`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a hash code value for a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value.`]
			]
		]],
		[/* method */ 'valueOf(boolean)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` instance representing the specified
 `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value.  If the specified `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value
 is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, this method returns `],
				[/* inline code block */ 'i', `Boolean.TRUE`],
				[/* text */ 't', `;
 if it is `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `, this method returns `],
				[/* inline code block */ 'i', `Boolean.FALSE`],
				[/* text */ 't', `.
 If a new `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` instance is not required, this method
 should generally be used in preference to the constructor
 `],
				[/* reference */ 'r', `#%3Cinit%3E(boolean)`, `Boolean(boolean)`],
				[/* text */ 't', `, as this method is likely to yield
 significantly better space and time performance.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `a boolean value.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` instance representing `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` with a value represented by the
 specified string.  The `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` returned represents a
 true value if the string argument is not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 and is equal, ignoring case, to the string `],
				[/* inline code block */ 'i', `"true"`],
				[/* text */ 't', `.
 Otherwise, a false value is returned, including for a null
 argument.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `a string.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Boolean`],
				[/* text */ 't', ` value represented by the string.`]
			]
		]],
		[/* method */ 'toString(boolean)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object representing the specified
 boolean.  If the specified boolean is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, then
 the string `],
				[/* inline code block */ 'i', `"true"`],
				[/* text */ 't', ` will be returned, otherwise the
 string `],
				[/* inline code block */ 'i', `"false"`],
				[/* text */ 't', ` will be returned.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the boolean to be converted`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the string representation of the specified `],
				[/* inline code block */ 'i', `boolean`]
			]
		]]
	],
	/* enum values */ UDF
]);
