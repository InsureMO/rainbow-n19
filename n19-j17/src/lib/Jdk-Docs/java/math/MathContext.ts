import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.math.MathContext', [
	[/* class description */
		[/* text */ 't', `Immutable objects which encapsulate the context settings which
 describe certain rules for numerical operators, such as those
 implemented by the `],
		[/* reference */ 'r', `java.math.BigDecimal`, `BigDecimal`],
		[/* text */ 't', ` class.

 `],
		[/* block */ 'b', `The base-independent settings are:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `precision`],
				[/* text */ 't', `:
 the number of digits to be used for an operation; results are
 rounded to this precision

 `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `roundingMode`],
				[/* text */ 't', `:
 a `],
				[/* reference */ 'r', `enum class in java.math.RoundingMode`, `RoundingMode`],
				[/* text */ 't', ` object which specifies the algorithm to be
 used for rounding.
 `]
			]]
		]],
		[/* block */ 'b', '']
	],
	[/* fields */
		[/* field */ 'DECIMAL128', [
			[/* field description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', ` object with a precision setting
 matching the precision of the IEEE 754-2019 decimal128 format, 34 digits, and a
 rounding mode of `],
				[/* reference */ 'r', `java.math.RoundingMode#HALF_EVEN`, `HALF_EVEN`],
				[/* text */ 't', `.
 Note the exponent range of decimal64 is `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` used for
 rounding.`]
			],
		]],
		[/* field */ 'DECIMAL32', [
			[/* field description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', ` object with a precision setting
 matching the precision of the IEEE 754-2019 decimal32 format, 7 digits, and a
 rounding mode of `],
				[/* reference */ 'r', `java.math.RoundingMode#HALF_EVEN`, `HALF_EVEN`],
				[/* text */ 't', `.
 Note the exponent range of decimal32 is `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` used for
 rounding.`]
			],
		]],
		[/* field */ 'DECIMAL64', [
			[/* field description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', ` object with a precision setting
 matching the precision of the IEEE 754-2019 decimal64 format, 16 digits, and a
 rounding mode of `],
				[/* reference */ 'r', `java.math.RoundingMode#HALF_EVEN`, `HALF_EVEN`],
				[/* text */ 't', `.
 Note the exponent range of decimal64 is `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` used for
 rounding.`]
			],
		]],
		[/* field */ 'UNLIMITED', [
			[/* field description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', ` object whose settings have the values
 required for unlimited precision arithmetic.
 The values of the settings are: `],
				[/* inline code block */ 'i', `precision=0 roundingMode=HALF_UP`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', ` with the specified
 precision and the `],
				[/* reference */ 'r', `java.math.RoundingMode#HALF_UP`, `HALF_UP`],
				[/* text */ 't', ` rounding
 mode.`]
			],
			[/* parameters */
				[/* parameter */ 'setPrecision', [/* parameter description */
					[/* text */ 't', `The non-negative `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` precision setting.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `setPrecision`],
					[/* text */ 't', ` parameter is less
         than zero.`]
				]]
			]
		]],
		[/* constructor */ '<init>(int,java.math.RoundingMode)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', ` with a specified
 precision and rounding mode.`]
			],
			[/* parameters */
				[/* parameter */ 'setPrecision', [/* parameter description */
					[/* text */ 't', `The non-negative `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` precision setting.`]
				]],
				[/* parameter */ 'setRoundingMode', [/* parameter description */
					[/* text */ 't', `The rounding mode to use.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `setPrecision`],
					[/* text */ 't', ` parameter is less
         than zero.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the rounding mode argument is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', ` from a string.

 The string must be in the same format as that produced by the
 `],
				[/* reference */ 'r', `#toString()`, `toString()`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `An `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown if the precision
 section of the string is out of range (`],
					[/* inline code block */ 'i', `< 0`],
					[/* text */ 't', `) or the string is
 not in the format created by the `],
					[/* reference */ 'r', `#toString()`, `toString()`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `The string to be parsed`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the precision section is out of range
 or of incorrect format`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', ` with the specified
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` for equality.`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` to which this `],
					[/* inline code block */ 'i', `MathContext`],
					[/* text */ 't', ` is to
         be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the specified `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` is
         a `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', ` object which has exactly the same
         settings as this object`]
			]
		]],
		[/* method */ 'getPrecision()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `precision`],
				[/* text */ 't', ` setting.
 This value is always non-negative.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` which is the value of the `],
				[/* inline code block */ 'i', `precision`],
				[/* text */ 't', `
         setting`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code for this `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `hash code for this `],
				[/* inline code block */ 'i', `MathContext`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of this `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', `.
 The `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` returned represents the settings of the
 `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', ` object as two space-delimited words
 (separated by a single space character, `],
				[/* inline code block */ 'i', `'\\u0020'`],
				[/* text */ 't', `,
 and with no leading or trailing white space), as follows:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `
 The string `],
						[/* inline code block */ 'i', `"precision="`],
						[/* text */ 't', `, immediately followed
 by the value of the precision setting as a numeric string as if
 generated by the `],
						[/* reference */ 'r', `java.lang.Integer#toString(int)`, `Integer.toString`],
						[/* text */ 't', `
 method.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `
 The string `],
						[/* inline code block */ 'i', `"roundingMode="`],
						[/* text */ 't', `, immediately
 followed by the value of the `],
						[/* inline code block */ 'i', `roundingMode`],
						[/* text */ 't', ` setting as a
 word.  This word will be the same as the name of the
 corresponding public constant in the `],
						[/* reference */ 'r', `enum class in java.math.RoundingMode`, `RoundingMode`],
						[/* text */ 't', `
 enum.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', `
 For example:
 `],
				[/* code block */ 'c', ` precision=9 roundingMode=HALF_UP
 `],
				[/* text */ 't', `

 Additional words may be appended to the result of
 `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', ` in the future if more properties are added to
 this class.`],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` representing the context settings`]
			]
		]],
		[/* method */ 'getRoundingMode()', [
			[/* method description */
				[/* text */ 't', `Returns the roundingMode setting.
 This will be one of
 `],
				[/* reference */ 'r', `java.math.RoundingMode#CEILING`, `RoundingMode.CEILING`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.math.RoundingMode#DOWN`, `RoundingMode.DOWN`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.math.RoundingMode#FLOOR`, `RoundingMode.FLOOR`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.math.RoundingMode#HALF_DOWN`, `RoundingMode.HALF_DOWN`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.math.RoundingMode#HALF_EVEN`, `RoundingMode.HALF_EVEN`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.math.RoundingMode#HALF_UP`, `RoundingMode.HALF_UP`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.math.RoundingMode#UNNECESSARY`, `RoundingMode.UNNECESSARY`],
				[/* text */ 't', `, or
 `],
				[/* reference */ 'r', `java.math.RoundingMode#UP`, `RoundingMode.UP`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `RoundingMode`],
				[/* text */ 't', ` object which is the value of the
         `],
				[/* inline code block */ 'i', `roundingMode`],
				[/* text */ 't', ` setting`]
			]
		]]
	],
]);
