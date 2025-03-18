import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.CodeSource', [
	[/* class description */
		[/* block */ 'b', `This class extends the concept of a codebase to
 encapsulate not only the location (URL) but also the certificate chains
 that were used to verify signed code originating from that location.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.net.URL,java.security.cert.Certificate[])', [
			[/* constructor description */
				[/* text */ 't', `Constructs a CodeSource and associates it with the specified
 location and set of certificates.`]
			],
			[/* parameters */
				[/* parameter */ 'url', [/* parameter description */
					[/* text */ 't', `the location (URL).  It may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'certs', [/* parameter description */
					[/* text */ 't', `the certificate(s). It may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `. The contents
 of the array are copied to protect against subsequent modification.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.net.URL,java.security.CodeSigner[])', [
			[/* constructor description */
				[/* text */ 't', `Constructs a CodeSource and associates it with the specified
 location and set of code signers.`]
			],
			[/* parameters */
				[/* parameter */ 'url', [/* parameter description */
					[/* text */ 't', `the location (URL).  It may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'signers', [/* parameter description */
					[/* text */ 't', `the code signers. It may be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `. The contents
 of the array are copied to protect against subsequent modification.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests for equality between the specified object and this
 object. Two CodeSource objects are considered equal if their
 locations are of identical value and if their signer certificate
 chains are of identical value. It is not required that
 the certificate chains be in the same order.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to test for equality with this object.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the objects are considered equal, false otherwise.`]
			]
		]],
		[/* method */ 'implies(java.security.CodeSource)', [
			[/* method description */
				[/* text */ 't', `Returns true if this CodeSource object "implies" the specified CodeSource.
 `],
				[/* block */ 'b', `
 More specifically, this method makes the following checks.
 If any fail, it returns false. If they all succeed, it returns true.
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* text */ 't', `codesource`],
						[/* text */ 't', ` must not be null.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If this object's certificates are not null, then all
 of this object's certificates must be present in `],
						[/* text */ 't', `codesource`],
						[/* text */ 't', `'s
 certificates.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If this object's location (getLocation()) is not null, then the
 following checks are made against this object's location and
 `],
						[/* text */ 't', `codesource`],
						[/* text */ 't', `'s:
   `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', `  `],
								[/* text */ 't', `codesource`],
								[/* text */ 't', `'s location must not be null.

     `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `  If this object's location
           equals `],
								[/* text */ 't', `codesource`],
								[/* text */ 't', `'s location, then return true.

     `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `  This object's protocol (getLocation().getProtocol()) must be
           equal to `],
								[/* text */ 't', `codesource`],
								[/* text */ 't', `'s protocol, ignoring case.

     `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `  If this object's host (getLocation().getHost()) is not null,
           then the SocketPermission
           constructed with this object's host must imply the
           SocketPermission constructed with `],
								[/* text */ 't', `codesource`],
								[/* text */ 't', `'s host.

     `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `  If this object's port (getLocation().getPort()) is not
           equal to -1 (that is, if a port is specified), it must equal
           `],
								[/* text */ 't', `codesource`],
								[/* text */ 't', `'s port or default port
           (codesource.getLocation().getDefaultPort()).

     `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `  If this object's file (getLocation().getFile()) doesn't equal
           `],
								[/* text */ 't', `codesource`],
								[/* text */ 't', `'s file, then the following checks are made:
           If this object's file ends with "/-",
           then `],
								[/* text */ 't', `codesource`],
								[/* text */ 't', `'s file must start with this object's
           file (exclusive the trailing "-").
           If this object's file ends with a "/*",
           then `],
								[/* text */ 't', `codesource`],
								[/* text */ 't', `'s file must start with this object's
           file and must not have any further "/" separators.
           If this object's file doesn't end with a "/",
           then `],
								[/* text */ 't', `codesource`],
								[/* text */ 't', `'s file must match this object's
           file with a '/' appended.

     `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `  If this object's reference (getLocation().getRef()) is
           not null, it must equal `],
								[/* text */ 't', `codesource`],
								[/* text */ 't', `'s reference.

   `]
							]]
						]],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 For example, the codesource objects with the following locations
 and null certificates all imply
 the codesource with the location "http://www.example.com/classes/foo.jar"
 and null certificates:
 `],
				[/* code block */ 'c', `     http:
     http://*.example.com/classes/*
     http://www.example.com/classes/-
     http://www.example.com/classes/foo.jar
 `],
				[/* text */ 't', `

 Note that if this CodeSource has a null location and a null
 certificate chain, then it implies every other CodeSource.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'codesource', [/* parameter description */
					[/* text */ 't', `CodeSource to compare against.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the specified codesource is implied by this codesource,
 false if not.`]
			]
		]],
		[/* method */ 'getLocation()', [
			[/* method description */
				[/* text */ 't', `Returns the location associated with this CodeSource.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the location (URL), or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if no URL was supplied
 during construction.`]
			]
		]],
		[/* method */ 'getCertificates()', [
			[/* method description */
				[/* text */ 't', `Returns the certificates associated with this CodeSource.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this CodeSource object was created using the
 `],
					[/* reference */ 'r', `#%3Cinit%3E(java.net.URL,java.security.CodeSigner%5B%5D)`, `CodeSource(URL url, CodeSigner[] signers)`],
					[/* text */ 't', `
 constructor then its certificate chains are extracted and used to
 create an array of Certificate objects. Each signer certificate is
 followed by its supporting certificate chain (which may be empty).
 Each signer certificate and its supporting certificate chain is ordered
 bottom-to-top (i.e., with the signer certificate first and the (root)
 certificate authority last).`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a copy of the certificate array, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there
 is none.`]
			]
		]],
		[/* method */ 'getCodeSigners()', [
			[/* method description */
				[/* text */ 't', `Returns the code signers associated with this CodeSource.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this CodeSource object was created using the
 `],
					[/* reference */ 'r', `#%3Cinit%3E(java.net.URL,java.security.cert.Certificate%5B%5D)`, `CodeSource(URL url, java.security.cert.Certificate[] certs)`],
					[/* text */ 't', `
 constructor then its certificate chains are extracted and used to
 create an array of CodeSigner objects. Note that only X.509 certificates
 are examined - all other certificate types are ignored.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a copy of the code signer array, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there
 is none.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this object.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this CodeSource, telling its
 URL and certificates.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `information about this CodeSource.`]
			]
		]]
	],
	/* enum values */ UDF
]);
