import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.nio.charset.Charset', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.lang.Comparable<java.nio.charset.Charset> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.nio.charset.Charset'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1025,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* protected java.nio.charset.Charset(java.lang.String,java.lang.String[]) */
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ '[Ljava.lang.String;',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 4,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public abstract boolean java.nio.charset.Charset.contains(java.nio.charset.Charset) */
			/* name */ 'contains',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.nio.charset.Charset',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.charset.CharsetDecoder java.nio.charset.Charset.newDecoder() */
			/* name */ 'newDecoder',
			/* parameters */,
			/* return */ 'java.nio.charset.CharsetDecoder',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.nio.charset.CharsetEncoder java.nio.charset.Charset.newEncoder() */
			/* name */ 'newEncoder',
			/* parameters */,
			/* return */ 'java.nio.charset.CharsetEncoder',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.nio.charset.Charset.canEncode() */
			/* name */ 'canEncode',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final boolean java.nio.charset.Charset.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'ob',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final boolean java.nio.charset.Charset.isRegistered() */
			/* name */ 'isRegistered',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int java.nio.charset.Charset.compareTo(java.nio.charset.Charset) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'that',
					/* type */ 'java.nio.charset.Charset',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int java.nio.charset.Charset.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.nio.charset.Charset.name() */
			/* name */ 'name',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.lang.String java.nio.charset.Charset.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.ByteBuffer java.nio.charset.Charset.encode(java.lang.String) */
			/* name */ 'encode',
			[/* parameters */
				[/* parameter */
					/* name */ 'str',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.ByteBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.ByteBuffer java.nio.charset.Charset.encode(java.nio.CharBuffer) */
			/* name */ 'encode',
			[/* parameters */
				[/* parameter */
					/* name */ 'cb',
					/* type */ 'java.nio.CharBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.ByteBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.nio.CharBuffer java.nio.charset.Charset.decode(java.nio.ByteBuffer) */
			/* name */ 'decode',
			[/* parameters */
				[/* parameter */
					/* name */ 'bb',
					/* type */ 'java.nio.ByteBuffer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.CharBuffer',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.util.Set<java.lang.String> java.nio.charset.Charset.aliases() */
			/* name */ 'aliases',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.nio.charset.Charset.compareTo(java.lang.Object) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.nio.charset.Charset.displayName() */
			/* name */ 'displayName',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.nio.charset.Charset.displayName(java.util.Locale) */
			/* name */ 'displayName',
			[/* parameters */
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static boolean java.nio.charset.Charset.isSupported(java.lang.String) */
			/* name */ 'isSupported',
			[/* parameters */
				[/* parameter */
					/* name */ 'charsetName',
					/* type */ 'java.lang.String',
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
		[/* public static java.nio.charset.Charset java.nio.charset.Charset.defaultCharset() */
			/* name */ 'defaultCharset',
			/* parameters */,
			/* return */ 'java.nio.charset.Charset',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.nio.charset.Charset java.nio.charset.Charset.forName(java.lang.String) */
			/* name */ 'forName',
			[/* parameters */
				[/* parameter */
					/* name */ 'charsetName',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.nio.charset.Charset',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.SortedMap<java.lang.String, java.nio.charset.Charset> java.nio.charset.Charset.availableCharsets() */
			/* name */ 'availableCharsets',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String',
					'java.nio.charset.Charset'
				],
				/* raw type */ 'java.util.SortedMap',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
