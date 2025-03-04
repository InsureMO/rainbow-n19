import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.Character', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Serializable, java.lang.Comparable<java.lang.Character>, java.lang.constant.Constable */
		'java.io.Serializable',
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.Character'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]],
		'java.lang.constant.Constable'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.lang.Character(char) */
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean java.lang.Character.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
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
		[/* public char java.lang.Character.charValue() */
			/* name */ 'charValue',
			/* parameters */,
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.Character.compareTo(java.lang.Character) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'anotherCharacter',
					/* type */ 'java.lang.Character',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.Character.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.Character.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Optional<java.lang.constant.DynamicConstantDesc<java.lang.Character>> java.lang.Character.describeConstable() */
			/* name */ 'describeConstable',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Character'
						],
						/* raw type */ 'java.lang.constant.DynamicConstantDesc',
						/* owner type */ UDF
					]]
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static boolean java.lang.Character.isAlphabetic(int) */
			/* name */ 'isAlphabetic',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isBmpCodePoint(int) */
			/* name */ 'isBmpCodePoint',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isDefined(char) */
			/* name */ 'isDefined',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isDefined(int) */
			/* name */ 'isDefined',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isDigit(char) */
			/* name */ 'isDigit',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isDigit(int) */
			/* name */ 'isDigit',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isHighSurrogate(char) */
			/* name */ 'isHighSurrogate',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isISOControl(char) */
			/* name */ 'isISOControl',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isISOControl(int) */
			/* name */ 'isISOControl',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isIdentifierIgnorable(char) */
			/* name */ 'isIdentifierIgnorable',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isIdentifierIgnorable(int) */
			/* name */ 'isIdentifierIgnorable',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isIdeographic(int) */
			/* name */ 'isIdeographic',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isJavaIdentifierPart(char) */
			/* name */ 'isJavaIdentifierPart',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isJavaIdentifierPart(int) */
			/* name */ 'isJavaIdentifierPart',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isJavaIdentifierStart(char) */
			/* name */ 'isJavaIdentifierStart',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isJavaIdentifierStart(int) */
			/* name */ 'isJavaIdentifierStart',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isJavaLetter(char) */
			/* name */ 'isJavaLetter',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '1.1'],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public static boolean java.lang.Character.isJavaLetterOrDigit(char) */
			/* name */ 'isJavaLetterOrDigit',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '1.1'],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public static boolean java.lang.Character.isLetter(char) */
			/* name */ 'isLetter',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isLetter(int) */
			/* name */ 'isLetter',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isLetterOrDigit(char) */
			/* name */ 'isLetterOrDigit',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isLetterOrDigit(int) */
			/* name */ 'isLetterOrDigit',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isLowSurrogate(char) */
			/* name */ 'isLowSurrogate',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isLowerCase(char) */
			/* name */ 'isLowerCase',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isLowerCase(int) */
			/* name */ 'isLowerCase',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isMirrored(char) */
			/* name */ 'isMirrored',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isMirrored(int) */
			/* name */ 'isMirrored',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isSpace(char) */
			/* name */ 'isSpace',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '1.1'],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public static boolean java.lang.Character.isSpaceChar(char) */
			/* name */ 'isSpaceChar',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isSpaceChar(int) */
			/* name */ 'isSpaceChar',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isSupplementaryCodePoint(int) */
			/* name */ 'isSupplementaryCodePoint',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isSurrogate(char) */
			/* name */ 'isSurrogate',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isSurrogatePair(char,char) */
			/* name */ 'isSurrogatePair',
			[/* parameters */
				[/* parameter */
					/* name */ 'high',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'low',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isTitleCase(char) */
			/* name */ 'isTitleCase',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isTitleCase(int) */
			/* name */ 'isTitleCase',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isUnicodeIdentifierPart(char) */
			/* name */ 'isUnicodeIdentifierPart',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isUnicodeIdentifierPart(int) */
			/* name */ 'isUnicodeIdentifierPart',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isUnicodeIdentifierStart(char) */
			/* name */ 'isUnicodeIdentifierStart',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isUnicodeIdentifierStart(int) */
			/* name */ 'isUnicodeIdentifierStart',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isUpperCase(char) */
			/* name */ 'isUpperCase',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isUpperCase(int) */
			/* name */ 'isUpperCase',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isValidCodePoint(int) */
			/* name */ 'isValidCodePoint',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static boolean java.lang.Character.isWhitespace(char) */
			/* name */ 'isWhitespace',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static boolean java.lang.Character.isWhitespace(int) */
			/* name */ 'isWhitespace',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static byte java.lang.Character.getDirectionality(char) */
			/* name */ 'getDirectionality',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'byte',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static byte java.lang.Character.getDirectionality(int) */
			/* name */ 'getDirectionality',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'byte',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static char java.lang.Character.forDigit(int,int) */
			/* name */ 'forDigit',
			[/* parameters */
				[/* parameter */
					/* name */ 'digit',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static char java.lang.Character.highSurrogate(int) */
			/* name */ 'highSurrogate',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static char java.lang.Character.lowSurrogate(int) */
			/* name */ 'lowSurrogate',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static char java.lang.Character.reverseBytes(char) */
			/* name */ 'reverseBytes',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static char java.lang.Character.toLowerCase(char) */
			/* name */ 'toLowerCase',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static char java.lang.Character.toTitleCase(char) */
			/* name */ 'toTitleCase',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static char java.lang.Character.toUpperCase(char) */
			/* name */ 'toUpperCase',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'char',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static char[] java.lang.Character.toChars(int) */
			/* name */ 'toChars',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[C',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Character.charCount(int) */
			/* name */ 'charCount',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static int java.lang.Character.codePointAt(char[],int) */
			/* name */ 'codePointAt',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'index',
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
		[/* public static int java.lang.Character.codePointAt(char[],int,int) */
			/* name */ 'codePointAt',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
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
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Character.codePointAt(java.lang.CharSequence,int) */
			/* name */ 'codePointAt',
			[/* parameters */
				[/* parameter */
					/* name */ 'seq',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'index',
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
		[/* public static int java.lang.Character.codePointBefore(char[],int) */
			/* name */ 'codePointBefore',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'index',
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
		[/* public static int java.lang.Character.codePointBefore(char[],int,int) */
			/* name */ 'codePointBefore',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'start',
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
		[/* public static int java.lang.Character.codePointBefore(java.lang.CharSequence,int) */
			/* name */ 'codePointBefore',
			[/* parameters */
				[/* parameter */
					/* name */ 'seq',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'index',
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
		[/* public static int java.lang.Character.codePointCount(char[],int,int) */
			/* name */ 'codePointCount',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
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
					/* name */ 'count',
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
		[/* public static int java.lang.Character.codePointCount(java.lang.CharSequence,int,int) */
			/* name */ 'codePointCount',
			[/* parameters */
				[/* parameter */
					/* name */ 'seq',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'beginIndex',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'endIndex',
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
		[/* public static int java.lang.Character.codePointOf(java.lang.String) */
			/* name */ 'codePointOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
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
		[/* public static int java.lang.Character.compare(char,char) */
			/* name */ 'compare',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
					/* type */ 'char',
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
		[/* public static int java.lang.Character.digit(char,int) */
			/* name */ 'digit',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'radix',
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
		[/* public static int java.lang.Character.digit(int,int) */
			/* name */ 'digit',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'radix',
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
		[/* public static int java.lang.Character.getNumericValue(char) */
			/* name */ 'getNumericValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static int java.lang.Character.getNumericValue(int) */
			/* name */ 'getNumericValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static int java.lang.Character.getType(char) */
			/* name */ 'getType',
			[/* parameters */
				[/* parameter */
					/* name */ 'ch',
					/* type */ 'char',
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
		[/* public static int java.lang.Character.getType(int) */
			/* name */ 'getType',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static int java.lang.Character.hashCode(char) */
			/* name */ 'hashCode',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'char',
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
		[/* public static int java.lang.Character.offsetByCodePoints(char[],int,int,int,int) */
			/* name */ 'offsetByCodePoints',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'start',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'count',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'codePointOffset',
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
		[/* public static int java.lang.Character.offsetByCodePoints(java.lang.CharSequence,int,int) */
			/* name */ 'offsetByCodePoints',
			[/* parameters */
				[/* parameter */
					/* name */ 'seq',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'index',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'codePointOffset',
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
		[/* public static int java.lang.Character.toChars(int,char[],int) */
			/* name */ 'toChars',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dst',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dstIndex',
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
		[/* public static int java.lang.Character.toCodePoint(char,char) */
			/* name */ 'toCodePoint',
			[/* parameters */
				[/* parameter */
					/* name */ 'high',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'low',
					/* type */ 'char',
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
		[/* public static int java.lang.Character.toLowerCase(int) */
			/* name */ 'toLowerCase',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static int java.lang.Character.toTitleCase(int) */
			/* name */ 'toTitleCase',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static int java.lang.Character.toUpperCase(int) */
			/* name */ 'toUpperCase',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
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
		[/* public static java.lang.Character java.lang.Character.valueOf(char) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'c',
					/* type */ 'char',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Character',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.lang.Character.getName(int) */
			/* name */ 'getName',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
					/* type */ 'int',
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
		[/* public static java.lang.String java.lang.Character.toString(char) */
			/* name */ 'toString',
			[/* parameters */
				[/* parameter */
					/* name */ 'c',
					/* type */ 'char',
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
		[/* public static java.lang.String java.lang.Character.toString(int) */
			/* name */ 'toString',
			[/* parameters */
				[/* parameter */
					/* name */ 'codePoint',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final int java.lang.Character.BYTES */
			/* name */ 'BYTES',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.COMBINING_SPACING_MARK */
			/* name */ 'COMBINING_SPACING_MARK',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.CONNECTOR_PUNCTUATION */
			/* name */ 'CONNECTOR_PUNCTUATION',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.CONTROL */
			/* name */ 'CONTROL',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.CURRENCY_SYMBOL */
			/* name */ 'CURRENCY_SYMBOL',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DASH_PUNCTUATION */
			/* name */ 'DASH_PUNCTUATION',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DECIMAL_DIGIT_NUMBER */
			/* name */ 'DECIMAL_DIGIT_NUMBER',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_ARABIC_NUMBER */
			/* name */ 'DIRECTIONALITY_ARABIC_NUMBER',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_BOUNDARY_NEUTRAL */
			/* name */ 'DIRECTIONALITY_BOUNDARY_NEUTRAL',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_COMMON_NUMBER_SEPARATOR */
			/* name */ 'DIRECTIONALITY_COMMON_NUMBER_SEPARATOR',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_EUROPEAN_NUMBER */
			/* name */ 'DIRECTIONALITY_EUROPEAN_NUMBER',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR */
			/* name */ 'DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR */
			/* name */ 'DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_FIRST_STRONG_ISOLATE */
			/* name */ 'DIRECTIONALITY_FIRST_STRONG_ISOLATE',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_LEFT_TO_RIGHT */
			/* name */ 'DIRECTIONALITY_LEFT_TO_RIGHT',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING */
			/* name */ 'DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_LEFT_TO_RIGHT_ISOLATE */
			/* name */ 'DIRECTIONALITY_LEFT_TO_RIGHT_ISOLATE',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE */
			/* name */ 'DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_NONSPACING_MARK */
			/* name */ 'DIRECTIONALITY_NONSPACING_MARK',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_OTHER_NEUTRALS */
			/* name */ 'DIRECTIONALITY_OTHER_NEUTRALS',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_PARAGRAPH_SEPARATOR */
			/* name */ 'DIRECTIONALITY_PARAGRAPH_SEPARATOR',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_POP_DIRECTIONAL_FORMAT */
			/* name */ 'DIRECTIONALITY_POP_DIRECTIONAL_FORMAT',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_POP_DIRECTIONAL_ISOLATE */
			/* name */ 'DIRECTIONALITY_POP_DIRECTIONAL_ISOLATE',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_RIGHT_TO_LEFT */
			/* name */ 'DIRECTIONALITY_RIGHT_TO_LEFT',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC */
			/* name */ 'DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING */
			/* name */ 'DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_RIGHT_TO_LEFT_ISOLATE */
			/* name */ 'DIRECTIONALITY_RIGHT_TO_LEFT_ISOLATE',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE */
			/* name */ 'DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_SEGMENT_SEPARATOR */
			/* name */ 'DIRECTIONALITY_SEGMENT_SEPARATOR',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_UNDEFINED */
			/* name */ 'DIRECTIONALITY_UNDEFINED',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.DIRECTIONALITY_WHITESPACE */
			/* name */ 'DIRECTIONALITY_WHITESPACE',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.ENCLOSING_MARK */
			/* name */ 'ENCLOSING_MARK',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.END_PUNCTUATION */
			/* name */ 'END_PUNCTUATION',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.FINAL_QUOTE_PUNCTUATION */
			/* name */ 'FINAL_QUOTE_PUNCTUATION',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.FORMAT */
			/* name */ 'FORMAT',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.INITIAL_QUOTE_PUNCTUATION */
			/* name */ 'INITIAL_QUOTE_PUNCTUATION',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.LETTER_NUMBER */
			/* name */ 'LETTER_NUMBER',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.LINE_SEPARATOR */
			/* name */ 'LINE_SEPARATOR',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.LOWERCASE_LETTER */
			/* name */ 'LOWERCASE_LETTER',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.MATH_SYMBOL */
			/* name */ 'MATH_SYMBOL',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.Character.MAX_CODE_POINT */
			/* name */ 'MAX_CODE_POINT',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final char java.lang.Character.MAX_HIGH_SURROGATE */
			/* name */ 'MAX_HIGH_SURROGATE',
			/* type */ 'char',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final char java.lang.Character.MAX_LOW_SURROGATE */
			/* name */ 'MAX_LOW_SURROGATE',
			/* type */ 'char',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.Character.MAX_RADIX */
			/* name */ 'MAX_RADIX',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final char java.lang.Character.MAX_SURROGATE */
			/* name */ 'MAX_SURROGATE',
			/* type */ 'char',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final char java.lang.Character.MAX_VALUE */
			/* name */ 'MAX_VALUE',
			/* type */ 'char',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.Character.MIN_CODE_POINT */
			/* name */ 'MIN_CODE_POINT',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final char java.lang.Character.MIN_HIGH_SURROGATE */
			/* name */ 'MIN_HIGH_SURROGATE',
			/* type */ 'char',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final char java.lang.Character.MIN_LOW_SURROGATE */
			/* name */ 'MIN_LOW_SURROGATE',
			/* type */ 'char',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.Character.MIN_RADIX */
			/* name */ 'MIN_RADIX',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.Character.MIN_SUPPLEMENTARY_CODE_POINT */
			/* name */ 'MIN_SUPPLEMENTARY_CODE_POINT',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final char java.lang.Character.MIN_SURROGATE */
			/* name */ 'MIN_SURROGATE',
			/* type */ 'char',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final char java.lang.Character.MIN_VALUE */
			/* name */ 'MIN_VALUE',
			/* type */ 'char',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.MODIFIER_LETTER */
			/* name */ 'MODIFIER_LETTER',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.MODIFIER_SYMBOL */
			/* name */ 'MODIFIER_SYMBOL',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.NON_SPACING_MARK */
			/* name */ 'NON_SPACING_MARK',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.OTHER_LETTER */
			/* name */ 'OTHER_LETTER',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.OTHER_NUMBER */
			/* name */ 'OTHER_NUMBER',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.OTHER_PUNCTUATION */
			/* name */ 'OTHER_PUNCTUATION',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.OTHER_SYMBOL */
			/* name */ 'OTHER_SYMBOL',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.PARAGRAPH_SEPARATOR */
			/* name */ 'PARAGRAPH_SEPARATOR',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.PRIVATE_USE */
			/* name */ 'PRIVATE_USE',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.Character.SIZE */
			/* name */ 'SIZE',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.SPACE_SEPARATOR */
			/* name */ 'SPACE_SEPARATOR',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.START_PUNCTUATION */
			/* name */ 'START_PUNCTUATION',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.SURROGATE */
			/* name */ 'SURROGATE',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.TITLECASE_LETTER */
			/* name */ 'TITLECASE_LETTER',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.lang.Class<java.lang.Character> java.lang.Character.TYPE */
			/* name */ 'TYPE',
			/* type */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Character'
				],
				/* raw type */ 'java.lang.Class',
				/* owner type */ UDF
			]],
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.UNASSIGNED */
			/* name */ 'UNASSIGNED',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final byte java.lang.Character.UPPERCASE_LETTER */
			/* name */ 'UPPERCASE_LETTER',
			/* type */ 'byte',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
