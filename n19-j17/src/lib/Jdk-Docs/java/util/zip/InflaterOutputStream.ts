import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.InflaterOutputStream', [
	[/* class description */
		[/* text */ 't', `Implements an output stream filter for uncompressing data stored in the
 "deflate" compression format.`]
	],
	[/* fields */
		[/* field */ 'inf', [
			[/* field description */
				[/* text */ 't', `Decompressor for this stream.`]
			],
		]],
		[/* field */ 'buf', [
			[/* field description */
				[/* text */ 't', `Output buffer for writing uncompressed data.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.OutputStream,java.util.zip.Inflater)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new output stream with the specified decompressor and a
 default buffer size.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `output stream to write the uncompressed data to`]
				]],
				[/* parameter */ 'infl', [/* parameter description */
					[/* text */ 't', `decompressor ("inflater") for this stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `out`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `infl`],
					[/* text */ 't', ` is null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.OutputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new output stream with a default decompressor and buffer
 size.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `output stream to write the uncompressed data to`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `out`],
					[/* text */ 't', ` is null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.OutputStream,java.util.zip.Inflater,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new output stream with the specified decompressor and
 buffer size.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `output stream to write the uncompressed data to`]
				]],
				[/* parameter */ 'infl', [/* parameter description */
					[/* text */ 't', `decompressor ("inflater") for this stream`]
				]],
				[/* parameter */ 'bufLen', [/* parameter description */
					[/* text */ 't', `decompression buffer size`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bufLen <= 0`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `out`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `infl`],
					[/* text */ 't', ` is null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes this output stream, forcing any pending buffered output bytes to be
 written.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs or this stream is already
 closed`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes a byte to the uncompressed output stream.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `a single byte of compressed data to decompress and write to
 the output stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs or this stream is already
 closed`]
				]],
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a compression (ZIP) format error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes an array of bytes to the uncompressed output stream.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `buffer containing compressed data to decompress and write to
 the output stream`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `starting offset of the compressed data within `],
					[/* inline code block */ 'i', `b`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `number of bytes to decompress from `],
					[/* inline code block */ 'i', `b`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `off < 0`],
					[/* text */ 't', `, or if
 `],
					[/* inline code block */ 'i', `len < 0`],
					[/* text */ 't', `, or if `],
					[/* inline code block */ 'i', `len > b.length - off`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs or this stream is already
 closed`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a compression (ZIP) format error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Writes any remaining uncompressed data to the output stream and closes
 the underlying output stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'finish()', [
			[/* method description */
				[/* text */ 't', `Finishes writing uncompressed data to the output stream without closing
 the underlying stream.  Use this method when applying multiple filters in
 succession to the same output stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs or this stream is already
 closed`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
