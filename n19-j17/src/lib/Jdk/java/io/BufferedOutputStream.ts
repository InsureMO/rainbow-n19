import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.BufferedOutputStream', [
	/* super class, extends java.io.FilterOutputStream */
	'java.io.FilterOutputStream',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.io.BufferedOutputStream(java.io.OutputStream) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.OutputStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.BufferedOutputStream(java.io.OutputStream,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.OutputStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
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
		[/* public synchronized void java.io.BufferedOutputStream.flush() throws java.io.IOException */
			/* name */ 'flush',
			/* parameters */,
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.io.BufferedOutputStream.write(byte[],int,int) throws java.io.IOException */
			/* name */ 'write',
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
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.io.BufferedOutputStream.write(int) throws java.io.IOException */
			/* name */ 'write',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* protected byte[] java.io.BufferedOutputStream.buf */
			/* name */ 'buf',
			/* type */ '[B',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected int java.io.BufferedOutputStream.count */
			/* name */ 'count',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 4
		]
	],
	/* enum values */ UDF
]);
