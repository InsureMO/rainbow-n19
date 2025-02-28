import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.random.RandomGenerator', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* reference */ 'r', `java.util.random.RandomGenerator`],
		[/* text */ 't', ` interface is designed to provide a common
 protocol for objects that generate random or (more typically) pseudorandom
 sequences of numbers (or Boolean values). Such a sequence may be obtained by
 either repeatedly invoking a method that returns a single pseudorandomly
 chosen value, or by invoking a method that returns a stream of
 pseudorandomly chosen values.

 `],
		[/* block */ 'b', ` Ideally, given an implicitly or explicitly specified range of values,
 each value would be chosen independently and uniformly from that range. In
 practice, one may have to settle for some approximation to independence and
 uniformity.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` In the case of `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `boolean`],
			[/* text */ 't', ` values, if
 there is no explicit specification of range, then the range includes all
 possible values of the type. In the case of `],
			[/* inline code block */ 'i', `float`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `double`],
			[/* text */ 't', `
 values, first a value is always chosen uniformly from the set of
 2`],
			[/* text */ 't', `w`, 'sup'],
			[/* text */ 't', ` values between 0.0 (inclusive) and 1.0 (exclusive),
 where `],
			[/* text */ 't', `w`],
			[/* text */ 't', ` is 23 for `],
			[/* inline code block */ 'i', `float`],
			[/* text */ 't', ` values and 52 for `],
			[/* inline code block */ 'i', `double`],
			[/* text */ 't', `
 values, such that adjacent values differ by 2`],
			[/* text */ 't', `−w`, 'sup'],
			[/* text */ 't', `
 (notice that this set is a `],
			[/* text */ 't', `subset`],
			[/* text */ 't', ` of the set of
 `],
			[/* text */ 't', `all representable floating-point values`],
			[/* text */ 't', ` between 0.0 (inclusive) and 1.0 (exclusive));
 then if an explicit range was specified, then the chosen number is
 computationally scaled and translated so as to appear to have been chosen
 approximately uniformly from that explicit range.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Each method that returns a stream produces a stream of values each of
 which is chosen in the same manner as for a method that returns a single
 pseudorandomly chosen value. For example, if `],
			[/* inline code block */ 'i', `r`],
			[/* text */ 't', ` implements
 `],
			[/* reference */ 'r', `java.util.random.RandomGenerator`],
			[/* text */ 't', `, then the method call `],
			[/* inline code block */ 'i', `r.ints(100)`],
			[/* text */ 't', ` returns a
 stream of 100 `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', ` values. These are not necessarily the exact same
 values that would have been returned if instead `],
			[/* inline code block */ 'i', `r.nextInt()`],
			[/* text */ 't', ` had been
 called 100 times; all that is guaranteed is that each value in the stream is
 chosen in a similar pseudorandom manner from the same range.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Every object that implements the `],
			[/* reference */ 'r', `java.util.random.RandomGenerator`],
			[/* text */ 't', ` interface by
 using a pseudorandom algorithm is assumed to contain a finite amount of
 state. Using such an object to generate a pseudorandomly chosen value alters
 its state by computing a new state as a function of the current state,
 without reference to any information other than the current state. The number
 of distinct possible states of such an object is called its `],
			[/* text */ 't', `period`],
			[/* text */ 't', `.
 (Some implementations of the `],
			[/* reference */ 'r', `java.util.random.RandomGenerator`],
			[/* text */ 't', ` interface may be truly
 random rather than pseudorandom, for example relying on the statistical
 behavior of a physical object to derive chosen values. Such implementations
 do not have a fixed period.)

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` As a rule, objects that implement the `],
			[/* reference */ 'r', `java.util.random.RandomGenerator`],
			[/* text */ 't', ` interface
 need not be thread-safe. It is recommended that multithreaded applications
 use either `],
			[/* reference */ 'r', `java.util.concurrent.ThreadLocalRandom`],
			[/* text */ 't', ` or (preferably) pseudorandom number
 generators that implement the `],
			[/* reference */ 'r', `java.util.random.RandomGenerator.SplittableGenerator`],
			[/* text */ 't', ` or
 `],
			[/* reference */ 'r', `java.util.random.RandomGenerator.JumpableGenerator`],
			[/* text */ 't', ` interface.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Objects that implement `],
			[/* reference */ 'r', `java.util.random.RandomGenerator`],
			[/* text */ 't', ` are typically not
 cryptographically secure. Consider instead using `],
			[/* reference */ 'r', `java.security.SecureRandom`],
			[/* text */ 't', ` to get
 a cryptographically secure pseudorandom number generator for use by
 security-sensitive applications. Note, however, that `],
			[/* reference */ 'r', `java.security.SecureRandom`],
			[/* text */ 't', `
 does implement the `],
			[/* reference */ 'r', `java.util.random.RandomGenerator`],
			[/* text */ 't', ` interface, so that instances of
 `],
			[/* reference */ 'r', `java.security.SecureRandom`],
			[/* text */ 't', ` may be used interchangeably with other types of
 pseudorandom generators in applications that do not require a secure
 generator.

 `]
		]],
		[/* block */ 'b', `Unless explicit stated otherwise, the use of null for any method argument
 will cause a NullPointerException.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getDefault()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`],
				[/* text */ 't', ` meeting the minimal requirement
 of having an `],
				[/* external link */ 'a', `package-summary.html#algorithms`, `algorithm`],
				[/* text */ 't', `
 whose state bits are greater than or equal 64.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`]
			]
		]],
		[/* method */ 'of(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns an instance of `],
				[/* reference */ 'r', `java.util.random.RandomGenerator`],
				[/* text */ 't', ` that utilizes the
 `],
				[/* inline code block */ 'i', `name`],
				[/* external link */ 'a', `package-summary.html#algorithms`, `algorithm`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `Name of random number generator
              `],
					[/* external link */ 'a', `package-summary.html#algorithms`, `algorithm`]
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
				[/* reference */ 'r', `java.util.random.RandomGenerator`]
			]
		]],
		[/* method */ 'nextDouble(double)', [
			[/* method description */
				[/* text */ 't', `Returns a pseudorandomly chosen `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value between zero
 (inclusive) and the specified bound (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'bound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive) for the returned value.
        Must be positive and finite`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bound`],
					[/* text */ 't', ` is not
         both positive and finite`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a pseudorandomly chosen `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value between
         zero (inclusive) and the bound (exclusive)`]
			]
		]],
		[/* method */ 'nextDouble(double,double)', [
			[/* method description */
				[/* text */ 't', `Returns a pseudorandomly chosen `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value between the
 specified origin (inclusive) and the specified bound (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'origin', [/* parameter description */
					[/* text */ 't', `the least value that can be returned`]
				]],
				[/* parameter */ 'bound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive) for the returned value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `origin`],
					[/* text */ 't', ` is not finite,
         or `],
					[/* inline code block */ 'i', `bound`],
					[/* text */ 't', ` is not finite, or `],
					[/* inline code block */ 'i', `origin`],
					[/* text */ 't', `
         is greater than or equal to `],
					[/* inline code block */ 'i', `bound`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a pseudorandomly chosen `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value between the
         origin (inclusive) and the bound (exclusive)`]
			]
		]],
		[/* method */ 'nextDouble()', [
			[/* method description */
				[/* text */ 't', `Returns a pseudorandom `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value between zero (inclusive) and
 one (exclusive).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a pseudorandom `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value between zero (inclusive)
         and one (exclusive)`]
			]
		]],
		[/* method */ 'nextInt()', [
			[/* method description */
				[/* text */ 't', `Returns a pseudorandomly chosen `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a pseudorandomly chosen `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value`]
			]
		]],
		[/* method */ 'nextInt(int)', [
			[/* method description */
				[/* text */ 't', `Returns a pseudorandomly chosen `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value between zero
 (inclusive) and the specified bound (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'bound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive) for the returned value.
 Must be positive.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bound`],
					[/* text */ 't', ` is not positive`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a pseudorandomly chosen `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value between
         zero (inclusive) and the bound (exclusive)`]
			]
		]],
		[/* method */ 'nextInt(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a pseudorandomly chosen `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value between the specified
 origin (inclusive) and the specified bound (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'origin', [/* parameter description */
					[/* text */ 't', `the least value that can be returned`]
				]],
				[/* parameter */ 'bound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive) for the returned value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `origin`],
					[/* text */ 't', ` is greater than
         or equal to `],
					[/* inline code block */ 'i', `bound`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a pseudorandomly chosen `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value between the
         origin (inclusive) and the bound (exclusive)`]
			]
		]],
		[/* method */ 'doubles()', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of pseudorandomly chosen
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream of pseudorandomly chosen `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values`]
			]
		]],
		[/* method */ 'doubles(long)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number of
 pseudorandomly chosen `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values.`]
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
				[/* text */ 't', `a stream of pseudorandomly chosen `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values`]
			]
		]],
		[/* method */ 'doubles(long,double,double)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number of
 pseudorandomly chosen `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values, where each value is
 between the specified origin (inclusive) and the specified bound
 (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'streamSize', [/* parameter description */
					[/* text */ 't', `the number of values to generate`]
				]],
				[/* parameter */ 'randomNumberOrigin', [/* parameter description */
					[/* text */ 't', `the least value that can be produced`]
				]],
				[/* parameter */ 'randomNumberBound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive) for each value produced`]
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
				[/* text */ 't', `a stream of pseudorandomly chosen `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values, each between
         the specified origin (inclusive) and the specified bound (exclusive)`]
			]
		]],
		[/* method */ 'doubles(double,double)', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of pseudorandomly chosen
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values, where each value is between the specified origin
 (inclusive) and the specified bound (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'randomNumberOrigin', [/* parameter description */
					[/* text */ 't', `the least value that can be produced`]
				]],
				[/* parameter */ 'randomNumberBound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive) for each value produced`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
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
				[/* text */ 't', `a stream of pseudorandomly chosen `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values, each between
         the specified origin (inclusive) and the specified bound (exclusive)`]
			]
		]],
		[/* method */ 'ints()', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of pseudorandomly chosen
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream of pseudorandomly chosen `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values`]
			]
		]],
		[/* method */ 'ints(long)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number of
 pseudorandomly chosen `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values.`]
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
				[/* text */ 't', `a stream of pseudorandomly chosen `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values`]
			]
		]],
		[/* method */ 'ints(long,int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number of
 pseudorandomly chosen `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values, where each value is between
 the specified origin (inclusive) and the specified bound (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'streamSize', [/* parameter description */
					[/* text */ 't', `the number of values to generate`]
				]],
				[/* parameter */ 'randomNumberOrigin', [/* parameter description */
					[/* text */ 't', `the least value that can be produced`]
				]],
				[/* parameter */ 'randomNumberBound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive) for each value produced`]
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
				[/* text */ 't', `a stream of pseudorandomly chosen `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values, each between
         the specified origin (inclusive) and the specified bound (exclusive)`]
			]
		]],
		[/* method */ 'ints(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of pseudorandomly chosen
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values, where each value is between the specified origin
 (inclusive) and the specified bound (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'randomNumberOrigin', [/* parameter description */
					[/* text */ 't', `the least value that can be produced`]
				]],
				[/* parameter */ 'randomNumberBound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive) for each value produced`]
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
				[/* text */ 't', `a stream of pseudorandomly chosen `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values, each between
         the specified origin (inclusive) and the specified bound (exclusive)`]
			]
		]],
		[/* method */ 'longs(long)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number of
 pseudorandomly chosen `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values.`]
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
				[/* text */ 't', `a stream of pseudorandomly chosen `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values`]
			]
		]],
		[/* method */ 'longs(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of pseudorandomly chosen
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values, where each value is between the specified origin
 (inclusive) and the specified bound (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'randomNumberOrigin', [/* parameter description */
					[/* text */ 't', `the least value that can be produced`]
				]],
				[/* parameter */ 'randomNumberBound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive) for each value produced`]
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
				[/* text */ 't', `a stream of pseudorandomly chosen `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values, each between
         the specified origin (inclusive) and the specified bound (exclusive)`]
			]
		]],
		[/* method */ 'longs()', [
			[/* method description */
				[/* text */ 't', `Returns an effectively unlimited stream of pseudorandomly chosen
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a stream of pseudorandomly chosen `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values`]
			]
		]],
		[/* method */ 'longs(long,long,long)', [
			[/* method description */
				[/* text */ 't', `Returns a stream producing the given `],
				[/* inline code block */ 'i', `streamSize`],
				[/* text */ 't', ` number of
 pseudorandomly chosen `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values, where each value is between
 the specified origin (inclusive) and the specified bound (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'streamSize', [/* parameter description */
					[/* text */ 't', `the number of values to generate`]
				]],
				[/* parameter */ 'randomNumberOrigin', [/* parameter description */
					[/* text */ 't', `the least value that can be produced`]
				]],
				[/* parameter */ 'randomNumberBound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive) for each value produced`]
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
				[/* text */ 't', `a stream of pseudorandomly chosen `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values, each between
         the specified origin (inclusive) and the specified bound (exclusive)`]
			]
		]],
		[/* method */ 'nextLong(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns a pseudorandomly chosen `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value between the
 specified origin (inclusive) and the specified bound (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'origin', [/* parameter description */
					[/* text */ 't', `the least value that can be returned`]
				]],
				[/* parameter */ 'bound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive) for the returned value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `origin`],
					[/* text */ 't', ` is greater than
         or equal to `],
					[/* inline code block */ 'i', `bound`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a pseudorandomly chosen `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value between the
         origin (inclusive) and the bound (exclusive)`]
			]
		]],
		[/* method */ 'nextLong(long)', [
			[/* method description */
				[/* text */ 't', `Returns a pseudorandomly chosen `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value between zero
 (inclusive) and the specified bound (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'bound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive) for the returned value.
 Must be positive.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bound`],
					[/* text */ 't', ` is not positive`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a pseudorandomly chosen `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value between
         zero (inclusive) and the bound (exclusive)`]
			]
		]],
		[/* method */ 'nextLong()', [
			[/* method description */
				[/* text */ 't', `Returns a pseudorandomly chosen `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a pseudorandomly chosen `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value`]
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
		[/* method */ 'nextBoolean()', [
			[/* method description */
				[/* text */ 't', `Returns a pseudorandomly chosen `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The default implementation tests the high-order bit (sign bit) of a
 value produced by `],
					[/* reference */ 'r', `nextInt`],
					[/* text */ 't', `(), on the
 grounds that some algorithms for pseudorandom number generation produce
 values whose high-order bits have better statistical quality than the
 low-order bits.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a pseudorandomly chosen `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` value`]
			]
		]],
		[/* method */ 'nextBytes(byte[])', [
			[/* method description */
				[/* text */ 't', `Fills a user-supplied byte array with generated byte values
 pseudorandomly chosen uniformly from the range of values between -128
 (inclusive) and 127 (inclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `the byte array to fill with pseudorandom bytes`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if bytes is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'nextFloat()', [
			[/* method description */
				[/* text */ 't', `Returns a pseudorandom `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value between zero (inclusive) and
 one (exclusive).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a pseudorandom `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value between zero (inclusive) and one (exclusive)`]
			]
		]],
		[/* method */ 'nextFloat(float)', [
			[/* method description */
				[/* text */ 't', `Returns a pseudorandomly chosen `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value between zero
 (inclusive) and the specified bound (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'bound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive) for the returned value.
        Must be positive and finite`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `bound`],
					[/* text */ 't', ` is not
         both positive and finite`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a pseudorandomly chosen `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value between
         zero (inclusive) and the bound (exclusive)`]
			]
		]],
		[/* method */ 'nextFloat(float,float)', [
			[/* method description */
				[/* text */ 't', `Returns a pseudorandomly chosen `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value between the
 specified origin (inclusive) and the specified bound (exclusive).`]
			],
			[/* parameters */
				[/* parameter */ 'origin', [/* parameter description */
					[/* text */ 't', `the least value that can be returned`]
				]],
				[/* parameter */ 'bound', [/* parameter description */
					[/* text */ 't', `the upper bound (exclusive)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `origin`],
					[/* text */ 't', ` is not finite,
         or `],
					[/* inline code block */ 'i', `bound`],
					[/* text */ 't', ` is not finite, or `],
					[/* inline code block */ 'i', `origin`],
					[/* text */ 't', `
         is greater than or equal to `],
					[/* inline code block */ 'i', `bound`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a pseudorandomly chosen `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value between the
         origin (inclusive) and the bound (exclusive)`]
			]
		]],
		[/* method */ 'nextGaussian(double,double)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value pseudorandomly chosen from a Gaussian
 (normal) distribution with a mean and standard deviation specified by the
 arguments.`]
			],
			[/* parameters */
				[/* parameter */ 'mean', [/* parameter description */
					[/* text */ 't', `the mean of the Gaussian distribution to be drawn from`]
				]],
				[/* parameter */ 'stddev', [/* parameter description */
					[/* text */ 't', `the standard deviation (square root of the variance)
        of the Gaussian distribution to be drawn from`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `stddev`],
					[/* text */ 't', ` is negative`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value pseudorandomly chosen from the
         specified Gaussian distribution`]
			]
		]],
		[/* method */ 'nextGaussian()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value pseudorandomly chosen from a Gaussian
 (normal) distribution whose mean is 0 and whose standard deviation is 1.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value pseudorandomly chosen from a
         Gaussian distribution`]
			]
		]],
		[/* method */ 'nextExponential()', [
			[/* method description */
				[/* text */ 't', `Returns a nonnegative `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value pseudorandomly chosen from
 an exponential distribution whose mean is 1.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a nonnegative `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value pseudorandomly chosen from an
         exponential distribution`]
			]
		]]
	],
]);
