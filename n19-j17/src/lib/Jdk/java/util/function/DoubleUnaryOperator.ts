import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.function.DoubleUnaryOperator', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	[/* declared annotations */
		['java.lang.FunctionalInterface']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract double java.util.function.DoubleUnaryOperator.applyAsDouble(double) */
			/* name */ 'applyAsDouble',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.function.DoubleUnaryOperator java.util.function.DoubleUnaryOperator.andThen(java.util.function.DoubleUnaryOperator) */
			/* name */ 'andThen',
			[/* parameters */
				[/* parameter */
					/* name */ 'after',
					/* type */ 'java.util.function.DoubleUnaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.function.DoubleUnaryOperator',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.function.DoubleUnaryOperator java.util.function.DoubleUnaryOperator.compose(java.util.function.DoubleUnaryOperator) */
			/* name */ 'compose',
			[/* parameters */
				[/* parameter */
					/* name */ 'before',
					/* type */ 'java.util.function.DoubleUnaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.function.DoubleUnaryOperator',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.function.DoubleUnaryOperator java.util.function.DoubleUnaryOperator.identity() */
			/* name */ 'identity',
			/* parameters */,
			/* return */ 'java.util.function.DoubleUnaryOperator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
