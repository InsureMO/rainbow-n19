import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.CodeSigner', [
	[/* class description */
		[/* text */ 't', `This class encapsulates information about a code signer.
 It is immutable.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.security.cert.CertPath,java.security.Timestamp)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a CodeSigner object.`]
			],
			[/* parameters */
				[/* parameter */ 'signerCertPath', [/* parameter description */
					[/* text */ 't', `The signer's certificate path.
                       It must not be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'timestamp', [/* parameter description */
					[/* text */ 't', `A signature timestamp.
                  If `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no timestamp was generated
                  for the signature.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `signerCertPath`],
					[/* text */ 't', ` is
                              `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests for equality between the specified object and this
 code signer. Two code signers are considered equal if their
 signer certificate paths are equal and if their timestamps are equal,
 if present in both.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to test for equality with this object.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the objects are considered equal, false otherwise.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this code signer.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A string comprising the signer's certificate and a timestamp,
         if present.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this code signer.
 The hash code is generated using the signer's certificate path and the
 timestamp, if present.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this code signer.`]
			]
		]],
		[/* method */ 'getSignerCertPath()', [
			[/* method description */
				[/* text */ 't', `Returns the signer's certificate path.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A certificate path.`]
			]
		]],
		[/* method */ 'getTimestamp()', [
			[/* method description */
				[/* text */ 't', `Returns the signature timestamp.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The timestamp or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if none is present.`]
			]
		]]
	],
]);
