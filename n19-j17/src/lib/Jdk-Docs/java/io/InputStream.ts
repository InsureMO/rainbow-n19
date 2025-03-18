import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.InputStream', [
	[/* class description */
		[/* text */ 't', `This abstract class is the superclass of all classes representing
 an input stream of bytes.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Applications that need to define a subclass of `],
			[/* inline code block */ 'i', `InputStream`],
			[/* text */ 't', `
 must always provide a method that returns the next byte of input.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor for subclasses to call.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Reads the next byte of data from the input stream. The value byte is
 returned as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` in the range `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` to
 `],
				[/* inline code block */ 'i', `255`],
				[/* text */ 't', `. If no byte is available because the end of the stream
 has been reached, the value `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned. This method
 blocks until input data is available, the end of the stream is detected,
 or an exception is thrown.

 `],
				[/* block */ 'b', ` A subclass must provide an implementation of this method.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next byte of data, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the end of the
             stream is reached.`]
			]
		]],
		[/* method */ 'markSupported()', [
			[/* method description */
				[/* text */ 't', `Tests if this input stream supports the `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', ` methods. Whether or not `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', ` are supported is an invariant property of a
 particular input stream instance. The `],
				[/* inline code block */ 'i', `markSupported`],
				[/* text */ 't', ` method
 of `],
				[/* inline code block */ 'i', `InputStream`],
				[/* text */ 't', ` returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this stream instance supports the mark
          and reset methods; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'readAllBytes()', [
			[/* method description */
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
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.OutOfMemoryError', [/* throw description */
					[/* text */ 't', `if an array of the required size cannot be
         allocated.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a byte array containing the bytes read from this input stream`]
			]
		]],
		[/* method */ 'readNBytes(int)', [
			[/* method description */
				[/* text */ 't', `Reads up to a specified number of bytes from the input stream. This
 method blocks until the requested number of bytes has been read, end
 of stream is detected, or an exception is thrown. This method does not
 close the input stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The length of the returned array equals the number of bytes read
 from the stream. If `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is zero, then no bytes are read and
 an empty byte array is returned. Otherwise, up to `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` bytes
 are read from the stream. Fewer than `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` bytes may be read if
 end of stream is encountered.

 `]
				]],
				[/* block */ 'b', ` When this stream reaches end of stream, further invocations of this
 method will return an empty byte array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that this method is intended for simple cases where it is
 convenient to read the specified number of bytes into a byte array. The
 total amount of memory allocated by this method is proportional to the
 number of bytes read from the stream which is bounded by `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', `.
 Therefore, the method may be safely called with very large values of
 `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` provided sufficient memory is available.

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
				[/* block */ 'b', ` If an I/O error occurs reading from the input stream, then it may do
 so after some, but not all, bytes have been read. Consequently the input
 stream may not be at end of stream and may be in an inconsistent state.
 It is strongly recommended that the stream be promptly closed if an I/O
 error occurs.`]
			],
			[/* parameters */
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes to read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `length`],
					[/* text */ 't', ` is negative`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.OutOfMemoryError', [/* throw description */
					[/* text */ 't', `if an array of the required size cannot be
         allocated.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a byte array containing the bytes read from this input stream`]
			]
		]],
		[/* method */ 'available()', [
			[/* method description */
				[/* text */ 't', `Returns an estimate of the number of bytes that can be read (or skipped
 over) from this input stream without blocking, which may be 0, or 0 when
 end of stream is detected.  The read might be on the same thread or
 another thread.  A single read or skip of this many bytes will not block,
 but may read or skip fewer bytes.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that while some implementations of `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', ` will
 return the total number of bytes in the stream, many will not.  It is
 never correct to use the return value of this method to allocate
 a buffer intended to hold all data in this stream.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` A subclass's implementation of this method may choose to throw an
 `],
					[/* reference */ 'r', `java.io.IOException`, `IOException`],
					[/* text */ 't', ` if this input stream has been closed by invoking the
 `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `available`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', ` always returns
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` This method should be overridden by subclasses.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an estimate of the number of bytes that can be read (or
             skipped over) from this input stream without blocking or
             `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` when it reaches the end of the input stream.`]
			]
		]],
		[/* method */ 'read(byte[])', [
			[/* method description */
				[/* text */ 't', `Reads some number of bytes from the input stream and stores them into
 the buffer array `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `. The number of bytes actually read is
 returned as an integer.  This method blocks until input data is
 available, end of file is detected, or an exception is thrown.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the length of `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is zero, then no bytes are read and
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', ` is returned; otherwise, there is an attempt to read at
 least one byte. If no byte is available because the stream is at the
 end of the file, the value `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` is returned; otherwise, at
 least one byte is read and stored into `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The first byte read is stored into element `],
					[/* inline code block */ 'i', `b[0]`],
					[/* text */ 't', `, the
 next one into `],
					[/* inline code block */ 'i', `b[1]`],
					[/* text */ 't', `, and so on. The number of bytes read is,
 at most, equal to the length of `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `. Let `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` be the
 number of bytes actually read; these bytes will be stored in elements
 `],
					[/* inline code block */ 'i', `b[0]`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `b[`],
					[/* text */ 't', `k`],
					[/* inline code block */ 'i', `-1]`],
					[/* text */ 't', `,
 leaving elements `],
					[/* inline code block */ 'i', `b[`],
					[/* text */ 't', `k`],
					[/* inline code block */ 'i', `]`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `b[b.length-1]`],
					[/* text */ 't', ` unaffected.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `read(b)`],
					[/* text */ 't', ` method for class `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', `
 has the same effect as: `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `read(b, 0, b.length)`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If the first byte cannot be read for any reason
             other than the end of the file, if the input stream has been
             closed, or if some other I/O error occurs.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
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
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads up to `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes of data from the input stream into
 an array of bytes.  An attempt is made to read as many as
 `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes, but a smaller number may be read.
 The number of bytes actually read is returned as an integer.

 `],
				[/* block */ 'b', ` This method blocks until input data is available, end of file is
 detected, or an exception is thrown.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is zero, then no bytes are read and
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', ` is returned; otherwise, there is an attempt to read at
 least one byte. If no byte is available because the stream is at end of
 file, the value `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` is returned; otherwise, at least one
 byte is read and stored into `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The first byte read is stored into element `],
					[/* inline code block */ 'i', `b[off]`],
					[/* text */ 't', `, the
 next one into `],
					[/* inline code block */ 'i', `b[off+1]`],
					[/* text */ 't', `, and so on. The number of bytes read
 is, at most, equal to `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', `. Let `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` be the number of
 bytes actually read; these bytes will be stored in elements
 `],
					[/* inline code block */ 'i', `b[off]`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `b[off+`],
					[/* text */ 't', `k`],
					[/* inline code block */ 'i', `-1]`],
					[/* text */ 't', `,
 leaving elements `],
					[/* inline code block */ 'i', `b[off+`],
					[/* text */ 't', `k`],
					[/* inline code block */ 'i', `]`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `b[off+len-1]`],
					[/* text */ 't', ` unaffected.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In every case, elements `],
					[/* inline code block */ 'i', `b[0]`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `b[off-1]`],
					[/* text */ 't', ` and elements `],
					[/* inline code block */ 'i', `b[off+len]`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `b[b.length-1]`],
					[/* text */ 't', ` are unaffected.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `read(b, off, len)`],
					[/* text */ 't', ` method
 for class `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', ` simply calls the method
 `],
					[/* inline code block */ 'i', `read()`],
					[/* text */ 't', ` repeatedly. If the first such call results in an
 `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `, that exception is returned from the call to
 the `],
					[/* inline code block */ 'i', `read(b,`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `off,`],
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `len)`],
					[/* text */ 't', ` method.  If
 any subsequent call to `],
					[/* inline code block */ 'i', `read()`],
					[/* text */ 't', ` results in a
 `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `, the exception is caught and treated as if it
 were end of file; the bytes read up to that point are stored into
 `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` and the number of bytes read before the exception
 occurred is returned. The default implementation of this method blocks
 until the requested amount of input data `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` has been read,
 end of file is detected, or an exception is thrown. Subclasses are
 encouraged to provide a more efficient implementation of this method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in array `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `
                   at which the data is written.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes to read.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If the first byte cannot be read for any reason
             other than end of file, or if the input stream has been closed,
             or if some other I/O error occurs.`]
				]],
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
		[/* method */ 'readNBytes(byte[],int,int)', [
			[/* method description */
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
					[/* text */ 't', `
 `],
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
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative, `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', `
         is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `b.length - off`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes read into the buffer`]
			]
		]],
		[/* method */ 'skip(long)', [
			[/* method description */
				[/* text */ 't', `Skips over and discards `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` bytes of data from this input
 stream. The `],
				[/* inline code block */ 'i', `skip`],
				[/* text */ 't', ` method may, for a variety of reasons, end
 up skipping over some smaller number of bytes, possibly `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `.
 This may result from any of a number of conditions; reaching end of file
 before `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` bytes have been skipped is only one possibility.
 The actual number of bytes skipped is returned. If `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` is
 negative, the `],
				[/* inline code block */ 'i', `skip`],
				[/* text */ 't', ` method for class `],
				[/* inline code block */ 'i', `InputStream`],
				[/* text */ 't', ` always
 returns 0, and no bytes are skipped. Subclasses may handle the negative
 value differently.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `skip`],
					[/* text */ 't', ` method implementation of this class creates a
 byte array and then repeatedly reads into it until `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` bytes
 have been read or the end of the stream has been reached. Subclasses are
 encouraged to provide a more efficient implementation of this method.
 For instance, the implementation may depend on the ability to seek.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to be skipped.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes skipped which might be zero.`]
			]
		]],
		[/* method */ 'transferTo(java.io.OutputStream)', [
			[/* method description */
				[/* text */ 't', `Reads all bytes from this input stream and writes the bytes to the
 given output stream in the order that they are read. On return, this
 input stream will be at end of stream. This method does not close either
 stream.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method may block indefinitely reading from the input stream, or
 writing to the output stream. The behavior for the case where the input
 and/or output stream is `],
					[/* text */ 't', `asynchronously closed`],
					[/* text */ 't', `, or the thread
 interrupted during the transfer, is highly input and output stream
 specific, and therefore not specified.
 `]
				]],
				[/* block */ 'b', `
 If an I/O error occurs reading from the input stream or writing to the
 output stream, then it may do so after some bytes have been read or
 written. Consequently the input stream may not be at end of stream and
 one, or both, streams may be in an inconsistent state. It is strongly
 recommended that both streams be promptly closed if an I/O error occurs.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the output stream, non-null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs when reading or writing`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `out`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of bytes transferred`]
			]
		]],
		[/* method */ 'nullInputStream()', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `InputStream`],
				[/* text */ 't', ` that reads no bytes. The returned
 stream is initially open.  The stream is closed by calling the
 `],
				[/* inline code block */ 'i', `close()`],
				[/* text */ 't', ` method.  Subsequent calls to `],
				[/* inline code block */ 'i', `close()`],
				[/* text */ 't', ` have no
 effect.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` While the stream is open, the `],
					[/* inline code block */ 'i', `available()`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `read()`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `read(byte[])`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `read(byte[], int, int)`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `readAllBytes()`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `readNBytes(byte[], int, int)`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `readNBytes(int)`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `skip(long)`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `skipNBytes(long)`],
					[/* text */ 't', `,
 and `],
					[/* inline code block */ 'i', `transferTo()`],
					[/* text */ 't', ` methods all behave as if end of stream has been
 reached.  After the stream has been closed, these methods all throw
 `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `markSupported()`],
					[/* text */ 't', ` method returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `.  The
 `],
					[/* inline code block */ 'i', `mark()`],
					[/* text */ 't', ` method does nothing, and the `],
					[/* inline code block */ 'i', `reset()`],
					[/* text */ 't', ` method
 throws `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `InputStream`],
				[/* text */ 't', ` which contains no bytes`]
			]
		]],
		[/* method */ 'mark(int)', [
			[/* method description */
				[/* text */ 't', `Marks the current position in this input stream. A subsequent call to
 the `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', ` method repositions this stream at the last marked
 position so that subsequent reads re-read the same bytes.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `readlimit`],
					[/* text */ 't', ` arguments tells this input stream to
 allow that many bytes to be read before the mark position gets
 invalidated.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The general contract of `],
					[/* inline code block */ 'i', `mark`],
					[/* text */ 't', ` is that, if the method
 `],
					[/* inline code block */ 'i', `markSupported`],
					[/* text */ 't', ` returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, the stream somehow
 remembers all the bytes read after the call to `],
					[/* inline code block */ 'i', `mark`],
					[/* text */ 't', ` and
 stands ready to supply those same bytes again if and whenever the method
 `],
					[/* inline code block */ 'i', `reset`],
					[/* text */ 't', ` is called.  However, the stream is not required to
 remember any data at all if more than `],
					[/* inline code block */ 'i', `readlimit`],
					[/* text */ 't', ` bytes are
 read from the stream before `],
					[/* inline code block */ 'i', `reset`],
					[/* text */ 't', ` is called.

 `]
				]],
				[/* block */ 'b', ` Marking a closed stream should not have any effect on the stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `mark`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', ` does
 nothing.`]
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
					[/* text */ 't', ` The general contract of `],
					[/* inline code block */ 'i', `reset`],
					[/* text */ 't', ` is:

 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` If the method `],
						[/* inline code block */ 'i', `markSupported`],
						[/* text */ 't', ` returns
 `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `, then:

     `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', ` If the method `],
								[/* inline code block */ 'i', `mark`],
								[/* text */ 't', ` has not been called since
     the stream was created, or the number of bytes read from the stream
     since `],
								[/* inline code block */ 'i', `mark`],
								[/* text */ 't', ` was last called is larger than the argument
     to `],
								[/* inline code block */ 'i', `mark`],
								[/* text */ 't', ` at that last call, then an
     `],
								[/* inline code block */ 'i', `IOException`],
								[/* text */ 't', ` might be thrown.

     `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` If such an `],
								[/* inline code block */ 'i', `IOException`],
								[/* text */ 't', ` is not thrown, then the
     stream is reset to a state such that all the bytes read since the
     most recent call to `],
								[/* inline code block */ 'i', `mark`],
								[/* text */ 't', ` (or since the start of the
     file, if `],
								[/* inline code block */ 'i', `mark`],
								[/* text */ 't', ` has not been called) will be resupplied
     to subsequent callers of the `],
								[/* inline code block */ 'i', `read`],
								[/* text */ 't', ` method, followed by
     any bytes that otherwise would have been the next input data as of
     the time of the call to `],
								[/* inline code block */ 'i', `reset`],
								[/* text */ 't', `. `]
							]]
						]],
						[/* text */ 't', `

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If the method `],
						[/* inline code block */ 'i', `markSupported`],
						[/* text */ 't', ` returns
 `],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', `, then:

     `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', ` The call to `],
								[/* inline code block */ 'i', `reset`],
								[/* text */ 't', ` may throw an
     `],
								[/* inline code block */ 'i', `IOException`],
								[/* text */ 't', `.

     `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` If an `],
								[/* inline code block */ 'i', `IOException`],
								[/* text */ 't', ` is not thrown, then the stream
     is reset to a fixed state that depends on the particular type of the
     input stream and how it was created. The bytes that will be supplied
     to subsequent callers of the `],
								[/* inline code block */ 'i', `read`],
								[/* text */ 't', ` method depend on the
     particular type of the input stream. `]
							]]
						]]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `The method `],
					[/* inline code block */ 'i', `reset`],
					[/* text */ 't', ` for class `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', `
 does nothing except throw an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if this stream has not been marked or if the
          mark has been invalidated.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this input stream and releases any system resources associated
 with the stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `close`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', ` does
 nothing.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'skipNBytes(long)', [
			[/* method description */
				[/* text */ 't', `Skips over and discards exactly `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` bytes of data from this input
 stream.  If `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` is zero, then no bytes are skipped.
 If `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` is negative, then no bytes are skipped.
 Subclasses may handle the negative value differently.

 `],
				[/* block */ 'b', ` This method blocks until the requested number of bytes has been
 skipped, end of file is reached, or an exception is thrown.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If end of stream is reached before the stream is at the desired
 position, then an `],
					[/* inline code block */ 'i', `EOFException`],
					[/* text */ 't', ` is thrown.

 `]
				]],
				[/* block */ 'b', ` If an I/O error occurs, then the input stream may be
 in an inconsistent state. It is strongly recommended that the
 stream be promptly closed if an I/O error occurs.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to be skipped.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if end of stream is encountered before the
             stream can be positioned `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` bytes beyond its position
             when this method was invoked.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the stream cannot be positioned properly or
             if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
