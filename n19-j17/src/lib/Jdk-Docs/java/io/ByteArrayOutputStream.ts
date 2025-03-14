import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ByteArrayOutputStream', [
	[/* class description */
		[/* text */ 't', `This class implements an output stream in which the data is
 written into a byte array. The buffer automatically grows as data
 is written to it.
 The data can be retrieved using `],
		[/* inline code block */ 'i', `toByteArray()`],
		[/* text */ 't', ` and
 `],
		[/* inline code block */ 'i', `toString()`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Closing a `],
			[/* inline code block */ 'i', `ByteArrayOutputStream`],
			[/* text */ 't', ` has no effect. The methods in
 this class can be called after the stream has been closed without
 generating an `],
			[/* inline code block */ 'i', `IOException`],
			[/* text */ 't', `.`]
		]]
	],
	[/* fields */
		[/* field */ 'buf', [
			[/* field description */
				[/* text */ 't', `The buffer where data is stored.`]
			],
		]],
		[/* field */ 'count', [
			[/* field description */
				[/* text */ 't', `The number of valid bytes in the buffer.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* inline code block */ 'i', `ByteArrayOutputStream`],
				[/* text */ 't', `. The buffer capacity is
 initially 32 bytes, though its size increases if necessary.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new `],
				[/* inline code block */ 'i', `ByteArrayOutputStream`],
				[/* text */ 't', `, with a buffer capacity of
 the specified size, in bytes.`]
			],
			[/* parameters */
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `the initial size.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if size is negative.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'toByteArray()', [
			[/* method description */
				[/* text */ 't', `Creates a newly allocated byte array. Its size is the current
 size of this output stream and the valid contents of the buffer
 have been copied into it.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current contents of this output stream, as a byte array.`]
			]
		]],
		[/* method */ 'size()', [
			[/* method description */
				[/* text */ 't', `Returns the current size of the buffer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value of the `],
				[/* inline code block */ 'i', `count`],
				[/* text */ 't', ` field, which is the number
          of valid bytes in this output stream.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Converts the buffer's contents into a string decoding bytes using the
 platform's default character set. The length of the new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `
 is a function of the character set, and hence may not be equal to the
 size of the buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method always replaces malformed-input and unmappable-character
 sequences with the default replacement string for the platform's
 default character set. The `],
					[/* reference */ 'r', `java.nio.charset.CharsetDecoder`, `CharsetDecoder`],
					[/* text */ 't', `
 class should be used when more control over the decoding process is
 required.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `String decoded from the buffer's contents.`]
			]
		]],
		[/* method */ 'toString(int)', [
			[/* method description */
				[/* text */ 't', `Creates a newly allocated string. Its size is the current size of
 the output stream and the valid contents of the buffer have been
 copied into it. Each character `],
				[/* text */ 't', `c`],
				[/* text */ 't', ` in the resulting string is
 constructed from the corresponding element `],
				[/* text */ 't', `b`],
				[/* text */ 't', ` in the byte
 array such that:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `c == (char)(((hibyte & 0xff) << 8) | (b & 0xff))`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'hibyte', [/* parameter description */
					[/* text */ 't', `the high byte of each resulting Unicode character.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current contents of the output stream, as a string.`]
			]
		]],
		[/* method */ 'toString(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Converts the buffer's contents into a string by decoding the bytes using
 the named `],
				[/* reference */ 'r', `java.nio.charset.Charset`, `charset`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is equivalent to `],
					[/* inline code block */ 'i', `#toString(charset)`],
					[/* text */ 't', ` that takes a
 `],
					[/* reference */ 'r', `java.nio.charset.Charset`, `charset`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` An invocation of this method of the form

 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `ByteArrayOutputStream b = ...
      b.toString("UTF-8")`],
					[/* text */ 't', `
 `]
				]],
				[/* text */ 't', `

 behaves in exactly the same way as the expression

 `],
				[/* code block */ 'c', [
					[/* text */ 't', ` `],
					[/* inline code block */ 'i', `ByteArrayOutputStream b = ...
      b.toString(StandardCharsets.UTF_8)`],
					[/* text */ 't', `
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'charsetName', [/* parameter description */
					[/* text */ 't', `the name of a supported
         `],
					[/* reference */ 'r', `java.nio.charset.Charset`, `charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named charset is not supported`]
				]]
			],
			[/* return description */
				[/* text */ 't', `String decoded from the buffer's contents.`]
			]
		]],
		[/* method */ 'toString(java.nio.charset.Charset)', [
			[/* method description */
				[/* text */ 't', `Converts the buffer's contents into a string by decoding the bytes using
 the specified `],
				[/* reference */ 'r', `java.nio.charset.Charset`, `charset`],
				[/* text */ 't', `. The length of the new
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` is a function of the charset, and hence may not be equal
 to the length of the byte array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method always replaces malformed-input and unmappable-character
 sequences with the charset's default replacement string. The `],
					[/* reference */ 'r', `java.nio.charset.CharsetDecoder`, `CharsetDecoder`],
					[/* text */ 't', ` class should be used when more control
 over the decoding process is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `the `],
					[/* reference */ 'r', `java.nio.charset.Charset`, `charset`],
					[/* text */ 't', `
             to be used to decode the `],
					[/* inline code block */ 'i', `bytes`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `String decoded from the buffer's contents.`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets the `],
				[/* inline code block */ 'i', `count`],
				[/* text */ 't', ` field of this `],
				[/* inline code block */ 'i', `ByteArrayOutputStream`],
				[/* text */ 't', `
 to zero, so that all currently accumulated output in the
 output stream is discarded. The output stream can be used again,
 reusing the already allocated buffer space.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'write(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes from the specified byte array
 starting at offset `],
				[/* inline code block */ 'i', `off`],
				[/* text */ 't', ` to this `],
				[/* inline code block */ 'i', `ByteArrayOutputStream`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the data.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the data.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of bytes to write.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative,
 `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is greater than
 `],
					[/* inline code block */ 'i', `b.length - off`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes the specified byte to this `],
				[/* inline code block */ 'i', `ByteArrayOutputStream`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the byte to be written.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'writeTo(java.io.OutputStream)', [
			[/* method description */
				[/* text */ 't', `Writes the complete contents of this `],
				[/* inline code block */ 'i', `ByteArrayOutputStream`],
				[/* text */ 't', ` to
 the specified output stream argument, as if by calling the output
 stream's write method using `],
				[/* inline code block */ 'i', `out.write(buf, 0, count)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the output stream to which to write the data.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `out`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closing a `],
				[/* inline code block */ 'i', `ByteArrayOutputStream`],
				[/* text */ 't', ` has no effect. The methods in
 this class can be called after the stream has been closed without
 generating an `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeBytes(byte[])', [
			[/* method description */
				[/* text */ 't', `Writes the complete contents of the specified byte array
 to this `],
				[/* inline code block */ 'i', `ByteArrayOutputStream`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the data.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
