import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.BufferedWriter', [
	[/* class description */
		[/* text */ 't', `Writes text to a character-output stream, buffering characters so as to
 provide for the efficient writing of single characters, arrays, and strings.

 `],
		[/* block */ 'b', ` The buffer size may be specified, or the default size may be accepted.
 The default is large enough for most purposes.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A newLine() method is provided, which uses the platform's own notion of
 line separator as defined by the system property `],
			[/* inline code block */ 'i', `line.separator`],
			[/* text */ 't', `.
 Not all platforms use the newline character ('\\n') to terminate lines.
 Calling this method to terminate each output line is therefore preferred to
 writing a newline character directly.

 `]
		]],
		[/* block */ 'b', ` In general, a Writer sends its output immediately to the underlying
 character or byte stream.  Unless prompt output is required, it is advisable
 to wrap a BufferedWriter around any Writer whose write() operations may be
 costly, such as FileWriters and OutputStreamWriters.  For example,

 `],
		[/* code block */ 'c', ` PrintWriter out
   = new PrintWriter(new BufferedWriter(new FileWriter("foo.out")));
 `],
		[/* text */ 't', `

 will buffer the PrintWriter's output to the file.  Without buffering, each
 invocation of a print() method would cause characters to be converted into
 bytes that would then be written immediately to the file, which can be very
 inefficient.`],
		[/* block */ 'b', '']
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.io.Writer)', [
			[/* constructor description */
				[/* text */ 't', `Creates a buffered character-output stream that uses a default-sized
 output buffer.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `A Writer`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.Writer,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new buffered character-output stream that uses an output
 buffer of the given size.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `A Writer`]
				]],
				[/* parameter */ 'sz', [/* parameter description */
					[/* text */ 't', `Output-buffer size, a positive integer`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `sz <= 0`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'close()', [
			[/* method description */
				[/* block */ 'b', `Closes the stream, flushing it first. Once the stream has been closed,
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
				[/* text */ 't', `Flushes the stream.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'newLine()', [
			[/* method description */
				[/* text */ 't', `Writes a line separator.  The line separator string is defined by the
 system property `],
				[/* inline code block */ 'i', `line.separator`],
				[/* text */ 't', `, and is not necessarily a single
 newline ('\\n') character.`]
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
				[/* text */ 't', `Writes a portion of an array of characters.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Ordinarily this method stores characters from the given array into
 this stream's buffer, flushing the buffer to the underlying stream as
 needed.  If the requested length is at least as large as the buffer,
 however, then this method will flush the buffer and write the characters
 directly to the underlying stream.  Thus redundant
 `],
					[/* inline code block */ 'i', `BufferedWriter`],
					[/* text */ 't', `s will not copy data unnecessarily.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cbuf', [/* parameter description */
					[/* text */ 't', `A character array`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `Offset from which to start reading characters`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `Number of characters to write`]
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
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes a single character.`]
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
		[/* method */ 'write(java.lang.String,int,int)', [
			[/* method description */
				[/* text */ 't', `Writes a portion of a String.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `String to be written`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `Offset from which to start reading characters`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `Number of characters to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative,
          or `],
					[/* inline code block */ 'i', `off + len`],
					[/* text */ 't', ` is greater than the length
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
