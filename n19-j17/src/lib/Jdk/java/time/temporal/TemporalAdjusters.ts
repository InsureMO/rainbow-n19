import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.temporal.TemporalAdjusters', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static java.time.temporal.TemporalAdjuster java.time.temporal.TemporalAdjusters.next(java.time.DayOfWeek) */
			/* name */ 'next',
			[/* parameters */
				[/* parameter */
					/* name */ 'dowValue',
					/* type */ 'java.time.DayOfWeek',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.TemporalAdjuster',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.TemporalAdjuster java.time.temporal.TemporalAdjusters.previous(java.time.DayOfWeek) */
			/* name */ 'previous',
			[/* parameters */
				[/* parameter */
					/* name */ 'dowValue',
					/* type */ 'java.time.DayOfWeek',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.TemporalAdjuster',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.TemporalAdjuster java.time.temporal.TemporalAdjusters.lastDayOfMonth() */
			/* name */ 'lastDayOfMonth',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalAdjuster',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.TemporalAdjuster java.time.temporal.TemporalAdjusters.nextOrSame(java.time.DayOfWeek) */
			/* name */ 'nextOrSame',
			[/* parameters */
				[/* parameter */
					/* name */ 'dowValue',
					/* type */ 'java.time.DayOfWeek',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.TemporalAdjuster',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.TemporalAdjuster java.time.temporal.TemporalAdjusters.previousOrSame(java.time.DayOfWeek) */
			/* name */ 'previousOrSame',
			[/* parameters */
				[/* parameter */
					/* name */ 'dowValue',
					/* type */ 'java.time.DayOfWeek',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.TemporalAdjuster',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.TemporalAdjuster java.time.temporal.TemporalAdjusters.firstDayOfYear() */
			/* name */ 'firstDayOfYear',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalAdjuster',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.TemporalAdjuster java.time.temporal.TemporalAdjusters.dayOfWeekInMonth(int,java.time.DayOfWeek) */
			/* name */ 'dayOfWeekInMonth',
			[/* parameters */
				[/* parameter */
					/* name */ 'dayOfWeek',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dowValue',
					/* type */ 'java.time.DayOfWeek',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.TemporalAdjuster',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.TemporalAdjuster java.time.temporal.TemporalAdjusters.ofDateAdjuster(java.util.function.UnaryOperator<java.time.LocalDate>) */
			/* name */ 'ofDateAdjuster',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.time.LocalDate'
						],
						/* raw type */ 'java.util.function.UnaryOperator',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.TemporalAdjuster',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.TemporalAdjuster java.time.temporal.TemporalAdjusters.firstDayOfMonth() */
			/* name */ 'firstDayOfMonth',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalAdjuster',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.TemporalAdjuster java.time.temporal.TemporalAdjusters.firstDayOfNextMonth() */
			/* name */ 'firstDayOfNextMonth',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalAdjuster',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.TemporalAdjuster java.time.temporal.TemporalAdjusters.lastDayOfYear() */
			/* name */ 'lastDayOfYear',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalAdjuster',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.TemporalAdjuster java.time.temporal.TemporalAdjusters.firstDayOfNextYear() */
			/* name */ 'firstDayOfNextYear',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalAdjuster',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.TemporalAdjuster java.time.temporal.TemporalAdjusters.firstInMonth(java.time.DayOfWeek) */
			/* name */ 'firstInMonth',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.DayOfWeek',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.TemporalAdjuster',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.TemporalAdjuster java.time.temporal.TemporalAdjusters.lastInMonth(java.time.DayOfWeek) */
			/* name */ 'lastInMonth',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.DayOfWeek',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.TemporalAdjuster',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
