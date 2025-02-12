import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.function.LongPredicate', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	[/* declared annotations */
		['java.lang.FunctionalInterface']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean java.util.function.LongPredicate.test(long) */
			/* name */ 'test',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
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
		[/* public default java.util.function.LongPredicate java.util.function.LongPredicate.or(java.util.function.LongPredicate) */
			/* name */ 'or',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.LongPredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.function.LongPredicate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.function.LongPredicate java.util.function.LongPredicate.negate() */
			/* name */ 'negate',
			/* parameters */,
			/* return */ 'java.util.function.LongPredicate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.function.LongPredicate java.util.function.LongPredicate.and(java.util.function.LongPredicate) */
			/* name */ 'and',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.function.LongPredicate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.function.LongPredicate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
