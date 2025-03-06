import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.random.RandomGenerator$SplittableGenerator', [
	[/* class description */
		[/* text */ 't', `This interface is designed to provide a common protocol for objects that
 generate sequences of pseudorandom values and can be `],
		[/* text */ 't', `split`],
		[/* text */ 't', ` into
 two objects (the original one and a new one) each of which obey that same
 protocol (and therefore can be recursively split indefinitely).

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Ideally, all `],
			[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
			[/* text */ 't', ` objects produced by
 recursive splitting from a single original `],
			[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
			[/* text */ 't', `
 object are statistically independent of one another and individually
 uniform. Therefore we would expect the set of values collectively
 generated by a set of such objects to have the same statistical
 properties as if the same quantity of values were generated by a single
 thread using a single `],
			[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
			[/* text */ 't', ` object. In practice,
 one must settle for some approximation to independence and uniformity.

 `]
		]],
		[/* block */ 'b', ` Methods are provided to perform a single splitting operation and also
 to produce a stream of generators split off from the original (by either
 iterative or recursive splitting, or a combination).

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Objects that implement `],
			[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
			[/* text */ 't', ` are typically not
 cryptographically secure. Consider instead using `],
			[/* reference */ 'r', `java.security.SecureRandom`, `SecureRandom`],
			[/* text */ 't', ` to
 get a cryptographically secure pseudo-random number generator for use by
 security-sensitive applications.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'split()', [
			[/* method description */
				[/* text */ 't', `Returns a new pseudorandom number generator, split off from this one,
 that implements the `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
				[/* text */ 't', ` interfaces.

 `],
				[/* block */ 'b', ` This pseudorandom number generator may be used as a source of
 pseudorandom bits used to initialize the state of the new one.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new object that implements the `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', ` and
         `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
				[/* text */ 't', ` interfaces`]
			]
		]],
		[/* method */ 'split(java.util.random.RandomGenerator.SplittableGenerator)', [
			[/* method description */
				[/* text */ 't', `Returns a new pseudorandom number generator, split off from this one,
 that implements the `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
				[/* text */ 't', ` interfaces.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
					[/* text */ 't', ` instance to be used instead
               of this one as a source of pseudorandom bits used to
               initialize the state of the new ones.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if source is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object that implements the `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', ` and
         `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
				[/* text */ 't', ` interfaces`]
			]
		]],
		[/* method */ 'splits(java.util.random.RandomGenerator.SplittableGenerator)', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of new pseudorandom number
 generators, each of which implements the `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
				[/* text */ 't', `
 interface.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
					[/* text */ 't', ` instance to be used instead
               of this one as a source of pseudorandom bits used to
               initialize the state of the new ones.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if source is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a stream of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
				[/* text */ 't', ` objects`]
			]
		]],
		[/* method */ 'splits(long)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number of new
 pseudorandom number generators, each of which implements the
 `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
				[/* text */ 't', ` interface.

 `],
				[/* block */ 'b', ` This pseudorandom number generator may be used as a source of
 pseudorandom bits used to initialize the state the new ones.`]
			],
			[/* parameters */
				[/* parameter */ 'streamSize', [/* parameter description */
					[/* text */ 't', `the number of values to generate`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `streamSize`],
					[/* text */ 't', ` is
         less than zero`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a stream of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
				[/* text */ 't', ` objects`]
			]
		]],
		[/* method */ 'splits(long,java.util.random.RandomGenerator.SplittableGenerator)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number of new
 pseudorandom number generators, each of which implements the
 `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
				[/* text */ 't', ` interface.`]
			],
			[/* parameters */
				[/* parameter */ 'streamSize', [/* parameter description */
					[/* text */ 't', `the number of values to generate`]
				]],
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
					[/* text */ 't', ` instance to be used instead
               of this one as a source of pseudorandom bits used to
               initialize the state of the new ones.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `streamSize`],
					[/* text */ 't', ` is
         less than zero`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if source is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a stream of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
				[/* text */ 't', ` objects`]
			]
		]],
		[/* method */ 'splits()', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of new pseudorandom number
 generators, each of which implements the `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
				[/* text */ 't', `
 interface.

 `],
				[/* block */ 'b', ` This pseudorandom number generator may be used as a source of
 pseudorandom bits used to initialize the state the new ones.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
				[/* text */ 't', ` objects`]
			]
		]],
		[/* method */ 'rngs()', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of new pseudorandom number
 generators, each of which implements the `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', `
 interface. Ideally the generators in the stream will appear to be
 statistically independent.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream of objects that implement the `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', ` interface`]
			]
		]],
		[/* method */ 'rngs(long)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number of new
 pseudorandom number generators, each of which implements the
 `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', ` interface. Ideally the generators in the
 stream will appear to be statistically independent.`]
			],
			[/* parameters */
				[/* parameter */ 'streamSize', [/* parameter description */
					[/* text */ 't', `the number of generators to generate`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `streamSize`],
					[/* text */ 't', ` is
         less than zero`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a stream of objects that implement the `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`, `RandomGenerator`],
				[/* text */ 't', ` interface`]
			]
		]],
		[/* method */ 'of(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns an instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`],
				[/* text */ 't', ` that utilizes the
 `],
				[/* inline code block */ 'i', `name`],
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
				[/* text */ 't', `An instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`, `RandomGenerator.SplittableGenerator`]
			]
		]]
	],
]);
