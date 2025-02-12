import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.random.RandomGenerator$StreamableGenerator', [
	/* super class */,
	[/* interfaces, implements java.util.random.RandomGenerator */
		'java.util.random.RandomGenerator'
	],
	/* modifiers */ 1545,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public static java.util.random.RandomGenerator$StreamableGenerator java.util.random.RandomGenerator$StreamableGenerator.of(java.lang.String) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.random.RandomGenerator$StreamableGenerator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.Stream<java.util.random.RandomGenerator> java.util.random.RandomGenerator$StreamableGenerator.rngs() */
			/* name */ 'rngs',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.util.random.RandomGenerator'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.Stream<java.util.random.RandomGenerator> java.util.random.RandomGenerator$StreamableGenerator.rngs(long) */
			/* name */ 'rngs',
			[/* parameters */
				[/* parameter */
					/* name */ 'streamSize',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.util.random.RandomGenerator'
				],
				/* raw type */ 'java.util.stream.Stream',
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
