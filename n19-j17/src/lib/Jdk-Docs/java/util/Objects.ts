import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Objects', [
	[/* class description */
		[/* text */ 't', `This class consists of `],
		[/* inline code block */ 'i', `static`],
		[/* text */ 't', ` utility methods for operating
 on objects, or checking certain conditions before operation.  These utilities
 include `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', `-safe or `],
		[/* inline code block */ 'i', `null`],
		[/* text */ 't', `-tolerant methods for computing the
 hash code of an object, returning a string for an object, comparing two
 objects, and checking if indexes or sub-range values are out of bounds.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'compare(java.lang.Object,java.lang.Object,java.util.Comparator)', [
			[/* method description */
				[/* text */ 't', `Returns 0 if the arguments are identical and `],
				[/* inline code block */ 'i', `c.compare(a, b)`],
				[/* text */ 't', ` otherwise.
 Consequently, if both arguments are `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` 0
 is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that if one of the arguments is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, a `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` may or may not be thrown depending on
 what ordering policy, if any, the `],
					[/* reference */ 'r', `java.util.Comparator`],
					[/* text */ 't', `
 chooses to have for `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` values.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `an object`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `an object to be compared with `],
					[/* inline code block */ 'i', `a`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Comparator`],
					[/* text */ 't', ` to compare the first two arguments`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `0 if the arguments are identical and `],
				[/* inline code block */ 'i', `c.compare(a, b)`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'requireNonNull(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks that the specified object reference is not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `. This
 method is designed primarily for doing parameter validation in methods
 and constructors, as demonstrated below:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` public Foo(Bar bar) {
     this.bar = Objects.requireNonNull(bar);
 }
 `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object reference to check for nullity`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', ` if not `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'requireNonNull(java.lang.Object,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Checks that the specified object reference is not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and
 throws a customized `],
				[/* reference */ 'r', `java.lang.NullPointerException`],
				[/* text */ 't', ` if it is. This method
 is designed primarily for doing parameter validation in methods and
 constructors with multiple parameters, as demonstrated below:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` public Foo(Bar bar, Baz baz) {
     this.bar = Objects.requireNonNull(bar, "bar must not be null");
     this.baz = Objects.requireNonNull(baz, "baz must not be null");
 }
 `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object reference to check for nullity`]
				]],
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `detail message to be used in the event that a `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` is thrown`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', ` if not `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'requireNonNull(java.lang.Object,java.util.function.Supplier)', [
			[/* method description */
				[/* text */ 't', `Checks that the specified object reference is not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and
 throws a customized `],
				[/* reference */ 'r', `java.lang.NullPointerException`],
				[/* text */ 't', ` if it is.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Unlike the method `],
					[/* reference */ 'r', `#requireNonNull(T,java.lang.String)`, `requireNonNull(Object, String)`],
					[/* text */ 't', `,
 this method allows creation of the message to be deferred until
 after the null check is made. While this may confer a
 performance advantage in the non-null case, when deciding to
 call this method care should be taken that the costs of
 creating the message supplier are less than the cost of just
 creating the string message directly.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object reference to check for nullity`]
				]],
				[/* parameter */ 'messageSupplier', [/* parameter description */
					[/* text */ 't', `supplier of the detail message to be
 used in the event that a `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` is thrown`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', ` if not `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'requireNonNullElse(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the first argument if it is non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and
 otherwise returns the non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` second argument.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `an object`]
				]],
				[/* parameter */ 'defaultObj', [/* parameter description */
					[/* text */ 't', `a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` object to return if the first argument
                   is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if both `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', ` is null and
        `],
					[/* inline code block */ 'i', `defaultObj`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the first argument if it is non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and
        otherwise the second argument if it is non-`],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'requireNonNullElseGet(java.lang.Object,java.util.function.Supplier)', [
			[/* method description */
				[/* text */ 't', `Returns the first argument if it is non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and otherwise
 returns the non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` value of `],
				[/* inline code block */ 'i', `supplier.get()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `an object`]
				]],
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `of a non-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` object to return if the first argument
                 is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if both `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', ` is null and
        either the `],
					[/* inline code block */ 'i', `supplier`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or
        the `],
					[/* inline code block */ 'i', `supplier.get()`],
					[/* text */ 't', ` value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the first argument if it is non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and otherwise
         the value from `],
				[/* inline code block */ 'i', `supplier.get()`],
				[/* text */ 't', ` if it is non-`],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'deepEquals(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the arguments are deeply equal to each other
 and `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.

 Two `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` values are deeply equal.  If both arguments are
 arrays, the algorithm in `],
				[/* reference */ 'r', `.Arrays#deepEquals(java.lang.Object[],java.lang.Object[])`],
				[/* text */ 't', ` is used to determine equality.
 Otherwise, equality is determined by using the `],
				[/* reference */ 'r', `java.Object#equals(java.lang.Object)`],
				[/* text */ 't', ` method of the first argument.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `an object`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `an object to be compared with `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` for deep equality`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the arguments are deeply equal to each other
 and `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'equals(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the arguments are equal to each other
 and `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.
 Consequently, if both arguments are `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `
 is returned.  Otherwise, if the first argument is not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, equality is determined by calling the `],
				[/* reference */ 'r', `java.Object#equals(java.lang.Object)`],
				[/* text */ 't', ` method of the first argument with the
 second argument of this method. Otherwise, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` is
 returned.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `an object`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `an object to be compared with `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` for equality`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the arguments are equal to each other
 and `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'isNull(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the provided reference is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` otherwise
 returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `a reference to be checked against `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the provided reference is `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` otherwise
 `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'nonNull(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the provided reference is non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 otherwise returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `a reference to be checked against `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the provided reference is non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'checkFromIndexSize(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Checks if the sub-range from `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` (inclusive) to
 `],
				[/* inline code block */ 'i', `fromIndex + size`],
				[/* text */ 't', ` (exclusive) is within the bounds of range from
 `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` (inclusive) to `],
				[/* inline code block */ 'i', `length`],
				[/* text */ 't', ` (exclusive).

 `],
				[/* block */ 'b', `The sub-range is defined to be out of bounds if any of the following
 inequalities is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `fromIndex < 0`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `size < 0`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `fromIndex + size > length`],
						[/* text */ 't', `, taking into account integer overflow`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `length < 0`],
						[/* text */ 't', `, which is implied from the former inequalities`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the lower-bound (inclusive) of the sub-interval`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `the size of the sub-range`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `the upper-bound (exclusive) of the range`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the sub-range is out of bounds`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` if the sub-range within bounds of the range`]
			]
		]],
		[/* method */ 'checkFromToIndex(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Checks if the sub-range from `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` (inclusive) to
 `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` (exclusive) is within the bounds of range from `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `
 (inclusive) to `],
				[/* inline code block */ 'i', `length`],
				[/* text */ 't', ` (exclusive).

 `],
				[/* block */ 'b', `The sub-range is defined to be out of bounds if any of the following
 inequalities is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `fromIndex < 0`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `fromIndex > toIndex`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `toIndex > length`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `length < 0`],
						[/* text */ 't', `, which is implied from the former inequalities`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the lower-bound (inclusive) of the sub-range`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the upper-bound (exclusive) of the sub-range`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `the upper-bound (exclusive) the range`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the sub-range is out of bounds`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` if the sub-range within bounds of the range`]
			]
		]],
		[/* method */ 'checkIndex(int,int)', [
			[/* method description */
				[/* text */ 't', `Checks if the `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` is within the bounds of the range from
 `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` (inclusive) to `],
				[/* inline code block */ 'i', `length`],
				[/* text */ 't', ` (exclusive).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is defined to be out of bounds if any of the
 following inequalities is true:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `index < 0`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `index >= length`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `length < 0`],
						[/* text */ 't', `, which is implied from the former inequalities`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `the upper-bound (exclusive) of the range`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is out of bounds`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` if it is within bounds of the range`]
			]
		]],
		[/* method */ 'hash(java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Generates a hash code for a sequence of input values. The hash
 code is generated as if all the input values were placed into an
 array, and that array were hashed by calling `],
				[/* reference */ 'r', `.Arrays#hashCode(java.lang.Object[])`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is useful for implementing `],
					[/* reference */ 'r', `java.Object#hashCode()`],
					[/* text */ 't', ` on objects containing multiple fields. For
 example, if an object that has three fields, `],
					[/* inline code block */ 'i', `x`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `y`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `z`],
					[/* text */ 't', `, one could write:

 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` @Override public int hashCode() {
     return Objects.hash(x, y, z);
 }
 `]
				]],
				[/* text */ 't', `Warning: When a single object reference is supplied, the returned
 value does not equal the hash code of that object reference.`],
				[/* text */ 't', ` This
 value can be computed by calling `],
				[/* reference */ 'r', `#hashCode(java.lang.Object)`, `hashCode(Object)`],
				[/* text */ 't', `.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'values', [/* parameter description */
					[/* text */ 't', `the values to be hashed`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash value of the sequence of input values`]
			]
		]],
		[/* method */ 'hashCode(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the hash code of a non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` argument and 0 for
 a `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` argument.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `an object`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code of a non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` argument and 0 for
 a `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` argument`]
			]
		]],
		[/* method */ 'toString(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns the result of calling `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', ` for a non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` argument and `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', ` for a `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` argument.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `an object`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the result of calling `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', ` for a non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` argument and `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', ` for a `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` argument`]
			]
		]],
		[/* method */ 'toString(java.lang.Object,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the result of calling `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', ` on the first
 argument if the first argument is not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and returns
 the second argument otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `an object`]
				]],
				[/* parameter */ 'nullDefault', [/* parameter description */
					[/* text */ 't', `string to return if the first argument is
        `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the result of calling `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', ` on the first
 argument if it is not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and the second argument
 otherwise.`]
			]
		]],
		[/* method */ 'checkFromIndexSize(long,long,long)', [
			[/* method description */
				[/* text */ 't', `Checks if the sub-range from `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` (inclusive) to
 `],
				[/* inline code block */ 'i', `fromIndex + size`],
				[/* text */ 't', ` (exclusive) is within the bounds of range from
 `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` (inclusive) to `],
				[/* inline code block */ 'i', `length`],
				[/* text */ 't', ` (exclusive).

 `],
				[/* block */ 'b', `The sub-range is defined to be out of bounds if any of the following
 inequalities is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `fromIndex < 0`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `size < 0`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `fromIndex + size > length`],
						[/* text */ 't', `, taking into account integer overflow`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `length < 0`],
						[/* text */ 't', `, which is implied from the former inequalities`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the lower-bound (inclusive) of the sub-interval`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `the size of the sub-range`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `the upper-bound (exclusive) of the range`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the sub-range is out of bounds`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` if the sub-range within bounds of the range`]
			]
		]],
		[/* method */ 'checkFromToIndex(long,long,long)', [
			[/* method description */
				[/* text */ 't', `Checks if the sub-range from `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` (inclusive) to
 `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', ` (exclusive) is within the bounds of range from `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `
 (inclusive) to `],
				[/* inline code block */ 'i', `length`],
				[/* text */ 't', ` (exclusive).

 `],
				[/* block */ 'b', `The sub-range is defined to be out of bounds if any of the following
 inequalities is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `fromIndex < 0`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `fromIndex > toIndex`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `toIndex > length`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `length < 0`],
						[/* text */ 't', `, which is implied from the former inequalities`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the lower-bound (inclusive) of the sub-range`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the upper-bound (exclusive) of the sub-range`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `the upper-bound (exclusive) the range`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the sub-range is out of bounds`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` if the sub-range within bounds of the range`]
			]
		]],
		[/* method */ 'checkIndex(long,long)', [
			[/* method description */
				[/* text */ 't', `Checks if the `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` is within the bounds of the range from
 `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` (inclusive) to `],
				[/* inline code block */ 'i', `length`],
				[/* text */ 't', ` (exclusive).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is defined to be out of bounds if any of the
 following inequalities is true:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `index < 0`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `index >= length`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `length < 0`],
						[/* text */ 't', `, which is implied from the former inequalities`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `the upper-bound (exclusive) of the range`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is out of bounds`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` if it is within bounds of the range`]
			]
		]]
	],
]);
