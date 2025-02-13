import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.chrono.HijrahDate', [
	/* super class, extends java.time.chrono.ChronoLocalDateImpl<java.time.chrono.HijrahDate> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.time.chrono.HijrahDate'
		],
		/* raw type */ 'java.time.chrono.ChronoLocalDateImpl',
		/* owner type */ UDF
	]],
	[/* interfaces, implements java.time.chrono.ChronoLocalDate, java.io.Serializable */
		'java.time.chrono.ChronoLocalDate',
		'java.io.Serializable'
	],
	/* modifiers */ 17,
	[/* declared annotations */
		['jdk.internal.ValueBased']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public boolean java.time.chrono.HijrahDate.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
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
		[/* public boolean java.time.chrono.HijrahDate.isLeapYear() */
			/* name */ 'isLeapYear',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public final java.time.chrono.ChronoLocalDateTime<java.time.chrono.HijrahDate> java.time.chrono.HijrahDate.atTime(java.time.LocalTime) */
			/* name */ 'atTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'localTime',
					/* type */ 'java.time.LocalTime',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.chrono.HijrahDate'
				],
				/* raw type */ 'java.time.chrono.ChronoLocalDateTime',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 17,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.chrono.HijrahDate.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.chrono.HijrahDate.lengthOfMonth() */
			/* name */ 'lengthOfMonth',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.chrono.HijrahDate.lengthOfYear() */
			/* name */ 'lengthOfYear',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoPeriod java.time.chrono.HijrahDate.until(java.time.chrono.ChronoLocalDate) */
			/* name */ 'until',
			[/* parameters */
				[/* parameter */
					/* name */ 'endDate',
					/* type */ 'java.time.chrono.ChronoLocalDate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ChronoPeriod',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahChronology java.time.chrono.HijrahDate.getChronology() */
			/* name */ 'getChronology',
			/* parameters */,
			/* return */ 'java.time.chrono.HijrahChronology',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahDate.minus(java.time.temporal.TemporalAmount) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'amount',
					/* type */ 'java.time.temporal.TemporalAmount',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahDate.minus(long,java.time.temporal.TemporalUnit) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'amountToSubtract',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'unit',
					/* type */ 'java.time.temporal.TemporalUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahDate.plus(java.time.temporal.TemporalAmount) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'amount',
					/* type */ 'java.time.temporal.TemporalAmount',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahDate.plus(long,java.time.temporal.TemporalUnit) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'amountToAdd',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'unit',
					/* type */ 'java.time.temporal.TemporalUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahDate.with(java.time.temporal.TemporalAdjuster) */
			/* name */ 'with',
			[/* parameters */
				[/* parameter */
					/* name */ 'adjuster',
					/* type */ 'java.time.temporal.TemporalAdjuster',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahDate.with(java.time.temporal.TemporalField,long) */
			/* name */ 'with',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'newValue',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahDate.withVariant(java.time.chrono.HijrahChronology) */
			/* name */ 'withVariant',
			[/* parameters */
				[/* parameter */
					/* name */ 'chronology',
					/* type */ 'java.time.chrono.HijrahChronology',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahEra java.time.chrono.HijrahDate.getEra() */
			/* name */ 'getEra',
			/* parameters */,
			/* return */ 'java.time.chrono.HijrahEra',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.ValueRange java.time.chrono.HijrahDate.range(java.time.temporal.TemporalField) */
			/* name */ 'range',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.ValueRange',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.time.chrono.HijrahDate.getLong(java.time.temporal.TemporalField) */
			/* name */ 'getLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.time.chrono.HijrahDate.toEpochDay() */
			/* name */ 'toEpochDay',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.chrono.HijrahDate java.time.chrono.HijrahDate.from(java.time.temporal.TemporalAccessor) */
			/* name */ 'from',
			[/* parameters */
				[/* parameter */
					/* name */ 'temporal',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.chrono.HijrahDate java.time.chrono.HijrahDate.now() */
			/* name */ 'now',
			/* parameters */,
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.chrono.HijrahDate java.time.chrono.HijrahDate.now(java.time.Clock) */
			/* name */ 'now',
			[/* parameters */
				[/* parameter */
					/* name */ 'clock',
					/* type */ 'java.time.Clock',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.chrono.HijrahDate java.time.chrono.HijrahDate.now(java.time.ZoneId) */
			/* name */ 'now',
			[/* parameters */
				[/* parameter */
					/* name */ 'zone',
					/* type */ 'java.time.ZoneId',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.chrono.HijrahDate java.time.chrono.HijrahDate.of(int,int,int) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'prolepticYear',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'month',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dayOfMonth',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
