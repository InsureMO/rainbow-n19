import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Base64$Encoder', [
	[/* class description */
		[/* text */ 't', `This class implements an encoder for encoding byte data using
 the Base64 encoding scheme as specified in RFC 4648 and RFC 2045.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Instances of `],
			[/* reference */ 'r', `java.util.Base64.Encoder`],
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
			[/* text */ 't', ` If the encoded byte output of the needed size can not
     be allocated, the encode methods of this class will
     cause an `],
			[/* reference */ 'r', `java.lang.OutOfMemoryError`],
			[/* text */ 't', `
     to be thrown.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'wrap(java.io.OutputStream)', [
			[/* method description */
				[/* text */ 't', `Wraps an output stream for encoding byte data using the `],
				[/* reference */ 'r', `java.util.Base64`],
				[/* text */ 't', `
 encoding scheme.

 `],
				[/* block */ 'b', ` It is recommended to promptly close the returned output stream after
 use, during which it will flush all possible leftover bytes to the underlying
 output stream. Closing the returned output stream will close the underlying
 output stream.`]
			],
			[/* parameters */
				[/* parameter */ 'os', [/* parameter description */
					[/* text */ 't', `the output stream.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the output stream for encoding the byte data into the
          specified Base64 encoded format`]
			]
		]],
		[/* method */ 'encode(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Encodes all remaining bytes from the specified byte buffer into
 a newly-allocated ByteBuffer using the `],
				[/* reference */ 'r', `java.util.Base64`],
				[/* text */ 't', ` encoding
 scheme.

 Upon return, the source buffer's position will be updated to
 its limit; its limit will not have been changed. The returned
 output buffer's position will be zero and its limit will be the
 number of resulting encoded bytes.`]
			],
			[/* parameters */
				[/* parameter */ 'buffer', [/* parameter description */
					[/* text */ 't', `the source ByteBuffer to encode`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A newly-allocated byte buffer containing the encoded bytes.`]
			]
		]],
		[/* method */ 'encode(byte[])', [
			[/* method description */
				[/* text */ 't', `Encodes all bytes from the specified byte array into a newly-allocated
 byte array using the `],
				[/* reference */ 'r', `java.util.Base64`],
				[/* text */ 't', ` encoding scheme. The returned byte
 array is of the length of the resulting bytes.`]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `the byte array to encode`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A newly-allocated byte array containing the resulting
          encoded bytes.`]
			]
		]],
		[/* method */ 'encode(byte[],byte[])', [
			[/* method description */
				[/* text */ 't', `Encodes all bytes from the specified byte array using the
 `],
				[/* reference */ 'r', `java.util.Base64`],
				[/* text */ 't', ` encoding scheme, writing the resulting bytes to the
 given output byte array, starting at offset 0.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` It is the responsibility of the invoker of this method to make
 sure the output byte array `],
					[/* inline code block */ 'i', `dst`],
					[/* text */ 't', ` has enough space for encoding
 all bytes from the input byte array. No bytes will be written to the
 output byte array if the output byte array is not big enough.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `the byte array to encode`]
				]],
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `the output byte array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `dst`],
					[/* text */ 't', ` does not have enough
          space for encoding all input bytes.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The number of bytes written to the output byte array`]
			]
		]],
		[/* method */ 'encodeToString(byte[])', [
			[/* method description */
				[/* text */ 't', `Encodes the specified byte array into a String using the `],
				[/* reference */ 'r', `java.util.Base64`],
				[/* text */ 't', `
 encoding scheme.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method first encodes all input bytes into a base64 encoded
 byte array and then constructs a new String by using the encoded byte
 array and the `],
					[/* reference */ 'r', `java.charset.StandardCharsets#ISO_8859_1`],
					[/* text */ 't', ` charset.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In other words, an invocation of this method has exactly the same
 effect as invoking
 `],
					[/* inline code block */ 'i', `new String(encode(src), StandardCharsets.ISO_8859_1)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'src', [/* parameter description */
					[/* text */ 't', `the byte array to encode`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A String containing the resulting Base64 encoded characters`]
			]
		]],
		[/* method */ 'withoutPadding()', [
			[/* method description */
				[/* text */ 't', `Returns an encoder instance that encodes equivalently to this one,
 but without adding any padding character at the end of the encoded
 byte data.

 `],
				[/* block */ 'b', ` The encoding scheme of this encoder instance is unaffected by
 this invocation. The returned encoder instance should be used for
 non-padding encoding operation.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an equivalent encoder that encodes without adding any
         padding character at the end`]
			]
		]]
	],
]);
