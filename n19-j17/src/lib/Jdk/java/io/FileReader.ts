import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.FileReader', [
	/* super class, extends java.io.InputStreamReader */
	'java.io.InputStreamReader',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.io.FileReader(java.io.File,java.nio.charset.Charset) throws java.io.IOException */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.nio.charset.Charset',
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
		[/* public java.io.FileReader(java.lang.String,java.nio.charset.Charset) throws java.io.IOException */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.nio.charset.Charset',
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
		[/* public java.io.FileReader(java.io.FileDescriptor) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.FileDescriptor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.FileReader(java.io.File) throws java.io.FileNotFoundException */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.File',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.FileNotFoundException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.FileReader(java.lang.String) throws java.io.FileNotFoundException */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.FileNotFoundException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared methods */,
	/* declared fields */,
	/* enum values */ UDF
]);
