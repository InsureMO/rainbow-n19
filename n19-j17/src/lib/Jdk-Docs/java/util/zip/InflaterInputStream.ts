import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.InflaterInputStream', [
	[/* class description */
		[/* text */ 't', `This class implements a stream filter for uncompressing data in the
 "deflate" compression format. It is also used as the basis for other
 decompression filters, such as GZIPInputStream.`]
	],
	[/* fields */
		[/* field */ 'buf', [
			[/* field description */
				[/* text */ 't', `Input buffer for decompression.`]
			],
		]],
		[/* field */ 'inf', [
			[/* field description */
				[/* text */ 't', `Decompressor for this stream.`]
			],
		]],
		[/* field */ 'len', [
			[/* field description */
				[/* text */ 't', `Length of input buffer.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new input stream with a default decompressor and buffer size.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the input stream`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.InputStream,java.util.zip.Inflater)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new input stream with the specified decompressor and a
 default buffer size.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the input stream`]
				]],
				[/* parameter */ 'inf', [/* parameter description */
					[/* text */ 't', `the decompressor ("inflater")`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.InputStream,java.util.zip.Inflater,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new input stream with the specified decompressor and
 buffer size.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the input stream`]
				]],
				[/* parameter */ 'inf', [/* parameter description */
					[/* text */ 't', `the decompressor ("inflater")`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `the input buffer size`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `size <= 0`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'fill()', [
			[/* method description */
				[/* text */ 't', `Fills input buffer with more data to decompress.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'markSupported()', [
			[/* method description */
				[/* text */ 't', `Tests if this input stream supports the `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', ` methods. The `],
				[/* inline code block */ 'i', `markSupported`],
				[/* text */ 't', `
 method of `],
				[/* inline code block */ 'i', `InflaterInputStream`],
				[/* text */ 't', ` returns
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` indicating if this stream type supports
          the `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `reset`],
				[/* text */ 't', ` methods.`]
			]
		]],
		[/* method */ 'available()', [
			[/* method description */
				[/* text */ 't', `Returns 0 after EOF has been reached, otherwise always return 1.
 `],
				[/* block */ 'b', `
 Programs should not count on this method to return the actual number
 of bytes that could be read without blocking.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `1 before EOF and 0 after EOF.`]
			]
		]],
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Reads a byte of uncompressed data. This method will block until
 enough input is available for decompression.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the byte read, or -1 if end of compressed input is reached`]
			]
		]],
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads uncompressed data into an array of bytes. If `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` is not
 zero, the method will block until some input can be decompressed; otherwise,
 no bytes are read and `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the destination array `],
					[/* inline code block */ 'i', `b`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative,
 `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is greater than
 `],
					[/* inline code block */ 'i', `b.length - off`]
				]],
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a ZIP format error has occurred`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes read, or -1 if the end of the
         compressed input is reached or a preset dictionary is needed`]
			]
		]],
		[/* method */ 'skip(long)', [
			[/* method description */
				[/* text */ 't', `Skips specified number of bytes of uncompressed data.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the number of bytes to skip`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `n < 0`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes skipped.`]
			]
		]],
		[/* method */ 'mark(int)', [
			[/* method description */
				[/* text */ 't', `Marks the current position in this input stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `mark`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `InflaterInputStream`],
					[/* text */ 't', `
 does nothing.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'readlimit', [/* parameter description */
					[/* text */ 't', `the maximum limit of bytes that can be read before
                      the mark position becomes invalid.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Repositions this stream to the position at the time the
 `],
				[/* inline code block */ 'i', `mark`],
				[/* text */ 't', ` method was last called on this input stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The method `],
					[/* inline code block */ 'i', `reset`],
					[/* text */ 't', ` for class
 `],
					[/* inline code block */ 'i', `InflaterInputStream`],
					[/* text */ 't', ` does nothing except throw an
 `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if this method is invoked.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this input stream and releases any system resources associated
 with the stream.`]
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
