import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.CharArrayReader', [
	/* super class, extends java.io.Reader */
	'java.io.Reader',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.io.CharArrayReader(char[]) */
			[/* parameters */
				[/* parameter */
					/* name */ 'buf',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.CharArrayReader(char[],int,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'buf',
					/* type */ '[C',
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
		[/* public boolean java.io.CharArrayReader.markSupported() */
			/* name */ 'markSupported',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.io.CharArrayReader.ready() throws java.io.IOException */
			/* name */ 'ready',
			/* parameters */,
			/* return */ 'boolean',
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
		[/* public int java.io.CharArrayReader.read() throws java.io.IOException */
			/* name */ 'read',
			/* parameters */,
			/* return */ 'int',
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
		[/* public int java.io.CharArrayReader.read(char[],int,int) throws java.io.IOException */
			/* name */ 'read',
			[/* parameters */
				[/* parameter */
					/* name */ 'cbuf',
					/* type */ '[C',
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
		[/* public int java.io.CharArrayReader.read(java.nio.CharBuffer) throws java.io.IOException */
			/* name */ 'read',
			[/* parameters */
				[/* parameter */
					/* name */ 'target',
					/* type */ 'java.nio.CharBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
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
		[/* public long java.io.CharArrayReader.skip(long) throws java.io.IOException */
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
		[/* public void java.io.CharArrayReader.close() */
			/* name */ 'close',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.io.CharArrayReader.mark(int) throws java.io.IOException */
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
		[/* public void java.io.CharArrayReader.reset() throws java.io.IOException */
			/* name */ 'reset',
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
		]
	],
	[/* declared fields */
		[/* protected char[] java.io.CharArrayReader.buf */
			/* name */ 'buf',
			/* type */ '[C',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected int java.io.CharArrayReader.pos */
			/* name */ 'pos',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected int java.io.CharArrayReader.markedPos */
			/* name */ 'markedPos',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected int java.io.CharArrayReader.count */
			/* name */ 'count',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 4
		]
	],
	/* enum values */ UDF
]);
