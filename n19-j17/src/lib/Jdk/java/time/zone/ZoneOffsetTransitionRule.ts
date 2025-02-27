import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.zone.ZoneOffsetTransitionRule', [
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
		[/* public boolean java.time.zone.ZoneOffsetTransitionRule.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'otherRule',
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
		[/* public boolean java.time.zone.ZoneOffsetTransitionRule.isMidnightEndOfDay() */
			/* name */ 'isMidnightEndOfDay',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.zone.ZoneOffsetTransitionRule.getDayOfMonthIndicator() */
			/* name */ 'getDayOfMonthIndicator',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.zone.ZoneOffsetTransitionRule.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.time.zone.ZoneOffsetTransitionRule.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.DayOfWeek java.time.zone.ZoneOffsetTransitionRule.getDayOfWeek() */
			/* name */ 'getDayOfWeek',
			/* parameters */,
			/* return */ 'java.time.DayOfWeek',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalTime java.time.zone.ZoneOffsetTransitionRule.getLocalTime() */
			/* name */ 'getLocalTime',
			/* parameters */,
			/* return */ 'java.time.LocalTime',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Month java.time.zone.ZoneOffsetTransitionRule.getMonth() */
			/* name */ 'getMonth',
			/* parameters */,
			/* return */ 'java.time.Month',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.ZoneOffset java.time.zone.ZoneOffsetTransitionRule.getOffsetAfter() */
			/* name */ 'getOffsetAfter',
			/* parameters */,
			/* return */ 'java.time.ZoneOffset',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.ZoneOffset java.time.zone.ZoneOffsetTransitionRule.getOffsetBefore() */
			/* name */ 'getOffsetBefore',
			/* parameters */,
			/* return */ 'java.time.ZoneOffset',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.ZoneOffset java.time.zone.ZoneOffsetTransitionRule.getStandardOffset() */
			/* name */ 'getStandardOffset',
			/* parameters */,
			/* return */ 'java.time.ZoneOffset',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.zone.ZoneOffsetTransition java.time.zone.ZoneOffsetTransitionRule.createTransition(int) */
			/* name */ 'createTransition',
			[/* parameters */
				[/* parameter */
					/* name */ 'year',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.zone.ZoneOffsetTransition',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.zone.ZoneOffsetTransitionRule$TimeDefinition java.time.zone.ZoneOffsetTransitionRule.getTimeDefinition() */
			/* name */ 'getTimeDefinition',
			/* parameters */,
			/* return */ 'java.time.zone.ZoneOffsetTransitionRule$TimeDefinition',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.zone.ZoneOffsetTransitionRule java.time.zone.ZoneOffsetTransitionRule.of(java.time.Month,int,java.time.DayOfWeek,java.time.LocalTime,boolean,java.time.zone.ZoneOffsetTransitionRule$TimeDefinition,java.time.ZoneOffset,java.time.ZoneOffset,java.time.ZoneOffset) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'month',
					/* type */ 'java.time.Month',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dayOfMonthIndicator',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dayOfWeek',
					/* type */ 'java.time.DayOfWeek',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'time',
					/* type */ 'java.time.LocalTime',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'timeEndOfDay',
					/* type */ 'boolean',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'timeDefinition',
					/* type */ 'java.time.zone.ZoneOffsetTransitionRule$TimeDefinition',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'standardOffset',
					/* type */ 'java.time.ZoneOffset',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'offsetBefore',
					/* type */ 'java.time.ZoneOffset',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'offsetAfter',
					/* type */ 'java.time.ZoneOffset',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.zone.ZoneOffsetTransitionRule',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
