import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.SequenceInputStream', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `SequenceInputStream`],
		[/* text */ 't', ` represents
 the logical concatenation of other input
 streams. It starts out with an ordered
 collection of input streams and reads from
 the first one until end of file is reached,
 whereupon it reads from the second one,
 and so on, until end of file is reached
 on the last of the contained input streams.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.io.InputStream,java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Initializes a newly
 created `],
				[/* inline code block */ 'i', `SequenceInputStream`],
				[/* text */ 't', `
 by remembering the two arguments, which
 will be read in order, first `],
				[/* inline code block */ 'i', `s1`],
				[/* text */ 't', `
 and then `],
				[/* inline code block */ 'i', `s2`],
				[/* text */ 't', `, to provide the
 bytes to be read from this `],
				[/* inline code block */ 'i', `SequenceInputStream`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 's1', [/* parameter description */
					[/* text */ 't', `the first input stream to read.`]
				]],
				[/* parameter */ 's2', [/* parameter description */
					[/* text */ 't', `the second input stream to read.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.Enumeration)', [
			[/* constructor description */
				[/* text */ 't', `Initializes a newly created `],
				[/* inline code block */ 'i', `SequenceInputStream`],
				[/* text */ 't', `
 by remembering the argument, which must
 be an `],
				[/* inline code block */ 'i', `Enumeration`],
				[/* text */ 't', `  that produces
 objects whose run-time type is `],
				[/* inline code block */ 'i', `InputStream`],
				[/* text */ 't', `.
 The input streams that are  produced by
 the enumeration will be read, in order,
 to provide the bytes to be read  from this
 `],
				[/* inline code block */ 'i', `SequenceInputStream`],
				[/* text */ 't', `. After
 each input stream from the enumeration
 is exhausted, it is closed by calling its
 `],
				[/* inline code block */ 'i', `close`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'e', [/* parameter description */
					[/* text */ 't', `an enumeration of input streams.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'available()', [
			[/* method description */
				[/* text */ 't', `Returns an estimate of the number of bytes that can be read (or
 skipped over) from the current underlying input stream without
 blocking by the next invocation of a method for the current
 underlying input stream. The next invocation might be
 the same thread or another thread.  A single read or skip of this
 many bytes will not block, but may read or skip fewer bytes.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method simply calls `],
					[/* inline code block */ 'i', `available`],
					[/* text */ 't', ` of the current underlying
 input stream and returns the result.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an estimate of the number of bytes that can be read (or
           skipped over) from the current underlying input stream
           without blocking or `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this input stream
           has been closed by invoking its `],
				[/* reference */ 'r', `#close()`, `close()`],
				[/* text */ 't', ` method`]
			]
		]],
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Reads the next byte of data from this input stream. The byte is
 returned as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` in the range `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` to
 `],
				[/* inline code block */ 'i', `255`],
				[/* text */ 't', `. If no byte is available because the end of the
 stream has been reached, the value `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.
 This method blocks until input data is available, the end of the
 stream is detected, or an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method
 tries to read one character from the current substream. If it
 reaches the end of the stream, it calls the `],
					[/* inline code block */ 'i', `close`],
					[/* text */ 't', `
 method of the current substream and begins reading from the next
 substream.`]
				]]
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
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads up to `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes of data from this input stream
 into an array of bytes.  If `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` is not zero, the method
 blocks until at least 1 byte of input is available; otherwise, no
 bytes are read and `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` is returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `SequenceInputStream`],
					[/* text */ 't', `
 tries to read the data from the current substream. If it fails to
 read any characters because the substream has reached the end of
 the stream, it calls the `],
					[/* inline code block */ 'i', `close`],
					[/* text */ 't', ` method of the current
 substream and begins reading from the next substream.`]
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
					[/* text */ 't', ` is
             greater than `],
					[/* inline code block */ 'i', `b.length - off`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `int   the number of bytes read.`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this input stream and releases any system resources
 associated with the stream.
 A closed `],
				[/* inline code block */ 'i', `SequenceInputStream`],
				[/* text */ 't', `
 cannot  perform input operations and cannot
 be reopened.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this stream was created
 from an enumeration, all remaining elements
 are requested from the enumeration and closed
 before the `],
					[/* inline code block */ 'i', `close`],
					[/* text */ 't', ` method returns.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
