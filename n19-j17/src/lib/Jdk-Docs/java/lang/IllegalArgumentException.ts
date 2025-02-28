import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.IllegalArgumentException', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that a method has been passed an illegal or
 inappropriate argument.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new exception with the specified cause and a detail
 message of `],
				[/* inline code block */ 'i', `(cause==null ? null : cause.toString())`],
				[/* text */ 't', ` (which
 typically contains the class and detail message of `],
				[/* inline code block */ 'i', `cause`],
				[/* text */ 't', `).
 This constructor is useful for exceptions that are little more than
 wrappers for other throwables (for example, `],
				[/* reference */ 'r', `java.security.PrivilegedActionException`],
				[/* text */ 't', `).`]
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
         `],
					[/* external link */ 'a', `Throwable.html#getCause()`, `Throwable.getCause()`],
					[/* text */ 't', ` method).  (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value is
         permitted, and indicates that the cause is nonexistent or
         unknown.)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new exception with the specified detail message and
 cause.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that the detail message associated with `],
					[/* inline code block */ 'i', `cause`],
					[/* text */ 't', ` is
 `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` automatically incorporated in this exception's detail
 message.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message (which is saved for later retrieval
         by the `],
					[/* external link */ 'a', `Throwable.html#getMessage()`, `Throwable.getMessage()`],
					[/* text */ 't', ` method).`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
         `],
					[/* external link */ 'a', `Throwable.html#getCause()`, `Throwable.getCause()`],
					[/* text */ 't', ` method).  (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value
         is permitted, and indicates that the cause is nonexistent or
         unknown.)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `IllegalArgumentException`],
				[/* text */ 't', ` with the
 specified detail message.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `IllegalArgumentException`],
				[/* text */ 't', ` with no
 detail message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
