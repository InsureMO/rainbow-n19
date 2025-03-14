import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Math', [
	[/* class description */
		[/* text */ 't', `The class `],
		[/* inline code block */ 'i', `Math`],
		[/* text */ 't', ` contains methods for performing basic
 numeric operations such as the elementary exponential, logarithm,
 square root, and trigonometric functions.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Unlike some of the numeric methods of class
 `],
			[/* reference */ 'r', `java.lang.StrictMath`, `StrictMath`],
			[/* text */ 't', `, all implementations of the equivalent
 functions of class `],
			[/* inline code block */ 'i', `Math`],
			[/* text */ 't', ` are not defined to return the
 bit-for-bit same results.  This relaxation permits
 better-performing implementations where strict reproducibility is
 not required.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `By default many of the `],
			[/* inline code block */ 'i', `Math`],
			[/* text */ 't', ` methods simply call
 the equivalent method in `],
			[/* inline code block */ 'i', `StrictMath`],
			[/* text */ 't', ` for their
 implementation.  Code generators are encouraged to use
 platform-specific native libraries or microprocessor instructions,
 where available, to provide higher-performance implementations of
 `],
			[/* inline code block */ 'i', `Math`],
			[/* text */ 't', ` methods.  Such higher-performance
 implementations still must conform to the specification for
 `],
			[/* inline code block */ 'i', `Math`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The quality of implementation specifications concern two
 properties, accuracy of the returned result and monotonicity of the
 method.  Accuracy of the floating-point `],
			[/* inline code block */ 'i', `Math`],
			[/* text */ 't', ` methods is
 measured in terms of `],
			[/* text */ 't', `ulps`],
			[/* text */ 't', `, units in the last place.  For a
 given floating-point format, an `],
			[/* reference */ 'r', `#ulp(double)`, `ulp`],
			[/* text */ 't', ` of a
 specific real number value is the distance between the two
 floating-point values bracketing that numerical value.  When
 discussing the accuracy of a method as a whole rather than at a
 specific argument, the number of ulps cited is for the worst-case
 error at any argument.  If a method always has an error less than
 0.5 ulps, the method always returns the floating-point number
 nearest the exact result; such a method is `],
			[/* text */ 't', `correctly
 rounded`],
			[/* text */ 't', `.  A correctly rounded method is generally the best a
 floating-point approximation can be; however, it is impractical for
 many floating-point methods to be correctly rounded.  Instead, for
 the `],
			[/* inline code block */ 'i', `Math`],
			[/* text */ 't', ` class, a larger error bound of 1 or 2 ulps is
 allowed for certain methods.  Informally, with a 1 ulp error bound,
 when the exact result is a representable number, the exact result
 should be returned as the computed result; otherwise, either of the
 two floating-point values which bracket the exact result may be
 returned.  For exact results large in magnitude, one of the
 endpoints of the bracket may be infinite.  Besides accuracy at
 individual arguments, maintaining proper relations between the
 method at different arguments is also important.  Therefore, most
 methods with more than 0.5 ulp errors are required to be
 `],
			[/* text */ 't', `semi-monotonic`],
			[/* text */ 't', `: whenever the mathematical function is
 non-decreasing, so is the floating-point approximation, likewise,
 whenever the mathematical function is non-increasing, so is the
 floating-point approximation.  Not all approximations that have 1
 ulp accuracy will automatically meet the monotonicity requirements.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The platform uses signed two's complement integer arithmetic with
 int and long primitive types.  The developer should choose
 the primitive type to ensure that arithmetic operations consistently
 produce correct results, which in some cases means the operations
 will not overflow the range of values of the computation.
 The best practice is to choose the primitive type and algorithm to avoid
 overflow. In cases where the size is `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', ` and
 overflow errors need to be detected, the methods `],
			[/* inline code block */ 'i', `addExact`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `subtractExact`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `multiplyExact`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `toIntExact`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `incrementExact`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `decrementExact`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `negateExact`],
			[/* text */ 't', `
 throw an `],
			[/* inline code block */ 'i', `ArithmeticException`],
			[/* text */ 't', ` when the results overflow.
 For the arithmetic operations divide and absolute value, overflow
 occurs only with a specific minimum or maximum value and
 should be checked against the minimum or maximum as appropriate.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `Ieee754RecommendedOps`, `IEEE 754 Recommended Operations`]
		]],
		[/* text */ 't', `

 The 2019 revision of the IEEE 754 floating-point standard includes
 a section of recommended operations and the semantics of those
 operations if they are included in a programming environment. The
 recommended operations present in this class include `],
		[/* reference */ 'r', `#sin(double)`, `sin`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#cos(double)`, `cos`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#tan(double)`, `tan`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#asin(double)`, `asin`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#acos(double)`, `acos`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#atan(double)`, `atan`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#exp(double)`, `exp`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#expm1(double)`, `expm1`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#log(double)`, `log`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#log10(double)`, `log10`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#log1p(double)`, `log1p`],
		[/* text */ 't', `,
 `],
		[/* reference */ 'r', `#sinh(double)`, `sinh`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#cosh(double)`, `cosh`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#tanh(double)`, `tanh`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `#hypot(double,double)`, `hypot`],
		[/* text */ 't', `, and `],
		[/* reference */ 'r', `#pow(double,double)`, `pow`],
		[/* text */ 't', `.  (The `],
		[/* reference */ 'r', `#sqrt(double)`, `sqrt`],
		[/* text */ 't', `
 operation is a required part of IEEE 754 from a different section
 of the standard.) The special case behavior of the recommended
 operations generally follows the guidance of the IEEE 754
 standard. However, the `],
		[/* inline code block */ 'i', `pow`],
		[/* text */ 't', ` method defines different
 behavior for some arguments, as noted in its `],
		[/* reference */ 'r', `#pow(double,double)`, `specification`],
		[/* text */ 't', `. The IEEE 754 standard defines its operations to be
 correctly rounded, which is a more stringent quality of
 implementation condition than required for most of the methods in
 question that are also included in this class.`]
	],
	[/* fields */
		[/* field */ 'E', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value that is closer than any other to
 `],
				[/* text */ 't', `e`],
				[/* text */ 't', `, the base of the natural logarithms.`]
			],
		]],
		[/* field */ 'PI', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value that is closer than any other to
 `],
				[/* text */ 't', `pi`],
				[/* text */ 't', `, the ratio of the circumference of a circle to its
 diameter.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'abs(double)', [
			[/* method description */
				[/* text */ 't', `Returns the absolute value of a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value.
 If the argument is not negative, the argument is returned.
 If the argument is negative, the negation of the argument is returned.
 Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is positive zero or negative zero, the result
 is positive zero.
 `],
					[/* block */ 'b', `If the argument is infinite, the result is positive infinity.
 `],
					[/* block */ 'b', `If the argument is NaN, the result is NaN.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the argument whose absolute value is to be determined`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the absolute value of the argument.`]
			]
		]],
		[/* method */ 'acos(double)', [
			[/* method description */
				[/* text */ 't', `Returns the arc cosine of a value; the returned angle is in the
 range 0.0 through `],
				[/* text */ 't', `pi`],
				[/* text */ 't', `.  Special case:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN or its absolute value is greater
 than 1, then the result is NaN.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is `],
						[/* inline code block */ 'i', `1.0`],
						[/* text */ 't', `, the result is positive zero.
 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', `The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the value whose arc cosine is to be returned.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the arc cosine of the argument.`]
			]
		]],
		[/* method */ 'asin(double)', [
			[/* method description */
				[/* text */ 't', `Returns the arc sine of a value; the returned angle is in the
 range -`],
				[/* text */ 't', `pi`],
				[/* text */ 't', `/2 through `],
				[/* text */ 't', `pi`],
				[/* text */ 't', `/2.  Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN or its absolute value is greater
 than 1, then the result is NaN.
 `],
					[/* block */ 'b', `If the argument is zero, then the result is a zero with the
 same sign as the argument.`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', `The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the value whose arc sine is to be returned.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the arc sine of the argument.`]
			]
		]],
		[/* method */ 'atan(double)', [
			[/* method description */
				[/* text */ 't', `Returns the arc tangent of a value; the returned angle is in the
 range -`],
				[/* text */ 't', `pi`],
				[/* text */ 't', `/2 through `],
				[/* text */ 't', `pi`],
				[/* text */ 't', `/2.  Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN, then the result is NaN.
 `],
					[/* block */ 'b', `If the argument is zero, then the result is a zero with the
 same sign as the argument.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is `],
						[/* reference */ 'r', `java.lang.Double#isInfinite(double)`, `infinite`],
						[/* text */ 't', `,
 then the result is the closest value to `],
						[/* text */ 't', `pi`],
						[/* text */ 't', `/2 with the
 same sign as the input.
 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', `The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the value whose arc tangent is to be returned.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the arc tangent of the argument.`]
			]
		]],
		[/* method */ 'atan2(double,double)', [
			[/* method description */
				[/* text */ 't', `Returns the angle `],
				[/* text */ 't', `theta`],
				[/* text */ 't', ` from the conversion of rectangular
 coordinates (`],
				[/* inline code block */ 'i', `x`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `y`],
				[/* text */ 't', `) to polar
 coordinates (r, `],
				[/* text */ 't', `theta`],
				[/* text */ 't', `).
 This method computes the phase `],
				[/* text */ 't', `theta`],
				[/* text */ 't', ` by computing an arc tangent
 of `],
				[/* inline code block */ 'i', `y/x`],
				[/* text */ 't', ` in the range of -`],
				[/* text */ 't', `pi`],
				[/* text */ 't', ` to `],
				[/* text */ 't', `pi`],
				[/* text */ 't', `. Special
 cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If either argument is NaN, then the result is NaN.
 `],
					[/* block */ 'b', `If the first argument is positive zero and the second argument
 is positive, or the first argument is positive and finite and the
 second argument is positive infinity, then the result is positive
 zero.
 `],
					[/* block */ 'b', `If the first argument is negative zero and the second argument
 is positive, or the first argument is negative and finite and the
 second argument is positive infinity, then the result is negative zero.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `If the first argument is positive zero and the second argument
 is negative, or the first argument is positive and finite and the
 second argument is negative infinity, then the result is the
 `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` value closest to `],
						[/* text */ 't', `pi`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the first argument is negative zero and the second argument
 is negative, or the first argument is negative and finite and the
 second argument is negative infinity, then the result is the
 `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` value closest to -`],
						[/* text */ 't', `pi`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the first argument is positive and the second argument is
 positive zero or negative zero, or the first argument is positive
 infinity and the second argument is finite, then the result is the
 `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` value closest to `],
						[/* text */ 't', `pi`],
						[/* text */ 't', `/2.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the first argument is negative and the second argument is
 positive zero or negative zero, or the first argument is negative
 infinity and the second argument is finite, then the result is the
 `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` value closest to -`],
						[/* text */ 't', `pi`],
						[/* text */ 't', `/2.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If both arguments are positive infinity, then the result is the
 `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` value closest to `],
						[/* text */ 't', `pi`],
						[/* text */ 't', `/4.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the first argument is positive infinity and the second argument
 is negative infinity, then the result is the `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', `
 value closest to 3*`],
						[/* text */ 't', `pi`],
						[/* text */ 't', `/4.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the first argument is negative infinity and the second argument
 is positive infinity, then the result is the `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` value
 closest to -`],
						[/* text */ 't', `pi`],
						[/* text */ 't', `/4.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If both arguments are negative infinity, then the result is the
 `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` value closest to -3*`],
						[/* text */ 't', `pi`],
						[/* text */ 't', `/4.`]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', `The computed result must be within 2 ulps of the exact result.
 Results must be semi-monotonic.`]
			],
			[/* parameters */
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the ordinate coordinate`]
				]],
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the abscissa coordinate`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* text */ 't', `theta`],
				[/* text */ 't', ` component of the point
          (`],
				[/* text */ 't', `r`],
				[/* text */ 't', `, `],
				[/* text */ 't', `theta`],
				[/* text */ 't', `)
          in polar coordinates that corresponds to the point
          (`],
				[/* text */ 't', `x`],
				[/* text */ 't', `, `],
				[/* text */ 't', `y`],
				[/* text */ 't', `) in Cartesian coordinates.`]
			]
		]],
		[/* method */ 'cbrt(double)', [
			[/* method description */
				[/* text */ 't', `Returns the cube root of a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value.  For
 positive finite `],
				[/* inline code block */ 'i', `x`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `cbrt(-x) == -cbrt(x)`],
				[/* text */ 't', `; that is, the cube root of a negative value is
 the negative of the cube root of that value's magnitude.

 Special cases:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN, then the result is NaN.

 `],
					[/* block */ 'b', `If the argument is infinite, then the result is an infinity
 with the same sign as the argument.

 `],
					[/* block */ 'b', `If the argument is zero, then the result is a zero with the
 same sign as the argument.

 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', `The computed result must be within 1 ulp of the exact result.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `a value.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the cube root of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'ceil(double)', [
			[/* method description */
				[/* text */ 't', `Returns the smallest (closest to negative infinity)
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value that is greater than or equal to the
 argument and is equal to a mathematical integer. Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument value is already equal to a
 mathematical integer, then the result is the same as the
 argument.  `],
					[/* block */ 'b', `If the argument is NaN or an infinity or
 positive zero or negative zero, then the result is the same as
 the argument.  `],
					[/* block */ 'b', `If the argument value is less than zero but
 greater than -1.0, then the result is negative zero.`]
				]],
				[/* text */ 't', ` Note
 that the value of `],
				[/* inline code block */ 'i', `Math.ceil(x)`],
				[/* text */ 't', ` is exactly the
 value of `],
				[/* inline code block */ 'i', `-Math.floor(-x)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `a value.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the smallest (closest to negative infinity)
          floating-point value that is greater than or equal to
          the argument and is equal to a mathematical integer.`]
			]
		]],
		[/* method */ 'copySign(double,double)', [
			[/* method description */
				[/* text */ 't', `Returns the first floating-point argument with the sign of the
 second floating-point argument.  Note that unlike the `],
				[/* reference */ 'r', `java.lang.StrictMath#copySign(double,double)`, `StrictMath.copySign`],
				[/* text */ 't', `
 method, this method does not require NaN `],
				[/* inline code block */ 'i', `sign`],
				[/* text */ 't', `
 arguments to be treated as positive values; implementations are
 permitted to treat some NaN arguments as positive and other NaN
 arguments as negative to allow greater performance.`]
			],
			[/* parameters */
				[/* parameter */ 'magnitude', [/* parameter description */
					[/* text */ 't', `the parameter providing the magnitude of the result`]
				]],
				[/* parameter */ 'sign', [/* parameter description */
					[/* text */ 't', `the parameter providing the sign of the result`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a value with the magnitude of `],
				[/* inline code block */ 'i', `magnitude`],
				[/* text */ 't', `
 and the sign of `],
				[/* inline code block */ 'i', `sign`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'cos(double)', [
			[/* method description */
				[/* text */ 't', `Returns the trigonometric cosine of an angle. Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN or an infinity, then the
 result is NaN.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is zero, then the result is `],
						[/* inline code block */ 'i', `1.0`],
						[/* text */ 't', `.
`]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', `The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `an angle, in radians.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the cosine of the argument.`]
			]
		]],
		[/* method */ 'cosh(double)', [
			[/* method description */
				[/* text */ 't', `Returns the hyperbolic cosine of a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value.
 The hyperbolic cosine of `],
				[/* text */ 't', `x`],
				[/* text */ 't', ` is defined to be
 (`],
				[/* text */ 't', `e`],
				[/* text */ 't', `x`, 'sup'],
				[/* text */ 't', ` + e`],
				[/* text */ 't', `-x`, 'sup'],
				[/* text */ 't', `)/2
 where `],
				[/* text */ 't', `e`],
				[/* text */ 't', ` is `],
				[/* text */ 't', `Euler's number`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN, then the result is NaN.

 `],
					[/* block */ 'b', `If the argument is infinite, then the result is positive
 infinity.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is zero, then the result is `],
						[/* inline code block */ 'i', `1.0`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `The computed result must be within 2.5 ulps of the exact result.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `The number whose hyperbolic cosine is to be returned.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The hyperbolic cosine of `],
				[/* inline code block */ 'i', `x`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'exp(double)', [
			[/* method description */
				[/* text */ 't', `Returns Euler's number `],
				[/* text */ 't', `e`],
				[/* text */ 't', ` raised to the power of a
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value.  Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN, the result is NaN.
 `],
					[/* block */ 'b', `If the argument is positive infinity, then the result is
 positive infinity.
 `],
					[/* block */ 'b', `If the argument is negative infinity, then the result is
 positive zero.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is zero, then the result is `],
						[/* inline code block */ 'i', `1.0`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', `The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the exponent to raise `],
					[/* text */ 't', `e`],
					[/* text */ 't', ` to.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* text */ 't', `e`],
				[/* text */ 't', `a`, 'sup'],
				[/* text */ 't', `,
          where `],
				[/* text */ 't', `e`],
				[/* text */ 't', ` is the base of the natural logarithms.`]
			]
		]],
		[/* method */ 'expm1(double)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* text */ 't', `e`],
				[/* text */ 't', `x`, 'sup'],
				[/* text */ 't', ` -1.  Note that for values of
 `],
				[/* text */ 't', `x`],
				[/* text */ 't', ` near 0, the exact sum of
 `],
				[/* inline code block */ 'i', `expm1(x)`],
				[/* text */ 't', ` + 1 is much closer to the true
 result of `],
				[/* text */ 't', `e`],
				[/* text */ 't', `x`, 'sup'],
				[/* text */ 't', ` than `],
				[/* inline code block */ 'i', `exp(x)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN, the result is NaN.

 `],
					[/* block */ 'b', `If the argument is positive infinity, then the result is
 positive infinity.

 `],
					[/* block */ 'b', `If the argument is negative infinity, then the result is
 -1.0.

 `],
					[/* block */ 'b', `If the argument is zero, then the result is a zero with the
 same sign as the argument.

 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.  The result of
 `],
					[/* inline code block */ 'i', `expm1`],
					[/* text */ 't', ` for any finite input must be greater than or
 equal to `],
					[/* inline code block */ 'i', `-1.0`],
					[/* text */ 't', `.  Note that once the exact result of
 `],
					[/* text */ 't', `e`],
					[/* text */ 't', `x`, 'sup'],
					[/* text */ 't', ` - 1 is within 1/2
 ulp of the limit value -1, `],
					[/* inline code block */ 'i', `-1.0`],
					[/* text */ 't', ` should be
 returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the exponent to raise `],
					[/* text */ 't', `e`],
					[/* text */ 't', ` to in the computation of
              `],
					[/* text */ 't', `e`],
					[/* text */ 't', `x`, 'sup'],
					[/* text */ 't', ` -1.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* text */ 't', `e`],
				[/* text */ 't', `x`, 'sup'],
				[/* text */ 't', ` - 1.`]
			]
		]],
		[/* method */ 'floor(double)', [
			[/* method description */
				[/* text */ 't', `Returns the largest (closest to positive infinity)
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value that is less than or equal to the
 argument and is equal to a mathematical integer. Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument value is already equal to a
 mathematical integer, then the result is the same as the
 argument.  `],
					[/* block */ 'b', `If the argument is NaN or an infinity or
 positive zero or negative zero, then the result is the same as
 the argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `a value.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the largest (closest to positive infinity)
          floating-point value that less than or equal to the argument
          and is equal to a mathematical integer.`]
			]
		]],
		[/* method */ 'fma(double,double,double)', [
			[/* method description */
				[/* text */ 't', `Returns the fused multiply add of the three arguments; that is,
 returns the exact product of the first two arguments summed
 with the third argument and then rounded once to the nearest
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `.

 The rounding is done using the `],
				[/* reference */ 'r', `java.math.RoundingMode#HALF_EVEN`, `round to nearest even rounding mode`],
				[/* text */ 't', `.

 In contrast, if `],
				[/* inline code block */ 'i', `a * b + c`],
				[/* text */ 't', ` is evaluated as a regular
 floating-point expression, two rounding errors are involved,
 the first for the multiply operation, the second for the
 addition operation.

 `],
				[/* block */ 'b', `Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If any argument is NaN, the result is NaN.

 `],
					[/* block */ 'b', ` If one of the first two arguments is infinite and the
 other is zero, the result is NaN.

 `],
					[/* block */ 'b', ` If the exact product of the first two arguments is infinite
 (in other words, at least one of the arguments is infinite and
 the other is neither zero nor NaN) and the third argument is an
 infinity of the opposite sign, the result is NaN.

 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note that `],
					[/* inline code block */ 'i', `fma(a, 1.0, c)`],
					[/* text */ 't', ` returns the same
 result as (`],
					[/* inline code block */ 'i', `a + c`],
					[/* text */ 't', `).  However,
 `],
					[/* inline code block */ 'i', `fma(a, b, +0.0)`],
					[/* text */ 't', ` does `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` always return the
 same result as (`],
					[/* inline code block */ 'i', `a * b`],
					[/* text */ 't', `) since
 `],
					[/* inline code block */ 'i', `fma(-0.0, +0.0, +0.0)`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `+0.0`],
					[/* text */ 't', ` while
 (`],
					[/* inline code block */ 'i', `-0.0 * +0.0`],
					[/* text */ 't', `) is `],
					[/* inline code block */ 'i', `-0.0`],
					[/* text */ 't', `; `],
					[/* inline code block */ 'i', `fma(a, b, -0.0)`],
					[/* text */ 't', ` is
 equivalent to (`],
					[/* inline code block */ 'i', `a * b`],
					[/* text */ 't', `) however.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `a value`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `a value`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `a value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `(`],
				[/* text */ 't', `a`],
				[/* text */ 't', ` × `],
				[/* text */ 't', `b`],
				[/* text */ 't', ` + `],
				[/* text */ 't', `c`],
				[/* text */ 't', `)
 computed, as if with unlimited range and precision, and rounded
 once to the nearest `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value`]
			]
		]],
		[/* method */ 'hypot(double,double)', [
			[/* method description */
				[/* text */ 't', `Returns sqrt(`],
				[/* text */ 't', `x`],
				[/* text */ 't', `2`, 'sup'],
				[/* text */ 't', ` +`],
				[/* text */ 't', `y`],
				[/* text */ 't', `2`, 'sup'],
				[/* text */ 't', `)
 without intermediate overflow or underflow.

 `],
				[/* block */ 'b', `Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If either argument is infinite, then the result
 is positive infinity.

 `],
					[/* block */ 'b', ` If either argument is NaN and neither argument is infinite,
 then the result is NaN.

 `],
					[/* block */ 'b', ` If both arguments are zero, the result is positive zero.
 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `The computed result must be within 1 ulp of the exact
 result.  If one parameter is held constant, the results must be
 semi-monotonic in the other parameter.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `a value`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `a value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `sqrt(`],
				[/* text */ 't', `x`],
				[/* text */ 't', `2`, 'sup'],
				[/* text */ 't', ` +`],
				[/* text */ 't', `y`],
				[/* text */ 't', `2`, 'sup'],
				[/* text */ 't', `)
 without intermediate overflow or underflow`]
			]
		]],
		[/* method */ 'IEEEremainder(double,double)', [
			[/* method description */
				[/* text */ 't', `Computes the remainder operation on two arguments as prescribed
 by the IEEE 754 standard.
 The remainder value is mathematically equal to
 `],
				[/* inline code block */ 'i', `f1 - f2`],
				[/* text */ 't', ` × `],
				[/* text */ 't', `n`],
				[/* text */ 't', `,
 where `],
				[/* text */ 't', `n`],
				[/* text */ 't', ` is the mathematical integer closest to the exact
 mathematical value of the quotient `],
				[/* inline code block */ 'i', `f1/f2`],
				[/* text */ 't', `, and if two
 mathematical integers are equally close to `],
				[/* inline code block */ 'i', `f1/f2`],
				[/* text */ 't', `,
 then `],
				[/* text */ 't', `n`],
				[/* text */ 't', ` is the integer that is even. If the remainder is
 zero, its sign is the same as the sign of the first argument.
 Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If either argument is NaN, or the first argument is infinite,
 or the second argument is positive zero or negative zero, then the
 result is NaN.
 `],
					[/* block */ 'b', `If the first argument is finite and the second argument is
 infinite, then the result is the same as the first argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'f1', [/* parameter description */
					[/* text */ 't', `the dividend.`]
				]],
				[/* parameter */ 'f2', [/* parameter description */
					[/* text */ 't', `the divisor.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the remainder when `],
				[/* inline code block */ 'i', `f1`],
				[/* text */ 't', ` is divided by
          `],
				[/* inline code block */ 'i', `f2`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'log(double)', [
			[/* method description */
				[/* text */ 't', `Returns the natural logarithm (base `],
				[/* text */ 't', `e`],
				[/* text */ 't', `) of a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `
 value.  Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN or less than zero, then the result
 is NaN.
 `],
					[/* block */ 'b', `If the argument is positive infinity, then the result is
 positive infinity.
 `],
					[/* block */ 'b', `If the argument is positive zero or negative zero, then the
 result is negative infinity.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is `],
						[/* inline code block */ 'i', `1.0`],
						[/* text */ 't', `, then the result is positive
 zero.
 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', `The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `a value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value ln `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `, the natural logarithm of
          `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'log10(double)', [
			[/* method description */
				[/* text */ 't', `Returns the base 10 logarithm of a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value.
 Special cases:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN or less than zero, then the result
 is NaN.
 `],
					[/* block */ 'b', `If the argument is positive infinity, then the result is
 positive infinity.
 `],
					[/* block */ 'b', `If the argument is positive zero or negative zero, then the
 result is negative infinity.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is equal to 10`],
						[/* text */ 't', `n`, 'sup'],
						[/* text */ 't', ` for
 integer `],
						[/* text */ 't', `n`],
						[/* text */ 't', `, then the result is `],
						[/* text */ 't', `n`],
						[/* text */ 't', `. In particular,
 if the argument is `],
						[/* inline code block */ 'i', `1.0`],
						[/* text */ 't', ` (10`],
						[/* text */ 't', `0`, 'sup'],
						[/* text */ 't', `), then the
 result is positive zero.
 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', `The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `a value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the base 10 logarithm of  `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'log1p(double)', [
			[/* method description */
				[/* text */ 't', `Returns the natural logarithm of the sum of the argument and 1.
 Note that for small values `],
				[/* inline code block */ 'i', `x`],
				[/* text */ 't', `, the result of
 `],
				[/* inline code block */ 'i', `log1p(x)`],
				[/* text */ 't', ` is much closer to the true result of ln(1
 + `],
				[/* inline code block */ 'i', `x`],
				[/* text */ 't', `) than the floating-point evaluation of
 `],
				[/* inline code block */ 'i', `log(1.0+x)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `Special cases:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN or less than -1, then the result is
 NaN.

 `],
					[/* block */ 'b', `If the argument is positive infinity, then the result is
 positive infinity.

 `],
					[/* block */ 'b', `If the argument is negative one, then the result is
 negative infinity.

 `],
					[/* block */ 'b', `If the argument is zero, then the result is a zero with the
 same sign as the argument.

 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `a value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value ln(`],
				[/* inline code block */ 'i', `x`],
				[/* text */ 't', ` + 1), the natural
 log of `],
				[/* inline code block */ 'i', `x`],
				[/* text */ 't', ` + 1`]
			]
		]],
		[/* method */ 'max(double,double)', [
			[/* method description */
				[/* text */ 't', `Returns the greater of two `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values.  That
 is, the result is the argument closer to positive infinity. If
 the arguments have the same value, the result is that same
 value. If either value is NaN, then the result is NaN.  Unlike
 the numerical comparison operators, this method considers
 negative zero to be strictly smaller than positive zero. If one
 argument is positive zero and the other negative zero, the
 result is positive zero.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `an argument.`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `another argument.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the larger of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'min(double,double)', [
			[/* method description */
				[/* text */ 't', `Returns the smaller of two `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values.  That
 is, the result is the value closer to negative infinity. If the
 arguments have the same value, the result is that same
 value. If either value is NaN, then the result is NaN.  Unlike
 the numerical comparison operators, this method considers
 negative zero to be strictly smaller than positive zero. If one
 argument is positive zero and the other is negative zero, the
 result is negative zero.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `an argument.`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `another argument.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the smaller of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'nextAfter(double,double)', [
			[/* method description */
				[/* text */ 't', `Returns the floating-point number adjacent to the first
 argument in the direction of the second argument.  If both
 arguments compare as equal the second argument is returned.

 `],
				[/* block */ 'b', `
 Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If either argument is a NaN, then NaN is returned.

 `],
					[/* block */ 'b', [
						[/* text */ 't', ` If both arguments are signed zeros, `],
						[/* inline code block */ 'i', `direction`],
						[/* text */ 't', `
 is returned unchanged (as implied by the requirement of
 returning the second argument if the arguments compare as
 equal).

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If `],
						[/* inline code block */ 'i', `start`],
						[/* text */ 't', ` is
 ±`],
						[/* reference */ 'r', `java.lang.Double#MIN_VALUE`, `Double.MIN_VALUE`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `direction`],
						[/* text */ 't', `
 has a value such that the result should have a smaller
 magnitude, then a zero with the same sign as `],
						[/* inline code block */ 'i', `start`],
						[/* text */ 't', `
 is returned.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If `],
						[/* inline code block */ 'i', `start`],
						[/* text */ 't', ` is infinite and
 `],
						[/* inline code block */ 'i', `direction`],
						[/* text */ 't', ` has a value such that the result should
 have a smaller magnitude, `],
						[/* reference */ 'r', `java.lang.Double#MAX_VALUE`, `Double.MAX_VALUE`],
						[/* text */ 't', ` with the
 same sign as `],
						[/* inline code block */ 'i', `start`],
						[/* text */ 't', ` is returned.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If `],
						[/* inline code block */ 'i', `start`],
						[/* text */ 't', ` is equal to ±
 `],
						[/* reference */ 'r', `java.lang.Double#MAX_VALUE`, `Double.MAX_VALUE`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `direction`],
						[/* text */ 't', ` has a
 value such that the result should have a larger magnitude, an
 infinity with same sign as `],
						[/* inline code block */ 'i', `start`],
						[/* text */ 't', ` is returned.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `starting floating-point value`]
				]],
				[/* parameter */ 'direction', [/* parameter description */
					[/* text */ 't', `value indicating which of
 `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `'s neighbors or `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` should
 be returned`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The floating-point number adjacent to `],
				[/* inline code block */ 'i', `start`],
				[/* text */ 't', ` in the
 direction of `],
				[/* inline code block */ 'i', `direction`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'nextDown(double)', [
			[/* method description */
				[/* text */ 't', `Returns the floating-point value adjacent to `],
				[/* inline code block */ 'i', `d`],
				[/* text */ 't', ` in
 the direction of negative infinity.  This method is
 semantically equivalent to `],
				[/* inline code block */ 'i', `nextAfter(d, Double.NEGATIVE_INFINITY)`],
				[/* text */ 't', `; however, a
 `],
				[/* inline code block */ 'i', `nextDown`],
				[/* text */ 't', ` implementation may run faster than its
 equivalent `],
				[/* inline code block */ 'i', `nextAfter`],
				[/* text */ 't', ` call.

 `],
				[/* block */ 'b', `Special Cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If the argument is NaN, the result is NaN.

 `],
					[/* block */ 'b', ` If the argument is negative infinity, the result is
 negative infinity.

 `],
					[/* block */ 'b', [
						[/* text */ 't', ` If the argument is zero, the result is
 `],
						[/* inline code block */ 'i', `-Double.MIN_VALUE`],
						[/* text */ 't', `

 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `starting floating-point value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The adjacent floating-point value closer to negative
 infinity.`]
			]
		]],
		[/* method */ 'nextUp(double)', [
			[/* method description */
				[/* text */ 't', `Returns the floating-point value adjacent to `],
				[/* inline code block */ 'i', `d`],
				[/* text */ 't', ` in
 the direction of positive infinity.  This method is
 semantically equivalent to `],
				[/* inline code block */ 'i', `nextAfter(d, Double.POSITIVE_INFINITY)`],
				[/* text */ 't', `; however, a `],
				[/* inline code block */ 'i', `nextUp`],
				[/* text */ 't', `
 implementation may run faster than its equivalent
 `],
				[/* inline code block */ 'i', `nextAfter`],
				[/* text */ 't', ` call.

 `],
				[/* block */ 'b', `Special Cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If the argument is NaN, the result is NaN.

 `],
					[/* block */ 'b', ` If the argument is positive infinity, the result is
 positive infinity.

 `],
					[/* block */ 'b', [
						[/* text */ 't', ` If the argument is zero, the result is
 `],
						[/* reference */ 'r', `java.lang.Double#MIN_VALUE`, `Double.MIN_VALUE`],
						[/* text */ 't', `

 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `starting floating-point value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The adjacent floating-point value closer to positive
 infinity.`]
			]
		]],
		[/* method */ 'pow(double,double)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the first argument raised to the power of the
 second argument. Special cases:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the second argument is positive or negative zero, then the
 result is 1.0.
 `],
					[/* block */ 'b', `If the second argument is 1.0, then the result is the same as the
 first argument.
 `],
					[/* block */ 'b', `If the second argument is NaN, then the result is NaN.
 `],
					[/* block */ 'b', `If the first argument is NaN and the second argument is nonzero,
 then the result is NaN.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `If
 `],
						[/* list */ 'l', [
							[/* block */ 'b', `the absolute value of the first argument is greater than 1
 and the second argument is positive infinity, or
 `],
							[/* block */ 'b', `the absolute value of the first argument is less than 1 and
 the second argument is negative infinity,
 `]
						]],
						[/* text */ 't', `
 then the result is positive infinity.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If
 `],
						[/* list */ 'l', [
							[/* block */ 'b', `the absolute value of the first argument is greater than 1 and
 the second argument is negative infinity, or
 `],
							[/* block */ 'b', `the absolute value of the
 first argument is less than 1 and the second argument is positive
 infinity,
 `]
						]],
						[/* text */ 't', `
 then the result is positive zero.

 `]
					]],
					[/* block */ 'b', `If the absolute value of the first argument equals 1 and the
 second argument is infinite, then the result is NaN.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `If
 `],
						[/* list */ 'l', [
							[/* block */ 'b', `the first argument is positive zero and the second argument
 is greater than zero, or
 `],
							[/* block */ 'b', `the first argument is positive infinity and the second
 argument is less than zero,
 `]
						]],
						[/* text */ 't', `
 then the result is positive zero.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If
 `],
						[/* list */ 'l', [
							[/* block */ 'b', `the first argument is positive zero and the second argument
 is less than zero, or
 `],
							[/* block */ 'b', `the first argument is positive infinity and the second
 argument is greater than zero,
 `]
						]],
						[/* text */ 't', `
 then the result is positive infinity.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If
 `],
						[/* list */ 'l', [
							[/* block */ 'b', `the first argument is negative zero and the second argument
 is greater than zero but not a finite odd integer, or
 `],
							[/* block */ 'b', `the first argument is negative infinity and the second
 argument is less than zero but not a finite odd integer,
 `]
						]],
						[/* text */ 't', `
 then the result is positive zero.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If
 `],
						[/* list */ 'l', [
							[/* block */ 'b', `the first argument is negative zero and the second argument
 is a positive finite odd integer, or
 `],
							[/* block */ 'b', `the first argument is negative infinity and the second
 argument is a negative finite odd integer,
 `]
						]],
						[/* text */ 't', `
 then the result is negative zero.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If
 `],
						[/* list */ 'l', [
							[/* block */ 'b', `the first argument is negative zero and the second argument
 is less than zero but not a finite odd integer, or
 `],
							[/* block */ 'b', `the first argument is negative infinity and the second
 argument is greater than zero but not a finite odd integer,
 `]
						]],
						[/* text */ 't', `
 then the result is positive infinity.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If
 `],
						[/* list */ 'l', [
							[/* block */ 'b', `the first argument is negative zero and the second argument
 is a negative finite odd integer, or
 `],
							[/* block */ 'b', `the first argument is negative infinity and the second
 argument is a positive finite odd integer,
 `]
						]],
						[/* text */ 't', `
 then the result is negative infinity.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the first argument is finite and less than zero
 `],
						[/* list */ 'l', [
							[/* block */ 'b', ` if the second argument is a finite even integer, the
 result is equal to the result of raising the absolute value of
 the first argument to the power of the second argument

 `],
							[/* block */ 'b', `if the second argument is a finite odd integer, the result
 is equal to the negative of the result of raising the absolute
 value of the first argument to the power of the second
 argument

 `],
							[/* block */ 'b', `if the second argument is finite and not an integer, then
 the result is NaN.
 `]
						]],
						[/* text */ 't', `

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If both arguments are integers, then the result is exactly equal
 to the mathematical result of raising the first argument to the power
 of the second argument if that result can in fact be represented
 exactly as a `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` value.`]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `(In the foregoing descriptions, a floating-point value is
 considered to be an integer if and only if it is finite and a
 fixed point of the method `],
					[/* reference */ 'r', `#ceil(double)`, `ceil`],
					[/* text */ 't', ` or,
 equivalently, a fixed point of the method `],
					[/* reference */ 'r', `#floor(double)`, `floor`],
					[/* text */ 't', `. A value is a fixed point of a one-argument
 method if and only if the result of applying the method to the
 value is equal to the value.)

 `]
				]],
				[/* block */ 'b', `The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the base.`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `the exponent.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `b`, 'sup'],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'random()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value with a positive sign, greater
 than or equal to `],
				[/* inline code block */ 'i', `0.0`],
				[/* text */ 't', ` and less than `],
				[/* inline code block */ 'i', `1.0`],
				[/* text */ 't', `.
 Returned values are chosen pseudorandomly with (approximately)
 uniform distribution from that range.

 `],
				[/* block */ 'b', `When this method is first called, it creates a single new
 pseudorandom-number generator, exactly as if by the expression

 `],
				[/* blockquote */ 'q', [
					[/* inline code block */ 'i', `new java.util.Random()`]
				]],
				[/* text */ 't', `

 This new pseudorandom-number generator is used thereafter for
 all calls to this method and is used nowhere else.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `This method is properly synchronized to allow correct use by
 more than one thread. However, if many threads need to generate
 pseudorandom numbers at a great rate, it may reduce contention
 for each thread to have its own pseudorandom-number generator.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a pseudorandom `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` greater than or equal
 to `],
				[/* inline code block */ 'i', `0.0`],
				[/* text */ 't', ` and less than `],
				[/* inline code block */ 'i', `1.0`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'rint(double)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value that is closest in value
 to the argument and is equal to a mathematical integer. If two
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` values that are mathematical integers are
 equally close, the result is the integer value that is
 even. Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument value is already equal to a mathematical
 integer, then the result is the same as the argument.
 `],
					[/* block */ 'b', `If the argument is NaN or an infinity or positive zero or negative
 zero, then the result is the same as the argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the closest floating-point value to `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` that is
          equal to a mathematical integer.`]
			]
		]],
		[/* method */ 'scalb(double,int)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `d`],
				[/* text */ 't', ` × 2`],
				[/* text */ 't', `scaleFactor`, 'sup'],
				[/* text */ 't', `
 rounded as if performed by a single correctly rounded
 floating-point multiply.  If the exponent of the result is
 between `],
				[/* reference */ 'r', `java.lang.Double#MIN_EXPONENT`, `Double.MIN_EXPONENT`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `java.lang.Double#MAX_EXPONENT`, `Double.MAX_EXPONENT`],
				[/* text */ 't', `, the answer is calculated exactly.  If the
 exponent of the result would be larger than `],
				[/* inline code block */ 'i', `Double.MAX_EXPONENT`],
				[/* text */ 't', `, an infinity is returned.  Note that if
 the result is subnormal, precision may be lost; that is, when
 `],
				[/* inline code block */ 'i', `scalb(x, n)`],
				[/* text */ 't', ` is subnormal, `],
				[/* inline code block */ 'i', `scalb(scalb(x, n), -n)`],
				[/* text */ 't', ` may not equal `],
				[/* text */ 't', `x`],
				[/* text */ 't', `.  When the result is non-NaN, the
 result has the same sign as `],
				[/* inline code block */ 'i', `d`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If the first argument is NaN, NaN is returned.
 `],
					[/* block */ 'b', ` If the first argument is infinite, then an infinity of the
 same sign is returned.
 `],
					[/* block */ 'b', ` If the first argument is zero, then a zero of the same
 sign is returned.
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `number to be scaled by a power of two.`]
				]],
				[/* parameter */ 'scaleFactor', [/* parameter description */
					[/* text */ 't', `power of 2 used to scale `],
					[/* inline code block */ 'i', `d`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `d`],
				[/* text */ 't', ` × 2`],
				[/* text */ 't', `scaleFactor`, 'sup']
			]
		]],
		[/* method */ 'signum(double)', [
			[/* method description */
				[/* text */ 't', `Returns the signum function of the argument; zero if the argument
 is zero, 1.0 if the argument is greater than zero, -1.0 if the
 argument is less than zero.

 `],
				[/* block */ 'b', `Special Cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If the argument is NaN, then the result is NaN.
 `],
					[/* block */ 'b', ` If the argument is positive zero or negative zero, then the
      result is the same as the argument.
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `the floating-point value whose signum is to be returned`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the signum function of the argument`]
			]
		]],
		[/* method */ 'sin(double)', [
			[/* method description */
				[/* text */ 't', `Returns the trigonometric sine of an angle.  Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN or an infinity, then the
 result is NaN.
 `],
					[/* block */ 'b', `If the argument is zero, then the result is a zero with the
 same sign as the argument.`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', `The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `an angle, in radians.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the sine of the argument.`]
			]
		]],
		[/* method */ 'sinh(double)', [
			[/* method description */
				[/* text */ 't', `Returns the hyperbolic sine of a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value.
 The hyperbolic sine of `],
				[/* text */ 't', `x`],
				[/* text */ 't', ` is defined to be
 (`],
				[/* text */ 't', `e`],
				[/* text */ 't', `x`, 'sup'],
				[/* text */ 't', ` - e`],
				[/* text */ 't', `-x`, 'sup'],
				[/* text */ 't', `)/2
 where `],
				[/* text */ 't', `e`],
				[/* text */ 't', ` is `],
				[/* text */ 't', `Euler's number`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN, then the result is NaN.

 `],
					[/* block */ 'b', `If the argument is infinite, then the result is an infinity
 with the same sign as the argument.

 `],
					[/* block */ 'b', `If the argument is zero, then the result is a zero with the
 same sign as the argument.

 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `The computed result must be within 2.5 ulps of the exact result.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `The number whose hyperbolic sine is to be returned.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The hyperbolic sine of `],
				[/* inline code block */ 'i', `x`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'sqrt(double)', [
			[/* method description */
				[/* text */ 't', `Returns the correctly rounded positive square root of a
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value.
 Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN or less than zero, then the result
 is NaN.
 `],
					[/* block */ 'b', `If the argument is positive infinity, then the result is positive
 infinity.
 `],
					[/* block */ 'b', `If the argument is positive zero or negative zero, then the
 result is the same as the argument.`]
				]],
				[/* text */ 't', `
 Otherwise, the result is the `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value closest to
 the true mathematical square root of the argument value.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `a value.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the positive square root of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `.
          If the argument is NaN or less than zero, the result is NaN.`]
			]
		]],
		[/* method */ 'tan(double)', [
			[/* method description */
				[/* text */ 't', `Returns the trigonometric tangent of an angle.  Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN or an infinity, then the result
 is NaN.
 `],
					[/* block */ 'b', `If the argument is zero, then the result is a zero with the
 same sign as the argument.`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', `The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `an angle, in radians.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the tangent of the argument.`]
			]
		]],
		[/* method */ 'tanh(double)', [
			[/* method description */
				[/* text */ 't', `Returns the hyperbolic tangent of a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value.
 The hyperbolic tangent of `],
				[/* text */ 't', `x`],
				[/* text */ 't', ` is defined to be
 (`],
				[/* text */ 't', `e`],
				[/* text */ 't', `x`, 'sup'],
				[/* text */ 't', ` - e`],
				[/* text */ 't', `-x`, 'sup'],
				[/* text */ 't', `)/(`],
				[/* text */ 't', `e`],
				[/* text */ 't', `x`, 'sup'],
				[/* text */ 't', ` + e`],
				[/* text */ 't', `-x`, 'sup'],
				[/* text */ 't', `),
 in other words, `],
				[/* reference */ 'r', `#sinh(double)`, `x`],
				[/* text */ 't', `/`],
				[/* reference */ 'r', `#cosh(double)`, `x`],
				[/* text */ 't', `.  Note
 that the absolute value of the exact tanh is always less than
 1.

 `],
				[/* block */ 'b', `Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN, then the result is NaN.

 `],
					[/* block */ 'b', `If the argument is zero, then the result is a zero with the
 same sign as the argument.

 `],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is positive infinity, then the result is
 `],
						[/* inline code block */ 'i', `+1.0`],
						[/* text */ 't', `.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is negative infinity, then the result is
 `],
						[/* inline code block */ 'i', `-1.0`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `The computed result must be within 2.5 ulps of the exact result.
 The result of `],
					[/* inline code block */ 'i', `tanh`],
					[/* text */ 't', ` for any finite input must have
 an absolute value less than or equal to 1.  Note that once the
 exact result of tanh is within 1/2 of an ulp of the limit value
 of ±1, correctly signed ±`],
					[/* inline code block */ 'i', `1.0`],
					[/* text */ 't', ` should
 be returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `The number whose hyperbolic tangent is to be returned.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The hyperbolic tangent of `],
				[/* inline code block */ 'i', `x`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'toDegrees(double)', [
			[/* method description */
				[/* text */ 't', `Converts an angle measured in radians to an approximately
 equivalent angle measured in degrees.  The conversion from
 radians to degrees is generally inexact; users should
 `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` expect `],
				[/* inline code block */ 'i', `cos(toRadians(90.0))`],
				[/* text */ 't', ` to exactly
 equal `],
				[/* inline code block */ 'i', `0.0`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'angrad', [/* parameter description */
					[/* text */ 't', `an angle, in radians`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the measurement of the angle `],
				[/* inline code block */ 'i', `angrad`],
				[/* text */ 't', `
          in degrees.`]
			]
		]],
		[/* method */ 'toRadians(double)', [
			[/* method description */
				[/* text */ 't', `Converts an angle measured in degrees to an approximately
 equivalent angle measured in radians.  The conversion from
 degrees to radians is generally inexact.`]
			],
			[/* parameters */
				[/* parameter */ 'angdeg', [/* parameter description */
					[/* text */ 't', `an angle, in degrees`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the measurement of the angle `],
				[/* inline code block */ 'i', `angdeg`],
				[/* text */ 't', `
          in radians.`]
			]
		]],
		[/* method */ 'ulp(double)', [
			[/* method description */
				[/* text */ 't', `Returns the size of an ulp of the argument.  An ulp, unit in
 the last place, of a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value is the positive
 distance between this floating-point value and the `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` value next larger in magnitude.  Note that for non-NaN
 `],
				[/* text */ 't', `x`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `ulp(-x) == ulp(x)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `Special Cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If the argument is NaN, then the result is NaN.
 `],
					[/* block */ 'b', ` If the argument is positive or negative infinity, then the
 result is positive infinity.
 `],
					[/* block */ 'b', [
						[/* text */ 't', ` If the argument is positive or negative zero, then the result is
 `],
						[/* inline code block */ 'i', `Double.MIN_VALUE`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If the argument is ±`],
						[/* inline code block */ 'i', `Double.MAX_VALUE`],
						[/* text */ 't', `, then
 the result is equal to 2`],
						[/* text */ 't', `971`, 'sup'],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `the floating-point value whose ulp is to be returned`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the size of an ulp of the argument`]
			]
		]],
		[/* method */ 'abs(float)', [
			[/* method description */
				[/* text */ 't', `Returns the absolute value of a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value.
 If the argument is not negative, the argument is returned.
 If the argument is negative, the negation of the argument is returned.
 Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is positive zero or negative zero, the
 result is positive zero.
 `],
					[/* block */ 'b', `If the argument is infinite, the result is positive infinity.
 `],
					[/* block */ 'b', `If the argument is NaN, the result is NaN.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the argument whose absolute value is to be determined`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the absolute value of the argument.`]
			]
		]],
		[/* method */ 'copySign(float,float)', [
			[/* method description */
				[/* text */ 't', `Returns the first floating-point argument with the sign of the
 second floating-point argument.  Note that unlike the `],
				[/* reference */ 'r', `java.lang.StrictMath#copySign(float,float)`, `StrictMath.copySign`],
				[/* text */ 't', `
 method, this method does not require NaN `],
				[/* inline code block */ 'i', `sign`],
				[/* text */ 't', `
 arguments to be treated as positive values; implementations are
 permitted to treat some NaN arguments as positive and other NaN
 arguments as negative to allow greater performance.`]
			],
			[/* parameters */
				[/* parameter */ 'magnitude', [/* parameter description */
					[/* text */ 't', `the parameter providing the magnitude of the result`]
				]],
				[/* parameter */ 'sign', [/* parameter description */
					[/* text */ 't', `the parameter providing the sign of the result`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a value with the magnitude of `],
				[/* inline code block */ 'i', `magnitude`],
				[/* text */ 't', `
 and the sign of `],
				[/* inline code block */ 'i', `sign`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'fma(float,float,float)', [
			[/* method description */
				[/* text */ 't', `Returns the fused multiply add of the three arguments; that is,
 returns the exact product of the first two arguments summed
 with the third argument and then rounded once to the nearest
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.

 The rounding is done using the `],
				[/* reference */ 'r', `java.math.RoundingMode#HALF_EVEN`, `round to nearest even rounding mode`],
				[/* text */ 't', `.

 In contrast, if `],
				[/* inline code block */ 'i', `a * b + c`],
				[/* text */ 't', ` is evaluated as a regular
 floating-point expression, two rounding errors are involved,
 the first for the multiply operation, the second for the
 addition operation.

 `],
				[/* block */ 'b', `Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If any argument is NaN, the result is NaN.

 `],
					[/* block */ 'b', ` If one of the first two arguments is infinite and the
 other is zero, the result is NaN.

 `],
					[/* block */ 'b', ` If the exact product of the first two arguments is infinite
 (in other words, at least one of the arguments is infinite and
 the other is neither zero nor NaN) and the third argument is an
 infinity of the opposite sign, the result is NaN.

 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note that `],
					[/* inline code block */ 'i', `fma(a, 1.0f, c)`],
					[/* text */ 't', ` returns the same
 result as (`],
					[/* inline code block */ 'i', `a + c`],
					[/* text */ 't', `).  However,
 `],
					[/* inline code block */ 'i', `fma(a, b, +0.0f)`],
					[/* text */ 't', ` does `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` always return the
 same result as (`],
					[/* inline code block */ 'i', `a * b`],
					[/* text */ 't', `) since
 `],
					[/* inline code block */ 'i', `fma(-0.0f, +0.0f, +0.0f)`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `+0.0f`],
					[/* text */ 't', ` while
 (`],
					[/* inline code block */ 'i', `-0.0f * +0.0f`],
					[/* text */ 't', `) is `],
					[/* inline code block */ 'i', `-0.0f`],
					[/* text */ 't', `; `],
					[/* inline code block */ 'i', `fma(a, b, -0.0f)`],
					[/* text */ 't', ` is
 equivalent to (`],
					[/* inline code block */ 'i', `a * b`],
					[/* text */ 't', `) however.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `a value`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `a value`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `a value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `(`],
				[/* text */ 't', `a`],
				[/* text */ 't', ` × `],
				[/* text */ 't', `b`],
				[/* text */ 't', ` + `],
				[/* text */ 't', `c`],
				[/* text */ 't', `)
 computed, as if with unlimited range and precision, and rounded
 once to the nearest `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value`]
			]
		]],
		[/* method */ 'max(float,float)', [
			[/* method description */
				[/* text */ 't', `Returns the greater of two `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` values.  That is,
 the result is the argument closer to positive infinity. If the
 arguments have the same value, the result is that same
 value. If either value is NaN, then the result is NaN.  Unlike
 the numerical comparison operators, this method considers
 negative zero to be strictly smaller than positive zero. If one
 argument is positive zero and the other negative zero, the
 result is positive zero.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `an argument.`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `another argument.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the larger of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'min(float,float)', [
			[/* method description */
				[/* text */ 't', `Returns the smaller of two `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` values.  That is,
 the result is the value closer to negative infinity. If the
 arguments have the same value, the result is that same
 value. If either value is NaN, then the result is NaN.  Unlike
 the numerical comparison operators, this method considers
 negative zero to be strictly smaller than positive zero.  If
 one argument is positive zero and the other is negative zero,
 the result is negative zero.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `an argument.`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `another argument.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the smaller of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'nextAfter(float,double)', [
			[/* method description */
				[/* text */ 't', `Returns the floating-point number adjacent to the first
 argument in the direction of the second argument.  If both
 arguments compare as equal a value equivalent to the second argument
 is returned.

 `],
				[/* block */ 'b', `
 Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If either argument is a NaN, then NaN is returned.

 `],
					[/* block */ 'b', [
						[/* text */ 't', ` If both arguments are signed zeros, a value equivalent
 to `],
						[/* inline code block */ 'i', `direction`],
						[/* text */ 't', ` is returned.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If `],
						[/* inline code block */ 'i', `start`],
						[/* text */ 't', ` is
 ±`],
						[/* reference */ 'r', `java.lang.Float#MIN_VALUE`, `Float.MIN_VALUE`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `direction`],
						[/* text */ 't', `
 has a value such that the result should have a smaller
 magnitude, then a zero with the same sign as `],
						[/* inline code block */ 'i', `start`],
						[/* text */ 't', `
 is returned.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If `],
						[/* inline code block */ 'i', `start`],
						[/* text */ 't', ` is infinite and
 `],
						[/* inline code block */ 'i', `direction`],
						[/* text */ 't', ` has a value such that the result should
 have a smaller magnitude, `],
						[/* reference */ 'r', `java.lang.Float#MAX_VALUE`, `Float.MAX_VALUE`],
						[/* text */ 't', ` with the
 same sign as `],
						[/* inline code block */ 'i', `start`],
						[/* text */ 't', ` is returned.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If `],
						[/* inline code block */ 'i', `start`],
						[/* text */ 't', ` is equal to ±
 `],
						[/* reference */ 'r', `java.lang.Float#MAX_VALUE`, `Float.MAX_VALUE`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `direction`],
						[/* text */ 't', ` has a
 value such that the result should have a larger magnitude, an
 infinity with same sign as `],
						[/* inline code block */ 'i', `start`],
						[/* text */ 't', ` is returned.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `starting floating-point value`]
				]],
				[/* parameter */ 'direction', [/* parameter description */
					[/* text */ 't', `value indicating which of
 `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `'s neighbors or `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` should
 be returned`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The floating-point number adjacent to `],
				[/* inline code block */ 'i', `start`],
				[/* text */ 't', ` in the
 direction of `],
				[/* inline code block */ 'i', `direction`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'nextDown(float)', [
			[/* method description */
				[/* text */ 't', `Returns the floating-point value adjacent to `],
				[/* inline code block */ 'i', `f`],
				[/* text */ 't', ` in
 the direction of negative infinity.  This method is
 semantically equivalent to `],
				[/* inline code block */ 'i', `nextAfter(f, Float.NEGATIVE_INFINITY)`],
				[/* text */ 't', `; however, a
 `],
				[/* inline code block */ 'i', `nextDown`],
				[/* text */ 't', ` implementation may run faster than its
 equivalent `],
				[/* inline code block */ 'i', `nextAfter`],
				[/* text */ 't', ` call.

 `],
				[/* block */ 'b', `Special Cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If the argument is NaN, the result is NaN.

 `],
					[/* block */ 'b', ` If the argument is negative infinity, the result is
 negative infinity.

 `],
					[/* block */ 'b', [
						[/* text */ 't', ` If the argument is zero, the result is
 `],
						[/* inline code block */ 'i', `-Float.MIN_VALUE`],
						[/* text */ 't', `

 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `starting floating-point value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The adjacent floating-point value closer to negative
 infinity.`]
			]
		]],
		[/* method */ 'nextUp(float)', [
			[/* method description */
				[/* text */ 't', `Returns the floating-point value adjacent to `],
				[/* inline code block */ 'i', `f`],
				[/* text */ 't', ` in
 the direction of positive infinity.  This method is
 semantically equivalent to `],
				[/* inline code block */ 'i', `nextAfter(f, Float.POSITIVE_INFINITY)`],
				[/* text */ 't', `; however, a `],
				[/* inline code block */ 'i', `nextUp`],
				[/* text */ 't', `
 implementation may run faster than its equivalent
 `],
				[/* inline code block */ 'i', `nextAfter`],
				[/* text */ 't', ` call.

 `],
				[/* block */ 'b', `Special Cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If the argument is NaN, the result is NaN.

 `],
					[/* block */ 'b', ` If the argument is positive infinity, the result is
 positive infinity.

 `],
					[/* block */ 'b', [
						[/* text */ 't', ` If the argument is zero, the result is
 `],
						[/* reference */ 'r', `java.lang.Float#MIN_VALUE`, `Float.MIN_VALUE`],
						[/* text */ 't', `

 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `starting floating-point value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The adjacent floating-point value closer to positive
 infinity.`]
			]
		]],
		[/* method */ 'scalb(float,int)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `f`],
				[/* text */ 't', ` × 2`],
				[/* text */ 't', `scaleFactor`, 'sup'],
				[/* text */ 't', `
 rounded as if performed by a single correctly rounded
 floating-point multiply.  If the exponent of the result is
 between `],
				[/* reference */ 'r', `java.lang.Float#MIN_EXPONENT`, `Float.MIN_EXPONENT`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `java.lang.Float#MAX_EXPONENT`, `Float.MAX_EXPONENT`],
				[/* text */ 't', `, the answer is calculated exactly.  If the
 exponent of the result would be larger than `],
				[/* inline code block */ 'i', `Float.MAX_EXPONENT`],
				[/* text */ 't', `, an infinity is returned.  Note that if the
 result is subnormal, precision may be lost; that is, when
 `],
				[/* inline code block */ 'i', `scalb(x, n)`],
				[/* text */ 't', ` is subnormal, `],
				[/* inline code block */ 'i', `scalb(scalb(x, n), -n)`],
				[/* text */ 't', ` may not equal `],
				[/* text */ 't', `x`],
				[/* text */ 't', `.  When the result is non-NaN, the
 result has the same sign as `],
				[/* inline code block */ 'i', `f`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If the first argument is NaN, NaN is returned.
 `],
					[/* block */ 'b', ` If the first argument is infinite, then an infinity of the
 same sign is returned.
 `],
					[/* block */ 'b', ` If the first argument is zero, then a zero of the same
 sign is returned.
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `number to be scaled by a power of two.`]
				]],
				[/* parameter */ 'scaleFactor', [/* parameter description */
					[/* text */ 't', `power of 2 used to scale `],
					[/* inline code block */ 'i', `f`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `f`],
				[/* text */ 't', ` × 2`],
				[/* text */ 't', `scaleFactor`, 'sup']
			]
		]],
		[/* method */ 'signum(float)', [
			[/* method description */
				[/* text */ 't', `Returns the signum function of the argument; zero if the argument
 is zero, 1.0f if the argument is greater than zero, -1.0f if the
 argument is less than zero.

 `],
				[/* block */ 'b', `Special Cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If the argument is NaN, then the result is NaN.
 `],
					[/* block */ 'b', ` If the argument is positive zero or negative zero, then the
      result is the same as the argument.
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `the floating-point value whose signum is to be returned`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the signum function of the argument`]
			]
		]],
		[/* method */ 'ulp(float)', [
			[/* method description */
				[/* text */ 't', `Returns the size of an ulp of the argument.  An ulp, unit in
 the last place, of a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value is the positive
 distance between this floating-point value and the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', ` value next larger in magnitude.  Note that for non-NaN
 `],
				[/* text */ 't', `x`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `ulp(-x) == ulp(x)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `Special Cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', ` If the argument is NaN, then the result is NaN.
 `],
					[/* block */ 'b', ` If the argument is positive or negative infinity, then the
 result is positive infinity.
 `],
					[/* block */ 'b', [
						[/* text */ 't', ` If the argument is positive or negative zero, then the result is
 `],
						[/* inline code block */ 'i', `Float.MIN_VALUE`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` If the argument is ±`],
						[/* inline code block */ 'i', `Float.MAX_VALUE`],
						[/* text */ 't', `, then
 the result is equal to 2`],
						[/* text */ 't', `104`, 'sup'],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `the floating-point value whose ulp is to be returned`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the size of an ulp of the argument`]
			]
		]],
		[/* method */ 'abs(int)', [
			[/* method description */
				[/* text */ 't', `Returns the absolute value of an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.
 If the argument is not negative, the argument is returned.
 If the argument is negative, the negation of the argument is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that if the argument is equal to the value of `],
					[/* reference */ 'r', `java.lang.Integer#MIN_VALUE`, `Integer.MIN_VALUE`],
					[/* text */ 't', `, the most negative representable `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `
 value, the result is that same value, which is negative. In
 contrast, the `],
					[/* reference */ 'r', `#absExact(long)`, `absExact(int)`],
					[/* text */ 't', ` method throws an
 `],
					[/* inline code block */ 'i', `ArithmeticException`],
					[/* text */ 't', ` for this value.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the argument whose absolute value is to be determined`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the absolute value of the argument.`]
			]
		]],
		[/* method */ 'absExact(int)', [
			[/* method description */
				[/* text */ 't', `Returns the mathematical absolute value of an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value
 if it is exactly representable as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `, throwing
 `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` if the result overflows the
 positive `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` range.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Since the range of two's complement integers is asymmetric
 with one additional negative value (JLS `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-4.html#jls-4.2.1`, `4.2.1`],
					[/* text */ 't', `), the
 mathematical absolute value of `],
					[/* reference */ 'r', `java.lang.Integer#MIN_VALUE`, `Integer.MIN_VALUE`],
					[/* text */ 't', `
 overflows the positive `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` range, so an exception is
 thrown for that argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the argument whose absolute value is to be determined`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the argument is `],
					[/* reference */ 'r', `java.lang.Integer#MIN_VALUE`, `Integer.MIN_VALUE`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the absolute value of the argument, unless overflow occurs`]
			]
		]],
		[/* method */ 'addExact(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the sum of its arguments,
 throwing an exception if the result overflows an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first value`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result overflows an int`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]],
		[/* method */ 'decrementExact(int)', [
			[/* method description */
				[/* text */ 't', `Returns the argument decremented by one, throwing an exception if the
 result overflows an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 The overflow only occurs for `],
				[/* reference */ 'r', `java.lang.Integer#MIN_VALUE`, `the minimum value`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the value to decrement`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result overflows an int`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]],
		[/* method */ 'floorDiv(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the largest (closest to positive infinity)
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value that is less than or equal to the algebraic quotient.
 There is one special case, if the dividend is the
 `],
				[/* reference */ 'r', `java.lang.Integer#MIN_VALUE`, `Integer.MIN_VALUE`],
				[/* text */ 't', ` and the divisor is `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `,
 then integer overflow occurs and
 the result is equal to `],
				[/* inline code block */ 'i', `Integer.MIN_VALUE`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Normal integer division operates under the round to zero rounding mode
 (truncation).  This operation instead acts under the round toward
 negative infinity (floor) rounding mode.
 The floor rounding mode gives different results from truncation
 when the exact result is negative.
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the signs of the arguments are the same, the results of
       `],
						[/* inline code block */ 'i', `floorDiv`],
						[/* text */ 't', ` and the `],
						[/* inline code block */ 'i', `/`],
						[/* text */ 't', ` operator are the same.  `],
						[/* new line */ 'n'],
						[/* text */ 't', `
       For example, `],
						[/* inline code block */ 'i', `floorDiv(4, 3) == 1`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `(4 / 3) == 1`],
						[/* text */ 't', `.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the signs of the arguments are different,  the quotient is negative and
       `],
						[/* inline code block */ 'i', `floorDiv`],
						[/* text */ 't', ` returns the integer less than or equal to the quotient
       and the `],
						[/* inline code block */ 'i', `/`],
						[/* text */ 't', ` operator returns the integer closest to zero.`],
						[/* new line */ 'n'],
						[/* text */ 't', `
       For example, `],
						[/* inline code block */ 'i', `floorDiv(-4, 3) == -2`],
						[/* text */ 't', `,
       whereas `],
						[/* inline code block */ 'i', `(-4 / 3) == -1`],
						[/* text */ 't', `.
   `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the dividend`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the divisor`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the divisor `],
					[/* inline code block */ 'i', `y`],
					[/* text */ 't', ` is zero`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the largest (closest to positive infinity)
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value that is less than or equal to the algebraic quotient.`]
			]
		]],
		[/* method */ 'floorMod(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the floor modulus of the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` arguments.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The floor modulus is `],
					[/* inline code block */ 'i', `x - (floorDiv(x, y) * y)`],
					[/* text */ 't', `,
 has the same sign as the divisor `],
					[/* inline code block */ 'i', `y`],
					[/* text */ 't', `, and
 is in the range of `],
					[/* inline code block */ 'i', `-abs(y) < r < +abs(y)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The relationship between `],
					[/* inline code block */ 'i', `floorDiv`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `floorMod`],
					[/* text */ 't', ` is such that:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `floorDiv(x, y) * y + floorMod(x, y) == x`],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The difference in values between `],
					[/* inline code block */ 'i', `floorMod`],
					[/* text */ 't', ` and
 the `],
					[/* inline code block */ 'i', `%`],
					[/* text */ 't', ` operator is due to the difference between
 `],
					[/* inline code block */ 'i', `floorDiv`],
					[/* text */ 't', ` that returns the integer less than or equal to the quotient
 and the `],
					[/* inline code block */ 'i', `/`],
					[/* text */ 't', ` operator that returns the integer closest to zero.
 `]
				]],
				[/* block */ 'b', `
 Examples:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the signs of the arguments are the same, the results
       of `],
						[/* inline code block */ 'i', `floorMod`],
						[/* text */ 't', ` and the `],
						[/* inline code block */ 'i', `%`],
						[/* text */ 't', ` operator are the same.`],
						[/* new line */ 'n'],
						[/* text */ 't', `
       `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* inline code block */ 'i', `floorMod(+4, +3) == +1`],
								[/* text */ 't', `;   and `],
								[/* inline code block */ 'i', `(+4 % +3) == +1`]
							]],
							[/* block */ 'b', [
								[/* inline code block */ 'i', `floorMod(-4, -3) == -1`],
								[/* text */ 't', `;   and `],
								[/* inline code block */ 'i', `(-4 % -3) == -1`]
							]]
						]],
						[/* text */ 't', `
   `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the signs of the arguments are different, the results
       differ from the `],
						[/* inline code block */ 'i', `%`],
						[/* text */ 't', ` operator.`],
						[/* new line */ 'n'],
						[/* text */ 't', `
       `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* inline code block */ 'i', `floorMod(+4, -3) == -2`],
								[/* text */ 't', `;   and `],
								[/* inline code block */ 'i', `(+4 % -3) == +1`]
							]],
							[/* block */ 'b', [
								[/* inline code block */ 'i', `floorMod(-4, +3) == +2`],
								[/* text */ 't', `;   and `],
								[/* inline code block */ 'i', `(-4 % +3) == -1`]
							]]
						]],
						[/* text */ 't', `
   `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the signs of arguments are unknown and a positive modulus
 is needed it can be computed as `],
					[/* inline code block */ 'i', `(floorMod(x, y) + abs(y)) % abs(y)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the dividend`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the divisor`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the divisor `],
					[/* inline code block */ 'i', `y`],
					[/* text */ 't', ` is zero`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the floor modulus `],
				[/* inline code block */ 'i', `x - (floorDiv(x, y) * y)`]
			]
		]],
		[/* method */ 'floorMod(long,int)', [
			[/* method description */
				[/* text */ 't', `Returns the floor modulus of the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` arguments.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The floor modulus is `],
					[/* inline code block */ 'i', `x - (floorDiv(x, y) * y)`],
					[/* text */ 't', `,
 has the same sign as the divisor `],
					[/* inline code block */ 'i', `y`],
					[/* text */ 't', `, and
 is in the range of `],
					[/* inline code block */ 'i', `-abs(y) < r < +abs(y)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The relationship between `],
					[/* inline code block */ 'i', `floorDiv`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `floorMod`],
					[/* text */ 't', ` is such that:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `floorDiv(x, y) * y + floorMod(x, y) == x`],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 For examples, see `],
					[/* reference */ 'r', `#floorMod(long,long)`, `floorMod(int, int)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the dividend`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the divisor`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the divisor `],
					[/* inline code block */ 'i', `y`],
					[/* text */ 't', ` is zero`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the floor modulus `],
				[/* inline code block */ 'i', `x - (floorDiv(x, y) * y)`]
			]
		]],
		[/* method */ 'getExponent(double)', [
			[/* method description */
				[/* text */ 't', `Returns the unbiased exponent used in the representation of a
 `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `.  Special cases:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is NaN or infinite, then the result is
 `],
						[/* reference */ 'r', `java.lang.Double#MAX_EXPONENT`, `Double.MAX_EXPONENT`],
						[/* text */ 't', ` + 1.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is zero or subnormal, then the result is
 `],
						[/* reference */ 'r', `java.lang.Double#MIN_EXPONENT`, `Double.MIN_EXPONENT`],
						[/* text */ 't', ` -1.
 `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the unbiased exponent of the argument`]
			]
		]],
		[/* method */ 'getExponent(float)', [
			[/* method description */
				[/* text */ 't', `Returns the unbiased exponent used in the representation of a
 `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.  Special cases:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is NaN or infinite, then the result is
 `],
						[/* reference */ 'r', `java.lang.Float#MAX_EXPONENT`, `Float.MAX_EXPONENT`],
						[/* text */ 't', ` + 1.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is zero or subnormal, then the result is
 `],
						[/* reference */ 'r', `java.lang.Float#MIN_EXPONENT`, `Float.MIN_EXPONENT`],
						[/* text */ 't', ` -1.
 `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', ` value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the unbiased exponent of the argument`]
			]
		]],
		[/* method */ 'incrementExact(int)', [
			[/* method description */
				[/* text */ 't', `Returns the argument incremented by one, throwing an exception if the
 result overflows an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 The overflow only occurs for `],
				[/* reference */ 'r', `java.lang.Integer#MAX_VALUE`, `the maximum value`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the value to increment`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result overflows an int`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]],
		[/* method */ 'max(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the greater of two `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values. That is, the
 result is the argument closer to the value of
 `],
				[/* reference */ 'r', `java.lang.Integer#MAX_VALUE`, `Integer.MAX_VALUE`],
				[/* text */ 't', `. If the arguments have the same value,
 the result is that same value.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `an argument.`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `another argument.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the larger of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'min(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the smaller of two `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values. That is,
 the result the argument closer to the value of
 `],
				[/* reference */ 'r', `java.lang.Integer#MIN_VALUE`, `Integer.MIN_VALUE`],
				[/* text */ 't', `.  If the arguments have the same
 value, the result is that same value.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `an argument.`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `another argument.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the smaller of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'multiplyExact(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the product of the arguments,
 throwing an exception if the result overflows an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first value`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result overflows an int`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]],
		[/* method */ 'negateExact(int)', [
			[/* method description */
				[/* text */ 't', `Returns the negation of the argument, throwing an exception if the
 result overflows an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 The overflow only occurs for `],
				[/* reference */ 'r', `java.lang.Integer#MIN_VALUE`, `the minimum value`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the value to negate`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result overflows an int`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]],
		[/* method */ 'round(float)', [
			[/* method description */
				[/* text */ 't', `Returns the closest `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` to the argument, with ties
 rounding to positive infinity.

 `],
				[/* block */ 'b', `
 Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN, the result is 0.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is negative infinity or any value less than or
 equal to the value of `],
						[/* inline code block */ 'i', `Integer.MIN_VALUE`],
						[/* text */ 't', `, the result is
 equal to the value of `],
						[/* inline code block */ 'i', `Integer.MIN_VALUE`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is positive infinity or any value greater than or
 equal to the value of `],
						[/* inline code block */ 'i', `Integer.MAX_VALUE`],
						[/* text */ 't', `, the result is
 equal to the value of `],
						[/* inline code block */ 'i', `Integer.MAX_VALUE`],
						[/* text */ 't', `.`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `a floating-point value to be rounded to an integer.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value of the argument rounded to the nearest
          `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.`]
			]
		]],
		[/* method */ 'subtractExact(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the difference of the arguments,
 throwing an exception if the result overflows an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first value`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second value to subtract from the first`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result overflows an int`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]],
		[/* method */ 'toIntExact(long)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` argument,
 throwing an exception if the value overflows an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the long value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `argument`],
					[/* text */ 't', ` overflows an int`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the argument as an int`]
			]
		]],
		[/* method */ 'abs(long)', [
			[/* method description */
				[/* text */ 't', `Returns the absolute value of a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.
 If the argument is not negative, the argument is returned.
 If the argument is negative, the negation of the argument is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that if the argument is equal to the value of `],
					[/* reference */ 'r', `java.lang.Long#MIN_VALUE`, `Long.MIN_VALUE`],
					[/* text */ 't', `, the most negative representable `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `
 value, the result is that same value, which is negative. In
 contrast, the `],
					[/* reference */ 'r', `#absExact(long)`, `absExact(long)`],
					[/* text */ 't', ` method throws an
 `],
					[/* inline code block */ 'i', `ArithmeticException`],
					[/* text */ 't', ` for this value.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the argument whose absolute value is to be determined`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the absolute value of the argument.`]
			]
		]],
		[/* method */ 'absExact(long)', [
			[/* method description */
				[/* text */ 't', `Returns the mathematical absolute value of an `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value
 if it is exactly representable as an `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `, throwing
 `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` if the result overflows the
 positive `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` range.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Since the range of two's complement integers is asymmetric
 with one additional negative value (JLS `],
					[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-4.html#jls-4.2.1`, `4.2.1`],
					[/* text */ 't', `), the
 mathematical absolute value of `],
					[/* reference */ 'r', `java.lang.Long#MIN_VALUE`, `Long.MIN_VALUE`],
					[/* text */ 't', ` overflows
 the positive `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` range, so an exception is thrown for
 that argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the argument whose absolute value is to be determined`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the argument is `],
					[/* reference */ 'r', `java.lang.Long#MIN_VALUE`, `Long.MIN_VALUE`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the absolute value of the argument, unless overflow occurs`]
			]
		]],
		[/* method */ 'addExact(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns the sum of its arguments,
 throwing an exception if the result overflows a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first value`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result overflows a long`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]],
		[/* method */ 'decrementExact(long)', [
			[/* method description */
				[/* text */ 't', `Returns the argument decremented by one, throwing an exception if the
 result overflows a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 The overflow only occurs for `],
				[/* reference */ 'r', `java.lang.Long#MIN_VALUE`, `the minimum value`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the value to decrement`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result overflows a long`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]],
		[/* method */ 'floorDiv(long,int)', [
			[/* method description */
				[/* text */ 't', `Returns the largest (closest to positive infinity)
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value that is less than or equal to the algebraic quotient.
 There is one special case, if the dividend is the
 `],
				[/* reference */ 'r', `java.lang.Long#MIN_VALUE`, `Long.MIN_VALUE`],
				[/* text */ 't', ` and the divisor is `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `,
 then integer overflow occurs and
 the result is equal to `],
				[/* inline code block */ 'i', `Long.MIN_VALUE`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Normal integer division operates under the round to zero rounding mode
 (truncation).  This operation instead acts under the round toward
 negative infinity (floor) rounding mode.
 The floor rounding mode gives different results from truncation
 when the exact result is negative.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 For examples, see `],
					[/* reference */ 'r', `#floorDiv(long,long)`, `floorDiv(int, int)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the dividend`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the divisor`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the divisor `],
					[/* inline code block */ 'i', `y`],
					[/* text */ 't', ` is zero`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the largest (closest to positive infinity)
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value that is less than or equal to the algebraic quotient.`]
			]
		]],
		[/* method */ 'floorDiv(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns the largest (closest to positive infinity)
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value that is less than or equal to the algebraic quotient.
 There is one special case, if the dividend is the
 `],
				[/* reference */ 'r', `java.lang.Long#MIN_VALUE`, `Long.MIN_VALUE`],
				[/* text */ 't', ` and the divisor is `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', `,
 then integer overflow occurs and
 the result is equal to `],
				[/* inline code block */ 'i', `Long.MIN_VALUE`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 Normal integer division operates under the round to zero rounding mode
 (truncation).  This operation instead acts under the round toward
 negative infinity (floor) rounding mode.
 The floor rounding mode gives different results from truncation
 when the exact result is negative.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 For examples, see `],
					[/* reference */ 'r', `#floorDiv(long,long)`, `floorDiv(int, int)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the dividend`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the divisor`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the divisor `],
					[/* inline code block */ 'i', `y`],
					[/* text */ 't', ` is zero`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the largest (closest to positive infinity)
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value that is less than or equal to the algebraic quotient.`]
			]
		]],
		[/* method */ 'floorMod(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns the floor modulus of the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` arguments.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The floor modulus is `],
					[/* inline code block */ 'i', `x - (floorDiv(x, y) * y)`],
					[/* text */ 't', `,
 has the same sign as the divisor `],
					[/* inline code block */ 'i', `y`],
					[/* text */ 't', `, and
 is in the range of `],
					[/* inline code block */ 'i', `-abs(y) < r < +abs(y)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The relationship between `],
					[/* inline code block */ 'i', `floorDiv`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `floorMod`],
					[/* text */ 't', ` is such that:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `floorDiv(x, y) * y + floorMod(x, y) == x`],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 For examples, see `],
					[/* reference */ 'r', `#floorMod(long,long)`, `floorMod(int, int)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the dividend`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the divisor`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the divisor `],
					[/* inline code block */ 'i', `y`],
					[/* text */ 't', ` is zero`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the floor modulus `],
				[/* inline code block */ 'i', `x - (floorDiv(x, y) * y)`]
			]
		]],
		[/* method */ 'incrementExact(long)', [
			[/* method description */
				[/* text */ 't', `Returns the argument incremented by one, throwing an exception if the
 result overflows a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 The overflow only occurs for `],
				[/* reference */ 'r', `java.lang.Long#MAX_VALUE`, `the maximum value`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the value to increment`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result overflows a long`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]],
		[/* method */ 'max(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns the greater of two `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values. That is, the
 result is the argument closer to the value of
 `],
				[/* reference */ 'r', `java.lang.Long#MAX_VALUE`, `Long.MAX_VALUE`],
				[/* text */ 't', `. If the arguments have the same value,
 the result is that same value.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `an argument.`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `another argument.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the larger of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'min(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns the smaller of two `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` values. That is,
 the result is the argument closer to the value of
 `],
				[/* reference */ 'r', `java.lang.Long#MIN_VALUE`, `Long.MIN_VALUE`],
				[/* text */ 't', `. If the arguments have the same
 value, the result is that same value.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `an argument.`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `another argument.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the smaller of `],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `b`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'multiplyExact(long,int)', [
			[/* method description */
				[/* text */ 't', `Returns the product of the arguments, throwing an exception if the result
 overflows a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first value`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result overflows a long`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]],
		[/* method */ 'multiplyExact(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns the product of the arguments,
 throwing an exception if the result overflows a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first value`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result overflows a long`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]],
		[/* method */ 'multiplyFull(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the exact mathematical product of the arguments.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first value`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]],
		[/* method */ 'multiplyHigh(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` the most significant 64 bits of the 128-bit
 product of two 64-bit factors.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first value`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]],
		[/* method */ 'negateExact(long)', [
			[/* method description */
				[/* text */ 't', `Returns the negation of the argument, throwing an exception if the
 result overflows a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 The overflow only occurs for `],
				[/* reference */ 'r', `java.lang.Long#MIN_VALUE`, `the minimum value`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the value to negate`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result overflows a long`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]],
		[/* method */ 'round(double)', [
			[/* method description */
				[/* text */ 't', `Returns the closest `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` to the argument, with ties
 rounding to positive infinity.

 `],
				[/* block */ 'b', `Special cases:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the argument is NaN, the result is 0.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is negative infinity or any value less than or
 equal to the value of `],
						[/* inline code block */ 'i', `Long.MIN_VALUE`],
						[/* text */ 't', `, the result is
 equal to the value of `],
						[/* inline code block */ 'i', `Long.MIN_VALUE`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the argument is positive infinity or any value greater than or
 equal to the value of `],
						[/* inline code block */ 'i', `Long.MAX_VALUE`],
						[/* text */ 't', `, the result is
 equal to the value of `],
						[/* inline code block */ 'i', `Long.MAX_VALUE`],
						[/* text */ 't', `.`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `a floating-point value to be rounded to a
          `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value of the argument rounded to the nearest
          `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.`]
			]
		]],
		[/* method */ 'subtractExact(long,long)', [
			[/* method description */
				[/* text */ 't', `Returns the difference of the arguments,
 throwing an exception if the result overflows a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first value`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second value to subtract from the first`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result overflows a long`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the result`]
			]
		]]
	],
]);
