import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.GZIPOutputStream', [
	[/* class description */
		[/* text */ 't', `This class implements a stream filter for writing compressed data in
 the GZIP file format.`]
	],
	[/* fields */
		[/* field */ 'crc', [
			[/* field description */
				[/* text */ 't', `CRC-32 of uncompressed data.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.OutputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new output stream with a default buffer size.

 `],
				[/* block */ 'b', `The new output stream instance is created as if by invoking
 the 2-argument constructor GZIPOutputStream(out, false).`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the output stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.OutputStream,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new output stream with a default buffer size and
 the specified flush mode.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the output stream`]
				]],
				[/* parameter */ 'syncFlush', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` invocation of the inherited
        `],
					[/* reference */ 'r', `java.util.zip.DeflaterOutputStream#flush()`, `flush()`],
					[/* text */ 't', ` method of
        this instance flushes the compressor with flush mode
        `],
					[/* reference */ 'r', `java.util.zip.Deflater#SYNC_FLUSH`, `Deflater.SYNC_FLUSH`],
					[/* text */ 't', ` before flushing the output
        stream, otherwise only flushes the output stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.OutputStream,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new output stream with the specified buffer size.

 `],
				[/* block */ 'b', `The new output stream instance is created as if by invoking
 the 3-argument constructor GZIPOutputStream(out, size, false).`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the output stream`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `the output buffer size`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `size <= 0`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.OutputStream,int,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new output stream with the specified buffer size and
 flush mode.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the output stream`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `the output buffer size`]
				]],
				[/* parameter */ 'syncFlush', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` invocation of the inherited
        `],
					[/* reference */ 'r', `java.util.zip.DeflaterOutputStream#flush()`, `flush()`],
					[/* text */ 't', ` method of
        this instance flushes the compressor with flush mode
        `],
					[/* reference */ 'r', `java.util.zip.Deflater#SYNC_FLUSH`, `Deflater.SYNC_FLUSH`],
					[/* text */ 't', ` before flushing the output
        stream, otherwise only flushes the output stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `size <= 0`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'write(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes array of bytes to the compressed output stream. This method
 will block until all the bytes are written.`]
			],
			[/* parameters */
				[/* parameter */ 'buf', [/* parameter description */
					[/* text */ 't', `the data to be written`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset of the data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the length of the data`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'finish()', [
			[/* method description */
				[/* text */ 't', `Finishes writing compressed data to the output stream without closing
 the underlying stream. Use this method when applying multiple filters
 in succession to the same output stream.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
