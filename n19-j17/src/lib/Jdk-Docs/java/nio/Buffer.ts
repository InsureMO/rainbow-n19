import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.nio.Buffer', [
	[/* class description */
		[/* text */ 't', `A container for data of a specific primitive type.

 `],
		[/* block */ 'b', ` A buffer is a linear, finite sequence of elements of a specific
 primitive type.  Aside from its content, the essential properties of a
 buffer are its capacity, limit, and position: `],
		[/* text */ 't', `

 `],
		[/* blockquote */ 'q', [
			[/* text */ 't', `

   `],
			[/* block */ 'b', [
				[/* text */ 't', ` A buffer's `],
				[/* text */ 't', `capacity`],
				[/* text */ 't', ` is the number of elements it contains.  The
   capacity of a buffer is never negative and never changes.  `]
			]],
			[/* text */ 't', `

   `],
			[/* block */ 'b', [
				[/* text */ 't', ` A buffer's `],
				[/* text */ 't', `limit`],
				[/* text */ 't', ` is the index of the first element that should
   not be read or written.  A buffer's limit is never negative and is never
   greater than its capacity.  `]
			]],
			[/* text */ 't', `

   `],
			[/* block */ 'b', [
				[/* text */ 't', ` A buffer's `],
				[/* text */ 't', `position`],
				[/* text */ 't', ` is the index of the next element to be
   read or written.  A buffer's position is never negative and is never
   greater than its limit.  `]
			]],
			[/* text */ 't', `

 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ` There is one subclass of this class for each non-boolean primitive type.


 `],
		[/* block */ 'b', ` Transferring data `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Each subclass of this class defines two categories of `],
			[/* text */ 't', `get`],
			[/* text */ 't', ` and
 `],
			[/* text */ 't', `put`],
			[/* text */ 't', ` operations: `]
		]],
		[/* text */ 't', `

 `],
		[/* blockquote */ 'q', [
			[/* text */ 't', `

   `],
			[/* block */ 'b', [
				[/* text */ 't', ` `],
				[/* text */ 't', `Relative`],
				[/* text */ 't', ` operations read or write one or more elements starting
   at the current position and then increment the position by the number of
   elements transferred.  If the requested transfer exceeds the limit then a
   relative `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` operation throws a `],
				[/* reference */ 'r', `java.nio.BufferUnderflowException`, `BufferUnderflowException`],
				[/* text */ 't', `
   and a relative `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` operation throws a `],
				[/* reference */ 'r', `java.nio.BufferOverflowException`, `BufferOverflowException`],
				[/* text */ 't', `; in either case, no data is transferred.  `]
			]],
			[/* text */ 't', `

   `],
			[/* block */ 'b', [
				[/* text */ 't', ` `],
				[/* text */ 't', `Absolute`],
				[/* text */ 't', ` operations take an explicit element index and do not
   affect the position.  Absolute `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` and `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` operations throw
   an `],
				[/* reference */ 'r', `java.lang.IndexOutOfBoundsException`, `IndexOutOfBoundsException`],
				[/* text */ 't', ` if the index argument exceeds the
   limit.  `]
			]],
			[/* text */ 't', `

 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ` Data may also, of course, be transferred in to or out of a buffer by the
 I/O operations of an appropriate channel, which are always relative to the
 current position.


 `],
		[/* block */ 'b', ` Marking and resetting `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A buffer's `],
			[/* text */ 't', `mark`],
			[/* text */ 't', ` is the index to which its position will be reset
 when the `],
			[/* reference */ 'r', `#reset()`, `reset`],
			[/* text */ 't', ` method is invoked.  The mark is not always
 defined, but when it is defined it is never negative and is never greater
 than the position.  If the mark is defined then it is discarded when the
 position or the limit is adjusted to a value smaller than the mark.  If the
 mark is not defined then invoking the `],
			[/* reference */ 'r', `#reset()`, `reset`],
			[/* text */ 't', ` method causes an
 `],
			[/* reference */ 'r', `java.nio.InvalidMarkException`, `InvalidMarkException`],
			[/* text */ 't', ` to be thrown.


 `]
		]],
		[/* block */ 'b', ` Invariants `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ` The following invariant holds for the mark, position, limit, and
 capacity values:

 `],
		[/* blockquote */ 'q', [
			[/* text */ 't', `
     `],
			[/* inline code block */ 'i', `0`],
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `<=`],
			[/* text */ 't', `
     `],
			[/* text */ 't', `mark`],
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `<=`],
			[/* text */ 't', `
     `],
			[/* text */ 't', `position`],
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `<=`],
			[/* text */ 't', `
     `],
			[/* text */ 't', `limit`],
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `<=`],
			[/* text */ 't', `
     `],
			[/* text */ 't', `capacity`],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` A newly-created buffer always has a position of zero and a mark that is
 undefined.  The initial limit may be zero, or it may be some other value
 that depends upon the type of the buffer and the manner in which it is
 constructed.  Each element of a newly-allocated buffer is initialized
 to zero.


 `],
		[/* block */ 'b', ` Additional operations `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ` In addition to methods for accessing the position, limit, and capacity
 values and for marking and resetting, this class also defines the following
 operations upon buffers:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` `],
					[/* reference */ 'r', `#clear()`, `clear()`],
					[/* text */ 't', ` makes a buffer ready for a new sequence of
   channel-read or relative `],
					[/* text */ 't', `put`],
					[/* text */ 't', ` operations: It sets the limit to the
   capacity and the position to zero.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` `],
					[/* reference */ 'r', `#flip()`, `flip()`],
					[/* text */ 't', ` makes a buffer ready for a new sequence of
   channel-write or relative `],
					[/* text */ 't', `get`],
					[/* text */ 't', ` operations: It sets the limit to the
   current position and then sets the position to zero.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` `],
					[/* reference */ 'r', `#rewind()`, `rewind()`],
					[/* text */ 't', ` makes a buffer ready for re-reading the data that
   it already contains: It leaves the limit unchanged and sets the position
   to zero.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `#slice()`, `slice()`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#slice(int,int)`, `slice(index,length)`],
					[/* text */ 't', `
   methods create a subsequence of a buffer: They leave the limit and the
   position unchanged. `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` `],
					[/* reference */ 'r', `#duplicate()`, `duplicate()`],
					[/* text */ 't', ` creates a shallow copy of a buffer: It leaves
   the limit and the position unchanged. `]
				]]
			]]
		]],
		[/* text */ 't', `


 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Read-only buffers `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Every buffer is readable, but not every buffer is writable.  The
 mutation methods of each buffer class are specified as `],
			[/* text */ 't', `optional
 operations`],
			[/* text */ 't', ` that will throw a `],
			[/* reference */ 'r', `java.nio.ReadOnlyBufferException`, `ReadOnlyBufferException`],
			[/* text */ 't', ` when
 invoked upon a read-only buffer.  A read-only buffer does not allow its
 content to be changed, but its mark, position, and limit values are mutable.
 Whether or not a buffer is read-only may be determined by invoking its
 `],
			[/* reference */ 'r', `#isReadOnly()`, `isReadOnly`],
			[/* text */ 't', ` method.


 `]
		]],
		[/* block */ 'b', ` Thread safety `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ` Buffers are not safe for use by multiple concurrent threads.  If a
 buffer is to be used by more than one thread then access to the buffer
 should be controlled by appropriate synchronization.


 `],
		[/* block */ 'b', ` Invocation chaining `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ` Methods in this class that do not otherwise have a value to return are
 specified to return the buffer upon which they are invoked.  This allows
 method invocations to be chained; for example, the sequence of statements

 `],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', ` b.flip();
 b.position(23);
 b.limit(42);`]
		]],
		[/* text */ 't', `

 can be replaced by the single, more compact statement

 `],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', ` b.flip().position(23).limit(42);`]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'hasArray()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this buffer is backed by an accessible
 array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` then the `],
					[/* reference */ 'r', `#array()`, `array`],
					[/* text */ 't', `
 and `],
					[/* reference */ 'r', `#arrayOffset()`, `arrayOffset`],
					[/* text */ 't', ` methods may safely be invoked.
 `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this buffer
          is backed by an array and is not read-only`]
			]
		]],
		[/* method */ 'isDirect()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this buffer is
 `],
				[/* reference */ 'r', `java.nio.ByteBuffer#direct`, `direct`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this buffer is direct`]
			]
		]],
		[/* method */ 'isReadOnly()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this buffer is read-only.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this buffer is read-only`]
			]
		]],
		[/* method */ 'arrayOffset()', [
			[/* method description */
				[/* text */ 't', `Returns the offset within this buffer's backing array of the first
 element of the buffer  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this buffer is backed by an array then buffer position `],
					[/* text */ 't', `p`],
					[/* text */ 't', `
 corresponds to array index `],
					[/* text */ 't', `p`],
					[/* text */ 't', ` + `],
					[/* inline code block */ 'i', `arrayOffset()`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke the `],
					[/* reference */ 'r', `#hasArray()`, `hasArray`],
					[/* text */ 't', ` method before invoking this
 method in order to ensure that this buffer has an accessible backing
 array.  `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is backed by an array but is read-only`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this buffer is not backed by an accessible array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The offset within this buffer's array
          of the first element of the buffer`]
			]
		]],
		[/* method */ 'array()', [
			[/* method description */
				[/* text */ 't', `Returns the array that backs this
 buffer  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` This method is intended to allow array-backed buffers to be
 passed to native code more efficiently. Concrete subclasses
 provide more strongly-typed return values for this method.

 `],
				[/* block */ 'b', ` Modifications to this buffer's content will cause the returned
 array's content to be modified, and vice versa.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke the `],
					[/* reference */ 'r', `#hasArray()`, `hasArray`],
					[/* text */ 't', ` method before invoking this
 method in order to ensure that this buffer has an accessible backing
 array.  `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is backed by an array but is read-only`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this buffer is not backed by an accessible array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The array that backs this buffer`]
			]
		]],
		[/* method */ 'duplicate()', [
			[/* method description */
				[/* text */ 't', `Creates a new buffer that shares this buffer's content.

 `],
				[/* block */ 'b', ` The content of the new buffer will be that of this buffer.  Changes
 to this buffer's content will be visible in the new buffer, and vice
 versa; the two buffers' position, limit, and mark values will be
 independent.

 `],
				[/* block */ 'b', ` The new buffer's capacity, limit, position and mark values will be
 identical to those of this buffer. The new buffer will be direct if, and
 only if, this buffer is direct, and it will be read-only if, and only if,
 this buffer is read-only.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new buffer`]
			]
		]],
		[/* method */ 'slice()', [
			[/* method description */
				[/* text */ 't', `Creates a new buffer whose content is a shared subsequence of
 this buffer's content.

 `],
				[/* block */ 'b', ` The content of the new buffer will start at this buffer's current
 position.  Changes to this buffer's content will be visible in the new
 buffer, and vice versa; the two buffers' position, limit, and mark
 values will be independent.

 `],
				[/* block */ 'b', ` The new buffer's position will be zero, its capacity and its limit
 will be the number of elements remaining in this buffer, its mark will be
 undefined. The new buffer will be direct if, and only if, this buffer is
 direct, and it will be read-only if, and only if, this buffer is
 read-only.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new buffer`]
			]
		]],
		[/* method */ 'slice(int,int)', [
			[/* method description */
				[/* text */ 't', `Creates a new buffer whose content is a shared subsequence of
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
					[/* text */ 't', `, its mark will be undefined. The new buffer will
 be direct if, and only if, this buffer is direct, and it will be
 read-only if, and only if, this buffer is read-only.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The position in this buffer at which the content of the new
          buffer will start; must be non-negative and no larger than
          `],
					[/* reference */ 'r', `#limit()`, `limit()`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of elements the new buffer will contain; must be
          non-negative and no larger than `],
					[/* inline code block */ 'i', `limit() - index`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative or greater than `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', `,
          `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `length > limit() - index`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The new buffer`]
			]
		]],
		[/* method */ 'hasRemaining()', [
			[/* method description */
				[/* text */ 't', `Tells whether there are any elements between the current position and
 the limit.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, there is at least one element
          remaining in this buffer`]
			]
		]],
		[/* method */ 'capacity()', [
			[/* method description */
				[/* text */ 't', `Returns this buffer's capacity.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The capacity of this buffer`]
			]
		]],
		[/* method */ 'limit()', [
			[/* method description */
				[/* text */ 't', `Returns this buffer's limit.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The limit of this buffer`]
			]
		]],
		[/* method */ 'position()', [
			[/* method description */
				[/* text */ 't', `Returns this buffer's position.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The position of this buffer`]
			]
		]],
		[/* method */ 'remaining()', [
			[/* method description */
				[/* text */ 't', `Returns the number of elements between the current position and the
 limit.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The number of elements remaining in this buffer`]
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
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` buf.clear();     // Prepare buffer for reading
 in.read(buf);    // Read data`]
				]],
				[/* text */ 't', `

 `],
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
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` buf.put(magic);    // Prepend header
 in.read(buf);      // Read data into rest of buffer
 buf.flip();        // Flip buffer
 out.write(buf);    // Write header + data to channel`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is often used in conjunction with the `],
					[/* reference */ 'r', `java.nio.ByteBuffer#compact()`, `compact`],
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
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on `],
					[/* inline code block */ 'i', `newLimit`],
					[/* text */ 't', ` do not hold`]
				]]
			],
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
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on `],
					[/* inline code block */ 'i', `newPosition`],
					[/* text */ 't', ` do not hold`]
				]]
			],
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
			[/* throws */
				[/* throw */ 'java.nio.InvalidMarkException', [/* throw description */
					[/* text */ 't', `If the mark has not been set`]
				]]
			],
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
				[/* blockquote */ 'q', [
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
		]]
	],
]);
