import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.PipedInputStream', [
	[/* class description */
		[/* text */ 't', `A piped input stream should be connected
 to a piped output stream; the piped  input
 stream then provides whatever data bytes
 are written to the piped output  stream.
 Typically, data is read from a `],
		[/* inline code block */ 'i', `PipedInputStream`],
		[/* text */ 't', `
 object by one thread  and data is written
 to the corresponding `],
		[/* inline code block */ 'i', `PipedOutputStream`],
		[/* text */ 't', `
 by some  other thread. Attempting to use
 both objects from a single thread is not
 recommended, as it may deadlock the thread.
 The piped input stream contains a buffer,
 decoupling read operations from write operations,
 within limits.
 A pipe is said to be `],
		[/* text */ 't', `broken`],
		[/* text */ 't', ` if a
 thread that was providing data bytes to the connected
 piped output stream is no longer alive.`]
	],
	[/* fields */
		[/* field */ 'PIPE_SIZE', [
			[/* field description */
				[/* text */ 't', `The default size of the pipe's circular input buffer.`]
			],
		]],
		[/* field */ 'buffer', [
			[/* field description */
				[/* text */ 't', `The circular buffer into which incoming data is placed.`]
			],
		]],
		[/* field */ 'in', [
			[/* field description */
				[/* text */ 't', `The index of the position in the circular buffer at which the
 next byte of data will be stored when received from the connected
 piped output stream. `],
				[/* inline code block */ 'i', `in < 0`],
				[/* text */ 't', ` implies the buffer is empty,
 `],
				[/* inline code block */ 'i', `in == out`],
				[/* text */ 't', ` implies the buffer is full`]
			],
		]],
		[/* field */ 'out', [
			[/* field description */
				[/* text */ 't', `The index of the position in the circular buffer at which the next
 byte of data will be read by this piped input stream.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PipedInputStream`],
				[/* text */ 't', ` so that it is not yet
 `],
				[/* reference */ 'r', `#connect(java.io.PipedOutputStream)`, `connected`],
				[/* text */ 't', ` and
 uses the specified pipe size for the pipe's buffer.
 It must be `],
				[/* reference */ 'r', `.PipedOutputStream#connect(java.io.PipedInputStream)`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `PipedOutputStream`],
				[/* text */ 't', ` before being used.`]
			],
			[/* parameters */
				[/* parameter */ 'pipeSize', [/* parameter description */
					[/* text */ 't', `the size of the pipe's buffer.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pipeSize <= 0`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PipedInputStream`],
				[/* text */ 't', ` so
 that it is not yet `],
				[/* reference */ 'r', `#connect(java.io.PipedOutputStream)`, `connected`],
				[/* text */ 't', `.
 It must be `],
				[/* reference */ 'r', `.PipedOutputStream#connect(java.io.PipedInputStream)`],
				[/* text */ 't', ` to a
 `],
				[/* inline code block */ 'i', `PipedOutputStream`],
				[/* text */ 't', ` before being used.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.PipedOutputStream,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PipedInputStream`],
				[/* text */ 't', ` so that it is
 connected to the piped output stream
 `],
				[/* inline code block */ 'i', `src`],
				[/* text */ 't', ` and uses the specified pipe size for
 the pipe's buffer.
 Data bytes written to `],
				[/* inline code block */ 'i', `src`],
				[/* text */ 't', ` will then
 be available as input from this stream.`]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `the stream to connect to.`]
				]],
				[/* parameter */ 'pipeSize', [/* parameter description */
					[/* text */ 't', `the size of the pipe's buffer.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pipeSize <= 0`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.PipedOutputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PipedInputStream`],
				[/* text */ 't', ` so
 that it is connected to the piped output
 stream `],
				[/* inline code block */ 'i', `src`],
				[/* text */ 't', `. Data bytes written
 to `],
				[/* inline code block */ 'i', `src`],
				[/* text */ 't', ` will then be  available
 as input from this stream.`]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `the stream to connect to.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads up to `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes of data from this piped input
 stream into an array of bytes. Less than `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes
 will be read if the end of the data stream is reached or if
 `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` exceeds the pipe's buffer size.
 If `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` is zero, then no bytes are read and 0 is returned;
 otherwise, the method blocks until at least 1 byte of input is
 available, end of the stream has been detected, or an exception is
 thrown.`]
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
					[/* text */ 't', `if the pipe is `],
					[/* text */ 't', `broken`],
					[/* text */ 't', `,
           `],
					[/* reference */ 'r', `#connect(java.io.PipedOutputStream)`, `unconnected`],
					[/* text */ 't', `,
           closed, or if an I/O error occurs.`]
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
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Reads the next byte of data from this piped input stream. The
 value byte is returned as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` in the range
 `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `255`],
				[/* text */ 't', `.
 This method blocks until input data is available, the end of the
 stream is detected, or an exception is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the pipe is
           `],
					[/* reference */ 'r', `#connect(java.io.PipedOutputStream)`, `unconnected`],
					[/* text */ 't', `,
           `],
					[/* text */ 't', `broken`],
					[/* text */ 't', `, closed,
           or if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next byte of data, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the end of the
           stream is reached.`]
			]
		]],
		[/* method */ 'connect(java.io.PipedOutputStream)', [
			[/* method description */
				[/* text */ 't', `Causes this piped input stream to be connected
 to the piped  output stream `],
				[/* inline code block */ 'i', `src`],
				[/* text */ 't', `.
 If this object is already connected to some
 other piped output  stream, an `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', `
 is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `src`],
					[/* text */ 't', ` is an
 unconnected piped output stream and `],
					[/* inline code block */ 'i', `snk`],
					[/* text */ 't', `
 is an unconnected piped input stream, they
 may be connected by either the call:

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `snk.connect(src)`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 or the call:

 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `src.connect(snk)`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The two calls have the same effect.`]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The piped output stream to connect to.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this piped input stream and releases any system resources
 associated with the stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'available()', [
			[/* method description */
				[/* text */ 't', `Returns the number of bytes that can be read from this input
 stream without blocking.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of bytes that can be read from this input stream
         without blocking, or `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this input stream has been
         closed by invoking its `],
				[/* reference */ 'r', `#close()`, `close()`],
				[/* text */ 't', ` method, or if the pipe
         is `],
				[/* reference */ 'r', `#connect(java.io.PipedOutputStream)`, `unconnected`],
				[/* text */ 't', `, or
         `],
				[/* text */ 't', `broken`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'receive(int)', [
			[/* method description */
				[/* text */ 't', `Receives a byte of data.  This method will block if no input is
 available.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the byte being received`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If the pipe is `],
					[/* text */ 't', `broken`],
					[/* text */ 't', `,
          `],
					[/* reference */ 'r', `#connect(java.io.PipedOutputStream)`, `unconnected`],
					[/* text */ 't', `,
          closed, or if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
