import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.HexFormat', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public <A extends java.lang.Appendable> A java.util.HexFormat.formatHex(A,byte[]) */
			/* name */ 'formatHex',
			[/* parameters */
				[/* parameter */
					/* name */ 'out',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'A']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'bytes',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'A']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'A',
					[/* bounds */
						'java.lang.Appendable'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public <A extends java.lang.Appendable> A java.util.HexFormat.formatHex(A,byte[],int,int) */
			/* name */ 'formatHex',
			[/* parameters */
				[/* parameter */
					/* name */ 'out',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'A']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'bytes',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fromIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'A']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'A',
					[/* bounds */
						'java.lang.Appendable'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public <A extends java.lang.Appendable> A java.util.HexFormat.toHexDigits(A,byte) */
			/* name */ 'toHexDigits',
			[/* parameters */
				[/* parameter */
					/* name */ 'out',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'A']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'value',
					/* type */ 'byte',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'A']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'A',
					[/* bounds */
						'java.lang.Appendable'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public boolean java.util.HexFormat.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'o',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.util.HexFormat.isUpperCase() */
			/* name */ 'isUpperCase',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public byte[] java.util.HexFormat.parseHex(char[],int,int) */
			/* name */ 'parseHex',
			[/* parameters */
				[/* parameter */
					/* name */ 'chars',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fromIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[B',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public byte[] java.util.HexFormat.parseHex(java.lang.CharSequence) */
			/* name */ 'parseHex',
			[/* parameters */
				[/* parameter */
					/* name */ 'string',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[B',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public byte[] java.util.HexFormat.parseHex(java.lang.CharSequence,int,int) */
			/* name */ 'parseHex',
			[/* parameters */
				[/* parameter */
					/* name */ 'string',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fromIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[B',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char java.util.HexFormat.toHighHexDigit(int) */
			/* name */ 'toHighHexDigit',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public char java.util.HexFormat.toLowHexDigit(int) */
			/* name */ 'toLowHexDigit',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.HexFormat.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.HexFormat.delimiter() */
			/* name */ 'delimiter',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.HexFormat.formatHex(byte[]) */
			/* name */ 'formatHex',
			[/* parameters */
				[/* parameter */
					/* name */ 'bytes',
					/* type */ '[B',
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
		[/* public java.lang.String java.util.HexFormat.formatHex(byte[],int,int) */
			/* name */ 'formatHex',
			[/* parameters */
				[/* parameter */
					/* name */ 'bytes',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fromIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toIndex',
					/* type */ 'int',
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
		[/* public java.lang.String java.util.HexFormat.prefix() */
			/* name */ 'prefix',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.HexFormat.suffix() */
			/* name */ 'suffix',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.HexFormat.toHexDigits(byte) */
			/* name */ 'toHexDigits',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'byte',
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
		[/* public java.lang.String java.util.HexFormat.toHexDigits(char) */
			/* name */ 'toHexDigits',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'char',
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
		[/* public java.lang.String java.util.HexFormat.toHexDigits(int) */
			/* name */ 'toHexDigits',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'int',
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
		[/* public java.lang.String java.util.HexFormat.toHexDigits(long) */
			/* name */ 'toHexDigits',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'long',
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
		[/* public java.lang.String java.util.HexFormat.toHexDigits(long,int) */
			/* name */ 'toHexDigits',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'digits',
					/* type */ 'int',
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
		[/* public java.lang.String java.util.HexFormat.toHexDigits(short) */
			/* name */ 'toHexDigits',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'short',
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
		[/* public java.lang.String java.util.HexFormat.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.HexFormat java.util.HexFormat.withDelimiter(java.lang.String) */
			/* name */ 'withDelimiter',
			[/* parameters */
				[/* parameter */
					/* name */ 'delimiter',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.HexFormat',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.HexFormat java.util.HexFormat.withLowerCase() */
			/* name */ 'withLowerCase',
			/* parameters */,
			/* return */ 'java.util.HexFormat',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.HexFormat java.util.HexFormat.withPrefix(java.lang.String) */
			/* name */ 'withPrefix',
			[/* parameters */
				[/* parameter */
					/* name */ 'prefix',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.HexFormat',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.HexFormat java.util.HexFormat.withSuffix(java.lang.String) */
			/* name */ 'withSuffix',
			[/* parameters */
				[/* parameter */
					/* name */ 'suffix',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.HexFormat',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.HexFormat java.util.HexFormat.withUpperCase() */
			/* name */ 'withUpperCase',
			/* parameters */,
			/* return */ 'java.util.HexFormat',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static boolean java.util.HexFormat.isHexDigit(int) */
			/* name */ 'isHexDigit',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'int',
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
		[/* public static int java.util.HexFormat.fromHexDigit(int) */
			/* name */ 'fromHexDigit',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.util.HexFormat.fromHexDigits(java.lang.CharSequence) */
			/* name */ 'fromHexDigits',
			[/* parameters */
				[/* parameter */
					/* name */ 'string',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.util.HexFormat.fromHexDigits(java.lang.CharSequence,int,int) */
			/* name */ 'fromHexDigits',
			[/* parameters */
				[/* parameter */
					/* name */ 'string',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fromIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.HexFormat java.util.HexFormat.of() */
			/* name */ 'of',
			/* parameters */,
			/* return */ 'java.util.HexFormat',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.HexFormat java.util.HexFormat.ofDelimiter(java.lang.String) */
			/* name */ 'ofDelimiter',
			[/* parameters */
				[/* parameter */
					/* name */ 'delimiter',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.HexFormat',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.util.HexFormat.fromHexDigitsToLong(java.lang.CharSequence) */
			/* name */ 'fromHexDigitsToLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'string',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.util.HexFormat.fromHexDigitsToLong(java.lang.CharSequence,int,int) */
			/* name */ 'fromHexDigitsToLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'string',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'fromIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'toIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
