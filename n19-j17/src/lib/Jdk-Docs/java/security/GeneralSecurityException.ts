import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.GeneralSecurityException', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `GeneralSecurityException`],
		[/* text */ 't', ` class is a generic
 security exception class that provides type safety for all the
 security-related exception classes that extend from it.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `GeneralSecurityException`],
				[/* text */ 't', ` with the specified cause
 and a detail message of `],
				[/* inline code block */ 'i', `(cause==null ? null : cause.toString())`],
				[/* text */ 't', `
 (which typically contains the class and detail message of
 `],
				[/* inline code block */ 'i', `cause`],
				[/* text */ 't', `).`]
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
        `],
					[/* reference */ 'r', `java.Throwable#getCause()`],
					[/* text */ 't', ` method).  (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value is permitted,
        and indicates that the cause is nonexistent or unknown.)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `GeneralSecurityException`],
				[/* text */ 't', ` with the specified
 detail message and cause.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message (which is saved for later retrieval
        by the `],
					[/* reference */ 'r', `java.Throwable#getMessage()`],
					[/* text */ 't', ` method).`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
        `],
					[/* reference */ 'r', `java.Throwable#getCause()`],
					[/* text */ 't', ` method).  (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value is permitted,
        and indicates that the cause is nonexistent or unknown.)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a GeneralSecurityException with the specified detail
 message.
 A detail message is a String that describes this particular
 exception.`]
			],
			[/* parameters */
				[/* parameter */ 'msg', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a GeneralSecurityException with no detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
