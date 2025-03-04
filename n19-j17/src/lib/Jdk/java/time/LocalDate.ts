import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.LocalDate', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.time.chrono.ChronoLocalDate, java.io.Serializable */
		'java.time.temporal.Temporal',
		'java.time.temporal.TemporalAdjuster',
		'java.time.chrono.ChronoLocalDate',
		'java.io.Serializable'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public <R> R java.time.LocalDate.query(java.time.temporal.TemporalQuery<R>) */
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
		[/* public boolean java.time.LocalDate.equals(java.lang.Object) */
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
		[/* public boolean java.time.LocalDate.isAfter(java.time.chrono.ChronoLocalDate) */
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
		[/* public boolean java.time.LocalDate.isBefore(java.time.chrono.ChronoLocalDate) */
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
		[/* public boolean java.time.LocalDate.isEqual(java.time.chrono.ChronoLocalDate) */
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
		[/* public boolean java.time.LocalDate.isLeapYear() */
			/* name */ 'isLeapYear',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.time.LocalDate.isSupported(java.time.temporal.TemporalField) */
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
		[/* public boolean java.time.LocalDate.isSupported(java.time.temporal.TemporalUnit) */
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
		[/* public int java.time.LocalDate.compareTo(java.time.chrono.ChronoLocalDate) */
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
		[/* public int java.time.LocalDate.get(java.time.temporal.TemporalField) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.TemporalField',
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
		[/* public int java.time.LocalDate.getDayOfMonth() */
			/* name */ 'getDayOfMonth',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.LocalDate.getDayOfYear() */
			/* name */ 'getDayOfYear',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.LocalDate.getMonthValue() */
			/* name */ 'getMonthValue',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.LocalDate.getYear() */
			/* name */ 'getYear',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.LocalDate.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.LocalDate.lengthOfMonth() */
			/* name */ 'lengthOfMonth',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.LocalDate.lengthOfYear() */
			/* name */ 'lengthOfYear',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.time.LocalDate.format(java.time.format.DateTimeFormatter) */
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
		[/* public java.lang.String java.time.LocalDate.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.DayOfWeek java.time.LocalDate.getDayOfWeek() */
			/* name */ 'getDayOfWeek',
			/* parameters */,
			/* return */ 'java.time.DayOfWeek',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.minus(java.time.temporal.TemporalAmount) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'amountToSubtract',
					/* type */ 'java.time.temporal.TemporalAmount',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.minus(long,java.time.temporal.TemporalUnit) */
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
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.minusDays(long) */
			/* name */ 'minusDays',
			[/* parameters */
				[/* parameter */
					/* name */ 'daysToSubtract',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.minusMonths(long) */
			/* name */ 'minusMonths',
			[/* parameters */
				[/* parameter */
					/* name */ 'monthsToSubtract',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.minusWeeks(long) */
			/* name */ 'minusWeeks',
			[/* parameters */
				[/* parameter */
					/* name */ 'weeksToSubtract',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.minusYears(long) */
			/* name */ 'minusYears',
			[/* parameters */
				[/* parameter */
					/* name */ 'yearsToSubtract',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.plus(java.time.temporal.TemporalAmount) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'amountToAdd',
					/* type */ 'java.time.temporal.TemporalAmount',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.plus(long,java.time.temporal.TemporalUnit) */
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
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.plusDays(long) */
			/* name */ 'plusDays',
			[/* parameters */
				[/* parameter */
					/* name */ 'daysToAdd',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.plusMonths(long) */
			/* name */ 'plusMonths',
			[/* parameters */
				[/* parameter */
					/* name */ 'monthsToAdd',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.plusWeeks(long) */
			/* name */ 'plusWeeks',
			[/* parameters */
				[/* parameter */
					/* name */ 'weeksToAdd',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.plusYears(long) */
			/* name */ 'plusYears',
			[/* parameters */
				[/* parameter */
					/* name */ 'yearsToAdd',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.with(java.time.temporal.TemporalAdjuster) */
			/* name */ 'with',
			[/* parameters */
				[/* parameter */
					/* name */ 'adjuster',
					/* type */ 'java.time.temporal.TemporalAdjuster',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.with(java.time.temporal.TemporalField,long) */
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
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.withDayOfMonth(int) */
			/* name */ 'withDayOfMonth',
			[/* parameters */
				[/* parameter */
					/* name */ 'dayOfMonth',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.withDayOfYear(int) */
			/* name */ 'withDayOfYear',
			[/* parameters */
				[/* parameter */
					/* name */ 'dayOfYear',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.withMonth(int) */
			/* name */ 'withMonth',
			[/* parameters */
				[/* parameter */
					/* name */ 'month',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDate java.time.LocalDate.withYear(int) */
			/* name */ 'withYear',
			[/* parameters */
				[/* parameter */
					/* name */ 'year',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDateTime java.time.LocalDate.atStartOfDay() */
			/* name */ 'atStartOfDay',
			/* parameters */,
			/* return */ 'java.time.LocalDateTime',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDateTime java.time.LocalDate.atTime(int,int) */
			/* name */ 'atTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'hour',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'minute',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDateTime',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDateTime java.time.LocalDate.atTime(int,int,int) */
			/* name */ 'atTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'hour',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'minute',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'second',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDateTime',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDateTime java.time.LocalDate.atTime(int,int,int,int) */
			/* name */ 'atTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'hour',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'minute',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'second',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'nanoOfSecond',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDateTime',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDateTime java.time.LocalDate.atTime(java.time.LocalTime) */
			/* name */ 'atTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'time',
					/* type */ 'java.time.LocalTime',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDateTime',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Month java.time.LocalDate.getMonth() */
			/* name */ 'getMonth',
			/* parameters */,
			/* return */ 'java.time.Month',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.OffsetDateTime java.time.LocalDate.atTime(java.time.OffsetTime) */
			/* name */ 'atTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'time',
					/* type */ 'java.time.OffsetTime',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.OffsetDateTime',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Period java.time.LocalDate.until(java.time.chrono.ChronoLocalDate) */
			/* name */ 'until',
			[/* parameters */
				[/* parameter */
					/* name */ 'endDateExclusive',
					/* type */ 'java.time.chrono.ChronoLocalDate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Period',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.ZonedDateTime java.time.LocalDate.atStartOfDay(java.time.ZoneId) */
			/* name */ 'atStartOfDay',
			[/* parameters */
				[/* parameter */
					/* name */ 'zone',
					/* type */ 'java.time.ZoneId',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.ZonedDateTime',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.IsoChronology java.time.LocalDate.getChronology() */
			/* name */ 'getChronology',
			/* parameters */,
			/* return */ 'java.time.chrono.IsoChronology',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.IsoEra java.time.LocalDate.getEra() */
			/* name */ 'getEra',
			/* parameters */,
			/* return */ 'java.time.chrono.IsoEra',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.Temporal java.time.LocalDate.adjustInto(java.time.temporal.Temporal) */
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
		[/* public java.time.temporal.ValueRange java.time.LocalDate.range(java.time.temporal.TemporalField) */
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
		[/* public java.util.stream.Stream<java.time.LocalDate> java.time.LocalDate.datesUntil(java.time.LocalDate) */
			/* name */ 'datesUntil',
			[/* parameters */
				[/* parameter */
					/* name */ 'endExclusive',
					/* type */ 'java.time.LocalDate',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.LocalDate'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.Stream<java.time.LocalDate> java.time.LocalDate.datesUntil(java.time.LocalDate,java.time.Period) */
			/* name */ 'datesUntil',
			[/* parameters */
				[/* parameter */
					/* name */ 'endExclusive',
					/* type */ 'java.time.LocalDate',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'step',
					/* type */ 'java.time.Period',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.LocalDate'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.time.LocalDate.getLong(java.time.temporal.TemporalField) */
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
		[/* public long java.time.LocalDate.toEpochDay() */
			/* name */ 'toEpochDay',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.time.LocalDate.toEpochSecond(java.time.LocalTime,java.time.ZoneOffset) */
			/* name */ 'toEpochSecond',
			[/* parameters */
				[/* parameter */
					/* name */ 'time',
					/* type */ 'java.time.LocalTime',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'offset',
					/* type */ 'java.time.ZoneOffset',
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
		[/* public long java.time.LocalDate.until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit) */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.LocalDate java.time.LocalDate.from(java.time.temporal.TemporalAccessor) */
			/* name */ 'from',
			[/* parameters */
				[/* parameter */
					/* name */ 'temporal',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.LocalDate java.time.LocalDate.now() */
			/* name */ 'now',
			/* parameters */,
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.LocalDate java.time.LocalDate.now(java.time.Clock) */
			/* name */ 'now',
			[/* parameters */
				[/* parameter */
					/* name */ 'clock',
					/* type */ 'java.time.Clock',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.LocalDate java.time.LocalDate.now(java.time.ZoneId) */
			/* name */ 'now',
			[/* parameters */
				[/* parameter */
					/* name */ 'zone',
					/* type */ 'java.time.ZoneId',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.LocalDate java.time.LocalDate.of(int,int,int) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'year',
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
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.LocalDate java.time.LocalDate.of(int,java.time.Month,int) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'year',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'month',
					/* type */ 'java.time.Month',
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
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.LocalDate java.time.LocalDate.ofEpochDay(long) */
			/* name */ 'ofEpochDay',
			[/* parameters */
				[/* parameter */
					/* name */ 'epochDay',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.LocalDate java.time.LocalDate.ofInstant(java.time.Instant,java.time.ZoneId) */
			/* name */ 'ofInstant',
			[/* parameters */
				[/* parameter */
					/* name */ 'instant',
					/* type */ 'java.time.Instant',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'zone',
					/* type */ 'java.time.ZoneId',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.LocalDate java.time.LocalDate.ofYearDay(int,int) */
			/* name */ 'ofYearDay',
			[/* parameters */
				[/* parameter */
					/* name */ 'year',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dayOfYear',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.LocalDate java.time.LocalDate.parse(java.lang.CharSequence) */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'text',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.LocalDate java.time.LocalDate.parse(java.lang.CharSequence,java.time.format.DateTimeFormatter) */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'text',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'formatter',
					/* type */ 'java.time.format.DateTimeFormatter',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDate',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.time.LocalDate java.time.LocalDate.EPOCH */
			/* name */ 'EPOCH',
			/* type */ 'java.time.LocalDate',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.LocalDate java.time.LocalDate.MAX */
			/* name */ 'MAX',
			/* type */ 'java.time.LocalDate',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.LocalDate java.time.LocalDate.MIN */
			/* name */ 'MIN',
			/* type */ 'java.time.LocalDate',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
