import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.math.RoundingMode', [
	[/* class description */
		[/* text */ 't', `Specifies a `],
		[/* text */ 't', `rounding policy`],
		[/* text */ 't', ` for numerical operations capable
 of discarding precision. Each rounding mode indicates how the least
 significant returned digit of a rounded result is to be calculated.
 If fewer digits are returned than the digits needed to represent
 the exact numerical result, the discarded digits will be referred
 to as the `],
		[/* text */ 't', `discarded fraction`],
		[/* text */ 't', ` regardless the digits'
 contribution to the value of the number.  In other words,
 considered as a numerical value, the discarded fraction could have
 an absolute value greater than one.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Each rounding mode description includes a table listing how
 different two-digit decimal values would round to a one digit
 decimal value under the rounding mode in question.  The result
 column in the tables could be gotten by creating a
 `],
			[/* inline code block */ 'i', `BigDecimal`],
			[/* text */ 't', ` number with the specified value, forming a
 `],
			[/* reference */ 'r', `java.math.MathContext`],
			[/* text */ 't', ` object with the proper settings
 (`],
			[/* inline code block */ 'i', `precision`],
			[/* text */ 't', ` set to `],
			[/* inline code block */ 'i', `1`],
			[/* text */ 't', `, and the
 `],
			[/* inline code block */ 'i', `roundingMode`],
			[/* text */ 't', ` set to the rounding mode in question), and
 calling `],
			[/* external link */ 'a', `BigDecimal.html#round(java.math.MathContext)`, `round`],
			[/* text */ 't', ` on this number with the
 proper `],
			[/* inline code block */ 'i', `MathContext`],
			[/* text */ 't', `.  A summary table showing the results
 of these rounding operations for all rounding modes appears below.

`]
		]],
		[/* table */ 't', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `This `],
			[/* inline code block */ 'i', `enum`],
			[/* text */ 't', ` is intended to replace the integer-based
 enumeration of rounding mode constants in `],
			[/* reference */ 'r', `java.math.BigDecimal`],
			[/* text */ 't', `
 (`],
			[/* external link */ 'a', `BigDecimal.html#ROUND_UP`, `BigDecimal.ROUND_UP`],
			[/* text */ 't', `, `],
			[/* external link */ 'a', `BigDecimal.html#ROUND_DOWN`, `BigDecimal.ROUND_DOWN`],
			[/* text */ 't', `,
 etc. ).`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the constants of this enum class, in
the order they are declared.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]],
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the enum constant of this class with the specified name.
The string must match `],
				[/* text */ 't', `exactly`],
				[/* text */ 't', ` an identifier used to declare an
enum constant in this class.  (Extraneous whitespace characters are 
not permitted.)`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the enum constant to be returned.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this enum class has no constant with the specified name`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the enum constant with the specified name`]
			]
		]],
		[/* method */ 'valueOf(int)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `RoundingMode`],
				[/* text */ 't', ` object corresponding to a
 legacy integer rounding mode constant in `],
				[/* reference */ 'r', `java.math.BigDecimal`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'rm', [/* parameter description */
					[/* text */ 't', `legacy integer rounding mode to convert`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `integer is out of range`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `RoundingMode`],
				[/* text */ 't', ` corresponding to the given integer.`]
			]
		]]
	],
]);
