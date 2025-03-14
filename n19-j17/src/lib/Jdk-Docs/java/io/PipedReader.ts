import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.PipedReader', [
	[/* class description */
		[/* text */ 't', `Piped character-input streams.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PipedReader`],
				[/* text */ 't', ` so
 that it is not yet `],
				[/* reference */ 'r', `#connect(java.io.PipedWriter)`, `connected`],
				[/* text */ 't', `. It must be `],
				[/* reference */ 'r', `java.io.PipedWriter#connect(java.io.PipedReader)`, `connected`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `PipedWriter`],
				[/* text */ 't', `
 before being used.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PipedReader`],
				[/* text */ 't', ` so that it is not yet
 `],
				[/* reference */ 'r', `#connect(java.io.PipedWriter)`, `connected`],
				[/* text */ 't', ` and uses
 the specified pipe size for the pipe's buffer.
 It must be  `],
				[/* reference */ 'r', `java.io.PipedWriter#connect(java.io.PipedReader)`, `connected`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `PipedWriter`],
				[/* text */ 't', `
 before being used.`]
			],
			[/* parameters */
				[/* parameter */ 'pipeSize', [/* parameter description */
					[/* text */ 't', `the size of the pipe's buffer.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pipeSize <= 0`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.PipedWriter)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PipedReader`],
				[/* text */ 't', ` so
 that it is connected to the piped writer
 `],
				[/* inline code block */ 'i', `src`],
				[/* text */ 't', `. Data written to `],
				[/* inline code block */ 'i', `src`],
				[/* text */ 't', `
 will then be available as input from this stream.`]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `the stream to connect to.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.PipedWriter,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `PipedReader`],
				[/* text */ 't', ` so that it is connected
 to the piped writer `],
				[/* inline code block */ 'i', `src`],
				[/* text */ 't', ` and uses the specified
 pipe size for the pipe's buffer. Data written to `],
				[/* inline code block */ 'i', `src`],
				[/* text */ 't', `
 will then be  available as input from this stream.`]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `the stream to connect to.`]
				]],
				[/* parameter */ 'pipeSize', [/* parameter description */
					[/* text */ 't', `the size of the pipe's buffer.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pipeSize <= 0`],
					[/* text */ 't', `.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'ready()', [
			[/* method description */
				[/* text */ 't', `Tell whether this stream is ready to be read.  A piped character
 stream is ready if the circular buffer is not empty.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the pipe is
             `],
					[/* reference */ 'r', `java.io.PipedInputStream#BROKEN`, `broken`],
					[/* text */ 't', `,
             `],
					[/* reference */ 'r', `#connect(java.io.PipedWriter)`, `unconnected`],
					[/* text */ 't', `, or closed.`]
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
				[/* text */ 't', `Reads the next character of data from this piped stream.
 If no character is available because the end of the stream
 has been reached, the value `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.
 This method blocks until input data is available, the end of
 the stream is detected, or an exception is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the pipe is
          `],
					[/* reference */ 'r', `java.io.PipedInputStream#BROKEN`, `broken`],
					[/* text */ 't', `,
          `],
					[/* reference */ 'r', `#connect(java.io.PipedWriter)`, `unconnected`],
					[/* text */ 't', `, closed,
          or an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next character of data, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the end of the
          stream is reached.`]
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
					[/* text */ 't', ` Fewer than `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` characters will be read if
 `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` exceeds the pipe's buffer size.`]
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
					[/* text */ 't', `if the pipe is
             `],
					[/* reference */ 'r', `java.io.PipedInputStream#BROKEN`, `broken`],
					[/* text */ 't', `,
             `],
					[/* reference */ 'r', `#connect(java.io.PipedWriter)`, `unconnected`],
					[/* text */ 't', `, closed,
             or an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of characters read, or -1 if the end of the
             stream has been reached`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this piped stream and releases any system resources
 associated with the stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'connect(java.io.PipedWriter)', [
			[/* method description */
				[/* text */ 't', `Causes this piped reader to be connected
 to the piped  writer `],
				[/* inline code block */ 'i', `src`],
				[/* text */ 't', `.
 If this object is already connected to some
 other piped writer, an `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', `
 is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `src`],
					[/* text */ 't', ` is an
 unconnected piped writer and `],
					[/* inline code block */ 'i', `snk`],
					[/* text */ 't', `
 is an unconnected piped reader, they
 may be connected by either the call:

 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `snk.connect(src)`],
					[/* text */ 't', ` `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 or the call:

 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `src.connect(snk)`],
					[/* text */ 't', ` `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The two calls have the same effect.`]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `The piped writer to connect to.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
