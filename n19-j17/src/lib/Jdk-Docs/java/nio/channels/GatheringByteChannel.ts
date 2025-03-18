import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.GatheringByteChannel', [
	[/* class description */
		[/* text */ 't', `A channel that can write bytes from a sequence of buffers.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* text */ 't', `gathering`],
			[/* text */ 't', ` write operation writes, in a single invocation, a
 sequence of bytes from one or more of a given sequence of buffers.
 Gathering writes are often useful when implementing network protocols or
 file formats that, for example, group data into segments consisting of one
 or more fixed-length headers followed by a variable-length body.  Similar
 `],
			[/* text */ 't', `scattering`],
			[/* text */ 't', ` read operations are defined in the `],
			[/* reference */ 'r', `java.nio.channels.ScatteringByteChannel`, `ScatteringByteChannel`],
			[/* text */ 't', ` interface.  `]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'write(java.nio.ByteBuffer[])', [
			[/* method description */
				[/* text */ 't', `Writes a sequence of bytes to this channel from the given buffers.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `c.write(srcs)`],
					[/* text */ 't', `
 behaves in exactly the same manner as the invocation

 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` c.write(srcs, 0, srcs.length);`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'srcs', [/* parameter description */
					[/* text */ 't', `The buffers from which bytes are to be retrieved`]
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
		]],
		[/* method */ 'write(java.nio.ByteBuffer[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes a sequence of bytes to this channel from a subsequence of the
 given buffers.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An attempt is made to write up to `],
					[/* text */ 't', `r`],
					[/* text */ 't', ` bytes to this channel,
 where `],
					[/* text */ 't', `r`],
					[/* text */ 't', ` is the total number of bytes remaining in the specified
 subsequence of the given buffer array, that is,

 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` srcs[offset].remaining()
     + srcs[offset+1].remaining()
     + ... + srcs[offset+length-1].remaining()`]
				]],
				[/* text */ 't', `

 at the moment that this method is invoked.

 `],
				[/* block */ 'b', ''],
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
 Up to the first `],
					[/* inline code block */ 'i', `srcs[offset].remaining()`],
					[/* text */ 't', ` bytes of this sequence
 are written from buffer `],
					[/* inline code block */ 'i', `srcs[offset]`],
					[/* text */ 't', `, up to the next
 `],
					[/* inline code block */ 'i', `srcs[offset+1].remaining()`],
					[/* text */ 't', ` bytes are written from buffer
 `],
					[/* inline code block */ 'i', `srcs[offset+1]`],
					[/* text */ 't', `, and so forth, until the entire byte sequence is
 written.  As many bytes as possible are written from each buffer, hence
 the final position of each updated buffer, except the last updated
 buffer, is guaranteed to be equal to that buffer's limit.

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
				[/* parameter */ 'srcs', [/* parameter description */
					[/* text */ 't', `The buffers from which bytes are to be retrieved`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the buffer array of the first buffer from
         which bytes are to be retrieved; must be non-negative and no
         larger than `],
					[/* inline code block */ 'i', `srcs.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The maximum number of buffers to be accessed; must be
         non-negative and no larger than
         `],
					[/* inline code block */ 'i', `srcs.length`],
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `offset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on the `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `
          parameters do not hold`]
				]],
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
	/* enum values */ UDF
]);
