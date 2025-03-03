import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Float', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `Float`],
		[/* text */ 't', ` class wraps a value of primitive type
 `],
		[/* inline code block */ 'i', `float`],
		[/* text */ 't', ` in an object. An object of type
 `],
		[/* inline code block */ 'i', `Float`],
		[/* text */ 't', ` contains a single field whose type is
 `],
		[/* inline code block */ 'i', `float`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `In addition, this class provides several methods for converting a
 `],
			[/* inline code block */ 'i', `float`],
			[/* text */ 't', ` to a `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` and a
 `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` to a `],
			[/* inline code block */ 'i', `float`],
			[/* text */ 't', `, as well as other
 constants and methods useful when dealing with a
 `],
			[/* inline code block */ 'i', `float`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `value-based`],
			[/* text */ 't', `
 class; programmers should treat instances that are
 `],
			[/* reference */ 'r', `#equals(java.lang.Object)`, `equal`],
			[/* text */ 't', ` as interchangeable and should not
 use instances for synchronization, or unpredictable behavior may
 occur. For example, in a future release, synchronization may fail.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Floating-point Equality, Equivalence, and Comparison`]
		]],
		[/* text */ 't', `

 The class `],
		[/* inline code block */ 'i', `java.lang.Double`],
		[/* text */ 't', ` has a `],
		[/* reference */ 'r', `.Double#equivalenceRelation`],
		[/* text */ 't', ` that is
 equality applicable to `],
		[/* inline code block */ 'i', `float`],
		[/* text */ 't', ` values.`]
	],
	[/* fields */
		[/* field */ 'POSITIVE_INFINITY', [
			[/* field description */
				[/* text */ 't', `A constant holding the positive infinity of type
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `. It is equal to the value returned by
 `],
				[/* inline code block */ 'i', `Float.intBitsToFloat(0x7f800000)`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'NEGATIVE_INFINITY', [
			[/* field description */
				[/* text */ 't', `A constant holding the negative infinity of type
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `. It is equal to the value returned by
 `],
				[/* inline code block */ 'i', `Float.intBitsToFloat(0xff800000)`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'NaN', [
			[/* field description */
				[/* text */ 't', `A constant holding a Not-a-Number (NaN) value of type
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.  It is equivalent to the value returned by
 `],
				[/* inline code block */ 'i', `Float.intBitsToFloat(0x7fc00000)`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MAX_VALUE', [
			[/* field description */
				[/* text */ 't', `A constant holding the largest positive finite value of type
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `, (2-2`],
				[/* text */ 't', `-23`, 'sup'],
				[/* text */ 't', `)·2`],
				[/* text */ 't', `127`, 'sup'],
				[/* text */ 't', `.
 It is equal to the hexadecimal floating-point literal
 `],
				[/* inline code block */ 'i', `0x1.fffffeP+127f`],
				[/* text */ 't', ` and also equal to
 `],
				[/* inline code block */ 'i', `Float.intBitsToFloat(0x7f7fffff)`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MIN_NORMAL', [
			[/* field description */
				[/* text */ 't', `A constant holding the smallest positive normal value of type
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `, 2`],
				[/* text */ 't', `-126`, 'sup'],
				[/* text */ 't', `.  It is equal to the
 hexadecimal floating-point literal `],
				[/* inline code block */ 'i', `0x1.0p-126f`],
				[/* text */ 't', ` and also
 equal to `],
				[/* inline code block */ 'i', `Float.intBitsToFloat(0x00800000)`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MIN_VALUE', [
			[/* field description */
				[/* text */ 't', `A constant holding the smallest positive nonzero value of type
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `, 2`],
				[/* text */ 't', `-149`, 'sup'],
				[/* text */ 't', `. It is equal to the
 hexadecimal floating-point literal `],
				[/* inline code block */ 'i', `0x0.000002P-126f`],
				[/* text */ 't', `
 and also equal to `],
				[/* inline code block */ 'i', `Float.intBitsToFloat(0x1)`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MAX_EXPONENT', [
			[/* field description */
				[/* text */ 't', `Maximum exponent a finite `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` variable may have.  It
 is equal to the value returned by `],
				[/* inline code block */ 'i', `Math.getExponent(Float.MAX_VALUE)`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MIN_EXPONENT', [
			[/* field description */
				[/* text */ 't', `Minimum exponent a normalized `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` variable may have.
 It is equal to the value returned by `],
				[/* inline code block */ 'i', `Math.getExponent(Float.MIN_NORMAL)`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'SIZE', [
			[/* field description */
				[/* text */ 't', `The number of bits used to represent a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value.`]
			],
		]],
		[/* field */ 'BYTES', [
			[/* field description */
				[/* text */ 't', `The number of bytes used to represent a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value.`]
			],
		]],
		[/* field */ 'TYPE', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` instance representing the primitive type
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a newly allocated `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` object that
 represents the floating-point value of type `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `
 represented by the string. The string is converted to a
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value as if by the `],
				[/* inline code block */ 'i', `valueOf`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `a string to be converted to a `],
					[/* inline code block */ 'i', `Float`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if the string does not contain a
              parsable number.`]
				]]
			]
		]],
		[/* constructor */ '<init>(double)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a newly allocated `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` object that
 represents the argument converted to type `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to be represented by the `],
					[/* inline code block */ 'i', `Float`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(float)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a newly allocated `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` object that
 represents the primitive `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` argument.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to be represented by the `],
					[/* inline code block */ 'i', `Float`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this object against the specified object.  The result
 is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the argument is not
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and is a `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` object that
 represents a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` with the same value as the
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` represented by this object. For this
 purpose, two `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` values are considered to be the
 same if and only if the method `],
				[/* reference */ 'r', `#floatToIntBits(float)`, `floatToIntBits(float)`],
				[/* text */ 't', `
 returns the identical `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value when applied to
 each.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to be compared`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the objects are the same;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'toString(float)', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `
 argument. All characters mentioned below are ASCII characters.
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is NaN, the result is the string
 "`],
						[/* inline code block */ 'i', `NaN`],
						[/* text */ 't', `".
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Otherwise, the result is a string that represents the sign and
     magnitude (absolute value) of the argument. If the sign is
     negative, the first character of the result is
     '`],
						[/* inline code block */ 'i', `-`],
						[/* text */ 't', `' (`],
						[/* inline code block */ 'i', `'\\u002D'`],
						[/* text */ 't', `); if the sign is
     positive, no sign character appears in the result. As for
     the magnitude `],
						[/* text */ 't', `m`],
						[/* text */ 't', `:
 `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', `If `],
								[/* text */ 't', `m`],
								[/* text */ 't', ` is infinity, it is represented by the characters
     `],
								[/* inline code block */ 'i', `"Infinity"`],
								[/* text */ 't', `; thus, positive infinity produces
     the result `],
								[/* inline code block */ 'i', `"Infinity"`],
								[/* text */ 't', ` and negative infinity
     produces the result `],
								[/* inline code block */ 'i', `"-Infinity"`],
								[/* text */ 't', `.
 `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `If `],
								[/* text */ 't', `m`],
								[/* text */ 't', ` is zero, it is represented by the characters
     `],
								[/* inline code block */ 'i', `"0.0"`],
								[/* text */ 't', `; thus, negative zero produces the result
     `],
								[/* inline code block */ 'i', `"-0.0"`],
								[/* text */ 't', ` and positive zero produces the result
     `],
								[/* inline code block */ 'i', `"0.0"`],
								[/* text */ 't', `.
 `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` If `],
								[/* text */ 't', `m`],
								[/* text */ 't', ` is greater than or equal to 10`],
								[/* text */ 't', `-3`, 'sup'],
								[/* text */ 't', ` but
      less than 10`],
								[/* text */ 't', `7`, 'sup'],
								[/* text */ 't', `, then it is represented as the
      integer part of `],
								[/* text */ 't', `m`],
								[/* text */ 't', `, in decimal form with no leading
      zeroes, followed by '`],
								[/* inline code block */ 'i', `.`],
								[/* text */ 't', `'
      (`],
								[/* inline code block */ 'i', `'\\u002E'`],
								[/* text */ 't', `), followed by one or more
      decimal digits representing the fractional part of
      `],
								[/* text */ 't', `m`],
								[/* text */ 't', `.
 `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` If `],
								[/* text */ 't', `m`],
								[/* text */ 't', ` is less than 10`],
								[/* text */ 't', `-3`, 'sup'],
								[/* text */ 't', ` or greater than or
      equal to 10`],
								[/* text */ 't', `7`, 'sup'],
								[/* text */ 't', `, then it is represented in
      so-called "computerized scientific notation." Let `],
								[/* text */ 't', `n`],
								[/* text */ 't', `
      be the unique integer such that 10`],
								[/* text */ 't', `n`, 'sup'],
								[/* text */ 't', `≤
      `],
								[/* text */ 't', `m`],
								[/* text */ 't', ` < 10`],
								[/* text */ 't', `n+1`, 'sup'],
								[/* text */ 't', `; then let `],
								[/* text */ 't', `a`],
								[/* text */ 't', `
      be the mathematically exact quotient of `],
								[/* text */ 't', `m`],
								[/* text */ 't', ` and
      10`],
								[/* text */ 't', `n`, 'sup'],
								[/* text */ 't', ` so that 1 ≤ `],
								[/* text */ 't', `a`],
								[/* text */ 't', ` < 10.
      The magnitude is then represented as the integer part of
      `],
								[/* text */ 't', `a`],
								[/* text */ 't', `, as a single decimal digit, followed by
      '`],
								[/* inline code block */ 'i', `.`],
								[/* text */ 't', `' (`],
								[/* inline code block */ 'i', `'\\u002E'`],
								[/* text */ 't', `), followed by
      decimal digits representing the fractional part of
      `],
								[/* text */ 't', `a`],
								[/* text */ 't', `, followed by the letter '`],
								[/* inline code block */ 'i', `E`],
								[/* text */ 't', `'
      (`],
								[/* inline code block */ 'i', `'\\u0045'`],
								[/* text */ 't', `), followed by a representation
      of `],
								[/* text */ 't', `n`],
								[/* text */ 't', ` as a decimal integer, as produced by the
      method `],
								[/* reference */ 'r', `.Integer#toString(int)`],
								[/* text */ 't', `.

 `]
							]]
						]]
					]]
				]],
				[/* text */ 't', `
 How many digits must be printed for the fractional part of
 `],
				[/* text */ 't', `m`],
				[/* text */ 't', ` or `],
				[/* text */ 't', `a`],
				[/* text */ 't', `? There must be at least one digit
 to represent the fractional part, and beyond that as many, but
 only as many, more digits as are needed to uniquely distinguish
 the argument value from adjacent values of type
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `. That is, suppose that `],
				[/* text */ 't', `x`],
				[/* text */ 't', ` is the
 exact mathematical value represented by the decimal
 representation produced by this method for a finite nonzero
 argument `],
				[/* text */ 't', `f`],
				[/* text */ 't', `. Then `],
				[/* text */ 't', `f`],
				[/* text */ 't', ` must be the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `
 value nearest to `],
				[/* text */ 't', `x`],
				[/* text */ 't', `; or, if two `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` values are
 equally close to `],
				[/* text */ 't', `x`],
				[/* text */ 't', `, then `],
				[/* text */ 't', `f`],
				[/* text */ 't', ` must be one of
 them and the least significant bit of the significand of
 `],
				[/* text */ 't', `f`],
				[/* text */ 't', ` must be `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `To create localized string representations of a floating-point
 value, use subclasses of `],
					[/* reference */ 'r', `java.text.NumberFormat`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `the float to be converted.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the argument.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` object.
 The primitive `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value represented by this object
 is converted to a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` exactly as if by the method
 `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', ` of one argument.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` representation of this object.`]
			]
		]],
		[/* method */ 'hashCode(float)', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value; compatible with
 `],
				[/* inline code block */ 'i', `Float.hashCode()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to hash`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for this `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` object. The
 result is the integer bit representation, exactly as produced
 by the method `],
				[/* reference */ 'r', `#floatToIntBits(float)`, `floatToIntBits(float)`],
				[/* text */ 't', `, of the primitive
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value represented by this `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', `
 object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'min(float,float)', [
			[/* method description */
				[/* text */ 't', `Returns the smaller of two `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` values
 as if by calling `],
				[/* reference */ 'r', `.Math#min(double,double)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first operand`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second operand`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the smaller of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`]
			]
		]],
		[/* method */ 'max(float,float)', [
			[/* method description */
				[/* text */ 't', `Returns the greater of two `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` values
 as if by calling `],
				[/* reference */ 'r', `.Math#max(double,double)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first operand`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second operand`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the greater of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`]
			]
		]],
		[/* method */ 'floatToRawIntBits(float)', [
			[/* method description */
				[/* text */ 't', `Returns a representation of the specified floating-point value
 according to the IEEE 754 floating-point "single format" bit
 layout, preserving Not-a-Number (NaN) values.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Bit 31 (the bit that is selected by the mask
 `],
					[/* inline code block */ 'i', `0x80000000`],
					[/* text */ 't', `) represents the sign of the floating-point
 number.
 Bits 30-23 (the bits that are selected by the mask
 `],
					[/* inline code block */ 'i', `0x7f800000`],
					[/* text */ 't', `) represent the exponent.
 Bits 22-0 (the bits that are selected by the mask
 `],
					[/* inline code block */ 'i', `0x007fffff`],
					[/* text */ 't', `) represent the significand (sometimes called
 the mantissa) of the floating-point number.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the argument is positive infinity, the result is
 `],
					[/* inline code block */ 'i', `0x7f800000`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the argument is negative infinity, the result is
 `],
					[/* inline code block */ 'i', `0xff800000`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the argument is NaN, the result is the integer representing
 the actual NaN value.  Unlike the `],
					[/* inline code block */ 'i', `floatToIntBits`],
					[/* text */ 't', `
 method, `],
					[/* inline code block */ 'i', `floatToRawIntBits`],
					[/* text */ 't', ` does not collapse all the
 bit patterns encoding a NaN to a single "canonical"
 NaN value.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `In all cases, the result is an integer that, when given to the
 `],
					[/* reference */ 'r', `#intBitsToFloat(int)`, `intBitsToFloat(int)`],
					[/* text */ 't', ` method, will produce a
 floating-point value the same as the argument to
 `],
					[/* inline code block */ 'i', `floatToRawIntBits`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `a floating-point number.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the bits that represent the floating-point number.`]
			]
		]],
		[/* method */ 'floatToIntBits(float)', [
			[/* method description */
				[/* text */ 't', `Returns a representation of the specified floating-point value
 according to the IEEE 754 floating-point "single format" bit
 layout.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Bit 31 (the bit that is selected by the mask
 `],
					[/* inline code block */ 'i', `0x80000000`],
					[/* text */ 't', `) represents the sign of the floating-point
 number.
 Bits 30-23 (the bits that are selected by the mask
 `],
					[/* inline code block */ 'i', `0x7f800000`],
					[/* text */ 't', `) represent the exponent.
 Bits 22-0 (the bits that are selected by the mask
 `],
					[/* inline code block */ 'i', `0x007fffff`],
					[/* text */ 't', `) represent the significand (sometimes called
 the mantissa) of the floating-point number.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the argument is positive infinity, the result is
 `],
					[/* inline code block */ 'i', `0x7f800000`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the argument is negative infinity, the result is
 `],
					[/* inline code block */ 'i', `0xff800000`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the argument is NaN, the result is `],
					[/* inline code block */ 'i', `0x7fc00000`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `In all cases, the result is an integer that, when given to the
 `],
					[/* reference */ 'r', `#intBitsToFloat(int)`, `intBitsToFloat(int)`],
					[/* text */ 't', ` method, will produce a floating-point
 value the same as the argument to `],
					[/* inline code block */ 'i', `floatToIntBits`],
					[/* text */ 't', `
 (except all NaN values are collapsed to a single
 "canonical" NaN value).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `a floating-point number.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the bits that represent the floating-point number.`]
			]
		]],
		[/* method */ 'intBitsToFloat(int)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value corresponding to a given
 bit representation.
 The argument is considered to be a representation of a
 floating-point value according to the IEEE 754 floating-point
 "single format" bit layout.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the argument is `],
					[/* inline code block */ 'i', `0x7f800000`],
					[/* text */ 't', `, the result is positive
 infinity.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the argument is `],
					[/* inline code block */ 'i', `0xff800000`],
					[/* text */ 't', `, the result is negative
 infinity.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the argument is any value in the range
 `],
					[/* inline code block */ 'i', `0x7f800001`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `0x7fffffff`],
					[/* text */ 't', ` or in
 the range `],
					[/* inline code block */ 'i', `0xff800001`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `0xffffffff`],
					[/* text */ 't', `, the result is a NaN.  No IEEE 754
 floating-point operation provided by Java can distinguish
 between two NaN values of the same type with different bit
 patterns.  Distinct values of NaN are only distinguishable by
 use of the `],
					[/* inline code block */ 'i', `Float.floatToRawIntBits`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `In all other cases, let `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, `],
					[/* text */ 't', `e`],
					[/* text */ 't', `, and `],
					[/* text */ 't', `m`],
					[/* text */ 't', ` be three
 values that can be computed from the argument:

 `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `int s = ((bits >> 31) == 0) ? 1 : -1;
 int e = ((bits >> 23) & 0xff);
 int m = (e == 0) ?
                 (bits & 0x7fffff) << 1 :
                 (bits & 0x7fffff) | 0x800000;`]
					]]
				]],
				[/* text */ 't', `

 Then the floating-point result equals the value of the mathematical
 expression `],
				[/* text */ 't', `s`],
				[/* text */ 't', `·`],
				[/* text */ 't', `m`],
				[/* text */ 't', `·2`],
				[/* text */ 't', `e-150`, 'sup'],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note that this method may not be able to return a
 `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` NaN with exactly same bit pattern as the
 `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` argument.  IEEE 754 distinguishes between two
 kinds of NaNs, quiet NaNs and `],
					[/* text */ 't', `signaling NaNs`],
					[/* text */ 't', `.  The
 differences between the two kinds of NaN are generally not
 visible in Java.  Arithmetic operations on signaling NaNs turn
 them into quiet NaNs with a different, but often similar, bit
 pattern.  However, on some processors merely copying a
 signaling NaN also performs that conversion.  In particular,
 copying a signaling NaN to return it to the calling method may
 perform this conversion.  So `],
					[/* inline code block */ 'i', `intBitsToFloat`],
					[/* text */ 't', ` may
 not be able to return a `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` with a signaling NaN
 bit pattern.  Consequently, for some `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` values,
 `],
					[/* inline code block */ 'i', `floatToRawIntBits(intBitsToFloat(start))`],
					[/* text */ 't', ` may
 `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` equal `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `.  Moreover, which
 particular bit patterns represent signaling NaNs is platform
 dependent; although all NaN bit patterns, quiet or signaling,
 must be in the NaN range identified above.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'bits', [/* parameter description */
					[/* text */ 't', `an integer.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` floating-point value with the same bit
          pattern.`]
			]
		]],
		[/* method */ 'compareTo(java.lang.Float)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` objects numerically.

 This method imposes a total order on `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` objects
 with two differences compared to the incomplete order defined by
 the Java language numerical comparison operators (`],
				[/* inline code block */ 'i', `<, <=, ==, >=, >`],
				[/* text */ 't', `) on `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` values.

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` A NaN is `],
						[/* text */ 't', `unordered`],
						[/* text */ 't', ` with respect to other
          values and unequal to itself under the comparison
          operators.  This method chooses to define `],
						[/* inline code block */ 'i', `Float.NaN`],
						[/* text */ 't', ` to be equal to itself and greater than all
          other `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` values (including `],
						[/* inline code block */ 'i', `Float.POSITIVE_INFINITY`],
						[/* text */ 't', `).

      `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` Positive zero and negative zero compare equal
      numerically, but are distinct and distinguishable values.
      This method chooses to define positive zero (`],
						[/* inline code block */ 'i', `+0.0f`],
						[/* text */ 't', `),
      to be greater than negative zero (`],
						[/* inline code block */ 'i', `-0.0f`],
						[/* text */ 't', `).
 `]
					]]
				]],
				[/* text */ 't', `

 This ensures that the `],
				[/* text */ 't', `natural ordering`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', `
 objects imposed by this method is `],
				[/* text */ 't', `consistent with
 equals`],
				[/* text */ 't', `; see `],
				[/* reference */ 'r', `.Double#equivalenceRelation`],
				[/* text */ 't', ` for details of floating-point comparison and
 ordering.`]
			],
			[/* parameters */
				[/* parameter */ 'anotherFloat', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Float`],
					[/* text */ 't', ` to be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `anotherFloat`],
				[/* text */ 't', ` is
          numerically equal to this `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', `; a value
          less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', `
          is numerically less than `],
				[/* inline code block */ 'i', `anotherFloat`],
				[/* text */ 't', `;
          and a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this
          `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` is numerically greater than
          `],
				[/* inline code block */ 'i', `anotherFloat`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'compare(float,float)', [
			[/* method description */
				[/* text */ 't', `Compares the two specified `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` values. The sign
 of the integer value returned is the same as that of the
 integer that would be returned by the call:
 `],
				[/* code block */ 'c', `    new Float(f1).compareTo(new Float(f2))
 `]
			],
			[/* parameters */
				[/* parameter */ 'f1', [/* parameter description */
					[/* text */ 't', `the first `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` to compare.`]
				]],
				[/* parameter */ 'f2', [/* parameter description */
					[/* text */ 't', `the second `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `f1`],
				[/* text */ 't', ` is
          numerically equal to `],
				[/* inline code block */ 'i', `f2`],
				[/* text */ 't', `; a value less than
          `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `f1`],
				[/* text */ 't', ` is numerically less than
          `],
				[/* inline code block */ 'i', `f2`],
				[/* text */ 't', `; and a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `
          if `],
				[/* inline code block */ 'i', `f1`],
				[/* text */ 't', ` is numerically greater than
          `],
				[/* inline code block */ 'i', `f2`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'byteValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` as a `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` after
 a narrowing primitive conversion.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value represented by this object
          converted to type `],
				[/* inline code block */ 'i', `byte`]
			]
		]],
		[/* method */ 'shortValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` as a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `
 after a narrowing primitive conversion.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value represented by this object
          converted to type `],
				[/* inline code block */ 'i', `short`]
			]
		]],
		[/* method */ 'intValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` after
 a narrowing primitive conversion.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value represented by this object
          converted to type `],
				[/* inline code block */ 'i', `int`]
			]
		]],
		[/* method */ 'longValue()', [
			[/* method description */
				[/* text */ 't', `Returns value of this `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` after a
 narrowing primitive conversion.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value represented by this object
          converted to type `],
				[/* inline code block */ 'i', `long`]
			]
		]],
		[/* method */ 'floatValue()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value of this `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value represented by this object`]
			]
		]],
		[/* method */ 'doubleValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` as a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `
 after a widening primitive conversion.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value represented by this
         object converted to type `],
				[/* inline code block */ 'i', `double`]
			]
		]],
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` object holding the
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value represented by the argument string
 `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then a
 `],
					[/* inline code block */ 'i', `NullPointerException`],
					[/* text */ 't', ` is thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Leading and trailing whitespace characters in `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', `
 are ignored.  Whitespace is removed as if by the `],
					[/* reference */ 'r', `.String#trim()`],
					[/* text */ 't', ` method; that is, both ASCII space and control
 characters are removed. The rest of `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` should
 constitute a `],
					[/* text */ 't', `FloatValue`],
					[/* text */ 't', ` as described by the lexical
 syntax rules:

 `]
				]],
				[/* block */ 'b', [
					[/* dl */ 'dl', [
						[/* dt */ 'dt', [
							[/* text */ 't', `FloatValue:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `opt`, 'sub'],
							[/* text */ 't', ` `],
							[/* inline code block */ 'i', `NaN`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `opt`, 'sub'],
							[/* text */ 't', ` `],
							[/* inline code block */ 'i', `Infinity`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `opt`, 'sub'],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `opt`, 'sub'],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `SignedInteger`],
							[/* text */ 't', `
 `]
						]]
					]],
					[/* dl */ 'dl', [
						[/* dt */ 'dt', [
							[/* text */ 't', `HexFloatingPointLiteral`],
							[/* text */ 't', `:
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', ` `],
							[/* text */ 't', `opt`, 'sub'],
							[/* text */ 't', `
 `]
						]]
					]],
					[/* dl */ 'dl', [
						[/* dt */ 'dt', [
							[/* text */ 't', `HexSignificand:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `HexNumeral`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `HexNumeral`],
							[/* text */ 't', ` `],
							[/* inline code block */ 'i', `.`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* inline code block */ 'i', `0x`],
							[/* text */ 't', ` `],
							[/* text */ 't', `opt`, 'sub'],
							[/* inline code block */ 'i', `.`],
							[/* text */ 't', ` HexDigits`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* inline code block */ 'i', `0X`],
							[/* text */ 't', `opt`, 'sub'],
							[/* inline code block */ 'i', `.`],
							[/* text */ 't', ` `],
							[/* text */ 't', `HexDigits`],
							[/* text */ 't', `
 `]
						]]
					]],
					[/* dl */ 'dl', [
						[/* dt */ 'dt', [
							[/* text */ 't', `BinaryExponent:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `BinaryExponentIndicator SignedInteger`],
							[/* text */ 't', `
 `]
						]]
					]],
					[/* dl */ 'dl', [
						[/* dt */ 'dt', [
							[/* text */ 't', `BinaryExponentIndicator:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* inline code block */ 'i', `p`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* inline code block */ 'i', `P`],
							[/* text */ 't', `
 `]
						]]
					]]
				]],
				[/* text */ 't', `

 where `],
				[/* text */ 't', `Sign`],
				[/* text */ 't', `, `],
				[/* text */ 't', `FloatingPointLiteral`],
				[/* text */ 't', `,
 `],
				[/* text */ 't', `HexNumeral`],
				[/* text */ 't', `, `],
				[/* text */ 't', `HexDigits`],
				[/* text */ 't', `, `],
				[/* text */ 't', `SignedInteger`],
				[/* text */ 't', ` and
 `],
				[/* text */ 't', `FloatTypeSuffix`],
				[/* text */ 't', ` are as defined in the lexical structure
 sections of
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `,
 except that underscores are not accepted between digits.
 If `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` does not have the form of
 a `],
				[/* text */ 't', `FloatValue`],
				[/* text */ 't', `, then a `],
				[/* inline code block */ 'i', `NumberFormatException`],
				[/* text */ 't', `
 is thrown. Otherwise, `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` is regarded as
 representing an exact decimal value in the usual
 "computerized scientific notation" or as an exact
 hexadecimal value; this exact numerical value is then
 conceptually converted to an "infinitely precise"
 binary value that is then rounded to type `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `
 by the usual round-to-nearest rule of IEEE 754 floating-point
 arithmetic, which includes preserving the sign of a zero
 value.

 Note that the round-to-nearest rule also implies overflow and
 underflow behaviour; if the exact value of `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` is large
 enough in magnitude (greater than or equal to (`],
				[/* text */ 't', `MAX_VALUE`],
				[/* text */ 't', ` + `],
				[/* reference */ 'r', `.Math#ulp(float)`],
				[/* text */ 't', `/2),
 rounding to `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` will result in an infinity and if the
 exact value of `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` is small enough in magnitude (less
 than or equal to `],
				[/* text */ 't', `MIN_VALUE`],
				[/* text */ 't', `/2), rounding to float will
 result in a zero.

 Finally, after rounding a `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` object representing
 this `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value is returned.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `To interpret localized string representations of a
 floating-point value, use subclasses of `],
					[/* reference */ 'r', `java.text.NumberFormat`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note that trailing format specifiers, specifiers that
 determine the type of a floating-point literal
 (`],
					[/* inline code block */ 'i', `1.0f`],
					[/* text */ 't', ` is a `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` value;
 `],
					[/* inline code block */ 'i', `1.0d`],
					[/* text */ 't', ` is a `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value), do
 `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` influence the results of this method.  In other
 words, the numerical value of the input string is converted
 directly to the target floating-point type.  In general, the
 two-step sequence of conversions, string to `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', `
 followed by `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', `, is
 `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` equivalent to converting a string directly to
 `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', `.  For example, if first converted to an
 intermediate `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` and then to
 `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', `, the string`],
					[/* new line */ 'n'],
					[/* inline code block */ 'i', `"1.00000017881393421514957253748434595763683319091796875001d"`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 results in the `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` value
 `],
					[/* inline code block */ 'i', `1.0000002f`],
					[/* text */ 't', `; if the string is converted directly to
 `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `1.0000001f`],
					[/* text */ 't', ` results.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `To avoid calling this method on an invalid string and having
 a `],
					[/* inline code block */ 'i', `NumberFormatException`],
					[/* text */ 't', ` be thrown, the documentation
 for `],
					[/* reference */ 'r', `.Double#valueOf(java.lang.String)`],
					[/* text */ 't', ` lists a regular
 expression which can be used to screen the input.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the string to be parsed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if the string does not contain a
          parsable number.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` object holding the value
          represented by the `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` argument.`]
			]
		]],
		[/* method */ 'valueOf(float)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` instance representing the specified
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value.
 If a new `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` instance is not required, this method
 should generally be used in preference to the constructor
 `],
				[/* reference */ 'r', `#%3Cinit%3E(double)`, `Float(float)`],
				[/* text */ 't', `, as this method is likely to yield
 significantly better space and time performance by caching
 frequently requested values.`]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `a float value.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` instance representing `],
				[/* inline code block */ 'i', `f`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'toHexString(float)', [
			[/* method description */
				[/* text */ 't', `Returns a hexadecimal string representation of the
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` argument. All characters mentioned below are
 ASCII characters.

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is NaN, the result is the string
     "`],
						[/* inline code block */ 'i', `NaN`],
						[/* text */ 't', `".
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Otherwise, the result is a string that represents the sign and
 magnitude (absolute value) of the argument. If the sign is negative,
 the first character of the result is '`],
						[/* inline code block */ 'i', `-`],
						[/* text */ 't', `'
 (`],
						[/* inline code block */ 'i', `'\\u002D'`],
						[/* text */ 't', `); if the sign is positive, no sign character
 appears in the result. As for the magnitude `],
						[/* text */ 't', `m`],
						[/* text */ 't', `:

 `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', `If `],
								[/* text */ 't', `m`],
								[/* text */ 't', ` is infinity, it is represented by the string
 `],
								[/* inline code block */ 'i', `"Infinity"`],
								[/* text */ 't', `; thus, positive infinity produces the
 result `],
								[/* inline code block */ 'i', `"Infinity"`],
								[/* text */ 't', ` and negative infinity produces
 the result `],
								[/* inline code block */ 'i', `"-Infinity"`],
								[/* text */ 't', `.

 `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `If `],
								[/* text */ 't', `m`],
								[/* text */ 't', ` is zero, it is represented by the string
 `],
								[/* inline code block */ 'i', `"0x0.0p0"`],
								[/* text */ 't', `; thus, negative zero produces the result
 `],
								[/* inline code block */ 'i', `"-0x0.0p0"`],
								[/* text */ 't', ` and positive zero produces the result
 `],
								[/* inline code block */ 'i', `"0x0.0p0"`],
								[/* text */ 't', `.

 `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `If `],
								[/* text */ 't', `m`],
								[/* text */ 't', ` is a `],
								[/* inline code block */ 'i', `float`],
								[/* text */ 't', ` value with a
 normalized representation, substrings are used to represent the
 significand and exponent fields.  The significand is
 represented by the characters `],
								[/* inline code block */ 'i', `"0x1."`],
								[/* text */ 't', `
 followed by a lowercase hexadecimal representation of the rest
 of the significand as a fraction.  Trailing zeros in the
 hexadecimal representation are removed unless all the digits
 are zero, in which case a single zero is used. Next, the
 exponent is represented by `],
								[/* inline code block */ 'i', `"p"`],
								[/* text */ 't', ` followed
 by a decimal string of the unbiased exponent as if produced by
 a call to `],
								[/* reference */ 'r', `.Integer#toString(int)`],
								[/* text */ 't', ` on the
 exponent value.

 `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', `If `],
								[/* text */ 't', `m`],
								[/* text */ 't', ` is a `],
								[/* inline code block */ 'i', `float`],
								[/* text */ 't', ` value with a subnormal
 representation, the significand is represented by the
 characters `],
								[/* inline code block */ 'i', `"0x0."`],
								[/* text */ 't', ` followed by a
 hexadecimal representation of the rest of the significand as a
 fraction.  Trailing zeros in the hexadecimal representation are
 removed. Next, the exponent is represented by
 `],
								[/* inline code block */ 'i', `"p-126"`],
								[/* text */ 't', `.  Note that there must be at
 least one nonzero digit in a subnormal significand.

 `]
							]]
						]]
					]]
				]],
				[/* table */ 'tbl',
					[/* caption */ 'tc', [
						[/* text */ 't', `Examples`]
					]],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Floating-point Value`]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Hexadecimal String`]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `1.0`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `0x1.0p0`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `-1.0`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `-0x1.0p0`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `2.0`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `0x1.0p1`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `3.0`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `0x1.8p1`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `0.5`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `0x1.0p-1`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `0.25`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `0x1.0p-2`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `Float.MAX_VALUE`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `0x1.fffffep127`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `Minimum Normal Value`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `0x1.0p-126`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `Maximum Subnormal Value`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `0x0.fffffep-126`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `Float.MIN_VALUE`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `0x0.000002p-126`]
							]]
						]]
					]],
				]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` to be converted.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hex string representation of the argument.`]
			]
		]],
		[/* method */ 'resolveConstantDesc(java.lang.invoke.MethodHandles.Lookup)', [
			[/* method description */
				[/* text */ 't', `Resolves this instance as a `],
				[/* reference */ 'r', `java.lang.constant.ConstantDesc`],
				[/* text */ 't', `, the result of which is
 the instance itself.`]
			],
			[/* parameters */
				[/* parameter */ 'lookup', [/* parameter description */
					[/* text */ 't', `ignored`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* reference */ 'r', `java.lang.Float`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'describeConstable()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` containing the nominal descriptor for this
 instance, which is the instance itself.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* reference */ 'r', `java.util.Optional`],
				[/* text */ 't', ` describing the `],
				[/* reference */ 'r', `java.lang.Float`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'isNaN()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` value is a
 Not-a-Number (NaN), `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the value represented by this object is
          NaN; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isNaN(float)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified number is a
 Not-a-Number (NaN) value, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `the value to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the argument is NaN;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'sum(float,float)', [
			[/* method description */
				[/* text */ 't', `Adds two `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` values together as per the + operator.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the first operand`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the second operand`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the sum of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`]
			]
		]],
		[/* method */ 'parseFloat(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` initialized to the value
 represented by the specified `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, as performed
 by the `],
				[/* inline code block */ 'i', `valueOf`],
				[/* text */ 't', ` method of class `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the string to be parsed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the string is null`]
				]],
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if the string does not contain a
               parsable `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value represented by the string
         argument.`]
			]
		]],
		[/* method */ 'isInfinite()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Float`],
				[/* text */ 't', ` value is
 infinitely large in magnitude, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the value represented by this object is
          positive infinity or negative infinity;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isInfinite(float)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified number is infinitely
 large in magnitude, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `the value to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the argument is positive infinity or
          negative infinity; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isFinite(float)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the argument is a finite floating-point
 value; returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise (for NaN and infinity
 arguments).`]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` value to be tested`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the argument is a finite
 floating-point value, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]]
	],
]);
