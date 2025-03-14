import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.DateFormat', [
	[/* class description */
		[/* inline code block */ 'i', `DateFormat`],
		[/* text */ 't', ` is an abstract class for date/time formatting subclasses which
 formats and parses dates or time in a language-independent manner.
 The date/time formatting subclass, such as `],
		[/* reference */ 'r', `java.text.SimpleDateFormat`, `SimpleDateFormat`],
		[/* text */ 't', `, allows for
 formatting (i.e., date → text), parsing (text → date), and
 normalization.  The date is represented as a `],
		[/* inline code block */ 'i', `Date`],
		[/* text */ 't', ` object or
 as the milliseconds since January 1, 1970, 00:00:00 GMT.

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `DateFormat`],
			[/* text */ 't', ` provides many class methods for obtaining default date/time
 formatters based on the default or a given locale and a number of formatting
 styles. The formatting styles include `],
			[/* text */ 't', `FULL`],
			[/* text */ 't', `, `],
			[/* text */ 't', `LONG`],
			[/* text */ 't', `, `],
			[/* text */ 't', `MEDIUM`],
			[/* text */ 't', `, and `],
			[/* text */ 't', `SHORT`],
			[/* text */ 't', `. More
 detail and examples of using these styles are provided in the method
 descriptions.

 `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `DateFormat`],
			[/* text */ 't', ` helps you to format and parse dates for any locale.
 Your code can be completely independent of the locale conventions for
 months, days of the week, or even the calendar format: lunar vs. solar.

 `]
		]],
		[/* block */ 'b', `To format a date for the current Locale, use one of the
 static factory methods:
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `myString = DateFormat.getDateInstance().format(myDate);`]
			]],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `If you are formatting multiple dates, it is
 more efficient to get the format and use it multiple times so that
 the system doesn't have to fetch the information about the local
 language and country conventions multiple times.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `DateFormat df = DateFormat.getDateInstance();
 for (int i = 0; i < myDate.length; ++i) {
     output.println(df.format(myDate[i]) + "; ");
 }`]
			]],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `To format a date for a different Locale, specify it in the
 call to `],
			[/* reference */ 'r', `#getDateInstance(int,java.util.Locale)`, `getDateInstance()`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `DateFormat df = DateFormat.getDateInstance(DateFormat.LONG, Locale.FRANCE);`]
			]],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `If the specified locale contains "ca" (calendar), "rg" (region override),
 and/or "tz" (timezone) `],
			[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode extensions`],
			[/* text */ 't', `, the calendar, the country and/or the time zone for formatting
 are overridden. If both "ca" and "rg" are specified, the calendar from the "ca"
 extension supersedes the implicit one from the "rg" extension.

 `]
		]],
		[/* block */ 'b', `You can use a DateFormat to parse also.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `myDate = df.parse(myString);`]
			]],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Use `],
			[/* inline code block */ 'i', `getDateInstance`],
			[/* text */ 't', ` to get the normal date format for that country.
 There are other static factory methods available.
 Use `],
			[/* inline code block */ 'i', `getTimeInstance`],
			[/* text */ 't', ` to get the time format for that country.
 Use `],
			[/* inline code block */ 'i', `getDateTimeInstance`],
			[/* text */ 't', ` to get a date and time format. You can pass in
 different options to these factory methods to control the length of the
 result; from `],
			[/* text */ 't', `SHORT`],
			[/* text */ 't', ` to `],
			[/* text */ 't', `MEDIUM`],
			[/* text */ 't', ` to `],
			[/* text */ 't', `LONG`],
			[/* text */ 't', ` to `],
			[/* text */ 't', `FULL`],
			[/* text */ 't', `. The exact result depends
 on the locale, but generally:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `SHORT`],
				[/* text */ 't', ` is completely numeric, such as `],
				[/* inline code block */ 'i', `12.13.52`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `3:30pm`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `MEDIUM`],
				[/* text */ 't', ` is longer, such as `],
				[/* inline code block */ 'i', `Jan 12, 1952`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `LONG`],
				[/* text */ 't', ` is longer, such as `],
				[/* inline code block */ 'i', `January 12, 1952`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `3:30:32pm`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `FULL`],
				[/* text */ 't', ` is pretty completely specified, such as
 `],
				[/* inline code block */ 'i', `Tuesday, April 12, 1952 AD or 3:30:42pm PST`],
				[/* text */ 't', `.
 `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `You can also set the time zone on the format if you wish.
 If you want even more control over the format or parsing,
 (or want to give your users more control),
 you can try casting the `],
			[/* inline code block */ 'i', `DateFormat`],
			[/* text */ 't', ` you get from the factory methods
 to a `],
			[/* reference */ 'r', `java.text.SimpleDateFormat`, `SimpleDateFormat`],
			[/* text */ 't', `. This will work for the majority
 of countries; just remember to put it in a `],
			[/* inline code block */ 'i', `try`],
			[/* text */ 't', ` block in case you
 encounter an unusual one.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `You can also use forms of the parse and format methods with
 `],
			[/* reference */ 'r', `java.text.ParsePosition`, `ParsePosition`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.text.FieldPosition`, `FieldPosition`],
			[/* text */ 't', ` to
 allow you to
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', `progressively parse through pieces of a string.
 `],
			[/* block */ 'b', `align any particular field, or find out where it is for selection
 on the screen.
 `]
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
 Date formats are not synchronized.
 It is recommended to create separate format instances for each thread.
 If multiple threads access a format concurrently, it must be synchronized
 externally.`]
	],
	[/* fields */
		[/* field */ 'AM_PM_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for AM_PM field alignment.
 Used in FieldPosition of date/time formatting.`]
			],
		]],
		[/* field */ 'calendar', [
			[/* field description */
				[/* text */ 't', `The `],
				[/* reference */ 'r', `java.util.Calendar`, `Calendar`],
				[/* text */ 't', ` instance used for calculating the date-time fields
 and the instant of time. This field is used for both formatting and
 parsing.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Subclasses should initialize this field to a `],
					[/* reference */ 'r', `java.util.Calendar`, `Calendar`],
					[/* text */ 't', `
 appropriate for the `],
					[/* reference */ 'r', `java.util.Locale`, `Locale`],
					[/* text */ 't', ` associated with this
 `],
					[/* inline code block */ 'i', `DateFormat`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'DATE_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for DATE field alignment.
 Used in FieldPosition of date/time formatting.`]
			],
		]],
		[/* field */ 'DAY_OF_WEEK_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for DAY_OF_WEEK field alignment.
 Used in FieldPosition of date/time formatting.`]
			],
		]],
		[/* field */ 'DAY_OF_WEEK_IN_MONTH_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for DAY_OF_WEEK_IN_MONTH field alignment.
 Used in FieldPosition of date/time formatting.`]
			],
		]],
		[/* field */ 'DAY_OF_YEAR_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for DAY_OF_YEAR field alignment.
 Used in FieldPosition of date/time formatting.`]
			],
		]],
		[/* field */ 'DEFAULT', [
			[/* field description */
				[/* text */ 't', `Constant for default style pattern.  Its value is MEDIUM.`]
			],
		]],
		[/* field */ 'ERA_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for ERA field alignment.
 Used in FieldPosition of date/time formatting.`]
			],
		]],
		[/* field */ 'FULL', [
			[/* field description */
				[/* text */ 't', `Constant for full style pattern.`]
			],
		]],
		[/* field */ 'HOUR0_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for zero-based HOUR field alignment.
 Used in FieldPosition of date/time formatting.
 HOUR0_FIELD is used for the zero-based 12-hour clock.
 For example, 11:30 PM + 1 hour results in 00:30 AM.`]
			],
		]],
		[/* field */ 'HOUR1_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for one-based HOUR field alignment.
 Used in FieldPosition of date/time formatting.
 HOUR1_FIELD is used for the one-based 12-hour clock.
 For example, 11:30 PM + 1 hour results in 12:30 AM.`]
			],
		]],
		[/* field */ 'HOUR_OF_DAY0_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for zero-based HOUR_OF_DAY field alignment.
 Used in FieldPosition of date/time formatting.
 HOUR_OF_DAY0_FIELD is used for the zero-based 24-hour clock.
 For example, 23:59 + 01:00 results in 00:59.`]
			],
		]],
		[/* field */ 'HOUR_OF_DAY1_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for one-based HOUR_OF_DAY field alignment.
 Used in FieldPosition of date/time formatting.
 HOUR_OF_DAY1_FIELD is used for the one-based 24-hour clock.
 For example, 23:59 + 01:00 results in 24:59.`]
			],
		]],
		[/* field */ 'LONG', [
			[/* field description */
				[/* text */ 't', `Constant for long style pattern.`]
			],
		]],
		[/* field */ 'MEDIUM', [
			[/* field description */
				[/* text */ 't', `Constant for medium style pattern.`]
			],
		]],
		[/* field */ 'MILLISECOND_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for MILLISECOND field alignment.
 Used in FieldPosition of date/time formatting.`]
			],
		]],
		[/* field */ 'MINUTE_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for MINUTE field alignment.
 Used in FieldPosition of date/time formatting.`]
			],
		]],
		[/* field */ 'MONTH_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for MONTH field alignment.
 Used in FieldPosition of date/time formatting.`]
			],
		]],
		[/* field */ 'numberFormat', [
			[/* field description */
				[/* text */ 't', `The number formatter that `],
				[/* inline code block */ 'i', `DateFormat`],
				[/* text */ 't', ` uses to format numbers
 in dates and times.  Subclasses should initialize this to a number format
 appropriate for the locale associated with this `],
				[/* inline code block */ 'i', `DateFormat`],
				[/* text */ 't', `.`]
			],
		]],
		[/* field */ 'SECOND_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for SECOND field alignment.
 Used in FieldPosition of date/time formatting.`]
			],
		]],
		[/* field */ 'SHORT', [
			[/* field description */
				[/* text */ 't', `Constant for short style pattern.`]
			],
		]],
		[/* field */ 'TIMEZONE_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for TIMEZONE field alignment.
 Used in FieldPosition of date/time formatting.`]
			],
		]],
		[/* field */ 'WEEK_OF_MONTH_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for WEEK_OF_MONTH field alignment.
 Used in FieldPosition of date/time formatting.`]
			],
		]],
		[/* field */ 'WEEK_OF_YEAR_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for WEEK_OF_YEAR field alignment.
 Used in FieldPosition of date/time formatting.`]
			],
		]],
		[/* field */ 'YEAR_FIELD', [
			[/* field description */
				[/* text */ 't', `Useful constant for YEAR field alignment.
 Used in FieldPosition of date/time formatting.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Create a new date format.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'format(java.util.Date,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Formats a `],
				[/* reference */ 'r', `java.util.Date`, `Date`],
				[/* text */ 't', ` into a date-time string. The formatted
 string is appended to the given `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `a Date to be formatted into a date-time string.`]
				]],
				[/* parameter */ 'toAppendTo', [/* parameter description */
					[/* text */ 't', `the string buffer for the returning date-time string.`]
				]],
				[/* parameter */ 'fieldPosition', [/* parameter description */
					[/* text */ 't', `keeps track on the position of the field within
 the returned string. For example, given a date-time text
 `],
					[/* inline code block */ 'i', `"1996.07.10 AD at 15:08:56 PDT"`],
					[/* text */ 't', `, if the given `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', `
 is `],
					[/* text */ 't', `YEAR_FIELD`],
					[/* text */ 't', `, the begin index and end index of
 `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` will be set to 0 and 4, respectively.
 Notice that if the same date-time field appears more than once in a
 pattern, the `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` will be set for the first occurrence
 of that date-time field. For instance, formatting a `],
					[/* inline code block */ 'i', `Date`],
					[/* text */ 't', ` to the
 date-time string `],
					[/* inline code block */ 'i', `"1 PM PDT (Pacific Daylight Time)"`],
					[/* text */ 't', ` using the
 pattern `],
					[/* inline code block */ 'i', `"h a z (zzzz)"`],
					[/* text */ 't', ` and the alignment field
 `],
					[/* text */ 't', `TIMEZONE_FIELD`],
					[/* text */ 't', `, the begin index and end index of
 `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` will be set to 5 and 8, respectively, for the
 first occurrence of the timezone pattern character `],
					[/* inline code block */ 'i', `'z'`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string buffer passed in as `],
				[/* inline code block */ 'i', `toAppendTo`],
				[/* text */ 't', `, with formatted
 text appended.`]
			]
		]],
		[/* method */ 'parse(java.lang.String,java.text.ParsePosition)', [
			[/* method description */
				[/* text */ 't', `Parse a date/time string according to the given parse position.  For
 example, a time text `],
				[/* inline code block */ 'i', `"07/10/96 4:5 PM, PDT"`],
				[/* text */ 't', ` will be parsed into a `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', `
 that is equivalent to `],
				[/* inline code block */ 'i', `Date(837039900000L)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` By default, parsing is lenient: If the input is not in the form used
 by this object's format method but can still be parsed as a date, then
 the parse succeeds.  Clients may insist on strict adherence to the
 format by calling `],
					[/* reference */ 'r', `#setLenient(boolean)`, `setLenient(false)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `This parsing operation uses the `],
					[/* text */ 't', `calendar`],
					[/* text */ 't', ` to produce
 a `],
					[/* inline code block */ 'i', `Date`],
					[/* text */ 't', `. As a result, the `],
					[/* inline code block */ 'i', `calendar`],
					[/* text */ 't', `'s date-time
 fields and the `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` value may have been
 overwritten, depending on subclass implementations. Any `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` value that has previously been set by a call to
 `],
					[/* reference */ 'r', `#setTimeZone(java.util.TimeZone)`, `setTimeZone`],
					[/* text */ 't', ` may need
 to be restored for further operations.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `The date/time string to be parsed`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `On input, the position at which to start parsing; on
              output, the position at which parsing terminated, or the
              start position if the parse failed.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the input could not be parsed`]
			]
		]],
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
		[/* method */ 'isLenient()', [
			[/* method description */
				[/* text */ 't', `Tell whether date/time parsing is to be lenient.
 This method is equivalent to the following call.
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `getCalendar().isLenient()`]
					]]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the `],
				[/* text */ 't', `calendar`],
				[/* text */ 't', ` is lenient;
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'format(java.util.Date)', [
			[/* method description */
				[/* text */ 't', `Formats a `],
				[/* reference */ 'r', `java.util.Date`, `Date`],
				[/* text */ 't', ` into a date-time string.`]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the time value to be formatted into a date-time string.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the formatted date-time string.`]
			]
		]],
		[/* method */ 'format(java.lang.Object,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Formats the given `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` into a date-time string. The formatted
 string is appended to the given `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `Must be a `],
					[/* inline code block */ 'i', `Date`],
					[/* text */ 't', ` or a `],
					[/* inline code block */ 'i', `Number`],
					[/* text */ 't', ` representing a
 millisecond offset from the `],
					[/* reference */ 'r', `java.util.Calendar#Epoch`, `Epoch`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'toAppendTo', [/* parameter description */
					[/* text */ 't', `The string buffer for the returning date-time string.`]
				]],
				[/* parameter */ 'fieldPosition', [/* parameter description */
					[/* text */ 't', `keeps track on the position of the field within
 the returned string. For example, given a date-time text
 `],
					[/* inline code block */ 'i', `"1996.07.10 AD at 15:08:56 PDT"`],
					[/* text */ 't', `, if the given `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', `
 is `],
					[/* text */ 't', `YEAR_FIELD`],
					[/* text */ 't', `, the begin index and end index of
 `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` will be set to 0 and 4, respectively.
 Notice that if the same date-time field appears more than once in a
 pattern, the `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` will be set for the first occurrence
 of that date-time field. For instance, formatting a `],
					[/* inline code block */ 'i', `Date`],
					[/* text */ 't', ` to the
 date-time string `],
					[/* inline code block */ 'i', `"1 PM PDT (Pacific Daylight Time)"`],
					[/* text */ 't', ` using the
 pattern `],
					[/* inline code block */ 'i', `"h a z (zzzz)"`],
					[/* text */ 't', ` and the alignment field
 `],
					[/* text */ 't', `TIMEZONE_FIELD`],
					[/* text */ 't', `, the begin index and end index of
 `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', ` will be set to 5 and 8, respectively, for the
 first occurrence of the timezone pattern character `],
					[/* inline code block */ 'i', `'z'`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `Format`],
					[/* text */ 't', ` cannot format
            the given `],
					[/* inline code block */ 'i', `obj`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the string buffer passed in as `],
				[/* inline code block */ 'i', `toAppendTo`],
				[/* text */ 't', `,
         with formatted text appended.`]
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
		[/* method */ 'parseObject(java.lang.String,java.text.ParsePosition)', [
			[/* method description */
				[/* text */ 't', `Parses text from a string to produce a `],
				[/* inline code block */ 'i', `Date`],
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
 date is returned. The updated `],
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
 on date parsing.`]
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
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` parsed from the string. In case of
         error, returns null.`]
			]
		]],
		[/* method */ 'getNumberFormat()', [
			[/* method description */
				[/* text */ 't', `Gets the number formatter which this date/time formatter uses to
 format and parse a time.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number formatter which this date/time formatter uses.`]
			]
		]],
		[/* method */ 'getCalendar()', [
			[/* method description */
				[/* text */ 't', `Gets the calendar associated with this date/time formatter.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the calendar associated with this date/time formatter.`]
			]
		]],
		[/* method */ 'parse(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Parses text from the beginning of the given string to produce a date.
 The method may not use the entire text of the given string.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 See the `],
					[/* reference */ 'r', `#parse(java.lang.String,java.text.ParsePosition)`, `parse(String, ParsePosition)`],
					[/* text */ 't', ` method for more information
 on date parsing.`]
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
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` parsed from the string.`]
			]
		]],
		[/* method */ 'getTimeZone()', [
			[/* method description */
				[/* text */ 't', `Gets the time zone.
 This method is equivalent to the following call.
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `getCalendar().getTimeZone()`]
					]]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the time zone associated with the calendar of DateFormat.`]
			]
		]],
		[/* method */ 'getDateInstance()', [
			[/* method description */
				[/* text */ 't', `Gets the date formatter with the default formatting style
 for the default `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling
 `],
					[/* reference */ 'r', `#getDateInstance(int,java.util.Locale)`, `getDateInstance(DEFAULT, Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a date formatter.`]
			]
		]],
		[/* method */ 'getDateInstance(int)', [
			[/* method description */
				[/* text */ 't', `Gets the date formatter with the given formatting style
 for the default `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling
 `],
					[/* reference */ 'r', `#getDateInstance(int,java.util.Locale)`, `getDateInstance(style, Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `the given formatting style. For example,
 SHORT for "M/d/yy" in the US locale.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a date formatter.`]
			]
		]],
		[/* method */ 'getDateInstance(int,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the date formatter with the given formatting style
 for the given locale.`]
			],
			[/* parameters */
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `the given formatting style. For example,
 SHORT for "M/d/yy" in the US locale.`]
				]],
				[/* parameter */ 'aLocale', [/* parameter description */
					[/* text */ 't', `the given locale.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a date formatter.`]
			]
		]],
		[/* method */ 'getDateTimeInstance()', [
			[/* method description */
				[/* text */ 't', `Gets the date/time formatter with the default formatting style
 for the default `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling
 `],
					[/* reference */ 'r', `#getDateTimeInstance(int,int,java.util.Locale)`, `getDateTimeInstance(DEFAULT, DEFAULT, Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a date/time formatter.`]
			]
		]],
		[/* method */ 'getDateTimeInstance(int,int)', [
			[/* method description */
				[/* text */ 't', `Gets the date/time formatter with the given date and time
 formatting styles for the default `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling
 `],
					[/* reference */ 'r', `#getDateTimeInstance(int,int,java.util.Locale)`, `getDateTimeInstance(dateStyle, timeStyle, Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dateStyle', [/* parameter description */
					[/* text */ 't', `the given date formatting style. For example,
 SHORT for "M/d/yy" in the US locale.`]
				]],
				[/* parameter */ 'timeStyle', [/* parameter description */
					[/* text */ 't', `the given time formatting style. For example,
 SHORT for "h:mm a" in the US locale.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a date/time formatter.`]
			]
		]],
		[/* method */ 'getDateTimeInstance(int,int,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the date/time formatter with the given formatting styles
 for the given locale.`]
			],
			[/* parameters */
				[/* parameter */ 'dateStyle', [/* parameter description */
					[/* text */ 't', `the given date formatting style.`]
				]],
				[/* parameter */ 'timeStyle', [/* parameter description */
					[/* text */ 't', `the given time formatting style.`]
				]],
				[/* parameter */ 'aLocale', [/* parameter description */
					[/* text */ 't', `the given locale.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a date/time formatter.`]
			]
		]],
		[/* method */ 'getInstance()', [
			[/* method description */
				[/* text */ 't', `Get a default date/time formatter that uses the SHORT style for both the
 date and the time.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a date/time formatter`]
			]
		]],
		[/* method */ 'getTimeInstance()', [
			[/* method description */
				[/* text */ 't', `Gets the time formatter with the default formatting style
 for the default `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling
 `],
					[/* reference */ 'r', `#getTimeInstance(int,java.util.Locale)`, `getTimeInstance(DEFAULT, Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a time formatter.`]
			]
		]],
		[/* method */ 'getTimeInstance(int)', [
			[/* method description */
				[/* text */ 't', `Gets the time formatter with the given formatting style
 for the default `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling
 `],
					[/* reference */ 'r', `#getTimeInstance(int,java.util.Locale)`, `getTimeInstance(style, Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `the given formatting style. For example,
 SHORT for "h:mm a" in the US locale.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a time formatter.`]
			]
		]],
		[/* method */ 'getTimeInstance(int,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the time formatter with the given formatting style
 for the given locale.`]
			],
			[/* parameters */
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `the given formatting style. For example,
 SHORT for "h:mm a" in the US locale.`]
				]],
				[/* parameter */ 'aLocale', [/* parameter description */
					[/* text */ 't', `the given locale.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a time formatter.`]
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
				[/* reference */ 'r', `java.text.spi.DateFormatProvider`, `DateFormatProvider`],
				[/* text */ 't', ` implementations.
 It must contain at least a `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', ` instance equal to
 `],
				[/* reference */ 'r', `java.util.Locale#US`, `Locale.US`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An array of locales for which localized
         `],
				[/* inline code block */ 'i', `DateFormat`],
				[/* text */ 't', ` instances are available.`]
			]
		]],
		[/* method */ 'setCalendar(java.util.Calendar)', [
			[/* method description */
				[/* text */ 't', `Set the calendar to be used by this date format.  Initially, the default
 calendar for the specified or default locale is used.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Any `],
					[/* reference */ 'r', `java.util.TimeZone`, `TimeZone`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#isLenient()`, `leniency`],
					[/* text */ 't', ` values that have previously been set are
 overwritten by `],
					[/* inline code block */ 'i', `newCalendar`],
					[/* text */ 't', `'s values.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'newCalendar', [/* parameter description */
					[/* text */ 't', `the new `],
					[/* inline code block */ 'i', `Calendar`],
					[/* text */ 't', ` to be used by the date format`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setLenient(boolean)', [
			[/* method description */
				[/* text */ 't', `Specify whether or not date/time parsing is to be lenient.  With
 lenient parsing, the parser may use heuristics to interpret inputs that
 do not precisely match this object's format.  With strict parsing,
 inputs must match this object's format.

 `],
				[/* block */ 'b', `This method is equivalent to the following call.
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `getCalendar().setLenient(lenient)`]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `This leniency value is overwritten by a call to `],
					[/* reference */ 'r', `#setCalendar(java.util.Calendar)`, `setCalendar()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'lenient', [/* parameter description */
					[/* text */ 't', `when `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `, parsing is lenient`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setNumberFormat(java.text.NumberFormat)', [
			[/* method description */
				[/* text */ 't', `Allows you to set the number formatter.`]
			],
			[/* parameters */
				[/* parameter */ 'newNumberFormat', [/* parameter description */
					[/* text */ 't', `the given new NumberFormat.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setTimeZone(java.util.TimeZone)', [
			[/* method description */
				[/* text */ 't', `Sets the time zone for the calendar of this `],
				[/* inline code block */ 'i', `DateFormat`],
				[/* text */ 't', ` object.
 This method is equivalent to the following call.
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* inline code block */ 'i', `getCalendar().setTimeZone(zone)`]
					]]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` set by this method is overwritten by a
 `],
					[/* reference */ 'r', `#setCalendar(java.util.Calendar)`, `setCalendar`],
					[/* text */ 't', ` call.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` set by this method may be overwritten as
 a result of a call to the parse method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the given new time zone.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
