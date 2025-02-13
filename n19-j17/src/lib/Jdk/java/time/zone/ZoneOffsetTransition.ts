import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.zone.ZoneOffsetTransition', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.lang.Comparable<java.time.zone.ZoneOffsetTransition>, java.io.Serializable */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				'java.time.zone.ZoneOffsetTransition'
			],
			/* raw type */ 'java.lang.Comparable',
			/* owner type */ UDF
		]],
		'java.io.Serializable'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public boolean java.time.zone.ZoneOffsetTransition.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'other',
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
		[/* public boolean java.time.zone.ZoneOffsetTransition.isGap() */
			/* name */ 'isGap',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.time.zone.ZoneOffsetTransition.isOverlap() */
			/* name */ 'isOverlap',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.time.zone.ZoneOffsetTransition.isValidOffset(java.time.ZoneOffset) */
			/* name */ 'isValidOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'offset',
					/* type */ 'java.time.ZoneOffset',
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
		[/* public int java.time.zone.ZoneOffsetTransition.compareTo(java.time.zone.ZoneOffsetTransition) */
			/* name */ 'compareTo',
			[/* parameters */
				[/* parameter */
					/* name */ 'transition',
					/* type */ 'java.time.zone.ZoneOffsetTransition',
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
		[/* public int java.time.zone.ZoneOffsetTransition.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.time.zone.ZoneOffsetTransition.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Duration java.time.zone.ZoneOffsetTransition.getDuration() */
			/* name */ 'getDuration',
			/* parameters */,
			/* return */ 'java.time.Duration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Instant java.time.zone.ZoneOffsetTransition.getInstant() */
			/* name */ 'getInstant',
			/* parameters */,
			/* return */ 'java.time.Instant',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDateTime java.time.zone.ZoneOffsetTransition.getDateTimeAfter() */
			/* name */ 'getDateTimeAfter',
			/* parameters */,
			/* return */ 'java.time.LocalDateTime',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.LocalDateTime java.time.zone.ZoneOffsetTransition.getDateTimeBefore() */
			/* name */ 'getDateTimeBefore',
			/* parameters */,
			/* return */ 'java.time.LocalDateTime',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.ZoneOffset java.time.zone.ZoneOffsetTransition.getOffsetAfter() */
			/* name */ 'getOffsetAfter',
			/* parameters */,
			/* return */ 'java.time.ZoneOffset',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.ZoneOffset java.time.zone.ZoneOffsetTransition.getOffsetBefore() */
			/* name */ 'getOffsetBefore',
			/* parameters */,
			/* return */ 'java.time.ZoneOffset',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.time.zone.ZoneOffsetTransition.toEpochSecond() */
			/* name */ 'toEpochSecond',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.zone.ZoneOffsetTransition java.time.zone.ZoneOffsetTransition.of(java.time.LocalDateTime,java.time.ZoneOffset,java.time.ZoneOffset) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'transition',
					/* type */ 'java.time.LocalDateTime',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'offsetBefore',
					/* type */ 'java.time.ZoneOffset',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'offsetAfter',
					/* type */ 'java.time.ZoneOffset',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.zone.ZoneOffsetTransition',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
