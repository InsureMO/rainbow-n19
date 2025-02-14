import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.Tuple4', [
	/* super class, extends groovy.lang.Tuple */
	'groovy.lang.Tuple',
	/* interfaces */,
	/* modifiers */ 17,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'T1',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		],
		[/* type variable */
			/* name */ 'T2',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		],
		[/* type variable */
			/* name */ 'T3',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		],
		[/* type variable */
			/* name */ 'T4',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		]
	],
	[/* declared constructors */
		[/* public groovy.lang.Tuple4(T1,T2,T3,T4) */
			[/* parameters */
				[/* parameter */
					/* name */ 'v1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v2',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v3',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'v4',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.Tuple4(groovy.lang.Tuple4<T1, T2, T3, T4>) */
			[/* parameters */
				[/* parameter */
					/* name */ 'tuple',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T1']],
							[/* type variable ref */ 'tr', [/* name */ 'T2']],
							[/* type variable ref */ 'tr', [/* name */ 'T3']],
							[/* type variable ref */ 'tr', [/* name */ 'T4']]
						],
						/* raw type */ 'groovy.lang.Tuple4',
						/* owner type */ UDF
					]],
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
		[/* public T1 groovy.lang.Tuple4.getFirst() */
			/* name */ 'getFirst',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', ''],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public T1 groovy.lang.Tuple4.getV1() */
			/* name */ 'getV1',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public T2 groovy.lang.Tuple4.getSecond() */
			/* name */ 'getSecond',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', ''],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public T2 groovy.lang.Tuple4.getV2() */
			/* name */ 'getV2',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T2']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public T3 groovy.lang.Tuple4.getThird() */
			/* name */ 'getThird',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', ''],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public T3 groovy.lang.Tuple4.getV3() */
			/* name */ 'getV3',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T3']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public T4 groovy.lang.Tuple4.getFourth() */
			/* name */ 'getFourth',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
			/* exceptions */,
			/* modifiers */ 1,
			[/* annotations */
				[
					'java.lang.Deprecated',
					['p', 'since', ''],
					['p', 'forRemoval', false]
				]
			],
			/* type parameters */ UDF
		],
		[/* public T4 groovy.lang.Tuple4.getV4() */
			/* name */ 'getV4',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T4']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.Tuple4<T1, T2, T3, T4> groovy.lang.Tuple4.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']],
					[/* type variable ref */ 'tr', [/* name */ 'T2']],
					[/* type variable ref */ 'tr', [/* name */ 'T3']],
					[/* type variable ref */ 'tr', [/* name */ 'T4']]
				],
				/* raw type */ 'groovy.lang.Tuple4',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
