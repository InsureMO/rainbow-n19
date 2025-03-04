import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.SeekableByteChannel', [
	[/* class description */
		[/* text */ 't', `A byte channel that maintains a current `],
		[/* text */ 't', `position`],
		[/* text */ 't', ` and allows the
 position to be changed.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A seekable byte channel is connected to an entity, typically a file,
 that contains a variable-length sequence of bytes that can be read and
 written. The current position can be `],
			[/* reference */ 'r', `#position()`, `queried`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#position(long)`, `modified`],
			[/* text */ 't', `. The channel also provides access to
 the current `],
			[/* text */ 't', `size`],
			[/* text */ 't', ` of the entity to which the channel is connected. The
 size increases when bytes are written beyond its current size; the size
 decreases when it is `],
			[/* reference */ 'r', `#truncate(long)`, `truncated`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* reference */ 'r', `#position(long)`, `position`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#truncate(long)`, `truncate`],
			[/* text */ 't', ` methods
 which do not otherwise have a value to return are specified to return the
 channel upon which they are invoked. This allows method invocations to be
 chained. Implementations of this interface should specialize the return type
 so that method invocations on the implementation class can be chained.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'read(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Reads a sequence of bytes from this channel into the given buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Bytes are read starting at this channel's current position, and
 then the position is updated with the number of bytes actually read.
 Otherwise this method behaves exactly as specified in the `],
					[/* reference */ 'r', `java.nio.channels.ReadableByteChannel`],
					[/* text */ 't', ` interface.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The buffer into which bytes are to be transferred`]
				]]
			],
			[/* throws */
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
		]],
		[/* method */ 'write(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Writes a sequence of bytes to this channel from the given buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Bytes are written starting at this channel's current position, unless
 the channel is connected to an entity such as a file that is opened with
 the `],
					[/* reference */ 'r', `java.StandardOpenOption#APPEND`],
					[/* text */ 't', ` option, in
 which case the position is first advanced to the end. The entity to which
 the channel is connected is grown, if necessary, to accommodate the
 written bytes, and then the position is updated with the number of bytes
 actually written. Otherwise this method behaves exactly as specified by
 the `],
					[/* reference */ 'r', `java.nio.channels.WritableByteChannel`],
					[/* text */ 't', ` interface.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The buffer from which bytes are to be retrieved`]
				]]
			],
			[/* throws */
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
		[/* method */ 'position(long)', [
			[/* method description */
				[/* text */ 't', `Sets this channel's position.

 `],
				[/* block */ 'b', ` Setting the position to a value that is greater than the current size
 is legal but does not change the size of the entity.  A later attempt to
 read bytes at such a position will immediately return an end-of-file
 indication.  A later attempt to write bytes at such a position will cause
 the entity to grow to accommodate the new bytes; the values of any bytes
 between the previous end-of-file and the newly-written bytes are
 unspecified.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Setting the channel's position is not recommended when connected to
 an entity, typically a file, that is opened with the `],
					[/* reference */ 'r', `java.StandardOpenOption#APPEND`],
					[/* text */ 't', ` option. When opened for
 append, the position is first advanced to the end before writing.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'newPosition', [/* parameter description */
					[/* text */ 't', `The new position, a non-negative integer counting
         the number of bytes from the beginning of the entity`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the new position is negative`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This channel`]
			]
		]],
		[/* method */ 'truncate(long)', [
			[/* method description */
				[/* text */ 't', `Truncates the entity, to which this channel is connected, to the given
 size.

 `],
				[/* block */ 'b', ` If the given size is less than the current size then the entity is
 truncated, discarding any bytes beyond the new end. If the given size is
 greater than or equal to the current size then the entity is not modified.
 In either case, if the current position is greater than the given size
 then it is set to that size.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An implementation of this interface may prohibit truncation when
 connected to an entity, typically a file, opened with the `],
					[/* reference */ 'r', `java.StandardOpenOption#APPEND`],
					[/* text */ 't', ` option.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `The new size, a non-negative byte count`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.channels.NonWritableChannelException', [/* throw description */
					[/* text */ 't', `If this channel was not opened for writing`]
				]],
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the new size is negative`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This channel`]
			]
		]],
		[/* method */ 'position()', [
			[/* method description */
				[/* text */ 't', `Returns this channel's position.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This channel's position,
          a non-negative integer counting the number of bytes
          from the beginning of the entity to the current position`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the current size of entity to which this channel is connected.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.channels.ClosedChannelException', [/* throw description */
					[/* text */ 't', `If this channel is closed`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If some other I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The current size, measured in bytes`]
			]
		]]
	],
]);
