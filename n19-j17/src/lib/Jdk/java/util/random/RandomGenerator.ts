import {UDF} from '../../../../utils';
import {JdkClassCreateHelper} from '../../../JdkClassLoader';

// noinspection JSConsecutiveCommasInArrayLiteral
JdkClassCreateHelper.class('java.util.random.RandomGenerator', [
	/* super class */,
	/* interfaces */,
	/* modifiers */ 1537,
	/* declared annotations */,
	/* type parameters */,
	/* declared constructors */,
	[/* declared methods */
		[/* public abstract long java.util.random.RandomGenerator.nextLong() */
			/* name */ 'nextLong',
			/* parameters */,
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1025,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default boolean java.util.random.RandomGenerator.isDeprecated() */
			/* name */ 'isDeprecated',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default boolean java.util.random.RandomGenerator.nextBoolean() */
			/* name */ 'nextBoolean',
			/* parameters */,
			/* return */ 'boolean',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default double java.util.random.RandomGenerator.nextDouble() */
			/* name */ 'nextDouble',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default double java.util.random.RandomGenerator.nextDouble(double) */
			/* name */ 'nextDouble',
			[/* parameters */
				[/* parameter */
					/* name */ 'bound',
					/* type */ 'double',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default double java.util.random.RandomGenerator.nextDouble(double,double) */
			/* name */ 'nextDouble',
			[/* parameters */
				[/* parameter */
					/* name */ 'origin',
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
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default double java.util.random.RandomGenerator.nextExponential() */
			/* name */ 'nextExponential',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default double java.util.random.RandomGenerator.nextGaussian() */
			/* name */ 'nextGaussian',
			/* parameters */,
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default double java.util.random.RandomGenerator.nextGaussian(double,double) */
			/* name */ 'nextGaussian',
			[/* parameters */
				[/* parameter */
					/* name */ 'mean',
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
			/* return */ 'double',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default float java.util.random.RandomGenerator.nextFloat() */
			/* name */ 'nextFloat',
			/* parameters */,
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default float java.util.random.RandomGenerator.nextFloat(float) */
			/* name */ 'nextFloat',
			[/* parameters */
				[/* parameter */
					/* name */ 'bound',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default float java.util.random.RandomGenerator.nextFloat(float,float) */
			/* name */ 'nextFloat',
			[/* parameters */
				[/* parameter */
					/* name */ 'origin',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'bound',
					/* type */ 'float',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'float',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default int java.util.random.RandomGenerator.nextInt() */
			/* name */ 'nextInt',
			/* parameters */,
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default int java.util.random.RandomGenerator.nextInt(int) */
			/* name */ 'nextInt',
			[/* parameters */
				[/* parameter */
					/* name */ 'bound',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default int java.util.random.RandomGenerator.nextInt(int,int) */
			/* name */ 'nextInt',
			[/* parameters */
				[/* parameter */
					/* name */ 'origin',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				],
				[/* parameter */
					/* name */ 'bound',
					/* type */ 'int',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'int',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.DoubleStream java.util.random.RandomGenerator.doubles() */
			/* name */ 'doubles',
			/* parameters */,
			/* return */ 'java.util.stream.DoubleStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.DoubleStream java.util.random.RandomGenerator.doubles(double,double) */
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
		[/* public default java.util.stream.DoubleStream java.util.random.RandomGenerator.doubles(long) */
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
		[/* public default java.util.stream.DoubleStream java.util.random.RandomGenerator.doubles(long,double,double) */
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
		[/* public default java.util.stream.IntStream java.util.random.RandomGenerator.ints() */
			/* name */ 'ints',
			/* parameters */,
			/* return */ 'java.util.stream.IntStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.IntStream java.util.random.RandomGenerator.ints(int,int) */
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
		[/* public default java.util.stream.IntStream java.util.random.RandomGenerator.ints(long) */
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
		[/* public default java.util.stream.IntStream java.util.random.RandomGenerator.ints(long,int,int) */
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
		[/* public default java.util.stream.LongStream java.util.random.RandomGenerator.longs() */
			/* name */ 'longs',
			/* parameters */,
			/* return */ 'java.util.stream.LongStream',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default java.util.stream.LongStream java.util.random.RandomGenerator.longs(long) */
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
		[/* public default java.util.stream.LongStream java.util.random.RandomGenerator.longs(long,long) */
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
		[/* public default java.util.stream.LongStream java.util.random.RandomGenerator.longs(long,long,long) */
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
		[/* public default long java.util.random.RandomGenerator.nextLong(long) */
			/* name */ 'nextLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'bound',
					/* type */ 'long',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default long java.util.random.RandomGenerator.nextLong(long,long) */
			/* name */ 'nextLong',
			[/* parameters */
				[/* parameter */
					/* name */ 'origin',
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
			/* return */ 'long',
			/* exceptions */,
			/* modifiers */ 1,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public default void java.util.random.RandomGenerator.nextBytes(byte[]) */
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
		],
		[/* public static java.util.random.RandomGenerator java.util.random.RandomGenerator.getDefault() */
			/* name */ 'getDefault',
			/* parameters */,
			/* return */ 'java.util.random.RandomGenerator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		],
		[/* public static java.util.random.RandomGenerator java.util.random.RandomGenerator.of(java.lang.String) */
			/* name */ 'of',
			[/* parameters */
				[/* parameter */
					/* name */ 'name',
					/* type */ 'java.lang.String',
					/* modifiers */ 0,
					/* annotations */ UDF
				]
			],
			/* return */ 'java.util.random.RandomGenerator',
			/* exceptions */,
			/* modifiers */ 9,
			/* annotations */ UDF,
			/* type parameters */ UDF
		]
	],
	/* declared fields */,
	/* enum values */ UDF
]);
