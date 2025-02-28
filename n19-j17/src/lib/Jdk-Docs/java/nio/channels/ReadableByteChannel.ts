import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.ReadableByteChannel', [
	[/* class description */
		[/* text */ 't', `A channel that can read bytes.

 `],
		[/* block */ 'b', ` Only one read operation upon a readable channel may be in progress at
 any given time.  If one thread initiates a read operation upon a channel
 then any other thread that attempts to initiate another read operation will
 block until the first operation is complete.  Whether or not other kinds of
 I/O operations may proceed concurrently with a read operation depends upon
 the type of the channel. `]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'read(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Reads a sequence of bytes from this channel into the given buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An attempt is made to read up to `],
					[/* text */ 't', `r`],
					[/* text */ 't', ` bytes from the channel,
 where `],
					[/* text */ 't', `r`],
					[/* text */ 't', ` is the number of bytes remaining in the buffer, that is,
 `],
					[/* inline code block */ 'i', `dst.remaining()`],
					[/* text */ 't', `, at the moment this method is invoked.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Suppose that a byte sequence of length `],
					[/* text */ 't', `n`],
					[/* text */ 't', ` is read, where
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `&nbsp;`],
					[/* inline code block */ 'i', `<=`],
					[/* text */ 't', `&nbsp;`],
					[/* text */ 't', `n`],
					[/* text */ 't', `&nbsp;`],
					[/* inline code block */ 'i', `<=`],
					[/* text */ 't', `&nbsp;`],
					[/* text */ 't', `r`],
					[/* text */ 't', `.
 This byte sequence will be transferred into the buffer so that the first
 byte in the sequence is at index `],
					[/* text */ 't', `p`],
					[/* text */ 't', ` and the last byte is at index
 `],
					[/* text */ 't', `p`],
					[/* text */ 't', `&nbsp;`],
					[/* inline code block */ 'i', `+`],
					[/* text */ 't', `&nbsp;`],
					[/* text */ 't', `n`],
					[/* text */ 't', `&nbsp;`],
					[/* inline code block */ 'i', `-`],
					[/* text */ 't', `&nbsp;`],
					[/* inline code block */ 'i', `1`],
					[/* text */ 't', `,
 where `],
					[/* text */ 't', `p`],
					[/* text */ 't', ` is the buffer's position at the moment this method is
 invoked.  Upon return the buffer's position will be equal to
 `],
					[/* text */ 't', `p`],
					[/* text */ 't', `&nbsp;`],
					[/* inline code block */ 'i', `+`],
					[/* text */ 't', `&nbsp;`],
					[/* text */ 't', `n`],
					[/* text */ 't', `; its limit will not have changed.

 `]
				]],
				[/* block */ 'b', ` A read operation might not fill the buffer, and in fact it might not
 read any bytes at all.  Whether or not it does so depends upon the
 nature and state of the channel.  A socket channel in non-blocking mode,
 for example, cannot read any more bytes than are immediately available
 from the socket's input buffer; similarly, a file channel cannot read
 any more bytes than remain in the file.  It is guaranteed, however, that
 if a channel is in blocking mode and there is at least one byte
 remaining in the buffer then this method will block until at least one
 byte is read.

 `],
				[/* block */ 'b', ` This method may be invoked at any time.  If another thread has
 already initiated a read operation upon this channel, however, then an
 invocation of this method will block until the first operation is
 complete. `]
			],
			[/* parameters */
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The buffer into which bytes are to be transferred`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the buffer is read-only`]
				]],
				[/* throw */ 'java.nio.channels.NonReadableChannelException', [/* throw description */
					[/* text */ 't', `If this channel was not opened for reading`]
				]],
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.nio.channels.AsynchronousCloseException', [/* throw description */
					[/* text */ 't', `If another thread closes this channel
          while the read operation is in progress`]
				]],
				[/* throw */ 'java.nio.channels.ClosedByInterruptException', [/* throw description */
					[/* text */ 't', `If another thread interrupts the current thread
          while the read operation is in progress, thereby
          closing the channel and setting the current thread's
          interrupt status`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of bytes read, possibly zero, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the
          channel has reached end-of-stream`]
			]
		]]
	],
]);
