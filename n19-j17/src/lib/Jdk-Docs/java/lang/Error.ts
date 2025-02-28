import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Error', [
	[/* class description */
		[/* text */ 't', `An `],
		[/* inline code block */ 'i', `Error`],
		[/* text */ 't', ` is a subclass of `],
		[/* inline code block */ 'i', `Throwable`],
		[/* text */ 't', `
 that indicates serious problems that a reasonable application
 should not try to catch. Most such errors are abnormal conditions.
 The `],
		[/* inline code block */ 'i', `ThreadDeath`],
		[/* text */ 't', ` error, though a "normal" condition,
 is also a subclass of `],
		[/* inline code block */ 'i', `Error`],
		[/* text */ 't', ` because most applications
 should not try to catch it.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 A method is not required to declare in its `],
			[/* inline code block */ 'i', `throws`],
			[/* text */ 't', `
 clause any subclasses of `],
			[/* inline code block */ 'i', `Error`],
			[/* text */ 't', ` that might be thrown
 during the execution of the method but not caught, since these
 errors are abnormal conditions that should never occur.

 That is, `],
			[/* inline code block */ 'i', `Error`],
			[/* text */ 't', ` and its subclasses are regarded as unchecked
 exceptions for the purposes of compile-time checking of exceptions.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.Throwable,boolean,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new error with the specified detail message,
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
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new error with the specified cause and a detail
 message of `],
				[/* inline code block */ 'i', `(cause==null ? null : cause.toString())`],
				[/* text */ 't', ` (which
 typically contains the class and detail message of `],
				[/* inline code block */ 'i', `cause`],
				[/* text */ 't', `).
 This constructor is useful for errors that are little more than
 wrappers for other throwables.`]
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
				[/* text */ 't', `Constructs a new error with the specified detail message and
 cause.  `],
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
					[/* text */ 't', ` value is
         permitted, and indicates that the cause is nonexistent or
         unknown.)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new error with the specified detail message.  The
 cause is not initialized, and may subsequently be initialized by
 a call to `],
				[/* external link */ 'a', `Throwable.html#initCause(java.lang.Throwable)`, `Throwable.initCause(java.lang.Throwable)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detail message. The detail message is saved for
          later retrieval by the `],
					[/* external link */ 'a', `Throwable.html#getMessage()`, `Throwable.getMessage()`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new error with `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` as its detail message.
 The cause is not initialized, and may subsequently be initialized by a
 call to `],
				[/* external link */ 'a', `Throwable.html#initCause(java.lang.Throwable)`, `Throwable.initCause(java.lang.Throwable)`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
