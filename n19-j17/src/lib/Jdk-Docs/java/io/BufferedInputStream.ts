import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.BufferedInputStream', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `BufferedInputStream`],
		[/* text */ 't', ` adds
 functionality to another input stream-namely,
 the ability to buffer the input and to
 support the `],
		[/* inline code block */ 'i', `mark`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `reset`],
		[/* text */ 't', `
 methods. When  the `],
		[/* inline code block */ 'i', `BufferedInputStream`],
		[/* text */ 't', `
 is created, an internal buffer array is
 created. As bytes  from the stream are read
 or skipped, the internal buffer is refilled
 as necessary  from the contained input stream,
 many bytes at a time. The `],
		[/* inline code block */ 'i', `mark`],
		[/* text */ 't', `
 operation  remembers a point in the input
 stream and the `],
		[/* inline code block */ 'i', `reset`],
		[/* text */ 't', ` operation
 causes all the  bytes read since the most
 recent `],
		[/* inline code block */ 'i', `mark`],
		[/* text */ 't', ` operation to be
 reread before new bytes are  taken from
 the contained input stream.`]
	],
	[/* fields */
		[/* field */ 'buf', [
			[/* field description */
				[/* text */ 't', `The internal buffer array where the data is stored. When necessary,
 it may be replaced by another array of
 a different size.`]
			],
		]],
		[/* field */ 'count', [
			[/* field description */
				[/* text */ 't', `The index one greater than the index of the last valid byte in
 the buffer.
 This value is always
 in the range `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `buf.length`],
				[/* text */ 't', `;
 elements `],
				[/* inline code block */ 'i', `buf[0]`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `buf[count-1]`],
				[/* text */ 't', `
 contain buffered input data obtained
 from the underlying  input stream.`]
			],
		]],
		[/* field */ 'pos', [
			[/* field description */
				[/* text */ 't', `The current position in the buffer. This is the index of the next
 character to be read from the `],
				[/* inline code block */ 'i', `buf`],
				[/* text */ 't', ` array.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This value is always in the range `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `
 through `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', `. If it is less
 than `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', `, then  `],
					[/* inline code block */ 'i', `buf[pos]`],
					[/* text */ 't', `
 is the next byte to be supplied as input;
 if it is equal to `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', `, then
 the  next `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `skip`],
					[/* text */ 't', `
 operation will require more bytes to be
 read from the contained  input stream.`]
				]]
			],
		]],
		[/* field */ 'markpos', [
			[/* field description */
				[/* text */ 't', `The value of the `],
				[/* inline code block */ 'i', `pos`],
				[/* text */ 't', ` field at the time the last
 `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', ` method was called.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This value is always
 in the range `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', `.
 If there is no marked position in  the input
 stream, this field is `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', `. If
 there is a marked position in the input
 stream,  then `],
					[/* inline code block */ 'i', `buf[markpos]`],
					[/* text */ 't', `
 is the first byte to be supplied as input
 after a `],
					[/* inline code block */ 'i', `reset`],
					[/* text */ 't', ` operation. If
 `],
					[/* inline code block */ 'i', `markpos`],
					[/* text */ 't', ` is not `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', `,
 then all bytes from positions `],
					[/* inline code block */ 'i', `buf[markpos]`],
					[/* text */ 't', `
 through  `],
					[/* inline code block */ 'i', `buf[pos-1]`],
					[/* text */ 't', ` must remain
 in the buffer array (though they may be
 moved to  another place in the buffer array,
 with suitable adjustments to the values
 of `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', `,  `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', `,
 and `],
					[/* inline code block */ 'i', `markpos`],
					[/* text */ 't', `); they may not
 be discarded unless and until the difference
 between `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `markpos`],
					[/* text */ 't', `
 exceeds `],
					[/* inline code block */ 'i', `marklimit`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'marklimit', [
			[/* field description */
				[/* text */ 't', `The maximum read ahead allowed after a call to the
 `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', ` method before subsequent calls to the
 `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', ` method fail.
 Whenever the difference between `],
				[/* inline code block */ 'i', `pos`],
				[/* text */ 't', `
 and `],
				[/* inline code block */ 'i', `markpos`],
				[/* text */ 't', ` exceeds `],
				[/* inline code block */ 'i', `marklimit`],
				[/* text */ 't', `,
 then the  mark may be dropped by setting
 `],
				[/* inline code block */ 'i', `markpos`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.InputStream,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `BufferedInputStream`],
				[/* text */ 't', `
 with the specified buffer size,
 and saves its  argument, the input stream
 `],
				[/* inline code block */ 'i', `in`],
				[/* text */ 't', `, for later use.  An internal
 buffer array of length  `],
				[/* inline code block */ 'i', `size`],
				[/* text */ 't', `
 is created and stored in `],
				[/* inline code block */ 'i', `buf`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the underlying input stream.`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `the buffer size.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `size <= 0`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `BufferedInputStream`],
				[/* text */ 't', `
 and saves its  argument, the input stream
 `],
				[/* inline code block */ 'i', `in`],
				[/* text */ 't', `, for later use. An internal
 buffer array is created and  stored in `],
				[/* inline code block */ 'i', `buf`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the underlying input stream.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads bytes from this byte-input stream into the specified byte array,
 starting at the given offset.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method implements the general contract of the corresponding
 `],
					[/* external link */ 'a', `InputStream.html#read(byte%5B%5D,int,int)`, `read`],
					[/* text */ 't', ` method of
 the `],
					[/* reference */ 'r', `java.io.InputStream`],
					[/* text */ 't', ` class.  As an additional
 convenience, it attempts to read as many bytes as possible by repeatedly
 invoking the `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` method of the underlying stream.  This
 iterated `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` continues until one of the following
 conditions becomes true: `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', ` The specified number of bytes have been read,

   `],
					[/* block */ 'b', [
						[/* text */ 't', ` The `],
						[/* inline code block */ 'i', `read`],
						[/* text */ 't', ` method of the underlying stream returns
   `],
						[/* inline code block */ 'i', `-1`],
						[/* text */ 't', `, indicating end-of-file, or

   `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` The `],
						[/* inline code block */ 'i', `available`],
						[/* text */ 't', ` method of the underlying stream
   returns zero, indicating that further input requests would block.

 `]
					]]
				]],
				[/* text */ 't', ` If the first `],
				[/* inline code block */ 'i', `read`],
				[/* text */ 't', ` on the underlying stream returns
 `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` to indicate end-of-file then this method returns
 `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.  Otherwise this method returns the number of bytes
 actually read.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` Subclasses of this class are encouraged, but not required, to
 attempt to read as many bytes as possible in the same fashion.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `destination buffer.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `offset at which to start storing bytes.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `maximum number of bytes to read.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if this input stream has been closed by
                          invoking its `],
					[/* reference */ 'r', `close()`],
					[/* text */ 't', ` method,
                          or an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of bytes read, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the end of
             the stream has been reached.`]
			]
		]],
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `See
 the general contract of the `],
				[/* inline code block */ 'i', `read`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `InputStream`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if this input stream has been closed by
                          invoking its `],
					[/* reference */ 'r', `close()`],
					[/* text */ 't', ` method,
                          or an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next byte of data, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the end of the
             stream is reached.`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this input stream and releases any system resources
 associated with the stream.
 Once the stream has been closed, further read(), available(), reset(),
 or skip() invocations will throw an IOException.
 Closing a previously closed stream has no effect.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'mark(int)', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `InputStream`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'readlimit', [/* parameter description */
					[/* text */ 't', `the maximum limit of bytes that can be read before
                      the mark position becomes invalid.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'skip(long)', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `skip`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `InputStream`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to be skipped.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if this input stream has been closed by
                      invoking its `],
					[/* reference */ 'r', `close()`],
					[/* text */ 't', ` method,
                      `],
					[/* inline code block */ 'i', `in.skip(n)`],
					[/* text */ 't', ` throws an IOException,
                      or an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes skipped.`]
			]
		]],
		[/* method */ 'available()', [
			[/* method description */
				[/* text */ 't', `Returns an estimate of the number of bytes that can be read (or
 skipped over) from this input stream without blocking by the next
 invocation of a method for this input stream. The next invocation might be
 the same thread or another thread.  A single read or skip of this
 many bytes will not block, but may read or skip fewer bytes.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns the sum of the number of bytes remaining to be read in
 the buffer (`],
					[/* inline code block */ 'i', `count - pos`],
					[/* text */ 't', `) and the result of calling the
 `],
					[/* external link */ 'a', `FilterInputStream.html#in`, `in`],
					[/* inline code block */ 'i', `.available()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if this input stream has been closed by
                          invoking its `],
					[/* reference */ 'r', `close()`],
					[/* text */ 't', ` method,
                          or an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an estimate of the number of bytes that can be read (or skipped
             over) from this input stream without blocking.`]
			]
		]],
		[/* method */ 'markSupported()', [
			[/* method description */
				[/* text */ 't', `Tests if this input stream supports the `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', `
 and `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', ` methods. The `],
				[/* inline code block */ 'i', `markSupported`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `BufferedInputStream`],
				[/* text */ 't', ` returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` indicating if this stream type supports
          the `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', ` methods.`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `InputStream`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `markpos`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', `
 (no mark has been set or the mark has been
 invalidated), an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `
 is thrown. Otherwise, `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is
 set equal to `],
					[/* inline code block */ 'i', `markpos`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if this stream has not been marked or,
                  if the mark has been invalidated, or the stream
                  has been closed by invoking its `],
					[/* reference */ 'r', `close()`],
					[/* text */ 't', `
                  method, or an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
