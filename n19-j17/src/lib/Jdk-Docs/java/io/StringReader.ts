import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.StringReader', [
	[/* class description */
		[/* text */ 't', `A character stream whose source is a string.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new string reader.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `String providing the character stream.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
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
		[/* method */ 'ready()', [
			[/* method description */
				[/* text */ 't', `Tells whether this stream is ready to be read.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If the stream is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `True if the next read() is guaranteed not to block for input`]
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
				[/* text */ 't', `The character read, or -1 if the end of the stream has been
             reached`]
			]
		]],
		[/* method */ 'read(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads characters into a portion of an array.

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
				[/* text */ 't', `Skips characters. If the stream is already at its end before this method
 is invoked, then no characters are skipped and zero is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` parameter may be negative, even though the
 `],
					[/* inline code block */ 'i', `skip`],
					[/* text */ 't', ` method of the `],
					[/* reference */ 'r', `java.io.Reader`],
					[/* text */ 't', ` superclass throws
 an exception in this case. Negative values of `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` cause the
 stream to skip backwards. Negative return values indicate a skip
 backwards. It is not possible to skip backwards past the beginning of
 the string.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the entire string has been read or skipped, then this method has
 no effect and always returns `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `The number of characters to skip`]
				]]
			],
			[/* throws */
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
				[/* text */ 't', `Closes the stream and releases any system resources associated with
 it. Once the stream has been closed, further read(),
 ready(), mark(), or reset() invocations will throw an IOException.
 Closing a previously closed stream has no effect. This method will block
 while there is another thread blocking on the reader.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'mark(int)', [
			[/* method description */
				[/* text */ 't', `Marks the present position in the stream.  Subsequent calls to reset()
 will reposition the stream to this point.`]
			],
			[/* parameters */
				[/* parameter */ 'readAheadLimit', [/* parameter description */
					[/* text */ 't', `Limit on the number of characters that may be
                         read while still preserving the mark.  Because
                         the stream's input comes from a string, there
                         is no actual limit, so this argument must not
                         be negative, but is otherwise ignored.`]
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
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets the stream to the most recent mark, or to the beginning of the
 string if it has never been marked.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
