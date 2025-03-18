import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.PushbackInputStream', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `PushbackInputStream`],
		[/* text */ 't', ` adds
 functionality to another input stream, namely
 the  ability to "push back" or "unread" bytes,
 by storing pushed-back bytes in an internal buffer.
 This is useful in situations where
 it is convenient for a fragment of code
 to read an indefinite number of data bytes
 that  are delimited by a particular byte
 value; after reading the terminating byte,
 the  code fragment can "unread" it, so that
 the next read operation on the input stream
 will reread the byte that was pushed back.
 For example, bytes representing the  characters
 constituting an identifier might be terminated
 by a byte representing an  operator character;
 a method whose job is to read just an identifier
 can read until it  sees the operator and
 then push the operator back to be re-read.`]
	],
	[/* fields */
		[/* field */ 'buf', [
			[/* field description */
				[/* text */ 't', `The pushback buffer.`]
			],
		]],
		[/* field */ 'pos', [
			[/* field description */
				[/* text */ 't', `The position within the pushback buffer from which the next byte will
 be read.  When the buffer is empty, `],
				[/* inline code block */ 'i', `pos`],
				[/* text */ 't', ` is equal to
 `],
				[/* inline code block */ 'i', `buf.length`],
				[/* text */ 't', `; when the buffer is full, `],
				[/* inline code block */ 'i', `pos`],
				[/* text */ 't', ` is
 equal to zero.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PushbackInputStream`],
				[/* text */ 't', `
 with a 1-byte pushback buffer, and saves its argument, the input stream
 `],
				[/* inline code block */ 'i', `in`],
				[/* text */ 't', `, for later use. Initially,
 the pushback buffer is empty.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the input stream from which bytes will be read.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.InputStream,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PushbackInputStream`],
				[/* text */ 't', `
 with a pushback buffer of the specified `],
				[/* inline code block */ 'i', `size`],
				[/* text */ 't', `,
 and saves its argument, the input stream
 `],
				[/* inline code block */ 'i', `in`],
				[/* text */ 't', `, for later use. Initially,
 the pushback buffer is empty.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the input stream from which bytes will be read.`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `the size of the pushback buffer.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `size <= 0`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'markSupported()', [
			[/* method description */
				[/* text */ 't', `Tests if this input stream supports the `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', ` methods, which it does not.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `, since this class does not support the
           `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', ` methods.`]
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
					[/* text */ 't', ` The method returns the sum of the number of bytes that have been
 pushed back and the value returned by `],
					[/* reference */ 'r', `java.io.FilterInputStream#available()`, `available`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if this input stream has been closed by
             invoking its `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method,
             or an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of bytes that can be read (or skipped over) from
             the input stream without blocking.`]
			]
		]],
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Reads the next byte of data from this input stream. The value
 byte is returned as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` in the range
 `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `255`],
				[/* text */ 't', `. If no byte is available
 because the end of the stream has been reached, the value
 `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned. This method blocks until input data
 is available, the end of the stream is detected, or an exception
 is thrown.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method returns the most recently pushed-back byte, if there is
 one, and otherwise calls the `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` method of its underlying
 input stream and returns whatever value that method returns.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if this input stream has been closed by
             invoking its `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method,
             or an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next byte of data, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the end of the
             stream has been reached.`]
			]
		]],
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads up to `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes of data from this input stream into
 an array of bytes.  This method first reads any pushed-back bytes; after
 that, if fewer than `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes have been read then it
 reads from the underlying input stream. If `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` is not zero, the method
 blocks until at least 1 byte of input is available; otherwise, no
 bytes are read and `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the destination array `],
					[/* inline code block */ 'i', `b`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes read.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative,
             `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is greater than
             `],
					[/* inline code block */ 'i', `b.length - off`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if this input stream has been closed by
             invoking its `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method,
             or an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the total number of bytes read into the buffer, or
             `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there is no more data because the end of
             the stream has been reached.`]
			]
		]],
		[/* method */ 'skip(long)', [
			[/* method description */
				[/* text */ 't', `Skips over and discards `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` bytes of data from this
 input stream. The `],
				[/* inline code block */ 'i', `skip`],
				[/* text */ 't', ` method may, for a variety of
 reasons, end up skipping over some smaller number of bytes,
 possibly zero.  If `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` is negative, no bytes are skipped.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `skip`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `PushbackInputStream`],
					[/* text */ 't', `
 first skips over the bytes in the pushback buffer, if any.  It then
 calls the `],
					[/* inline code block */ 'i', `skip`],
					[/* text */ 't', ` method of the underlying input stream if
 more bytes need to be skipped.  The actual number of bytes skipped
 is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to be skipped.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the stream has been closed by
             invoking its `],
					[/* reference */ 'r', `#close()`, `close()`],
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
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this input stream and releases any system resources
 associated with the stream.
 Once the stream has been closed, further read(), unread(),
 available(), reset(), or skip() invocations will throw an IOException.
 Closing a previously closed stream has no effect.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'mark(int)', [
			[/* method description */
				[/* text */ 't', `Marks the current position in this input stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `mark`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `PushbackInputStream`],
					[/* text */ 't', `
 does nothing.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'readlimit', [/* parameter description */
					[/* text */ 't', `the maximum limit of bytes that can be read before
                      the mark position becomes invalid.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Repositions this stream to the position at the time the
 `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', ` method was last called on this input stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The method `],
					[/* inline code block */ 'i', `reset`],
					[/* text */ 't', ` for class
 `],
					[/* inline code block */ 'i', `PushbackInputStream`],
					[/* text */ 't', ` does nothing except throw an
 `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if this method is invoked.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'unread(byte[])', [
			[/* method description */
				[/* text */ 't', `Pushes back an array of bytes by copying it to the front of the
 pushback buffer.  After this method returns, the next byte to be read
 will have the value `],
				[/* inline code block */ 'i', `b[0]`],
				[/* text */ 't', `, the byte after that will have the
 value `],
				[/* inline code block */ 'i', `b[1]`],
				[/* text */ 't', `, and so forth.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the byte array to push back`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If there is not enough room in the pushback
            buffer for the specified number of bytes,
            or this input stream has been closed by
            invoking its `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'unread(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Pushes back a portion of an array of bytes by copying it to the front
 of the pushback buffer.  After this method returns, the next byte to be
 read will have the value `],
				[/* inline code block */ 'i', `b[off]`],
				[/* text */ 't', `, the byte after that will
 have the value `],
				[/* inline code block */ 'i', `b[off+1]`],
				[/* text */ 't', `, and so forth.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the byte array to push back.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset of the data.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of bytes to push back.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If there is not enough room in the pushback
            buffer for the specified number of bytes,
            or this input stream has been closed by
            invoking its `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'unread(int)', [
			[/* method description */
				[/* text */ 't', `Pushes back a byte by copying it to the front of the pushback buffer.
 After this method returns, the next byte to be read will have the value
 `],
				[/* inline code block */ 'i', `(byte)b`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value whose low-order
                  byte is to be pushed back.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If there is not enough room in the pushback
            buffer for the byte, or this input stream has been closed by
            invoking its `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
