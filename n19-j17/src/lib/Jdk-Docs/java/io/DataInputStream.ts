import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.DataInputStream', [
	[/* class description */
		[/* text */ 't', `A data input stream lets an application read primitive Java data
 types from an underlying input stream in a machine-independent
 way. An application uses a data output stream to write data that
 can later be read by a data input stream.
 `],
		[/* block */ 'b', `
 A DataInputStream is not safe for use by multiple concurrent
 threads. If a DataInputStream is to be used by more than one
 thread then access to the data input stream should be controlled
 by appropriate synchronization.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a DataInputStream that uses the specified
 underlying InputStream.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the specified input stream`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'readBoolean()', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `readBoolean`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes for this operation are read from the contained
 input stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this input stream has reached the end.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `the stream has been closed and the contained
             input stream does not support reading after close, or
             another I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value read.`]
			]
		]],
		[/* method */ 'readByte()', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `readByte`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes
 for this operation are read from the contained
 input stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this input stream has reached the end.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `the stream has been closed and the contained
             input stream does not support reading after close, or
             another I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next byte of this input stream as a signed 8-bit
             `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'readChar()', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `readChar`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes
 for this operation are read from the contained
 input stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this input stream reaches the end before
               reading two bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `the stream has been closed and the contained
             input stream does not support reading after close, or
             another I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next two bytes of this input stream, interpreted as a
             `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'readDouble()', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `readDouble`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes
 for this operation are read from the contained
 input stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this input stream reaches the end before
               reading eight bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `the stream has been closed and the contained
             input stream does not support reading after close, or
             another I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next eight bytes of this input stream, interpreted as a
             `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'readFloat()', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `readFloat`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes
 for this operation are read from the contained
 input stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this input stream reaches the end before
               reading four bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `the stream has been closed and the contained
             input stream does not support reading after close, or
             another I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next four bytes of this input stream, interpreted as a
             `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'read(byte[])', [
			[/* method description */
				[/* text */ 't', `Reads some number of bytes from the contained input stream and
 stores them into the buffer array `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `. The number of
 bytes actually read is returned as an integer. This method blocks
 until input data is available, end of file is detected, or an
 exception is thrown.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is null, a `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` is
 thrown. If the length of `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is zero, then no bytes are
 read and `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', ` is returned; otherwise, there is an attempt
 to read at least one byte. If no byte is available because the
 stream is at end of file, the value `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` is returned;
 otherwise, at least one byte is read and stored into `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The first byte read is stored into element `],
					[/* inline code block */ 'i', `b[0]`],
					[/* text */ 't', `, the
 next one into `],
					[/* inline code block */ 'i', `b[1]`],
					[/* text */ 't', `, and so on. The number of bytes read
 is, at most, equal to the length of `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `. Let `],
					[/* inline code block */ 'i', `k`],
					[/* text */ 't', `
 be the number of bytes actually read; these bytes will be stored in
 elements `],
					[/* inline code block */ 'i', `b[0]`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `b[k-1]`],
					[/* text */ 't', `, leaving
 elements `],
					[/* inline code block */ 'i', `b[k]`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `b[b.length-1]`],
					[/* text */ 't', `
 unaffected.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `read(b)`],
					[/* text */ 't', ` method has the same effect as:
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` read(b, 0, b.length)
 `]
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
					[/* text */ 't', `if the first byte cannot be read for any reason
             other than end of file, the stream has been closed and the underlying
             input stream does not support reading after close, or another I/O
             error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the total number of bytes read into the buffer, or
             `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there is no more data because the end
             of the stream has been reached.`]
			]
		]],
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads up to `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes of data from the contained
 input stream into an array of bytes.  An attempt is made to read
 as many as `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes, but a smaller number may be read,
 possibly zero. The number of bytes actually read is returned as an
 integer.

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
					[/* inline code block */ 'i', `b[off]`],
					[/* text */ 't', ` and elements `],
					[/* inline code block */ 'i', `b[off+len]`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `b[b.length-1]`],
					[/* text */ 't', ` are unaffected.`]
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
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the first byte cannot be read for any reason
             other than end of file, the stream has been closed and the underlying
             input stream does not support reading after close, or another I/O
             error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the total number of bytes read into the buffer, or
             `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there is no more data because the end
             of the stream has been reached.`]
			]
		]],
		[/* method */ 'readInt()', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `readInt`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes
 for this operation are read from the contained
 input stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this input stream reaches the end before
               reading four bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `the stream has been closed and the contained
             input stream does not support reading after close, or
             another I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next four bytes of this input stream, interpreted as an
             `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'readUnsignedByte()', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `readUnsignedByte`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes
 for this operation are read from the contained
 input stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this input stream has reached the end.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `the stream has been closed and the contained
             input stream does not support reading after close, or
             another I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next byte of this input stream, interpreted as an
             unsigned 8-bit number.`]
			]
		]],
		[/* method */ 'readUnsignedShort()', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `readUnsignedShort`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes
 for this operation are read from the contained
 input stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this input stream reaches the end before
             reading two bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `the stream has been closed and the contained
             input stream does not support reading after close, or
             another I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next two bytes of this input stream, interpreted as an
             unsigned 16-bit integer.`]
			]
		]],
		[/* method */ 'skipBytes(int)', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `skipBytes`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes for this operation are read from the contained
 input stream.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to be skipped.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the contained input stream does not support
             seek, or the stream has been closed and
             the contained input stream does not support
             reading after close, or another I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes skipped.`]
			]
		]],
		[/* method */ 'readLine()', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `readLine`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes
 for this operation are read from the contained
 input stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next line of text from this input stream.`]
			]
		]],
		[/* method */ 'readUTF()', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `readUTF`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes
 for this operation are read from the contained
 input stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this input stream reaches the end before
               reading all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `the stream has been closed and the contained
             input stream does not support reading after close, or
             another I/O error occurs.`]
				]],
				[/* throw */ 'java.io.UTFDataFormatException', [/* throw description */
					[/* text */ 't', `if the bytes do not represent a valid
             modified UTF-8 encoding of a string.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a Unicode string.`]
			]
		]],
		[/* method */ 'readLong()', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `readLong`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes
 for this operation are read from the contained
 input stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this input stream reaches the end before
               reading eight bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `the stream has been closed and the contained
             input stream does not support reading after close, or
             another I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next eight bytes of this input stream, interpreted as a
             `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'readShort()', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `readShort`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes
 for this operation are read from the contained
 input stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this input stream reaches the end before
               reading two bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `the stream has been closed and the contained
             input stream does not support reading after close, or
             another I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next two bytes of this input stream, interpreted as a
             signed 16-bit number.`]
			]
		]],
		[/* method */ 'readFully(byte[])', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `readFully`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes
 for this operation are read from the contained
 input stream.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this input stream reaches the end before
          reading all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `the stream has been closed and the contained
          input stream does not support reading after close, or
          another I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'readFully(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `See the general contract of the `],
				[/* inline code block */ 'i', `readFully`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Bytes
 for this operation are read from the contained
 input stream.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the data array `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of bytes to read.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative,
             `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is greater than
             `],
					[/* inline code block */ 'i', `b.length - off`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if this input stream reaches the end before
             reading all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `the stream has been closed and the contained
             input stream does not support reading after close, or
             another I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'readUTF(java.io.DataInput)', [
			[/* method description */
				[/* text */ 't', `Reads from the
 stream `],
				[/* inline code block */ 'i', `in`],
				[/* text */ 't', ` a representation
 of a Unicode  character string encoded in
 `],
				[/* reference */ 'r', `java.io.DataInput#modified-utf-8`, `modified UTF-8`],
				[/* text */ 't', ` format;
 this string of characters is then returned as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.
 The details of the modified UTF-8 representation
 are  exactly the same as for the `],
				[/* inline code block */ 'i', `readUTF`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `DataInput`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `a data input stream.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `if the input stream reaches the end
               before all the bytes.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `the stream has been closed and the contained
             input stream does not support reading after close, or
             another I/O error occurs.`]
				]],
				[/* throw */ 'java.io.UTFDataFormatException', [/* throw description */
					[/* text */ 't', `if the bytes do not represent a
               valid modified UTF-8 encoding of a Unicode string.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a Unicode string.`]
			]
		]]
	],
]);
