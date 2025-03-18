import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.IllegalStateException', [
	[/* class description */
		[/* text */ 't', `Signals that a method has been invoked at an illegal or
 inappropriate time.  In other words, the Java environment or
 Java application is not in an appropriate state for the requested
 operation.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an IllegalStateException with no detail message.
 A detail message is a String that describes this particular exception.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an IllegalStateException with the specified detail
 message.  A detail message is a String that describes this particular
 exception.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the String that contains a detailed message`]
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
					[/* reference */ 'r', `java.lang.Throwable#getMessage()`, `Throwable.getMessage()`],
					[/* text */ 't', ` method).`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause (which is saved for later retrieval by the
         `],
					[/* reference */ 'r', `java.lang.Throwable#getCause()`, `Throwable.getCause()`],
					[/* text */ 't', ` method).  (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value
         is permitted, and indicates that the cause is nonexistent or
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
				[/* text */ 't', `).
 This constructor is useful for exceptions that are little more than
 wrappers for other throwables (for example, `],
				[/* reference */ 'r', `java.security.PrivilegedActionException`, `PrivilegedActionException`],
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
	/* methods */,
	/* enum values */ UDF
]);
