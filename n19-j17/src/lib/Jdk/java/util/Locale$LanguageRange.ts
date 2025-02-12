import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.Locale$LanguageRange', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	/* interfaces */,
	/* modifiers */ 25,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.util.Locale$LanguageRange(java.lang.String) */
			[/* parameters */
				[/* parameter */
					/* name */ 'range',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.Locale$LanguageRange(java.lang.String,double) */
			[/* parameters */
				[/* parameter */
					/* name */ 'i',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'range',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared methods */
		[/* public boolean java.util.Locale$LanguageRange.equals(java.lang.Object) */
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
		[/* public double java.util.Locale$LanguageRange.getWeight() */
			/* name */ 'getWeight',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public int java.util.Locale$LanguageRange.hashCode() */
			/* name */ 'hashCode',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale$LanguageRange.getRange() */
			/* name */ 'getRange',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.lang.String java.util.Locale$LanguageRange.toString() */
			/* name */ 'toString',
			/* parameters */,
			/* return */ 'java.lang.String',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.List<java.util.Locale$LanguageRange> java.util.Locale$LanguageRange.mapEquivalents(java.util.List<java.util.Locale$LanguageRange>,java.util.Map<java.lang.String, java.util.List<java.lang.String>>) */
			/* name */ 'mapEquivalents',
			[/* parameters */
				[/* parameter */
					/* name */ 'priorityList',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.util.Locale$LanguageRange'
						],
						/* raw type */ 'java.util.List',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'map',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String',
							[/* parameterized type */ 'pt', [
								[/* actual argument types */
									'java.lang.String'
								],
								/* raw type */ 'java.util.List',
								/* owner type */ UDF
							]]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.util.Locale$LanguageRange'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.List<java.util.Locale$LanguageRange> java.util.Locale$LanguageRange.parse(java.lang.String) */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'ranges',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.util.Locale$LanguageRange'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.List<java.util.Locale$LanguageRange> java.util.Locale$LanguageRange.parse(java.lang.String,java.util.Map<java.lang.String, java.util.List<java.lang.String>>) */
			/* name */ 'parse',
			[/* parameters */
				[/* parameter */
					/* name */ 'ranges',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'map',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							'java.lang.String',
							[/* parameterized type */ 'pt', [
								[/* actual argument types */
									'java.lang.String'
								],
								/* raw type */ 'java.util.List',
								/* owner type */ UDF
							]]
						],
						/* raw type */ 'java.util.Map',
						/* owner type */ UDF
					]],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.util.Locale$LanguageRange'
				],
				/* raw type */ 'java.util.List',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	[/* declared fields */
		[/* public static final double java.util.Locale$LanguageRange.MAX_WEIGHT */
			/* name */ 'MAX_WEIGHT',
			/* type */ 'double',
			/* annotations */ UDF,
			/* modifiers */ 25
		],
		[/* public static final double java.util.Locale$LanguageRange.MIN_WEIGHT */
			/* name */ 'MIN_WEIGHT',
			/* type */ 'double',
			/* annotations */ UDF,
			/* modifiers */ 25
		]
	],
	/* enum values */ UDF
]);
