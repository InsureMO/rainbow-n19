import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.function.DoublePredicate', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	[/* declared annotations */
		['java.lang.FunctionalInterface']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean java.util.function.DoublePredicate.test(double) */
			/* name */ 'test',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'double',
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
		[/* public default java.util.function.DoublePredicate java.util.function.DoublePredicate.and(java.util.function.DoublePredicate) */
			/* name */ 'and',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ 'java.util.function.DoublePredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.function.DoublePredicate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.function.DoublePredicate java.util.function.DoublePredicate.negate() */
			/* name */ 'negate',
			/* parameters */,
			/* return */ 'java.util.function.DoublePredicate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.function.DoublePredicate java.util.function.DoublePredicate.or(java.util.function.DoublePredicate) */
			/* name */ 'or',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ 'java.util.function.DoublePredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.function.DoublePredicate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
