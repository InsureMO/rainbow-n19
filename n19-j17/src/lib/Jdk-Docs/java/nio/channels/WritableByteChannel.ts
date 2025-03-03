import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.WritableByteChannel', [
	[/* class description */
		[/* text */ 't', `A channel that can write bytes.

 `],
		[/* block */ 'b', ` Only one write operation upon a writable channel may be in progress at
 any given time.  If one thread initiates a write operation upon a channel
 then any other thread that attempts to initiate another write operation will
 block until the first operation is complete.  Whether or not other kinds of
 I/O operations may proceed concurrently with a write operation depends upon
 the type of the channel. `]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'write(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Writes a sequence of bytes to this channel from the given buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An attempt is made to write up to `],
					[/* text */ 't', `r`],
					[/* text */ 't', ` bytes to the channel,
 where `],
					[/* text */ 't', `r`],
					[/* text */ 't', ` is the number of bytes remaining in the buffer, that is,
 `],
					[/* inline code block */ 'i', `src.remaining()`],
					[/* text */ 't', `, at the moment this method is invoked.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Suppose that a byte sequence of length `],
					[/* text */ 't', `n`],
					[/* text */ 't', ` is written, where
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `<=`],
					[/* text */ 't', ` `],
					[/* text */ 't', `n`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `<=`],
					[/* text */ 't', ` `],
					[/* text */ 't', `r`],
					[/* text */ 't', `.
 This byte sequence will be transferred from the buffer starting at index
 `],
					[/* text */ 't', `p`],
					[/* text */ 't', `, where `],
					[/* text */ 't', `p`],
					[/* text */ 't', ` is the buffer's position at the moment this
 method is invoked; the index of the last byte written will be
 `],
					[/* text */ 't', `p`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `+`],
					[/* text */ 't', ` `],
					[/* text */ 't', `n`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `-`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `1`],
					[/* text */ 't', `.
 Upon return the buffer's position will be equal to
 `],
					[/* text */ 't', `p`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `+`],
					[/* text */ 't', ` `],
					[/* text */ 't', `n`],
					[/* text */ 't', `; its limit will not have changed.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Unless otherwise specified, a write operation will return only after
 writing all of the `],
					[/* text */ 't', `r`],
					[/* text */ 't', ` requested bytes.  Some types of channels,
 depending upon their state, may write only some of the bytes or possibly
 none at all.  A socket channel in non-blocking mode, for example, cannot
 write any more bytes than are free in the socket's output buffer.

 `]
				]],
				[/* block */ 'b', ` This method may be invoked at any time.  If another thread has
 already initiated a write operation upon this channel, however, then an
 invocation of this method will block until the first operation is
 complete. `]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The buffer from which bytes are to be retrieved`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If this channel was not opened for writing`]
				]],
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If another thread closes this channel
          while the write operation is in progress`]
				]],
				[/* throw */ 'java.nio.channels.ClosedByInterruptException', [/* throw description */
					[/* text */ 't', `If another thread interrupts the current thread
          while the write operation is in progress, thereby
          closing the channel and setting the current thread's
          interrupt status`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of bytes written, possibly zero`]
			]
		]]
	],
]);
