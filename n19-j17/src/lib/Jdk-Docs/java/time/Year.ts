import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.Year', [
	[/* class description */
		[/* text */ 't', `A year in the ISO-8601 calendar system, such as `],
		[/* inline code block */ 'i', `2007`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `Year`],
			[/* text */ 't', ` is an immutable date-time object that represents a year.
 Any field that can be derived from a year can be obtained.
 `]
		]],
		[/* block */ 'b', `Note that years in the ISO chronology only align with years in the
 Gregorian-Julian system for modern years. Parts of Russia did not switch to the
 modern Gregorian/ISO rules until 1920.
 As such, historical years must be treated with caution.`],
		[/* block */ 'b', [
			[/* text */ 't', `
 This class does not store or represent a month, day, time or time-zone.
 For example, the value "2007" can be stored in a `],
			[/* inline code block */ 'i', `Year`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 Years represented by this class follow the ISO-8601 standard and use
 the proleptic numbering system. Year 1 is preceded by year 0, then by year -1.
 `],
		[/* block */ 'b', `
 The ISO-8601 calendar system is the modern civil calendar system used today
 in most of the world. It is equivalent to the proleptic Gregorian calendar
 system, in which today's rules for leap years are applied for all time.
 For most applications written today, the ISO-8601 rules are entirely suitable.
 However, any application that makes use of historical dates, and requires them
 to be accurate will find the ISO-8601 approach unsuitable.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This is a `],
			[/* text */ 't', `value-based`],
			[/* text */ 't', `
 class; programmers should treat instances that are
 `],
			[/* reference */ 'r', `#equals(java.lang.Object)`, `equal`],
			[/* text */ 't', ` as interchangeable and should not
 use instances for synchronization, or unpredictable behavior may
 occur. For example, in a future release, synchronization may fail.
 The `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` method should be used for comparisons.`]
		]]
	],
	[/* fields */
		[/* field */ 'MAX_VALUE', [
			[/* field description */
				[/* text */ 't', `The maximum supported year, '+999,999,999'.`]
			],
		]],
		[/* field */ 'MIN_VALUE', [
			[/* field description */
				[/* text */ 't', `The minimum supported year, '-999,999,999'.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'query(java.time.temporal.TemporalQuery)', [
			[/* method description */
				[/* text */ 't', `Queries this year using the specified query.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries this year using the specified query strategy object.
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
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this year is equal to another year.
 `],
				[/* block */ 'b', `
 The comparison is based on the time-line position of the years.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other year`]
			]
		]],
		[/* method */ 'isAfter(java.time.Year)', [
			[/* method description */
				[/* text */ 't', `Checks if this year is after the specified year.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other year to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is after the specified year`]
			]
		]],
		[/* method */ 'isBefore(java.time.Year)', [
			[/* method description */
				[/* text */ 't', `Checks if this year is before the specified year.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other year to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this point is before the specified year`]
			]
		]],
		[/* method */ 'isLeap()', [
			[/* method description */
				[/* text */ 't', `Checks if the year is a leap year, according to the ISO proleptic
 calendar system rules.
 `],
				[/* block */ 'b', `
 This method applies the current rules for leap years across the whole time-line.
 In general, a year is a leap year if it is divisible by four without
 remainder. However, years divisible by 100, are not leap years, with
 the exception of years divisible by 400 which are.
 `],
				[/* block */ 'b', `
 For example, 1904 is a leap year it is divisible by 4.
 1900 was not a leap year as it is divisible by 100, however 2000 was a
 leap year as it is divisible by 400.
 `],
				[/* block */ 'b', `
 The calculation is proleptic - applying the same rules into the far future and far past.
 This is historically inaccurate, but is correct for the ISO-8601 standard.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the year is leap, false otherwise`]
			]
		]],
		[/* method */ 'isSupported(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified field is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if this year can be queried for the specified field.
 If false, then calling the `],
					[/* reference */ 'r', `#range(java.time.temporal.TemporalField)`, `range`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `#get(java.time.temporal.TemporalField)`, `get`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#with(java.time.temporal.TemporalField,long)`, `with(TemporalField, long)`],
					[/* text */ 't', `
 methods will throw an exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The supported fields are:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR_OF_ERA`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ERA`]
					]]
				]],
				[/* text */ 't', `
 All other `],
				[/* inline code block */ 'i', `ChronoField`],
				[/* text */ 't', ` instances will return false.
 `],
				[/* block */ 'b', ''],
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
				[/* text */ 't', `true if the field is supported on this year, false if not`]
			]
		]],
		[/* method */ 'isSupported(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified unit is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if the specified unit can be added to, or subtracted from, this year.
 If false, then calling the `],
					[/* reference */ 'r', `#plus(long,java.time.temporal.TemporalUnit)`, `plus(long, TemporalUnit)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `#minus(long,java.time.temporal.TemporalUnit)`, `minus`],
					[/* text */ 't', ` methods will throw an exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the unit is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`],
					[/* text */ 't', ` then the query is implemented here.
 The supported units are:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEARS`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `DECADES`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `CENTURIES`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLENNIA`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ERAS`]
					]]
				]],
				[/* text */ 't', `
 All other `],
				[/* inline code block */ 'i', `ChronoUnit`],
				[/* text */ 't', ` instances will return false.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the unit is not a `],
					[/* inline code block */ 'i', `ChronoUnit`],
					[/* text */ 't', `, then the result of this method
 is obtained by invoking `],
					[/* inline code block */ 'i', `TemporalUnit.isSupportedBy(Temporal)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument.
 Whether the unit is supported is determined by the unit.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the unit can be added/subtracted, false if not`]
			]
		]],
		[/* method */ 'isValidMonthDay(java.time.MonthDay)', [
			[/* method description */
				[/* text */ 't', `Checks if the month-day is valid for this year.
 `],
				[/* block */ 'b', `
 This method checks whether this year and the input month and day form
 a valid date.`]
			],
			[/* parameters */
				[/* parameter */ 'monthDay', [/* parameter description */
					[/* text */ 't', `the month-day to validate, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the month and day are valid for this year`]
			]
		]],
		[/* method */ 'compareTo(java.time.Year)', [
			[/* method description */
				[/* text */ 't', `Compares this year to another year.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based on the value of the year.
 It is "consistent with equals", as defined by `],
					[/* reference */ 'r', `java.lang.Comparable`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other year to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the comparator value, negative if less, positive if greater`]
			]
		]],
		[/* method */ 'get(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this year as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this year for the value of the specified field.
 The returned value will always be within the valid range of values for the field.
 If it is not possible to return the value, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The `],
					[/* reference */ 'r', `#isSupported(java.time.temporal.TemporalField)`, `supported fields`],
					[/* text */ 't', ` will return valid
 values based on this year.
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
				[/* text */ 't', `the value for the field`]
			]
		]],
		[/* method */ 'getValue()', [
			[/* method description */
				[/* text */ 't', `Gets the year value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The year returned by this method is proleptic as per `],
					[/* inline code block */ 'i', `get(YEAR)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the year, `],
				[/* inline code block */ 'i', `MIN_VALUE`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `MAX_VALUE`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this year.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'length()', [
			[/* method description */
				[/* text */ 't', `Gets the length of this year in days.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the length of this year in days, 365 or 366`]
			]
		]],
		[/* method */ 'format(java.time.format.DateTimeFormatter)', [
			[/* method description */
				[/* text */ 't', `Formats this year using the specified formatter.
 `],
				[/* block */ 'b', `
 This year will be passed to the formatter to produce a string.`]
			],
			[/* parameters */
				[/* parameter */ 'formatter', [/* parameter description */
					[/* text */ 't', `the formatter to use, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if an error occurs during printing`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the formatted year string, not null`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this year as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this year, not null`]
			]
		]],
		[/* method */ 'atDay(int)', [
			[/* method description */
				[/* text */ 't', `Combines this year with a day-of-year to create a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` formed from this year and the specified day-of-year.
 `]
				]],
				[/* block */ 'b', `
 The day-of-year value 366 is only valid in a leap year.`]
			],
			[/* parameters */
				[/* parameter */ 'dayOfYear', [/* parameter description */
					[/* text */ 't', `the day-of-year to use, from 1 to 365-366`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the day of year is zero or less, 366 or greater or equal
  to 366 and this is not a leap year`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date formed from this year and the specified date of year, not null`]
			]
		]],
		[/* method */ 'atMonthDay(java.time.MonthDay)', [
			[/* method description */
				[/* text */ 't', `Combines this year with a month-day to create a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` formed from this year and the specified month-day.
 `]
				]],
				[/* block */ 'b', `
 A month-day of February 29th will be adjusted to February 28th in the resulting
 date if the year is not a leap year.`]
			],
			[/* parameters */
				[/* parameter */ 'monthDay', [/* parameter description */
					[/* text */ 't', `the month-day to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the local date formed from this year and the specified month-day, not null`]
			]
		]],
		[/* method */ 'adjustInto(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adjusts the specified temporal object to have this year.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with the year changed to be the same as this.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The adjustment is equivalent to using `],
					[/* reference */ 'r', `.Temporal#with(java.time.temporal.TemporalField,long)`],
					[/* text */ 't', `
 passing `],
					[/* reference */ 'r', `.ChronoField#YEAR`],
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
					[/* reference */ 'r', `.Temporal#with(java.time.temporal.TemporalAdjuster)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisYear.adjustInto(temporal);
   temporal = temporal.with(thisYear);
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
		[/* method */ 'range(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the range of valid values for the specified field.
 `],
				[/* block */ 'b', `
 The range object expresses the minimum and maximum valid values for a field.
 This year is used to enhance the accuracy of the returned range.
 If it is not possible to return the range, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The `],
					[/* reference */ 'r', `#isSupported(java.time.temporal.TemporalField)`, `supported fields`],
					[/* text */ 't', ` will return
 appropriate range instances.
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
		[/* method */ 'minus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this year with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `Year`],
					[/* text */ 't', `, based on this one, with the specified amount subtracted.
 The amount is typically `],
					[/* reference */ 'r', `java.time.Period`],
					[/* text */ 't', ` but may be any other type implementing
 the `],
					[/* reference */ 'r', `java.time.temporal.TemporalAmount`],
					[/* text */ 't', ` interface.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The calculation is delegated to the amount object by calling
 `],
					[/* reference */ 'r', `.TemporalAmount#subtractFrom(java.time.temporal.Temporal)`],
					[/* text */ 't', `. The amount implementation is free
 to implement the subtraction in any way it wishes, however it typically
 calls back to `],
					[/* reference */ 'r', `#minus(long,java.time.temporal.TemporalUnit)`, `minus(long, TemporalUnit)`],
					[/* text */ 't', `. Consult the documentation
 of the amount implementation to determine if it can be successfully subtracted.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'amountToSubtract', [/* parameter description */
					[/* text */ 't', `the amount to subtract, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the subtraction cannot be made`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Year`],
				[/* text */ 't', ` based on this year with the subtraction made, not null`]
			]
		]],
		[/* method */ 'minus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this year with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `Year`],
					[/* text */ 't', `, based on this one, with the amount
 in terms of the unit subtracted. If it is not possible to subtract the amount,
 because the unit is not supported or for some other reason, an exception is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is equivalent to `],
					[/* reference */ 'r', `#plus(long,java.time.temporal.TemporalUnit)`, `plus(long, TemporalUnit)`],
					[/* text */ 't', ` with the amount negated.
 See that method for a full description of how addition, and thus subtraction, works.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'amountToSubtract', [/* parameter description */
					[/* text */ 't', `the amount of the unit to subtract from the result, may be negative`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit of the amount to subtract, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the subtraction cannot be made`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Year`],
				[/* text */ 't', ` based on this year with the specified amount subtracted, not null`]
			]
		]],
		[/* method */ 'minusYears(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `Year`],
				[/* text */ 't', ` with the specified number of years subtracted.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'yearsToSubtract', [/* parameter description */
					[/* text */ 't', `the years to subtract, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Year`],
				[/* text */ 't', ` based on this year with the year subtracted, not null`]
			]
		]],
		[/* method */ 'plus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this year with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `Year`],
					[/* text */ 't', `, based on this one, with the specified amount added.
 The amount is typically `],
					[/* reference */ 'r', `java.time.Period`],
					[/* text */ 't', ` but may be any other type implementing
 the `],
					[/* reference */ 'r', `java.time.temporal.TemporalAmount`],
					[/* text */ 't', ` interface.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The calculation is delegated to the amount object by calling
 `],
					[/* reference */ 'r', `.TemporalAmount#addTo(java.time.temporal.Temporal)`],
					[/* text */ 't', `. The amount implementation is free
 to implement the addition in any way it wishes, however it typically
 calls back to `],
					[/* reference */ 'r', `#plus(long,java.time.temporal.TemporalUnit)`, `plus(long, TemporalUnit)`],
					[/* text */ 't', `. Consult the documentation
 of the amount implementation to determine if it can be successfully added.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'amountToAdd', [/* parameter description */
					[/* text */ 't', `the amount to add, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the addition cannot be made`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Year`],
				[/* text */ 't', ` based on this year with the addition made, not null`]
			]
		]],
		[/* method */ 'plus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this year with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `Year`],
					[/* text */ 't', `, based on this one, with the amount
 in terms of the unit added. If it is not possible to add the amount, because the
 unit is not supported or for some other reason, an exception is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`],
					[/* text */ 't', ` then the addition is implemented here.
 The supported fields behave as follows:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEARS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `Year`],
						[/* text */ 't', ` with the specified number of years added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusYears(long)`, `plusYears(long)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `DECADES`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `Year`],
						[/* text */ 't', ` with the specified number of decades added.
  This is equivalent to calling `],
						[/* reference */ 'r', `#plusYears(long)`, `plusYears(long)`],
						[/* text */ 't', ` with the amount
  multiplied by 10.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `CENTURIES`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `Year`],
						[/* text */ 't', ` with the specified number of centuries added.
  This is equivalent to calling `],
						[/* reference */ 'r', `#plusYears(long)`, `plusYears(long)`],
						[/* text */ 't', ` with the amount
  multiplied by 100.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLENNIA`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `Year`],
						[/* text */ 't', ` with the specified number of millennia added.
  This is equivalent to calling `],
						[/* reference */ 'r', `#plusYears(long)`, `plusYears(long)`],
						[/* text */ 't', ` with the amount
  multiplied by 1,000.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ERAS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `Year`],
						[/* text */ 't', ` with the specified number of eras added.
  Only two eras are supported so the amount must be one, zero or minus one.
  If the amount is non-zero then the year is changed such that the year-of-era
  is unchanged.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 All other `],
					[/* inline code block */ 'i', `ChronoUnit`],
					[/* text */ 't', ` instances will throw an `],
					[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is not a `],
					[/* inline code block */ 'i', `ChronoUnit`],
					[/* text */ 't', `, then the result of this method
 is obtained by invoking `],
					[/* inline code block */ 'i', `TemporalUnit.addTo(Temporal, long)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument. In this case, the unit determines
 whether and how to perform the addition.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'amountToAdd', [/* parameter description */
					[/* text */ 't', `the amount of the unit to add to the result, may be negative`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit of the amount to add, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the addition cannot be made`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Year`],
				[/* text */ 't', ` based on this year with the specified amount added, not null`]
			]
		]],
		[/* method */ 'plusYears(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `Year`],
				[/* text */ 't', ` with the specified number of years added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'yearsToAdd', [/* parameter description */
					[/* text */ 't', `the years to add, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Year`],
				[/* text */ 't', ` based on this year with the years added, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalAdjuster)', [
			[/* method description */
				[/* text */ 't', `Returns an adjusted copy of this year.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `Year`],
					[/* text */ 't', `, based on this one, with the year adjusted.
 The adjustment takes place using the specified adjuster strategy object.
 Read the documentation of the adjuster to understand what adjustment will be made.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The result of this method is obtained by invoking the
 `],
					[/* reference */ 'r', `.TemporalAdjuster#adjustInto(java.time.temporal.Temporal)`],
					[/* text */ 't', ` method on the
 specified adjuster passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'adjuster', [/* parameter description */
					[/* text */ 't', `the adjuster to use, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the adjustment cannot be made`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Year`],
				[/* text */ 't', ` based on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` with the adjustment made, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalField,long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this year with the specified field set to a new value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `Year`],
					[/* text */ 't', `, based on this one, with the value
 for the specified field changed.
 If it is not possible to set the value, because the field is not supported or for
 some other reason, an exception is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
					[/* text */ 't', ` then the adjustment is implemented here.
 The supported fields behave as follows:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR_OF_ERA`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `Year`],
						[/* text */ 't', ` with the specified year-of-era
  The era will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `Year`],
						[/* text */ 't', ` with the specified year.
  This completely replaces the date and is equivalent to `],
						[/* reference */ 'r', `#of(int)`, `of(int)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ERA`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `Year`],
						[/* text */ 't', ` with the specified era.
  The year-of-era will be unchanged.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 In all cases, if the new value is outside the valid range of values for the field
 then a `],
					[/* inline code block */ 'i', `DateTimeException`],
					[/* text */ 't', ` will be thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
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
					[/* inline code block */ 'i', `TemporalField.adjustInto(Temporal, long)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the argument. In this case, the field determines
 whether and how to adjust the instant.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to set in the result, not null`]
				]],
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the new value of the field in the result`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the field cannot be set`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the field is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Year`],
				[/* text */ 't', ` based on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` with the specified field set, not null`]
			]
		]],
		[/* method */ 'atMonth(int)', [
			[/* method description */
				[/* text */ 't', `Combines this year with a month to create a `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', ` formed from this year and the specified month.
 All possible combinations of year and month are valid.
 `]
				]],
				[/* block */ 'b', `
 This method can be used as part of a chain to produce a date:
 `],
				[/* code block */ 'c', `  LocalDate date = year.atMonth(month).atDay(day);
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month-of-year to use, from 1 (January) to 12 (December)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the month is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the year-month formed from this year and the specified month, not null`]
			]
		]],
		[/* method */ 'atMonth(java.time.Month)', [
			[/* method description */
				[/* text */ 't', `Combines this year with a month to create a `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', ` formed from this year and the specified month.
 All possible combinations of year and month are valid.
 `]
				]],
				[/* block */ 'b', `
 This method can be used as part of a chain to produce a date:
 `],
				[/* code block */ 'c', `  LocalDate date = year.atMonth(month).atDay(day);
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month-of-year to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the year-month formed from this year and the specified month, not null`]
			]
		]],
		[/* method */ 'getLong(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this year as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this year for the value of the specified field.
 If it is not possible to return the value, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The `],
					[/* reference */ 'r', `#isSupported(java.time.temporal.TemporalField)`, `supported fields`],
					[/* text */ 't', ` will return valid
 values based on this year.
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
		[/* method */ 'until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Calculates the amount of time until another year in terms of the specified unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This calculates the amount of time between two `],
					[/* inline code block */ 'i', `Year`],
					[/* text */ 't', `
 objects in terms of a single `],
					[/* inline code block */ 'i', `TemporalUnit`],
					[/* text */ 't', `.
 The start and end points are `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` and the specified year.
 The result will be negative if the end is before the start.
 The `],
					[/* inline code block */ 'i', `Temporal`],
					[/* text */ 't', ` passed to this method is converted to a
 `],
					[/* inline code block */ 'i', `Year`],
					[/* text */ 't', ` using `],
					[/* reference */ 'r', `#from(java.time.temporal.TemporalAccessor)`, `from(TemporalAccessor)`],
					[/* text */ 't', `.
 For example, the amount in decades between two year can be calculated
 using `],
					[/* inline code block */ 'i', `startYear.until(endYear, DECADES)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The calculation returns a whole number, representing the number of
 complete units between the two years.
 For example, the amount in decades between 2012 and 2031
 will only be one decade as it is one year short of two decades.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method.
 The second is to use `],
					[/* reference */ 'r', `.TemporalUnit#between(java.time.temporal.Temporal,java.time.temporal.Temporal)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent
   amount = start.until(end, YEARS);
   amount = YEARS.between(start, end);
 `],
				[/* text */ 't', `
 The choice should be made based on which makes the code more readable.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The calculation is implemented in this method for `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`],
					[/* text */ 't', `.
 The units `],
					[/* inline code block */ 'i', `YEARS`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `DECADES`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `CENTURIES`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `MILLENNIA`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `ERAS`],
					[/* text */ 't', ` are supported.
 Other `],
					[/* inline code block */ 'i', `ChronoUnit`],
					[/* text */ 't', ` values will throw an exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the unit is not a `],
					[/* inline code block */ 'i', `ChronoUnit`],
					[/* text */ 't', `, then the result of this method
 is obtained by invoking `],
					[/* inline code block */ 'i', `TemporalUnit.between(Temporal, Temporal)`],
					[/* text */ 't', `
 passing `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` as the first argument and the converted input temporal
 as the second argument.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `the end date, exclusive, which is converted to a `],
					[/* inline code block */ 'i', `Year`],
					[/* text */ 't', `, not null`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit to measure the amount in, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the amount cannot be calculated, or the end
  temporal cannot be converted to a `],
					[/* inline code block */ 'i', `Year`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the amount of time between this year and the end year`]
			]
		]],
		[/* method */ 'isLeap(long)', [
			[/* method description */
				[/* text */ 't', `Checks if the year is a leap year, according to the ISO proleptic
 calendar system rules.
 `],
				[/* block */ 'b', `
 This method applies the current rules for leap years across the whole time-line.
 In general, a year is a leap year if it is divisible by four without
 remainder. However, years divisible by 100, are not leap years, with
 the exception of years divisible by 400 which are.
 `],
				[/* block */ 'b', `
 For example, 1904 is a leap year it is divisible by 4.
 1900 was not a leap year as it is divisible by 100, however 2000 was a
 leap year as it is divisible by 400.
 `],
				[/* block */ 'b', `
 The calculation is proleptic - applying the same rules into the far future and far past.
 This is historically inaccurate, but is correct for the ISO-8601 standard.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year to check`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the year is leap, false otherwise`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Year`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains a year based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `Year`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion extracts the `],
					[/* reference */ 'r', `.ChronoField#YEAR`],
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
					[/* inline code block */ 'i', `Year::from`],
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
					[/* inline code block */ 'i', `Year`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the year, not null`]
			]
		]],
		[/* method */ 'now()', [
			[/* method description */
				[/* text */ 't', `Obtains the current year from the system clock in the default time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* reference */ 'r', `.Clock#systemDefaultZone()`],
					[/* text */ 't', ` in the default
 time-zone to obtain the current year.
 `]
				]],
				[/* block */ 'b', `
 Using this method will prevent the ability to use an alternate clock for testing
 because the clock is hard-coded.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current year using the system clock and default time-zone, not null`]
			]
		]],
		[/* method */ 'now(java.time.Clock)', [
			[/* method description */
				[/* text */ 't', `Obtains the current year from the specified clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the specified clock to obtain the current year.
 Using this method allows the use of an alternate clock for testing.
 The alternate clock may be introduced using `],
					[/* reference */ 'r', `java.time.Clock`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'clock', [/* parameter description */
					[/* text */ 't', `the clock to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current year, not null`]
			]
		]],
		[/* method */ 'now(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains the current year from the system clock in the specified time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* reference */ 'r', `.Clock#system(java.time.ZoneId)`],
					[/* text */ 't', ` to obtain the current year.
 Specifying the time-zone avoids dependence on the default time-zone.
 `]
				]],
				[/* block */ 'b', `
 Using this method will prevent the ability to use an alternate clock for testing
 because the clock is hard-coded.`]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the zone ID to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current year using the system clock, not null`]
			]
		]],
		[/* method */ 'of(int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Year`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This method accepts a year value from the proleptic ISO calendar system.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The year 2AD/CE is represented by 2.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The year 1AD/CE is represented by 1.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The year 1BC/BCE is represented by 0.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The year 2BC/BCE is represented by -1.`],
					[/* new line */ 'n']
				]]
			],
			[/* parameters */
				[/* parameter */ 'isoYear', [/* parameter description */
					[/* text */ 't', `the ISO proleptic year to represent, from `],
					[/* inline code block */ 'i', `MIN_VALUE`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `MAX_VALUE`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the field is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the year, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Year`],
				[/* text */ 't', ` from a text string such as `],
				[/* inline code block */ 'i', `2007`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The string must represent a valid year.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse such as "2007", not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.format.DateTimeParseException', [/* throw description */
					[/* text */ 't', `if the text cannot be parsed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed year, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence,java.time.format.DateTimeFormatter)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Year`],
				[/* text */ 't', ` from a text string using a specific formatter.
 `],
				[/* block */ 'b', `
 The text is parsed using the formatter, returning a year.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse, not null`]
				]],
				[/* parameter */ 'formatter', [/* parameter description */
					[/* text */ 't', `the formatter to use, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.format.DateTimeParseException', [/* throw description */
					[/* text */ 't', `if the text cannot be parsed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed year, not null`]
			]
		]]
	],
]);
