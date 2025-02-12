import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.ZoneOffset', [
	/* super class, extends java.time.ZoneId */
	'java.time.ZoneId',
	[/* interfaces, implements java.time.temporal.TemporalAccessor, java.time.temporal.TemporalAdjuster, java.lang.Comparable<java.time.ZoneOffset>, java.io.Serializable */
		'java.time.temporal.TemporalAccessor',
		'java.time.temporal.TemporalAdjuster',
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.time.ZoneOffset'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]],
		'java.io.Serializable'
	],
	/* modifiers */ 17,
	[/* declared annotations */
		['jdk.internal.ValueBased']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public <R> R java.time.ZoneOffset.query(java.time.temporal.TemporalQuery<R>) */
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
		[/* public boolean java.time.ZoneOffset.equals(java.lang.Object) */
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
		[/* public boolean java.time.ZoneOffset.isSupported(java.time.temporal.TemporalField) */
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
		[/* public int java.time.ZoneOffset.compareTo(java.lang.Object) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.ZoneOffset.compareTo(java.time.ZoneOffset) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
					/* type */ 'java.time.ZoneOffset',
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
		[/* public int java.time.ZoneOffset.get(java.time.temporal.TemporalField) */
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
		[/* public int java.time.ZoneOffset.getTotalSeconds() */
			/* name */ 'getTotalSeconds',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.ZoneOffset.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.time.ZoneOffset.getId() */
			/* name */ 'getId',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.time.ZoneOffset.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.Temporal java.time.ZoneOffset.adjustInto(java.time.temporal.Temporal) */
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
		[/* public java.time.temporal.ValueRange java.time.ZoneOffset.range(java.time.temporal.TemporalField) */
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
		[/* public java.time.zone.ZoneRules java.time.ZoneOffset.getRules() */
			/* name */ 'getRules',
			/* parameters */,
			/* return */ 'java.time.zone.ZoneRules',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.time.ZoneOffset.getLong(java.time.temporal.TemporalField) */
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
		[/* public static java.time.ZoneOffset java.time.ZoneOffset.from(java.time.temporal.TemporalAccessor) */
			/* name */ 'from',
			[/* parameters */
				[/* parameter */
					/* name */ 'temporal',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.ZoneOffset',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.ZoneOffset java.time.ZoneOffset.of(java.lang.String) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'offsetId',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.ZoneOffset',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.ZoneOffset java.time.ZoneOffset.ofHours(int) */
			/* name */ 'ofHours',
			[/* parameters */
				[/* parameter */
					/* name */ 'hours',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.ZoneOffset',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.ZoneOffset java.time.ZoneOffset.ofHoursMinutes(int,int) */
			/* name */ 'ofHoursMinutes',
			[/* parameters */
				[/* parameter */
					/* name */ 'hours',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'minutes',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.ZoneOffset',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.ZoneOffset java.time.ZoneOffset.ofHoursMinutesSeconds(int,int,int) */
			/* name */ 'ofHoursMinutesSeconds',
			[/* parameters */
				[/* parameter */
					/* name */ 'hours',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'minutes',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'seconds',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.ZoneOffset',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.ZoneOffset java.time.ZoneOffset.ofTotalSeconds(int) */
			/* name */ 'ofTotalSeconds',
			[/* parameters */
				[/* parameter */
					/* name */ 'totalSeconds',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.ZoneOffset',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.time.ZoneOffset java.time.ZoneOffset.UTC */
			/* name */ 'UTC',
			/* type */ 'java.time.ZoneOffset',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.ZoneOffset java.time.ZoneOffset.MIN */
			/* name */ 'MIN',
			/* type */ 'java.time.ZoneOffset',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.ZoneOffset java.time.ZoneOffset.MAX */
			/* name */ 'MAX',
			/* type */ 'java.time.ZoneOffset',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
