import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Optional', [
	[/* class description */
		[/* text */ 't', `A container object which may or may not contain a non-`],
		[/* inline code block */ 'i', `null`],
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
			[/* reference */ 'r', `#orElse(T)`, `orElse()`],
			[/* text */ 't', `
 (returns a default value if no value is present) and
 `],
			[/* reference */ 'r', `#ifPresent(java.util.function.Consumer)`, `ifPresent()`],
			[/* text */ 't', ` (performs an
 action if a value is present).

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
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'flatMap(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `If a value is present, returns the result of applying the given
 `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', `-bearing mapping function to the value, otherwise returns
 an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is similar to `],
					[/* reference */ 'r', `#map(java.util.function.Function)`, `map(Function)`],
					[/* text */ 't', `, but the mapping
 function is one whose result is already an `],
					[/* inline code block */ 'i', `Optional`],
					[/* text */ 't', `, and if
 invoked, `],
					[/* inline code block */ 'i', `flatMap`],
					[/* text */ 't', ` does not wrap it within an additional
 `],
					[/* inline code block */ 'i', `Optional`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `the mapping function to apply to a value, if present`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the mapping function is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or
         returns a `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` result`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result of applying an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', `-bearing mapping
         function to the value of this `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', `, if a value is
         present, otherwise an empty `],
				[/* inline code block */ 'i', `Optional`]
			]
		]],
		[/* method */ 'map(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `If a value is present, returns an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` describing (as if by
 `],
				[/* reference */ 'r', `#ofNullable(T)`, `ofNullable(T)`],
				[/* text */ 't', `) the result of applying the given mapping function to
 the value, otherwise returns an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the mapping function returns a `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` result then this method
 returns an empty `],
					[/* inline code block */ 'i', `Optional`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mapper', [/* parameter description */
					[/* text */ 't', `the mapping function to apply to a value, if present`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the mapping function is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` describing the result of applying a mapping
         function to the value of this `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', `, if a value is
         present, otherwise an empty `],
				[/* inline code block */ 'i', `Optional`]
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
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Indicates whether some other object is "equal to" this `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', `.
 The other object is considered equal if:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `it is also an `],
						[/* inline code block */ 'i', `Optional`],
						[/* text */ 't', ` and;
 `]
					]],
					[/* block */ 'b', `both instances have no value present or;
 `],
					[/* block */ 'b', [
						[/* text */ 't', `the present values are "equal to" each other via `],
						[/* inline code block */ 'i', `equals()`],
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
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the other object is "equal to" this object
         otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `If a value is  not present, returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, otherwise
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if a value is not present, otherwise `],
				[/* inline code block */ 'i', `false`]
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
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if a value is present, otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code of the value, if present, otherwise `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `
 (zero) if no value is present.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `hash code value of the present value or `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if no value is
         present`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a non-empty string representation of this `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', `
 suitable for debugging.  The exact presentation format is unspecified and
 may vary between implementations and versions.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the string representation of this instance`]
			]
		]],
		[/* method */ 'filter(java.util.function.Predicate)', [
			[/* method description */
				[/* text */ 't', `If a value is present, and the value matches the given predicate,
 returns an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` describing the value, otherwise returns an
 empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'predicate', [/* parameter description */
					[/* text */ 't', `the predicate to apply to a value, if present`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the predicate is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` describing the value of this
         `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', `, if a value is present and the value matches the
         given predicate, otherwise an empty `],
				[/* inline code block */ 'i', `Optional`]
			]
		]],
		[/* method */ 'or(java.util.function.Supplier)', [
			[/* method description */
				[/* text */ 't', `If a value is present, returns an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` describing the value,
 otherwise returns an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` produced by the supplying function.`]
			],
			[/* parameters */
				[/* parameter */ 'supplier', [/* parameter description */
					[/* text */ 't', `the supplying function that produces an `],
					[/* inline code block */ 'i', `Optional`],
					[/* text */ 't', `
        to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the supplying function is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or
         produces a `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` result`]
				]]
			],
			[/* return description */
				[/* text */ 't', `returns an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` describing the value of this
         `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', `, if a value is present, otherwise an
         `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` produced by the supplying function.`]
			]
		]],
		[/* method */ 'stream()', [
			[/* method description */
				[/* text */ 't', `If a value is present, returns a sequential `],
				[/* reference */ 'r', `java.util.stream.Stream`, `Stream`],
				[/* text */ 't', ` containing
 only that value, otherwise returns an empty `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the optional value as a `],
				[/* inline code block */ 'i', `Stream`]
			]
		]],
		[/* method */ 'empty()', [
			[/* method description */
				[/* text */ 't', `Returns an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` instance.  No value is present for this
 `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an empty `],
				[/* inline code block */ 'i', `Optional`]
			]
		]],
		[/* method */ 'of(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` describing the given non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 value.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to describe, which must be non-`],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if value is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` with the value present`]
			]
		]],
		[/* method */ 'ofNullable(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` describing the given value, if
 non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, otherwise returns an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the possibly-`],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value to describe`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` with a present value if the specified value
         is non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, otherwise an empty `],
				[/* inline code block */ 'i', `Optional`]
			]
		]],
		[/* method */ 'get()', [
			[/* method description */
				[/* text */ 't', `If a value is present, returns the value, otherwise throws
 `],
				[/* inline code block */ 'i', `NoSuchElementException`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if no value is present`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` value described by this `],
				[/* inline code block */ 'i', `Optional`]
			]
		]],
		[/* method */ 'orElse(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `If a value is present, returns the value, otherwise returns
 `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the value to be returned, if no value is present.
        May be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value, if present, otherwise `],
				[/* inline code block */ 'i', `other`]
			]
		]],
		[/* method */ 'orElseGet(java.util.function.Supplier)', [
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
		[/* method */ 'orElseThrow()', [
			[/* method description */
				[/* text */ 't', `If a value is present, returns the value, otherwise throws
 `],
				[/* inline code block */ 'i', `NoSuchElementException`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.util.NoSuchElementException', [/* throw description */
					[/* text */ 't', `if no value is present`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the non-`],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` value described by this `],
				[/* inline code block */ 'i', `Optional`]
			]
		]],
		[/* method */ 'ifPresent(java.util.function.Consumer)', [
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
		[/* method */ 'ifPresentOrElse(java.util.function.Consumer,java.lang.Runnable)', [
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
		]]
	],
	/* enum values */ UDF
]);
