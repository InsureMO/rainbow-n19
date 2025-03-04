import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.Reader', [
	[/* class description */
		[/* text */ 't', `Abstract class for reading character streams.  The only methods that a
 subclass must implement are read(char[], int, int) and close().  Most
 subclasses, however, will override some of the methods defined here in order
 to provide higher efficiency, additional functionality, or both.`]
	],
	[/* fields */
		[/* field */ 'lock', [
			[/* field description */
				[/* text */ 't', `The object used to synchronize operations on this stream.  For
 efficiency, a character-stream object may use an object other than
 itself to protect critical sections.  A subclass should therefore use
 the object in this field rather than `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` or a synchronized
 method.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a new character-stream reader whose critical sections will
 synchronize on the reader itself.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Object)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new character-stream reader whose critical sections will
 synchronize on the given object.`]
			],
			[/* parameters */
				[/* parameter */ 'lock', [/* parameter description */
					[/* text */ 't', `The Object to synchronize on.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
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
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes the stream and releases any system resources associated with
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
		[/* method */ 'markSupported()', [
			[/* method description */
				[/* text */ 't', `Tells whether this stream supports the mark() operation. The default
 implementation always returns false. Subclasses should override this
 method.`]
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
				[/* text */ 't', `Reads a single character.  This method will block until a character is
 available, an I/O error occurs, or the end of the stream is reached.

 `],
				[/* block */ 'b', ` Subclasses that intend to support efficient single-character input
 should override this method.`]
			],
			/* parameters */ UDF,
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
		[/* method */ 'read(char[])', [
			[/* method description */
				[/* text */ 't', `Reads characters into an array.  This method will block until some input
 is available, an I/O error occurs, or the end of the stream is reached.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the length of `],
					[/* inline code block */ 'i', `cbuf`],
					[/* text */ 't', ` is zero, then no characters are read
 and `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', ` is returned; otherwise, there is an attempt to read at
 least one character.  If no character is available because the stream is
 at its end, the value `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` is returned; otherwise, at least one
 character is read and stored into `],
					[/* inline code block */ 'i', `cbuf`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cbuf', [/* parameter description */
					[/* text */ 't', `Destination buffer`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of characters read, or -1
              if the end of the stream
              has been reached`]
			]
		]],
		[/* method */ 'read(java.nio.CharBuffer)', [
			[/* method description */
				[/* text */ 't', `Attempts to read characters into the specified character buffer.
 The buffer is used as a repository of characters as-is: the only
 changes made are the results of a put operation. No flipping or
 rewinding of the buffer is performed.`]
			],
			[/* parameters */
				[/* parameter */ 'target', [/* parameter description */
					[/* text */ 't', `the buffer to read characters into`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if target is null`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `if target is a read only buffer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of characters added to the buffer, or
         -1 if this source of characters is at its end`]
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
					[/* text */ 't', ` is negative.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of characters actually skipped`]
			]
		]],
		[/* method */ 'transferTo(java.io.Writer)', [
			[/* method description */
				[/* text */ 't', `Reads all characters from this reader and writes the characters to the
 given writer in the order that they are read. On return, this reader
 will be at end of the stream. This method does not close either reader
 or writer.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method may block indefinitely reading from the reader, or
 writing to the writer. The behavior for the case where the reader
 and/or writer is `],
					[/* text */ 't', `asynchronously closed`],
					[/* text */ 't', `, or the thread
 interrupted during the transfer, is highly reader and writer
 specific, and therefore not specified.
 `]
				]],
				[/* block */ 'b', `
 If an I/O error occurs reading from the reader or writing to the
 writer, then it may do so after some characters have been read or
 written. Consequently the reader may not be at end of the stream and
 one, or both, streams may be in an inconsistent state. It is strongly
 recommended that both streams be promptly closed if an I/O error occurs.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the writer, non-null`]
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
				[/* text */ 't', `the number of characters transferred`]
			]
		]],
		[/* method */ 'nullReader()', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `Reader`],
				[/* text */ 't', ` that reads no characters. The returned
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
					[/* inline code block */ 'i', `read()`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `read(char[])`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `read(char[], int, int)`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `read(CharBuffer)`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `ready()`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `skip(long)`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `transferTo()`],
					[/* text */ 't', ` methods all
 behave as if end of stream has been reached. After the stream has been
 closed, these methods all throw `],
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
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `reset()`],
					[/* text */ 't', ` methods throw an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* text */ 't', `object`],
					[/* text */ 't', ` used to synchronize operations on the
 returned `],
					[/* inline code block */ 'i', `Reader`],
					[/* text */ 't', ` is not specified.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Reader`],
				[/* text */ 't', ` which reads no characters`]
			]
		]],
		[/* method */ 'mark(int)', [
			[/* method description */
				[/* text */ 't', `Marks the present position in the stream.  Subsequent calls to reset()
 will attempt to reposition the stream to this point.  Not all
 character-input streams support the mark() operation.`]
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
					[/* text */ 't', `If the stream does not support mark(),
                          or if some other I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets the stream.  If the stream has been marked, then attempt to
 reposition it at the mark.  If the stream has not been marked, then
 attempt to reset it in some way appropriate to the particular stream,
 for example by repositioning it to its starting point.  Not all
 character-input streams support the reset() operation, and some support
 reset() without supporting mark().`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If the stream has not been marked,
                          or if the mark has been invalidated,
                          or if the stream does not support reset(),
                          or if some other I/O error occurs`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
