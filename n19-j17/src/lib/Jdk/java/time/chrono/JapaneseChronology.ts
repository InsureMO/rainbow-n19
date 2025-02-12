import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.chrono.JapaneseChronology', [
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
		[/* public java.lang.String java.time.chrono.JapaneseChronology.getId() */
			/* name */ 'getId',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.ValueRange java.time.chrono.JapaneseChronology.range(java.time.temporal.ChronoField) */
			/* name */ 'range',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public java.lang.String java.time.chrono.JapaneseChronology.getCalendarType() */
			/* name */ 'getCalendarType',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.time.chrono.JapaneseChronology.isLeapYear(long) */
			/* name */ 'isLeapYear',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public java.time.chrono.JapaneseDate java.time.chrono.JapaneseChronology.date(int,int,int) */
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
			/* return */ 'java.time.chrono.JapaneseDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.JapaneseDate java.time.chrono.JapaneseChronology.date(java.time.temporal.TemporalAccessor) */
			/* name */ 'date',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.JapaneseDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.JapaneseChronology.date(java.time.chrono.Era,int,int,int) */
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
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.JapaneseChronology.date(int,int,int) */
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
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.JapaneseChronology.date(java.time.temporal.TemporalAccessor) */
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
		[/* public java.time.chrono.JapaneseDate java.time.chrono.JapaneseChronology.date(java.time.chrono.Era,int,int,int) */
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
			/* return */ 'java.time.chrono.JapaneseDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.JapaneseDate java.time.chrono.JapaneseChronology.dateEpochDay(long) */
			/* name */ 'dateEpochDay',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.JapaneseDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.JapaneseChronology.dateEpochDay(long) */
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
		[/* public int java.time.chrono.JapaneseChronology.prolepticYear(java.time.chrono.Era,int) */
			/* name */ 'prolepticYear',
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
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.JapaneseDate java.time.chrono.JapaneseChronology.dateYearDay(java.time.chrono.Era,int,int) */
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
			/* return */ 'java.time.chrono.JapaneseDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.JapaneseDate java.time.chrono.JapaneseChronology.dateYearDay(int,int) */
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
			/* return */ 'java.time.chrono.JapaneseDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.JapaneseChronology.dateYearDay(java.time.chrono.Era,int,int) */
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
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.JapaneseChronology.dateYearDay(int,int) */
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
		[/* public java.time.chrono.JapaneseDate java.time.chrono.JapaneseChronology.dateNow(java.time.Clock) */
			/* name */ 'dateNow',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.Clock',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.JapaneseDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.JapaneseChronology.dateNow(java.time.ZoneId) */
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
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.JapaneseChronology.dateNow() */
			/* name */ 'dateNow',
			/* parameters */,
			/* return */ 'java.time.chrono.ChronoLocalDate',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.JapaneseDate java.time.chrono.JapaneseChronology.dateNow() */
			/* name */ 'dateNow',
			/* parameters */,
			/* return */ 'java.time.chrono.JapaneseDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.JapaneseChronology.dateNow(java.time.Clock) */
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
		[/* public java.time.chrono.JapaneseDate java.time.chrono.JapaneseChronology.dateNow(java.time.ZoneId) */
			/* name */ 'dateNow',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.ZoneId',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.JapaneseDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoZonedDateTime<java.time.chrono.JapaneseDate> java.time.chrono.JapaneseChronology.zonedDateTime(java.time.temporal.TemporalAccessor) */
			/* name */ 'zonedDateTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.chrono.JapaneseDate'
				],
				/* raw type */ 'java.time.chrono.ChronoZonedDateTime',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoZonedDateTime<java.time.chrono.JapaneseDate> java.time.chrono.JapaneseChronology.zonedDateTime(java.time.Instant,java.time.ZoneId) */
			/* name */ 'zonedDateTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.Instant',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.time.ZoneId',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.chrono.JapaneseDate'
				],
				/* raw type */ 'java.time.chrono.ChronoZonedDateTime',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDateTime<java.time.chrono.JapaneseDate> java.time.chrono.JapaneseChronology.localDateTime(java.time.temporal.TemporalAccessor) */
			/* name */ 'localDateTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.chrono.JapaneseDate'
				],
				/* raw type */ 'java.time.chrono.ChronoLocalDateTime',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.JapaneseEra java.time.chrono.JapaneseChronology.eraOf(int) */
			/* name */ 'eraOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.JapaneseEra',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.Era java.time.chrono.JapaneseChronology.eraOf(int) */
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
		[/* public java.util.List<java.time.chrono.Era> java.time.chrono.JapaneseChronology.eras() */
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
		],
		[/* public java.time.chrono.JapaneseDate java.time.chrono.JapaneseChronology.resolveDate(java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,java.time.format.ResolverStyle) */
			/* name */ 'resolveDate',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
					/* name */ 'arg1',
					/* type */ 'java.time.format.ResolverStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.chrono.JapaneseDate',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.chrono.ChronoLocalDate java.time.chrono.JapaneseChronology.resolveDate(java.util.Map,java.time.format.ResolverStyle) */
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
		]
	],
	[/* declared fields */
		[/* public static final java.time.chrono.JapaneseChronology java.time.chrono.JapaneseChronology.INSTANCE */
			/* name */ 'INSTANCE',
			/* type */ 'java.time.chrono.JapaneseChronology',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
