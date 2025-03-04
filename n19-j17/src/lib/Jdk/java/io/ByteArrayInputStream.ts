import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.ByteArrayInputStream', [
	/* super class, extends java.io.InputStream */
	'java.io.InputStream',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.io.ByteArrayInputStream(byte[]) */
			[/* parameters */
				[/* parameter */
					/* name */ 'buf',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.ByteArrayInputStream(byte[],int,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'buf',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'offset',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'length',
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
		[/* public boolean java.io.ByteArrayInputStream.markSupported() */
			/* name */ 'markSupported',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.io.ByteArrayInputStream.readNBytes(byte[],int,int) */
			/* name */ 'readNBytes',
			[/* parameters */
				[/* parameter */
					/* name */ 'b',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'off',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'len',
					/* type */ 'int',
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
		[/* public synchronized byte[] java.io.ByteArrayInputStream.readAllBytes() */
			/* name */ 'readAllBytes',
			/* parameters */,
			/* return */ '[B',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.io.ByteArrayInputStream.available() */
			/* name */ 'available',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.io.ByteArrayInputStream.read() */
			/* name */ 'read',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized int java.io.ByteArrayInputStream.read(byte[],int,int) */
			/* name */ 'read',
			[/* parameters */
				[/* parameter */
					/* name */ 'b',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'off',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'len',
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
		[/* public synchronized long java.io.ByteArrayInputStream.skip(long) */
			/* name */ 'skip',
			[/* parameters */
				[/* parameter */
					/* name */ 'n',
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
		[/* public synchronized long java.io.ByteArrayInputStream.transferTo(java.io.OutputStream) throws java.io.IOException */
			/* name */ 'transferTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'out',
					/* type */ 'java.io.OutputStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
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
		[/* public synchronized void java.io.ByteArrayInputStream.reset() */
			/* name */ 'reset',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.io.ByteArrayInputStream.close() throws java.io.IOException */
			/* name */ 'close',
			/* parameters */,
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.IOException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.io.ByteArrayInputStream.mark(int) */
			/* name */ 'mark',
			[/* parameters */
				[/* parameter */
					/* name */ 'readAheadLimit',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* protected byte[] java.io.ByteArrayInputStream.buf */
			/* name */ 'buf',
			/* type */ '[B',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected int java.io.ByteArrayInputStream.count */
			/* name */ 'count',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected int java.io.ByteArrayInputStream.mark */
			/* name */ 'mark',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected int java.io.ByteArrayInputStream.pos */
			/* name */ 'pos',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 4
		]
	],
	/* enum values */ UDF
]);
