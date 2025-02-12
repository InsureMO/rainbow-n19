import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.temporal.ChronoUnit', [
	/* super class, extends java.lang.Enum<java.time.temporal.ChronoUnit> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.time.temporal.ChronoUnit'
		],
		/* raw type */ 'java.lang.Enum',
		/* owner type */ UDF
	]],
	[/* interfaces, implements java.time.temporal.TemporalUnit */
		'java.time.temporal.TemporalUnit'
	],
	/* modifiers */ 16401,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public <R extends java.time.temporal.Temporal> R java.time.temporal.ChronoUnit.addTo(R,long) */
			/* name */ 'addTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'temporal',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'R']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'amount',
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
		[/* public boolean java.time.temporal.ChronoUnit.isDateBased() */
			/* name */ 'isDateBased',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.time.temporal.ChronoUnit.isDurationEstimated() */
			/* name */ 'isDurationEstimated',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.time.temporal.ChronoUnit.isSupportedBy(java.time.temporal.Temporal) */
			/* name */ 'isSupportedBy',
			[/* parameters */
				[/* parameter */
					/* name */ 'temporal',
					/* type */ 'java.time.temporal.Temporal',
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
		[/* public boolean java.time.temporal.ChronoUnit.isTimeBased() */
			/* name */ 'isTimeBased',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.time.temporal.ChronoUnit.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Duration java.time.temporal.ChronoUnit.getDuration() */
			/* name */ 'getDuration',
			/* parameters */,
			/* return */ 'java.time.Duration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.time.temporal.ChronoUnit.between(java.time.temporal.Temporal,java.time.temporal.Temporal) */
			/* name */ 'between',
			[/* parameters */
				[/* parameter */
					/* name */ 'temporal1Inclusive',
					/* type */ 'java.time.temporal.Temporal',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'temporal2Exclusive',
					/* type */ 'java.time.temporal.Temporal',
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
		[/* public static java.time.temporal.ChronoUnit java.time.temporal.ChronoUnit.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.ChronoUnit',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.temporal.ChronoUnit[] java.time.temporal.ChronoUnit.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.time.temporal.ChronoUnit;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['NANOS', 0],
		['MICROS', 1],
		['MILLIS', 2],
		['SECONDS', 3],
		['MINUTES', 4],
		['HOURS', 5],
		['HALF_DAYS', 6],
		['DAYS', 7],
		['WEEKS', 8],
		['MONTHS', 9],
		['YEARS', 10],
		['DECADES', 11],
		['CENTURIES', 12],
		['MILLENNIA', 13],
		['ERAS', 14],
		['FOREVER', 15]
	]
]);
