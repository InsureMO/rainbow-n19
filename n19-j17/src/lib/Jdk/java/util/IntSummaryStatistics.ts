import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.IntSummaryStatistics', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.util.function.IntConsumer */
		'java.util.function.IntConsumer'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.util.IntSummaryStatistics() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.IntSummaryStatistics(long,int,int,long) throws java.lang.IllegalArgumentException */
			[/* parameters */
				[/* parameter */
					/* name */ 'count',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'min',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'max',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.IllegalArgumentException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public final double java.util.IntSummaryStatistics.getAverage() */
			/* name */ 'getAverage',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int java.util.IntSummaryStatistics.getMax() */
			/* name */ 'getMax',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final int java.util.IntSummaryStatistics.getMin() */
			/* name */ 'getMin',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final long java.util.IntSummaryStatistics.getCount() */
			/* name */ 'getCount',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final long java.util.IntSummaryStatistics.getSum() */
			/* name */ 'getSum',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.IntSummaryStatistics.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.IntSummaryStatistics.accept(int) */
			/* name */ 'accept',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.IntSummaryStatistics.combine(java.util.IntSummaryStatistics) */
			/* name */ 'combine',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ 'java.util.IntSummaryStatistics',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
