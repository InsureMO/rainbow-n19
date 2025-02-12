import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.chrono.ThaiBuddhistChronology', [
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
		[/* public boolean java.time.chrono.ThaiBuddhistChronology.isLeapYear(long) */
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
		[/* public int java.time.chrono.ThaiBuddhistChronology.prolepticYear(java.time.chrono.Era,int) */
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
		[/* public java.lang.String java.time.chrono.ThaiBuddhistChronology.getCalendarType() */
			/* name */ 'getCalendarType',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.time.chrono.ThaiBuddhistChronology.getId() */
			/* name */ 'getId',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.ThaiBuddhistChronology.date(int,int,int) */
			/* name */ 'date',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
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
					/* name */ 'arg2',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.ThaiBuddhistChronology.date(java.time.chrono.Era,int,int,int) */
			/* name */ 'date',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.chrono.Era',
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
					/* name */ 'arg2',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg3',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.ThaiBuddhistChronology.date(java.time.temporal.TemporalAccessor) */
			/* name */ 'date',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.ThaiBuddhistChronology.dateEpochDay(long) */
			/* name */ 'dateEpochDay',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.ThaiBuddhistChronology.dateNow() */
			/* name */ 'dateNow',
			/* parameters */,
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.ThaiBuddhistChronology.dateNow(java.time.Clock) */
			/* name */ 'dateNow',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.Clock',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.ThaiBuddhistChronology.dateNow(java.time.ZoneId) */
			/* name */ 'dateNow',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.ZoneId',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.ThaiBuddhistChronology.dateYearDay(int,int) */
			/* name */ 'dateYearDay',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
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
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.ThaiBuddhistChronology.dateYearDay(java.time.chrono.Era,int,int) */
			/* name */ 'dateYearDay',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.chrono.Era',
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
					/* name */ 'arg2',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.ThaiBuddhistChronology.resolveDate(java.util.Map,java.time.format.ResolverStyle) */
			/* name */ 'resolveDate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.Map',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.time.format.ResolverStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDateTime<java.time.chrono.ThaiBuddhistDate> java.time.chrono.ThaiBuddhistChronology.localDateTime(java.time.temporal.TemporalAccessor) */
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
					'java.time.chrono.ThaiBuddhistDate'
				],
				/* raw type */ 'java.time.chrono.ChronoLocalDateTime',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoZonedDateTime<java.time.chrono.ThaiBuddhistDate> java.time.chrono.ThaiBuddhistChronology.zonedDateTime(java.time.Instant,java.time.ZoneId) */
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
					'java.time.chrono.ThaiBuddhistDate'
				],
				/* raw type */ 'java.time.chrono.ChronoZonedDateTime',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoZonedDateTime<java.time.chrono.ThaiBuddhistDate> java.time.chrono.ThaiBuddhistChronology.zonedDateTime(java.time.temporal.TemporalAccessor) */
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
					'java.time.chrono.ThaiBuddhistDate'
				],
				/* raw type */ 'java.time.chrono.ChronoZonedDateTime',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.Era java.time.chrono.ThaiBuddhistChronology.eraOf(int) */
			/* name */ 'eraOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.Era',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ThaiBuddhistDate java.time.chrono.ThaiBuddhistChronology.date(int,int,int) */
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
			/* return */ 'java.time.chrono.ThaiBuddhistDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ThaiBuddhistDate java.time.chrono.ThaiBuddhistChronology.date(java.time.chrono.Era,int,int,int) */
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
			/* return */ 'java.time.chrono.ThaiBuddhistDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ThaiBuddhistDate java.time.chrono.ThaiBuddhistChronology.date(java.time.temporal.TemporalAccessor) */
			/* name */ 'date',
			[/* parameters */
				[/* parameter */
					/* name */ 'temporal',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ThaiBuddhistDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ThaiBuddhistDate java.time.chrono.ThaiBuddhistChronology.dateEpochDay(long) */
			/* name */ 'dateEpochDay',
			[/* parameters */
				[/* parameter */
					/* name */ 'epochDay',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ThaiBuddhistDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ThaiBuddhistDate java.time.chrono.ThaiBuddhistChronology.dateNow() */
			/* name */ 'dateNow',
			/* parameters */,
			/* return */ 'java.time.chrono.ThaiBuddhistDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ThaiBuddhistDate java.time.chrono.ThaiBuddhistChronology.dateNow(java.time.Clock) */
			/* name */ 'dateNow',
			[/* parameters */
				[/* parameter */
					/* name */ 'clock',
					/* type */ 'java.time.Clock',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ThaiBuddhistDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ThaiBuddhistDate java.time.chrono.ThaiBuddhistChronology.dateNow(java.time.ZoneId) */
			/* name */ 'dateNow',
			[/* parameters */
				[/* parameter */
					/* name */ 'zone',
					/* type */ 'java.time.ZoneId',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ThaiBuddhistDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ThaiBuddhistDate java.time.chrono.ThaiBuddhistChronology.dateYearDay(int,int) */
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
			/* return */ 'java.time.chrono.ThaiBuddhistDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ThaiBuddhistDate java.time.chrono.ThaiBuddhistChronology.dateYearDay(java.time.chrono.Era,int,int) */
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
			/* return */ 'java.time.chrono.ThaiBuddhistDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ThaiBuddhistDate java.time.chrono.ThaiBuddhistChronology.resolveDate(java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,java.time.format.ResolverStyle) */
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
			/* return */ 'java.time.chrono.ThaiBuddhistDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ThaiBuddhistEra java.time.chrono.ThaiBuddhistChronology.eraOf(int) */
			/* name */ 'eraOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'eraValue',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.ThaiBuddhistEra',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.ValueRange java.time.chrono.ThaiBuddhistChronology.range(java.time.temporal.ChronoField) */
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
		[/* public java.util.List<java.time.chrono.Era> java.time.chrono.ThaiBuddhistChronology.eras() */
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
		[/* public static final java.time.chrono.ThaiBuddhistChronology java.time.chrono.ThaiBuddhistChronology.INSTANCE */
			/* name */ 'INSTANCE',
			/* type */ 'java.time.chrono.ThaiBuddhistChronology',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
