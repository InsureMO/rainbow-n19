import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Base64$Encoder', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 9,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public byte[] java.util.Base64$Encoder.encode(byte[]) */
			/* name */ 'encode',
			[/* parameters */
				[/* parameter */
					/* name */ 'src',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[B',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.Base64$Encoder.encode(byte[],byte[]) */
			/* name */ 'encode',
			[/* parameters */
				[/* parameter */
					/* name */ 'src',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dst',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.OutputStream java.util.Base64$Encoder.wrap(java.io.OutputStream) */
			/* name */ 'wrap',
			[/* parameters */
				[/* parameter */
					/* name */ 'os',
					/* type */ 'java.io.OutputStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.OutputStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Base64$Encoder.encodeToString(byte[]) */
			/* name */ 'encodeToString',
			[/* parameters */
				[/* parameter */
					/* name */ 'src',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.ByteBuffer java.util.Base64$Encoder.encode(java.nio.ByteBuffer) */
			/* name */ 'encode',
			[/* parameters */
				[/* parameter */
					/* name */ 'buffer',
					/* type */ 'java.nio.ByteBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.ByteBuffer',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Base64$Encoder java.util.Base64$Encoder.withoutPadding() */
			/* name */ 'withoutPadding',
			/* parameters */,
			/* return */ 'java.util.Base64$Encoder',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
