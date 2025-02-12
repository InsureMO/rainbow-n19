import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.zone.ZoneRules', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Serializable */
		'java.io.Serializable'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public boolean java.time.zone.ZoneRules.equals(java.lang.Object) */
			/* name */ 'equals',
			[/* parameters */
				[/* parameter */
					/* name */ 'otherRules',
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
		[/* public boolean java.time.zone.ZoneRules.isDaylightSavings(java.time.Instant) */
			/* name */ 'isDaylightSavings',
			[/* parameters */
				[/* parameter */
					/* name */ 'instant',
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
		[/* public boolean java.time.zone.ZoneRules.isFixedOffset() */
			/* name */ 'isFixedOffset',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.time.zone.ZoneRules.isValidOffset(java.time.LocalDateTime,java.time.ZoneOffset) */
			/* name */ 'isValidOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'localDateTime',
					/* type */ 'java.time.LocalDateTime',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
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
		[/* public int java.time.zone.ZoneRules.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.time.zone.ZoneRules.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.Duration java.time.zone.ZoneRules.getDaylightSavings(java.time.Instant) */
			/* name */ 'getDaylightSavings',
			[/* parameters */
				[/* parameter */
					/* name */ 'instant',
					/* type */ 'java.time.Instant',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.Duration',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.ZoneOffset java.time.zone.ZoneRules.getOffset(java.time.Instant) */
			/* name */ 'getOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'instant',
					/* type */ 'java.time.Instant',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.ZoneOffset',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.ZoneOffset java.time.zone.ZoneRules.getOffset(java.time.LocalDateTime) */
			/* name */ 'getOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'localDateTime',
					/* type */ 'java.time.LocalDateTime',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.ZoneOffset',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.ZoneOffset java.time.zone.ZoneRules.getStandardOffset(java.time.Instant) */
			/* name */ 'getStandardOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'instant',
					/* type */ 'java.time.Instant',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.ZoneOffset',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.zone.ZoneOffsetTransition java.time.zone.ZoneRules.getTransition(java.time.LocalDateTime) */
			/* name */ 'getTransition',
			[/* parameters */
				[/* parameter */
					/* name */ 'localDateTime',
					/* type */ 'java.time.LocalDateTime',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.zone.ZoneOffsetTransition',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.zone.ZoneOffsetTransition java.time.zone.ZoneRules.nextTransition(java.time.Instant) */
			/* name */ 'nextTransition',
			[/* parameters */
				[/* parameter */
					/* name */ 'instant',
					/* type */ 'java.time.Instant',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.zone.ZoneOffsetTransition',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.zone.ZoneOffsetTransition java.time.zone.ZoneRules.previousTransition(java.time.Instant) */
			/* name */ 'previousTransition',
			[/* parameters */
				[/* parameter */
					/* name */ 'instant',
					/* type */ 'java.time.Instant',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.zone.ZoneOffsetTransition',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<java.time.ZoneOffset> java.time.zone.ZoneRules.getValidOffsets(java.time.LocalDateTime) */
			/* name */ 'getValidOffsets',
			[/* parameters */
				[/* parameter */
					/* name */ 'localDateTime',
					/* type */ 'java.time.LocalDateTime',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.ZoneOffset'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<java.time.zone.ZoneOffsetTransition> java.time.zone.ZoneRules.getTransitions() */
			/* name */ 'getTransitions',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.zone.ZoneOffsetTransition'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.List<java.time.zone.ZoneOffsetTransitionRule> java.time.zone.ZoneRules.getTransitionRules() */
			/* name */ 'getTransitionRules',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.time.zone.ZoneOffsetTransitionRule'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.zone.ZoneRules java.time.zone.ZoneRules.of(java.time.ZoneOffset) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'offset',
					/* type */ 'java.time.ZoneOffset',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.zone.ZoneRules',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.zone.ZoneRules java.time.zone.ZoneRules.of(java.time.ZoneOffset,java.time.ZoneOffset,java.util.List<java.time.zone.ZoneOffsetTransition>,java.util.List<java.time.zone.ZoneOffsetTransition>,java.util.List<java.time.zone.ZoneOffsetTransitionRule>) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'baseStandardOffset',
					/* type */ 'java.time.ZoneOffset',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'baseWallOffset',
					/* type */ 'java.time.ZoneOffset',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'standardOffsetTransitionList',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.time.zone.ZoneOffsetTransition'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'transitionList',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.time.zone.ZoneOffsetTransition'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'lastRules',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.time.zone.ZoneOffsetTransitionRule'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.zone.ZoneRules',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
