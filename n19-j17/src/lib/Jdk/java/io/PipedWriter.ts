import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.PipedWriter', [
	/* super class, extends java.io.Writer */
	'java.io.Writer',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.io.PipedWriter(java.io.PipedReader) throws java.io.IOException */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.PipedReader',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
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
		[/* public java.io.PipedWriter() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public synchronized void java.io.PipedWriter.flush() throws java.io.IOException */
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
		[/* public void java.io.PipedWriter.write(char[],int,int) throws java.io.IOException */
			/* name */ 'write',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ '[C',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.io.PipedWriter.write(int) throws java.io.IOException */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public synchronized void java.io.PipedWriter.connect(java.io.PipedReader) throws java.io.IOException */
			/* name */ 'connect',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.PipedReader',
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
		[/* public void java.io.PipedWriter.close() throws java.io.IOException */
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
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
