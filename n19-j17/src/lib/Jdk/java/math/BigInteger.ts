import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.math.BigInteger', [
	/* super class, extends java.lang.Number */
	'java.lang.Number',
	[/* interfaces, implements java.lang.Comparable<java.math.BigInteger> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.math.BigInteger'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.math.BigInteger(byte[]) */
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger(byte[],int,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'off',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'len',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger(int,byte[]) */
			[/* parameters */
				[/* parameter */
					/* name */ 'signum',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'magnitude',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger(int,byte[],int,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'signum',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'magnitude',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'off',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'len',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger(int,int,java.util.Random) */
			[/* parameters */
				[/* parameter */
					/* name */ 'bitLength',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'certainty',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'rnd',
					/* type */ 'java.util.Random',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger(int,java.util.Random) */
			[/* parameters */
				[/* parameter */
					/* name */ 'numBits',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'rnd',
					/* type */ 'java.util.Random',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger(java.lang.String,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
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
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean java.math.BigInteger.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'x',
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
		[/* public boolean java.math.BigInteger.isProbablePrime(int) */
			/* name */ 'isProbablePrime',
			[/* parameters */
				[/* parameter */
					/* name */ 'certainty',
					/* type */ 'int',
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
		[/* public boolean java.math.BigInteger.testBit(int) */
			/* name */ 'testBit',
			[/* parameters */
				[/* parameter */
					/* name */ 'n',
					/* type */ 'int',
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
		[/* public byte java.math.BigInteger.byteValueExact() */
			/* name */ 'byteValueExact',
			/* parameters */,
			/* return */ 'byte',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public byte[] java.math.BigInteger.toByteArray() */
			/* name */ 'toByteArray',
			/* parameters */,
			/* return */ '[B',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public double java.math.BigInteger.doubleValue() */
			/* name */ 'doubleValue',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public float java.math.BigInteger.floatValue() */
			/* name */ 'floatValue',
			/* parameters */,
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.math.BigInteger.bitCount() */
			/* name */ 'bitCount',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.math.BigInteger.bitLength() */
			/* name */ 'bitLength',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.math.BigInteger.compareTo(java.math.BigInteger) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
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
		[/* public int java.math.BigInteger.getLowestSetBit() */
			/* name */ 'getLowestSetBit',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.math.BigInteger.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.math.BigInteger.intValue() */
			/* name */ 'intValue',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.math.BigInteger.intValueExact() */
			/* name */ 'intValueExact',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.math.BigInteger.signum() */
			/* name */ 'signum',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.math.BigInteger.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.math.BigInteger.toString(int) */
			/* name */ 'toString',
			[/* parameters */
				[/* parameter */
					/* name */ 'radix',
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
		[/* public java.math.BigInteger java.math.BigInteger.abs() */
			/* name */ 'abs',
			/* parameters */,
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.add(java.math.BigInteger) */
			/* name */ 'add',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.and(java.math.BigInteger) */
			/* name */ 'and',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.andNot(java.math.BigInteger) */
			/* name */ 'andNot',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.clearBit(int) */
			/* name */ 'clearBit',
			[/* parameters */
				[/* parameter */
					/* name */ 'n',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.divide(java.math.BigInteger) */
			/* name */ 'divide',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.flipBit(int) */
			/* name */ 'flipBit',
			[/* parameters */
				[/* parameter */
					/* name */ 'n',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.gcd(java.math.BigInteger) */
			/* name */ 'gcd',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.max(java.math.BigInteger) */
			/* name */ 'max',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.min(java.math.BigInteger) */
			/* name */ 'min',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.mod(java.math.BigInteger) */
			/* name */ 'mod',
			[/* parameters */
				[/* parameter */
					/* name */ 'm',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.modInverse(java.math.BigInteger) */
			/* name */ 'modInverse',
			[/* parameters */
				[/* parameter */
					/* name */ 'm',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.modPow(java.math.BigInteger,java.math.BigInteger) */
			/* name */ 'modPow',
			[/* parameters */
				[/* parameter */
					/* name */ 'exponent',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'm',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.multiply(java.math.BigInteger) */
			/* name */ 'multiply',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.negate() */
			/* name */ 'negate',
			/* parameters */,
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.nextProbablePrime() */
			/* name */ 'nextProbablePrime',
			/* parameters */,
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.not() */
			/* name */ 'not',
			/* parameters */,
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.or(java.math.BigInteger) */
			/* name */ 'or',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.pow(int) */
			/* name */ 'pow',
			[/* parameters */
				[/* parameter */
					/* name */ 'exponent',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.remainder(java.math.BigInteger) */
			/* name */ 'remainder',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.setBit(int) */
			/* name */ 'setBit',
			[/* parameters */
				[/* parameter */
					/* name */ 'n',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.shiftLeft(int) */
			/* name */ 'shiftLeft',
			[/* parameters */
				[/* parameter */
					/* name */ 'n',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.shiftRight(int) */
			/* name */ 'shiftRight',
			[/* parameters */
				[/* parameter */
					/* name */ 'n',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.sqrt() */
			/* name */ 'sqrt',
			/* parameters */,
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.subtract(java.math.BigInteger) */
			/* name */ 'subtract',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigInteger.xor(java.math.BigInteger) */
			/* name */ 'xor',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger[] java.math.BigInteger.divideAndRemainder(java.math.BigInteger) */
			/* name */ 'divideAndRemainder',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[Ljava.math.BigInteger;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger[] java.math.BigInteger.sqrtAndRemainder() */
			/* name */ 'sqrtAndRemainder',
			/* parameters */,
			/* return */ '[Ljava.math.BigInteger;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.math.BigInteger.longValue() */
			/* name */ 'longValue',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.math.BigInteger.longValueExact() */
			/* name */ 'longValueExact',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public short java.math.BigInteger.shortValueExact() */
			/* name */ 'shortValueExact',
			/* parameters */,
			/* return */ 'short',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.math.BigInteger java.math.BigInteger.probablePrime(int,java.util.Random) */
			/* name */ 'probablePrime',
			[/* parameters */
				[/* parameter */
					/* name */ 'bitLength',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'rnd',
					/* type */ 'java.util.Random',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.math.BigInteger java.math.BigInteger.valueOf(long) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.math.BigInteger java.math.BigInteger.ZERO */
			/* name */ 'ZERO',
			/* type */ 'java.math.BigInteger',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.math.BigInteger java.math.BigInteger.ONE */
			/* name */ 'ONE',
			/* type */ 'java.math.BigInteger',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.math.BigInteger java.math.BigInteger.TWO */
			/* name */ 'TWO',
			/* type */ 'java.math.BigInteger',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.math.BigInteger java.math.BigInteger.TEN */
			/* name */ 'TEN',
			/* type */ 'java.math.BigInteger',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
