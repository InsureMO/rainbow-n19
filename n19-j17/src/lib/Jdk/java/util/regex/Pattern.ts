import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.regex.Pattern', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Serializable */
		'java.io.Serializable'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public int java.util.regex.Pattern.flags() */
			/* name */ 'flags',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.regex.Pattern.pattern() */
			/* name */ 'pattern',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.regex.Pattern.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String[] java.util.regex.Pattern.split(java.lang.CharSequence) */
			/* name */ 'split',
			[/* parameters */
				[/* parameter */
					/* name */ 'input',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String[] java.util.regex.Pattern.split(java.lang.CharSequence,int) */
			/* name */ 'split',
			[/* parameters */
				[/* parameter */
					/* name */ 'input',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'limit',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[Ljava.lang.String;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.function.Predicate<java.lang.String> java.util.regex.Pattern.asMatchPredicate() */
			/* name */ 'asMatchPredicate',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.function.Predicate',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.function.Predicate<java.lang.String> java.util.regex.Pattern.asPredicate() */
			/* name */ 'asPredicate',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.function.Predicate',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.regex.Matcher java.util.regex.Pattern.matcher(java.lang.CharSequence) */
			/* name */ 'matcher',
			[/* parameters */
				[/* parameter */
					/* name */ 'input',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.regex.Matcher',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.Stream<java.lang.String> java.util.regex.Pattern.splitAsStream(java.lang.CharSequence) */
			/* name */ 'splitAsStream',
			[/* parameters */
				[/* parameter */
					/* name */ 'input',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static boolean java.util.regex.Pattern.matches(java.lang.String,java.lang.CharSequence) */
			/* name */ 'matches',
			[/* parameters */
				[/* parameter */
					/* name */ 'regex',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'input',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.util.regex.Pattern.quote(java.lang.String) */
			/* name */ 'quote',
			[/* parameters */
				[/* parameter */
					/* name */ 's',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.regex.Pattern java.util.regex.Pattern.compile(java.lang.String) */
			/* name */ 'compile',
			[/* parameters */
				[/* parameter */
					/* name */ 'regex',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.regex.Pattern',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.regex.Pattern java.util.regex.Pattern.compile(java.lang.String,int) */
			/* name */ 'compile',
			[/* parameters */
				[/* parameter */
					/* name */ 'regex',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'flags',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.regex.Pattern',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final int java.util.regex.Pattern.CANON_EQ */
			/* name */ 'CANON_EQ',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.regex.Pattern.CASE_INSENSITIVE */
			/* name */ 'CASE_INSENSITIVE',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.regex.Pattern.COMMENTS */
			/* name */ 'COMMENTS',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.regex.Pattern.DOTALL */
			/* name */ 'DOTALL',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.regex.Pattern.LITERAL */
			/* name */ 'LITERAL',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.regex.Pattern.MULTILINE */
			/* name */ 'MULTILINE',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.regex.Pattern.UNICODE_CASE */
			/* name */ 'UNICODE_CASE',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.regex.Pattern.UNICODE_CHARACTER_CLASS */
			/* name */ 'UNICODE_CHARACTER_CLASS',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.util.regex.Pattern.UNIX_LINES */
			/* name */ 'UNIX_LINES',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
