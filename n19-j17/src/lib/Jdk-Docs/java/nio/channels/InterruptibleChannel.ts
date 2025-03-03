import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.InterruptibleChannel', [
	[/* class description */
		[/* text */ 't', `A channel that can be asynchronously closed and interrupted.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A channel that implements this interface is `],
			[/* text */ 't', `asynchronously
 closeable:`],
			[/* text */ 't', ` If a thread is blocked in an I/O operation on an
 interruptible channel then another thread may invoke the channel's `],
			[/* reference */ 'r', `#close()`, `close`],
			[/* text */ 't', ` method.  This will cause the blocked thread to receive an
 `],
			[/* reference */ 'r', `java.nio.channels.AsynchronousCloseException`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A channel that implements this interface is also `],
			[/* text */ 't', `interruptible:`],
			[/* text */ 't', `
 If a thread is blocked in an I/O operation on an interruptible channel then
 another thread may invoke the blocked thread's `],
			[/* reference */ 'r', `java.nio.Thread#interrupt()`],
			[/* text */ 't', ` method.  This will cause the channel to be closed, the blocked
 thread to receive a `],
			[/* reference */ 'r', `java.nio.channels.ClosedByInterruptException`],
			[/* text */ 't', `, and the blocked
 thread's interrupt status to be set.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` If a thread's interrupt status is already set and it invokes a blocking
 I/O operation upon a channel then the channel will be closed and the thread
 will immediately receive a `],
			[/* reference */ 'r', `java.nio.channels.ClosedByInterruptException`],
			[/* text */ 't', `; its interrupt
 status will remain set.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A channel supports asynchronous closing and interruption if, and only
 if, it implements this interface.  This can be tested at runtime, if
 necessary, via the `],
			[/* inline code block */ 'i', `instanceof`],
			[/* text */ 't', ` operator.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this channel.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Any thread currently blocked in an I/O operation upon this channel
 will receive an `],
					[/* reference */ 'r', `java.nio.channels.AsynchronousCloseException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method otherwise behaves exactly as specified by the `],
					[/* reference */ 'r', `.Channel#close()`],
					[/* text */ 't', ` interface.  `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
