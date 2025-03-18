import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.Writer', [
	[/* class description */
		[/* text */ 't', `Abstract class for writing to character streams.  The only methods that a
 subclass must implement are write(char[], int, int), flush(), and close().
 Most subclasses, however, will override some of the methods defined here in
 order to provide higher efficiency, additional functionality, or both.`]
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
				[/* text */ 't', `Creates a new character-stream writer whose critical sections will
 synchronize on the writer itself.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Object)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new character-stream writer whose critical sections will
 synchronize on the given object.`]
			],
			[/* parameters */
				[/* parameter */ 'lock', [/* parameter description */
					[/* text */ 't', `Object to synchronize on`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes the stream, flushing it first. Once the stream has been closed,
 further write() or flush() invocations will cause an IOException to be
 thrown. Closing a previously closed stream has no effect.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes the stream.  If the stream has saved any characters from the
 various write() methods in a buffer, write them immediately to their
 intended destination.  Then, if that destination is another character or
 byte stream, flush it.  Thus one flush() invocation will flush all the
 buffers in a chain of Writers and OutputStreams.

 `],
				[/* block */ 'b', ` If the intended destination of this stream is an abstraction provided
 by the underlying operating system, for example a file, then flushing the
 stream guarantees only that bytes previously written to the stream are
 passed to the operating system for writing; it does not guarantee that
 they are actually written to a physical device such as a disk drive.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes a portion of an array of characters.`]
			],
			[/* parameters */
				[/* parameter */ 'cbuf', [/* parameter description */
					[/* text */ 't', `Array of characters`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `Offset from which to start writing characters`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `Number of characters to write`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `Implementations should throw this exception
          if `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative,
          or `],
					[/* inline code block */ 'i', `off + len`],
					[/* text */ 't', ` is negative or greater than the length
          of the given array`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'append(char)', [
			[/* method description */
				[/* text */ 't', `Appends the specified character to this writer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `out.append(c)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', `     out.write(c) `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The 16-bit character to append`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This writer`]
			]
		]],
		[/* method */ 'append(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Appends the specified character sequence to this writer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `out.append(csq)`],
					[/* text */ 't', `
 behaves in exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', `     out.write(csq.toString()) `],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` Depending on the specification of `],
					[/* inline code block */ 'i', `toString`],
					[/* text */ 't', ` for the
 character sequence `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', `, the entire sequence may not be
 appended. For instance, invoking the `],
					[/* inline code block */ 'i', `toString`],
					[/* text */ 't', ` method of a
 character buffer will return a subsequence whose content depends upon
 the buffer's position and limit.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'csq', [/* parameter description */
					[/* text */ 't', `The character sequence to append.  If `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` is
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then the four characters `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', ` are
         appended to this writer.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This writer`]
			]
		]],
		[/* method */ 'append(java.lang.CharSequence,int,int)', [
			[/* method description */
				[/* text */ 't', `Appends a subsequence of the specified character sequence to this writer.
 `],
				[/* inline code block */ 'i', `Appendable`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `out.append(csq, start, end)`],
					[/* text */ 't', ` when `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', `
 is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` behaves in exactly the
 same way as the invocation

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `out.write(csq.subSequence(start, end).toString())`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'csq', [/* parameter description */
					[/* text */ 't', `The character sequence from which a subsequence will be
         appended.  If `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then characters
         will be appended as if `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` contained the four
         characters `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `The index of the first character in the subsequence`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `The index of the character following the last character in the
         subsequence`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` are negative, `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `
          is greater than `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` is greater than
          `],
					[/* inline code block */ 'i', `csq.length()`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This writer`]
			]
		]],
		[/* method */ 'nullWriter()', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `Writer`],
				[/* text */ 't', ` which discards all characters.  The
 returned stream is initially open.  The stream is closed by calling
 the `],
				[/* inline code block */ 'i', `close()`],
				[/* text */ 't', ` method.  Subsequent calls to `],
				[/* inline code block */ 'i', `close()`],
				[/* text */ 't', ` have
 no effect.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` While the stream is open, the `],
					[/* inline code block */ 'i', `append(char)`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `append(CharSequence)`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `append(CharSequence, int, int)`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `flush()`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `write(int)`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `write(char[])`],
					[/* text */ 't', `, and
 `],
					[/* inline code block */ 'i', `write(char[], int, int)`],
					[/* text */ 't', ` methods do nothing. After the stream
 has been closed, these methods all throw `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* text */ 't', `object`],
					[/* text */ 't', ` used to synchronize operations on the
 returned `],
					[/* inline code block */ 'i', `Writer`],
					[/* text */ 't', ` is not specified.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Writer`],
				[/* text */ 't', ` which discards all characters`]
			]
		]],
		[/* method */ 'write(char[])', [
			[/* method description */
				[/* text */ 't', `Writes an array of characters.`]
			],
			[/* parameters */
				[/* parameter */ 'cbuf', [/* parameter description */
					[/* text */ 't', `Array of characters to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes a single character.  The character to be written is contained in
 the 16 low-order bits of the given integer value; the 16 high-order bits
 are ignored.

 `],
				[/* block */ 'b', ` Subclasses that intend to support efficient single-character output
 should override this method.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `int specifying a character to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Writes a string.`]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `String to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(java.lang.String,int,int)', [
			[/* method description */
				[/* text */ 't', `Writes a portion of a string.`]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `A String`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `Offset from which to start writing characters`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `Number of characters to write`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `Implementations should throw this exception
          if `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative,
          or `],
					[/* inline code block */ 'i', `off + len`],
					[/* text */ 't', ` is negative or greater than the length
          of the given string`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
