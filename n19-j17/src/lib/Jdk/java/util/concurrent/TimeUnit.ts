import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.concurrent.TimeUnit', [
	/* super class, extends java.lang.Enum<java.util.concurrent.TimeUnit> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.util.concurrent.TimeUnit'
		],
		/* raw type */ 'java.lang.Enum',
		/* owner type */ UDF
	]],
	/* interfaces */,
	/* modifiers */ 16401,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.time.temporal.ChronoUnit java.util.concurrent.TimeUnit.toChronoUnit() */
			/* name */ 'toChronoUnit',
			/* parameters */,
			/* return */ 'java.time.temporal.ChronoUnit',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.util.concurrent.TimeUnit.convert(java.time.Duration) */
			/* name */ 'convert',
			[/* parameters */
				[/* parameter */
					/* name */ 'duration',
					/* type */ 'java.time.Duration',
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
		[/* public long java.util.concurrent.TimeUnit.convert(long,java.util.concurrent.TimeUnit) */
			/* name */ 'convert',
			[/* parameters */
				[/* parameter */
					/* name */ 'sourceDuration',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.concurrent.TimeUnit',
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
		[/* public long java.util.concurrent.TimeUnit.toDays(long) */
			/* name */ 'toDays',
			[/* parameters */
				[/* parameter */
					/* name */ 'duration',
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
		[/* public long java.util.concurrent.TimeUnit.toHours(long) */
			/* name */ 'toHours',
			[/* parameters */
				[/* parameter */
					/* name */ 'duration',
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
		[/* public long java.util.concurrent.TimeUnit.toMicros(long) */
			/* name */ 'toMicros',
			[/* parameters */
				[/* parameter */
					/* name */ 'duration',
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
		[/* public long java.util.concurrent.TimeUnit.toMillis(long) */
			/* name */ 'toMillis',
			[/* parameters */
				[/* parameter */
					/* name */ 'duration',
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
		[/* public long java.util.concurrent.TimeUnit.toMinutes(long) */
			/* name */ 'toMinutes',
			[/* parameters */
				[/* parameter */
					/* name */ 'duration',
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
		[/* public long java.util.concurrent.TimeUnit.toNanos(long) */
			/* name */ 'toNanos',
			[/* parameters */
				[/* parameter */
					/* name */ 'duration',
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
		[/* public long java.util.concurrent.TimeUnit.toSeconds(long) */
			/* name */ 'toSeconds',
			[/* parameters */
				[/* parameter */
					/* name */ 'duration',
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
		[/* public static java.util.concurrent.TimeUnit java.util.concurrent.TimeUnit.of(java.time.temporal.ChronoUnit) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'chronoUnit',
					/* type */ 'java.time.temporal.ChronoUnit',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.TimeUnit',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.concurrent.TimeUnit java.util.concurrent.TimeUnit.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.concurrent.TimeUnit',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.concurrent.TimeUnit[] java.util.concurrent.TimeUnit.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.util.concurrent.TimeUnit;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.concurrent.TimeUnit.sleep(long) throws java.lang.InterruptedException */
			/* name */ 'sleep',
			[/* parameters */
				[/* parameter */
					/* name */ 'timeout',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.concurrent.TimeUnit.timedJoin(java.lang.Thread,long) throws java.lang.InterruptedException */
			/* name */ 'timedJoin',
			[/* parameters */
				[/* parameter */
					/* name */ 'thread',
					/* type */ 'java.lang.Thread',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'timeout',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.concurrent.TimeUnit.timedWait(java.lang.Object,long) throws java.lang.InterruptedException */
			/* name */ 'timedWait',
			[/* parameters */
				[/* parameter */
					/* name */ 'obj',
					/* type */ 'java.lang.Object',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'timeout',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			[/* exceptions */
				[/* exception */
					/* type */ 'java.lang.InterruptedException',
					/* annotations */ UDF
				]
			],
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['NANOSECONDS', 0],
		['MICROSECONDS', 1],
		['MILLISECONDS', 2],
		['SECONDS', 3],
		['MINUTES', 4],
		['HOURS', 5],
		['DAYS', 6]
	]
]);
