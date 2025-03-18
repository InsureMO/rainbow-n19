import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.NumberFormat', [
	[/* class description */
		[/* inline code block */ 'i', `NumberFormat`],
		[/* text */ 't', ` is the abstract base class for all number
 formats. This class provides the interface for formatting and parsing
 numbers. `],
		[/* inline code block */ 'i', `NumberFormat`],
		[/* text */ 't', ` also provides methods for determining
 which locales have number formats, and what their names are.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', ` helps you to format and parse numbers for any locale.
 Your code can be completely independent of the locale conventions for
 decimal points, thousands-separators, or even the particular decimal
 digits used, or whether the number format is even decimal.

 `]
		]],
		[/* block */ 'b', `
 To format a number for the current Locale, use one of the factory
 class methods:
 `],
		[/* blockquote */ 'q', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `myString = NumberFormat.getInstance().format(myNumber);`]
			]],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `
 If you are formatting multiple numbers, it is
 more efficient to get the format and use it multiple times so that
 the system doesn't have to fetch the information about the local
 language and country conventions multiple times.
 `],
		[/* blockquote */ 'q', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `NumberFormat nf = NumberFormat.getInstance();
 for (int i = 0; i < myNumber.length; ++i) {
     output.println(nf.format(myNumber[i]) + "; ");
 }`]
			]],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `
 To format a number for a different Locale, specify it in the
 call to `],
		[/* inline code block */ 'i', `getInstance`],
		[/* text */ 't', `.
 `],
		[/* blockquote */ 'q', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `NumberFormat nf = NumberFormat.getInstance(Locale.FRENCH);`]
			]],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `If the locale contains "nu" (numbers) and/or "rg" (region override)
 `],
			[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode extensions`],
			[/* text */ 't', `,
 the decimal digits, and/or the country used for formatting are overridden.
 If both "nu" and "rg" are specified, the decimal digits from the "nu"
 extension supersedes the implicit one from the "rg" extension.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `You can also use a `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', ` to parse numbers:
 `]
		]],
		[/* blockquote */ 'q', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `myNumber = nf.parse(myString);`]
			]],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `
 Use `],
		[/* inline code block */ 'i', `getInstance`],
		[/* text */ 't', ` or `],
		[/* inline code block */ 'i', `getNumberInstance`],
		[/* text */ 't', ` to get the
 normal number format. Use `],
		[/* inline code block */ 'i', `getIntegerInstance`],
		[/* text */ 't', ` to get an
 integer number format. Use `],
		[/* inline code block */ 'i', `getCurrencyInstance`],
		[/* text */ 't', ` to get the
 currency number format. Use `],
		[/* inline code block */ 'i', `getCompactNumberInstance`],
		[/* text */ 't', ` to get the
 compact number format to format a number in shorter form. For example,
 `],
		[/* inline code block */ 'i', `2000`],
		[/* text */ 't', ` can be formatted as `],
		[/* inline code block */ 'i', `"2K"`],
		[/* text */ 't', ` in
 `],
		[/* reference */ 'r', `java.util.Locale#US`, `US locale`],
		[/* text */ 't', `. Use `],
		[/* inline code block */ 'i', `getPercentInstance`],
		[/* text */ 't', `
 to get a format for displaying percentages. With this format, a fraction
 like 0.53 is displayed as 53%.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 You can also control the display of numbers with such methods as
 `],
			[/* inline code block */ 'i', `setMinimumFractionDigits`],
			[/* text */ 't', `.
 If you want even more control over the format or parsing,
 or want to give your users more control,
 you can try casting the `],
			[/* inline code block */ 'i', `NumberFormat`],
			[/* text */ 't', ` you get from the factory methods
 to a `],
			[/* inline code block */ 'i', `DecimalFormat`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `CompactNumberFormat`],
			[/* text */ 't', ` depending on
 the factory method used. This will work for the vast majority of locales;
 just remember to put it in a `],
			[/* inline code block */ 'i', `try`],
			[/* text */ 't', ` block in case you encounter
 an unusual one.

 `]
		]],
		[/* block */ 'b', `
 NumberFormat and DecimalFormat are designed such that some controls
 work for formatting and others work for parsing.  The following is
 the detailed description for each these control methods,
 `],
		[/* block */ 'b', `
 setParseIntegerOnly : only affects parsing, e.g.
 if true,  "3456.78" → 3456 (and leaves the parse position just after index 6)
 if false, "3456.78" → 3456.78 (and leaves the parse position just after index 8)
 This is independent of formatting.  If you want to not show a decimal point
 where there might be no digits after the decimal point, use
 setDecimalSeparatorAlwaysShown.
 `],
		[/* block */ 'b', `
 setDecimalSeparatorAlwaysShown : only affects formatting, and only where
 there might be no digits after the decimal point, such as with a pattern
 like "#,##0.##", e.g.,
 if true,  3456.00 → "3,456."
 if false, 3456.00 → "3456"
 This is independent of parsing.  If you want parsing to stop at the decimal
 point, use setParseIntegerOnly.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 You can also use forms of the `],
			[/* inline code block */ 'i', `parse`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `format`],
			[/* text */ 't', `
 methods with `],
			[/* inline code block */ 'i', `ParsePosition`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `FieldPosition`],
			[/* text */ 't', ` to
 allow you to:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', ` progressively parse through pieces of a string
 `],
			[/* block */ 'b', ` align the decimal point and other areas
 `]
		]],
		[/* text */ 't', `
 For example, you can align numbers in two ways:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` If you are using a monospaced font with spacing for alignment,
      you can pass the `],
				[/* inline code block */ 'i', `FieldPosition`],
				[/* text */ 't', ` in your format call, with
      `],
				[/* inline code block */ 'i', `field`],
				[/* text */ 't', ` = `],
				[/* inline code block */ 'i', `INTEGER_FIELD`],
				[/* text */ 't', `. On output,
      `],
				[/* inline code block */ 'i', `getEndIndex`],
				[/* text */ 't', ` will be set to the offset between the
      last character of the integer and the decimal. Add
      (desiredSpaceCount - getEndIndex) spaces at the front of the string.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` If you are using proportional fonts,
      instead of padding with spaces, measure the width
      of the string in pixels from the start to `],
				[/* inline code block */ 'i', `getEndIndex`],
				[/* text */ 't', `.
      Then move the pen by
      (desiredPixelWidth - widthToAlignmentPoint) before drawing the text.
      It also works where there is no decimal, but possibly additional
      characters at the end, e.g., with parentheses in negative
      numbers: "(12)" for -12.
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
 Number formats are generally not synchronized.
 It is recommended to create separate format instances for each thread.
 If multiple threads access a format concurrently, it must be synchronized
 externally.`]
	],
	[/* fields */
		[/* field */ 'FRACTION_FIELD', [
			[/* field description */
				[/* text */ 't', `Field constant used to construct a FieldPosition object. Signifies that
 the position of the fraction part of a formatted number should be returned.`]
			],
		]],
		[/* field */ 'INTEGER_FIELD', [
			[/* field description */
				[/* text */ 't', `Field constant used to construct a FieldPosition object. Signifies that
 the position of the integer part of a formatted number should be returned.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Sole constructor.  (For invocation by subclass constructors, typically
 implicit.)`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'parse(java.lang.String,java.text.ParsePosition)', [
			[/* method description */
				[/* text */ 't', `Returns a Long if possible (e.g., within the range [Long.MIN_VALUE,
 Long.MAX_VALUE] and with no decimals), otherwise a Double.
 If IntegerOnly is set, will stop at a decimal
 point (or equivalent; e.g., for rational numbers "1 2/3", will stop
 after the 1).
 Does not throw an exception; if no object can be parsed, index is
 unchanged!`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the String to parse`]
				]],
				[/* parameter */ 'parsePosition', [/* parameter description */
					[/* text */ 't', `the parse position`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the parsed value`]
			]
		]],
		[/* method */ 'format(double,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Specialization of format.`]
			],
			[/* parameters */
				[/* parameter */ 'number', [/* parameter description */
					[/* text */ 't', `the double number to format`]
				]],
				[/* parameter */ 'toAppendTo', [/* parameter description */
					[/* text */ 't', `the StringBuffer to which the formatted text is to be
                   appended`]
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
					[/* text */ 't', `INTEGER_FIELD`],
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
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if rounding is needed with rounding
                   mode being set to RoundingMode.UNNECESSARY`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the formatted StringBuffer`]
			]
		]],
		[/* method */ 'format(long,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Specialization of format.`]
			],
			[/* parameters */
				[/* parameter */ 'number', [/* parameter description */
					[/* text */ 't', `the long number to format`]
				]],
				[/* parameter */ 'toAppendTo', [/* parameter description */
					[/* text */ 't', `the StringBuffer to which the formatted text is to be
                   appended`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `keeps track on the position of the field within the
                   returned string. For example, for formatting a number
                   `],
					[/* inline code block */ 'i', `123456789`],
					[/* text */ 't', ` in `],
					[/* inline code block */ 'i', `Locale.US`],
					[/* text */ 't', ` locale,
                   if the given `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` is
                   `],
					[/* text */ 't', `INTEGER_FIELD`],
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
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if rounding is needed with rounding
                   mode being set to RoundingMode.UNNECESSARY`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the formatted StringBuffer`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Overrides equals.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this object is the same as the obj
          argument; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isGroupingUsed()', [
			[/* method description */
				[/* text */ 't', `Returns true if grouping is used in this format. For example, in the
 English locale, with grouping on, the number 1234567 might be formatted
 as "1,234,567". The grouping separator as well as the size of each group
 is locale dependent and is determined by sub-classes of NumberFormat.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if grouping is used;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'isParseIntegerOnly()', [
			[/* method description */
				[/* text */ 't', `Returns true if this format will parse numbers as integers only.
 For example in the English locale, with ParseIntegerOnly true, the
 string "1234." would be parsed as the integer value 1234 and parsing
 would stop at the "." character.  Of course, the exact format accepted
 by the parse operation is locale dependent and determined by sub-classes
 of NumberFormat.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if numbers should be parsed as integers only;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise`]
			]
		]],
		[/* method */ 'parseObject(java.lang.String,java.text.ParsePosition)', [
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
 See the `],
					[/* reference */ 'r', `#parse(java.lang.String,java.text.ParsePosition)`, `parse(String, ParsePosition)`],
					[/* text */ 't', ` method for more information
 on number parsing.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', `, part of which should be parsed.`]
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
					[/* inline code block */ 'i', `source`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `Number`],
				[/* text */ 't', ` parsed from the string. In case of
         error, returns null.`]
			]
		]],
		[/* method */ 'format(double)', [
			[/* method description */
				[/* text */ 't', `Specialization of format.`]
			],
			[/* parameters */
				[/* parameter */ 'number', [/* parameter description */
					[/* text */ 't', `the double number to format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if rounding is needed with rounding
                   mode being set to RoundingMode.UNNECESSARY`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the formatted String`]
			]
		]],
		[/* method */ 'format(long)', [
			[/* method description */
				[/* text */ 't', `Specialization of format.`]
			],
			[/* parameters */
				[/* parameter */ 'number', [/* parameter description */
					[/* text */ 't', `the long number to format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if rounding is needed with rounding
                   mode being set to RoundingMode.UNNECESSARY`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the formatted String`]
			]
		]],
		[/* method */ 'getMaximumFractionDigits()', [
			[/* method description */
				[/* text */ 't', `Returns the maximum number of digits allowed in the fraction portion of a
 number.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the maximum number of digits.`]
			]
		]],
		[/* method */ 'getMaximumIntegerDigits()', [
			[/* method description */
				[/* text */ 't', `Returns the maximum number of digits allowed in the integer portion of a
 number.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the maximum number of digits`]
			]
		]],
		[/* method */ 'getMinimumFractionDigits()', [
			[/* method description */
				[/* text */ 't', `Returns the minimum number of digits allowed in the fraction portion of a
 number.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the minimum number of digits`]
			]
		]],
		[/* method */ 'getMinimumIntegerDigits()', [
			[/* method description */
				[/* text */ 't', `Returns the minimum number of digits allowed in the integer portion of a
 number.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the minimum number of digits`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Overrides hashCode.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'parse(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Parses text from the beginning of the given string to produce a number.
 The method may not use the entire text of the given string.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 See the `],
					[/* reference */ 'r', `#parse(java.lang.String,java.text.ParsePosition)`, `parse(String, ParsePosition)`],
					[/* text */ 't', ` method for more information
 on number parsing.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` whose beginning should be parsed.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.text.ParseException', [/* throw description */
					[/* text */ 't', `if the beginning of the specified string
            cannot be parsed.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `Number`],
				[/* text */ 't', ` parsed from the string.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Overrides Cloneable.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
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
				[/* block */ 'b', [
					[/* text */ 't', `
 This implementation extracts the number's value using
 `],
					[/* reference */ 'r', `java.lang.Number#longValue()`, `Number.longValue()`],
					[/* text */ 't', ` for all integral type values that
 can be converted to `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` without loss of information,
 including `],
					[/* inline code block */ 'i', `BigInteger`],
					[/* text */ 't', ` values with a
 `],
					[/* reference */ 'r', `java.math.BigInteger#bitLength()`, `bit length`],
					[/* text */ 't', ` of less than 64,
 and `],
					[/* reference */ 'r', `java.lang.Number#doubleValue()`, `Number.doubleValue()`],
					[/* text */ 't', ` for all other types. It
 then calls
 `],
					[/* reference */ 'r', `#format(long,java.lang.StringBuffer,java.text.FieldPosition)`, `format(long,java.lang.StringBuffer,java.text.FieldPosition)`],
					[/* text */ 't', `
 or `],
					[/* reference */ 'r', `#format(double,java.lang.StringBuffer,java.text.FieldPosition)`, `format(double,java.lang.StringBuffer,java.text.FieldPosition)`],
					[/* text */ 't', `.
 This may result in loss of magnitude information and precision for
 `],
					[/* inline code block */ 'i', `BigInteger`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `BigDecimal`],
					[/* text */ 't', ` values.`]
				]]
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
					[/* text */ 't', `INTEGER_FIELD`],
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
		[/* method */ 'getRoundingMode()', [
			[/* method description */
				[/* text */ 't', `Gets the `],
				[/* reference */ 'r', `java.math.RoundingMode`, `RoundingMode`],
				[/* text */ 't', ` used in this NumberFormat.
 The default implementation of this method in NumberFormat
 always throws `],
				[/* reference */ 'r', `java.lang.UnsupportedOperationException`, `UnsupportedOperationException`],
				[/* text */ 't', `.
 Subclasses which handle different rounding modes should override
 this method.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `The default implementation
     always throws this exception`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `RoundingMode`],
				[/* text */ 't', ` used for this NumberFormat.`]
			]
		]],
		[/* method */ 'getCurrency()', [
			[/* method description */
				[/* text */ 't', `Gets the currency used by this number format when formatting
 currency values. The initial value is derived in a locale dependent
 way. The returned value may be null if no valid
 currency could be determined and no currency has been set using
 `],
				[/* reference */ 'r', `#setCurrency(java.util.Currency)`, `setCurrency`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The default implementation throws
 `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the number format class
 doesn't implement currency formatting`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the currency used by this number format, or `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'getCurrencyInstance()', [
			[/* method description */
				[/* text */ 't', `Returns a currency format for the current default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling
 `],
					[/* reference */ 'r', `#getCurrencyInstance(java.util.Locale)`, `getCurrencyInstance(Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance for currency formatting`]
			]
		]],
		[/* method */ 'getInstance()', [
			[/* method description */
				[/* text */ 't', `Returns a general-purpose number format for the current default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 This is the same as calling
 `],
				[/* reference */ 'r', `#getNumberInstance()`, `getNumberInstance()`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance for general-purpose number
 formatting`]
			]
		]],
		[/* method */ 'getIntegerInstance()', [
			[/* method description */
				[/* text */ 't', `Returns an integer number format for the current default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale. The
 returned number format is configured to round floating point numbers
 to the nearest integer using half-even rounding (see `],
				[/* reference */ 'r', `java.math.RoundingMode#HALF_EVEN`, `RoundingMode.HALF_EVEN`],
				[/* text */ 't', `) for formatting,
 and to parse only the integer part of an input string (see `],
				[/* reference */ 'r', `#isParseIntegerOnly()`, `isParseIntegerOnly`],
				[/* text */ 't', `).
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling
 `],
					[/* reference */ 'r', `#getIntegerInstance(java.util.Locale)`, `getIntegerInstance(Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a number format for integer values`]
			]
		]],
		[/* method */ 'getNumberInstance()', [
			[/* method description */
				[/* text */ 't', `Returns a general-purpose number format for the current default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling
 `],
					[/* reference */ 'r', `#getNumberInstance(java.util.Locale)`, `getNumberInstance(Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance for general-purpose number
 formatting`]
			]
		]],
		[/* method */ 'getPercentInstance()', [
			[/* method description */
				[/* text */ 't', `Returns a percentage format for the current default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling
 `],
					[/* reference */ 'r', `#getPercentInstance(java.util.Locale)`, `getPercentInstance(Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance for percentage formatting`]
			]
		]],
		[/* method */ 'getCompactNumberInstance()', [
			[/* method description */
				[/* text */ 't', `Returns a compact number format for the default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale with
 `],
				[/* reference */ 'r', `java.text.NumberFormat.Style#SHORT`, `"SHORT"`],
				[/* text */ 't', ` format style.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance for compact number
         formatting`]
			]
		]],
		[/* method */ 'getCompactNumberInstance(java.util.Locale,java.text.NumberFormat.Style)', [
			[/* method description */
				[/* text */ 't', `Returns a compact number format for the specified `],
				[/* reference */ 'r', `java.util.Locale`, `locale`],
				[/* text */ 't', `
 and `],
				[/* reference */ 'r', `java.text.NumberFormat.Style`, `formatStyle`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the desired locale`]
				]],
				[/* parameter */ 'formatStyle', [/* parameter description */
					[/* text */ 't', `the style for formatting a number`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `formatStyle`],
					[/* text */ 't', `
                              is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance for compact number
         formatting`]
			]
		]],
		[/* method */ 'getCurrencyInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a currency format for the specified locale.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the specified locale contains the "`],
					[/* inline code block */ 'i', `cf`],
					[/* text */ 't', `" (
 `],
					[/* external link */ 'a', `https://www.unicode.org/reports/tr35/tr35.html#UnicodeCurrencyFormatIdentifier`, `currency format style`],
					[/* text */ 't', `)
 `],
					[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode extension`],
					[/* text */ 't', `,
 the returned currency format uses the style if it is available.
 Otherwise, the style uses the default "`],
					[/* inline code block */ 'i', `standard`],
					[/* text */ 't', `" currency format.
 For example, if the style designates "`],
					[/* inline code block */ 'i', `account`],
					[/* text */ 't', `", negative
 currency amounts use a pair of parentheses in some locales.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'inLocale', [/* parameter description */
					[/* text */ 't', `the desired locale`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance for currency formatting`]
			]
		]],
		[/* method */ 'getInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a general-purpose number format for the specified locale.
 This is the same as calling
 `],
				[/* reference */ 'r', `#getNumberInstance(java.util.Locale)`, `getNumberInstance(inLocale)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'inLocale', [/* parameter description */
					[/* text */ 't', `the desired locale`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance for general-purpose number
 formatting`]
			]
		]],
		[/* method */ 'getIntegerInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns an integer number format for the specified locale. The
 returned number format is configured to round floating point numbers
 to the nearest integer using half-even rounding (see `],
				[/* reference */ 'r', `java.math.RoundingMode#HALF_EVEN`, `RoundingMode.HALF_EVEN`],
				[/* text */ 't', `) for formatting,
 and to parse only the integer part of an input string (see `],
				[/* reference */ 'r', `#isParseIntegerOnly()`, `isParseIntegerOnly`],
				[/* text */ 't', `).`]
			],
			[/* parameters */
				[/* parameter */ 'inLocale', [/* parameter description */
					[/* text */ 't', `the desired locale`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a number format for integer values`]
			]
		]],
		[/* method */ 'getNumberInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a general-purpose number format for the specified locale.`]
			],
			[/* parameters */
				[/* parameter */ 'inLocale', [/* parameter description */
					[/* text */ 't', `the desired locale`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance for general-purpose number
 formatting`]
			]
		]],
		[/* method */ 'getPercentInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a percentage format for the specified locale.`]
			],
			[/* parameters */
				[/* parameter */ 'inLocale', [/* parameter description */
					[/* text */ 't', `the desired locale`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instance for percentage formatting`]
			]
		]],
		[/* method */ 'getAvailableLocales()', [
			[/* method description */
				[/* text */ 't', `Returns an array of all locales for which the
 `],
				[/* inline code block */ 'i', `get*Instance`],
				[/* text */ 't', ` methods of this class can return
 localized instances.
 The returned array represents the union of locales supported by the Java
 runtime and by installed
 `],
				[/* reference */ 'r', `java.text.spi.NumberFormatProvider`, `NumberFormatProvider`],
				[/* text */ 't', ` implementations.
 It must contain at least a `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` instance equal to
 `],
				[/* reference */ 'r', `java.util.Locale#US`, `Locale.US`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `An array of locales for which localized
         `],
				[/* inline code block */ 'i', `NumberFormat`],
				[/* text */ 't', ` instances are available.`]
			]
		]],
		[/* method */ 'setCurrency(java.util.Currency)', [
			[/* method description */
				[/* text */ 't', `Sets the currency used by this number format when formatting
 currency values. This does not update the minimum or maximum
 number of fraction digits used by the number format.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The default implementation throws
 `],
					[/* inline code block */ 'i', `UnsupportedOperationException`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'currency', [/* parameter description */
					[/* text */ 't', `the new currency to be used by this number format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the number format class
 doesn't implement currency formatting`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `currency`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setGroupingUsed(boolean)', [
			[/* method description */
				[/* text */ 't', `Set whether or not grouping will be used in this format.`]
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
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setMaximumFractionDigits(int)', [
			[/* method description */
				[/* text */ 't', `Sets the maximum number of digits allowed in the fraction portion of a
 number. maximumFractionDigits must be ≥ minimumFractionDigits.  If the
 new value for maximumFractionDigits is less than the current value
 of minimumFractionDigits, then minimumFractionDigits will also be set to
 the new value.`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the maximum number of fraction digits to be shown; if
 less than zero, then zero is used. The concrete subclass may enforce an
 upper limit to this value appropriate to the numeric type being formatted.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setMaximumIntegerDigits(int)', [
			[/* method description */
				[/* text */ 't', `Sets the maximum number of digits allowed in the integer portion of a
 number. maximumIntegerDigits must be ≥ minimumIntegerDigits.  If the
 new value for maximumIntegerDigits is less than the current value
 of minimumIntegerDigits, then minimumIntegerDigits will also be set to
 the new value.`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the maximum number of integer digits to be shown; if
 less than zero, then zero is used. The concrete subclass may enforce an
 upper limit to this value appropriate to the numeric type being formatted.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setMinimumFractionDigits(int)', [
			[/* method description */
				[/* text */ 't', `Sets the minimum number of digits allowed in the fraction portion of a
 number. minimumFractionDigits must be ≤ maximumFractionDigits.  If the
 new value for minimumFractionDigits exceeds the current value
 of maximumFractionDigits, then maximumFractionDigits will also be set to
 the new value`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the minimum number of fraction digits to be shown; if
 less than zero, then zero is used. The concrete subclass may enforce an
 upper limit to this value appropriate to the numeric type being formatted.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setMinimumIntegerDigits(int)', [
			[/* method description */
				[/* text */ 't', `Sets the minimum number of digits allowed in the integer portion of a
 number. minimumIntegerDigits must be ≤ maximumIntegerDigits.  If the
 new value for minimumIntegerDigits exceeds the current value
 of maximumIntegerDigits, then maximumIntegerDigits will also be set to
 the new value`]
			],
			[/* parameters */
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the minimum number of integer digits to be shown; if
 less than zero, then zero is used. The concrete subclass may enforce an
 upper limit to this value appropriate to the numeric type being formatted.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setParseIntegerOnly(boolean)', [
			[/* method description */
				[/* text */ 't', `Sets whether or not numbers should be parsed as integers only.`]
			],
			[/* parameters */
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if numbers should be parsed as integers only;
              `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` otherwise`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setRoundingMode(java.math.RoundingMode)', [
			[/* method description */
				[/* text */ 't', `Sets the `],
				[/* reference */ 'r', `java.math.RoundingMode`, `RoundingMode`],
				[/* text */ 't', ` used in this NumberFormat.
 The default implementation of this method in NumberFormat always
 throws `],
				[/* reference */ 'r', `java.lang.UnsupportedOperationException`, `UnsupportedOperationException`],
				[/* text */ 't', `.
 Subclasses which handle different rounding modes should override
 this method.`]
			],
			[/* parameters */
				[/* parameter */ 'roundingMode', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `RoundingMode`],
					[/* text */ 't', ` to be used`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `The default implementation
     always throws this exception`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `roundingMode`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
