import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.AsynchronousChannel', [
	[/* class description */
		[/* text */ 't', `A channel that supports asynchronous I/O operations. Asynchronous I/O
 operations will usually take one of two forms:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* code block */ 'c', [
					[/* text */ 't', `Future`],
					[/* text */ 't', `<V> `],
					[/* text */ 't', `operation`],
					[/* text */ 't', `(`],
					[/* text */ 't', `...`],
					[/* text */ 't', `)`]
				]]
			]],
			[/* block */ 'b', [
				[/* code block */ 'c', [
					[/* text */ 't', `void `],
					[/* text */ 't', `operation`],
					[/* text */ 't', `(`],
					[/* text */ 't', `...`],
					[/* text */ 't', ` A attachment, `],
					[/* text */ 't', `CompletionHandler`],
					[/* text */ 't', `<V,? super A> handler)`]
				]]
			]]
		]],
		[/* text */ 't', `

 where `],
		[/* text */ 't', `operation`],
		[/* text */ 't', ` is the name of the I/O operation (read or write for
 example), `],
		[/* text */ 't', `V`],
		[/* text */ 't', ` is the result type of the I/O operation, and `],
		[/* text */ 't', `A`],
		[/* text */ 't', ` is
 the type of an object attached to the I/O operation to provide context when
 consuming the result. The attachment is important for cases where a
 `],
		[/* text */ 't', `state-less`],
		[/* text */ 't', ` `],
		[/* inline code block */ 'i', `CompletionHandler`],
		[/* text */ 't', ` is used to consume the result
 of many I/O operations.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` In the first form, the methods defined by the `],
			[/* reference */ 'r', `java.util.concurrent.Future`, `Future`],
			[/* text */ 't', `
 interface may be used to check if the operation has completed, wait for its
 completion, and to retrieve the result. In the second form, a `],
			[/* reference */ 'r', `java.nio.channels.CompletionHandler`, `CompletionHandler`],
			[/* text */ 't', ` is invoked to consume the result of the I/O operation when
 it completes or fails.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A channel that implements this interface is `],
			[/* text */ 't', `asynchronously
 closeable`],
			[/* text */ 't', `: If an I/O operation is outstanding on the channel and the
 channel's `],
			[/* reference */ 'r', `#close()`, `close`],
			[/* text */ 't', ` method is invoked, then the I/O operation
 fails with the exception `],
			[/* reference */ 'r', `java.nio.channels.AsynchronousCloseException`, `AsynchronousCloseException`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', ` Asynchronous channels are safe for use by multiple concurrent threads.
 Some channel implementations may support concurrent reading and writing, but
 may not allow more than one read and one write operation to be outstanding at
 any given time.

 `],
		[/* block */ 'b', `Cancellation`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* inline code block */ 'i', `Future`],
			[/* text */ 't', ` interface defines the `],
			[/* reference */ 'r', `java.util.concurrent.Future#cancel(boolean)`, `cancel`],
			[/* text */ 't', `
 method to cancel execution. This causes all threads waiting on the result of
 the I/O operation to throw `],
			[/* reference */ 'r', `java.util.concurrent.CancellationException`, `CancellationException`],
			[/* text */ 't', `.
 Whether the underlying I/O operation can be cancelled is highly implementation
 specific and therefore not specified. Where cancellation leaves the channel,
 or the entity to which it is connected, in an inconsistent state, then the
 channel is put into an implementation specific `],
			[/* text */ 't', `error state`],
			[/* text */ 't', ` that
 prevents further attempts to initiate I/O operations that are `],
			[/* text */ 't', `similar`],
			[/* text */ 't', `
 to the operation that was cancelled. For example, if a read operation is
 cancelled but the implementation cannot guarantee that bytes have not been
 read from the channel then it puts the channel into an error state; further
 attempts to initiate a `],
			[/* inline code block */ 'i', `read`],
			[/* text */ 't', ` operation cause an unspecified runtime
 exception to be thrown. Similarly, if a write operation is cancelled but the
 implementation cannot guarantee that bytes have not been written to the
 channel then subsequent attempts to initiate a `],
			[/* inline code block */ 'i', `write`],
			[/* text */ 't', ` will fail with
 an unspecified runtime exception.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Where the `],
			[/* reference */ 'r', `java.util.concurrent.Future#cancel(boolean)`, `cancel`],
			[/* text */ 't', ` method is invoked with the `],
			[/* inline code block */ 'i', `mayInterruptIfRunning`],
			[/* text */ 't', ` parameter set to `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', ` then the I/O operation
 may be interrupted by closing the channel. In that case all threads waiting
 on the result of the I/O operation throw `],
			[/* inline code block */ 'i', `CancellationException`],
			[/* text */ 't', ` and
 any other I/O operations outstanding on the channel complete with the
 exception `],
			[/* reference */ 'r', `java.nio.channels.AsynchronousCloseException`, `AsynchronousCloseException`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Where the `],
			[/* inline code block */ 'i', `cancel`],
			[/* text */ 't', ` method is invoked to cancel read or write
 operations then it is recommended that all buffers used in the I/O operations
 be discarded or care taken to ensure that the buffers are not accessed while
 the channel remains open.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this channel.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Any outstanding asynchronous operations upon this channel will
 complete with the exception `],
					[/* reference */ 'r', `java.nio.channels.AsynchronousCloseException`, `AsynchronousCloseException`],
					[/* text */ 't', `. After a
 channel is closed, further attempts to initiate asynchronous I/O
 operations complete immediately with cause `],
					[/* reference */ 'r', `java.nio.channels.ClosedChannelException`, `ClosedChannelException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `  This method otherwise behaves exactly as specified by the `],
					[/* reference */ 'r', `java.nio.channels.Channel`, `Channel`],
					[/* text */ 't', ` interface.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
