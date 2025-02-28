import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.LocalDate', [
	[/* class description */
		[/* text */ 't', `A date without a time-zone in the ISO-8601 calendar system,
 such as `],
		[/* inline code block */ 'i', `2007-12-03`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `LocalDate`],
			[/* text */ 't', ` is an immutable date-time object that represents a date,
 often viewed as year-month-day. Other date fields, such as day-of-year,
 day-of-week and week-of-year, can also be accessed.
 For example, the value "2nd October 2007" can be stored in a `],
			[/* inline code block */ 'i', `LocalDate`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 This class does not store or represent a time or time-zone.
 Instead, it is a description of the date, as used for birthdays.
 It cannot represent an instant on the time-line without additional information
 such as an offset or time-zone.
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
			[/* external link */ 'a', `../../../java.base/java/lang/doc-files/ValueBased.html`, `value-based`],
			[/* text */ 't', `
 class; programmers should treat instances that are
 `],
			[/* reference */ 'r', `equal`],
			[/* text */ 't', ` as interchangeable and should not
 use instances for synchronization, or unpredictable behavior may
 occur. For example, in a future release, synchronization may fail.
 The `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` method should be used for comparisons.`]
		]]
	],
	[/* fields */
		[/* field */ 'MIN', [
			[/* field description */
				[/* text */ 't', `The minimum supported `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', `, '-999999999-01-01'.
 This could be used by an application as a "far past" date.`]
			],
		]],
		[/* field */ 'MAX', [
			[/* field description */
				[/* text */ 't', `The maximum supported `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', `, '+999999999-12-31'.
 This could be used by an application as a "far future" date.`]
			],
		]],
		[/* field */ 'EPOCH', [
			[/* field description */
				[/* text */ 't', `The epoch year `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', `, '1970-01-01'.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'get(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this date as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this date for the value of the specified field.
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
					[/* reference */ 'r', `supported fields`],
					[/* text */ 't', ` will return valid
 values based on this date, except `],
					[/* inline code block */ 'i', `EPOCH_DAY`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `PROLEPTIC_MONTH`],
					[/* text */ 't', `
 which are too large to fit in an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` and throw an `],
					[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
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
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this date is equal to another date.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Compares this `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` with another ensuring that the date is the same.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Only objects of type `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` are compared, other types return false.
 To compare the dates of two `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` instances, including dates
 in two different chronologies, use `],
					[/* external link */ 'a', `temporal/ChronoField.html#EPOCH_DAY`, `ChronoField.EPOCH_DAY`],
					[/* text */ 't', ` as a comparator.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other date`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this date as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, such as `],
				[/* inline code block */ 'i', `2007-12-03`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The output will be in the ISO-8601 format `],
					[/* inline code block */ 'i', `uuuu-MM-dd`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this date, not null`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this date.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'compareTo(java.time.chrono.ChronoLocalDate)', [
			[/* method description */
				[/* text */ 't', `Compares this date to another date.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is primarily based on the date, from earliest to latest.
 It is "consistent with equals", as defined by `],
					[/* reference */ 'r', `java.lang.Comparable`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If all the dates being compared are instances of `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `,
 then the comparison will be entirely based on the date.
 If some dates being compared are in different chronologies, then the
 chronology is also considered, see `],
					[/* external link */ 'a', `chrono/ChronoLocalDate.html#compareTo(java.time.chrono.ChronoLocalDate)`, `ChronoLocalDate.compareTo(java.time.chrono.ChronoLocalDate)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the comparator value, negative if less, positive if greater`]
			]
		]],
		[/* method */ 'getLong(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this date as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this date for the value of the specified field.
 If it is not possible to return the value, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The `],
					[/* reference */ 'r', `supported fields`],
					[/* text */ 't', ` will return valid
 values based on this date.
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
		[/* method */ 'format(java.time.format.DateTimeFormatter)', [
			[/* method description */
				[/* text */ 't', `Formats this date using the specified formatter.
 `],
				[/* block */ 'b', `
 This date will be passed to the formatter to produce a string.`]
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
				[/* text */ 't', `the formatted date string, not null`]
			]
		]],
		[/* method */ 'of(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` from a year, month and day.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` with the specified year, month and day-of-month.
 The day must be valid for the year and month, otherwise an exception will be thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year to represent, from MIN_YEAR to MAX_YEAR`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month-of-year to represent, from 1 (January) to 12 (December)`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the day-of-month to represent, from 1 to 31`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the value of any field is out of range,
  or if the day-of-month is invalid for the month-year`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date, not null`]
			]
		]],
		[/* method */ 'of(int,java.time.Month,int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` from a year, month and day.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` with the specified year, month and day-of-month.
 The day must be valid for the year and month, otherwise an exception will be thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year to represent, from MIN_YEAR to MAX_YEAR`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month-of-year to represent, not null`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the day-of-month to represent, from 1 to 31`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the value of any field is out of range,
  or if the day-of-month is invalid for the month-year`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date, not null`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains a local date based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion uses the `],
					[/* external link */ 'a', `temporal/TemporalQueries.html#localDate()`, `TemporalQueries.localDate()`],
					[/* text */ 't', ` query, which relies
 on extracting the `],
					[/* external link */ 'a', `temporal/ChronoField.html#EPOCH_DAY`, `EPOCH_DAY`],
					[/* text */ 't', ` field.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method matches the signature of the functional interface `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
					[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
					[/* inline code block */ 'i', `LocalDate::from`],
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
					[/* inline code block */ 'i', `LocalDate`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date, not null`]
			]
		]],
		[/* method */ 'query(java.time.temporal.TemporalQuery)', [
			[/* method description */
				[/* text */ 't', `Queries this date using the specified query.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries this date using the specified query strategy object.
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
 This date is used to enhance the accuracy of the returned range.
 If it is not possible to return the range, because the field is not supported
 or for some other reason, an exception is thrown.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The `],
					[/* reference */ 'r', `supported fields`],
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
		[/* method */ 'isSupported(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified unit is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if the specified unit can be added to, or subtracted from, this date.
 If false, then calling the `],
					[/* reference */ 'r', `plus(long, TemporalUnit)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `minus`],
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
						[/* inline code block */ 'i', `DAYS`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `WEEKS`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MONTHS`]
					]],
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
		[/* method */ 'isSupported(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified field is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if this date can be queried for the specified field.
 If false, then calling the `],
					[/* reference */ 'r', `range`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `get`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `with(TemporalField, long)`],
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
						[/* inline code block */ 'i', `DAY_OF_WEEK`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_MONTH`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_YEAR`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `DAY_OF_MONTH`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `DAY_OF_YEAR`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `EPOCH_DAY`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ALIGNED_WEEK_OF_MONTH`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ALIGNED_WEEK_OF_YEAR`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MONTH_OF_YEAR`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `PROLEPTIC_MONTH`]
					]],
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
				[/* text */ 't', `true if the field is supported on this date, false if not`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` from a text string such as `],
				[/* inline code block */ 'i', `2007-12-03`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The string must represent a valid date and is parsed using
 `],
					[/* external link */ 'a', `format/DateTimeFormatter.html#ISO_LOCAL_DATE`, `DateTimeFormatter.ISO_LOCAL_DATE`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse such as "2007-12-03", not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.format.DateTimeParseException', [/* throw description */
					[/* text */ 't', `if the text cannot be parsed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed local date, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence,java.time.format.DateTimeFormatter)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` from a text string using a specific formatter.
 `],
				[/* block */ 'b', `
 The text is parsed using the formatter, returning a date.`]
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
				[/* text */ 't', `the parsed local date, not null`]
			]
		]],
		[/* method */ 'isEqual(java.time.chrono.ChronoLocalDate)', [
			[/* method description */
				[/* text */ 't', `Checks if this date is equal to the specified date.
 `],
				[/* block */ 'b', `
 This checks to see if this date represents the same point on the
 local time-line as the other date.
 `],
				[/* code block */ 'c', `   LocalDate a = LocalDate.of(2012, 6, 30);
   LocalDate b = LocalDate.of(2012, 7, 1);
   a.isEqual(b) == false
   a.isEqual(a) == true
   b.isEqual(a) == false
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method only considers the position of the two dates on the local time-line.
 It does not take into account the chronology, or calendar system.
 This is different from the comparison in `],
					[/* reference */ 'r', `compareTo(ChronoLocalDate)`],
					[/* text */ 't', `
 but is the same approach as `],
					[/* external link */ 'a', `chrono/ChronoLocalDate.html#timeLineOrder()`, `ChronoLocalDate.timeLineOrder()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this date is equal to the specified date`]
			]
		]],
		[/* method */ 'toEpochSecond(java.time.LocalTime,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` to the number of seconds since the epoch
 of 1970-01-01T00:00:00Z.
 `],
				[/* block */ 'b', `
 This combines this local date with the specified time and
 offset to calculate the epoch-second value, which is the
 number of elapsed seconds from 1970-01-01T00:00:00Z.
 Instants on the time-line after the epoch are positive, earlier
 are negative.`]
			],
			[/* parameters */
				[/* parameter */ 'time', [/* parameter description */
					[/* text */ 't', `the local time, not null`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the zone offset, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of seconds since the epoch of 1970-01-01T00:00:00Z, may be negative`]
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
					[/* text */ 't', `.
 To obtain the year-of-era, use `],
					[/* inline code block */ 'i', `get(YEAR_OF_ERA)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the year, from MIN_YEAR to MAX_YEAR`]
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
					[/* reference */ 'r', `enum class in java.time.Month`],
					[/* text */ 't', `
 is used by calling `],
					[/* reference */ 'r', `getMonth()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the month-of-year, from 1 to 12`]
			]
		]],
		[/* method */ 'getDayOfMonth()', [
			[/* method description */
				[/* text */ 't', `Gets the day-of-month field.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns the primitive `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value for the day-of-month.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the day-of-month, from 1 to 31`]
			]
		]],
		[/* method */ 'ofInstant(java.time.Instant,java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` from an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` and zone ID.
 `],
				[/* block */ 'b', `
 This creates a local date based on the specified instant.
 First, the offset from UTC/Greenwich is obtained using the zone ID and instant,
 which is simple as there is only one valid offset for each instant.
 Then, the instant and offset are used to calculate the local date.`]
			],
			[/* parameters */
				[/* parameter */ 'instant', [/* parameter description */
					[/* text */ 't', `the instant to create the date from, not null`]
				]],
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone, which may be an offset, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date, not null`]
			]
		]],
		[/* method */ 'now(java.time.Clock)', [
			[/* method description */
				[/* text */ 't', `Obtains the current date from the specified clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the specified clock to obtain the current date - today.
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
				[/* text */ 't', `the current date, not null`]
			]
		]],
		[/* method */ 'now()', [
			[/* method description */
				[/* text */ 't', `Obtains the current date from the system clock in the default time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* external link */ 'a', `Clock.html#systemDefaultZone()`, `system clock`],
					[/* text */ 't', ` in the default
 time-zone to obtain the current date.
 `]
				]],
				[/* block */ 'b', `
 Using this method will prevent the ability to use an alternate clock for testing
 because the clock is hard-coded.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current date using the system clock and default time-zone, not null`]
			]
		]],
		[/* method */ 'now(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains the current date from the system clock in the specified time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* external link */ 'a', `Clock.html#system(java.time.ZoneId)`, `system clock`],
					[/* text */ 't', ` to obtain the current date.
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
				[/* text */ 't', `the current date using the system clock, not null`]
			]
		]],
		[/* method */ 'getChronology()', [
			[/* method description */
				[/* text */ 't', `Gets the chronology of this date, which is the ISO calendar system.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', ` represents the calendar system in use.
 The ISO-8601 calendar system is the modern civil calendar system used today
 in most of the world. It is equivalent to the proleptic Gregorian calendar
 system, in which today's rules for leap years are applied for all time.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ISO chronology, not null`]
			]
		]],
		[/* method */ 'adjustInto(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adjusts the specified temporal object to have the same date as this object.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with the date changed to be the same as this.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The adjustment is equivalent to using `],
					[/* external link */ 'a', `temporal/Temporal.html#with(java.time.temporal.TemporalField,long)`, `Temporal.with(TemporalField, long)`],
					[/* text */ 't', `
 passing `],
					[/* external link */ 'a', `temporal/ChronoField.html#EPOCH_DAY`, `ChronoField.EPOCH_DAY`],
					[/* text */ 't', ` as the field.
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
   temporal = thisLocalDate.adjustInto(temporal);
   temporal = temporal.with(thisLocalDate);
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
		[/* method */ 'with(java.time.temporal.TemporalAdjuster)', [
			[/* method description */
				[/* text */ 't', `Returns an adjusted copy of this date.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `, based on this one, with the date adjusted.
 The adjustment takes place using the specified adjuster strategy object.
 Read the documentation of the adjuster to understand what adjustment will be made.
 `]
				]],
				[/* block */ 'b', `
 A simple adjuster might simply set the one of the fields, such as the year field.
 A more complex adjuster might set the date to the last day of the month.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A selection of common adjustments is provided in
 `],
					[/* reference */ 'r', `java.time.temporal.TemporalAdjusters`],
					[/* text */ 't', `.
 These include finding the "last day of the month" and "next Wednesday".
 Key date-time classes also implement the `],
					[/* inline code block */ 'i', `TemporalAdjuster`],
					[/* text */ 't', ` interface,
 such as `],
					[/* reference */ 'r', `enum class in java.time.Month`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.time.MonthDay`],
					[/* text */ 't', `.
 The adjuster is responsible for handling special cases, such as the varying
 lengths of month and leap years.
 `]
				]],
				[/* block */ 'b', `
 For example this code returns a date on the last day of July:
 `],
				[/* code block */ 'c', `  import static java.time.Month.*;
  import static java.time.temporal.TemporalAdjusters.*;

  result = localDate.with(JULY).with(lastDayOfMonth());
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The result of this method is obtained by invoking the
 `],
					[/* external link */ 'a', `temporal/TemporalAdjuster.html#adjustInto(java.time.temporal.Temporal)`, `TemporalAdjuster.adjustInto(Temporal)`],
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
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` with the adjustment made, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalField,long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date with the specified field set to a new value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `, based on this one, with the value
 for the specified field changed.
 This can be used to change any supported field, such as the year, month or day-of-month.
 If it is not possible to set the value, because the field is not supported or for
 some other reason, an exception is thrown.
 `]
				]],
				[/* block */ 'b', `
 In some cases, changing the specified field can cause the resulting date to become invalid,
 such as changing the month from 31st January to February would make the day-of-month invalid.
 In cases like this, the field is responsible for resolving the date. Typically it will choose
 the previous valid date, which would be the last valid day of February in this example.
 `],
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
						[/* inline code block */ 'i', `DAY_OF_WEEK`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified day-of-week.
  The date is adjusted up to 6 days forward or backward within the boundary
  of a Monday to Sunday week.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_MONTH`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified aligned-day-of-week.
  The date is adjusted to the specified month-based aligned-day-of-week.
  Aligned weeks are counted such that the first week of a given month starts
  on the first day of that month.
  This may cause the date to be moved up to 6 days into the following month.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_YEAR`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified aligned-day-of-week.
  The date is adjusted to the specified year-based aligned-day-of-week.
  Aligned weeks are counted such that the first week of a given year starts
  on the first day of that year.
  This may cause the date to be moved up to 6 days into the following year.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `DAY_OF_MONTH`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified day-of-month.
  The month and year will be unchanged. If the day-of-month is invalid for the
  year and month, then a `],
						[/* inline code block */ 'i', `DateTimeException`],
						[/* text */ 't', ` is thrown.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `DAY_OF_YEAR`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified day-of-year.
  The year will be unchanged. If the day-of-year is invalid for the
  year, then a `],
						[/* inline code block */ 'i', `DateTimeException`],
						[/* text */ 't', ` is thrown.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `EPOCH_DAY`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified epoch-day.
  This completely replaces the date and is equivalent to `],
						[/* reference */ 'r', `ofEpochDay(long)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ALIGNED_WEEK_OF_MONTH`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified aligned-week-of-month.
  Aligned weeks are counted such that the first week of a given month starts
  on the first day of that month.
  This adjustment moves the date in whole week chunks to match the specified week.
  The result will have the same day-of-week as this date.
  This may cause the date to be moved into the following month.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ALIGNED_WEEK_OF_YEAR`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified aligned-week-of-year.
  Aligned weeks are counted such that the first week of a given year starts
  on the first day of that year.
  This adjustment moves the date in whole week chunks to match the specified week.
  The result will have the same day-of-week as this date.
  This may cause the date to be moved into the following year.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MONTH_OF_YEAR`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified month-of-year.
  The year will be unchanged. The day-of-month will also be unchanged,
  unless it would be invalid for the new month and year. In that case, the
  day-of-month is adjusted to the maximum valid value for the new month and year.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `PROLEPTIC_MONTH`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified proleptic-month.
  The day-of-month will be unchanged, unless it would be invalid for the new month
  and year. In that case, the day-of-month is adjusted to the maximum valid value
  for the new month and year.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR_OF_ERA`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified year-of-era.
  The era and month will be unchanged. The day-of-month will also be unchanged,
  unless it would be invalid for the new month and year. In that case, the
  day-of-month is adjusted to the maximum valid value for the new month and year.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified year.
  The month will be unchanged. The day-of-month will also be unchanged,
  unless it would be invalid for the new month and year. In that case, the
  day-of-month is adjusted to the maximum valid value for the new month and year.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ERA`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified era.
  The year-of-era and month will be unchanged. The day-of-month will also be unchanged,
  unless it would be invalid for the new month and year. In that case, the
  day-of-month is adjusted to the maximum valid value for the new month and year.
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
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` with the specified field set, not null`]
			]
		]],
		[/* method */ 'plus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
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
					[/* external link */ 'a', `temporal/TemporalAmount.html#addTo(java.time.temporal.Temporal)`, `TemporalAmount.addTo(Temporal)`],
					[/* text */ 't', `. The amount implementation is free
 to implement the addition in any way it wishes, however it typically
 calls back to `],
					[/* reference */ 'r', `plus(long, TemporalUnit)`],
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
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the addition made, not null`]
			]
		]],
		[/* method */ 'plus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `, based on this one, with the amount
 in terms of the unit added. If it is not possible to add the amount, because the
 unit is not supported or for some other reason, an exception is thrown.
 `]
				]],
				[/* block */ 'b', `
 In some cases, adding the amount can cause the resulting date to become invalid.
 For example, adding one month to 31st January would result in 31st February.
 In cases like this, the unit is responsible for resolving the date.
 Typically it will choose the previous valid date, which would be the last valid
 day of February in this example.
 `],
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
						[/* inline code block */ 'i', `DAYS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified number of days added.
  This is equivalent to `],
						[/* reference */ 'r', `plusDays(long)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `WEEKS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified number of weeks added.
  This is equivalent to `],
						[/* reference */ 'r', `plusWeeks(long)`],
						[/* text */ 't', ` and uses a 7 day week.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MONTHS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified number of months added.
  This is equivalent to `],
						[/* reference */ 'r', `plusMonths(long)`],
						[/* text */ 't', `.
  The day-of-month will be unchanged unless it would be invalid for the new
  month and year. In that case, the day-of-month is adjusted to the maximum
  valid value for the new month and year.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEARS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified number of years added.
  This is equivalent to `],
						[/* reference */ 'r', `plusYears(long)`],
						[/* text */ 't', `.
  The day-of-month will be unchanged unless it would be invalid for the new
  month and year. In that case, the day-of-month is adjusted to the maximum
  valid value for the new month and year.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `DECADES`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified number of decades added.
  This is equivalent to calling `],
						[/* reference */ 'r', `plusYears(long)`],
						[/* text */ 't', ` with the amount
  multiplied by 10.
  The day-of-month will be unchanged unless it would be invalid for the new
  month and year. In that case, the day-of-month is adjusted to the maximum
  valid value for the new month and year.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `CENTURIES`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified number of centuries added.
  This is equivalent to calling `],
						[/* reference */ 'r', `plusYears(long)`],
						[/* text */ 't', ` with the amount
  multiplied by 100.
  The day-of-month will be unchanged unless it would be invalid for the new
  month and year. In that case, the day-of-month is adjusted to the maximum
  valid value for the new month and year.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLENNIA`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified number of millennia added.
  This is equivalent to calling `],
						[/* reference */ 'r', `plusYears(long)`],
						[/* text */ 't', ` with the amount
  multiplied by 1,000.
  The day-of-month will be unchanged unless it would be invalid for the new
  month and year. In that case, the day-of-month is adjusted to the maximum
  valid value for the new month and year.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ERAS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', ` with the specified number of eras added.
  Only two eras are supported so the amount must be one, zero or minus one.
  If the amount is non-zero then the year is changed such that the year-of-era
  is unchanged.
  The day-of-month will be unchanged unless it would be invalid for the new
  month and year. In that case, the day-of-month is adjusted to the maximum
  valid value for the new month and year.
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
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the specified amount added, not null`]
			]
		]],
		[/* method */ 'until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Calculates the amount of time until another date in terms of the specified unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This calculates the amount of time between two `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `
 objects in terms of a single `],
					[/* inline code block */ 'i', `TemporalUnit`],
					[/* text */ 't', `.
 The start and end points are `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` and the specified date.
 The result will be negative if the end is before the start.
 The `],
					[/* inline code block */ 'i', `Temporal`],
					[/* text */ 't', ` passed to this method is converted to a
 `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` using `],
					[/* reference */ 'r', `from(TemporalAccessor)`],
					[/* text */ 't', `.
 For example, the amount in days between two dates can be calculated
 using `],
					[/* inline code block */ 'i', `startDate.until(endDate, DAYS)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The calculation returns a whole number, representing the number of
 complete units between the two dates.
 For example, the amount in months between 2012-06-15 and 2012-08-14
 will only be one month as it is one day short of two months.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method.
 The second is to use `],
					[/* external link */ 'a', `temporal/TemporalUnit.html#between(java.time.temporal.Temporal,java.time.temporal.Temporal)`, `TemporalUnit.between(Temporal, Temporal)`],
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
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`],
					[/* text */ 't', `.
 The units `],
					[/* inline code block */ 'i', `DAYS`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `WEEKS`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `MONTHS`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `YEARS`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `DECADES`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `CENTURIES`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `MILLENNIA`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `ERAS`],
					[/* text */ 't', `
 are supported. Other `],
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
					[/* inline code block */ 'i', `LocalDate`],
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
					[/* inline code block */ 'i', `LocalDate`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the amount of time between this date and the end date`]
			]
		]],
		[/* method */ 'until(java.time.chrono.ChronoLocalDate)', [
			[/* method description */
				[/* text */ 't', `Calculates the period between this date and another date as a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This calculates the period between two dates in terms of years, months and days.
 The start and end points are `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` and the specified date.
 The result will be negative if the end is before the start.
 The negative sign will be the same in each of year, month and day.
 `]
				]],
				[/* block */ 'b', `
 The calculation is performed using the ISO calendar system.
 If necessary, the input date will be converted to ISO.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The start date is included, but the end date is not.
 The period is calculated by removing complete months, then calculating
 the remaining number of days, adjusting to ensure that both have the same sign.
 The number of months is then normalized into years and months based on a 12 month year.
 A month is considered to be complete if the end day-of-month is greater
 than or equal to the start day-of-month.
 For example, from `],
					[/* inline code block */ 'i', `2010-01-15`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `2011-03-18`],
					[/* text */ 't', ` is "1 year, 2 months and 3 days".
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method.
 The second is to use `],
					[/* external link */ 'a', `Period.html#between(java.time.LocalDate,java.time.LocalDate)`, `Period.between(LocalDate, LocalDate)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent
   period = start.until(end);
   period = Period.between(start, end);
 `],
				[/* text */ 't', `
 The choice should be made based on which makes the code more readable.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'endDateExclusive', [/* parameter description */
					[/* text */ 't', `the end date, exclusive, which may be in any chronology, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the period between this date and the end date, not null`]
			]
		]],
		[/* method */ 'plusDays(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` with the specified number of days added.
 `],
				[/* block */ 'b', `
 This method adds the specified amount to the days field incrementing the
 month and year fields as necessary to ensure the result remains valid.
 The result is only invalid if the maximum/minimum year is exceeded.
 `],
				[/* block */ 'b', `
 For example, 2008-12-31 plus one day would result in 2009-01-01.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'daysToAdd', [/* parameter description */
					[/* text */ 't', `the days to add, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the days added, not null`]
			]
		]],
		[/* method */ 'minus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
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
					[/* external link */ 'a', `temporal/TemporalAmount.html#subtractFrom(java.time.temporal.Temporal)`, `TemporalAmount.subtractFrom(Temporal)`],
					[/* text */ 't', `. The amount implementation is free
 to implement the subtraction in any way it wishes, however it typically
 calls back to `],
					[/* reference */ 'r', `minus(long, TemporalUnit)`],
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
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the subtraction made, not null`]
			]
		]],
		[/* method */ 'minus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `, based on this one, with the amount
 in terms of the unit subtracted. If it is not possible to subtract the amount,
 because the unit is not supported or for some other reason, an exception is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is equivalent to `],
					[/* reference */ 'r', `plus(long, TemporalUnit)`],
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
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the specified amount subtracted, not null`]
			]
		]],
		[/* method */ 'minusDays(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` with the specified number of days subtracted.
 `],
				[/* block */ 'b', `
 This method subtracts the specified amount from the days field decrementing the
 month and year fields as necessary to ensure the result remains valid.
 The result is only invalid if the maximum/minimum year is exceeded.
 `],
				[/* block */ 'b', `
 For example, 2009-01-01 minus one day would result in 2008-12-31.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'daysToSubtract', [/* parameter description */
					[/* text */ 't', `the days to subtract, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the days subtracted, not null`]
			]
		]],
		[/* method */ 'getDayOfWeek()', [
			[/* method description */
				[/* text */ 't', `Gets the day-of-week field, which is an enum `],
				[/* inline code block */ 'i', `DayOfWeek`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns the enum `],
					[/* reference */ 'r', `enum class in java.time.DayOfWeek`],
					[/* text */ 't', ` for the day-of-week.
 This avoids confusion as to what `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` values mean.
 If you need access to the primitive `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value then the enum
 provides the `],
					[/* external link */ 'a', `DayOfWeek.html#getValue()`, `int value`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Additional information can be obtained from the `],
					[/* inline code block */ 'i', `DayOfWeek`],
					[/* text */ 't', `.
 This includes textual names of the values.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the day-of-week, not null`]
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
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the year is leap, false otherwise`]
			]
		]],
		[/* method */ 'getDayOfYear()', [
			[/* method description */
				[/* text */ 't', `Gets the day-of-year field.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns the primitive `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value for the day-of-year.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the day-of-year, from 1 to 365, or 366 in a leap year`]
			]
		]],
		[/* method */ 'withDayOfYear(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` with the day-of-year altered.
 `],
				[/* block */ 'b', `
 If the resulting date is invalid, an exception is thrown.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'dayOfYear', [/* parameter description */
					[/* text */ 't', `the day-of-year to set in the result, from 1 to 365-366`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the day-of-year value is invalid,
  or if the day-of-year is invalid for the year`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the requested day, not null`]
			]
		]],
		[/* method */ 'minusYears(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` with the specified number of years subtracted.
 `],
				[/* block */ 'b', `
 This method subtracts the specified amount from the years field in three steps:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `Subtract the input years from the year field`],
					[/* block */ 'b', `Check if the resulting date would be invalid`],
					[/* block */ 'b', `Adjust the day-of-month to the last valid day if necessary`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 For example, 2008-02-29 (leap year) minus one year would result in the
 invalid date 2007-02-29 (standard year). Instead of returning an invalid
 result, the last valid day of the month, 2007-02-28, is selected instead.
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
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the years subtracted, not null`]
			]
		]],
		[/* method */ 'plusMonths(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` with the specified number of months added.
 `],
				[/* block */ 'b', `
 This method adds the specified amount to the months field in three steps:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `Add the input months to the month-of-year field`],
					[/* block */ 'b', `Check if the resulting date would be invalid`],
					[/* block */ 'b', `Adjust the day-of-month to the last valid day if necessary`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 For example, 2007-03-31 plus one month would result in the invalid date
 2007-04-31. Instead of returning an invalid result, the last valid day
 of the month, 2007-04-30, is selected instead.
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
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the months added, not null`]
			]
		]],
		[/* method */ 'plusWeeks(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` with the specified number of weeks added.
 `],
				[/* block */ 'b', `
 This method adds the specified amount in weeks to the days field incrementing
 the month and year fields as necessary to ensure the result remains valid.
 The result is only invalid if the maximum/minimum year is exceeded.
 `],
				[/* block */ 'b', `
 For example, 2008-12-31 plus one week would result in 2009-01-07.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'weeksToAdd', [/* parameter description */
					[/* text */ 't', `the weeks to add, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the weeks added, not null`]
			]
		]],
		[/* method */ 'atTime(int,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Combines this date with a time to create a `],
				[/* inline code block */ 'i', `LocalDateTime`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` formed from this date at the
 specified hour, minute, second and nanosecond.
 The individual time fields must be within their valid range.
 All possible combinations of date and time are valid.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'hour', [/* parameter description */
					[/* text */ 't', `the hour-of-day to use, from 0 to 23`]
				]],
				[/* parameter */ 'minute', [/* parameter description */
					[/* text */ 't', `the minute-of-hour to use, from 0 to 59`]
				]],
				[/* parameter */ 'second', [/* parameter description */
					[/* text */ 't', `the second-of-minute to represent, from 0 to 59`]
				]],
				[/* parameter */ 'nanoOfSecond', [/* parameter description */
					[/* text */ 't', `the nano-of-second to represent, from 0 to 999,999,999`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the value of any field is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date-time formed from this date and the specified time, not null`]
			]
		]],
		[/* method */ 'atTime(java.time.OffsetTime)', [
			[/* method description */
				[/* text */ 't', `Combines this date with an offset time to create an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', ` formed from this date at the specified time.
 All possible combinations of date and time are valid.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'time', [/* parameter description */
					[/* text */ 't', `the time to combine with, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the offset date-time formed from this date and the specified time, not null`]
			]
		]],
		[/* method */ 'atTime(int,int)', [
			[/* method description */
				[/* text */ 't', `Combines this date with a time to create a `],
				[/* inline code block */ 'i', `LocalDateTime`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` formed from this date at the
 specified hour and minute.
 The seconds and nanosecond fields will be set to zero.
 The individual time fields must be within their valid range.
 All possible combinations of date and time are valid.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'hour', [/* parameter description */
					[/* text */ 't', `the hour-of-day to use, from 0 to 23`]
				]],
				[/* parameter */ 'minute', [/* parameter description */
					[/* text */ 't', `the minute-of-hour to use, from 0 to 59`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the value of any field is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date-time formed from this date and the specified time, not null`]
			]
		]],
		[/* method */ 'atTime(java.time.LocalTime)', [
			[/* method description */
				[/* text */ 't', `Combines this date with a time to create a `],
				[/* inline code block */ 'i', `LocalDateTime`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` formed from this date at the specified time.
 All possible combinations of date and time are valid.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'time', [/* parameter description */
					[/* text */ 't', `the time to combine with, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the local date-time formed from this date and the specified time, not null`]
			]
		]],
		[/* method */ 'atTime(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Combines this date with a time to create a `],
				[/* inline code block */ 'i', `LocalDateTime`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` formed from this date at the
 specified hour, minute and second.
 The nanosecond field will be set to zero.
 The individual time fields must be within their valid range.
 All possible combinations of date and time are valid.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'hour', [/* parameter description */
					[/* text */ 't', `the hour-of-day to use, from 0 to 23`]
				]],
				[/* parameter */ 'minute', [/* parameter description */
					[/* text */ 't', `the minute-of-hour to use, from 0 to 59`]
				]],
				[/* parameter */ 'second', [/* parameter description */
					[/* text */ 't', `the second-of-minute to represent, from 0 to 59`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the value of any field is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date-time formed from this date and the specified time, not null`]
			]
		]],
		[/* method */ 'toEpochDay()', UDF],
		[/* method */ 'getEra()', [
			[/* method description */
				[/* text */ 't', `Gets the era applicable at this date.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The official ISO-8601 standard does not define eras, however `],
					[/* inline code block */ 'i', `IsoChronology`],
					[/* text */ 't', ` does.
 It defines two eras, 'CE' from year one onwards and 'BCE' from year zero backwards.
 Since dates before the Julian-Gregorian cutover are not in line with history,
 the cutover between 'BCE' and 'CE' is also not aligned with the commonly used
 eras, often referred to using 'BC' and 'AD'.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Users of this class should typically ignore this method as it exists primarily
 to fulfill the `],
					[/* reference */ 'r', `java.time.chrono.ChronoLocalDate`],
					[/* text */ 't', ` contract where it is necessary to support
 the Japanese calendar system.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the IsoEra applicable at this date, not null`]
			]
		]],
		[/* method */ 'ofYearDay(int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` from a year and day-of-year.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` with the specified year and day-of-year.
 The day-of-year must be valid for the year, otherwise an exception will be thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year to represent, from MIN_YEAR to MAX_YEAR`]
				]],
				[/* parameter */ 'dayOfYear', [/* parameter description */
					[/* text */ 't', `the day-of-year to represent, from 1 to 366`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the value of any field is out of range,
  or if the day-of-year is invalid for the year`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date, not null`]
			]
		]],
		[/* method */ 'ofEpochDay(long)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` from the epoch day count.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` with the specified epoch-day.
 The `],
					[/* external link */ 'a', `temporal/ChronoField.html#EPOCH_DAY`, `EPOCH_DAY`],
					[/* text */ 't', ` is a simple incrementing count
 of days where day 0 is 1970-01-01. Negative numbers represent earlier days.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'epochDay', [/* parameter description */
					[/* text */ 't', `the Epoch Day to convert, based on the epoch 1970-01-01`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the epoch day exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date, not null`]
			]
		]],
		[/* method */ 'plusYears(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` with the specified number of years added.
 `],
				[/* block */ 'b', `
 This method adds the specified amount to the years field in three steps:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `Add the input years to the year field`],
					[/* block */ 'b', `Check if the resulting date would be invalid`],
					[/* block */ 'b', `Adjust the day-of-month to the last valid day if necessary`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 For example, 2008-02-29 (leap year) plus one year would result in the
 invalid date 2009-02-29 (standard year). Instead of returning an invalid
 result, the last valid day of the month, 2009-02-28, is selected instead.
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
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the years added, not null`]
			]
		]],
		[/* method */ 'minusMonths(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` with the specified number of months subtracted.
 `],
				[/* block */ 'b', `
 This method subtracts the specified amount from the months field in three steps:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `Subtract the input months from the month-of-year field`],
					[/* block */ 'b', `Check if the resulting date would be invalid`],
					[/* block */ 'b', `Adjust the day-of-month to the last valid day if necessary`]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 For example, 2007-03-31 minus one month would result in the invalid date
 2007-02-31. Instead of returning an invalid result, the last valid day
 of the month, 2007-02-28, is selected instead.
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
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the months subtracted, not null`]
			]
		]],
		[/* method */ 'isAfter(java.time.chrono.ChronoLocalDate)', [
			[/* method description */
				[/* text */ 't', `Checks if this date is after the specified date.
 `],
				[/* block */ 'b', `
 This checks to see if this date represents a point on the
 local time-line after the other date.
 `],
				[/* code block */ 'c', `   LocalDate a = LocalDate.of(2012, 6, 30);
   LocalDate b = LocalDate.of(2012, 7, 1);
   a.isAfter(b) == false
   a.isAfter(a) == false
   b.isAfter(a) == true
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method only considers the position of the two dates on the local time-line.
 It does not take into account the chronology, or calendar system.
 This is different from the comparison in `],
					[/* reference */ 'r', `compareTo(ChronoLocalDate)`],
					[/* text */ 't', `,
 but is the same approach as `],
					[/* external link */ 'a', `chrono/ChronoLocalDate.html#timeLineOrder()`, `ChronoLocalDate.timeLineOrder()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this date is after the specified date`]
			]
		]],
		[/* method */ 'isBefore(java.time.chrono.ChronoLocalDate)', [
			[/* method description */
				[/* text */ 't', `Checks if this date is before the specified date.
 `],
				[/* block */ 'b', `
 This checks to see if this date represents a point on the
 local time-line before the other date.
 `],
				[/* code block */ 'c', `   LocalDate a = LocalDate.of(2012, 6, 30);
   LocalDate b = LocalDate.of(2012, 7, 1);
   a.isBefore(b) == true
   a.isBefore(a) == false
   b.isBefore(a) == false
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method only considers the position of the two dates on the local time-line.
 It does not take into account the chronology, or calendar system.
 This is different from the comparison in `],
					[/* reference */ 'r', `compareTo(ChronoLocalDate)`],
					[/* text */ 't', `,
 but is the same approach as `],
					[/* external link */ 'a', `chrono/ChronoLocalDate.html#timeLineOrder()`, `ChronoLocalDate.timeLineOrder()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this date is before the specified date`]
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
					[/* reference */ 'r', `enum class in java.time.Month`],
					[/* text */ 't', ` for the month.
 This avoids confusion as to what `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` values mean.
 If you need access to the primitive `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value then the enum
 provides the `],
					[/* external link */ 'a', `Month.html#getValue()`, `int value`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the month-of-year, not null`]
			]
		]],
		[/* method */ 'withYear(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` with the year altered.
 `],
				[/* block */ 'b', `
 If the day-of-month is invalid for the year, it will be changed to the last valid day of the month.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year to set in the result, from MIN_YEAR to MAX_YEAR`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the year value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the requested year, not null`]
			]
		]],
		[/* method */ 'withMonth(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` with the month-of-year altered.
 `],
				[/* block */ 'b', `
 If the day-of-month is invalid for the year, it will be changed to the last valid day of the month.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month-of-year to set in the result, from 1 (January) to 12 (December)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the month-of-year value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the requested month, not null`]
			]
		]],
		[/* method */ 'withDayOfMonth(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` with the day-of-month altered.
 `],
				[/* block */ 'b', `
 If the resulting date is invalid, an exception is thrown.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the day-of-month to set in the result, from 1 to 28-31`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the day-of-month value is invalid,
  or if the day-of-month is invalid for the month-year`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the requested day, not null`]
			]
		]],
		[/* method */ 'minusWeeks(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` with the specified number of weeks subtracted.
 `],
				[/* block */ 'b', `
 This method subtracts the specified amount in weeks from the days field decrementing
 the month and year fields as necessary to ensure the result remains valid.
 The result is only invalid if the maximum/minimum year is exceeded.
 `],
				[/* block */ 'b', `
 For example, 2009-01-07 minus one week would result in 2008-12-31.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'weeksToSubtract', [/* parameter description */
					[/* text */ 't', `the weeks to subtract, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` based on this date with the weeks subtracted, not null`]
			]
		]],
		[/* method */ 'lengthOfMonth()', [
			[/* method description */
				[/* text */ 't', `Returns the length of the month represented by this date.
 `],
				[/* block */ 'b', `
 This returns the length of the month in days.
 For example, a date in January would return 31.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the length of the month in days`]
			]
		]],
		[/* method */ 'lengthOfYear()', [
			[/* method description */
				[/* text */ 't', `Returns the length of the year represented by this date.
 `],
				[/* block */ 'b', `
 This returns the length of the year in days, either 365 or 366.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `366 if the year is leap, 365 otherwise`]
			]
		]],
		[/* method */ 'datesUntil(java.time.LocalDate,java.time.Period)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential ordered stream of dates by given incremental step. The returned stream
 starts from this date (inclusive) and goes to `],
				[/* inline code block */ 'i', `endExclusive`],
				[/* text */ 't', ` (exclusive).
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The n-th date which appears in the stream is equal to `],
					[/* inline code block */ 'i', `this.plus(step.multipliedBy(n))`],
					[/* text */ 't', `
 (but the result of step multiplication never overflows). For example, if this date is
 `],
					[/* inline code block */ 'i', `2015-01-31`],
					[/* text */ 't', `, the end date is `],
					[/* inline code block */ 'i', `2015-05-01`],
					[/* text */ 't', ` and the step is 1 month, then the
 stream contains `],
					[/* inline code block */ 'i', `2015-01-31`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `2015-02-28`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `2015-03-31`],
					[/* text */ 't', `, and
 `],
					[/* inline code block */ 'i', `2015-04-30`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `the end date, exclusive, not null`]
				]],
				[/* parameter */ 'step', [/* parameter description */
					[/* text */ 't', `the non-zero, non-negative `],
					[/* inline code block */ 'i', `Period`],
					[/* text */ 't', ` which represents the step.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if step is zero, or `],
					[/* inline code block */ 'i', `step.getDays()`],
					[/* text */ 't', ` and
             `],
					[/* inline code block */ 'i', `step.toTotalMonths()`],
					[/* text */ 't', ` have opposite sign, or end date is before this date
             and step is positive, or end date is after this date and step is negative`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a sequential `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` for the range of `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` values`]
			]
		]],
		[/* method */ 'datesUntil(java.time.LocalDate)', [
			[/* method description */
				[/* text */ 't', `Returns a sequential ordered stream of dates. The returned stream starts from this date
 (inclusive) and goes to `],
				[/* inline code block */ 'i', `endExclusive`],
				[/* text */ 't', ` (exclusive) by an incremental step of 1 day.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is equivalent to `],
					[/* inline code block */ 'i', `datesUntil(endExclusive, Period.ofDays(1))`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `the end date, exclusive, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if end date is before this date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a sequential `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` for the range of `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` values`]
			]
		]],
		[/* method */ 'atStartOfDay(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Returns a zoned date-time from this date at the earliest valid time according
 to the rules in the time-zone.
 `],
				[/* block */ 'b', `
 Time-zone rules, such as daylight savings, mean that not every local date-time
 is valid for the specified zone, thus the local date-time may not be midnight.
 `],
				[/* block */ 'b', `
 In most cases, there is only one valid offset for a local date-time.
 In the case of an overlap, there are two valid offsets, and the earlier one is used,
 corresponding to the first occurrence of midnight on the date.
 In the case of a gap, the zoned date-time will represent the instant just after the gap.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the zone ID is a `],
					[/* reference */ 'r', `java.time.ZoneOffset`],
					[/* text */ 't', `, then the result always has a time of midnight.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 To convert to a specific time in a given time-zone call `],
					[/* reference */ 'r', `atTime(LocalTime)`],
					[/* text */ 't', `
 followed by `],
					[/* external link */ 'a', `LocalDateTime.html#atZone(java.time.ZoneId)`, `LocalDateTime.atZone(ZoneId)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the zone ID to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the zoned date-time formed from this date and the earliest valid time for the zone, not null`]
			]
		]],
		[/* method */ 'atStartOfDay()', [
			[/* method description */
				[/* text */ 't', `Combines this date with the time of midnight to create a `],
				[/* inline code block */ 'i', `LocalDateTime`],
				[/* text */ 't', `
 at the start of this date.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` formed from this date at the time of
 midnight, 00:00, at the start of this date.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the local date-time of midnight at the start of this date, not null`]
			]
		]]
	],
]);
