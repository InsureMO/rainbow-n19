import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.OptionalLong', [
	[/* class description */
		[/* text */ 't', `A container object which may or may not contain a `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', ` value.
 If a value is present, `],
		[/* inline code block */ 'i', `isPresent()`],
		[/* text */ 't', ` returns `],
		[/* inline code block */ 'i', `true`],
		[/* text */ 't', `. If no
 value is present, the object is considered `],
		[/* text */ 't', `empty`],
		[/* text */ 't', ` and
 `],
		[/* inline code block */ 'i', `isPresent()`],
		[/* text */ 't', ` returns `],
		[/* inline code block */ 'i', `false`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Additional methods that depend on the presence or absence of a contained
 value are provided, such as `],
			[/* reference */ 'r', `orElse()`],
			[/* text */ 't', `
 (returns a default value if no value is present) and
 `],
			[/* reference */ 'r', `ifPresent()`],
			[/* text */ 't', ` (performs an
 action if a value is present).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* external link */ 'a', `../../../java.base/java/lang/doc-files/ValueBased.html`, `value-based`],
			[/* text */ 't', `
 class; programmers should treat instances that are
 `],
			[/* reference */ 'r', `equal`],
			[/* text */ 't', ` as interchangeable and should not
 use instances for synchronization, or unpredictable behavior may
 occur. For example, in a future release, synchronization may fail.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Indicates whether some other object is "equal to" this
 `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', `.  The other object is considered equal if:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `it is also an `],
						[/* inline code block */ 'i', `OptionalLong`],
						[/* text */ 't', ` and;
 `]
					]],
					[/* block */ 'b', `both instances have no value present or;
 `],
					[/* block */ 'b', [
						[/* text */ 't', `the present values are "equal to" each other via `],
						[/* inline code block */ 'i', `==`],
						[/* text */ 't', `.
 `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `an object to be tested for equality`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the other object is "equal to" this object
         otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a non-empty string representation of this `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', `
 suitable for debugging.  The exact presentation format is unspecified and
 may vary between implementations and versions.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string representation of this instance`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code of the value, if present, otherwise `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `
 (zero) if no value is present.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `hash code value of the present value or `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if no value is
         present`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `If a value is not present, returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, otherwise
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if a value is not present, otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'stream()', [
			[/* method description */
				[/* text */ 't', `If a value is present, returns a sequential `],
				[/* reference */ 'r', `java.util.stream.LongStream`],
				[/* text */ 't', ` containing
 only that value, otherwise returns an empty `],
				[/* inline code block */ 'i', `LongStream`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the optional value as an `],
				[/* inline code block */ 'i', `LongStream`]
			]
		]],
		[/* method */ 'of(long)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` describing the given value.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to describe`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` with the value present`]
			]
		]],
		[/* method */ 'empty()', [
			[/* method description */
				[/* text */ 't', `Returns an empty `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', ` instance.  No value is present for
 this `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an empty `],
				[/* inline code block */ 'i', `OptionalLong`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'isPresent()', [
			[/* method description */
				[/* text */ 't', `If a value is present, returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, otherwise `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if a value is present, otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'orElse(long)', [
			[/* method description */
				[/* text */ 't', `If a value is present, returns the value, otherwise returns
 `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the value to be returned, if no value is present`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value, if present, otherwise `],
				[/* inline code block */ 'i', `other`]
			]
		]],
		[/* method */ 'orElseThrow(java.util.function.Supplier)', [
			[/* method description */
				[/* text */ 't', `If a value is present, returns the value, otherwise throws an exception
 produced by the exception supplying function.`]
			],
			[/* parameters */
				[/* parameter */ 'exceptionSupplier', [/* parameter description */
					[/* text */ 't', `the supplying function that produces an
        exception to be thrown`]
				]]
			],
			[/* throws */
				[/* throw */ 'X', [/* throw description */
					[/* text */ 't', `if no value is present`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if no value is present and the exception
         supplying function is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value, if present`]
			]
		]],
		[/* method */ 'orElseThrow()', [
			[/* method description */
				[/* text */ 't', `If a value is present, returns the value, otherwise throws
 `],
				[/* inline code block */ 'i', `NoSuchElementException`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if no value is present`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value described by this `],
				[/* inline code block */ 'i', `OptionalLong`]
			]
		]],
		[/* method */ 'ifPresent(java.util.function.LongConsumer)', [
			[/* method description */
				[/* text */ 't', `If a value is present, performs the given action with the value,
 otherwise does nothing.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to be performed, if a value is present`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if value is present and the given action is
         `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'ifPresentOrElse(java.util.function.LongConsumer,java.lang.Runnable)', [
			[/* method description */
				[/* text */ 't', `If a value is present, performs the given action with the value,
 otherwise performs the given empty-based action.`]
			],
			[/* parameters */
				[/* parameter */ 'action', [/* parameter description */
					[/* text */ 't', `the action to be performed, if a value is present`]
				]],
				[/* parameter */ 'emptyAction', [/* parameter description */
					[/* text */ 't', `the empty-based action to be performed, if no value is
        present`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if a value is present and the given action
         is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, or no value is present and the given empty-based
         action is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'orElseGet(java.util.function.LongSupplier)', [
			[/* method description */
				[/* text */ 't', `If a value is present, returns the value, otherwise returns the result
 produced by the supplying function.`]
			],
			[/* parameters */
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `the supplying function that produces a value to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if no value is present and the supplying
         function is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value, if present, otherwise the result produced by the
         supplying function`]
			]
		]],
		[/* method */ 'getAsLong()', [
			[/* method description */
				[/* text */ 't', `If a value is present, returns the value, otherwise throws
 `],
				[/* inline code block */ 'i', `NoSuchElementException`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if no value is present`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value described by this `],
				[/* inline code block */ 'i', `OptionalLong`]
			]
		]]
	],
]);
