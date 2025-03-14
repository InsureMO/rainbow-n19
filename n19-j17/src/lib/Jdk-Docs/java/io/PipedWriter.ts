import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.PipedWriter', [
	[/* class description */
		[/* text */ 't', `Piped character-output streams.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a piped writer that is not yet connected to a
 piped reader. It must be connected to a piped reader,
 either by the receiver or the sender, before being used.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.PipedReader)', [
			[/* constructor description */
				[/* text */ 't', `Creates a piped writer connected to the specified piped
 reader. Data characters written to this stream will then be
 available as input from `],
				[/* inline code block */ 'i', `snk`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'snk', [/* parameter description */
					[/* text */ 't', `The piped reader to connect to.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'connect(java.io.PipedReader)', [
			[/* method description */
				[/* text */ 't', `Connects this piped writer to a receiver. If this object
 is already connected to some other piped reader, an
 `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', ` is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `snk`],
					[/* text */ 't', ` is an unconnected piped reader and
 `],
					[/* inline code block */ 'i', `src`],
					[/* text */ 't', ` is an unconnected piped writer, they may
 be connected by either the call:
 `]
				]],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` src.connect(snk)`]
				]],
				[/* text */ 't', `
 or the call:
 `],
				[/* blockquote */ 'q', [
					[/* code block */ 'c', ` snk.connect(src)`]
				]],
				[/* text */ 't', `
 The two calls have the same effect.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'snk', [/* parameter description */
					[/* text */ 't', `the piped reader to connect to.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes this output stream and forces any buffered output characters
 to be written out.
 This will notify any readers that characters are waiting in the pipe.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the pipe is closed, or an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this piped output stream and releases any system resources
 associated with this stream. This stream may no longer be used for
 writing characters.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` characters from the specified character array
 starting at offset `],
				[/* inline code block */ 'i', `off`],
				[/* text */ 't', ` to this piped output stream.
 This method blocks until all the characters are written to the output
 stream.
 If a thread was reading data characters from the connected piped input
 stream, but the thread is no longer alive, then an
 `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', ` is thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'cbuf', [/* parameter description */
					[/* text */ 't', `the data.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the data.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of characters to write.`]
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
					[/* text */ 't', `if the pipe is
          `],
					[/* reference */ 'r', `java.io.PipedOutputStream#BROKEN`, `broken`],
					[/* text */ 't', `,
          `],
					[/* reference */ 'r', `#connect(java.io.PipedReader)`, `unconnected`],
					[/* text */ 't', `, closed
          or an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes the specified `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` to the piped output stream.
 If a thread was reading data characters from the connected piped input
 stream, but the thread is no longer alive, then an
 `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', ` is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Implements the `],
					[/* inline code block */ 'i', `write`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `Writer`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the pipe is
          `],
					[/* reference */ 'r', `java.io.PipedOutputStream#BROKEN`, `broken`],
					[/* text */ 't', `,
          `],
					[/* reference */ 'r', `#connect(java.io.PipedReader)`, `unconnected`],
					[/* text */ 't', `, closed
          or an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
