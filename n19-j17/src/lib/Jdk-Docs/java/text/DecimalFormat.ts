import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.DecimalFormat', [
	[/* class description */
		[/* inline code block */ 'i', `DecimalFormat`],
		[/* text */ 't', ` is a concrete subclass of
 `],
		[/* inline code block */ 'i', `NumberFormat`],
		[/* text */ 't', ` that formats decimal numbers. It has a variety of
 features designed to make it possible to parse and format numbers in any
 locale, including support for Western, Arabic, and Indic digits.  It also
 supports different kinds of numbers, including integers (123), fixed-point
 numbers (123.4), scientific notation (1.23E4), percentages (12%), and
 currency amounts ($123).  All of these can be localized.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `To obtain a `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', ` for a specific locale, including the
 default locale, call one of `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', `'s factory methods, such
 as `],
			[/* inline code block */ 'i', `getInstance()`],
			[/* text */ 't', `.  In general, do not call the
 `],
			[/* inline code block */ 'i', `DecimalFormat`],
			[/* text */ 't', ` constructors directly, since the
 `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', ` factory methods may return subclasses other than
 `],
			[/* inline code block */ 'i', `DecimalFormat`],
			[/* text */ 't', `. If you need to customize the format object, do
 something like this:

 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` NumberFormat f = NumberFormat.getInstance(loc);
 if (f instanceof DecimalFormat) {
     ((DecimalFormat) f).setDecimalSeparatorAlwaysShown(true);
 }
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `DecimalFormat`],
			[/* text */ 't', ` comprises a `],
			[/* text */ 't', `pattern`],
			[/* text */ 't', ` and a set of
 `],
			[/* text */ 't', `symbols`],
			[/* text */ 't', `.  The pattern may be set directly using
 `],
			[/* inline code block */ 'i', `applyPattern()`],
			[/* text */ 't', `, or indirectly using the API methods.  The
 symbols are stored in a `],
			[/* inline code block */ 'i', `DecimalFormatSymbols`],
			[/* text */ 't', ` object.  When using
 the `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', ` factory methods, the pattern and symbols are
 read from localized `],
			[/* inline code block */ 'i', `ResourceBundle`],
			[/* text */ 't', `s.

 `]
		]],
		[/* block */ 'b', `Patterns`],
		[/* text */ 't', `

 `],
		[/* inline code block */ 'i', `DecimalFormat`],
		[/* text */ 't', ` patterns have the following syntax:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* text */ 't', ` `],
				[/* text */ 't', `Pattern:`],
				[/* text */ 't', `
         `],
				[/* text */ 't', `PositivePattern`],
				[/* text */ 't', `
         `],
				[/* text */ 't', `PositivePattern`],
				[/* text */ 't', ` ; `],
				[/* text */ 't', `NegativePattern`],
				[/* text */ 't', `
 `],
				[/* text */ 't', `PositivePattern:`],
				[/* text */ 't', `
         `],
				[/* text */ 't', `opt`, 'sub'],
				[/* text */ 't', ` `],
				[/* text */ 't', `Number`],
				[/* text */ 't', ` `],
				[/* text */ 't', `opt`, 'sub'],
				[/* text */ 't', `
 `],
				[/* text */ 't', `NegativePattern:`],
				[/* text */ 't', `
         `],
				[/* text */ 't', `opt`, 'sub'],
				[/* text */ 't', ` `],
				[/* text */ 't', `Number`],
				[/* text */ 't', ` `],
				[/* text */ 't', `opt`, 'sub'],
				[/* text */ 't', `
 `],
				[/* text */ 't', `Prefix:`],
				[/* text */ 't', `
         any Unicode characters except \\uFFFE, \\uFFFF, and special characters
 `],
				[/* text */ 't', `Suffix:`],
				[/* text */ 't', `
         any Unicode characters except \\uFFFE, \\uFFFF, and special characters
 `],
				[/* text */ 't', `Number:`],
				[/* text */ 't', `
         `],
				[/* text */ 't', `Integer`],
				[/* text */ 't', ` `],
				[/* text */ 't', `opt`, 'sub'],
				[/* text */ 't', `
         `],
				[/* text */ 't', `Integer`],
				[/* text */ 't', ` . `],
				[/* text */ 't', `Fraction`],
				[/* text */ 't', ` `],
				[/* text */ 't', `opt`, 'sub'],
				[/* text */ 't', `
 `],
				[/* text */ 't', `Integer:`],
				[/* text */ 't', `
         `],
				[/* text */ 't', `MinimumInteger`],
				[/* text */ 't', `
         #
         # `],
				[/* text */ 't', `Integer`],
				[/* text */ 't', `
         # , `],
				[/* text */ 't', `Integer`],
				[/* text */ 't', `
 `],
				[/* text */ 't', `MinimumInteger:`],
				[/* text */ 't', `
         0
         0 `],
				[/* text */ 't', `MinimumInteger`],
				[/* text */ 't', `
         0 , `],
				[/* text */ 't', `MinimumInteger`],
				[/* text */ 't', `
 `],
				[/* text */ 't', `Fraction:`],
				[/* text */ 't', `
         `],
				[/* text */ 't', `opt`, 'sub'],
				[/* text */ 't', ` `],
				[/* text */ 't', `opt`, 'sub'],
				[/* text */ 't', `
 `],
				[/* text */ 't', `MinimumFraction:`],
				[/* text */ 't', `
         0 `],
				[/* text */ 't', `opt`, 'sub'],
				[/* text */ 't', `
 `],
				[/* text */ 't', `OptionalFraction:`],
				[/* text */ 't', `
         # `],
				[/* text */ 't', `opt`, 'sub'],
				[/* text */ 't', `
 `],
				[/* text */ 't', `Exponent:`],
				[/* text */ 't', `
         E `],
				[/* text */ 't', `MinimumExponent`],
				[/* text */ 't', `
 `],
				[/* text */ 't', `MinimumExponent:`],
				[/* text */ 't', `
         0 `],
				[/* text */ 't', `opt`, 'sub'],
				[/* text */ 't', `
 `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `DecimalFormat`],
			[/* text */ 't', ` pattern contains a positive and negative
 subpattern, for example, `],
			[/* inline code block */ 'i', `"#,##0.00;(#,##0.00)"`],
			[/* text */ 't', `.  Each
 subpattern has a prefix, numeric part, and suffix. The negative subpattern
 is optional; if absent, then the positive subpattern prefixed with the
 minus sign (`],
			[/* inline code block */ 'i', `'-' U+002D HYPHEN-MINUS`],
			[/* text */ 't', `) is used as the
 negative subpattern. That is, `],
			[/* inline code block */ 'i', `"0.00"`],
			[/* text */ 't', ` alone is equivalent to
 `],
			[/* inline code block */ 'i', `"0.00;-0.00"`],
			[/* text */ 't', `.  If there is an explicit negative subpattern, it
 serves only to specify the negative prefix and suffix; the number of digits,
 minimal digits, and other characteristics are all the same as the positive
 pattern. That means that `],
			[/* inline code block */ 'i', `"#,##0.0#;(#)"`],
			[/* text */ 't', ` produces precisely
 the same behavior as `],
			[/* inline code block */ 'i', `"#,##0.0#;(#,##0.0#)"`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The prefixes, suffixes, and various symbols used for infinity, digits,
 grouping separators, decimal separators, etc. may be set to arbitrary
 values, and they will appear properly during formatting.  However, care must
 be taken that the symbols and strings do not conflict, or parsing will be
 unreliable.  For example, either the positive and negative prefixes or the
 suffixes must be distinct for `],
			[/* inline code block */ 'i', `DecimalFormat.parse()`],
			[/* text */ 't', ` to be able
 to distinguish positive from negative values.  (If they are identical, then
 `],
			[/* inline code block */ 'i', `DecimalFormat`],
			[/* text */ 't', ` will behave as if no negative subpattern was
 specified.)  Another example is that the decimal separator and grouping
 separator should be distinct characters, or parsing will be impossible.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The grouping separator is commonly used for thousands, but in some
 countries it separates ten-thousands. The grouping size is a constant number
 of digits between the grouping characters, such as 3 for 100,000,000 or 4 for
 1,0000,0000.  If you supply a pattern with multiple grouping characters, the
 interval between the last one and the end of the integer is the one that is
 used. So `],
			[/* inline code block */ 'i', `"#,##,###,####"`],
			[/* text */ 't', ` == `],
			[/* inline code block */ 'i', `"######,####"`],
			[/* text */ 't', ` ==
 `],
			[/* inline code block */ 'i', `"##,####,####"`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `special_pattern_character`, `Special Pattern Characters`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `Many characters in a pattern are taken literally; they are matched during
 parsing and output unchanged during formatting.  Special characters, on the
 other hand, stand for other characters, strings, or classes of characters.
 They must be quoted, unless noted otherwise, if they are to appear in the
 prefix or suffix as literals.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The characters listed here are used in non-localized patterns.  Localized
 patterns use the corresponding characters taken from this formatter's
 `],
			[/* inline code block */ 'i', `DecimalFormatSymbols`],
			[/* text */ 't', ` object instead, and these characters lose
 their special status.  Two exceptions are the currency sign and quote, which
 are not localized.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* table */ 'tbl',
				[/* caption */ 'tc'],
				[/* table header */ 'th', [
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* text */ 't', `Symbol
          `]
						]],
						[/* table header cell */ 'thc', [
							[/* text */ 't', `Location
          `]
						]],
						[/* table header cell */ 'thc', [
							[/* text */ 't', `Localized?
          `]
						]],
						[/* table header cell */ 'thc', [
							[/* text */ 't', `Meaning
 `]
						]]
					]]
				]],
				[/* table body */ 'tb', [
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `0`],
							[/* text */ 't', `
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Number
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Yes
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Digit
     `]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `#`],
							[/* text */ 't', `
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Number
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Yes
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Digit, zero shows as absent
     `]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `.`],
							[/* text */ 't', `
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Number
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Yes
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Decimal separator or monetary decimal separator
     `]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `-`],
							[/* text */ 't', `
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Number
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Yes
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Minus sign
     `]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `,`],
							[/* text */ 't', `
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Number
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Yes
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Grouping separator or monetary grouping separator
     `]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `E`],
							[/* text */ 't', `
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Number
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Yes
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Separates mantissa and exponent in scientific notation.
              `],
							[/* text */ 't', `Need not be quoted in prefix or suffix.`],
							[/* text */ 't', `
     `]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `;`],
							[/* text */ 't', `
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Subpattern boundary
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Yes
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Separates positive and negative subpatterns
     `]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `%`],
							[/* text */ 't', `
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Prefix or suffix
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Yes
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Multiply by 100 and show as percentage
     `]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `&#92;u2030`],
							[/* text */ 't', `
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Prefix or suffix
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Yes
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Multiply by 1000 and show as per mille value
     `]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `&#164;`],
							[/* text */ 't', ` (`],
							[/* inline code block */ 'i', `&#92;u00A4`],
							[/* text */ 't', `)
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Prefix or suffix
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `No
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Currency sign, replaced by currency symbol.  If
              doubled, replaced by international currency symbol.
              If present in a pattern, the monetary decimal/grouping separators
              are used instead of the decimal/grouping separators.
     `]
						]]
					]],
					[/* table row */ 'tr', [
						[/* table header cell */ 'thc', [
							[/* inline code block */ 'i', `'`],
							[/* text */ 't', `
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Prefix or suffix
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `No
          `]
						]],
						[/* table cell */ 'tbc', [
							[/* text */ 't', `Used to quote special characters in a prefix or suffix,
              for example, `],
							[/* inline code block */ 'i', `"'#'#"`],
							[/* text */ 't', ` formats 123 to
              `],
							[/* inline code block */ 'i', `"#123"`],
							[/* text */ 't', `.  To create a single quote
              itself, use two in a row: `],
							[/* inline code block */ 'i', `"# o''clock"`],
							[/* text */ 't', `.
 `]
						]]
					]]
				]],
			],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Scientific Notation`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Numbers in scientific notation are expressed as the product of a mantissa
 and a power of ten, for example, 1234 can be expressed as 1.234 x 10^3.  The
 mantissa is often in the range 1.0 ≤ x < 10.0, but it need not
 be.
 `],
			[/* inline code block */ 'i', `DecimalFormat`],
			[/* text */ 't', ` can be instructed to format and parse scientific
 notation `],
			[/* text */ 't', `only via a pattern`],
			[/* text */ 't', `; there is currently no factory method
 that creates a scientific notation format.  In a pattern, the exponent
 character immediately followed by one or more digit characters indicates
 scientific notation.  Example: `],
			[/* inline code block */ 'i', `"0.###E0"`],
			[/* text */ 't', ` formats the number
 1234 as `],
			[/* inline code block */ 'i', `"1.234E3"`],
			[/* text */ 't', `.

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `The number of digit characters after the exponent character gives the
 minimum exponent digit count.  There is no maximum.  Negative exponents are
 formatted using the localized minus sign, `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` the prefix and suffix
 from the pattern.  This allows patterns such as `],
				[/* inline code block */ 'i', `"0.###E0 m/s"`],
				[/* text */ 't', `.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The minimum and maximum number of integer digits are interpreted
 together:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the maximum number of integer digits is greater than their minimum number
 and greater than 1, it forces the exponent to be a multiple of the maximum
 number of integer digits, and the minimum number of integer digits to be
 interpreted as 1.  The most common use of this is to generate
 `],
						[/* text */ 't', `engineering notation`],
						[/* text */ 't', `, in which the exponent is a multiple of three,
 e.g., `],
						[/* inline code block */ 'i', `"##0.#####E0"`],
						[/* text */ 't', `. Using this pattern, the number 12345
 formats to `],
						[/* inline code block */ 'i', `"12.345E3"`],
						[/* text */ 't', `, and 123456 formats to
 `],
						[/* inline code block */ 'i', `"123.456E3"`],
						[/* text */ 't', `.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Otherwise, the minimum number of integer digits is achieved by adjusting the
 exponent.  Example: 0.00123 formatted with `],
						[/* inline code block */ 'i', `"00.###E0"`],
						[/* text */ 't', ` yields
 `],
						[/* inline code block */ 'i', `"12.3E-4"`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* text */ 't', `

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The number of significant digits in the mantissa is the sum of the
 `],
				[/* text */ 't', `minimum integer`],
				[/* text */ 't', ` and `],
				[/* text */ 't', `maximum fraction`],
				[/* text */ 't', ` digits, and is
 unaffected by the maximum integer digits.  For example, 12345 formatted with
 `],
				[/* inline code block */ 'i', `"##0.##E0"`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `"12.3E3"`],
				[/* text */ 't', `. To show all digits, set
 the significant digits count to zero.  The number of significant digits
 does not affect parsing.

 `]
			]],
			[/* block */ 'b', `Exponential patterns may not contain grouping separators.
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Rounding`],
		[/* text */ 't', `

 `],
		[/* inline code block */ 'i', `DecimalFormat`],
		[/* text */ 't', ` provides rounding modes defined in
 `],
		[/* reference */ 'r', `enum class in java.math.RoundingMode`, `RoundingMode`],
		[/* text */ 't', ` for formatting.  By default, it uses
 `],
		[/* reference */ 'r', `java.math.RoundingMode#HALF_EVEN`, `RoundingMode.HALF_EVEN`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', `Digits`],
		[/* text */ 't', `

 For formatting, `],
		[/* inline code block */ 'i', `DecimalFormat`],
		[/* text */ 't', ` uses the ten consecutive
 characters starting with the localized zero digit defined in the
 `],
		[/* inline code block */ 'i', `DecimalFormatSymbols`],
		[/* text */ 't', ` object as digits. For parsing, these
 digits as well as all Unicode decimal digits, as defined by
 `],
		[/* reference */ 'r', `java.lang.Character#digit(char,int)`, `Character.digit`],
		[/* text */ 't', `, are recognized.

 `],
		[/* block */ 'b', `Special Values`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `NaN`],
			[/* text */ 't', ` is formatted as a string, which typically has a single character
 `],
			[/* inline code block */ 'i', `&#92;uFFFD`],
			[/* text */ 't', `.  This string is determined by the
 `],
			[/* inline code block */ 'i', `DecimalFormatSymbols`],
			[/* text */ 't', ` object.  This is the only value for which
 the prefixes and suffixes are not used.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Infinity is formatted as a string, which typically has a single character
 `],
			[/* inline code block */ 'i', `&#92;u221E`],
			[/* text */ 't', `, with the positive or negative prefixes and suffixes
 applied.  The infinity string is determined by the
 `],
			[/* inline code block */ 'i', `DecimalFormatSymbols`],
			[/* text */ 't', ` object.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Negative zero (`],
			[/* inline code block */ 'i', `"-0"`],
			[/* text */ 't', `) parses to
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `BigDecimal(0)`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `isParseBigDecimal()`],
				[/* text */ 't', ` is
 true,
 `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `Long(0)`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `isParseBigDecimal()`],
				[/* text */ 't', ` is false
     and `],
				[/* inline code block */ 'i', `isParseIntegerOnly()`],
				[/* text */ 't', ` is true,
 `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `Double(-0.0)`],
				[/* text */ 't', ` if both `],
				[/* inline code block */ 'i', `isParseBigDecimal()`],
				[/* text */ 't', `
 and `],
				[/* inline code block */ 'i', `isParseIntegerOnly()`],
				[/* text */ 't', ` are false.
 `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `synchronization`, `Synchronization`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `
 Decimal formats are generally not synchronized.
 It is recommended to create separate format instances for each thread.
 If multiple threads access a format concurrently, it must be synchronized
 externally.

 `],
		[/* block */ 'b', `Example`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `// Print out a number using the localized number, integer, currency,
 // and percent format for each locale`],
				[/* inline code block */ 'i', `Locale[] locales = NumberFormat.getAvailableLocales();
 double myNumber = -1234.56;
 NumberFormat form;
 for (int j = 0; j < 4; ++j) {
     System.out.println("FORMAT");
     for (int i = 0; i < locales.length; ++i) {
         if (locales[i].getCountry().length() == 0) {
            continue; // Skip language-only locales
         }
         System.out.print(locales[i].getDisplayName());
         switch (j) {
         case 0:
             form = NumberFormat.getInstance(locales[i]); break;
         case 1:
             form = NumberFormat.getIntegerInstance(locales[i]); break;
         case 2:
             form = NumberFormat.getCurrencyInstance(locales[i]); break;
         default:
             form = NumberFormat.getPercentInstance(locales[i]); break;
         }
         if (form instanceof DecimalFormat) {
             System.out.print(": " + ((DecimalFormat) form).toPattern());
         }
         System.out.print(" -> " + form.format(myNumber));
         try {
             System.out.println(" -> " + form.parse(form.format(myNumber)));
         } catch (ParseException e) {}
     }
 }`]
			]]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Creates a DecimalFormat using the default pattern and symbols
 for the default `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 This is a convenient way to obtain a
 DecimalFormat when internationalization is not the main concern.
 `],
				[/* block */ 'b', `
 To obtain standard formats for a given locale, use the factory methods
 on NumberFormat such as getNumberInstance. These factories will
 return the most appropriate sub-class of NumberFormat for a given
 locale.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a DecimalFormat using the given pattern and the symbols
 for the default `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 This is a convenient way to obtain a
 DecimalFormat when internationalization is not the main concern.
 `],
				[/* block */ 'b', `
 To obtain standard formats for a given locale, use the factory methods
 on NumberFormat such as getNumberInstance. These factories will
 return the most appropriate sub-class of NumberFormat for a given
 locale.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `a non-localized pattern string.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pattern`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given pattern is invalid.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.text.DecimalFormatSymbols)', [
			[/* constructor description */
				[/* text */ 't', `Creates a DecimalFormat using the given pattern and symbols.
 Use this constructor when you need to completely customize the
 behavior of the format.
 `],
				[/* block */ 'b', `
 To obtain standard formats for a given
 locale, use the factory methods on NumberFormat such as
 getInstance or getCurrencyInstance. If you need only minor adjustments
 to a standard format, you can modify the format returned by
 a NumberFormat factory method.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `a non-localized pattern string`]
				]],
				[/* parameter */ 'symbols', [/* parameter description */
					[/* text */ 't', `the set of symbols to be used`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any of the given arguments is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given pattern is invalid`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Overrides equals`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this object is the same as the obj
          argument; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isDecimalSeparatorAlwaysShown()', [
			[/* method description */
				[/* text */ 't', `Allows you to get the behavior of the decimal separator with integers.
 (The decimal separator will always appear with decimals.)
 `],
				[/* block */ 'b', `Example: Decimal ON: 12345 → 12345.; OFF: 12345 → 12345`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the decimal separator is always shown;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'isParseBigDecimal()', [
			[/* method description */
				[/* text */ 't', `Returns whether the `],
				[/* reference */ 'r', `#parse(java.lang.String,java.text.ParsePosition)`, `parse(java.lang.String, java.text.ParsePosition)`],
				[/* text */ 't', `
 method returns `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `. The default value is false.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the parse method returns BigDecimal;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'format(java.lang.Object,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Formats a number and appends the resulting text to the given string
 buffer.
 The number can be of any subclass of `],
				[/* reference */ 'r', `java.lang.Number`, `Number`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This implementation uses the maximum precision permitted.`]
			],
			[/* parameters */
				[/* parameter */ 'number', [/* parameter description */
					[/* text */ 't', `the number to format`]
				]],
				[/* parameter */ 'toAppendTo', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `StringBuffer`],
					[/* text */ 't', ` to which the formatted
                   text is to be appended`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `keeps track on the position of the field within the
                   returned string. For example, for formatting a number
                   `],
					[/* inline code block */ 'i', `1234567.89`],
					[/* text */ 't', ` in `],
					[/* inline code block */ 'i', `Locale.US`],
					[/* text */ 't', ` locale,
                   if the given `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` is
                   `],
					[/* reference */ 'r', `java.text.NumberFormat#INTEGER_FIELD`, `NumberFormat.INTEGER_FIELD`],
					[/* text */ 't', `, the begin index
                   and end index of `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` will be set
                   to 0 and 9, respectively for the output string
                   `],
					[/* inline code block */ 'i', `1,234,567.89`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `number`],
					[/* text */ 't', ` is
                   null or not an instance of `],
					[/* inline code block */ 'i', `Number`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `toAppendTo`],
					[/* text */ 't', ` or
                   `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if rounding is needed with rounding
                   mode being set to RoundingMode.UNNECESSARY`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value passed in as `],
				[/* inline code block */ 'i', `toAppendTo`]
			]
		]],
		[/* method */ 'getGroupingSize()', [
			[/* method description */
				[/* text */ 't', `Return the grouping size. Grouping size is the number of digits between
 grouping separators in the integer portion of a number.  For example,
 in the number "123,456.78", the grouping size is 3. Grouping size of
 zero designates that grouping is not used, which provides the same
 formatting as if calling `],
				[/* reference */ 'r', `java.text.NumberFormat#setGroupingUsed(boolean)`, `setGroupingUsed(false)`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the grouping size`]
			]
		]],
		[/* method */ 'getMaximumFractionDigits()', [
			[/* method description */
				[/* text */ 't', `Gets the maximum number of digits allowed in the fraction portion of a
 number.
 For formatting numbers other than `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` objects, the lower of the return value and
 340 is used.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum number of digits.`]
			]
		]],
		[/* method */ 'getMaximumIntegerDigits()', [
			[/* method description */
				[/* text */ 't', `Gets the maximum number of digits allowed in the integer portion of a
 number.
 For formatting numbers other than `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` objects, the lower of the return value and
 309 is used.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum number of digits`]
			]
		]],
		[/* method */ 'getMinimumFractionDigits()', [
			[/* method description */
				[/* text */ 't', `Gets the minimum number of digits allowed in the fraction portion of a
 number.
 For formatting numbers other than `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` objects, the lower of the return value and
 340 is used.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minimum number of digits`]
			]
		]],
		[/* method */ 'getMinimumIntegerDigits()', [
			[/* method description */
				[/* text */ 't', `Gets the minimum number of digits allowed in the integer portion of a
 number.
 For formatting numbers other than `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` objects, the lower of the return value and
 309 is used.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minimum number of digits`]
			]
		]],
		[/* method */ 'getMultiplier()', [
			[/* method description */
				[/* text */ 't', `Gets the multiplier for use in percent, per mille, and similar
 formats.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the multiplier`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Overrides hashCode`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'parse(java.lang.String,java.text.ParsePosition)', [
			[/* method description */
				[/* text */ 't', `Parses text from a string to produce a `],
				[/* inline code block */ 'i', `Number`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The method attempts to parse text starting at the index given by
 `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', `.
 If parsing succeeds, then the index of `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is updated
 to the index after the last character used (parsing does not necessarily
 use all characters up to the end of the string), and the parsed
 number is returned. The updated `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` can be used to
 indicate the starting point for the next call to this method.
 If an error occurs, then the index of `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is not
 changed, the error index of `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is set to the index of
 the character where the error occurred, and null is returned.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The subclass returned depends on the value of `],
					[/* reference */ 'r', `#isParseBigDecimal()`, `isParseBigDecimal()`],
					[/* text */ 't', `
 as well as on the string being parsed.
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `isParseBigDecimal()`],
						[/* text */ 't', ` is false (the default),
       most integer values are returned as `],
						[/* inline code block */ 'i', `Long`],
						[/* text */ 't', `
       objects, no matter how they are written: `],
						[/* inline code block */ 'i', `"17"`],
						[/* text */ 't', ` and
       `],
						[/* inline code block */ 'i', `"17.000"`],
						[/* text */ 't', ` both parse to `],
						[/* inline code block */ 'i', `Long(17)`],
						[/* text */ 't', `.
       Values that cannot fit into a `],
						[/* inline code block */ 'i', `Long`],
						[/* text */ 't', ` are returned as
       `],
						[/* inline code block */ 'i', `Double`],
						[/* text */ 't', `s. This includes values with a fractional part,
       infinite values, `],
						[/* inline code block */ 'i', `NaN`],
						[/* text */ 't', `, and the value -0.0.
       `],
						[/* inline code block */ 'i', `DecimalFormat`],
						[/* text */ 't', ` does `],
						[/* text */ 't', `not`],
						[/* text */ 't', ` decide whether to
       return a `],
						[/* inline code block */ 'i', `Double`],
						[/* text */ 't', ` or a `],
						[/* inline code block */ 'i', `Long`],
						[/* text */ 't', ` based on the
       presence of a decimal separator in the source string. Doing so
       would prevent integers that overflow the mantissa of a double,
       such as `],
						[/* inline code block */ 'i', `"-9,223,372,036,854,775,808.00"`],
						[/* text */ 't', `, from being
       parsed accurately.
       `],
						[/* block */ 'b', [
							[/* text */ 't', `
       Callers may use the `],
							[/* inline code block */ 'i', `Number`],
							[/* text */ 't', ` methods
       `],
							[/* inline code block */ 'i', `doubleValue`],
							[/* text */ 't', `, `],
							[/* inline code block */ 'i', `longValue`],
							[/* text */ 't', `, etc., to obtain
       the type they want.
   `]
						]]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* inline code block */ 'i', `isParseBigDecimal()`],
						[/* text */ 't', ` is true, values are returned
       as `],
						[/* inline code block */ 'i', `BigDecimal`],
						[/* text */ 't', ` objects. The values are the ones
       constructed by `],
						[/* reference */ 'r', `java.math.BigDecimal#<init>(java.lang.String)`, `BigDecimal(String)`],
						[/* text */ 't', `
       for corresponding strings in locale-independent format. The
       special cases negative and positive infinity and NaN are returned
       as `],
						[/* inline code block */ 'i', `Double`],
						[/* text */ 't', ` instances holding the values of the
       corresponding `],
						[/* inline code block */ 'i', `Double`],
						[/* text */ 't', ` constants.
 `]
					]],
					[/* block */ 'b', '']
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* inline code block */ 'i', `DecimalFormat`],
					[/* text */ 't', ` parses all Unicode characters that represent
 decimal digits, as defined by `],
					[/* inline code block */ 'i', `Character.digit()`],
					[/* text */ 't', `. In
 addition, `],
					[/* inline code block */ 'i', `DecimalFormat`],
					[/* text */ 't', ` also recognizes as digits the ten
 consecutive characters starting with the localized zero digit defined in
 the `],
					[/* inline code block */ 'i', `DecimalFormatSymbols`],
					[/* text */ 't', ` object.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the string to be parsed`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `ParsePosition`],
					[/* text */ 't', ` object with index and error
             index information as described above.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `text`],
					[/* text */ 't', ` or
             `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed value, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the parse fails`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Standard override; no change in semantics.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
			]
		]],
		[/* method */ 'getNegativePrefix()', [
			[/* method description */
				[/* text */ 't', `Get the negative prefix.
 `],
				[/* block */ 'b', `Examples: -123, ($123) (with negative suffix), sFr-123`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the negative prefix`]
			]
		]],
		[/* method */ 'getNegativeSuffix()', [
			[/* method description */
				[/* text */ 't', `Get the negative suffix.
 `],
				[/* block */ 'b', `Examples: -123%, ($123) (with positive suffixes)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the negative suffix`]
			]
		]],
		[/* method */ 'getPositivePrefix()', [
			[/* method description */
				[/* text */ 't', `Get the positive prefix.
 `],
				[/* block */ 'b', `Examples: +123, $123, sFr123`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the positive prefix`]
			]
		]],
		[/* method */ 'getPositiveSuffix()', [
			[/* method description */
				[/* text */ 't', `Get the positive suffix.
 `],
				[/* block */ 'b', `Example: 123%`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the positive suffix`]
			]
		]],
		[/* method */ 'toLocalizedPattern()', [
			[/* method description */
				[/* text */ 't', `Synthesizes a localized pattern string that represents the current
 state of this Format object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a localized pattern string`]
			]
		]],
		[/* method */ 'toPattern()', [
			[/* method description */
				[/* text */ 't', `Synthesizes a pattern string that represents the current state
 of this Format object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a pattern string`]
			]
		]],
		[/* method */ 'format(double,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Formats a double to produce a string.`]
			],
			[/* parameters */
				[/* parameter */ 'number', [/* parameter description */
					[/* text */ 't', `The double to format`]
				]],
				[/* parameter */ 'result', [/* parameter description */
					[/* text */ 't', `where the text is to be appended`]
				]],
				[/* parameter */ 'fieldPosition', [/* parameter description */
					[/* text */ 't', `keeps track on the position of the field within
                         the returned string. For example, for formatting
                         a number `],
					[/* inline code block */ 'i', `1234567.89`],
					[/* text */ 't', ` in `],
					[/* inline code block */ 'i', `Locale.US`],
					[/* text */ 't', `
                         locale, if the given `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` is
                         `],
					[/* reference */ 'r', `java.text.NumberFormat#INTEGER_FIELD`, `NumberFormat.INTEGER_FIELD`],
					[/* text */ 't', `, the begin index
                         and end index of `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` will be set
                         to 0 and 9, respectively for the output string
                         `],
					[/* inline code block */ 'i', `1,234,567.89`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `result`],
					[/* text */ 't', ` or
            `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if rounding is needed with rounding
            mode being set to RoundingMode.UNNECESSARY`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The formatted number string`]
			]
		]],
		[/* method */ 'format(long,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Format a long to produce a string.`]
			],
			[/* parameters */
				[/* parameter */ 'number', [/* parameter description */
					[/* text */ 't', `The long to format`]
				]],
				[/* parameter */ 'result', [/* parameter description */
					[/* text */ 't', `where the text is to be appended`]
				]],
				[/* parameter */ 'fieldPosition', [/* parameter description */
					[/* text */ 't', `keeps track on the position of the field within
                         the returned string. For example, for formatting
                         a number `],
					[/* inline code block */ 'i', `123456789`],
					[/* text */ 't', ` in `],
					[/* inline code block */ 'i', `Locale.US`],
					[/* text */ 't', `
                         locale, if the given `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` is
                         `],
					[/* reference */ 'r', `java.text.NumberFormat#INTEGER_FIELD`, `NumberFormat.INTEGER_FIELD`],
					[/* text */ 't', `, the begin index
                         and end index of `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` will be set
                         to 0 and 11, respectively for the output string
                         `],
					[/* inline code block */ 'i', `123,456,789`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `result`],
					[/* text */ 't', ` or
                  `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if rounding is needed with rounding
                  mode being set to RoundingMode.UNNECESSARY`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The formatted number string`]
			]
		]],
		[/* method */ 'getRoundingMode()', [
			[/* method description */
				[/* text */ 't', `Gets the `],
				[/* reference */ 'r', `enum class in java.math.RoundingMode`, `RoundingMode`],
				[/* text */ 't', ` used in this DecimalFormat.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `RoundingMode`],
				[/* text */ 't', ` used for this DecimalFormat.`]
			]
		]],
		[/* method */ 'formatToCharacterIterator(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Formats an Object producing an `],
				[/* inline code block */ 'i', `AttributedCharacterIterator`],
				[/* text */ 't', `.
 You can use the returned `],
				[/* inline code block */ 'i', `AttributedCharacterIterator`],
				[/* text */ 't', `
 to build the resulting String, as well as to determine information
 about the resulting String.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Each attribute key of the AttributedCharacterIterator will be of type
 `],
					[/* inline code block */ 'i', `NumberFormat.Field`],
					[/* text */ 't', `, with the attribute value being the
 same as the attribute key.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The object to format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if obj is null.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `when the Format cannot format the
            given object.`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if rounding is needed with rounding
                   mode being set to RoundingMode.UNNECESSARY`]
				]]
			],
			[/* return description */
				[/* text */ 't', `AttributedCharacterIterator describing the formatted value.`]
			]
		]],
		[/* method */ 'getDecimalFormatSymbols()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of the decimal format symbols, which is generally not
 changed by the programmer or user.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a copy of the desired DecimalFormatSymbols`]
			]
		]],
		[/* method */ 'getCurrency()', [
			[/* method description */
				[/* text */ 't', `Gets the currency used by this decimal format when formatting
 currency values.
 The currency is obtained by calling
 `],
				[/* reference */ 'r', `java.text.DecimalFormatSymbols#getCurrency()`, `DecimalFormatSymbols.getCurrency`],
				[/* text */ 't', `
 on this number format's symbols.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the currency used by this decimal format, or `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'applyLocalizedPattern(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Apply the given pattern to this Format object.  The pattern
 is assumed to be in a localized notation. A pattern is a
 short-hand specification for the various formatting properties.
 These properties can also be changed individually through the
 various setter methods.
 `],
				[/* block */ 'b', `
 There is no limit to integer digits set
 by this routine, since that is the typical end-user desire;
 use setMaximumInteger if you want to set a real value.
 For negative numbers, use a second pattern, separated by a semicolon
 `],
				[/* block */ 'b', [
					[/* text */ 't', `Example `],
					[/* inline code block */ 'i', `"#,#00.0#"`],
					[/* text */ 't', ` → 1,234.56
 `]
				]],
				[/* block */ 'b', `This means a minimum of 2 integer digits, 1 fraction digit, and
 a maximum of 2 fraction digits.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `Example: `],
					[/* inline code block */ 'i', `"#,#00.0#;(#,#00.0#)"`],
					[/* text */ 't', ` for negatives in
 parentheses.
 `]
				]],
				[/* block */ 'b', `In negative patterns, the minimum and maximum counts are ignored;
 these are presumed to be set in the positive pattern.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `a new pattern`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pattern`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given pattern is invalid.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'applyPattern(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Apply the given pattern to this Format object.  A pattern is a
 short-hand specification for the various formatting properties.
 These properties can also be changed individually through the
 various setter methods.
 `],
				[/* block */ 'b', `
 There is no limit to integer digits set
 by this routine, since that is the typical end-user desire;
 use setMaximumInteger if you want to set a real value.
 For negative numbers, use a second pattern, separated by a semicolon
 `],
				[/* block */ 'b', [
					[/* text */ 't', `Example `],
					[/* inline code block */ 'i', `"#,#00.0#"`],
					[/* text */ 't', ` → 1,234.56
 `]
				]],
				[/* block */ 'b', `This means a minimum of 2 integer digits, 1 fraction digit, and
 a maximum of 2 fraction digits.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `Example: `],
					[/* inline code block */ 'i', `"#,#00.0#;(#,#00.0#)"`],
					[/* text */ 't', ` for negatives in
 parentheses.
 `]
				]],
				[/* block */ 'b', `In negative patterns, the minimum and maximum counts are ignored;
 these are presumed to be set in the positive pattern.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `a new pattern`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pattern`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given pattern is invalid.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setCurrency(java.util.Currency)', [
			[/* method description */
				[/* text */ 't', `Sets the currency used by this number format when formatting
 currency values. This does not update the minimum or maximum
 number of fraction digits used by the number format.
 The currency is set by calling
 `],
				[/* reference */ 'r', `java.text.DecimalFormatSymbols#setCurrency(java.util.Currency)`, `DecimalFormatSymbols.setCurrency`],
				[/* text */ 't', `
 on this number format's symbols.`]
			],
			[/* parameters */
				[/* parameter */ 'currency', [/* parameter description */
					[/* text */ 't', `the new currency to be used by this decimal format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `currency`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setDecimalFormatSymbols(java.text.DecimalFormatSymbols)', [
			[/* method description */
				[/* text */ 't', `Sets the decimal format symbols, which is generally not changed
 by the programmer or user.`]
			],
			[/* parameters */
				[/* parameter */ 'newSymbols', [/* parameter description */
					[/* text */ 't', `desired DecimalFormatSymbols`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setDecimalSeparatorAlwaysShown(boolean)', [
			[/* method description */
				[/* text */ 't', `Allows you to set the behavior of the decimal separator with integers.
 (The decimal separator will always appear with decimals.)
 `],
				[/* block */ 'b', `Example: Decimal ON: 12345 → 12345.; OFF: 12345 → 12345`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the decimal separator is always shown;
                 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` otherwise`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setGroupingSize(int)', [
			[/* method description */
				[/* text */ 't', `Set the grouping size. Grouping size is the number of digits between
 grouping separators in the integer portion of a number.  For example,
 in the number "123,456.78", the grouping size is 3. Grouping size of
 zero designates that grouping is not used, which provides the same
 formatting as if calling `],
				[/* reference */ 'r', `java.text.NumberFormat#setGroupingUsed(boolean)`, `setGroupingUsed(false)`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The value passed in is converted to a byte, which may lose information.
 Values that are negative or greater than
 `],
					[/* reference */ 'r', `java.lang.Byte#MAX_VALUE`, `Byte.MAX_VALUE`],
					[/* text */ 't', `, will throw an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the new grouping size`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newValue`],
					[/* text */ 't', ` is negative or
          greater than `],
					[/* reference */ 'r', `java.lang.Byte#MAX_VALUE`, `Byte.MAX_VALUE`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setGroupingUsed(boolean)', UDF],
		[/* method */ 'setMaximumFractionDigits(int)', [
			[/* method description */
				[/* text */ 't', `Sets the maximum number of digits allowed in the fraction portion of a
 number.
 For formatting numbers other than `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` objects, the lower of `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` and
 340 is used. Negative input values are replaced with 0.`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the maximum number of fraction digits to be shown; if
 less than zero, then zero is used. The concrete subclass may enforce an
 upper limit to this value appropriate to the numeric type being formatted.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setMaximumIntegerDigits(int)', [
			[/* method description */
				[/* text */ 't', `Sets the maximum number of digits allowed in the integer portion of a
 number.
 For formatting numbers other than `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` objects, the lower of `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` and
 309 is used. Negative input values are replaced with 0.`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the maximum number of integer digits to be shown; if
 less than zero, then zero is used. The concrete subclass may enforce an
 upper limit to this value appropriate to the numeric type being formatted.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setMinimumFractionDigits(int)', [
			[/* method description */
				[/* text */ 't', `Sets the minimum number of digits allowed in the fraction portion of a
 number.
 For formatting numbers other than `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` objects, the lower of `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` and
 340 is used. Negative input values are replaced with 0.`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the minimum number of fraction digits to be shown; if
 less than zero, then zero is used. The concrete subclass may enforce an
 upper limit to this value appropriate to the numeric type being formatted.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setMinimumIntegerDigits(int)', [
			[/* method description */
				[/* text */ 't', `Sets the minimum number of digits allowed in the integer portion of a
 number.
 For formatting numbers other than `],
				[/* inline code block */ 'i', `BigInteger`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', ` objects, the lower of `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` and
 309 is used. Negative input values are replaced with 0.`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the minimum number of integer digits to be shown; if
 less than zero, then zero is used. The concrete subclass may enforce an
 upper limit to this value appropriate to the numeric type being formatted.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setMultiplier(int)', [
			[/* method description */
				[/* text */ 't', `Sets the multiplier for use in percent, per mille, and similar
 formats.
 For a percent format, set the multiplier to 100 and the suffixes to
 have '%' (for Arabic, use the Arabic percent sign).
 For a per mille format, set the multiplier to 1000 and the suffixes to
 have '\\u2030'.

 `],
				[/* block */ 'b', `Example: with multiplier 100, 1.23 is formatted as "123", and
 "123" is parsed into 1.23.`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the new multiplier`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setNegativePrefix(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Set the negative prefix.
 `],
				[/* block */ 'b', `Examples: -123, ($123) (with negative suffix), sFr-123`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the new negative prefix`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setNegativeSuffix(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Set the negative suffix.
 `],
				[/* block */ 'b', `Examples: 123%`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the new negative suffix`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setParseBigDecimal(boolean)', [
			[/* method description */
				[/* text */ 't', `Sets whether the `],
				[/* reference */ 'r', `#parse(java.lang.String,java.text.ParsePosition)`, `parse(java.lang.String, java.text.ParsePosition)`],
				[/* text */ 't', `
 method returns `],
				[/* inline code block */ 'i', `BigDecimal`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the parse method returns BigDecimal;
                 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` otherwise`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setPositivePrefix(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Set the positive prefix.
 `],
				[/* block */ 'b', `Examples: +123, $123, sFr123`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the new positive prefix`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setPositiveSuffix(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Set the positive suffix.
 `],
				[/* block */ 'b', `Example: 123%`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the new positive suffix`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setRoundingMode(java.math.RoundingMode)', [
			[/* method description */
				[/* text */ 't', `Sets the `],
				[/* reference */ 'r', `enum class in java.math.RoundingMode`, `RoundingMode`],
				[/* text */ 't', ` used in this DecimalFormat.`]
			],
			[/* parameters */
				[/* parameter */ 'roundingMode', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `RoundingMode`],
					[/* text */ 't', ` to be used`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `roundingMode`],
					[/* text */ 't', ` is null.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
