import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.DayOfWeek', [
	[/* class description */
		[/* text */ 't', `A day-of-week, such as 'Tuesday'.
 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `DayOfWeek`],
			[/* text */ 't', ` is an enum representing the 7 days of the week -
 Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 In addition to the textual enum name, each day-of-week has an `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', ` value.
 The `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', ` value follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday).
 It is recommended that applications use the enum rather than the `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', ` value
 to ensure code clarity.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 This enum provides access to the localized textual form of the day-of-week.
 Some locales also assign different numeric values to the days, declaring
 Sunday to have the value 1, however this class provides no support for this.
 See `],
			[/* reference */ 'r', `java.time.temporal.WeekFields`],
			[/* text */ 't', ` for localized week-numbering.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Do not use `],
			[/* inline code block */ 'i', `ordinal()`],
			[/* text */ 't', ` to obtain the numeric representation of `],
			[/* inline code block */ 'i', `DayOfWeek`],
			[/* text */ 't', `.
 Use `],
			[/* inline code block */ 'i', `getValue()`],
			[/* text */ 't', ` instead.`]
		]],
		[/* block */ 'b', `
 This enum represents a common concept that is found in many calendar systems.
 As such, this enum may be used by any calendar system that has the day-of-week
 concept defined exactly equivalent to the ISO calendar system.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'get(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this day-of-week as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this day-of-week for the value of the specified field.
 The returned value will always be within the valid range of values for the field.
 If it is not possible to return the value, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is `],
					[/* reference */ 'r', `.ChronoField#DAY_OF_WEEK`],
					[/* text */ 't', ` then the
 value of the day-of-week, from 1 to 7, will be returned.
 All other `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` instances will throw an `],
					[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is not a `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', `, then the result of this method
 is obtained by invoking `],
					[/* inline code block */ 'i', `TemporalField.getFrom(TemporalAccessor)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument. Whether the value can be obtained,
 and what the value represents, is determined by the field.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to get, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if a value for the field cannot be obtained or
         the value is outside the range of valid values for the field`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the field is not supported or
         the range of values exceeds an `],
					[/* inline code block */ 'i', `int`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value for the field, within the valid range of values`]
			]
		]],
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the constants of this enum class, in
the order they are declared.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]],
		[/* method */ 'getLong(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this day-of-week as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this day-of-week for the value of the specified field.
 If it is not possible to return the value, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is `],
					[/* reference */ 'r', `.ChronoField#DAY_OF_WEEK`],
					[/* text */ 't', ` then the
 value of the day-of-week, from 1 to 7, will be returned.
 All other `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` instances will throw an `],
					[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is not a `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', `, then the result of this method
 is obtained by invoking `],
					[/* inline code block */ 'i', `TemporalField.getFrom(TemporalAccessor)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument. Whether the value can be obtained,
 and what the value represents, is determined by the field.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to get, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if a value for the field cannot be obtained`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the field is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value for the field`]
			]
		]],
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the enum constant of this class with the specified name.
The string must match `],
				[/* text */ 't', `exactly`],
				[/* text */ 't', ` an identifier used to declare an
enum constant in this class.  (Extraneous whitespace characters are 
not permitted.)`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the enum constant to be returned.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this enum class has no constant with the specified name`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the enum constant with the specified name`]
			]
		]],
		[/* method */ 'getValue()', [
			[/* method description */
				[/* text */ 't', `Gets the day-of-week `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The values are numbered following the ISO-8601 standard, from 1 (Monday) to 7 (Sunday).
 See `],
					[/* reference */ 'r', `.WeekFields#dayOfWeek()`],
					[/* text */ 't', ` for localized week-numbering.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the day-of-week, from 1 (Monday) to 7 (Sunday)`]
			]
		]],
		[/* method */ 'of(int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `DayOfWeek`],
				[/* text */ 't', ` from an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `DayOfWeek`],
					[/* text */ 't', ` is an enum representing the 7 days of the week.
 This factory allows the enum to be obtained from the `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value.
 The `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dayOfWeek', [/* parameter description */
					[/* text */ 't', `the day-of-week to represent, from 1 (Monday) to 7 (Sunday)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the day-of-week is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the day-of-week singleton, not null`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `DayOfWeek`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains a day-of-week based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `DayOfWeek`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion extracts the `],
					[/* reference */ 'r', `.ChronoField#DAY_OF_WEEK`],
					[/* text */ 't', ` field.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method matches the signature of the functional interface `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
					[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
					[/* inline code block */ 'i', `DayOfWeek::from`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to convert, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to convert to a `],
					[/* inline code block */ 'i', `DayOfWeek`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the day-of-week, not null`]
			]
		]],
		[/* method */ 'query(java.time.temporal.TemporalQuery)', [
			[/* method description */
				[/* text */ 't', `Queries this day-of-week using the specified query.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries this day-of-week using the specified query strategy object.
 The `],
					[/* inline code block */ 'i', `TemporalQuery`],
					[/* text */ 't', ` object defines the logic to be used to
 obtain the result. Read the documentation of the query to understand
 what the result of this method will be.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The result of this method is obtained by invoking the
 `],
					[/* reference */ 'r', `.TemporalQuery#queryFrom(java.time.temporal.TemporalAccessor)`],
					[/* text */ 't', ` method on the
 specified query passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'query', [/* parameter description */
					[/* text */ 't', `the query to invoke, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to query (defined by the query)`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs (defined by the query)`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the query result, null may be returned (defined by the query)`]
			]
		]],
		[/* method */ 'range(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the range of valid values for the specified field.
 `],
				[/* block */ 'b', `
 The range object expresses the minimum and maximum valid values for a field.
 This day-of-week is used to enhance the accuracy of the returned range.
 If it is not possible to return the range, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is `],
					[/* reference */ 'r', `.ChronoField#DAY_OF_WEEK`],
					[/* text */ 't', ` then the
 range of the day-of-week, from 1 to 7, will be returned.
 All other `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` instances will throw an `],
					[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is not a `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', `, then the result of this method
 is obtained by invoking `],
					[/* inline code block */ 'i', `TemporalField.rangeRefinedBy(TemporalAccessor)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument.
 Whether the range can be obtained is determined by the field.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to query the range for, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the range for the field cannot be obtained`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the field is not supported`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the range of valid values for the field, not null`]
			]
		]],
		[/* method */ 'isSupported(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified field is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if this day-of-week can be queried for the specified field.
 If false, then calling the `],
					[/* reference */ 'r', `#range(java.time.temporal.TemporalField)`, `range`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `#get(java.time.temporal.TemporalField)`, `get`],
					[/* text */ 't', ` methods will throw an exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is `],
					[/* reference */ 'r', `.ChronoField#DAY_OF_WEEK`],
					[/* text */ 't', ` then
 this method returns true.
 All other `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` instances will return false.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is not a `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', `, then the result of this method
 is obtained by invoking `],
					[/* inline code block */ 'i', `TemporalField.isSupportedBy(TemporalAccessor)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument.
 Whether the field is supported is determined by the field.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the field is supported on this day-of-week, false if not`]
			]
		]],
		[/* method */ 'getDisplayName(java.time.format.TextStyle,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the textual representation, such as 'Mon' or 'Friday'.
 `],
				[/* block */ 'b', `
 This returns the textual name used to identify the day-of-week,
 suitable for presentation to the user.
 The parameters control the style of the returned text and the locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If no textual mapping is found then the `],
					[/* reference */ 'r', `#getValue()`, `numeric value`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `the length of the text required, not null`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the text value of the day-of-week, not null`]
			]
		]],
		[/* method */ 'adjustInto(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adjusts the specified temporal object to have this day-of-week.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with the day-of-week changed to be the same as this.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The adjustment is equivalent to using `],
					[/* reference */ 'r', `.Temporal#with(java.time.temporal.TemporalField,long)`],
					[/* text */ 't', `
 passing `],
					[/* reference */ 'r', `.ChronoField#DAY_OF_WEEK`],
					[/* text */ 't', ` as the field.
 Note that this adjusts forwards or backwards within a Monday to Sunday week.
 See `],
					[/* reference */ 'r', `.WeekFields#dayOfWeek()`],
					[/* text */ 't', ` for localized week start days.
 See `],
					[/* inline code block */ 'i', `TemporalAdjuster`],
					[/* text */ 't', ` for other adjusters with more control,
 such as `],
					[/* inline code block */ 'i', `next(MONDAY)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In most cases, it is clearer to reverse the calling pattern by using
 `],
					[/* reference */ 'r', `.Temporal#with(java.time.temporal.TemporalAdjuster)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisDayOfWeek.adjustInto(temporal);
   temporal = temporal.with(thisDayOfWeek);
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 For example, given a date that is a Wednesday, the following are output:
 `],
				[/* code block */ 'c', `   dateOnWed.with(MONDAY);     // two days earlier
   dateOnWed.with(TUESDAY);    // one day earlier
   dateOnWed.with(WEDNESDAY);  // same date
   dateOnWed.with(THURSDAY);   // one day later
   dateOnWed.with(FRIDAY);     // two days later
   dateOnWed.with(SATURDAY);   // three days later
   dateOnWed.with(SUNDAY);     // four days later
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the target object to be adjusted, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to make the adjustment`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the adjusted object, not null`]
			]
		]],
		[/* method */ 'plus(long)', [
			[/* method description */
				[/* text */ 't', `Returns the day-of-week that is the specified number of days after this one.
 `],
				[/* block */ 'b', `
 The calculation rolls around the end of the week from Sunday to Monday.
 The specified period may be negative.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'days', [/* parameter description */
					[/* text */ 't', `the days to add, positive or negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the resulting day-of-week, not null`]
			]
		]],
		[/* method */ 'minus(long)', [
			[/* method description */
				[/* text */ 't', `Returns the day-of-week that is the specified number of days before this one.
 `],
				[/* block */ 'b', `
 The calculation rolls around the start of the year from Monday to Sunday.
 The specified period may be negative.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'days', [/* parameter description */
					[/* text */ 't', `the days to subtract, positive or negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the resulting day-of-week, not null`]
			]
		]]
	],
]);
