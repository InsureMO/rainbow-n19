import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ThreadDeath', [
	[/* class description */
		[/* text */ 't', `An instance of `],
		[/* inline code block */ 'i', `ThreadDeath`],
		[/* text */ 't', ` is thrown in the victim thread
 when the (deprecated) `],
		[/* reference */ 'r', `java.lang.Thread#stop()`, `Thread.stop()`],
		[/* text */ 't', ` method is invoked.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `An application should catch instances of this class only if it
 must clean up after being terminated asynchronously.  If
 `],
			[/* inline code block */ 'i', `ThreadDeath`],
			[/* text */ 't', ` is caught by a method, it is important that it
 be rethrown so that the thread actually dies.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* reference */ 'r', `java.lang.ThreadGroup#uncaughtException(java.lang.Thread,java.lang.Throwable)`, `top-level error handler`],
			[/* text */ 't', ` does not print out a message if `],
			[/* inline code block */ 'i', `ThreadDeath`],
			[/* text */ 't', ` is
 never caught.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The class `],
			[/* inline code block */ 'i', `ThreadDeath`],
			[/* text */ 't', ` is specifically a subclass of
 `],
			[/* inline code block */ 'i', `Error`],
			[/* text */ 't', ` rather than `],
			[/* inline code block */ 'i', `Exception`],
			[/* text */ 't', `, even though it is a
 "normal occurrence", because many applications catch all
 occurrences of `],
			[/* inline code block */ 'i', `Exception`],
			[/* text */ 't', ` and then discard the exception.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `ThreadDeath`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
