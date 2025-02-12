import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.InstantSource', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static java.time.InstantSource java.time.InstantSource.offset(java.time.InstantSource,java.time.Duration) */
			/* name */ 'offset',
			[/* parameters */
				[/* parameter */
					/* name */ 'offsetDuration',
					/* type */ 'java.time.InstantSource',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.time.Duration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.InstantSource',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default long java.time.InstantSource.millis() */
			/* name */ 'millis',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.InstantSource java.time.InstantSource.system() */
			/* name */ 'system',
			/* parameters */,
			/* return */ 'java.time.InstantSource',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.InstantSource java.time.InstantSource.fixed(java.time.Instant) */
			/* name */ 'fixed',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.time.Instant',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.InstantSource',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.time.Instant java.time.InstantSource.instant() */
			/* name */ 'instant',
			/* parameters */,
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.time.Clock java.time.InstantSource.withZone(java.time.ZoneId) */
			/* name */ 'withZone',
			[/* parameters */
				[/* parameter */
					/* name */ 'zone',
					/* type */ 'java.time.ZoneId',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Clock',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.InstantSource java.time.InstantSource.tick(java.time.InstantSource,java.time.Duration) */
			/* name */ 'tick',
			[/* parameters */
				[/* parameter */
					/* name */ 'tickDuration',
					/* type */ 'java.time.InstantSource',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.time.Duration',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.InstantSource',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
