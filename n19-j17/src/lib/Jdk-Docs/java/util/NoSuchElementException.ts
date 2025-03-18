import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.NoSuchElementException', [
	[/* class description */
		[/* text */ 't', `Thrown by various accessor methods to indicate that the element being requested
 does not exist.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `NoSuchElementException`],
				[/* text */ 't', ` with `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 as its error message string.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `NoSuchElementException`],
				[/* text */ 't', `, saving a reference
 to the error message string `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` for later retrieval by the
 `],
				[/* inline code block */ 'i', `getMessage`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `NoSuchElementException`],
				[/* text */ 't', ` with the specified detail
 message and cause.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message, or null`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
              `],
					[/* reference */ 'r', `java.lang.Throwable#getCause()`, `Throwable.getCause()`],
					[/* text */ 't', ` method), or null`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `NoSuchElementException`],
				[/* text */ 't', ` with the specified cause.
 The detail message is set to `],
				[/* inline code block */ 'i', `(cause == null ? null : cause.toString())`],
				[/* text */ 't', ` (which typically contains the class and
 detail message of `],
				[/* inline code block */ 'i', `cause`],
				[/* text */ 't', `).`]
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
              `],
					[/* reference */ 'r', `java.lang.Throwable#getCause()`, `Throwable.getCause()`],
					[/* text */ 't', ` method)`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */,
	/* enum values */ UDF
]);
