import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Base64', [
	[/* class description */
		[/* text */ 't', `This class consists exclusively of static methods for obtaining
 encoders and decoders for the Base64 encoding scheme. The
 implementation of this class supports the following types of Base64
 as specified in
 `],
		[/* external link */ 'a', `http://www.ietf.org/rfc/rfc4648.txt`, `RFC 4648`],
		[/* text */ 't', ` and
 `],
		[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2045.txt`, `RFC 2045`],
		[/* text */ 't', `.

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Basic`],
				[/* block */ 'b', ` Uses "The Base64 Alphabet" as specified in Table 1 of
     RFC 4648 and RFC 2045 for encoding and decoding operation.
     The encoder does not add any line feed (line separator)
     character. The decoder rejects data that contains characters
     outside the base64 alphabet.`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `URL and Filename safe`],
				[/* block */ 'b', ` Uses the "URL and Filename safe Base64 Alphabet" as specified
     in Table 2 of RFC 4648 for encoding and decoding. The
     encoder does not add any line feed (line separator) character.
     The decoder rejects data that contains characters outside the
     base64 alphabet.`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `MIME`],
				[/* block */ 'b', [
					[/* text */ 't', ` Uses "The Base64 Alphabet" as specified in Table 1 of
     RFC 2045 for encoding and decoding operation. The encoded output
     must be represented in lines of no more than 76 characters each
     and uses a carriage return `],
					[/* inline code block */ 'i', `'\\r'`],
					[/* text */ 't', ` followed immediately by
     a linefeed `],
					[/* inline code block */ 'i', `'\\n'`],
					[/* text */ 't', ` as the line separator. No line separator
     is added to the end of the encoded output. All line separators
     or other characters not found in the base64 alphabet table are
     ignored in decoding operation.`]
				]]
			]]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Unless otherwise noted, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to a
 method of this class will cause a `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', ` to be thrown.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getDecoder()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Base64.Decoder`],
				[/* text */ 't', ` that decodes using the
 `],
				[/* text */ 't', `Basic`],
				[/* text */ 't', ` type base64 encoding scheme.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A Base64 decoder.`]
			]
		]],
		[/* method */ 'getMimeDecoder()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Base64.Decoder`],
				[/* text */ 't', ` that decodes using the
 `],
				[/* text */ 't', `MIME`],
				[/* text */ 't', ` type base64 decoding scheme.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A Base64 decoder.`]
			]
		]],
		[/* method */ 'getUrlDecoder()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Base64.Decoder`],
				[/* text */ 't', ` that decodes using the
 `],
				[/* text */ 't', `URL and Filename safe`],
				[/* text */ 't', ` type base64
 encoding scheme.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A Base64 decoder.`]
			]
		]],
		[/* method */ 'getEncoder()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Base64.Encoder`],
				[/* text */ 't', ` that encodes using the
 `],
				[/* text */ 't', `Basic`],
				[/* text */ 't', ` type base64 encoding scheme.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A Base64 encoder.`]
			]
		]],
		[/* method */ 'getMimeEncoder()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Base64.Encoder`],
				[/* text */ 't', ` that encodes using the
 `],
				[/* text */ 't', `MIME`],
				[/* text */ 't', ` type base64 encoding scheme.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A Base64 encoder.`]
			]
		]],
		[/* method */ 'getMimeEncoder(int,byte[])', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Base64.Encoder`],
				[/* text */ 't', ` that encodes using the
 `],
				[/* text */ 't', `MIME`],
				[/* text */ 't', ` type base64 encoding scheme
 with specified line length and line separators.`]
			],
			[/* parameters */
				[/* parameter */ 'lineLength', [/* parameter description */
					[/* text */ 't', `the length of each output line (rounded down to nearest multiple
          of 4). If the rounded down line length is not a positive value,
          the output will not be separated in lines`]
				]],
				[/* parameter */ 'lineSeparator', [/* parameter description */
					[/* text */ 't', `the line separator for each output line`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `lineSeparator`],
					[/* text */ 't', ` includes any
          character of "The Base64 Alphabet" as specified in Table 1 of
          RFC 2045.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A Base64 encoder.`]
			]
		]],
		[/* method */ 'getUrlEncoder()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.Base64.Encoder`],
				[/* text */ 't', ` that encodes using the
 `],
				[/* text */ 't', `URL and Filename safe`],
				[/* text */ 't', ` type base64
 encoding scheme.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A Base64 encoder.`]
			]
		]]
	],
]);
