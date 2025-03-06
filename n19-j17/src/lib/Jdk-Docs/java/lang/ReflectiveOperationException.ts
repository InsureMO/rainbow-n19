import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ReflectiveOperationException', [
	[/* class description */
		[/* text */ 't', `Common superclass of exceptions thrown by reflective operations in
 core reflection.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new exception with `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` as its detail
 message.  The cause is not initialized, and may subsequently be
 initialized by a call to `],
				[/* reference */ 'r', `java.lang.Throwable#initCause(java.lang.Throwable)`, `Throwable.initCause(java.lang.Throwable)`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new exception with the specified detail message.
 The cause is not initialized, and may subsequently be
 initialized by a call to `],
				[/* reference */ 'r', `java.lang.Throwable#initCause(java.lang.Throwable)`, `Throwable.initCause(java.lang.Throwable)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message. The detail message is saved for
          later retrieval by the `],
					[/* reference */ 'r', `java.lang.Throwable#getMessage()`, `Throwable.getMessage()`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new exception with the specified detail message
 and cause.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that the detail message associated with
 `],
					[/* inline code block */ 'i', `cause`],
					[/* text */ 't', ` is `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` automatically incorporated in
 this exception's detail message.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message (which is saved for later retrieval
         by the `],
					[/* reference */ 'r', `java.lang.Throwable#getMessage()`, `Throwable.getMessage()`],
					[/* text */ 't', ` method).`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
         `],
					[/* reference */ 'r', `java.lang.Throwable#getCause()`, `Throwable.getCause()`],
					[/* text */ 't', ` method).  (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value is
         permitted, and indicates that the cause is nonexistent or
         unknown.)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new exception with the specified cause and a detail
 message of `],
				[/* inline code block */ 'i', `(cause==null ? null : cause.toString())`],
				[/* text */ 't', ` (which
 typically contains the class and detail message of `],
				[/* inline code block */ 'i', `cause`],
				[/* text */ 't', `).`]
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
         `],
					[/* reference */ 'r', `java.lang.Throwable#getCause()`, `Throwable.getCause()`],
					[/* text */ 't', ` method).  (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value is
         permitted, and indicates that the cause is nonexistent or
         unknown.)`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
