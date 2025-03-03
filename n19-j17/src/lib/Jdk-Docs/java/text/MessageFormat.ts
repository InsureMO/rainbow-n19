import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.MessageFormat', [
	[/* class description */
		[/* inline code block */ 'i', `MessageFormat`],
		[/* text */ 't', ` provides a means to produce concatenated
 messages in a language-neutral way. Use this to construct messages
 displayed for end users.

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `MessageFormat`],
			[/* text */ 't', ` takes a set of objects, formats them, then
 inserts the formatted strings into the pattern at the appropriate places.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note:`],
			[/* inline code block */ 'i', `MessageFormat`],
			[/* text */ 't', ` differs from the other `],
			[/* inline code block */ 'i', `Format`],
			[/* text */ 't', `
 classes in that you create a `],
			[/* inline code block */ 'i', `MessageFormat`],
			[/* text */ 't', ` object with one
 of its constructors (not with a `],
			[/* inline code block */ 'i', `getInstance`],
			[/* text */ 't', ` style factory
 method). The factory methods aren't necessary because `],
			[/* inline code block */ 'i', `MessageFormat`],
			[/* text */ 't', `
 itself doesn't implement locale specific behavior. Any locale specific
 behavior is defined by the pattern that you provide as well as the
 subformats used for inserted arguments.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Patterns and Their Interpretation`]
		]],
		[/* inline code block */ 'i', `MessageFormat`],
		[/* text */ 't', ` uses patterns of the following form:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* text */ 't', `MessageFormatPattern:`],
				[/* text */ 't', `String`],
				[/* text */ 't', `MessageFormatPattern`],
				[/* text */ 't', `FormatElement`],
				[/* text */ 't', `String`],
				[/* text */ 't', `FormatElement:`],
				[/* text */ 't', `
         { `],
				[/* text */ 't', `ArgumentIndex`],
				[/* text */ 't', ` }
         { `],
				[/* text */ 't', `ArgumentIndex`],
				[/* text */ 't', ` , `],
				[/* text */ 't', `FormatType`],
				[/* text */ 't', ` }
         { `],
				[/* text */ 't', `ArgumentIndex`],
				[/* text */ 't', ` , `],
				[/* text */ 't', `FormatType`],
				[/* text */ 't', ` , `],
				[/* text */ 't', `FormatStyle`],
				[/* text */ 't', ` }

 `],
				[/* text */ 't', `FormatType: one of `],
				[/* text */ 't', `
         number date time choice

 `],
				[/* text */ 't', `FormatStyle:`],
				[/* text */ 't', `
         short
         medium
         long
         full
         integer
         currency
         percent
         `],
				[/* text */ 't', `SubformatPattern`]
			]]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Within a `],
			[/* text */ 't', `String`],
			[/* text */ 't', `, a pair of single quotes can be used to
 quote any arbitrary characters except single quotes. For example,
 pattern string `],
			[/* inline code block */ 'i', `"'{0}'"`],
			[/* text */ 't', ` represents string
 `],
			[/* inline code block */ 'i', `"{0}"`],
			[/* text */ 't', `, not a `],
			[/* text */ 't', `FormatElement`],
			[/* text */ 't', `. A single quote itself
 must be represented by doubled single quotes `],
			[/* inline code block */ 'i', `''`],
			[/* text */ 't', ` throughout a
 `],
			[/* text */ 't', `String`],
			[/* text */ 't', `.  For example, pattern string `],
			[/* inline code block */ 'i', `"'{''}'"`],
			[/* text */ 't', ` is
 interpreted as a sequence of `],
			[/* inline code block */ 'i', `'{`],
			[/* text */ 't', ` (start of quoting and a
 left curly brace), `],
			[/* inline code block */ 'i', `''`],
			[/* text */ 't', ` (a single quote), and
 `],
			[/* inline code block */ 'i', `}'`],
			[/* text */ 't', ` (a right curly brace and end of quoting),
 `],
			[/* text */ 't', `not`],
			[/* inline code block */ 'i', `'{'`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `'}'`],
			[/* text */ 't', ` (quoted left and
 right curly braces): representing string `],
			[/* inline code block */ 'i', `"{'}"`],
			[/* text */ 't', `,
 `],
			[/* text */ 't', `not`],
			[/* inline code block */ 'i', `"{}"`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* text */ 't', `SubformatPattern`],
			[/* text */ 't', ` is interpreted by its corresponding
 subformat, and subformat-dependent pattern rules apply. For example,
 pattern string `],
			[/* inline code block */ 'i', `"{1,number,$'#',##}"`],
			[/* text */ 't', `
 (`],
			[/* text */ 't', `SubformatPattern`],
			[/* text */ 't', ` with underline) will produce a number format
 with the pound-sign quoted, with a result such as: `],
			[/* inline code block */ 'i', `"$#31,45"`],
			[/* text */ 't', `. Refer to each `],
			[/* inline code block */ 'i', `Format`],
			[/* text */ 't', ` subclass documentation for
 details.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Any unmatched quote is treated as closed at the end of the given
 pattern. For example, pattern string `],
			[/* inline code block */ 'i', `"'{0}"`],
			[/* text */ 't', ` is treated as
 pattern `],
			[/* inline code block */ 'i', `"'{0}'"`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Any curly braces within an unquoted pattern must be balanced. For
 example, `],
			[/* inline code block */ 'i', `"ab {0} de"`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `"ab '}' de"`],
			[/* text */ 't', ` are
 valid patterns, but `],
			[/* inline code block */ 'i', `"ab {0'}' de"`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `"ab } de"`],
			[/* text */ 't', `
 and `],
			[/* inline code block */ 'i', `"''{''"`],
			[/* text */ 't', ` are not.

 `]
		]],
		[/* dl */ 'dl', [
			[/* dt */ 'dt', [
				[/* text */ 't', `Warning:`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `The rules for using quotes within message
 format patterns unfortunately have shown to be somewhat confusing.
 In particular, it isn't always obvious to localizers whether single
 quotes need to be doubled or not. Make sure to inform localizers about
 the rules, and tell them (for example, by using comments in resource
 bundle source files) which strings will be processed by `],
				[/* inline code block */ 'i', `MessageFormat`],
				[/* text */ 't', `.
 Note that localizers may need to use single quotes in translated
 strings where the original version doesn't have them.
 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* text */ 't', `ArgumentIndex`],
			[/* text */ 't', ` value is a non-negative integer written
 using the digits `],
			[/* inline code block */ 'i', `'0'`],
			[/* text */ 't', ` through `],
			[/* inline code block */ 'i', `'9'`],
			[/* text */ 't', `, and represents an index into the
 `],
			[/* inline code block */ 'i', `arguments`],
			[/* text */ 't', ` array passed to the `],
			[/* inline code block */ 'i', `format`],
			[/* text */ 't', ` methods
 or the result array returned by the `],
			[/* inline code block */ 'i', `parse`],
			[/* text */ 't', ` methods.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* text */ 't', `FormatType`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `FormatStyle`],
			[/* text */ 't', ` values are used to create
 a `],
			[/* inline code block */ 'i', `Format`],
			[/* text */ 't', ` instance for the format element. The following
 table shows how the values map to `],
			[/* inline code block */ 'i', `Format`],
			[/* text */ 't', ` instances. Combinations not
 shown in the table are illegal. A `],
			[/* text */ 't', `SubformatPattern`],
			[/* text */ 't', ` must
 be a valid pattern string for the `],
			[/* inline code block */ 'i', `Format`],
			[/* text */ 't', ` subclass used.

 `]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `FormatType
       `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `FormatStyle
       `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Subformat Created
 `]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `(none)`],
						[/* text */ 't', `
       `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `(none)`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 1, 5, [
						[/* inline code block */ 'i', `number`],
						[/* text */ 't', `
       `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `(none)`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `.NumberFormat#getInstance(java.util.Locale)`],
						[/* inline code block */ 'i', `(getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `integer`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `.NumberFormat#getIntegerInstance(java.util.Locale)`],
						[/* inline code block */ 'i', `(getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `currency`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `.NumberFormat#getCurrencyInstance(java.util.Locale)`],
						[/* inline code block */ 'i', `(getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `percent`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `.NumberFormat#getPercentInstance(java.util.Locale)`],
						[/* inline code block */ 'i', `(getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `SubformatPattern`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `new`],
						[/* text */ 't', ` `],
						[/* reference */ 'r', `.DecimalFormat#<init>(java.lang.String,java.text.DecimalFormatSymbols)`],
						[/* inline code block */ 'i', `(subformatPattern,`],
						[/* text */ 't', ` `],
						[/* reference */ 'r', `.DecimalFormatSymbols#getInstance(java.util.Locale)`],
						[/* inline code block */ 'i', `(getLocale()))`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 1, 6, [
						[/* inline code block */ 'i', `date`],
						[/* text */ 't', `
       `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `(none)`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `.DateFormat#getDateInstance(int,java.util.Locale)`],
						[/* inline code block */ 'i', `(`],
						[/* reference */ 'r', `.DateFormat#DEFAULT`],
						[/* inline code block */ 'i', `, getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `short`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `.DateFormat#getDateInstance(int,java.util.Locale)`],
						[/* inline code block */ 'i', `(`],
						[/* reference */ 'r', `.DateFormat#SHORT`],
						[/* inline code block */ 'i', `, getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `medium`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `.DateFormat#getDateInstance(int,java.util.Locale)`],
						[/* inline code block */ 'i', `(`],
						[/* reference */ 'r', `.DateFormat#DEFAULT`],
						[/* inline code block */ 'i', `, getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `.DateFormat#getDateInstance(int,java.util.Locale)`],
						[/* inline code block */ 'i', `(`],
						[/* reference */ 'r', `.DateFormat#LONG`],
						[/* inline code block */ 'i', `, getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `full`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `.DateFormat#getDateInstance(int,java.util.Locale)`],
						[/* inline code block */ 'i', `(`],
						[/* reference */ 'r', `.DateFormat#FULL`],
						[/* inline code block */ 'i', `, getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `SubformatPattern`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `new`],
						[/* text */ 't', ` `],
						[/* reference */ 'r', `.SimpleDateFormat#<init>(java.lang.String,java.util.Locale)`],
						[/* inline code block */ 'i', `(subformatPattern, getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', 1, 6, [
						[/* inline code block */ 'i', `time`],
						[/* text */ 't', `
       `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `(none)`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `.DateFormat#getTimeInstance(int,java.util.Locale)`],
						[/* inline code block */ 'i', `(`],
						[/* reference */ 'r', `.DateFormat#DEFAULT`],
						[/* inline code block */ 'i', `, getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `short`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `.DateFormat#getTimeInstance(int,java.util.Locale)`],
						[/* inline code block */ 'i', `(`],
						[/* reference */ 'r', `.DateFormat#SHORT`],
						[/* inline code block */ 'i', `, getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `medium`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `.DateFormat#getTimeInstance(int,java.util.Locale)`],
						[/* inline code block */ 'i', `(`],
						[/* reference */ 'r', `.DateFormat#DEFAULT`],
						[/* inline code block */ 'i', `, getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `.DateFormat#getTimeInstance(int,java.util.Locale)`],
						[/* inline code block */ 'i', `(`],
						[/* reference */ 'r', `.DateFormat#LONG`],
						[/* inline code block */ 'i', `, getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `full`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* reference */ 'r', `.DateFormat#getTimeInstance(int,java.util.Locale)`],
						[/* inline code block */ 'i', `(`],
						[/* reference */ 'r', `.DateFormat#FULL`],
						[/* inline code block */ 'i', `, getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `SubformatPattern`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `new`],
						[/* text */ 't', ` `],
						[/* reference */ 'r', `.SimpleDateFormat#<init>(java.lang.String,java.util.Locale)`],
						[/* inline code block */ 'i', `(subformatPattern, getLocale())`],
						[/* text */ 't', `
    `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* inline code block */ 'i', `choice`],
						[/* text */ 't', `
       `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `SubformatPattern`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* inline code block */ 'i', `new`],
						[/* text */ 't', ` `],
						[/* reference */ 'r', `.ChoiceFormat#<init>(java.lang.String)`],
						[/* inline code block */ 'i', `(subformatPattern)`],
						[/* text */ 't', `
 `]
					]]
				]]
			]],
		],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Usage Information`],
		[/* block */ 'b', `
 Here are some examples of usage.
 In real internationalized programs, the message format pattern and other
 static strings will, of course, be obtained from resource bundles.
 Other parameters will be dynamically determined at runtime.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The first example uses the static method `],
			[/* inline code block */ 'i', `MessageFormat.format`],
			[/* text */ 't', `,
 which internally creates a `],
			[/* inline code block */ 'i', `MessageFormat`],
			[/* text */ 't', ` for one-time use:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` int planet = 7;
 String event = "a disturbance in the Force";

 String result = MessageFormat.format(
     "At {1,time} on {1,date}, there was {2} on planet {0,number,integer}.",
     planet, new Date(), event);
 `]
		]],
		[/* text */ 't', `
 The output is:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` At 12:30 PM on Jul 3, 2053, there was a disturbance in the Force on planet 7.
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The following example creates a `],
			[/* inline code block */ 'i', `MessageFormat`],
			[/* text */ 't', ` instance that
 can be used repeatedly:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` int fileCount = 1273;
 String diskName = "MyDisk";
 Object[] testArgs = {new Long(fileCount), diskName};

 MessageFormat form = new MessageFormat(
     "The disk \\"{1}\\" contains {0} file(s).");

 System.out.println(form.format(testArgs));
 `]
		]],
		[/* text */ 't', `
 The output with different values for `],
		[/* inline code block */ 'i', `fileCount`],
		[/* text */ 't', `:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` The disk "MyDisk" contains 0 file(s).
 The disk "MyDisk" contains 1 file(s).
 The disk "MyDisk" contains 1,273 file(s).
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 For more sophisticated patterns, you can use a `],
			[/* inline code block */ 'i', `ChoiceFormat`],
			[/* text */ 't', `
 to produce correct forms for singular and plural:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` MessageFormat form = new MessageFormat("The disk \\"{1}\\" contains {0}.");
 double[] filelimits = {0,1,2};
 String[] filepart = {"no files","one file","{0,number} files"};
 ChoiceFormat fileform = new ChoiceFormat(filelimits, filepart);
 form.setFormatByArgumentIndex(0, fileform);

 int fileCount = 1273;
 String diskName = "MyDisk";
 Object[] testArgs = {new Long(fileCount), diskName};

 System.out.println(form.format(testArgs));
 `]
		]],
		[/* text */ 't', `
 The output with different values for `],
		[/* inline code block */ 'i', `fileCount`],
		[/* text */ 't', `:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` The disk "MyDisk" contains no files.
 The disk "MyDisk" contains one file.
 The disk "MyDisk" contains 1,273 files.
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 You can create the `],
			[/* inline code block */ 'i', `ChoiceFormat`],
			[/* text */ 't', ` programmatically, as in the
 above example, or by using a pattern. See `],
			[/* reference */ 'r', `java.text.ChoiceFormat`],
			[/* text */ 't', `
 for more information.
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `form.applyPattern(
    "There {0,choice,0#are no files|1#is one file|1<are {0,number,integer} files}.");`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Note:`],
			[/* text */ 't', ` As we see above, the string produced
 by a `],
			[/* inline code block */ 'i', `ChoiceFormat`],
			[/* text */ 't', ` in `],
			[/* inline code block */ 'i', `MessageFormat`],
			[/* text */ 't', ` is treated as special;
 occurrences of '{' are used to indicate subformats, and cause recursion.
 If you create both a `],
			[/* inline code block */ 'i', `MessageFormat`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `ChoiceFormat`],
			[/* text */ 't', `
 programmatically (instead of using the string patterns), then be careful not to
 produce a format that recurses on itself, which will cause an infinite loop.
 `]
		]],
		[/* block */ 'b', `
 When a single argument is parsed more than once in the string, the last match
 will be the final result of the parsing.  For example,
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` MessageFormat mf = new MessageFormat("{0,number,#.##}, {0,number,#.#}");
 Object[] objs = {new Double(3.1415)};
 String result = mf.format( objs );
 // result now equals "3.14, 3.1"
 objs = null;
 objs = mf.parse(result, new ParsePosition(0));
 // objs now equals {new Double(3.1)}
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 Likewise, parsing with a `],
			[/* inline code block */ 'i', `MessageFormat`],
			[/* text */ 't', ` object using patterns containing
 multiple occurrences of the same argument would return the last match.  For
 example,
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` MessageFormat mf = new MessageFormat("{0}, {0}, {0}");
 String forParsing = "x, y, z";
 Object[] objs = mf.parse(forParsing, new ParsePosition(0));
 // result now equals {new String("z")}
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Synchronization`]
		]],
		[/* block */ 'b', `
 Message formats are not synchronized.
 It is recommended to create separate format instances for each thread.
 If multiple threads access a format concurrently, it must be synchronized
 externally.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a MessageFormat for the default
 `],
				[/* reference */ 'r', `java.Locale.Category#FORMAT`],
				[/* text */ 't', ` locale and the
 specified pattern.
 The constructor first sets the locale, then parses the pattern and
 creates a list of subformats for the format elements contained in it.
 Patterns and their interpretation are specified in the
 `],
				[/* text */ 't', `class description`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern for this message format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the pattern is invalid`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pattern`],
					[/* text */ 't', ` is
            `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a MessageFormat for the specified locale and
 pattern.
 The constructor first sets the locale, then parses the pattern and
 creates a list of subformats for the format elements contained in it.
 Patterns and their interpretation are specified in the
 `],
				[/* text */ 't', `class description`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern for this message format`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale for this message format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the pattern is invalid`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pattern`],
					[/* text */ 't', ` is
            `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Equality comparison between two message format objects`]
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
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Generates a hash code for the message format object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Creates and returns a copy of this object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
			]
		]],
		[/* method */ 'format(java.lang.Object[],java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Formats an array of objects and appends the `],
				[/* inline code block */ 'i', `MessageFormat`],
				[/* text */ 't', `'s
 pattern, with format elements replaced by the formatted objects, to the
 provided `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The text substituted for the individual format elements is derived from
 the current subformat of the format element and the
 `],
					[/* inline code block */ 'i', `arguments`],
					[/* text */ 't', ` element at the format element's argument index
 as indicated by the first matching line of the following table. An
 argument is `],
					[/* text */ 't', `unavailable`],
					[/* text */ 't', ` if `],
					[/* inline code block */ 'i', `arguments`],
					[/* text */ 't', ` is
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or has fewer than argumentIndex+1 elements.

 `]
				]],
				[/* table */ 'tbl',
					[/* caption */ 'tc'],
					[/* table header */ 'th', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Subformat
       `]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Argument
       `]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `Formatted Text
 `]
							]]
						]]
					]],
					[/* table body */ 'tb', [
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', 1, 2, [
								[/* text */ 't', `any`],
								[/* text */ 't', `
       `]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `unavailable`],
								[/* text */ 't', `
       `]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `"{" + argumentIndex + "}"`],
								[/* text */ 't', `
    `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `null`],
								[/* text */ 't', `
       `]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `"null"`],
								[/* text */ 't', `
    `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `instanceof ChoiceFormat`],
								[/* text */ 't', `
       `]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `any`],
								[/* text */ 't', `
       `]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `subformat.format(argument).indexOf('{') >= 0 ? (new MessageFormat(subformat.format(argument), getLocale())).format(argument) : subformat.format(argument)`],
								[/* text */ 't', `
    `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `!= null`],
								[/* text */ 't', `
       `]
							]],
							[/* table header cell */ 'thc', [
								[/* text */ 't', `any`],
								[/* text */ 't', `
       `]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `subformat.format(argument)`],
								[/* text */ 't', `
    `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', 1, 4, [
								[/* inline code block */ 'i', `null`],
								[/* text */ 't', `
       `]
							]],
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `instanceof Number`],
								[/* text */ 't', `
       `]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `NumberFormat.getInstance(getLocale()).format(argument)`],
								[/* text */ 't', `
    `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `instanceof Date`],
								[/* text */ 't', `
       `]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `DateFormat.getDateTimeInstance(DateFormat.SHORT, DateFormat.SHORT, getLocale()).format(argument)`],
								[/* text */ 't', `
    `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* inline code block */ 'i', `instanceof String`],
								[/* text */ 't', `
       `]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `argument`],
								[/* text */ 't', `
    `]
							]]
						]],
						[/* table row */ 'tr', [
							[/* table header cell */ 'thc', [
								[/* text */ 't', `any`],
								[/* text */ 't', `
       `]
							]],
							[/* table cell */ 'tbc', [
								[/* inline code block */ 'i', `argument.toString()`],
								[/* text */ 't', `
 `]
							]]
						]]
					]],
				],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is non-null, and refers to
 `],
					[/* inline code block */ 'i', `Field.ARGUMENT`],
					[/* text */ 't', `, the location of the first formatted
 string will be returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'arguments', [/* parameter description */
					[/* text */ 't', `an array of objects to be formatted and substituted.`]
				]],
				[/* parameter */ 'result', [/* parameter description */
					[/* text */ 't', `where text is appended.`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `keeps track on the position of the first replaced argument
            in the output string.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if an argument in the
            `],
					[/* inline code block */ 'i', `arguments`],
					[/* text */ 't', ` array is not of the type
            expected by the format element(s) that use it.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `result`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the string buffer passed in as `],
				[/* inline code block */ 'i', `result`],
				[/* text */ 't', `, with formatted
 text appended`]
			]
		]],
		[/* method */ 'format(java.lang.String,java.lang.Object...)', [
			[/* method description */
				[/* text */ 't', `Creates a MessageFormat with the given pattern and uses it
 to format the given arguments. This is equivalent to
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `(new MessageFormat(pattern)).format(arguments, new StringBuffer(), null).toString()`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern string`]
				]],
				[/* parameter */ 'arguments', [/* parameter description */
					[/* text */ 't', `object(s) to format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the pattern is invalid,
            or if an argument in the `],
					[/* inline code block */ 'i', `arguments`],
					[/* text */ 't', ` array
            is not of the type expected by the format element(s)
            that use it.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pattern`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the formatted string`]
			]
		]],
		[/* method */ 'format(java.lang.Object,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Formats an array of objects and appends the `],
				[/* inline code block */ 'i', `MessageFormat`],
				[/* text */ 't', `'s
 pattern, with format elements replaced by the formatted objects, to the
 provided `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', `.
 This is equivalent to
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `format((Object[]) arguments, result, pos)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'arguments', [/* parameter description */
					[/* text */ 't', `an array of objects to be formatted and substituted.`]
				]],
				[/* parameter */ 'result', [/* parameter description */
					[/* text */ 't', `where text is appended.`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `keeps track on the position of the first replaced argument
            in the output string.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if an argument in the
            `],
					[/* inline code block */ 'i', `arguments`],
					[/* text */ 't', ` array is not of the type
            expected by the format element(s) that use it.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `result`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the string buffer passed in as `],
				[/* inline code block */ 'i', `toAppendTo`],
				[/* text */ 't', `,
               with formatted text appended`]
			]
		]],
		[/* method */ 'parse(java.lang.String,java.text.ParsePosition)', [
			[/* method description */
				[/* text */ 't', `Parses the string.

 `],
				[/* block */ 'b', `Caveats: The parse may fail in a number of circumstances.
 For example:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If one of the arguments does not occur in the pattern.
 `],
					[/* block */ 'b', `If the format of an argument loses information, such as
     with a choice format where a large number formats to "many".
 `],
					[/* block */ 'b', `Does not yet handle recursion (where
     the substituted strings contain {n} references.)
 `],
					[/* block */ 'b', `Will not always find a match (or the correct match)
     if some part of the parse is ambiguous.
     For example, if the pattern "{1},{2}" is used with the
     string arguments {"a,b", "c"}, it will format as "a,b,c".
     When the result is parsed, it will return {"a", "b,c"}.
 `],
					[/* block */ 'b', `If a single argument is parsed more than once in the string,
     then the later parse wins.
 `]
				]],
				[/* text */ 't', `
 When the parse fails, use ParsePosition.getErrorIndex() to find out
 where in the string the parsing failed.  The returned error
 index is the starting offset of the sub-patterns that the string
 is comparing with.  For example, if the parsing string "AAA {0} BBB"
 is comparing against the pattern "AAD {0} BBB", the error index is
 0. When an error occurs, the call to this method will return null.
 If the source is null, return an empty array.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the string to parse`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `the parse position`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
            for a non-null `],
					[/* inline code block */ 'i', `source`],
					[/* text */ 't', ` string.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of parsed objects`]
			]
		]],
		[/* method */ 'parse(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Parses text from the beginning of the given string to produce an object
 array.
 The method may not use the entire text of the given string.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 See the `],
					[/* reference */ 'r', `#parse(java.lang.String,java.text.ParsePosition)`, `parse(String, ParsePosition)`],
					[/* text */ 't', ` method for more information
 on message parsing.`]
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
				[/* text */ 't', `An `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` array parsed from the string.`]
			]
		]],
		[/* method */ 'getLocale()', [
			[/* method description */
				[/* text */ 't', `Gets the locale that's used when creating or comparing subformats.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the locale used when creating or comparing subformats`]
			]
		]],
		[/* method */ 'parseObject(java.lang.String,java.text.ParsePosition)', [
			[/* method description */
				[/* text */ 't', `Parses text from a string to produce an object array.
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
 object array is returned. The updated `],
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
 on message parsing.`]
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
					[/* inline code block */ 'i', `pos`],
					[/* text */ 't', ` is null.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `An `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` array parsed from the string. In case of
         error, returns null.`]
			]
		]],
		[/* method */ 'formatToCharacterIterator(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Formats an array of objects and inserts them into the
 `],
				[/* inline code block */ 'i', `MessageFormat`],
				[/* text */ 't', `'s pattern, producing an
 `],
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
 The text of the returned `],
					[/* inline code block */ 'i', `AttributedCharacterIterator`],
					[/* text */ 't', ` is
 the same that would be returned by
 `]
				]],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `format(arguments, new StringBuffer(), null).toString()`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 In addition, the `],
					[/* inline code block */ 'i', `AttributedCharacterIterator`],
					[/* text */ 't', ` contains at
 least attributes indicating where text was generated from an
 argument in the `],
					[/* inline code block */ 'i', `arguments`],
					[/* text */ 't', ` array. The keys of these attributes are of
 type `],
					[/* inline code block */ 'i', `MessageFormat.Field`],
					[/* text */ 't', `, their values are
 `],
					[/* inline code block */ 'i', `Integer`],
					[/* text */ 't', ` objects indicating the index in the `],
					[/* inline code block */ 'i', `arguments`],
					[/* text */ 't', `
 array of the argument from which the text was generated.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The attributes/value from the underlying `],
					[/* inline code block */ 'i', `Format`],
					[/* text */ 't', `
 instances that `],
					[/* inline code block */ 'i', `MessageFormat`],
					[/* text */ 't', ` uses will also be
 placed in the resulting `],
					[/* inline code block */ 'i', `AttributedCharacterIterator`],
					[/* text */ 't', `.
 This allows you to not only find where an argument is placed in the
 resulting String, but also which fields it contains in turn.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'arguments', [/* parameter description */
					[/* text */ 't', `an array of objects to be formatted and substituted.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `arguments`],
					[/* text */ 't', ` is null.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if an argument in the
            `],
					[/* inline code block */ 'i', `arguments`],
					[/* text */ 't', ` array is not of the type
            expected by the format element(s) that use it.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `AttributedCharacterIterator describing the formatted value.`]
			]
		]],
		[/* method */ 'setLocale(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Sets the locale to be used when creating or comparing subformats.
 This affects subsequent calls
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `to the `],
						[/* reference */ 'r', `#applyPattern(java.lang.String)`, `applyPattern`],
						[/* text */ 't', `
     and `],
						[/* reference */ 'r', `#toPattern()`, `toPattern`],
						[/* text */ 't', ` methods if format elements specify
     a format type and therefore have the subformats created in the
     `],
						[/* inline code block */ 'i', `applyPattern`],
						[/* text */ 't', ` method, as well as
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `to the `],
						[/* inline code block */ 'i', `format`],
						[/* text */ 't', ` and
     `],
						[/* reference */ 'r', `#formatToCharacterIterator(java.lang.Object)`, `formatToCharacterIterator`],
						[/* text */ 't', ` methods
     if format elements do not specify a format type and therefore have
     the subformats created in the formatting methods.
 `]
					]]
				]],
				[/* text */ 't', `
 Subformats that have already been created are not affected.`]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale to be used when creating or comparing subformats`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'applyPattern(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the pattern used by this message format.
 The method parses the pattern and creates a list of subformats
 for the format elements contained in it.
 Patterns and their interpretation are specified in the
 `],
				[/* text */ 't', `class description`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern for this message format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the pattern is invalid`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `pattern`],
					[/* text */ 't', ` is
            `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'toPattern()', [
			[/* method description */
				[/* text */ 't', `Returns a pattern representing the current state of the message format.
 The string is constructed from internal information and therefore
 does not necessarily equal the previously applied pattern.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a pattern representing the current state of the message format`]
			]
		]],
		[/* method */ 'getFormats()', [
			[/* method description */
				[/* text */ 't', `Gets the formats used for the format elements in the
 previously set pattern string.
 The order of formats in the returned array corresponds to
 the order of format elements in the pattern string.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Since the order of format elements in a pattern string often
 changes during localization, it's generally better to use the
 `],
					[/* reference */ 'r', `#getFormatsByArgumentIndex()`, `getFormatsByArgumentIndex`],
					[/* text */ 't', `
 method, which assumes an order of formats corresponding to the
 order of elements in the `],
					[/* inline code block */ 'i', `arguments`],
					[/* text */ 't', ` array passed to
 the `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` methods or the result array returned by
 the `],
					[/* inline code block */ 'i', `parse`],
					[/* text */ 't', ` methods.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the formats used for the format elements in the pattern`]
			]
		]],
		[/* method */ 'setFormat(int,java.text.Format)', [
			[/* method description */
				[/* text */ 't', `Sets the format to use for the format element with the given
 format element index within the previously set pattern string.
 The format element index is the zero-based number of the format
 element counting from the start of the pattern string.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Since the order of format elements in a pattern string often
 changes during localization, it is generally better to use the
 `],
					[/* reference */ 'r', `#setFormatByArgumentIndex(int,java.text.Format)`, `setFormatByArgumentIndex`],
					[/* text */ 't', `
 method, which accesses format elements based on the argument
 index they specify.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'formatElementIndex', [/* parameter description */
					[/* text */ 't', `the index of a format element within the pattern`]
				]],
				[/* parameter */ 'newFormat', [/* parameter description */
					[/* text */ 't', `the format to use for the specified format element`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArrayIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `formatElementIndex`],
					[/* text */ 't', ` is equal to or
            larger than the number of format elements in the pattern string`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setFormatsByArgumentIndex(java.text.Format[])', [
			[/* method description */
				[/* text */ 't', `Sets the formats to use for the values passed into
 `],
				[/* inline code block */ 'i', `format`],
				[/* text */ 't', ` methods or returned from `],
				[/* inline code block */ 'i', `parse`],
				[/* text */ 't', `
 methods. The indices of elements in `],
				[/* inline code block */ 'i', `newFormats`],
				[/* text */ 't', `
 correspond to the argument indices used in the previously set
 pattern string.
 The order of formats in `],
				[/* inline code block */ 'i', `newFormats`],
				[/* text */ 't', ` thus corresponds to
 the order of elements in the `],
				[/* inline code block */ 'i', `arguments`],
				[/* text */ 't', ` array passed
 to the `],
				[/* inline code block */ 'i', `format`],
				[/* text */ 't', ` methods or the result array returned
 by the `],
				[/* inline code block */ 'i', `parse`],
				[/* text */ 't', ` methods.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If an argument index is used for more than one format element
 in the pattern string, then the corresponding new format is used
 for all such format elements. If an argument index is not used
 for any format element in the pattern string, then the
 corresponding new format is ignored. If fewer formats are provided
 than needed, then only the formats for argument indices less
 than `],
					[/* inline code block */ 'i', `newFormats.length`],
					[/* text */ 't', ` are replaced.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'newFormats', [/* parameter description */
					[/* text */ 't', `the new formats to use`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newFormats`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setFormats(java.text.Format[])', [
			[/* method description */
				[/* text */ 't', `Sets the formats to use for the format elements in the
 previously set pattern string.
 The order of formats in `],
				[/* inline code block */ 'i', `newFormats`],
				[/* text */ 't', ` corresponds to
 the order of format elements in the pattern string.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If more formats are provided than needed by the pattern string,
 the remaining ones are ignored. If fewer formats are provided
 than needed, then only the first `],
					[/* inline code block */ 'i', `newFormats.length`],
					[/* text */ 't', `
 formats are replaced.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Since the order of format elements in a pattern string often
 changes during localization, it is generally better to use the
 `],
					[/* reference */ 'r', `#setFormatsByArgumentIndex(java.text.Format%5B%5D)`, `setFormatsByArgumentIndex`],
					[/* text */ 't', `
 method, which assumes an order of formats corresponding to the
 order of elements in the `],
					[/* inline code block */ 'i', `arguments`],
					[/* text */ 't', ` array passed to
 the `],
					[/* inline code block */ 'i', `format`],
					[/* text */ 't', ` methods or the result array returned by
 the `],
					[/* inline code block */ 'i', `parse`],
					[/* text */ 't', ` methods.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'newFormats', [/* parameter description */
					[/* text */ 't', `the new formats to use`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newFormats`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setFormatByArgumentIndex(int,java.text.Format)', [
			[/* method description */
				[/* text */ 't', `Sets the format to use for the format elements within the
 previously set pattern string that use the given argument
 index.
 The argument index is part of the format element definition and
 represents an index into the `],
				[/* inline code block */ 'i', `arguments`],
				[/* text */ 't', ` array passed
 to the `],
				[/* inline code block */ 'i', `format`],
				[/* text */ 't', ` methods or the result array returned
 by the `],
				[/* inline code block */ 'i', `parse`],
				[/* text */ 't', ` methods.
 `],
				[/* block */ 'b', `
 If the argument index is used for more than one format element
 in the pattern string, then the new format is used for all such
 format elements. If the argument index is not used for any format
 element in the pattern string, then the new format is ignored.`]
			],
			[/* parameters */
				[/* parameter */ 'argumentIndex', [/* parameter description */
					[/* text */ 't', `the argument index for which to use the new format`]
				]],
				[/* parameter */ 'newFormat', [/* parameter description */
					[/* text */ 't', `the new format to use`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getFormatsByArgumentIndex()', [
			[/* method description */
				[/* text */ 't', `Gets the formats used for the values passed into
 `],
				[/* inline code block */ 'i', `format`],
				[/* text */ 't', ` methods or returned from `],
				[/* inline code block */ 'i', `parse`],
				[/* text */ 't', `
 methods. The indices of elements in the returned array
 correspond to the argument indices used in the previously set
 pattern string.
 The order of formats in the returned array thus corresponds to
 the order of elements in the `],
				[/* inline code block */ 'i', `arguments`],
				[/* text */ 't', ` array passed
 to the `],
				[/* inline code block */ 'i', `format`],
				[/* text */ 't', ` methods or the result array returned
 by the `],
				[/* inline code block */ 'i', `parse`],
				[/* text */ 't', ` methods.
 `],
				[/* block */ 'b', `
 If an argument index is used for more than one format element
 in the pattern string, then the format used for the last such
 format element is returned in the array. If an argument index
 is not used for any format element in the pattern string, then
 null is returned in the array.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the formats used for the arguments within the pattern`]
			]
		]]
	],
]);
