import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.PushbackReader', [
	[/* class description */
		[/* text */ 't', `A character-stream reader that allows characters to be pushed back into the
 stream.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.Reader,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new pushback reader with a pushback buffer of the given size.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `The reader from which characters will be read`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `The size of the pushback buffer`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `size <= 0`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.Reader)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new pushback reader with a one-character pushback buffer.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `The reader from which characters will be read`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
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
		[/* method */ 'read(char[],int,int)', UDF],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes the stream and releases any system resources associated with
 it. Once the stream has been closed, further read(),
 unread(), ready(), or skip() invocations will throw an IOException.
 Closing a previously closed stream has no effect. This method will block
 while there is another thread blocking on the reader.`]
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
				[/* text */ 't', `Marks the present position in the stream. The `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', `
 for class `],
				[/* inline code block */ 'i', `PushbackReader`],
				[/* text */ 't', ` always throws an exception.`]
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
					[/* text */ 't', `Always, since mark is not supported`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'skip(long)', UDF],
		[/* method */ 'markSupported()', [
			[/* method description */
				[/* text */ 't', `Tells whether this stream supports the mark() operation, which it does
 not.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if and only if this stream supports the mark operation.`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets the stream. The `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', ` method of
 `],
				[/* inline code block */ 'i', `PushbackReader`],
				[/* text */ 't', ` always throws an exception.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `Always, since reset is not supported`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'unread(char[])', [
			[/* method description */
				[/* text */ 't', `Pushes back an array of characters by copying it to the front of the
 pushback buffer.  After this method returns, the next character to be
 read will have the value `],
				[/* inline code block */ 'i', `cbuf[0]`],
				[/* text */ 't', `, the character after that
 will have the value `],
				[/* inline code block */ 'i', `cbuf[1]`],
				[/* text */ 't', `, and so forth.`]
			],
			[/* parameters */
				[/* parameter */ 'cbuf', [/* parameter description */
					[/* text */ 't', `Character array to push back`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If there is insufficient room in the pushback
                          buffer, or if some other I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'unread(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Pushes back a portion of an array of characters by copying it to the
 front of the pushback buffer.  After this method returns, the next
 character to be read will have the value `],
				[/* inline code block */ 'i', `cbuf[off]`],
				[/* text */ 't', `, the
 character after that will have the value `],
				[/* inline code block */ 'i', `cbuf[off+1]`],
				[/* text */ 't', `, and
 so forth.`]
			],
			[/* parameters */
				[/* parameter */ 'cbuf', [/* parameter description */
					[/* text */ 't', `Character array`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `Offset of first character to push back`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `Number of characters to push back`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If there is insufficient room in the pushback
                          buffer, or if some other I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'unread(int)', [
			[/* method description */
				[/* text */ 't', `Pushes back a single character by copying it to the front of the
 pushback buffer. After this method returns, the next character to be read
 will have the value `],
				[/* inline code block */ 'i', `(char)c`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The int value representing a character to be pushed back`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If the pushback buffer is full,
                      or if some other I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'ready()', [
			[/* method description */
				[/* text */ 't', `Tells whether this stream is ready to be read.`]
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
