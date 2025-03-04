import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ByteArrayInputStream', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `ByteArrayInputStream`],
		[/* text */ 't', ` contains
 an internal buffer that contains bytes that
 may be read from the stream. An internal
 counter keeps track of the next byte to
 be supplied by the `],
		[/* inline code block */ 'i', `read`],
		[/* text */ 't', ` method.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Closing a `],
			[/* inline code block */ 'i', `ByteArrayInputStream`],
			[/* text */ 't', ` has no effect. The methods in
 this class can be called after the stream has been closed without
 generating an `],
			[/* inline code block */ 'i', `IOException`],
			[/* text */ 't', `.`]
		]]
	],
	[/* fields */
		[/* field */ 'buf', [
			[/* field description */
				[/* text */ 't', `An array of bytes that was provided
 by the creator of the stream. Elements `],
				[/* inline code block */ 'i', `buf[0]`],
				[/* text */ 't', `
 through `],
				[/* inline code block */ 'i', `buf[count-1]`],
				[/* text */ 't', ` are the
 only bytes that can ever be read from the
 stream;  element `],
				[/* inline code block */ 'i', `buf[pos]`],
				[/* text */ 't', ` is
 the next byte to be read.`]
			],
		]],
		[/* field */ 'count', [
			[/* field description */
				[/* text */ 't', `The index one greater than the last valid character in the input
 stream buffer.
 This value should always be nonnegative
 and not larger than the length of `],
				[/* inline code block */ 'i', `buf`],
				[/* text */ 't', `.
 It  is one greater than the position of
 the last byte within `],
				[/* inline code block */ 'i', `buf`],
				[/* text */ 't', ` that
 can ever be read  from the input stream buffer.`]
			],
		]],
		[/* field */ 'mark', [
			[/* field description */
				[/* text */ 't', `The currently marked position in the stream.
 ByteArrayInputStream objects are marked at position zero by
 default when constructed.  They may be marked at another
 position within the buffer by the `],
				[/* inline code block */ 'i', `mark()`],
				[/* text */ 't', ` method.
 The current buffer position is set to this point by the
 `],
				[/* inline code block */ 'i', `reset()`],
				[/* text */ 't', ` method.
 `],
				[/* block */ 'b', `
 If no mark has been set, then the value of mark is the offset
 passed to the constructor (or 0 if the offset was not supplied).`]
			],
		]],
		[/* field */ 'pos', [
			[/* field description */
				[/* text */ 't', `The index of the next character to read from the input stream buffer.
 This value should always be nonnegative
 and not larger than the value of `],
				[/* inline code block */ 'i', `count`],
				[/* text */ 't', `.
 The next byte to be read from the input stream buffer
 will be `],
				[/* inline code block */ 'i', `buf[pos]`],
				[/* text */ 't', `.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(byte[])', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `ByteArrayInputStream`],
				[/* text */ 't', `
 so that it  uses `],
				[/* inline code block */ 'i', `buf`],
				[/* text */ 't', ` as its
 buffer array.
 The buffer array is not copied.
 The initial value of `],
				[/* inline code block */ 'i', `pos`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` and the initial value
 of  `],
				[/* inline code block */ 'i', `count`],
				[/* text */ 't', ` is the length of
 `],
				[/* inline code block */ 'i', `buf`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'buf', [/* parameter description */
					[/* text */ 't', `the input buffer.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(byte[],int,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates `],
				[/* inline code block */ 'i', `ByteArrayInputStream`],
				[/* text */ 't', `
 that uses `],
				[/* inline code block */ 'i', `buf`],
				[/* text */ 't', ` as its
 buffer array. The initial value of `],
				[/* inline code block */ 'i', `pos`],
				[/* text */ 't', `
 is `],
				[/* inline code block */ 'i', `offset`],
				[/* text */ 't', ` and the initial value
 of `],
				[/* inline code block */ 'i', `count`],
				[/* text */ 't', ` is the minimum of `],
				[/* inline code block */ 'i', `offset+length`],
				[/* text */ 't', `
 and `],
				[/* inline code block */ 'i', `buf.length`],
				[/* text */ 't', `.
 The buffer array is not copied. The buffer's mark is
 set to the specified offset.`]
			],
			[/* parameters */
				[/* parameter */ 'buf', [/* parameter description */
					[/* text */ 't', `the input buffer.`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset in the buffer of the first byte to read.`]
				]],
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes to read from the buffer.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'markSupported()', [
			[/* method description */
				[/* text */ 't', `Tests if this `],
				[/* inline code block */ 'i', `InputStream`],
				[/* text */ 't', ` supports mark/reset. The
 `],
				[/* inline code block */ 'i', `markSupported`],
				[/* text */ 't', ` method of `],
				[/* inline code block */ 'i', `ByteArrayInputStream`],
				[/* text */ 't', `
 always returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this stream instance supports the mark
          and reset methods; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'readNBytes(byte[],int,int)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Reads the requested number of bytes from the input stream into the given
 byte array. This method blocks until `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` bytes of input data have
 been read, end of stream is detected, or an exception is thrown. The
 number of bytes actually read, possibly zero, is returned. This method
 does not close the input stream.

 `],
					[/* block */ 'b', [
						[/* text */ 't', ` In the case where end of stream is reached before `],
						[/* inline code block */ 'i', `len`],
						[/* text */ 't', ` bytes
 have been read, then the actual number of bytes read will be returned.
 When this stream reaches end of stream, further invocations of this
 method will return zero.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If `],
						[/* inline code block */ 'i', `len`],
						[/* text */ 't', ` is zero, then no bytes are read and `],
						[/* inline code block */ 'i', `0`],
						[/* text */ 't', ` is
 returned; otherwise, there is an attempt to read up to `],
						[/* inline code block */ 'i', `len`],
						[/* text */ 't', ` bytes.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` The first byte read is stored into element `],
						[/* inline code block */ 'i', `b[off]`],
						[/* text */ 't', `, the next
 one in to `],
						[/* inline code block */ 'i', `b[off+1]`],
						[/* text */ 't', `, and so on. The number of bytes read is, at
 most, equal to `],
						[/* inline code block */ 'i', `len`],
						[/* text */ 't', `. Let `],
						[/* text */ 't', `k`],
						[/* text */ 't', ` be the number of bytes actually
 read; these bytes will be stored in elements `],
						[/* inline code block */ 'i', `b[off]`],
						[/* text */ 't', ` through
 `],
						[/* inline code block */ 'i', `b[off+`],
						[/* text */ 't', `k`],
						[/* inline code block */ 'i', `-1]`],
						[/* text */ 't', `, leaving elements `],
						[/* inline code block */ 'i', `b[off+`],
						[/* text */ 't', `k`],
						[/* inline code block */ 'i', `]`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `b[off+len-1]`],
						[/* text */ 't', ` unaffected.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` The behavior for the case where the input stream is `],
						[/* text */ 't', `asynchronously
 closed`],
						[/* text */ 't', `, or the thread interrupted during the read, is highly input
 stream specific, and therefore not specified.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If an I/O error occurs reading from the input stream, then it may do
 so after some, but not all, bytes of `],
						[/* inline code block */ 'i', `b`],
						[/* text */ 't', ` have been updated with
 data from the input stream. Consequently the input stream and `],
						[/* inline code block */ 'i', `b`],
						[/* text */ 't', `
 may be in an inconsistent state. It is strongly recommended that the
 stream be promptly closed if an I/O error occurs.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the byte array into which the data is read`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` at which the data is written`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes to read`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the actual number of bytes read into the buffer`]
			]
		]],
		[/* method */ 'readAllBytes()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Reads all remaining bytes from the input stream. This method blocks until
 all remaining bytes have been read and end of stream is detected, or an
 exception is thrown. This method does not close the input stream.

 `],
					[/* block */ 'b', ` When this stream reaches end of stream, further invocations of this
 method will return an empty byte array.

 `],
					[/* block */ 'b', ` Note that this method is intended for simple cases where it is
 convenient to read all bytes into a byte array. It is not intended for
 reading input streams with large amounts of data.

 `],
					[/* block */ 'b', [
						[/* text */ 't', ` The behavior for the case where the input stream is `],
						[/* text */ 't', `asynchronously
 closed`],
						[/* text */ 't', `, or the thread interrupted during the read, is highly input
 stream specific, and therefore not specified.

 `]
					]],
					[/* block */ 'b', ` If an I/O error occurs reading from the input stream, then it may do
 so after some, but not all, bytes have been read. Consequently the input
 stream may not be at end of stream and may be in an inconsistent state.
 It is strongly recommended that the stream be promptly closed if an I/O
 error occurs.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a byte array containing the bytes read from this input stream`]
			]
		]],
		[/* method */ 'available()', [
			[/* method description */
				[/* text */ 't', `Returns the number of remaining bytes that can be read (or skipped over)
 from this input stream.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The value returned is `],
					[/* inline code block */ 'i', `count - pos`],
					[/* text */ 't', `,
 which is the number of bytes remaining to be read from the input buffer.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of remaining bytes that can be read (or skipped
          over) from this input stream without blocking.`]
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
				[/* text */ 't', ` is returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` method
 cannot block.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
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
				[/* text */ 't', ` bytes of data into an array of bytes from this
 input stream.  If `],
				[/* inline code block */ 'i', `pos`],
				[/* text */ 't', ` equals `],
				[/* inline code block */ 'i', `count`],
				[/* text */ 't', `, then `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is
 returned to indicate end of file.  Otherwise, the  number `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` of
 bytes read is equal to the smaller of `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `count-pos`],
				[/* text */ 't', `.
 If `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` is positive, then bytes `],
				[/* inline code block */ 'i', `buf[pos]`],
				[/* text */ 't', ` through
 `],
				[/* inline code block */ 'i', `buf[pos+k-1]`],
				[/* text */ 't', ` are copied into `],
				[/* inline code block */ 'i', `b[off]`],
				[/* text */ 't', ` through
 `],
				[/* inline code block */ 'i', `b[off+k-1]`],
				[/* text */ 't', ` in the manner performed by `],
				[/* inline code block */ 'i', `System.arraycopy`],
				[/* text */ 't', `.
 The value `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` is added into `],
				[/* inline code block */ 'i', `pos`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` is returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Unlike the `],
					[/* reference */ 'r', `.InputStream#read(byte[],int,int)`],
					[/* text */ 't', `
 of `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', `, this method returns `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` instead of zero
 if the end of the stream has been reached and `],
					[/* inline code block */ 'i', `len == 0`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` method cannot block.`]
				]]
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
				[/* text */ 't', `Skips `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` bytes of input from this input stream. Fewer
 bytes might be skipped if the end of the input stream is reached.
 The actual number `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', `
 of bytes to be skipped is equal to the smaller
 of `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` and  `],
				[/* inline code block */ 'i', `count-pos`],
				[/* text */ 't', `.
 The value `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` is added into `],
				[/* inline code block */ 'i', `pos`],
				[/* text */ 't', `
 and `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to be skipped.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the actual number of bytes skipped.`]
			]
		]],
		[/* method */ 'transferTo(java.io.OutputStream)', UDF],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets the buffer to the marked position.  The marked position
 is 0 unless another position was marked or an offset was specified
 in the constructor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closing a `],
				[/* inline code block */ 'i', `ByteArrayInputStream`],
				[/* text */ 't', ` has no effect. The methods in
 this class can be called after the stream has been closed without
 generating an `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', `.`]
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
				[/* text */ 't', `Set the current marked position in the stream.
 ByteArrayInputStream objects are marked at position zero by
 default when constructed.  They may be marked at another
 position within the buffer by this method.
 `],
				[/* block */ 'b', `
 If no mark has been set, then the value of the mark is the
 offset passed to the constructor (or 0 if the offset was not
 supplied).

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Note: The `],
					[/* inline code block */ 'i', `readAheadLimit`],
					[/* text */ 't', ` for this class
  has no meaning.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'readAheadLimit', [/* parameter description */
					[/* text */ 't', `the maximum limit of bytes that can be read before
                      the mark position becomes invalid.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
