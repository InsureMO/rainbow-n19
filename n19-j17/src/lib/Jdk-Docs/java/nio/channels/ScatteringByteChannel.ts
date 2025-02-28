import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.ScatteringByteChannel', [
	[/* class description */
		[/* text */ 't', `A channel that can read bytes into a sequence of buffers.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* text */ 't', `scattering`],
			[/* text */ 't', ` read operation reads, in a single invocation, a
 sequence of bytes into one or more of a given sequence of buffers.
 Scattering reads are often useful when implementing network protocols or
 file formats that, for example, group data into segments consisting of one
 or more fixed-length headers followed by a variable-length body.  Similar
 `],
			[/* text */ 't', `gathering`],
			[/* text */ 't', ` write operations are defined in the `],
			[/* reference */ 'r', `java.nio.channels.GatheringByteChannel`],
			[/* text */ 't', ` interface.  `]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'read(java.nio.ByteBuffer[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads a sequence of bytes from this channel into a subsequence of the
 given buffers.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method attempts to read up to `],
					[/* text */ 't', `r`],
					[/* text */ 't', ` bytes
 from this channel, where `],
					[/* text */ 't', `r`],
					[/* text */ 't', ` is the total number of bytes remaining
 the specified subsequence of the given buffer array, that is,

 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` dsts[offset].remaining()
     + dsts[offset+1].remaining()
     + ... + dsts[offset+length-1].remaining()`]
				]],
				[/* text */ 't', `

 at the moment that this method is invoked.

 `],
				[/* block */ 'b', ''],
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
 Up to the first `],
					[/* inline code block */ 'i', `dsts[offset].remaining()`],
					[/* text */ 't', ` bytes of this sequence
 are transferred into buffer `],
					[/* inline code block */ 'i', `dsts[offset]`],
					[/* text */ 't', `, up to the next
 `],
					[/* inline code block */ 'i', `dsts[offset+1].remaining()`],
					[/* text */ 't', ` bytes are transferred into buffer
 `],
					[/* inline code block */ 'i', `dsts[offset+1]`],
					[/* text */ 't', `, and so forth, until the entire byte sequence
 is transferred into the given buffers.  As many bytes as possible are
 transferred into each buffer, hence the final position of each updated
 buffer, except the last updated buffer, is guaranteed to be equal to
 that buffer's limit.

 `]
				]],
				[/* block */ 'b', ` This method may be invoked at any time.  If another thread has
 already initiated a read operation upon this channel, however, then an
 invocation of this method will block until the first operation is
 complete. `]
			],
			[/* parameters */
				[/* parameter */ 'dsts', [/* parameter description */
					[/* text */ 't', `The buffers into which bytes are to be transferred`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the buffer array of the first buffer into
         which bytes are to be transferred; must be non-negative and no
         larger than `],
					[/* inline code block */ 'i', `dsts.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The maximum number of buffers to be accessed; must be
         non-negative and no larger than
         `],
					[/* inline code block */ 'i', `dsts.length`],
					[/* text */ 't', `&nbsp;-&nbsp;`],
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
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If any of the buffers is read-only`]
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
				[/* text */ 't', `The number of bytes read, possibly zero,
         or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the channel has reached end-of-stream`]
			]
		]],
		[/* method */ 'read(java.nio.ByteBuffer[])', [
			[/* method description */
				[/* text */ 't', `Reads a sequence of bytes from this channel into the given buffers.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `c.read(dsts)`],
					[/* text */ 't', `
 behaves in exactly the same manner as the invocation

 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` c.read(dsts, 0, dsts.length);`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'dsts', [/* parameter description */
					[/* text */ 't', `The buffers into which bytes are to be transferred`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If any of the buffers is read-only`]
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
				[/* text */ 't', `The number of bytes read, possibly zero,
         or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the channel has reached end-of-stream`]
			]
		]]
	],
]);
