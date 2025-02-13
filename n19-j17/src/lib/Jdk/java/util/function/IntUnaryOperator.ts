import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.function.IntUnaryOperator', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	[/* declared annotations */
		['java.lang.FunctionalInterface']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract int java.util.function.IntUnaryOperator.applyAsInt(int) */
			/* name */ 'applyAsInt',
			[/* parameters */
				[/* parameter */
					/* name */ 'operand',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.function.IntUnaryOperator java.util.function.IntUnaryOperator.andThen(java.util.function.IntUnaryOperator) */
			/* name */ 'andThen',
			[/* parameters */
				[/* parameter */
					/* name */ 'after',
					/* type */ 'java.util.function.IntUnaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.function.IntUnaryOperator',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.function.IntUnaryOperator java.util.function.IntUnaryOperator.compose(java.util.function.IntUnaryOperator) */
			/* name */ 'compose',
			[/* parameters */
				[/* parameter */
					/* name */ 'before',
					/* type */ 'java.util.function.IntUnaryOperator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.function.IntUnaryOperator',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.function.IntUnaryOperator java.util.function.IntUnaryOperator.identity() */
			/* name */ 'identity',
			/* parameters */,
			/* return */ 'java.util.function.IntUnaryOperator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
