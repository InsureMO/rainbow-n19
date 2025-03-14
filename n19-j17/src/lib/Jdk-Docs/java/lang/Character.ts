import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Character', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `Character`],
		[/* text */ 't', ` class wraps a value of the primitive
 type `],
		[/* inline code block */ 'i', `char`],
		[/* text */ 't', ` in an object. An object of class
 `],
		[/* inline code block */ 'i', `Character`],
		[/* text */ 't', ` contains a single field whose type is
 `],
		[/* inline code block */ 'i', `char`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', `
 In addition, this class provides a large number of static methods for
 determining a character's category (lowercase letter, digit, etc.)
 and for converting characters from uppercase to lowercase and vice
 versa.

 `],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `conformance`, `Unicode Conformance`]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The fields and methods of class `],
			[/* inline code block */ 'i', `Character`],
			[/* text */ 't', ` are defined in terms
 of character information from the Unicode Standard, specifically the
 `],
			[/* text */ 't', `UnicodeData`],
			[/* text */ 't', ` file that is part of the Unicode Character Database.
 This file specifies properties including name and category for every
 assigned Unicode code point or character range. The file is available
 from the Unicode Consortium at
 `],
			[/* external link */ 'a', `http://www.unicode.org`, `http://www.unicode.org`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 Character information is based on the Unicode Standard, version 13.0.
 `],
		[/* block */ 'b', `
 The Java platform has supported different versions of the Unicode
 Standard over time. Upgrades to newer versions of the Unicode Standard
 occurred in the following Java releases, each indicating the new version:
 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Java release`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Unicode version`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Java SE 15`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Unicode 13.0`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Java SE 13`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Unicode 12.1`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Java SE 12`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Unicode 11.0`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Java SE 11`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Unicode 10.0`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Java SE 9`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Unicode 8.0`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Java SE 8`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Unicode 6.2`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Java SE 7`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Unicode 6.0`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Java SE 5.0`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Unicode 4.0`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Java SE 1.4`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Unicode 3.0`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `JDK 1.1`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Unicode 2.0`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table cell */ 'tbc', [
						[/* text */ 't', `JDK 1.0.2`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Unicode 1.1.5`]
					]]
				]]
			]],
		],
		[/* text */ 't', `
 Variations from these base Unicode versions, such as recognized appendixes,
 are documented elsewhere.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `unicode`, `Unicode Character Representations`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `char`],
			[/* text */ 't', ` data type (and therefore the value that a
 `],
			[/* inline code block */ 'i', `Character`],
			[/* text */ 't', ` object encapsulates) are based on the
 original Unicode specification, which defined characters as
 fixed-width 16-bit entities. The Unicode Standard has since been
 changed to allow for characters whose representation requires more
 than 16 bits.  The range of legal `],
			[/* text */ 't', `code point`],
			[/* text */ 't', `s is now
 U+0000 to U+10FFFF, known as `],
			[/* text */ 't', `Unicode scalar value`],
			[/* text */ 't', `.
 (Refer to the `],
			[/* external link */ 'a', `http://www.unicode.org/reports/tr27/#notation`, `definition`],
			[/* text */ 't', ` of the U+`],
			[/* text */ 't', `n`],
			[/* text */ 't', ` notation in the Unicode
 Standard.)

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `BMP`, `The set of characters from U+0000 to U+FFFF`],
			[/* text */ 't', ` is
 sometimes referred to as the `],
			[/* text */ 't', `Basic Multilingual Plane (BMP)`],
			[/* text */ 't', `.
 `],
			[/* anchor */ 'r', '#-id', `supplementary`, `Characters`],
			[/* text */ 't', ` whose code points are greater
 than U+FFFF are called `],
			[/* text */ 't', `supplementary character`],
			[/* text */ 't', `s.  The Java
 platform uses the UTF-16 representation in `],
			[/* inline code block */ 'i', `char`],
			[/* text */ 't', ` arrays and
 in the `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `StringBuffer`],
			[/* text */ 't', ` classes. In
 this representation, supplementary characters are represented as a pair
 of `],
			[/* inline code block */ 'i', `char`],
			[/* text */ 't', ` values, the first from the `],
			[/* text */ 't', `high-surrogates`],
			[/* text */ 't', `
 range, (\\uD800-\\uDBFF), the second from the
 `],
			[/* text */ 't', `low-surrogates`],
			[/* text */ 't', ` range (\\uDC00-\\uDFFF).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* inline code block */ 'i', `char`],
			[/* text */ 't', ` value, therefore, represents Basic
 Multilingual Plane (BMP) code points, including the surrogate
 code points, or code units of the UTF-16 encoding. An
 `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', ` value represents all Unicode code points,
 including supplementary code points. The lower (least significant)
 21 bits of `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', ` are used to represent Unicode code
 points and the upper (most significant) 11 bits must be zero.
 Unless otherwise specified, the behavior with respect to
 supplementary characters and surrogate `],
			[/* inline code block */ 'i', `char`],
			[/* text */ 't', ` values is
 as follows:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `The methods that only accept a `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value cannot support
 supplementary characters. They treat `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` values from the
 surrogate ranges as undefined characters. For example,
 `],
				[/* inline code block */ 'i', `Character.isLetter('\\uD840')`],
				[/* text */ 't', ` returns `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `, even though
 this specific value if followed by any low-surrogate value in a string
 would represent a letter.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The methods that accept an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value support all
 Unicode characters, including supplementary characters. For
 example, `],
				[/* inline code block */ 'i', `Character.isLetter(0x2F81A)`],
				[/* text */ 't', ` returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` because the code point value represents a letter
 (a CJK ideograph).
 `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `In the Java SE API documentation, `],
			[/* text */ 't', `Unicode code point`],
			[/* text */ 't', ` is
 used for character values in the range between U+0000 and U+10FFFF,
 and `],
			[/* text */ 't', `Unicode code unit`],
			[/* text */ 't', ` is used for 16-bit
 `],
			[/* inline code block */ 'i', `char`],
			[/* text */ 't', ` values that are code units of the `],
			[/* text */ 't', `UTF-16`],
			[/* text */ 't', `
 encoding. For more information on Unicode terminology, refer to the
 `],
			[/* external link */ 'a', `http://www.unicode.org/glossary/`, `Unicode Glossary`],
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
 occur. For example, in a future release, synchronization may fail.`]
		]]
	],
	[/* fields */
		[/* field */ 'BYTES', [
			[/* field description */
				[/* text */ 't', `The number of bytes used to represent a `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value in unsigned
 binary form.`]
			],
		]],
		[/* field */ 'COMBINING_SPACING_MARK', [
			[/* field description */
				[/* text */ 't', `General category "Mc" in the Unicode specification.`]
			],
		]],
		[/* field */ 'CONNECTOR_PUNCTUATION', [
			[/* field description */
				[/* text */ 't', `General category "Pc" in the Unicode specification.`]
			],
		]],
		[/* field */ 'CONTROL', [
			[/* field description */
				[/* text */ 't', `General category "Cc" in the Unicode specification.`]
			],
		]],
		[/* field */ 'CURRENCY_SYMBOL', [
			[/* field description */
				[/* text */ 't', `General category "Sc" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DASH_PUNCTUATION', [
			[/* field description */
				[/* text */ 't', `General category "Pd" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DECIMAL_DIGIT_NUMBER', [
			[/* field description */
				[/* text */ 't', `General category "Nd" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_ARABIC_NUMBER', [
			[/* field description */
				[/* text */ 't', `Weak bidirectional character type "AN" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_BOUNDARY_NEUTRAL', [
			[/* field description */
				[/* text */ 't', `Weak bidirectional character type "BN" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_COMMON_NUMBER_SEPARATOR', [
			[/* field description */
				[/* text */ 't', `Weak bidirectional character type "CS" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_EUROPEAN_NUMBER', [
			[/* field description */
				[/* text */ 't', `Weak bidirectional character type "EN" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR', [
			[/* field description */
				[/* text */ 't', `Weak bidirectional character type "ES" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR', [
			[/* field description */
				[/* text */ 't', `Weak bidirectional character type "ET" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_FIRST_STRONG_ISOLATE', [
			[/* field description */
				[/* text */ 't', `Weak bidirectional character type "FSI" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_LEFT_TO_RIGHT', [
			[/* field description */
				[/* text */ 't', `Strong bidirectional character type "L" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING', [
			[/* field description */
				[/* text */ 't', `Strong bidirectional character type "LRE" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_LEFT_TO_RIGHT_ISOLATE', [
			[/* field description */
				[/* text */ 't', `Weak bidirectional character type "LRI" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE', [
			[/* field description */
				[/* text */ 't', `Strong bidirectional character type "LRO" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_NONSPACING_MARK', [
			[/* field description */
				[/* text */ 't', `Weak bidirectional character type "NSM" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_OTHER_NEUTRALS', [
			[/* field description */
				[/* text */ 't', `Neutral bidirectional character type "ON" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_PARAGRAPH_SEPARATOR', [
			[/* field description */
				[/* text */ 't', `Neutral bidirectional character type "B" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_POP_DIRECTIONAL_FORMAT', [
			[/* field description */
				[/* text */ 't', `Weak bidirectional character type "PDF" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_POP_DIRECTIONAL_ISOLATE', [
			[/* field description */
				[/* text */ 't', `Weak bidirectional character type "PDI" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_RIGHT_TO_LEFT', [
			[/* field description */
				[/* text */ 't', `Strong bidirectional character type "R" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC', [
			[/* field description */
				[/* text */ 't', `Strong bidirectional character type "AL" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING', [
			[/* field description */
				[/* text */ 't', `Strong bidirectional character type "RLE" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_RIGHT_TO_LEFT_ISOLATE', [
			[/* field description */
				[/* text */ 't', `Weak bidirectional character type "RLI" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE', [
			[/* field description */
				[/* text */ 't', `Strong bidirectional character type "RLO" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_SEGMENT_SEPARATOR', [
			[/* field description */
				[/* text */ 't', `Neutral bidirectional character type "S" in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_UNDEFINED', [
			[/* field description */
				[/* text */ 't', `Undefined bidirectional character type. Undefined `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `
 values have undefined directionality in the Unicode specification.`]
			],
		]],
		[/* field */ 'DIRECTIONALITY_WHITESPACE', [
			[/* field description */
				[/* text */ 't', `Neutral bidirectional character type "WS" in the Unicode specification.`]
			],
		]],
		[/* field */ 'ENCLOSING_MARK', [
			[/* field description */
				[/* text */ 't', `General category "Me" in the Unicode specification.`]
			],
		]],
		[/* field */ 'END_PUNCTUATION', [
			[/* field description */
				[/* text */ 't', `General category "Pe" in the Unicode specification.`]
			],
		]],
		[/* field */ 'FINAL_QUOTE_PUNCTUATION', [
			[/* field description */
				[/* text */ 't', `General category "Pf" in the Unicode specification.`]
			],
		]],
		[/* field */ 'FORMAT', [
			[/* field description */
				[/* text */ 't', `General category "Cf" in the Unicode specification.`]
			],
		]],
		[/* field */ 'INITIAL_QUOTE_PUNCTUATION', [
			[/* field description */
				[/* text */ 't', `General category "Pi" in the Unicode specification.`]
			],
		]],
		[/* field */ 'LETTER_NUMBER', [
			[/* field description */
				[/* text */ 't', `General category "Nl" in the Unicode specification.`]
			],
		]],
		[/* field */ 'LINE_SEPARATOR', [
			[/* field description */
				[/* text */ 't', `General category "Zl" in the Unicode specification.`]
			],
		]],
		[/* field */ 'LOWERCASE_LETTER', [
			[/* field description */
				[/* text */ 't', `General category "Ll" in the Unicode specification.`]
			],
		]],
		[/* field */ 'MATH_SYMBOL', [
			[/* field description */
				[/* text */ 't', `General category "Sm" in the Unicode specification.`]
			],
		]],
		[/* field */ 'MAX_CODE_POINT', [
			[/* field description */
				[/* text */ 't', `The maximum value of a
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#code_point`, `Unicode code point`],
				[/* text */ 't', `, constant `],
				[/* inline code block */ 'i', `U+10FFFF`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MAX_HIGH_SURROGATE', [
			[/* field description */
				[/* text */ 't', `The maximum value of a
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#high_surrogate_code_unit`, `Unicode high-surrogate code unit`],
				[/* text */ 't', `
 in the UTF-16 encoding, constant `],
				[/* inline code block */ 'i', `'\\uDBFF'`],
				[/* text */ 't', `.
 A high-surrogate is also known as a `],
				[/* text */ 't', `leading-surrogate`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MAX_LOW_SURROGATE', [
			[/* field description */
				[/* text */ 't', `The maximum value of a
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#low_surrogate_code_unit`, `Unicode low-surrogate code unit`],
				[/* text */ 't', `
 in the UTF-16 encoding, constant `],
				[/* inline code block */ 'i', `'\\uDFFF'`],
				[/* text */ 't', `.
 A low-surrogate is also known as a `],
				[/* text */ 't', `trailing-surrogate`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MAX_RADIX', [
			[/* field description */
				[/* text */ 't', `The maximum radix available for conversion to and from strings.
 The constant value of this field is the largest value permitted
 for the radix argument in radix-conversion methods such as the
 `],
				[/* inline code block */ 'i', `digit`],
				[/* text */ 't', ` method, the `],
				[/* inline code block */ 'i', `forDigit`],
				[/* text */ 't', ` method, and the
 `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', ` method of class `],
				[/* inline code block */ 'i', `Integer`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MAX_SURROGATE', [
			[/* field description */
				[/* text */ 't', `The maximum value of a Unicode surrogate code unit in the
 UTF-16 encoding, constant `],
				[/* inline code block */ 'i', `'\\uDFFF'`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MAX_VALUE', [
			[/* field description */
				[/* text */ 't', `The constant value of this field is the largest value of type
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `'\\uFFFF'`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MIN_CODE_POINT', [
			[/* field description */
				[/* text */ 't', `The minimum value of a
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#code_point`, `Unicode code point`],
				[/* text */ 't', `, constant `],
				[/* inline code block */ 'i', `U+0000`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MIN_HIGH_SURROGATE', [
			[/* field description */
				[/* text */ 't', `The minimum value of a
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#high_surrogate_code_unit`, `Unicode high-surrogate code unit`],
				[/* text */ 't', `
 in the UTF-16 encoding, constant `],
				[/* inline code block */ 'i', `'\\uD800'`],
				[/* text */ 't', `.
 A high-surrogate is also known as a `],
				[/* text */ 't', `leading-surrogate`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MIN_LOW_SURROGATE', [
			[/* field description */
				[/* text */ 't', `The minimum value of a
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#low_surrogate_code_unit`, `Unicode low-surrogate code unit`],
				[/* text */ 't', `
 in the UTF-16 encoding, constant `],
				[/* inline code block */ 'i', `'\\uDC00'`],
				[/* text */ 't', `.
 A low-surrogate is also known as a `],
				[/* text */ 't', `trailing-surrogate`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MIN_RADIX', [
			[/* field description */
				[/* text */ 't', `The minimum radix available for conversion to and from strings.
 The constant value of this field is the smallest value permitted
 for the radix argument in radix-conversion methods such as the
 `],
				[/* inline code block */ 'i', `digit`],
				[/* text */ 't', ` method, the `],
				[/* inline code block */ 'i', `forDigit`],
				[/* text */ 't', ` method, and the
 `],
				[/* inline code block */ 'i', `toString`],
				[/* text */ 't', ` method of class `],
				[/* inline code block */ 'i', `Integer`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MIN_SUPPLEMENTARY_CODE_POINT', [
			[/* field description */
				[/* text */ 't', `The minimum value of a
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#supplementary_code_point`, `Unicode supplementary code point`],
				[/* text */ 't', `, constant `],
				[/* inline code block */ 'i', `U+10000`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MIN_SURROGATE', [
			[/* field description */
				[/* text */ 't', `The minimum value of a Unicode surrogate code unit in the
 UTF-16 encoding, constant `],
				[/* inline code block */ 'i', `'\\uD800'`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MIN_VALUE', [
			[/* field description */
				[/* text */ 't', `The constant value of this field is the smallest value of type
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `'\\u0000'`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'MODIFIER_LETTER', [
			[/* field description */
				[/* text */ 't', `General category "Lm" in the Unicode specification.`]
			],
		]],
		[/* field */ 'MODIFIER_SYMBOL', [
			[/* field description */
				[/* text */ 't', `General category "Sk" in the Unicode specification.`]
			],
		]],
		[/* field */ 'NON_SPACING_MARK', [
			[/* field description */
				[/* text */ 't', `General category "Mn" in the Unicode specification.`]
			],
		]],
		[/* field */ 'OTHER_LETTER', [
			[/* field description */
				[/* text */ 't', `General category "Lo" in the Unicode specification.`]
			],
		]],
		[/* field */ 'OTHER_NUMBER', [
			[/* field description */
				[/* text */ 't', `General category "No" in the Unicode specification.`]
			],
		]],
		[/* field */ 'OTHER_PUNCTUATION', [
			[/* field description */
				[/* text */ 't', `General category "Po" in the Unicode specification.`]
			],
		]],
		[/* field */ 'OTHER_SYMBOL', [
			[/* field description */
				[/* text */ 't', `General category "So" in the Unicode specification.`]
			],
		]],
		[/* field */ 'PARAGRAPH_SEPARATOR', [
			[/* field description */
				[/* text */ 't', `General category "Zp" in the Unicode specification.`]
			],
		]],
		[/* field */ 'PRIVATE_USE', [
			[/* field description */
				[/* text */ 't', `General category "Co" in the Unicode specification.`]
			],
		]],
		[/* field */ 'SIZE', [
			[/* field description */
				[/* text */ 't', `The number of bits used to represent a `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value in unsigned
 binary form, constant `],
				[/* inline code block */ 'i', `16`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'SPACE_SEPARATOR', [
			[/* field description */
				[/* text */ 't', `General category "Zs" in the Unicode specification.`]
			],
		]],
		[/* field */ 'START_PUNCTUATION', [
			[/* field description */
				[/* text */ 't', `General category "Ps" in the Unicode specification.`]
			],
		]],
		[/* field */ 'SURROGATE', [
			[/* field description */
				[/* text */ 't', `General category "Cs" in the Unicode specification.`]
			],
		]],
		[/* field */ 'TITLECASE_LETTER', [
			[/* field description */
				[/* text */ 't', `General category "Lt" in the Unicode specification.`]
			],
		]],
		[/* field */ 'TYPE', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` instance representing the primitive type
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'UNASSIGNED', [
			[/* field description */
				[/* text */ 't', `General category "Cn" in the Unicode specification.`]
			],
		]],
		[/* field */ 'UPPERCASE_LETTER', [
			[/* field description */
				[/* text */ 't', `General category "Lu" in the Unicode specification.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(char)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a newly allocated `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', ` object that
 represents the specified `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to be represented by the
                  `],
					[/* inline code block */ 'i', `Character`],
					[/* text */ 't', ` object.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this object against the specified object.
 The result is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the argument is not
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and is a `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', ` object that
 represents the same `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value as this object.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to compare with.`]
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
		[/* method */ 'charValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the primitive `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value represented by
          this object.`]
			]
		]],
		[/* method */ 'compareTo(java.lang.Character)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', ` objects numerically.`]
			],
			[/* parameters */
				[/* parameter */ 'anotherCharacter', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Character`],
					[/* text */ 't', ` to be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the argument `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', `
          is equal to this `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', `; a value less than
          `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', ` is numerically less
          than the `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', ` argument; and a value greater than
          `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', ` is numerically greater
          than the `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', ` argument (unsigned comparison).
          Note that this is strictly a numerical comparison; it is not
          locale-dependent.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for this `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', `; equal to the result
 of invoking `],
				[/* inline code block */ 'i', `charValue()`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this `],
				[/* inline code block */ 'i', `Character`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object representing this
 `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', `'s value.  The result is a string of
 length 1 whose sole component is the primitive
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value represented by this
 `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this object.`]
			]
		]],
		[/* method */ 'describeConstable()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', ` containing the nominal descriptor for this
 instance.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', ` describing the `],
				[/* reference */ 'r', `java.lang.Character`, `Character`],
				[/* text */ 't', ` instance`]
			]
		]],
		[/* method */ 'isAlphabetic(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character (Unicode code point) is alphabetic.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A character is considered to be alphabetic if its general category type,
 provided by `],
					[/* reference */ 'r', `#getType(int)`, `getType(codePoint)`],
					[/* text */ 't', `, is any of
 the following:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `UPPERCASE_LETTER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `LOWERCASE_LETTER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `TITLECASE_LETTER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `MODIFIER_LETTER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `OTHER_LETTER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `LETTER_NUMBER`],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `
 or it has contributory property Other_Alphabetic as defined by the
 Unicode Standard.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is a Unicode alphabet
          character, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isBmpCodePoint(int)', [
			[/* method description */
				[/* text */ 't', `Determines whether the specified character (Unicode code point)
 is in the `],
				[/* text */ 't', `Basic Multilingual Plane (BMP)`],
				[/* text */ 't', `.
 Such code points can be represented using a single `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified code point is between
         `],
				[/* text */ 't', `MIN_VALUE`],
				[/* text */ 't', ` and `],
				[/* text */ 't', `MAX_VALUE`],
				[/* text */ 't', ` inclusive;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isDefined(char)', [
			[/* method description */
				[/* text */ 't', `Determines if a character is defined in Unicode.
 `],
				[/* block */ 'b', `
 A character is defined if at least one of the following is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `It has an entry in the UnicodeData file.
 `],
					[/* block */ 'b', `It has a value in a range defined by the UnicodeData file.
 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isDefined(int)`, `isDefined(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character has a defined meaning
          in Unicode; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isDefined(int)', [
			[/* method description */
				[/* text */ 't', `Determines if a character (Unicode code point) is defined in Unicode.
 `],
				[/* block */ 'b', `
 A character is defined if at least one of the following is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `It has an entry in the UnicodeData file.
 `],
					[/* block */ 'b', `It has a value in a range defined by the UnicodeData file.
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character has a defined meaning
          in Unicode; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isDigit(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character is a digit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A character is a digit if its general category type, provided
 by `],
					[/* inline code block */ 'i', `Character.getType(ch)`],
					[/* text */ 't', `, is
 `],
					[/* inline code block */ 'i', `DECIMAL_DIGIT_NUMBER`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Some Unicode character ranges that contain digits:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `'\\u0030'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'\\u0039'`],
						[/* text */ 't', `,
     ISO-LATIN-1 digits (`],
						[/* inline code block */ 'i', `'0'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'9'`],
						[/* text */ 't', `)
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `'\\u0660'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'\\u0669'`],
						[/* text */ 't', `,
     Arabic-Indic digits
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `'\\u06F0'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'\\u06F9'`],
						[/* text */ 't', `,
     Extended Arabic-Indic digits
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `'\\u0966'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'\\u096F'`],
						[/* text */ 't', `,
     Devanagari digits
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `'\\uFF10'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'\\uFF19'`],
						[/* text */ 't', `,
     Fullwidth digits
 `]
					]]
				]],
				[/* text */ 't', `

 Many other character ranges contain digits as well.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isDigit(int)`, `isDigit(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is a digit;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isDigit(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character (Unicode code point) is a digit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A character is a digit if its general category type, provided
 by `],
					[/* reference */ 'r', `#getType(int)`, `getType(codePoint)`],
					[/* text */ 't', `, is
 `],
					[/* inline code block */ 'i', `DECIMAL_DIGIT_NUMBER`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Some Unicode character ranges that contain digits:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `'\\u0030'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'\\u0039'`],
						[/* text */ 't', `,
     ISO-LATIN-1 digits (`],
						[/* inline code block */ 'i', `'0'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'9'`],
						[/* text */ 't', `)
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `'\\u0660'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'\\u0669'`],
						[/* text */ 't', `,
     Arabic-Indic digits
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `'\\u06F0'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'\\u06F9'`],
						[/* text */ 't', `,
     Extended Arabic-Indic digits
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `'\\u0966'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'\\u096F'`],
						[/* text */ 't', `,
     Devanagari digits
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `'\\uFF10'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'\\uFF19'`],
						[/* text */ 't', `,
     Fullwidth digits
 `]
					]]
				]],
				[/* text */ 't', `

 Many other character ranges contain digits as well.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is a digit;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isHighSurrogate(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the given `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value is a
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#high_surrogate_code_unit`, `Unicode high-surrogate code unit`],
				[/* text */ 't', `
 (also known as `],
				[/* text */ 't', `leading-surrogate code unit`],
				[/* text */ 't', `).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Such values do not represent characters by themselves,
 but are used in the representation of
 `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `
 in the UTF-16 encoding.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value is between
         `],
				[/* text */ 't', `MIN_HIGH_SURROGATE`],
				[/* text */ 't', ` and
         `],
				[/* text */ 't', `MAX_HIGH_SURROGATE`],
				[/* text */ 't', ` inclusive;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isIdentifierIgnorable(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character should be regarded as
 an ignorable character in a Java identifier or a Unicode identifier.
 `],
				[/* block */ 'b', `
 The following Unicode characters are ignorable in a Java identifier
 or a Unicode identifier:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `ISO control characters that are not whitespace
 `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* inline code block */ 'i', `'\\u0000'`],
								[/* text */ 't', ` through `],
								[/* inline code block */ 'i', `'\\u0008'`],
								[/* text */ 't', `
 `]
							]],
							[/* block */ 'b', [
								[/* inline code block */ 'i', `'\\u000E'`],
								[/* text */ 't', ` through `],
								[/* inline code block */ 'i', `'\\u001B'`],
								[/* text */ 't', `
 `]
							]],
							[/* block */ 'b', [
								[/* inline code block */ 'i', `'\\u007F'`],
								[/* text */ 't', ` through `],
								[/* inline code block */ 'i', `'\\u009F'`],
								[/* text */ 't', `
 `]
							]]
						]],
						[/* text */ 't', `

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `all characters that have the `],
						[/* inline code block */ 'i', `FORMAT`],
						[/* text */ 't', ` general
 category value
 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isIdentifierIgnorable(int)`, `isIdentifierIgnorable(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is an ignorable control
          character that may be part of a Java or Unicode identifier;
           `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isIdentifierIgnorable(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character (Unicode code point) should be regarded as
 an ignorable character in a Java identifier or a Unicode identifier.
 `],
				[/* block */ 'b', `
 The following Unicode characters are ignorable in a Java identifier
 or a Unicode identifier:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `ISO control characters that are not whitespace
 `],
						[/* list */ 'l', [
							[/* block */ 'b', [
								[/* inline code block */ 'i', `'\\u0000'`],
								[/* text */ 't', ` through `],
								[/* inline code block */ 'i', `'\\u0008'`],
								[/* text */ 't', `
 `]
							]],
							[/* block */ 'b', [
								[/* inline code block */ 'i', `'\\u000E'`],
								[/* text */ 't', ` through `],
								[/* inline code block */ 'i', `'\\u001B'`],
								[/* text */ 't', `
 `]
							]],
							[/* block */ 'b', [
								[/* inline code block */ 'i', `'\\u007F'`],
								[/* text */ 't', ` through `],
								[/* inline code block */ 'i', `'\\u009F'`],
								[/* text */ 't', `
 `]
							]]
						]],
						[/* text */ 't', `

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `all characters that have the `],
						[/* inline code block */ 'i', `FORMAT`],
						[/* text */ 't', ` general
 category value
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is an ignorable control
          character that may be part of a Java or Unicode identifier;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isIdeographic(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character (Unicode code point) is a CJKV
 (Chinese, Japanese, Korean and Vietnamese) ideograph, as defined by
 the Unicode Standard.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is a Unicode ideograph
          character, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isISOControl(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character is an ISO control
 character.  A character is considered to be an ISO control
 character if its code is in the range `],
				[/* inline code block */ 'i', `'\\u0000'`],
				[/* text */ 't', `
 through `],
				[/* inline code block */ 'i', `'\\u001F'`],
				[/* text */ 't', ` or in the range
 `],
				[/* inline code block */ 'i', `'\\u007F'`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `'\\u009F'`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isISOControl(int)`, `isISOControl(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is an ISO control character;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isISOControl(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the referenced character (Unicode code point) is an ISO control
 character.  A character is considered to be an ISO control
 character if its code is in the range `],
				[/* inline code block */ 'i', `'\\u0000'`],
				[/* text */ 't', `
 through `],
				[/* inline code block */ 'i', `'\\u001F'`],
				[/* text */ 't', ` or in the range
 `],
				[/* inline code block */ 'i', `'\\u007F'`],
				[/* text */ 't', ` through `],
				[/* inline code block */ 'i', `'\\u009F'`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is an ISO control character;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isJavaIdentifierPart(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character may be part of a Java
 identifier as other than the first character.
 `],
				[/* block */ 'b', `
 A character may be part of a Java identifier if any of the following
 conditions are true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `  it is a letter
 `],
					[/* block */ 'b', [
						[/* text */ 't', `  it is a currency symbol (such as `],
						[/* inline code block */ 'i', `'$'`],
						[/* text */ 't', `)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `  it is a connecting punctuation character (such as `],
						[/* inline code block */ 'i', `'_'`],
						[/* text */ 't', `)
 `]
					]],
					[/* block */ 'b', `  it is a digit
 `],
					[/* block */ 'b', `  it is a numeric letter (such as a Roman numeral character)
 `],
					[/* block */ 'b', `  it is a combining mark
 `],
					[/* block */ 'b', `  it is a non-spacing mark
 `],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `isIdentifierIgnorable`],
						[/* text */ 't', ` returns
 `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', ` for the character
 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isJavaIdentifierPart(int)`, `isJavaIdentifierPart(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character may be part of a
          Java identifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isJavaIdentifierPart(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the character (Unicode code point) may be part of a Java
 identifier as other than the first character.
 `],
				[/* block */ 'b', `
 A character may be part of a Java identifier if any of the following
 conditions are true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `  it is a letter
 `],
					[/* block */ 'b', [
						[/* text */ 't', `  it is a currency symbol (such as `],
						[/* inline code block */ 'i', `'$'`],
						[/* text */ 't', `)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `  it is a connecting punctuation character (such as `],
						[/* inline code block */ 'i', `'_'`],
						[/* text */ 't', `)
 `]
					]],
					[/* block */ 'b', `  it is a digit
 `],
					[/* block */ 'b', `  it is a numeric letter (such as a Roman numeral character)
 `],
					[/* block */ 'b', `  it is a combining mark
 `],
					[/* block */ 'b', `  it is a non-spacing mark
 `],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#isIdentifierIgnorable(int)`, `isIdentifierIgnorable(codePoint)`],
						[/* text */ 't', ` returns `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', ` for
 the code point
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character may be part of a
          Java identifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isJavaIdentifierStart(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character is
 permissible as the first character in a Java identifier.
 `],
				[/* block */ 'b', `
 A character may start a Java identifier if and only if
 one of the following conditions is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#isLetter(int)`, `isLetter(ch)`],
						[/* text */ 't', ` returns `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#getType(int)`, `getType(ch)`],
						[/* text */ 't', ` returns `],
						[/* inline code block */ 'i', `LETTER_NUMBER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `ch`],
						[/* text */ 't', ` is a currency symbol (such as `],
						[/* inline code block */ 'i', `'$'`],
						[/* text */ 't', `)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `ch`],
						[/* text */ 't', ` is a connecting punctuation character (such as `],
						[/* inline code block */ 'i', `'_'`],
						[/* text */ 't', `).
 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isJavaIdentifierStart(int)`, `isJavaIdentifierStart(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character may start a Java identifier;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isJavaIdentifierStart(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the character (Unicode code point) is
 permissible as the first character in a Java identifier.
 `],
				[/* block */ 'b', `
 A character may start a Java identifier if and only if
 one of the following conditions is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#isLetter(int)`, `isLetter(codePoint)`],
						[/* text */ 't', `
      returns `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#getType(int)`, `getType(codePoint)`],
						[/* text */ 't', `
      returns `],
						[/* inline code block */ 'i', `LETTER_NUMBER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` the referenced character is a currency symbol (such as `],
						[/* inline code block */ 'i', `'$'`],
						[/* text */ 't', `)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` the referenced character is a connecting punctuation character
      (such as `],
						[/* inline code block */ 'i', `'_'`],
						[/* text */ 't', `).
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character may start a Java identifier;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isJavaLetter(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character is permissible as the first
 character in a Java identifier.
 `],
				[/* block */ 'b', `
 A character may start a Java identifier if and only if
 one of the following conditions is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#isLetter(int)`, `isLetter(ch)`],
						[/* text */ 't', ` returns `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#getType(int)`, `getType(ch)`],
						[/* text */ 't', ` returns `],
						[/* inline code block */ 'i', `LETTER_NUMBER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `ch`],
						[/* text */ 't', ` is a currency symbol (such as `],
						[/* inline code block */ 'i', `'$'`],
						[/* text */ 't', `)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `ch`],
						[/* text */ 't', ` is a connecting punctuation character (such as `],
						[/* inline code block */ 'i', `'_'`],
						[/* text */ 't', `).
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character may start a Java
          identifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isJavaLetterOrDigit(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character may be part of a Java
 identifier as other than the first character.
 `],
				[/* block */ 'b', `
 A character may be part of a Java identifier if and only if one
 of the following conditions is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `  it is a letter
 `],
					[/* block */ 'b', [
						[/* text */ 't', `  it is a currency symbol (such as `],
						[/* inline code block */ 'i', `'$'`],
						[/* text */ 't', `)
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `  it is a connecting punctuation character (such as `],
						[/* inline code block */ 'i', `'_'`],
						[/* text */ 't', `)
 `]
					]],
					[/* block */ 'b', `  it is a digit
 `],
					[/* block */ 'b', `  it is a numeric letter (such as a Roman numeral character)
 `],
					[/* block */ 'b', `  it is a combining mark
 `],
					[/* block */ 'b', `  it is a non-spacing mark
 `],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `isIdentifierIgnorable`],
						[/* text */ 't', ` returns
 `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', ` for the character.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character may be part of a
          Java identifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isLetter(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character is a letter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A character is considered to be a letter if its general
 category type, provided by `],
					[/* inline code block */ 'i', `Character.getType(ch)`],
					[/* text */ 't', `,
 is any of the following:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `UPPERCASE_LETTER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `LOWERCASE_LETTER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `TITLECASE_LETTER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `MODIFIER_LETTER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `OTHER_LETTER`],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `

 Not all letters have case. Many characters are
 letters but are neither uppercase nor lowercase nor titlecase.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isLetter(int)`, `isLetter(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is a letter;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isLetter(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character (Unicode code point) is a letter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A character is considered to be a letter if its general
 category type, provided by `],
					[/* reference */ 'r', `#getType(int)`, `getType(codePoint)`],
					[/* text */ 't', `,
 is any of the following:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `UPPERCASE_LETTER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `LOWERCASE_LETTER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `TITLECASE_LETTER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `MODIFIER_LETTER`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `OTHER_LETTER`],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `

 Not all letters have case. Many characters are
 letters but are neither uppercase nor lowercase nor titlecase.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is a letter;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isLetterOrDigit(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character is a letter or digit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A character is considered to be a letter or digit if either
 `],
					[/* inline code block */ 'i', `Character.isLetter(char ch)`],
					[/* text */ 't', ` or
 `],
					[/* inline code block */ 'i', `Character.isDigit(char ch)`],
					[/* text */ 't', ` returns
 `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for the character.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isLetterOrDigit(int)`, `isLetterOrDigit(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is a letter or digit;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isLetterOrDigit(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character (Unicode code point) is a letter or digit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A character is considered to be a letter or digit if either
 `],
					[/* reference */ 'r', `#isLetter(int)`, `isLetter(codePoint)`],
					[/* text */ 't', ` or
 `],
					[/* reference */ 'r', `#isDigit(int)`, `isDigit(codePoint)`],
					[/* text */ 't', ` returns
 `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for the character.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is a letter or digit;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isLowerCase(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character is a lowercase character.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A character is lowercase if its general category type, provided
 by `],
					[/* inline code block */ 'i', `Character.getType(ch)`],
					[/* text */ 't', `, is
 `],
					[/* inline code block */ 'i', `LOWERCASE_LETTER`],
					[/* text */ 't', `, or it has contributory property
 Other_Lowercase as defined by the Unicode Standard.
 `]
				]],
				[/* block */ 'b', `
 The following are examples of lowercase characters:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` a b c d e f g h i j k l m n o p q r s t u v w x y z
 '\\u00DF' '\\u00E0' '\\u00E1' '\\u00E2' '\\u00E3' '\\u00E4' '\\u00E5' '\\u00E6'
 '\\u00E7' '\\u00E8' '\\u00E9' '\\u00EA' '\\u00EB' '\\u00EC' '\\u00ED' '\\u00EE'
 '\\u00EF' '\\u00F0' '\\u00F1' '\\u00F2' '\\u00F3' '\\u00F4' '\\u00F5' '\\u00F6'
 '\\u00F8' '\\u00F9' '\\u00FA' '\\u00FB' '\\u00FC' '\\u00FD' '\\u00FE' '\\u00FF'
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` Many other Unicode characters are lowercase too.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isLowerCase(int)`, `isLowerCase(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is lowercase;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isLowerCase(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character (Unicode code point) is a
 lowercase character.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A character is lowercase if its general category type, provided
 by `],
					[/* reference */ 'r', `#getType(char)`, `getType(codePoint)`],
					[/* text */ 't', `, is
 `],
					[/* inline code block */ 'i', `LOWERCASE_LETTER`],
					[/* text */ 't', `, or it has contributory property
 Other_Lowercase as defined by the Unicode Standard.
 `]
				]],
				[/* block */ 'b', `
 The following are examples of lowercase characters:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` a b c d e f g h i j k l m n o p q r s t u v w x y z
 '\\u00DF' '\\u00E0' '\\u00E1' '\\u00E2' '\\u00E3' '\\u00E4' '\\u00E5' '\\u00E6'
 '\\u00E7' '\\u00E8' '\\u00E9' '\\u00EA' '\\u00EB' '\\u00EC' '\\u00ED' '\\u00EE'
 '\\u00EF' '\\u00F0' '\\u00F1' '\\u00F2' '\\u00F3' '\\u00F4' '\\u00F5' '\\u00F6'
 '\\u00F8' '\\u00F9' '\\u00FA' '\\u00FB' '\\u00FC' '\\u00FD' '\\u00FE' '\\u00FF'
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` Many other Unicode characters are lowercase too.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is lowercase;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isLowSurrogate(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the given `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value is a
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#low_surrogate_code_unit`, `Unicode low-surrogate code unit`],
				[/* text */ 't', `
 (also known as `],
				[/* text */ 't', `trailing-surrogate code unit`],
				[/* text */ 't', `).

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Such values do not represent characters by themselves,
 but are used in the representation of
 `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `
 in the UTF-16 encoding.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value is between
         `],
				[/* text */ 't', `MIN_LOW_SURROGATE`],
				[/* text */ 't', ` and
         `],
				[/* text */ 't', `MAX_LOW_SURROGATE`],
				[/* text */ 't', ` inclusive;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isMirrored(char)', [
			[/* method description */
				[/* text */ 't', `Determines whether the character is mirrored according to the
 Unicode specification.  Mirrored characters should have their
 glyphs horizontally mirrored when displayed in text that is
 right-to-left.  For example, `],
				[/* inline code block */ 'i', `'\\u0028'`],
				[/* text */ 't', ` LEFT
 PARENTHESIS is semantically defined to be an `],
				[/* text */ 't', `opening
 parenthesis`],
				[/* text */ 't', `.  This will appear as a "(" in text that is
 left-to-right but as a ")" in text that is right-to-left.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isMirrored(int)`, `isMirrored(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` for which the mirrored property is requested`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the char is mirrored, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `
         if the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` is not mirrored or is not defined.`]
			]
		]],
		[/* method */ 'isMirrored(int)', [
			[/* method description */
				[/* text */ 't', `Determines whether the specified character (Unicode code point)
 is mirrored according to the Unicode specification.  Mirrored
 characters should have their glyphs horizontally mirrored when
 displayed in text that is right-to-left.  For example,
 `],
				[/* inline code block */ 'i', `'\\u0028'`],
				[/* text */ 't', ` LEFT PARENTHESIS is semantically
 defined to be an `],
				[/* text */ 't', `opening parenthesis`],
				[/* text */ 't', `.  This will appear
 as a "(" in text that is left-to-right but as a ")" in text
 that is right-to-left.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is mirrored, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `
          if the character is not mirrored or is not defined.`]
			]
		]],
		[/* method */ 'isSpace(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character is ISO-LATIN-1 white space.
 This method returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` for the following five
 characters only:
 `],
				[/* table */ 'tbl',
					[/* caption */ 'tc'],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Character
     `]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Code
     `]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Name
 `]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `'\\t'`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `U+0009`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `HORIZONTAL TABULATION`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `'\\n'`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `U+000A`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `NEW LINE`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `'\\f'`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `U+000C`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `FORM FEED`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `'\\r'`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `U+000D`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `CARRIAGE RETURN`]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `' '`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `U+0020`]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `SPACE`]
							]]
						]]
					]],
				]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is ISO-LATIN-1 white
             space; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isSpaceChar(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character is a Unicode space character.
 A character is considered to be a space character if and only if
 it is specified to be a space character by the Unicode Standard. This
 method returns true if the character's general category type is any of
 the following:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `SPACE_SEPARATOR`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `LINE_SEPARATOR`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `PARAGRAPH_SEPARATOR`],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isSpaceChar(int)`, `isSpaceChar(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is a space character;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isSpaceChar(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character (Unicode code point) is a
 Unicode space character.  A character is considered to be a
 space character if and only if it is specified to be a space
 character by the Unicode Standard. This method returns true if
 the character's general category type is any of the following:

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* text */ 't', `SPACE_SEPARATOR`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* text */ 't', `LINE_SEPARATOR`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* text */ 't', `PARAGRAPH_SEPARATOR`],
						[/* text */ 't', `
 `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is a space character;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isSupplementaryCodePoint(int)', [
			[/* method description */
				[/* text */ 't', `Determines whether the specified character (Unicode code point)
 is in the `],
				[/* text */ 't', `supplementary character`],
				[/* text */ 't', ` range.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified code point is between
         `],
				[/* text */ 't', `MIN_SUPPLEMENTARY_CODE_POINT`],
				[/* text */ 't', ` and
         `],
				[/* text */ 't', `MAX_CODE_POINT`],
				[/* text */ 't', ` inclusive;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isSurrogate(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the given `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value is a Unicode
 `],
				[/* text */ 't', `surrogate code unit`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Such values do not represent characters by themselves,
 but are used in the representation of
 `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `
 in the UTF-16 encoding.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `A char value is a surrogate code unit if and only if it is either
 a `],
					[/* reference */ 'r', `#isLowSurrogate(char)`, `low-surrogate code unit`],
					[/* text */ 't', ` or
 a `],
					[/* reference */ 'r', `#isHighSurrogate(char)`, `high-surrogate code unit`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value is between
         `],
				[/* text */ 't', `MIN_SURROGATE`],
				[/* text */ 't', ` and
         `],
				[/* text */ 't', `MAX_SURROGATE`],
				[/* text */ 't', ` inclusive;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isSurrogatePair(char,char)', [
			[/* method description */
				[/* text */ 't', `Determines whether the specified pair of `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `
 values is a valid
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#surrogate_pair`, `Unicode surrogate pair`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `This method is equivalent to the expression:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `isHighSurrogate(high) && isLowSurrogate(low)`]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'high', [/* parameter description */
					[/* text */ 't', `the high-surrogate code value to be tested`]
				]],
				[/* parameter */ 'low', [/* parameter description */
					[/* text */ 't', `the low-surrogate code value to be tested`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified high and
 low-surrogate code values represent a valid surrogate pair;
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isTitleCase(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character is a titlecase character.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A character is a titlecase character if its general
 category type, provided by `],
					[/* inline code block */ 'i', `Character.getType(ch)`],
					[/* text */ 't', `,
 is `],
					[/* inline code block */ 'i', `TITLECASE_LETTER`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Some characters look like pairs of Latin letters. For example, there
 is an uppercase letter that looks like "LJ" and has a corresponding
 lowercase letter that looks like "lj". A third form, which looks like "Lj",
 is the appropriate form to use when rendering a word in lowercase
 with initial capitals, as for a book title.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 These are some of the Unicode characters for which this method returns
 `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `LATIN CAPITAL LETTER L WITH SMALL LETTER J`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `LATIN CAPITAL LETTER N WITH SMALL LETTER J`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `LATIN CAPITAL LETTER D WITH SMALL LETTER Z`],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` Many other Unicode characters are titlecase too.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isTitleCase(int)`, `isTitleCase(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is titlecase;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isTitleCase(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character (Unicode code point) is a titlecase character.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A character is a titlecase character if its general
 category type, provided by `],
					[/* reference */ 'r', `#getType(int)`, `getType(codePoint)`],
					[/* text */ 't', `,
 is `],
					[/* inline code block */ 'i', `TITLECASE_LETTER`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Some characters look like pairs of Latin letters. For example, there
 is an uppercase letter that looks like "LJ" and has a corresponding
 lowercase letter that looks like "lj". A third form, which looks like "Lj",
 is the appropriate form to use when rendering a word in lowercase
 with initial capitals, as for a book title.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 These are some of the Unicode characters for which this method returns
 `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `LATIN CAPITAL LETTER L WITH SMALL LETTER J`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `LATIN CAPITAL LETTER N WITH SMALL LETTER J`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `LATIN CAPITAL LETTER D WITH SMALL LETTER Z`],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` Many other Unicode characters are titlecase too.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is titlecase;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isUnicodeIdentifierPart(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character may be part of a Unicode
 identifier as other than the first character.
 `],
				[/* block */ 'b', `
 A character may be part of a Unicode identifier if and only if
 one of the following statements is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `  it is a letter
 `],
					[/* block */ 'b', [
						[/* text */ 't', `  it is a connecting punctuation character (such as `],
						[/* inline code block */ 'i', `'_'`],
						[/* text */ 't', `)
 `]
					]],
					[/* block */ 'b', `  it is a digit
 `],
					[/* block */ 'b', `  it is a numeric letter (such as a Roman numeral character)
 `],
					[/* block */ 'b', `  it is a combining mark
 `],
					[/* block */ 'b', `  it is a non-spacing mark
 `],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `isIdentifierIgnorable`],
						[/* text */ 't', ` returns
 `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', ` for this character.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` it is an `],
						[/* external link */ 'a', `http://www.unicode.org/reports/tr44/#Other_ID_Start`, `Other_ID_Start`],
						[/* text */ 't', ` character.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` it is an `],
						[/* external link */ 'a', `http://www.unicode.org/reports/tr44/#Other_ID_Continue`, `Other_ID_Continue`],
						[/* text */ 't', ` character.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method conforms to `],
					[/* external link */ 'a', `https://unicode.org/reports/tr31/#R1`, `UAX31-R1: Default Identifiers`],
					[/* text */ 't', ` requirement of the Unicode Standard,
 with the following profile of UAX31:
 `]
				]],
				[/* code block */ 'c', ` Continue := Start + ID_Continue + ignorable
 Medial := empty
 ignorable := isIdentifierIgnorable(char) returns true for the character
 `],
				[/* text */ 't', `
 `],
				[/* inline code block */ 'i', `ignorable`],
				[/* text */ 't', ` is added to `],
				[/* inline code block */ 'i', `Continue`],
				[/* text */ 't', ` for backward
 compatibility.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isUnicodeIdentifierPart(int)`, `isUnicodeIdentifierPart(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character may be part of a
          Unicode identifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isUnicodeIdentifierPart(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character (Unicode code point) may be part of a Unicode
 identifier as other than the first character.
 `],
				[/* block */ 'b', `
 A character may be part of a Unicode identifier if and only if
 one of the following statements is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `  it is a letter
 `],
					[/* block */ 'b', [
						[/* text */ 't', `  it is a connecting punctuation character (such as `],
						[/* inline code block */ 'i', `'_'`],
						[/* text */ 't', `)
 `]
					]],
					[/* block */ 'b', `  it is a digit
 `],
					[/* block */ 'b', `  it is a numeric letter (such as a Roman numeral character)
 `],
					[/* block */ 'b', `  it is a combining mark
 `],
					[/* block */ 'b', `  it is a non-spacing mark
 `],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `isIdentifierIgnorable`],
						[/* text */ 't', ` returns
 `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', ` for this character.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` it is an `],
						[/* external link */ 'a', `http://www.unicode.org/reports/tr44/#Other_ID_Start`, `Other_ID_Start`],
						[/* text */ 't', ` character.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` it is an `],
						[/* external link */ 'a', `http://www.unicode.org/reports/tr44/#Other_ID_Continue`, `Other_ID_Continue`],
						[/* text */ 't', ` character.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method conforms to `],
					[/* external link */ 'a', `https://unicode.org/reports/tr31/#R1`, `UAX31-R1: Default Identifiers`],
					[/* text */ 't', ` requirement of the Unicode Standard,
 with the following profile of UAX31:
 `]
				]],
				[/* code block */ 'c', ` Continue := Start + ID_Continue + ignorable
 Medial := empty
 ignorable := isIdentifierIgnorable(int) returns true for the character
 `],
				[/* text */ 't', `
 `],
				[/* inline code block */ 'i', `ignorable`],
				[/* text */ 't', ` is added to `],
				[/* inline code block */ 'i', `Continue`],
				[/* text */ 't', ` for backward
 compatibility.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character may be part of a
          Unicode identifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isUnicodeIdentifierStart(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character is permissible as the
 first character in a Unicode identifier.
 `],
				[/* block */ 'b', `
 A character may start a Unicode identifier if and only if
 one of the following conditions is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#isLetter(int)`, `isLetter(ch)`],
						[/* text */ 't', ` returns `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#getType(int)`, `getType(ch)`],
						[/* text */ 't', ` returns
      `],
						[/* inline code block */ 'i', `LETTER_NUMBER`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` it is an `],
						[/* external link */ 'a', `http://www.unicode.org/reports/tr44/#Other_ID_Start`, `Other_ID_Start`],
						[/* text */ 't', ` character.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method conforms to `],
					[/* external link */ 'a', `https://unicode.org/reports/tr31/#R1`, `UAX31-R1: Default Identifiers`],
					[/* text */ 't', ` requirement of the Unicode Standard,
 with the following profile of UAX31:
 `]
				]],
				[/* code block */ 'c', ` Start := ID_Start + 'VERTICAL TILDE' (U+2E2F)
 `],
				[/* text */ 't', `
 `],
				[/* inline code block */ 'i', `'VERTICAL TILDE'`],
				[/* text */ 't', ` is added to `],
				[/* inline code block */ 'i', `Start`],
				[/* text */ 't', ` for backward
 compatibility.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isUnicodeIdentifierStart(int)`, `isUnicodeIdentifierStart(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character may start a Unicode
          identifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isUnicodeIdentifierStart(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character (Unicode code point) is permissible as the
 first character in a Unicode identifier.
 `],
				[/* block */ 'b', `
 A character may start a Unicode identifier if and only if
 one of the following conditions is true:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#isLetter(int)`, `isLetter(codePoint)`],
						[/* text */ 't', `
      returns `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#getType(int)`, `getType(codePoint)`],
						[/* text */ 't', `
      returns `],
						[/* inline code block */ 'i', `LETTER_NUMBER`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` it is an `],
						[/* external link */ 'a', `http://www.unicode.org/reports/tr44/#Other_ID_Start`, `Other_ID_Start`],
						[/* text */ 't', ` character.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method conforms to `],
					[/* external link */ 'a', `https://unicode.org/reports/tr31/#R1`, `UAX31-R1: Default Identifiers`],
					[/* text */ 't', ` requirement of the Unicode Standard,
 with the following profile of UAX31:
 `]
				]],
				[/* code block */ 'c', ` Start := ID_Start + 'VERTICAL TILDE' (U+2E2F)
 `],
				[/* text */ 't', `
 `],
				[/* inline code block */ 'i', `'VERTICAL TILDE'`],
				[/* text */ 't', ` is added to `],
				[/* inline code block */ 'i', `Start`],
				[/* text */ 't', ` for backward
 compatibility.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character may start a Unicode
          identifier; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isUpperCase(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character is an uppercase character.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A character is uppercase if its general category type, provided by
 `],
					[/* inline code block */ 'i', `Character.getType(ch)`],
					[/* text */ 't', `, is `],
					[/* inline code block */ 'i', `UPPERCASE_LETTER`],
					[/* text */ 't', `.
 or it has contributory property Other_Uppercase as defined by the Unicode Standard.
 `]
				]],
				[/* block */ 'b', `
 The following are examples of uppercase characters:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
 '\\u00C0' '\\u00C1' '\\u00C2' '\\u00C3' '\\u00C4' '\\u00C5' '\\u00C6' '\\u00C7'
 '\\u00C8' '\\u00C9' '\\u00CA' '\\u00CB' '\\u00CC' '\\u00CD' '\\u00CE' '\\u00CF'
 '\\u00D0' '\\u00D1' '\\u00D2' '\\u00D3' '\\u00D4' '\\u00D5' '\\u00D6' '\\u00D8'
 '\\u00D9' '\\u00DA' '\\u00DB' '\\u00DC' '\\u00DD' '\\u00DE'
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` Many other Unicode characters are uppercase too.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isUpperCase(int)`, `isUpperCase(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is uppercase;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isUpperCase(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character (Unicode code point) is an uppercase character.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A character is uppercase if its general category type, provided by
 `],
					[/* reference */ 'r', `#getType(int)`, `getType(codePoint)`],
					[/* text */ 't', `, is `],
					[/* inline code block */ 'i', `UPPERCASE_LETTER`],
					[/* text */ 't', `,
 or it has contributory property Other_Uppercase as defined by the Unicode Standard.
 `]
				]],
				[/* block */ 'b', `
 The following are examples of uppercase characters:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
 '\\u00C0' '\\u00C1' '\\u00C2' '\\u00C3' '\\u00C4' '\\u00C5' '\\u00C6' '\\u00C7'
 '\\u00C8' '\\u00C9' '\\u00CA' '\\u00CB' '\\u00CC' '\\u00CD' '\\u00CE' '\\u00CF'
 '\\u00D0' '\\u00D1' '\\u00D2' '\\u00D3' '\\u00D4' '\\u00D5' '\\u00D6' '\\u00D8'
 '\\u00D9' '\\u00DA' '\\u00DB' '\\u00DC' '\\u00DD' '\\u00DE'
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', ` Many other Unicode characters are uppercase too.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is uppercase;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isValidCodePoint(int)', [
			[/* method description */
				[/* text */ 't', `Determines whether the specified code point is a valid
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#code_point`, `Unicode code point value`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the Unicode code point to be tested`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the specified code point value is between
         `],
				[/* text */ 't', `MIN_CODE_POINT`],
				[/* text */ 't', ` and
         `],
				[/* text */ 't', `MAX_CODE_POINT`],
				[/* text */ 't', ` inclusive;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isWhitespace(char)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character is white space according to Java.
 A character is a Java whitespace character if and only if it satisfies
 one of the following criteria:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` It is a Unicode space character (`],
						[/* inline code block */ 'i', `SPACE_SEPARATOR`],
						[/* text */ 't', `,
      `],
						[/* inline code block */ 'i', `LINE_SEPARATOR`],
						[/* text */ 't', `, or `],
						[/* inline code block */ 'i', `PARAGRAPH_SEPARATOR`],
						[/* text */ 't', `)
      but is not also a non-breaking space (`],
						[/* inline code block */ 'i', `'\\u00A0'`],
						[/* text */ 't', `,
      `],
						[/* inline code block */ 'i', `'\\u2007'`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `'\\u202F'`],
						[/* text */ 't', `).
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\t'`],
						[/* text */ 't', `, U+0009 HORIZONTAL TABULATION.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\n'`],
						[/* text */ 't', `, U+000A LINE FEED.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\u000B'`],
						[/* text */ 't', `, U+000B VERTICAL TABULATION.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\f'`],
						[/* text */ 't', `, U+000C FORM FEED.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\r'`],
						[/* text */ 't', `, U+000D CARRIAGE RETURN.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\u001C'`],
						[/* text */ 't', `, U+001C FILE SEPARATOR.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\u001D'`],
						[/* text */ 't', `, U+001D GROUP SEPARATOR.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\u001E'`],
						[/* text */ 't', `, U+001E RECORD SEPARATOR.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\u001F'`],
						[/* text */ 't', `, U+001F UNIT SEPARATOR.
 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#isWhitespace(int)`, `isWhitespace(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is a Java whitespace
          character; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isWhitespace(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the specified character (Unicode code point) is
 white space according to Java.  A character is a Java
 whitespace character if and only if it satisfies one of the
 following criteria:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', ` It is a Unicode space character (`],
						[/* text */ 't', `SPACE_SEPARATOR`],
						[/* text */ 't', `,
      `],
						[/* text */ 't', `LINE_SEPARATOR`],
						[/* text */ 't', `, or `],
						[/* text */ 't', `PARAGRAPH_SEPARATOR`],
						[/* text */ 't', `)
      but is not also a non-breaking space (`],
						[/* inline code block */ 'i', `'\\u00A0'`],
						[/* text */ 't', `,
      `],
						[/* inline code block */ 'i', `'\\u2007'`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `'\\u202F'`],
						[/* text */ 't', `).
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\t'`],
						[/* text */ 't', `, U+0009 HORIZONTAL TABULATION.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\n'`],
						[/* text */ 't', `, U+000A LINE FEED.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\u000B'`],
						[/* text */ 't', `, U+000B VERTICAL TABULATION.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\f'`],
						[/* text */ 't', `, U+000C FORM FEED.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\r'`],
						[/* text */ 't', `, U+000D CARRIAGE RETURN.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\u001C'`],
						[/* text */ 't', `, U+001C FILE SEPARATOR.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\u001D'`],
						[/* text */ 't', `, U+001D GROUP SEPARATOR.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\u001E'`],
						[/* text */ 't', `, U+001E RECORD SEPARATOR.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', ` It is `],
						[/* inline code block */ 'i', `'\\u001F'`],
						[/* text */ 't', `, U+001F UNIT SEPARATOR.
 `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is a Java whitespace
          character; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'getDirectionality(char)', [
			[/* method description */
				[/* text */ 't', `Returns the Unicode directionality property for the given
 character.  Character directionality is used to calculate the
 visual ordering of text. The directionality value of undefined
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` values is `],
				[/* inline code block */ 'i', `DIRECTIONALITY_UNDEFINED`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#getDirectionality(int)`, `getDirectionality(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` for which the directionality property
            is requested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the directionality property of the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value.`]
			]
		]],
		[/* method */ 'getDirectionality(int)', [
			[/* method description */
				[/* text */ 't', `Returns the Unicode directionality property for the given
 character (Unicode code point).  Character directionality is
 used to calculate the visual ordering of text. The
 directionality value of undefined character is `],
				[/* text */ 't', `DIRECTIONALITY_UNDEFINED`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) for which
          the directionality property is requested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the directionality property of the character.`]
			]
		]],
		[/* method */ 'forDigit(int,int)', [
			[/* method description */
				[/* text */ 't', `Determines the character representation for a specific digit in
 the specified radix. If the value of `],
				[/* inline code block */ 'i', `radix`],
				[/* text */ 't', ` is not a
 valid radix, or the value of `],
				[/* inline code block */ 'i', `digit`],
				[/* text */ 't', ` is not a valid
 digit in the specified radix, the null character
 (`],
				[/* inline code block */ 'i', `'\\u0000'`],
				[/* text */ 't', `) is returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `radix`],
					[/* text */ 't', ` argument is valid if it is greater than or
 equal to `],
					[/* inline code block */ 'i', `MIN_RADIX`],
					[/* text */ 't', ` and less than or equal to
 `],
					[/* inline code block */ 'i', `MAX_RADIX`],
					[/* text */ 't', `. The `],
					[/* inline code block */ 'i', `digit`],
					[/* text */ 't', ` argument is valid if
 `],
					[/* inline code block */ 'i', `0 <= digit < radix`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the digit is less than 10, then
 `],
					[/* inline code block */ 'i', `'0' + digit`],
					[/* text */ 't', ` is returned. Otherwise, the value
 `],
					[/* inline code block */ 'i', `'a' + digit - 10`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'digit', [/* parameter description */
					[/* text */ 't', `the number to convert to a character.`]
				]],
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` representation of the specified digit
          in the specified radix.`]
			]
		]],
		[/* method */ 'highSurrogate(int)', [
			[/* method description */
				[/* text */ 't', `Returns the leading surrogate (a
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#high_surrogate_code_unit`, `high surrogate code unit`],
				[/* text */ 't', `) of the
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#surrogate_pair`, `surrogate pair`],
				[/* text */ 't', `
 representing the specified supplementary character (Unicode
 code point) in the UTF-16 encoding.  If the specified character
 is not a
 `],
				[/* reference */ 'r', `java.lang.Character#supplementary`, `supplementary character`],
				[/* text */ 't', `,
 an unspecified `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If
 `],
					[/* reference */ 'r', `#isSupplementaryCodePoint(int)`, `isSupplementaryCodePoint(x)`],
					[/* text */ 't', `
 is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, then
 `],
					[/* reference */ 'r', `#isHighSurrogate(char)`, `isHighSurrogate`],
					[/* inline code block */ 'i', `(highSurrogate(x))`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `#toCodePoint(char,char)`, `toCodePoint`],
					[/* inline code block */ 'i', `(highSurrogate(x),`],
					[/* reference */ 'r', `#lowSurrogate(int)`, `lowSurrogate`],
					[/* inline code block */ 'i', `(x)) == x`],
					[/* text */ 't', `
 are also always `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `a supplementary character (Unicode code point)`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the leading surrogate code unit used to represent the
          character in the UTF-16 encoding`]
			]
		]],
		[/* method */ 'lowSurrogate(int)', [
			[/* method description */
				[/* text */ 't', `Returns the trailing surrogate (a
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#low_surrogate_code_unit`, `low surrogate code unit`],
				[/* text */ 't', `) of the
 `],
				[/* external link */ 'a', `http://www.unicode.org/glossary/#surrogate_pair`, `surrogate pair`],
				[/* text */ 't', `
 representing the specified supplementary character (Unicode
 code point) in the UTF-16 encoding.  If the specified character
 is not a
 `],
				[/* reference */ 'r', `java.lang.Character#supplementary`, `supplementary character`],
				[/* text */ 't', `,
 an unspecified `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If
 `],
					[/* reference */ 'r', `#isSupplementaryCodePoint(int)`, `isSupplementaryCodePoint(x)`],
					[/* text */ 't', `
 is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, then
 `],
					[/* reference */ 'r', `#isLowSurrogate(char)`, `isLowSurrogate`],
					[/* inline code block */ 'i', `(lowSurrogate(x))`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `#toCodePoint(char,char)`, `toCodePoint`],
					[/* inline code block */ 'i', `(`],
					[/* reference */ 'r', `#highSurrogate(int)`, `highSurrogate`],
					[/* inline code block */ 'i', `(x), lowSurrogate(x)) == x`],
					[/* text */ 't', `
 are also always `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `a supplementary character (Unicode code point)`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the trailing surrogate code unit used to represent the
          character in the UTF-16 encoding`]
			]
		]],
		[/* method */ 'reverseBytes(char)', [
			[/* method description */
				[/* text */ 't', `Returns the value obtained by reversing the order of the bytes in the
 specified `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value.`]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` of which to reverse the byte order.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value obtained by reversing (or, equivalently, swapping)
     the bytes in the specified `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value.`]
			]
		]],
		[/* method */ 'toLowerCase(char)', [
			[/* method description */
				[/* text */ 't', `Converts the character argument to lowercase using case
 mapping information from the UnicodeData file.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that
 `],
					[/* inline code block */ 'i', `Character.isLowerCase(Character.toLowerCase(ch))`],
					[/* text */ 't', `
 does not always return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for some ranges of
 characters, particularly those that are symbols or ideographs.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `In general, `],
					[/* reference */ 'r', `java.lang.String#toLowerCase()`, `String.toLowerCase()`],
					[/* text */ 't', ` should be used to map
 characters to lowercase. `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` case mapping methods
 have several benefits over `],
					[/* inline code block */ 'i', `Character`],
					[/* text */ 't', ` case mapping methods.
 `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` case mapping methods can perform locale-sensitive
 mappings, context-sensitive mappings, and 1:M character mappings, whereas
 the `],
					[/* inline code block */ 'i', `Character`],
					[/* text */ 't', ` case mapping methods cannot.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#toLowerCase(int)`, `toLowerCase(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be converted.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the lowercase equivalent of the character, if any;
          otherwise, the character itself.`]
			]
		]],
		[/* method */ 'toTitleCase(char)', [
			[/* method description */
				[/* text */ 't', `Converts the character argument to titlecase using case mapping
 information from the UnicodeData file. If a character has no
 explicit titlecase mapping and is not itself a titlecase char
 according to UnicodeData, then the uppercase mapping is
 returned as an equivalent titlecase mapping. If the
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` argument is already a titlecase
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `, the same `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value will be
 returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that
 `],
					[/* inline code block */ 'i', `Character.isTitleCase(Character.toTitleCase(ch))`],
					[/* text */ 't', `
 does not always return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for some ranges of
 characters.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#toTitleCase(int)`, `toTitleCase(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be converted.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the titlecase equivalent of the character, if any;
          otherwise, the character itself.`]
			]
		]],
		[/* method */ 'toUpperCase(char)', [
			[/* method description */
				[/* text */ 't', `Converts the character argument to uppercase using case mapping
 information from the UnicodeData file.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that
 `],
					[/* inline code block */ 'i', `Character.isUpperCase(Character.toUpperCase(ch))`],
					[/* text */ 't', `
 does not always return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for some ranges of
 characters, particularly those that are symbols or ideographs.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `In general, `],
					[/* reference */ 'r', `java.lang.String#toUpperCase()`, `String.toUpperCase()`],
					[/* text */ 't', ` should be used to map
 characters to uppercase. `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` case mapping methods
 have several benefits over `],
					[/* inline code block */ 'i', `Character`],
					[/* text */ 't', ` case mapping methods.
 `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` case mapping methods can perform locale-sensitive
 mappings, context-sensitive mappings, and 1:M character mappings, whereas
 the `],
					[/* inline code block */ 'i', `Character`],
					[/* text */ 't', ` case mapping methods cannot.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#toUpperCase(int)`, `toUpperCase(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be converted.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the uppercase equivalent of the character, if any;
          otherwise, the character itself.`]
			]
		]],
		[/* method */ 'toChars(int)', [
			[/* method description */
				[/* text */ 't', `Converts the specified character (Unicode code point) to its
 UTF-16 representation stored in a `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array. If
 the specified code point is a BMP (Basic Multilingual Plane or
 Plane 0) value, the resulting `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array has
 the same value as `],
				[/* inline code block */ 'i', `codePoint`],
				[/* text */ 't', `. If the specified code
 point is a supplementary code point, the resulting
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array has the corresponding surrogate pair.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `a Unicode code point`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified
 `],
					[/* inline code block */ 'i', `codePoint`],
					[/* text */ 't', ` is not a valid Unicode code point.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array having
         `],
				[/* inline code block */ 'i', `codePoint`],
				[/* text */ 't', `'s UTF-16 representation.`]
			]
		]],
		[/* method */ 'charCount(int)', [
			[/* method description */
				[/* text */ 't', `Determines the number of `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` values needed to
 represent the specified character (Unicode code point). If the
 specified character is equal to or greater than 0x10000, then
 the method returns 2. Otherwise, the method returns 1.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method doesn't validate the specified character to be a
 valid Unicode code point. The caller must validate the
 character value using `],
					[/* reference */ 'r', `#isValidCodePoint(int)`, `isValidCodePoint`],
					[/* text */ 't', `
 if necessary.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `2 if the character is a valid supplementary character; 1 otherwise.`]
			]
		]],
		[/* method */ 'codePointAt(char[],int)', [
			[/* method description */
				[/* text */ 't', `Returns the code point at the given index of the
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array. If the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at
 the given index in the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array is in the
 high-surrogate range, the following index is less than the
 length of the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array, and the
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at the following index is in the
 low-surrogate range, then the supplementary code point
 corresponding to this surrogate pair is returned. Otherwise,
 the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at the given index is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index to the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` values (Unicode
 code units) in the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array to be converted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the value
 `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative or not less than
 the length of the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Unicode code point at the given index`]
			]
		]],
		[/* method */ 'codePointAt(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the code point at the given index of the
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array, where only array elements with
 `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` less than `],
				[/* inline code block */ 'i', `limit`],
				[/* text */ 't', ` can be used. If
 the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at the given index in the
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array is in the high-surrogate range, the
 following index is less than the `],
				[/* inline code block */ 'i', `limit`],
				[/* text */ 't', `, and the
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at the following index is in the
 low-surrogate range, then the supplementary code point
 corresponding to this surrogate pair is returned. Otherwise,
 the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at the given index is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index to the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` values (Unicode
 code units) in the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array to be converted`]
				]],
				[/* parameter */ 'limit', [/* parameter description */
					[/* text */ 't', `the index after the last array element that
 can be used in the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is negative or not less than the `],
					[/* inline code block */ 'i', `limit`],
					[/* text */ 't', `
 argument, or if the `],
					[/* inline code block */ 'i', `limit`],
					[/* text */ 't', ` argument is negative or
 greater than the length of the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Unicode code point at the given index`]
			]
		]],
		[/* method */ 'codePointAt(java.lang.CharSequence,int)', [
			[/* method description */
				[/* text */ 't', `Returns the code point at the given index of the
 `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', `. If the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at
 the given index in the `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', ` is in the
 high-surrogate range, the following index is less than the
 length of the `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', `, and the
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at the following index is in the
 low-surrogate range, then the supplementary code point
 corresponding to this surrogate pair is returned. Otherwise,
 the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at the given index is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'seq', [/* parameter description */
					[/* text */ 't', `a sequence of `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` values (Unicode code
 units)`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index to the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` values (Unicode
 code units) in `],
					[/* inline code block */ 'i', `seq`],
					[/* text */ 't', ` to be converted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `seq`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the value
 `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is negative or not less than
 `],
					[/* reference */ 'r', `java.lang.CharSequence#length()`, `seq.length()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Unicode code point at the given index`]
			]
		]],
		[/* method */ 'codePointBefore(char[],int)', [
			[/* method description */
				[/* text */ 't', `Returns the code point preceding the given index of the
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array. If the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at
 `],
				[/* inline code block */ 'i', `(index - 1)`],
				[/* text */ 't', ` in the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array is in
 the low-surrogate range, `],
				[/* inline code block */ 'i', `(index - 2)`],
				[/* text */ 't', ` is not
 negative, and the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at `],
				[/* inline code block */ 'i', `(index - 2)`],
				[/* text */ 't', `
 in the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array is in the
 high-surrogate range, then the supplementary code point
 corresponding to this surrogate pair is returned. Otherwise,
 the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at `],
				[/* inline code block */ 'i', `(index - 1)`],
				[/* text */ 't', ` is
 returned.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index following the code point that should be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is less than 1 or greater than the length of the
 `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Unicode code point value before the given index.`]
			]
		]],
		[/* method */ 'codePointBefore(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the code point preceding the given index of the
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array, where only array elements with
 `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` greater than or equal to `],
				[/* inline code block */ 'i', `start`],
				[/* text */ 't', `
 can be used. If the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at `],
				[/* inline code block */ 'i', `(index - 1)`],
				[/* text */ 't', `
 in the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array is in the
 low-surrogate range, `],
				[/* inline code block */ 'i', `(index - 2)`],
				[/* text */ 't', ` is not less than
 `],
				[/* inline code block */ 'i', `start`],
				[/* text */ 't', `, and the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at
 `],
				[/* inline code block */ 'i', `(index - 2)`],
				[/* text */ 't', ` in the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array is in
 the high-surrogate range, then the supplementary code point
 corresponding to this surrogate pair is returned. Otherwise,
 the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at `],
				[/* inline code block */ 'i', `(index - 1)`],
				[/* text */ 't', ` is
 returned.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index following the code point that should be returned`]
				]],
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `the index of the first array element in the
 `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is not greater than the `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` argument or
 is greater than the length of the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array, or
 if the `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` argument is negative or not less than
 the length of the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Unicode code point value before the given index.`]
			]
		]],
		[/* method */ 'codePointBefore(java.lang.CharSequence,int)', [
			[/* method description */
				[/* text */ 't', `Returns the code point preceding the given index of the
 `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', `. If the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at
 `],
				[/* inline code block */ 'i', `(index - 1)`],
				[/* text */ 't', ` in the `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', ` is in
 the low-surrogate range, `],
				[/* inline code block */ 'i', `(index - 2)`],
				[/* text */ 't', ` is not
 negative, and the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at `],
				[/* inline code block */ 'i', `(index - 2)`],
				[/* text */ 't', `
 in the `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', ` is in the
 high-surrogate range, then the supplementary code point
 corresponding to this surrogate pair is returned. Otherwise,
 the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at `],
				[/* inline code block */ 'i', `(index - 1)`],
				[/* text */ 't', ` is
 returned.`]
			],
			[/* parameters */
				[/* parameter */ 'seq', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `CharSequence`],
					[/* text */ 't', ` instance`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index following the code point that should be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `seq`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
 argument is less than 1 or greater than `],
					[/* reference */ 'r', `java.lang.CharSequence#length()`, `seq.length()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Unicode code point value before the given index.`]
			]
		]],
		[/* method */ 'codePointCount(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the number of Unicode code points in a subarray of the
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array argument. The `],
				[/* inline code block */ 'i', `offset`],
				[/* text */ 't', `
 argument is the index of the first `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` of the
 subarray and the `],
				[/* inline code block */ 'i', `count`],
				[/* text */ 't', ` argument specifies the
 length of the subarray in `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `s. Unpaired
 surrogates within the subarray count as one code point each.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the index of the first `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` in the
 given `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array`]
				]],
				[/* parameter */ 'count', [/* parameter description */
					[/* text */ 't', `the length of the subarray in `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `s`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` or
 `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` is negative, or if `],
					[/* inline code block */ 'i', `offset + count`],
					[/* text */ 't', ` is larger than the length of the given array.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of Unicode code points in the specified subarray`]
			]
		]],
		[/* method */ 'codePointCount(java.lang.CharSequence,int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the number of Unicode code points in the text range of
 the specified char sequence. The text range begins at the
 specified `],
				[/* inline code block */ 'i', `beginIndex`],
				[/* text */ 't', ` and extends to the
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` at index `],
				[/* inline code block */ 'i', `endIndex - 1`],
				[/* text */ 't', `. Thus the
 length (in `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `s) of the text range is
 `],
				[/* inline code block */ 'i', `endIndex-beginIndex`],
				[/* text */ 't', `. Unpaired surrogates within
 the text range count as one code point each.`]
			],
			[/* parameters */
				[/* parameter */ 'seq', [/* parameter description */
					[/* text */ 't', `the char sequence`]
				]],
				[/* parameter */ 'beginIndex', [/* parameter description */
					[/* text */ 't', `the index to the first `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` of
 the text range.`]
				]],
				[/* parameter */ 'endIndex', [/* parameter description */
					[/* text */ 't', `the index after the last `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` of
 the text range.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `seq`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the
 `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', `
 is larger than the length of the given sequence, or
 `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is larger than `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of Unicode code points in the specified text
 range`]
			]
		]],
		[/* method */ 'codePointOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the code point value of the Unicode character specified by
 the given Unicode character name.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note: if a character is not assigned a name by the `],
					[/* text */ 't', `UnicodeData`],
					[/* text */ 't', `
 file (part of the Unicode Character Database maintained by the Unicode
 Consortium), its name is defined as the result of expression:

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Character.UnicodeBlock.of(codePoint).toString().replace('_', ' ') + " " + Integer.toHexString(codePoint).toUpperCase(Locale.ROOT);`]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` matching is case insensitive, with any leading and
 trailing whitespace character removed.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the Unicode character name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', `
         is not a valid Unicode character name.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the code point value of the character specified by its name.`]
			]
		]],
		[/* method */ 'compare(char,char)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` values numerically.
 The value returned is identical to what would be returned by:
 `],
				[/* code block */ 'c', `    Character.valueOf(x).compareTo(Character.valueOf(y))
 `]
			],
			[/* parameters */
				[/* parameter */ 'x', [/* parameter description */
					[/* text */ 't', `the first `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` to compare`]
				]],
				[/* parameter */ 'y', [/* parameter description */
					[/* text */ 't', `the second `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `x == y`],
				[/* text */ 't', `;
         a value less than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `x < y`],
				[/* text */ 't', `; and
         a value greater than `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if `],
				[/* inline code block */ 'i', `x > y`]
			]
		]],
		[/* method */ 'digit(char,int)', [
			[/* method description */
				[/* text */ 't', `Returns the numeric value of the character `],
				[/* inline code block */ 'i', `ch`],
				[/* text */ 't', ` in the
 specified radix.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the radix is not in the range `],
					[/* inline code block */ 'i', `MIN_RADIX`],
					[/* text */ 't', ` ≤
 `],
					[/* inline code block */ 'i', `radix`],
					[/* text */ 't', ` ≤ `],
					[/* inline code block */ 'i', `MAX_RADIX`],
					[/* text */ 't', ` or if the
 value of `],
					[/* inline code block */ 'i', `ch`],
					[/* text */ 't', ` is not a valid digit in the specified
 radix, `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` is returned. A character is a valid digit
 if at least one of the following is true:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The method `],
						[/* inline code block */ 'i', `isDigit`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', ` of the character
     and the Unicode decimal digit value of the character (or its
     single-character decomposition) is less than the specified radix.
     In this case the decimal digit value is returned.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The character is one of the uppercase Latin letters
     `],
						[/* inline code block */ 'i', `'A'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'Z'`],
						[/* text */ 't', ` and its code is less than
     `],
						[/* inline code block */ 'i', `radix + 'A' - 10`],
						[/* text */ 't', `.
     In this case, `],
						[/* inline code block */ 'i', `ch - 'A' + 10`],
						[/* text */ 't', `
     is returned.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The character is one of the lowercase Latin letters
     `],
						[/* inline code block */ 'i', `'a'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'z'`],
						[/* text */ 't', ` and its code is less than
     `],
						[/* inline code block */ 'i', `radix + 'a' - 10`],
						[/* text */ 't', `.
     In this case, `],
						[/* inline code block */ 'i', `ch - 'a' + 10`],
						[/* text */ 't', `
     is returned.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The character is one of the fullwidth uppercase Latin letters A
     (`],
						[/* inline code block */ 'i', `'\\uFF21'`],
						[/* text */ 't', `) through Z (`],
						[/* inline code block */ 'i', `'\\uFF3A'`],
						[/* text */ 't', `)
     and its code is less than
     `],
						[/* inline code block */ 'i', `radix + '\\uFF21' - 10`],
						[/* text */ 't', `.
     In this case, `],
						[/* inline code block */ 'i', `ch - '\\uFF21' + 10`],
						[/* text */ 't', `
     is returned.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The character is one of the fullwidth lowercase Latin letters a
     (`],
						[/* inline code block */ 'i', `'\\uFF41'`],
						[/* text */ 't', `) through z (`],
						[/* inline code block */ 'i', `'\\uFF5A'`],
						[/* text */ 't', `)
     and its code is less than
     `],
						[/* inline code block */ 'i', `radix + '\\uFF41' - 10`],
						[/* text */ 't', `.
     In this case, `],
						[/* inline code block */ 'i', `ch - '\\uFF41' + 10`],
						[/* text */ 't', `
     is returned.
 `]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#digit(int,int)`, `digit(int, int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be converted.`]
				]],
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value represented by the character in the
          specified radix.`]
			]
		]],
		[/* method */ 'digit(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the numeric value of the specified character (Unicode
 code point) in the specified radix.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the radix is not in the range `],
					[/* inline code block */ 'i', `MIN_RADIX`],
					[/* text */ 't', ` ≤
 `],
					[/* inline code block */ 'i', `radix`],
					[/* text */ 't', ` ≤ `],
					[/* inline code block */ 'i', `MAX_RADIX`],
					[/* text */ 't', ` or if the
 character is not a valid digit in the specified
 radix, `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', ` is returned. A character is a valid digit
 if at least one of the following is true:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The method `],
						[/* reference */ 'r', `#isDigit(int)`, `isDigit(codePoint)`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', ` of the character
     and the Unicode decimal digit value of the character (or its
     single-character decomposition) is less than the specified radix.
     In this case the decimal digit value is returned.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The character is one of the uppercase Latin letters
     `],
						[/* inline code block */ 'i', `'A'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'Z'`],
						[/* text */ 't', ` and its code is less than
     `],
						[/* inline code block */ 'i', `radix + 'A' - 10`],
						[/* text */ 't', `.
     In this case, `],
						[/* inline code block */ 'i', `codePoint - 'A' + 10`],
						[/* text */ 't', `
     is returned.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The character is one of the lowercase Latin letters
     `],
						[/* inline code block */ 'i', `'a'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'z'`],
						[/* text */ 't', ` and its code is less than
     `],
						[/* inline code block */ 'i', `radix + 'a' - 10`],
						[/* text */ 't', `.
     In this case, `],
						[/* inline code block */ 'i', `codePoint - 'a' + 10`],
						[/* text */ 't', `
     is returned.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The character is one of the fullwidth uppercase Latin letters A
     (`],
						[/* inline code block */ 'i', `'\\uFF21'`],
						[/* text */ 't', `) through Z (`],
						[/* inline code block */ 'i', `'\\uFF3A'`],
						[/* text */ 't', `)
     and its code is less than
     `],
						[/* inline code block */ 'i', `radix + '\\uFF21' - 10`],
						[/* text */ 't', `.
     In this case,
     `],
						[/* inline code block */ 'i', `codePoint - '\\uFF21' + 10`],
						[/* text */ 't', `
     is returned.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The character is one of the fullwidth lowercase Latin letters a
     (`],
						[/* inline code block */ 'i', `'\\uFF41'`],
						[/* text */ 't', `) through z (`],
						[/* inline code block */ 'i', `'\\uFF5A'`],
						[/* text */ 't', `)
     and its code is less than
     `],
						[/* inline code block */ 'i', `radix + '\\uFF41'- 10`],
						[/* text */ 't', `.
     In this case,
     `],
						[/* inline code block */ 'i', `codePoint - '\\uFF41' + 10`],
						[/* text */ 't', `
     is returned.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be converted.`]
				]],
				[/* parameter */ 'radix', [/* parameter description */
					[/* text */ 't', `the radix.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value represented by the character in the
          specified radix.`]
			]
		]],
		[/* method */ 'getNumericValue(char)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value that the specified Unicode
 character represents. For example, the character
 `],
				[/* inline code block */ 'i', `'\\u216C'`],
				[/* text */ 't', ` (the roman numeral fifty) will return
 an int with a value of 50.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The letters A-Z in their uppercase (`],
					[/* inline code block */ 'i', `'\\u0041'`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `'\\u005A'`],
					[/* text */ 't', `), lowercase
 (`],
					[/* inline code block */ 'i', `'\\u0061'`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `'\\u007A'`],
					[/* text */ 't', `), and
 full width variant (`],
					[/* inline code block */ 'i', `'\\uFF21'`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `'\\uFF3A'`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `'\\uFF41'`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `'\\uFF5A'`],
					[/* text */ 't', `) forms have numeric values from 10
 through 35. This is independent of the Unicode specification,
 which does not assign numeric values to these `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `
 values.
 `]
				]],
				[/* block */ 'b', `
 If the character does not have a numeric value, then -1 is returned.
 If the character has a numeric value that cannot be represented as a
 nonnegative integer (for example, a fractional value), then -2
 is returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#getNumericValue(int)`, `getNumericValue(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be converted.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value of the character, as a nonnegative `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `
          value; -2 if the character has a numeric value but the value
          can not be represented as a nonnegative `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value;
          -1 if the character has no numeric value.`]
			]
		]],
		[/* method */ 'getNumericValue(int)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value that the specified
 character (Unicode code point) represents. For example, the character
 `],
				[/* inline code block */ 'i', `'\\u216C'`],
				[/* text */ 't', ` (the Roman numeral fifty) will return
 an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` with a value of 50.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The letters A-Z in their uppercase (`],
					[/* inline code block */ 'i', `'\\u0041'`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `'\\u005A'`],
					[/* text */ 't', `), lowercase
 (`],
					[/* inline code block */ 'i', `'\\u0061'`],
					[/* text */ 't', ` through `],
					[/* inline code block */ 'i', `'\\u007A'`],
					[/* text */ 't', `), and
 full width variant (`],
					[/* inline code block */ 'i', `'\\uFF21'`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `'\\uFF3A'`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `'\\uFF41'`],
					[/* text */ 't', ` through
 `],
					[/* inline code block */ 'i', `'\\uFF5A'`],
					[/* text */ 't', `) forms have numeric values from 10
 through 35. This is independent of the Unicode specification,
 which does not assign numeric values to these `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `
 values.
 `]
				]],
				[/* block */ 'b', `
 If the character does not have a numeric value, then -1 is returned.
 If the character has a numeric value that cannot be represented as a
 nonnegative integer (for example, a fractional value), then -2
 is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be converted.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value of the character, as a nonnegative `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `
          value; -2 if the character has a numeric value but the value
          can not be represented as a nonnegative `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value;
          -1 if the character has no numeric value.`]
			]
		]],
		[/* method */ 'getType(char)', [
			[/* method description */
				[/* text */ 't', `Returns a value indicating a character's general category.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note:`],
					[/* text */ 't', ` This method cannot handle `],
					[/* text */ 't', `supplementary characters`],
					[/* text */ 't', `. To support
 all Unicode characters, including supplementary characters, use
 the `],
					[/* reference */ 'r', `#getType(int)`, `getType(int)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the character to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a value of type `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` representing the
          character's general category.`]
			]
		]],
		[/* method */ 'getType(int)', [
			[/* method description */
				[/* text */ 't', `Returns a value indicating a character's general category.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be tested.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a value of type `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` representing the
          character's general category.`]
			]
		]],
		[/* method */ 'hashCode(char)', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for a `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value; compatible with
 `],
				[/* inline code block */ 'i', `Character.hashCode()`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` for which to return a hash code.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for a `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value.`]
			]
		]],
		[/* method */ 'offsetByCodePoints(char[],int,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the index within the given `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` subarray
 that is offset from the given `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` by
 `],
				[/* inline code block */ 'i', `codePointOffset`],
				[/* text */ 't', ` code points. The
 `],
				[/* inline code block */ 'i', `start`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `count`],
				[/* text */ 't', ` arguments specify a
 subarray of the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array. Unpaired surrogates
 within the text range given by `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `codePointOffset`],
				[/* text */ 't', ` count as one code point each.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array`]
				]],
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `the index of the first `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` of the
 subarray`]
				]],
				[/* parameter */ 'count', [/* parameter description */
					[/* text */ 't', `the length of the subarray in `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `s`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index to be offset`]
				]],
				[/* parameter */ 'codePointOffset', [/* parameter description */
					[/* text */ 't', `the offset in code points`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `count`],
					[/* text */ 't', ` is negative,
   or if `],
					[/* inline code block */ 'i', `start + count`],
					[/* text */ 't', ` is larger than the length of
   the given array,
   or if `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is less than `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` or
   larger then `],
					[/* inline code block */ 'i', `start + count`],
					[/* text */ 't', `,
   or if `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` is positive and the text range
   starting with `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` and ending with `],
					[/* inline code block */ 'i', `start + count - 1`],
					[/* text */ 't', `
   has fewer than `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` code
   points,
   or if `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` is negative and the text range
   starting with `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` and ending with `],
					[/* inline code block */ 'i', `index - 1`],
					[/* text */ 't', `
   has fewer than the absolute value of
   `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` code points.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index within the subarray`]
			]
		]],
		[/* method */ 'offsetByCodePoints(java.lang.CharSequence,int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the index within the given char sequence that is offset
 from the given `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` by `],
				[/* inline code block */ 'i', `codePointOffset`],
				[/* text */ 't', `
 code points. Unpaired surrogates within the text range given by
 `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `codePointOffset`],
				[/* text */ 't', ` count as
 one code point each.`]
			],
			[/* parameters */
				[/* parameter */ 'seq', [/* parameter description */
					[/* text */ 't', `the char sequence`]
				]],
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index to be offset`]
				]],
				[/* parameter */ 'codePointOffset', [/* parameter description */
					[/* text */ 't', `the offset in code points`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `seq`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
   is negative or larger then the length of the char sequence,
   or if `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` is positive and the
   subsequence starting with `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` has fewer than
   `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` code points, or if
   `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` is negative and the subsequence
   before `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` has fewer than the absolute value
   of `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` code points.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index within the char sequence`]
			]
		]],
		[/* method */ 'toChars(int,char[],int)', [
			[/* method description */
				[/* text */ 't', `Converts the specified character (Unicode code point) to its
 UTF-16 representation. If the specified code point is a BMP
 (Basic Multilingual Plane or Plane 0) value, the same value is
 stored in `],
				[/* inline code block */ 'i', `dst[dstIndex]`],
				[/* text */ 't', `, and 1 is returned. If the
 specified code point is a supplementary character, its
 surrogate values are stored in `],
				[/* inline code block */ 'i', `dst[dstIndex]`],
				[/* text */ 't', `
 (high-surrogate) and `],
				[/* inline code block */ 'i', `dst[dstIndex+1]`],
				[/* text */ 't', `
 (low-surrogate), and 2 is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be converted.`]
				]],
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `an array of `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` in which the
 `],
					[/* inline code block */ 'i', `codePoint`],
					[/* text */ 't', `'s UTF-16 value is stored.`]
				]],
				[/* parameter */ 'dstIndex', [/* parameter description */
					[/* text */ 't', `the start index into the `],
					[/* inline code block */ 'i', `dst`],
					[/* text */ 't', `
 array where the converted value is stored.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified
 `],
					[/* inline code block */ 'i', `codePoint`],
					[/* text */ 't', ` is not a valid Unicode code point.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the specified `],
					[/* inline code block */ 'i', `dst`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `dstIndex`],
					[/* text */ 't', `
 is negative or not less than `],
					[/* inline code block */ 'i', `dst.length`],
					[/* text */ 't', `, or if
 `],
					[/* inline code block */ 'i', `dst`],
					[/* text */ 't', ` at `],
					[/* inline code block */ 'i', `dstIndex`],
					[/* text */ 't', ` doesn't have enough
 array element(s) to store the resulting `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `
 value(s). (If `],
					[/* inline code block */ 'i', `dstIndex`],
					[/* text */ 't', ` is equal to
 `],
					[/* inline code block */ 'i', `dst.length-1`],
					[/* text */ 't', ` and the specified
 `],
					[/* inline code block */ 'i', `codePoint`],
					[/* text */ 't', ` is a supplementary character, the
 high-surrogate value is not stored in
 `],
					[/* inline code block */ 'i', `dst[dstIndex]`],
					[/* text */ 't', `.)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `1 if the code point is a BMP code point, 2 if the
 code point is a supplementary code point.`]
			]
		]],
		[/* method */ 'toCodePoint(char,char)', [
			[/* method description */
				[/* text */ 't', `Converts the specified surrogate pair to its supplementary code
 point value. This method does not validate the specified
 surrogate pair. The caller must validate it using `],
				[/* reference */ 'r', `#isSurrogatePair(char,char)`, `isSurrogatePair`],
				[/* text */ 't', ` if necessary.`]
			],
			[/* parameters */
				[/* parameter */ 'high', [/* parameter description */
					[/* text */ 't', `the high-surrogate code unit`]
				]],
				[/* parameter */ 'low', [/* parameter description */
					[/* text */ 't', `the low-surrogate code unit`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the supplementary code point composed from the
         specified surrogate pair.`]
			]
		]],
		[/* method */ 'toLowerCase(int)', [
			[/* method description */
				[/* text */ 't', `Converts the character (Unicode code point) argument to
 lowercase using case mapping information from the UnicodeData
 file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that
 `],
					[/* inline code block */ 'i', `Character.isLowerCase(Character.toLowerCase(codePoint))`],
					[/* text */ 't', `
 does not always return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for some ranges of
 characters, particularly those that are symbols or ideographs.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `In general, `],
					[/* reference */ 'r', `java.lang.String#toLowerCase()`, `String.toLowerCase()`],
					[/* text */ 't', ` should be used to map
 characters to lowercase. `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` case mapping methods
 have several benefits over `],
					[/* inline code block */ 'i', `Character`],
					[/* text */ 't', ` case mapping methods.
 `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` case mapping methods can perform locale-sensitive
 mappings, context-sensitive mappings, and 1:M character mappings, whereas
 the `],
					[/* inline code block */ 'i', `Character`],
					[/* text */ 't', ` case mapping methods cannot.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be converted.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the lowercase equivalent of the character (Unicode code
          point), if any; otherwise, the character itself.`]
			]
		]],
		[/* method */ 'toTitleCase(int)', [
			[/* method description */
				[/* text */ 't', `Converts the character (Unicode code point) argument to titlecase using case mapping
 information from the UnicodeData file. If a character has no
 explicit titlecase mapping and is not itself a titlecase char
 according to UnicodeData, then the uppercase mapping is
 returned as an equivalent titlecase mapping. If the
 character argument is already a titlecase
 character, the same character value will be
 returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that
 `],
					[/* inline code block */ 'i', `Character.isTitleCase(Character.toTitleCase(codePoint))`],
					[/* text */ 't', `
 does not always return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for some ranges of
 characters.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be converted.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the titlecase equivalent of the character, if any;
          otherwise, the character itself.`]
			]
		]],
		[/* method */ 'toUpperCase(int)', [
			[/* method description */
				[/* text */ 't', `Converts the character (Unicode code point) argument to
 uppercase using case mapping information from the UnicodeData
 file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that
 `],
					[/* inline code block */ 'i', `Character.isUpperCase(Character.toUpperCase(codePoint))`],
					[/* text */ 't', `
 does not always return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for some ranges of
 characters, particularly those that are symbols or ideographs.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `In general, `],
					[/* reference */ 'r', `java.lang.String#toUpperCase()`, `String.toUpperCase()`],
					[/* text */ 't', ` should be used to map
 characters to uppercase. `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` case mapping methods
 have several benefits over `],
					[/* inline code block */ 'i', `Character`],
					[/* text */ 't', ` case mapping methods.
 `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` case mapping methods can perform locale-sensitive
 mappings, context-sensitive mappings, and 1:M character mappings, whereas
 the `],
					[/* inline code block */ 'i', `Character`],
					[/* text */ 't', ` case mapping methods cannot.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point) to be converted.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the uppercase equivalent of the character, if any;
          otherwise, the character itself.`]
			]
		]],
		[/* method */ 'valueOf(char)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', ` instance representing the specified
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value.
 If a new `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', ` instance is not required, this method
 should generally be used in preference to the constructor
 `],
				[/* reference */ 'r', `#%3Cinit%3E(char)`, `Character(char)`],
				[/* text */ 't', `, as this method is likely to yield
 significantly better space and time performance by caching
 frequently requested values.

 This method will always cache values in the range `],
				[/* inline code block */ 'i', `'\\u0000'`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `'\\u007F'`],
				[/* text */ 't', `, inclusive, and may
 cache other values outside of this range.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `a char value.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Character`],
				[/* text */ 't', ` instance representing `],
				[/* inline code block */ 'i', `c`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getName(int)', [
			[/* method description */
				[/* text */ 't', `Returns the Unicode name of the specified character
 `],
				[/* inline code block */ 'i', `codePoint`],
				[/* text */ 't', `, or null if the code point is
 `],
				[/* text */ 't', `unassigned`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note: if the specified character is not assigned a name by
 the `],
					[/* text */ 't', `UnicodeData`],
					[/* text */ 't', ` file (part of the Unicode Character
 Database maintained by the Unicode Consortium), the returned
 name is the same as the result of expression:

 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Character.UnicodeBlock.of(codePoint).toString().replace('_', ' ') + " " + Integer.toHexString(codePoint).toUpperCase(Locale.ROOT);`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the character (Unicode code point)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified
            `],
					[/* inline code block */ 'i', `codePoint`],
					[/* text */ 't', ` is not a valid Unicode
            code point.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Unicode name of the specified character, or null if
         the code point is unassigned.`]
			]
		]],
		[/* method */ 'toString(char)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object representing the
 specified `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `.  The result is a string of length
 1 consisting solely of the specified `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` to be converted`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string representation of the specified `],
				[/* inline code block */ 'i', `char`]
			]
		]],
		[/* method */ 'toString(int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object representing the
 specified character (Unicode code point).  The result is a string of
 length 1 or 2, consisting solely of the specified `],
				[/* inline code block */ 'i', `codePoint`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `codePoint`],
					[/* text */ 't', ` to be converted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified
      `],
					[/* inline code block */ 'i', `codePoint`],
					[/* text */ 't', ` is not a `],
					[/* reference */ 'r', `#isValidCodePoint(int)`, `valid Unicode code point`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the string representation of the specified `],
				[/* inline code block */ 'i', `codePoint`]
			]
		]]
	],
]);
