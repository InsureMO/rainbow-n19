import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.BufferedReader', [
	[/* class description */
		[/* text */ 't', `Reads text from a character-input stream, buffering characters so as to
 provide for the efficient reading of characters, arrays, and lines.

 `],
		[/* block */ 'b', ` The buffer size may be specified, or the default size may be used.  The
 default is large enough for most purposes.

 `],
		[/* block */ 'b', ` In general, each read request made of a Reader causes a corresponding
 read request to be made of the underlying character or byte stream.  It is
 therefore advisable to wrap a BufferedReader around any Reader whose read()
 operations may be costly, such as FileReaders and InputStreamReaders.  For
 example,

 `],
		[/* code block */ 'c', ` BufferedReader in
   = new BufferedReader(new FileReader("foo.in"));
 `],
		[/* text */ 't', `

 will buffer the input from the specified file.  Without buffering, each
 invocation of read() or readLine() could cause bytes to be read from the
 file, converted into characters, and then returned, which can be very
 inefficient.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Programs that use DataInputStreams for textual input can be localized by
 replacing each DataInputStream with an appropriate BufferedReader.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.Reader,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a buffering character-input stream that uses an input buffer of
 the specified size.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `A Reader`]
				]],
				[/* parameter */ 'sz', [/* parameter description */
					[/* text */ 't', `Input-buffer size`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `sz <= 0`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.Reader)', [
			[/* constructor description */
				[/* text */ 't', `Creates a buffering character-input stream that uses a default-sized
 input buffer.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `A Reader`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'lines()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', `, the elements of which are lines read from
 this `],
				[/* inline code block */ 'i', `BufferedReader`],
				[/* text */ 't', `.  The `],
				[/* reference */ 'r', `java.util.stream.Stream`],
				[/* text */ 't', ` is lazily populated,
 i.e., read only occurs during the
 `],
				[/* text */ 't', `terminal stream operation`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` The reader must not be operated on during the execution of the
 terminal stream operation. Otherwise, the result of the terminal stream
 operation is undefined.

 `],
				[/* block */ 'b', ` After execution of the terminal stream operation there are no
 guarantees that the reader will be at a specific position from which to
 read the next character or line.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If an `],
					[/* reference */ 'r', `java.io.IOException`],
					[/* text */ 't', ` is thrown when accessing the underlying
 `],
					[/* inline code block */ 'i', `BufferedReader`],
					[/* text */ 't', `, it is wrapped in an `],
					[/* reference */ 'r', `java.io.UncheckedIOException`],
					[/* text */ 't', ` which will be thrown from the `],
					[/* inline code block */ 'i', `Stream`],
					[/* text */ 't', `
 method that caused the read to take place. This method will return a
 Stream if invoked on a BufferedReader that is closed. Any operation on
 that stream that requires reading from the BufferedReader after it is
 closed, will cause an UncheckedIOException to be thrown.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Stream<String>`],
				[/* text */ 't', ` providing the lines of text
         described by this `],
				[/* inline code block */ 'i', `BufferedReader`]
			]
		]],
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Reads a single character.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The character read, as an integer in the range
         0 to 65535 (`],
				[/* inline code block */ 'i', `0x00-0xffff`],
				[/* text */ 't', `), or -1 if the
         end of the stream has been reached`]
			]
		]],
		[/* method */ 'read(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads characters into a portion of an array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method implements the general contract of the corresponding
 `],
					[/* reference */ 'r', `.Reader#read(char[],int,int)`],
					[/* text */ 't', ` method of the
 `],
					[/* reference */ 'r', `java.io.Reader`],
					[/* text */ 't', ` class.  As an additional convenience, it
 attempts to read as many characters as possible by repeatedly invoking
 the `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` method of the underlying stream.  This iterated
 `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` continues until one of the following conditions becomes
 true:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', ` The specified number of characters have been read,

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
						[/* inline code block */ 'i', `ready`],
						[/* text */ 't', ` method of the underlying stream
   returns `],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', `, indicating that further input requests
   would block.

 `]
					]]
				]],
				[/* text */ 't', `
 If the first `],
				[/* inline code block */ 'i', `read`],
				[/* text */ 't', ` on the underlying stream returns
 `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` to indicate end-of-file then this method returns
 `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `.  Otherwise this method returns the number of characters
 actually read.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` Subclasses of this class are encouraged, but not required, to
 attempt to read as many characters as possible in the same fashion.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Ordinarily this method takes characters from this stream's character
 buffer, filling it from the underlying stream as necessary.  If,
 however, the buffer is empty, the mark is not valid, and the requested
 length is at least as large as the buffer, then this method will read
 characters directly from the underlying stream into the given array.
 Thus redundant `],
					[/* inline code block */ 'i', `BufferedReader`],
					[/* text */ 't', `s will not copy data
 unnecessarily.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cbuf', [/* parameter description */
					[/* text */ 't', `Destination buffer`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `Offset at which to start storing characters`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `Maximum number of characters to read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative,
             or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `cbuf.length - off`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of characters read, or -1 if the end of the
             stream has been reached`]
			]
		]],
		[/* method */ 'readLine()', [
			[/* method description */
				[/* text */ 't', `Reads a line of text.  A line is considered to be terminated by any one
 of a line feed ('\\n'), a carriage return ('\\r'), a carriage return
 followed immediately by a line feed, or by reaching the end-of-file
 (EOF).`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A String containing the contents of the line, not including
             any line-termination characters, or null if the end of the
             stream has been reached without reading any characters`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* block */ 'b', `Closes the stream and releases any system resources associated with
 it.  Once the stream has been closed, further read(), ready(),
 mark(), reset(), or skip() invocations will throw an IOException.
 Closing a previously closed stream has no effect.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'mark(int)', [
			[/* method description */
				[/* text */ 't', `Marks the present position in the stream.  Subsequent calls to reset()
 will attempt to reposition the stream to this point.`]
			],
			[/* parameters */
				[/* parameter */ 'readAheadLimit', [/* parameter description */
					[/* text */ 't', `Limit on the number of characters that may be
                         read while still preserving the mark. An attempt
                         to reset the stream after reading characters
                         up to this limit or beyond may fail.
                         A limit value larger than the size of the input
                         buffer will cause a new buffer to be allocated
                         whose size is no smaller than limit.
                         Therefore large values should be used with care.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `readAheadLimit < 0`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'skip(long)', UDF],
		[/* method */ 'markSupported()', [
			[/* method description */
				[/* text */ 't', `Tells whether this stream supports the mark() operation, which it does.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if and only if this stream supports the mark operation.`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets the stream to the most recent mark.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If the stream has never been marked,
                          or if the mark has been invalidated`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'ready()', [
			[/* method description */
				[/* text */ 't', `Tells whether this stream is ready to be read.  A buffered character
 stream is ready if the buffer is not empty, or if the underlying
 character stream is ready.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `True if the next read() is guaranteed not to block for input,
 false otherwise.  Note that returning false does not guarantee that the
 next read will block.`]
			]
		]]
	],
]);
