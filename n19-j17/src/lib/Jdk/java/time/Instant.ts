import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.Instant', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.lang.Comparable<java.time.Instant>, java.io.Serializable */
		'java.time.temporal.Temporal',
		'java.time.temporal.TemporalAdjuster',
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.time.Instant'
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
		[/* public int java.time.Instant.get(java.time.temporal.TemporalField) */
			/* name */ 'get',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public boolean java.time.Instant.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public java.lang.String java.time.Instant.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.Instant.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.Instant.compareTo(java.time.Instant) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.Instant',
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
		[/* public int java.time.Instant.compareTo(java.lang.Object) */
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
		[/* public long java.time.Instant.getLong(java.time.temporal.TemporalField) */
			/* name */ 'getLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public static java.time.Instant java.time.Instant.from(java.time.temporal.TemporalAccessor) */
			/* name */ 'from',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public <R> R java.time.Instant.query(java.time.temporal.TemporalQuery<R>) */
			/* name */ 'query',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public java.time.temporal.ValueRange java.time.Instant.range(java.time.temporal.TemporalField) */
			/* name */ 'range',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public boolean java.time.Instant.isSupported(java.time.temporal.TemporalField) */
			/* name */ 'isSupported',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public boolean java.time.Instant.isSupported(java.time.temporal.TemporalUnit) */
			/* name */ 'isSupported',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public static java.time.Instant java.time.Instant.parse(java.lang.CharSequence) */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.CharSequence',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.Instant java.time.Instant.ofEpochMilli(long) */
			/* name */ 'ofEpochMilli',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.time.Instant.getNano() */
			/* name */ 'getNano',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.time.Instant.getEpochSecond() */
			/* name */ 'getEpochSecond',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.Instant java.time.Instant.ofEpochSecond(long,long) */
			/* name */ 'ofEpochSecond',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
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
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.Instant java.time.Instant.ofEpochSecond(long) */
			/* name */ 'ofEpochSecond',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.Instant java.time.Instant.now() */
			/* name */ 'now',
			/* parameters */,
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.Instant java.time.Instant.now(java.time.Clock) */
			/* name */ 'now',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.Clock',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.Temporal java.time.Instant.adjustInto(java.time.temporal.Temporal) */
			/* name */ 'adjustInto',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public java.time.Instant java.time.Instant.with(java.time.temporal.TemporalAdjuster) */
			/* name */ 'with',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalAdjuster',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.Temporal java.time.Instant.with(java.time.temporal.TemporalAdjuster) */
			/* name */ 'with',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalAdjuster',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.Temporal',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Instant java.time.Instant.with(java.time.temporal.TemporalField,long) */
			/* name */ 'with',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalField',
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
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.Temporal java.time.Instant.with(java.time.temporal.TemporalField,long) */
			/* name */ 'with',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalField',
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
			/* return */ 'java.time.temporal.Temporal',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.Temporal java.time.Instant.plus(java.time.temporal.TemporalAmount) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalAmount',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.Temporal',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Instant java.time.Instant.plus(java.time.temporal.TemporalAmount) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalAmount',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Instant java.time.Instant.plus(long,java.time.temporal.TemporalUnit) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.time.temporal.TemporalUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.Temporal java.time.Instant.plus(long,java.time.temporal.TemporalUnit) */
			/* name */ 'plus',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.time.temporal.TemporalUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.Temporal',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.time.Instant.until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit) */
			/* name */ 'until',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.Temporal',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
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
		[/* public java.time.Instant java.time.Instant.plusNanos(long) */
			/* name */ 'plusNanos',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Instant java.time.Instant.plusSeconds(long) */
			/* name */ 'plusSeconds',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Instant java.time.Instant.plusMillis(long) */
			/* name */ 'plusMillis',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Instant java.time.Instant.minus(java.time.temporal.TemporalAmount) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalAmount',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Instant java.time.Instant.minus(long,java.time.temporal.TemporalUnit) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.time.temporal.TemporalUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.Temporal java.time.Instant.minus(long,java.time.temporal.TemporalUnit) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.time.temporal.TemporalUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.Temporal',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.temporal.Temporal java.time.Instant.minus(java.time.temporal.TemporalAmount) */
			/* name */ 'minus',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalAmount',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.Temporal',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Instant java.time.Instant.minusSeconds(long) */
			/* name */ 'minusSeconds',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Instant java.time.Instant.minusMillis(long) */
			/* name */ 'minusMillis',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Instant java.time.Instant.minusNanos(long) */
			/* name */ 'minusNanos',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Instant java.time.Instant.truncatedTo(java.time.temporal.TemporalUnit) */
			/* name */ 'truncatedTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.temporal.TemporalUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.time.Instant.isAfter(java.time.Instant) */
			/* name */ 'isAfter',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.Instant',
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
		[/* public boolean java.time.Instant.isBefore(java.time.Instant) */
			/* name */ 'isBefore',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.Instant',
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
		[/* public java.time.ZonedDateTime java.time.Instant.atZone(java.time.ZoneId) */
			/* name */ 'atZone',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
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
		[/* public java.time.OffsetDateTime java.time.Instant.atOffset(java.time.ZoneOffset) */
			/* name */ 'atOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.ZoneOffset',
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
		[/* public long java.time.Instant.toEpochMilli() */
			/* name */ 'toEpochMilli',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.time.Instant java.time.Instant.EPOCH */
			/* name */ 'EPOCH',
			/* type */ 'java.time.Instant',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.Instant java.time.Instant.MIN */
			/* name */ 'MIN',
			/* type */ 'java.time.Instant',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final java.time.Instant java.time.Instant.MAX */
			/* name */ 'MAX',
			/* type */ 'java.time.Instant',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
