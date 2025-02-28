import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.PipedOutputStream', [
	[/* class description */
		[/* text */ 't', `A piped output stream can be connected to a piped input stream
 to create a communications pipe. The piped output stream is the
 sending end of the pipe. Typically, data is written to a
 `],
		[/* inline code block */ 'i', `PipedOutputStream`],
		[/* text */ 't', ` object by one thread and data is
 read from the connected `],
		[/* inline code block */ 'i', `PipedInputStream`],
		[/* text */ 't', ` by some
 other thread. Attempting to use both objects from a single thread
 is not recommended as it may deadlock the thread.
 The pipe is said to be `],
		[/* text */ 't', `broken`],
		[/* text */ 't', ` if a
 thread that was reading data bytes from the connected piped input
 stream is no longer alive.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.PipedInputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a piped output stream connected to the specified piped
 input stream. Data bytes written to this stream will then be
 available as input from `],
				[/* inline code block */ 'i', `snk`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'snk', [/* parameter description */
					[/* text */ 't', `The piped input stream to connect to.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			]
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a piped output stream that is not yet connected to a
 piped input stream. It must be connected to a piped input stream,
 either by the receiver or the sender, before being used.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes this output stream and forces any buffered output bytes
 to be written out.
 This will notify any readers that bytes are waiting in the pipe.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` bytes from the specified byte array
 starting at offset `],
				[/* inline code block */ 'i', `off`],
				[/* text */ 't', ` to this piped output stream.
 This method blocks until all the bytes are written to the output
 stream.`]
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
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the pipe is `],
					[/* text */ 't', `broken`],
					[/* text */ 't', `,
          `],
					[/* reference */ 'r', `unconnected`],
					[/* text */ 't', `,
          closed, or if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes the specified `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` to the piped output stream.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Implements the `],
					[/* inline code block */ 'i', `write`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `OutputStream`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', ` to be written.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the pipe is `],
					[/* text */ 't', `broken`],
					[/* text */ 't', `,
          `],
					[/* reference */ 'r', `unconnected`],
					[/* text */ 't', `,
          closed, or if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'connect(java.io.PipedInputStream)', [
			[/* method description */
				[/* text */ 't', `Connects this piped output stream to a receiver. If this object
 is already connected to some other piped input stream, an
 `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', ` is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `snk`],
					[/* text */ 't', ` is an unconnected piped input stream and
 `],
					[/* inline code block */ 'i', `src`],
					[/* text */ 't', ` is an unconnected piped output stream, they may
 be connected by either the call:
 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` src.connect(snk)`]
				]],
				[/* text */ 't', `
 or the call:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` snk.connect(src)`]
				]],
				[/* text */ 't', `
 The two calls have the same effect.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'snk', [/* parameter description */
					[/* text */ 't', `the piped input stream to connect to.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this piped output stream and releases any system resources
 associated with this stream. This stream may no longer be used for
 writing bytes.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
