import {UDF} from '../../../../../utils';
import {DocsCollector} from '../../../../DocsCollector';

DocsCollector.collect('java.nio.channels.spi.AbstractInterruptibleChannel', [
	[/* class description */
		[/* text */ 't', `Base implementation class for interruptible channels.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` This class encapsulates the low-level machinery required to implement
 the asynchronous closing and interruption of channels.  A concrete channel
 class must invoke the `],
			[/* reference */ 'r', `#begin()`, `begin`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#end(boolean)`, `end`],
			[/* text */ 't', ` methods
 before and after, respectively, invoking an I/O operation that might block
 indefinitely.  In order to ensure that the `],
			[/* reference */ 'r', `#end(boolean)`, `end`],
			[/* text */ 't', ` method is always
 invoked, these methods should be used within a
 `],
			[/* inline code block */ 'i', `try`],
			[/* text */ 't', ` ... `],
			[/* inline code block */ 'i', `finally`],
			[/* text */ 't', ` block:

 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` boolean completed = false;
 try {
     begin();
     completed = ...;    // Perform blocking I/O operation
     return ...;         // Return result
 } finally {
     end(completed);
 }`]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* inline code block */ 'i', `completed`],
			[/* text */ 't', ` argument to the `],
			[/* reference */ 'r', `#end(boolean)`, `end`],
			[/* text */ 't', ` method tells
 whether or not the I/O operation actually completed, that is, whether it had
 any effect that would be visible to the invoker.  In the case of an
 operation that reads bytes, for example, this argument should be
 `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', ` if, and only if, some bytes were actually transferred into the
 invoker's target buffer.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A concrete channel class must also implement the `],
			[/* reference */ 'r', `#implCloseChannel()`, `implCloseChannel`],
			[/* text */ 't', ` method in such a way that if it is
 invoked while another thread is blocked in a native I/O operation upon the
 channel then that operation will immediately return, either by throwing an
 exception or by returning normally.  If a thread is interrupted or the
 channel upon which it is blocked is asynchronously closed then the channel's
 `],
			[/* reference */ 'r', `#end(boolean)`, `end`],
			[/* text */ 't', ` method will throw the appropriate exception.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` This class performs the synchronization required to implement the `],
			[/* reference */ 'r', `java.nio.channels.Channel`, `Channel`],
			[/* text */ 't', ` specification.  Implementations of the `],
			[/* reference */ 'r', `#implCloseChannel()`, `implCloseChannel`],
			[/* text */ 't', ` method need not synchronize against
 other threads that might be attempting to close the channel.  `]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Initializes a new instance of this class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'implCloseChannel()', [
			[/* method description */
				[/* text */ 't', `Closes this channel.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is invoked by the `],
					[/* reference */ 'r', `#close()`, `close`],
					[/* text */ 't', ` method in order
 to perform the actual work of closing the channel.  This method is only
 invoked if the channel has not yet been closed, and it is never invoked
 more than once.

 `]
				]],
				[/* block */ 'b', ` An implementation of this method must arrange for any other thread
 that is blocked in an I/O operation upon this channel to return
 immediately, either by throwing an exception or by returning normally.
 `]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs while closing the channel`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'begin()', [
			[/* method description */
				[/* text */ 't', `Marks the beginning of an I/O operation that might block indefinitely.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method should be invoked in tandem with the `],
					[/* reference */ 'r', `#end(boolean)`, `end`],
					[/* text */ 't', `
 method, using a `],
					[/* inline code block */ 'i', `try`],
					[/* text */ 't', ` ... `],
					[/* inline code block */ 'i', `finally`],
					[/* text */ 't', ` block as
 shown `],
					[/* text */ 't', `above`],
					[/* text */ 't', `, in order to implement asynchronous
 closing and interruption for this channel.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'end(boolean)', [
			[/* method description */
				[/* text */ 't', `Marks the end of an I/O operation that might block indefinitely.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method should be invoked in tandem with the `],
					[/* reference */ 'r', `#begin()`, `begin`],
					[/* text */ 't', ` method, using a `],
					[/* inline code block */ 'i', `try`],
					[/* text */ 't', ` ... `],
					[/* inline code block */ 'i', `finally`],
					[/* text */ 't', ` block
 as shown `],
					[/* text */ 't', `above`],
					[/* text */ 't', `, in order to implement asynchronous
 closing and interruption for this channel.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'completed', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if, and only if, the I/O operation completed
         successfully, that is, had some effect that would be visible to
         the operation's invoker`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If the channel was asynchronously closed`]
				]],
				[/* throw */ 'java.nio.channels.ClosedByInterruptException', [/* throw description */
					[/* text */ 't', `If the thread blocked in the I/O operation was interrupted`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'isOpen()', [
			[/* method description */
				[/* block */ 'b', `Tells whether or not this channel is open.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this channel is open`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this channel.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the channel has already been closed then this method returns
 immediately.  Otherwise it marks the channel as closed and then invokes
 the `],
					[/* reference */ 'r', `#implCloseChannel()`, `implCloseChannel`],
					[/* text */ 't', ` method in order to
 complete the close operation.  `]
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
