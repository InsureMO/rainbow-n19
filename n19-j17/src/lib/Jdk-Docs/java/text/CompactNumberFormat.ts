import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.CompactNumberFormat', [
	[/* class description */
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* inline code block */ 'i', `CompactNumberFormat`],
			[/* text */ 't', ` is a concrete subclass of `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', `
 that formats a decimal number in its compact form.

 The compact number formatting is designed for the environment where the space
 is limited, and the formatted string can be displayed in that limited space.
 It is defined by LDML's specification for
 `],
			[/* external link */ 'a', `http://unicode.org/reports/tr35/tr35-numbers.html#Compact_Number_Formats`, `Compact Number Formats`],
			[/* text */ 't', `. A compact number formatting refers
 to the representation of a number in a shorter form, based on the patterns
 provided for a given locale.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 For example:
 `],
			[/* new line */ 'n'],
			[/* text */ 't', `In the `],
			[/* reference */ 'r', `java.util.Locale#US`, `US locale`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `1000`],
			[/* text */ 't', ` can be formatted
 as `],
			[/* inline code block */ 'i', `"1K"`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `1000000`],
			[/* text */ 't', ` as `],
			[/* inline code block */ 'i', `"1M"`],
			[/* text */ 't', `, depending upon the
 `],
			[/* text */ 't', `style`],
			[/* text */ 't', ` used.
 `],
			[/* new line */ 'n'],
			[/* text */ 't', `In the `],
			[/* inline code block */ 'i', `"hi_IN"`],
			[/* text */ 't', ` locale, `],
			[/* inline code block */ 'i', `1000`],
			[/* text */ 't', ` can be formatted as
 "1 हज़ार", and `],
			[/* inline code block */ 'i', `50000000`],
			[/* text */ 't', ` as "5 क.",
 depending upon the `],
			[/* text */ 't', `style`],
			[/* text */ 't', ` used.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 To obtain a `],
			[/* inline code block */ 'i', `CompactNumberFormat`],
			[/* text */ 't', ` for a locale, use one
 of the factory methods given by `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', ` for compact number
 formatting. For example,
 `],
			[/* reference */ 'r', `java.text.NumberFormat#getCompactNumberInstance(java.util.Locale,java.text.NumberFormat.Style)`, `NumberFormat.getCompactNumberInstance(Locale, Style)`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` NumberFormat fmt = NumberFormat.getCompactNumberInstance(
                             new Locale("hi", "IN"), NumberFormat.Style.SHORT);
 String result = fmt.format(1000);
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `compact_number_style`, `Style`]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 A number can be formatted in the compact forms with two different
 styles, `],
			[/* reference */ 'r', `java.text.NumberFormat.Style#SHORT`, `SHORT`],
			[/* text */ 't', `
 and `],
			[/* reference */ 'r', `java.text.NumberFormat.Style#LONG`, `LONG`],
			[/* text */ 't', `. Use
 `],
			[/* reference */ 'r', `java.text.NumberFormat#getCompactNumberInstance(java.util.Locale,java.text.NumberFormat.Style)`, `NumberFormat.getCompactNumberInstance(Locale, Style)`],
			[/* text */ 't', ` for formatting and
 parsing a number in `],
			[/* reference */ 'r', `java.text.NumberFormat.Style#SHORT`, `SHORT`],
			[/* text */ 't', ` or
 `],
			[/* reference */ 'r', `java.text.NumberFormat.Style#LONG`, `LONG`],
			[/* text */ 't', ` compact form,
 where the given `],
			[/* inline code block */ 'i', `Style`],
			[/* text */ 't', ` parameter requests the desired
 format. A `],
			[/* reference */ 'r', `java.text.NumberFormat.Style#SHORT`, `SHORT`],
			[/* text */ 't', ` style
 compact number instance in the `],
			[/* reference */ 'r', `java.util.Locale#US`, `US locale`],
			[/* text */ 't', ` formats
 `],
			[/* inline code block */ 'i', `10000`],
			[/* text */ 't', ` as `],
			[/* inline code block */ 'i', `"10K"`],
			[/* text */ 't', `. However, a
 `],
			[/* reference */ 'r', `java.text.NumberFormat.Style#LONG`, `LONG`],
			[/* text */ 't', ` style instance in same locale
 formats `],
			[/* inline code block */ 'i', `10000`],
			[/* text */ 't', ` as `],
			[/* inline code block */ 'i', `"10 thousand"`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `compact_number_patterns`, `Compact Number Patterns`]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The compact number patterns are represented in a series of patterns where each
 pattern is used to format a range of numbers. An example of
 `],
			[/* reference */ 'r', `java.text.NumberFormat.Style#SHORT`, `SHORT`],
			[/* text */ 't', ` styled compact number patterns
 for the `],
			[/* reference */ 'r', `java.util.Locale#US`, `US locale`],
			[/* text */ 't', ` is `],
			[/* inline code block */ 'i', `{"", "", "", "0K", "00K", "000K", "0M", "00M", "000M", "0B", "00B", "000B", "0T", "00T", "000T"}`],
			[/* text */ 't', `,
 ranging from `],
			[/* inline code block */ 'i', `10`],
			[/* text */ 't', `0`, 'sup'],
			[/* text */ 't', ` to `],
			[/* inline code block */ 'i', `10`],
			[/* text */ 't', `14`, 'sup'],
			[/* text */ 't', `.
 There can be any number of patterns and they are
 strictly index based starting from the range `],
			[/* inline code block */ 'i', `10`],
			[/* text */ 't', `0`, 'sup'],
			[/* text */ 't', `.
 For example, in the above patterns, pattern at index 3
 (`],
			[/* inline code block */ 'i', `"0K"`],
			[/* text */ 't', `) is used for formatting `],
			[/* inline code block */ 'i', `number >= 1000 and number < 10000`],
			[/* text */ 't', `,
 pattern at index 4 (`],
			[/* inline code block */ 'i', `"00K"`],
			[/* text */ 't', `) is used for formatting
 `],
			[/* inline code block */ 'i', `number >= 10000 and number < 100000`],
			[/* text */ 't', ` and so on. In most of the locales,
 patterns with the range
 `],
			[/* inline code block */ 'i', `10`],
			[/* text */ 't', `0`, 'sup'],
			[/* text */ 't', `-`],
			[/* inline code block */ 'i', `10`],
			[/* text */ 't', `2`, 'sup'],
			[/* text */ 't', ` are empty
 strings, which implicitly means a special pattern `],
			[/* inline code block */ 'i', `"0"`],
			[/* text */ 't', `.
 A special pattern `],
			[/* inline code block */ 'i', `"0"`],
			[/* text */ 't', ` is used for any range which does not contain
 a compact pattern. This special pattern can appear explicitly for any specific
 range, or considered as a default pattern for an empty string.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A compact pattern contains a positive and negative subpattern
 separated by a subpattern boundary character `],
			[/* inline code block */ 'i', `';' (U+003B)`],
			[/* text */ 't', `,
 for example, `],
			[/* inline code block */ 'i', `"0K;-0K"`],
			[/* text */ 't', `. Each subpattern has a prefix,
 minimum integer digits, and suffix. The negative subpattern
 is optional, if absent, then the positive subpattern prefixed with the
 minus sign (`],
			[/* inline code block */ 'i', `'-' U+002D HYPHEN-MINUS`],
			[/* text */ 't', `) is used as the negative
 subpattern. That is, `],
			[/* inline code block */ 'i', `"0K"`],
			[/* text */ 't', ` alone is equivalent to `],
			[/* inline code block */ 'i', `"0K;-0K"`],
			[/* text */ 't', `.
 If there is an explicit negative subpattern, it serves only to specify
 the negative prefix and suffix. The number of minimum integer digits,
 and other characteristics are all the same as the positive pattern.
 That means that `],
			[/* inline code block */ 'i', `"0K;-00K"`],
			[/* text */ 't', ` produces precisely the same behavior
 as `],
			[/* inline code block */ 'i', `"0K;-0K"`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Many characters in a compact pattern are taken literally, they are matched
 during parsing and output unchanged during formatting.
 `],
			[/* reference */ 'r', `java.text.DecimalFormat#special_pattern_character`, `Special characters`],
			[/* text */ 't', `,
 on the other hand, stand for other characters, strings, or classes of
 characters. They must be quoted, using single quote `],
			[/* inline code block */ 'i', `' (U+0027)`],
			[/* text */ 't', `
 unless noted otherwise, if they are to appear in the prefix or suffix
 as literals. For example, 0क'.'.

 `]
		]],
		[/* block */ 'b', `Plurals`],
		[/* text */ 't', `
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 In case some localization requires compact number patterns to be different for
 plurals, each singular and plural pattern can be enumerated within a pair of
 curly brackets `],
			[/* inline code block */ 'i', `'{' (U+007B)`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `'}' (U+007D)`],
			[/* text */ 't', `, separated
 by a space `],
			[/* inline code block */ 'i', `' ' (U+0020)`],
			[/* text */ 't', `. If this format is used, each pattern needs to be
 prepended by its `],
			[/* inline code block */ 'i', `count`],
			[/* text */ 't', `, followed by a single colon `],
			[/* inline code block */ 'i', `':' (U+003A)`],
			[/* text */ 't', `.
 If the pattern includes spaces literally, they must be quoted.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 For example, the compact number pattern representing millions in German locale can be
 specified as `],
			[/* inline code block */ 'i', `"{one:0' 'Million other:0' 'Millionen}"`],
			[/* text */ 't', `. The `],
			[/* inline code block */ 'i', `count`],
			[/* text */ 't', `
 follows LDML's
 `],
			[/* external link */ 'a', `https://unicode.org/reports/tr35/tr35-numbers.html#Language_Plural_Rules`, `Language Plural Rules`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 A compact pattern has the following syntax:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* text */ 't', ` `],
				[/* text */ 't', `Pattern:`],
				[/* text */ 't', `
         `],
				[/* text */ 't', `SimplePattern`],
				[/* text */ 't', `
         '{' `],
				[/* text */ 't', `PluralPattern`],
				[/* text */ 't', ` `],
				[/* text */ 't', `optional`, 'sub'],
				[/* text */ 't', ` '}'
 `],
				[/* text */ 't', `SimplePattern:`],
				[/* text */ 't', `
         `],
				[/* text */ 't', `PositivePattern`],
				[/* text */ 't', `
         `],
				[/* text */ 't', `PositivePattern`],
				[/* text */ 't', ` `],
				[/* text */ 't', `optional`, 'sub'],
				[/* text */ 't', `
 `],
				[/* text */ 't', `PluralPattern:`],
				[/* text */ 't', `
         `],
				[/* text */ 't', `Count`],
				[/* text */ 't', `:`],
				[/* text */ 't', `SimplePattern`],
				[/* text */ 't', `
 `],
				[/* text */ 't', `Count:`],
				[/* text */ 't', `
         "zero" / "one" / "two" / "few" / "many" / "other"
 `],
				[/* text */ 't', `PositivePattern:`],
				[/* text */ 't', `
         `],
				[/* text */ 't', `optional`, 'sub'],
				[/* text */ 't', ` `],
				[/* text */ 't', `MinimumInteger`],
				[/* text */ 't', ` `],
				[/* text */ 't', `optional`, 'sub'],
				[/* text */ 't', `
 `],
				[/* text */ 't', `NegativePattern:`],
				[/* text */ 't', `
        `],
				[/* text */ 't', `optional`, 'sub'],
				[/* text */ 't', ` `],
				[/* text */ 't', `MinimumInteger`],
				[/* text */ 't', ` `],
				[/* text */ 't', `optional`, 'sub'],
				[/* text */ 't', `
 `],
				[/* text */ 't', `Prefix:`],
				[/* text */ 't', `
      Any Unicode characters except \\uFFFE, \\uFFFF, and
      `],
				[/* text */ 't', `special characters`],
				[/* text */ 't', `.
 `],
				[/* text */ 't', `Suffix:`],
				[/* text */ 't', `
      Any Unicode characters except \\uFFFE, \\uFFFF, and
      `],
				[/* text */ 't', `special characters`],
				[/* text */ 't', `.
 `],
				[/* text */ 't', `MinimumInteger:`],
				[/* text */ 't', `
      0
      0 `],
				[/* text */ 't', `MinimumInteger`],
				[/* text */ 't', `
 `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Formatting`],
		[/* text */ 't', `
 The default formatting behavior returns a formatted string with no fractional
 digits, however users can use the `],
		[/* reference */ 'r', `#setMinimumFractionDigits(int)`, `setMinimumFractionDigits(int)`],
		[/* text */ 't', `
 method to include the fractional part.
 The number `],
		[/* inline code block */ 'i', `1000.0`],
		[/* text */ 't', ` or `],
		[/* inline code block */ 'i', `1000`],
		[/* text */ 't', ` is formatted as `],
		[/* inline code block */ 'i', `"1K"`],
		[/* text */ 't', `
 not `],
		[/* inline code block */ 'i', `"1.00K"`],
		[/* text */ 't', ` (in the `],
		[/* reference */ 'r', `java.util.Locale#US`, `US locale`],
		[/* text */ 't', `). For this
 reason, the patterns provided for formatting contain only the minimum
 integer digits, prefix and/or suffix, but no fractional part.
 For example, patterns used are `],
		[/* inline code block */ 'i', `{"", "", "", 0K, 00K, ...}`],
		[/* text */ 't', `. If the pattern
 selected for formatting a number is `],
		[/* inline code block */ 'i', `"0"`],
		[/* text */ 't', ` (special pattern),
 either explicit or defaulted, then the general number formatting provided by
 `],
		[/* reference */ 'r', `java.text.DecimalFormat`, `DecimalFormat`],
		[/* text */ 't', `
 for the specified locale is used.

 `],
		[/* block */ 'b', `Parsing`],
		[/* text */ 't', `
 The default parsing behavior does not allow a grouping separator until
 grouping used is set to `],
		[/* inline code block */ 'i', `true`],
		[/* text */ 't', ` by using
 `],
		[/* reference */ 'r', `#setGroupingUsed(boolean)`, `setGroupingUsed(boolean)`],
		[/* text */ 't', `. The parsing of the fractional part
 depends on the `],
		[/* reference */ 'r', `#isParseIntegerOnly()`, `isParseIntegerOnly()`],
		[/* text */ 't', `. For example, if the
 parse integer only is set to true, then the fractional part is skipped.

 `],
		[/* block */ 'b', `Rounding`],
		[/* text */ 't', `
 `],
		[/* inline code block */ 'i', `CompactNumberFormat`],
		[/* text */ 't', ` provides rounding modes defined in
 `],
		[/* reference */ 'r', `enum class in java.math.RoundingMode`, `RoundingMode`],
		[/* text */ 't', ` for formatting.  By default, it uses
 `],
		[/* reference */ 'r', `java.math.RoundingMode#HALF_EVEN`, `RoundingMode.HALF_EVEN`],
		[/* text */ 't', `.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.text.DecimalFormatSymbols,java.lang.String[])', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `CompactNumberFormat`],
				[/* text */ 't', ` using the given decimal pattern,
 decimal format symbols and compact patterns.
 To obtain the instance of `],
				[/* inline code block */ 'i', `CompactNumberFormat`],
				[/* text */ 't', ` with the standard
 compact patterns for a `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `Style`],
				[/* text */ 't', `,
 it is recommended to use the factory methods given by
 `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` for compact number formatting. For example,
 `],
				[/* reference */ 'r', `java.text.NumberFormat#getCompactNumberInstance(java.util.Locale,java.text.NumberFormat.Style)`, `NumberFormat.getCompactNumberInstance(Locale, Style)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'decimalPattern', [/* parameter description */
					[/* text */ 't', `a decimal pattern for general number formatting`]
				]],
				[/* parameter */ 'symbols', [/* parameter description */
					[/* text */ 't', `the set of symbols to be used`]
				]],
				[/* parameter */ 'compactPatterns', [/* parameter description */
					[/* text */ 't', `an array of
        `],
					[/* reference */ 'r', `java.text.CompactNumberFormat#compact_number_patterns`, `compact number patterns`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any of the given arguments is
       `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given `],
					[/* inline code block */ 'i', `decimalPattern`],
					[/* text */ 't', ` or the
       `],
					[/* inline code block */ 'i', `compactPatterns`],
					[/* text */ 't', ` array contains an invalid pattern
       or if a `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` appears in the array of compact
       patterns`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.text.DecimalFormatSymbols,java.lang.String[],java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `CompactNumberFormat`],
				[/* text */ 't', ` using the given decimal pattern,
 decimal format symbols, compact patterns, and plural rules.
 To obtain the instance of `],
				[/* inline code block */ 'i', `CompactNumberFormat`],
				[/* text */ 't', ` with the standard
 compact patterns for a `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `Style`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `pluralRules`],
				[/* text */ 't', `,
 it is recommended to use the factory methods given by
 `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` for compact number formatting. For example,
 `],
				[/* reference */ 'r', `java.text.NumberFormat#getCompactNumberInstance(java.util.Locale,java.text.NumberFormat.Style)`, `NumberFormat.getCompactNumberInstance(Locale, Style)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'decimalPattern', [/* parameter description */
					[/* text */ 't', `a decimal pattern for general number formatting`]
				]],
				[/* parameter */ 'symbols', [/* parameter description */
					[/* text */ 't', `the set of symbols to be used`]
				]],
				[/* parameter */ 'compactPatterns', [/* parameter description */
					[/* text */ 't', `an array of
        `],
					[/* reference */ 'r', `java.text.CompactNumberFormat#compact_number_patterns`, `compact number patterns`]
				]],
				[/* parameter */ 'pluralRules', [/* parameter description */
					[/* text */ 't', `a String designating plural rules which associate
        the `],
					[/* inline code block */ 'i', `Count`],
					[/* text */ 't', ` keyword, such as "`],
					[/* inline code block */ 'i', `one`],
					[/* text */ 't', `", and the
        actual integer number. Its syntax is defined in Unicode Consortium's
        `],
					[/* external link */ 'a', `http://unicode.org/reports/tr35/tr35-numbers.html#Plural_rules_syntax`, `Plural rules syntax`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any of the given arguments is
        `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given `],
					[/* inline code block */ 'i', `decimalPattern`],
					[/* text */ 't', `,
        the `],
					[/* inline code block */ 'i', `compactPatterns`],
					[/* text */ 't', ` array contains an invalid pattern,
        a `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` appears in the array of compact patterns,
        or if the given `],
					[/* inline code block */ 'i', `pluralRules`],
					[/* text */ 't', ` contains an invalid syntax`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this `],
				[/* inline code block */ 'i', `CompactNumberFormat`],
				[/* text */ 't', ` is equal to the
 specified `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', `. The objects of type `],
				[/* inline code block */ 'i', `CompactNumberFormat`],
				[/* text */ 't', `
 are compared, other types return false; obeys the general contract of
 `],
				[/* reference */ 'r', `java.lang.Object#equals(java.lang.Object)`, `Object.equals`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to compare with`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other `],
				[/* inline code block */ 'i', `CompactNumberFormat`]
			]
		]],
		[/* method */ 'isGroupingUsed()', [
			[/* method description */
				[/* text */ 't', `Returns true if grouping is used in this format. For example, with
 grouping on and grouping size set to 3, the number `],
				[/* inline code block */ 'i', `12346567890987654`],
				[/* text */ 't', `
 can be formatted as `],
				[/* inline code block */ 'i', `"12,347 trillion"`],
				[/* text */ 't', ` in the
 `],
				[/* reference */ 'r', `java.util.Locale#US`, `US locale`],
				[/* text */ 't', `.
 The grouping separator is locale dependent.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if grouping is used;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'isParseBigDecimal()', [
			[/* method description */
				[/* text */ 't', `Returns whether the `],
				[/* reference */ 'r', `#parse(java.lang.String,java.text.ParsePosition)`, `parse(String, ParsePosition)`],
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
		[/* method */ 'isParseIntegerOnly()', [
			[/* method description */
				[/* text */ 't', `Returns true if this format parses only an integer from the number
 component of a compact number.
 Parsing an integer means that only an integer is considered from the
 number component, prefix/suffix is still considered to compute the
 resulting output.
 For example, in the `],
				[/* reference */ 'r', `java.util.Locale#US`, `US locale`],
				[/* text */ 't', `, if this method
 returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, the string `],
				[/* inline code block */ 'i', `"1234.78 thousand"`],
				[/* text */ 't', ` would be
 parsed as the value `],
				[/* inline code block */ 'i', `1234000`],
				[/* text */ 't', ` (1234 (integer part) * 1000
 (thousand)) and the fractional part would be skipped.
 The exact format accepted by the parse operation is locale dependent.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if compact numbers should be parsed as integers
         only; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'format(java.lang.Object,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Formats a number to produce a string representing its compact form.
 The number can be of any subclass of `],
				[/* reference */ 'r', `java.lang.Number`, `Number`],
				[/* text */ 't', `.`]
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
				[/* parameter */ 'fieldPosition', [/* parameter description */
					[/* text */ 't', `keeps track on the position of the field within
                         the returned string. For example, for formatting
                         a number `],
					[/* inline code block */ 'i', `123456789`],
					[/* text */ 't', ` in the
                         `],
					[/* reference */ 'r', `java.util.Locale#US`, `US locale`],
					[/* text */ 't', `,
                         if the given `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` is
                         `],
					[/* reference */ 'r', `java.text.NumberFormat#INTEGER_FIELD`, `NumberFormat.INTEGER_FIELD`],
					[/* text */ 't', `, the begin
                         index and end index of `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', `
                         will be set to 0 and 3, respectively for the
                         output string `],
					[/* inline code block */ 'i', `123M`],
					[/* text */ 't', `. Similarly, positions
                         of the prefix and the suffix fields can be
                         obtained using `],
					[/* reference */ 'r', `java.text.NumberFormat.Field#PREFIX`, `NumberFormat.Field.PREFIX`],
					[/* text */ 't', `
                         and `],
					[/* reference */ 'r', `java.text.NumberFormat.Field#SUFFIX`, `NumberFormat.Field.SUFFIX`],
					[/* text */ 't', ` respectively.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `number`],
					[/* text */ 't', ` is
                   `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or not an instance of `],
					[/* inline code block */ 'i', `Number`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `toAppendTo`],
					[/* text */ 't', ` or
                   `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if rounding is needed with rounding
                   mode being set to `],
					[/* inline code block */ 'i', `RoundingMode.UNNECESSARY`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', ` passed in as `],
				[/* inline code block */ 'i', `toAppendTo`]
			]
		]],
		[/* method */ 'getGroupingSize()', [
			[/* method description */
				[/* text */ 't', `Returns the grouping size. Grouping size is the number of digits between
 grouping separators in the integer portion of a number. For example,
 in the compact number `],
				[/* inline code block */ 'i', `"12,347 trillion"`],
				[/* text */ 't', ` for the
 `],
				[/* reference */ 'r', `java.util.Locale#US`, `US locale`],
				[/* text */ 't', `, the grouping size is 3.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the grouping size`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code for this `],
				[/* inline code block */ 'i', `CompactNumberFormat`],
				[/* text */ 't', ` instance.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `hash code for this `],
				[/* inline code block */ 'i', `CompactNumberFormat`]
			]
		]],
		[/* method */ 'parse(java.lang.String,java.text.ParsePosition)', [
			[/* method description */
				[/* text */ 't', `Parses a compact number from a string to produce a `],
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
 the character where the error occurred, and `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is returned.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The value is the numeric part in the given text multiplied
 by the numeric equivalent of the affix attached
 (For example, "K" = 1000 in `],
					[/* reference */ 'r', `java.util.Locale#US`, `US locale`],
					[/* text */ 't', `).
 The subclass returned depends on the value of
 `],
					[/* reference */ 'r', `#isParseBigDecimal()`, `isParseBigDecimal()`],
					[/* text */ 't', `.
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* reference */ 'r', `#isParseBigDecimal()`, `isParseBigDecimal()`],
						[/* text */ 't', ` is false (the default),
     most integer values are returned as `],
						[/* inline code block */ 'i', `Long`],
						[/* text */ 't', `
     objects, no matter how they are written: `],
						[/* inline code block */ 'i', `"17K"`],
						[/* text */ 't', ` and
     `],
						[/* inline code block */ 'i', `"17.000K"`],
						[/* text */ 't', ` both parse to `],
						[/* inline code block */ 'i', `Long.valueOf(17000)`],
						[/* text */ 't', `.
     If the value cannot fit into `],
						[/* inline code block */ 'i', `Long`],
						[/* text */ 't', `, then the result is
     returned as `],
						[/* inline code block */ 'i', `Double`],
						[/* text */ 't', `. This includes values with a
     fractional part, infinite values, `],
						[/* inline code block */ 'i', `NaN`],
						[/* text */ 't', `,
     and the value -0.0.
     `],
						[/* block */ 'b', [
							[/* text */ 't', `
     Callers may use the `],
							[/* inline code block */ 'i', `Number`],
							[/* text */ 't', ` methods `],
							[/* inline code block */ 'i', `doubleValue`],
							[/* text */ 't', `,
     `],
							[/* inline code block */ 'i', `longValue`],
							[/* text */ 't', `, etc., to obtain the type they want.

 `]
						]]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If `],
						[/* reference */ 'r', `#isParseBigDecimal()`, `isParseBigDecimal()`],
						[/* text */ 't', ` is true, values are returned
     as `],
						[/* inline code block */ 'i', `BigDecimal`],
						[/* text */ 't', ` objects. The special cases negative
     and positive infinity and NaN are returned as `],
						[/* inline code block */ 'i', `Double`],
						[/* text */ 't', `
     instances holding the values of the corresponding
     `],
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
					[/* inline code block */ 'i', `CompactNumberFormat`],
					[/* text */ 't', ` parses all Unicode characters that represent
 decimal digits, as defined by `],
					[/* inline code block */ 'i', `Character.digit()`],
					[/* text */ 't', `. In
 addition, `],
					[/* inline code block */ 'i', `CompactNumberFormat`],
					[/* text */ 't', ` also recognizes as digits the ten
 consecutive characters starting with the localized zero digit defined in
 the `],
					[/* inline code block */ 'i', `DecimalFormatSymbols`],
					[/* text */ 't', ` object.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* inline code block */ 'i', `CompactNumberFormat`],
					[/* text */ 't', ` parse does not allow parsing scientific
 notations. For example, parsing a string `],
					[/* inline code block */ 'i', `"1.05E4K"`],
					[/* text */ 't', ` in
 `],
					[/* reference */ 'r', `java.util.Locale#US`, `US locale`],
					[/* text */ 't', ` breaks at character 'E'
 and returns 1.05.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the string to be parsed`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `ParsePosition`],
					[/* text */ 't', ` object with index and error
             index information as described above`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `text`],
					[/* text */ 't', ` or
             `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed value, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the parse fails`]
			]
		]],
		[/* method */ 'format(double,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Formats a double to produce a string representing its compact form.`]
			],
			[/* parameters */
				[/* parameter */ 'number', [/* parameter description */
					[/* text */ 't', `the double number to format`]
				]],
				[/* parameter */ 'result', [/* parameter description */
					[/* text */ 't', `where the text is to be appended`]
				]],
				[/* parameter */ 'fieldPosition', [/* parameter description */
					[/* text */ 't', `keeps track on the position of the field within
                         the returned string. For example, to format
                         a number `],
					[/* inline code block */ 'i', `1234567.89`],
					[/* text */ 't', ` in the
                         `],
					[/* reference */ 'r', `java.util.Locale#US`, `US locale`],
					[/* text */ 't', `
                         if the given `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` is
                         `],
					[/* reference */ 'r', `java.text.NumberFormat#INTEGER_FIELD`, `NumberFormat.INTEGER_FIELD`],
					[/* text */ 't', `, the begin
                         index and end index of `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', `
                         will be set to 0 and 1, respectively for the
                         output string `],
					[/* inline code block */ 'i', `1M`],
					[/* text */ 't', `. Similarly, positions
                         of the prefix and the suffix fields can be
                         obtained using `],
					[/* reference */ 'r', `java.text.NumberFormat.Field#PREFIX`, `NumberFormat.Field.PREFIX`],
					[/* text */ 't', `
                         and `],
					[/* reference */ 'r', `java.text.NumberFormat.Field#SUFFIX`, `NumberFormat.Field.SUFFIX`],
					[/* text */ 't', ` respectively.`]
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
            mode being set to `],
					[/* inline code block */ 'i', `RoundingMode.UNNECESSARY`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', ` passed in as `],
				[/* inline code block */ 'i', `result`]
			]
		]],
		[/* method */ 'format(long,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Formats a long to produce a string representing its compact form.`]
			],
			[/* parameters */
				[/* parameter */ 'number', [/* parameter description */
					[/* text */ 't', `the long number to format`]
				]],
				[/* parameter */ 'result', [/* parameter description */
					[/* text */ 't', `where the text is to be appended`]
				]],
				[/* parameter */ 'fieldPosition', [/* parameter description */
					[/* text */ 't', `keeps track on the position of the field within
                         the returned string. For example, to format
                         a number `],
					[/* inline code block */ 'i', `123456789`],
					[/* text */ 't', ` in the
                         `],
					[/* reference */ 'r', `java.util.Locale#US`, `US locale`],
					[/* text */ 't', `,
                         if the given `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` is
                         `],
					[/* reference */ 'r', `java.text.NumberFormat#INTEGER_FIELD`, `NumberFormat.INTEGER_FIELD`],
					[/* text */ 't', `, the begin
                         index and end index of `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', `
                         will be set to 0 and 3, respectively for the
                         output string `],
					[/* inline code block */ 'i', `123M`],
					[/* text */ 't', `. Similarly, positions
                         of the prefix and the suffix fields can be
                         obtained using `],
					[/* reference */ 'r', `java.text.NumberFormat.Field#PREFIX`, `NumberFormat.Field.PREFIX`],
					[/* text */ 't', `
                         and `],
					[/* reference */ 'r', `java.text.NumberFormat.Field#SUFFIX`, `NumberFormat.Field.SUFFIX`],
					[/* text */ 't', ` respectively.`]
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
               mode being set to `],
					[/* inline code block */ 'i', `RoundingMode.UNNECESSARY`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', ` passed in as `],
				[/* inline code block */ 'i', `result`]
			]
		]],
		[/* method */ 'getRoundingMode()', [
			[/* method description */
				[/* text */ 't', `Gets the `],
				[/* reference */ 'r', `enum class in java.math.RoundingMode`, `RoundingMode`],
				[/* text */ 't', ` used in this
 `],
				[/* inline code block */ 'i', `CompactNumberFormat`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `RoundingMode`],
				[/* text */ 't', ` used for this
         `],
				[/* inline code block */ 'i', `CompactNumberFormat`]
			]
		]],
		[/* method */ 'formatToCharacterIterator(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Formats an Object producing an `],
				[/* inline code block */ 'i', `AttributedCharacterIterator`],
				[/* text */ 't', `.
 The returned `],
				[/* inline code block */ 'i', `AttributedCharacterIterator`],
				[/* text */ 't', ` can be used
 to build the resulting string, as well as to determine information
 about the resulting string.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Each attribute key of the `],
					[/* inline code block */ 'i', `AttributedCharacterIterator`],
					[/* text */ 't', ` will
 be of type `],
					[/* inline code block */ 'i', `NumberFormat.Field`],
					[/* text */ 't', `, with the attribute value
 being the same as the attribute key. The prefix and the suffix
 parts of the returned iterator (if present) are represented by
 the attributes `],
					[/* reference */ 'r', `java.text.NumberFormat.Field#PREFIX`, `NumberFormat.Field.PREFIX`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.text.NumberFormat.Field#SUFFIX`, `NumberFormat.Field.SUFFIX`],
					[/* text */ 't', ` respectively.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The object to format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if obj is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `when the Format cannot format the
         given object`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if rounding is needed with rounding
         mode being set to `],
					[/* inline code block */ 'i', `RoundingMode.UNNECESSARY`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `AttributedCharacterIterator`],
				[/* text */ 't', ` describing the
         formatted value`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Creates and returns a copy of this `],
				[/* inline code block */ 'i', `CompactNumberFormat`],
				[/* text */ 't', `
 instance.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this instance`]
			]
		]],
		[/* method */ 'setGroupingSize(int)', [
			[/* method description */
				[/* text */ 't', `Sets the grouping size. Grouping size is the number of digits between
 grouping separators in the integer portion of a number. For example,
 in the compact number `],
				[/* inline code block */ 'i', `"12,347 trillion"`],
				[/* text */ 't', ` for the
 `],
				[/* reference */ 'r', `java.util.Locale#US`, `US locale`],
				[/* text */ 't', `, the grouping size is 3. The grouping
 size must be greater than or equal to zero and less than or equal to 127.`]
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
 larger than 127`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setGroupingUsed(boolean)', [
			[/* method description */
				[/* text */ 't', `Sets whether or not grouping will be used in this format.`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if grouping is used;
                 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` otherwise`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setMaximumFractionDigits(int)', [
			[/* method description */
				[/* text */ 't', `Sets the maximum number of digits allowed in the fraction portion of a
 number.
 The maximum allowed fraction range is 340, if the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` > 340,
 then the maximum fraction digits count is set to 340. Negative input
 values are replaced with 0.`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the maximum number of fraction digits to be shown`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setMaximumIntegerDigits(int)', [
			[/* method description */
				[/* text */ 't', `Sets the maximum number of digits allowed in the integer portion of a
 number.
 The maximum allowed integer range is 309, if the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` > 309,
 then the maximum integer digits count is set to 309. Negative input
 values are replaced with 0.`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the maximum number of integer digits to be shown`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setMinimumFractionDigits(int)', [
			[/* method description */
				[/* text */ 't', `Sets the minimum number of digits allowed in the fraction portion of a
 number.
 The maximum allowed fraction range is 340, if the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` > 340,
 then the minimum fraction digits count is set to 340. Negative input
 values are replaced with 0.`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the minimum number of fraction digits to be shown`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setMinimumIntegerDigits(int)', [
			[/* method description */
				[/* text */ 't', `Sets the minimum number of digits allowed in the integer portion of a
 number.
 The maximum allowed integer range is 309, if the `],
				[/* inline code block */ 'i', `newValue`],
				[/* text */ 't', ` > 309,
 then the minimum integer digits count is set to 309. Negative input
 values are replaced with 0.`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the minimum number of integer digits to be shown`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setParseBigDecimal(boolean)', [
			[/* method description */
				[/* text */ 't', `Sets whether the `],
				[/* reference */ 'r', `#parse(java.lang.String,java.text.ParsePosition)`, `parse(String, ParsePosition)`],
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
		[/* method */ 'setParseIntegerOnly(boolean)', [
			[/* method description */
				[/* text */ 't', `Sets whether or not this format parses only an integer from the number
 component of a compact number.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if compact numbers should be parsed as
              integers only; `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` otherwise`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setRoundingMode(java.math.RoundingMode)', [
			[/* method description */
				[/* text */ 't', `Sets the `],
				[/* reference */ 'r', `enum class in java.math.RoundingMode`, `RoundingMode`],
				[/* text */ 't', ` used in this
 `],
				[/* inline code block */ 'i', `CompactNumberFormat`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'roundingMode', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `RoundingMode`],
					[/* text */ 't', ` to be used`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `roundingMode`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
