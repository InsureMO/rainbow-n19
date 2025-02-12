import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.InputStreamReader', [
	/* super class, extends java.io.Reader */
	'java.io.Reader',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.io.InputStreamReader(java.io.InputStream,java.nio.charset.CharsetDecoder) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.InputStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.nio.charset.CharsetDecoder',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.InputStreamReader(java.io.InputStream,java.nio.charset.Charset) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.InputStream',
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
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.InputStreamReader(java.io.InputStream,java.lang.String) throws java.io.UnsupportedEncodingException */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.InputStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.io.UnsupportedEncodingException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.InputStreamReader(java.io.InputStream) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.io.InputStream',
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
		[/* public int java.io.InputStreamReader.read() throws java.io.IOException */
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
		[/* public int java.io.InputStreamReader.read(char[],int,int) throws java.io.IOException */
			/* name */ 'read',
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
		[/* public int java.io.InputStreamReader.read(java.nio.CharBuffer) throws java.io.IOException */
			/* name */ 'read',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public void java.io.InputStreamReader.close() throws java.io.IOException */
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
		[/* public java.lang.String java.io.InputStreamReader.getEncoding() */
			/* name */ 'getEncoding',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.io.InputStreamReader.ready() throws java.io.IOException */
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
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
