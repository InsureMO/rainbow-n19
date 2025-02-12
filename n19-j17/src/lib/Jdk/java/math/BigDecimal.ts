import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.math.BigDecimal', [
	/* super class, extends java.lang.Number */
	'java.lang.Number',
	[/* interfaces, implements java.lang.Comparable<java.math.BigDecimal> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.math.BigDecimal'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.math.BigDecimal(char[]) */
			[/* parameters */
				[/* parameter */
					/* name */ 'in',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal(char[],int,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'in',
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
		[/* public java.math.BigDecimal(char[],int,int,java.math.MathContext) */
			[/* parameters */
				[/* parameter */
					/* name */ 'e',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'digit',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'digit',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'c',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal(char[],java.math.MathContext) */
			[/* parameters */
				[/* parameter */
					/* name */ 'in',
					/* type */ '[C',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'mc',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal(double) */
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal(double,java.math.MathContext) */
			[/* parameters */
				[/* parameter */
					/* name */ 'rb',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'rb',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal(int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
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
		[/* public java.math.BigDecimal(int,java.math.MathContext) */
			[/* parameters */
				[/* parameter */
					/* name */ 'drop',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal(java.lang.String) */
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
		[/* public java.math.BigDecimal(java.lang.String,java.math.MathContext) */
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'mc',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal(java.math.BigInteger) */
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal(java.math.BigInteger,int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'unscaledVal',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'scale',
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
		[/* public java.math.BigDecimal(java.math.BigInteger,int,java.math.MathContext) */
			[/* parameters */
				[/* parameter */
					/* name */ 'drop',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'drop',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'mode',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal(java.math.BigInteger,java.math.MathContext) */
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigInteger',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'mc',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal(long) */
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal(long,java.math.MathContext) */
			[/* parameters */
				[/* parameter */
					/* name */ 'drop',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'drop',
					/* type */ 'java.math.MathContext',
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
		[/* public boolean java.math.BigDecimal.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'xDec',
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
		[/* public byte java.math.BigDecimal.byteValueExact() */
			/* name */ 'byteValueExact',
			/* parameters */,
			/* return */ 'byte',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public double java.math.BigDecimal.doubleValue() */
			/* name */ 'doubleValue',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public float java.math.BigDecimal.floatValue() */
			/* name */ 'floatValue',
			/* parameters */,
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.math.BigDecimal.compareTo(java.lang.Object) */
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
		[/* public int java.math.BigDecimal.compareTo(java.math.BigDecimal) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'xs',
					/* type */ 'java.math.BigDecimal',
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
		[/* public int java.math.BigDecimal.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.math.BigDecimal.intValue() */
			/* name */ 'intValue',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.math.BigDecimal.intValueExact() */
			/* name */ 'intValueExact',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.math.BigDecimal.precision() */
			/* name */ 'precision',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.math.BigDecimal.scale() */
			/* name */ 'scale',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.math.BigDecimal.signum() */
			/* name */ 'signum',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.math.BigDecimal.toEngineeringString() */
			/* name */ 'toEngineeringString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.math.BigDecimal.toPlainString() */
			/* name */ 'toPlainString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.math.BigDecimal.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.abs() */
			/* name */ 'abs',
			/* parameters */,
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.abs(java.math.MathContext) */
			/* name */ 'abs',
			[/* parameters */
				[/* parameter */
					/* name */ 'mc',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.add(java.math.BigDecimal) */
			/* name */ 'add',
			[/* parameters */
				[/* parameter */
					/* name */ 'augend',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.add(java.math.BigDecimal,java.math.MathContext) */
			/* name */ 'add',
			[/* parameters */
				[/* parameter */
					/* name */ 'precisionDiff',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'scaleDiff',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.divide(java.math.BigDecimal) */
			/* name */ 'divide',
			[/* parameters */
				[/* parameter */
					/* name */ 'quotient',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.divide(java.math.BigDecimal,int) */
			/* name */ 'divide',
			[/* parameters */
				[/* parameter */
					/* name */ 'divisor',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'roundingMode',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.divide(java.math.BigDecimal,int,int) */
			/* name */ 'divide',
			[/* parameters */
				[/* parameter */
					/* name */ 'divisor',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'scale',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'roundingMode',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.divide(java.math.BigDecimal,int,java.math.RoundingMode) */
			/* name */ 'divide',
			[/* parameters */
				[/* parameter */
					/* name */ 'divisor',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'scale',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'roundingMode',
					/* type */ 'java.math.RoundingMode',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.divide(java.math.BigDecimal,java.math.MathContext) */
			/* name */ 'divide',
			[/* parameters */
				[/* parameter */
					/* name */ 'divisor',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'mc',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.divide(java.math.BigDecimal,java.math.RoundingMode) */
			/* name */ 'divide',
			[/* parameters */
				[/* parameter */
					/* name */ 'divisor',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'roundingMode',
					/* type */ 'java.math.RoundingMode',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.divideToIntegralValue(java.math.BigDecimal) */
			/* name */ 'divideToIntegralValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'divisor',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.divideToIntegralValue(java.math.BigDecimal,java.math.MathContext) */
			/* name */ 'divideToIntegralValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'product',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'precisionDiff',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.max(java.math.BigDecimal) */
			/* name */ 'max',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.min(java.math.BigDecimal) */
			/* name */ 'min',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.movePointLeft(int) */
			/* name */ 'movePointLeft',
			[/* parameters */
				[/* parameter */
					/* name */ 'n',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.movePointRight(int) */
			/* name */ 'movePointRight',
			[/* parameters */
				[/* parameter */
					/* name */ 'n',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.multiply(java.math.BigDecimal) */
			/* name */ 'multiply',
			[/* parameters */
				[/* parameter */
					/* name */ 'multiplicand',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.multiply(java.math.BigDecimal,java.math.MathContext) */
			/* name */ 'multiply',
			[/* parameters */
				[/* parameter */
					/* name */ 'multiplicand',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'mc',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.negate() */
			/* name */ 'negate',
			/* parameters */,
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.negate(java.math.MathContext) */
			/* name */ 'negate',
			[/* parameters */
				[/* parameter */
					/* name */ 'mc',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.plus() */
			/* name */ 'plus',
			/* parameters */,
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.plus(java.math.MathContext) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'mc',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.pow(int) */
			/* name */ 'pow',
			[/* parameters */
				[/* parameter */
					/* name */ 'n',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.pow(int,java.math.MathContext) */
			/* name */ 'pow',
			[/* parameters */
				[/* parameter */
					/* name */ 'elength',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'i',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.remainder(java.math.BigDecimal) */
			/* name */ 'remainder',
			[/* parameters */
				[/* parameter */
					/* name */ 'divisor',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.remainder(java.math.BigDecimal,java.math.MathContext) */
			/* name */ 'remainder',
			[/* parameters */
				[/* parameter */
					/* name */ 'divisor',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'mc',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.round(java.math.MathContext) */
			/* name */ 'round',
			[/* parameters */
				[/* parameter */
					/* name */ 'mc',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.scaleByPowerOfTen(int) */
			/* name */ 'scaleByPowerOfTen',
			[/* parameters */
				[/* parameter */
					/* name */ 'n',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.setScale(int) */
			/* name */ 'setScale',
			[/* parameters */
				[/* parameter */
					/* name */ 'newScale',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.setScale(int,int) */
			/* name */ 'setScale',
			[/* parameters */
				[/* parameter */
					/* name */ 'raise',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'rb',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.setScale(int,java.math.RoundingMode) */
			/* name */ 'setScale',
			[/* parameters */
				[/* parameter */
					/* name */ 'newScale',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'roundingMode',
					/* type */ 'java.math.RoundingMode',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.sqrt(java.math.MathContext) */
			/* name */ 'sqrt',
			[/* parameters */
				[/* parameter */
					/* name */ 'result',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.stripTrailingZeros() */
			/* name */ 'stripTrailingZeros',
			/* parameters */,
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.subtract(java.math.BigDecimal) */
			/* name */ 'subtract',
			[/* parameters */
				[/* parameter */
					/* name */ 'subtrahend',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.subtract(java.math.BigDecimal,java.math.MathContext) */
			/* name */ 'subtract',
			[/* parameters */
				[/* parameter */
					/* name */ 'subtrahend',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'mc',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal java.math.BigDecimal.ulp() */
			/* name */ 'ulp',
			/* parameters */,
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal[] java.math.BigDecimal.divideAndRemainder(java.math.BigDecimal) */
			/* name */ 'divideAndRemainder',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[Ljava.math.BigDecimal;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigDecimal[] java.math.BigDecimal.divideAndRemainder(java.math.BigDecimal,java.math.MathContext) */
			/* name */ 'divideAndRemainder',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.math.BigDecimal',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.math.MathContext',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ '[Ljava.math.BigDecimal;',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigDecimal.toBigInteger() */
			/* name */ 'toBigInteger',
			/* parameters */,
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigDecimal.toBigIntegerExact() */
			/* name */ 'toBigIntegerExact',
			/* parameters */,
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.BigInteger java.math.BigDecimal.unscaledValue() */
			/* name */ 'unscaledValue',
			/* parameters */,
			/* return */ 'java.math.BigInteger',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.math.BigDecimal.longValue() */
			/* name */ 'longValue',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.math.BigDecimal.longValueExact() */
			/* name */ 'longValueExact',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public short java.math.BigDecimal.shortValueExact() */
			/* name */ 'shortValueExact',
			/* parameters */,
			/* return */ 'short',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.math.BigDecimal java.math.BigDecimal.valueOf(double) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.math.BigDecimal java.math.BigDecimal.valueOf(long) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'val',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.math.BigDecimal java.math.BigDecimal.valueOf(long,int) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'unscaledVal',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'scale',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.math.BigDecimal',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.math.BigDecimal java.math.BigDecimal.ZERO */
			/* name */ 'ZERO',
			/* type */ 'java.math.BigDecimal',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.math.BigDecimal java.math.BigDecimal.ONE */
			/* name */ 'ONE',
			/* type */ 'java.math.BigDecimal',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.math.BigDecimal java.math.BigDecimal.TEN */
			/* name */ 'TEN',
			/* type */ 'java.math.BigDecimal',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final int java.math.BigDecimal.ROUND_UP */
			/* name */ 'ROUND_UP',
			/* type */ 'int',
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', false]
				]
			],
			/* modifiers */ 25
		],
		[/* public static final int java.math.BigDecimal.ROUND_DOWN */
			/* name */ 'ROUND_DOWN',
			/* type */ 'int',
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', false]
				]
			],
			/* modifiers */ 25
		],
		[/* public static final int java.math.BigDecimal.ROUND_CEILING */
			/* name */ 'ROUND_CEILING',
			/* type */ 'int',
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', false]
				]
			],
			/* modifiers */ 25
		],
		[/* public static final int java.math.BigDecimal.ROUND_FLOOR */
			/* name */ 'ROUND_FLOOR',
			/* type */ 'int',
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', false]
				]
			],
			/* modifiers */ 25
		],
		[/* public static final int java.math.BigDecimal.ROUND_HALF_UP */
			/* name */ 'ROUND_HALF_UP',
			/* type */ 'int',
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', false]
				]
			],
			/* modifiers */ 25
		],
		[/* public static final int java.math.BigDecimal.ROUND_HALF_DOWN */
			/* name */ 'ROUND_HALF_DOWN',
			/* type */ 'int',
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', false]
				]
			],
			/* modifiers */ 25
		],
		[/* public static final int java.math.BigDecimal.ROUND_HALF_EVEN */
			/* name */ 'ROUND_HALF_EVEN',
			/* type */ 'int',
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', false]
				]
			],
			/* modifiers */ 25
		],
		[/* public static final int java.math.BigDecimal.ROUND_UNNECESSARY */
			/* name */ 'ROUND_UNNECESSARY',
			/* type */ 'int',
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', '9'],
					['p', 'forRemoval', false]
				]
			],
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
