import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.nio.MappedByteBuffer', [
	[/* class description */
		[/* text */ 't', `A direct byte buffer whose content is a memory-mapped region of a file.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Mapped byte buffers are created via the `],
			[/* reference */ 'r', `.FileChannel#map(java.nio.channels.FileChannel.MapMode,long,long)`],
			[/* text */ 't', ` method.  This class
 extends the `],
			[/* reference */ 'r', `java.nio.ByteBuffer`],
			[/* text */ 't', ` class with operations that are specific to
 memory-mapped file regions.

 `]
		]],
		[/* block */ 'b', ` A mapped byte buffer and the file mapping that it represents remain
 valid until the buffer itself is garbage-collected.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The content of a mapped byte buffer can change at any time, for example
 if the content of the corresponding region of the mapped file is changed by
 this program or another.  Whether or not such changes occur, and when they
 occur, is operating-system dependent and therefore unspecified.

 `],
			[/* text */ 't', ``]
		]],
		[/* block */ 'b', ` All or part of a mapped byte buffer may become
 inaccessible at any time, for example if the mapped file is truncated.  An
 attempt to access an inaccessible region of a mapped byte buffer will not
 change the buffer's content and will cause an unspecified exception to be
 thrown either at the time of the access or at some later time.  It is
 therefore strongly recommended that appropriate precautions be taken to
 avoid the manipulation of a mapped file by this program, or by a
 concurrently running program, except to read or write the file's content.

 `],
		[/* block */ 'b', ` Mapped byte buffers otherwise behave no differently than ordinary direct
 byte buffers. `]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'load()', [
			[/* method description */
				[/* text */ 't', `Loads this buffer's content into physical memory.

 `],
				[/* block */ 'b', ` This method makes a best effort to ensure that, when it returns,
 this buffer's content is resident in physical memory.  Invoking this
 method may cause some number of page faults and I/O operations to
 occur. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'clear()', [
			[/* method description */
				[/* text */ 't', `Clears this buffer.  The position is set to zero, the limit is set to
 the capacity, and the mark is discarded.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke this method before using a sequence of channel-read or
 `],
					[/* text */ 't', `put`],
					[/* text */ 't', ` operations to fill this buffer.  For example:

 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` buf.clear();     // Prepare buffer for reading
 in.read(buf);    // Read data`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` This method does not actually erase the data in the buffer, but it
 is named as if it did because it will most often be used in situations
 in which that might as well be the case. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'position(int)', [
			[/* method description */
				[/* text */ 't', `Sets this buffer's position.  If the mark is defined and larger than the
 new position then it is discarded.`]
			],
			[/* parameters */
				[/* parameter */ 'newPosition', [/* parameter description */
					[/* text */ 't', `The new position value; must be non-negative
         and no larger than the current limit`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'limit(int)', [
			[/* method description */
				[/* text */ 't', `Sets this buffer's limit.  If the position is larger than the new limit
 then it is set to the new limit.  If the mark is defined and larger than
 the new limit then it is discarded.`]
			],
			[/* parameters */
				[/* parameter */ 'newLimit', [/* parameter description */
					[/* text */ 't', `The new limit value; must be non-negative
         and no larger than this buffer's capacity`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'mark()', [
			[/* method description */
				[/* text */ 't', `Sets this buffer's mark at its position.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets this buffer's position to the previously-marked position.

 `],
				[/* block */ 'b', ` Invoking this method neither changes nor discards the mark's
 value. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'flip()', [
			[/* method description */
				[/* text */ 't', `Flips this buffer.  The limit is set to the current position and then
 the position is set to zero.  If the mark is defined then it is
 discarded.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` After a sequence of channel-read or `],
					[/* text */ 't', `put`],
					[/* text */ 't', ` operations, invoke
 this method to prepare for a sequence of channel-write or relative
 `],
					[/* text */ 't', `get`],
					[/* text */ 't', ` operations.  For example:

 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` buf.put(magic);    // Prepend header
 in.read(buf);      // Read data into rest of buffer
 buf.flip();        // Flip buffer
 out.write(buf);    // Write header + data to channel`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is often used in conjunction with the `],
					[/* reference */ 'r', `.ByteBuffer#compact()`],
					[/* text */ 't', ` method when transferring data from
 one place to another.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'rewind()', [
			[/* method description */
				[/* text */ 't', `Rewinds this buffer.  The position is set to zero and the mark is
 discarded.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke this method before a sequence of channel-write or `],
					[/* text */ 't', `get`],
					[/* text */ 't', `
 operations, assuming that the limit has already been set
 appropriately.  For example:

 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` out.write(buf);    // Write remaining data
 buf.rewind();      // Rewind buffer
 buf.get(array);    // Copy data into array`]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'slice()', [
			[/* method description */
				[/* text */ 't', `Creates a new byte buffer whose content is a shared subsequence of
 this buffer's content.

 `],
				[/* block */ 'b', ` The content of the new buffer will start at this buffer's current
 position.  Changes to this buffer's content will be visible in the new
 buffer, and vice versa; the two buffers' position, limit, and mark
 values will be independent.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer's position will be zero, its capacity and its limit
 will be the number of bytes remaining in this buffer, its mark will be
 undefined, and its byte order will be

 `],
					[/* reference */ 'r', `.ByteOrder#BIG_ENDIAN`],
					[/* text */ 't', `.



 The new buffer will be direct if, and only if, this buffer is direct, and
 it will be read-only if, and only if, this buffer is read-only.  `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Reading bytes into physical memory by invoking `],
					[/* inline code block */ 'i', `load()`],
					[/* text */ 't', ` on the
 returned buffer, or writing bytes to the storage device by invoking
 `],
					[/* inline code block */ 'i', `force()`],
					[/* text */ 't', ` on the returned buffer, will only act on the sub-range
 of this buffer that the returned buffer represents, namely
 `],
					[/* inline code block */ 'i', `[position(),limit())`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new byte buffer`]
			]
		]],
		[/* method */ 'slice(int,int)', [
			[/* method description */
				[/* text */ 't', `Creates a new byte buffer whose content is a shared subsequence of
 this buffer's content.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The content of the new buffer will start at position `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 in this buffer, and will contain `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` elements. Changes to
 this buffer's content will be visible in the new buffer, and vice versa;
 the two buffers' position, limit, and mark values will be independent.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer's position will be zero, its capacity and its limit
 will be `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `, its mark will be undefined, and its byte order
 will be

 `],
					[/* reference */ 'r', `.ByteOrder#BIG_ENDIAN`],
					[/* text */ 't', `.



 The new buffer will be direct if, and only if, this buffer is direct,
 and it will be read-only if, and only if, this buffer is read-only. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Reading bytes into physical memory by invoking `],
					[/* inline code block */ 'i', `load()`],
					[/* text */ 't', ` on the
 returned buffer, or writing bytes to the storage device by invoking
 `],
					[/* inline code block */ 'i', `force()`],
					[/* text */ 't', ` on the returned buffer, will only act on the sub-range
 of this buffer that the returned buffer represents, namely
 `],
					[/* inline code block */ 'i', `[index,index+length)`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` are
 assumed to satisfy the preconditions.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The position in this buffer at which the content of the new
          buffer will start; must be non-negative and no larger than
          `],
					[/* reference */ 'r', `.Buffer#limit()`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of elements the new buffer will contain; must be
          non-negative and no larger than `],
					[/* inline code block */ 'i', `limit() - index`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new buffer`]
			]
		]],
		[/* method */ 'duplicate()', [
			[/* method description */
				[/* text */ 't', `Creates a new byte buffer that shares this buffer's content.

 `],
				[/* block */ 'b', ` The content of the new buffer will be that of this buffer.  Changes
 to this buffer's content will be visible in the new buffer, and vice
 versa; the two buffers' position, limit, and mark values will be
 independent.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer's capacity, limit, position,

 and mark values will be identical to those of this buffer, and its byte
 order will be `],
					[/* reference */ 'r', `.ByteOrder#BIG_ENDIAN`],
					[/* text */ 't', `.



 The new buffer will be direct if, and only if, this buffer is direct, and
 it will be read-only if, and only if, this buffer is read-only.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new byte buffer`]
			]
		]],
		[/* method */ 'compact()', [
			[/* method description */
				[/* text */ 't', `Compacts this buffer  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The bytes between the buffer's current position and its limit,
 if any, are copied to the beginning of the buffer.  That is, the
 byte at index `],
					[/* text */ 't', `p`],
					[/* text */ 't', ` = `],
					[/* inline code block */ 'i', `position()`],
					[/* text */ 't', ` is copied
 to index zero, the byte at index `],
					[/* text */ 't', `p`],
					[/* text */ 't', ` + 1 is copied
 to index one, and so forth until the byte at index
 `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', ` - 1 is copied to index
 `],
					[/* text */ 't', `n`],
					[/* text */ 't', ` = `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', ` - `],
					[/* inline code block */ 'i', `1`],
					[/* text */ 't', ` - `],
					[/* text */ 't', `p`],
					[/* text */ 't', `.
 The buffer's position is then set to `],
					[/* text */ 't', `n+1`],
					[/* text */ 't', ` and its limit is set to
 its capacity.  The mark, if defined, is discarded.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The buffer's position is set to the number of bytes copied,
 rather than to zero, so that an invocation of this method can be
 followed immediately by an invocation of another relative `],
					[/* text */ 't', `put`],
					[/* text */ 't', `
 method. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke this method after writing data from a buffer in case the
 write was incomplete.  The following loop, for example, copies bytes
 from one channel to another via the buffer `],
					[/* inline code block */ 'i', `buf`],
					[/* text */ 't', `:

 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `buf.clear();          // Prepare buffer for use
   while (in.read(buf) >= 0 || buf.position != 0) {
       buf.flip();
       out.write(buf);
       buf.compact();    // In case of partial write
   }`]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'isLoaded()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this buffer's content is resident in physical
 memory.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` A return value of `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` implies that it is highly likely
 that all of the data in this buffer is resident in physical memory and
 may therefore be accessed without incurring any virtual-memory page
 faults or I/O operations.  A return value of `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` does not
 necessarily imply that the buffer's content is not resident in physical
 memory.

 `]
				]],
				[/* block */ 'b', ` The returned value is a hint, rather than a guarantee, because the
 underlying operating system may have paged out some of the buffer's data
 by the time that an invocation of this method returns.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if it is likely that this buffer's content
          is resident in physical memory`]
			]
		]],
		[/* method */ 'force()', [
			[/* method description */
				[/* text */ 't', `Forces any changes made to this buffer's content to be written to the
 storage device containing the mapped file.  The region starts at index
 zero in this buffer and is `],
				[/* inline code block */ 'i', `capacity()`],
				[/* text */ 't', ` bytes.  An invocation of
 this method behaves in exactly the same way as the invocation
 `],
				[/* reference */ 'r', `#force(int,int)`, `force(0,capacity())`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` If the file mapped into this buffer resides on a local storage
 device then when this method returns it is guaranteed that all changes
 made to the buffer since it was created, or since this method was last
 invoked, will have been written to that device.

 `],
				[/* block */ 'b', ` If the file does not reside on a local device then no such guarantee
 is made.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this buffer was not mapped in read/write mode (`],
					[/* reference */ 'r', `.FileChannel.MapMode#READ_WRITE`],
					[/* text */ 't', `) then
 invoking this method may have no effect. In particular, the
 method has no effect for buffers mapped in read-only or private
 mapping modes. This method may or may not have an effect for
 implementation-specific mapping modes. `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.UncheckedIOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs writing the buffer's content to the
         storage device containing the mapped file`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'force(int,int)', [
			[/* method description */
				[/* text */ 't', `Forces any changes made to a region of this buffer's content to
 be written to the storage device containing the mapped
 file. The region starts at the given `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` in this
 buffer and is `],
				[/* inline code block */ 'i', `length`],
				[/* text */ 't', ` bytes.

 `],
				[/* block */ 'b', ` If the file mapped into this buffer resides on a local
 storage device then when this method returns it is guaranteed
 that all changes made to the selected region buffer since it
 was created, or since this method was last invoked, will have
 been written to that device. The force operation is free to
 write bytes that lie outside the specified region, for example
 to ensure that data blocks of some device-specific granularity
 are transferred in their entirety.

 `],
				[/* block */ 'b', ` If the file does not reside on a local device then no such
 guarantee is made.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this buffer was not mapped in read/write mode (`],
					[/* reference */ 'r', `.FileChannel.MapMode#READ_WRITE`],
					[/* text */ 't', `) then
 invoking this method may have no effect. In particular, the
 method has no effect for buffers mapped in read-only or private
 mapping modes. This method may or may not have an effect for
 implementation-specific mapping modes. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index of the first byte in the buffer region that is
         to be written back to storage; must be non-negative
         and less than `],
					[/* inline code block */ 'i', `capacity()`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The length of the region in bytes; must be non-negative
         and no larger than `],
					[/* inline code block */ 'i', `capacity() - index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the preconditions on the index and length do not
         hold.`]
				]],
				[/* throw */ 'java.io.UncheckedIOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs writing the buffer's content to the
         storage device containing the mapped file`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]]
	],
]);
