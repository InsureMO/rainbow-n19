import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.FilterInputStream', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `FilterInputStream`],
		[/* text */ 't', ` contains
 some other input stream, which it uses as
 its  basic source of data, possibly transforming
 the data along the way or providing  additional
 functionality. The class `],
		[/* inline code block */ 'i', `FilterInputStream`],
		[/* text */ 't', `
 itself simply overrides all  methods of
 `],
		[/* inline code block */ 'i', `InputStream`],
		[/* text */ 't', ` with versions that
 pass all requests to the contained  input
 stream. Subclasses of `],
		[/* inline code block */ 'i', `FilterInputStream`],
		[/* text */ 't', `
 may further override some of  these methods
 and may also provide additional methods
 and fields.`]
	],
	[/* fields */
		[/* field */ 'in', [
			[/* field description */
				[/* text */ 't', `The input stream to be filtered.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `FilterInputStream`],
				[/* text */ 't', `
 by assigning the  argument `],
				[/* inline code block */ 'i', `in`],
				[/* text */ 't', `
 to the field `],
				[/* inline code block */ 'i', `this.in`],
				[/* text */ 't', ` so as
 to remember it for later use.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the underlying input stream, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if
          this instance is to be created without an underlying stream.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'markSupported()', [
			[/* method description */
				[/* text */ 't', `Tests if this input stream supports the `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', `
 and `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', ` methods.
 This method
 simply performs `],
				[/* inline code block */ 'i', `in.markSupported()`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this stream type supports the
          `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', ` method;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'available()', [
			[/* method description */
				[/* text */ 't', `Returns an estimate of the number of bytes that can be read (or
 skipped over) from this input stream without blocking by the next
 caller of a method for this input stream. The next caller might be
 the same thread or another thread.  A single read or skip of this
 many bytes will not block, but may read or skip fewer bytes.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns the result of `],
					[/* text */ 't', `in`],
					[/* text */ 't', `.available().`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an estimate of the number of bytes that can be read (or skipped
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
				[/* text */ 't', ` is returned. This method blocks until input data
 is available, the end of the stream is detected, or an exception
 is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method
 simply performs `],
					[/* inline code block */ 'i', `in.read()`],
					[/* text */ 't', ` and returns the result.`]
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
		[/* method */ 'read(byte[])', [
			[/* method description */
				[/* text */ 't', `Reads up to `],
				[/* inline code block */ 'i', `b.length`],
				[/* text */ 't', ` bytes of data from this
 input stream into an array of bytes. This method blocks until some
 input is available.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method simply performs the call
 `],
					[/* inline code block */ 'i', `read(b, 0, b.length)`],
					[/* text */ 't', ` and returns
 the  result. It is important that it does
 `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` do `],
					[/* inline code block */ 'i', `in.read(b)`],
					[/* text */ 't', ` instead;
 certain subclasses of  `],
					[/* inline code block */ 'i', `FilterInputStream`],
					[/* text */ 't', `
 depend on the implementation strategy actually
 used.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
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
				[/* text */ 't', ` bytes of data from this input stream
 into an array of bytes. If `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` is not zero, the method
 blocks until some input is available; otherwise, no
 bytes are read and `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` is returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method simply performs `],
					[/* inline code block */ 'i', `in.read(b, off, len)`],
					[/* text */ 't', `
 and returns the result.`]
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
					[/* text */ 't', `if an I/O error occurs.`]
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
				[/* text */ 't', ` bytes of data from the
 input stream. The `],
				[/* inline code block */ 'i', `skip`],
				[/* text */ 't', ` method may, for a variety of
 reasons, end up skipping over some smaller number of bytes,
 possibly `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `. The actual number of bytes skipped is
 returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method simply performs `],
					[/* inline code block */ 'i', `in.skip(n)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to be skipped.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `in.skip(n)`],
					[/* text */ 't', ` throws an IOException.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes skipped.`]
			]
		]],
		[/* method */ 'mark(int)', [
			[/* method description */
				[/* text */ 't', `Marks the current position in this input stream. A subsequent
 call to the `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', ` method repositions this stream at
 the last marked position so that subsequent reads re-read the same bytes.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `readlimit`],
					[/* text */ 't', ` argument tells this input stream to
 allow that many bytes to be read before the mark position gets
 invalidated.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method simply performs `],
					[/* inline code block */ 'i', `in.mark(readlimit)`],
					[/* text */ 't', `.`]
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
					[/* text */ 't', `
 This method
 simply performs `],
					[/* inline code block */ 'i', `in.reset()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Stream marks are intended to be used in
 situations where you need to read ahead a little to see what's in
 the stream. Often this is most easily done by invoking some
 general parser. If the stream is of the type handled by the
 parse, it just chugs along happily. If the stream is not of
 that type, the parser should toss an exception when it fails.
 If this happens within readlimit bytes, it allows the outer
 code to reset the stream and try another parser.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the stream has not been marked or if the
               mark has been invalidated.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this input stream and releases any system resources
 associated with the stream.
 This
 method simply performs `],
				[/* inline code block */ 'i', `in.close()`],
				[/* text */ 't', `.`]
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
