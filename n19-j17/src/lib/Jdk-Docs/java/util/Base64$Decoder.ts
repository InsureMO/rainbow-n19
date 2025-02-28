import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Base64$Decoder', [
	[/* class description */
		[/* text */ 't', `This class implements a decoder for decoding byte data using the
 Base64 encoding scheme as specified in RFC 4648 and RFC 2045.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The Base64 padding character `],
			[/* inline code block */ 'i', `'='`],
			[/* text */ 't', ` is accepted and
 interpreted as the end of the encoded byte data, but is not
 required. So if the final unit of the encoded byte data only has
 two or three Base64 characters (without the corresponding padding
 character(s) padded), they are decoded as if followed by padding
 character(s). If there is a padding character present in the
 final unit, the correct number of padding character(s) must be
 present, otherwise `],
			[/* inline code block */ 'i', `IllegalArgumentException`],
			[/* text */ 't', ` (
 `],
			[/* inline code block */ 'i', `IOException`],
			[/* text */ 't', ` when reading from a Base64 stream) is thrown
 during decoding.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Instances of `],
			[/* reference */ 'r', `java.util.Base64.Decoder`],
			[/* text */ 't', ` class are safe for use by
 multiple concurrent threads.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Unless otherwise noted, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to
 a method of this class will cause a
 `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', ` to
 be thrown.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` If the decoded byte output of the needed size can not
     be allocated, the decode methods of this class will
     cause an `],
			[/* reference */ 'r', `java.lang.OutOfMemoryError`],
			[/* text */ 't', `
     to be thrown.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'decode(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Decodes a Base64 encoded String into a newly-allocated byte array
 using the `],
				[/* reference */ 'r', `java.util.Base64`],
				[/* text */ 't', ` encoding scheme.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method has exactly the same effect as invoking
 `],
					[/* inline code block */ 'i', `decode(src.getBytes(StandardCharsets.ISO_8859_1))`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `the string to decode`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `src`],
					[/* text */ 't', ` is not in valid Base64 scheme`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A newly-allocated byte array containing the decoded bytes.`]
			]
		]],
		[/* method */ 'decode(byte[])', [
			[/* method description */
				[/* text */ 't', `Decodes all bytes from the input byte array using the `],
				[/* reference */ 'r', `java.util.Base64`],
				[/* text */ 't', `
 encoding scheme, writing the results into a newly-allocated output
 byte array. The returned byte array is of the length of the resulting
 bytes.`]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `the byte array to decode`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `src`],
					[/* text */ 't', ` is not in valid Base64 scheme`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A newly-allocated byte array containing the decoded bytes.`]
			]
		]],
		[/* method */ 'decode(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Decodes all bytes from the input byte buffer using the `],
				[/* reference */ 'r', `java.util.Base64`],
				[/* text */ 't', `
 encoding scheme, writing the results into a newly-allocated ByteBuffer.

 `],
				[/* block */ 'b', ` Upon return, the source buffer's position will be updated to
 its limit; its limit will not have been changed. The returned
 output buffer's position will be zero and its limit will be the
 number of resulting decoded bytes

 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown if the input buffer
 is not in valid Base64 encoding scheme. The position of the input
 buffer will not be advanced in this case.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'buffer', [/* parameter description */
					[/* text */ 't', `the ByteBuffer to decode`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `buffer`],
					[/* text */ 't', ` is not in valid Base64 scheme`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A newly-allocated byte buffer containing the decoded bytes`]
			]
		]],
		[/* method */ 'decode(byte[],byte[])', [
			[/* method description */
				[/* text */ 't', `Decodes all bytes from the input byte array using the `],
				[/* reference */ 'r', `java.util.Base64`],
				[/* text */ 't', `
 encoding scheme, writing the results into the given output byte array,
 starting at offset 0.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` It is the responsibility of the invoker of this method to make
 sure the output byte array `],
					[/* inline code block */ 'i', `dst`],
					[/* text */ 't', ` has enough space for decoding
 all bytes from the input byte array. No bytes will be written to
 the output byte array if the output byte array is not big enough.

 `]
				]],
				[/* block */ 'b', ` If the input byte array is not in valid Base64 encoding scheme
 then some bytes may have been written to the output byte array before
 IllegalargumentException is thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `the byte array to decode`]
				]],
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `the output byte array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `src`],
					[/* text */ 't', ` is not in valid Base64 scheme, or `],
					[/* inline code block */ 'i', `dst`],
					[/* text */ 't', `
          does not have enough space for decoding all input bytes.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of bytes written to the output byte array`]
			]
		]],
		[/* method */ 'wrap(java.io.InputStream)', [
			[/* method description */
				[/* text */ 't', `Returns an input stream for decoding `],
				[/* reference */ 'r', `java.util.Base64`],
				[/* text */ 't', ` encoded byte stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `read`],
					[/* text */ 't', `  methods of the returned `],
					[/* inline code block */ 'i', `InputStream`],
					[/* text */ 't', ` will
 throw `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', ` when reading bytes that cannot be decoded.

 `]
				]],
				[/* block */ 'b', ` Closing the returned input stream will close the underlying
 input stream.`]
			],
			[/* parameters */
				[/* parameter */ 'is', [/* parameter description */
					[/* text */ 't', `the input stream`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the input stream for decoding the specified Base64 encoded
          byte stream`]
			]
		]]
	],
]);
