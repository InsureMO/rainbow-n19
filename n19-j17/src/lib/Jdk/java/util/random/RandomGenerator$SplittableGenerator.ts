import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.random.RandomGenerator$SplittableGenerator', [
	/* super class */,
	[/* interfaces, implements java.util.random.RandomGenerator$StreamableGenerator */
		'java.util.random.RandomGenerator$StreamableGenerator'
	],
	/* modifiers */ 1545,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract java.util.random.RandomGenerator$SplittableGenerator java.util.random.RandomGenerator$SplittableGenerator.split(java.util.random.RandomGenerator$SplittableGenerator) */
			/* name */ 'split',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.random.RandomGenerator$SplittableGenerator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.random.RandomGenerator$SplittableGenerator',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.random.RandomGenerator$SplittableGenerator java.util.random.RandomGenerator$SplittableGenerator.split() */
			/* name */ 'split',
			/* parameters */,
			/* return */ 'java.util.random.RandomGenerator$SplittableGenerator',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.random.RandomGenerator$SplittableGenerator java.util.random.RandomGenerator$SplittableGenerator.of(java.lang.String) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.random.RandomGenerator$SplittableGenerator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.Stream<java.util.random.RandomGenerator$SplittableGenerator> java.util.random.RandomGenerator$SplittableGenerator.splits(long,java.util.random.RandomGenerator$SplittableGenerator) */
			/* name */ 'splits',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'java.util.random.RandomGenerator$SplittableGenerator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.util.random.RandomGenerator$SplittableGenerator'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.Stream<java.util.random.RandomGenerator$SplittableGenerator> java.util.random.RandomGenerator$SplittableGenerator.splits(java.util.random.RandomGenerator$SplittableGenerator) */
			/* name */ 'splits',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'java.util.random.RandomGenerator$SplittableGenerator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.util.random.RandomGenerator$SplittableGenerator'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public abstract java.util.stream.Stream<java.util.random.RandomGenerator$SplittableGenerator> java.util.random.RandomGenerator$SplittableGenerator.splits(long) */
			/* name */ 'splits',
			[/* parameters */
				[/* parameter */
					/* name */ 'arg0',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.util.random.RandomGenerator$SplittableGenerator'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.Stream<java.util.random.RandomGenerator$SplittableGenerator> java.util.random.RandomGenerator$SplittableGenerator.splits() */
			/* name */ 'splits',
			/* parameters */,
			/* return */ [/* parameterized type */ 'pt', [
				[/* actual argument types */
					'java.util.random.RandomGenerator$SplittableGenerator'
				],
				/* raw type */ 'java.util.stream.Stream',
				/* owner type */ UDF
			]],
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.Stream<java.util.random.RandomGenerator> java.util.random.RandomGenerator$SplittableGenerator.rngs(long) */
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
		],
		[/* public default java.util.stream.Stream<java.util.random.RandomGenerator> java.util.random.RandomGenerator$SplittableGenerator.rngs() */
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
