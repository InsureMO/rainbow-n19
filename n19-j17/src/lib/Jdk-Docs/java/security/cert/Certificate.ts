import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.security.cert.Certificate', [
	[/* class description */
		[/* block */ 'b', `Abstract class for managing a variety of identity certificates.
 An identity certificate is a binding of a principal to a public key which
 is vouched for by another principal.  (A principal represents
 an entity such as an individual user, a group, or a corporation.)
 `],
		[/* block */ 'b', `
 This class is an abstraction for certificates that have different
 formats but important common uses.  For example, different types of
 certificates, such as X.509 and PGP, share general certificate
 functionality (like encoding and verifying) and
 some types of information (like a public key).
 `],
		[/* block */ 'b', `
 X.509, PGP, and SDSI certificates can all be implemented by
 subclassing the Certificate class, even though they contain different
 sets of information, and they store and retrieve the information in
 different ways.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a certificate of the specified type.`]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the standard name of the certificate type.
 See the CertificateFactory section in the `],
					[/* text */ 't', `Java Security Standard Algorithm Names Specification`],
					[/* text */ 't', `
 for information about standard certificate types.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'writeReplace()', [
			[/* method description */
				[/* text */ 't', `Replace the Certificate to be serialized.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.ObjectStreamException', [/* throw description */
					[/* text */ 't', `if a new object representing
 this Certificate could not be created`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the alternate Certificate object to be serialized`]
			]
		]],
		[/* method */ 'getEncoded()', [
			[/* method description */
				[/* text */ 't', `Returns the encoded form of this certificate. It is
 assumed that each certificate type would have only a single
 form of encoding; for example, X.509 certificates would
 be encoded as ASN.1 DER.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.security.cert.CertificateEncodingException', [/* throw description */
					[/* text */ 't', `if an encoding error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the encoded form of this certificate`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this certificate.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this certificate.`]
			]
		]],
		[/* method */ 'getPublicKey()', [
			[/* method description */
				[/* text */ 't', `Gets the public key from this certificate.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the public key.`]
			]
		]],
		[/* method */ 'verify(java.security.PublicKey)', [
			[/* method description */
				[/* text */ 't', `Verifies that this certificate was signed using the
 private key that corresponds to the specified public key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the PublicKey used to carry out the verification.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.security.NoSuchAlgorithmException', [/* throw description */
					[/* text */ 't', `on unsupported signature
 algorithms.`]
				]],
				[/* throw */ 'java.security.InvalidKeyException', [/* throw description */
					[/* text */ 't', `on incorrect key.`]
				]],
				[/* throw */ 'java.security.NoSuchProviderException', [/* throw description */
					[/* text */ 't', `if there's no default provider.`]
				]],
				[/* throw */ 'java.security.SignatureException', [/* throw description */
					[/* text */ 't', `on signature errors.`]
				]],
				[/* throw */ 'java.security.cert.CertificateException', [/* throw description */
					[/* text */ 't', `on encoding errors.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'verify(java.security.PublicKey,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Verifies that this certificate was signed using the
 private key that corresponds to the specified public key.
 This method uses the signature verification engine
 supplied by the specified provider.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the PublicKey used to carry out the verification.`]
				]],
				[/* parameter */ 'sigProvider', [/* parameter description */
					[/* text */ 't', `the name of the signature provider.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.security.NoSuchAlgorithmException', [/* throw description */
					[/* text */ 't', `on unsupported signature
 algorithms.`]
				]],
				[/* throw */ 'java.security.InvalidKeyException', [/* throw description */
					[/* text */ 't', `on incorrect key.`]
				]],
				[/* throw */ 'java.security.NoSuchProviderException', [/* throw description */
					[/* text */ 't', `on incorrect provider.`]
				]],
				[/* throw */ 'java.security.SignatureException', [/* throw description */
					[/* text */ 't', `on signature errors.`]
				]],
				[/* throw */ 'java.security.cert.CertificateException', [/* throw description */
					[/* text */ 't', `on encoding errors.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this certificate for equality with the specified
 object. If the `],
				[/* inline code block */ 'i', `other`],
				[/* text */ 't', ` object is an
 `],
				[/* inline code block */ 'i', `instanceof`],
				[/* inline code block */ 'i', `Certificate`],
				[/* text */ 't', `, then
 its encoded form is retrieved and compared with the
 encoded form of this certificate.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the object to test for equality with this certificate.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true iff the encoded forms of the two certificates
 match, false otherwise.`]
			]
		]],
		[/* method */ 'getType()', [
			[/* method description */
				[/* text */ 't', `Returns the type of this certificate.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the type of this certificate.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hashcode value for this certificate from its
 encoded form.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hashcode value.`]
			]
		]],
		[/* method */ 'verify(java.security.PublicKey,java.security.Provider)', [
			[/* method description */
				[/* text */ 't', `Verifies that this certificate was signed using the
 private key that corresponds to the specified public key.
 This method uses the signature verification engine
 supplied by the specified provider. Note that the specified
 Provider object does not have to be registered in the provider list.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method was added to version 1.8 of the Java Platform
 Standard Edition. In order to maintain backwards compatibility with
 existing service providers, this method cannot be `],
					[/* inline code block */ 'i', `abstract`],
					[/* text */ 't', `
 and by default throws an `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the PublicKey used to carry out the verification.`]
				]],
				[/* parameter */ 'sigProvider', [/* parameter description */
					[/* text */ 't', `the signature provider.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.security.NoSuchAlgorithmException', [/* throw description */
					[/* text */ 't', `on unsupported signature
 algorithms.`]
				]],
				[/* throw */ 'java.security.InvalidKeyException', [/* throw description */
					[/* text */ 't', `on incorrect key.`]
				]],
				[/* throw */ 'java.security.SignatureException', [/* throw description */
					[/* text */ 't', `on signature errors.`]
				]],
				[/* throw */ 'java.security.cert.CertificateException', [/* throw description */
					[/* text */ 't', `on encoding errors.`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the method is not supported`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
