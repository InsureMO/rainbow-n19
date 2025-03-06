import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.nio.ByteBuffer', [
	[/* class description */
		[/* text */ 't', `A byte buffer.

 `],
		[/* block */ 'b', ` This class defines six categories of operations upon
 byte buffers:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Absolute and relative `],
					[/* reference */ 'r', `#get()`, `get`],
					[/* text */ 't', ` and
   `],
					[/* reference */ 'r', `#put(byte)`, `put`],
					[/* text */ 't', ` methods that read and write
   single bytes; `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Absolute and relative `],
					[/* reference */ 'r', `#get(byte%5B%5D)`, `bulk get`],
					[/* text */ 't', `
   methods that transfer contiguous sequences of bytes from this buffer
   into an array; `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Absolute and relative `],
					[/* reference */ 'r', `#put(byte%5B%5D)`, `bulk put`],
					[/* text */ 't', `
   methods that transfer contiguous sequences of bytes from a
   byte array{#if[char]?, a string,} or some other byte
   buffer into this buffer;{#if[!byte]? and} `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Absolute and relative `],
					[/* reference */ 'r', `#getChar()`, `get`],
					[/* text */ 't', `
   and `],
					[/* reference */ 'r', `#putChar(char)`, `put`],
					[/* text */ 't', ` methods that read and
   write values of other primitive types, translating them to and from
   sequences of bytes in a particular byte order; `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Methods for creating `],
					[/* text */ 't', `view buffers`],
					[/* text */ 't', `,
   which allow a byte buffer to be viewed as a buffer containing values of
   some other primitive type; and `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` A method for `],
					[/* reference */ 'r', `#compact()`, `compacting`],
					[/* text */ 't', `
   a byte buffer.  `]
				]]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Byte buffers can be created either by `],
			[/* reference */ 'r', `#allocate(int)`, `allocation`],
			[/* text */ 't', `, which allocates space for the buffer's



 content, or by `],
			[/* reference */ 'r', `#wrap(byte%5B%5D)`, `wrapping`],
			[/* text */ 't', ` an
 existing byte array {#if[char]?or string} into a buffer.











 `],
			[/* anchor */ 'r', '#-id', `direct`, ``]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Direct `],
			[/* text */ 't', `vs.`],
			[/* text */ 't', ` non-direct buffers `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A byte buffer is either `],
			[/* text */ 't', `direct`],
			[/* text */ 't', ` or `],
			[/* text */ 't', `non-direct`],
			[/* text */ 't', `.  Given a
 direct byte buffer, the Java virtual machine will make a best effort to
 perform native I/O operations directly upon it.  That is, it will attempt to
 avoid copying the buffer's content to (or from) an intermediate buffer
 before (or after) each invocation of one of the underlying operating
 system's native I/O operations.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A direct byte buffer may be created by invoking the `],
			[/* reference */ 'r', `#allocateDirect(int)`, `allocateDirect`],
			[/* text */ 't', ` factory method of this class.  The
 buffers returned by this method typically have somewhat higher allocation
 and deallocation costs than non-direct buffers.  The contents of direct
 buffers may reside outside of the normal garbage-collected heap, and so
 their impact upon the memory footprint of an application might not be
 obvious.  It is therefore recommended that direct buffers be allocated
 primarily for large, long-lived buffers that are subject to the underlying
 system's native I/O operations.  In general it is best to allocate direct
 buffers only when they yield a measurable gain in program performance.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A direct byte buffer may also be created by `],
			[/* reference */ 'r', `java.nio.channels.FileChannel#map(java.nio.channels.FileChannel.MapMode,long,long)`, `mapping`],
			[/* text */ 't', ` a region of a file
 directly into memory.  An implementation of the Java platform may optionally
 support the creation of direct byte buffers from native code via JNI.  If an
 instance of one of these kinds of buffers refers to an inaccessible region
 of memory then an attempt to access that region will not change the buffer's
 content and will cause an unspecified exception to be thrown either at the
 time of the access or at some later time.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Whether a byte buffer is direct or non-direct may be determined by
 invoking its `],
			[/* reference */ 'r', `#isDirect()`, `isDirect`],
			[/* text */ 't', ` method.  This method is provided so
 that explicit buffer management can be done in performance-critical code.


 `],
			[/* anchor */ 'r', '#-id', `bin`, ``]
		]],
		[/* block */ 'b', ` Access to binary data `],
		[/* block */ 'b', [
			[/* text */ 't', ` This class defines methods for reading and writing values of all other
 primitive types, except `],
			[/* inline code block */ 'i', `boolean`],
			[/* text */ 't', `.  Primitive values are translated
 to (or from) sequences of bytes according to the buffer's current byte
 order, which may be retrieved and modified via the `],
			[/* reference */ 'r', `#order()`, `order`],
			[/* text */ 't', `
 methods.  Specific byte orders are represented by instances of the `],
			[/* reference */ 'r', `java.nio.ByteOrder`, `ByteOrder`],
			[/* text */ 't', ` class.  The initial order of a byte buffer is always `],
			[/* reference */ 'r', `java.nio.ByteOrder#BIG_ENDIAN`, `BIG_ENDIAN`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` For access to heterogeneous binary data, that is, sequences of values of
 different types, this class defines a family of absolute and relative
 `],
			[/* text */ 't', `get`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `put`],
			[/* text */ 't', ` methods for each type.  For 32-bit floating-point
 values, for example, this class defines:

 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* text */ 't', ` float  `],
				[/* text */ 't', `getFloat()`],
				[/* text */ 't', `
 float  `],
				[/* text */ 't', `getFloat(int index)`],
				[/* text */ 't', `
  void  `],
				[/* text */ 't', `putFloat(float f)`],
				[/* text */ 't', `
  void  `],
				[/* text */ 't', `putFloat(int index, float f)`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Corresponding methods are defined for the types `],
			[/* inline code block */ 'i', `char, short, int, long`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `double`],
			[/* text */ 't', `.  The index
 parameters of the absolute `],
			[/* text */ 't', `get`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `put`],
			[/* text */ 't', ` methods are in terms of
 bytes rather than of the type being read or written.

 `],
			[/* anchor */ 'r', '#-id', `views`, ``]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` For access to homogeneous binary data, that is, sequences of values of
 the same type, this class defines methods that can create `],
			[/* text */ 't', `views`],
			[/* text */ 't', ` of a
 given byte buffer.  A `],
			[/* text */ 't', `view buffer`],
			[/* text */ 't', ` is simply another buffer whose
 content is backed by the byte buffer.  Changes to the byte buffer's content
 will be visible in the view buffer, and vice versa; the two buffers'
 position, limit, and mark values are independent.  The `],
			[/* reference */ 'r', `#asFloatBuffer()`, `asFloatBuffer`],
			[/* text */ 't', ` method, for example, creates an instance of
 the `],
			[/* reference */ 'r', `java.nio.FloatBuffer`, `FloatBuffer`],
			[/* text */ 't', ` class that is backed by the byte buffer upon which
 the method is invoked.  Corresponding view-creation methods are defined for
 the types `],
			[/* inline code block */ 'i', `char, short, int, long`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `double`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` View buffers have three important advantages over the families of
 type-specific `],
			[/* text */ 't', `get`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `put`],
			[/* text */ 't', ` methods described above:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', ` A view buffer is indexed not in terms of bytes but rather in terms
   of the type-specific size of its values;  `]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` A view buffer provides relative bulk `],
					[/* text */ 't', `get`],
					[/* text */ 't', ` and `],
					[/* text */ 't', `put`],
					[/* text */ 't', `
   methods that can transfer contiguous sequences of values between a buffer
   and an array or some other buffer of the same type; and  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', ` A view buffer is potentially much more efficient because it will
   be direct if, and only if, its backing byte buffer is direct.  `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` The byte order of a view buffer is fixed to be that of its byte buffer
 at the time that the view is created.  `],
		[/* block */ 'b', ` Invocation chaining `],
		[/* block */ 'b', ` Methods in this class that do not otherwise have a value to return are
 specified to return the buffer upon which they are invoked.  This allows
 method invocations to be chained.



 The sequence of statements

 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` bb.putInt(0xCAFEBABE);
 bb.putShort(3);
 bb.putShort(45);`]
		]],
		[/* text */ 't', `

 can, for example, be replaced by the single statement

 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` bb.putInt(0xCAFEBABE).putShort(3).putShort(45);`]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'isDirect()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this byte buffer is direct.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this buffer is direct`]
			]
		]],
		[/* method */ 'get()', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.  Reads the byte at this buffer's
 current position, and then increments the position.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If the buffer's current position is not smaller than its limit`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The byte at the buffer's current position`]
			]
		]],
		[/* method */ 'get(int)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.  Reads the byte at the given
 index.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index from which the byte will be read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The byte at the given index`]
			]
		]],
		[/* method */ 'getChar()', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method for reading a char value.

 `],
				[/* block */ 'b', ` Reads the next two bytes at this buffer's current position,
 composing them into a char value according to the current byte order,
 and then increments the position by two.  `]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than two bytes
          remaining in this buffer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The char value at the buffer's current position`]
			]
		]],
		[/* method */ 'getChar(int)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method for reading a char value.

 `],
				[/* block */ 'b', ` Reads two bytes at the given index, composing them into a
 char value according to the current byte order.  `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index from which the bytes will be read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit,
          minus one`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The char value at the given index`]
			]
		]],
		[/* method */ 'getDouble()', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method for reading a double value.

 `],
				[/* block */ 'b', ` Reads the next eight bytes at this buffer's current position,
 composing them into a double value according to the current byte order,
 and then increments the position by eight.  `]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than eight bytes
          remaining in this buffer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The double value at the buffer's current position`]
			]
		]],
		[/* method */ 'getDouble(int)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method for reading a double value.

 `],
				[/* block */ 'b', ` Reads eight bytes at the given index, composing them into a
 double value according to the current byte order.  `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index from which the bytes will be read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit,
          minus seven`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The double value at the given index`]
			]
		]],
		[/* method */ 'getFloat()', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method for reading a float value.

 `],
				[/* block */ 'b', ` Reads the next four bytes at this buffer's current position,
 composing them into a float value according to the current byte order,
 and then increments the position by four.  `]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than four bytes
          remaining in this buffer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The float value at the buffer's current position`]
			]
		]],
		[/* method */ 'getFloat(int)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method for reading a float value.

 `],
				[/* block */ 'b', ` Reads four bytes at the given index, composing them into a
 float value according to the current byte order.  `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index from which the bytes will be read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit,
          minus three`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The float value at the given index`]
			]
		]],
		[/* method */ 'getInt()', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method for reading an int value.

 `],
				[/* block */ 'b', ` Reads the next four bytes at this buffer's current position,
 composing them into an int value according to the current byte order,
 and then increments the position by four.  `]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than four bytes
          remaining in this buffer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The int value at the buffer's current position`]
			]
		]],
		[/* method */ 'getInt(int)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method for reading an int value.

 `],
				[/* block */ 'b', ` Reads four bytes at the given index, composing them into a
 int value according to the current byte order.  `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index from which the bytes will be read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit,
          minus three`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The int value at the given index`]
			]
		]],
		[/* method */ 'asReadOnlyBuffer()', [
			[/* method description */
				[/* text */ 't', `Creates a new, read-only byte buffer that shares this buffer's
 content.

 `],
				[/* block */ 'b', ` The content of the new buffer will be that of this buffer.  Changes
 to this buffer's content will be visible in the new buffer; the new
 buffer itself, however, will be read-only and will not allow the shared
 content to be modified.  The two buffers' position, limit, and mark
 values will be independent.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer's capacity, limit, position,

 and mark values will be identical to those of this buffer, and its byte
 order will be `],
					[/* reference */ 'r', `java.nio.ByteOrder#BIG_ENDIAN`, `BIG_ENDIAN`],
					[/* text */ 't', `.




 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this buffer is itself read-only then this method behaves in
 exactly the same way as the `],
					[/* reference */ 'r', `#duplicate()`, `duplicate`],
					[/* text */ 't', ` method.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new, read-only byte buffer`]
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
			[/* throws */
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
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
					[/* reference */ 'r', `java.nio.ByteOrder#BIG_ENDIAN`, `BIG_ENDIAN`],
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
		[/* method */ 'put(byte)', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes the given byte into this buffer at the current
 position, and then increments the position. `]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `The byte to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If this buffer's current position is not smaller than its limit`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(int,byte)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes the given byte into this buffer at the given
 index. `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index at which the byte will be written`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `The byte value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'putChar(char)', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method for writing a char
 value  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes two bytes containing the given char value, in the
 current byte order, into this buffer at the current position, and then
 increments the position by two.  `]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The char value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than two bytes
          remaining in this buffer`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'putChar(int,char)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method for writing a char
 value  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes two bytes containing the given char value, in the
 current byte order, into this buffer at the given index.  `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index at which the bytes will be written`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The char value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit,
          minus one`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'putDouble(double)', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method for writing a double
 value  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes eight bytes containing the given double value, in the
 current byte order, into this buffer at the current position, and then
 increments the position by eight.  `]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The double value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than eight bytes
          remaining in this buffer`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'putDouble(int,double)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method for writing a double
 value  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes eight bytes containing the given double value, in the
 current byte order, into this buffer at the given index.  `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index at which the bytes will be written`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The double value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit,
          minus seven`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'putFloat(float)', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method for writing a float
 value  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes four bytes containing the given float value, in the
 current byte order, into this buffer at the current position, and then
 increments the position by four.  `]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The float value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than four bytes
          remaining in this buffer`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'putFloat(int,float)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method for writing a float
 value  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes four bytes containing the given float value, in the
 current byte order, into this buffer at the given index.  `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index at which the bytes will be written`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The float value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit,
          minus three`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'putInt(int)', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method for writing an int
 value  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes four bytes containing the given int value, in the
 current byte order, into this buffer at the current position, and then
 increments the position by four.  `]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The int value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than four bytes
          remaining in this buffer`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'putInt(int,int)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method for writing an int
 value  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes four bytes containing the given int value, in the
 current byte order, into this buffer at the given index.  `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index at which the bytes will be written`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The int value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit,
          minus three`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'putLong(int,long)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method for writing a long
 value  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes eight bytes containing the given long value, in the
 current byte order, into this buffer at the given index.  `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index at which the bytes will be written`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The long value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit,
          minus seven`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'putLong(long)', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method for writing a long
 value  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes eight bytes containing the given long value, in the
 current byte order, into this buffer at the current position, and then
 increments the position by eight.  `]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The long value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than eight bytes
          remaining in this buffer`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'putShort(int,short)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method for writing a short
 value  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes two bytes containing the given short value, in the
 current byte order, into this buffer at the given index.  `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index at which the bytes will be written`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The short value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit,
          minus one`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'putShort(short)', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method for writing a short
 value  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes two bytes containing the given short value, in the
 current byte order, into this buffer at the current position, and then
 increments the position by two.  `]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The short value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than two bytes
          remaining in this buffer`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
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
					[/* reference */ 'r', `java.nio.ByteOrder#BIG_ENDIAN`, `BIG_ENDIAN`],
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
					[/* reference */ 'r', `java.nio.ByteOrder#BIG_ENDIAN`, `BIG_ENDIAN`],
					[/* text */ 't', `.



 The new buffer will be direct if, and only if, this buffer is direct,
 and it will be read-only if, and only if, this buffer is read-only. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The position in this buffer at which the content of the new
          buffer will start; must be non-negative and no larger than
          `],
					[/* reference */ 'r', `java.nio.Buffer#limit()`, `limit()`]
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
		[/* method */ 'asCharBuffer()', [
			[/* method description */
				[/* text */ 't', `Creates a view of this byte buffer as a char buffer.

 `],
				[/* block */ 'b', ` The content of the new buffer will start at this buffer's current
 position.  Changes to this buffer's content will be visible in the new
 buffer, and vice versa; the two buffers' position, limit, and mark
 values will be independent.

 `],
				[/* block */ 'b', ` The new buffer's position will be zero, its capacity and its limit
 will be the number of bytes remaining in this buffer divided by
 two, its mark will be undefined, and its byte order will be that
 of the byte buffer at the moment the view is created.  The new buffer
 will be direct if, and only if, this buffer is direct, and it will be
 read-only if, and only if, this buffer is read-only.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A new char buffer`]
			]
		]],
		[/* method */ 'asDoubleBuffer()', [
			[/* method description */
				[/* text */ 't', `Creates a view of this byte buffer as a double buffer.

 `],
				[/* block */ 'b', ` The content of the new buffer will start at this buffer's current
 position.  Changes to this buffer's content will be visible in the new
 buffer, and vice versa; the two buffers' position, limit, and mark
 values will be independent.

 `],
				[/* block */ 'b', ` The new buffer's position will be zero, its capacity and its limit
 will be the number of bytes remaining in this buffer divided by
 eight, its mark will be undefined, and its byte order will be that
 of the byte buffer at the moment the view is created.  The new buffer
 will be direct if, and only if, this buffer is direct, and it will be
 read-only if, and only if, this buffer is read-only.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A new double buffer`]
			]
		]],
		[/* method */ 'asFloatBuffer()', [
			[/* method description */
				[/* text */ 't', `Creates a view of this byte buffer as a float buffer.

 `],
				[/* block */ 'b', ` The content of the new buffer will start at this buffer's current
 position.  Changes to this buffer's content will be visible in the new
 buffer, and vice versa; the two buffers' position, limit, and mark
 values will be independent.

 `],
				[/* block */ 'b', ` The new buffer's position will be zero, its capacity and its limit
 will be the number of bytes remaining in this buffer divided by
 four, its mark will be undefined, and its byte order will be that
 of the byte buffer at the moment the view is created.  The new buffer
 will be direct if, and only if, this buffer is direct, and it will be
 read-only if, and only if, this buffer is read-only.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A new float buffer`]
			]
		]],
		[/* method */ 'asIntBuffer()', [
			[/* method description */
				[/* text */ 't', `Creates a view of this byte buffer as an int buffer.

 `],
				[/* block */ 'b', ` The content of the new buffer will start at this buffer's current
 position.  Changes to this buffer's content will be visible in the new
 buffer, and vice versa; the two buffers' position, limit, and mark
 values will be independent.

 `],
				[/* block */ 'b', ` The new buffer's position will be zero, its capacity and its limit
 will be the number of bytes remaining in this buffer divided by
 four, its mark will be undefined, and its byte order will be that
 of the byte buffer at the moment the view is created.  The new buffer
 will be direct if, and only if, this buffer is direct, and it will be
 read-only if, and only if, this buffer is read-only.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A new int buffer`]
			]
		]],
		[/* method */ 'asLongBuffer()', [
			[/* method description */
				[/* text */ 't', `Creates a view of this byte buffer as a long buffer.

 `],
				[/* block */ 'b', ` The content of the new buffer will start at this buffer's current
 position.  Changes to this buffer's content will be visible in the new
 buffer, and vice versa; the two buffers' position, limit, and mark
 values will be independent.

 `],
				[/* block */ 'b', ` The new buffer's position will be zero, its capacity and its limit
 will be the number of bytes remaining in this buffer divided by
 eight, its mark will be undefined, and its byte order will be that
 of the byte buffer at the moment the view is created.  The new buffer
 will be direct if, and only if, this buffer is direct, and it will be
 read-only if, and only if, this buffer is read-only.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A new long buffer`]
			]
		]],
		[/* method */ 'asShortBuffer()', [
			[/* method description */
				[/* text */ 't', `Creates a view of this byte buffer as a short buffer.

 `],
				[/* block */ 'b', ` The content of the new buffer will start at this buffer's current
 position.  Changes to this buffer's content will be visible in the new
 buffer, and vice versa; the two buffers' position, limit, and mark
 values will be independent.

 `],
				[/* block */ 'b', ` The new buffer's position will be zero, its capacity and its limit
 will be the number of bytes remaining in this buffer divided by
 two, its mark will be undefined, and its byte order will be that
 of the byte buffer at the moment the view is created.  The new buffer
 will be direct if, and only if, this buffer is direct, and it will be
 read-only if, and only if, this buffer is read-only.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A new short buffer`]
			]
		]],
		[/* method */ 'getLong()', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method for reading a long value.

 `],
				[/* block */ 'b', ` Reads the next eight bytes at this buffer's current position,
 composing them into a long value according to the current byte order,
 and then increments the position by eight.  `]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than eight bytes
          remaining in this buffer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The long value at the buffer's current position`]
			]
		]],
		[/* method */ 'getLong(int)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method for reading a long value.

 `],
				[/* block */ 'b', ` Reads eight bytes at the given index, composing them into a
 long value according to the current byte order.  `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index from which the bytes will be read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit,
          minus seven`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The long value at the given index`]
			]
		]],
		[/* method */ 'getShort()', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method for reading a short value.

 `],
				[/* block */ 'b', ` Reads the next two bytes at this buffer's current position,
 composing them into a short value according to the current byte order,
 and then increments the position by two.  `]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than two bytes
          remaining in this buffer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The short value at the buffer's current position`]
			]
		]],
		[/* method */ 'getShort(int)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method for reading a short value.

 `],
				[/* block */ 'b', ` Reads two bytes at the given index, composing them into a
 short value according to the current byte order.  `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index from which the bytes will be read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative
          or not smaller than the buffer's limit,
          minus one`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The short value at the given index`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this buffer is equal to another object.

 `],
				[/* block */ 'b', ` Two byte buffers are equal if, and only if,

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', ` They have the same element type,  `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` They have the same number of remaining elements, and
   `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` The two sequences of remaining elements, considered
   independently of their starting positions, are pointwise equal.







   `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` A byte buffer is not equal to any other type of object.  `]
			],
			[/* parameters */
				[/* parameter */ 'ob', [/* parameter description */
					[/* text */ 't', `The object to which this buffer is to be compared`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this buffer is equal to the
           given object`]
			]
		]],
		[/* method */ 'hasArray()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this buffer is backed by an accessible byte
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
		[/* method */ 'array()', [
			[/* method description */
				[/* text */ 't', `Returns the byte array that backs this
 buffer  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

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
		[/* method */ 'alignmentOffset(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the memory address, pointing to the byte at the given index,
 modulo the given unit size.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The return value is non-negative in the range of `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `
 (inclusive) up to `],
					[/* inline code block */ 'i', `unitSize`],
					[/* text */ 't', ` (exclusive), with zero indicating
 that the address of the byte at the index is aligned for the unit size,
 and a positive value that the address is misaligned for the unit size.
 If the address of the byte at the index is misaligned, the return value
 represents how much the index should be adjusted to locate a byte at an
 aligned address.  Specifically, the index should either be decremented by
 the return value if the latter is not greater than `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `, or be
 incremented by the unit size minus the return value.  Therefore given
 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` int value = alignmentOffset(index, unitSize)`]
				]],
				[/* text */ 't', `
 then the identities
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` alignmentOffset(index - value, unitSize) == 0, value ≤ index`]
				]],
				[/* text */ 't', `
 and
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` alignmentOffset(index + (unitSize - value), unitSize) == 0`]
				]],
				[/* text */ 't', `
 must hold.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index to query for alignment offset, must be non-negative, no
         upper bounds check is performed`]
				]],
				[/* parameter */ 'unitSize', [/* parameter description */
					[/* text */ 't', `The unit size in bytes, must be a power of `],
					[/* inline code block */ 'i', `2`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the index is negative or the unit size is not a power of
         `],
					[/* inline code block */ 'i', `2`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If the native platform does not guarantee stable alignment offset
         values for the given unit size when managing the memory regions
         of buffers of the same kind as this buffer (direct or
         non-direct).  For example, if garbage collection would result
         in the moving of a memory region covered by a non-direct buffer
         from one location to another and both locations have different
         alignment characteristics.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The indexed byte's memory address modulo the unit size`]
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
		[/* method */ 'alignedSlice(int)', [
			[/* method description */
				[/* text */ 't', `Creates a new byte buffer whose content is a shared and aligned
 subsequence of this buffer's content.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The content of the new buffer will start at this buffer's current
 position rounded up to the index of the nearest aligned byte for the
 given unit size, and end at this buffer's limit rounded down to the index
 of the nearest aligned byte for the given unit size.
 If rounding results in out-of-bound values then the new buffer's capacity
 and limit will be zero.  If rounding is within bounds the following
 expressions will be true for a new buffer `],
					[/* inline code block */ 'i', `nb`],
					[/* text */ 't', ` and unit size
 `],
					[/* inline code block */ 'i', `unitSize`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `nb.alignmentOffset(0, unitSize) == 0
 nb.alignmentOffset(nb.limit(), unitSize) == 0`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` Changes to this buffer's content will be visible in the new
 buffer, and vice versa; the two buffers' position, limit, and mark
 values will be independent.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer's position will be zero, its capacity and its limit
 will be the number of bytes remaining in this buffer or fewer subject to
 alignment, its mark will be undefined, and its byte order will be
 `],
					[/* reference */ 'r', `java.nio.ByteOrder#BIG_ENDIAN`, `BIG_ENDIAN`],
					[/* text */ 't', `.

 The new buffer will be direct if, and only if, this buffer is direct, and
 it will be read-only if, and only if, this buffer is read-only.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'unitSize', [/* parameter description */
					[/* text */ 't', `The unit size in bytes, must be a power of `],
					[/* inline code block */ 'i', `2`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the unit size not a power of `],
					[/* inline code block */ 'i', `2`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If the native platform does not guarantee stable aligned slices
         for the given unit size when managing the memory regions
         of buffers of the same kind as this buffer (direct or
         non-direct).  For example, if garbage collection would result
         in the moving of a memory region covered by a non-direct buffer
         from one location to another and both locations have different
         alignment characteristics.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The new byte buffer`]
			]
		]],
		[/* method */ 'order(java.nio.ByteOrder)', [
			[/* method description */
				[/* text */ 't', `Modifies this buffer's byte order.`]
			],
			[/* parameters */
				[/* parameter */ 'bo', [/* parameter description */
					[/* text */ 't', `The new byte order,
         either `],
					[/* reference */ 'r', `java.nio.ByteOrder#BIG_ENDIAN`, `BIG_ENDIAN`],
					[/* text */ 't', `
         or `],
					[/* reference */ 'r', `java.nio.ByteOrder#LITTLE_ENDIAN`, `LITTLE_ENDIAN`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(byte[])', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers the entire content of the given source
 byte array into this buffer.  An invocation of this method of the
 form `],
					[/* inline code block */ 'i', `dst.put(a)`],
					[/* text */ 't', ` behaves in exactly the same way as the
 invocation

 `]
				]],
				[/* code block */ 'c', `     dst.put(a, 0, a.length) `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The source array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there is insufficient space in this buffer`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'order()', [
			[/* method description */
				[/* text */ 't', `Retrieves this buffer's byte order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The byte order is used when reading or writing multibyte values, and
 when creating buffers that are views of this byte buffer.  The order of
 a newly-created byte buffer is always `],
					[/* reference */ 'r', `java.nio.ByteOrder#BIG_ENDIAN`, `BIG_ENDIAN`],
					[/* text */ 't', `.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer's byte order`]
			]
		]],
		[/* method */ 'compareTo(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Compares this buffer to another.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Two byte buffers are compared by comparing their sequences of
 remaining elements lexicographically, without regard to the starting
 position of each sequence within its corresponding buffer.








 Pairs of `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', ` elements are compared as if by invoking
 `],
					[/* reference */ 'r', `java.lang.Byte#compare(byte,byte)`, `Byte.compare(byte,byte)`],
					[/* text */ 't', `.


 `]
				]],
				[/* block */ 'b', ` A byte buffer is not comparable to any other type of object.`]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `the object to be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A negative integer, zero, or a positive integer as this buffer
          is less than, equal to, or greater than the given buffer`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the current hash code of this buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The hash code of a byte buffer depends only upon its remaining
 elements; that is, upon the elements from `],
					[/* inline code block */ 'i', `position()`],
					[/* text */ 't', ` up to, and
 including, the element at `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', ` - `],
					[/* inline code block */ 'i', `1`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` Because buffer hash codes are content-dependent, it is inadvisable
 to use buffers as keys in hash maps or similar data structures unless it
 is known that their contents will not change.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The current hash code of this buffer`]
			]
		]],
		[/* method */ 'mismatch(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Finds and returns the relative index of the first mismatch between this
 buffer and a given buffer.  The index is relative to the
 `],
				[/* reference */ 'r', `java.nio.Buffer#position()`, `position`],
				[/* text */ 't', ` of each buffer and will be in the range of
 0 (inclusive) up to the smaller of the `],
				[/* reference */ 'r', `java.nio.Buffer#remaining()`, `remaining`],
				[/* text */ 't', `
 elements in each buffer (exclusive).

 `],
				[/* block */ 'b', ` If the two buffers share a common prefix then the returned index is
 the length of the common prefix and it follows that there is a mismatch
 between the two buffers at that index within the respective buffers.
 If one buffer is a proper prefix of the other then the returned index is
 the smaller of the remaining elements in each buffer, and it follows that
 the index is only valid for the buffer with the larger number of
 remaining elements.
 Otherwise, there is no mismatch.`]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `The byte buffer to be tested for a mismatch with this buffer`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The relative index of the first mismatch between this and the
          given buffer, otherwise -1 if no mismatch.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string summarizing the state of this buffer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A summary string`]
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
					[/* reference */ 'r', `#compact()`, `compact`],
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
		[/* method */ 'get(byte[])', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers bytes from this buffer into the given
 destination array.  An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `src.get(a)`],
					[/* text */ 't', ` behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', `     src.get(a, 0, a.length) `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The destination array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` bytes
          remaining in this buffer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'get(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers bytes from this buffer into the given
 destination array.  If there are fewer bytes remaining in the
 buffer than are required to satisfy the request, that is, if
 `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `>`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `remaining()`],
					[/* text */ 't', `, then no
 bytes are transferred and a `],
					[/* reference */ 'r', `java.nio.BufferUnderflowException`, `BufferUnderflowException`],
					[/* text */ 't', ` is
 thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise, this method copies `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` bytes from this
 buffer into the given array, starting at the current position of this
 buffer and at the given offset in the array.  The position of this
 buffer is then incremented by `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In other words, an invocation of this method of the form
 `],
					[/* inline code block */ 'i', `src.get(dst, off, len)`],
					[/* text */ 't', ` has exactly the same effect as
 the loop

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (int i = off; i < off + len; i++)
         dst[i] = src.get();`]
				]],
				[/* text */ 't', `

 except that it first checks that there are sufficient bytes in
 this buffer and it is potentially much more efficient.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The array into which bytes are to be written`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the array of the first byte to be
         written; must be non-negative and no larger than
         `],
					[/* inline code block */ 'i', `dst.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The maximum number of bytes to be written to the given
         array; must be non-negative and no larger than
         `],
					[/* inline code block */ 'i', `dst.length - offset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` bytes
          remaining in this buffer`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on the `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `
          parameters do not hold`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'get(int,byte[])', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers bytes from this buffer into the given
 destination array.  The position of this buffer is unchanged.  An
 invocation of this method of the form
 `],
					[/* inline code block */ 'i', `src.get(index, dst)`],
					[/* text */ 't', ` behaves in exactly the same
 way as the invocation:

 `]
				]],
				[/* code block */ 'c', `     src.get(index, dst, 0, dst.length) `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index in this buffer from which the first byte will be
         read; must be non-negative and less than `],
					[/* inline code block */ 'i', `limit()`]
				]],
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The destination array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative, not smaller than `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', `,
          or `],
					[/* inline code block */ 'i', `limit() - index < dst.length`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'get(int,byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` bytes from this
 buffer into the given array, starting at the given index in this
 buffer and at the given offset in the array.  The position of this
 buffer is unchanged.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `src.get(index, dst, offset, length)`],
					[/* text */ 't', `
 has exactly the same effect as the following loop except that it first
 checks the consistency of the supplied parameters and it is potentially
 much more efficient:

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (int i = offset, j = index; i < offset + length; i++, j++)
         dst[i] = src.get(j);`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index in this buffer from which the first byte will be
         read; must be non-negative and less than `],
					[/* inline code block */ 'i', `limit()`]
				]],
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The destination array`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the array of the first byte to be
         written; must be non-negative and less than
         `],
					[/* inline code block */ 'i', `dst.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of bytes to be written to the given array;
         must be non-negative and no larger than the smaller of
         `],
					[/* inline code block */ 'i', `limit() - index`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `dst.length - offset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', `, and
          `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` parameters do not hold`]
				]]
			],
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
		[/* method */ 'put(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers bytes into this buffer from the given
 source array.  If there are more bytes to be copied from the array
 than remain in this buffer, that is, if
 `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `>`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `remaining()`],
					[/* text */ 't', `, then no
 bytes are transferred and a `],
					[/* reference */ 'r', `java.nio.BufferOverflowException`, `BufferOverflowException`],
					[/* text */ 't', ` is
 thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise, this method copies `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` bytes from the
 given array into this buffer, starting at the given offset in the array
 and at the current position of this buffer.  The position of this buffer
 is then incremented by `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In other words, an invocation of this method of the form
 `],
					[/* inline code block */ 'i', `dst.put(src, off, len)`],
					[/* text */ 't', ` has exactly the same effect as
 the loop

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (int i = off; i < off + len; i++)
         dst.put(src[i]);`]
				]],
				[/* text */ 't', `

 except that it first checks that there is sufficient space in this
 buffer and it is potentially much more efficient.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The array from which bytes are to be read`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the array of the first byte to be read;
         must be non-negative and no larger than `],
					[/* inline code block */ 'i', `src.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of bytes to be read from the given array;
         must be non-negative and no larger than
         `],
					[/* inline code block */ 'i', `src.length - offset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there is insufficient space in this buffer`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on the `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `
          parameters do not hold`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(int,byte[])', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method copies bytes into this buffer from the given source
 array.  The position of this buffer is unchanged.  An invocation of this
 method of the form `],
					[/* inline code block */ 'i', `dst.put(index, src)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation:

 `]
				]],
				[/* code block */ 'c', `     dst.put(index, src, 0, src.length); `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index in this buffer at which the first byte will be
         written; must be non-negative and less than `],
					[/* inline code block */ 'i', `limit()`]
				]],
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The array from which bytes are to be read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative, not smaller than `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', `,
          or `],
					[/* inline code block */ 'i', `limit() - index < src.length`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(int,byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` bytes from the given
 array, starting at the given offset in the array and at the given index
 in this buffer.  The position of this buffer is unchanged.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `dst.put(index, src, offset, length)`],
					[/* text */ 't', `
 has exactly the same effect as the following loop except that it first
 checks the consistency of the supplied parameters and it is potentially
 much more efficient:

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (int i = offset, j = index; i < offset + length; i++, j++)
         dst.put(j, src[i]);`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index in this buffer at which the first byte will be
         written; must be non-negative and less than `],
					[/* inline code block */ 'i', `limit()`]
				]],
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The array from which bytes are to be read`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the array of the first byte to be read;
         must be non-negative and less than `],
					[/* inline code block */ 'i', `src.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of bytes to be read from the given array;
         must be non-negative and no larger than the smaller of
         `],
					[/* inline code block */ 'i', `limit() - index`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `src.length - offset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', `, and
          `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` parameters do not hold`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(int,java.nio.ByteBuffer,int,int)', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` bytes into this buffer from
 the given source buffer, starting at the given `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` in the
 source buffer and the given `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` in this buffer. The positions
 of both buffers are unchanged.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In other words, an invocation of this method of the form
 `],
					[/* inline code block */ 'i', `dst.put(index, src, offset, length)`],
					[/* text */ 't', `
 has exactly the same effect as the loop

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `for (int i = offset, j = index; i < offset + length; i++, j++)
     dst.put(j, src.get(i));`]
				]],
				[/* text */ 't', `

 except that it first checks the consistency of the supplied parameters
 and it is potentially much more efficient.  If this buffer and
 the source buffer share the same backing array or memory, then the
 result will be as if the source elements were first copied to an
 intermediate location before being written into this buffer.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index in this buffer at which the first byte will be
        written; must be non-negative and less than `],
					[/* inline code block */ 'i', `limit()`]
				]],
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The buffer from which bytes are to be read`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The index within the source buffer of the first byte to be
        read; must be non-negative and less than `],
					[/* inline code block */ 'i', `src.limit()`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of bytes to be read from the given buffer;
        must be non-negative and no larger than the smaller of
        `],
					[/* inline code block */ 'i', `limit() - index`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `src.limit() - offset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the preconditions on the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', `, and
         `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` parameters do not hold`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers the bytes remaining in the given source
 buffer into this buffer.  If there are more bytes remaining in the
 source buffer than in this buffer, that is, if
 `],
					[/* inline code block */ 'i', `src.remaining()`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `>`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `remaining()`],
					[/* text */ 't', `,
 then no bytes are transferred and a `],
					[/* reference */ 'r', `java.nio.BufferOverflowException`, `BufferOverflowException`],
					[/* text */ 't', ` is thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise, this method copies
 `],
					[/* text */ 't', `n`],
					[/* text */ 't', ` = `],
					[/* inline code block */ 'i', `src.remaining()`],
					[/* text */ 't', ` bytes from the given
 buffer into this buffer, starting at each buffer's current position.
 The positions of both buffers are then incremented by `],
					[/* text */ 't', `n`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In other words, an invocation of this method of the form
 `],
					[/* inline code block */ 'i', `dst.put(src)`],
					[/* text */ 't', ` has exactly the same effect as the loop

 `]
				]],
				[/* code block */ 'c', `     while (src.hasRemaining())
         dst.put(src.get()); `],
				[/* text */ 't', `

 except that it first checks that there is sufficient space in this
 buffer and it is potentially much more efficient.  If this buffer and
 the source buffer share the same backing array or memory, then the
 result will be as if the source elements were first copied to an
 intermediate location before being written into this buffer.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The source buffer from which bytes are to be read;
         must not be this buffer`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there is insufficient space in this buffer
          for the remaining bytes in the source buffer`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the source buffer is this buffer`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `If this buffer is read-only`]
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
		[/* method */ 'allocate(int)', [
			[/* method description */
				[/* text */ 't', `Allocates a new byte buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer's position will be zero, its limit will be its
 capacity, its mark will be undefined, each of its elements will be
 initialized to zero, and its byte order will be

 `],
					[/* reference */ 'r', `java.nio.ByteOrder#BIG_ENDIAN`, `BIG_ENDIAN`],
					[/* text */ 't', `.




 It will have a `],
					[/* reference */ 'r', `#array()`, `backing array`],
					[/* text */ 't', `, and its
 `],
					[/* reference */ 'r', `#arrayOffset()`, `array offset`],
					[/* text */ 't', ` will be zero.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'capacity', [/* parameter description */
					[/* text */ 't', `The new buffer's capacity, in bytes`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `capacity`],
					[/* text */ 't', ` is a negative integer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The new byte buffer`]
			]
		]],
		[/* method */ 'allocateDirect(int)', [
			[/* method description */
				[/* text */ 't', `Allocates a new direct byte buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer's position will be zero, its limit will be its
 capacity, its mark will be undefined, each of its elements will be
 initialized to zero, and its byte order will be
 `],
					[/* reference */ 'r', `java.nio.ByteOrder#BIG_ENDIAN`, `BIG_ENDIAN`],
					[/* text */ 't', `.  Whether or not it has a
 `],
					[/* reference */ 'r', `#hasArray()`, `backing array`],
					[/* text */ 't', ` is unspecified.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'capacity', [/* parameter description */
					[/* text */ 't', `The new buffer's capacity, in bytes`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `capacity`],
					[/* text */ 't', ` is a negative integer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The new byte buffer`]
			]
		]],
		[/* method */ 'wrap(byte[])', [
			[/* method description */
				[/* text */ 't', `Wraps a byte array into a buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer will be backed by the given byte array;
 that is, modifications to the buffer will cause the array to be modified
 and vice versa.  The new buffer's capacity and limit will be
 `],
					[/* inline code block */ 'i', `array.length`],
					[/* text */ 't', `, its position will be zero, its mark will be
 undefined, and its byte order will be

 `],
					[/* reference */ 'r', `java.nio.ByteOrder#BIG_ENDIAN`, `BIG_ENDIAN`],
					[/* text */ 't', `.




 Its `],
					[/* reference */ 'r', `#array()`, `backing array`],
					[/* text */ 't', ` will be the given array, and its
 `],
					[/* reference */ 'r', `#arrayOffset()`, `array offset`],
					[/* text */ 't', ` will be zero.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `The array that will back this buffer`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new byte buffer`]
			]
		]],
		[/* method */ 'wrap(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Wraps a byte array into a buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer will be backed by the given byte array;
 that is, modifications to the buffer will cause the array to be modified
 and vice versa.  The new buffer's capacity will be
 `],
					[/* inline code block */ 'i', `array.length`],
					[/* text */ 't', `, its position will be `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', `, its limit
 will be `],
					[/* inline code block */ 'i', `offset + length`],
					[/* text */ 't', `, its mark will be undefined, and its
 byte order will be

 `],
					[/* reference */ 'r', `java.nio.ByteOrder#BIG_ENDIAN`, `BIG_ENDIAN`],
					[/* text */ 't', `.




 Its `],
					[/* reference */ 'r', `#array()`, `backing array`],
					[/* text */ 't', ` will be the given array, and
 its `],
					[/* reference */ 'r', `#arrayOffset()`, `array offset`],
					[/* text */ 't', ` will be zero.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'array', [/* parameter description */
					[/* text */ 't', `The array that will back the new buffer`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset of the subarray to be used; must be non-negative and
         no larger than `],
					[/* inline code block */ 'i', `array.length`],
					[/* text */ 't', `.  The new buffer's position
         will be set to this value.`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The length of the subarray to be used;
         must be non-negative and no larger than
         `],
					[/* inline code block */ 'i', `array.length - offset`],
					[/* text */ 't', `.
         The new buffer's limit will be set to `],
					[/* inline code block */ 'i', `offset + length`],
					[/* text */ 't', `.`]
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
				]]
			],
			[/* return description */
				[/* text */ 't', `The new byte buffer`]
			]
		]]
	],
]);
