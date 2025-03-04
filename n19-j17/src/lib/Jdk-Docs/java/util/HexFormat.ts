import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.HexFormat', [
	[/* class description */
		[/* inline code block */ 'i', `HexFormat`],
		[/* text */ 't', ` converts between bytes and chars and hex-encoded strings which may include
 additional formatting markup such as prefixes, suffixes, and delimiters.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 There are two factories of `],
			[/* inline code block */ 'i', `HexFormat`],
			[/* text */ 't', ` with preset parameters `],
			[/* reference */ 'r', `#of()`, `of()`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#ofDelimiter(java.lang.String)`, `ofDelimiter(delimiter)`],
			[/* text */ 't', `. For other parameter combinations
 the `],
			[/* inline code block */ 'i', `withXXX`],
			[/* text */ 't', ` methods return copies of `],
			[/* inline code block */ 'i', `HexFormat`],
			[/* text */ 't', ` modified
 `],
			[/* reference */ 'r', `#withPrefix(java.lang.String)`, `withPrefix(String)`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#withSuffix(java.lang.String)`, `withSuffix(String)`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#withDelimiter(java.lang.String)`, `withDelimiter(String)`],
			[/* text */ 't', `
 or choice of `],
			[/* reference */ 'r', `#withUpperCase()`, `withUpperCase()`],
			[/* text */ 't', ` or `],
			[/* reference */ 'r', `#withLowerCase()`, `withLowerCase()`],
			[/* text */ 't', ` parameters.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 For primitive to hexadecimal string conversions the `],
			[/* inline code block */ 'i', `toHexDigits`],
			[/* text */ 't', `
 methods include `],
			[/* reference */ 'r', `#toHexDigits(long)`, `toHexDigits(byte)`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#toHexDigits(long)`, `toHexDigits(int)`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `#toHexDigits(long)`, `toHexDigits(long)`],
			[/* text */ 't', `, etc. The default is to use lowercase characters `],
			[/* inline code block */ 'i', `"0-9","a-f"`],
			[/* text */ 't', `.
 For conversions producing uppercase hexadecimal the characters are `],
			[/* inline code block */ 'i', `"0-9","A-F"`],
			[/* text */ 't', `.
 Only the `],
			[/* reference */ 'r', `#isUpperCase()`, `HexFormat.isUpperCase()`],
			[/* text */ 't', ` parameter is
 considered; the delimiter, prefix and suffix are not used.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 For hexadecimal string to primitive conversions the `],
			[/* inline code block */ 'i', `fromHexDigits`],
			[/* text */ 't', `
 methods include `],
			[/* reference */ 'r', `#fromHexDigits(java.lang.CharSequence)`, `fromHexDigits(string)`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#fromHexDigitsToLong(java.lang.CharSequence)`, `fromHexDigitsToLong(string)`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `#fromHexDigit(int)`, `fromHexDigit(int)`],
			[/* text */ 't', ` converts a single character or codepoint.
 For conversions from hexadecimal characters the digits and uppercase and lowercase
 characters in `],
			[/* inline code block */ 'i', `"0-9", "a-f", and "A-F"`],
			[/* text */ 't', ` are converted to corresponding values
 `],
			[/* inline code block */ 'i', `0-15`],
			[/* text */ 't', `. The delimiter, prefix, suffix, and uppercase parameters are not used.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 For byte array to formatted hexadecimal string conversions
 the `],
			[/* inline code block */ 'i', `formatHex`],
			[/* text */ 't', ` methods include `],
			[/* reference */ 'r', `#formatHex(byte%5B%5D)`, `formatHex(byte[])`],
			[/* text */ 't', `
 and `],
			[/* reference */ 'r', `#formatHex(A,byte%5B%5D)`, `formatHex(Appendable, byte[])`],
			[/* text */ 't', `.
 The formatted output is a string or is appended to an `],
			[/* reference */ 'r', `java.lang.Appendable`],
			[/* text */ 't', ` such as
 `],
			[/* reference */ 'r', `java.lang.StringBuilder`],
			[/* text */ 't', ` or `],
			[/* reference */ 'r', `java.io.PrintStream`],
			[/* text */ 't', `.
 Each byte value is formatted as the prefix, two hexadecimal characters from the
 uppercase or lowercase digits, and the suffix.
 A delimiter follows each formatted value, except the last.
 For conversions producing uppercase hexadecimal strings use `],
			[/* reference */ 'r', `#withUpperCase()`, `withUpperCase()`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 For formatted hexadecimal string to byte array conversions the
 `],
			[/* inline code block */ 'i', `parseHex`],
			[/* text */ 't', ` methods include `],
			[/* reference */ 'r', `#parseHex(java.lang.CharSequence)`, `parseHex(CharSequence)`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#parseHex(char%5B%5D,int,int)`, `parseHex(char[], offset, length)`],
			[/* text */ 't', `.
 Each byte value is parsed from the prefix, two case insensitive hexadecimal characters,
 and the suffix. A delimiter follows each formatted value, except the last.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'formatHex(java.lang.Appendable,byte[])', [
			[/* method description */
				[/* text */ 't', `Appends formatted hexadecimal strings from a byte array to the `],
				[/* reference */ 'r', `java.lang.Appendable`],
				[/* text */ 't', `.
 Each byte value is formatted as the prefix, two hexadecimal characters
 `],
				[/* reference */ 'r', `#isUpperCase()`, `selected from`],
				[/* text */ 't', ` uppercase or lowercase digits, and the suffix.
 A delimiter follows each formatted value, except the last.
 The formatted hexadecimal strings are appended in zero or more calls to the `],
				[/* reference */ 'r', `java.lang.Appendable`],
				[/* text */ 't', ` methods.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `Appendable`],
					[/* text */ 't', `, non-null`]
				]],
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `a byte array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.UncheckedIOException', [/* throw description */
					[/* text */ 't', `if an I/O exception occurs appending to the output`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Appendable`]
			]
		]],
		[/* method */ 'formatHex(java.lang.Appendable,byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Appends formatted hexadecimal strings from a byte array range to the `],
				[/* reference */ 'r', `java.lang.Appendable`],
				[/* text */ 't', `.
 Each byte value is formatted as the prefix, two hexadecimal characters
 `],
				[/* reference */ 'r', `#isUpperCase()`, `selected from`],
				[/* text */ 't', ` uppercase or lowercase digits, and the suffix.
 A delimiter follows each formatted value, except the last.
 The formatted hexadecimal strings are appended in zero or more calls to the `],
				[/* reference */ 'r', `java.lang.Appendable`],
				[/* text */ 't', ` methods.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `Appendable`],
					[/* text */ 't', `, non-null`]
				]],
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `a byte array, non-null`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the initial index of the range, inclusive`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the final index of the range, exclusive.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the array range is out of bounds`]
				]],
				[/* throw */ 'java.io.UncheckedIOException', [/* throw description */
					[/* text */ 't', `if an I/O exception occurs appending to the output`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Appendable`]
			]
		]],
		[/* method */ 'toHexDigits(java.lang.Appendable,byte)', [
			[/* method description */
				[/* text */ 't', `Appends two hexadecimal characters for the byte value to the `],
				[/* reference */ 'r', `java.lang.Appendable`],
				[/* text */ 't', `.
 Each nibble (4 bits) from most significant to least significant of the value
 is formatted as if by `],
				[/* reference */ 'r', `#toLowHexDigit(int)`, `toLowHexDigit(nibble)`],
				[/* text */ 't', `.
 The hexadecimal characters are appended in one or more calls to the
 `],
				[/* reference */ 'r', `java.lang.Appendable`],
				[/* text */ 't', ` methods. The delimiter, prefix and suffix are not used.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `Appendable`],
					[/* text */ 't', `, non-null`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `a byte value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.UncheckedIOException', [/* throw description */
					[/* text */ 't', `if an I/O exception occurs appending to the output`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Appendable`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the other object is a `],
				[/* inline code block */ 'i', `HexFormat`],
				[/* text */ 't', `
 with the same parameters.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `an object, may be null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the other object is a `],
				[/* inline code block */ 'i', `HexFormat`],
				[/* text */ 't', ` and the parameters
         uppercase, delimiter, prefix, and suffix are equal;
         otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'isUpperCase()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the hexadecimal digits are uppercase,
 otherwise `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the hexadecimal digits are uppercase,
          otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'parseHex(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a byte array containing hexadecimal values parsed from
 a range of the character array.

 Each byte value is parsed from the prefix, two case insensitive hexadecimal characters,
 and the suffix. A delimiter follows each formatted value, except the last.
 The delimiters, prefixes, and suffixes strings must be present; they may be empty strings.
 A valid character array range consists only of the above format.`]
			],
			[/* parameters */
				[/* parameter */ 'chars', [/* parameter description */
					[/* text */ 't', `a character array range containing an even number of hexadecimal digits,
          delimiters, prefix, and suffix.`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the initial index of the range, inclusive`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the final index of the range, exclusive.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the prefix or suffix is not present for each byte value,
          the byte values are not hexadecimal characters, or if the delimiter is not present
          after all but the last byte value`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the character array range is out of bounds`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a byte array with the values parsed from the character array range`]
			]
		]],
		[/* method */ 'parseHex(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Returns a byte array containing hexadecimal values parsed from the string.

 Each byte value is parsed from the prefix, two case insensitive hexadecimal characters,
 and the suffix. A delimiter follows each formatted value, except the last.
 The delimiters, prefixes, and suffixes strings must be present; they may be empty strings.
 A valid string consists only of the above format.`]
			],
			[/* parameters */
				[/* parameter */ 'string', [/* parameter description */
					[/* text */ 't', `a string containing the byte values with prefix, hexadecimal digits, suffix,
            and delimiters`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the prefix or suffix is not present for each byte value,
          the byte values are not hexadecimal characters, or if the delimiter is not present
          after all but the last byte value`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a byte array with the values parsed from the string`]
			]
		]],
		[/* method */ 'parseHex(java.lang.CharSequence,int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a byte array containing hexadecimal values parsed from a range of the string.

 Each byte value is parsed from the prefix, two case insensitive hexadecimal characters,
 and the suffix. A delimiter follows each formatted value, except the last.
 The delimiters, prefixes, and suffixes strings must be present; they may be empty strings.
 A valid string consists only of the above format.`]
			],
			[/* parameters */
				[/* parameter */ 'string', [/* parameter description */
					[/* text */ 't', `a string range containing hexadecimal digits,
           delimiters, prefix, and suffix.`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the initial index of the range, inclusive`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the final index of the range, exclusive.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the prefix or suffix is not present for each byte value,
          the byte values are not hexadecimal characters, or if the delimiter is not present
          after all but the last byte value`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the string range is out of bounds`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a byte array with the values parsed from the string range`]
			]
		]],
		[/* method */ 'toHighHexDigit(int)', [
			[/* method description */
				[/* text */ 't', `Returns the hexadecimal character for the high 4 bits of the value considering it to be a byte.
 If the parameter `],
				[/* reference */ 'r', `#isUpperCase()`, `isUpperCase()`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` the
 character returned for values `],
				[/* inline code block */ 'i', `10-15`],
				[/* text */ 't', ` is uppercase `],
				[/* inline code block */ 'i', `"A-F"`],
				[/* text */ 't', `,
 otherwise the character returned is lowercase `],
				[/* inline code block */ 'i', `"a-f"`],
				[/* text */ 't', `.
 The values in the range `],
				[/* inline code block */ 'i', `0-9`],
				[/* text */ 't', ` are returned as `],
				[/* inline code block */ 'i', `"0-9"`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `a value, only bits `],
					[/* inline code block */ 'i', `4-7`],
					[/* text */ 't', ` of the value are used`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hexadecimal character for the bits `],
				[/* inline code block */ 'i', `4-7`],
				[/* text */ 't', ` of the value`]
			]
		]],
		[/* method */ 'toLowHexDigit(int)', [
			[/* method description */
				[/* text */ 't', `Returns the hexadecimal character for the low 4 bits of the value considering it to be a byte.
 If the parameter `],
				[/* reference */ 'r', `#isUpperCase()`, `isUpperCase()`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` the
 character returned for values `],
				[/* inline code block */ 'i', `10-15`],
				[/* text */ 't', ` is uppercase `],
				[/* inline code block */ 'i', `"A-F"`],
				[/* text */ 't', `,
 otherwise the character returned is lowercase `],
				[/* inline code block */ 'i', `"a-f"`],
				[/* text */ 't', `.
 The values in the range `],
				[/* inline code block */ 'i', `0-9`],
				[/* text */ 't', ` are returned as `],
				[/* inline code block */ 'i', `"0-9"`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `a value, only the low 4 bits `],
					[/* inline code block */ 'i', `0-3`],
					[/* text */ 't', ` of the value are used`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hexadecimal character for the low 4 bits `],
				[/* inline code block */ 'i', `0-3`],
				[/* text */ 't', ` of the value`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hashcode for this `],
				[/* inline code block */ 'i', `HexFormat`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hashcode for this `],
				[/* inline code block */ 'i', `HexFormat`]
			]
		]],
		[/* method */ 'delimiter()', [
			[/* method description */
				[/* text */ 't', `Returns the delimiter between hexadecimal values in formatted hexadecimal strings.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the delimiter, non-null, may be empty `],
				[/* inline code block */ 'i', `""`]
			]
		]],
		[/* method */ 'formatHex(byte[])', [
			[/* method description */
				[/* text */ 't', `Returns a hexadecimal string formatted from a byte array.
 Each byte value is formatted as the prefix, two hexadecimal characters
 `],
				[/* reference */ 'r', `#isUpperCase()`, `selected from`],
				[/* text */ 't', ` uppercase or lowercase digits, and the suffix.
 A delimiter follows each formatted value, except the last.

 The behavior is equivalent to
 `],
				[/* reference */ 'r', `#formatHex(byte%5B%5D,int,int)`, `formatHex(bytes, 0, bytes.length))`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `a non-null array of bytes`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string hexadecimal formatting of the byte array`]
			]
		]],
		[/* method */ 'formatHex(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a hexadecimal string formatted from a byte array range.
 Each byte value is formatted as the prefix, two hexadecimal characters
 `],
				[/* reference */ 'r', `#isUpperCase()`, `selected from`],
				[/* text */ 't', ` uppercase or lowercase digits, and the suffix.
 A delimiter follows each formatted value, except the last.`]
			],
			[/* parameters */
				[/* parameter */ 'bytes', [/* parameter description */
					[/* text */ 't', `a non-null array of bytes`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the initial index of the range, inclusive`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the final index of the range, exclusive`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the array range is out of bounds`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a string hexadecimal formatting each byte of the array range`]
			]
		]],
		[/* method */ 'prefix()', [
			[/* method description */
				[/* text */ 't', `Returns the prefix used for each hexadecimal value in formatted hexadecimal strings.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the prefix, non-null, may be empty `],
				[/* inline code block */ 'i', `""`]
			]
		]],
		[/* method */ 'suffix()', [
			[/* method description */
				[/* text */ 't', `Returns the suffix used for each hexadecimal value in formatted hexadecimal strings.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the suffix, non-null, may be empty `],
				[/* inline code block */ 'i', `""`]
			]
		]],
		[/* method */ 'toHexDigits(byte)', [
			[/* method description */
				[/* text */ 't', `Returns the two hexadecimal characters for the `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', ` value.
 Each nibble (4 bits) from most significant to least significant of the value
 is formatted as if by `],
				[/* reference */ 'r', `#toLowHexDigit(int)`, `toLowHexDigit(nibble)`],
				[/* text */ 't', `.
 The delimiter, prefix and suffix are not used.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `a byte value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the two hexadecimal characters for the byte value`]
			]
		]],
		[/* method */ 'toHexDigits(char)', [
			[/* method description */
				[/* text */ 't', `Returns the four hexadecimal characters for the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value.
 Each nibble (4 bits) from most significant to least significant of the value
 is formatted as if by `],
				[/* reference */ 'r', `#toLowHexDigit(int)`, `toLowHexDigit(nibble)`],
				[/* text */ 't', `.
 The delimiter, prefix and suffix are not used.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the four hexadecimal characters for the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value`]
			]
		]],
		[/* method */ 'toHexDigits(int)', [
			[/* method description */
				[/* text */ 't', `Returns the eight hexadecimal characters for the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.
 Each nibble (4 bits) from most significant to least significant of the value
 is formatted as if by `],
				[/* reference */ 'r', `#toLowHexDigit(int)`, `toLowHexDigit(nibble)`],
				[/* text */ 't', `.
 The delimiter, prefix and suffix are not used.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the eight hexadecimal characters for the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value`]
			]
		]],
		[/* method */ 'toHexDigits(long)', [
			[/* method description */
				[/* text */ 't', `Returns the sixteen hexadecimal characters for the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.
 Each nibble (4 bits) from most significant to least significant of the value
 is formatted as if by `],
				[/* reference */ 'r', `#toLowHexDigit(int)`, `toLowHexDigit(nibble)`],
				[/* text */ 't', `.
 The delimiter, prefix and suffix are not used.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the sixteen hexadecimal characters for the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value`]
			]
		]],
		[/* method */ 'toHexDigits(long,int)', [
			[/* method description */
				[/* text */ 't', `Returns up to sixteen hexadecimal characters for the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value.
 Each nibble (4 bits) from most significant to least significant of the value
 is formatted as if by `],
				[/* reference */ 'r', `#toLowHexDigit(int)`, `toLowHexDigit(nibble)`],
				[/* text */ 't', `.
 The delimiter, prefix and suffix are not used.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` value`]
				]],
				[/* parameter */ 'digits', [/* parameter description */
					[/* text */ 't', `the number of hexadecimal digits to return, 0 to 16`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `digits`],
					[/* text */ 't', ` is negative or greater than 16`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the hexadecimal characters for the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` value`]
			]
		]],
		[/* method */ 'toHexDigits(short)', [
			[/* method description */
				[/* text */ 't', `Returns the four hexadecimal characters for the `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value.
 Each nibble (4 bits) from most significant to least significant of the value
 is formatted as if by `],
				[/* reference */ 'r', `#toLowHexDigit(int)`, `toLowHexDigit(nibble)`],
				[/* text */ 't', `.
 The delimiter, prefix and suffix are not used.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `short`],
					[/* text */ 't', ` value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the four hexadecimal characters for the `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` value`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a description of the formatter parameters for uppercase,
 delimiter, prefix, and suffix.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a description of this `],
				[/* inline code block */ 'i', `HexFormat`]
			]
		]],
		[/* method */ 'withDelimiter(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `HexFormat`],
				[/* text */ 't', ` with the delimiter.`]
			],
			[/* parameters */
				[/* parameter */ 'delimiter', [/* parameter description */
					[/* text */ 't', `the delimiter, non-null, may be empty`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a copy of this `],
				[/* inline code block */ 'i', `HexFormat`],
				[/* text */ 't', ` with the delimiter`]
			]
		]],
		[/* method */ 'withLowerCase()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `HexFormat`],
				[/* text */ 't', ` to use lowercase hexadecimal characters.
 The lowercase hexadecimal characters are `],
				[/* inline code block */ 'i', `"0-9", "a-f"`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a copy of this `],
				[/* inline code block */ 'i', `HexFormat`],
				[/* text */ 't', ` with lowercase hexadecimal characters`]
			]
		]],
		[/* method */ 'withPrefix(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `HexFormat`],
				[/* text */ 't', ` with the prefix.`]
			],
			[/* parameters */
				[/* parameter */ 'prefix', [/* parameter description */
					[/* text */ 't', `a prefix, non-null, may be empty`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a copy of this `],
				[/* inline code block */ 'i', `HexFormat`],
				[/* text */ 't', ` with the prefix`]
			]
		]],
		[/* method */ 'withSuffix(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `HexFormat`],
				[/* text */ 't', ` with the suffix.`]
			],
			[/* parameters */
				[/* parameter */ 'suffix', [/* parameter description */
					[/* text */ 't', `a suffix, non-null, may be empty`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a copy of this `],
				[/* inline code block */ 'i', `HexFormat`],
				[/* text */ 't', ` with the suffix`]
			]
		]],
		[/* method */ 'withUpperCase()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `HexFormat`],
				[/* text */ 't', ` to use uppercase hexadecimal characters.
 The uppercase hexadecimal characters are `],
				[/* inline code block */ 'i', `"0-9", "A-F"`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a copy of this `],
				[/* inline code block */ 'i', `HexFormat`],
				[/* text */ 't', ` with uppercase hexadecimal characters`]
			]
		]],
		[/* method */ 'isHexDigit(int)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is a valid hexadecimal character or codepoint.
 The valid hexadecimal characters are:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `'0' ('\\u0030')`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'9' ('\\u0039')`],
						[/* text */ 't', ` inclusive,
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `'A' ('\\u0041')`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'F' ('\\u0046')`],
						[/* text */ 't', ` inclusive, and
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `'a' ('\\u0061')`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'f' ('\\u0066')`],
						[/* text */ 't', ` inclusive.
 `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `a codepoint`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the character is valid a hexadecimal character,
          otherwise `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'fromHexDigit(int)', [
			[/* method description */
				[/* text */ 't', `Returns the value for the hexadecimal character or codepoint.
 The value is:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `(ch - '0')`],
						[/* text */ 't', ` for `],
						[/* inline code block */ 'i', `'0'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'9'`],
						[/* text */ 't', ` inclusive,
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `(ch - 'A' + 10)`],
						[/* text */ 't', ` for `],
						[/* inline code block */ 'i', `'A'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'F'`],
						[/* text */ 't', ` inclusive, and
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `(ch - 'a' + 10)`],
						[/* text */ 't', ` for `],
						[/* inline code block */ 'i', `'a'`],
						[/* text */ 't', ` through `],
						[/* inline code block */ 'i', `'f'`],
						[/* text */ 't', ` inclusive.
 `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `a character or codepoint`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `if the codepoint is not a hexadecimal character`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0-15`]
			]
		]],
		[/* method */ 'fromHexDigits(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value parsed from a string of up to eight hexadecimal characters.
 The hexadecimal characters are parsed from most significant to least significant
 using `],
				[/* reference */ 'r', `#fromHexDigit(int)`, `fromHexDigit(int)`],
				[/* text */ 't', ` to form an unsigned value.
 The value is zero extended to 32 bits and is returned as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'string', [/* parameter description */
					[/* text */ 't', `a CharSequence containing up to eight hexadecimal characters`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the string length is greater than eight (8) or
      if any of the characters is not a hexadecimal character`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value parsed from the string`]
			]
		]],
		[/* method */ 'fromHexDigits(java.lang.CharSequence,int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value parsed from a string range of up to eight hexadecimal
 characters.
 The characters in the range `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive,
 are parsed from most significant to least significant
 using `],
				[/* reference */ 'r', `#fromHexDigit(int)`, `fromHexDigit(int)`],
				[/* text */ 't', ` to form an unsigned value.
 The value is zero extended to 32 bits and is returned as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'string', [/* parameter description */
					[/* text */ 't', `a CharSequence containing the characters`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the initial index of the range, inclusive`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the final index of the range, exclusive.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the range is out of bounds
          for the `],
					[/* inline code block */ 'i', `CharSequence`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if length of the range is greater than eight (8) or
          if any of the characters is not a hexadecimal character`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value parsed from the string range`]
			]
		]],
		[/* method */ 'of()', [
			[/* method description */
				[/* text */ 't', `Returns a hexadecimal formatter with no delimiter and lowercase characters.
 The delimiter, prefix, and suffix are empty.
 The methods `],
				[/* reference */ 'r', `#withDelimiter(java.lang.String)`, `withDelimiter`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#withUpperCase()`, `withUpperCase`],
				[/* text */ 't', `, `],
				[/* reference */ 'r', `#withLowerCase()`, `withLowerCase`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#withPrefix(java.lang.String)`, `withPrefix`],
				[/* text */ 't', `, and `],
				[/* reference */ 'r', `#withSuffix(java.lang.String)`, `withSuffix`],
				[/* text */ 't', `
 return copies of formatters with new parameters.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hexadecimal formatter with no delimiter and lowercase characters`]
			]
		]],
		[/* method */ 'ofDelimiter(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a hexadecimal formatter with the delimiter and lowercase characters.
 The prefix and suffix are empty.
 The methods `],
				[/* reference */ 'r', `#withDelimiter(java.lang.String)`, `withDelimiter`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#withUpperCase()`, `withUpperCase`],
				[/* text */ 't', `, `],
				[/* reference */ 'r', `#withLowerCase()`, `withLowerCase`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#withPrefix(java.lang.String)`, `withPrefix`],
				[/* text */ 't', `, and `],
				[/* reference */ 'r', `#withSuffix(java.lang.String)`, `withSuffix`],
				[/* text */ 't', `
 return copies of formatters with new parameters.`]
			],
			[/* parameters */
				[/* parameter */ 'delimiter', [/* parameter description */
					[/* text */ 't', `a delimiter, non-null, may be empty`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.util.HexFormat`],
				[/* text */ 't', ` with the delimiter and lowercase characters`]
			]
		]],
		[/* method */ 'fromHexDigitsToLong(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Returns the long value parsed from a string of up to sixteen hexadecimal characters.
 The hexadecimal characters are parsed from most significant to least significant
 using `],
				[/* reference */ 'r', `#fromHexDigit(int)`, `fromHexDigit(int)`],
				[/* text */ 't', ` to form an unsigned value.
 The value is zero extended to 64 bits and is returned as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'string', [/* parameter description */
					[/* text */ 't', `a CharSequence containing up to sixteen hexadecimal characters`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the string length is greater than sixteen (16) or
         if any of the characters is not a hexadecimal character`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value parsed from the string`]
			]
		]],
		[/* method */ 'fromHexDigitsToLong(java.lang.CharSequence,int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the long value parsed from a string range of up to sixteen hexadecimal
 characters.
 The characters in the range `],
				[/* inline code block */ 'i', `fromIndex`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `toIndex`],
				[/* text */ 't', `, exclusive,
 are parsed from most significant to least significant
 using `],
				[/* reference */ 'r', `#fromHexDigit(int)`, `fromHexDigit(int)`],
				[/* text */ 't', ` to form an unsigned value.
 The value is zero extended to 64 bits and is returned as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'string', [/* parameter description */
					[/* text */ 't', `a CharSequence containing the characters`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the initial index of the range, inclusive`]
				]],
				[/* parameter */ 'toIndex', [/* parameter description */
					[/* text */ 't', `the final index of the range, exclusive.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the range is out of bounds
          for the `],
					[/* inline code block */ 'i', `CharSequence`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the length of the range is greater than sixteen (16) or
          if any of the characters is not a hexadecimal character`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value parsed from the string range`]
			]
		]]
	],
]);
