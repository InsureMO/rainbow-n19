import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.lang.Short', [
	/* super class, extends java.lang.Number */
	'java.lang.Number',
	[/* interfaces, implements java.lang.Comparable<java.lang.Short>, java.lang.constant.Constable */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.lang.Short'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]],
		'java.lang.constant.Constable'
	],
	/* modifiers */ 17,
	[/* declared annotations */
		['jdk.internal.ValueBased']
	],
	/* type parameters */,
	[/* declared constructors */
		[/* public java.lang.Short(short) */
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'short',
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
		],
		[/* public java.lang.Short(java.lang.String) throws java.lang.NumberFormatException */
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
		]
	],
	[/* declared methods */
		[/* public boolean java.lang.Short.equals(java.lang.Object) */
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
		[/* public java.lang.String java.lang.Short.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.String java.lang.Short.toString(short) */
			/* name */ 'toString',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'short',
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
		[/* public int java.lang.Short.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static int java.lang.Short.hashCode(short) */
			/* name */ 'hashCode',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'short',
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
		[/* public static short java.lang.Short.reverseBytes(short) */
			/* name */ 'reverseBytes',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'short',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'short',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public int java.lang.Short.compareTo(java.lang.Short) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'anotherShort',
					/* type */ 'java.lang.Short',
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
		[/* public int java.lang.Short.compareTo(java.lang.Object) */
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
		[/* public static int java.lang.Short.compare(short,short) */
			/* name */ 'compare',
			[/* parameters */
				[/* parameter */
					/* name */ 'y',
					/* type */ 'short',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'short',
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
		[/* public byte java.lang.Short.byteValue() */
			/* name */ 'byteValue',
			/* parameters */,
			/* return */ 'byte',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public short java.lang.Short.shortValue() */
			/* name */ 'shortValue',
			/* parameters */,
			/* return */ 'short',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public int java.lang.Short.intValue() */
			/* name */ 'intValue',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.lang.Short.longValue() */
			/* name */ 'longValue',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public float java.lang.Short.floatValue() */
			/* name */ 'floatValue',
			/* parameters */,
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public double java.lang.Short.doubleValue() */
			/* name */ 'doubleValue',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.lang.Short java.lang.Short.valueOf(java.lang.String) throws java.lang.NumberFormatException */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Short',
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
		[/* public static java.lang.Short java.lang.Short.valueOf(java.lang.String,int) throws java.lang.NumberFormatException */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Short',
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
		[/* public static java.lang.Short java.lang.Short.valueOf(short) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'offset',
					/* type */ 'short',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Short',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				['jdk.internal.vm.annotation.IntrinsicCandidate']
			],
			/* type parameters */ UDF
		],
		[/* public static java.lang.Short java.lang.Short.decode(java.lang.String) throws java.lang.NumberFormatException */
			/* name */ 'decode',
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.Short',
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
		[/* public java.util.Optional<java.lang.constant.DynamicConstantDesc<java.lang.Short>> java.lang.Short.describeConstable() */
			/* name */ 'describeConstable',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.Short'
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
		[/* public static long java.lang.Short.toUnsignedLong(short) */
			/* name */ 'toUnsignedLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'short',
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
		[/* public static int java.lang.Short.toUnsignedInt(short) */
			/* name */ 'toUnsignedInt',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'short',
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
		[/* public static int java.lang.Short.compareUnsigned(short,short) */
			/* name */ 'compareUnsigned',
			[/* parameters */
				[/* parameter */
					/* name */ 'y',
					/* type */ 'short',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'short',
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
		[/* public static short java.lang.Short.parseShort(java.lang.String,int) throws java.lang.NumberFormatException */
			/* name */ 'parseShort',
			[/* parameters */
				[/* parameter */
					/* name */ 'radix',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'i',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'short',
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
		[/* public static short java.lang.Short.parseShort(java.lang.String) throws java.lang.NumberFormatException */
			/* name */ 'parseShort',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'short',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.NumberFormatException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final short java.lang.Short.MIN_VALUE */
			/* name */ 'MIN_VALUE',
			/* type */ 'short',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final short java.lang.Short.MAX_VALUE */
			/* name */ 'MAX_VALUE',
			/* type */ 'short',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.lang.Class<java.lang.Short> java.lang.Short.TYPE */
			/* name */ 'TYPE',
			/* type */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.Short'
				],
				/* raw type */ 'java.lang.Class',
				/* owner type */ UDF
			]],
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.Short.SIZE */
			/* name */ 'SIZE',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.lang.Short.BYTES */
			/* name */ 'BYTES',
			/* type */ 'int',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
