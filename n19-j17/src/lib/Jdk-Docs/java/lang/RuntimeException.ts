import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.RuntimeException', [
	[/* class description */
		[/* inline code block */ 'i', `RuntimeException`],
		[/* text */ 't', ` is the superclass of those
 exceptions that can be thrown during the normal operation of the
 Java Virtual Machine.

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `RuntimeException`],
			[/* text */ 't', ` and its subclasses are `],
			[/* text */ 't', `unchecked
 exceptions`],
			[/* text */ 't', `.  Unchecked exceptions do `],
			[/* text */ 't', `not`],
			[/* text */ 't', ` need to be
 declared in a method or constructor's `],
			[/* inline code block */ 'i', `throws`],
			[/* text */ 't', ` clause if they
 can be thrown by the execution of the method or constructor and
 propagate outside the method or constructor boundary.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable,boolean,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new runtime exception with the specified detail
 message, cause, suppression enabled or disabled, and writable
 stack trace enabled or disabled.`]
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
				[/* text */ 't', `Constructs a new runtime exception with `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` as its
 detail message.  The cause is not initialized, and may subsequently be
 initialized by a call to `],
				[/* reference */ 'r', `java.lang.Throwable#initCause(java.lang.Throwable)`, `Throwable.initCause(java.lang.Throwable)`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new runtime exception with the specified detail message.
 The cause is not initialized, and may subsequently be initialized by a
 call to `],
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
				[/* text */ 't', `Constructs a new runtime exception with the specified detail message and
 cause.  `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that the detail message associated with
 `],
					[/* inline code block */ 'i', `cause`],
					[/* text */ 't', ` is `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` automatically incorporated in
 this runtime exception's detail message.`]
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
				[/* text */ 't', `Constructs a new runtime exception with the specified cause and a
 detail message of `],
				[/* inline code block */ 'i', `(cause==null ? null : cause.toString())`],
				[/* text */ 't', `
 (which typically contains the class and detail message of
 `],
				[/* inline code block */ 'i', `cause`],
				[/* text */ 't', `).  This constructor is useful for runtime exceptions
 that are little more than wrappers for other throwables.`]
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
