import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Exception', [
	[/* class description */
		[/* text */ 't', `The class `],
		[/* inline code block */ 'i', `Exception`],
		[/* text */ 't', ` and its subclasses are a form of
 `],
		[/* inline code block */ 'i', `Throwable`],
		[/* text */ 't', ` that indicates conditions that a reasonable
 application might want to catch.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The class `],
			[/* inline code block */ 'i', `Exception`],
			[/* text */ 't', ` and any subclasses that are not also
 subclasses of `],
			[/* reference */ 'r', `java.lang.RuntimeException`, `RuntimeException`],
			[/* text */ 't', ` are `],
			[/* text */ 't', `checked
 exceptions`],
			[/* text */ 't', `.  Checked exceptions need to be declared in a
 method or constructor's `],
			[/* inline code block */ 'i', `throws`],
			[/* text */ 't', ` clause if they can be thrown
 by the execution of the method or constructor and propagate outside
 the method or constructor boundary.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable,boolean,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new exception with the specified detail message,
 cause, suppression enabled or disabled, and writable stack
 trace enabled or disabled.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]],
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `the cause.  (A `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` value is permitted,
 and indicates that the cause is nonexistent or unknown.)`]
				]],
				[/* parameter */ 'enableSuppression', [/* parameter description */
					[/* text */ 't', `whether or not suppression is enabled
                          or disabled`]
				]],
				[/* parameter */ 'writableStackTrace', [/* parameter description */
					[/* text */ 't', `whether or not the stack trace should
                           be writable`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new exception with `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` as its detail message.
 The cause is not initialized, and may subsequently be initialized by a
 call to `],
				[/* reference */ 'r', `java.lang.Throwable#initCause(java.lang.Throwable)`, `Throwable.initCause(java.lang.Throwable)`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new exception with the specified detail message.  The
 cause is not initialized, and may subsequently be initialized by
 a call to `],
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
				[/* text */ 't', `Constructs a new exception with the specified detail message and
 cause.  `],
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
	/* methods */ UDF,
]);
