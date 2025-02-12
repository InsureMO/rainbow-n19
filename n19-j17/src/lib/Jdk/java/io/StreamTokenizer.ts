import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.io.StreamTokenizer', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.io.StreamTokenizer(java.io.Reader) */
			[/* parameters */
				[/* parameter */
					/* name */ 'r',
					/* type */ 'java.io.Reader',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.io.StreamTokenizer(java.io.InputStream) */
			[/* parameters */
				[/* parameter */
					/* name */ 'is',
					/* type */ 'java.io.InputStream',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', ''],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public java.lang.String java.io.StreamTokenizer.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.io.StreamTokenizer.nextToken() throws java.io.IOException */
			/* name */ 'nextToken',
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
		[/* public void java.io.StreamTokenizer.pushBack() */
			/* name */ 'pushBack',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.io.StreamTokenizer.wordChars(int,int) */
			/* name */ 'wordChars',
			[/* parameters */
				[/* parameter */
					/* name */ 'low',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'hi',
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
		],
		[/* public void java.io.StreamTokenizer.whitespaceChars(int,int) */
			/* name */ 'whitespaceChars',
			[/* parameters */
				[/* parameter */
					/* name */ 'low',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'hi',
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
		],
		[/* public void java.io.StreamTokenizer.commentChar(int) */
			/* name */ 'commentChar',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
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
		],
		[/* public void java.io.StreamTokenizer.quoteChar(int) */
			/* name */ 'quoteChar',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
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
		],
		[/* public void java.io.StreamTokenizer.parseNumbers() */
			/* name */ 'parseNumbers',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.io.StreamTokenizer.resetSyntax() */
			/* name */ 'resetSyntax',
			/* parameters */,
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.io.StreamTokenizer.ordinaryChars(int,int) */
			/* name */ 'ordinaryChars',
			[/* parameters */
				[/* parameter */
					/* name */ 'low',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'hi',
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
		],
		[/* public void java.io.StreamTokenizer.ordinaryChar(int) */
			/* name */ 'ordinaryChar',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
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
		],
		[/* public void java.io.StreamTokenizer.eolIsSignificant(boolean) */
			/* name */ 'eolIsSignificant',
			[/* parameters */
				[/* parameter */
					/* name */ 'flag',
					/* type */ 'boolean',
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
		[/* public void java.io.StreamTokenizer.slashStarComments(boolean) */
			/* name */ 'slashStarComments',
			[/* parameters */
				[/* parameter */
					/* name */ 'flag',
					/* type */ 'boolean',
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
		[/* public void java.io.StreamTokenizer.slashSlashComments(boolean) */
			/* name */ 'slashSlashComments',
			[/* parameters */
				[/* parameter */
					/* name */ 'flag',
					/* type */ 'boolean',
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
		[/* public void java.io.StreamTokenizer.lowerCaseMode(boolean) */
			/* name */ 'lowerCaseMode',
			[/* parameters */
				[/* parameter */
					/* name */ 'fl',
					/* type */ 'boolean',
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
		[/* public int java.io.StreamTokenizer.lineno() */
			/* name */ 'lineno',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public int java.io.StreamTokenizer.ttype */
			/* name */ 'ttype',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 1
		],
		[/* public static final int java.io.StreamTokenizer.TT_EOF */
			/* name */ 'TT_EOF',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.io.StreamTokenizer.TT_EOL */
			/* name */ 'TT_EOL',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.io.StreamTokenizer.TT_NUMBER */
			/* name */ 'TT_NUMBER',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.io.StreamTokenizer.TT_WORD */
			/* name */ 'TT_WORD',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public java.lang.String java.io.StreamTokenizer.sval */
			/* name */ 'sval',
			/* type */ 'java.lang.String',
			/* annotations */ UDF,
			/* modifiers */ 1
		],
		[/* public double java.io.StreamTokenizer.nval */
			/* name */ 'nval',
			/* type */ 'double',
			/* annotations */ UDF,
			/* modifiers */ 1
		]
	],
	/* enum values */ UDF
]);
