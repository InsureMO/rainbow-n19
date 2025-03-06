import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.concurrent.ExecutionException', [
	[/* class description */
		[/* text */ 't', `Exception thrown when attempting to retrieve the result of a task
 that aborted by throwing an exception. This exception can be
 inspected using the `],
		[/* reference */ 'r', `java.lang.Throwable#getCause()`, `Throwable.getCause()`],
		[/* text */ 't', ` method.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `ExecutionException`],
				[/* text */ 't', ` with no detail message.
 The cause is not initialized, and may subsequently be
 initialized by a call to `],
				[/* reference */ 'r', `java.lang.Throwable#initCause(java.lang.Throwable)`, `initCause`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `ExecutionException`],
				[/* text */ 't', ` with the specified detail
 message. The cause is not initialized, and may subsequently be
 initialized by a call to `],
				[/* reference */ 'r', `java.lang.Throwable#initCause(java.lang.Throwable)`, `initCause`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `ExecutionException`],
				[/* text */ 't', ` with the specified detail
 message and cause.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
         `],
					[/* reference */ 'r', `java.lang.Throwable#getCause()`, `Throwable.getCause()`],
					[/* text */ 't', ` method)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `ExecutionException`],
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
	/* methods */ UDF,
]);
