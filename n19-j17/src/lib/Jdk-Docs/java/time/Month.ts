import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.Month', [
	[/* class description */
		[/* text */ 't', `A month-of-year, such as 'July'.
 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `Month`],
			[/* text */ 't', ` is an enum representing the 12 months of the year -
 January, February, March, April, May, June, July, August, September, October,
 November and December.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 In addition to the textual enum name, each month-of-year has an `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', ` value.
 The `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', ` value follows normal usage and the ISO-8601 standard,
 from 1 (January) to 12 (December). It is recommended that applications use the enum
 rather than the `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', ` value to ensure code clarity.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Do not use <code>ordinal()</code> to obtain the numeric representation of <code>Month</code>.
 Use <code>getValue()</code> instead.`]
		]],
		[/* block */ 'b', `
 This enum represents a common concept that is found in many calendar systems.
 As such, this enum may be used by any calendar system that has the month-of-year
 concept defined exactly equivalent to the ISO-8601 calendar system.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'get(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this month-of-year as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this month for the value of the specified field.
 The returned value will always be within the valid range of values for the field.
 If it is not possible to return the value, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is `],
					[/* external link */ 'a', `temporal/ChronoField.html#MONTH_OF_YEAR`, `MONTH_OF_YEAR`],
					[/* text */ 't', ` then the
 value of the month-of-year, from 1 to 12, will be returned.
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
		[/* method */ 'length(boolean)', [
			[/* method description */
				[/* text */ 't', `Gets the length of this month in days.
 `],
				[/* block */ 'b', `
 This takes a flag to determine whether to return the length for a leap year or not.
 `],
				[/* block */ 'b', `
 February has 28 days in a standard year and 29 days in a leap year.
 April, June, September and November have 30 days.
 All other months have 31 days.`]
			],
			[/* parameters */
				[/* parameter */ 'leapYear', [/* parameter description */
					[/* text */ 't', `true if the length is required for a leap year`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the length of this month in days, from 28 to 31`]
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
				[/* text */ 't', `Gets the value of the specified field from this month-of-year as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this month for the value of the specified field.
 If it is not possible to return the value, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is `],
					[/* external link */ 'a', `temporal/ChronoField.html#MONTH_OF_YEAR`, `MONTH_OF_YEAR`],
					[/* text */ 't', ` then the
 value of the month-of-year, from 1 to 12, will be returned.
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
				[/* text */ 't', `Gets the month-of-year `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.
 `],
				[/* block */ 'b', `
 The values are numbered following the ISO-8601 standard,
 from 1 (January) to 12 (December).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the month-of-year, from 1 (January) to 12 (December)`]
			]
		]],
		[/* method */ 'of(int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Month`],
				[/* text */ 't', ` from an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` value.
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Month`],
					[/* text */ 't', ` is an enum representing the 12 months of the year.
 This factory allows the enum to be obtained from the `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value.
 The `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value follows the ISO-8601 standard, from 1 (January) to 12 (December).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month-of-year to represent, from 1 (January) to 12 (December)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the month-of-year is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the month-of-year, not null`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Month`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains a month based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `Month`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion extracts the `],
					[/* external link */ 'a', `temporal/ChronoField.html#MONTH_OF_YEAR`, `MONTH_OF_YEAR`],
					[/* text */ 't', ` field.
 The extraction is only permitted if the temporal object has an ISO
 chronology, or can be converted to a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method matches the signature of the functional interface `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
					[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
					[/* inline code block */ 'i', `Month::from`],
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
					[/* inline code block */ 'i', `Month`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the month-of-year, not null`]
			]
		]],
		[/* method */ 'query(java.time.temporal.TemporalQuery)', [
			[/* method description */
				[/* text */ 't', `Queries this month-of-year using the specified query.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries this month-of-year using the specified query strategy object.
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
					[/* external link */ 'a', `temporal/TemporalQuery.html#queryFrom(java.time.temporal.TemporalAccessor)`, `TemporalQuery.queryFrom(TemporalAccessor)`],
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
 This month is used to enhance the accuracy of the returned range.
 If it is not possible to return the range, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is `],
					[/* external link */ 'a', `temporal/ChronoField.html#MONTH_OF_YEAR`, `MONTH_OF_YEAR`],
					[/* text */ 't', ` then the
 range of the month-of-year, from 1 to 12, will be returned.
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
 This checks if this month-of-year can be queried for the specified field.
 If false, then calling the `],
					[/* reference */ 'r', `range`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `get`],
					[/* text */ 't', ` methods will throw an exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is `],
					[/* external link */ 'a', `temporal/ChronoField.html#MONTH_OF_YEAR`, `MONTH_OF_YEAR`],
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
				[/* text */ 't', `true if the field is supported on this month-of-year, false if not`]
			]
		]],
		[/* method */ 'minLength()', [
			[/* method description */
				[/* text */ 't', `Gets the minimum length of this month in days.
 `],
				[/* block */ 'b', `
 February has a minimum length of 28 days.
 April, June, September and November have 30 days.
 All other months have 31 days.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minimum length of this month in days, from 28 to 31`]
			]
		]],
		[/* method */ 'maxLength()', [
			[/* method description */
				[/* text */ 't', `Gets the maximum length of this month in days.
 `],
				[/* block */ 'b', `
 February has a maximum length of 29 days.
 April, June, September and November have 30 days.
 All other months have 31 days.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum length of this month in days, from 29 to 31`]
			]
		]],
		[/* method */ 'getDisplayName(java.time.format.TextStyle,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the textual representation, such as 'Jan' or 'December'.
 `],
				[/* block */ 'b', `
 This returns the textual name used to identify the month-of-year,
 suitable for presentation to the user.
 The parameters control the style of the returned text and the locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If no textual mapping is found then the `],
					[/* reference */ 'r', `numeric value`],
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
				[/* text */ 't', `the text value of the month-of-year, not null`]
			]
		]],
		[/* method */ 'adjustInto(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adjusts the specified temporal object to have this month-of-year.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with the month-of-year changed to be the same as this.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The adjustment is equivalent to using `],
					[/* external link */ 'a', `temporal/Temporal.html#with(java.time.temporal.TemporalField,long)`, `Temporal.with(TemporalField, long)`],
					[/* text */ 't', `
 passing `],
					[/* external link */ 'a', `temporal/ChronoField.html#MONTH_OF_YEAR`, `ChronoField.MONTH_OF_YEAR`],
					[/* text */ 't', ` as the field.
 If the specified temporal object does not use the ISO calendar system then
 a `],
					[/* inline code block */ 'i', `DateTimeException`],
					[/* text */ 't', ` is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In most cases, it is clearer to reverse the calling pattern by using
 `],
					[/* external link */ 'a', `temporal/Temporal.html#with(java.time.temporal.TemporalAdjuster)`, `Temporal.with(TemporalAdjuster)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisMonth.adjustInto(temporal);
   temporal = temporal.with(thisMonth);
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 For example, given a date in May, the following are output:
 `],
				[/* code block */ 'c', `   dateInMay.with(JANUARY);    // four months earlier
   dateInMay.with(APRIL);      // one months earlier
   dateInMay.with(MAY);        // same date
   dateInMay.with(JUNE);       // one month later
   dateInMay.with(DECEMBER);   // seven months later
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
				[/* text */ 't', `Returns the month-of-year that is the specified number of months after this one.
 `],
				[/* block */ 'b', `
 The calculation rolls around the end of the year from December to January.
 The specified period may be negative.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'months', [/* parameter description */
					[/* text */ 't', `the months to add, positive or negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the resulting month, not null`]
			]
		]],
		[/* method */ 'minus(long)', [
			[/* method description */
				[/* text */ 't', `Returns the month-of-year that is the specified number of months before this one.
 `],
				[/* block */ 'b', `
 The calculation rolls around the start of the year from January to December.
 The specified period may be negative.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'months', [/* parameter description */
					[/* text */ 't', `the months to subtract, positive or negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the resulting month, not null`]
			]
		]],
		[/* method */ 'firstDayOfYear(boolean)', [
			[/* method description */
				[/* text */ 't', `Gets the day-of-year corresponding to the first day of this month.
 `],
				[/* block */ 'b', `
 This returns the day-of-year that this month begins on, using the leap
 year flag to determine the length of February.`]
			],
			[/* parameters */
				[/* parameter */ 'leapYear', [/* parameter description */
					[/* text */ 't', `true if the length is required for a leap year`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the day of year corresponding to the first day of this month, from 1 to 336`]
			]
		]],
		[/* method */ 'firstMonthOfQuarter()', [
			[/* method description */
				[/* text */ 't', `Gets the month corresponding to the first month of this quarter.
 `],
				[/* block */ 'b', `
 The year can be divided into four quarters.
 This method returns the first month of the quarter for the base month.
 January, February and March return January.
 April, May and June return April.
 July, August and September return July.
 October, November and December return October.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the first month of the quarter corresponding to this month, not null`]
			]
		]]
	],
]);
