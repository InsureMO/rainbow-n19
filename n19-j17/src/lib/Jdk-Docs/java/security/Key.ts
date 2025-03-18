import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.Key', [
	[/* class description */
		[/* text */ 't', `The Key interface is the top-level interface for all keys. It
 defines the functionality shared by all key objects. All keys
 have three characteristics:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `An Algorithm

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is the key algorithm for that key. The key algorithm is usually
 an encryption or asymmetric operation algorithm (such as DSA or
 RSA), which will work with those algorithms and with related
 algorithms (such as MD5 with RSA, SHA-1 with RSA, Raw DSA, etc.)
 The name of the algorithm of a key is obtained using the
 `],
					[/* reference */ 'r', `#getAlgorithm()`, `getAlgorithm`],
					[/* text */ 't', ` method.

 `]
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `An Encoded Form

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is an external encoded form for the key used when a standard
 representation of the key is needed outside the Java Virtual Machine,
 as when transmitting the key to some other party. The key
 is encoded according to a standard format (such as
 X.509 `],
					[/* inline code block */ 'i', `SubjectPublicKeyInfo`],
					[/* text */ 't', ` or PKCS#8), and
 is returned using the `],
					[/* reference */ 'r', `#getEncoded()`, `getEncoded`],
					[/* text */ 't', ` method.
 Note: The syntax of the ASN.1 type `],
					[/* inline code block */ 'i', `SubjectPublicKeyInfo`],
					[/* text */ 't', `
 is defined as follows:

 `]
				]],
				[/* code block */ 'c', ` SubjectPublicKeyInfo ::= SEQUENCE {
   algorithm AlgorithmIdentifier,
   subjectPublicKey BIT STRING }

 AlgorithmIdentifier ::= SEQUENCE {
   algorithm OBJECT IDENTIFIER,
   parameters ANY DEFINED BY algorithm OPTIONAL }
 `],
				[/* text */ 't', `

 For more information, see
 `],
				[/* external link */ 'a', `http://tools.ietf.org/html/rfc5280`, `RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile`],
				[/* text */ 't', `.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `A Format

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is the name of the format of the encoded key. It is returned
 by the `],
					[/* reference */ 'r', `#getFormat()`, `getFormat`],
					[/* text */ 't', ` method.

 `]
				]]
			]],
			[/* block */ 'b', ''],
			[/* block */ 'b', '']
		]],
		[/* text */ 't', `

 Keys are generally obtained through key generators, certificates,
 key stores or other classes used to manage keys.
 Keys may also be obtained from key specifications (transparent
 representations of the underlying key material) through the use of a key
 factory (see `],
		[/* reference */ 'r', `java.security.KeyFactory`, `KeyFactory`],
		[/* text */ 't', `).

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A Key should use KeyRep as its serialized representation.
 Note that a serialized Key may contain sensitive information
 which should not be exposed in untrusted environments.  See the
 `],
			[/* text */ 't', `Security Appendix`],
			[/* text */ 't', `
 of the Serialization Specification for more information.`]
		]]
	],
	[/* fields */
		[/* field */ 'serialVersionUID', [
			[/* field description */
				[/* text */ 't', `The class fingerprint that is set to indicate
 serialization compatibility with a previous
 version of the class.`]
			],
		]]
	],
	/* constructors */,
	[/* methods */
		[/* method */ 'getEncoded()', [
			[/* method description */
				[/* text */ 't', `Returns the key in its primary encoding format, or null
 if this key does not support encoding.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the encoded key, or null if the key does not support
 encoding.`]
			]
		]],
		[/* method */ 'getAlgorithm()', [
			[/* method description */
				[/* text */ 't', `Returns the standard algorithm name for this key. For
 example, "DSA" would indicate that this key is a DSA key.
 See the key related sections (KeyFactory, KeyGenerator,
 KeyPairGenerator, and SecretKeyFactory) in the `],
				[/* text */ 't', `Java Security Standard Algorithm Names Specification`],
				[/* text */ 't', `
 for information about standard key algorithm names.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the name of the algorithm associated with this key.`]
			]
		]],
		[/* method */ 'getFormat()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the primary encoding format of this key,
 or null if this key does not support encoding.
 The primary encoding format is
 named in terms of the appropriate ASN.1 data format, if an
 ASN.1 specification for this key exists.
 For example, the name of the ASN.1 data format for public
 keys is `],
				[/* text */ 't', `SubjectPublicKeyInfo`],
				[/* text */ 't', `, as
 defined by the X.509 standard; in this case, the returned format is
 `],
				[/* inline code block */ 'i', `"X.509"`],
				[/* text */ 't', `. Similarly,
 the name of the ASN.1 data format for private keys is
 `],
				[/* text */ 't', `PrivateKeyInfo`],
				[/* text */ 't', `,
 as defined by the PKCS #8 standard; in this case, the returned format is
 `],
				[/* inline code block */ 'i', `"PKCS#8"`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the primary encoding format of the key.`]
			]
		]]
	],
	/* enum values */ UDF
]);
