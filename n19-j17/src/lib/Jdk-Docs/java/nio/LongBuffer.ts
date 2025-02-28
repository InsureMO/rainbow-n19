import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.nio.LongBuffer', [
	[/* class description */
		[/* text */ 't', `A long buffer.

 `],
		[/* block */ 'b', ` This class defines four categories of operations upon
 long buffers:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Absolute and relative `],
					[/* reference */ 'r', `get`],
					[/* text */ 't', ` and
   `],
					[/* reference */ 'r', `put`],
					[/* text */ 't', ` methods that read and write
   single longs; `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Absolute and relative `],
					[/* reference */ 'r', `bulk get`],
					[/* text */ 't', `
   methods that transfer contiguous sequences of longs from this buffer
   into an array; and`]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Absolute and relative `],
					[/* reference */ 'r', `bulk put`],
					[/* text */ 't', `
   methods that transfer contiguous sequences of longs from a
   long array{#if[char]?, a string,} or some other long
   buffer into this buffer;{#if[!byte]? and} `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` A method for `],
					[/* reference */ 'r', `compacting`],
					[/* text */ 't', `
   a long buffer.  `]
				]]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Long buffers can be created either by `],
			[/* reference */ 'r', `allocation`],
			[/* text */ 't', `, which allocates space for the buffer's








 content, by `],
			[/* reference */ 'r', `wrapping`],
			[/* text */ 't', ` an existing
 long array {#if[char]?or string} into a buffer, or by creating a
 `],
			[/* external link */ 'a', `ByteBuffer.html#views`, `view`],
			[/* text */ 't', ` of an existing byte buffer.








































































































 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Like a byte buffer, a long buffer is either `],
			[/* external link */ 'a', `ByteBuffer.html#direct`, `direct or non-direct`],
			[/* text */ 't', `.  A
 long buffer created via the `],
			[/* inline code block */ 'i', `wrap`],
			[/* text */ 't', ` methods of this class will
 be non-direct.  A long buffer created as a view of a byte buffer will
 be direct if, and only if, the byte buffer itself is direct.  Whether or not
 a long buffer is direct may be determined by invoking the `],
			[/* reference */ 'r', `isDirect`],
			[/* text */ 't', ` method.  `]
		]],
		[/* block */ 'b', ` Methods in this class that do not otherwise have a value to return are
 specified to return the buffer upon which they are invoked.  This allows
 method invocations to be chained.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'get()', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.  Reads the long at this buffer's
 current position, and then increments the position.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If the buffer's current position is not smaller than its limit`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The long at the buffer's current position`]
			]
		]],
		[/* method */ 'get(int,long[])', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers longs from this buffer into the given
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
					[/* text */ 't', `The index in this buffer from which the first long will be
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
		[/* method */ 'get(int)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.  Reads the long at the given
 index.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index from which the long will be read`]
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
				[/* text */ 't', `The long at the given index`]
			]
		]],
		[/* method */ 'get(int,long[],int,int)', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` longs from this
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
					[/* text */ 't', `The index in this buffer from which the first long will be
         read; must be non-negative and less than `],
					[/* inline code block */ 'i', `limit()`]
				]],
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The destination array`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the array of the first long to be
         written; must be non-negative and less than
         `],
					[/* inline code block */ 'i', `dst.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of longs to be written to the given array;
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
		[/* method */ 'get(long[],int,int)', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers longs from this buffer into the given
 destination array.  If there are fewer longs remaining in the
 buffer than are required to satisfy the request, that is, if
 `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `&nbsp;`],
					[/* inline code block */ 'i', `>`],
					[/* text */ 't', `&nbsp;`],
					[/* inline code block */ 'i', `remaining()`],
					[/* text */ 't', `, then no
 longs are transferred and a `],
					[/* reference */ 'r', `java.nio.BufferUnderflowException`],
					[/* text */ 't', ` is
 thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise, this method copies `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` longs from this
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

 except that it first checks that there are sufficient longs in
 this buffer and it is potentially much more efficient.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `The array into which longs are to be written`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the array of the first long to be
         written; must be non-negative and no larger than
         `],
					[/* inline code block */ 'i', `dst.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The maximum number of longs to be written to the given
         array; must be non-negative and no larger than
         `],
					[/* inline code block */ 'i', `dst.length - offset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If there are fewer than `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` longs
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
		[/* method */ 'get(long[])', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `get`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers longs from this buffer into the given
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
					[/* text */ 't', ` longs
          remaining in this buffer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This buffer`]
			]
		]],
		[/* method */ 'put(long[])', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method&nbsp;&nbsp;`],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers the entire content of the given source
 long array into this buffer.  An invocation of this method of the
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
		[/* method */ 'put(int,long[],int,int)', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method&nbsp;&nbsp;`],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` longs from the given
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
					[/* text */ 't', `The index in this buffer at which the first long will be
         written; must be non-negative and less than `],
					[/* inline code block */ 'i', `limit()`]
				]],
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The array from which longs are to be read`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the array of the first long to be read;
         must be non-negative and less than `],
					[/* inline code block */ 'i', `src.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of longs to be read from the given array;
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
		[/* method */ 'put(int,long[])', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method&nbsp;&nbsp;`],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method copies longs into this buffer from the given source
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
					[/* text */ 't', `The index in this buffer at which the first long will be
         written; must be non-negative and less than `],
					[/* inline code block */ 'i', `limit()`]
				]],
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The array from which longs are to be read`]
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
		[/* method */ 'put(long[],int,int)', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method&nbsp;&nbsp;`],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers longs into this buffer from the given
 source array.  If there are more longs to be copied from the array
 than remain in this buffer, that is, if
 `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', `&nbsp;`],
					[/* inline code block */ 'i', `>`],
					[/* text */ 't', `&nbsp;`],
					[/* inline code block */ 'i', `remaining()`],
					[/* text */ 't', `, then no
 longs are transferred and a `],
					[/* reference */ 'r', `java.nio.BufferOverflowException`],
					[/* text */ 't', ` is
 thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise, this method copies `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` longs from the
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
					[/* text */ 't', `The array from which longs are to be read`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The offset within the array of the first long to be read;
         must be non-negative and no larger than `],
					[/* inline code block */ 'i', `src.length`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of longs to be read from the given array;
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
		[/* method */ 'put(int,java.nio.LongBuffer,int,int)', [
			[/* method description */
				[/* text */ 't', `Absolute bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method&nbsp;&nbsp;`],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` longs into this buffer from
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
					[/* text */ 't', `The index in this buffer at which the first long will be
        written; must be non-negative and less than `],
					[/* inline code block */ 'i', `limit()`]
				]],
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The buffer from which longs are to be read`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `The index within the source buffer of the first long to be
        read; must be non-negative and less than `],
					[/* inline code block */ 'i', `src.limit()`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The number of longs to be read from the given buffer;
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
		[/* method */ 'put(java.nio.LongBuffer)', [
			[/* method description */
				[/* text */ 't', `Relative bulk `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method&nbsp;&nbsp;`],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method transfers the longs remaining in the given source
 buffer into this buffer.  If there are more longs remaining in the
 source buffer than in this buffer, that is, if
 `],
					[/* inline code block */ 'i', `src.remaining()`],
					[/* text */ 't', `&nbsp;`],
					[/* inline code block */ 'i', `>`],
					[/* text */ 't', `&nbsp;`],
					[/* inline code block */ 'i', `remaining()`],
					[/* text */ 't', `,
 then no longs are transferred and a `],
					[/* reference */ 'r', `java.nio.BufferOverflowException`],
					[/* text */ 't', ` is thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Otherwise, this method copies
 `],
					[/* text */ 't', `n`],
					[/* text */ 't', `&nbsp;=&nbsp;`],
					[/* inline code block */ 'i', `src.remaining()`],
					[/* text */ 't', ` longs from the given
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
					[/* text */ 't', `The source buffer from which longs are to be read;
         must not be this buffer`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If there is insufficient space in this buffer
          for the remaining longs in the source buffer`]
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
		[/* method */ 'put(int,long)', [
			[/* method description */
				[/* text */ 't', `Absolute `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method&nbsp;&nbsp;`],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes the given long into this buffer at the given
 index. `]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The index at which the long will be written`]
				]],
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The long value to be written`]
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
		[/* method */ 'put(long)', [
			[/* method description */
				[/* text */ 't', `Relative `],
				[/* text */ 't', `put`],
				[/* text */ 't', ` method&nbsp;&nbsp;`],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Writes the given long into this buffer at the current
 position, and then increments the position. `]
			],
			[/* parameters */
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The long to be written`]
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
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this buffer is equal to another object.

 `],
				[/* block */ 'b', ` Two long buffers are equal if, and only if,

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
				[/* block */ 'b', ` A long buffer is not equal to any other type of object.  `]
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
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the current hash code of this buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The hash code of a long buffer depends only upon its remaining
 elements; that is, upon the elements from `],
					[/* inline code block */ 'i', `position()`],
					[/* text */ 't', ` up to, and
 including, the element at `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', `&nbsp;-&nbsp;`],
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
		[/* method */ 'compareTo(java.nio.LongBuffer)', [
			[/* method description */
				[/* text */ 't', `Compares this buffer to another.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Two long buffers are compared by comparing their sequences of
 remaining elements lexicographically, without regard to the starting
 position of each sequence within its corresponding buffer.








 Pairs of `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` elements are compared as if by invoking
 `],
					[/* external link */ 'a', `../lang/Long.html#compare(long,long)`, `Long.compare(long,long)`],
					[/* text */ 't', `.


 `]
				]],
				[/* block */ 'b', ` A long buffer is not comparable to any other type of object.`]
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
		[/* method */ 'wrap(long[])', [
			[/* method description */
				[/* text */ 't', `Wraps a long array into a buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer will be backed by the given long array;
 that is, modifications to the buffer will cause the array to be modified
 and vice versa.  The new buffer's capacity and limit will be
 `],
					[/* inline code block */ 'i', `array.length`],
					[/* text */ 't', `, its position will be zero, its mark will be
 undefined, and its byte order will be



 the `],
					[/* external link */ 'a', `ByteOrder.html#nativeOrder()`, `native order`],
					[/* text */ 't', ` of the underlying
 hardware.

 Its `],
					[/* reference */ 'r', `backing array`],
					[/* text */ 't', ` will be the given array, and its
 `],
					[/* reference */ 'r', `array offset`],
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
				[/* text */ 't', `The new long buffer`]
			]
		]],
		[/* method */ 'wrap(long[],int,int)', [
			[/* method description */
				[/* text */ 't', `Wraps a long array into a buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer will be backed by the given long array;
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



 the `],
					[/* external link */ 'a', `ByteOrder.html#nativeOrder()`, `native order`],
					[/* text */ 't', ` of the underlying
 hardware.

 Its `],
					[/* reference */ 'r', `backing array`],
					[/* text */ 't', ` will be the given array, and
 its `],
					[/* reference */ 'r', `array offset`],
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
				[/* text */ 't', `The new long buffer`]
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
		[/* method */ 'isDirect()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this long buffer is direct.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this buffer is direct`]
			]
		]],
		[/* method */ 'hasArray()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this buffer is backed by an accessible long
 array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` then the `],
					[/* reference */ 'r', `array`],
					[/* text */ 't', `
 and `],
					[/* reference */ 'r', `arrayOffset`],
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
				[/* text */ 't', `Returns the long array that backs this
 buffer&nbsp;&nbsp;`],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` Modifications to this buffer's content will cause the returned
 array's content to be modified, and vice versa.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke the `],
					[/* reference */ 'r', `hasArray`],
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
		[/* method */ 'arrayOffset()', [
			[/* method description */
				[/* text */ 't', `Returns the offset within this buffer's backing array of the first
 element of the buffer&nbsp;&nbsp;`],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this buffer is backed by an array then buffer position `],
					[/* text */ 't', `p`],
					[/* text */ 't', `
 corresponds to array index `],
					[/* text */ 't', `p`],
					[/* text */ 't', `&nbsp;+&nbsp;`],
					[/* inline code block */ 'i', `arrayOffset()`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke the `],
					[/* reference */ 'r', `hasArray`],
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
					[/* external link */ 'a', `ByteBuffer.html#compact()`, `compact`],
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
		[/* method */ 'slice(int,int)', [
			[/* method description */
				[/* text */ 't', `Creates a new long buffer whose content is a shared subsequence of
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



 identical to that of this buffer.

 The new buffer will be direct if, and only if, this buffer is direct,
 and it will be read-only if, and only if, this buffer is read-only. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `The position in this buffer at which the content of the new
          buffer will start; must be non-negative and no larger than
          `],
					[/* external link */ 'a', `Buffer.html#limit()`, `limit()`]
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
		[/* method */ 'slice()', [
			[/* method description */
				[/* text */ 't', `Creates a new long buffer whose content is a shared subsequence of
 this buffer's content.

 `],
				[/* block */ 'b', ` The content of the new buffer will start at this buffer's current
 position.  Changes to this buffer's content will be visible in the new
 buffer, and vice versa; the two buffers' position, limit, and mark
 values will be independent.

 `],
				[/* block */ 'b', ` The new buffer's position will be zero, its capacity and its limit
 will be the number of longs remaining in this buffer, its mark will be
 undefined, and its byte order will be



 identical to that of this buffer.

 The new buffer will be direct if, and only if, this buffer is direct, and
 it will be read-only if, and only if, this buffer is read-only.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new long buffer`]
			]
		]],
		[/* method */ 'duplicate()', [
			[/* method description */
				[/* text */ 't', `Creates a new long buffer that shares this buffer's content.

 `],
				[/* block */ 'b', ` The content of the new buffer will be that of this buffer.  Changes
 to this buffer's content will be visible in the new buffer, and vice
 versa; the two buffers' position, limit, and mark values will be
 independent.

 `],
				[/* block */ 'b', ` The new buffer's capacity, limit, position,




 mark values, and byte order will be identical to those of this buffer.

 The new buffer will be direct if, and only if, this buffer is direct, and
 it will be read-only if, and only if, this buffer is read-only.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new long buffer`]
			]
		]],
		[/* method */ 'order()', [
			[/* method description */
				[/* text */ 't', `Retrieves this buffer's byte order.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The byte order of a long buffer created by allocation or by
 wrapping an existing `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` array is the `],
					[/* external link */ 'a', `ByteOrder.html#nativeOrder()`, `native order`],
					[/* text */ 't', ` of the underlying
 hardware.  The byte order of a long buffer created as a `],
					[/* external link */ 'a', `ByteBuffer.html#views`, `view`],
					[/* text */ 't', ` of a byte buffer is that of the
 byte buffer at the moment that the view is created.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This buffer's byte order`]
			]
		]],
		[/* method */ 'mismatch(java.nio.LongBuffer)', [
			[/* method description */
				[/* text */ 't', `Finds and returns the relative index of the first mismatch between this
 buffer and a given buffer.  The index is relative to the
 `],
				[/* external link */ 'a', `Buffer.html#position()`, `position`],
				[/* text */ 't', ` of each buffer and will be in the range of
 0 (inclusive) up to the smaller of the `],
				[/* external link */ 'a', `Buffer.html#remaining()`, `remaining`],
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
		[/* method */ 'allocate(int)', [
			[/* method description */
				[/* text */ 't', `Allocates a new long buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The new buffer's position will be zero, its limit will be its
 capacity, its mark will be undefined, each of its elements will be
 initialized to zero, and its byte order will be



 the `],
					[/* external link */ 'a', `ByteOrder.html#nativeOrder()`, `native order`],
					[/* text */ 't', ` of the underlying
 hardware.

 It will have a `],
					[/* reference */ 'r', `backing array`],
					[/* text */ 't', `, and its
 `],
					[/* reference */ 'r', `array offset`],
					[/* text */ 't', ` will be zero.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'capacity', [/* parameter description */
					[/* text */ 't', `The new buffer's capacity, in longs`]
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
				[/* text */ 't', `The new long buffer`]
			]
		]],
		[/* method */ 'asReadOnlyBuffer()', [
			[/* method description */
				[/* text */ 't', `Creates a new, read-only long buffer that shares this buffer's
 content.

 `],
				[/* block */ 'b', ` The content of the new buffer will be that of this buffer.  Changes
 to this buffer's content will be visible in the new buffer; the new
 buffer itself, however, will be read-only and will not allow the shared
 content to be modified.  The two buffers' position, limit, and mark
 values will be independent.

 `],
				[/* block */ 'b', ` The new buffer's capacity, limit, position,




 mark values, and byte order will be identical to those of this buffer.


 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this buffer is itself read-only then this method behaves in
 exactly the same way as the `],
					[/* reference */ 'r', `duplicate`],
					[/* text */ 't', ` method.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The new, read-only long buffer`]
			]
		]],
		[/* method */ 'compact()', [
			[/* method description */
				[/* text */ 't', `Compacts this buffer&nbsp;&nbsp;`],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The longs between the buffer's current position and its limit,
 if any, are copied to the beginning of the buffer.  That is, the
 long at index `],
					[/* text */ 't', `p`],
					[/* text */ 't', `&nbsp;=&nbsp;`],
					[/* inline code block */ 'i', `position()`],
					[/* text */ 't', ` is copied
 to index zero, the long at index `],
					[/* text */ 't', `p`],
					[/* text */ 't', `&nbsp;+&nbsp;1 is copied
 to index one, and so forth until the long at index
 `],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', `&nbsp;-&nbsp;1 is copied to index
 `],
					[/* text */ 't', `n`],
					[/* text */ 't', `&nbsp;=&nbsp;`],
					[/* inline code block */ 'i', `limit()`],
					[/* text */ 't', `&nbsp;-&nbsp;`],
					[/* inline code block */ 'i', `1`],
					[/* text */ 't', `&nbsp;-&nbsp;`],
					[/* text */ 't', `p`],
					[/* text */ 't', `.
 The buffer's position is then set to `],
					[/* text */ 't', `n+1`],
					[/* text */ 't', ` and its limit is set to
 its capacity.  The mark, if defined, is discarded.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The buffer's position is set to the number of longs copied,
 rather than to zero, so that an invocation of this method can be
 followed immediately by an invocation of another relative `],
					[/* text */ 't', `put`],
					[/* text */ 't', `
 method. `]
				]]
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
		]]
	],
]);
