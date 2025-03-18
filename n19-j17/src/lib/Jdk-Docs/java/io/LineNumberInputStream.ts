import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.LineNumberInputStream', [
	/* class description */,
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a newline number input stream that reads its input
 from the specified input stream.`]
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
		[/* method */ 'available()', [
			[/* method description */
				[/* text */ 't', `Returns the number of bytes that can be read from this input
 stream without blocking.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that if the underlying input stream is able to supply
 `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` input characters without blocking, the
 `],
					[/* inline code block */ 'i', `LineNumberInputStream`],
					[/* text */ 't', ` can guarantee only to provide
 `],
					[/* text */ 't', `k`],
					[/* text */ 't', `/2 characters without blocking, because the
 `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` characters from the underlying input stream might
 consist of `],
					[/* text */ 't', `k`],
					[/* text */ 't', `/2 pairs of `],
					[/* inline code block */ 'i', `'\\r'`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `'\\n'`],
					[/* text */ 't', `, which are converted to just
 `],
					[/* text */ 't', `k`],
					[/* text */ 't', `/2 `],
					[/* inline code block */ 'i', `'\\n'`],
					[/* text */ 't', ` characters.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of bytes that can be read from this input stream
             without blocking.`]
			]
		]],
		[/* method */ 'getLineNumber()', [
			[/* method description */
				[/* text */ 't', `Returns the current line number.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the current line number.`]
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
 The `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` method of
 `],
					[/* inline code block */ 'i', `LineNumberInputStream`],
					[/* text */ 't', ` calls the `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', `
 method of the underlying input stream. It checks for carriage
 returns and newline characters in the input, and modifies the
 current line number as appropriate. A carriage-return character or
 a carriage return followed by a newline character are both
 converted into a single newline character.`]
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
				[/* text */ 't', ` if the end of this
             stream is reached.`]
			]
		]],
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads up to `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes of data from this input stream
 into an array of bytes. This method blocks until some input is available.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` method of
 `],
					[/* inline code block */ 'i', `LineNumberInputStream`],
					[/* text */ 't', ` repeatedly calls the
 `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', ` method of zero arguments to fill in the byte array.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset of the data.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes read.`]
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
             this stream has been reached.`]
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
 possibly `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `. The actual number of bytes skipped is
 returned.  If `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` is negative, no bytes are skipped.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `skip`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `LineNumberInputStream`],
					[/* text */ 't', ` creates
 a byte array and then repeatedly reads into it until
 `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` bytes have been read or the end of the stream has
 been reached.`]
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
					[/* inline code block */ 'i', `mark`],
					[/* text */ 't', ` method of
 `],
					[/* inline code block */ 'i', `LineNumberInputStream`],
					[/* text */ 't', ` remembers the current line
 number in a private variable, and then calls the `],
					[/* inline code block */ 'i', `mark`],
					[/* text */ 't', `
 method of the underlying input stream.`]
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
 The `],
					[/* inline code block */ 'i', `reset`],
					[/* text */ 't', ` method of
 `],
					[/* inline code block */ 'i', `LineNumberInputStream`],
					[/* text */ 't', ` resets the line number to be
 the line number at the time the `],
					[/* inline code block */ 'i', `mark`],
					[/* text */ 't', ` method was
 called, and then calls the `],
					[/* inline code block */ 'i', `reset`],
					[/* text */ 't', ` method of the
 underlying input stream.
 `]
				]],
				[/* block */ 'b', `
 Stream marks are intended to be used in
 situations where you need to read ahead a little to see what's in
 the stream. Often this is most easily done by invoking some
 general parser. If the stream is of the type handled by the
 parser, it just chugs along happily. If the stream is not of
 that type, the parser should toss an exception when it fails,
 which, if it happens within readlimit bytes, allows the outer
 code to reset the stream and try another parser.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setLineNumber(int)', [
			[/* method description */
				[/* text */ 't', `Sets the line number to the specified argument.`]
			],
			[/* parameters */
				[/* parameter */ 'lineNumber', [/* parameter description */
					[/* text */ 't', `the new line number.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
