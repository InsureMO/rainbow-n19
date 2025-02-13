import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.chrono.ChronoLocalDate', [
	/* super class */,
	[/* interfaces, implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.lang.Comparable<java.time.chrono.ChronoLocalDate> */
		'java.time.temporal.Temporal',
		'java.time.temporal.TemporalAdjuster',
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.time.chrono.ChronoLocalDate'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract boolean java.time.chrono.ChronoLocalDate.equals(java.lang.Object) */
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
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.time.chrono.ChronoLocalDate.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract int java.time.chrono.ChronoLocalDate.lengthOfMonth() */
			/* name */ 'lengthOfMonth',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String java.time.chrono.ChronoLocalDate.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.time.chrono.ChronoPeriod java.time.chrono.ChronoLocalDate.until(java.time.chrono.ChronoLocalDate) */
			/* name */ 'until',
			[/* parameters */
				[/* parameter */
					/* name */ 'endDateExclusive',
					/* type */ 'java.time.chrono.ChronoLocalDate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ChronoPeriod',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.time.chrono.Chronology java.time.chrono.ChronoLocalDate.getChronology() */
			/* name */ 'getChronology',
			/* parameters */,
			/* return */ 'java.time.chrono.Chronology',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract long java.time.chrono.ChronoLocalDate.until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit) */
			/* name */ 'until',
			[/* parameters */
				[/* parameter */
					/* name */ 'endExclusive',
					/* type */ 'java.time.temporal.Temporal',
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
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default <R> R java.time.chrono.ChronoLocalDate.query(java.time.temporal.TemporalQuery<R>) */
			/* name */ 'query',
			[/* parameters */
				[/* parameter */
					/* name */ 'query',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'R']]
						],
						/* raw type */ 'java.time.temporal.TemporalQuery',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'R']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'R',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public default boolean java.time.chrono.ChronoLocalDate.isAfter(java.time.chrono.ChronoLocalDate) */
			/* name */ 'isAfter',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ 'java.time.chrono.ChronoLocalDate',
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
		[/* public default boolean java.time.chrono.ChronoLocalDate.isBefore(java.time.chrono.ChronoLocalDate) */
			/* name */ 'isBefore',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ 'java.time.chrono.ChronoLocalDate',
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
		[/* public default boolean java.time.chrono.ChronoLocalDate.isEqual(java.time.chrono.ChronoLocalDate) */
			/* name */ 'isEqual',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ 'java.time.chrono.ChronoLocalDate',
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
		[/* public default boolean java.time.chrono.ChronoLocalDate.isLeapYear() */
			/* name */ 'isLeapYear',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default boolean java.time.chrono.ChronoLocalDate.isSupported(java.time.temporal.TemporalField) */
			/* name */ 'isSupported',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
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
		[/* public default boolean java.time.chrono.ChronoLocalDate.isSupported(java.time.temporal.TemporalUnit) */
			/* name */ 'isSupported',
			[/* parameters */
				[/* parameter */
					/* name */ 'unit',
					/* type */ 'java.time.temporal.TemporalUnit',
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
		[/* public default int java.time.chrono.ChronoLocalDate.compareTo(java.time.chrono.ChronoLocalDate) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ 'java.time.chrono.ChronoLocalDate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default int java.time.chrono.ChronoLocalDate.lengthOfYear() */
			/* name */ 'lengthOfYear',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.String java.time.chrono.ChronoLocalDate.format(java.time.format.DateTimeFormatter) */
			/* name */ 'format',
			[/* parameters */
				[/* parameter */
					/* name */ 'formatter',
					/* type */ 'java.time.format.DateTimeFormatter',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.time.chrono.ChronoLocalDate java.time.chrono.ChronoLocalDate.minus(java.time.temporal.TemporalAmount) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'amount',
					/* type */ 'java.time.temporal.TemporalAmount',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.time.chrono.ChronoLocalDate java.time.chrono.ChronoLocalDate.minus(long,java.time.temporal.TemporalUnit) */
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
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.time.chrono.ChronoLocalDate java.time.chrono.ChronoLocalDate.plus(java.time.temporal.TemporalAmount) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'amount',
					/* type */ 'java.time.temporal.TemporalAmount',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.time.chrono.ChronoLocalDate java.time.chrono.ChronoLocalDate.plus(long,java.time.temporal.TemporalUnit) */
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
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.time.chrono.ChronoLocalDate java.time.chrono.ChronoLocalDate.with(java.time.temporal.TemporalAdjuster) */
			/* name */ 'with',
			[/* parameters */
				[/* parameter */
					/* name */ 'adjuster',
					/* type */ 'java.time.temporal.TemporalAdjuster',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.time.chrono.ChronoLocalDate java.time.chrono.ChronoLocalDate.with(java.time.temporal.TemporalField,long) */
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
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.time.chrono.ChronoLocalDateTime<?> java.time.chrono.ChronoLocalDate.atTime(java.time.LocalTime) */
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
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							'java.lang.Object'
						],
						/* lower bounds */ UDF
					]]
				],
				/* raw type */ 'java.time.chrono.ChronoLocalDateTime',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.time.chrono.Era java.time.chrono.ChronoLocalDate.getEra() */
			/* name */ 'getEra',
			/* parameters */,
			/* return */ 'java.time.chrono.Era',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.time.temporal.Temporal java.time.chrono.ChronoLocalDate.adjustInto(java.time.temporal.Temporal) */
			/* name */ 'adjustInto',
			[/* parameters */
				[/* parameter */
					/* name */ 'temporal',
					/* type */ 'java.time.temporal.Temporal',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.Temporal',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default long java.time.chrono.ChronoLocalDate.toEpochDay() */
			/* name */ 'toEpochDay',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.chrono.ChronoLocalDate java.time.chrono.ChronoLocalDate.from(java.time.temporal.TemporalAccessor) */
			/* name */ 'from',
			[/* parameters */
				[/* parameter */
					/* name */ 'temporal',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Comparator<java.time.chrono.ChronoLocalDate> java.time.chrono.ChronoLocalDate.timeLineOrder() */
			/* name */ 'timeLineOrder',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.chrono.ChronoLocalDate'
				],
				/* raw type */ 'java.util.Comparator',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
