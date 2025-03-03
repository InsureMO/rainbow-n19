import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.IOException', [
	[/* class description */
		[/* text */ 't', `Signals that an I/O exception of some sort has occurred. This
 class is the general class of exceptions produced by failed or
 interrupted I/O operations.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', ` with the specified cause and a
 detail message of `],
				[/* inline code block */ 'i', `(cause==null ? null : cause.toString())`],
				[/* text */ 't', `
 (which typically contains the class and detail message of `],
				[/* inline code block */ 'i', `cause`],
				[/* text */ 't', `).
 This constructor is useful for IO exceptions that are little more
 than wrappers for other throwables.`]
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `The cause (which is saved for later retrieval by the
        `],
					[/* reference */ 'r', `java.Throwable#getCause()`],
					[/* text */ 't', ` method).  (A null value is permitted,
        and indicates that the cause is nonexistent or unknown.)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', ` with the specified detail message
 and cause.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that the detail message associated with `],
					[/* inline code block */ 'i', `cause`],
					[/* text */ 't', ` is
 `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` automatically incorporated into this exception's detail
 message.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `The detail message (which is saved for later retrieval
        by the `],
					[/* reference */ 'r', `java.Throwable#getMessage()`],
					[/* text */ 't', ` method)`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `The cause (which is saved for later retrieval by the
        `],
					[/* reference */ 'r', `java.Throwable#getCause()`],
					[/* text */ 't', ` method).  (A null value is permitted,
        and indicates that the cause is nonexistent or unknown.)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', ` with the specified detail message.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `The detail message (which is saved for later retrieval
        by the `],
					[/* reference */ 'r', `java.Throwable#getMessage()`],
					[/* text */ 't', ` method)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', ` with `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 as its error detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
