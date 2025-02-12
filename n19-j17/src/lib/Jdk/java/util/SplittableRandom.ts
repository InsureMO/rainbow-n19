import {UDF} from '../../../utils';
import {JdkClassCreateHelper} from '../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.SplittableRandom', [
	/* super class, extends java.lang.Object */
	'java.lang.Object',
	[/* interfaces, implements java.util.random.RandomGenerator, java.util.random.RandomGenerator$SplittableGenerator */
		'java.util.random.RandomGenerator',
		'java.util.random.RandomGenerator$SplittableGenerator'
	],
	/* modifiers */ 17,
	/* declared annotations */,
	/* type parameters */,
	[/* declared constructors */
		[/* public java.util.SplittableRandom() */
			/* parameters */,
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.SplittableRandom(long) */
			[/* parameters */
				[/* parameter */
					/* name */ 'seed',
					/* type */ 'long',
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
		[/* public int java.util.SplittableRandom.nextInt() */
			/* name */ 'nextInt',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.SplittableRandom java.util.SplittableRandom.split() */
			/* name */ 'split',
			/* parameters */,
			/* return */ 'java.util.SplittableRandom',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.SplittableRandom java.util.SplittableRandom.split(java.util.random.RandomGenerator$SplittableGenerator) */
			/* name */ 'split',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
					/* type */ 'java.util.random.RandomGenerator$SplittableGenerator',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.SplittableRandom',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.random.RandomGenerator$SplittableGenerator java.util.SplittableRandom.split() */
			/* name */ 'split',
			/* parameters */,
			/* return */ 'java.util.random.RandomGenerator$SplittableGenerator',
			/* exceptions */,
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.random.RandomGenerator$SplittableGenerator java.util.SplittableRandom.split(java.util.random.RandomGenerator$SplittableGenerator) */
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
			/* modifiers */ 4161,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.DoubleStream java.util.SplittableRandom.doubles() */
			/* name */ 'doubles',
			/* parameters */,
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.DoubleStream java.util.SplittableRandom.doubles(double,double) */
			/* name */ 'doubles',
			[/* parameters */
				[/* parameter */
					/* name */ 'randomNumberOrigin',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.DoubleStream java.util.SplittableRandom.doubles(long) */
			/* name */ 'doubles',
			[/* parameters */
				[/* parameter */
					/* name */ 'streamSize',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.DoubleStream java.util.SplittableRandom.doubles(long,double,double) */
			/* name */ 'doubles',
			[/* parameters */
				[/* parameter */
					/* name */ 'streamSize',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'randomNumberOrigin',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.IntStream java.util.SplittableRandom.ints() */
			/* name */ 'ints',
			/* parameters */,
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.IntStream java.util.SplittableRandom.ints(int,int) */
			/* name */ 'ints',
			[/* parameters */
				[/* parameter */
					/* name */ 'randomNumberOrigin',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'randomNumberBound',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.IntStream java.util.SplittableRandom.ints(long) */
			/* name */ 'ints',
			[/* parameters */
				[/* parameter */
					/* name */ 'streamSize',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.IntStream java.util.SplittableRandom.ints(long,int,int) */
			/* name */ 'ints',
			[/* parameters */
				[/* parameter */
					/* name */ 'streamSize',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'randomNumberOrigin',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.LongStream java.util.SplittableRandom.longs() */
			/* name */ 'longs',
			/* parameters */,
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.LongStream java.util.SplittableRandom.longs(long) */
			/* name */ 'longs',
			[/* parameters */
				[/* parameter */
					/* name */ 'streamSize',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.LongStream java.util.SplittableRandom.longs(long,long) */
			/* name */ 'longs',
			[/* parameters */
				[/* parameter */
					/* name */ 'randomNumberOrigin',
					/* type */ 'long',
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
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.LongStream java.util.SplittableRandom.longs(long,long,long) */
			/* name */ 'longs',
			[/* parameters */
				[/* parameter */
					/* name */ 'streamSize',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'arg1',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'randomNumberOrigin',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.Stream<java.util.random.RandomGenerator$SplittableGenerator> java.util.SplittableRandom.splits() */
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
		[/* public java.util.stream.Stream<java.util.random.RandomGenerator$SplittableGenerator> java.util.SplittableRandom.splits(java.util.random.RandomGenerator$SplittableGenerator) */
			/* name */ 'splits',
			[/* parameters */
				[/* parameter */
					/* name */ 'source',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public java.util.stream.Stream<java.util.random.RandomGenerator$SplittableGenerator> java.util.SplittableRandom.splits(long) */
			/* name */ 'splits',
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
		[/* public java.util.stream.Stream<java.util.random.RandomGenerator$SplittableGenerator> java.util.SplittableRandom.splits(long,java.util.random.RandomGenerator$SplittableGenerator) */
			/* name */ 'splits',
			[/* parameters */
				[/* parameter */
					/* name */ 'streamSize',
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
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public long java.util.SplittableRandom.nextLong() */
			/* name */ 'nextLong',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public void java.util.SplittableRandom.nextBytes(byte[]) */
			/* name */ 'nextBytes',
			[/* parameters */
				[/* parameter */
					/* name */ 'bytes',
					/* type */ '[B',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'void',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
