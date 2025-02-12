import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.ZoneId', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.io.Serializable */
		'java.io.Serializable'
	],
	/* modifiers */ 1025,
	[/* declared annotations */
		['jdk.internal.ValueBased']
	],
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract java.lang.String java.time.ZoneId.getId() */
			/* name */ 'getId',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.time.zone.ZoneRules java.time.ZoneId.getRules() */
			/* name */ 'getRules',
			/* parameters */,
			/* return */ 'java.time.zone.ZoneRules',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public boolean java.time.ZoneId.equals(java.lang.Object) */
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
		[/* public int java.time.ZoneId.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.time.ZoneId.getDisplayName(java.time.format.TextStyle,java.util.Locale) */
			/* name */ 'getDisplayName',
			[/* parameters */
				[/* parameter */
					/* name */ 'style',
					/* type */ 'java.time.format.TextStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'locale',
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
		[/* public java.lang.String java.time.ZoneId.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.time.ZoneId java.time.ZoneId.normalized() */
			/* name */ 'normalized',
			/* parameters */,
			/* return */ 'java.time.ZoneId',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.ZoneId java.time.ZoneId.from(java.time.temporal.TemporalAccessor) */
			/* name */ 'from',
			[/* parameters */
				[/* parameter */
					/* name */ 'temporal',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.ZoneId',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.ZoneId java.time.ZoneId.of(java.lang.String) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'zoneId',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.ZoneId',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.ZoneId java.time.ZoneId.of(java.lang.String,java.util.Map<java.lang.String, java.lang.String>) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'zoneId',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'aliasMap',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String',
							'java.lang.String'
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.ZoneId',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.ZoneId java.time.ZoneId.ofOffset(java.lang.String,java.time.ZoneOffset) */
			/* name */ 'ofOffset',
			[/* parameters */
				[/* parameter */
					/* name */ 'prefix',
					/* type */ 'java.lang.String',
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
			/* return */ 'java.time.ZoneId',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.time.ZoneId java.time.ZoneId.systemDefault() */
			/* name */ 'systemDefault',
			/* parameters */,
			/* return */ 'java.time.ZoneId',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.Set<java.lang.String> java.time.ZoneId.getAvailableZoneIds() */
			/* name */ 'getAvailableZoneIds',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String'
				],
				/* raw type */ 'java.util.Set',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final java.util.Map<java.lang.String, java.lang.String> java.time.ZoneId.SHORT_IDS */
			/* name */ 'SHORT_IDS',
			/* type */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.lang.String',
					'java.lang.String'
				],
				/* raw type */ 'java.util.Map',
				/* owner type */ UDF
			]],
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
