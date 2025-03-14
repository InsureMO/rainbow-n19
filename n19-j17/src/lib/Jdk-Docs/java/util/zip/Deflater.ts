import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.Deflater', [
	[/* class description */
		[/* text */ 't', `This class provides support for general purpose compression using the
 popular ZLIB compression library. The ZLIB compression library was
 initially developed as part of the PNG graphics standard and is not
 protected by patents. It is fully described in the specifications at
 the `],
		[/* text */ 't', `java.util.zip package description`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This class deflates sequences of bytes into ZLIB compressed data format.
 The input byte sequence is provided in either byte array or byte buffer,
 via one of the `],
			[/* inline code block */ 'i', `setInput()`],
			[/* text */ 't', ` methods. The output byte sequence is
 written to the output byte array or byte buffer passed to the
 `],
			[/* inline code block */ 'i', `deflate()`],
			[/* text */ 't', ` methods.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The following code fragment demonstrates a trivial compression
 and decompression of a string using `],
			[/* inline code block */ 'i', `Deflater`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `Inflater`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` try {
     // Encode a String into bytes
     String inputString = "blahblahblah";
     byte[] input = inputString.getBytes("UTF-8");

     // Compress the bytes
     byte[] output = new byte[100];
     Deflater compresser = new Deflater();
     compresser.setInput(input);
     compresser.finish();
     int compressedDataLength = compresser.deflate(output);
     compresser.end();

     // Decompress the bytes
     Inflater decompresser = new Inflater();
     decompresser.setInput(output, 0, compressedDataLength);
     byte[] result = new byte[100];
     int resultLength = decompresser.inflate(result);
     decompresser.end();

     // Decode the bytes into a String
     String outputString = new String(result, 0, resultLength, "UTF-8");
 } catch (java.io.UnsupportedEncodingException ex) {
     // handle
 } catch (java.util.zip.DataFormatException ex) {
     // handle
 }
 `]
		]],
		[/* block */ 'b', '']
	],
	[/* fields */
		[/* field */ 'BEST_COMPRESSION', [
			[/* field description */
				[/* text */ 't', `Compression level for best compression.`]
			],
		]],
		[/* field */ 'BEST_SPEED', [
			[/* field description */
				[/* text */ 't', `Compression level for fastest compression.`]
			],
		]],
		[/* field */ 'DEFAULT_COMPRESSION', [
			[/* field description */
				[/* text */ 't', `Default compression level.`]
			],
		]],
		[/* field */ 'DEFAULT_STRATEGY', [
			[/* field description */
				[/* text */ 't', `Default compression strategy.`]
			],
		]],
		[/* field */ 'DEFLATED', [
			[/* field description */
				[/* text */ 't', `Compression method for the deflate algorithm (the only one currently
 supported).`]
			],
		]],
		[/* field */ 'FILTERED', [
			[/* field description */
				[/* text */ 't', `Compression strategy best used for data consisting mostly of small
 values with a somewhat random distribution. Forces more Huffman coding
 and less string matching.`]
			],
		]],
		[/* field */ 'FULL_FLUSH', [
			[/* field description */
				[/* text */ 't', `Compression flush mode used to flush out all pending output and
 reset the deflater. Using this mode too often can seriously degrade
 compression.`]
			],
		]],
		[/* field */ 'HUFFMAN_ONLY', [
			[/* field description */
				[/* text */ 't', `Compression strategy for Huffman coding only.`]
			],
		]],
		[/* field */ 'NO_COMPRESSION', [
			[/* field description */
				[/* text */ 't', `Compression level for no compression.`]
			],
		]],
		[/* field */ 'NO_FLUSH', [
			[/* field description */
				[/* text */ 't', `Compression flush mode used to achieve best compression result.`]
			],
		]],
		[/* field */ 'SYNC_FLUSH', [
			[/* field description */
				[/* text */ 't', `Compression flush mode used to flush out all pending output; may
 degrade compression for some compression algorithms.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a new compressor with the default compression level.
 Compressed data will be generated in ZLIB format.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new compressor using the specified compression level.
 Compressed data will be generated in ZLIB format.`]
			],
			[/* parameters */
				[/* parameter */ 'level', [/* parameter description */
					[/* text */ 't', `the compression level (0-9)`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new compressor using the specified compression level.
 If 'nowrap' is true then the ZLIB header and checksum fields will
 not be used in order to support the compression format used in
 both GZIP and PKZIP.`]
			],
			[/* parameters */
				[/* parameter */ 'level', [/* parameter description */
					[/* text */ 't', `the compression level (0-9)`]
				]],
				[/* parameter */ 'nowrap', [/* parameter description */
					[/* text */ 't', `if true then use GZIP compatible compression`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'finished()', [
			[/* method description */
				[/* text */ 't', `Returns true if the end of the compressed data output stream has
 been reached.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the end of the compressed data output stream has
 been reached`]
			]
		]],
		[/* method */ 'needsInput()', [
			[/* method description */
				[/* text */ 't', `Returns true if no data remains in the input buffer. This can
 be used to determine if one of the `],
				[/* inline code block */ 'i', `setInput()`],
				[/* text */ 't', ` methods should be
 called in order to provide more input.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the input data buffer is empty and setInput()
 should be called in order to provide more input`]
			]
		]],
		[/* method */ 'deflate(byte[])', [
			[/* method description */
				[/* text */ 't', `Compresses the input data and fills specified buffer with compressed
 data. Returns actual number of bytes of compressed data. A return value
 of 0 indicates that `],
				[/* reference */ 'r', `#needsInput()`, `needsInput`],
				[/* text */ 't', ` should be called
 in order to determine if more input data is required.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method uses `],
					[/* text */ 't', `NO_FLUSH`],
					[/* text */ 't', ` as its compression flush mode.
 An invocation of this method of the form `],
					[/* inline code block */ 'i', `deflater.deflate(b)`],
					[/* text */ 't', `
 yields the same result as the invocation of
 `],
					[/* inline code block */ 'i', `deflater.deflate(b, 0, b.length, Deflater.NO_FLUSH)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'output', [/* parameter description */
					[/* text */ 't', `the buffer for the compressed data`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the actual number of bytes of compressed data written to the
         output buffer`]
			]
		]],
		[/* method */ 'deflate(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Compresses the input data and fills specified buffer with compressed
 data. Returns actual number of bytes of compressed data. A return value
 of 0 indicates that `],
				[/* reference */ 'r', `#needsInput()`, `needsInput`],
				[/* text */ 't', ` should be called
 in order to determine if more input data is required.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method uses `],
					[/* text */ 't', `NO_FLUSH`],
					[/* text */ 't', ` as its compression flush mode.
 An invocation of this method of the form `],
					[/* inline code block */ 'i', `deflater.deflate(b, off, len)`],
					[/* text */ 't', `
 yields the same result as the invocation of
 `],
					[/* inline code block */ 'i', `deflater.deflate(b, off, len, Deflater.NO_FLUSH)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'output', [/* parameter description */
					[/* text */ 't', `the buffer for the compressed data`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset of the data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes of compressed data`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the actual number of bytes of compressed data written to the
         output buffer`]
			]
		]],
		[/* method */ 'deflate(byte[],int,int,int)', [
			[/* method description */
				[/* text */ 't', `Compresses the input data and fills the specified buffer with compressed
 data. Returns actual number of bytes of data compressed.

 `],
				[/* block */ 'b', `Compression flush mode is one of the following three modes:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `NO_FLUSH`],
						[/* text */ 't', `: allows the deflater to decide how much data
 to accumulate, before producing output, in order to achieve the best
 compression (should be used in normal use scenario). A return value
 of 0 in this flush mode indicates that `],
						[/* reference */ 'r', `#needsInput()`, `needsInput()`],
						[/* text */ 't', ` should
 be called in order to determine if more input data is required.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `SYNC_FLUSH`],
						[/* text */ 't', `: all pending output in the deflater is flushed,
 to the specified output buffer, so that an inflater that works on
 compressed data can get all input data available so far (In particular
 the `],
						[/* reference */ 'r', `#needsInput()`, `needsInput()`],
						[/* text */ 't', ` returns `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', ` after this invocation
 if enough output space is provided). Flushing with `],
						[/* text */ 't', `SYNC_FLUSH`],
						[/* text */ 't', `
 may degrade compression for some compression algorithms and so it
 should be used only when necessary.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `FULL_FLUSH`],
						[/* text */ 't', `: all pending output is flushed out as with
 `],
						[/* text */ 't', `SYNC_FLUSH`],
						[/* text */ 't', `. The compression state is reset so that the inflater
 that works on the compressed output data can restart from this point
 if previous compressed data has been damaged or if random access is
 desired. Using `],
						[/* text */ 't', `FULL_FLUSH`],
						[/* text */ 't', ` too often can seriously degrade
 compression.
 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `In the case of `],
					[/* text */ 't', `FULL_FLUSH`],
					[/* text */ 't', ` or `],
					[/* text */ 't', `SYNC_FLUSH`],
					[/* text */ 't', `, if
 the return value is `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', `, the space available in output
 buffer `],
					[/* inline code block */ 'i', `b`],
					[/* text */ 't', `, this method should be invoked again with the same
 `],
					[/* inline code block */ 'i', `flush`],
					[/* text */ 't', ` parameter and more output space. Make sure that
 `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is greater than 6 to avoid flush marker (5 bytes) being
 repeatedly output to the output buffer every time this method is
 invoked.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the `],
					[/* reference */ 'r', `#setInput(java.nio.ByteBuffer)`, `setInput(ByteBuffer)`],
					[/* text */ 't', ` method was called to provide a buffer
 for input, the input buffer's position will be advanced by the number of bytes
 consumed by this operation.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'output', [/* parameter description */
					[/* text */ 't', `the buffer for the compressed data`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset of the data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes of compressed data`]
				]],
				[/* parameter */ 'flush', [/* parameter description */
					[/* text */ 't', `the compression flush mode`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the flush mode is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes of compressed data written to
         the output buffer`]
			]
		]],
		[/* method */ 'deflate(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Compresses the input data and fills specified buffer with compressed
 data. Returns actual number of bytes of compressed data. A return value
 of 0 indicates that `],
				[/* reference */ 'r', `#needsInput()`, `needsInput`],
				[/* text */ 't', ` should be called
 in order to determine if more input data is required.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method uses `],
					[/* text */ 't', `NO_FLUSH`],
					[/* text */ 't', ` as its compression flush mode.
 An invocation of this method of the form `],
					[/* inline code block */ 'i', `deflater.deflate(output)`],
					[/* text */ 't', `
 yields the same result as the invocation of
 `],
					[/* inline code block */ 'i', `deflater.deflate(output, Deflater.NO_FLUSH)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'output', [/* parameter description */
					[/* text */ 't', `the buffer for the compressed data`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the actual number of bytes of compressed data written to the
         output buffer`]
			]
		]],
		[/* method */ 'deflate(java.nio.ByteBuffer,int)', [
			[/* method description */
				[/* text */ 't', `Compresses the input data and fills the specified buffer with compressed
 data. Returns actual number of bytes of data compressed.

 `],
				[/* block */ 'b', `Compression flush mode is one of the following three modes:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `NO_FLUSH`],
						[/* text */ 't', `: allows the deflater to decide how much data
 to accumulate, before producing output, in order to achieve the best
 compression (should be used in normal use scenario). A return value
 of 0 in this flush mode indicates that `],
						[/* reference */ 'r', `#needsInput()`, `needsInput()`],
						[/* text */ 't', ` should
 be called in order to determine if more input data is required.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `SYNC_FLUSH`],
						[/* text */ 't', `: all pending output in the deflater is flushed,
 to the specified output buffer, so that an inflater that works on
 compressed data can get all input data available so far (In particular
 the `],
						[/* reference */ 'r', `#needsInput()`, `needsInput()`],
						[/* text */ 't', ` returns `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', ` after this invocation
 if enough output space is provided). Flushing with `],
						[/* text */ 't', `SYNC_FLUSH`],
						[/* text */ 't', `
 may degrade compression for some compression algorithms and so it
 should be used only when necessary.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `FULL_FLUSH`],
						[/* text */ 't', `: all pending output is flushed out as with
 `],
						[/* text */ 't', `SYNC_FLUSH`],
						[/* text */ 't', `. The compression state is reset so that the inflater
 that works on the compressed output data can restart from this point
 if previous compressed data has been damaged or if random access is
 desired. Using `],
						[/* text */ 't', `FULL_FLUSH`],
						[/* text */ 't', ` too often can seriously degrade
 compression.
 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `In the case of `],
					[/* text */ 't', `FULL_FLUSH`],
					[/* text */ 't', ` or `],
					[/* text */ 't', `SYNC_FLUSH`],
					[/* text */ 't', `, if
 the return value is equal to the `],
					[/* reference */ 'r', `java.nio.Buffer#remaining()`, `remaining space`],
					[/* text */ 't', `
 of the buffer, this method should be invoked again with the same
 `],
					[/* inline code block */ 'i', `flush`],
					[/* text */ 't', ` parameter and more output space. Make sure that
 the buffer has at least 6 bytes of remaining space to avoid the
 flush marker (5 bytes) being repeatedly output to the output buffer
 every time this method is invoked.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `On success, the position of the given `],
					[/* inline code block */ 'i', `output`],
					[/* text */ 't', ` byte buffer will be
 advanced by as many bytes as were produced by the operation, which is equal
 to the number returned by this method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the `],
					[/* reference */ 'r', `#setInput(java.nio.ByteBuffer)`, `setInput(ByteBuffer)`],
					[/* text */ 't', ` method was called to provide a buffer
 for input, the input buffer's position will be advanced by the number of bytes
 consumed by this operation.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'output', [/* parameter description */
					[/* text */ 't', `the buffer for the compressed data`]
				]],
				[/* parameter */ 'flush', [/* parameter description */
					[/* text */ 't', `the compression flush mode`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the flush mode is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes of compressed data written to
         the output buffer`]
			]
		]],
		[/* method */ 'getAdler()', [
			[/* method description */
				[/* text */ 't', `Returns the ADLER-32 value of the uncompressed data.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ADLER-32 value of the uncompressed data`]
			]
		]],
		[/* method */ 'getTotalIn()', [
			[/* method description */
				[/* text */ 't', `Returns the total number of uncompressed bytes input so far.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Since the number of bytes may be greater than
 Integer.MAX_VALUE, the `],
					[/* reference */ 'r', `#getBytesRead()`, `getBytesRead()`],
					[/* text */ 't', ` method is now
 the preferred means of obtaining this information.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the total number of uncompressed bytes input so far`]
			]
		]],
		[/* method */ 'getTotalOut()', [
			[/* method description */
				[/* text */ 't', `Returns the total number of compressed bytes output so far.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Since the number of bytes may be greater than
 Integer.MAX_VALUE, the `],
					[/* reference */ 'r', `#getBytesWritten()`, `getBytesWritten()`],
					[/* text */ 't', ` method is now
 the preferred means of obtaining this information.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the total number of compressed bytes output so far`]
			]
		]],
		[/* method */ 'getBytesRead()', [
			[/* method description */
				[/* text */ 't', `Returns the total number of uncompressed bytes input so far.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the total (non-negative) number of uncompressed bytes input so far`]
			]
		]],
		[/* method */ 'getBytesWritten()', [
			[/* method description */
				[/* text */ 't', `Returns the total number of compressed bytes output so far.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the total (non-negative) number of compressed bytes output so far`]
			]
		]],
		[/* method */ 'end()', [
			[/* method description */
				[/* text */ 't', `Closes the compressor and discards any unprocessed input.

 This method should be called when the compressor is no longer
 being used. Once this method is called, the behavior of the
 Deflater object is undefined.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'finish()', [
			[/* method description */
				[/* text */ 't', `When called, indicates that compression should end with the current
 contents of the input buffer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets deflater so that a new set of input data can be processed.
 Keeps current compression level and strategy settings.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setDictionary(byte[])', [
			[/* method description */
				[/* text */ 't', `Sets preset dictionary for compression. A preset dictionary is used
 when the history buffer can be predetermined. When the data is later
 uncompressed with Inflater.inflate(), Inflater.getAdler() can be called
 in order to get the Adler-32 value of the dictionary required for
 decompression.`]
			],
			[/* parameters */
				[/* parameter */ 'dictionary', [/* parameter description */
					[/* text */ 't', `the dictionary data bytes`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setDictionary(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sets preset dictionary for compression. A preset dictionary is used
 when the history buffer can be predetermined. When the data is later
 uncompressed with Inflater.inflate(), Inflater.getAdler() can be called
 in order to get the Adler-32 value of the dictionary required for
 decompression.`]
			],
			[/* parameters */
				[/* parameter */ 'dictionary', [/* parameter description */
					[/* text */ 't', `the dictionary data bytes`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset of the data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the length of the data`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setDictionary(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Sets preset dictionary for compression. A preset dictionary is used
 when the history buffer can be predetermined. When the data is later
 uncompressed with Inflater.inflate(), Inflater.getAdler() can be called
 in order to get the Adler-32 value of the dictionary required for
 decompression.
 `],
				[/* block */ 'b', `
 The bytes in given byte buffer will be fully consumed by this method.  On
 return, its position will equal its limit.`]
			],
			[/* parameters */
				[/* parameter */ 'dictionary', [/* parameter description */
					[/* text */ 't', `the dictionary data bytes`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setInput(byte[])', [
			[/* method description */
				[/* text */ 't', `Sets input data for compression.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 One of the `],
					[/* inline code block */ 'i', `setInput()`],
					[/* text */ 't', ` methods should be called whenever
 `],
					[/* inline code block */ 'i', `needsInput()`],
					[/* text */ 't', ` returns true indicating that more input data
 is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'input', [/* parameter description */
					[/* text */ 't', `the input data bytes`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setInput(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Sets input data for compression.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 One of the `],
					[/* inline code block */ 'i', `setInput()`],
					[/* text */ 't', ` methods should be called whenever
 `],
					[/* inline code block */ 'i', `needsInput()`],
					[/* text */ 't', ` returns true indicating that more input data
 is required.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'input', [/* parameter description */
					[/* text */ 't', `the input data bytes`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset of the data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the length of the data`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setInput(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Sets input data for compression.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 One of the `],
					[/* inline code block */ 'i', `setInput()`],
					[/* text */ 't', ` methods should be called whenever
 `],
					[/* inline code block */ 'i', `needsInput()`],
					[/* text */ 't', ` returns true indicating that more input data
 is required.
 `]
				]],
				[/* block */ 'b', `
 The given buffer's position will be advanced as deflate
 operations are performed, up to the buffer's limit.
 The input buffer may be modified (refilled) between deflate
 operations; doing so is equivalent to creating a new buffer
 and setting it with this method.
 `],
				[/* block */ 'b', `
 Modifying the input buffer's contents, position, or limit
 concurrently with an deflate operation will result in
 undefined behavior, which may include incorrect operation
 results or operation failure.`]
			],
			[/* parameters */
				[/* parameter */ 'input', [/* parameter description */
					[/* text */ 't', `the input data bytes`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setLevel(int)', [
			[/* method description */
				[/* text */ 't', `Sets the compression level to the specified value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the compression level is changed, the next invocation
 of `],
					[/* inline code block */ 'i', `deflate`],
					[/* text */ 't', ` will compress the input available so far
 with the old level (and may be flushed); the new level will
 take effect only after that invocation.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'level', [/* parameter description */
					[/* text */ 't', `the new compression level (0-9)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the compression level is invalid`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setStrategy(int)', [
			[/* method description */
				[/* text */ 't', `Sets the compression strategy to the specified value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the compression strategy is changed, the next invocation
 of `],
					[/* inline code block */ 'i', `deflate`],
					[/* text */ 't', ` will compress the input available so far with
 the old strategy (and may be flushed); the new strategy will take
 effect only after that invocation.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'strategy', [/* parameter description */
					[/* text */ 't', `the new compression strategy`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the compression strategy is
                                     invalid`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
