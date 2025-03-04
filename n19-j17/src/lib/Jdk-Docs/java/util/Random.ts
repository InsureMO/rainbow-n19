import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Random', [
	[/* class description */
		[/* text */ 't', `An instance of this class is used to generate a stream of
 pseudorandom numbers; its period is only 2`],
		[/* text */ 't', `48`, 'sup'],
		[/* text */ 't', `.
 The class uses a 48-bit seed, which is
 modified using a linear congruential formula. (See Donald E. Knuth,
 `],
		[/* text */ 't', `The Art of Computer Programming, Volume 2, Third
 edition: Seminumerical Algorithms`],
		[/* text */ 't', `, Section 3.2.1.)
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 If two instances of `],
			[/* inline code block */ 'i', `Random`],
			[/* text */ 't', ` are created with the same
 seed, and the same sequence of method calls is made for each, they
 will generate and return identical sequences of numbers. In order to
 guarantee this property, particular algorithms are specified for the
 class `],
			[/* inline code block */ 'i', `Random`],
			[/* text */ 't', `. Java implementations must use all the algorithms
 shown here for the class `],
			[/* inline code block */ 'i', `Random`],
			[/* text */ 't', `, for the sake of absolute
 portability of Java code. However, subclasses of class `],
			[/* inline code block */ 'i', `Random`],
			[/* text */ 't', `
 are permitted to use other algorithms, so long as they adhere to the
 general contracts for all the methods.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The algorithms implemented by class `],
			[/* inline code block */ 'i', `Random`],
			[/* text */ 't', ` use a
 `],
			[/* inline code block */ 'i', `protected`],
			[/* text */ 't', ` utility method that on each invocation can supply
 up to 32 pseudorandomly generated bits.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Many applications will find the method `],
			[/* reference */ 'r', `java.Math#random()`],
			[/* text */ 't', ` simpler to use.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Instances of `],
			[/* inline code block */ 'i', `java.util.Random`],
			[/* text */ 't', ` are threadsafe.
 However, the concurrent use of the same `],
			[/* inline code block */ 'i', `java.util.Random`],
			[/* text */ 't', `
 instance across threads may encounter contention and consequent
 poor performance. Consider instead using
 `],
			[/* reference */ 'r', `java.util.concurrent.ThreadLocalRandom`],
			[/* text */ 't', ` in multithreaded
 designs.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Instances of `],
			[/* inline code block */ 'i', `java.util.Random`],
			[/* text */ 't', ` are not cryptographically
 secure.  Consider instead using `],
			[/* reference */ 'r', `java.security.SecureRandom`],
			[/* text */ 't', ` to
 get a cryptographically secure pseudo-random number generator for use
 by security-sensitive applications.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a new random number generator. This constructor sets
 the seed of the random number generator to a value very likely
 to be distinct from any other invocation of this constructor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(long)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new random number generator using a single `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` seed.
 The seed is the initial value of the internal state of the pseudorandom
 number generator which is maintained by method `],
				[/* reference */ 'r', `#next(int)`, `next(int)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'seed', [/* parameter description */
					[/* text */ 't', `the initial seed`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'next(int)', [
			[/* method description */
				[/* text */ 't', `Generates the next pseudorandom number. Subclasses should
 override this, as this is used by all other methods.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The general contract of `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', ` is that it returns an
 `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value and if the argument `],
					[/* inline code block */ 'i', `bits`],
					[/* text */ 't', ` is between
 `],
					[/* inline code block */ 'i', `1`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `32`],
					[/* text */ 't', ` (inclusive), then that many low-order
 bits of the returned value will be (approximately) independently
 chosen bit values, each of which is (approximately) equally
 likely to be `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `1`],
					[/* text */ 't', `. The method `],
					[/* inline code block */ 'i', `next`],
					[/* text */ 't', ` is
 implemented by class `],
					[/* inline code block */ 'i', `Random`],
					[/* text */ 't', ` by atomically updating the seed to
  `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(seed * 0x5DEECE66DL + 0xBL) & ((1L << 48) - 1)`]
				]],
				[/* text */ 't', `
 and returning
  `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(int)(seed >>> (48 - bits))`],
					[/* text */ 't', `.`]
				]],
				[/* text */ 't', `

 This is a linear congruential pseudorandom number generator, as
 defined by D. H. Lehmer and described by Donald E. Knuth in
 `],
				[/* text */ 't', `The Art of Computer Programming, Volume 2, Third edition:
 Seminumerical Algorithms`],
				[/* text */ 't', `, section 3.2.1.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'bits', [/* parameter description */
					[/* text */ 't', `random bits`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the next pseudorandom value from this random number
         generator's sequence`]
			]
		]],
		[/* method */ 'nextBoolean()', [
			[/* method description */
				[/* text */ 't', `Returns the next pseudorandom, uniformly distributed
 `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value from this random number generator's
 sequence. The general contract of `],
				[/* inline code block */ 'i', `nextBoolean`],
				[/* text */ 't', ` is that one
 `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value is pseudorandomly generated and returned.  The
 values `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` are produced with
 (approximately) equal probability.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the next pseudorandom, uniformly distributed
         `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value from this random number generator's
         sequence`]
			]
		]],
		[/* method */ 'nextDouble()', [
			[/* method description */
				[/* text */ 't', `Returns the next pseudorandom, uniformly distributed
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value between `],
				[/* inline code block */ 'i', `0.0`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `1.0`],
				[/* text */ 't', ` from this random number generator's sequence.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The general contract of `],
					[/* inline code block */ 'i', `nextDouble`],
					[/* text */ 't', ` is that one
 `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value, chosen (approximately) uniformly from the
 range `],
					[/* inline code block */ 'i', `0.0d`],
					[/* text */ 't', ` (inclusive) to `],
					[/* inline code block */ 'i', `1.0d`],
					[/* text */ 't', ` (exclusive), is
 pseudorandomly generated and returned.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the next pseudorandom, uniformly distributed `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `
         value between `],
				[/* inline code block */ 'i', `0.0`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `1.0`],
				[/* text */ 't', ` from this
         random number generator's sequence`]
			]
		]],
		[/* method */ 'nextFloat()', [
			[/* method description */
				[/* text */ 't', `Returns the next pseudorandom, uniformly distributed `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `
 value between `],
				[/* inline code block */ 'i', `0.0`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `1.0`],
				[/* text */ 't', ` from this random
 number generator's sequence.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The general contract of `],
					[/* inline code block */ 'i', `nextFloat`],
					[/* text */ 't', ` is that one
 `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` value, chosen (approximately) uniformly from the
 range `],
					[/* inline code block */ 'i', `0.0f`],
					[/* text */ 't', ` (inclusive) to `],
					[/* inline code block */ 'i', `1.0f`],
					[/* text */ 't', ` (exclusive), is
 pseudorandomly generated and returned. All 2`],
					[/* text */ 't', `24`, 'sup'],
					[/* text */ 't', ` possible
 `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` values of the form `],
					[/* text */ 't', `m x `],
					[/* text */ 't', `2`],
					[/* text */ 't', `-24`, 'sup'],
					[/* text */ 't', `,
 where `],
					[/* text */ 't', `m`],
					[/* text */ 't', ` is a positive integer less than 2`],
					[/* text */ 't', `24`, 'sup'],
					[/* text */ 't', `, are
 produced with (approximately) equal probability.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the next pseudorandom, uniformly distributed `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `
         value between `],
				[/* inline code block */ 'i', `0.0`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `1.0`],
				[/* text */ 't', ` from this
         random number generator's sequence`]
			]
		]],
		[/* method */ 'nextInt()', [
			[/* method description */
				[/* text */ 't', `Returns the next pseudorandom, uniformly distributed `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `
 value from this random number generator's sequence. The general
 contract of `],
				[/* inline code block */ 'i', `nextInt`],
				[/* text */ 't', ` is that one `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value is
 pseudorandomly generated and returned. All 2`],
				[/* text */ 't', `32`, 'sup'],
				[/* text */ 't', ` possible
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values are produced with (approximately) equal probability.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the next pseudorandom, uniformly distributed `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `
         value from this random number generator's sequence`]
			]
		]],
		[/* method */ 'nextInt(int)', [
			[/* method description */
				[/* text */ 't', `Returns a pseudorandom, uniformly distributed `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value
 between 0 (inclusive) and the specified value (exclusive), drawn from
 this random number generator's sequence.  The general contract of
 `],
				[/* inline code block */ 'i', `nextInt`],
				[/* text */ 't', ` is that one `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value in the specified range
 is pseudorandomly generated and returned.  All `],
				[/* inline code block */ 'i', `bound`],
				[/* text */ 't', ` possible
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values are produced with (approximately) equal
 probability.`]
			],
			[/* parameters */
				[/* parameter */ 'bound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive).  Must be positive.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if bound is not positive`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next pseudorandom, uniformly distributed `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `
         value between zero (inclusive) and `],
				[/* inline code block */ 'i', `bound`],
				[/* text */ 't', ` (exclusive)
         from this random number generator's sequence`]
			]
		]],
		[/* method */ 'doubles()', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of pseudorandom `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values, each between zero (inclusive) and one
 (exclusive).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A pseudorandom `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value is generated as if it's the result
 of calling the method `],
					[/* reference */ 'r', `#nextDouble()`, `nextDouble()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream of pseudorandom `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values`]
			]
		]],
		[/* method */ 'doubles(double,double)', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of pseudorandom `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values, each conforming to the given origin (inclusive) and bound
 (exclusive).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A pseudorandom `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value is generated as if it's the result
 of calling the following method with the origin and bound:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `double nextDouble(double origin, double bound) {
   double r = nextDouble();
   r = r * (bound - origin) + origin;
   if (r >= bound) // correct for rounding
     r = Math.nextDown(bound);
   return r;
 }`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'randomNumberOrigin', [/* parameter description */
					[/* text */ 't', `the origin (inclusive) of each random value`]
				]],
				[/* parameter */ 'randomNumberBound', [/* parameter description */
					[/* text */ 't', `the bound (exclusive) of each random value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `randomNumberOrigin`],
					[/* text */ 't', `
         is greater than or equal to `],
					[/* inline code block */ 'i', `randomNumberBound`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a stream of pseudorandom `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values,
         each with the given origin (inclusive) and bound (exclusive)`]
			]
		]],
		[/* method */ 'doubles(long)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number of
 pseudorandom `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values, each between zero
 (inclusive) and one (exclusive).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A pseudorandom `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value is generated as if it's the result
 of calling the method `],
					[/* reference */ 'r', `#nextDouble()`, `nextDouble()`],
					[/* text */ 't', `.`]
				]]
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
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values`]
			]
		]],
		[/* method */ 'doubles(long,double,double)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number of
 pseudorandom `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values, each conforming to the given origin
 (inclusive) and bound (exclusive).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A pseudorandom `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value is generated as if it's the result
 of calling the following method with the origin and bound:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `double nextDouble(double origin, double bound) {
   double r = nextDouble();
   r = r * (bound - origin) + origin;
   if (r >= bound) // correct for rounding
     r = Math.nextDown(bound);
   return r;
 }`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'streamSize', [/* parameter description */
					[/* text */ 't', `the number of values to generate`]
				]],
				[/* parameter */ 'randomNumberOrigin', [/* parameter description */
					[/* text */ 't', `the origin (inclusive) of each random value`]
				]],
				[/* parameter */ 'randomNumberBound', [/* parameter description */
					[/* text */ 't', `the bound (exclusive) of each random value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `streamSize`],
					[/* text */ 't', ` is less than zero,
         or `],
					[/* inline code block */ 'i', `randomNumberOrigin`],
					[/* text */ 't', ` is not finite,
         or `],
					[/* inline code block */ 'i', `randomNumberBound`],
					[/* text */ 't', ` is not finite, or `],
					[/* inline code block */ 'i', `randomNumberOrigin`],
					[/* text */ 't', `
         is greater than or equal to `],
					[/* inline code block */ 'i', `randomNumberBound`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a stream of pseudorandom `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values,
         each with the given origin (inclusive) and bound (exclusive)`]
			]
		]],
		[/* method */ 'ints()', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of pseudorandom `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `
 values.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A pseudorandom `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value is generated as if it's the result of
 calling the method `],
					[/* reference */ 'r', `#nextInt()`, `nextInt()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream of pseudorandom `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values`]
			]
		]],
		[/* method */ 'ints(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of pseudorandom `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values, each conforming to the given origin (inclusive) and bound
 (exclusive).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A pseudorandom `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value is generated as if it's the result of
 calling the following method with the origin and bound:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `int nextInt(int origin, int bound) {
   int n = bound - origin;
   if (n > 0) {
     return nextInt(n) + origin;
   }
   else {  // range not representable as int
     int r;
     do {
       r = nextInt();
     } while (r < origin || r >= bound);
     return r;
   }
 }`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'randomNumberOrigin', [/* parameter description */
					[/* text */ 't', `the origin (inclusive) of each random value`]
				]],
				[/* parameter */ 'randomNumberBound', [/* parameter description */
					[/* text */ 't', `the bound (exclusive) of each random value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `randomNumberOrigin`],
					[/* text */ 't', `
         is greater than or equal to `],
					[/* inline code block */ 'i', `randomNumberBound`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a stream of pseudorandom `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values,
         each with the given origin (inclusive) and bound (exclusive)`]
			]
		]],
		[/* method */ 'ints(long)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number of
 pseudorandom `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A pseudorandom `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value is generated as if it's the result of
 calling the method `],
					[/* reference */ 'r', `#nextInt()`, `nextInt()`],
					[/* text */ 't', `.`]
				]]
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
				[/* text */ 't', `a stream of pseudorandom `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values`]
			]
		]],
		[/* method */ 'ints(long,int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number
 of pseudorandom `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values, each conforming to the given
 origin (inclusive) and bound (exclusive).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A pseudorandom `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value is generated as if it's the result of
 calling the following method with the origin and bound:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `int nextInt(int origin, int bound) {
   int n = bound - origin;
   if (n > 0) {
     return nextInt(n) + origin;
   }
   else {  // range not representable as int
     int r;
     do {
       r = nextInt();
     } while (r < origin || r >= bound);
     return r;
   }
 }`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'streamSize', [/* parameter description */
					[/* text */ 't', `the number of values to generate`]
				]],
				[/* parameter */ 'randomNumberOrigin', [/* parameter description */
					[/* text */ 't', `the origin (inclusive) of each random value`]
				]],
				[/* parameter */ 'randomNumberBound', [/* parameter description */
					[/* text */ 't', `the bound (exclusive) of each random value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `streamSize`],
					[/* text */ 't', ` is
         less than zero, or `],
					[/* inline code block */ 'i', `randomNumberOrigin`],
					[/* text */ 't', `
         is greater than or equal to `],
					[/* inline code block */ 'i', `randomNumberBound`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a stream of pseudorandom `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values,
         each with the given origin (inclusive) and bound (exclusive)`]
			]
		]],
		[/* method */ 'longs()', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of pseudorandom `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 values.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A pseudorandom `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value is generated as if it's the result
 of calling the method `],
					[/* reference */ 'r', `#nextLong()`, `nextLong()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream of pseudorandom `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values`]
			]
		]],
		[/* method */ 'longs(long)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number of
 pseudorandom `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A pseudorandom `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value is generated as if it's the result
 of calling the method `],
					[/* reference */ 'r', `#nextLong()`, `nextLong()`],
					[/* text */ 't', `.`]
				]]
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
				[/* text */ 't', `a stream of pseudorandom `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values`]
			]
		]],
		[/* method */ 'longs(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of pseudorandom `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values, each conforming to the given origin (inclusive) and bound
 (exclusive).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A pseudorandom `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value is generated as if it's the result
 of calling the following method with the origin and bound:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `long nextLong(long origin, long bound) {
   long r = nextLong();
   long n = bound - origin, m = n - 1;
   if ((n & m) == 0L)  // power of two
     r = (r & m) + origin;
   else if (n > 0L) {  // reject over-represented candidates
     for (long u = r >>> 1;            // ensure nonnegative
          u + m - (r = u % n) < 0L;    // rejection check
          u = nextLong() >>> 1) // retry
         ;
     r += origin;
   }
   else {              // range not representable as long
     while (r < origin || r >= bound)
       r = nextLong();
   }
   return r;
 }`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'randomNumberOrigin', [/* parameter description */
					[/* text */ 't', `the origin (inclusive) of each random value`]
				]],
				[/* parameter */ 'randomNumberBound', [/* parameter description */
					[/* text */ 't', `the bound (exclusive) of each random value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `randomNumberOrigin`],
					[/* text */ 't', `
         is greater than or equal to `],
					[/* inline code block */ 'i', `randomNumberBound`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a stream of pseudorandom `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values,
         each with the given origin (inclusive) and bound (exclusive)`]
			]
		]],
		[/* method */ 'longs(long,long,long)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number of
 pseudorandom `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `, each conforming to the given origin
 (inclusive) and bound (exclusive).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A pseudorandom `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value is generated as if it's the result
 of calling the following method with the origin and bound:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `long nextLong(long origin, long bound) {
   long r = nextLong();
   long n = bound - origin, m = n - 1;
   if ((n & m) == 0L)  // power of two
     r = (r & m) + origin;
   else if (n > 0L) {  // reject over-represented candidates
     for (long u = r >>> 1;            // ensure nonnegative
          u + m - (r = u % n) < 0L;    // rejection check
          u = nextLong() >>> 1) // retry
         ;
     r += origin;
   }
   else {              // range not representable as long
     while (r < origin || r >= bound)
       r = nextLong();
   }
   return r;
 }`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'streamSize', [/* parameter description */
					[/* text */ 't', `the number of values to generate`]
				]],
				[/* parameter */ 'randomNumberOrigin', [/* parameter description */
					[/* text */ 't', `the origin (inclusive) of each random value`]
				]],
				[/* parameter */ 'randomNumberBound', [/* parameter description */
					[/* text */ 't', `the bound (exclusive) of each random value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `streamSize`],
					[/* text */ 't', ` is
         less than zero, or `],
					[/* inline code block */ 'i', `randomNumberOrigin`],
					[/* text */ 't', `
         is greater than or equal to `],
					[/* inline code block */ 'i', `randomNumberBound`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a stream of pseudorandom `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values,
         each with the given origin (inclusive) and bound (exclusive)`]
			]
		]],
		[/* method */ 'nextLong()', [
			[/* method description */
				[/* text */ 't', `Returns the next pseudorandom, uniformly distributed `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 value from this random number generator's sequence. The general
 contract of `],
				[/* inline code block */ 'i', `nextLong`],
				[/* text */ 't', ` is that one `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value is
 pseudorandomly generated and returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the next pseudorandom, uniformly distributed `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
         value from this random number generator's sequence`]
			]
		]],
		[/* method */ 'nextGaussian()', [
			[/* method description */
				[/* text */ 't', `Returns the next pseudorandom, Gaussian ("normally") distributed
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value with mean `],
				[/* inline code block */ 'i', `0.0`],
				[/* text */ 't', ` and standard
 deviation `],
				[/* inline code block */ 'i', `1.0`],
				[/* text */ 't', ` from this random number generator's sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The general contract of `],
					[/* inline code block */ 'i', `nextGaussian`],
					[/* text */ 't', ` is that one
 `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value, chosen from (approximately) the usual
 normal distribution with mean `],
					[/* inline code block */ 'i', `0.0`],
					[/* text */ 't', ` and standard deviation
 `],
					[/* inline code block */ 'i', `1.0`],
					[/* text */ 't', `, is pseudorandomly generated and returned.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the next pseudorandom, Gaussian ("normally") distributed
         `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value with mean `],
				[/* inline code block */ 'i', `0.0`],
				[/* text */ 't', ` and
         standard deviation `],
				[/* inline code block */ 'i', `1.0`],
				[/* text */ 't', ` from this random number
         generator's sequence`]
			]
		]],
		[/* method */ 'setSeed(long)', [
			[/* method description */
				[/* text */ 't', `Sets the seed of this random number generator using a single
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` seed. The general contract of `],
				[/* inline code block */ 'i', `setSeed`],
				[/* text */ 't', ` is
 that it alters the state of this random number generator object
 so as to be in exactly the same state as if it had just been
 created with the argument `],
				[/* inline code block */ 'i', `seed`],
				[/* text */ 't', ` as a seed. The method
 `],
				[/* inline code block */ 'i', `setSeed`],
				[/* text */ 't', ` is implemented by class `],
				[/* inline code block */ 'i', `Random`],
				[/* text */ 't', ` by
 atomically updating the seed to
  `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `(seed ^ 0x5DEECE66DL) & ((1L << 48) - 1)`]
				]],
				[/* text */ 't', `
 and clearing the `],
				[/* inline code block */ 'i', `haveNextNextGaussian`],
				[/* text */ 't', ` flag used by `],
				[/* reference */ 'r', `#nextGaussian()`, `nextGaussian()`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The implementation of `],
					[/* inline code block */ 'i', `setSeed`],
					[/* text */ 't', ` by class `],
					[/* inline code block */ 'i', `Random`],
					[/* text */ 't', `
 happens to use only 48 bits of the given seed. In general, however,
 an overriding method may use all 64 bits of the `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `
 argument as a seed value.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'seed', [/* parameter description */
					[/* text */ 't', `the initial seed`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'nextBytes(byte[])', [
			[/* method description */
				[/* text */ 't', `Generates random bytes and places them into a user-supplied
 byte array.  The number of random bytes produced is equal to
 the length of the byte array.`]
			],
			[/* parameters */
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `the byte array to fill with random bytes`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the byte array is null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
