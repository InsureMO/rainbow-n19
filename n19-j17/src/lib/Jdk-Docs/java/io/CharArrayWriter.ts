import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.CharArrayWriter', [
	[/* class description */
		[/* text */ 't', `This class implements a character buffer that can be used as an Writer.
 The buffer automatically grows when data is written to the stream.  The data
 can be retrieved using toCharArray() and toString().
 `],
		[/* block */ 'b', `
 Note: Invoking close() on this class has no effect, and methods
 of this class can be called after the stream has closed
 without generating an IOException.`]
	],
	[/* fields */
		[/* field */ 'buf', [
			[/* field description */
				[/* text */ 't', `The buffer where data is stored.`]
			],
		]],
		[/* field */ 'count', [
			[/* field description */
				[/* text */ 't', `The number of chars in the buffer.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a new CharArrayWriter.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new CharArrayWriter with the specified initial size.`]
			],
			[/* parameters */
				[/* parameter */ 'initialSize', [/* parameter description */
					[/* text */ 't', `an int specifying the initial buffer size.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if initialSize is negative`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'toCharArray()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of the input data.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array of chars copied from the input data.`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the current size of the buffer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an int representing the current size of the buffer.`]
			]
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
			/* throws */ UDF,
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This writer`]
			]
		]],
		[/* method */ 'append(java.lang.CharSequence,int,int)', [
			[/* method description */
				[/* text */ 't', `Appends a subsequence of the specified character sequence to this writer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form
 `],
					[/* inline code block */ 'i', `out.append(csq, start, end)`],
					[/* text */ 't', ` when
 `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, behaves in
 exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', `     out.write(csq.subSequence(start, end).toString()) `],
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
				]]
			],
			[/* return description */
				[/* text */ 't', `This writer`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Converts input data to a string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string.`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Close the stream.  This method does not release the buffer, since its
 contents might still be required. Note: Invoking this method in this class
 will have no effect.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flush the stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `flush`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `CharArrayWriter`],
					[/* text */ 't', ` does nothing.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets the buffer so that you can use it again without
 throwing away the already allocated buffer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'write(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes characters to the buffer.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the data to be written`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of chars that are written`]
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
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes a character to the buffer.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `int specifying a character to be written`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'write(java.lang.String,int,int)', [
			[/* method description */
				[/* text */ 't', `Write a portion of a string to the buffer.`]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `String to be written from`]
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
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative,
          or `],
					[/* inline code block */ 'i', `off + len`],
					[/* text */ 't', ` is negative or greater than the length
          of the given string`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeTo(java.io.Writer)', [
			[/* method description */
				[/* text */ 't', `Writes the contents of the buffer to another character stream.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the output stream to write to`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
