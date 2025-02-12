import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.function.UnaryOperator', [
	/* super class */,
	[/* interfaces, implements java.util.function.Function<T, T> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				[/* type variable ref */ 'tr', [/* name */ 'T']],
				[/* type variable ref */ 'tr', [/* name */ 'T']]
			],
			/* raw type */ 'java.util.function.Function',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1537,
	[/* declared annotations */
		['java.lang.FunctionalInterface']
	],
	[/* type parameters */
		[/* type variable */
			/* name */ 'T',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		]
	],
	/* declared constructors */,
	[/* declared methods */
		[/* public static <T> java.util.function.UnaryOperator<T> java.util.function.UnaryOperator.identity() */
			/* name */ 'identity',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* type variable ref */ 'tr', [/* name */ 'T']]
				],
				/* raw type */ 'java.util.function.UnaryOperator',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			[/* type parameters */
				[/* type variable */
					/* name */ 'T',
					[/* bounds */
						'java.lang.Object'
					],
					/* annotations */ UDF
				]
			]
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
