import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.security.cert.Certificate', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Serializable */
		'java.io.Serializable'
	],
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.security.cert.Certificate(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'type',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* protected java.lang.Object java.security.cert.Certificate.writeReplace() throws java.io.ObjectStreamException */
			/* name */ 'writeReplace',
			/* parameters */,
			/* return */ 'java.lang.Object',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.ObjectStreamException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract byte[] java.security.cert.Certificate.getEncoded() throws java.security.cert.CertificateEncodingException */
			/* name */ 'getEncoded',
			/* parameters */,
			/* return */ '[B',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.security.cert.CertificateEncodingException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String java.security.cert.Certificate.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.security.PublicKey java.security.cert.Certificate.getPublicKey() */
			/* name */ 'getPublicKey',
			/* parameters */,
			/* return */ 'java.security.PublicKey',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.security.cert.Certificate.verify(java.security.PublicKey) throws java.security.cert.CertificateException,java.security.NoSuchAlgorithmException,java.security.InvalidKeyException,java.security.NoSuchProviderException,java.security.SignatureException */
			/* name */ 'verify',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.security.PublicKey',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.security.cert.CertificateException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.security.NoSuchAlgorithmException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.security.InvalidKeyException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.security.NoSuchProviderException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.security.SignatureException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract void java.security.cert.Certificate.verify(java.security.PublicKey,java.lang.String) throws java.security.cert.CertificateException,java.security.NoSuchAlgorithmException,java.security.InvalidKeyException,java.security.NoSuchProviderException,java.security.SignatureException */
			/* name */ 'verify',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.security.PublicKey',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'sigProvider',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.security.cert.CertificateException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.security.NoSuchAlgorithmException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.security.InvalidKeyException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.security.NoSuchProviderException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.security.SignatureException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.security.cert.Certificate.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.security.cert.Certificate.getType() */
			/* name */ 'getType',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.security.cert.Certificate.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.security.cert.Certificate.verify(java.security.PublicKey,java.security.Provider) throws java.security.cert.CertificateException,java.security.NoSuchAlgorithmException,java.security.InvalidKeyException,java.security.SignatureException */
			/* name */ 'verify',
			[/* parameters */
				[/* parameter */
					/* name */ 'key',
					/* type */ 'java.security.PublicKey',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'sigProvider',
					/* type */ 'java.security.Provider',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.security.cert.CertificateException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.security.NoSuchAlgorithmException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.security.InvalidKeyException',
					/* annotations */ UDF
				],
				[/* exception */
					/* type */ 'java.security.SignatureException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
