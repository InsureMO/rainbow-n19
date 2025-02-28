import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.InputStreamReader', [
	[/* class description */
		[/* text */ 't', `An InputStreamReader is a bridge from byte streams to character streams: It
 reads bytes and decodes them into characters using a specified `],
		[/* reference */ 'r', `java.nio.charset.Charset`],
		[/* text */ 't', `.  The charset that it uses
 may be specified by name or may be given explicitly, or the platform's
 `],
		[/* external link */ 'a', `../nio/charset/Charset.html#defaultCharset()`, `default charset`],
		[/* text */ 't', ` may be accepted.

 `],
		[/* block */ 'b', ` Each invocation of one of an InputStreamReader's read() methods may
 cause one or more bytes to be read from the underlying byte-input stream.
 To enable the efficient conversion of bytes to characters, more bytes may
 be read ahead from the underlying stream than are necessary to satisfy the
 current read operation.

 `],
		[/* block */ 'b', ` For top efficiency, consider wrapping an InputStreamReader within a
 BufferedReader.  For example:

 `],
		[/* code block */ 'c', ` BufferedReader in
   = new BufferedReader(new InputStreamReader(anInputStream));
 `],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.InputStream,java.nio.charset.CharsetDecoder)', [
			[/* constructor description */
				[/* text */ 't', `Creates an InputStreamReader that uses the given charset decoder.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `An InputStream`]
				]],
				[/* parameter */ 'dec', [/* parameter description */
					[/* text */ 't', `A charset decoder`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.InputStream,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Creates an InputStreamReader that uses the given charset.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `An InputStream`]
				]],
				[/* parameter */ 'cs', [/* parameter description */
					[/* text */ 't', `A charset`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.InputStream,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates an InputStreamReader that uses the named charset.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `An InputStream`]
				]],
				[/* parameter */ 'charsetName', [/* parameter description */
					[/* text */ 't', `The name of a supported
         `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named charset is not supported`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates an InputStreamReader that uses the
 `],
				[/* external link */ 'a', `../nio/charset/Charset.html#defaultCharset()`, `default charset`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `An InputStream`]
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
		[/* method */ 'read(java.nio.CharBuffer)', UDF],
		[/* method */ 'close()', [
			[/* method description */
				[/* block */ 'b', `Closes the stream and releases any system resources associated with
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
		[/* method */ 'getEncoding()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the character encoding being used by this stream.

 `],
				[/* block */ 'b', ` If the encoding has an historical name then that name is returned;
 otherwise the encoding's canonical name is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this instance was created with the `],
					[/* reference */ 'r', `InputStreamReader(InputStream, String)`],
					[/* text */ 't', ` constructor then the returned
 name, being unique for the encoding, may differ from the name passed to
 the constructor. This method will return `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the
 stream has been closed.
 `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The historical name of this encoding, or
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the stream has been closed`]
			]
		]],
		[/* method */ 'ready()', [
			[/* method description */
				[/* text */ 't', `Tells whether this stream is ready to be read.  An InputStreamReader is
 ready if its input buffer is not empty, or if bytes are available to be
 read from the underlying byte stream.`]
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
