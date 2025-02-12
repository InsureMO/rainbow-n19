import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.StringBufferInputStream', [
	/* super class, extends java.io.InputStream */
	'java.io.InputStream',
	/* interfaces */,
	/* modifiers */ 1,
	[/* declared annotations */
		[
			'java.lang.Deprecated',
			['p', 'since', ''],
			['p', 'forRemoval', false]
		]
	],
	/* type parameters */,
	[/* declared constructors */
		[/* public java.io.StringBufferInputStream(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public synchronized int java.io.StringBufferInputStream.read(byte[],int,int) */
			/* name */ 'read',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg2',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.io.StringBufferInputStream.read() */
			/* name */ 'read',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized long java.io.StringBufferInputStream.skip(long) */
			/* name */ 'skip',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.io.StringBufferInputStream.available() */
			/* name */ 'available',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.io.StringBufferInputStream.reset() */
			/* name */ 'reset',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* protected java.lang.String java.io.StringBufferInputStream.buffer */
			/* name */ 'buffer',
			/* type */ 'java.lang.String',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected int java.io.StringBufferInputStream.pos */
			/* name */ 'pos',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected int java.io.StringBufferInputStream.count */
			/* name */ 'count',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 4
		]
	],
	/* enum values */ UDF
]);
