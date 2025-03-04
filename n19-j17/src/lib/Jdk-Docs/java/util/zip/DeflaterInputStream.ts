import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.DeflaterInputStream', [
	[/* class description */
		[/* text */ 't', `Implements an input stream filter for compressing data in the "deflate"
 compression format.`]
	],
	[/* fields */
		[/* field */ 'buf', [
			[/* field description */
				[/* text */ 't', `Input buffer for reading compressed data.`]
			],
		]],
		[/* field */ 'def', [
			[/* field description */
				[/* text */ 't', `Compressor for this stream.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new input stream with a default compressor and buffer
 size.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `input stream to read the uncompressed data to`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `in`],
					[/* text */ 't', ` is null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.InputStream,java.util.zip.Deflater)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new input stream with the specified compressor and a
 default buffer size.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `input stream to read the uncompressed data to`]
				]],
				[/* parameter */ 'defl', [/* parameter description */
					[/* text */ 't', `compressor ("deflater") for this stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `in`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `defl`],
					[/* text */ 't', ` is null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.InputStream,java.util.zip.Deflater,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new input stream with the specified compressor and buffer
 size.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `input stream to read the uncompressed data to`]
				]],
				[/* parameter */ 'defl', [/* parameter description */
					[/* text */ 't', `compressor ("deflater") for this stream`]
				]],
				[/* parameter */ 'bufLen', [/* parameter description */
					[/* text */ 't', `compression buffer size`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bufLen <= 0`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `in`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `defl`],
					[/* text */ 't', ` is null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'markSupported()', [
			[/* method description */
				[/* text */ 't', `Always returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` because this input stream does not support
 the `],
				[/* reference */ 'r', `#mark(int)`, `mark()`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `#reset()`, `reset()`],
				[/* text */ 't', ` methods.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `false, always`]
			]
		]],
		[/* method */ 'available()', [
			[/* method description */
				[/* text */ 't', `Returns 0 after EOF has been reached, otherwise always return 1.
 `],
				[/* block */ 'b', `
 Programs should not count on this method to return the actual number
 of bytes that could be read without blocking`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs or if this stream is
 already closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `zero after the end of the underlying input stream has been
 reached, otherwise always returns 1`]
			]
		]],
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Reads a single byte of compressed data from the input stream.
 This method will block until some input can be read and compressed.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs or if this stream is
 already closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a single byte of compressed data, or -1 if the end of the
 uncompressed input stream is reached`]
			]
		]],
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads compressed data into a byte array.
 This method will block until some input can be read and compressed.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `buffer into which the data is read`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `starting offset of the data within `],
					[/* inline code block */ 'i', `b`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `maximum number of compressed bytes to read into `],
					[/* inline code block */ 'i', `b`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `len > b.length - off`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs or if this input stream is
 already closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes read, or -1 if the end of the
 uncompressed input stream is reached`]
			]
		]],
		[/* method */ 'skip(long)', [
			[/* method description */
				[/* text */ 't', `Skips over and discards data from the input stream.
 This method may block until the specified number of bytes are read and
 skipped. `],
				[/* text */ 't', `Note:`],
				[/* text */ 't', ` While `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` is given as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `,
 the maximum number of bytes which can be skipped is
 `],
				[/* inline code block */ 'i', `Integer.MAX_VALUE`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `number of bytes to be skipped`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs or if this stream is
 already closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes skipped`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this input stream and its underlying input stream, discarding
 any pending uncompressed data.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'mark(int)', [
			[/* method description */
				[/* text */ 't', `This operation is not supported`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'limit', [/* parameter description */
					[/* text */ 't', `maximum bytes that can be read before invalidating the position marker`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `This operation is not supported`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `always thrown`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
