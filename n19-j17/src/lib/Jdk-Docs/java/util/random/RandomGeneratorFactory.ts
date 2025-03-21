import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.random.RandomGeneratorFactory', [
	[/* class description */
		[/* text */ 't', `This is a factory class for generating multiple random number generators
 of a specific `],
		[/* text */ 't', `algorithm`],
		[/* text */ 't', `.
 `],
		[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`, `RandomGeneratorFactory`],
		[/* text */ 't', ` also provides
 methods for selecting random number generator algorithms.

 A specific `],
		[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`, `RandomGeneratorFactory`],
		[/* text */ 't', ` can be located by using the
 `],
		[/* reference */ 'r', `#of(java.lang.String)`, `of(String)`],
		[/* text */ 't', ` method, where the argument string
 is the name of the `],
		[/* text */ 't', `algorithm`],
		[/* text */ 't', `
 required. The method
 `],
		[/* reference */ 'r', `#all()`, `all()`],
		[/* text */ 't', ` produces a non-empty `],
		[/* reference */ 'r', `java.util.stream.Stream`, `Stream`],
		[/* text */ 't', ` of all available
 `],
		[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`, `RandomGeneratorFactorys`],
		[/* text */ 't', ` that can be searched
 to locate a `],
		[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`, `RandomGeneratorFactory`],
		[/* text */ 't', ` suitable to the task.

 There are three methods for constructing a RandomGenerator instance,
 depending on the type of initial seed required.
 `],
		[/* reference */ 'r', `#create(long)`, `create(long)`],
		[/* text */ 't', ` is used for long
 seed construction,
 `],
		[/* reference */ 'r', `#create(byte%5B%5D)`, `create(byte[])`],
		[/* text */ 't', ` is used for byte[]
 seed construction, and
 `],
		[/* reference */ 'r', `#create()`, `create()`],
		[/* text */ 't', ` is used for random seed
 construction. Example;

 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `RandomGeneratorFactory<RandomGenerator> factory = RandomGeneratorFactory.of("Random");

     for (int i = 0; i < 10; i++) {
         new Thread(() -> {
             RandomGenerator random = factory.create(100L);
             System.out.println(random.nextDouble());
         }).start();
     }`]
		]],
		[/* text */ 't', `

 RandomGeneratorFactory also provides methods describing the attributes (or properties)
 of a generator and can be used to select random number generator
 `],
		[/* text */ 't', `algorithms`],
		[/* text */ 't', `.
 These methods are typically used in
 conjunction with `],
		[/* reference */ 'r', `#all()`, `all()`],
		[/* text */ 't', `. In this example, the code
 locates the `],
		[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`, `RandomGeneratorFactory`],
		[/* text */ 't', ` that produces
 `],
		[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerators`],
		[/* text */ 't', `
 with the highest number of state bits.

 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `RandomGeneratorFactory<RandomGenerator> best = RandomGeneratorFactory.all()
         .sorted(Comparator.comparingInt(RandomGenerator::stateBits).reversed())
         .findFirst()
         .orElse(RandomGeneratorFactory.of("Random"));
     System.out.println(best.name() + " in " + best.group() + " was selected");

     RandomGenerator rng = best.create();
     System.out.println(rng.nextLong());`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'isArbitrarilyJumpable()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator can jump an arbitrarily specified distant
 point in the state cycle.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if random generator is arbitrarily jumpable.`]
			]
		]],
		[/* method */ 'isDeprecated()', [
			[/* method description */
				[/* text */ 't', `Return true if the implementation of RandomGenerator (algorithm) has been
 marked for deprecation.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the implementation of RandomGenerator (algorithm) has been
         marked for deprecation`]
			]
		]],
		[/* method */ 'isHardware()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator uses a hardware device (HRNG) to produce
 entropic input.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if random generator is generated by hardware.`]
			]
		]],
		[/* method */ 'isJumpable()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator can jump a specified distant point in
 the state cycle.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if random generator is jumpable.`]
			]
		]],
		[/* method */ 'isLeapable()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator is jumpable and can leap to a very distant
 point in the state cycle.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if random generator is leapable.`]
			]
		]],
		[/* method */ 'isSplittable()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator can be cloned into a separate object with
 the same properties but positioned further in the state cycle.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if random generator is splittable.`]
			]
		]],
		[/* method */ 'isStatistical()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator is computed using an arithmetic
 `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', `
 and is statistically deterministic.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if random generator is statistical.`]
			]
		]],
		[/* method */ 'isStochastic()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator is computed using external or entropic
 sources as inputs.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if random generator is stochastic.`]
			]
		]],
		[/* method */ 'isStreamable()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator can be used to create
 `],
				[/* reference */ 'r', `java.util.stream.Stream`, `Streams`],
				[/* text */ 't', ` of random numbers.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if random generator is streamable.`]
			]
		]],
		[/* method */ 'equidistribution()', [
			[/* method description */
				[/* text */ 't', `Returns the equidistribution of the `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the equidistribution of the `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'stateBits()', [
			[/* method description */
				[/* text */ 't', `Returns number of bits used by the `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', `
 to maintain state of seed.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `number of bits used by the `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', `
         to maintain state of seed.`]
			]
		]],
		[/* method */ 'group()', [
			[/* method description */
				[/* text */ 't', `Return the group name of the `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', `
 used by the random number generator.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `Group name of the `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'name()', [
			[/* method description */
				[/* text */ 't', `Return the name of the `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', `
 used by the random number generator.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `Name of the `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'period()', [
			[/* method description */
				[/* text */ 't', `Return the period of the `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', `
 used by the random number generator.
 Returns BigInteger.ZERO if period is not determinable.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `BigInteger period.`]
			]
		]],
		[/* method */ 'of(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`, `RandomGeneratorFactory`],
				[/* text */ 't', ` that can produce instances of
 `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', ` that utilize the `],
				[/* inline code block */ 'i', `name`],
				[/* text */ 't', `
 `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `Name of random number generator
 `],
					[/* text */ 't', `algorithm`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if name is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the named algorithm is not found`]
				]]
			],
			[/* return description */
				[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`, `RandomGeneratorFactory`],
				[/* text */ 't', ` of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`]
			]
		]],
		[/* method */ 'getDefault()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`, `RandomGeneratorFactory`],
				[/* text */ 't', ` meeting the minimal requirement
 of having an algorithm whose state bits are greater than or equal 64.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`, `RandomGeneratorFactory`]
			]
		]],
		[/* method */ 'all()', [
			[/* method description */
				[/* text */ 't', `Returns a non-empty stream of available `],
				[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`, `RandomGeneratorFactory(s)`],
				[/* text */ 't', `.

 RandomGenerators that are marked as deprecated are not included in the result.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a non-empty stream of all available `],
				[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`, `RandomGeneratorFactory(s)`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'create()', [
			[/* method description */
				[/* text */ 't', `Create an instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', ` based on
 `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', ` chosen.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `new in instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'create(byte[])', [
			[/* method description */
				[/* text */ 't', `Create an instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', ` based on
 `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', ` chosen
 providing a starting byte[] seed. If byte[] seed is not supported by an
 `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', ` then the no
 argument form of create is used.`]
			],
			[/* parameters */
				[/* parameter */ 'seed', [/* parameter description */
					[/* text */ 't', `byte array random seed value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if seed is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `new in instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'create(long)', [
			[/* method description */
				[/* text */ 't', `Create an instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', ` based on
 `],
				[/* text */ 't', `algorithm`],
				[/* text */ 't', ` chosen
 providing a starting long seed. If long seed is not supported by an
 algorithm then the no argument form of create is used.`]
			],
			[/* parameters */
				[/* parameter */ 'seed', [/* parameter description */
					[/* text */ 't', `long random seed value.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `new in instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', `.`]
			]
		]]
	],
	/* enum values */ UDF
]);
