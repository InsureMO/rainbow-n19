import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.function.IntPredicate', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	[/* declared annotations */
		['java.lang.FunctionalInterface']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean java.util.function.IntPredicate.test(int) */
			/* name */ 'test',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
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
		[/* public default java.util.function.IntPredicate java.util.function.IntPredicate.or(java.util.function.IntPredicate) */
			/* name */ 'or',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ 'java.util.function.IntPredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.function.IntPredicate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.function.IntPredicate java.util.function.IntPredicate.negate() */
			/* name */ 'negate',
			/* parameters */,
			/* return */ 'java.util.function.IntPredicate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.function.IntPredicate java.util.function.IntPredicate.and(java.util.function.IntPredicate) */
			/* name */ 'and',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ 'java.util.function.IntPredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.function.IntPredicate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
