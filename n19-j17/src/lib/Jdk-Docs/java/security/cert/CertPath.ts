import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.security.cert.CertPath', [
	[/* class description */
		[/* text */ 't', `An immutable sequence of certificates (a certification path).
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This is an abstract class that defines the methods common to all
 `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', `s. Subclasses can handle different kinds of
 certificates (X.509, PGP, etc.).
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 All `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', ` objects have a type, a list of
 `],
			[/* inline code block */ 'i', `Certificate`],
			[/* text */ 't', `s, and one or more supported encodings. Because the
 `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', ` class is immutable, a `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', ` cannot
 change in any externally visible way after being constructed. This
 stipulation applies to all public fields and methods of this class and any
 added or overridden by subclasses.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The type is a `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` that identifies the type of
 `],
			[/* inline code block */ 'i', `Certificate`],
			[/* text */ 't', `s in the certification path. For each
 certificate `],
			[/* inline code block */ 'i', `cert`],
			[/* text */ 't', ` in a certification path `],
			[/* inline code block */ 'i', `certPath`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `cert.getType().equals(certPath.getType())`],
			[/* text */ 't', ` must be
 `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The list of `],
			[/* inline code block */ 'i', `Certificate`],
			[/* text */ 't', `s is an ordered `],
			[/* inline code block */ 'i', `List`],
			[/* text */ 't', ` of
 zero or more `],
			[/* inline code block */ 'i', `Certificate`],
			[/* text */ 't', `s. This `],
			[/* inline code block */ 'i', `List`],
			[/* text */ 't', ` and all
 of the `],
			[/* inline code block */ 'i', `Certificate`],
			[/* text */ 't', `s contained in it must be immutable.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Each `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', ` object must support one or more encodings
 so that the object can be translated into a byte array for storage or
 transmission to other parties. Preferably, these encodings should be
 well-documented standards (such as PKCS#7). One of the encodings supported
 by a `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', ` is considered the default encoding. This
 encoding is used if no encoding is explicitly requested (for the
 `],
			[/* reference */ 'r', `#getEncoded()`, `getEncoded()`],
			[/* text */ 't', ` method, for instance).
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 All `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', ` objects are also `],
			[/* inline code block */ 'i', `Serializable`],
			[/* text */ 't', `.
 `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', ` objects are resolved into an alternate
 `],
			[/* reference */ 'r', `java.security.cert.CertPath.CertPathRep`],
			[/* text */ 't', ` object during serialization. This allows
 a `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', ` object to be serialized into an equivalent
 representation regardless of its underlying implementation.
 `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', ` objects can be created with a
 `],
			[/* inline code block */ 'i', `CertificateFactory`],
			[/* text */ 't', ` or they can be returned by other classes,
 such as a `],
			[/* inline code block */ 'i', `CertPathBuilder`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 By convention, X.509 `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', `s (consisting of
 `],
			[/* inline code block */ 'i', `X509Certificate`],
			[/* text */ 't', `s), are ordered starting with the target
 certificate and ending with a certificate issued by the trust anchor. That
 is, the issuer of one certificate is the subject of the following one. The
 certificate representing the `],
			[/* reference */ 'r', `java.security.cert.TrustAnchor`],
			[/* text */ 't', ` should not be
 included in the certification path. Unvalidated X.509 `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', `s
 may not follow these conventions. PKIX `],
			[/* inline code block */ 'i', `CertPathValidator`],
			[/* text */ 't', `s will
 detect any departure from these conventions that cause the certification
 path to be invalid and throw a `],
			[/* inline code block */ 'i', `CertPathValidatorException`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Every implementation of the Java platform is required to support the
 following standard `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', ` encodings:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `PKCS7`]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `PkiPath`]
			]]
		]],
		[/* text */ 't', `
 These encodings are described in the `],
		[/* text */ 't', `CertPath Encodings section`],
		[/* text */ 't', ` of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other encodings are supported.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Concurrent Access`],
		[/* block */ 'b', [
			[/* text */ 't', `
 All `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', ` objects must be thread-safe. That is, multiple
 threads may concurrently invoke the methods defined in this class on a
 single `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', ` object (or more than one) with no
 ill effects. This is also true for the `],
			[/* inline code block */ 'i', `List`],
			[/* text */ 't', ` returned by
 `],
			[/* inline code block */ 'i', `CertPath.getCertificates`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Requiring `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', ` objects to be immutable and thread-safe
 allows them to be passed around to various pieces of code without worrying
 about coordinating access.  Providing this thread-safety is
 generally not difficult, since the `],
			[/* inline code block */ 'i', `CertPath`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `List`],
			[/* text */ 't', ` objects in question are immutable.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `CertPath`],
				[/* text */ 't', ` of the specified type.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This constructor is protected because most users should use a
 `],
					[/* inline code block */ 'i', `CertificateFactory`],
					[/* text */ 't', ` to create `],
					[/* inline code block */ 'i', `CertPath`],
					[/* text */ 't', `s.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the standard name of the type of
 `],
					[/* inline code block */ 'i', `Certificate`],
					[/* text */ 't', `s in this path`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this certification path for equality with the specified
 object. Two `],
				[/* inline code block */ 'i', `CertPath`],
				[/* text */ 't', `s are equal if and only if their
 types are equal and their certificate `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', `s (and by
 implication the `],
				[/* inline code block */ 'i', `Certificate`],
				[/* text */ 't', `s in those `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', `s)
 are equal. A `],
				[/* inline code block */ 'i', `CertPath`],
				[/* text */ 't', ` is never equal to an object that is
 not a `],
				[/* inline code block */ 'i', `CertPath`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This algorithm is implemented by this method. If it is overridden,
 the behavior specified here must be maintained.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the object to test for equality with this certification path`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the specified object is equal to this certification path,
 false otherwise`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this certification path.
 This calls the `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', ` method on each of the
 `],
				[/* inline code block */ 'i', `Certificate`],
				[/* text */ 't', `s in the path.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this certification path`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hashcode for this certification path. The hash code of
 a certification path is defined to be the result of the following
 calculation:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `hashCode = path.getType().hashCode();
  hashCode = 31*hashCode + path.getCertificates().hashCode();`]
				]],
				[/* text */ 't', `
 This ensures that `],
				[/* inline code block */ 'i', `path1.equals(path2)`],
				[/* text */ 't', ` implies that
 `],
				[/* inline code block */ 'i', `path1.hashCode()==path2.hashCode()`],
				[/* text */ 't', ` for any two certification
 paths, `],
				[/* inline code block */ 'i', `path1`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `path2`],
				[/* text */ 't', `, as required by the
 general contract of `],
				[/* inline code block */ 'i', `Object.hashCode`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hashcode value for this certification path`]
			]
		]],
		[/* method */ 'getCertificates()', [
			[/* method description */
				[/* text */ 't', `Returns the list of certificates in this certification path.
 The `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` returned must be immutable and thread-safe.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an immutable `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `Certificate`],
				[/* text */ 't', `s
         (may be empty, but not null)`]
			]
		]],
		[/* method */ 'getType()', [
			[/* method description */
				[/* text */ 't', `Returns the type of `],
				[/* inline code block */ 'i', `Certificate`],
				[/* text */ 't', `s in this certification
 path. This is the same string that would be returned by
 `],
				[/* reference */ 'r', `.Certificate#getType()`],
				[/* text */ 't', `
 for all `],
				[/* inline code block */ 'i', `Certificate`],
				[/* text */ 't', `s in the certification path.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the type of `],
				[/* inline code block */ 'i', `Certificate`],
				[/* text */ 't', `s in this certification
 path (never null)`]
			]
		]],
		[/* method */ 'getEncoded(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the encoded form of this certification path, using the
 specified encoding.`]
			],
			[/* parameters */
				[/* parameter */ 'encoding', [/* parameter description */
					[/* text */ 't', `the name of the encoding to use`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.security.cert.CertificateEncodingException', [/* throw description */
					[/* text */ 't', `if an encoding error occurs or
   the encoding requested is not supported`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the encoded bytes`]
			]
		]],
		[/* method */ 'getEncoded()', [
			[/* method description */
				[/* text */ 't', `Returns the encoded form of this certification path, using the default
 encoding.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.security.cert.CertificateEncodingException', [/* throw description */
					[/* text */ 't', `if an encoding error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the encoded bytes`]
			]
		]],
		[/* method */ 'writeReplace()', [
			[/* method description */
				[/* text */ 't', `Replaces the `],
				[/* inline code block */ 'i', `CertPath`],
				[/* text */ 't', ` to be serialized with a
 `],
				[/* inline code block */ 'i', `CertPathRep`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.ObjectStreamException', [/* throw description */
					[/* text */ 't', `if a `],
					[/* inline code block */ 'i', `CertPathRep`],
					[/* text */ 't', ` object
 representing this certification path could not be created`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `CertPathRep`],
				[/* text */ 't', ` to be serialized`]
			]
		]],
		[/* method */ 'getEncodings()', [
			[/* method description */
				[/* text */ 't', `Returns an iteration of the encodings supported by this certification
 path, with the default encoding first. Attempts to modify the returned
 `],
				[/* inline code block */ 'i', `Iterator`],
				[/* text */ 't', ` via its `],
				[/* inline code block */ 'i', `remove`],
				[/* text */ 't', ` method result in an
 `],
				[/* inline code block */ 'i', `UnsupportedOperationException`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Iterator`],
				[/* text */ 't', ` over the names of the supported
         encodings (as Strings)`]
			]
		]]
	],
]);
