import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Thread$UncaughtExceptionHandler', [
	[/* class description */
		[/* text */ 't', `Interface for handlers invoked when a `],
		[/* inline code block */ 'i', `Thread`],
		[/* text */ 't', ` abruptly
 terminates due to an uncaught exception.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `When a thread is about to terminate due to an uncaught exception
 the Java Virtual Machine will query the thread for its
 `],
			[/* inline code block */ 'i', `UncaughtExceptionHandler`],
			[/* text */ 't', ` using
 `],
			[/* reference */ 'r', `java.lang.Thread#getUncaughtExceptionHandler()`, `Thread.getUncaughtExceptionHandler()`],
			[/* text */ 't', ` and will invoke the handler's
 `],
			[/* inline code block */ 'i', `uncaughtException`],
			[/* text */ 't', ` method, passing the thread and the
 exception as arguments.
 If a thread has not had its `],
			[/* inline code block */ 'i', `UncaughtExceptionHandler`],
			[/* text */ 't', `
 explicitly set, then its `],
			[/* inline code block */ 'i', `ThreadGroup`],
			[/* text */ 't', ` object acts as its
 `],
			[/* inline code block */ 'i', `UncaughtExceptionHandler`],
			[/* text */ 't', `. If the `],
			[/* inline code block */ 'i', `ThreadGroup`],
			[/* text */ 't', ` object
 has no
 special requirements for dealing with the exception, it can forward
 the invocation to the `],
			[/* reference */ 'r', `java.lang.Thread#getDefaultUncaughtExceptionHandler()`, `default uncaught exception handler`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'uncaughtException(java.lang.Thread,java.lang.Throwable)', [
			[/* method description */
				[/* text */ 't', `Method invoked when the given thread terminates due to the
 given uncaught exception.
 `],
				[/* block */ 'b', `Any exception thrown by this method will be ignored by the
 Java Virtual Machine.`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `the thread`]
				]],
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `the exception`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
