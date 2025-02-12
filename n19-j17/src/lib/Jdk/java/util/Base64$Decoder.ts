import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Base64$Decoder', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 9,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public byte[] java.util.Base64$Decoder.decode(java.lang.String) */
			/* name */ 'decode',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
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
		[/* public byte[] java.util.Base64$Decoder.decode(byte[]) */
			/* name */ 'decode',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public java.nio.ByteBuffer java.util.Base64$Decoder.decode(java.nio.ByteBuffer) */
			/* name */ 'decode',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public int java.util.Base64$Decoder.decode(byte[],byte[]) */
			/* name */ 'decode',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
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
		[/* public java.io.InputStream java.util.Base64$Decoder.wrap(java.io.InputStream) */
			/* name */ 'wrap',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.InputStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.InputStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
