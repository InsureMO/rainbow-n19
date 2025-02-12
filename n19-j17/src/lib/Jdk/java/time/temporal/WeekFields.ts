import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.temporal.WeekFields', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Serializable */
		'java.io.Serializable'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public boolean java.time.temporal.WeekFields.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public java.lang.String java.time.temporal.WeekFields.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.temporal.WeekFields.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.WeekFields java.time.temporal.WeekFields.of(java.util.Locale) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.Locale',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.WeekFields',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.WeekFields java.time.temporal.WeekFields.of(java.time.DayOfWeek,int) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.DayOfWeek',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.WeekFields',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.TemporalField java.time.temporal.WeekFields.dayOfWeek() */
			/* name */ 'dayOfWeek',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalField',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.DayOfWeek java.time.temporal.WeekFields.getFirstDayOfWeek() */
			/* name */ 'getFirstDayOfWeek',
			/* parameters */,
			/* return */ 'java.time.DayOfWeek',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.temporal.WeekFields.getMinimalDaysInFirstWeek() */
			/* name */ 'getMinimalDaysInFirstWeek',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.TemporalField java.time.temporal.WeekFields.weekOfYear() */
			/* name */ 'weekOfYear',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalField',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.TemporalField java.time.temporal.WeekFields.weekOfMonth() */
			/* name */ 'weekOfMonth',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalField',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.TemporalField java.time.temporal.WeekFields.weekOfWeekBasedYear() */
			/* name */ 'weekOfWeekBasedYear',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalField',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.TemporalField java.time.temporal.WeekFields.weekBasedYear() */
			/* name */ 'weekBasedYear',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalField',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.time.temporal.WeekFields java.time.temporal.WeekFields.ISO */
			/* name */ 'ISO',
			/* type */ 'java.time.temporal.WeekFields',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.temporal.WeekFields java.time.temporal.WeekFields.SUNDAY_START */
			/* name */ 'SUNDAY_START',
			/* type */ 'java.time.temporal.WeekFields',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.temporal.TemporalUnit java.time.temporal.WeekFields.WEEK_BASED_YEARS */
			/* name */ 'WEEK_BASED_YEARS',
			/* type */ 'java.time.temporal.TemporalUnit',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
