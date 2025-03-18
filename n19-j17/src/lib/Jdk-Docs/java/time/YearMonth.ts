import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.YearMonth', [
	[/* class description */
		[/* text */ 't', `A year-month in the ISO-8601 calendar system, such as `],
		[/* inline code block */ 'i', `2007-12`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* inline code block */ 'i', `YearMonth`],
			[/* text */ 't', ` is an immutable date-time object that represents the combination
 of a year and month. Any field that can be derived from a year and month, such as
 quarter-of-year, can be obtained.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 This class does not store or represent a day, time or time-zone.
 For example, the value "October 2007" can be stored in a `],
			[/* inline code block */ 'i', `YearMonth`],
			[/* text */ 't', `.
 `]
		]],
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
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'query(java.time.temporal.TemporalQuery)', [
			[/* method description */
				[/* text */ 't', `Queries this year-month using the specified query.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries this year-month using the specified query strategy object.
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
					[/* reference */ 'r', `java.time.temporal.TemporalQuery#queryFrom(java.time.temporal.TemporalAccessor)`, `TemporalQuery.queryFrom(TemporalAccessor)`],
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
				[/* text */ 't', `Checks if this year-month is equal to another year-month.
 `],
				[/* block */ 'b', `
 The comparison is based on the time-line position of the year-months.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other year-month`]
			]
		]],
		[/* method */ 'isAfter(java.time.YearMonth)', [
			[/* method description */
				[/* text */ 't', `Checks if this year-month is after the specified year-month.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other year-month to compare to, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if this is after the specified year-month`]
			]
		]],
		[/* method */ 'isBefore(java.time.YearMonth)', [
			[/* method description */
				[/* text */ 't', `Checks if this year-month is before the specified year-month.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other year-month to compare to, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if this point is before the specified year-month`]
			]
		]],
		[/* method */ 'isLeapYear()', [
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
			/* parameters */,
			/* throws */,
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
 This checks if this year-month can be queried for the specified field.
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
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The supported fields are:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MONTH_OF_YEAR`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `PROLEPTIC_MONTH`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR_OF_ERA`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ERA`],
						[/* text */ 't', `
 `]
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
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the field is supported on this year-month, false if not`]
			]
		]],
		[/* method */ 'isSupported(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified unit is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if the specified unit can be added to, or subtracted from, this year-month.
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
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`, `ChronoUnit`],
					[/* text */ 't', ` then the query is implemented here.
 The supported units are:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MONTHS`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEARS`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `DECADES`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `CENTURIES`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLENNIA`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ERAS`],
						[/* text */ 't', `
 `]
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
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the unit can be added/subtracted, false if not`]
			]
		]],
		[/* method */ 'isValidDay(int)', [
			[/* method description */
				[/* text */ 't', `Checks if the day-of-month is valid for this year-month.
 `],
				[/* block */ 'b', `
 This method checks whether this year and month and the input day form
 a valid date.`]
			],
			[/* parameters */
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the day-of-month to validate, from 1 to 31, invalid value returns false`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the day is valid for this year-month`]
			]
		]],
		[/* method */ 'compareTo(java.time.YearMonth)', [
			[/* method description */
				[/* text */ 't', `Compares this year-month to another year-month.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based first on the value of the year, then on the value of the month.
 It is "consistent with equals", as defined by `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other year-month to compare to, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the comparator value, negative if less, positive if greater`]
			]
		]],
		[/* method */ 'get(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this year-month as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this year-month for the value of the specified field.
 The returned value will always be within the valid range of values for the field.
 If it is not possible to return the value, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The `],
					[/* reference */ 'r', `#isSupported(java.time.temporal.TemporalField)`, `supported fields`],
					[/* text */ 't', ` will return valid
 values based on this year-month, except `],
					[/* inline code block */ 'i', `PROLEPTIC_MONTH`],
					[/* text */ 't', ` which is too
 large to fit in an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` and throw a `],
					[/* inline code block */ 'i', `DateTimeException`],
					[/* text */ 't', `.
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
		[/* method */ 'getMonthValue()', [
			[/* method description */
				[/* text */ 't', `Gets the month-of-year field from 1 to 12.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns the month as an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` from 1 to 12.
 Application code is frequently clearer if the enum `],
					[/* reference */ 'r', `enum class in java.time.Month`, `Month`],
					[/* text */ 't', `
 is used by calling `],
					[/* reference */ 'r', `#getMonth()`, `getMonth()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the month-of-year, from 1 to 12`]
			]
		]],
		[/* method */ 'getYear()', [
			[/* method description */
				[/* text */ 't', `Gets the year field.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns the primitive `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value for the year.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The year returned by this method is proleptic as per `],
					[/* inline code block */ 'i', `get(YEAR)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the year, from MIN_YEAR to MAX_YEAR`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this year-month.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'lengthOfMonth()', [
			[/* method description */
				[/* text */ 't', `Returns the length of the month, taking account of the year.
 `],
				[/* block */ 'b', `
 This returns the length of the month in days.
 For example, a date in January would return 31.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the length of the month in days, from 28 to 31`]
			]
		]],
		[/* method */ 'lengthOfYear()', [
			[/* method description */
				[/* text */ 't', `Returns the length of the year.
 `],
				[/* block */ 'b', `
 This returns the length of the year in days, either 365 or 366.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `366 if the year is leap, 365 otherwise`]
			]
		]],
		[/* method */ 'format(java.time.format.DateTimeFormatter)', [
			[/* method description */
				[/* text */ 't', `Formats this year-month using the specified formatter.
 `],
				[/* block */ 'b', `
 This year-month will be passed to the formatter to produce a string.`]
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
				[/* text */ 't', `the formatted year-month string, not null`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this year-month as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, such as `],
				[/* inline code block */ 'i', `2007-12`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The output will be in the format `],
					[/* inline code block */ 'i', `uuuu-MM`],
					[/* text */ 't', `:`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a string representation of this year-month, not null`]
			]
		]],
		[/* method */ 'atDay(int)', [
			[/* method description */
				[/* text */ 't', `Combines this year-month with a day-of-month to create a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` formed from this year-month and the specified day-of-month.
 `]
				]],
				[/* block */ 'b', `
 The day-of-month value must be valid for the year-month.
 `],
				[/* block */ 'b', `
 This method can be used as part of a chain to produce a date:
 `],
				[/* code block */ 'c', `  LocalDate date = year.atMonth(month).atDay(day);
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the day-of-month to use, from 1 to 31`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the day is invalid for the year-month`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the date formed from this year-month and the specified day, not null`]
			]
		]],
		[/* method */ 'atEndOfMonth()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` at the end of the month.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` based on this year-month.
 The day-of-month is set to the last valid day of the month, taking
 into account leap years.
 `]
				]],
				[/* block */ 'b', `
 This method can be used as part of a chain to produce a date:
 `],
				[/* code block */ 'c', `  LocalDate date = year.atMonth(month).atEndOfMonth();
 `],
				[/* block */ 'b', '']
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the last valid date of this year-month, not null`]
			]
		]],
		[/* method */ 'getMonth()', [
			[/* method description */
				[/* text */ 't', `Gets the month-of-year field using the `],
				[/* inline code block */ 'i', `Month`],
				[/* text */ 't', ` enum.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns the enum `],
					[/* reference */ 'r', `enum class in java.time.Month`, `Month`],
					[/* text */ 't', ` for the month.
 This avoids confusion as to what `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` values mean.
 If you need access to the primitive `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value then the enum
 provides the `],
					[/* reference */ 'r', `java.time.Month#getValue()`, `int value`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the month-of-year, not null`]
			]
		]],
		[/* method */ 'adjustInto(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adjusts the specified temporal object to have this year-month.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with the year and month changed to be the same as this.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The adjustment is equivalent to using `],
					[/* reference */ 'r', `java.time.temporal.Temporal#with(java.time.temporal.TemporalField,long)`, `Temporal.with(TemporalField, long)`],
					[/* text */ 't', `
 passing `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#PROLEPTIC_MONTH`, `ChronoField.PROLEPTIC_MONTH`],
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
					[/* reference */ 'r', `java.time.temporal.Temporal#with(java.time.temporal.TemporalAdjuster)`, `Temporal.with(TemporalAdjuster)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisYearMonth.adjustInto(temporal);
   temporal = temporal.with(thisYearMonth);
 `],
				[/* text */ 't', `
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
 This year-month is used to enhance the accuracy of the returned range.
 If it is not possible to return the range, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
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
				[/* text */ 't', `Returns a copy of this year-month with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', `, based on this one, with the specified amount subtracted.
 The amount is typically `],
					[/* reference */ 'r', `java.time.Period`, `Period`],
					[/* text */ 't', ` but may be any other type implementing
 the `],
					[/* reference */ 'r', `java.time.temporal.TemporalAmount`, `TemporalAmount`],
					[/* text */ 't', ` interface.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The calculation is delegated to the amount object by calling
 `],
					[/* reference */ 'r', `java.time.temporal.TemporalAmount#subtractFrom(java.time.temporal.Temporal)`, `TemporalAmount.subtractFrom(Temporal)`],
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
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` based on this year-month with the subtraction made, not null`]
			]
		]],
		[/* method */ 'minus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this year-month with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `YearMonth`],
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
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` based on this year-month with the specified amount subtracted, not null`]
			]
		]],
		[/* method */ 'minusMonths(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` with the specified number of months subtracted.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'monthsToSubtract', [/* parameter description */
					[/* text */ 't', `the months to subtract, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` based on this year-month with the months subtracted, not null`]
			]
		]],
		[/* method */ 'minusYears(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `YearMonth`],
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
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` based on this year-month with the years subtracted, not null`]
			]
		]],
		[/* method */ 'plus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this year-month with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', `, based on this one, with the specified amount added.
 The amount is typically `],
					[/* reference */ 'r', `java.time.Period`, `Period`],
					[/* text */ 't', ` but may be any other type implementing
 the `],
					[/* reference */ 'r', `java.time.temporal.TemporalAmount`, `TemporalAmount`],
					[/* text */ 't', ` interface.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The calculation is delegated to the amount object by calling
 `],
					[/* reference */ 'r', `java.time.temporal.TemporalAmount#addTo(java.time.temporal.Temporal)`, `TemporalAmount.addTo(Temporal)`],
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
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` based on this year-month with the addition made, not null`]
			]
		]],
		[/* method */ 'plus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this year-month with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', `, based on this one, with the amount
 in terms of the unit added. If it is not possible to add the amount, because the
 unit is not supported or for some other reason, an exception is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`, `ChronoUnit`],
					[/* text */ 't', ` then the addition is implemented here.
 The supported fields behave as follows:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MONTHS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `YearMonth`],
						[/* text */ 't', ` with the specified number of months added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusMonths(long)`, `plusMonths(long)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEARS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `YearMonth`],
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
						[/* inline code block */ 'i', `YearMonth`],
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
						[/* inline code block */ 'i', `YearMonth`],
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
						[/* inline code block */ 'i', `YearMonth`],
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
						[/* inline code block */ 'i', `YearMonth`],
						[/* text */ 't', ` with the specified number of eras added.
  Only two eras are supported so the amount must be one, zero or minus one.
  If the amount is non-zero then the year is changed such that the year-of-era
  is unchanged.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
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
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` based on this year-month with the specified amount added, not null`]
			]
		]],
		[/* method */ 'plusMonths(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` with the specified number of months added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'monthsToAdd', [/* parameter description */
					[/* text */ 't', `the months to add, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` based on this year-month with the months added, not null`]
			]
		]],
		[/* method */ 'plusYears(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `YearMonth`],
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
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` based on this year-month with the years added, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalAdjuster)', [
			[/* method description */
				[/* text */ 't', `Returns an adjusted copy of this year-month.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', `, based on this one, with the year-month adjusted.
 The adjustment takes place using the specified adjuster strategy object.
 Read the documentation of the adjuster to understand what adjustment will be made.
 `]
				]],
				[/* block */ 'b', `
 A simple adjuster might simply set the one of the fields, such as the year field.
 A more complex adjuster might set the year-month to the next month that
 Halley's comet will pass the Earth.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The result of this method is obtained by invoking the
 `],
					[/* reference */ 'r', `java.time.temporal.TemporalAdjuster#adjustInto(java.time.temporal.Temporal)`, `TemporalAdjuster.adjustInto(Temporal)`],
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
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` based on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` with the adjustment made, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalField,long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this year-month with the specified field set to a new value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', `, based on this one, with the value
 for the specified field changed.
 This can be used to change any supported field, such as the year or month.
 If it is not possible to set the value, because the field is not supported or for
 some other reason, an exception is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
					[/* text */ 't', ` then the adjustment is implemented here.
 The supported fields behave as follows:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MONTH_OF_YEAR`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `YearMonth`],
						[/* text */ 't', ` with the specified month-of-year.
  The year will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `PROLEPTIC_MONTH`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `YearMonth`],
						[/* text */ 't', ` with the specified proleptic-month.
  This completely replaces the year and month of this object.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR_OF_ERA`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `YearMonth`],
						[/* text */ 't', ` with the specified year-of-era
  The month and era will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `YearMonth`],
						[/* text */ 't', ` with the specified year.
  The month will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ERA`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `YearMonth`],
						[/* text */ 't', ` with the specified era.
  The month and year-of-era will be unchanged.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
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
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` based on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` with the specified field set, not null`]
			]
		]],
		[/* method */ 'withMonth(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` with the month-of-year altered.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month-of-year to set in the returned year-month, from 1 (January) to 12 (December)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the month-of-year value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` based on this year-month with the requested month, not null`]
			]
		]],
		[/* method */ 'withYear(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` with the year altered.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year to set in the returned year-month, from MIN_YEAR to MAX_YEAR`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the year value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` based on this year-month with the requested year, not null`]
			]
		]],
		[/* method */ 'getLong(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this year-month as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this year-month for the value of the specified field.
 If it is not possible to return the value, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The `],
					[/* reference */ 'r', `#isSupported(java.time.temporal.TemporalField)`, `supported fields`],
					[/* text */ 't', ` will return valid
 values based on this year-month.
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
				[/* text */ 't', `Calculates the amount of time until another year-month in terms of the specified unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This calculates the amount of time between two `],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', `
 objects in terms of a single `],
					[/* inline code block */ 'i', `TemporalUnit`],
					[/* text */ 't', `.
 The start and end points are `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` and the specified year-month.
 The result will be negative if the end is before the start.
 The `],
					[/* inline code block */ 'i', `Temporal`],
					[/* text */ 't', ` passed to this method is converted to a
 `],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', ` using `],
					[/* reference */ 'r', `#from(java.time.temporal.TemporalAccessor)`, `from(TemporalAccessor)`],
					[/* text */ 't', `.
 For example, the amount in years between two year-months can be calculated
 using `],
					[/* inline code block */ 'i', `startYearMonth.until(endYearMonth, YEARS)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The calculation returns a whole number, representing the number of
 complete units between the two year-months.
 For example, the amount in decades between 2012-06 and 2032-05
 will only be one decade as it is one month short of two decades.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method.
 The second is to use `],
					[/* reference */ 'r', `java.time.temporal.TemporalUnit#between(java.time.temporal.Temporal,java.time.temporal.Temporal)`, `TemporalUnit.between(Temporal, Temporal)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent
   amount = start.until(end, MONTHS);
   amount = MONTHS.between(start, end);
 `],
				[/* text */ 't', `
 The choice should be made based on which makes the code more readable.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The calculation is implemented in this method for `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`, `ChronoUnit`],
					[/* text */ 't', `.
 The units `],
					[/* inline code block */ 'i', `MONTHS`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `YEARS`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `DECADES`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `CENTURIES`],
					[/* text */ 't', `, `],
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
					[/* inline code block */ 'i', `YearMonth`],
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
					[/* inline code block */ 'i', `YearMonth`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the amount of time between this year-month and the end year-month`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains a year-month based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion extracts the `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#YEAR`, `YEAR`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#MONTH_OF_YEAR`, `MONTH_OF_YEAR`],
					[/* text */ 't', ` fields.
 The extraction is only permitted if the temporal object has an ISO
 chronology, or can be converted to a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method matches the signature of the functional interface `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`, `TemporalQuery`],
					[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
					[/* inline code block */ 'i', `YearMonth::from`],
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
					[/* inline code block */ 'i', `YearMonth`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the year-month, not null`]
			]
		]],
		[/* method */ 'now()', [
			[/* method description */
				[/* text */ 't', `Obtains the current year-month from the system clock in the default time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* reference */ 'r', `java.time.Clock#systemDefaultZone()`, `system clock`],
					[/* text */ 't', ` in the default
 time-zone to obtain the current year-month.
 `]
				]],
				[/* block */ 'b', `
 Using this method will prevent the ability to use an alternate clock for testing
 because the clock is hard-coded.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the current year-month using the system clock and default time-zone, not null`]
			]
		]],
		[/* method */ 'now(java.time.Clock)', [
			[/* method description */
				[/* text */ 't', `Obtains the current year-month from the specified clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the specified clock to obtain the current year-month.
 Using this method allows the use of an alternate clock for testing.
 The alternate clock may be introduced using `],
					[/* reference */ 'r', `java.time.Clock`, `dependency injection`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'clock', [/* parameter description */
					[/* text */ 't', `the clock to use, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the current year-month, not null`]
			]
		]],
		[/* method */ 'now(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains the current year-month from the system clock in the specified time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* reference */ 'r', `java.time.Clock#system(java.time.ZoneId)`, `system clock`],
					[/* text */ 't', ` to obtain the current year-month.
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
			/* throws */,
			[/* return description */
				[/* text */ 't', `the current year-month using the system clock, not null`]
			]
		]],
		[/* method */ 'of(int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` from a year and month.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year to represent, from MIN_YEAR to MAX_YEAR`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month-of-year to represent, from 1 (January) to 12 (December)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if either field value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the year-month, not null`]
			]
		]],
		[/* method */ 'of(int,java.time.Month)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` from a year and month.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year to represent, from MIN_YEAR to MAX_YEAR`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month-of-year to represent, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the year value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the year-month, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` from a text string such as `],
				[/* inline code block */ 'i', `2007-12`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The string must represent a valid year-month.
 The format must be `],
					[/* inline code block */ 'i', `uuuu-MM`],
					[/* text */ 't', `.
 Years outside the range 0000 to 9999 must be prefixed by the plus or minus symbol.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse such as "2007-12", not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.format.DateTimeParseException', [/* throw description */
					[/* text */ 't', `if the text cannot be parsed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed year-month, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence,java.time.format.DateTimeFormatter)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `YearMonth`],
				[/* text */ 't', ` from a text string using a specific formatter.
 `],
				[/* block */ 'b', `
 The text is parsed using the formatter, returning a year-month.`]
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
				[/* text */ 't', `the parsed year-month, not null`]
			]
		]]
	],
	/* enum values */ UDF
]);
