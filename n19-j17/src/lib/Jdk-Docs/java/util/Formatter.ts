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
   // -&gt; " d  c  b  a"

   // Optional locale as the first argument can be used to get
   // locale-specific formatting of numbers.  The precision and width can be
   // given to round and align the value.
   formatter.format(Locale.FRANCE, "e = %+10.4f", Math.E);
   // -&gt; "e =    +2,7183"

   // The '(' numeric flag may be used to format negative numbers with
   // parentheses rather than a minus sign.  Group separators are
   // automatically inserted.
   formatter.format("Amount gained or lost since last statement: $ %(,.2f",
                    balanceDelta);
   // -&gt; "Amount gained or lost since last statement: $ (6,217.58)"
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Convenience methods for common formatting requests exist as illustrated
 by the following invocations:

 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `   // Writes a formatted string to System.out.
   System.out.format("Local time: %tT", Calendar.getInstance());
   // -&gt; "Local time: 13:34:18"

   // Writes formatted output to System.err.
   System.err.printf("Unable to open file '%1$s': %2$s",
                     fileName, exception.getMessage());
   // -&gt; "Unable to open file 'food': No such file or directory"
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Like C's `],
			[/* inline code block */ 'i', `sprintf(3)`],
			[/* text */ 't', `, Strings may be formatted using the static
 method `],
			[/* external link */ 'a', `../lang/String.html#format(java.lang.String,java.lang.Object...)`, `String.format`],
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
   // -&gt; s == "Duke's Birthday: May 23, 1995"
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
				[/* external link */ 'a', `../lang/Character.html#isValidCodePoint(int)`, `Character.isValidCodePoint(int)`],
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
			[/* external link */ 'a', `Locale.Category.html#FORMAT`, `default locale`],
			[/* text */ 't', `
 is used.


 `]
		]],
		[/* table */ 't', ''],
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
		[/* table */ 't', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` The following conversion characters are used for formatting dates:

 `],
		[/* table */ 't', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` The following conversion characters are used for formatting common
 date/time compositions.

 `],
		[/* table */ 't', ''],
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
		[/* table */ 't', ''],
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

   String s2 = String.format("Duke's Birthday: %1$tm %&lt;te,%&lt;tY", c);
 `]
		]],
		[/* block */ 'b', `<hr>`],
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
			[/* external link */ 'a', `../lang/Integer.html#MAX_VALUE`, `Integer.MAX_VALUE`],
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
			[/* external link */ 'a', `../lang/Integer.html#MAX_VALUE`, `Integer.MAX_VALUE`],
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
			[/* external link */ 'a', `../lang/Integer.html#MAX_VALUE`, `Integer.MAX_VALUE`],
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
			[/* external link */ 'a', `../lang/String.html#format(java.lang.String,java.lang.Object...)`, `String.format`],
			[/* text */ 't', ` and
 `],
			[/* external link */ 'a', `../io/PrintStream.html#printf(java.lang.String,java.lang.Object...)`, `PrintStream.printf`],
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
			[/* external link */ 'a', `Locale.Category.html#FORMAT`, `default locale`],
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
		[/* table */ 't', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` The following `],
			[/* text */ 't', `flags`],
			[/* text */ 't', ` apply to general conversions:

 `]
		]],
		[/* table */ 't', ''],
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
		[/* external link */ 'a', `../lang/Character.html#isValidCodePoint(int)`, `Character.isValidCodePoint(int)`],
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
		[/* table */ 't', ''],
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
				[/* external link */ 'a', `../text/DecimalFormatSymbols.html#getZeroDigit()`, `zero digit`],
				[/* text */ 't', `z`],
				[/* text */ 't', `; that is `],
				[/* text */ 't', `d&nbsp;-&nbsp;`],
				[/* inline code block */ 'i', `'0'`],
				[/* text */ 't', `&nbsp;+&nbsp;z`],
				[/* text */ 't', `.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` If a decimal separator is present, a locale-specific `],
				[/* external link */ 'a', `../text/DecimalFormatSymbols.html#getDecimalSeparator()`, `decimal separator`],
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
				[/* external link */ 'a', `../text/DecimalFormatSymbols.html#getGroupingSeparator()`, `grouping separator`],
				[/* text */ 't', ` is
 inserted by scanning the integer part of the string from least significant
 to most significant digits and inserting a separator at intervals defined by
 the locale's `],
				[/* external link */ 'a', `../text/DecimalFormat.html#getGroupingSize()`, `grouping size`],
				[/* text */ 't', `.

 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` If the `],
				[/* inline code block */ 'i', `'0'`],
				[/* text */ 't', ` flag is given, then the locale-specific `],
				[/* external link */ 'a', `../text/DecimalFormatSymbols.html#getZeroDigit()`, `zero digits`],
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
		[/* table */ 't', ''],
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
		[/* table */ 't', ''],
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
		[/* table */ 't', ''],
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
		[/* table */ 't', ''],
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
			[/* external link */ 'a', `../lang/Double.html#toHexString(double)`, `Double.toHexString(double)`],
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
		[/* table */ 't', ''],
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
		[/* table */ 't', ''],
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
		[/* table */ 't', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` The following conversion characters are used for formatting dates:

 `],
		[/* table */ 't', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` The following conversion characters are used for formatting common
 date/time compositions.

 `],
		[/* table */ 't', ''],
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
		[/* table */ 't', ''],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Line Separator`]
		]],
		[/* block */ 'b', ` The conversion does not correspond to any argument.

 `],
		[/* table */ 't', ''],
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
   // -&gt; "d c b a d c b a"
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
					[/* code block */ 'c', `    formatter.format("%s %s %&lt;s %&lt;s", "a", "b", "c", "d")
    // -&gt; "a b b b"
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
   // -&gt; "a b c d"
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
			[/* code block */ 'c', `   formatter.format("%2$s %s %&lt;s %s", "a", "b", "c", "d")
   // -&gt; "b a a b"
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
					[/* external link */ 'a', `Locale.html#getDefault(java.util.Locale.Category)`, `default locale`],
					[/* text */ 't', ` for
 `],
					[/* external link */ 'a', `Locale.Category.html#FORMAT`, `formatting`],
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
					[/* external link */ 'a', `../lang/SecurityManager.html#checkWrite(java.io.FileDescriptor)`, `checkWrite(file.getPath())`],
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
					[/* external link */ 'a', `../nio/charset/Charset.html#defaultCharset()`, `default charset`],
					[/* text */ 't', ` for this
 instance of the Java virtual machine.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The locale used is the `],
					[/* external link */ 'a', `Locale.html#getDefault(java.util.Locale.Category)`, `default locale`],
					[/* text */ 't', ` for
 `],
					[/* external link */ 'a', `Locale.Category.html#FORMAT`, `formatting`],
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
					[/* external link */ 'a', `../lang/SecurityManager.html#checkWrite(java.io.FileDescriptor)`, `checkWrite(file.getPath())`],
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
					[/* external link */ 'a', `../lang/SecurityManager.html#checkWrite(java.io.FileDescriptor)`, `checkWrite(fileName)`],
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
					[/* external link */ 'a', `../lang/SecurityManager.html#checkWrite(java.io.FileDescriptor)`, `checkWrite(fileName)`],
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
					[/* external link */ 'a', `Locale.html#getDefault(java.util.Locale.Category)`, `default locale`],
					[/* text */ 't', ` for
 `],
					[/* external link */ 'a', `Locale.Category.html#FORMAT`, `formatting`],
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
					[/* external link */ 'a', `../lang/SecurityManager.html#checkWrite(java.io.FileDescriptor)`, `checkWrite(fileName)`],
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
					[/* external link */ 'a', `Locale.html#getDefault(java.util.Locale.Category)`, `default locale`],
					[/* text */ 't', ` for
 `],
					[/* external link */ 'a', `Locale.Category.html#FORMAT`, `formatting`],
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
					[/* external link */ 'a', `../nio/charset/Charset.html#defaultCharset()`, `default charset`],
					[/* text */ 't', ` for this
 instance of the Java virtual machine.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The locale used is the `],
					[/* external link */ 'a', `Locale.html#getDefault(java.util.Locale.Category)`, `default locale`],
					[/* text */ 't', ` for
 `],
					[/* external link */ 'a', `Locale.Category.html#FORMAT`, `formatting`],
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
					[/* external link */ 'a', `../lang/SecurityManager.html#checkWrite(java.io.FileDescriptor)`, `checkWrite(file.getPath())`],
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
					[/* external link */ 'a', `../lang/SecurityManager.html#checkWrite(java.io.FileDescriptor)`, `checkWrite(file.getPath())`],
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
					[/* reference */ 'r', `out()`],
					[/* text */ 't', ` and whose
 current content may be converted into a string by invoking `],
					[/* reference */ 'r', `toString()`],
					[/* text */ 't', `.  The locale used is the `],
					[/* external link */ 'a', `Locale.html#getDefault(java.util.Locale.Category)`, `default locale`],
					[/* text */ 't', ` for
 `],
					[/* external link */ 'a', `Locale.Category.html#FORMAT`, `formatting`],
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
					[/* external link */ 'a', `Locale.html#getDefault(java.util.Locale.Category)`, `default locale`],
					[/* text */ 't', ` for
 `],
					[/* external link */ 'a', `Locale.Category.html#FORMAT`, `formatting`],
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
					[/* external link */ 'a', `../nio/charset/Charset.html#defaultCharset()`, `default charset`],
					[/* text */ 't', ` for this
 instance of the Java virtual machine.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The locale used is the `],
					[/* external link */ 'a', `Locale.html#getDefault(java.util.Locale.Category)`, `default locale`],
					[/* text */ 't', ` for
 `],
					[/* external link */ 'a', `Locale.Category.html#FORMAT`, `formatting`],
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
					[/* external link */ 'a', `../lang/SecurityManager.html#checkWrite(java.io.FileDescriptor)`, `checkWrite(fileName)`],
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
					[/* reference */ 'r', `out()`],
					[/* text */ 't', ` and whose current
 content may be converted into a string by invoking `],
					[/* reference */ 'r', `toString()`],
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
					[/* external link */ 'a', `Locale.html#getDefault(java.util.Locale.Category)`, `default locale`],
					[/* text */ 't', ` for
 `],
					[/* external link */ 'a', `Locale.Category.html#FORMAT`, `formatting`],
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
   // -&gt; s == "Last reboot at Sat Jan 01 00:00:00 PST 2000"
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
					[/* reference */ 'r', `close()`],
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
					[/* reference */ 'r', `close()`],
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
					[/* reference */ 'r', `close()`],
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
					[/* reference */ 'r', `close()`],
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
					[/* reference */ 'r', `format`],
					[/* text */ 't', ` method
 for this object which has a locale argument does not change this value.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.FormatterClosedException', [/* throw description */
					[/* text */ 't', `If this formatter has been closed by invoking its `],
					[/* reference */ 'r', `close()`],
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
					[/* reference */ 'r', `close()`],
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
					[/* reference */ 'r', `ioException()`],
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
