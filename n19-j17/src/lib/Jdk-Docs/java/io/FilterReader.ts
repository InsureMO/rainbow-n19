import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.FilterReader', [
	[/* class description */
		[/* text */ 't', `Abstract class for reading filtered character streams.
 The abstract class `],
		[/* inline code block */ 'i', `FilterReader`],
		[/* text */ 't', ` itself
 provides default methods that pass all requests to
 the contained stream. Subclasses of `],
		[/* inline code block */ 'i', `FilterReader`],
		[/* text */ 't', `
 should override some of these methods and may also provide
 additional methods and fields.`]
	],
	[/* fields */
		[/* field */ 'in', [
			[/* field description */
				[/* text */ 't', `The underlying character-input stream.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.Reader)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new filtered reader.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `a Reader object providing the underlying stream.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `in`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'markSupported()', [
			[/* method description */
				[/* text */ 't', `Tells whether this stream supports the mark() operation.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if and only if this stream supports the mark operation.`]
			]
		]],
		[/* method */ 'ready()', [
			[/* method description */
				[/* text */ 't', `Tells whether this stream is ready to be read.`]
			],
			/* parameters */,
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
		]],
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Reads a single character.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The character read, as an integer in the range 0 to 65535
             (`],
				[/* inline code block */ 'i', `0x00-0xffff`],
				[/* text */ 't', `), or -1 if the end of the stream has
             been reached`]
			]
		]],
		[/* method */ 'read(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads characters into a portion of an array.  This method will block
 until some input is available, an I/O error occurs, or the end of the
 stream is reached.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is zero, then no characters are read and `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', ` is
 returned; otherwise, there is an attempt to read at least one character.
 If no character is available because the stream is at its end, the value
 `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` is returned; otherwise, at least one character is read and
 stored into `],
					[/* inline code block */ 'i', `cbuf`],
					[/* text */ 't', `.`]
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
		[/* method */ 'skip(long)', [
			[/* method description */
				[/* text */ 't', `Skips characters.  This method will block until some characters are
 available, an I/O error occurs, or the end of the stream is reached.
 If the stream is already at its end before this method is invoked,
 then no characters are skipped and zero is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `The number of characters to skip`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` is negative and the
             contained `],
					[/* inline code block */ 'i', `Reader`],
					[/* text */ 't', `'s `],
					[/* inline code block */ 'i', `skip`],
					[/* text */ 't', ` method throws an
             IllegalArgumentException for a negative parameter`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of characters actually skipped`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* block */ 'b', `Closes the stream and releases any system resources associated with
 it.  Once the stream has been closed, further read(), ready(),
 mark(), reset(), or skip() invocations will throw an IOException.
 Closing a previously closed stream has no effect.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'mark(int)', [
			[/* method description */
				[/* text */ 't', `Marks the present position in the stream.`]
			],
			[/* parameters */
				[/* parameter */ 'readAheadLimit', [/* parameter description */
					[/* text */ 't', `Limit on the number of characters that may be
                         read while still preserving the mark.  After
                         reading this many characters, attempting to
                         reset the stream may fail.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets the stream.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
