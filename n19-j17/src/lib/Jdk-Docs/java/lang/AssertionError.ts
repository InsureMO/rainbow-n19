import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.AssertionError', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that an assertion has failed.

 `],
		[/* block */ 'b', `The seven one-argument public constructors provided by this
 class ensure that the assertion error returned by the invocation:
 `],
		[/* code block */ 'c', [
			[/* text */ 't', `     new AssertionError(`],
			[/* text */ 't', `expression`],
			[/* text */ 't', `)
 `]
		]],
		[/* text */ 't', `
 has as its detail message the `],
		[/* text */ 't', `string conversion`],
		[/* text */ 't', ` of
 `],
		[/* text */ 't', `expression`],
		[/* text */ 't', ` (as defined in section `],
		[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html#jls-5.1.11`, `5.1.11`],
		[/* text */ 't', ` of
 `],
		[/* text */ 't', `The Java Language Specification`],
		[/* text */ 't', `),
 regardless of the type of `],
		[/* text */ 't', `expression`],
		[/* text */ 't', `.`],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an AssertionError with no detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(boolean)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an AssertionError with its detail message derived
 from the specified `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', `, which is converted to
 a string as defined in section `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html#jls-5.1.11`, `5.1.11`],
				[/* text */ 't', ` of
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'detailMessage', [/* parameter description */
					[/* text */ 't', `value to be used in constructing detail message`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(char)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an AssertionError with its detail message derived
 from the specified `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `, which is converted to a
 string as defined in section `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html#jls-5.1.11`, `5.1.11`],
				[/* text */ 't', ` of
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'detailMessage', [/* parameter description */
					[/* text */ 't', `value to be used in constructing detail message`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(double)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an AssertionError with its detail message derived
 from the specified `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `, which is converted to a
 string as defined in section `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html#jls-5.1.11`, `5.1.11`],
				[/* text */ 't', ` of
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'detailMessage', [/* parameter description */
					[/* text */ 't', `value to be used in constructing detail message`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(float)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an AssertionError with its detail message derived
 from the specified `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `, which is converted to a
 string as defined in section `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html#jls-5.1.11`, `5.1.11`],
				[/* text */ 't', ` of
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'detailMessage', [/* parameter description */
					[/* text */ 't', `value to be used in constructing detail message`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an AssertionError with its detail message derived
 from the specified `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `, which is converted to a
 string as defined in section `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html#jls-5.1.11`, `5.1.11`],
				[/* text */ 't', ` of
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'detailMessage', [/* parameter description */
					[/* text */ 't', `value to be used in constructing detail message`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Object)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an AssertionError with its detail message derived
 from the specified object, which is converted to a string as
 defined in section `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html#jls-5.1.11`, `5.1.11`],
				[/* text */ 't', ` of
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `.
`],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the specified object is an instance of `],
					[/* inline code block */ 'i', `Throwable`],
					[/* text */ 't', `, it
 becomes the `],
					[/* text */ 't', `cause`],
					[/* text */ 't', ` of the newly constructed assertion error.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'detailMessage', [/* parameter description */
					[/* text */ 't', `value to be used in constructing detail message`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `AssertionError`],
				[/* text */ 't', ` with the specified
 detail message and cause.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that the detail message associated with
 `],
					[/* inline code block */ 'i', `cause`],
					[/* text */ 't', ` is `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` automatically incorporated in
 this error's detail message.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message, may be `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause, may be `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(long)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an AssertionError with its detail message derived
 from the specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `, which is converted to a
 string as defined in section `],
				[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-5.html#jls-5.1.11`, `5.1.11`],
				[/* text */ 't', ` of
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'detailMessage', [/* parameter description */
					[/* text */ 't', `value to be used in constructing detail message`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
