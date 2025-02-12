import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.math.MathContext', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Serializable */
		'java.io.Serializable'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.math.MathContext(int) */
			[/* parameters */
				[/* parameter */
					/* name */ 'setPrecision',
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
		[/* public java.math.MathContext(int,java.math.RoundingMode) */
			[/* parameters */
				[/* parameter */
					/* name */ 'setPrecision',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'setRoundingMode',
					/* type */ 'java.math.RoundingMode',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.MathContext(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'fence',
					/* type */ 'java.lang.String',
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
		[/* public boolean java.math.MathContext.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'mc',
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
		[/* public int java.math.MathContext.getPrecision() */
			/* name */ 'getPrecision',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.math.MathContext.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.math.MathContext.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.math.RoundingMode java.math.MathContext.getRoundingMode() */
			/* name */ 'getRoundingMode',
			/* parameters */,
			/* return */ 'java.math.RoundingMode',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.math.MathContext java.math.MathContext.UNLIMITED */
			/* name */ 'UNLIMITED',
			/* type */ 'java.math.MathContext',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.math.MathContext java.math.MathContext.DECIMAL32 */
			/* name */ 'DECIMAL32',
			/* type */ 'java.math.MathContext',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.math.MathContext java.math.MathContext.DECIMAL64 */
			/* name */ 'DECIMAL64',
			/* type */ 'java.math.MathContext',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.math.MathContext java.math.MathContext.DECIMAL128 */
			/* name */ 'DECIMAL128',
			/* type */ 'java.math.MathContext',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
