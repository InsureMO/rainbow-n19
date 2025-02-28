import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.GZIPInputStream', [
	[/* class description */
		[/* text */ 't', `This class implements a stream filter for reading compressed data in
 the GZIP file format.`]
	],
	[/* fields */
		[/* field */ 'crc', [
			[/* field description */
				[/* text */ 't', `CRC-32 for uncompressed data.`]
			],
		]],
		[/* field */ 'eos', [
			[/* field description */
				[/* text */ 't', `Indicates end of input stream.`]
			],
		]],
		[/* field */ 'GZIP_MAGIC', [
			[/* field description */
				[/* text */ 't', `GZIP header magic number.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new input stream with a default buffer size.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the input stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a GZIP format error has occurred or the
                         compression method used is unsupported`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.InputStream,int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new input stream with the specified buffer size.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `the input stream`]
				]],
				[/* parameter */ 'size', [/* parameter description */
					[/* text */ 't', `the input buffer size`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if a GZIP format error has occurred or the
                         compression method used is unsupported`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `size <= 0`]
				]]
			]
		]]
	],
	[/* methods */
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
				[/* parameter */ 'buf', [/* parameter description */
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
					[/* inline code block */ 'i', `buf`],
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
					[/* inline code block */ 'i', `buf.length - off`]
				]],
				[/* throw */ 'java.util.zip.ZipException', [/* throw description */
					[/* text */ 't', `if the compressed input data is corrupt.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes read, or -1 if the end of the
          compressed input stream is reached`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this input stream and releases any system resources associated
 with the stream.`]
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
