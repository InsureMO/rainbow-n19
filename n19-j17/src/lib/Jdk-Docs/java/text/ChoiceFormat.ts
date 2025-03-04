import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.ChoiceFormat', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `ChoiceFormat`],
		[/* text */ 't', ` allows you to attach a format to a range of numbers.
 It is generally used in a `],
		[/* inline code block */ 'i', `MessageFormat`],
		[/* text */ 't', ` for handling plurals.
 The choice is specified with an ascending list of doubles, where each item
 specifies a half-open interval up to the next item:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` X matches j if and only if limit[j] ≤ X < limit[j+1]
 `]
		]],
		[/* text */ 't', `
 If there is no match, then either the first or last index is used, depending
 on whether the number (X) is too low or too high.  If the limit array is not
 in ascending order, the results of formatting will be incorrect.  ChoiceFormat
 also accepts `],
		[/* inline code block */ 'i', `\\u221E`],
		[/* text */ 't', ` as equivalent to infinity(INF).

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Note:`],
			[/* inline code block */ 'i', `ChoiceFormat`],
			[/* text */ 't', ` differs from the other `],
			[/* inline code block */ 'i', `Format`],
			[/* text */ 't', `
 classes in that you create a `],
			[/* inline code block */ 'i', `ChoiceFormat`],
			[/* text */ 't', ` object with a
 constructor (not with a `],
			[/* inline code block */ 'i', `getInstance`],
			[/* text */ 't', ` style factory
 method). The factory methods aren't necessary because `],
			[/* inline code block */ 'i', `ChoiceFormat`],
			[/* text */ 't', `
 doesn't require any complex setup for a given locale. In fact,
 `],
			[/* inline code block */ 'i', `ChoiceFormat`],
			[/* text */ 't', ` doesn't implement any locale specific behavior.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 When creating a `],
			[/* inline code block */ 'i', `ChoiceFormat`],
			[/* text */ 't', `, you must specify an array of formats
 and an array of limits. The length of these arrays must be the same.
 For example,
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `limits`],
				[/* text */ 't', ` = {1,2,3,4,5,6,7}`],
				[/* new line */ 'n'],
				[/* text */ 't', `formats`],
				[/* text */ 't', ` = {"Sun","Mon","Tue","Wed","Thur","Fri","Sat"}
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `limits`],
				[/* text */ 't', ` = {0, 1, ChoiceFormat.nextDouble(1)}`],
				[/* new line */ 'n'],
				[/* text */ 't', `formats`],
				[/* text */ 't', ` = {"no files", "one file", "many files"}`],
				[/* new line */ 'n'],
				[/* text */ 't', `
     (`],
				[/* inline code block */ 'i', `nextDouble`],
				[/* text */ 't', ` can be used to get the next higher double, to
     make the half-open interval.)
 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 Here is a simple example that shows formatting and parsing:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `double[] limits = {1,2,3,4,5,6,7};
 String[] dayOfWeekNames = {"Sun","Mon","Tue","Wed","Thur","Fri","Sat"};
 ChoiceFormat form = new ChoiceFormat(limits, dayOfWeekNames);
 ParsePosition status = new ParsePosition(0);
 for (double i = 0.0; i <= 8.0; ++i) {
     status.setIndex(0);
     System.out.println(i + " -> " + form.format(i) + " -> "
                              + form.parse(form.format(i),status));
 }`]
			]]
		]],
		[/* text */ 't', `
 Here is a more complex example, with a pattern format:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `double[] filelimits = {0,1,2};
 String[] filepart = {"are no files","is one file","are {2} files"};
 ChoiceFormat fileform = new ChoiceFormat(filelimits, filepart);
 Format[] testFormats = {fileform, null, NumberFormat.getInstance()};
 MessageFormat pattform = new MessageFormat("There {0} on {1}");
 pattform.setFormats(testFormats);
 Object[] testArgs = {null, "ADisk", null};
 for (int i = 0; i < 4; ++i) {
     testArgs[0] = new Integer(i);
     testArgs[2] = testArgs[0];
     System.out.println(pattform.format(testArgs));
 }`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 Specifying a pattern for ChoiceFormat objects is fairly straightforward.
 For example:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `ChoiceFormat fmt = new ChoiceFormat(
      "-1#is negative| 0#is zero or fraction | 1#is one |1.0<is 1+ |2#is two |2<is more than 2.");
 System.out.println("Formatter Pattern : " + fmt.toPattern());

 System.out.println("Format with -INF : " + fmt.format(Double.NEGATIVE_INFINITY));
 System.out.println("Format with -1.0 : " + fmt.format(-1.0));
 System.out.println("Format with 0 : " + fmt.format(0));
 System.out.println("Format with 0.9 : " + fmt.format(0.9));
 System.out.println("Format with 1.0 : " + fmt.format(1));
 System.out.println("Format with 1.5 : " + fmt.format(1.5));
 System.out.println("Format with 2 : " + fmt.format(2));
 System.out.println("Format with 2.1 : " + fmt.format(2.1));
 System.out.println("Format with NaN : " + fmt.format(Double.NaN));
 System.out.println("Format with +INF : " + fmt.format(Double.POSITIVE_INFINITY));`]
			]]
		]],
		[/* text */ 't', `
 And the output result would be like the following:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `Format with -INF : is negative
 Format with -1.0 : is negative
 Format with 0 : is zero or fraction
 Format with 0.9 : is zero or fraction
 Format with 1.0 : is one
 Format with 1.5 : is 1+
 Format with 2 : is two
 Format with 2.1 : is more than 2.
 Format with NaN : is negative
 Format with +INF : is more than 2.`]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Synchronization`]
		]],
		[/* block */ 'b', `
 Choice formats are not synchronized.
 It is recommended to create separate format instances for each thread.
 If multiple threads access a format concurrently, it must be synchronized
 externally.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(double[],java.lang.String[])', [
			[/* constructor description */
				[/* text */ 't', `Constructs with the limits and the corresponding formats.`]
			],
			[/* parameters */
				[/* parameter */ 'limits', [/* parameter description */
					[/* text */ 't', `limits in ascending order`]
				]],
				[/* parameter */ 'formats', [/* parameter description */
					[/* text */ 't', `corresponding format strings`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `limits`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `formats`],
					[/* text */ 't', `
            is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs with limits and corresponding formats based on the pattern.`]
			],
			[/* parameters */
				[/* parameter */ 'newPattern', [/* parameter description */
					[/* text */ 't', `the new pattern string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newPattern`],
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
				[/* text */ 't', `Equality comparison between two`]
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
		[/* method */ 'getLimits()', [
			[/* method description */
				[/* text */ 't', `Get the limits passed in the constructor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the limits.`]
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
		[/* method */ 'parse(java.lang.String,java.text.ParsePosition)', [
			[/* method description */
				[/* text */ 't', `Parses a Number from the input text.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the source text.`]
				]],
				[/* parameter */ 'status', [/* parameter description */
					[/* text */ 't', `an input-output parameter.  On input, the
 status.index field indicates the first character of the
 source text that should be parsed.  On exit, if no error
 occurred, status.index is set to the first unparsed character
 in the source text.  On exit, if an error did occur,
 status.index is unchanged and status.errorIndex is set to the
 first index of the character that caused the parse to fail.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `status`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
            or if `],
					[/* inline code block */ 'i', `text`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` and the list of
            choice strings is not empty.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A Number representing the value of the number parsed.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Overrides Cloneable`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
			]
		]],
		[/* method */ 'getFormats()', [
			[/* method description */
				[/* text */ 't', `Get the formats passed in the constructor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the formats.`]
			]
		]],
		[/* method */ 'toPattern()', [
			[/* method description */
				[/* text */ 't', `Gets the pattern.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the pattern string`]
			]
		]],
		[/* method */ 'format(double,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Returns pattern with formatted double.`]
			],
			[/* parameters */
				[/* parameter */ 'number', [/* parameter description */
					[/* text */ 't', `number to be formatted and substituted.`]
				]],
				[/* parameter */ 'toAppendTo', [/* parameter description */
					[/* text */ 't', `where text is appended.`]
				]],
				[/* parameter */ 'status', [/* parameter description */
					[/* text */ 't', `ignore no useful status is returned.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `toAppendTo`],
					[/* text */ 't', `
            is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the formatted StringBuffer`]
			]
		]],
		[/* method */ 'format(long,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Specialization of format. This method really calls
 `],
				[/* inline code block */ 'i', `format(double, StringBuffer, FieldPosition)`],
				[/* text */ 't', `
 thus the range of longs that are supported is only equal to
 the range that can be stored by double. This will never be
 a practical limitation.`]
			],
			[/* parameters */
				[/* parameter */ 'number', [/* parameter description */
					[/* text */ 't', `the long number to format`]
				]],
				[/* parameter */ 'toAppendTo', [/* parameter description */
					[/* text */ 't', `the StringBuffer to which the formatted text is to be
                   appended`]
				]],
				[/* parameter */ 'status', [/* parameter description */
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
					[/* reference */ 'r', `.NumberFormat#INTEGER_FIELD`],
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the formatted StringBuffer`]
			]
		]],
		[/* method */ 'nextDouble(double,boolean)', [
			[/* method description */
				[/* text */ 't', `Finds the least double greater than `],
				[/* inline code block */ 'i', `d`],
				[/* text */ 't', ` (if `],
				[/* inline code block */ 'i', `positive`],
				[/* text */ 't', ` is
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `), or the greatest double less than `],
				[/* inline code block */ 'i', `d`],
				[/* text */ 't', ` (if
 `],
				[/* inline code block */ 'i', `positive`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `).
 If `],
				[/* inline code block */ 'i', `NaN`],
				[/* text */ 't', `, returns same value.`]
			],
			[/* parameters */
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `the reference value`]
				]],
				[/* parameter */ 'positive', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if the least double is desired;
                 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` otherwise`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the least or greater double value`]
			]
		]],
		[/* method */ 'nextDouble(double)', [
			[/* method description */
				[/* text */ 't', `Finds the least double greater than `],
				[/* inline code block */ 'i', `d`],
				[/* text */ 't', `.
 If `],
				[/* inline code block */ 'i', `NaN`],
				[/* text */ 't', `, returns same value.
 `],
				[/* block */ 'b', `Used to make half-open intervals.`]
			],
			[/* parameters */
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `the reference value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the least double value greather than `],
				[/* inline code block */ 'i', `d`]
			]
		]],
		[/* method */ 'previousDouble(double)', [
			[/* method description */
				[/* text */ 't', `Finds the greatest double less than `],
				[/* inline code block */ 'i', `d`],
				[/* text */ 't', `.
 If `],
				[/* inline code block */ 'i', `NaN`],
				[/* text */ 't', `, returns same value.`]
			],
			[/* parameters */
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `the reference value`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the greatest double value less than `],
				[/* inline code block */ 'i', `d`]
			]
		]],
		[/* method */ 'applyPattern(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the pattern.`]
			],
			[/* parameters */
				[/* parameter */ 'newPattern', [/* parameter description */
					[/* text */ 't', `See the class description.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newPattern`],
					[/* text */ 't', `
            is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setChoices(double[],java.lang.String[])', [
			[/* method description */
				[/* text */ 't', `Set the choices to be used in formatting.`]
			],
			[/* parameters */
				[/* parameter */ 'limits', [/* parameter description */
					[/* text */ 't', `contains the top value that you want
 parsed with that format, and should be in ascending sorted order. When
 formatting X, the choice will be the i, where
 limit[i] ≤ X < limit[i+1].
 If the limit array is not in ascending order, the results of formatting
 will be incorrect.`]
				]],
				[/* parameter */ 'formats', [/* parameter description */
					[/* text */ 't', `are the formats you want to use for each limit.
 They can be either Format objects or Strings.
 When formatting with object Y,
 if the object is a NumberFormat, then ((NumberFormat) Y).format(X)
 is called. Otherwise Y.toString() is called.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `limits`],
					[/* text */ 't', ` or
            `],
					[/* inline code block */ 'i', `formats`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
