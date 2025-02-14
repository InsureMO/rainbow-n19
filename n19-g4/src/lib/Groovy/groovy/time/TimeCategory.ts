import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.time.TimeCategory', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 1,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public groovy.time.TimeCategory() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public static groovy.time.DatumDependentDuration groovy.time.TimeCategory.getMonth(java.lang.Integer) */
			/* name */ 'getMonth',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.DatumDependentDuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.DatumDependentDuration groovy.time.TimeCategory.getMonths(java.lang.Integer) */
			/* name */ 'getMonths',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.DatumDependentDuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.DatumDependentDuration groovy.time.TimeCategory.getYear(java.lang.Integer) */
			/* name */ 'getYear',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.DatumDependentDuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.DatumDependentDuration groovy.time.TimeCategory.getYears(java.lang.Integer) */
			/* name */ 'getYears',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.DatumDependentDuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.Duration groovy.time.TimeCategory.getDay(java.lang.Integer) */
			/* name */ 'getDay',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.Duration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.Duration groovy.time.TimeCategory.getDaylightSavingsOffset(groovy.time.BaseDuration) */
			/* name */ 'getDaylightSavingsOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'groovy.time.BaseDuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.Duration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.Duration groovy.time.TimeCategory.getDaylightSavingsOffset(java.util.Date) */
			/* name */ 'getDaylightSavingsOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.util.Date',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.Duration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.Duration groovy.time.TimeCategory.getDays(java.lang.Integer) */
			/* name */ 'getDays',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.Duration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.Duration groovy.time.TimeCategory.getRelativeDaylightSavingsOffset(java.util.Date,java.util.Date) */
			/* name */ 'getRelativeDaylightSavingsOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.util.Date',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'other',
					/* type */ 'java.util.Date',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.Duration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.Duration groovy.time.TimeCategory.getWeek(java.lang.Integer) */
			/* name */ 'getWeek',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.Duration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.Duration groovy.time.TimeCategory.getWeeks(java.lang.Integer) */
			/* name */ 'getWeeks',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.Duration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.TimeDuration groovy.time.TimeCategory.getHour(java.lang.Integer) */
			/* name */ 'getHour',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.TimeDuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.TimeDuration groovy.time.TimeCategory.getHours(java.lang.Integer) */
			/* name */ 'getHours',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.TimeDuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.TimeDuration groovy.time.TimeCategory.getMillisecond(java.lang.Integer) */
			/* name */ 'getMillisecond',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.TimeDuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.TimeDuration groovy.time.TimeCategory.getMilliseconds(java.lang.Integer) */
			/* name */ 'getMilliseconds',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.TimeDuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.TimeDuration groovy.time.TimeCategory.getMinute(java.lang.Integer) */
			/* name */ 'getMinute',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.TimeDuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.TimeDuration groovy.time.TimeCategory.getMinutes(java.lang.Integer) */
			/* name */ 'getMinutes',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.TimeDuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.TimeDuration groovy.time.TimeCategory.getSecond(java.lang.Integer) */
			/* name */ 'getSecond',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.TimeDuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.TimeDuration groovy.time.TimeCategory.getSeconds(java.lang.Integer) */
			/* name */ 'getSeconds',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.lang.Integer',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.TimeDuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static groovy.time.TimeDuration groovy.time.TimeCategory.minus(java.util.Date,java.util.Date) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'lhs',
					/* type */ 'java.util.Date',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'rhs',
					/* type */ 'java.util.Date',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'groovy.time.TimeDuration',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Date groovy.time.TimeCategory.minus(java.util.Date,groovy.time.BaseDuration) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'date',
					/* type */ 'java.util.Date',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'duration',
					/* type */ 'groovy.time.BaseDuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Date',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Date groovy.time.TimeCategory.plus(java.util.Date,groovy.time.BaseDuration) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'date',
					/* type */ 'java.util.Date',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'duration',
					/* type */ 'groovy.time.BaseDuration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.Date',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.TimeZone groovy.time.TimeCategory.getTimeZone(java.util.Date) */
			/* name */ 'getTimeZone',
			[/* parameters */
				[/* parameter */
					/* name */ 'self',
					/* type */ 'java.util.Date',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.TimeZone',
			/* exceptions */,
			/* modifiers */ 9,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', ''],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
