import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.LineNumberReader', [
	[/* class description */
		[/* text */ 't', `A buffered character-input stream that keeps track of line numbers.  This
 class defines methods `],
		[/* reference */ 'r', `#setLineNumber(int)`, `setLineNumber(int)`],
		[/* text */ 't', ` and `],
		[/* reference */ 'r', `#getLineNumber()`, `getLineNumber()`],
		[/* text */ 't', ` for setting and getting the current line number
 respectively.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` By default, line numbering begins at 0. This number increments at every
 `],
			[/* text */ 't', `line terminator`],
			[/* text */ 't', ` as the data is read, and at the end of the
 stream if the last character in the stream is not a line terminator.  This
 number can be changed with a call to `],
			[/* inline code block */ 'i', `setLineNumber(int)`],
			[/* text */ 't', `.  Note
 however, that `],
			[/* inline code block */ 'i', `setLineNumber(int)`],
			[/* text */ 't', ` does not actually change the current
 position in the stream; it only changes the value that will be returned by
 `],
			[/* inline code block */ 'i', `getLineNumber()`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A line is considered to be `],
			[/* anchor */ 'r', '#-id', `lt`, `terminated`],
			[/* text */ 't', ` by any one of a
 line feed ('\\n'), a carriage return ('\\r'), or a carriage return followed
 immediately by a linefeed, or any of the previous terminators followed by
 end of stream, or end of stream not preceded by another terminator.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.Reader)', [
			[/* constructor description */
				[/* text */ 't', `Create a new line-numbering reader, using the default input-buffer
 size.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `A Reader object to provide the underlying stream`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.Reader,int)', [
			[/* constructor description */
				[/* text */ 't', `Create a new line-numbering reader, reading characters into a buffer of
 the given size.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `A Reader object to provide the underlying stream`]
				]],
				[/* parameter */ 'sz', [/* parameter description */
					[/* text */ 't', `An int specifying the size of the buffer`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getLineNumber()', [
			[/* method description */
				[/* text */ 't', `Get the current line number.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The current line number`]
			]
		]],
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Read a single character.  `],
				[/* text */ 't', `Line terminators`],
				[/* text */ 't', ` are
 compressed into single newline ('\\n') characters.  The current line
 number is incremented whenever a line terminator is read, or when the
 end of the stream is reached and the last character in the stream is
 not a line terminator.`]
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
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Line terminators`],
					[/* text */ 't', ` are compressed into single newline
 ('\\n') characters.  The current line number is incremented whenever a
 line terminator is read, or when the end of the stream is reached and
 the last character in the stream is not a line terminator.`]
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
				[/* text */ 't', `Read a line of text.  `],
				[/* text */ 't', `Line terminators`],
				[/* text */ 't', ` are compressed
 into single newline ('\\n') characters. The current line number is
 incremented whenever a line terminator is read, or when the end of the
 stream is reached and the last character in the stream is not a line
 terminator.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A String containing the contents of the line, not including
          any `],
				[/* text */ 't', `line termination characters`],
				[/* text */ 't', `, or
          `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the end of the stream has been reached`]
			]
		]],
		[/* method */ 'skip(long)', UDF],
		[/* method */ 'mark(int)', [
			[/* method description */
				[/* text */ 't', `Mark the present position in the stream.  Subsequent calls to reset()
 will attempt to reposition the stream to this point, and will also reset
 the line number appropriately.`]
			],
			[/* parameters */
				[/* parameter */ 'readAheadLimit', [/* parameter description */
					[/* text */ 't', `Limit on the number of characters that may be read while still
         preserving the mark.  After reading this many characters,
         attempting to reset the stream may fail.`]
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
				[/* text */ 't', `Reset the stream to the most recent mark.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If the stream has not been marked, or if the mark has been
          invalidated`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setLineNumber(int)', [
			[/* method description */
				[/* text */ 't', `Set the current line number.`]
			],
			[/* parameters */
				[/* parameter */ 'lineNumber', [/* parameter description */
					[/* text */ 't', `An int specifying the line number`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
