import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.math.BigDecimal', [
	[/* class description */
		[/* text */ 't', `Immutable, arbitrary-precision signed decimal numbers.  A `],
		[/* inline code block */ 'i', `BigDecimal`],
		[/* text */ 't', ` consists of an arbitrary precision integer
 `],
		[/* reference */ 'r', `#unscaledValue()`, `unscaled value`],
		[/* text */ 't', ` and a 32-bit
 integer `],
		[/* reference */ 'r', `#scale()`, `scale`],
		[/* text */ 't', `.  If zero or positive,
 the scale is the number of digits to the right of the decimal
 point.  If negative, the unscaled value of the number is multiplied
 by ten to the power of the negation of the scale.  The value of the
 number represented by the `],
		[/* inline code block */ 'i', `BigDecimal`],
		[/* text */ 't', ` is therefore
 `],
		[/* inline code block */ 'i', `(unscaledValue × 10-scale)`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` class provides operations for
 arithmetic, scale manipulation, rounding, comparison, hashing, and
 format conversion.  The `],
			[/* reference */ 'r', `#toString()`, `toString()`],
			[/* text */ 't', ` method provides a
 canonical representation of a `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` class gives its user complete control
 over rounding behavior.  If no rounding mode is specified and the
 exact result cannot be represented, an `],
			[/* inline code block */ 'i', `ArithmeticException`],
			[/* text */ 't', `
 is thrown; otherwise, calculations can be carried out to a chosen
 precision and rounding mode by supplying an appropriate `],
			[/* reference */ 'r', `java.math.MathContext`, `MathContext`],
			[/* text */ 't', ` object to the operation.  In either case, eight
 `],
			[/* text */ 't', `rounding modes`],
			[/* text */ 't', ` are provided for the control of rounding.
 Using the integer fields in this class (such as `],
			[/* text */ 't', `ROUND_HALF_UP`],
			[/* text */ 't', `) to represent rounding mode is deprecated; the
 enumeration values of the `],
			[/* inline code block */ 'i', `RoundingMode`],
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `enum`],
			[/* text */ 't', `, (such
 as `],
			[/* reference */ 'r', `java.math.RoundingMode#HALF_UP`, `RoundingMode.HALF_UP`],
			[/* text */ 't', `) should be used instead.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `When a `],
			[/* inline code block */ 'i', `MathContext`],
			[/* text */ 't', ` object is supplied with a precision
 setting of 0 (for example, `],
			[/* reference */ 'r', `java.math.MathContext#UNLIMITED`, `MathContext.UNLIMITED`],
			[/* text */ 't', `),
 arithmetic operations are exact, as are the arithmetic methods
 which take no `],
			[/* inline code block */ 'i', `MathContext`],
			[/* text */ 't', ` object. As a corollary of
 computing the exact result, the rounding mode setting of a `],
			[/* inline code block */ 'i', `MathContext`],
			[/* text */ 't', ` object with a precision setting of 0 is not used and
 thus irrelevant.  In the case of divide, the exact quotient could
 have an infinitely long decimal expansion; for example, 1 divided
 by 3.  If the quotient has a nonterminating decimal expansion and
 the operation is specified to return an exact result, an `],
			[/* inline code block */ 'i', `ArithmeticException`],
			[/* text */ 't', ` is thrown.  Otherwise, the exact result of the
 division is returned, as done for other operations.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `When the precision setting is not 0, the rules of `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` arithmetic are broadly compatible with selected modes
 of operation of the arithmetic defined in ANSI X3.274-1996 and ANSI
 X3.274-1996/AM 1-2000 (section 7.4).  Unlike those standards,
 `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` includes many rounding modes.  Any conflicts
 between these ANSI standards and the `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', `
 specification are resolved in favor of `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Since the same numerical value can have different
 representations (with different scales), the rules of arithmetic
 and rounding must specify both the numerical result and the scale
 used in the result's representation.

 The different representations of the same numerical value are
 called members of the same `],
			[/* text */ 't', `cohort`],
			[/* text */ 't', `. The `],
			[/* reference */ 'r', `#compareTo(java.math.BigDecimal)`, `natural order`],
			[/* text */ 't', ` of `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', `
 considers members of the same cohort to be equal to each other. In
 contrast, the `],
			[/* reference */ 'r', `#equals(java.lang.Object)`, `equals`],
			[/* text */ 't', ` method requires both the
 numerical value and representation to be the same for equality to
 hold. The results of methods like `],
			[/* inline code block */ 'i', `scale`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#unscaledValue()`, `unscaledValue()`],
			[/* text */ 't', ` will differ for numerically equal values with
 different representations.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `In general the rounding modes and precision setting determine
 how operations return results with a limited number of digits when
 the exact result has more digits (perhaps infinitely many in the
 case of division and square root) than the number of digits returned.

 First, the total number of digits to return is specified by the
 `],
			[/* inline code block */ 'i', `MathContext`],
			[/* text */ 't', `'s `],
			[/* inline code block */ 'i', `precision`],
			[/* text */ 't', ` setting; this determines
 the result's `],
			[/* text */ 't', `precision`],
			[/* text */ 't', `.  The digit count starts from the
 leftmost nonzero digit of the exact result.  The rounding mode
 determines how any discarded trailing digits affect the returned
 result.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `For all arithmetic operators, the operation is carried out as
 though an exact intermediate result were first calculated and then
 rounded to the number of digits specified by the precision setting
 (if necessary), using the selected rounding mode.  If the exact
 result is not returned, some digit positions of the exact result
 are discarded.  When rounding increases the magnitude of the
 returned result, it is possible for a new digit position to be
 created by a carry propagating to a leading "9" digit.
 For example, rounding the value 999.9 to three digits rounding up
 would be numerically equal to one thousand, represented as
 100×10`],
			[/* text */ 't', `1`, 'sup'],
			[/* text */ 't', `.  In such cases, the new "1" is
 the leading digit position of the returned result.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `For methods and constructors with a `],
			[/* inline code block */ 'i', `MathContext`],
			[/* text */ 't', `
 parameter, if the result is inexact but the rounding mode is `],
			[/* reference */ 'r', `java.math.RoundingMode#UNNECESSARY`, `UNNECESSARY`],
			[/* text */ 't', `, an `],
			[/* inline code block */ 'i', `ArithmeticException`],
			[/* text */ 't', ` will be thrown.

 `]
		]],
		[/* block */ 'b', `Besides a logical exact result, each arithmetic operation has a
 preferred scale for representing a result.  The preferred
 scale for each operation is listed in the table below.

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc', [
				[/* text */ 't', `Preferred Scales for Results of Arithmetic Operations
 `]
			]],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Operation`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Preferred Scale of Result`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Add`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `max(addend.scale(), augend.scale())`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Subtract`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `max(minuend.scale(), subtrahend.scale())`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Multiply`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `multiplier.scale() + multiplicand.scale()`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Divide`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `dividend.scale() - divisor.scale()`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Square root`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `radicand.scale()/2`]
					]]
				]]
			]],
		],
		[/* text */ 't', `

 These scales are the ones used by the methods which return exact
 arithmetic results; except that an exact divide may have to use a
 larger scale since the exact result may have more digits.  For
 example, `],
		[/* inline code block */ 'i', `1/32`],
		[/* text */ 't', ` is `],
		[/* inline code block */ 'i', `0.03125`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Before rounding, the scale of the logical exact intermediate
 result is the preferred scale for that operation.  If the exact
 numerical result cannot be represented in `],
			[/* inline code block */ 'i', `precision`],
			[/* text */ 't', `
 digits, rounding selects the set of digits to return and the scale
 of the result is reduced from the scale of the intermediate result
 to the least scale which can represent the `],
			[/* inline code block */ 'i', `precision`],
			[/* text */ 't', `
 digits actually returned.  If the exact result can be represented
 with at most `],
			[/* inline code block */ 'i', `precision`],
			[/* text */ 't', ` digits, the representation
 of the result with the scale closest to the preferred scale is
 returned.  In particular, an exactly representable quotient may be
 represented in fewer than `],
			[/* inline code block */ 'i', `precision`],
			[/* text */ 't', ` digits by removing
 trailing zeros and decreasing the scale.  For example, rounding to
 three digits using the `],
			[/* reference */ 'r', `java.math.RoundingMode#FLOOR`, `floor`],
			[/* text */ 't', `
 rounding mode, `],
			[/* new line */ 'n'],
			[/* text */ 't', `

 `],
			[/* inline code block */ 'i', `19/100 = 0.19 // integer=19, scale=2`],
			[/* text */ 't', ` `],
			[/* new line */ 'n'],
			[/* text */ 't', `

 but`],
			[/* new line */ 'n'],
			[/* text */ 't', `

 `],
			[/* inline code block */ 'i', `21/110 = 0.190 // integer=190, scale=3`],
			[/* text */ 't', ` `],
			[/* new line */ 'n'],
			[/* text */ 't', `

 `]
		]],
		[/* block */ 'b', `Note that for add, subtract, and multiply, the reduction in
 scale will equal the number of digit positions of the exact result
 which are discarded. If the rounding causes a carry propagation to
 create a new high-order digit position, an additional digit of the
 result is discarded than when no new digit position is created.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Other methods may have slightly different rounding semantics.
 For example, the result of the `],
			[/* inline code block */ 'i', `pow`],
			[/* text */ 't', ` method using the
 `],
			[/* reference */ 'r', `#pow(int,java.math.MathContext)`, `specified algorithm`],
			[/* text */ 't', ` can
 occasionally differ from the rounded mathematical result by more
 than one unit in the last place, one `],
			[/* reference */ 'r', `#ulp()`, `ulp`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Two types of operations are provided for manipulating the scale
 of a `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', `: scaling/rounding operations and decimal
 point motion operations.  Scaling/rounding operations (`],
			[/* reference */ 'r', `#setScale(int,java.math.RoundingMode)`, `setScale`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#round(java.math.MathContext)`, `round`],
			[/* text */ 't', `) return a
 `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` whose value is approximately (or exactly) equal
 to that of the operand, but whose scale or precision is the
 specified value; that is, they increase or decrease the precision
 of the stored number with minimal effect on its value.  Decimal
 point motion operations (`],
			[/* reference */ 'r', `#movePointLeft(int)`, `movePointLeft`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#movePointRight(int)`, `movePointRight`],
			[/* text */ 't', `) return a
 `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` created from the operand by moving the decimal
 point a specified distance in the specified direction.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `As a 32-bit integer, the set of values for the scale is large,
 but bounded. If the scale of a result would exceed the range of a
 32-bit integer, either by overflow or underflow, the operation may
 throw an `],
			[/* inline code block */ 'i', `ArithmeticException`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `For the sake of brevity and clarity, pseudo-code is used
 throughout the descriptions of `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` methods.  The
 pseudo-code expression `],
			[/* inline code block */ 'i', `(i + j)`],
			[/* text */ 't', ` is shorthand for "a
 `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` whose value is that of the `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', `
 `],
			[/* inline code block */ 'i', `i`],
			[/* text */ 't', ` added to that of the `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', `
 `],
			[/* inline code block */ 'i', `j`],
			[/* text */ 't', `." The pseudo-code expression `],
			[/* inline code block */ 'i', `(i == j)`],
			[/* text */ 't', ` is
 shorthand for "`],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', ` if and only if the
 `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `i`],
			[/* text */ 't', ` represents the same value as the
 `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `j`],
			[/* text */ 't', `." Other pseudo-code expressions
 are interpreted similarly.  Square brackets are used to represent
 the particular `],
			[/* inline code block */ 'i', `BigInteger`],
			[/* text */ 't', ` and scale pair defining a
 `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` value; for example [19, 2] is the
 `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` numerically equal to 0.19 having a scale of 2.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `All methods and constructors for this class throw
 `],
			[/* inline code block */ 'i', `NullPointerException`],
			[/* text */ 't', ` when passed a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` object
 reference for any input parameter.`]
		]]
	],
	[/* fields */
		[/* field */ 'ONE', [
			[/* field description */
				[/* text */ 't', `The value 1, with a scale of 0.`]
			],
		]],
		[/* field */ 'ROUND_CEILING', [
			[/* field description */
				[/* text */ 't', `Rounding mode to round towards positive infinity.  If the
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` is positive, behaves as for
 `],
				[/* inline code block */ 'i', `ROUND_UP`],
				[/* text */ 't', `; if negative, behaves as for
 `],
				[/* inline code block */ 'i', `ROUND_DOWN`],
				[/* text */ 't', `.  Note that this rounding mode never
 decreases the calculated value.`]
			],
		]],
		[/* field */ 'ROUND_DOWN', [
			[/* field description */
				[/* text */ 't', `Rounding mode to round towards zero.  Never increments the digit
 prior to a discarded fraction (i.e., truncates).  Note that this
 rounding mode never increases the magnitude of the calculated value.`]
			],
		]],
		[/* field */ 'ROUND_FLOOR', [
			[/* field description */
				[/* text */ 't', `Rounding mode to round towards negative infinity.  If the
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` is positive, behave as for
 `],
				[/* inline code block */ 'i', `ROUND_DOWN`],
				[/* text */ 't', `; if negative, behave as for
 `],
				[/* inline code block */ 'i', `ROUND_UP`],
				[/* text */ 't', `.  Note that this rounding mode never
 increases the calculated value.`]
			],
		]],
		[/* field */ 'ROUND_HALF_DOWN', [
			[/* field description */
				[/* text */ 't', `Rounding mode to round towards "nearest neighbor"
 unless both neighbors are equidistant, in which case round
 down.  Behaves as for `],
				[/* inline code block */ 'i', `ROUND_UP`],
				[/* text */ 't', ` if the discarded
 fraction is > 0.5; otherwise, behaves as for
 `],
				[/* inline code block */ 'i', `ROUND_DOWN`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'ROUND_HALF_EVEN', [
			[/* field description */
				[/* text */ 't', `Rounding mode to round towards the "nearest neighbor"
 unless both neighbors are equidistant, in which case, round
 towards the even neighbor.  Behaves as for
 `],
				[/* inline code block */ 'i', `ROUND_HALF_UP`],
				[/* text */ 't', ` if the digit to the left of the
 discarded fraction is odd; behaves as for
 `],
				[/* inline code block */ 'i', `ROUND_HALF_DOWN`],
				[/* text */ 't', ` if it's even.  Note that this is the
 rounding mode that minimizes cumulative error when applied
 repeatedly over a sequence of calculations.`]
			],
		]],
		[/* field */ 'ROUND_HALF_UP', [
			[/* field description */
				[/* text */ 't', `Rounding mode to round towards "nearest neighbor"
 unless both neighbors are equidistant, in which case round up.
 Behaves as for `],
				[/* inline code block */ 'i', `ROUND_UP`],
				[/* text */ 't', ` if the discarded fraction is
 ≥ 0.5; otherwise, behaves as for `],
				[/* inline code block */ 'i', `ROUND_DOWN`],
				[/* text */ 't', `.  Note
 that this is the rounding mode that most of us were taught in
 grade school.`]
			],
		]],
		[/* field */ 'ROUND_UNNECESSARY', [
			[/* field description */
				[/* text */ 't', `Rounding mode to assert that the requested operation has an exact
 result, hence no rounding is necessary.  If this rounding mode is
 specified on an operation that yields an inexact result, an
 `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` is thrown.`]
			],
		]],
		[/* field */ 'ROUND_UP', [
			[/* field description */
				[/* text */ 't', `Rounding mode to round away from zero.  Always increments the
 digit prior to a nonzero discarded fraction.  Note that this rounding
 mode never decreases the magnitude of the calculated value.`]
			],
		]],
		[/* field */ 'TEN', [
			[/* field description */
				[/* text */ 't', `The value 10, with a scale of 0.`]
			],
		]],
		[/* field */ 'ZERO', [
			[/* field description */
				[/* text */ 't', `The value 0, with a scale of 0.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(char[])', [
			[/* constructor description */
				[/* text */ 't', `Translates a character array representation of a
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, accepting the
 same sequence of characters as the `],
				[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `BigDecimal(String)`],
				[/* text */ 't', `
 constructor.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array that is the source of characters.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `in`],
					[/* text */ 't', ` is not a valid
         representation of a `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>(char[],int,int)', [
			[/* constructor description */
				[/* text */ 't', `Translates a character array representation of a
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, accepting the
 same sequence of characters as the `],
				[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `BigDecimal(String)`],
				[/* text */ 't', `
 constructor, while allowing a sub-array to be specified.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array that is the source of characters.`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `first character in the array to inspect.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `number of characters to consider.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `in`],
					[/* text */ 't', ` is not a valid
         representation of a `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` or the defined subarray
         is not wholly within `],
					[/* inline code block */ 'i', `in`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>(char[],int,int,java.math.MathContext)', [
			[/* constructor description */
				[/* text */ 't', `Translates a character array representation of a
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, accepting the
 same sequence of characters as the `],
				[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `BigDecimal(String)`],
				[/* text */ 't', `
 constructor, while allowing a sub-array to be specified and
 with rounding according to the context settings.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array that is the source of characters.`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `first character in the array to inspect.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `number of characters to consider.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `in`],
					[/* text */ 't', ` is not a valid
         representation of a `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` or the defined subarray
         is not wholly within `],
					[/* inline code block */ 'i', `in`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>(char[],java.math.MathContext)', [
			[/* constructor description */
				[/* text */ 't', `Translates a character array representation of a
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, accepting the
 same sequence of characters as the `],
				[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `BigDecimal(String)`],
				[/* text */ 't', `
 constructor and with rounding according to the context
 settings.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array that is the source of characters.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `in`],
					[/* text */ 't', ` is not a valid
         representation of a `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>(double)', [
			[/* constructor description */
				[/* text */ 't', `Translates a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` which
 is the exact decimal representation of the `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `'s
 binary floating-point value.  The scale of the returned
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` is the smallest value such that
 `],
				[/* inline code block */ 'i', `(10scale × val)`],
				[/* text */ 't', ` is an integer.
 `],
				[/* block */ 'b', `Notes:`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `
 The results of this constructor can be somewhat unpredictable.
 One might assume that writing `],
						[/* inline code block */ 'i', `new BigDecimal(0.1)`],
						[/* text */ 't', ` in
 Java creates a `],
						[/* inline code block */ 'i', `BigDecimal`],
						[/* text */ 't', ` which is exactly equal to
 0.1 (an unscaled value of 1, with a scale of 1), but it is
 actually equal to
 0.1000000000000000055511151231257827021181583404541015625.
 This is because 0.1 cannot be represented exactly as a
 `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` (or, for that matter, as a binary fraction of
 any finite length).  Thus, the value that is being passed
 `],
						[/* text */ 't', `in`],
						[/* text */ 't', ` to the constructor is not exactly equal to 0.1,
 appearances notwithstanding.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `
 The `],
						[/* inline code block */ 'i', `String`],
						[/* text */ 't', ` constructor, on the other hand, is
 perfectly predictable: writing `],
						[/* inline code block */ 'i', `new BigDecimal("0.1")`],
						[/* text */ 't', `
 creates a `],
						[/* inline code block */ 'i', `BigDecimal`],
						[/* text */ 't', ` which is `],
						[/* text */ 't', `exactly`],
						[/* text */ 't', ` equal to
 0.1, as one would expect.  Therefore, it is generally
 recommended that the `],
						[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `String constructor`],
						[/* text */ 't', ` be used in preference to this one.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `
 When a `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` must be used as a source for a
 `],
						[/* inline code block */ 'i', `BigDecimal`],
						[/* text */ 't', `, note that this constructor provides an
 exact conversion; it does not give the same result as
 converting the `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` to a `],
						[/* inline code block */ 'i', `String`],
						[/* text */ 't', ` using the
 `],
						[/* reference */ 'r', `java.lang.Double#toString(double)`, `Double.toString(double)`],
						[/* text */ 't', ` method and then using the
 `],
						[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `BigDecimal(String)`],
						[/* text */ 't', ` constructor.  To get that result,
 use the `],
						[/* inline code block */ 'i', `static`],
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#valueOf(double)`, `valueOf(double)`],
						[/* text */ 't', ` method.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value to be converted to
        `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', ` is infinite or NaN.`]
				]]
			]
		]],
		[/* constructor */ '<init>(double,java.math.MathContext)', [
			[/* constructor description */
				[/* text */ 't', `Translates a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, with
 rounding according to the context settings.  The scale of the
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` is the smallest value such that
 `],
				[/* inline code block */ 'i', `(10scale × val)`],
				[/* text */ 't', ` is an integer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The results of this constructor can be somewhat unpredictable
 and its use is generally not recommended; see the notes under
 the `],
					[/* reference */ 'r', `#%3Cinit%3E(double)`, `BigDecimal(double)`],
					[/* text */ 't', ` constructor.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` value to be converted to
         `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', ` is infinite or NaN.`]
				]]
			]
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Translates an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.  The
 scale of the `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` is zero.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value to be converted to
            `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int,java.math.MathContext)', [
			[/* constructor description */
				[/* text */ 't', `Translates an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, with
 rounding according to the context settings.  The scale of the
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, before any rounding, is zero.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value to be converted to `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Translates the string representation of a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `
 into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.  The string representation consists
 of an optional sign, `],
				[/* inline code block */ 'i', `'+'`],
				[/* text */ 't', ` (`],
				[/* inline code block */ 'i', `'\\u002B'`],
				[/* text */ 't', `) or
 `],
				[/* inline code block */ 'i', `'-'`],
				[/* text */ 't', ` (`],
				[/* inline code block */ 'i', `'\\u002D'`],
				[/* text */ 't', `), followed by a sequence of
 zero or more decimal digits ("the integer"), optionally
 followed by a fraction, optionally followed by an exponent.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The fraction consists of a decimal point followed by zero
 or more decimal digits.  The string must contain at least one
 digit in either the integer or the fraction.  The number formed
 by the sign, the integer and the fraction is referred to as the
 `],
					[/* text */ 't', `significand`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The exponent consists of the character `],
					[/* inline code block */ 'i', `'e'`],
					[/* text */ 't', `
 (`],
					[/* inline code block */ 'i', `'\\u0065'`],
					[/* text */ 't', `) or `],
					[/* inline code block */ 'i', `'E'`],
					[/* text */ 't', ` (`],
					[/* inline code block */ 'i', `'\\u0045'`],
					[/* text */ 't', `)
 followed by one or more decimal digits.  The value of the
 exponent must lie between -`],
					[/* reference */ 'r', `java.lang.Integer#MAX_VALUE`, `Integer.MAX_VALUE`],
					[/* text */ 't', ` (`],
					[/* reference */ 'r', `java.lang.Integer#MIN_VALUE`, `Integer.MIN_VALUE`],
					[/* text */ 't', `+1) and `],
					[/* reference */ 'r', `java.lang.Integer#MAX_VALUE`, `Integer.MAX_VALUE`],
					[/* text */ 't', `, inclusive.

 `]
				]],
				[/* block */ 'b', `More formally, the strings this constructor accepts are
 described by the following grammar:
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* dl */ 'dl', [
						[/* dt */ 'dt', [
							[/* text */ 't', `BigDecimalString:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `Sign<sub>opt</sub> Significand Exponent<sub>opt</sub>`],
							[/* text */ 't', `
 `]
						]],
						[/* dt */ 'dt', [
							[/* text */ 't', `Sign:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* inline code block */ 'i', `+`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* inline code block */ 'i', `-`],
							[/* text */ 't', `
 `]
						]],
						[/* dt */ 'dt', [
							[/* text */ 't', `Significand:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `IntegerPart`],
							[/* text */ 't', ` `],
							[/* inline code block */ 'i', `.`],
							[/* text */ 't', ` `],
							[/* text */ 't', `opt`, 'sub'],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* inline code block */ 'i', `.`],
							[/* text */ 't', ` `],
							[/* text */ 't', `FractionPart`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `IntegerPart`],
							[/* text */ 't', `
 `]
						]],
						[/* dt */ 'dt', [
							[/* text */ 't', `IntegerPart:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `Digits`],
							[/* text */ 't', `
 `]
						]],
						[/* dt */ 'dt', [
							[/* text */ 't', `FractionPart:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `Digits`],
							[/* text */ 't', `
 `]
						]],
						[/* dt */ 'dt', [
							[/* text */ 't', `Exponent:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `ExponentIndicator SignedInteger`],
							[/* text */ 't', `
 `]
						]],
						[/* dt */ 'dt', [
							[/* text */ 't', `ExponentIndicator:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* inline code block */ 'i', `e`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* inline code block */ 'i', `E`],
							[/* text */ 't', `
 `]
						]],
						[/* dt */ 'dt', [
							[/* text */ 't', `SignedInteger:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `opt`, 'sub'],
							[/* text */ 't', `
 `]
						]],
						[/* dt */ 'dt', [
							[/* text */ 't', `Digits:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `Digit`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `Digits Digit`],
							[/* text */ 't', `
 `]
						]],
						[/* dt */ 'dt', [
							[/* text */ 't', `Digit:`],
							[/* text */ 't', `
 `]
						]],
						[/* dd */ 'dd', [
							[/* text */ 't', `any character for which `],
							[/* reference */ 'r', `java.lang.Character#isDigit(char)`, `Character.isDigit(char)`],
							[/* text */ 't', `
 returns `],
							[/* inline code block */ 'i', `true`],
							[/* text */ 't', `, including 0, 1, 2 ...
 `]
						]]
					]],
					[/* text */ 't', `
 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `The scale of the returned `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` will be the
 number of digits in the fraction, or zero if the string
 contains no decimal point, subject to adjustment for any
 exponent; if the string contains an exponent, the exponent is
 subtracted from the scale.  The value of the resulting scale
 must lie between `],
					[/* inline code block */ 'i', `Integer.MIN_VALUE`],
					[/* text */ 't', ` and
 `],
					[/* inline code block */ 'i', `Integer.MAX_VALUE`],
					[/* text */ 't', `, inclusive.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The character-to-digit mapping is provided by `],
					[/* reference */ 'r', `java.lang.Character#digit(char,int)`, `Character.digit(char, int)`],
					[/* text */ 't', ` set to convert to radix 10.  The
 String may not contain any extraneous characters (whitespace,
 for example).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Examples:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The value of the returned `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is equal to
 `],
					[/* text */ 't', `significand`],
					[/* text */ 't', ` × 10`],
					[/* text */ 't', `exponent`, 'sup'],
					[/* text */ 't', `.
 For each string on the left, the resulting representation
 [`],
					[/* inline code block */ 'i', `BigInteger`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `scale`],
					[/* text */ 't', `] is shown on the right.
 `]
				]],
				[/* code block */ 'c', ` "0"            [0,0]
 "0.00"         [0,2]
 "123"          [123,0]
 "-123"         [-123,0]
 "1.23E3"       [123,-1]
 "1.23E+3"      [123,-1]
 "12.3E+7"      [123,-6]
 "12.0"         [120,1]
 "12.3"         [123,1]
 "0.00123"      [123,5]
 "-1.23E-12"    [-123,14]
 "1234.5E-4"    [12345,5]
 "0E+7"         [0,-7]
 "-0"           [0,0]
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `String representation of `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', ` is not a valid
         representation of a `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.math.MathContext)', [
			[/* constructor description */
				[/* text */ 't', `Translates the string representation of a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `
 into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, accepting the same strings as the
 `],
				[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `BigDecimal(String)`],
				[/* text */ 't', ` constructor, with rounding
 according to the context settings.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `string representation of a `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', ` is not a valid
         representation of a BigDecimal.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.math.BigInteger)', [
			[/* constructor description */
				[/* text */ 't', `Translates a `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.
 The scale of the `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` is zero.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `BigInteger`],
					[/* text */ 't', ` value to be converted to
            `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.math.BigInteger,int)', [
			[/* constructor description */
				[/* text */ 't', `Translates a `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` unscaled value and an
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` scale into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.  The value of
 the `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` is
 `],
				[/* inline code block */ 'i', `(unscaledVal × 10-scale)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'unscaledVal', [/* parameter description */
					[/* text */ 't', `unscaled value of the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'scale', [/* parameter description */
					[/* text */ 't', `scale of the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.math.BigInteger,int,java.math.MathContext)', [
			[/* constructor description */
				[/* text */ 't', `Translates a `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` unscaled value and an
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` scale into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, with rounding
 according to the context settings.  The value of the
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `(unscaledVal × 10-scale)`],
				[/* text */ 't', `, rounded according to the
 `],
				[/* inline code block */ 'i', `precision`],
				[/* text */ 't', ` and rounding mode settings.`]
			],
			[/* parameters */
				[/* parameter */ 'unscaledVal', [/* parameter description */
					[/* text */ 't', `unscaled value of the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'scale', [/* parameter description */
					[/* text */ 't', `scale of the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.math.BigInteger,java.math.MathContext)', [
			[/* constructor description */
				[/* text */ 't', `Translates a `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `
 rounding according to the context settings.  The scale of the
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` is zero.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `BigInteger`],
					[/* text */ 't', ` value to be converted to
            `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(long)', [
			[/* constructor description */
				[/* text */ 't', `Translates a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.  The
 scale of the `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` is zero.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value to be converted to `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(long,java.math.MathContext)', [
			[/* constructor description */
				[/* text */ 't', `Translates a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, with
 rounding according to the context settings.  The scale of the
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, before any rounding, is zero.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value to be converted to `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` with the specified `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` for equality.  Unlike `],
				[/* reference */ 'r', `#compareTo(java.math.BigDecimal)`, `compareTo`],
				[/* text */ 't', `, this method considers two `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `
 objects equal only if they are equal in value and
 scale. Therefore 2.0 is not equal to 2.00 when compared by this
 method since the former has [`],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `scale`],
				[/* text */ 't', `]
 components equal to [20, 1] while the latter has components
 equal to [200, 2].`]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', ` to which this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is
         to be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the specified `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` is a
         `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value and scale are equal to this
         `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `'s.`]
			]
		]],
		[/* method */ 'byteValueExact()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `, checking
 for lost information.  If this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` has a
 nonzero fractional part or is out of the possible range for a
 `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` result then an `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` is
 thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` has a nonzero
         fractional part, or will not fit in a `],
					[/* inline code block */ 'i', `byte`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` converted to a `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'doubleValue()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `.
 This conversion is similar to the
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
 if this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` has too great a
 magnitude represent as a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `, it will be
 converted to `],
				[/* reference */ 'r', `java.lang.Double#NEGATIVE_INFINITY`, `Double.NEGATIVE_INFINITY`],
				[/* text */ 't', ` or `],
				[/* reference */ 'r', `java.lang.Double#POSITIVE_INFINITY`, `Double.POSITIVE_INFINITY`],
				[/* text */ 't', ` as appropriate.  Note that even when
 the return value is finite, this conversion can lose
 information about the precision of the `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `
 value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` converted to a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'floatValue()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.
 This conversion is similar to the
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
 if this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` has too great a
 magnitude to represent as a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `, it will be
 converted to `],
				[/* reference */ 'r', `java.lang.Float#NEGATIVE_INFINITY`, `Float.NEGATIVE_INFINITY`],
				[/* text */ 't', ` or `],
				[/* reference */ 'r', `java.lang.Float#POSITIVE_INFINITY`, `Float.POSITIVE_INFINITY`],
				[/* text */ 't', ` as appropriate.  Note that even when
 the return value is finite, this conversion can lose
 information about the precision of the `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `
 value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` converted to a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'compareTo(java.math.BigDecimal)', [
			[/* method description */
				[/* text */ 't', `Compares this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` numerically with the specified
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.  Two `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` objects that are
 equal in value but have a different scale (like 2.0 and 2.00)
 are considered equal by this method. Such values are in the
 same `],
				[/* text */ 't', `cohort`],
				[/* text */ 't', `.

 This method is provided in preference to individual methods for
 each of the six boolean comparison operators (<, ==,
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
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` to which this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is
         to be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `-1, 0, or 1 as this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` is numerically
          less than, equal to, or greater than `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code for this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.
 The hash code is computed as a function of the `],
				[/* reference */ 'r', `#unscaledValue()`, `unscaled value`],
				[/* text */ 't', ` and the `],
				[/* reference */ 'r', `#scale()`, `scale`],
				[/* text */ 't', ` of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `hash code for this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'intValue()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` to an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 This conversion is analogous to the
 `],
				[/* text */ 't', `narrowing primitive conversion`],
				[/* text */ 't', ` from `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` to
 `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` as defined in
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `:
 any fractional part of this
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` will be discarded, and if the resulting
 "`],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', `" is too big to fit in an
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `, only the low-order 32 bits are returned.
 Note that this conversion can lose information about the
 overall magnitude and precision of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `
 value as well as return a result with the opposite sign.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` converted to an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'intValueExact()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` to an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `, checking
 for lost information.  If this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` has a
 nonzero fractional part or is out of the possible range for an
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` result then an `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` is
 thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` has a nonzero
         fractional part, or will not fit in an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` converted to an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'precision()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* text */ 't', `precision`],
				[/* text */ 't', ` of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.  (The
 precision is the number of digits in the unscaled value.)

 `],
				[/* block */ 'b', `The precision of a zero value is 1.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the precision of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'scale()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* text */ 't', `scale`],
				[/* text */ 't', ` of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.  If zero
 or positive, the scale is the number of digits to the right of
 the decimal point.  If negative, the unscaled value of the
 number is multiplied by ten to the power of the negation of the
 scale.  For example, a scale of `],
				[/* inline code block */ 'i', `-3`],
				[/* text */ 't', ` means the unscaled
 value is multiplied by 1000.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the scale of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'signum()', [
			[/* method description */
				[/* text */ 't', `Returns the signum function of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `-1, 0, or 1 as the value of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `
         is negative, zero, or positive.`]
			]
		]],
		[/* method */ 'toEngineeringString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `,
 using engineering notation if an exponent is needed.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Returns a string that represents the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` as
 described in the `],
					[/* reference */ 'r', `#toString()`, `toString()`],
					[/* text */ 't', ` method, except that if
 exponential notation is used, the power of ten is adjusted to
 be a multiple of three (engineering notation) such that the
 integer part of nonzero values will be in the range 1 through
 999.  If exponential notation is used for zero values, a
 decimal point and one or two fractional zero digits are used so
 that the scale of the zero value is preserved.  Note that
 unlike the output of `],
					[/* reference */ 'r', `#toString()`, `toString()`],
					[/* text */ 't', `, the output of this
 method is `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` guaranteed to recover the same [integer,
 scale] pair of this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` if the output string is
 converting back to a `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` using the `],
					[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `string constructor`],
					[/* text */ 't', `.  The result of this method meets
 the weaker constraint of always producing a numerically equal
 result from applying the string constructor to the method's output.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `string representation of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, using
         engineering notation if an exponent is needed.`]
			]
		]],
		[/* method */ 'toPlainString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `
 without an exponent field.  For values with a positive scale,
 the number of digits to the right of the decimal point is used
 to indicate scale.  For values with a zero or negative scale,
 the resulting string is generated as if the value were
 converted to a numerically equal value with zero scale and as
 if all the trailing zeros of the zero scale value were present
 in the result.

 The entire string is prefixed by a minus sign character '-'
 (`],
				[/* inline code block */ 'i', `'\\u002D'`],
				[/* text */ 't', `) if the unscaled value is less than
 zero. No sign character is prefixed if the unscaled value is
 zero or positive.

 Note that if the result of this method is passed to the
 `],
				[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `string constructor`],
				[/* text */ 't', `, only the
 numerical value of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` will necessarily be
 recovered; the representation of the new `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `
 may have a different scale.  In particular, if this
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` has a negative scale, the string resulting
 from this method will have a scale of zero when processed by
 the string constructor.

 (This method behaves analogously to the `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', `
 method in 1.4 and earlier releases.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `
 without an exponent field.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the string representation of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `,
 using scientific notation if an exponent is needed.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A standard canonical string form of the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `
 is created as though by the following steps: first, the
 absolute value of the unscaled value of the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `
 is converted to a string in base ten using the characters
 `],
					[/* inline code block */ 'i', `'0'`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `'9'`],
					[/* text */ 't', ` with no leading zeros (except
 if its value is zero, in which case a single `],
					[/* inline code block */ 'i', `'0'`],
					[/* text */ 't', `
 character is used).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Next, an `],
					[/* text */ 't', `adjusted exponent`],
					[/* text */ 't', ` is calculated; this is the
 negated scale, plus the number of characters in the converted
 unscaled value, less one.  That is,
 `],
					[/* inline code block */ 'i', `-scale+(ulength-1)`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `ulength`],
					[/* text */ 't', ` is the
 length of the absolute value of the unscaled value in decimal
 digits (its `],
					[/* text */ 't', `precision`],
					[/* text */ 't', `).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the scale is greater than or equal to zero and the
 adjusted exponent is greater than or equal to `],
					[/* inline code block */ 'i', `-6`],
					[/* text */ 't', `, the
 number will be converted to a character form without using
 exponential notation.  In this case, if the scale is zero then
 no decimal point is added and if the scale is positive a
 decimal point will be inserted with the scale specifying the
 number of characters to the right of the decimal point.
 `],
					[/* inline code block */ 'i', `'0'`],
					[/* text */ 't', ` characters are added to the left of the converted
 unscaled value as necessary.  If no character precedes the
 decimal point after this insertion then a conventional
 `],
					[/* inline code block */ 'i', `'0'`],
					[/* text */ 't', ` character is prefixed.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Otherwise (that is, if the scale is negative, or the
 adjusted exponent is less than `],
					[/* inline code block */ 'i', `-6`],
					[/* text */ 't', `), the number will be
 converted to a character form using exponential notation.  In
 this case, if the converted `],
					[/* inline code block */ 'i', `BigInteger`],
					[/* text */ 't', ` has more than
 one digit a decimal point is inserted after the first digit.
 An exponent in character form is then suffixed to the converted
 unscaled value (perhaps with inserted decimal point); this
 comprises the letter `],
					[/* inline code block */ 'i', `'E'`],
					[/* text */ 't', ` followed immediately by the
 adjusted exponent converted to a character form.  The latter is
 in base ten, using the characters `],
					[/* inline code block */ 'i', `'0'`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `'9'`],
					[/* text */ 't', ` with no leading zeros, and is always prefixed by a
 sign character `],
					[/* inline code block */ 'i', `'-'`],
					[/* text */ 't', ` (`],
					[/* inline code block */ 'i', `'\\u002D'`],
					[/* text */ 't', `) if the
 adjusted exponent is negative, `],
					[/* inline code block */ 'i', `'+'`],
					[/* text */ 't', `
 (`],
					[/* inline code block */ 'i', `'\\u002B'`],
					[/* text */ 't', `) otherwise).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Finally, the entire string is prefixed by a minus sign
 character `],
					[/* inline code block */ 'i', `'-'`],
					[/* text */ 't', ` (`],
					[/* inline code block */ 'i', `'\\u002D'`],
					[/* text */ 't', `) if the unscaled
 value is less than zero.  No sign character is prefixed if the
 unscaled value is zero or positive.

 `]
				]],
				[/* block */ 'b', `Examples:`],
				[/* block */ 'b', [
					[/* text */ 't', `For each representation [`],
					[/* text */ 't', `unscaled value`],
					[/* text */ 't', `, `],
					[/* text */ 't', `scale`],
					[/* text */ 't', `]
 on the left, the resulting string is shown on the right.
 `]
				]],
				[/* code block */ 'c', ` [123,0]      "123"
 [-123,0]     "-123"
 [123,-1]     "1.23E+3"
 [123,-3]     "1.23E+5"
 [123,1]      "12.3"
 [123,5]      "0.00123"
 [123,10]     "1.23E-8"
 [-123,12]    "-1.23E-10"
 `],
				[/* text */ 't', `

 `],
				[/* text */ 't', `Notes:`],
				[/* text */ 't', `
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `There is a one-to-one mapping between the distinguishable
 `],
						[/* inline code block */ 'i', `BigDecimal`],
						[/* text */ 't', ` values and the result of this conversion.
 That is, every distinguishable `],
						[/* inline code block */ 'i', `BigDecimal`],
						[/* text */ 't', ` value
 (unscaled value and scale) has a unique string representation
 as a result of using `],
						[/* inline code block */ 'i', `toString`],
						[/* text */ 't', `.  If that string
 representation is converted back to a `],
						[/* inline code block */ 'i', `BigDecimal`],
						[/* text */ 't', ` using
 the `],
						[/* reference */ 'r', `#%3Cinit%3E(java.lang.String)`, `BigDecimal(String)`],
						[/* text */ 't', ` constructor, then the original
 value will be recovered.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The string produced for a given number is always the same;
 it is not affected by locale.  This means that it can be used
 as a canonical string representation for exchanging decimal
 data, or as a key for a Hashtable, etc.  Locale-sensitive
 number formatting and parsing is handled by the `],
						[/* reference */ 'r', `java.text.NumberFormat`, `NumberFormat`],
						[/* text */ 't', ` class and its subclasses.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `#toEngineeringString()`, `toEngineeringString()`],
						[/* text */ 't', ` method may be used for
 presenting numbers with exponents in engineering notation, and the
 `],
						[/* reference */ 'r', `#setScale(int,java.math.RoundingMode)`, `setScale`],
						[/* text */ 't', ` method may be used for
 rounding a `],
						[/* inline code block */ 'i', `BigDecimal`],
						[/* text */ 't', ` so it has a known number of digits after
 the decimal point.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The digit-to-character mapping provided by
 `],
						[/* inline code block */ 'i', `Character.forDigit`],
						[/* text */ 't', ` is used.

 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `string representation of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'abs()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is the absolute value
 of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, and whose scale is
 `],
				[/* inline code block */ 'i', `this.scale()`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `abs(this)`]
			]
		]],
		[/* method */ 'abs(java.math.MathContext)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is the absolute value
 of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, with rounding according to the
 context settings.`]
			],
			[/* parameters */
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `abs(this)`],
				[/* text */ 't', `, rounded as necessary.`]
			]
		]],
		[/* method */ 'add(java.math.BigDecimal)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(this + augend)`],
				[/* text */ 't', `, and whose scale is `],
				[/* inline code block */ 'i', `max(this.scale(), augend.scale())`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'augend', [/* parameter description */
					[/* text */ 't', `value to be added to this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this + augend`]
			]
		]],
		[/* method */ 'add(java.math.BigDecimal,java.math.MathContext)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(this + augend)`],
				[/* text */ 't', `,
 with rounding according to the context settings.

 If either number is zero and the precision setting is nonzero then
 the other number, rounded if necessary, is used as the result.`]
			],
			[/* parameters */
				[/* parameter */ 'augend', [/* parameter description */
					[/* text */ 't', `value to be added to this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this + augend`],
				[/* text */ 't', `, rounded as necessary.`]
			]
		]],
		[/* method */ 'divide(java.math.BigDecimal)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(this / divisor)`],
				[/* text */ 't', `, and whose preferred scale is `],
				[/* inline code block */ 'i', `(this.scale() - divisor.scale())`],
				[/* text */ 't', `; if the exact quotient cannot be
 represented (because it has a non-terminating decimal
 expansion) an `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` is thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `value by which this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is to be divided.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the exact quotient does not have a
         terminating decimal expansion, including dividing by zero`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this / divisor`]
			]
		]],
		[/* method */ 'divide(java.math.BigDecimal,int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(this / divisor)`],
				[/* text */ 't', `, and whose scale is `],
				[/* inline code block */ 'i', `this.scale()`],
				[/* text */ 't', `.  If
 rounding must be performed to generate a result with the given
 scale, the specified rounding mode is applied.`]
			],
			[/* parameters */
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `value by which this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is to be divided.`]
				]],
				[/* parameter */ 'roundingMode', [/* parameter description */
					[/* text */ 't', `rounding mode to apply.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `divisor==0`],
					[/* text */ 't', `, or
         `],
					[/* inline code block */ 'i', `roundingMode==ROUND_UNNECESSARY`],
					[/* text */ 't', ` and
         `],
					[/* inline code block */ 'i', `this.scale()`],
					[/* text */ 't', ` is insufficient to represent the result
         of the division exactly.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `roundingMode`],
					[/* text */ 't', ` does not
         represent a valid rounding mode.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this / divisor`]
			]
		]],
		[/* method */ 'divide(java.math.BigDecimal,int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(this / divisor)`],
				[/* text */ 't', `, and whose scale is as specified.  If rounding must
 be performed to generate a result with the specified scale, the
 specified rounding mode is applied.`]
			],
			[/* parameters */
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `value by which this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is to be divided.`]
				]],
				[/* parameter */ 'scale', [/* parameter description */
					[/* text */ 't', `scale of the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` quotient to be returned.`]
				]],
				[/* parameter */ 'roundingMode', [/* parameter description */
					[/* text */ 't', `rounding mode to apply.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `divisor`],
					[/* text */ 't', ` is zero,
         `],
					[/* inline code block */ 'i', `roundingMode==ROUND_UNNECESSARY`],
					[/* text */ 't', ` and
         the specified scale is insufficient to represent the result
         of the division exactly.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `roundingMode`],
					[/* text */ 't', ` does not
         represent a valid rounding mode.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this / divisor`]
			]
		]],
		[/* method */ 'divide(java.math.BigDecimal,int,java.math.RoundingMode)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(this / divisor)`],
				[/* text */ 't', `, and whose scale is as specified.  If rounding must
 be performed to generate a result with the specified scale, the
 specified rounding mode is applied.`]
			],
			[/* parameters */
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `value by which this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is to be divided.`]
				]],
				[/* parameter */ 'scale', [/* parameter description */
					[/* text */ 't', `scale of the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` quotient to be returned.`]
				]],
				[/* parameter */ 'roundingMode', [/* parameter description */
					[/* text */ 't', `rounding mode to apply.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `divisor`],
					[/* text */ 't', ` is zero,
         `],
					[/* inline code block */ 'i', `roundingMode==RoundingMode.UNNECESSARY`],
					[/* text */ 't', ` and
         the specified scale is insufficient to represent the result
         of the division exactly.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this / divisor`]
			]
		]],
		[/* method */ 'divide(java.math.BigDecimal,java.math.MathContext)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(this / divisor)`],
				[/* text */ 't', `, with rounding according to the context settings.`]
			],
			[/* parameters */
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `value by which this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is to be divided.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result is inexact but the
         rounding mode is `],
					[/* inline code block */ 'i', `UNNECESSARY`],
					[/* text */ 't', ` or
         `],
					[/* inline code block */ 'i', `mc.precision == 0`],
					[/* text */ 't', ` and the quotient has a
         non-terminating decimal expansion,including dividing by zero`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this / divisor`],
				[/* text */ 't', `, rounded as necessary.`]
			]
		]],
		[/* method */ 'divide(java.math.BigDecimal,java.math.RoundingMode)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(this / divisor)`],
				[/* text */ 't', `, and whose scale is `],
				[/* inline code block */ 'i', `this.scale()`],
				[/* text */ 't', `.  If
 rounding must be performed to generate a result with the given
 scale, the specified rounding mode is applied.`]
			],
			[/* parameters */
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `value by which this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is to be divided.`]
				]],
				[/* parameter */ 'roundingMode', [/* parameter description */
					[/* text */ 't', `rounding mode to apply.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `divisor==0`],
					[/* text */ 't', `, or
         `],
					[/* inline code block */ 'i', `roundingMode==RoundingMode.UNNECESSARY`],
					[/* text */ 't', ` and
         `],
					[/* inline code block */ 'i', `this.scale()`],
					[/* text */ 't', ` is insufficient to represent the result
         of the division exactly.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this / divisor`]
			]
		]],
		[/* method */ 'divideToIntegralValue(java.math.BigDecimal)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is the integer part
 of the quotient `],
				[/* inline code block */ 'i', `(this / divisor)`],
				[/* text */ 't', ` rounded down.  The
 preferred scale of the result is `],
				[/* inline code block */ 'i', `(this.scale() - divisor.scale())`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `value by which this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is to be divided.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `divisor==0`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The integer part of `],
				[/* inline code block */ 'i', `this / divisor`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'divideToIntegralValue(java.math.BigDecimal,java.math.MathContext)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is the integer part
 of `],
				[/* inline code block */ 'i', `(this / divisor)`],
				[/* text */ 't', `.  Since the integer part of the
 exact quotient does not depend on the rounding mode, the
 rounding mode does not affect the values returned by this
 method.  The preferred scale of the result is
 `],
				[/* inline code block */ 'i', `(this.scale() - divisor.scale())`],
				[/* text */ 't', `.  An
 `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` is thrown if the integer part of
 the exact quotient needs more than `],
				[/* inline code block */ 'i', `mc.precision`],
				[/* text */ 't', `
 digits.`]
			],
			[/* parameters */
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `value by which this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is to be divided.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `divisor==0`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `mc.precision`],
					[/* text */ 't', ` > 0 and the result
         requires a precision of more than `],
					[/* inline code block */ 'i', `mc.precision`],
					[/* text */ 't', ` digits.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The integer part of `],
				[/* inline code block */ 'i', `this / divisor`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'max(java.math.BigDecimal)', [
			[/* method description */
				[/* text */ 't', `Returns the maximum of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` and `],
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
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is the greater of this
         `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', `.  If they are equal,
         as defined by the `],
				[/* reference */ 'r', `#compareTo(java.math.BigDecimal)`, `compareTo`],
				[/* text */ 't', `
         method, `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` is returned.`]
			]
		]],
		[/* method */ 'min(java.math.BigDecimal)', [
			[/* method description */
				[/* text */ 't', `Returns the minimum of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` and
 `],
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
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is the lesser of this
         `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', `.  If they are equal,
         as defined by the `],
				[/* reference */ 'r', `#compareTo(java.math.BigDecimal)`, `compareTo`],
				[/* text */ 't', `
         method, `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` is returned.`]
			]
		]],
		[/* method */ 'movePointLeft(int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` which is equivalent to this one
 with the decimal point moved `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` places to the left.  If
 `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` is non-negative, the call merely adds `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` to
 the scale.  If `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` is negative, the call is equivalent
 to `],
				[/* inline code block */ 'i', `movePointRight(-n)`],
				[/* text */ 't', `.  The `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `
 returned by this call has value `],
				[/* inline code block */ 'i', `(this × 10-n)`],
				[/* text */ 't', ` and scale `],
				[/* inline code block */ 'i', `max(this.scale()+n, 0)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `number of places to move the decimal point to the left.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if scale overflows.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` which is equivalent to this one with the
         decimal point moved `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` places to the left.`]
			]
		]],
		[/* method */ 'movePointRight(int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` which is equivalent to this one
 with the decimal point moved `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` places to the right.
 If `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` is non-negative, the call merely subtracts
 `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` from the scale.  If `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` is negative, the call
 is equivalent to `],
				[/* inline code block */ 'i', `movePointLeft(-n)`],
				[/* text */ 't', `.  The
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` returned by this call has value `],
				[/* inline code block */ 'i', `(this × 10n)`],
				[/* text */ 't', ` and scale `],
				[/* inline code block */ 'i', `max(this.scale()-n, 0)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `number of places to move the decimal point to the right.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if scale overflows.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` which is equivalent to this one
         with the decimal point moved `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', ` places to the right.`]
			]
		]],
		[/* method */ 'multiply(java.math.BigDecimal)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(this × multiplicand)`],
				[/* text */ 't', `, and whose scale is `],
				[/* inline code block */ 'i', `(this.scale() + multiplicand.scale())`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'multiplicand', [/* parameter description */
					[/* text */ 't', `value to be multiplied by this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this * multiplicand`]
			]
		]],
		[/* method */ 'multiply(java.math.BigDecimal,java.math.MathContext)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(this × multiplicand)`],
				[/* text */ 't', `, with rounding according to the context settings.`]
			],
			[/* parameters */
				[/* parameter */ 'multiplicand', [/* parameter description */
					[/* text */ 't', `value to be multiplied by this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this * multiplicand`],
				[/* text */ 't', `, rounded as necessary.`]
			]
		]],
		[/* method */ 'negate()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(-this)`],
				[/* text */ 't', `,
 and whose scale is `],
				[/* inline code block */ 'i', `this.scale()`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `-this`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'negate(java.math.MathContext)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(-this)`],
				[/* text */ 't', `,
 with rounding according to the context settings.`]
			],
			[/* parameters */
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `-this`],
				[/* text */ 't', `, rounded as necessary.`]
			]
		]],
		[/* method */ 'plus()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(+this)`],
				[/* text */ 't', `, and whose
 scale is `],
				[/* inline code block */ 'i', `this.scale()`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method, which simply returns this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `
 is included for symmetry with the unary minus method `],
					[/* reference */ 'r', `#negate()`, `negate()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'plus(java.math.MathContext)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(+this)`],
				[/* text */ 't', `,
 with rounding according to the context settings.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The effect of this method is identical to that of the `],
					[/* reference */ 'r', `#round(java.math.MathContext)`, `round(MathContext)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', `, rounded as necessary.  A zero result will
         have a scale of 0.`]
			]
		]],
		[/* method */ 'pow(int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is
 `],
				[/* inline code block */ 'i', `(thisn)`],
				[/* text */ 't', `, The power is computed exactly, to
 unlimited precision.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The parameter `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` must be in the range 0 through
 999999999, inclusive.  `],
					[/* inline code block */ 'i', `ZERO.pow(0)`],
					[/* text */ 't', ` returns `],
					[/* text */ 't', `ONE`],
					[/* text */ 't', `.

 Note that future releases may expand the allowable exponent
 range of this method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `power to raise this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` to.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` is out of range.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `thisn`]
			]
		]],
		[/* method */ 'pow(int,java.math.MathContext)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is
 `],
				[/* inline code block */ 'i', `(thisn)`],
				[/* text */ 't', `.  The current implementation uses
 the core algorithm defined in ANSI standard X3.274-1996 with
 rounding according to the context settings.  In general, the
 returned numerical value is within two ulps of the exact
 numerical value for the chosen precision.  Note that future
 releases may use a different algorithm with a decreased
 allowable error bound and increased allowable exponent range.

 `],
				[/* block */ 'b', `The X3.274-1996 algorithm is:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` An `],
						[/* inline code block */ 'i', `ArithmeticException`],
						[/* text */ 't', ` exception is thrown if
  `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* inline code block */ 'i', `abs(n) > 999999999`],
								[/* text */ 't', `
    `]
							]],
							[/* block */ 'b', [
								[/* inline code block */ 'i', `mc.precision == 0`],
								[/* text */ 't', ` and `],
								[/* inline code block */ 'i', `n < 0`],
								[/* text */ 't', `
    `]
							]],
							[/* block */ 'b', [
								[/* inline code block */ 'i', `mc.precision > 0`],
								[/* text */ 't', ` and `],
								[/* inline code block */ 'i', `n`],
								[/* text */ 't', ` has more than
    `],
								[/* inline code block */ 'i', `mc.precision`],
								[/* text */ 't', ` decimal digits
  `]
							]]
						]],
						[/* text */ 't', `

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` if `],
						[/* inline code block */ 'i', `n`],
						[/* text */ 't', ` is zero, `],
						[/* text */ 't', `ONE`],
						[/* text */ 't', ` is returned even if
 `],
						[/* inline code block */ 'i', `this`],
						[/* text */ 't', ` is zero, otherwise
 `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* text */ 't', ` if `],
								[/* inline code block */ 'i', `n`],
								[/* text */ 't', ` is positive, the result is calculated via
   the repeated squaring technique into a single accumulator.
   The individual multiplications with the accumulator use the
   same math context settings as in `],
								[/* inline code block */ 'i', `mc`],
								[/* text */ 't', ` except for a
   precision increased to `],
								[/* inline code block */ 'i', `mc.precision + elength + 1`],
								[/* text */ 't', `
   where `],
								[/* inline code block */ 'i', `elength`],
								[/* text */ 't', ` is the number of decimal digits in
   `],
								[/* inline code block */ 'i', `n`],
								[/* text */ 't', `.

   `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` if `],
								[/* inline code block */ 'i', `n`],
								[/* text */ 't', ` is negative, the result is calculated as if
   `],
								[/* inline code block */ 'i', `n`],
								[/* text */ 't', ` were positive; this value is then divided into one
   using the working precision specified above.

   `]
							]],
							[/* block */ 'b', ` The final value from either the positive or negative case
   is then rounded to the destination precision.
   `]
						]],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `power to raise this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` to.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result is inexact but the
         rounding mode is `],
					[/* inline code block */ 'i', `UNNECESSARY`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` is out
         of range.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `thisn`],
				[/* text */ 't', ` using the ANSI standard X3.274-1996
         algorithm`]
			]
		]],
		[/* method */ 'remainder(java.math.BigDecimal)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(this % divisor)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The remainder is given by
 `],
					[/* inline code block */ 'i', `this.subtract(this.divideToIntegralValue(divisor).multiply(divisor))`],
					[/* text */ 't', `.
 Note that this is `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` the modulo operation (the result can be
 negative).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `value by which this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is to be divided.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `divisor==0`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this % divisor`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'remainder(java.math.BigDecimal,java.math.MathContext)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(this % divisor)`],
				[/* text */ 't', `, with rounding according to the context settings.
 The `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', ` settings affect the implicit divide
 used to compute the remainder.  The remainder computation
 itself is by definition exact.  Therefore, the remainder may
 contain more than `],
				[/* inline code block */ 'i', `mc.getPrecision()`],
				[/* text */ 't', ` digits.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The remainder is given by
 `],
					[/* inline code block */ 'i', `this.subtract(this.divideToIntegralValue(divisor, mc).multiply(divisor))`],
					[/* text */ 't', `.  Note that this is not the modulo
 operation (the result can be negative).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `value by which this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is to be divided.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `divisor==0`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result is inexact but the
         rounding mode is `],
					[/* inline code block */ 'i', `UNNECESSARY`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `mc.precision`],
					[/* text */ 't', `
         > 0 and the result of `],
					[/* inline code block */ 'i', `this.divideToIntegralValue(divisor)`],
					[/* text */ 't', ` would
         require a precision of more than `],
					[/* inline code block */ 'i', `mc.precision`],
					[/* text */ 't', ` digits.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `this % divisor`],
				[/* text */ 't', `, rounded as necessary.`]
			]
		]],
		[/* method */ 'round(java.math.MathContext)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` rounded according to the
 `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', ` settings.  If the precision setting is 0 then
 no rounding takes place.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The effect of this method is identical to that of the
 `],
					[/* reference */ 'r', `#plus(java.math.MathContext)`, `plus(MathContext)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` rounded according to the
         `],
				[/* inline code block */ 'i', `MathContext`],
				[/* text */ 't', ` settings.`]
			]
		]],
		[/* method */ 'scaleByPowerOfTen(int)', [
			[/* method description */
				[/* text */ 't', `Returns a BigDecimal whose numerical value is equal to
 (`],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` * 10`],
				[/* text */ 't', `n`, 'sup'],
				[/* text */ 't', `).  The scale of
 the result is `],
				[/* inline code block */ 'i', `(this.scale() - n)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `the exponent power of ten to scale by`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the scale would be
         outside the range of a 32-bit integer.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a BigDecimal whose numerical value is equal to
 (`],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` * 10`],
				[/* text */ 't', `n`, 'sup'],
				[/* text */ 't', `)`]
			]
		]],
		[/* method */ 'setScale(int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose scale is the specified
 value, and whose value is numerically equal to this
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `'s.  Throws an `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', `
 if this is not possible.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This call is typically used to increase the scale, in which
 case it is guaranteed that there exists a `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `
 of the specified scale and the correct value.  The call can
 also be used to reduce the scale if the caller knows that the
 `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` has sufficiently many zeros at the end of
 its fractional part (i.e., factors of ten in its integer value)
 to allow for the rescaling without changing its value.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This method returns the same result as the two-argument
 versions of `],
					[/* inline code block */ 'i', `setScale`],
					[/* text */ 't', `, but saves the caller the trouble
 of specifying a rounding mode in cases where it is irrelevant.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'newScale', [/* parameter description */
					[/* text */ 't', `scale of the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` value to be returned.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the specified scaling operation would
         require rounding.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose scale is the specified value, and
         whose unscaled value is determined by multiplying or dividing
         this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `'s unscaled value by the appropriate
         power of ten to maintain its overall value.`]
			]
		]],
		[/* method */ 'setScale(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose scale is the specified
 value, and whose unscaled value is determined by multiplying or
 dividing this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `'s unscaled value by the
 appropriate power of ten to maintain its overall value.  If the
 scale is reduced by the operation, the unscaled value must be
 divided (rather than multiplied), and the value may be changed;
 in this case, the specified rounding mode is applied to the
 division.`]
			],
			[/* parameters */
				[/* parameter */ 'newScale', [/* parameter description */
					[/* text */ 't', `scale of the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` value to be returned.`]
				]],
				[/* parameter */ 'roundingMode', [/* parameter description */
					[/* text */ 't', `The rounding mode to apply.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `roundingMode==ROUND_UNNECESSARY`],
					[/* text */ 't', `
         and the specified scaling operation would require
         rounding.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `roundingMode`],
					[/* text */ 't', ` does not
         represent a valid rounding mode.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose scale is the specified value,
         and whose unscaled value is determined by multiplying or
         dividing this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `'s unscaled value by the
         appropriate power of ten to maintain its overall value.`]
			]
		]],
		[/* method */ 'setScale(int,java.math.RoundingMode)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose scale is the specified
 value, and whose unscaled value is determined by multiplying or
 dividing this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `'s unscaled value by the
 appropriate power of ten to maintain its overall value.  If the
 scale is reduced by the operation, the unscaled value must be
 divided (rather than multiplied), and the value may be changed;
 in this case, the specified rounding mode is applied to the
 division.`]
			],
			[/* parameters */
				[/* parameter */ 'newScale', [/* parameter description */
					[/* text */ 't', `scale of the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` value to be returned.`]
				]],
				[/* parameter */ 'roundingMode', [/* parameter description */
					[/* text */ 't', `The rounding mode to apply.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `roundingMode==UNNECESSARY`],
					[/* text */ 't', `
         and the specified scaling operation would require
         rounding.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose scale is the specified value,
         and whose unscaled value is determined by multiplying or
         dividing this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `'s unscaled value by the
         appropriate power of ten to maintain its overall value.`]
			]
		]],
		[/* method */ 'sqrt(java.math.MathContext)', [
			[/* method description */
				[/* text */ 't', `Returns an approximation to the square root of `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', `
 with rounding according to the context settings.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The preferred scale of the returned result is equal to
 `],
					[/* inline code block */ 'i', `this.scale()/2`],
					[/* text */ 't', `. The value of the returned result is
 always within one ulp of the exact decimal value for the
 precision in question.  If the rounding mode is `],
					[/* reference */ 'r', `java.math.RoundingMode#HALF_UP`, `HALF_UP`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.math.RoundingMode#HALF_DOWN`, `HALF_DOWN`],
					[/* text */ 't', `, or `],
					[/* reference */ 'r', `java.math.RoundingMode#HALF_EVEN`, `HALF_EVEN`],
					[/* text */ 't', `, the
 result is within one half an ulp of the exact decimal value.

 `]
				]],
				[/* block */ 'b', `Special case:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` The square root of a number numerically equal to `],
						[/* inline code block */ 'i', `ZERO`],
						[/* text */ 't', ` is numerically equal to `],
						[/* inline code block */ 'i', `ZERO`],
						[/* text */ 't', ` with a preferred
 scale according to the general rule above. In particular, for
 `],
						[/* inline code block */ 'i', `ZERO`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `ZERO.sqrt(mc).equals(ZERO)`],
						[/* text */ 't', ` is true with
 any `],
						[/* inline code block */ 'i', `MathContext`],
						[/* text */ 't', ` as an argument.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` is less than zero.`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if an exact result is requested
 (`],
					[/* inline code block */ 'i', `mc.getPrecision()==0`],
					[/* text */ 't', `) and there is no finite decimal
 expansion of the exact result`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if
 `],
					[/* inline code block */ 'i', `(mc.getRoundingMode()==RoundingMode.UNNECESSARY`],
					[/* text */ 't', `) and
 the exact result cannot fit in `],
					[/* inline code block */ 'i', `mc.getPrecision()`],
					[/* text */ 't', `
 digits.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the square root of `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'stripTrailingZeros()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` which is numerically equal to
 this one but with any trailing zeros removed from the
 representation.  For example, stripping the trailing zeros from
 the `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` value `],
				[/* inline code block */ 'i', `600.0`],
				[/* text */ 't', `, which has
 [`],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `scale`],
				[/* text */ 't', `] components equal to
 [6000, 1], yields `],
				[/* inline code block */ 'i', `6E2`],
				[/* text */ 't', ` with [`],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `scale`],
				[/* text */ 't', `] components equal to [6, -2].  If
 this BigDecimal is numerically equal to zero, then
 `],
				[/* inline code block */ 'i', `BigDecimal.ZERO`],
				[/* text */ 't', ` is returned.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if scale overflows.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a numerically equal `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` with any
 trailing zeros removed.`]
			]
		]],
		[/* method */ 'subtract(java.math.BigDecimal)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(this - subtrahend)`],
				[/* text */ 't', `, and whose scale is `],
				[/* inline code block */ 'i', `max(this.scale(), subtrahend.scale())`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'subtrahend', [/* parameter description */
					[/* text */ 't', `value to be subtracted from this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this - subtrahend`]
			]
		]],
		[/* method */ 'subtract(java.math.BigDecimal,java.math.MathContext)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `(this - subtrahend)`],
				[/* text */ 't', `,
 with rounding according to the context settings.

 If `],
				[/* inline code block */ 'i', `subtrahend`],
				[/* text */ 't', ` is zero then this, rounded if necessary, is used as the
 result.  If this is zero then the result is `],
				[/* inline code block */ 'i', `subtrahend.negate(mc)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'subtrahend', [/* parameter description */
					[/* text */ 't', `value to be subtracted from this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `this - subtrahend`],
				[/* text */ 't', `, rounded as necessary.`]
			]
		]],
		[/* method */ 'ulp()', [
			[/* method description */
				[/* text */ 't', `Returns the size of an ulp, a unit in the last place, of this
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.  An ulp of a nonzero `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `
 value is the positive distance between this value and the
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` value next larger in magnitude with the
 same number of digits.  An ulp of a zero value is numerically
 equal to 1 with the scale of `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', `.  The result is
 stored with the same scale as `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` so the result
 for zero and nonzero values is equal to `],
				[/* inline code block */ 'i', `[1, this.scale()]`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the size of an ulp of `],
				[/* inline code block */ 'i', `this`]
			]
		]],
		[/* method */ 'divideAndRemainder(java.math.BigDecimal)', [
			[/* method description */
				[/* text */ 't', `Returns a two-element `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` array containing the
 result of `],
				[/* inline code block */ 'i', `divideToIntegralValue`],
				[/* text */ 't', ` followed by the result of
 `],
				[/* inline code block */ 'i', `remainder`],
				[/* text */ 't', ` on the two operands.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that if both the integer quotient and remainder are
 needed, this method is faster than using the
 `],
					[/* inline code block */ 'i', `divideToIntegralValue`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `remainder`],
					[/* text */ 't', ` methods
 separately because the division need only be carried out once.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `value by which this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is to be divided,
         and the remainder computed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `divisor==0`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a two element `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` array: the quotient
         (the result of `],
				[/* inline code block */ 'i', `divideToIntegralValue`],
				[/* text */ 't', `) is the initial element
         and the remainder is the final element.`]
			]
		]],
		[/* method */ 'divideAndRemainder(java.math.BigDecimal,java.math.MathContext)', [
			[/* method description */
				[/* text */ 't', `Returns a two-element `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` array containing the
 result of `],
				[/* inline code block */ 'i', `divideToIntegralValue`],
				[/* text */ 't', ` followed by the result of
 `],
				[/* inline code block */ 'i', `remainder`],
				[/* text */ 't', ` on the two operands calculated with rounding
 according to the context settings.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that if both the integer quotient and remainder are
 needed, this method is faster than using the
 `],
					[/* inline code block */ 'i', `divideToIntegralValue`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `remainder`],
					[/* text */ 't', ` methods
 separately because the division need only be carried out once.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'divisor', [/* parameter description */
					[/* text */ 't', `value by which this `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` is to be divided,
         and the remainder computed.`]
				]],
				[/* parameter */ 'mc', [/* parameter description */
					[/* text */ 't', `the context to use.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `divisor==0`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the result is inexact but the
         rounding mode is `],
					[/* inline code block */ 'i', `UNNECESSARY`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `mc.precision`],
					[/* text */ 't', `
         > 0 and the result of `],
					[/* inline code block */ 'i', `this.divideToIntegralValue(divisor)`],
					[/* text */ 't', ` would
         require a precision of more than `],
					[/* inline code block */ 'i', `mc.precision`],
					[/* text */ 't', ` digits.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a two element `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` array: the quotient
         (the result of `],
				[/* inline code block */ 'i', `divideToIntegralValue`],
				[/* text */ 't', `) is the
         initial element and the remainder is the final element.`]
			]
		]],
		[/* method */ 'toBigInteger()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', `.
 This conversion is analogous to the
 `],
				[/* text */ 't', `narrowing primitive conversion`],
				[/* text */ 't', ` from `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` to
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` as defined in
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `:
 any fractional part of this
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` will be discarded.  Note that this
 conversion can lose information about the precision of the
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 To have an exception thrown if the conversion is inexact (in
 other words if a nonzero fractional part is discarded), use the
 `],
					[/* reference */ 'r', `#toBigIntegerExact()`, `toBigIntegerExact()`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` converted to a `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'toBigIntegerExact()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', `,
 checking for lost information.  An exception is thrown if this
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` has a nonzero fractional part.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` has a nonzero
         fractional part.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` converted to a `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'unscaledValue()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` whose value is the `],
				[/* text */ 't', `unscaled
 value`],
				[/* text */ 't', ` of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.  (Computes `],
				[/* inline code block */ 'i', `(this * 10this.scale())`],
				[/* text */ 't', `.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the unscaled value of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'longValue()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 This conversion is analogous to the
 `],
				[/* text */ 't', `narrowing primitive conversion`],
				[/* text */ 't', ` from `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` to
 `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` as defined in
 `],
				[/* text */ 't', `The Java Language Specification`],
				[/* text */ 't', `:
 any fractional part of this
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` will be discarded, and if the resulting
 "`],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', `" is too big to fit in a
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `, only the low-order 64 bits are returned.
 Note that this conversion can lose information about the
 overall magnitude and precision of this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` value as well
 as return a result with the opposite sign.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` converted to a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'longValueExact()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `, checking
 for lost information.  If this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` has a
 nonzero fractional part or is out of the possible range for a
 `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` result then an `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` is
 thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` has a nonzero
         fractional part, or will not fit in a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` converted to a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'shortValueExact()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` to a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `, checking
 for lost information.  If this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` has a
 nonzero fractional part or is out of the possible range for a
 `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` result then an `],
				[/* inline code block */ 'i', `ArithmeticException`],
				[/* text */ 't', ` is
 thrown.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` has a nonzero
         fractional part, or will not fit in a `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` converted to a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'valueOf(double)', [
			[/* method description */
				[/* text */ 't', `Translates a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', ` into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `, using
 the `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `'s canonical string representation provided
 by the `],
				[/* reference */ 'r', `java.lang.Double#toString(double)`, `Double.toString(double)`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', ` to convert to a `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `val`],
					[/* text */ 't', ` is infinite or NaN.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is equal to or approximately
         equal to the value of `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'valueOf(long)', [
			[/* method description */
				[/* text */ 't', `Translates a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `
 with a scale of zero.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `value of the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is `],
				[/* inline code block */ 'i', `val`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'valueOf(long,int)', [
			[/* method description */
				[/* text */ 't', `Translates a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` unscaled value and an
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` scale into a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'unscaledVal', [/* parameter description */
					[/* text */ 't', `unscaled value of the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'scale', [/* parameter description */
					[/* text */ 't', `scale of the `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` whose value is
         `],
				[/* inline code block */ 'i', `(unscaledVal × 10-scale)`],
				[/* text */ 't', `.`]
			]
		]]
	],
]);
