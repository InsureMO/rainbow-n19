import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.SimpleDateFormat', [
	[/* class description */
		[/* inline code block */ 'i', `SimpleDateFormat`],
		[/* text */ 't', ` is a concrete class for formatting and
 parsing dates in a locale-sensitive manner. It allows for formatting
 (date → text), parsing (text → date), and normalization.

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `SimpleDateFormat`],
			[/* text */ 't', ` allows you to start by choosing
 any user-defined patterns for date-time formatting. However, you
 are encouraged to create a date-time formatter with either
 `],
			[/* inline code block */ 'i', `getTimeInstance`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `getDateInstance`],
			[/* text */ 't', `, or
 `],
			[/* inline code block */ 'i', `getDateTimeInstance`],
			[/* text */ 't', ` in `],
			[/* inline code block */ 'i', `DateFormat`],
			[/* text */ 't', `. Each
 of these class methods can return a date/time formatter initialized
 with a default format pattern. You may modify the format pattern
 using the `],
			[/* inline code block */ 'i', `applyPattern`],
			[/* text */ 't', ` methods as desired.
 For more information on using these methods, see
 `],
			[/* reference */ 'r', `java.text.DateFormat`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', `Date and Time Patterns`],
		[/* block */ 'b', [
			[/* text */ 't', `
 Date and time formats are specified by `],
			[/* text */ 't', `date and time pattern`],
			[/* text */ 't', `
 strings.
 Within date and time pattern strings, unquoted letters from
 `],
			[/* inline code block */ 'i', `'A'`],
			[/* text */ 't', ` to `],
			[/* inline code block */ 'i', `'Z'`],
			[/* text */ 't', ` and from `],
			[/* inline code block */ 'i', `'a'`],
			[/* text */ 't', ` to
 `],
			[/* inline code block */ 'i', `'z'`],
			[/* text */ 't', ` are interpreted as pattern letters representing the
 components of a date or time string.
 Text can be quoted using single quotes (`],
			[/* inline code block */ 'i', `'`],
			[/* text */ 't', `) to avoid
 interpretation.
 `],
			[/* inline code block */ 'i', `"''"`],
			[/* text */ 't', ` represents a single quote.
 All other characters are not interpreted; they're simply copied into the
 output string during formatting or matched against the input string
 during parsing.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The following pattern letters are defined (all other characters from
 `],
			[/* inline code block */ 'i', `'A'`],
			[/* text */ 't', ` to `],
			[/* inline code block */ 'i', `'Z'`],
			[/* text */ 't', ` and from `],
			[/* inline code block */ 'i', `'a'`],
			[/* text */ 't', ` to
 `],
			[/* inline code block */ 'i', `'z'`],
			[/* text */ 't', ` are reserved):
 `]
		]],
		[/* block */ 'b', [
			[/* table */ 't', '']
		]],
		[/* text */ 't', `
 Pattern letters are usually repeated, as their number determines the
 exact presentation:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Text:`],
				[/* text */ 't', `
     For formatting, if the number of pattern letters is 4 or more,
     the full form is used; otherwise a short or abbreviated form
     is used if available.
     For parsing, both forms are accepted, independent of the number
     of pattern letters.`],
				[/* new line */ 'n'],
				[/* new line */ 'n']
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Number:`],
				[/* text */ 't', `
     For formatting, the number of pattern letters is the minimum
     number of digits, and shorter numbers are zero-padded to this amount.
     For parsing, the number of pattern letters is ignored unless
     it's needed to separate two adjacent fields.`],
				[/* new line */ 'n'],
				[/* new line */ 'n']
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Year:`],
				[/* text */ 't', `
     If the formatter's `],
				[/* external link */ 'a', `DateFormat.html#getCalendar()`, `Calendar`],
				[/* text */ 't', ` is the Gregorian
     calendar, the following rules are applied.`],
				[/* new line */ 'n'],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `For formatting, if the number of pattern letters is 2, the year
         is truncated to 2 digits; otherwise it is interpreted as a
         `],
						[/* text */ 't', `number`],
						[/* text */ 't', `.
     `]
					]],
					[/* block */ 'b', `For parsing, if the number of pattern letters is more than 2,
         the year is interpreted literally, regardless of the number of
         digits. So using the pattern "MM/dd/yyyy", "01/11/12" parses to
         Jan 11, 12 A.D.
     `],
					[/* block */ 'b', [
						[/* text */ 't', `For parsing with the abbreviated year pattern ("y" or "yy"),
         `],
						[/* inline code block */ 'i', `SimpleDateFormat`],
						[/* text */ 't', ` must interpret the abbreviated year
         relative to some century.  It does this by adjusting dates to be
         within 80 years before and 20 years after the time the `],
						[/* inline code block */ 'i', `SimpleDateFormat`],
						[/* text */ 't', `
         instance is created. For example, using a pattern of "MM/dd/yy" and a
         `],
						[/* inline code block */ 'i', `SimpleDateFormat`],
						[/* text */ 't', ` instance created on Jan 1, 1997,  the string
         "01/11/12" would be interpreted as Jan 11, 2012 while the string "05/04/64"
         would be interpreted as May 4, 1964.
         During parsing, only strings consisting of exactly two digits, as defined by
         `],
						[/* external link */ 'a', `../lang/Character.html#isDigit(int)`, `Character.isDigit(char)`],
						[/* text */ 't', `, will be parsed into the default century.
         Any other numeric string, such as a one digit string, a three or more digit
         string, or a two digit string that isn't all digits (for example, "-1"), is
         interpreted literally.  So "01/02/3" or "01/02/003" are parsed, using the
         same pattern, as Jan 2, 3 AD.  Likewise, "01/02/-3" is parsed as Jan 2, 4 BC.
     `]
					]]
				]],
				[/* text */ 't', `
     Otherwise, calendar system specific forms are applied.
     For both formatting and parsing, if the number of pattern
     letters is 4 or more, a calendar specific `],
				[/* external link */ 'a', `../util/Calendar.html#LONG`, `long form`],
				[/* text */ 't', ` is used. Otherwise, a calendar
     specific `],
				[/* external link */ 'a', `../util/Calendar.html#SHORT`, `short or abbreviated form`],
				[/* text */ 't', `
     is used.`],
				[/* new line */ 'n'],
				[/* new line */ 'n'],
				[/* text */ 't', `
     If week year `],
				[/* inline code block */ 'i', `'Y'`],
				[/* text */ 't', ` is specified and the `],
				[/* external link */ 'a', `DateFormat.html#getCalendar()`, `calendar`],
				[/* text */ 't', ` doesn't support any `],
				[/* external link */ 'a', `../util/GregorianCalendar.html#week_year`, `week years`],
				[/* text */ 't', `, the calendar year (`],
				[/* inline code block */ 'i', `'y'`],
				[/* text */ 't', `) is used instead. The
     support of week years can be tested with a call to `],
				[/* external link */ 'a', `DateFormat.html#getCalendar()`, `getCalendar()`],
				[/* text */ 't', `.`],
				[/* external link */ 'a', `../util/Calendar.html#isWeekDateSupported()`, `isWeekDateSupported()`],
				[/* text */ 't', `.`],
				[/* new line */ 'n'],
				[/* new line */ 'n']
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Month:`],
				[/* text */ 't', `
     If the number of pattern letters is 3 or more, the month is
     interpreted as `],
				[/* text */ 't', `text`],
				[/* text */ 't', `; otherwise,
     it is interpreted as a `],
				[/* text */ 't', `number`],
				[/* text */ 't', `.`],
				[/* new line */ 'n'],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Letter `],
						[/* text */ 't', `M`],
						[/* text */ 't', ` produces context-sensitive month names, such as the
         embedded form of names. Letter `],
						[/* text */ 't', `M`],
						[/* text */ 't', ` is context-sensitive in the
         sense that when it is used in the standalone pattern, for example,
         "MMMM", it gives the standalone form of a month name and when it is
         used in the pattern containing other field(s), for example, "d MMMM",
         it gives the format form of a month name. For example, January in the
         Catalan language is "de gener" in the format form while it is "gener"
         in the standalone form. In this case, "MMMM" will produce "gener" and
         the month part of the "d MMMM" will produce "de gener". If a
         `],
						[/* inline code block */ 'i', `DateFormatSymbols`],
						[/* text */ 't', ` has been set explicitly with constructor
         `],
						[/* reference */ 'r', `SimpleDateFormat(String,DateFormatSymbols)`],
						[/* text */ 't', ` or method `],
						[/* reference */ 'r', `setDateFormatSymbols(DateFormatSymbols)`],
						[/* text */ 't', `, the month names given by
         the `],
						[/* inline code block */ 'i', `DateFormatSymbols`],
						[/* text */ 't', ` are used.`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Letter `],
						[/* text */ 't', `L`],
						[/* text */ 't', ` produces the standalone form of month names.`]
					]]
				]],
				[/* new line */ 'n']
			]],
			[/* block */ 'b', [
				[/* text */ 't', `General time zone:`],
				[/* text */ 't', `
     Time zones are interpreted as `],
				[/* text */ 't', `text`],
				[/* text */ 't', ` if they have
     names. For time zones representing a GMT offset value, the
     following syntax is used:
     `],
				[/* code block */ 'c', [
					[/* text */ 't', `GMTOffsetTimeZone:`],
					[/* inline code block */ 'i', `GMT`],
					[/* text */ 't', `Sign`],
					[/* text */ 't', `Hours`],
					[/* inline code block */ 'i', `:`],
					[/* text */ 't', `Minutes`],
					[/* text */ 't', `Sign:`],
					[/* text */ 't', ` one of
             `],
					[/* inline code block */ 'i', `+ -`],
					[/* text */ 't', `Hours:`],
					[/* text */ 't', `Digit`],
					[/* text */ 't', `Digit`],
					[/* text */ 't', `Digit`],
					[/* text */ 't', `Minutes:`],
					[/* text */ 't', `Digit`],
					[/* text */ 't', `Digit`],
					[/* text */ 't', `Digit:`],
					[/* text */ 't', ` one of
             `],
					[/* inline code block */ 'i', `0 1 2 3 4 5 6 7 8 9`]
				]],
				[/* text */ 't', `Hours`],
				[/* text */ 't', ` must be between 0 and 23, and `],
				[/* text */ 't', `Minutes`],
				[/* text */ 't', ` must be between
     00 and 59. The format is locale independent and digits must be taken
     from the Basic Latin block of the Unicode standard.
     `],
				[/* block */ 'b', [
					[/* text */ 't', `For parsing, `],
					[/* text */ 't', `RFC 822 time zones`],
					[/* text */ 't', ` are also
     accepted.`],
					[/* new line */ 'n'],
					[/* new line */ 'n']
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `RFC 822 time zone:`],
				[/* text */ 't', `
     For formatting, the RFC 822 4-digit time zone format is used:

     `],
				[/* code block */ 'c', [
					[/* text */ 't', `RFC822TimeZone:`],
					[/* text */ 't', `Sign`],
					[/* text */ 't', `TwoDigitHours`],
					[/* text */ 't', `Minutes`],
					[/* text */ 't', `TwoDigitHours:`],
					[/* text */ 't', `Digit Digit`]
				]],
				[/* text */ 't', `TwoDigitHours`],
				[/* text */ 't', ` must be between 00 and 23. Other definitions
     are as for `],
				[/* text */ 't', `general time zones`],
				[/* text */ 't', `.

     `],
				[/* block */ 'b', [
					[/* text */ 't', `For parsing, `],
					[/* text */ 't', `general time zones`],
					[/* text */ 't', ` are also
     accepted.
 `]
				]]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `ISO 8601 Time zone:`],
				[/* text */ 't', `
     The number of pattern letters designates the format for both formatting
     and parsing as follows:
     `],
				[/* code block */ 'c', [
					[/* text */ 't', `ISO8601TimeZone:`],
					[/* text */ 't', `OneLetterISO8601TimeZone`],
					[/* text */ 't', `TwoLetterISO8601TimeZone`],
					[/* text */ 't', `ThreeLetterISO8601TimeZone`],
					[/* text */ 't', `OneLetterISO8601TimeZone:`],
					[/* text */ 't', `Sign`],
					[/* text */ 't', `TwoDigitHours`],
					[/* inline code block */ 'i', `Z`],
					[/* text */ 't', `TwoLetterISO8601TimeZone:`],
					[/* text */ 't', `Sign`],
					[/* text */ 't', `TwoDigitHours`],
					[/* text */ 't', `Minutes`],
					[/* inline code block */ 'i', `Z`],
					[/* text */ 't', `ThreeLetterISO8601TimeZone:`],
					[/* text */ 't', `Sign`],
					[/* text */ 't', `TwoDigitHours`],
					[/* inline code block */ 'i', `:`],
					[/* text */ 't', `Minutes`],
					[/* inline code block */ 'i', `Z`]
				]],
				[/* text */ 't', `
     Other definitions are as for `],
				[/* text */ 't', `general time zones`],
				[/* text */ 't', ` or
     `],
				[/* text */ 't', `RFC 822 time zones`],
				[/* text */ 't', `.

     `],
				[/* block */ 'b', [
					[/* text */ 't', `For formatting, if the offset value from GMT is 0, `],
					[/* inline code block */ 'i', `"Z"`],
					[/* text */ 't', ` is
     produced. If the number of pattern letters is 1, any fraction of an hour
     is ignored. For example, if the pattern is `],
					[/* inline code block */ 'i', `"X"`],
					[/* text */ 't', ` and the time zone is
     `],
					[/* inline code block */ 'i', `"GMT+05:30"`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `"+05"`],
					[/* text */ 't', ` is produced.

     `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `For parsing, `],
					[/* inline code block */ 'i', `"Z"`],
					[/* text */ 't', ` is parsed as the UTC time zone designator.
     `],
					[/* text */ 't', `General time zones`],
					[/* text */ 't', ` are `],
					[/* text */ 't', `not`],
					[/* text */ 't', ` accepted.

     `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the number of pattern letters is 4 or more, `],
					[/* reference */ 'r', `java.lang.IllegalArgumentException`],
					[/* text */ 't', ` is thrown when constructing a `],
					[/* inline code block */ 'i', `SimpleDateFormat`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `applying a pattern`],
					[/* text */ 't', `.
 `]
				]]
			]],
			[/* block */ 'b', '']
		]],
		[/* inline code block */ 'i', `SimpleDateFormat`],
		[/* text */ 't', ` also supports `],
		[/* text */ 't', `localized date and time
 pattern`],
		[/* text */ 't', ` strings. In these strings, the pattern letters described above
 may be replaced with other, locale dependent, pattern letters.
 `],
		[/* inline code block */ 'i', `SimpleDateFormat`],
		[/* text */ 't', ` does not deal with the localization of text
 other than the pattern letters; that's up to the client of the class.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Examples`],
		[/* text */ 't', `

 The following examples show how date and time patterns are interpreted in
 the U.S. locale. The given date and time are 2001-07-04 12:08:56 local time
 in the U.S. Pacific Time time zone.
 `],
		[/* block */ 'b', [
			[/* table */ 't', '']
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Synchronization`]
		]],
		[/* block */ 'b', `
 Date formats are not synchronized.
 It is recommended to create separate format instances for each thread.
 If multiple threads access a format concurrently, it must be synchronized
 externally.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.text.DateFormatSymbols)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `SimpleDateFormat`],
				[/* text */ 't', ` using the given pattern and
 date format symbols.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern describing the date and time format`]
				]],
				[/* parameter */ 'formatSymbols', [/* parameter description */
					[/* text */ 't', `the date format symbols to be used for formatting`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given pattern or formatSymbols is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given pattern is invalid`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `SimpleDateFormat`],
				[/* text */ 't', ` using the given pattern and
 the default date format symbols for the given locale.
 `],
				[/* text */ 't', `Note:`],
				[/* text */ 't', ` This constructor may not support all locales.
 For full coverage, use the factory methods in the `],
				[/* reference */ 'r', `java.text.DateFormat`],
				[/* text */ 't', `
 class.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern describing the date and time format`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale whose date format symbols should be used`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given pattern or locale is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given pattern is invalid`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `SimpleDateFormat`],
				[/* text */ 't', ` using the given pattern and
 the default date format symbols for the default
 `],
				[/* external link */ 'a', `../util/Locale.Category.html#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 `],
				[/* text */ 't', `Note:`],
				[/* text */ 't', ` This constructor may not support all locales.
 For full coverage, use the factory methods in the `],
				[/* reference */ 'r', `java.text.DateFormat`],
				[/* text */ 't', `
 class.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling
 `],
					[/* reference */ 'r', `SimpleDateFormat(pattern, Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern describing the date and time format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given pattern is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given pattern is invalid`]
				]]
			]
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `SimpleDateFormat`],
				[/* text */ 't', ` using the default pattern and
 date format symbols for the default
 `],
				[/* external link */ 'a', `../util/Locale.Category.html#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.
 `],
				[/* text */ 't', `Note:`],
				[/* text */ 't', ` This constructor may not support all locales.
 For full coverage, use the factory methods in the `],
				[/* reference */ 'r', `java.text.DateFormat`],
				[/* text */ 't', `
 class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the given object with this `],
				[/* inline code block */ 'i', `SimpleDateFormat`],
				[/* text */ 't', ` for
 equality.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the given object is equal to this
 `],
				[/* inline code block */ 'i', `SimpleDateFormat`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code value for this `],
				[/* inline code block */ 'i', `SimpleDateFormat`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code value for this `],
				[/* inline code block */ 'i', `SimpleDateFormat`],
				[/* text */ 't', ` object.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Creates a copy of this `],
				[/* inline code block */ 'i', `SimpleDateFormat`],
				[/* text */ 't', `. This also
 clones the format's date format symbols.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this `],
				[/* inline code block */ 'i', `SimpleDateFormat`]
			]
		]],
		[/* method */ 'format(java.util.Date,java.lang.StringBuffer,java.text.FieldPosition)', [
			[/* method description */
				[/* text */ 't', `Formats the given `],
				[/* inline code block */ 'i', `Date`],
				[/* text */ 't', ` into a date/time string and appends
 the result to the given `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the date-time value to be formatted into a date-time string.`]
				]],
				[/* parameter */ 'toAppendTo', [/* parameter description */
					[/* text */ 't', `where the new date-time text is to be appended.`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `keeps track on the position of the field within
 the returned string. For example, given a date-time text
 `],
					[/* inline code block */ 'i', `"1996.07.10 AD at 15:08:56 PDT"`],
					[/* text */ 't', `, if the given `],
					[/* inline code block */ 'i', `fieldPosition`],
					[/* text */ 't', `
 is `],
					[/* external link */ 'a', `DateFormat.html#YEAR_FIELD`, `DateFormat.YEAR_FIELD`],
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
					[/* external link */ 'a', `DateFormat.html#TIMEZONE_FIELD`, `DateFormat.TIMEZONE_FIELD`],
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
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any of the parameters is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the formatted date-time string.`]
			]
		]],
		[/* method */ 'parse(java.lang.String,java.text.ParsePosition)', [
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
					[/* text */ 't', `This parsing operation uses the `],
					[/* external link */ 'a', `DateFormat.html#calendar`, `calendar`],
					[/* text */ 't', ` to produce a `],
					[/* inline code block */ 'i', `Date`],
					[/* text */ 't', `. All of the `],
					[/* inline code block */ 'i', `calendar`],
					[/* text */ 't', `'s date-time fields are `],
					[/* external link */ 'a', `../util/Calendar.html#clear()`, `cleared`],
					[/* text */ 't', ` before parsing, and the `],
					[/* inline code block */ 'i', `calendar`],
					[/* text */ 't', `'s default
 values of the date-time fields are used for any missing
 date-time information. For example, the year value of the
 parsed `],
					[/* inline code block */ 'i', `Date`],
					[/* text */ 't', ` is 1970 with `],
					[/* reference */ 'r', `java.util.GregorianCalendar`],
					[/* text */ 't', ` if
 no year value is given from the parsing operation.  The `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` value may be overwritten, depending on the given
 pattern and the time zone value in `],
					[/* inline code block */ 'i', `text`],
					[/* text */ 't', `. Any `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` value that has previously been set by a call to
 `],
					[/* external link */ 'a', `DateFormat.html#setTimeZone(java.util.TimeZone)`, `setTimeZone`],
					[/* text */ 't', ` may need
 to be restored for further operations.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
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
					[/* inline code block */ 'i', `text`],
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
					[/* inline code block */ 'i', `DateFormat.Field`],
					[/* text */ 't', `, with the corresponding attribute value
 being the same as the attribute key.`]
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
					[/* text */ 't', `if the Format cannot format the
            given object, or if the Format's pattern string is invalid.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `AttributedCharacterIterator describing the formatted value.`]
			]
		]],
		[/* method */ 'applyPattern(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Applies the given pattern string to this date format.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the new date and time pattern for this date format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given pattern is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given pattern is invalid`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'toPattern()', [
			[/* method description */
				[/* text */ 't', `Returns a pattern string describing this date format.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a pattern string describing this date format.`]
			]
		]],
		[/* method */ 'set2DigitYearStart(java.util.Date)', [
			[/* method description */
				[/* text */ 't', `Sets the 100-year period 2-digit years will be interpreted as being in
 to begin on the date the user specifies.`]
			],
			[/* parameters */
				[/* parameter */ 'startDate', [/* parameter description */
					[/* text */ 't', `During parsing, two digit years will be placed in the range
 `],
					[/* inline code block */ 'i', `startDate`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `startDate + 100 years`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `startDate`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'get2DigitYearStart()', [
			[/* method description */
				[/* text */ 't', `Returns the beginning date of the 100-year period 2-digit years are interpreted
 as being within.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the start of the 100-year period into which two digit years are
 parsed`]
			]
		]],
		[/* method */ 'toLocalizedPattern()', [
			[/* method description */
				[/* text */ 't', `Returns a localized pattern string describing this date format.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a localized pattern string describing this date format.`]
			]
		]],
		[/* method */ 'applyLocalizedPattern(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Applies the given localized pattern string to this date format.`]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `a String to be mapped to the new date and time format
        pattern for this format`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given pattern is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the given pattern is invalid`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'getDateFormatSymbols()', [
			[/* method description */
				[/* text */ 't', `Gets a copy of the date and time format symbols of this date format.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the date and time format symbols of this date format`]
			]
		]],
		[/* method */ 'setDateFormatSymbols(java.text.DateFormatSymbols)', [
			[/* method description */
				[/* text */ 't', `Sets the date and time format symbols of this date format.`]
			],
			[/* parameters */
				[/* parameter */ 'newFormatSymbols', [/* parameter description */
					[/* text */ 't', `the new date and time format symbols`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the given newFormatSymbols is null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
