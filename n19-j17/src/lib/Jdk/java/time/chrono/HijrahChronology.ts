import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.chrono.HijrahChronology', [
	/* super class, extends java.time.chrono.AbstractChronology */
	'java.time.chrono.AbstractChronology',
	[/* interfaces, implements java.io.Serializable */
		'java.io.Serializable'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public boolean java.time.chrono.HijrahChronology.isLeapYear(long) */
			/* name */ 'isLeapYear',
			[/* parameters */
				[/* parameter */
					/* name */ 'prolepticYear',
					/* type */ 'long',
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
		[/* public int java.time.chrono.HijrahChronology.prolepticYear(java.time.chrono.Era,int) */
			/* name */ 'prolepticYear',
			[/* parameters */
				[/* parameter */
					/* name */ 'era',
					/* type */ 'java.time.chrono.Era',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'yearOfEra',
					/* type */ 'int',
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
		[/* public java.lang.String java.time.chrono.HijrahChronology.getCalendarType() */
			/* name */ 'getCalendarType',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.time.chrono.HijrahChronology.getId() */
			/* name */ 'getId',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDateTime<java.time.chrono.HijrahDate> java.time.chrono.HijrahChronology.localDateTime(java.time.temporal.TemporalAccessor) */
			/* name */ 'localDateTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'temporal',
					/* type */ 'java.time.temporal.TemporalAccessor',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoZonedDateTime<java.time.chrono.HijrahDate> java.time.chrono.HijrahChronology.zonedDateTime(java.time.Instant,java.time.ZoneId) */
			/* name */ 'zonedDateTime',
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
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.chrono.HijrahDate'
				],
				/* raw type */ 'java.time.chrono.ChronoZonedDateTime',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoZonedDateTime<java.time.chrono.HijrahDate> java.time.chrono.HijrahChronology.zonedDateTime(java.time.temporal.TemporalAccessor) */
			/* name */ 'zonedDateTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'temporal',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.chrono.HijrahDate'
				],
				/* raw type */ 'java.time.chrono.ChronoZonedDateTime',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahChronology.date(int,int,int) */
			/* name */ 'date',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahChronology.date(java.time.chrono.Era,int,int,int) */
			/* name */ 'date',
			[/* parameters */
				[/* parameter */
					/* name */ 'era',
					/* type */ 'java.time.chrono.Era',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'yearOfEra',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahChronology.date(java.time.temporal.TemporalAccessor) */
			/* name */ 'date',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahChronology.dateEpochDay(long) */
			/* name */ 'dateEpochDay',
			[/* parameters */
				[/* parameter */
					/* name */ 'epochDay',
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
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahChronology.dateNow() */
			/* name */ 'dateNow',
			/* parameters */,
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahChronology.dateNow(java.time.Clock) */
			/* name */ 'dateNow',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahChronology.dateNow(java.time.ZoneId) */
			/* name */ 'dateNow',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahChronology.dateYearDay(int,int) */
			/* name */ 'dateYearDay',
			[/* parameters */
				[/* parameter */
					/* name */ 'prolepticYear',
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
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahChronology.dateYearDay(java.time.chrono.Era,int,int) */
			/* name */ 'dateYearDay',
			[/* parameters */
				[/* parameter */
					/* name */ 'era',
					/* type */ 'java.time.chrono.Era',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'yearOfEra',
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
			/* return */ 'java.time.chrono.HijrahDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.HijrahDate java.time.chrono.HijrahChronology.resolveDate(java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,java.time.format.ResolverStyle) */
			/* name */ 'resolveDate',
			[/* parameters */
				[/* parameter */
					/* name */ 'fieldValues',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.time.temporal.TemporalField',
							'java.lang.Long'
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'resolverStyle',
					/* type */ 'java.time.format.ResolverStyle',
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
		[/* public java.time.chrono.HijrahEra java.time.chrono.HijrahChronology.eraOf(int) */
			/* name */ 'eraOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'eraValue',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.HijrahEra',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.ValueRange java.time.chrono.HijrahChronology.range(java.time.temporal.ChronoField) */
			/* name */ 'range',
			[/* parameters */
				[/* parameter */
					/* name */ 'field',
					/* type */ 'java.time.temporal.ChronoField',
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
		[/* public java.util.List<java.time.chrono.Era> java.time.chrono.HijrahChronology.eras() */
			/* name */ 'eras',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.chrono.Era'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.time.chrono.HijrahChronology java.time.chrono.HijrahChronology.INSTANCE */
			/* name */ 'INSTANCE',
			/* type */ 'java.time.chrono.HijrahChronology',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
