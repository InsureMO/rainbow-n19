import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.DoubleSummaryStatistics', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.util.function.DoubleConsumer */
		'java.util.function.DoubleConsumer'
	],
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.util.DoubleSummaryStatistics() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.DoubleSummaryStatistics(long,double,double,double) throws java.lang.IllegalArgumentException */
			[/* parameters */
				[/* parameter */
					/* name */ 'ncount',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'count',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'min',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'max',
					/* type */ 'double',
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
		[/* public final double java.util.DoubleSummaryStatistics.getAverage() */
			/* name */ 'getAverage',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final double java.util.DoubleSummaryStatistics.getMax() */
			/* name */ 'getMax',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final double java.util.DoubleSummaryStatistics.getMin() */
			/* name */ 'getMin',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final double java.util.DoubleSummaryStatistics.getSum() */
			/* name */ 'getSum',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final long java.util.DoubleSummaryStatistics.getCount() */
			/* name */ 'getCount',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.DoubleSummaryStatistics.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.DoubleSummaryStatistics.accept(double) */
			/* name */ 'accept',
			[/* parameters */
				[/* parameter */
					/* name */ 'value',
					/* type */ 'double',
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
		[/* public void java.util.DoubleSummaryStatistics.combine(java.util.DoubleSummaryStatistics) */
			/* name */ 'combine',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ 'java.util.DoubleSummaryStatistics',
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
