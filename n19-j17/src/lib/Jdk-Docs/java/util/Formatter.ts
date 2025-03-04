import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.Formatter', [
	[/* class description */
		[/* text */ 't', `An interpreter for printf-style format strings.  This class provides support
 for layout justification and alignment, common formats for numeric, string,
 and date/time data, and locale-specific output.  Common Java types such as
 `],
		[/* inline code block */ 'i', `byte`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `java.math.BigDecimal`],
		[/* text */ 't', `, and `],
		[/* reference */ 'r', `java.util.Calendar`],
		[/* text */ 't', `
 are supported.  Limited formatting customization for arbitrary user types is
 provided through the `],
		[/* reference */ 'r', `java.util.Formattable`],
		[/* text */ 't', ` interface.

 `],
		[/* block */ 'b', ` Formatters are not necessarily safe for multithreaded access.  Thread
 safety is optional and is the responsibility of users of methods in this
 class.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Formatted printing for the Java language is heavily inspired by C's
 `],
			[/* inline code block */ 'i', `printf`],
			[/* text */ 't', `.  Although the format strings are similar to C, some
 customizations have been made to accommodate the Java language and exploit
 some of its features.  Also, Java formatting is more strict than C's; for
 example, if a conversion is incompatible with a flag, an exception will be
 thrown.  In C inapplicable flags are silently ignored.  The format strings
 are thus intended to be recognizable to C programmers but not necessarily
 completely compatible with those in C.

 `]
		]],
		[/* block */ 'b', ` Examples of expected usage:

 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `   StringBuilder sb = new StringBuilder();
   // Send all output to the Appendable object sb
   Formatter formatter = new Formatter(sb, Locale.US);

   // Explicit argument indices may be used to re-order output.
   formatter.format("%4$2s %3$2s %2$2s %1$2s", "a", "b", "c", "d")
   // -> " d  c  b  a"

   // Optional locale as the first argument can be used to get
   // locale-specific formatting of numbers.  The precision and width can be
   // given to round and align the value.
   formatter.format(Locale.FRANCE, "e = %+10.4f", Math.E);
   // -> "e =    +2,7183"

   // The '(' numeric flag may be used to format negative numbers with
   // parentheses rather than a minus sign.  Group separators are
   // automatically inserted.
   formatter.format("Amount gained or lost since last statement: $ %(,.2f",
                    balanceDelta);
   // -> "Amount gained or lost since last statement: $ (6,217.58)"
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Convenience methods for common formatting requests exist as illustrated
 by the following invocations:

 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `   // Writes a formatted string to System.out.
   System.out.format("Local time: %tT", Calendar.getInstance());
   // -> "Local time: 13:34:18"

   // Writes formatted output to System.err.
   System.err.printf("Unable to open file '%1$s': %2$s",
                     fileName, exception.getMessage());
   // -> "Unable to open file 'food': No such file or directory"
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Like C's `],
			[/* inline code block */ 'i', `sprintf(3)`],
			[/* text */ 't', `, Strings may be formatted using the static
 method `],
			[/* reference */ 'r', `java.String#format(java.lang.String,java.lang.Object...)`],
			[/* text */ 't', `:

 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', `   // Format a string containing a date.
   import java.util.Calendar;
   import java.util.GregorianCalendar;
   import static java.util.Calendar.*;

   Calendar c = new GregorianCalendar(1995, MAY, 23);
   String s = String.format("Duke's Birthday: %1$tb %1$te, %1$tY", c);
   // -> s == "Duke's Birthday: May 23, 1995"
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Organization`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` This specification is divided into two sections.  The first section, `],
			[/* text */ 't', `Summary`],
			[/* text */ 't', `, covers the basic formatting concepts.  This
 section is intended for users who want to get started quickly and are
 familiar with formatted printing in other programming languages.  The second
 section, `],
			[/* text */ 't', `Details`],
			[/* text */ 't', `, covers the specific implementation
 details.  It is intended for users who want more precise specification of
 formatting behavior.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Summary`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` This section is intended to provide a brief overview of formatting
 concepts.  For precise behavioral details, refer to the `],
			[/* text */ 't', `Details`],
			[/* text */ 't', ` section.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Format String Syntax`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Every method which produces formatted output requires a `],
			[/* text */ 't', `format
 string`],
			[/* text */ 't', ` and an `],
			[/* text */ 't', `argument list`],
			[/* text */ 't', `.  The format string is a `],
			[/* reference */ 'r', `java.lang.String`],
			[/* text */ 't', ` which may contain fixed text and one or more embedded `],
			[/* text */ 't', `format
 specifiers`],
			[/* text */ 't', `.  Consider the following example:

 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', `   Calendar c = ...;
   String s = String.format("Duke's Birthday: %1$tm %1$te,%1$tY", c);
 `]
		]],
		[/* text */ 't', `

 This format string is the first argument to the `],
		[/* inline code block */ 'i', `format`],
		[/* text */ 't', ` method.  It
 contains three format specifiers "`],
		[/* inline code block */ 'i', `%1$tm`],
		[/* text */ 't', `", "`],
		[/* inline code block */ 'i', `%1$te`],
		[/* text */ 't', `", and
 "`],
		[/* inline code block */ 'i', `%1$tY`],
		[/* text */ 't', `" which indicate how the arguments should be processed and
 where they should be inserted in the text.  The remaining portions of the
 format string are fixed text including `],
		[/* inline code block */ 'i', `"Dukes Birthday: "`],
		[/* text */ 't', ` and any
 other spaces or punctuation.

 The argument list consists of all arguments passed to the method after the
 format string.  In the above example, the argument list is of size one and
 consists of the `],
		[/* reference */ 'r', `java.util.Calendar`],
		[/* text */ 't', ` object `],
		[/* inline code block */ 'i', `c`],
		[/* text */ 't', `.

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` The format specifiers for general, character, and numeric types have
 the following syntax:

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', `   %[argument_index$][flags][width][.precision]conversion
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The optional `],
					[/* text */ 't', `argument_index`],
					[/* text */ 't', ` is a decimal integer indicating the
 position of the argument in the argument list.  The first argument is
 referenced by "`],
					[/* inline code block */ 'i', `1$`],
					[/* text */ 't', `", the second by "`],
					[/* inline code block */ 'i', `2$`],
					[/* text */ 't', `", etc.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The optional `],
					[/* text */ 't', `flags`],
					[/* text */ 't', ` is a set of characters that modify the output
 format.  The set of valid flags depends on the conversion.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The optional `],
					[/* text */ 't', `width`],
					[/* text */ 't', ` is a positive decimal integer indicating
 the minimum number of characters to be written to the output.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The optional `],
					[/* text */ 't', `precision`],
					[/* text */ 't', ` is a non-negative decimal integer usually
 used to restrict the number of characters.  The specific behavior depends on
 the conversion.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The required `],
					[/* text */ 't', `conversion`],
					[/* text */ 't', ` is a character indicating how the
 argument should be formatted.  The set of valid conversions for a given
 argument depends on the argument's data type.

 `]
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The format specifiers for types which are used to represents dates and
 times have the following syntax:

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', `   %[argument_index$][flags][width]conversion
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The optional `],
					[/* text */ 't', `argument_index`],
					[/* text */ 't', `, `],
					[/* text */ 't', `flags`],
					[/* text */ 't', ` and `],
					[/* text */ 't', `width`],
					[/* text */ 't', ` are
 defined as above.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The required `],
					[/* text */ 't', `conversion`],
					[/* text */ 't', ` is a two character sequence.  The first
 character is `],
					[/* inline code block */ 'i', `'t'`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `'T'`],
					[/* text */ 't', `.  The second character indicates
 the format to be used.  These characters are similar to but not completely
 identical to those defined by GNU `],
					[/* inline code block */ 'i', `date`],
					[/* text */ 't', ` and POSIX
 `],
					[/* inline code block */ 'i', `strftime(3c)`],
					[/* text */ 't', `.

 `]
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The format specifiers which do not correspond to arguments have the
 following syntax:

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', `   %[flags][width]conversion
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The optional `],
					[/* text */ 't', `flags`],
					[/* text */ 't', ` and `],
					[/* text */ 't', `width`],
					[/* text */ 't', ` is defined as above.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The required `],
					[/* text */ 't', `conversion`],
					[/* text */ 't', ` is a character indicating content to be
 inserted in the output.

 `]
				]]
			]],
			[/* block */ 'b', ''],
			[/* block */ 'b', '']
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Conversions `],
		[/* block */ 'b', ` Conversions are divided into the following categories:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `General`],
				[/* text */ 't', ` - may be applied to any argument
 type

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Character`],
				[/* text */ 't', ` - may be applied to basic types which represent
 Unicode characters: `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `, `],
				[/* reference */ 'r', `java.lang.Character`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `, `],
				[/* reference */ 'r', `java.lang.Byte`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `, and `],
				[/* reference */ 'r', `java.lang.Short`],
				[/* text */ 't', `. This conversion may also be
 applied to the types `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `java.lang.Integer`],
				[/* text */ 't', ` when `],
				[/* reference */ 'r', `java.Character#isValidCodePoint(int)`],
				[/* text */ 't', ` returns `],
				[/* inline code block */ 'i', `true`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Numeric`],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Integral`],
						[/* text */ 't', ` - may be applied to Java integral types: `],
						[/* inline code block */ 'i', `byte`],
						[/* text */ 't', `,
 `],
						[/* reference */ 'r', `java.lang.Byte`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `short`],
						[/* text */ 't', `, `],
						[/* reference */ 'r', `java.lang.Short`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `int`],
						[/* text */ 't', ` and `],
						[/* reference */ 'r', `java.lang.Integer`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `, `],
						[/* reference */ 'r', `java.lang.Long`],
						[/* text */ 't', `, and `],
						[/* reference */ 'r', `java.math.BigInteger`],
						[/* text */ 't', ` (but not `],
						[/* inline code block */ 'i', `char`],
						[/* text */ 't', ` or `],
						[/* reference */ 'r', `java.lang.Character`],
						[/* text */ 't', `)

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Floating Point`],
						[/* text */ 't', ` - may be applied to Java floating-point types:
 `],
						[/* inline code block */ 'i', `float`],
						[/* text */ 't', `, `],
						[/* reference */ 'r', `java.lang.Float`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', `, `],
						[/* reference */ 'r', `java.lang.Double`],
						[/* text */ 't', `, and `],
						[/* reference */ 'r', `java.math.BigDecimal`]
					]]
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Date/Time`],
				[/* text */ 't', ` - may be applied to Java types which are capable of
 encoding a date or time: `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `, `],
				[/* reference */ 'r', `java.lang.Long`],
				[/* text */ 't', `, `],
				[/* reference */ 'r', `java.util.Calendar`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.util.Date`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `java.time.temporal.TemporalAccessor`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Percent`],
				[/* text */ 't', ` - produces a literal `],
				[/* inline code block */ 'i', `'%'`],
				[/* text */ 't', `
 (`],
				[/* inline code block */ 'i', `'\\u0025'`],
				[/* text */ 't', `)

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Line Separator`],
				[/* text */ 't', ` - produces the platform-specific line separator

 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` For category `],
			[/* text */ 't', `General`],
			[/* text */ 't', `, `],
			[/* text */ 't', `Character`],
			[/* text */ 't', `, `],
			[/* text */ 't', `Numeric`],
			[/* text */ 't', `,
 `],
			[/* text */ 't', `Integral`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `Date/Time`],
			[/* text */ 't', ` conversion, unless otherwise specified,
 if the argument `],
			[/* text */ 't', `arg`],
			[/* text */ 't', ` is `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `, then the result is "`],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `".

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The following table summarizes the supported conversions.  Conversions
 denoted by an upper-case character (i.e. `],
			[/* inline code block */ 'i', `'B'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'H'`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `'S'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'C'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'X'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'E'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'G'`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `'A'`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `'T'`],
			[/* text */ 't', `) are the same as those for the corresponding
 lower-case conversion characters except that the result is converted to
 upper case according to the rules of the prevailing `],
			[/* reference */ 'r', `java.util.Locale`],
			[/* text */ 't', `. If there is no explicit locale specified, either at the
 construction of the instance or as a parameter to its method
 invocation, then the `],
			[/* reference */ 'r', `.Locale.Category#FORMAT`],
			[/* text */ 't', `
 is used.


 `]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` Conversion
     `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` Argument Category
     `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` Description
 `]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'b'`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `'B'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` general
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` If the argument `],
						[/* text */ 't', `arg`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, then the result is
     "`],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', `".  If `],
						[/* text */ 't', `arg`],
						[/* text */ 't', ` is a `],
						[/* inline code block */ 'i', `boolean`],
						[/* text */ 't', ` or `],
						[/* reference */ 'r', `java.lang.Boolean`],
						[/* text */ 't', `, then the result is the string returned by `],
						[/* reference */ 'r', `java.String#valueOf(boolean)`],
						[/* text */ 't', `.  Otherwise, the result is
     "true".

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'h'`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `'H'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` general
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result is obtained by invoking
     `],
						[/* inline code block */ 'i', `Integer.toHexString(arg.hashCode())`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'s'`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `'S'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` general
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` If `],
						[/* text */ 't', `arg`],
						[/* text */ 't', ` implements `],
						[/* reference */ 'r', `java.util.Formattable`],
						[/* text */ 't', `, then
     `],
						[/* reference */ 'r', `.Formattable#formatTo(java.util.Formatter,int,int,int)`],
						[/* text */ 't', ` is invoked. Otherwise, the
     result is obtained by invoking `],
						[/* inline code block */ 'i', `arg.toString()`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'c'`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `'C'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` character
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result is a Unicode character

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'d'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` integral
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result is formatted as a decimal integer

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'o'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` integral
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result is formatted as an octal integer

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'x'`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `'X'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` integral
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result is formatted as a hexadecimal integer

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'e'`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `'E'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` floating point
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result is formatted as a decimal number in computerized
     scientific notation

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'f'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` floating point
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result is formatted as a decimal number

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'g'`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `'G'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` floating point
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result is formatted using computerized scientific notation or
     decimal format, depending on the precision and the value after rounding.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'a'`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `'A'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` floating point
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result is formatted as a hexadecimal floating-point number with
     a significand and an exponent. This conversion is `],
						[/* text */ 't', `not`],
						[/* text */ 't', ` supported
     for the `],
						[/* inline code block */ 'i', `BigDecimal`],
						[/* text */ 't', ` type despite the latter's being in the
     `],
						[/* text */ 't', `floating point`],
						[/* text */ 't', ` argument category.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'t'`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `'T'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` date/time
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Prefix for date and time conversion characters.  See `],
						[/* text */ 't', `Date/Time Conversions`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'%'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` percent
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result is a literal `],
						[/* inline code block */ 'i', `'%'`],
						[/* text */ 't', ` (`],
						[/* inline code block */ 'i', `'\\u0025'`],
						[/* text */ 't', `)

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'n'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` line separator
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result is the platform-specific line separator

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Any characters not explicitly defined as conversions are illegal and are
 reserved for future extensions.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Date/Time Conversions`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The following date and time conversion suffix characters are defined for
 the `],
			[/* inline code block */ 'i', `'t'`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `'T'`],
			[/* text */ 't', ` conversions.  The types are similar to but
 not completely identical to those defined by GNU `],
			[/* inline code block */ 'i', `date`],
			[/* text */ 't', ` and POSIX
 `],
			[/* inline code block */ 'i', `strftime(3c)`],
			[/* text */ 't', `.  Additional conversion types are provided to access
 Java-specific functionality (e.g. `],
			[/* inline code block */ 'i', `'L'`],
			[/* text */ 't', ` for milliseconds within the
 second).

 `]
		]],
		[/* block */ 'b', ` The following conversion characters are used for formatting times:

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'H'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Hour of the day for the 24-hour clock, formatted as two digits with
     a leading zero as necessary i.e. `],
						[/* inline code block */ 'i', `00 - 23`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'I'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Hour for the 12-hour clock, formatted as two digits with a leading
     zero as necessary, i.e.  `],
						[/* inline code block */ 'i', `01 - 12`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'k'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Hour of the day for the 24-hour clock, i.e. `],
						[/* inline code block */ 'i', `0 - 23`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'l'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Hour for the 12-hour clock, i.e. `],
						[/* inline code block */ 'i', `1 - 12`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'M'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Minute within the hour formatted as two digits with a leading zero
     as necessary, i.e.  `],
						[/* inline code block */ 'i', `00 - 59`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'S'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Seconds within the minute, formatted as two digits with a leading
     zero as necessary, i.e. `],
						[/* inline code block */ 'i', `00 - 60`],
						[/* text */ 't', ` ("`],
						[/* inline code block */ 'i', `60`],
						[/* text */ 't', `" is a special
     value required to support leap seconds).

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'L'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Millisecond within the second formatted as three digits with
     leading zeros as necessary, i.e. `],
						[/* inline code block */ 'i', `000 - 999`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'N'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Nanosecond within the second, formatted as nine digits with leading
     zeros as necessary, i.e. `],
						[/* inline code block */ 'i', `000000000 - 999999999`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'p'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Locale-specific `],
						[/* reference */ 'r', `java.DateFormatSymbols#getAmPmStrings()`],
						[/* text */ 't', ` marker
     in lower case, e.g."`],
						[/* inline code block */ 'i', `am`],
						[/* text */ 't', `" or "`],
						[/* inline code block */ 'i', `pm`],
						[/* text */ 't', `". Use of the conversion
     prefix `],
						[/* inline code block */ 'i', `'T'`],
						[/* text */ 't', ` forces this output to upper case.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'z'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* external link */ 'a', `http://www.ietf.org/rfc/rfc0822.txt`, `RFC 822`],
						[/* text */ 't', `
     style numeric time zone offset from GMT, e.g. `],
						[/* inline code block */ 'i', `-0800`],
						[/* text */ 't', `.  This
     value will be adjusted as necessary for Daylight Saving Time.  For
     `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `, `],
						[/* reference */ 'r', `java.lang.Long`],
						[/* text */ 't', `, and `],
						[/* reference */ 'r', `java.util.Date`],
						[/* text */ 't', ` the time zone used is
     the `],
						[/* reference */ 'r', `.TimeZone#getDefault()`],
						[/* text */ 't', ` for this
     instance of the Java virtual machine.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'Z'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` A string representing the abbreviation for the time zone.  This
     value will be adjusted as necessary for Daylight Saving Time.  For
     `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `, `],
						[/* reference */ 'r', `java.lang.Long`],
						[/* text */ 't', `, and `],
						[/* reference */ 'r', `java.util.Date`],
						[/* text */ 't', ` the  time zone used is
     the `],
						[/* reference */ 'r', `.TimeZone#getDefault()`],
						[/* text */ 't', ` for this
     instance of the Java virtual machine.  The Formatter's locale will
     supersede the locale of the argument (if any).

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'s'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Seconds since the beginning of the epoch starting at 1 January 1970
     `],
						[/* inline code block */ 'i', `00:00:00`],
						[/* text */ 't', ` UTC, i.e. `],
						[/* inline code block */ 'i', `Long.MIN_VALUE/1000`],
						[/* text */ 't', ` to
     `],
						[/* inline code block */ 'i', `Long.MAX_VALUE/1000`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'Q'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Milliseconds since the beginning of the epoch starting at 1 January
     1970 `],
						[/* inline code block */ 'i', `00:00:00`],
						[/* text */ 't', ` UTC, i.e. `],
						[/* inline code block */ 'i', `Long.MIN_VALUE`],
						[/* text */ 't', ` to
     `],
						[/* inline code block */ 'i', `Long.MAX_VALUE`],
						[/* text */ 't', `.

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` The following conversion characters are used for formatting dates:

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'B'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Locale-specific `],
						[/* reference */ 'r', `java.DateFormatSymbols#getMonths()`],
						[/* text */ 't', `, e.g. `],
						[/* inline code block */ 'i', `"January"`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `"February"`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'b'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Locale-specific `],
						[/* reference */ 'r', `java.DateFormatSymbols#getShortMonths()`],
						[/* text */ 't', `,
     e.g. `],
						[/* inline code block */ 'i', `"Jan"`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `"Feb"`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'h'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Same as `],
						[/* inline code block */ 'i', `'b'`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'A'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Locale-specific full name of the `],
						[/* reference */ 'r', `java.DateFormatSymbols#getWeekdays()`],
						[/* text */ 't', `,
     e.g. `],
						[/* inline code block */ 'i', `"Sunday"`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `"Monday"`],
						[/* text */ 't', `

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'a'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Locale-specific short name of the `],
						[/* reference */ 'r', `java.DateFormatSymbols#getShortWeekdays()`],
						[/* text */ 't', `,
     e.g. `],
						[/* inline code block */ 'i', `"Sun"`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `"Mon"`],
						[/* text */ 't', `

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'C'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Four-digit year divided by `],
						[/* inline code block */ 'i', `100`],
						[/* text */ 't', `, formatted as two digits
     with leading zero as necessary, i.e. `],
						[/* inline code block */ 'i', `00 - 99`],
						[/* text */ 't', `

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'Y'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Year, formatted as at least four digits with leading zeros as
     necessary, e.g. `],
						[/* inline code block */ 'i', `0092`],
						[/* text */ 't', ` equals `],
						[/* inline code block */ 'i', `92`],
						[/* text */ 't', ` CE for the Gregorian
     calendar.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'y'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Last two digits of the year, formatted with leading zeros as
     necessary, i.e. `],
						[/* inline code block */ 'i', `00 - 99`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'j'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Day of year, formatted as three digits with leading zeros as
     necessary, e.g. `],
						[/* inline code block */ 'i', `001 - 366`],
						[/* text */ 't', ` for the Gregorian calendar.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'m'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Month, formatted as two digits with leading zeros as necessary,
     i.e. `],
						[/* inline code block */ 'i', `01 - 13`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'d'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Day of month, formatted as two digits with leading zeros as
     necessary, i.e. `],
						[/* inline code block */ 'i', `01 - 31`],
						[/* text */ 't', `

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'e'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Day of month, formatted as two digits, i.e. `],
						[/* inline code block */ 'i', `1 - 31`],
						[/* text */ 't', `.

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` The following conversion characters are used for formatting common
 date/time compositions.

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'R'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Time formatted for the 24-hour clock as `],
						[/* inline code block */ 'i', `"%tH:%tM"`],
						[/* text */ 't', `

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'T'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Time formatted for the 24-hour clock as `],
						[/* inline code block */ 'i', `"%tH:%tM:%tS"`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'r'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Time formatted for the 12-hour clock as `],
						[/* inline code block */ 'i', `"%tI:%tM:%tS %Tp"`],
						[/* text */ 't', `.
     The location of the morning or afternoon marker (`],
						[/* inline code block */ 'i', `'%Tp'`],
						[/* text */ 't', `) may be
     locale-dependent.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'D'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Date formatted as `],
						[/* inline code block */ 'i', `"%tm/%td/%ty"`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'F'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* external link */ 'a', `http://www.w3.org/TR/NOTE-datetime`, `ISO 8601`],
						[/* text */ 't', `
     complete date formatted as `],
						[/* inline code block */ 'i', `"%tY-%tm-%td"`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'c'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Date and time formatted as `],
						[/* inline code block */ 'i', `"%ta %tb %td %tT %tZ %tY"`],
						[/* text */ 't', `,
     e.g. `],
						[/* inline code block */ 'i', `"Sun Jul 20 16:17:00 EDT 1969"`],
						[/* text */ 't', `.

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Any characters not explicitly defined as date/time conversion suffixes
 are illegal and are reserved for future extensions.

 `],
		[/* block */ 'b', ` Flags `],
		[/* block */ 'b', [
			[/* text */ 't', ` The following table summarizes the supported flags.  `],
			[/* text */ 't', `y`],
			[/* text */ 't', ` means the
 flag is supported for the indicated argument types.

 `]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` Flag `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` General
     `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` Character `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` Integral
     `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` Floating Point
     `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` Date/Time
     `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` Description
 `]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` '-' `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result will be left-justified.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` '#' `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y`],
						[/* text */ 't', `1`, 'sup'],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y`],
						[/* text */ 't', `3`, 'sup'],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result should use a conversion-dependent alternate form

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` '+' `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y`],
						[/* text */ 't', `4`, 'sup'],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result will always include a sign

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` '  ' `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y`],
						[/* text */ 't', `4`, 'sup'],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result will include a leading space for positive values

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` '0' `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result will be zero-padded

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` ',' `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y`],
						[/* text */ 't', `2`, 'sup'],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y`],
						[/* text */ 't', `5`, 'sup'],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result will include locale-specific `],
						[/* reference */ 'r', `java.DecimalFormatSymbols#getGroupingSeparator()`],
						[/* text */ 't', `

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` '(' `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y`],
						[/* text */ 't', `4`, 'sup'],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` y`],
						[/* text */ 't', `5`, 'sup'],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` -
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result will enclose negative numbers in parentheses

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `1`, 'sup'],
			[/* text */ 't', ` Depends on the definition of `],
			[/* reference */ 'r', `java.util.Formattable`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `2`, 'sup'],
			[/* text */ 't', ` For `],
			[/* inline code block */ 'i', `'d'`],
			[/* text */ 't', ` conversion only.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `3`, 'sup'],
			[/* text */ 't', ` For `],
			[/* inline code block */ 'i', `'o'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'x'`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `'X'`],
			[/* text */ 't', `
 conversions only.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `4`, 'sup'],
			[/* text */ 't', ` For `],
			[/* inline code block */ 'i', `'d'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'o'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'x'`],
			[/* text */ 't', `, and
 `],
			[/* inline code block */ 'i', `'X'`],
			[/* text */ 't', ` conversions applied to `],
			[/* reference */ 'r', `java.math.BigInteger`],
			[/* text */ 't', `
 or `],
			[/* inline code block */ 'i', `'d'`],
			[/* text */ 't', ` applied to `],
			[/* inline code block */ 'i', `byte`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Byte`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `short`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Short`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.lang.Integer`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `java.lang.Long`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `5`, 'sup'],
			[/* text */ 't', ` For `],
			[/* inline code block */ 'i', `'e'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'E'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'f'`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `'g'`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `'G'`],
			[/* text */ 't', ` conversions only.

 `]
		]],
		[/* block */ 'b', ` Any characters not explicitly defined as flags are illegal and are
 reserved for future extensions.

 `],
		[/* block */ 'b', ` Width `],
		[/* block */ 'b', ` The width is the minimum number of characters to be written to the
 output.  For the line separator conversion, width is not applicable; if it
 is provided, an exception will be thrown.

 `],
		[/* block */ 'b', ` Precision `],
		[/* block */ 'b', ` For general argument types, the precision is the maximum number of
 characters to be written to the output.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` For the floating-point conversions `],
			[/* inline code block */ 'i', `'a'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'A'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'e'`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `'E'`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `'f'`],
			[/* text */ 't', ` the precision is the number of digits after the
 radix point.  If the conversion is `],
			[/* inline code block */ 'i', `'g'`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `'G'`],
			[/* text */ 't', `, then the
 precision is the total number of digits in the resulting magnitude after
 rounding.

 `]
		]],
		[/* block */ 'b', ` For character, integral, and date/time argument types and the percent
 and line separator conversions, the precision is not applicable; if a
 precision is provided, an exception will be thrown.

 `],
		[/* block */ 'b', ` Argument Index `],
		[/* block */ 'b', [
			[/* text */ 't', ` The argument index is a decimal integer indicating the position of the
 argument in the argument list.  The first argument is referenced by
 "`],
			[/* inline code block */ 'i', `1$`],
			[/* text */ 't', `", the second by "`],
			[/* inline code block */ 'i', `2$`],
			[/* text */ 't', `", etc.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Another way to reference arguments by position is to use the
 `],
			[/* inline code block */ 'i', `'<'`],
			[/* text */ 't', ` (`],
			[/* inline code block */ 'i', `'\\u003c'`],
			[/* text */ 't', `) flag, which causes the argument for
 the previous format specifier to be re-used.  For example, the following two
 statements would produce identical strings:

 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', `   Calendar c = ...;
   String s1 = String.format("Duke's Birthday: %1$tm %1$te,%1$tY", c);

   String s2 = String.format("Duke's Birthday: %1$tm %<te,%<tY", c);
 `]
		]],
		[/* new line */ 'n'],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Details`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` This section is intended to provide behavioral details for formatting,
 including conditions and exceptions, supported data types, localization, and
 interactions between flags, conversions, and data types.  For an overview of
 formatting concepts, refer to the `],
			[/* text */ 't', `Summary`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Any characters not explicitly defined as conversions, date/time
 conversion suffixes, or flags are illegal and are reserved for
 future extensions.  Use of such a character in a format string will
 cause an `],
			[/* reference */ 'r', `java.util.UnknownFormatConversionException`],
			[/* text */ 't', ` or `],
			[/* reference */ 'r', `java.util.UnknownFormatFlagsException`],
			[/* text */ 't', ` to be thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` If the format specifier contains a width or precision with an invalid
 value or which is otherwise unsupported, then a `],
			[/* reference */ 'r', `java.util.IllegalFormatWidthException`],
			[/* text */ 't', ` or `],
			[/* reference */ 'r', `java.util.IllegalFormatPrecisionException`],
			[/* text */ 't', `
 respectively will be thrown. Similarly, values of zero for an argument
 index will result in an `],
			[/* reference */ 'r', `java.util.IllegalFormatException`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` If a format specifier contains a conversion character that is not
 applicable to the corresponding argument, then an `],
			[/* reference */ 'r', `java.util.IllegalFormatConversionException`],
			[/* text */ 't', ` will be thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Values of `],
			[/* text */ 't', `precision`],
			[/* text */ 't', ` must be in the range zero to
 `],
			[/* reference */ 'r', `java.Integer#MAX_VALUE`],
			[/* text */ 't', `, inclusive, otherwise
 `],
			[/* reference */ 'r', `java.util.IllegalFormatPrecisionException`],
			[/* text */ 't', ` is thrown.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Values of `],
			[/* text */ 't', `width`],
			[/* text */ 't', ` must be in the range one to
 `],
			[/* reference */ 'r', `java.Integer#MAX_VALUE`],
			[/* text */ 't', `, inclusive, otherwise
 `],
			[/* reference */ 'r', `java.util.IllegalFormatWidthException`],
			[/* text */ 't', ` will be thrown
 Note that widths can appear to have a negative value, but the negative sign
 is a `],
			[/* text */ 't', `flag`],
			[/* text */ 't', `. For example in the format string `],
			[/* inline code block */ 'i', `"%-20s"`],
			[/* text */ 't', ` the
 `],
			[/* text */ 't', `width`],
			[/* text */ 't', ` is `],
			[/* text */ 't', `20`],
			[/* text */ 't', ` and the `],
			[/* text */ 't', `flag`],
			[/* text */ 't', ` is "-".`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Values of `],
			[/* text */ 't', `index`],
			[/* text */ 't', ` must be in the range one to
 `],
			[/* reference */ 'r', `java.Integer#MAX_VALUE`],
			[/* text */ 't', `, inclusive, otherwise
 `],
			[/* reference */ 'r', `java.util.IllegalFormatException`],
			[/* text */ 't', ` will be thrown.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` All specified exceptions may be thrown by any of the `],
			[/* inline code block */ 'i', `format`],
			[/* text */ 't', `
 methods of `],
			[/* inline code block */ 'i', `Formatter`],
			[/* text */ 't', ` as well as by any `],
			[/* inline code block */ 'i', `format`],
			[/* text */ 't', ` convenience
 methods such as `],
			[/* reference */ 'r', `java.String#format(java.lang.String,java.lang.Object...)`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `java.PrintStream#printf(java.lang.String,java.lang.Object...)`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` For category `],
			[/* text */ 't', `General`],
			[/* text */ 't', `, `],
			[/* text */ 't', `Character`],
			[/* text */ 't', `, `],
			[/* text */ 't', `Numeric`],
			[/* text */ 't', `,
 `],
			[/* text */ 't', `Integral`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `Date/Time`],
			[/* text */ 't', ` conversion, unless otherwise specified,
 if the argument `],
			[/* text */ 't', `arg`],
			[/* text */ 't', ` is `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `, then the result is "`],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `".

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Conversions denoted by an upper-case character (i.e. `],
			[/* inline code block */ 'i', `'B'`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `'H'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'S'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'C'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'X'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'E'`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `'G'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'A'`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `'T'`],
			[/* text */ 't', `) are the same as those for the
 corresponding lower-case conversion characters except that the result is
 converted to upper case according to the rules of the prevailing `],
			[/* reference */ 'r', `java.util.Locale`],
			[/* text */ 't', `. If there is no explicit locale specified,
 either at the construction of the instance or as a parameter to its method
 invocation, then the `],
			[/* reference */ 'r', `.Locale.Category#FORMAT`],
			[/* text */ 't', `
 is used.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `General`]
		]],
		[/* block */ 'b', ` The following general conversions may be applied to any argument type:

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', ''],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'b'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0062'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Produces either "`],
						[/* inline code block */ 'i', `true`],
						[/* text */ 't', `" or "`],
						[/* inline code block */ 'i', `false`],
						[/* text */ 't', `" as returned by
     `],
						[/* reference */ 'r', `java.Boolean#toString(boolean)`],
						[/* text */ 't', `.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` If the argument is `],
							[/* inline code block */ 'i', `null`],
							[/* text */ 't', `, then the result is
     "`],
							[/* inline code block */ 'i', `false`],
							[/* text */ 't', `".  If the argument is a `],
							[/* inline code block */ 'i', `boolean`],
							[/* text */ 't', ` or `],
							[/* reference */ 'r', `java.lang.Boolean`],
							[/* text */ 't', `, then the result is the string returned by `],
							[/* reference */ 'r', `java.String#valueOf(boolean)`],
							[/* text */ 't', `.  Otherwise, the result is
     "`],
							[/* inline code block */ 'i', `true`],
							[/* text */ 't', `".

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', ` flag is given, then a `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'B'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0042'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The upper-case variant of `],
						[/* inline code block */ 'i', `'b'`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'h'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0068'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Produces a string representing the hash code value of the object.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` The result is obtained by invoking
     `],
							[/* inline code block */ 'i', `Integer.toHexString(arg.hashCode())`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', ` flag is given, then a `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'H'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0048'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The upper-case variant of `],
						[/* inline code block */ 'i', `'h'`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'s'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0073'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Produces a string.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` If the argument implements `],
							[/* reference */ 'r', `java.util.Formattable`],
							[/* text */ 't', `, then
     its `],
							[/* reference */ 'r', `.Formattable#formatTo(java.util.Formatter,int,int,int)`],
							[/* text */ 't', ` method is invoked.
     Otherwise, the result is obtained by invoking the argument's
     `],
							[/* inline code block */ 'i', `toString()`],
							[/* text */ 't', ` method.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', ` flag is given and the argument is not a `],
							[/* reference */ 'r', `java.util.Formattable`],
							[/* text */ 't', `, then a `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', `
     will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'S'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0053'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The upper-case variant of `],
						[/* inline code block */ 'i', `'s'`],
						[/* text */ 't', `.

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The following `],
			[/* text */ 't', `flags`],
			[/* text */ 't', ` apply to general conversions:

 `]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'-'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u002d'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Left justifies the output.  Spaces (`],
						[/* inline code block */ 'i', `'\\u0020'`],
						[/* text */ 't', `) will be
     added at the end of the converted value as required to fill the minimum
     width of the field.  If the width is not provided, then a `],
						[/* reference */ 'r', `java.util.MissingFormatWidthException`],
						[/* text */ 't', ` will be thrown.  If this flag is not given
     then the output will be right-justified.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'#'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0023'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output use an alternate form.  The definition of the
     form is specified by the conversion.

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* text */ 't', `width`],
			[/* text */ 't', ` is the minimum number of characters to
 be written to the
 output.  If the length of the converted value is less than the width then
 the output will be padded by `],
			[/* inline code block */ 'i', `' '`],
			[/* text */ 't', ` (`],
			[/* inline code block */ 'i', `'\\u0020'`],
			[/* text */ 't', `)
 until the total number of characters equals the width.  The padding is on
 the left by default.  If the `],
			[/* inline code block */ 'i', `'-'`],
			[/* text */ 't', ` flag is given, then the padding
 will be on the right.  If the width is not specified then there is no
 minimum.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The precision is the maximum number of characters to be written to the
 output.  The precision is applied before the width, thus the output will be
 truncated to `],
			[/* inline code block */ 'i', `precision`],
			[/* text */ 't', ` characters even if the width is greater than
 the precision.  If the precision is not specified then there is no explicit
 limit on the number of characters.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Character`]
		]],
		[/* text */ 't', `

 This conversion may be applied to `],
		[/* inline code block */ 'i', `char`],
		[/* text */ 't', ` and `],
		[/* reference */ 'r', `java.lang.Character`],
		[/* text */ 't', `.  It
 may also be applied to the types `],
		[/* inline code block */ 'i', `byte`],
		[/* text */ 't', `, `],
		[/* reference */ 'r', `java.lang.Byte`],
		[/* text */ 't', `,
 `],
		[/* inline code block */ 'i', `short`],
		[/* text */ 't', `, and `],
		[/* reference */ 'r', `java.lang.Short`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', ` and `],
		[/* reference */ 'r', `java.lang.Integer`],
		[/* text */ 't', ` when
 `],
		[/* reference */ 'r', `java.Character#isValidCodePoint(int)`],
		[/* text */ 't', ` returns `],
		[/* inline code block */ 'i', `true`],
		[/* text */ 't', `.  If it returns
 `],
		[/* inline code block */ 'i', `false`],
		[/* text */ 't', ` then an `],
		[/* reference */ 'r', `java.util.IllegalFormatCodePointException`],
		[/* text */ 't', ` will be
 thrown.

 `],
		[/* block */ 'b', ''],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'c'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0063'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Formats the argument as a Unicode character as described in `],
						[/* text */ 't', `Unicode Character Representation`],
						[/* text */ 't', `.  This may be more than one 16-bit `],
						[/* inline code block */ 'i', `char`],
						[/* text */ 't', ` in
     the case where the argument represents a supplementary character.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', ` flag is given, then a `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'C'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0043'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The upper-case variant of `],
						[/* inline code block */ 'i', `'c'`],
						[/* text */ 't', `.

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* inline code block */ 'i', `'-'`],
			[/* text */ 't', ` flag defined for `],
			[/* text */ 't', `General conversions`],
			[/* text */ 't', ` applies.  If the `],
			[/* inline code block */ 'i', `'#'`],
			[/* text */ 't', ` flag is given, then a `],
			[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
			[/* text */ 't', ` will be thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The width is defined as for `],
			[/* text */ 't', `General conversions`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The precision is not applicable.  If the precision is specified then an
 `],
			[/* reference */ 'r', `java.util.IllegalFormatPrecisionException`],
			[/* text */ 't', ` will be thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Numeric`]
		]],
		[/* block */ 'b', ` Numeric conversions are divided into the following categories:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Byte, Short, Integer, and Long`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `BigInteger`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Float and Double`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `BigDecimal`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Numeric types will be formatted according to the following algorithm:

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Number Localization Algorithm`]
		]],
		[/* block */ 'b', ` After digits are obtained for the integer part, fractional part, and
 exponent (as appropriate for the data type), the following transformation
 is applied:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` Each digit character `],
				[/* text */ 't', `d`],
				[/* text */ 't', ` in the string is replaced by a
 locale-specific digit computed relative to the current locale's
 `],
				[/* reference */ 'r', `java.DecimalFormatSymbols#getZeroDigit()`],
				[/* text */ 't', `z`],
				[/* text */ 't', `; that is `],
				[/* text */ 't', `d - `],
				[/* inline code block */ 'i', `'0'`],
				[/* text */ 't', ` + z`],
				[/* text */ 't', `.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` If a decimal separator is present, a locale-specific `],
				[/* reference */ 'r', `java.DecimalFormatSymbols#getDecimalSeparator()`],
				[/* text */ 't', ` is
 substituted.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` If the `],
				[/* inline code block */ 'i', `','`],
				[/* text */ 't', ` (`],
				[/* inline code block */ 'i', `'\\u002c'`],
				[/* text */ 't', `)
 `],
				[/* text */ 't', `flag`],
				[/* text */ 't', ` is given, then the locale-specific `],
				[/* reference */ 'r', `java.DecimalFormatSymbols#getGroupingSeparator()`],
				[/* text */ 't', ` is
 inserted by scanning the integer part of the string from least significant
 to most significant digits and inserting a separator at intervals defined by
 the locale's `],
				[/* reference */ 'r', `java.DecimalFormat#getGroupingSize()`],
				[/* text */ 't', `.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` If the `],
				[/* inline code block */ 'i', `'0'`],
				[/* text */ 't', ` flag is given, then the locale-specific `],
				[/* reference */ 'r', `java.DecimalFormatSymbols#getZeroDigit()`],
				[/* text */ 't', ` are inserted
 after the sign character, if any, and before the first non-zero digit, until
 the length of the string is equal to the requested field width.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` If the value is negative and the `],
				[/* inline code block */ 'i', `'('`],
				[/* text */ 't', ` flag is given, then a
 `],
				[/* inline code block */ 'i', `'('`],
				[/* text */ 't', ` (`],
				[/* inline code block */ 'i', `'\\u0028'`],
				[/* text */ 't', `) is prepended and a `],
				[/* inline code block */ 'i', `')'`],
				[/* text */ 't', `
 (`],
				[/* inline code block */ 'i', `'\\u0029'`],
				[/* text */ 't', `) is appended.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` If the value is negative (or floating-point negative zero) and
 `],
				[/* inline code block */ 'i', `'('`],
				[/* text */ 't', ` flag is not given, then a `],
				[/* inline code block */ 'i', `'-'`],
				[/* text */ 't', ` (`],
				[/* inline code block */ 'i', `'\\u002d'`],
				[/* text */ 't', `)
 is prepended.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` If the `],
				[/* inline code block */ 'i', `'+'`],
				[/* text */ 't', ` flag is given and the value is positive or zero (or
 floating-point positive zero), then a `],
				[/* inline code block */ 'i', `'+'`],
				[/* text */ 't', ` (`],
				[/* inline code block */ 'i', `'\\u002b'`],
				[/* text */ 't', `)
 will be prepended.

 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` If the value is NaN or positive infinity the literal strings "NaN" or
 "Infinity" respectively, will be output.  If the value is negative infinity,
 then the output will be "(Infinity)" if the `],
			[/* inline code block */ 'i', `'('`],
			[/* text */ 't', ` flag is given
 otherwise the output will be "-Infinity".  These values are not localized.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Byte, Short, Integer, and Long`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The following conversions may be applied to `],
			[/* inline code block */ 'i', `byte`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Byte`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `short`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Short`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.lang.Integer`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `java.lang.Long`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', ''],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'d'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0064'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Formats the argument as a decimal integer. The `],
						[/* text */ 't', `localization algorithm`],
						[/* text */ 't', ` is applied.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'0'`],
							[/* text */ 't', ` flag is given and the value is negative, then
     the zero padding will occur after the sign.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', ` flag is given then a `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'o'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u006f'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Formats the argument as an integer in base eight.  No localization
     is applied.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `x`],
							[/* text */ 't', ` is negative then the result will be an unsigned value
     generated by adding 2`],
							[/* text */ 't', `n`, 'sup'],
							[/* text */ 't', ` to the value where `],
							[/* inline code block */ 'i', `n`],
							[/* text */ 't', ` is the
     number of bits in the type as returned by the static `],
							[/* inline code block */ 'i', `SIZE`],
							[/* text */ 't', ` field
     in the `],
							[/* reference */ 'r', `java.Byte#SIZE`],
							[/* text */ 't', `, `],
							[/* reference */ 'r', `java.Short#SIZE`],
							[/* text */ 't', `,
     `],
							[/* reference */ 'r', `java.Integer#SIZE`],
							[/* text */ 't', `, or `],
							[/* reference */ 'r', `java.Long#SIZE`],
							[/* text */ 't', `
     classes as appropriate.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', ` flag is given then the output will always begin
     with the radix indicator `],
							[/* inline code block */ 'i', `'0'`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'0'`],
							[/* text */ 't', ` flag is given then the output will be padded
     with leading zeros to the field width following any indication of sign.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* inline code block */ 'i', `'('`],
							[/* text */ 't', `, `],
							[/* inline code block */ 'i', `'+'`],
							[/* text */ 't', `, '  ', or `],
							[/* inline code block */ 'i', `','`],
							[/* text */ 't', ` flags
     are given then a `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', ` will be
     thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'x'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0078'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Formats the argument as an integer in base sixteen. No
     localization is applied.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `x`],
							[/* text */ 't', ` is negative then the result will be an unsigned value
     generated by adding 2`],
							[/* text */ 't', `n`, 'sup'],
							[/* text */ 't', ` to the value where `],
							[/* inline code block */ 'i', `n`],
							[/* text */ 't', ` is the
     number of bits in the type as returned by the static `],
							[/* inline code block */ 'i', `SIZE`],
							[/* text */ 't', ` field
     in the `],
							[/* reference */ 'r', `java.Byte#SIZE`],
							[/* text */ 't', `, `],
							[/* reference */ 'r', `java.Short#SIZE`],
							[/* text */ 't', `,
     `],
							[/* reference */ 'r', `java.Integer#SIZE`],
							[/* text */ 't', `, or `],
							[/* reference */ 'r', `java.Long#SIZE`],
							[/* text */ 't', `
     classes as appropriate.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', ` flag is given then the output will always begin
     with the radix indicator `],
							[/* inline code block */ 'i', `"0x"`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'0'`],
							[/* text */ 't', ` flag is given then the output will be padded to
     the field width with leading zeros after the radix indicator or sign (if
     present).

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* inline code block */ 'i', `'('`],
							[/* text */ 't', `, `],
							[/* inline code block */ 'i', `' '`],
							[/* text */ 't', `, `],
							[/* inline code block */ 'i', `'+'`],
							[/* text */ 't', `, or
     `],
							[/* inline code block */ 'i', `','`],
							[/* text */ 't', ` flags are given then a `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'X'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0058'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The upper-case variant of `],
						[/* inline code block */ 'i', `'x'`],
						[/* text */ 't', `.  The entire string
     representing the number will be converted to `],
						[/* reference */ 'r', `java.String#toUpperCase(java.util.Locale)`],
						[/* text */ 't', ` including the `],
						[/* inline code block */ 'i', `'x'`],
						[/* text */ 't', ` (if any) and
     all hexadecimal digits `],
						[/* inline code block */ 'i', `'a'`],
						[/* text */ 't', ` - `],
						[/* inline code block */ 'i', `'f'`],
						[/* text */ 't', `
     (`],
						[/* inline code block */ 'i', `'\\u0061'`],
						[/* text */ 't', ` -  `],
						[/* inline code block */ 'i', `'\\u0066'`],
						[/* text */ 't', `).

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` If the conversion is `],
			[/* inline code block */ 'i', `'o'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'x'`],
			[/* text */ 't', `, or `],
			[/* inline code block */ 'i', `'X'`],
			[/* text */ 't', ` and
 both the `],
			[/* inline code block */ 'i', `'#'`],
			[/* text */ 't', ` and the `],
			[/* inline code block */ 'i', `'0'`],
			[/* text */ 't', ` flags are given, then result will
 contain the radix indicator (`],
			[/* inline code block */ 'i', `'0'`],
			[/* text */ 't', ` for octal and `],
			[/* inline code block */ 'i', `"0x"`],
			[/* text */ 't', ` or
 `],
			[/* inline code block */ 'i', `"0X"`],
			[/* text */ 't', ` for hexadecimal), some number of zeros (based on the width),
 and the value.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` If the `],
			[/* inline code block */ 'i', `'-'`],
			[/* text */ 't', ` flag is not given, then the space padding will occur
 before the sign.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The following `],
			[/* text */ 't', `flags`],
			[/* text */ 't', ` apply to numeric integral
 conversions:

 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', ''],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'+'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u002b'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to include a positive sign for all positive
     numbers.  If this flag is not given then only negative values will
     include a sign.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` If both the `],
							[/* inline code block */ 'i', `'+'`],
							[/* text */ 't', ` and `],
							[/* inline code block */ 'i', `' '`],
							[/* text */ 't', ` flags are given
     then an `],
							[/* reference */ 'r', `java.util.IllegalFormatFlagsException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `' '`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0020'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to include a single extra space
     (`],
						[/* inline code block */ 'i', `'\\u0020'`],
						[/* text */ 't', `) for non-negative values.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` If both the `],
							[/* inline code block */ 'i', `'+'`],
							[/* text */ 't', ` and `],
							[/* inline code block */ 'i', `' '`],
							[/* text */ 't', ` flags are given
     then an `],
							[/* reference */ 'r', `java.util.IllegalFormatFlagsException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'0'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0030'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to be padded with leading `],
						[/* reference */ 'r', `java.DecimalFormatSymbols#getZeroDigit()`],
						[/* text */ 't', ` to the minimum field
     width following any sign or radix indicator except when converting NaN
     or infinity.  If the width is not provided, then a `],
						[/* reference */ 'r', `java.util.MissingFormatWidthException`],
						[/* text */ 't', ` will be thrown.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` If both the `],
							[/* inline code block */ 'i', `'-'`],
							[/* text */ 't', ` and `],
							[/* inline code block */ 'i', `'0'`],
							[/* text */ 't', ` flags are given then an
     `],
							[/* reference */ 'r', `java.util.IllegalFormatFlagsException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `','`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u002c'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to include the locale-specific `],
						[/* reference */ 'r', `java.DecimalFormatSymbols#getGroupingSeparator()`],
						[/* text */ 't', ` as
     described in the `],
						[/* text */ 't', `"group" section`],
						[/* text */ 't', ` of the
     localization algorithm.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'('`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0028'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to prepend a `],
						[/* inline code block */ 'i', `'('`],
						[/* text */ 't', `
     (`],
						[/* inline code block */ 'i', `'\\u0028'`],
						[/* text */ 't', `) and append a `],
						[/* inline code block */ 'i', `')'`],
						[/* text */ 't', `
     (`],
						[/* inline code block */ 'i', `'\\u0029'`],
						[/* text */ 't', `) to negative values.

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` If no `],
			[/* text */ 't', `flags`],
			[/* text */ 't', ` are given the default formatting is
 as follows:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` The output is right-justified within the `],
				[/* inline code block */ 'i', `width`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` Negative numbers begin with a `],
				[/* inline code block */ 'i', `'-'`],
				[/* text */ 't', ` (`],
				[/* inline code block */ 'i', `'\\u002d'`],
				[/* text */ 't', `)

 `]
			]],
			[/* block */ 'b', ` Positive numbers and zero do not include a sign or extra leading
 space

 `],
			[/* block */ 'b', ` No grouping separators are included

 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* text */ 't', `width`],
			[/* text */ 't', ` is the minimum number of characters to
 be written to the output.  This includes any signs, digits, grouping
 separators, radix indicator, and parentheses.  If the length of the
 converted value is less than the width then the output will be padded by
 spaces (`],
			[/* inline code block */ 'i', `'\\u0020'`],
			[/* text */ 't', `) until the total number of characters equals
 width.  The padding is on the left by default.  If `],
			[/* inline code block */ 'i', `'-'`],
			[/* text */ 't', ` flag is
 given then the padding will be on the right.  If width is not specified then
 there is no minimum.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The precision is not applicable.  If precision is specified then an
 `],
			[/* reference */ 'r', `java.util.IllegalFormatPrecisionException`],
			[/* text */ 't', ` will be thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `BigInteger`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The following conversions may be applied to `],
			[/* reference */ 'r', `java.math.BigInteger`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', ''],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'d'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0064'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to be formatted as a decimal integer. The `],
						[/* text */ 't', `localization algorithm`],
						[/* text */ 't', ` is applied.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', ` flag is given `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'o'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u006f'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to be formatted as an integer in base eight.
     No localization is applied.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `x`],
							[/* text */ 't', ` is negative then the result will be a signed value
     beginning with `],
							[/* inline code block */ 'i', `'-'`],
							[/* text */ 't', ` (`],
							[/* inline code block */ 'i', `'\\u002d'`],
							[/* text */ 't', `).  Signed output is
     allowed for this type because unlike the primitive types it is not
     possible to create an unsigned equivalent without assuming an explicit
     data-type size.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `x`],
							[/* text */ 't', ` is positive or zero and the `],
							[/* inline code block */ 'i', `'+'`],
							[/* text */ 't', ` flag is given
     then the result will begin with `],
							[/* inline code block */ 'i', `'+'`],
							[/* text */ 't', ` (`],
							[/* inline code block */ 'i', `'\\u002b'`],
							[/* text */ 't', `).

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', ` flag is given then the output will always begin
     with `],
							[/* inline code block */ 'i', `'0'`],
							[/* text */ 't', ` prefix.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'0'`],
							[/* text */ 't', ` flag is given then the output will be padded
     with leading zeros to the field width following any indication of sign.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `','`],
							[/* text */ 't', ` flag is given then a `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'x'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0078'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to be formatted as an integer in base
     sixteen.  No localization is applied.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `x`],
							[/* text */ 't', ` is negative then the result will be a signed value
     beginning with `],
							[/* inline code block */ 'i', `'-'`],
							[/* text */ 't', ` (`],
							[/* inline code block */ 'i', `'\\u002d'`],
							[/* text */ 't', `).  Signed output is
     allowed for this type because unlike the primitive types it is not
     possible to create an unsigned equivalent without assuming an explicit
     data-type size.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `x`],
							[/* text */ 't', ` is positive or zero and the `],
							[/* inline code block */ 'i', `'+'`],
							[/* text */ 't', ` flag is given
     then the result will begin with `],
							[/* inline code block */ 'i', `'+'`],
							[/* text */ 't', ` (`],
							[/* inline code block */ 'i', `'\\u002b'`],
							[/* text */ 't', `).

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', ` flag is given then the output will always begin
     with the radix indicator `],
							[/* inline code block */ 'i', `"0x"`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'0'`],
							[/* text */ 't', ` flag is given then the output will be padded to
     the field width with leading zeros after the radix indicator or sign (if
     present).

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `','`],
							[/* text */ 't', ` flag is given then a `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'X'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0058'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The upper-case variant of `],
						[/* inline code block */ 'i', `'x'`],
						[/* text */ 't', `.  The entire string
     representing the number will be converted to `],
						[/* reference */ 'r', `java.String#toUpperCase(java.util.Locale)`],
						[/* text */ 't', ` including the `],
						[/* inline code block */ 'i', `'x'`],
						[/* text */ 't', ` (if any) and
     all hexadecimal digits `],
						[/* inline code block */ 'i', `'a'`],
						[/* text */ 't', ` - `],
						[/* inline code block */ 'i', `'f'`],
						[/* text */ 't', `
     (`],
						[/* inline code block */ 'i', `'\\u0061'`],
						[/* text */ 't', ` - `],
						[/* inline code block */ 'i', `'\\u0066'`],
						[/* text */ 't', `).

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` If the conversion is `],
			[/* inline code block */ 'i', `'o'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'x'`],
			[/* text */ 't', `, or `],
			[/* inline code block */ 'i', `'X'`],
			[/* text */ 't', ` and
 both the `],
			[/* inline code block */ 'i', `'#'`],
			[/* text */ 't', ` and the `],
			[/* inline code block */ 'i', `'0'`],
			[/* text */ 't', ` flags are given, then result will
 contain the base indicator (`],
			[/* inline code block */ 'i', `'0'`],
			[/* text */ 't', ` for octal and `],
			[/* inline code block */ 'i', `"0x"`],
			[/* text */ 't', ` or
 `],
			[/* inline code block */ 'i', `"0X"`],
			[/* text */ 't', ` for hexadecimal), some number of zeros (based on the width),
 and the value.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` If the `],
			[/* inline code block */ 'i', `'0'`],
			[/* text */ 't', ` flag is given and the value is negative, then the
 zero padding will occur after the sign.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` If the `],
			[/* inline code block */ 'i', `'-'`],
			[/* text */ 't', ` flag is not given, then the space padding will occur
 before the sign.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` All `],
			[/* text */ 't', `flags`],
			[/* text */ 't', ` defined for Byte, Short, Integer, and
 Long apply.  The `],
			[/* text */ 't', `default behavior`],
			[/* text */ 't', ` when no flags are
 given is the same as for Byte, Short, Integer, and Long.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The specification of `],
			[/* text */ 't', `width`],
			[/* text */ 't', ` is the same as
 defined for Byte, Short, Integer, and Long.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The precision is not applicable.  If precision is specified then an
 `],
			[/* reference */ 'r', `java.util.IllegalFormatPrecisionException`],
			[/* text */ 't', ` will be thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Float and Double`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The following conversions may be applied to `],
			[/* inline code block */ 'i', `float`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Float`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `double`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.lang.Double`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', ''],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'e'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0065'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to be formatted using `],
						[/* text */ 't', `computerized scientific notation`],
						[/* text */ 't', `.  The `],
						[/* text */ 't', `localization algorithm`],
						[/* text */ 't', ` is applied.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` The formatting of the magnitude `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` depends upon its value.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` is NaN or infinite, the literal strings "NaN" or
     "Infinity", respectively, will be output.  These values are not
     localized.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` is positive-zero or negative-zero, then the exponent
     will be `],
							[/* inline code block */ 'i', `"+00"`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` Otherwise, the result is a string that represents the sign and
     magnitude (absolute value) of the argument.  The formatting of the sign
     is described in the `],
							[/* text */ 't', `localization algorithm`],
							[/* text */ 't', `. The formatting of the magnitude `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` depends upon its
     value.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` Let `],
							[/* text */ 't', `n`],
							[/* text */ 't', ` be the unique integer such that 10`],
							[/* text */ 't', `n`, 'sup'],
							[/* text */ 't', `
     <= `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` < 10`],
							[/* text */ 't', `n+1`, 'sup'],
							[/* text */ 't', `; then let `],
							[/* text */ 't', `a`],
							[/* text */ 't', ` be the
     mathematically exact quotient of `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` and 10`],
							[/* text */ 't', `n`, 'sup'],
							[/* text */ 't', ` so
     that 1 <= `],
							[/* text */ 't', `a`],
							[/* text */ 't', ` < 10. The magnitude is then represented as the
     integer part of `],
							[/* text */ 't', `a`],
							[/* text */ 't', `, as a single decimal digit, followed by the
     decimal separator followed by decimal digits representing the fractional
     part of `],
							[/* text */ 't', `a`],
							[/* text */ 't', `, followed by the exponent symbol `],
							[/* inline code block */ 'i', `'e'`],
							[/* text */ 't', `
     (`],
							[/* inline code block */ 'i', `'\\u0065'`],
							[/* text */ 't', `), followed by the sign of the exponent, followed
     by a representation of `],
							[/* text */ 't', `n`],
							[/* text */ 't', ` as a decimal integer, as produced by the
     method `],
							[/* reference */ 'r', `java.Long#toString(long,int)`],
							[/* text */ 't', `, and zero-padded to include at
     least two digits.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The number of digits in the result for the fractional part of
     `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` or `],
							[/* text */ 't', `a`],
							[/* text */ 't', ` is equal to the precision.  If the precision is not
     specified then the default value is `],
							[/* inline code block */ 'i', `6`],
							[/* text */ 't', `. If the precision is less
     than the number of digits which would appear after the decimal point in
     the string returned by `],
							[/* reference */ 'r', `java.Float#toString(float)`],
							[/* text */ 't', ` or `],
							[/* reference */ 'r', `java.Double#toString(double)`],
							[/* text */ 't', ` respectively, then the value will be rounded
     using the `],
							[/* reference */ 'r', `java.RoundingMode#HALF_UP`],
							[/* text */ 't', `.  Otherwise, zeros may be appended to reach the precision.
     For a canonical representation of the value, use `],
							[/* reference */ 'r', `java.Float#toString(float)`],
							[/* text */ 't', ` or `],
							[/* reference */ 'r', `java.Double#toString(double)`],
							[/* text */ 't', ` as
     appropriate.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', `If the `],
							[/* inline code block */ 'i', `','`],
							[/* text */ 't', ` flag is given, then an `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'E'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0045'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The upper-case variant of `],
						[/* inline code block */ 'i', `'e'`],
						[/* text */ 't', `.  The exponent symbol
     will be `],
						[/* inline code block */ 'i', `'E'`],
						[/* text */ 't', ` (`],
						[/* inline code block */ 'i', `'\\u0045'`],
						[/* text */ 't', `).

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'g'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0067'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to be formatted in general scientific notation
     as described below. The `],
						[/* text */ 't', `localization algorithm`],
						[/* text */ 't', ` is applied.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` After rounding for the precision, the formatting of the resulting
     magnitude `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` depends on its value.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` is greater than or equal to 10`],
							[/* text */ 't', `-4`, 'sup'],
							[/* text */ 't', ` but less
     than 10`],
							[/* text */ 't', `precision`, 'sup'],
							[/* text */ 't', ` then it is represented in `],
							[/* text */ 't', `decimal format`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` is less than 10`],
							[/* text */ 't', `-4`, 'sup'],
							[/* text */ 't', ` or greater than or equal to
     10`],
							[/* text */ 't', `precision`, 'sup'],
							[/* text */ 't', `, then it is represented in `],
							[/* text */ 't', `computerized scientific notation`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The total number of significant digits in `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` is equal to the
     precision.  If the precision is not specified, then the default value is
     `],
							[/* inline code block */ 'i', `6`],
							[/* text */ 't', `.  If the precision is `],
							[/* inline code block */ 'i', `0`],
							[/* text */ 't', `, then it is taken to be
     `],
							[/* inline code block */ 'i', `1`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', ` flag is given then an `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'G'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0047'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The upper-case variant of `],
						[/* inline code block */ 'i', `'g'`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'f'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0066'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to be formatted using `],
						[/* text */ 't', `decimal format`],
						[/* text */ 't', `.  The `],
						[/* text */ 't', `localization algorithm`],
						[/* text */ 't', ` is
     applied.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` The result is a string that represents the sign and magnitude
     (absolute value) of the argument.  The formatting of the sign is
     described in the `],
							[/* text */ 't', `localization algorithm`],
							[/* text */ 't', `. The formatting of the magnitude `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` depends upon its
     value.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` NaN or infinite, the literal strings "NaN" or
     "Infinity", respectively, will be output.  These values are not
     localized.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The magnitude is formatted as the integer part of `],
							[/* text */ 't', `m`],
							[/* text */ 't', `, with no
     leading zeroes, followed by the decimal separator followed by one or
     more decimal digits representing the fractional part of `],
							[/* text */ 't', `m`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The number of digits in the result for the fractional part of
     `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` or `],
							[/* text */ 't', `a`],
							[/* text */ 't', ` is equal to the precision.  If the precision is not
     specified then the default value is `],
							[/* inline code block */ 'i', `6`],
							[/* text */ 't', `. If the precision is less
     than the number of digits which would appear after the decimal point in
     the string returned by `],
							[/* reference */ 'r', `java.Float#toString(float)`],
							[/* text */ 't', ` or `],
							[/* reference */ 'r', `java.Double#toString(double)`],
							[/* text */ 't', ` respectively, then the value will be rounded
     using the `],
							[/* reference */ 'r', `java.RoundingMode#HALF_UP`],
							[/* text */ 't', `.  Otherwise, zeros may be appended to reach the precision.
     For a canonical representation of the value, use `],
							[/* reference */ 'r', `java.Float#toString(float)`],
							[/* text */ 't', ` or `],
							[/* reference */ 'r', `java.Double#toString(double)`],
							[/* text */ 't', ` as
     appropriate.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'a'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0061'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to be formatted in hexadecimal exponential
     form.  No localization is applied.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` The result is a string that represents the sign and magnitude
     (absolute value) of the argument `],
							[/* text */ 't', `x`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `x`],
							[/* text */ 't', ` is negative or a negative-zero value then the result
     will begin with `],
							[/* inline code block */ 'i', `'-'`],
							[/* text */ 't', ` (`],
							[/* inline code block */ 'i', `'\\u002d'`],
							[/* text */ 't', `).

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `x`],
							[/* text */ 't', ` is positive or a positive-zero value and the
     `],
							[/* inline code block */ 'i', `'+'`],
							[/* text */ 't', ` flag is given then the result will begin with `],
							[/* inline code block */ 'i', `'+'`],
							[/* text */ 't', `
     (`],
							[/* inline code block */ 'i', `'\\u002b'`],
							[/* text */ 't', `).

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The formatting of the magnitude `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` depends upon its value.

     `]
						]],
						[/* list */ 'l', [
							[/* block */ 'b', ` If the value is NaN or infinite, the literal strings "NaN" or
     "Infinity", respectively, will be output.

     `],
							[/* block */ 'b', [
								[/* text */ 't', ` If `],
								[/* text */ 't', `m`],
								[/* text */ 't', ` is zero then it is represented by the string
     `],
								[/* inline code block */ 'i', `"0x0.0p0"`],
								[/* text */ 't', `.

     `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` If `],
								[/* text */ 't', `m`],
								[/* text */ 't', ` is a `],
								[/* inline code block */ 'i', `double`],
								[/* text */ 't', ` value with a normalized
     representation then substrings are used to represent the significand and
     exponent fields.  The significand is represented by the characters
     `],
								[/* inline code block */ 'i', `"0x1."`],
								[/* text */ 't', ` followed by the hexadecimal representation of the rest
     of the significand as a fraction.  The exponent is represented by
     `],
								[/* inline code block */ 'i', `'p'`],
								[/* text */ 't', ` (`],
								[/* inline code block */ 'i', `'\\u0070'`],
								[/* text */ 't', `) followed by a decimal string of the
     unbiased exponent as if produced by invoking `],
								[/* reference */ 'r', `java.Integer#toString(int)`],
								[/* text */ 't', ` on the exponent value.  If the
     precision is specified, the value is rounded to the given number of
     hexadecimal digits.

     `]
							]],
							[/* block */ 'b', [
								[/* text */ 't', ` If `],
								[/* text */ 't', `m`],
								[/* text */ 't', ` is a `],
								[/* inline code block */ 'i', `double`],
								[/* text */ 't', ` value with a subnormal
     representation then, unless the precision is specified to be in the range
     1 through 12, inclusive, the significand is represented by the characters
     `],
								[/* inline code block */ 'i', `'0x0.'`],
								[/* text */ 't', ` followed by the hexadecimal representation of the rest of
     the significand as a fraction, and the exponent represented by
     `],
								[/* inline code block */ 'i', `'p-1022'`],
								[/* text */ 't', `.  If the precision is in the interval
     [1, 12], the subnormal value is normalized such that it
     begins with the characters `],
								[/* inline code block */ 'i', `'0x1.'`],
								[/* text */ 't', `, rounded to the number of
     hexadecimal digits of precision, and the exponent adjusted
     accordingly.  Note that there must be at least one nonzero digit in a
     subnormal significand.

     `]
							]]
						]],
						[/* text */ 't', `

     `],
						[/* block */ 'b', ''],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'('`],
							[/* text */ 't', ` or `],
							[/* inline code block */ 'i', `','`],
							[/* text */ 't', ` flags are given, then a `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'A'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0041'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The upper-case variant of `],
						[/* inline code block */ 'i', `'a'`],
						[/* text */ 't', `.  The entire string
     representing the number will be converted to upper case including the
     `],
						[/* inline code block */ 'i', `'x'`],
						[/* text */ 't', ` (`],
						[/* inline code block */ 'i', `'\\u0078'`],
						[/* text */ 't', `) and `],
						[/* inline code block */ 'i', `'p'`],
						[/* text */ 't', `
     (`],
						[/* inline code block */ 'i', `'\\u0070'`],
						[/* text */ 't', ` and all hexadecimal digits `],
						[/* inline code block */ 'i', `'a'`],
						[/* text */ 't', ` -
     `],
						[/* inline code block */ 'i', `'f'`],
						[/* text */ 't', ` (`],
						[/* inline code block */ 'i', `'\\u0061'`],
						[/* text */ 't', ` - `],
						[/* inline code block */ 'i', `'\\u0066'`],
						[/* text */ 't', `).

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` All `],
			[/* text */ 't', `flags`],
			[/* text */ 't', ` defined for Byte, Short, Integer, and
 Long apply.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` If the `],
			[/* inline code block */ 'i', `'#'`],
			[/* text */ 't', ` flag is given, then the decimal separator will
 always be present.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` If no `],
			[/* text */ 't', `flags`],
			[/* text */ 't', ` are given the default formatting
 is as follows:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` The output is right-justified within the `],
				[/* inline code block */ 'i', `width`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` Negative numbers begin with a `],
				[/* inline code block */ 'i', `'-'`]
			]],
			[/* block */ 'b', ` Positive numbers and positive zero do not include a sign or extra
 leading space

 `],
			[/* block */ 'b', ` No grouping separators are included

 `],
			[/* block */ 'b', ` The decimal separator will only appear if a digit follows it

 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* text */ 't', `width`],
			[/* text */ 't', ` is the minimum number of characters
 to be written to the output.  This includes any signs, digits, grouping
 separators, decimal separators, exponential symbol, radix indicator,
 parentheses, and strings representing infinity and NaN as applicable.  If
 the length of the converted value is less than the width then the output
 will be padded by spaces (`],
			[/* inline code block */ 'i', `'\\u0020'`],
			[/* text */ 't', `) until the total number of
 characters equals width.  The padding is on the left by default.  If the
 `],
			[/* inline code block */ 'i', `'-'`],
			[/* text */ 't', ` flag is given then the padding will be on the right.  If width
 is not specified then there is no minimum.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` If the `],
			[/* text */ 't', `conversion`],
			[/* text */ 't', ` is `],
			[/* inline code block */ 'i', `'e'`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `'E'`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `'f'`],
			[/* text */ 't', `, then the precision is the number of digits
 after the decimal separator.  If the precision is not specified, then it is
 assumed to be `],
			[/* inline code block */ 'i', `6`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` If the conversion is `],
			[/* inline code block */ 'i', `'g'`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `'G'`],
			[/* text */ 't', `, then the precision is
 the total number of significant digits in the resulting magnitude after
 rounding.  If the precision is not specified, then the default value is
 `],
			[/* inline code block */ 'i', `6`],
			[/* text */ 't', `.  If the precision is `],
			[/* inline code block */ 'i', `0`],
			[/* text */ 't', `, then it is taken to be
 `],
			[/* inline code block */ 'i', `1`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` If the conversion is `],
			[/* inline code block */ 'i', `'a'`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `'A'`],
			[/* text */ 't', `, then the precision
 is the number of hexadecimal digits after the radix point.  If the
 precision is not provided, then all of the digits as returned by `],
			[/* reference */ 'r', `java.Double#toHexString(double)`],
			[/* text */ 't', ` will be output.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `BigDecimal`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The following conversions may be applied `],
			[/* reference */ 'r', `java.math.BigDecimal`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ''],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'e'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0065'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to be formatted using `],
						[/* text */ 't', `computerized scientific notation`],
						[/* text */ 't', `.  The `],
						[/* text */ 't', `localization algorithm`],
						[/* text */ 't', ` is applied.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` The formatting of the magnitude `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` depends upon its value.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` is positive-zero or negative-zero, then the exponent
     will be `],
							[/* inline code block */ 'i', `"+00"`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` Otherwise, the result is a string that represents the sign and
     magnitude (absolute value) of the argument.  The formatting of the sign
     is described in the `],
							[/* text */ 't', `localization algorithm`],
							[/* text */ 't', `. The formatting of the magnitude `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` depends upon its
     value.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` Let `],
							[/* text */ 't', `n`],
							[/* text */ 't', ` be the unique integer such that 10`],
							[/* text */ 't', `n`, 'sup'],
							[/* text */ 't', `
     <= `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` < 10`],
							[/* text */ 't', `n+1`, 'sup'],
							[/* text */ 't', `; then let `],
							[/* text */ 't', `a`],
							[/* text */ 't', ` be the
     mathematically exact quotient of `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` and 10`],
							[/* text */ 't', `n`, 'sup'],
							[/* text */ 't', ` so
     that 1 <= `],
							[/* text */ 't', `a`],
							[/* text */ 't', ` < 10. The magnitude is then represented as the
     integer part of `],
							[/* text */ 't', `a`],
							[/* text */ 't', `, as a single decimal digit, followed by the
     decimal separator followed by decimal digits representing the fractional
     part of `],
							[/* text */ 't', `a`],
							[/* text */ 't', `, followed by the exponent symbol `],
							[/* inline code block */ 'i', `'e'`],
							[/* text */ 't', `
     (`],
							[/* inline code block */ 'i', `'\\u0065'`],
							[/* text */ 't', `), followed by the sign of the exponent, followed
     by a representation of `],
							[/* text */ 't', `n`],
							[/* text */ 't', ` as a decimal integer, as produced by the
     method `],
							[/* reference */ 'r', `java.Long#toString(long,int)`],
							[/* text */ 't', `, and zero-padded to include at
     least two digits.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The number of digits in the result for the fractional part of
     `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` or `],
							[/* text */ 't', `a`],
							[/* text */ 't', ` is equal to the precision.  If the precision is not
     specified then the default value is `],
							[/* inline code block */ 'i', `6`],
							[/* text */ 't', `.  If the precision is
     less than the number of digits to the right of the decimal point then
     the value will be rounded using the
     `],
							[/* reference */ 'r', `java.RoundingMode#HALF_UP`],
							[/* text */ 't', `.  Otherwise, zeros may be appended to reach the precision.
     For a canonical representation of the value, use `],
							[/* reference */ 'r', `java.BigDecimal#toString()`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `','`],
							[/* text */ 't', ` flag is given, then an `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'E'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0045'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The upper-case variant of `],
						[/* inline code block */ 'i', `'e'`],
						[/* text */ 't', `.  The exponent symbol
     will be `],
						[/* inline code block */ 'i', `'E'`],
						[/* text */ 't', ` (`],
						[/* inline code block */ 'i', `'\\u0045'`],
						[/* text */ 't', `).

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'g'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0067'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to be formatted in general scientific notation
     as described below. The `],
						[/* text */ 't', `localization algorithm`],
						[/* text */ 't', ` is applied.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` After rounding for the precision, the formatting of the resulting
     magnitude `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` depends on its value.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` is greater than or equal to 10`],
							[/* text */ 't', `-4`, 'sup'],
							[/* text */ 't', ` but less
     than 10`],
							[/* text */ 't', `precision`, 'sup'],
							[/* text */ 't', ` then it is represented in `],
							[/* text */ 't', `decimal format`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` is less than 10`],
							[/* text */ 't', `-4`, 'sup'],
							[/* text */ 't', ` or greater than or equal to
     10`],
							[/* text */ 't', `precision`, 'sup'],
							[/* text */ 't', `, then it is represented in `],
							[/* text */ 't', `computerized scientific notation`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The total number of significant digits in `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` is equal to the
     precision.  If the precision is not specified, then the default value is
     `],
							[/* inline code block */ 'i', `6`],
							[/* text */ 't', `.  If the precision is `],
							[/* inline code block */ 'i', `0`],
							[/* text */ 't', `, then it is taken to be
     `],
							[/* inline code block */ 'i', `1`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` If the `],
							[/* inline code block */ 'i', `'#'`],
							[/* text */ 't', ` flag is given then an `],
							[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'G'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0047'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The upper-case variant of `],
						[/* inline code block */ 'i', `'g'`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'f'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0066'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Requires the output to be formatted using `],
						[/* text */ 't', `decimal format`],
						[/* text */ 't', `.  The `],
						[/* text */ 't', `localization algorithm`],
						[/* text */ 't', ` is
     applied.

     `],
						[/* block */ 'b', [
							[/* text */ 't', ` The result is a string that represents the sign and magnitude
     (absolute value) of the argument.  The formatting of the sign is
     described in the `],
							[/* text */ 't', `localization algorithm`],
							[/* text */ 't', `. The formatting of the magnitude `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` depends upon its
     value.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The magnitude is formatted as the integer part of `],
							[/* text */ 't', `m`],
							[/* text */ 't', `, with no
     leading zeroes, followed by the decimal separator followed by one or
     more decimal digits representing the fractional part of `],
							[/* text */ 't', `m`],
							[/* text */ 't', `.

     `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The number of digits in the result for the fractional part of
     `],
							[/* text */ 't', `m`],
							[/* text */ 't', ` or `],
							[/* text */ 't', `a`],
							[/* text */ 't', ` is equal to the precision. If the precision is not
     specified then the default value is `],
							[/* inline code block */ 'i', `6`],
							[/* text */ 't', `.  If the precision is
     less than the number of digits to the right of the decimal point
     then the value will be rounded using the
     `],
							[/* reference */ 'r', `java.RoundingMode#HALF_UP`],
							[/* text */ 't', `.  Otherwise, zeros may be appended to reach the precision.
     For a canonical representation of the value, use `],
							[/* reference */ 'r', `java.BigDecimal#toString()`],
							[/* text */ 't', `.

 `]
						]]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` All `],
			[/* text */ 't', `flags`],
			[/* text */ 't', ` defined for Byte, Short, Integer, and
 Long apply.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` If the `],
			[/* inline code block */ 'i', `'#'`],
			[/* text */ 't', ` flag is given, then the decimal separator will
 always be present.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* text */ 't', `default behavior`],
			[/* text */ 't', ` when no flags are
 given is the same as for Float and Double.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The specification of `],
			[/* text */ 't', `width`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `precision`],
			[/* text */ 't', ` is the same as defined for Float and
 Double.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Date/Time`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` This conversion may be applied to `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.lang.Long`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.util.Calendar`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.util.Date`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.time.temporal.TemporalAccessor`]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'t'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0074'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Prefix for date and time conversion characters.
 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'T'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0054'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The upper-case variant of `],
						[/* inline code block */ 'i', `'t'`],
						[/* text */ 't', `.

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The following date and time conversion character suffixes are defined
 for the `],
			[/* inline code block */ 'i', `'t'`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `'T'`],
			[/* text */ 't', ` conversions.  The types are similar to
 but not completely identical to those defined by GNU `],
			[/* inline code block */ 'i', `date`],
			[/* text */ 't', ` and
 POSIX `],
			[/* inline code block */ 'i', `strftime(3c)`],
			[/* text */ 't', `.  Additional conversion types are provided to
 access Java-specific functionality (e.g. `],
			[/* inline code block */ 'i', `'L'`],
			[/* text */ 't', ` for milliseconds
 within the second).

 `]
		]],
		[/* block */ 'b', ` The following conversion characters are used for formatting times:

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'H'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0048'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Hour of the day for the 24-hour clock, formatted as two digits with
     a leading zero as necessary i.e. `],
						[/* inline code block */ 'i', `00 - 23`],
						[/* text */ 't', `. `],
						[/* inline code block */ 'i', `00`],
						[/* text */ 't', `
     corresponds to midnight.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'I'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0049'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Hour for the 12-hour clock, formatted as two digits with a leading
     zero as necessary, i.e.  `],
						[/* inline code block */ 'i', `01 - 12`],
						[/* text */ 't', `.  `],
						[/* inline code block */ 'i', `01`],
						[/* text */ 't', ` corresponds to
     one o'clock (either morning or afternoon).

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'k'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u006b'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Hour of the day for the 24-hour clock, i.e. `],
						[/* inline code block */ 'i', `0 - 23`],
						[/* text */ 't', `.
     `],
						[/* inline code block */ 'i', `0`],
						[/* text */ 't', ` corresponds to midnight.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'l'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u006c'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Hour for the 12-hour clock, i.e. `],
						[/* inline code block */ 'i', `1 - 12`],
						[/* text */ 't', `.  `],
						[/* inline code block */ 'i', `1`],
						[/* text */ 't', `
     corresponds to one o'clock (either morning or afternoon).

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'M'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u004d'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Minute within the hour formatted as two digits with a leading zero
     as necessary, i.e.  `],
						[/* inline code block */ 'i', `00 - 59`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'S'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0053'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Seconds within the minute, formatted as two digits with a leading
     zero as necessary, i.e. `],
						[/* inline code block */ 'i', `00 - 60`],
						[/* text */ 't', ` ("`],
						[/* inline code block */ 'i', `60`],
						[/* text */ 't', `" is a special
     value required to support leap seconds).

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'L'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u004c'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Millisecond within the second formatted as three digits with
     leading zeros as necessary, i.e. `],
						[/* inline code block */ 'i', `000 - 999`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'N'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u004e'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Nanosecond within the second, formatted as nine digits with leading
     zeros as necessary, i.e. `],
						[/* inline code block */ 'i', `000000000 - 999999999`],
						[/* text */ 't', `.  The precision
     of this value is limited by the resolution of the underlying operating
     system or hardware.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'p'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0070'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Locale-specific `],
						[/* reference */ 'r', `java.DateFormatSymbols#getAmPmStrings()`],
						[/* text */ 't', ` marker
     in lower case, e.g."`],
						[/* inline code block */ 'i', `am`],
						[/* text */ 't', `" or "`],
						[/* inline code block */ 'i', `pm`],
						[/* text */ 't', `".  Use of the
     conversion prefix `],
						[/* inline code block */ 'i', `'T'`],
						[/* text */ 't', ` forces this output to upper case.  (Note
     that `],
						[/* inline code block */ 'i', `'p'`],
						[/* text */ 't', ` produces lower-case output.  This is different from
     GNU `],
						[/* inline code block */ 'i', `date`],
						[/* text */ 't', ` and POSIX `],
						[/* inline code block */ 'i', `strftime(3c)`],
						[/* text */ 't', ` which produce
     upper-case output.)

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'z'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u007a'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* external link */ 'a', `http://www.ietf.org/rfc/rfc0822.txt`, `RFC 822`],
						[/* text */ 't', `
     style numeric time zone offset from GMT, e.g. `],
						[/* inline code block */ 'i', `-0800`],
						[/* text */ 't', `.  This
     value will be adjusted as necessary for Daylight Saving Time.  For
     `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `, `],
						[/* reference */ 'r', `java.lang.Long`],
						[/* text */ 't', `, and `],
						[/* reference */ 'r', `java.util.Date`],
						[/* text */ 't', ` the time zone used is
     the `],
						[/* reference */ 'r', `.TimeZone#getDefault()`],
						[/* text */ 't', ` for this
     instance of the Java virtual machine.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'Z'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u005a'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` A string representing the abbreviation for the time zone.  This
     value will be adjusted as necessary for Daylight Saving Time.  For
     `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `, `],
						[/* reference */ 'r', `java.lang.Long`],
						[/* text */ 't', `, and `],
						[/* reference */ 'r', `java.util.Date`],
						[/* text */ 't', ` the time zone used is
     the `],
						[/* reference */ 'r', `.TimeZone#getDefault()`],
						[/* text */ 't', ` for this
     instance of the Java virtual machine.  The Formatter's locale will
     supersede the locale of the argument (if any).

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'s'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0073'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Seconds since the beginning of the epoch starting at 1 January 1970
     `],
						[/* inline code block */ 'i', `00:00:00`],
						[/* text */ 't', ` UTC, i.e. `],
						[/* inline code block */ 'i', `Long.MIN_VALUE/1000`],
						[/* text */ 't', ` to
     `],
						[/* inline code block */ 'i', `Long.MAX_VALUE/1000`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'Q'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u004f'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Milliseconds since the beginning of the epoch starting at 1 January
     1970 `],
						[/* inline code block */ 'i', `00:00:00`],
						[/* text */ 't', ` UTC, i.e. `],
						[/* inline code block */ 'i', `Long.MIN_VALUE`],
						[/* text */ 't', ` to
     `],
						[/* inline code block */ 'i', `Long.MAX_VALUE`],
						[/* text */ 't', `. The precision of this value is limited by
     the resolution of the underlying operating system or hardware.

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` The following conversion characters are used for formatting dates:

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'B'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0042'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Locale-specific `],
						[/* reference */ 'r', `java.DateFormatSymbols#getMonths()`],
						[/* text */ 't', `, e.g. `],
						[/* inline code block */ 'i', `"January"`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `"February"`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'b'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0062'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Locale-specific `],
						[/* reference */ 'r', `java.DateFormatSymbols#getShortMonths()`],
						[/* text */ 't', `,
     e.g. `],
						[/* inline code block */ 'i', `"Jan"`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `"Feb"`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'h'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0068'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Same as `],
						[/* inline code block */ 'i', `'b'`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'A'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0041'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Locale-specific full name of the `],
						[/* reference */ 'r', `java.DateFormatSymbols#getWeekdays()`],
						[/* text */ 't', `,
     e.g. `],
						[/* inline code block */ 'i', `"Sunday"`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `"Monday"`],
						[/* text */ 't', `

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'a'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0061'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Locale-specific short name of the `],
						[/* reference */ 'r', `java.DateFormatSymbols#getShortWeekdays()`],
						[/* text */ 't', `,
     e.g. `],
						[/* inline code block */ 'i', `"Sun"`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `"Mon"`],
						[/* text */ 't', `

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'C'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0043'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Four-digit year divided by `],
						[/* inline code block */ 'i', `100`],
						[/* text */ 't', `, formatted as two digits
     with leading zero as necessary, i.e. `],
						[/* inline code block */ 'i', `00 - 99`],
						[/* text */ 't', `

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'Y'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0059'`],
						[/* text */ 't', ` `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Year, formatted to at least
     four digits with leading zeros as necessary, e.g. `],
						[/* inline code block */ 'i', `0092`],
						[/* text */ 't', ` equals
     `],
						[/* inline code block */ 'i', `92`],
						[/* text */ 't', ` CE for the Gregorian calendar.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'y'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0079'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Last two digits of the year, formatted with leading zeros as
     necessary, i.e. `],
						[/* inline code block */ 'i', `00 - 99`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'j'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u006a'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Day of year, formatted as three digits with leading zeros as
     necessary, e.g. `],
						[/* inline code block */ 'i', `001 - 366`],
						[/* text */ 't', ` for the Gregorian calendar.
     `],
						[/* inline code block */ 'i', `001`],
						[/* text */ 't', ` corresponds to the first day of the year.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'m'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u006d'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Month, formatted as two digits with leading zeros as necessary,
     i.e. `],
						[/* inline code block */ 'i', `01 - 13`],
						[/* text */ 't', `, where "`],
						[/* inline code block */ 'i', `01`],
						[/* text */ 't', `" is the first month of the
     year and ("`],
						[/* inline code block */ 'i', `13`],
						[/* text */ 't', `" is a special value required to support lunar
     calendars).

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'d'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0064'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Day of month, formatted as two digits with leading zeros as
     necessary, i.e. `],
						[/* inline code block */ 'i', `01 - 31`],
						[/* text */ 't', `, where "`],
						[/* inline code block */ 'i', `01`],
						[/* text */ 't', `" is the first day
     of the month.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'e'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0065'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Day of month, formatted as two digits, i.e. `],
						[/* inline code block */ 'i', `1 - 31`],
						[/* text */ 't', ` where
     "`],
						[/* inline code block */ 'i', `1`],
						[/* text */ 't', `" is the first day of the month.

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` The following conversion characters are used for formatting common
 date/time compositions.

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'R'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0052'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Time formatted for the 24-hour clock as `],
						[/* inline code block */ 'i', `"%tH:%tM"`],
						[/* text */ 't', `

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'T'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0054'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Time formatted for the 24-hour clock as `],
						[/* inline code block */ 'i', `"%tH:%tM:%tS"`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'r'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0072'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Time formatted for the 12-hour clock as `],
						[/* inline code block */ 'i', `"%tI:%tM:%tS %Tp"`],
						[/* text */ 't', `.  The location of the morning or afternoon marker
     (`],
						[/* inline code block */ 'i', `'%Tp'`],
						[/* text */ 't', `) may be locale-dependent.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'D'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0044'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Date formatted as `],
						[/* inline code block */ 'i', `"%tm/%td/%ty"`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'F'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0046'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* external link */ 'a', `http://www.w3.org/TR/NOTE-datetime`, `ISO 8601`],
						[/* text */ 't', `
     complete date formatted as `],
						[/* inline code block */ 'i', `"%tY-%tm-%td"`],
						[/* text */ 't', `.

 `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'c'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` `],
						[/* inline code block */ 'i', `'\\u0063'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Date and time formatted as `],
						[/* inline code block */ 'i', `"%ta %tb %td %tT %tZ %tY"`],
						[/* text */ 't', `,
     e.g. `],
						[/* inline code block */ 'i', `"Sun Jul 20 16:17:00 EDT 1969"`],
						[/* text */ 't', `.

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The `],
			[/* inline code block */ 'i', `'-'`],
			[/* text */ 't', ` flag defined for `],
			[/* text */ 't', `General conversions`],
			[/* text */ 't', ` applies.  If the `],
			[/* inline code block */ 'i', `'#'`],
			[/* text */ 't', ` flag is given, then a `],
			[/* reference */ 'r', `java.util.FormatFlagsConversionMismatchException`],
			[/* text */ 't', ` will be thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The width is the minimum number of characters to
 be written to the output.  If the length of the converted value is less than
 the `],
			[/* inline code block */ 'i', `width`],
			[/* text */ 't', ` then the output will be padded by spaces
 (`],
			[/* inline code block */ 'i', `'\\u0020'`],
			[/* text */ 't', `) until the total number of characters equals width.
 The padding is on the left by default.  If the `],
			[/* inline code block */ 'i', `'-'`],
			[/* text */ 't', ` flag is given
 then the padding will be on the right.  If width is not specified then there
 is no minimum.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The precision is not applicable.  If the precision is specified then an
 `],
			[/* reference */ 'r', `java.util.IllegalFormatPrecisionException`],
			[/* text */ 't', ` will be thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Percent`]
		]],
		[/* block */ 'b', ` The conversion does not correspond to any argument.

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'%'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` The result is a literal `],
						[/* inline code block */ 'i', `'%'`],
						[/* text */ 't', ` (`],
						[/* inline code block */ 'i', `'\\u0025'`],
						[/* text */ 't', `)

 `],
						[/* block */ 'b', [
							[/* text */ 't', ` The width is the minimum number of characters to
 be written to the output including the `],
							[/* inline code block */ 'i', `'%'`],
							[/* text */ 't', `.  If the length of the
 converted value is less than the `],
							[/* inline code block */ 'i', `width`],
							[/* text */ 't', ` then the output will be
 padded by spaces (`],
							[/* inline code block */ 'i', `'\\u0020'`],
							[/* text */ 't', `) until the total number of
 characters equals width.  The padding is on the left.  If width is not
 specified then just the `],
							[/* inline code block */ 'i', `'%'`],
							[/* text */ 't', ` is output.

 `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The `],
							[/* inline code block */ 'i', `'-'`],
							[/* text */ 't', ` flag defined for `],
							[/* text */ 't', `General conversions`],
							[/* text */ 't', ` applies.  If any other flags are provided, then a
 `],
							[/* reference */ 'r', `java.util.IllegalFormatFlagsException`],
							[/* text */ 't', ` will be thrown.

 `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The precision is not applicable.  If the precision is specified an
 `],
							[/* reference */ 'r', `java.util.IllegalFormatPrecisionException`],
							[/* text */ 't', ` will be thrown.

 `]
						]]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Line Separator`]
		]],
		[/* block */ 'b', ` The conversion does not correspond to any argument.

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th'],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `'n'`],
						[/* text */ 't', `
     `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` the platform-specific line separator as returned by `],
						[/* reference */ 'r', `java.System#lineSeparator()`],
						[/* text */ 't', `.

 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Flags, width, and precision are not applicable.  If any are provided an
 `],
			[/* reference */ 'r', `java.util.IllegalFormatFlagsException`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.util.IllegalFormatWidthException`],
			[/* text */ 't', `,
 and `],
			[/* reference */ 'r', `java.util.IllegalFormatPrecisionException`],
			[/* text */ 't', `, respectively will be thrown.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Argument Index`]
		]],
		[/* block */ 'b', ` Format specifiers can reference arguments in three ways:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Explicit indexing`],
				[/* text */ 't', ` is used when the format specifier contains an
 argument index.  The argument index is a decimal integer indicating the
 position of the argument in the argument list.  The first argument is
 referenced by "`],
				[/* inline code block */ 'i', `1$`],
				[/* text */ 't', `", the second by "`],
				[/* inline code block */ 'i', `2$`],
				[/* text */ 't', `", etc.  An argument
 may be referenced more than once.

 `],
				[/* block */ 'b', ` For example:

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', `   formatter.format("%4$s %3$s %2$s %1$s %4$s %3$s %2$s %1$s",
                    "a", "b", "c", "d")
   // -> "d c b a d c b a"
 `]
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Relative indexing`],
				[/* text */ 't', ` is used when the format specifier contains a
 `],
				[/* inline code block */ 'i', `'<'`],
				[/* text */ 't', ` (`],
				[/* inline code block */ 'i', `'\\u003c'`],
				[/* text */ 't', `) flag which causes the argument for
 the previous format specifier to be re-used.  If there is no previous
 argument, then a `],
				[/* reference */ 'r', `java.util.MissingFormatArgumentException`],
				[/* text */ 't', ` is thrown.

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', `    formatter.format("%s %s %<s %<s", "a", "b", "c", "d")
    // -> "a b b b"
    // "c" and "d" are ignored because they are not referenced
 `]
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Ordinary indexing`],
				[/* text */ 't', ` is used when the format specifier contains
 neither an argument index nor a `],
				[/* inline code block */ 'i', `'<'`],
				[/* text */ 't', ` flag.  Each format specifier
 which uses ordinary indexing is assigned a sequential implicit index into
 argument list which is independent of the indices used by explicit or
 relative indexing.

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', `   formatter.format("%s %s %s %s", "a", "b", "c", "d")
   // -> "a b c d"
 `]
				]]
			]],
			[/* block */ 'b', '']
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` It is possible to have a format string which uses all forms of indexing,
 for example:

 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `   formatter.format("%2$s %s %<s %s", "a", "b", "c", "d")
   // -> "b a a b"
   // "c" and "d" are ignored because they are not referenced
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The maximum number of arguments is limited by the maximum dimension of a
 Java array as defined by
 `],
			[/* text */ 't', `The Java Virtual Machine Specification`],
			[/* text */ 't', `.
 If the argument index does not correspond to an
 available argument, then a `],
			[/* reference */ 'r', `java.util.MissingFormatArgumentException`],
			[/* text */ 't', ` is thrown.

 `]
		]],
		[/* block */ 'b', ` If there are more arguments than format specifiers, the extra arguments
 are ignored.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Unless otherwise specified, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to any
 method or constructor in this class will cause a `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', ` to be thrown.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.File,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified file and charset.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The locale used is the `],
					[/* reference */ 'r', `.Locale#getDefault(java.util.Locale.Category)`],
					[/* text */ 't', ` for
 `],
					[/* reference */ 'r', `.Locale.Category#FORMAT`],
					[/* text */ 't', ` for this instance of the Java
 virtual machine.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `The file to use as the destination of this formatter.  If the
         file exists then it will be truncated to zero size; otherwise,
         a new file will be created.  The output will be written to the
         file and is buffered.`]
				]],
				[/* parameter */ 'csn', [/* parameter description */
					[/* text */ 't', `The name of a supported `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `If the given file object does not denote an existing, writable
          regular file and a new regular file of that name cannot be
          created, or if some other error occurs while opening or
          creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.SecurityManager#checkWrite(java.io.FileDescriptor)`],
					[/* text */ 't', ` denies
          write access to the file`]
				]],
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named charset is not supported`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified file.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The charset used is the `],
					[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
					[/* text */ 't', ` for this
 instance of the Java virtual machine.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The locale used is the `],
					[/* reference */ 'r', `.Locale#getDefault(java.util.Locale.Category)`],
					[/* text */ 't', ` for
 `],
					[/* reference */ 'r', `.Locale.Category#FORMAT`],
					[/* text */ 't', ` for this instance of the Java
 virtual machine.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `The file to use as the destination of this formatter.  If the
         file exists then it will be truncated to zero size; otherwise,
         a new file will be created.  The output will be written to the
         file and is buffered.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.SecurityManager#checkWrite(java.io.FileDescriptor)`],
					[/* text */ 't', ` denies
          write access to the file`]
				]],
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `If the given file object does not denote an existing, writable
          regular file and a new regular file of that name cannot be
          created, or if some other error occurs while opening or
          creating the file`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.nio.charset.Charset,java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified file name, charset, and
 locale.`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `The name of the file to use as the destination of this
         formatter.  If the file exists then it will be truncated to
         zero size; otherwise, a new file will be created.  The output
         will be written to the file and is buffered.`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `A `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]],
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.util.Locale`],
					[/* text */ 't', ` to apply during
         formatting.  If `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no localization
         is applied.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while opening or creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.SecurityManager#checkWrite(java.io.FileDescriptor)`],
					[/* text */ 't', ` denies write
          access to the file`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `fileName`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String,java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified file name, charset, and
 locale.`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `The name of the file to use as the destination of this
         formatter.  If the file exists then it will be truncated to
         zero size; otherwise, a new file will be created.  The output
         will be written to the file and is buffered.`]
				]],
				[/* parameter */ 'csn', [/* parameter description */
					[/* text */ 't', `The name of a supported `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]],
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.util.Locale`],
					[/* text */ 't', ` to apply during
         formatting.  If `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no localization
         is applied.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `If the given file name does not denote an existing, writable
          regular file and a new regular file of that name cannot be
          created, or if some other error occurs while opening or
          creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.SecurityManager#checkWrite(java.io.FileDescriptor)`],
					[/* text */ 't', ` denies write
          access to the file`]
				]],
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named charset is not supported`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified file name and charset.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The locale used is the `],
					[/* reference */ 'r', `.Locale#getDefault(java.util.Locale.Category)`],
					[/* text */ 't', ` for
 `],
					[/* reference */ 'r', `.Locale.Category#FORMAT`],
					[/* text */ 't', ` for this instance of the Java
 virtual machine.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `The name of the file to use as the destination of this
         formatter.  If the file exists then it will be truncated to
         zero size; otherwise, a new file will be created.  The output
         will be written to the file and is buffered.`]
				]],
				[/* parameter */ 'csn', [/* parameter description */
					[/* text */ 't', `The name of a supported `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `If the given file name does not denote an existing, writable
          regular file and a new regular file of that name cannot be
          created, or if some other error occurs while opening or
          creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.SecurityManager#checkWrite(java.io.FileDescriptor)`],
					[/* text */ 't', ` denies write
          access to the file`]
				]],
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named charset is not supported`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.OutputStream,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified output stream and
 charset.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The locale used is the `],
					[/* reference */ 'r', `.Locale#getDefault(java.util.Locale.Category)`],
					[/* text */ 't', ` for
 `],
					[/* reference */ 'r', `.Locale.Category#FORMAT`],
					[/* text */ 't', ` for this instance of the Java
 virtual machine.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'os', [/* parameter description */
					[/* text */ 't', `The output stream to use as the destination of this formatter.
         The output will be buffered.`]
				]],
				[/* parameter */ 'csn', [/* parameter description */
					[/* text */ 't', `The name of a supported `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named charset is not supported`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.OutputStream)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified output stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The charset used is the `],
					[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
					[/* text */ 't', ` for this
 instance of the Java virtual machine.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The locale used is the `],
					[/* reference */ 'r', `.Locale#getDefault(java.util.Locale.Category)`],
					[/* text */ 't', ` for
 `],
					[/* reference */ 'r', `.Locale.Category#FORMAT`],
					[/* text */ 't', ` for this instance of the Java
 virtual machine.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'os', [/* parameter description */
					[/* text */ 't', `The output stream to use as the destination of this formatter.
         The output will be buffered.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.OutputStream,java.lang.String,java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified output stream, charset,
 and locale.`]
			],
			[/* parameters */
				[/* parameter */ 'os', [/* parameter description */
					[/* text */ 't', `The output stream to use as the destination of this formatter.
         The output will be buffered.`]
				]],
				[/* parameter */ 'csn', [/* parameter description */
					[/* text */ 't', `The name of a supported `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]],
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.util.Locale`],
					[/* text */ 't', ` to apply during
         formatting.  If `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no localization
         is applied.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named charset is not supported`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,java.nio.charset.Charset,java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified file, charset, and
 locale.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `The file to use as the destination of this formatter.  If the
         file exists then it will be truncated to zero size; otherwise,
         a new file will be created.  The output will be written to the
         file and is buffered.`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `A `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]],
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.util.Locale`],
					[/* text */ 't', ` to apply during
         formatting.  If `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no localization
         is applied.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while opening or creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.SecurityManager#checkWrite(java.io.FileDescriptor)`],
					[/* text */ 't', ` denies
         write access to the file`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `file`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.File,java.lang.String,java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified file, charset, and
 locale.`]
			],
			[/* parameters */
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `The file to use as the destination of this formatter.  If the
         file exists then it will be truncated to zero size; otherwise,
         a new file will be created.  The output will be written to the
         file and is buffered.`]
				]],
				[/* parameter */ 'csn', [/* parameter description */
					[/* text */ 't', `The name of a supported `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]],
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.util.Locale`],
					[/* text */ 't', ` to apply during
         formatting.  If `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no localization
         is applied.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `If the given file object does not denote an existing, writable
          regular file and a new regular file of that name cannot be
          created, or if some other error occurs while opening or
          creating the file`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.SecurityManager#checkWrite(java.io.FileDescriptor)`],
					[/* text */ 't', ` denies
          write access to the file`]
				]],
				[/* throw */ 'java.io.UnsupportedEncodingException', [/* throw description */
					[/* text */ 't', `If the named charset is not supported`]
				]]
			]
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The destination of the formatted output is a `],
					[/* reference */ 'r', `java.lang.StringBuilder`],
					[/* text */ 't', `
 which may be retrieved by invoking `],
					[/* reference */ 'r', `#out()`, `out()`],
					[/* text */ 't', ` and whose
 current content may be converted into a string by invoking `],
					[/* reference */ 'r', `#toString()`, `toString()`],
					[/* text */ 't', `.  The locale used is the `],
					[/* reference */ 'r', `.Locale#getDefault(java.util.Locale.Category)`],
					[/* text */ 't', ` for
 `],
					[/* reference */ 'r', `.Locale.Category#FORMAT`],
					[/* text */ 't', ` for this instance of the Java
 virtual machine.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.io.OutputStream,java.nio.charset.Charset,java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified output stream, charset,
 and locale.`]
			],
			[/* parameters */
				[/* parameter */ 'os', [/* parameter description */
					[/* text */ 't', `The output stream to use as the destination of this formatter.
         The output will be buffered.`]
				]],
				[/* parameter */ 'charset', [/* parameter description */
					[/* text */ 't', `A `],
					[/* reference */ 'r', `java.nio.charset.Charset`]
				]],
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.util.Locale`],
					[/* text */ 't', ` to apply during
         formatting.  If `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no localization
         is applied.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `os`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `charset`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.io.PrintStream)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified print stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The locale used is the `],
					[/* reference */ 'r', `.Locale#getDefault(java.util.Locale.Category)`],
					[/* text */ 't', ` for
 `],
					[/* reference */ 'r', `.Locale.Category#FORMAT`],
					[/* text */ 't', ` for this instance of the Java
 virtual machine.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Characters are written to the given `],
					[/* reference */ 'r', `java.io.PrintStream`],
					[/* text */ 't', ` object and are therefore encoded using that object's
 charset.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ps', [/* parameter description */
					[/* text */ 't', `The stream to use as the destination of this formatter.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified file name.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The charset used is the `],
					[/* reference */ 'r', `java.charset.Charset#defaultCharset()`],
					[/* text */ 't', ` for this
 instance of the Java virtual machine.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The locale used is the `],
					[/* reference */ 'r', `.Locale#getDefault(java.util.Locale.Category)`],
					[/* text */ 't', ` for
 `],
					[/* reference */ 'r', `.Locale.Category#FORMAT`],
					[/* text */ 't', ` for this instance of the Java
 virtual machine.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `The name of the file to use as the destination of this
         formatter.  If the file exists then it will be truncated to
         zero size; otherwise, a new file will be created.  The output
         will be written to the file and is buffered.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `If a security manager is present and `],
					[/* reference */ 'r', `java.SecurityManager#checkWrite(java.io.FileDescriptor)`],
					[/* text */ 't', ` denies write
          access to the file`]
				]],
				[/* throw */ 'java.io.FileNotFoundException', [/* throw description */
					[/* text */ 't', `If the given file name does not denote an existing, writable
          regular file and a new regular file of that name cannot be
          created, or if some other error occurs while opening or
          creating the file`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.Appendable,java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified destination and locale.`]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `Destination for the formatted output.  If `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then a `],
					[/* reference */ 'r', `java.lang.StringBuilder`],
					[/* text */ 't', ` will be created.`]
				]],
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.util.Locale`],
					[/* text */ 't', ` to apply during
         formatting.  If `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no localization
         is applied.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified locale.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The destination of the formatted output is a `],
					[/* reference */ 'r', `java.lang.StringBuilder`],
					[/* text */ 't', `
 which may be retrieved by invoking `],
					[/* reference */ 'r', `#out()`, `out()`],
					[/* text */ 't', ` and whose current
 content may be converted into a string by invoking `],
					[/* reference */ 'r', `#toString()`, `toString()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.util.Locale`],
					[/* text */ 't', ` to apply during
         formatting.  If `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no localization
         is applied.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Appendable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new formatter with the specified destination.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The locale used is the `],
					[/* reference */ 'r', `.Locale#getDefault(java.util.Locale.Category)`],
					[/* text */ 't', ` for
 `],
					[/* reference */ 'r', `.Locale.Category#FORMAT`],
					[/* text */ 't', ` for this instance of the Java
 virtual machine.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'a', [/* parameter description */
					[/* text */ 't', `Destination for the formatted output.  If `],
					[/* inline code block */ 'i', `a`],
					[/* text */ 't', ` is
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then a `],
					[/* reference */ 'r', `java.lang.StringBuilder`],
					[/* text */ 't', ` will be created.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the result of invoking `],
				[/* inline code block */ 'i', `toString()`],
				[/* text */ 't', ` on the destination
 for the output.  For example, the following code formats text into a
 `],
				[/* reference */ 'r', `java.lang.StringBuilder`],
				[/* text */ 't', ` then retrieves the resultant string:

 `],
				[/* block */ 'b', [
					[/* code block */ 'c', `   Formatter f = new Formatter();
   f.format("Last reboot at %tc", lastRebootDate);
   String s = f.toString();
   // -> s == "Last reboot at Sat Jan 01 00:00:00 PST 2000"
 `]
				]],
				[/* block */ 'b', ` An invocation of this method behaves in exactly the same way as the
 invocation

 `],
				[/* code block */ 'c', `     out().toString() `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` Depending on the specification of `],
					[/* inline code block */ 'i', `toString`],
					[/* text */ 't', ` for the `],
					[/* reference */ 'r', `java.lang.Appendable`],
					[/* text */ 't', `, the returned string may or may not contain the characters
 written to the destination.  For instance, buffers typically return
 their contents in `],
					[/* inline code block */ 'i', `toString()`],
					[/* text */ 't', `, but streams cannot since the
 data is discarded.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.FormatterClosedException', [/* throw description */
					[/* text */ 't', `If this formatter has been closed by invoking its `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The result of invoking `],
				[/* inline code block */ 'i', `toString()`],
				[/* text */ 't', ` on the destination
          for the output`]
			]
		]],
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes this formatter.  If the destination implements the `],
				[/* reference */ 'r', `java.io.Flushable`],
				[/* text */ 't', ` interface, its `],
				[/* inline code block */ 'i', `flush`],
				[/* text */ 't', ` method will be invoked.

 `],
				[/* block */ 'b', ` Flushing a formatter writes any buffered output in the destination
 to the underlying stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.FormatterClosedException', [/* throw description */
					[/* text */ 't', `If this formatter has been closed by invoking its `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'format(java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Writes a formatted string to this object's destination using the
 specified format string and arguments.  The locale used is the one
 defined during the construction of this formatter.`]
			],
			[/* parameters */
				[/* parameter */ 'format', [/* parameter description */
					[/* text */ 't', `A format string as described in `],
					[/* text */ 't', `Format string syntax`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `Arguments referenced by the format specifiers in the format
         string.  If there are more arguments than format specifiers, the
         extra arguments are ignored.  The maximum number of arguments is
         limited by the maximum dimension of a Java array as defined by
         `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.IllegalFormatException', [/* throw description */
					[/* text */ 't', `If a format string contains an illegal syntax, a format
          specifier that is incompatible with the given arguments,
          insufficient arguments given the format string, or other
          illegal conditions.  For specification of all possible
          formatting errors, see the `],
					[/* text */ 't', `Details`],
					[/* text */ 't', `
          section of the formatter class specification.`]
				]],
				[/* throw */ 'java.util.FormatterClosedException', [/* throw description */
					[/* text */ 't', `If this formatter has been closed by invoking its `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This formatter`]
			]
		]],
		[/* method */ 'format(java.util.Locale,java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Writes a formatted string to this object's destination using the
 specified locale, format string, and arguments.`]
			],
			[/* parameters */
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `The `],
					[/* reference */ 'r', `java.util.Locale`],
					[/* text */ 't', ` to apply during
         formatting.  If `],
					[/* inline code block */ 'i', `l`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` then no localization
         is applied.  This does not change this object's locale that was
         set during construction.`]
				]],
				[/* parameter */ 'format', [/* parameter description */
					[/* text */ 't', `A format string as described in `],
					[/* text */ 't', `Format string syntax`]
				]],
				[/* parameter */ 'args', [/* parameter description */
					[/* text */ 't', `Arguments referenced by the format specifiers in the format
         string.  If there are more arguments than format specifiers, the
         extra arguments are ignored.  The maximum number of arguments is
         limited by the maximum dimension of a Java array as defined by
         `],
					[/* text */ 't', `The Java Virtual Machine Specification`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.IllegalFormatException', [/* throw description */
					[/* text */ 't', `If a format string contains an illegal syntax, a format
          specifier that is incompatible with the given arguments,
          insufficient arguments given the format string, or other
          illegal conditions.  For specification of all possible
          formatting errors, see the `],
					[/* text */ 't', `Details`],
					[/* text */ 't', `
          section of the formatter class specification.`]
				]],
				[/* throw */ 'java.util.FormatterClosedException', [/* throw description */
					[/* text */ 't', `If this formatter has been closed by invoking its `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This formatter`]
			]
		]],
		[/* method */ 'locale()', [
			[/* method description */
				[/* text */ 't', `Returns the locale set by the construction of this formatter.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `#format(java.util.Locale,java.lang.String,java.lang.Object...)`, `format`],
					[/* text */ 't', ` method
 for this object which has a locale argument does not change this value.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.FormatterClosedException', [/* throw description */
					[/* text */ 't', `If this formatter has been closed by invoking its `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if no localization is applied, otherwise a
          locale`]
			]
		]],
		[/* method */ 'out()', [
			[/* method description */
				[/* text */ 't', `Returns the destination for the output.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.FormatterClosedException', [/* throw description */
					[/* text */ 't', `If this formatter has been closed by invoking its `],
					[/* reference */ 'r', `#close()`, `close()`],
					[/* text */ 't', ` method`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The destination for the output`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this formatter.  If the destination implements the `],
				[/* reference */ 'r', `java.io.Closeable`],
				[/* text */ 't', ` interface, its `],
				[/* inline code block */ 'i', `close`],
				[/* text */ 't', ` method will be invoked.

 `],
				[/* block */ 'b', ` Closing a formatter allows it to release resources it may be holding
 (such as open files).  If the formatter is already closed, then invoking
 this method has no effect.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Attempting to invoke any methods except `],
					[/* reference */ 'r', `#ioException()`, `ioException()`],
					[/* text */ 't', ` in
 this formatter after it has been closed will result in a `],
					[/* reference */ 'r', `java.util.FormatterClosedException`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'ioException()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `IOException`],
				[/* text */ 't', ` last thrown by this formatter's `],
				[/* reference */ 'r', `java.lang.Appendable`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the destination's `],
					[/* inline code block */ 'i', `append()`],
					[/* text */ 't', ` method never throws
 `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `, then this method will always return `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The last exception thrown by the Appendable or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
          no such exception exists.`]
			]
		]]
	],
]);
