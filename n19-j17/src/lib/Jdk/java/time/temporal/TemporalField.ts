import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.time.temporal.TemporalField', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract <R extends java.time.temporal.Temporal> R java.time.temporal.TemporalField.adjustInto(R,long) */
			/* name */ 'adjustInto',
			[/* parameters */
				[/* parameter */
					/* name */ 'locale',
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
			/* modifiers */ 1025,
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
		[/* public abstract boolean java.time.temporal.TemporalField.isDateBased() */
			/* name */ 'isDateBased',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.time.temporal.TemporalField.isSupportedBy(java.time.temporal.TemporalAccessor) */
			/* name */ 'isSupportedBy',
			[/* parameters */
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract boolean java.time.temporal.TemporalField.isTimeBased() */
			/* name */ 'isTimeBased',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.String java.time.temporal.TemporalField.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.time.temporal.TemporalUnit java.time.temporal.TemporalField.getBaseUnit() */
			/* name */ 'getBaseUnit',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalUnit',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.time.temporal.TemporalUnit java.time.temporal.TemporalField.getRangeUnit() */
			/* name */ 'getRangeUnit',
			/* parameters */,
			/* return */ 'java.time.temporal.TemporalUnit',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.time.temporal.ValueRange java.time.temporal.TemporalField.range() */
			/* name */ 'range',
			/* parameters */,
			/* return */ 'java.time.temporal.ValueRange',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.time.temporal.ValueRange java.time.temporal.TemporalField.rangeRefinedBy(java.time.temporal.TemporalAccessor) */
			/* name */ 'rangeRefinedBy',
			[/* parameters */
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.ValueRange',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract long java.time.temporal.TemporalField.getFrom(java.time.temporal.TemporalAccessor) */
			/* name */ 'getFrom',
			[/* parameters */
				[/* parameter */
					/* name */ 'locale',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.lang.String java.time.temporal.TemporalField.getDisplayName(java.util.Locale) */
			/* name */ 'getDisplayName',
			[/* parameters */
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
		[/* public default java.time.temporal.TemporalAccessor java.time.temporal.TemporalField.resolve(java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,java.time.temporal.TemporalAccessor,java.time.format.ResolverStyle) */
			/* name */ 'resolve',
			[/* parameters */
				[/* parameter */
					/* name */ 'fieldValues',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.time.temporal.TemporalField',
							'java.lang.Long'
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'partialTemporal',
					/* type */ 'java.time.temporal.TemporalAccessor',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'resolverStyle',
					/* type */ 'java.time.format.ResolverStyle',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.time.temporal.TemporalAccessor',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
