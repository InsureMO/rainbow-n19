import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.math.BigInteger', [
	[/* class description */
		[/* text */ 't', `Immutable arbitrary-precision integers.  All operations behave as if
 BigIntegers were represented in two's-complement notation (like Java's
 primitive integer types).  BigInteger provides analogues to all of Java's
 primitive integer operators, and all relevant methods from java.lang.Math.
 Additionally, BigInteger provides operations for modular arithmetic, GCD
 calculation, primality testing, prime generation, bit manipulation,
 and a few other miscellaneous operations.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Semantics of arithmetic operations exactly mimic those of Java's integer
 arithmetic operators, as defined in `],
			[/* text */ 't', `The Java Language Specification`],
			[/* text */ 't', `.
 For example, division by zero throws an `],
			[/* inline code block */ 'i', `ArithmeticException`],
			[/* text */ 't', `, and
 division of a negative by a positive yields a negative (or zero) remainder.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Semantics of shift operations extend those of Java's shift operators
 to allow for negative shift distances.  A right-shift with a negative
 shift distance results in a left shift, and vice-versa.  The unsigned
 right shift operator (`],
			[/* inline code block */ 'i', `>>>`],
			[/* text */ 't', `) is omitted since this operation
 only makes sense for a fixed sized word and not for a
 representation conceptually having an infinite number of leading
 virtual sign bits.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Semantics of bitwise logical operations exactly mimic those of Java's
 bitwise integer operators.  The binary operators (`],
			[/* inline code block */ 'i', `and`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `or`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `xor`],
			[/* text */ 't', `) implicitly perform sign extension on the shorter
 of the two operands prior to performing the operation.

 `]
		]],
		[/* block */ 'b', `Comparison operations perform signed integer comparisons, analogous to
 those performed by Java's relational and equality operators.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Modular arithmetic operations are provided to compute residues, perform
 exponentiation, and compute multiplicative inverses.  These methods always
 return a non-negative result, between `],
			[/* inline code block */ 'i', `0`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `(modulus - 1)`],
			[/* text */ 't', `,
 inclusive.

 `]
		]],
		[/* block */ 'b', `Bit operations operate on a single bit of the two's-complement
 representation of their operand.  If necessary, the operand is sign-extended
 so that it contains the designated bit.  None of the single-bit
 operations can produce a BigInteger with a different sign from the
 BigInteger being operated on, as they affect only a single bit, and the
 arbitrarily large abstraction provided by this class ensures that conceptually
 there are infinitely many "virtual sign bits" preceding each BigInteger.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `For the sake of brevity and clarity, pseudo-code is used throughout the
 descriptions of BigInteger methods.  The pseudo-code expression
 `],
			[/* inline code block */ 'i', `(i + j)`],
			[/* text */ 't', ` is shorthand for "a BigInteger whose value is
 that of the BigInteger `],
			[/* inline code block */ 'i', `i`],
			[/* text */ 't', ` plus that of the BigInteger `],
			[/* inline code block */ 'i', `j`],
			[/* text */ 't', `."
 The pseudo-code expression `],
			[/* inline code block */ 'i', `(i == j)`],
			[/* text */ 't', ` is shorthand for
 "`],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', ` if and only if the BigInteger `],
			[/* inline code block */ 'i', `i`],
			[/* text */ 't', ` represents the same
 value as the BigInteger `],
			[/* inline code block */ 'i', `j`],
			[/* text */ 't', `."  Other pseudo-code expressions are
 interpreted similarly.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `All methods and constructors in this class throw
 `],
			[/* inline code block */ 'i', `NullPointerException`],
			[/* text */ 't', ` when passed
 a null object reference for any input parameter.

 BigInteger must support values in the range
 -2`],
			[/* text */ 't', `Integer.MAX_VALUE`, 'sup'],
			[/* text */ 't', ` (exclusive) to
 +2`],
			[/* text */ 't', `Integer.MAX_VALUE`, 'sup'],
			[/* text */ 't', ` (exclusive)
 and may support values outside of that range.

 An `],
			[/* inline code block */ 'i', `ArithmeticException`],
			[/* text */ 't', ` is thrown when a BigInteger
 constructor or method would generate a value outside of the
 supported range.

 The range of probable prime values is limited and may be less than
 the full supported positive range of `],
			[/* inline code block */ 'i', `BigInteger`],
			[/* text */ 't', `.
 The range must be at least 1 to 2`],
			[/* text */ 't', `500000000`, 'sup'],
			[/* text */ 't', `.`]
		]]
	],
	[/* fields */
		[/* field */ 'ZERO', [
			[/* field description */
				[/* text */ 't', `The BigInteger constant zero.`]
			],
		]],
		[/* field */ 'ONE', [
			[/* field description */
				[/* text */ 't', `The BigInteger constant one.`]
			],
		]],
		[/* field */ 'TWO', [
			[/* field description */
				[/* text */ 't', `The BigInteger constant two.`]
			],
		]],
		[/* field */ 'TEN', [
			[/* field description */
				[/* text */ 't', `The BigInteger constant ten.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(int,java.util.Random)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a randomly generated BigInteger, uniformly distributed over
 the range 0 to (2`],
				[/* text */ 't', `numBits`, 'sup'],
				[/* text */ 't', ` - 1), inclusive.
 The uniformity of the distribution assumes that a fair source of random
 bits is provided in `],
				[/* inline code block */ 'i', `rnd`],
				[/* text */ 't', `.  Note that this constructor always
 constructs a non-negative BigInteger.`]
			],
			[/* parameters */
				[/* parameter */ 'numBits', [/* parameter description */
					[/* text */ 't', `maximum bitLength of the new BigInteger.`]
				]],
				[/* parameter */ 'rnd', [/* parameter description */
					[/* text */ 't', `source of randomness to be used in computing the new
         BigInteger.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `numBits`],
					[/* text */ 't', ` is negative.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Translates the decimal String representation of a BigInteger
 into a BigInteger.  The String representation consists of an
 optional minus or plus sign followed by a sequence of one or
 more decimal digits.  The character-to-digit mapping is
 provided by `],
				[/* reference */ 'r', `java.Character#digit(int,int)`],
				[/* text */ 't', `.  The String may not contain any extraneous
 characters (whitespace, for example).`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `decimal String representation of BigInteger.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', ` is not a valid representation
         of a BigInteger.`]
				]]
			]
		]],
		[/* constructor */ '<init>(int,int,java.util.Random)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a randomly generated positive BigInteger that is probably
 prime, with the specified bitLength.`]
			],
			[/* parameters */
				[/* parameter */ 'bitLength', [/* parameter description */
					[/* text */ 't', `bitLength of the returned BigInteger.`]
				]],
				[/* parameter */ 'certainty', [/* parameter description */
					[/* text */ 't', `a measure of the uncertainty that the caller is
         willing to tolerate.  The probability that the new BigInteger
         represents a prime number will exceed
         (1 - 1/2`],
					[/* text */ 't', `certainty`, 'sup'],
					[/* text */ 't', `).  The execution time of
         this constructor is proportional to the value of this parameter.`]
				]],
				[/* parameter */ 'rnd', [/* parameter description */
					[/* text */ 't', `source of random bits used to select candidates to be
         tested for primality.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `bitLength < 2`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `bitLength`],
					[/* text */ 't', ` is too large.`]
				]]
			]
		]],
		[/* constructor */ '<init>(int,byte[],int,int)', [
			[/* constructor description */
				[/* text */ 't', `Translates the sign-magnitude representation of a BigInteger into a
 BigInteger.  The sign is represented as an integer signum value: -1 for
 negative, 0 for zero, or 1 for positive.  The magnitude is a sub-array of
 a byte array in `],
				[/* text */ 't', `big-endian`],
				[/* text */ 't', ` byte-order: the most significant byte
 is the element at index `],
				[/* inline code block */ 'i', `off`],
				[/* text */ 't', `.  A zero value of the length
 `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` is permissible, and will result in a BigInteger value of 0,
 whether signum is -1, 0 or 1.  The `],
				[/* inline code block */ 'i', `magnitude`],
				[/* text */ 't', ` array is assumed to
 be unchanged for the duration of the constructor call.

 An `],
				[/* inline code block */ 'i', `IndexOutOfBoundsException`],
				[/* text */ 't', ` is thrown if the length of the array
 `],
				[/* inline code block */ 'i', `magnitude`],
				[/* text */ 't', ` is non-zero and either `],
				[/* inline code block */ 'i', `off`],
				[/* text */ 't', ` is negative,
 `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', ` is negative, or `],
				[/* inline code block */ 'i', `off+len`],
				[/* text */ 't', ` is greater than the length of
 `],
				[/* inline code block */ 'i', `magnitude`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'signum', [/* parameter description */
					[/* text */ 't', `signum of the number (-1 for negative, 0 for zero, 1
         for positive).`]
				]],
				[/* parameter */ 'magnitude', [/* parameter description */
					[/* text */ 't', `big-endian binary representation of the magnitude of
         the number.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset of the binary representation.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of bytes to use.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `signum`],
					[/* text */ 't', ` is not one of the three
         legal values (-1, 0, and 1), or `],
					[/* inline code block */ 'i', `signum`],
					[/* text */ 't', ` is 0 and
         `],
					[/* inline code block */ 'i', `magnitude`],
					[/* text */ 't', ` contains one or more non-zero bytes.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the provided array offset and
         length would cause an index into the byte array to be
         negative or greater than or equal to the array length.`]
				]]
			]
		]],
		[/* constructor */ '<init>(byte[])', [
			[/* constructor description */
				[/* text */ 't', `Translates a byte array containing the two's-complement binary
 representation of a BigInteger into a BigInteger.  The input array is
 assumed to be in `],
				[/* text */ 't', `big-endian`],
				[/* text */ 't', ` byte-order: the most significant
 byte is in the zeroth element.  The `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', ` array is assumed to be
 unchanged for the duration of the constructor call.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `big-endian two's-complement binary representation of a
         BigInteger.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', ` is zero bytes long.`]
				]]
			]
		]],
		[/* constructor */ '<init>(byte[],int,int)', [
			[/* constructor description */
				[/* text */ 't', `Translates a byte sub-array containing the two's-complement binary
 representation of a BigInteger into a BigInteger.  The sub-array is
 specified via an offset into the array and a length.  The sub-array is
 assumed to be in `],
				[/* text */ 't', `big-endian`],
				[/* text */ 't', ` byte-order: the most significant
 byte is the element at index `],
				[/* inline code block */ 'i', `off`],
				[/* text */ 't', `.  The `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', ` array is
 assumed to be unchanged for the duration of the constructor call.

 An `],
				[/* inline code block */ 'i', `IndexOutOfBoundsException`],
				[/* text */ 't', ` is thrown if the length of the array
 `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', ` is non-zero and either `],
				[/* inline code block */ 'i', `off`],
				[/* text */ 't', ` is negative, `],
				[/* inline code block */ 'i', `len`],
				[/* text */ 't', `
 is negative, or `],
				[/* inline code block */ 'i', `off+len`],
				[/* text */ 't', ` is greater than the length of
 `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `byte array containing a sub-array which is the big-endian
         two's-complement binary representation of a BigInteger.`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset of the binary representation.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of bytes to use.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', ` is zero bytes long.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the provided array offset and
         length would cause an index into the byte array to be
         negative or greater than or equal to the array length.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,int)', [
			[/* constructor description */
				[/* text */ 't', `Translates the String representation of a BigInteger in the
 specified radix into a BigInteger.  The String representation
 consists of an optional minus or plus sign followed by a
 sequence of one or more digits in the specified radix.  The
 character-to-digit mapping is provided by `],
				[/* reference */ 'r', `java.Character#digit(int,int)`],
				[/* text */ 't', `.  The String may
 not contain any extraneous characters (whitespace, for
 example).`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `String representation of BigInteger.`]
				]],
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `radix to be used in interpreting `],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', ` is not a valid representation
         of a BigInteger in the specified radix, or `],
					[/* inline code block */ 'i', `radix`],
					[/* text */ 't', ` is
         outside the range from `],
					[/* reference */ 'r', `java.Character#MIN_RADIX`],
					[/* text */ 't', ` to
         `],
					[/* reference */ 'r', `java.Character#MAX_RADIX`],
					[/* text */ 't', `, inclusive.`]
				]]
			]
		]],
		[/* constructor */ '<init>(int,byte[])', [
			[/* constructor description */
				[/* text */ 't', `Translates the sign-magnitude representation of a BigInteger into a
 BigInteger.  The sign is represented as an integer signum value: -1 for
 negative, 0 for zero, or 1 for positive.  The magnitude is a byte array
 in `],
				[/* text */ 't', `big-endian`],
				[/* text */ 't', ` byte-order: the most significant byte is the
 zeroth element.  A zero-length magnitude array is permissible, and will
 result in a BigInteger value of 0, whether signum is -1, 0 or 1.  The
 `],
				[/* inline code block */ 'i', `magnitude`],
				[/* text */ 't', ` array is assumed to be unchanged for the duration of
 the constructor call.`]
			],
			[/* parameters */
				[/* parameter */ 'signum', [/* parameter description */
					[/* text */ 't', `signum of the number (-1 for negative, 0 for zero, 1
         for positive).`]
				]],
				[/* parameter */ 'magnitude', [/* parameter description */
					[/* text */ 't', `big-endian binary representation of the magnitude of
         the number.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `signum`],
					[/* text */ 't', ` is not one of the three
         legal values (-1, 0, and 1), or `],
					[/* inline code block */ 'i', `signum`],
					[/* text */ 't', ` is 0 and
         `],
					[/* inline code block */ 'i', `magnitude`],
					[/* text */ 't', ` contains one or more non-zero bytes.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'add(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(this + val)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value to be added to this BigInteger.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this + val`]
			]
		]],
		[/* method */ 'bitCount()', [
			[/* method description */
				[/* text */ 't', `Returns the number of bits in the two's complement representation
 of this BigInteger that differ from its sign bit.  This method is
 useful when implementing bit-vector style sets atop BigIntegers.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `number of bits in the two's complement representation
         of this BigInteger that differ from its sign bit.`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this BigInteger with the specified Object for equality.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `Object to which this BigInteger is to be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the specified Object is a
         BigInteger whose value is numerically equal to this BigInteger.`]
			]
		]],
		[/* method */ 'toString(int)', [
			[/* method description */
				[/* text */ 't', `Returns the String representation of this BigInteger in the
 given radix.  If the radix is outside the range from `],
				[/* reference */ 'r', `java.Character#MIN_RADIX`],
				[/* text */ 't', ` to `],
				[/* reference */ 'r', `java.Character#MAX_RADIX`],
				[/* text */ 't', ` inclusive,
 it will default to 10 (as is the case for
 `],
				[/* inline code block */ 'i', `Integer.toString`],
				[/* text */ 't', `).  The digit-to-character mapping
 provided by `],
				[/* inline code block */ 'i', `Character.forDigit`],
				[/* text */ 't', ` is used, and a minus
 sign is prepended if appropriate.  (This representation is
 compatible with the `],
				[/* reference */ 'r', `#%3Cinit%3E(java.lang.String,int)`, `(String, int)`],
				[/* text */ 't', ` constructor.)`]
			],
			[/* parameters */
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `radix of the String representation.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `String representation of this BigInteger in the given radix.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the decimal String representation of this BigInteger.
 The digit-to-character mapping provided by
 `],
				[/* inline code block */ 'i', `Character.forDigit`],
				[/* text */ 't', ` is used, and a minus sign is
 prepended if appropriate.  (This representation is compatible
 with the `],
				[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `(String)`],
				[/* text */ 't', ` constructor, and
 allows for String concatenation with Java's + operator.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `decimal String representation of this BigInteger.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code for this BigInteger.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `hash code for this BigInteger.`]
			]
		]],
		[/* method */ 'abs()', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is the absolute value of this
 BigInteger.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `abs(this)`]
			]
		]],
		[/* method */ 'sqrt()', [
			[/* method description */
				[/* text */ 't', `Returns the integer square root of this BigInteger.  The integer square
 root of the corresponding mathematical integer `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` is the largest
 mathematical integer `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` such that `],
				[/* inline code block */ 'i', `s*s <= n`],
				[/* text */ 't', `.  It is equal
 to the value of `],
				[/* inline code block */ 'i', `floor(sqrt(n))`],
				[/* text */ 't', `, where `],
				[/* inline code block */ 'i', `sqrt(n)`],
				[/* text */ 't', ` denotes the
 real square root of `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` treated as a real.  Note that the integer
 square root will be less than the real square root if the latter is not
 representable as an integral value.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` is negative.  (The square
         root of a negative integer `],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', ` is
         `],
					[/* inline code block */ 'i', `(i * sqrt(-val))`],
					[/* text */ 't', ` where `],
					[/* text */ 't', `i`],
					[/* text */ 't', ` is the
         `],
					[/* text */ 't', `imaginary unit`],
					[/* text */ 't', ` and is equal to
         `],
					[/* inline code block */ 'i', `sqrt(-1)`],
					[/* text */ 't', `.)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the integer square root of `],
				[/* inline code block */ 'i', `this`]
			]
		]],
		[/* method */ 'pow(int)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(thisexponent)`],
				[/* text */ 't', `.
 Note that `],
				[/* inline code block */ 'i', `exponent`],
				[/* text */ 't', ` is an integer rather than a BigInteger.`]
			],
			[/* parameters */
				[/* parameter */ 'exponent', [/* parameter description */
					[/* text */ 't', `exponent to which this BigInteger is to be raised.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `exponent`],
					[/* text */ 't', ` is negative.  (This would
         cause the operation to yield a non-integer value.)`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `thisexponent`]
			]
		]],
		[/* method */ 'min(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns the minimum of this BigInteger and `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value with which the minimum is to be computed.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the BigInteger whose value is the lesser of this BigInteger and
         `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', `.  If they are equal, either may be returned.`]
			]
		]],
		[/* method */ 'max(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns the maximum of this BigInteger and `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value with which the maximum is to be computed.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the BigInteger whose value is the greater of this and
         `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', `.  If they are equal, either may be returned.`]
			]
		]],
		[/* method */ 'signum()', [
			[/* method description */
				[/* text */ 't', `Returns the signum function of this BigInteger.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `-1, 0 or 1 as the value of this BigInteger is negative, zero or
         positive.`]
			]
		]],
		[/* method */ 'compareTo(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Compares this BigInteger with the specified BigInteger.  This
 method is provided in preference to individual methods for each
 of the six boolean comparison operators (<, ==,
 >, >=, !=, <=).  The suggested
 idiom for performing these comparisons is: `],
				[/* inline code block */ 'i', `(x.compareTo(y)`],
				[/* text */ 't', ` <`],
				[/* text */ 't', `op`],
				[/* text */ 't', `> `],
				[/* inline code block */ 'i', `0)`],
				[/* text */ 't', `, where
 <`],
				[/* text */ 't', `op`],
				[/* text */ 't', `> is one of the six comparison operators.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `BigInteger to which this BigInteger is to be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `-1, 0 or 1 as this BigInteger is numerically less than, equal
         to, or greater than `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'intValue()', [
			[/* method description */
				[/* text */ 't', `Converts this BigInteger to an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.  This
 conversion is analogous to a
 `],
				[/* text */ 't', `narrowing primitive conversion`],
				[/* text */ 't', ` from `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` to
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` as defined in
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `:
 if this BigInteger is too big to fit in an
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `, only the low-order 32 bits are returned.
 Note that this conversion can lose information about the
 overall magnitude of the BigInteger value as well as return a
 result with the opposite sign.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this BigInteger converted to an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'longValue()', [
			[/* method description */
				[/* text */ 't', `Converts this BigInteger to a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.  This
 conversion is analogous to a
 `],
				[/* text */ 't', `narrowing primitive conversion`],
				[/* text */ 't', ` from `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` to
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` as defined in
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `:
 if this BigInteger is too big to fit in a
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `, only the low-order 64 bits are returned.
 Note that this conversion can lose information about the
 overall magnitude of the BigInteger value as well as return a
 result with the opposite sign.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this BigInteger converted to a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'floatValue()', [
			[/* method description */
				[/* text */ 't', `Converts this BigInteger to a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.  This
 conversion is similar to the
 `],
				[/* text */ 't', `narrowing primitive conversion`],
				[/* text */ 't', ` from `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` to
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` as defined in
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `:
 if this BigInteger has too great a magnitude
 to represent as a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `, it will be converted to
 `],
				[/* reference */ 'r', `java.Float#NEGATIVE_INFINITY`],
				[/* text */ 't', ` or `],
				[/* reference */ 'r', `java.Float#POSITIVE_INFINITY`],
				[/* text */ 't', ` as appropriate.  Note that even when
 the return value is finite, this conversion can lose
 information about the precision of the BigInteger value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this BigInteger converted to a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'doubleValue()', [
			[/* method description */
				[/* text */ 't', `Converts this BigInteger to a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `.  This
 conversion is similar to the
 `],
				[/* text */ 't', `narrowing primitive conversion`],
				[/* text */ 't', ` from `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` to
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` as defined in
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `:
 if this BigInteger has too great a magnitude
 to represent as a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `, it will be converted to
 `],
				[/* reference */ 'r', `java.Double#NEGATIVE_INFINITY`],
				[/* text */ 't', ` or `],
				[/* reference */ 'r', `java.Double#POSITIVE_INFINITY`],
				[/* text */ 't', ` as appropriate.  Note that even when
 the return value is finite, this conversion can lose
 information about the precision of the BigInteger value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this BigInteger converted to a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'valueOf(long)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is equal to that of the
 specified `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value of the BigInteger to return.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a BigInteger with the specified value.`]
			]
		]],
		[/* method */ 'toByteArray()', [
			[/* method description */
				[/* text */ 't', `Returns a byte array containing the two's-complement
 representation of this BigInteger.  The byte array will be in
 `],
				[/* text */ 't', `big-endian`],
				[/* text */ 't', ` byte-order: the most significant byte is in
 the zeroth element.  The array will contain the minimum number
 of bytes required to represent this BigInteger, including at
 least one sign bit, which is `],
				[/* inline code block */ 'i', `(ceil((this.bitLength() + 1)/8))`],
				[/* text */ 't', `.  (This representation is compatible with the
 `],
				[/* reference */ 'r', `#%3Cinit%3E(byte%5B%5D)`, `(byte[])`],
				[/* text */ 't', ` constructor.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a byte array containing the two's-complement representation of
         this BigInteger.`]
			]
		]],
		[/* method */ 'mod(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(this mod m`],
				[/* text */ 't', `).  This method
 differs from `],
				[/* inline code block */ 'i', `remainder`],
				[/* text */ 't', ` in that it always returns a
 `],
				[/* text */ 't', `non-negative`],
				[/* text */ 't', ` BigInteger.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the modulus.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', ` ≤ 0`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this mod m`]
			]
		]],
		[/* method */ 'setBit(int)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is equivalent to this BigInteger
 with the designated bit set.  (Computes `],
				[/* inline code block */ 'i', `(this | (1<<n))`],
				[/* text */ 't', `.)`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `index of bit to set.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` is negative.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this | (1<<n)`]
			]
		]],
		[/* method */ 'shiftLeft(int)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(this << n)`],
				[/* text */ 't', `.
 The shift distance, `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', `, may be negative, in which case
 this method performs a right shift.
 (Computes `],
				[/* inline code block */ 'i', `floor(this * 2n)`],
				[/* text */ 't', `.)`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `shift distance, in bits.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this << n`]
			]
		]],
		[/* method */ 'multiply(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(this * val)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value to be multiplied by this BigInteger.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this * val`]
			]
		]],
		[/* method */ 'or(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(this | val)`],
				[/* text */ 't', `.  (This method
 returns a negative BigInteger if and only if either this or val is
 negative.)`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value to be OR'ed with this BigInteger.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this | val`]
			]
		]],
		[/* method */ 'negate()', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(-this)`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `-this`]
			]
		]],
		[/* method */ 'and(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(this & val)`],
				[/* text */ 't', `.  (This
 method returns a negative BigInteger if and only if this and val are
 both negative.)`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value to be AND'ed with this BigInteger.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this & val`]
			]
		]],
		[/* method */ 'not()', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(~this)`],
				[/* text */ 't', `.  (This method
 returns a negative value if and only if this BigInteger is
 non-negative.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `~this`]
			]
		]],
		[/* method */ 'remainder(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(this % val)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value by which this BigInteger is to be divided, and the
         remainder computed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', ` is zero.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this % val`]
			]
		]],
		[/* method */ 'divide(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(this / val)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value by which this BigInteger is to be divided.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', ` is zero.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this / val`]
			]
		]],
		[/* method */ 'longValueExact()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `, checking
 for lost information.  If the value of this `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', `
 is out of the range of the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` type, then an
 `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the value of `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` will
 not exactly fit in a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` converted to a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'divideAndRemainder(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns an array of two BigIntegers containing `],
				[/* inline code block */ 'i', `(this / val)`],
				[/* text */ 't', `
 followed by `],
				[/* inline code block */ 'i', `(this % val)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value by which this BigInteger is to be divided, and the
         remainder computed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', ` is zero.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of two BigIntegers: the quotient `],
				[/* inline code block */ 'i', `(this / val)`],
				[/* text */ 't', `
         is the initial element, and the remainder `],
				[/* inline code block */ 'i', `(this % val)`],
				[/* text */ 't', `
         is the final element.`]
			]
		]],
		[/* method */ 'bitLength()', [
			[/* method description */
				[/* text */ 't', `Returns the number of bits in the minimal two's-complement
 representation of this BigInteger, `],
				[/* text */ 't', `excluding`],
				[/* text */ 't', ` a sign bit.
 For positive BigIntegers, this is equivalent to the number of bits in
 the ordinary binary representation.  For zero this method returns
 `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `.  (Computes `],
				[/* inline code block */ 'i', `(ceil(log2(this < 0 ? -this : this+1)))`],
				[/* text */ 't', `.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `number of bits in the minimal two's-complement
         representation of this BigInteger, `],
				[/* text */ 't', `excluding`],
				[/* text */ 't', ` a sign bit.`]
			]
		]],
		[/* method */ 'testBit(int)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the designated bit is set.
 (Computes `],
				[/* inline code block */ 'i', `((this & (1<<n)) != 0)`],
				[/* text */ 't', `.)`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `index of bit to test.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` is negative.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the designated bit is set.`]
			]
		]],
		[/* method */ 'subtract(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(this - val)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value to be subtracted from this BigInteger.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this - val`]
			]
		]],
		[/* method */ 'shiftRight(int)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(this >> n)`],
				[/* text */ 't', `.  Sign
 extension is performed.  The shift distance, `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', `, may be
 negative, in which case this method performs a left shift.
 (Computes `],
				[/* inline code block */ 'i', `floor(this / 2n)`],
				[/* text */ 't', `.)`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `shift distance, in bits.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this >> n`]
			]
		]],
		[/* method */ 'getLowestSetBit()', [
			[/* method description */
				[/* text */ 't', `Returns the index of the rightmost (lowest-order) one bit in this
 BigInteger (the number of zero bits to the right of the rightmost
 one bit).  Returns -1 if this BigInteger contains no one bits.
 (Computes `],
				[/* inline code block */ 'i', `(this == 0? -1 : log2(this & -this))`],
				[/* text */ 't', `.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `index of the rightmost one bit in this BigInteger.`]
			]
		]],
		[/* method */ 'modPow(java.math.BigInteger,java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is
 `],
				[/* inline code block */ 'i', `(thisexponent mod m)`],
				[/* text */ 't', `.  (Unlike `],
				[/* inline code block */ 'i', `pow`],
				[/* text */ 't', `, this
 method permits negative exponents.)`]
			],
			[/* parameters */
				[/* parameter */ 'exponent', [/* parameter description */
					[/* text */ 't', `the exponent.`]
				]],
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the modulus.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', ` ≤ 0 or the exponent is
         negative and this BigInteger is not `],
					[/* text */ 't', `relatively
         prime`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `thisexponent mod m`]
			]
		]],
		[/* method */ 'modInverse(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(this`],
				[/* text */ 't', `-1`, 'sup'],
				[/* inline code block */ 'i', `mod m)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'm', [/* parameter description */
					[/* text */ 't', `the modulus.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `m`],
					[/* text */ 't', ` ≤ 0, or this BigInteger
         has no multiplicative inverse mod m (that is, this BigInteger
         is not `],
					[/* text */ 't', `relatively prime`],
					[/* text */ 't', ` to m).`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', `-1`, 'sup'],
				[/* inline code block */ 'i', `mod m`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'probablePrime(int,java.util.Random)', [
			[/* method description */
				[/* text */ 't', `Returns a positive BigInteger that is probably prime, with the
 specified bitLength. The probability that a BigInteger returned
 by this method is composite does not exceed 2`],
				[/* text */ 't', `-100`, 'sup'],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'bitLength', [/* parameter description */
					[/* text */ 't', `bitLength of the returned BigInteger.`]
				]],
				[/* parameter */ 'rnd', [/* parameter description */
					[/* text */ 't', `source of random bits used to select candidates to be
         tested for primality.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `bitLength < 2`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `bitLength`],
					[/* text */ 't', ` is too large.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a BigInteger of `],
				[/* inline code block */ 'i', `bitLength`],
				[/* text */ 't', ` bits that is probably prime`]
			]
		]],
		[/* method */ 'nextProbablePrime()', [
			[/* method description */
				[/* text */ 't', `Returns the first integer greater than this `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` that
 is probably prime.  The probability that the number returned by this
 method is composite does not exceed 2`],
				[/* text */ 't', `-100`, 'sup'],
				[/* text */ 't', `. This method will
 never skip over a prime when searching: if it returns `],
				[/* inline code block */ 'i', `p`],
				[/* text */ 't', `, there
 is no prime `],
				[/* inline code block */ 'i', `q`],
				[/* text */ 't', ` such that `],
				[/* inline code block */ 'i', `this < q < p`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `this < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` is too large.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the first integer greater than this `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` that
         is probably prime.`]
			]
		]],
		[/* method */ 'sqrtAndRemainder()', [
			[/* method description */
				[/* text */ 't', `Returns an array of two BigIntegers containing the integer square root
 `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` and its remainder `],
				[/* inline code block */ 'i', `this - s*s`],
				[/* text */ 't', `,
 respectively.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` is negative.  (The square
         root of a negative integer `],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', ` is
         `],
					[/* inline code block */ 'i', `(i * sqrt(-val))`],
					[/* text */ 't', ` where `],
					[/* text */ 't', `i`],
					[/* text */ 't', ` is the
         `],
					[/* text */ 't', `imaginary unit`],
					[/* text */ 't', ` and is equal to
         `],
					[/* inline code block */ 'i', `sqrt(-1)`],
					[/* text */ 't', `.)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of two BigIntegers with the integer square root at
         offset 0 and the remainder at offset 1`]
			]
		]],
		[/* method */ 'gcd(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is the greatest common divisor of
 `],
				[/* inline code block */ 'i', `abs(this)`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `abs(val)`],
				[/* text */ 't', `.  Returns 0 if
 `],
				[/* inline code block */ 'i', `this == 0 && val == 0`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value with which the GCD is to be computed.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `GCD(abs(this), abs(val))`]
			]
		]],
		[/* method */ 'xor(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(this ^ val)`],
				[/* text */ 't', `.  (This method
 returns a negative BigInteger if and only if exactly one of this and
 val are negative.)`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value to be XOR'ed with this BigInteger.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this ^ val`]
			]
		]],
		[/* method */ 'andNot(java.math.BigInteger)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is `],
				[/* inline code block */ 'i', `(this & ~val)`],
				[/* text */ 't', `.  This
 method, which is equivalent to `],
				[/* inline code block */ 'i', `and(val.not())`],
				[/* text */ 't', `, is provided as
 a convenience for masking operations.  (This method returns a negative
 BigInteger if and only if `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` is negative and `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', ` is
 positive.)`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value to be complemented and AND'ed with this BigInteger.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this & ~val`]
			]
		]],
		[/* method */ 'clearBit(int)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is equivalent to this BigInteger
 with the designated bit cleared.
 (Computes `],
				[/* inline code block */ 'i', `(this & ~(1<<n))`],
				[/* text */ 't', `.)`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `index of bit to clear.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` is negative.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this & ~(1<<n)`]
			]
		]],
		[/* method */ 'flipBit(int)', [
			[/* method description */
				[/* text */ 't', `Returns a BigInteger whose value is equivalent to this BigInteger
 with the designated bit flipped.
 (Computes `],
				[/* inline code block */ 'i', `(this ^ (1<<n))`],
				[/* text */ 't', `.)`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `index of bit to flip.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` is negative.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this ^ (1<<n)`]
			]
		]],
		[/* method */ 'isProbablePrime(int)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this BigInteger is probably prime,
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if it's definitely composite.  If
 `],
				[/* inline code block */ 'i', `certainty`],
				[/* text */ 't', ` is ≤ 0, `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` is
 returned.`]
			],
			[/* parameters */
				[/* parameter */ 'certainty', [/* parameter description */
					[/* text */ 't', `a measure of the uncertainty that the caller is
         willing to tolerate: if the call returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `
         the probability that this BigInteger is prime exceeds
         (1 - 1/2`],
					[/* text */ 't', `certainty`, 'sup'],
					[/* text */ 't', `).  The execution time of
         this method is proportional to the value of this parameter.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this BigInteger is probably prime,
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if it's definitely composite.`]
			]
		]],
		[/* method */ 'intValueExact()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` to an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `, checking
 for lost information.  If the value of this `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', `
 is out of the range of the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` type, then an
 `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the value of `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` will
 not exactly fit in an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` converted to an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'shortValueExact()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `, checking
 for lost information.  If the value of this `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', `
 is out of the range of the `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` type, then an
 `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the value of `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` will
 not exactly fit in a `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` converted to a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'byteValueExact()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `, checking
 for lost information.  If the value of this `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', `
 is out of the range of the `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` type, then an
 `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` is thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the value of `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` will
 not exactly fit in a `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` converted to a `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `.`]
			]
		]]
	],
]);
