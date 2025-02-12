import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.zone.ZoneOffsetTransitionRule$TimeDefinition', [
	/* super class, extends java.lang.Enum<java.time.zone.ZoneOffsetTransitionRule$TimeDefinition> */
	[/* parameterized type */ 'pt', [
		[/* actual argument types */
			'java.time.zone.ZoneOffsetTransitionRule$TimeDefinition'
		],
		/* raw type */ 'java.lang.Enum',
		/* owner type */ UDF
	]],
	/* interfaces */,
	/* modifiers */ 16409,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public java.time.LocalDateTime java.time.zone.ZoneOffsetTransitionRule$TimeDefinition.createDateTime(java.time.LocalDateTime,java.time.ZoneOffset,java.time.ZoneOffset) */
			/* name */ 'createDateTime',
			[/* parameters */
				[/* parameter */
					/* name */ 'difference',
					/* type */ 'java.time.LocalDateTime',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'difference',
					/* type */ 'java.time.ZoneOffset',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'dateTime',
					/* type */ 'java.time.ZoneOffset',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.LocalDateTime',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.zone.ZoneOffsetTransitionRule$TimeDefinition java.time.zone.ZoneOffsetTransitionRule$TimeDefinition.valueOf(java.lang.String) */
			/* name */ 'valueOf',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.zone.ZoneOffsetTransitionRule$TimeDefinition',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.zone.ZoneOffsetTransitionRule$TimeDefinition[] java.time.zone.ZoneOffsetTransitionRule$TimeDefinition.values() */
			/* name */ 'values',
			/* parameters */,
			/* return */ '[Ljava.time.zone.ZoneOffsetTransitionRule$TimeDefinition;',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	[/* enum values */
		['UTC', 0],
		['WALL', 1],
		['STANDARD', 2]
	]
]);
