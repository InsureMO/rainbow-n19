import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.OutputStreamWriter', [
	[/* class description */
		[/* text */ 't', `An OutputStreamWriter is a bridge from character streams to byte streams:
 Characters written to it are encoded into bytes using a specified `],
		[/* reference */ 'r', `java.nio.charset.Charset`, `charset`],
		[/* text */ 't', `.  The charset that it uses
 may be specified by name or may be given explicitly, or the platform's
 default charset may be accepted.

 `],
		[/* block */ 'b', ` Each invocation of a write() method causes the encoding converter to be
 invoked on the given character(s).  The resulting bytes are accumulated in a
 buffer before being written to the underlying output stream.  Note that the
 characters passed to the write() methods are not buffered.

 `],
		[/* block */ 'b', ` For top efficiency, consider wrapping an OutputStreamWriter within a
 BufferedWriter so as to avoid frequent converter invocations.  For example:

 `],
		[/* code block */ 'c', ` Writer out
   = new BufferedWriter(new OutputStreamWriter(System.out));
 `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* text */ 't', `surrogate pair`],
			[/* text */ 't', ` is a character represented by a sequence of two
 `],
			[/* inline code block */ 'i', `char`],
			[/* text */ 't', ` values: A `],
			[/* text */ 't', `high`],
			[/* text */ 't', ` surrogate in the range '\\uD800' to
 '\\uDBFF' followed by a `],
			[/* text */ 't', `low`],
			[/* text */ 't', ` surrogate in the range '\\uDC00' to
 '\\uDFFF'.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* text */ 't', `malformed surrogate element`],
			[/* text */ 't', ` is a high surrogate that is not
 followed by a low surrogate or a low surrogate that is not preceded by a
 high surrogate.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` This class always replaces malformed surrogate elements and unmappable
 character sequences with the charset's default `],
			[/* text */ 't', `substitution sequence`],
			[/* text */ 't', `.
 The `],
			[/* reference */ 'r', `java.nio.charset.CharsetEncoder`, `CharsetEncoder`],
			[/* text */ 't', ` class should be used when more
 control over the encoding process is required.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.OutputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates an OutputStreamWriter that uses the default character encoding.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `An OutputStream`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.OutputStream,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates an OutputStreamWriter that uses the named charset.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `An OutputStream`]
				]],
				[/* parameter */ 'charsetName', [/* parameter description */
					[/* text */ 't', `The name of a supported
         `],
					[/* reference */ 'r', `java.nio.charset.Charset`, `charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named encoding is not supported`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.OutputStream,java.nio.charset.Charset)', [
			[/* constructor description */
				[/* text */ 't', `Creates an OutputStreamWriter that uses the given charset.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `An OutputStream`]
				]],
				[/* parameter */ 'cs', [/* parameter description */
					[/* text */ 't', `A charset`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.OutputStream,java.nio.charset.CharsetEncoder)', [
			[/* constructor description */
				[/* text */ 't', `Creates an OutputStreamWriter that uses the given charset encoder.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `An OutputStream`]
				]],
				[/* parameter */ 'enc', [/* parameter description */
					[/* text */ 't', `A charset encoder`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'append(java.lang.CharSequence)', UDF],
		[/* method */ 'append(java.lang.CharSequence,int,int)', UDF],
		[/* method */ 'getEncoding()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the character encoding being used by this stream.

 `],
				[/* block */ 'b', ` If the encoding has an historical name then that name is returned;
 otherwise the encoding's canonical name is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this instance was created with the `],
					[/* reference */ 'r', `#%3Cinit%3E(java.io.OutputStream,java.lang.String)`, `OutputStreamWriter(OutputStream, String)`],
					[/* text */ 't', ` constructor then the returned
 name, being unique for the encoding, may differ from the name passed to
 the constructor.  This method may return `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the stream has
 been closed. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The historical name of this encoding, or possibly
         `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the stream has been closed`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* block */ 'b', `Closes the stream, flushing it first. Once the stream has been closed,
 further write() or flush() invocations will cause an IOException to be
 thrown. Closing a previously closed stream has no effect.`]
			],
			/* parameters */ UDF,
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
			/* parameters */ UDF,
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
					[/* text */ 't', `Buffer of characters`]
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
					[/* text */ 't', `If `],
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
]);
