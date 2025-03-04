import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.Long', [
	/* super class, extends java.lang.Number */
	'java.lang.Number',
	[/* interfaces, implements java.lang.Comparable<java.lang.Long>, java.lang.constant.Constable, java.lang.constant.ConstantDesc */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.Long'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]],
		'java.lang.constant.Constable',
		'java.lang.constant.ConstantDesc'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.lang.Long(java.lang.String) throws java.lang.NumberFormatException */
			[/* parameters */
				[/* parameter */
					/* name */ 's',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NumberFormatException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', true]
				]
			],
			/* type parameters */ UDF
		],
		[/* public java.lang.Long(long) */
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'long',
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
		[/* public boolean java.lang.Long.equals(java.lang.Object) */
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
		[/* public byte java.lang.Long.byteValue() */
			/* name */ 'byteValue',
			/* parameters */,
			/* return */ 'byte',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public double java.lang.Long.doubleValue() */
			/* name */ 'doubleValue',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public float java.lang.Long.floatValue() */
			/* name */ 'floatValue',
			/* parameters */,
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.Long.compareTo(java.lang.Long) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'anotherLong',
					/* type */ 'java.lang.Long',
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
		[/* public int java.lang.Long.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.lang.Long.intValue() */
			/* name */ 'intValue',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.Long java.lang.Long.resolveConstantDesc(java.lang.invoke.MethodHandles$Lookup) */
			/* name */ 'resolveConstantDesc',
			[/* parameters */
				[/* parameter */
					/* name */ 'lookup',
					/* type */ 'java.lang.invoke.MethodHandles$Lookup',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.lang.Long.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Optional<java.lang.Long> java.lang.Long.describeConstable() */
			/* name */ 'describeConstable',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Long'
				],
				/* raw type */ 'java.util.Optional',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.lang.Long.longValue() */
			/* name */ 'longValue',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public short java.lang.Long.shortValue() */
			/* name */ 'shortValue',
			/* parameters */,
			/* return */ 'short',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Long.bitCount(long) */
			/* name */ 'bitCount',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
		[/* public static int java.lang.Long.compare(long,long) */
			/* name */ 'compare',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
					/* type */ 'long',
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
		[/* public static int java.lang.Long.compareUnsigned(long,long) */
			/* name */ 'compareUnsigned',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'y',
					/* type */ 'long',
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
		[/* public static int java.lang.Long.hashCode(long) */
			/* name */ 'hashCode',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'long',
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
		[/* public static int java.lang.Long.numberOfLeadingZeros(long) */
			/* name */ 'numberOfLeadingZeros',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
		[/* public static int java.lang.Long.numberOfTrailingZeros(long) */
			/* name */ 'numberOfTrailingZeros',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
		[/* public static int java.lang.Long.signum(long) */
			/* name */ 'signum',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
		[/* public static java.lang.Long java.lang.Long.decode(java.lang.String) throws java.lang.NumberFormatException */
			/* name */ 'decode',
			[/* parameters */
				[/* parameter */
					/* name */ 'nm',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Long',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NumberFormatException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.Long java.lang.Long.getLong(java.lang.String) */
			/* name */ 'getLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'nm',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.Long java.lang.Long.getLong(java.lang.String,java.lang.Long) */
			/* name */ 'getLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'nm',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.lang.Long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.Long java.lang.Long.getLong(java.lang.String,long) */
			/* name */ 'getLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'nm',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'val',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.Long java.lang.Long.valueOf(java.lang.String) throws java.lang.NumberFormatException */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 's',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Long',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NumberFormatException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.Long java.lang.Long.valueOf(java.lang.String,int) throws java.lang.NumberFormatException */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 's',
					/* type */ 'java.lang.String',
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
			/* return */ 'java.lang.Long',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NumberFormatException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.Long java.lang.Long.valueOf(long) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'l',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Long',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.lang.Long.toBinaryString(long) */
			/* name */ 'toBinaryString',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
		[/* public static java.lang.String java.lang.Long.toHexString(long) */
			/* name */ 'toHexString',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
		[/* public static java.lang.String java.lang.Long.toOctalString(long) */
			/* name */ 'toOctalString',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
		[/* public static java.lang.String java.lang.Long.toString(long) */
			/* name */ 'toString',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
		[/* public static java.lang.String java.lang.Long.toString(long,int) */
			/* name */ 'toString',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.lang.Long.toUnsignedString(long) */
			/* name */ 'toUnsignedString',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
		[/* public static java.lang.String java.lang.Long.toUnsignedString(long,int) */
			/* name */ 'toUnsignedString',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.Long.divideUnsigned(long,long) */
			/* name */ 'divideUnsigned',
			[/* parameters */
				[/* parameter */
					/* name */ 'dividend',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'divisor',
					/* type */ 'long',
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
		[/* public static long java.lang.Long.highestOneBit(long) */
			/* name */ 'highestOneBit',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
		[/* public static long java.lang.Long.lowestOneBit(long) */
			/* name */ 'lowestOneBit',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
		[/* public static long java.lang.Long.max(long,long) */
			/* name */ 'max',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'b',
					/* type */ 'long',
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
		[/* public static long java.lang.Long.min(long,long) */
			/* name */ 'min',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'b',
					/* type */ 'long',
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
		[/* public static long java.lang.Long.parseLong(java.lang.CharSequence,int,int,int) throws java.lang.NumberFormatException */
			/* name */ 'parseLong',
			[/* parameters */
				[/* parameter */
					/* name */ 's',
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
				],
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NumberFormatException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.Long.parseLong(java.lang.String) throws java.lang.NumberFormatException */
			/* name */ 'parseLong',
			[/* parameters */
				[/* parameter */
					/* name */ 's',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NumberFormatException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.Long.parseLong(java.lang.String,int) throws java.lang.NumberFormatException */
			/* name */ 'parseLong',
			[/* parameters */
				[/* parameter */
					/* name */ 's',
					/* type */ 'java.lang.String',
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
			/* return */ 'long',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NumberFormatException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.Long.parseUnsignedLong(java.lang.CharSequence,int,int,int) throws java.lang.NumberFormatException */
			/* name */ 'parseUnsignedLong',
			[/* parameters */
				[/* parameter */
					/* name */ 's',
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
				],
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NumberFormatException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.Long.parseUnsignedLong(java.lang.String) throws java.lang.NumberFormatException */
			/* name */ 'parseUnsignedLong',
			[/* parameters */
				[/* parameter */
					/* name */ 's',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NumberFormatException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.Long.parseUnsignedLong(java.lang.String,int) throws java.lang.NumberFormatException */
			/* name */ 'parseUnsignedLong',
			[/* parameters */
				[/* parameter */
					/* name */ 's',
					/* type */ 'java.lang.String',
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
			/* return */ 'long',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NumberFormatException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static long java.lang.Long.remainderUnsigned(long,long) */
			/* name */ 'remainderUnsigned',
			[/* parameters */
				[/* parameter */
					/* name */ 'dividend',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'divisor',
					/* type */ 'long',
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
		[/* public static long java.lang.Long.reverse(long) */
			/* name */ 'reverse',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
		[/* public static long java.lang.Long.reverseBytes(long) */
			/* name */ 'reverseBytes',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
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
		[/* public static long java.lang.Long.rotateLeft(long,int) */
			/* name */ 'rotateLeft',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'distance',
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
		],
		[/* public static long java.lang.Long.rotateRight(long,int) */
			/* name */ 'rotateRight',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'distance',
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
		],
		[/* public static long java.lang.Long.sum(long,long) */
			/* name */ 'sum',
			[/* parameters */
				[/* parameter */
					/* name */ 'a',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'b',
					/* type */ 'long',
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
	[/* declared fields */
		[/* public static final int java.lang.Long.BYTES */
			/* name */ 'BYTES',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final long java.lang.Long.MAX_VALUE */
			/* name */ 'MAX_VALUE',
			/* type */ 'long',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final long java.lang.Long.MIN_VALUE */
			/* name */ 'MIN_VALUE',
			/* type */ 'long',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.Long.SIZE */
			/* name */ 'SIZE',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.lang.Class<java.lang.Long> java.lang.Long.TYPE */
			/* name */ 'TYPE',
			/* type */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Long'
				],
				/* raw type */ 'java.lang.Class',
				/* owner type */ UDF
			]],
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
