import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.ByteArrayOutputStream', [
	/* super class, extends java.io.OutputStream */
	'java.io.OutputStream',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.io.ByteArrayOutputStream() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.ByteArrayOutputStream(int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public synchronized java.lang.String java.io.ByteArrayOutputStream.toString(java.lang.String) throws java.io.UnsupportedEncodingException */
			/* name */ 'toString',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.UnsupportedEncodingException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.String java.io.ByteArrayOutputStream.toString(java.nio.charset.Charset) */
			/* name */ 'toString',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.charset.Charset',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.String java.io.ByteArrayOutputStream.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized java.lang.String java.io.ByteArrayOutputStream.toString(int) */
			/* name */ 'toString',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 33,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', ''],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public synchronized int java.io.ByteArrayOutputStream.size() */
			/* name */ 'size',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.io.ByteArrayOutputStream.write(int) */
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
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.io.ByteArrayOutputStream.write(byte[],int,int) */
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
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.io.ByteArrayOutputStream.close() throws java.io.IOException */
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
		[/* public synchronized byte[] java.io.ByteArrayOutputStream.toByteArray() */
			/* name */ 'toByteArray',
			/* parameters */,
			/* return */ '[B',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.io.ByteArrayOutputStream.reset() */
			/* name */ 'reset',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 33,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.io.ByteArrayOutputStream.writeBytes(byte[]) */
			/* name */ 'writeBytes',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.io.ByteArrayOutputStream.writeTo(java.io.OutputStream) throws java.io.IOException */
			/* name */ 'writeTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.OutputStream',
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
		[/* protected byte[] java.io.ByteArrayOutputStream.buf */
			/* name */ 'buf',
			/* type */ '[B',
			/* annotations */ UDF,
			/* modifiers */ 4
		],
		[/* protected int java.io.ByteArrayOutputStream.count */
			/* name */ 'count',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 4
		]
	],
	/* enum values */ UDF
]);
