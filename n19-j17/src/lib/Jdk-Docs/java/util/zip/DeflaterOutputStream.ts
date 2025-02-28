import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.DeflaterOutputStream', [
	[/* class description */
		[/* text */ 't', `This class implements an output stream filter for compressing data in
 the "deflate" compression format. It is also used as the basis for other
 types of compression filters, such as GZIPOutputStream.`]
	],
	[/* fields */
		[/* field */ 'def', [
			[/* field description */
				[/* text */ 't', `Compressor for this stream.`]
			],
		]],
		[/* field */ 'buf', [
			[/* field description */
				[/* text */ 't', `Output buffer for writing compressed data.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.OutputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new output stream with a default compressor and buffer size.

 `],
				[/* block */ 'b', `The new output stream instance is created as if by invoking
 the 2-argument constructor DeflaterOutputStream(out, false).`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the output stream`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.OutputStream,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new output stream with a default compressor, a default
 buffer size and the specified flush mode.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the output stream`]
				]],
				[/* parameter */ 'syncFlush', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` the `],
					[/* reference */ 'r', `flush()`],
					[/* text */ 't', ` method of this
        instance flushes the compressor with flush mode
        `],
					[/* external link */ 'a', `Deflater.html#SYNC_FLUSH`, `Deflater.SYNC_FLUSH`],
					[/* text */ 't', ` before flushing the output
        stream, otherwise only flushes the output stream`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.OutputStream,java.util.zip.Deflater)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new output stream with the specified compressor and
 a default buffer size.

 `],
				[/* block */ 'b', `The new output stream instance is created as if by invoking
 the 3-argument constructor DeflaterOutputStream(out, def, false).`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the output stream`]
				]],
				[/* parameter */ 'def', [/* parameter description */
					[/* text */ 't', `the compressor ("deflater")`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.OutputStream,java.util.zip.Deflater,int,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new output stream with the specified compressor,
 buffer size and flush mode.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the output stream`]
				]],
				[/* parameter */ 'def', [/* parameter description */
					[/* text */ 't', `the compressor ("deflater")`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `the output buffer size`]
				]],
				[/* parameter */ 'syncFlush', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` the `],
					[/* reference */ 'r', `flush()`],
					[/* text */ 't', ` method of this
        instance flushes the compressor with flush mode
        `],
					[/* external link */ 'a', `Deflater.html#SYNC_FLUSH`, `Deflater.SYNC_FLUSH`],
					[/* text */ 't', ` before flushing the output
        stream, otherwise only flushes the output stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `size <= 0`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.OutputStream,java.util.zip.Deflater,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new output stream with the specified compressor and
 buffer size.

 `],
				[/* block */ 'b', `The new output stream instance is created as if by invoking
 the 4-argument constructor DeflaterOutputStream(out, def, size, false).`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the output stream`]
				]],
				[/* parameter */ 'def', [/* parameter description */
					[/* text */ 't', `the compressor ("deflater")`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `the output buffer size`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `size <= 0`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.OutputStream,java.util.zip.Deflater,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new output stream with the specified compressor, flush
 mode and a default buffer size.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `the output stream`]
				]],
				[/* parameter */ 'def', [/* parameter description */
					[/* text */ 't', `the compressor ("deflater")`]
				]],
				[/* parameter */ 'syncFlush', [/* parameter description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` the `],
					[/* reference */ 'r', `flush()`],
					[/* text */ 't', ` method of this
        instance flushes the compressor with flush mode
        `],
					[/* external link */ 'a', `Deflater.html#SYNC_FLUSH`, `Deflater.SYNC_FLUSH`],
					[/* text */ 't', ` before flushing the output
        stream, otherwise only flushes the output stream`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes the compressed output stream.

 If `],
				[/* reference */ 'r', `syncFlush`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` when this compressed output stream is
 constructed, this method first flushes the underlying `],
				[/* inline code block */ 'i', `compressor`],
				[/* text */ 't', `
 with the flush mode `],
				[/* external link */ 'a', `Deflater.html#SYNC_FLUSH`, `Deflater.SYNC_FLUSH`],
				[/* text */ 't', ` to force
 all pending data to be flushed out to the output stream and then
 flushes the output stream. Otherwise this method only flushes the
 output stream without flushing the `],
				[/* inline code block */ 'i', `compressor`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes a byte to the compressed output stream. This method will
 block until the byte can be written.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the byte to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes an array of bytes to the compressed output stream. This
 method will block until all the bytes are written.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
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
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Writes remaining compressed data to the output stream and closes the
 underlying stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
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
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'deflate()', [
			[/* method description */
				[/* text */ 't', `Writes next block of compressed data to the output stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
