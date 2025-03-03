import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.random.RandomGeneratorFactory', [
	[/* class description */
		[/* text */ 't', `This is a factory class for generating multiple random number generators
 of a specific `],
		[/* reference */ 'r', `.package-summary#algorithms`],
		[/* text */ 't', `.
 `],
		[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`],
		[/* text */ 't', ` also provides
 methods for selecting random number generator algorithms.

 A specific `],
		[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`],
		[/* text */ 't', ` can be located by using the
 `],
		[/* reference */ 'r', `#of(java.lang.String)`, `of(String)`],
		[/* text */ 't', ` method, where the argument string
 is the name of the `],
		[/* reference */ 'r', `.package-summary#algorithms`],
		[/* text */ 't', `
 required. The method
 `],
		[/* reference */ 'r', `#all()`, `all()`],
		[/* text */ 't', ` produces a non-empty `],
		[/* reference */ 'r', `java.util.stream.Stream`],
		[/* text */ 't', ` of all available
 `],
		[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`],
		[/* text */ 't', ` that can be searched
 to locate a `],
		[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`],
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
		[/* reference */ 'r', `.package-summary#algorithms`],
		[/* text */ 't', `.
 These methods are typically used in
 conjunction with `],
		[/* reference */ 'r', `#all()`, `all()`],
		[/* text */ 't', `. In this example, the code
 locates the `],
		[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`],
		[/* text */ 't', ` that produces
 `],
		[/* reference */ 'r', `java.util.random.RandomGenerator`],
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
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'name()', [
			[/* method description */
				[/* text */ 't', `Return the name of the `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', `
 used by the random number generator.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `Name of the `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'group()', [
			[/* method description */
				[/* text */ 't', `Return the group name of the `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', `
 used by the random number generator.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `Group name of the `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getDefault()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`],
				[/* text */ 't', ` meeting the minimal requirement
 of having an algorithm whose state bits are greater than or equal 64.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`]
			]
		]],
		[/* method */ 'of(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`],
				[/* text */ 't', ` that can produce instances of
 `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`],
				[/* text */ 't', ` that utilize the `],
				[/* inline code block */ 'i', `name`],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `Name of random number generator
 `],
					[/* reference */ 'r', `.package-summary#algorithms`]
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
				[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`],
				[/* text */ 't', ` of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`]
			]
		]],
		[/* method */ 'create()', [
			[/* method description */
				[/* text */ 't', `Create an instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`],
				[/* text */ 't', ` based on
 `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', ` chosen.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `new in instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'create(byte[])', [
			[/* method description */
				[/* text */ 't', `Create an instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`],
				[/* text */ 't', ` based on
 `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', ` chosen
 providing a starting byte[] seed. If byte[] seed is not supported by an
 `],
				[/* reference */ 'r', `.package-summary#algorithms`],
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
				[/* reference */ 'r', `java.util.random.RandomGenerator`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'create(long)', [
			[/* method description */
				[/* text */ 't', `Create an instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`],
				[/* text */ 't', ` based on
 `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', ` chosen
 providing a starting long seed. If long seed is not supported by an
 algorithm then the no argument form of create is used.`]
			],
			[/* parameters */
				[/* parameter */ 'seed', [/* parameter description */
					[/* text */ 't', `long random seed value.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `new in instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'all()', [
			[/* method description */
				[/* text */ 't', `Returns a non-empty stream of available `],
				[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`],
				[/* text */ 't', `.

 RandomGenerators that are marked as deprecated are not included in the result.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a non-empty stream of all available `],
				[/* reference */ 'r', `java.util.random.RandomGeneratorFactory`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'isDeprecated()', [
			[/* method description */
				[/* text */ 't', `Return true if the implementation of RandomGenerator (algorithm) has been
 marked for deprecation.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the implementation of RandomGenerator (algorithm) has been
         marked for deprecation`]
			]
		]],
		[/* method */ 'equidistribution()', [
			[/* method description */
				[/* text */ 't', `Returns the equidistribution of the `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the equidistribution of the `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'period()', [
			[/* method description */
				[/* text */ 't', `Return the period of the `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', `
 used by the random number generator.
 Returns BigInteger.ZERO if period is not determinable.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `BigInteger period.`]
			]
		]],
		[/* method */ 'isHardware()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator uses a hardware device (HRNG) to produce
 entropic input.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if random generator is generated by hardware.`]
			]
		]],
		[/* method */ 'isStochastic()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator is computed using external or entropic
 sources as inputs.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if random generator is stochastic.`]
			]
		]],
		[/* method */ 'stateBits()', [
			[/* method description */
				[/* text */ 't', `Returns number of bits used by the `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', `
 to maintain state of seed.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `number of bits used by the `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', `
         to maintain state of seed.`]
			]
		]],
		[/* method */ 'isStatistical()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator is computed using an arithmetic
 `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', `
 and is statistically deterministic.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if random generator is statistical.`]
			]
		]],
		[/* method */ 'isArbitrarilyJumpable()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator can jump an arbitrarily specified distant
 point in the state cycle.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if random generator is arbitrarily jumpable.`]
			]
		]],
		[/* method */ 'isJumpable()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator can jump a specified distant point in
 the state cycle.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if random generator is jumpable.`]
			]
		]],
		[/* method */ 'isLeapable()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator is jumpable and can leap to a very distant
 point in the state cycle.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if random generator is leapable.`]
			]
		]],
		[/* method */ 'isSplittable()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator can be cloned into a separate object with
 the same properties but positioned further in the state cycle.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if random generator is splittable.`]
			]
		]],
		[/* method */ 'isStreamable()', [
			[/* method description */
				[/* text */ 't', `Return true if random generator can be used to create
 `],
				[/* reference */ 'r', `java.util.stream.Stream`],
				[/* text */ 't', ` of random numbers.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if random generator is streamable.`]
			]
		]]
	],
]);
