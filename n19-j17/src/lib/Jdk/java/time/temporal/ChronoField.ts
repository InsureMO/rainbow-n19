import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.temporal.ChronoField', [
	/* super class, extends java.lang.Enum<java.time.temporal.ChronoField> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.time.temporal.ChronoField'
		],
		/* raw type */ 'java.lang.Enum',
		/* owner type */ UDF
	]],
	[/* interfaces, implements java.time.temporal.TemporalField */
		'java.time.temporal.TemporalField'
	],
	/* modifiers */ 16401,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.lang.String java.time.temporal.ChronoField.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.ChronoField[] java.time.temporal.ChronoField.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.time.temporal.ChronoField;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.ChronoField java.time.temporal.ChronoField.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.ChronoField',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.ValueRange java.time.temporal.ChronoField.range() */
			/* name */ 'range',
			/* parameters */,
			/* return */ 'java.time.temporal.ValueRange',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.time.temporal.ChronoField.getDisplayName(java.util.Locale) */
			/* name */ 'getDisplayName',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.Locale',
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
		[/* public java.time.temporal.ValueRange java.time.temporal.ChronoField.rangeRefinedBy(java.time.temporal.TemporalAccessor) */
			/* name */ 'rangeRefinedBy',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalAccessor',
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
		[/* public java.time.temporal.TemporalUnit java.time.temporal.ChronoField.getBaseUnit() */
			/* name */ 'getBaseUnit',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalUnit',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.TemporalUnit java.time.temporal.ChronoField.getRangeUnit() */
			/* name */ 'getRangeUnit',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalUnit',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.time.temporal.ChronoField.isDateBased() */
			/* name */ 'isDateBased',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.time.temporal.ChronoField.isTimeBased() */
			/* name */ 'isTimeBased',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.time.temporal.ChronoField.isSupportedBy(java.time.temporal.TemporalAccessor) */
			/* name */ 'isSupportedBy',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalAccessor',
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
		[/* public long java.time.temporal.ChronoField.getFrom(java.time.temporal.TemporalAccessor) */
			/* name */ 'getFrom',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalAccessor',
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
		[/* public <R extends java.time.temporal.Temporal> R java.time.temporal.ChronoField.adjustInto(R,long) */
			/* name */ 'adjustInto',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'R']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'long',
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
						'java.time.temporal.Temporal'
					],
					/* annotations */ UDF
				]
			]
		],
		[/* public long java.time.temporal.ChronoField.checkValidValue(long) */
			/* name */ 'checkValidValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
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
		[/* public int java.time.temporal.ChronoField.checkValidIntValue(long) */
			/* name */ 'checkValidIntValue',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['NANO_OF_SECOND', 0],
		['NANO_OF_DAY', 1],
		['MICRO_OF_SECOND', 2],
		['MICRO_OF_DAY', 3],
		['MILLI_OF_SECOND', 4],
		['MILLI_OF_DAY', 5],
		['SECOND_OF_MINUTE', 6],
		['SECOND_OF_DAY', 7],
		['MINUTE_OF_HOUR', 8],
		['MINUTE_OF_DAY', 9],
		['HOUR_OF_AMPM', 10],
		['CLOCK_HOUR_OF_AMPM', 11],
		['HOUR_OF_DAY', 12],
		['CLOCK_HOUR_OF_DAY', 13],
		['AMPM_OF_DAY', 14],
		['DAY_OF_WEEK', 15],
		['ALIGNED_DAY_OF_WEEK_IN_MONTH', 16],
		['ALIGNED_DAY_OF_WEEK_IN_YEAR', 17],
		['DAY_OF_MONTH', 18],
		['DAY_OF_YEAR', 19],
		['EPOCH_DAY', 20],
		['ALIGNED_WEEK_OF_MONTH', 21],
		['ALIGNED_WEEK_OF_YEAR', 22],
		['MONTH_OF_YEAR', 23],
		['PROLEPTIC_MONTH', 24],
		['YEAR_OF_ERA', 25],
		['YEAR', 26],
		['ERA', 27],
		['INSTANT_SECONDS', 28],
		['OFFSET_SECONDS', 29]
	]
]);
