import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.Timestamp', [
	[/* class description */
		[/* text */ 't', `This class encapsulates information about a signed timestamp.
 It is immutable.
 It includes the timestamp's date and time as well as information about the
 Timestamping Authority (TSA) which generated and signed the timestamp.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.util.Date,java.security.cert.CertPath)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a Timestamp.`]
			],
			[/* parameters */
				[/* parameter */ 'timestamp', [/* parameter description */
					[/* text */ 't', `is the timestamp's date and time. It must not be null.`]
				]],
				[/* parameter */ 'signerCertPath', [/* parameter description */
					[/* text */ 't', `is the TSA's certificate path. It must not be null.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if timestamp or signerCertPath is null.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests for equality between the specified object and this
 timestamp. Two timestamps are considered equal if the date and time of
 their timestamp's and their signer's certificate paths are equal.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to test for equality with this timestamp.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the timestamp are considered equal, false otherwise.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this timestamp.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A string comprising the date and time of the timestamp and
         its signer's certificate.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this timestamp.
 The hash code is generated using the date and time of the timestamp
 and the TSA's certificate path.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this timestamp.`]
			]
		]],
		[/* method */ 'getSignerCertPath()', [
			[/* method description */
				[/* text */ 't', `Returns the certificate path for the Timestamping Authority.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The TSA's certificate path.`]
			]
		]],
		[/* method */ 'getTimestamp()', [
			[/* method description */
				[/* text */ 't', `Returns the date and time when the timestamp was generated.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The timestamp's date and time.`]
			]
		]]
	],
]);
