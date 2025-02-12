import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.ServiceLoader$Provider', [
	/* super class */,
	[/* interfaces, implements java.util.function.Supplier<S> */
		[/* parameterized type */ 'pt', [
			[/* actual argument types */
				[/* type variable ref */ 'tr', [/* name */ 'S']]
			],
			/* raw type */ 'java.util.function.Supplier',
			/* owner type */ UDF
		]]
	],
	/* modifiers */ 1545,
	/* declared annotations */,
	[/* type parameters */
		[/* type variable */
			/* name */ 'S',
			[/* bounds */
				'java.lang.Object'
			],
			/* annotations */ UDF
		]
	],
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract S java.util.ServiceLoader$Provider.get() */
			/* name */ 'get',
			/* parameters */,
			/* return */ [/* type variable ref */ 'tr', [/* name */ 'S']],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.lang.Class<? extends S> java.util.ServiceLoader$Provider.type() */
			/* name */ 'type',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					[/* wildcard type */ 'wt', [
						[/* upper bounds */
							[/* type variable ref */ 'tr', [/* name */ 'S']]
						],
						/* lower bounds */ UDF
					]]
				],
				/* raw type */ 'java.lang.Class',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
