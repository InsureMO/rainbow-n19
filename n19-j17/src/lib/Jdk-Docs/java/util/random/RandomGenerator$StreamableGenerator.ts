import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.random.RandomGenerator$StreamableGenerator', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* reference */ 'r', `java.util.random.RandomGenerator.StreamableGenerator`],
		[/* text */ 't', ` interface augments the
 `],
		[/* reference */ 'r', `java.util.random.RandomGenerator`],
		[/* text */ 't', ` interface to provide methods that return streams
 of `],
		[/* reference */ 'r', `java.util.random.RandomGenerator`],
		[/* text */ 't', ` objects. Ideally, such a stream of objects
 would have the property that the behavior of each object is statistically
 independent of all the others. In practice, one may have to settle for
 some approximation to this property.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A generator that implements interface `],
			[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`],
			[/* text */ 't', ` may
 choose to use its `],
			[/* reference */ 'r', `.RandomGenerator.SplittableGenerator#splits()`],
			[/* text */ 't', `() method to
 implement the `],
			[/* reference */ 'r', `#rngs()`, `rngs`],
			[/* text */ 't', `() method required by this
 interface.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A generator that implements interface `],
			[/* reference */ 'r', `java.util.random.RandomGenerator.JumpableGenerator`],
			[/* text */ 't', ` may
 choose to use its `],
			[/* reference */ 'r', `.RandomGenerator.JumpableGenerator#jumps()`],
			[/* text */ 't', `() method to implement the
 `],
			[/* reference */ 'r', `#rngs()`, `rngs`],
			[/* text */ 't', `() method required by this interface.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A generator that implements interface `],
			[/* reference */ 'r', `java.util.random.RandomGenerator.LeapableGenerator`],
			[/* text */ 't', ` may
 choose to use its `],
			[/* reference */ 'r', `.RandomGenerator.LeapableGenerator#leaps()`],
			[/* text */ 't', `() method to
 implement the `],
			[/* reference */ 'r', `#rngs()`, `rngs`],
			[/* text */ 't', `() method required by this
 interface.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Objects that implement `],
			[/* reference */ 'r', `java.util.random.RandomGenerator.StreamableGenerator`],
			[/* text */ 't', ` are typically not
 cryptographically secure. Consider instead using `],
			[/* reference */ 'r', `java.security.SecureRandom`],
			[/* text */ 't', ` to
 get a cryptographically secure pseudo-random number generator for use by
 security-sensitive applications.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'rngs()', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of objects, each of which
 implements the `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`],
				[/* text */ 't', ` interface. Ideally the
 generators in the stream will appear to be statistically independent.
 The new generators are of the same
 `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', ` as this generator.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream of objects that implement the `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`],
				[/* text */ 't', ` interface`]
			]
		]],
		[/* method */ 'rngs(long)', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of objects, each of which
 implements the `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`],
				[/* text */ 't', ` interface. Ideally the
 generators in the stream will appear to be statistically independent.
 The new generators are of the same
 `],
				[/* reference */ 'r', `.package-summary#algorithms`],
				[/* text */ 't', ` as this generator.`]
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
				[/* reference */ 'r', `java.util.random.RandomGenerator`],
				[/* text */ 't', ` interface`]
			]
		]],
		[/* method */ 'of(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns an instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.StreamableGenerator`],
				[/* text */ 't', ` that utilizes the
 `],
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
				[/* text */ 't', `An instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator.StreamableGenerator`]
			]
		]]
	],
]);
