import {UDF} from '../../../utils';
import {GroovyClassCreateHelper} from '../../GroovyClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
GroovyClassCreateHelper.class('groovy.lang.Tuple1', [
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
		]
	],
	[/* declared constructors */
		[/* public groovy.lang.Tuple1(T1) */
			[/* parameters */
				[/* parameter */
					/* name */ 't1',
					/* type */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.Tuple1(groovy.lang.Tuple1<T1>) */
			[/* parameters */
				[/* parameter */
					/* name */ 'tuple',
					/* type */ [/* parameterized type */ 'pt', [
						[/* actual argument types */
							[/* type variable ref */ 'tr', [/* name */ 'T1']]
						],
						/* raw type */ 'groovy.lang.Tuple1',
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
		[/* public T1 groovy.lang.Tuple1.getFirst() */
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
		[/* public T1 groovy.lang.Tuple1.getV1() */
			/* name */ 'getV1',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'T1']],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public groovy.lang.Tuple1<T1> groovy.lang.Tuple1.clone() */
			/* name */ 'clone',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T1']]
				],
				/* raw type */ 'groovy.lang.Tuple1',
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
