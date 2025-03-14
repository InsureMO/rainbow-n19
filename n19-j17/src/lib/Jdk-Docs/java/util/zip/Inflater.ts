import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.zip.Inflater', [
	[/* class description */
		[/* text */ 't', `This class provides support for general purpose decompression using the
 popular ZLIB compression library. The ZLIB compression library was
 initially developed as part of the PNG graphics standard and is not
 protected by patents. It is fully described in the specifications at
 the `],
		[/* text */ 't', `java.util.zip package description`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This class inflates sequences of ZLIB compressed bytes. The input byte
 sequence is provided in either byte array or byte buffer, via one of the
 `],
			[/* inline code block */ 'i', `setInput()`],
			[/* text */ 't', ` methods. The output byte sequence is written to the
 output byte array or byte buffer passed to the `],
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
		[/* blockquote */ 'q', [
			[/* code block */ 'c', ` try {
     // Encode a String into bytes
     String inputString = "blahblahblah€€";
     byte[] input = inputString.getBytes("UTF-8");

     // Compress the bytes
     byte[] output = new byte[100];
     Deflater compresser = new Deflater();
     compresser.setInput(input);
     compresser.finish();
     int compressedDataLength = compresser.deflate(output);

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
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a new decompressor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new decompressor. If the parameter 'nowrap' is true then
 the ZLIB header and checksum fields will not be used. This provides
 compatibility with the compression format used by both GZIP and PKZIP.
 `],
				[/* block */ 'b', `
 Note: When using the 'nowrap' option it is also necessary to provide
 an extra "dummy" byte as input. This is required by the ZLIB native
 library in order to support certain optimizations.`]
			],
			[/* parameters */
				[/* parameter */ 'nowrap', [/* parameter description */
					[/* text */ 't', `if true then support GZIP compatible compression`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'finished()', [
			[/* method description */
				[/* text */ 't', `Returns true if the end of the compressed data stream has been
 reached.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the end of the compressed data stream has been
 reached`]
			]
		]],
		[/* method */ 'needsDictionary()', [
			[/* method description */
				[/* text */ 't', `Returns true if a preset dictionary is needed for decompression.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if a preset dictionary is needed for decompression`]
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
				[/* text */ 't', `true if no data remains in the input buffer`]
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
		[/* method */ 'getRemaining()', [
			[/* method description */
				[/* text */ 't', `Returns the total number of bytes remaining in the input buffer.
 This can be used to find out what bytes still remain in the input
 buffer after decompression has finished.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the total number of bytes remaining in the input buffer`]
			]
		]],
		[/* method */ 'getTotalIn()', [
			[/* method description */
				[/* text */ 't', `Returns the total number of compressed bytes input so far.

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
				[/* text */ 't', `the total number of compressed bytes input so far`]
			]
		]],
		[/* method */ 'getTotalOut()', [
			[/* method description */
				[/* text */ 't', `Returns the total number of uncompressed bytes output so far.

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
				[/* text */ 't', `the total number of uncompressed bytes output so far`]
			]
		]],
		[/* method */ 'inflate(byte[])', [
			[/* method description */
				[/* text */ 't', `Uncompresses bytes into specified buffer. Returns actual number
 of bytes uncompressed. A return value of 0 indicates that
 needsInput() or needsDictionary() should be called in order to
 determine if more input data or a preset dictionary is required.
 In the latter case, getAdler() can be used to get the Adler-32
 value of the dictionary required.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* reference */ 'r', `#getRemaining()`, `remaining byte count`],
					[/* text */ 't', ` will be reduced by
 the number of consumed input bytes.  If the `],
					[/* reference */ 'r', `#setInput(java.nio.ByteBuffer)`, `setInput(ByteBuffer)`],
					[/* text */ 't', `
 method was called to provide a buffer for input, the input buffer's position
 will be advanced the number of consumed bytes.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 These byte totals, as well as
 the `],
					[/* reference */ 'r', `#getBytesRead()`, `total bytes read`],
					[/* text */ 't', `
 and the `],
					[/* reference */ 'r', `#getBytesWritten()`, `total bytes written`],
					[/* text */ 't', `
 values, will be updated even in the event that a `],
					[/* reference */ 'r', `java.util.zip.DataFormatException`, `DataFormatException`],
					[/* text */ 't', `
 is thrown to reflect the amount of data consumed and produced before the
 exception occurred.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'output', [/* parameter description */
					[/* text */ 't', `the buffer for the uncompressed data`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.zip.DataFormatException', [/* throw description */
					[/* text */ 't', `if the compressed data format is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of uncompressed bytes`]
			]
		]],
		[/* method */ 'inflate(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Uncompresses bytes into specified buffer. Returns actual number
 of bytes uncompressed. A return value of 0 indicates that
 needsInput() or needsDictionary() should be called in order to
 determine if more input data or a preset dictionary is required.
 In the latter case, getAdler() can be used to get the Adler-32
 value of the dictionary required.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the `],
					[/* reference */ 'r', `#setInput(java.nio.ByteBuffer)`, `setInput(ByteBuffer)`],
					[/* text */ 't', ` method was called to provide a buffer
 for input, the input buffer's position will be advanced by the number of bytes
 consumed by this operation, even in the event that a `],
					[/* reference */ 'r', `java.util.zip.DataFormatException`, `DataFormatException`],
					[/* text */ 't', `
 is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* reference */ 'r', `#getRemaining()`, `remaining byte count`],
					[/* text */ 't', ` will be reduced by
 the number of consumed input bytes.  If the `],
					[/* reference */ 'r', `#setInput(java.nio.ByteBuffer)`, `setInput(ByteBuffer)`],
					[/* text */ 't', `
 method was called to provide a buffer for input, the input buffer's position
 will be advanced the number of consumed bytes.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 These byte totals, as well as
 the `],
					[/* reference */ 'r', `#getBytesRead()`, `total bytes read`],
					[/* text */ 't', `
 and the `],
					[/* reference */ 'r', `#getBytesWritten()`, `total bytes written`],
					[/* text */ 't', `
 values, will be updated even in the event that a `],
					[/* reference */ 'r', `java.util.zip.DataFormatException`, `DataFormatException`],
					[/* text */ 't', `
 is thrown to reflect the amount of data consumed and produced before the
 exception occurred.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'output', [/* parameter description */
					[/* text */ 't', `the buffer for the uncompressed data`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset of the data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of uncompressed bytes`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.zip.DataFormatException', [/* throw description */
					[/* text */ 't', `if the compressed data format is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of uncompressed bytes`]
			]
		]],
		[/* method */ 'inflate(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Uncompresses bytes into specified buffer. Returns actual number
 of bytes uncompressed. A return value of 0 indicates that
 needsInput() or needsDictionary() should be called in order to
 determine if more input data or a preset dictionary is required.
 In the latter case, getAdler() can be used to get the Adler-32
 value of the dictionary required.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 On success, the position of the given `],
					[/* inline code block */ 'i', `output`],
					[/* text */ 't', ` byte buffer will be
 advanced by as many bytes as were produced by the operation, which is equal
 to the number returned by this method.  Note that the position of the
 `],
					[/* inline code block */ 'i', `output`],
					[/* text */ 't', ` buffer will be advanced even in the event that a
 `],
					[/* reference */ 'r', `java.util.zip.DataFormatException`, `DataFormatException`],
					[/* text */ 't', ` is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* reference */ 'r', `#getRemaining()`, `remaining byte count`],
					[/* text */ 't', ` will be reduced by
 the number of consumed input bytes.  If the `],
					[/* reference */ 'r', `#setInput(java.nio.ByteBuffer)`, `setInput(ByteBuffer)`],
					[/* text */ 't', `
 method was called to provide a buffer for input, the input buffer's position
 will be advanced the number of consumed bytes.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 These byte totals, as well as
 the `],
					[/* reference */ 'r', `#getBytesRead()`, `total bytes read`],
					[/* text */ 't', `
 and the `],
					[/* reference */ 'r', `#getBytesWritten()`, `total bytes written`],
					[/* text */ 't', `
 values, will be updated even in the event that a `],
					[/* reference */ 'r', `java.util.zip.DataFormatException`, `DataFormatException`],
					[/* text */ 't', `
 is thrown to reflect the amount of data consumed and produced before the
 exception occurred.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'output', [/* parameter description */
					[/* text */ 't', `the buffer for the uncompressed data`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.zip.DataFormatException', [/* throw description */
					[/* text */ 't', `if the compressed data format is invalid`]
				]],
				[/* throw */ 'java.nio.ReadOnlyBufferException', [/* throw description */
					[/* text */ 't', `if the given output buffer is read-only`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of uncompressed bytes`]
			]
		]],
		[/* method */ 'getBytesRead()', [
			[/* method description */
				[/* text */ 't', `Returns the total number of compressed bytes input so far.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the total (non-negative) number of compressed bytes input so far`]
			]
		]],
		[/* method */ 'getBytesWritten()', [
			[/* method description */
				[/* text */ 't', `Returns the total number of uncompressed bytes output so far.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the total (non-negative) number of uncompressed bytes output so far`]
			]
		]],
		[/* method */ 'end()', [
			[/* method description */
				[/* text */ 't', `Closes the decompressor and discards any unprocessed input.

 This method should be called when the decompressor is no longer
 being used. Once this method is called, the behavior of the
 Inflater object is undefined.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets inflater so that a new set of input data can be processed.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setDictionary(byte[])', [
			[/* method description */
				[/* text */ 't', `Sets the preset dictionary to the given array of bytes. Should be
 called when inflate() returns 0 and needsDictionary() returns true
 indicating that a preset dictionary is required. The method getAdler()
 can be used to get the Adler-32 value of the dictionary needed.`]
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
				[/* text */ 't', `Sets the preset dictionary to the given array of bytes. Should be
 called when inflate() returns 0 and needsDictionary() returns true
 indicating that a preset dictionary is required. The method getAdler()
 can be used to get the Adler-32 value of the dictionary needed.`]
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
				[/* text */ 't', `Sets the preset dictionary to the bytes in the given buffer. Should be
 called when inflate() returns 0 and needsDictionary() returns true
 indicating that a preset dictionary is required. The method getAdler()
 can be used to get the Adler-32 value of the dictionary needed.
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
				[/* text */ 't', `Sets input data for decompression.
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
				[/* text */ 't', `Sets input data for decompression.
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
					[/* text */ 't', `the start offset of the input data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the length of the input data`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setInput(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Sets input data for decompression.
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
 The given buffer's position will be advanced as inflate
 operations are performed, up to the buffer's limit.
 The input buffer may be modified (refilled) between inflate
 operations; doing so is equivalent to creating a new buffer
 and setting it with this method.
 `],
				[/* block */ 'b', `
 Modifying the input buffer's contents, position, or limit
 concurrently with an inflate operation will result in
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
		]]
	],
]);
