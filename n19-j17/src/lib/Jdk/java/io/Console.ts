import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.Console', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Flushable */
		'java.io.Flushable'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public void java.io.Console.flush() */
			/* name */ 'flush',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.Console java.io.Console.format(java.lang.String,java.lang.Object...) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.Console',
			/* exceptions */,
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.nio.charset.Charset java.io.Console.charset() */
			/* name */ 'charset',
			/* parameters */,
			/* return */ 'java.nio.charset.Charset',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.Console java.io.Console.printf(java.lang.String,java.lang.Object...) */
			/* name */ 'printf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.io.Console',
			/* exceptions */,
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.io.Console.readLine() */
			/* name */ 'readLine',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.io.Console.readLine(java.lang.String,java.lang.Object...) */
			/* name */ 'readLine',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.Reader java.io.Console.reader() */
			/* name */ 'reader',
			/* parameters */,
			/* return */ 'java.io.Reader',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.PrintWriter java.io.Console.writer() */
			/* name */ 'writer',
			/* parameters */,
			/* return */ 'java.io.PrintWriter',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char[] java.io.Console.readPassword(java.lang.String,java.lang.Object...) */
			/* name */ 'readPassword',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[Ljava.lang.Object;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[C',
			/* exceptions */,
			/* modifiers */ 129,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char[] java.io.Console.readPassword() */
			/* name */ 'readPassword',
			/* parameters */,
			/* return */ '[C',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
