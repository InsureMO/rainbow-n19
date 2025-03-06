import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.LocalTime', [
	[/* class description */
		[/* text */ 't', `A time without a time-zone in the ISO-8601 calendar system,
 such as `],
		[/* inline code block */ 'i', `10:15:30`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `LocalTime`],
			[/* text */ 't', ` is an immutable date-time object that represents a time,
 often viewed as hour-minute-second.
 Time is represented to nanosecond precision.
 For example, the value "13:45.30.123456789" can be stored in a `],
			[/* inline code block */ 'i', `LocalTime`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 This class does not store or represent a date or time-zone.
 Instead, it is a description of the local time as seen on a wall clock.
 It cannot represent an instant on the time-line without additional information
 such as an offset or time-zone.
 `],
		[/* block */ 'b', `
 The ISO-8601 calendar system is the modern civil calendar system used today
 in most of the world. This API assumes that all calendar systems use the same
 representation, this class, for time-of-day.
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
		[/* field */ 'MAX', [
			[/* field description */
				[/* text */ 't', `The maximum supported `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', `, '23:59:59.999999999'.
 This is the time just before midnight at the end of the day.`]
			],
		]],
		[/* field */ 'MIDNIGHT', [
			[/* field description */
				[/* text */ 't', `The time of midnight at the start of the day, '00:00'.`]
			],
		]],
		[/* field */ 'MIN', [
			[/* field description */
				[/* text */ 't', `The minimum supported `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', `, '00:00'.
 This is the time of midnight at the start of the day.`]
			],
		]],
		[/* field */ 'NOON', [
			[/* field description */
				[/* text */ 't', `The time of noon in the middle of the day, '12:00'.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'query(java.time.temporal.TemporalQuery)', [
			[/* method description */
				[/* text */ 't', `Queries this time using the specified query.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries this time using the specified query strategy object.
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
				[/* text */ 't', `Checks if this time is equal to another time.
 `],
				[/* block */ 'b', `
 The comparison is based on the time-line position of the time within a day.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Only objects of type `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` are compared, other types return false.
 To compare the date of two `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` instances, use
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#NANO_OF_DAY`, `ChronoField.NANO_OF_DAY`],
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
				[/* text */ 't', `true if this is equal to the other time`]
			]
		]],
		[/* method */ 'isAfter(java.time.LocalTime)', [
			[/* method description */
				[/* text */ 't', `Checks if this time is after the specified time.
 `],
				[/* block */ 'b', `
 The comparison is based on the time-line position of the time within a day.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other time to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is after the specified time`]
			]
		]],
		[/* method */ 'isBefore(java.time.LocalTime)', [
			[/* method description */
				[/* text */ 't', `Checks if this time is before the specified time.
 `],
				[/* block */ 'b', `
 The comparison is based on the time-line position of the time within a day.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other time to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this point is before the specified time`]
			]
		]],
		[/* method */ 'isSupported(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified field is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if this time can be queried for the specified field.
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
						[/* inline code block */ 'i', `NANO_OF_SECOND`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `NANO_OF_DAY`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MICRO_OF_SECOND`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MICRO_OF_DAY`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLI_OF_SECOND`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLI_OF_DAY`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `SECOND_OF_MINUTE`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `SECOND_OF_DAY`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MINUTE_OF_HOUR`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MINUTE_OF_DAY`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HOUR_OF_AMPM`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `CLOCK_HOUR_OF_AMPM`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HOUR_OF_DAY`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `CLOCK_HOUR_OF_DAY`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `AMPM_OF_DAY`]
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
				[/* text */ 't', `true if the field is supported on this time, false if not`]
			]
		]],
		[/* method */ 'isSupported(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified unit is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if the specified unit can be added to, or subtracted from, this time.
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
						[/* inline code block */ 'i', `NANOS`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MICROS`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLIS`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `SECONDS`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MINUTES`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HOURS`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HALF_DAYS`]
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
		[/* method */ 'compareTo(java.time.LocalTime)', [
			[/* method description */
				[/* text */ 't', `Compares this time to another time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based on the time-line position of the local times within a day.
 It is "consistent with equals", as defined by `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other time to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the comparator value, negative if less, positive if greater`]
			]
		]],
		[/* method */ 'get(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this time as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this time for the value of the specified field.
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
 values based on this time, except `],
					[/* inline code block */ 'i', `NANO_OF_DAY`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `MICRO_OF_DAY`],
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
		[/* method */ 'getHour()', [
			[/* method description */
				[/* text */ 't', `Gets the hour-of-day field.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hour-of-day, from 0 to 23`]
			]
		]],
		[/* method */ 'getMinute()', [
			[/* method description */
				[/* text */ 't', `Gets the minute-of-hour field.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minute-of-hour, from 0 to 59`]
			]
		]],
		[/* method */ 'getNano()', [
			[/* method description */
				[/* text */ 't', `Gets the nano-of-second field.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the nano-of-second, from 0 to 999,999,999`]
			]
		]],
		[/* method */ 'getSecond()', [
			[/* method description */
				[/* text */ 't', `Gets the second-of-minute field.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the second-of-minute, from 0 to 59`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this time.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'toSecondOfDay()', [
			[/* method description */
				[/* text */ 't', `Extracts the time as seconds of day,
 from `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `24 * 60 * 60 - 1`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the second-of-day equivalent to this time`]
			]
		]],
		[/* method */ 'format(java.time.format.DateTimeFormatter)', [
			[/* method description */
				[/* text */ 't', `Formats this time using the specified formatter.
 `],
				[/* block */ 'b', `
 This time will be passed to the formatter to produce a string.`]
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
				[/* text */ 't', `the formatted time string, not null`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this time as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, such as `],
				[/* inline code block */ 'i', `10:15`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The output will be one of the following ISO-8601 formats:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HH:mm`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HH:mm:ss`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HH:mm:ss.SSS`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HH:mm:ss.SSSSSS`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HH:mm:ss.SSSSSSSSS`]
					]]
				]],
				[/* text */ 't', `
 The format used will be the shortest that outputs the full value of
 the time where the omitted parts are implied to be zero.`],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this time, not null`]
			]
		]],
		[/* method */ 'atDate(java.time.LocalDate)', [
			[/* method description */
				[/* text */ 't', `Combines this time with a date to create a `],
				[/* inline code block */ 'i', `LocalDateTime`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` formed from this time at the specified date.
 All possible combinations of date and time are valid.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the date to combine with, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the local date-time formed from this time and the specified date, not null`]
			]
		]],
		[/* method */ 'minus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this time with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', `, based on this one, with the specified amount subtracted.
 The amount is typically `],
					[/* reference */ 'r', `java.time.Duration`, `Duration`],
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
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the subtraction made, not null`]
			]
		]],
		[/* method */ 'minus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this time with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalTime`],
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
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the specified amount subtracted, not null`]
			]
		]],
		[/* method */ 'minusHours(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` with the specified number of hours subtracted.
 `],
				[/* block */ 'b', `
 This subtracts the specified number of hours from this time, returning a new time.
 The calculation wraps around midnight.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'hoursToSubtract', [/* parameter description */
					[/* text */ 't', `the hours to subtract, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the hours subtracted, not null`]
			]
		]],
		[/* method */ 'minusMinutes(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` with the specified number of minutes subtracted.
 `],
				[/* block */ 'b', `
 This subtracts the specified number of minutes from this time, returning a new time.
 The calculation wraps around midnight.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'minutesToSubtract', [/* parameter description */
					[/* text */ 't', `the minutes to subtract, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the minutes subtracted, not null`]
			]
		]],
		[/* method */ 'minusNanos(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` with the specified number of nanoseconds subtracted.
 `],
				[/* block */ 'b', `
 This subtracts the specified number of nanoseconds from this time, returning a new time.
 The calculation wraps around midnight.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'nanosToSubtract', [/* parameter description */
					[/* text */ 't', `the nanos to subtract, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the nanoseconds subtracted, not null`]
			]
		]],
		[/* method */ 'minusSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` with the specified number of seconds subtracted.
 `],
				[/* block */ 'b', `
 This subtracts the specified number of seconds from this time, returning a new time.
 The calculation wraps around midnight.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'secondsToSubtract', [/* parameter description */
					[/* text */ 't', `the seconds to subtract, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the seconds subtracted, not null`]
			]
		]],
		[/* method */ 'plus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this time with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', `, based on this one, with the specified amount added.
 The amount is typically `],
					[/* reference */ 'r', `java.time.Duration`, `Duration`],
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
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the addition made, not null`]
			]
		]],
		[/* method */ 'plus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this time with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalTime`],
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
						[/* inline code block */ 'i', `NANOS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified number of nanoseconds added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusNanos(long)`, `plusNanos(long)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MICROS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified number of microseconds added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusNanos(long)`, `plusNanos(long)`],
						[/* text */ 't', ` with the amount
  multiplied by 1,000.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLIS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified number of milliseconds added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusNanos(long)`, `plusNanos(long)`],
						[/* text */ 't', ` with the amount
  multiplied by 1,000,000.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `SECONDS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified number of seconds added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusSeconds(long)`, `plusSeconds(long)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MINUTES`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified number of minutes added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusMinutes(long)`, `plusMinutes(long)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HOURS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified number of hours added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusHours(long)`, `plusHours(long)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HALF_DAYS`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified number of half-days added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusHours(long)`, `plusHours(long)`],
						[/* text */ 't', ` with the amount
  multiplied by 12.
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
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the specified amount added, not null`]
			]
		]],
		[/* method */ 'plusHours(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` with the specified number of hours added.
 `],
				[/* block */ 'b', `
 This adds the specified number of hours to this time, returning a new time.
 The calculation wraps around midnight.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'hoursToAdd', [/* parameter description */
					[/* text */ 't', `the hours to add, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the hours added, not null`]
			]
		]],
		[/* method */ 'plusMinutes(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` with the specified number of minutes added.
 `],
				[/* block */ 'b', `
 This adds the specified number of minutes to this time, returning a new time.
 The calculation wraps around midnight.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'minutesToAdd', [/* parameter description */
					[/* text */ 't', `the minutes to add, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the minutes added, not null`]
			]
		]],
		[/* method */ 'plusNanos(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` with the specified number of nanoseconds added.
 `],
				[/* block */ 'b', `
 This adds the specified number of nanoseconds to this time, returning a new time.
 The calculation wraps around midnight.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'nanosToAdd', [/* parameter description */
					[/* text */ 't', `the nanos to add, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the nanoseconds added, not null`]
			]
		]],
		[/* method */ 'plusSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` with the specified number of seconds added.
 `],
				[/* block */ 'b', `
 This adds the specified number of seconds to this time, returning a new time.
 The calculation wraps around midnight.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'secondstoAdd', [/* parameter description */
					[/* text */ 't', `the seconds to add, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the seconds added, not null`]
			]
		]],
		[/* method */ 'truncatedTo(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` with the time truncated.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Truncation returns a copy of the original time with fields
 smaller than the specified unit set to zero.
 For example, truncating with the `],
					[/* reference */ 'r', `java.time.temporal.ChronoUnit#MINUTES`, `minutes`],
					[/* text */ 't', ` unit
 will set the second-of-minute and nano-of-second field to zero.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The unit must have a `],
					[/* reference */ 'r', `java.time.temporal.TemporalUnit#getDuration()`, `duration`],
					[/* text */ 't', `
 that divides into the length of a standard day without remainder.
 This includes all supplied time units on `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`, `ChronoUnit`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoUnit#DAYS`, `DAYS`],
					[/* text */ 't', `. Other units throw an exception.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit to truncate to, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to truncate`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the time truncated, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalAdjuster)', [
			[/* method description */
				[/* text */ 't', `Returns an adjusted copy of this time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', `, based on this one, with the time adjusted.
 The adjustment takes place using the specified adjuster strategy object.
 Read the documentation of the adjuster to understand what adjustment will be made.
 `]
				]],
				[/* block */ 'b', `
 A simple adjuster might simply set the one of the fields, such as the hour field.
 A more complex adjuster might set the time to the last hour of the day.
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
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` with the adjustment made, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalField,long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this time with the specified field set to a new value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', `, based on this one, with the value
 for the specified field changed.
 This can be used to change any supported field, such as the hour, minute or second.
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
						[/* inline code block */ 'i', `NANO_OF_SECOND`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified nano-of-second.
  The hour, minute and second will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `NANO_OF_DAY`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified nano-of-day.
  This completely replaces the time and is equivalent to `],
						[/* reference */ 'r', `#ofNanoOfDay(long)`, `ofNanoOfDay(long)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MICRO_OF_SECOND`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the nano-of-second replaced by the specified
  micro-of-second multiplied by 1,000.
  The hour, minute and second will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MICRO_OF_DAY`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified micro-of-day.
  This completely replaces the time and is equivalent to using `],
						[/* reference */ 'r', `#ofNanoOfDay(long)`, `ofNanoOfDay(long)`],
						[/* text */ 't', `
  with the micro-of-day multiplied by 1,000.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLI_OF_SECOND`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the nano-of-second replaced by the specified
  milli-of-second multiplied by 1,000,000.
  The hour, minute and second will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLI_OF_DAY`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified milli-of-day.
  This completely replaces the time and is equivalent to using `],
						[/* reference */ 'r', `#ofNanoOfDay(long)`, `ofNanoOfDay(long)`],
						[/* text */ 't', `
  with the milli-of-day multiplied by 1,000,000.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `SECOND_OF_MINUTE`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified second-of-minute.
  The hour, minute and nano-of-second will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `SECOND_OF_DAY`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified second-of-day.
  The nano-of-second will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MINUTE_OF_HOUR`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified minute-of-hour.
  The hour, second-of-minute and nano-of-second will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MINUTE_OF_DAY`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified minute-of-day.
  The second-of-minute and nano-of-second will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HOUR_OF_AMPM`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified hour-of-am-pm.
  The AM/PM, minute-of-hour, second-of-minute and nano-of-second will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `CLOCK_HOUR_OF_AMPM`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified clock-hour-of-am-pm.
  The AM/PM, minute-of-hour, second-of-minute and nano-of-second will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HOUR_OF_DAY`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified hour-of-day.
  The minute-of-hour, second-of-minute and nano-of-second will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `CLOCK_HOUR_OF_DAY`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified clock-hour-of-day.
  The minute-of-hour, second-of-minute and nano-of-second will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `AMPM_OF_DAY`],
						[/* text */ 't', ` -
  Returns a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` with the specified AM/PM.
  The hour-of-am-pm, minute-of-hour, second-of-minute and nano-of-second will be unchanged.
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
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` with the specified field set, not null`]
			]
		]],
		[/* method */ 'withHour(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` with the hour-of-day altered.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'hour', [/* parameter description */
					[/* text */ 't', `the hour-of-day to set in the result, from 0 to 23`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the hour value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the requested hour, not null`]
			]
		]],
		[/* method */ 'withMinute(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` with the minute-of-hour altered.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'minute', [/* parameter description */
					[/* text */ 't', `the minute-of-hour to set in the result, from 0 to 59`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the minute value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the requested minute, not null`]
			]
		]],
		[/* method */ 'withNano(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` with the nano-of-second altered.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'nanoOfSecond', [/* parameter description */
					[/* text */ 't', `the nano-of-second to set in the result, from 0 to 999,999,999`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the nanos value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the requested nanosecond, not null`]
			]
		]],
		[/* method */ 'withSecond(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` with the second-of-minute altered.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'second', [/* parameter description */
					[/* text */ 't', `the second-of-minute to set in the result, from 0 to 59`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the second value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` based on this time with the requested second, not null`]
			]
		]],
		[/* method */ 'atOffset(java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Combines this time with an offset to create an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetTime`],
					[/* text */ 't', ` formed from this time at the specified offset.
 All possible combinations of time and offset are valid.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset to combine with, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the offset time formed from this time and the specified offset, not null`]
			]
		]],
		[/* method */ 'adjustInto(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adjusts the specified temporal object to have the same time as this object.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with the time changed to be the same as this.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The adjustment is equivalent to using `],
					[/* reference */ 'r', `java.time.temporal.Temporal#with(java.time.temporal.TemporalField,long)`, `Temporal.with(TemporalField, long)`],
					[/* text */ 't', `
 passing `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#NANO_OF_DAY`, `ChronoField.NANO_OF_DAY`],
					[/* text */ 't', ` as the field.
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
   temporal = thisLocalTime.adjustInto(temporal);
   temporal = temporal.with(thisLocalTime);
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
 This time is used to enhance the accuracy of the returned range.
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
		[/* method */ 'getLong(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this time as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this time for the value of the specified field.
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
 values based on this time.
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
		[/* method */ 'toEpochSecond(java.time.LocalDate,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` to the number of seconds since the epoch
 of 1970-01-01T00:00:00Z.
 `],
				[/* block */ 'b', `
 This combines this local time with the specified date and
 offset to calculate the epoch-second value, which is the
 number of elapsed seconds from 1970-01-01T00:00:00Z.
 Instants on the time-line after the epoch are positive, earlier
 are negative.`]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the local date, not null`]
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
		[/* method */ 'toNanoOfDay()', [
			[/* method description */
				[/* text */ 't', `Extracts the time as nanos of day,
 from `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `24 * 60 * 60 * 1,000,000,000 - 1`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the nano of day equivalent to this time`]
			]
		]],
		[/* method */ 'until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Calculates the amount of time until another time in terms of the specified unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This calculates the amount of time between two `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', `
 objects in terms of a single `],
					[/* inline code block */ 'i', `TemporalUnit`],
					[/* text */ 't', `.
 The start and end points are `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` and the specified time.
 The result will be negative if the end is before the start.
 The `],
					[/* inline code block */ 'i', `Temporal`],
					[/* text */ 't', ` passed to this method is converted to a
 `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` using `],
					[/* reference */ 'r', `#from(java.time.temporal.TemporalAccessor)`, `from(TemporalAccessor)`],
					[/* text */ 't', `.
 For example, the amount in hours between two times can be calculated
 using `],
					[/* inline code block */ 'i', `startTime.until(endTime, HOURS)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The calculation returns a whole number, representing the number of
 complete units between the two times.
 For example, the amount in hours between 11:30 and 13:29 will only
 be one hour as it is one minute short of two hours.
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
   amount = start.until(end, MINUTES);
   amount = MINUTES.between(start, end);
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
					[/* inline code block */ 'i', `NANOS`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `MICROS`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `MILLIS`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `SECONDS`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `MINUTES`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `HOURS`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `HALF_DAYS`],
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
					[/* text */ 't', `the end time, exclusive, which is converted to a `],
					[/* inline code block */ 'i', `LocalTime`],
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
					[/* inline code block */ 'i', `LocalTime`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the amount of time between this time and the end time`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains a local time based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion uses the `],
					[/* reference */ 'r', `java.time.temporal.TemporalQueries#localTime()`, `TemporalQueries.localTime()`],
					[/* text */ 't', ` query, which relies
 on extracting the `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#NANO_OF_DAY`, `NANO_OF_DAY`],
					[/* text */ 't', ` field.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method matches the signature of the functional interface `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`, `TemporalQuery`],
					[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
					[/* inline code block */ 'i', `LocalTime::from`],
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
					[/* inline code block */ 'i', `LocalTime`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local time, not null`]
			]
		]],
		[/* method */ 'now()', [
			[/* method description */
				[/* text */ 't', `Obtains the current time from the system clock in the default time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* reference */ 'r', `java.time.Clock#systemDefaultZone()`, `system clock`],
					[/* text */ 't', ` in the default
 time-zone to obtain the current time.
 `]
				]],
				[/* block */ 'b', `
 Using this method will prevent the ability to use an alternate clock for testing
 because the clock is hard-coded.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current time using the system clock and default time-zone, not null`]
			]
		]],
		[/* method */ 'now(java.time.Clock)', [
			[/* method description */
				[/* text */ 't', `Obtains the current time from the specified clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the specified clock to obtain the current time.
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current time, not null`]
			]
		]],
		[/* method */ 'now(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains the current time from the system clock in the specified time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* reference */ 'r', `java.time.Clock#system(java.time.ZoneId)`, `system clock`],
					[/* text */ 't', ` to obtain the current time.
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
				[/* text */ 't', `the current time using the system clock, not null`]
			]
		]],
		[/* method */ 'of(int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` from an hour and minute.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` with the specified hour and minute.
 The second and nanosecond fields will be set to zero.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'hour', [/* parameter description */
					[/* text */ 't', `the hour-of-day to represent, from 0 to 23`]
				]],
				[/* parameter */ 'minute', [/* parameter description */
					[/* text */ 't', `the minute-of-hour to represent, from 0 to 59`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the value of any field is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local time, not null`]
			]
		]],
		[/* method */ 'of(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` from an hour, minute and second.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` with the specified hour, minute and second.
 The nanosecond field will be set to zero.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'hour', [/* parameter description */
					[/* text */ 't', `the hour-of-day to represent, from 0 to 23`]
				]],
				[/* parameter */ 'minute', [/* parameter description */
					[/* text */ 't', `the minute-of-hour to represent, from 0 to 59`]
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
				[/* text */ 't', `the local time, not null`]
			]
		]],
		[/* method */ 'of(int,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` from an hour, minute, second and nanosecond.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` with the specified hour, minute, second and nanosecond.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'hour', [/* parameter description */
					[/* text */ 't', `the hour-of-day to represent, from 0 to 23`]
				]],
				[/* parameter */ 'minute', [/* parameter description */
					[/* text */ 't', `the minute-of-hour to represent, from 0 to 59`]
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
				[/* text */ 't', `the local time, not null`]
			]
		]],
		[/* method */ 'ofInstant(java.time.Instant,java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` from an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` and zone ID.
 `],
				[/* block */ 'b', `
 This creates a local time based on the specified instant.
 First, the offset from UTC/Greenwich is obtained using the zone ID and instant,
 which is simple as there is only one valid offset for each instant.
 Then, the instant and offset are used to calculate the local time.`]
			],
			[/* parameters */
				[/* parameter */ 'instant', [/* parameter description */
					[/* text */ 't', `the instant to create the time from, not null`]
				]],
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone, which may be an offset, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the local time, not null`]
			]
		]],
		[/* method */ 'ofNanoOfDay(long)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` from a nanos-of-day value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` with the specified nanosecond-of-day.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'nanoOfDay', [/* parameter description */
					[/* text */ 't', `the nano of day, from `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `24 * 60 * 60 * 1,000,000,000 - 1`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the nanos of day value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local time, not null`]
			]
		]],
		[/* method */ 'ofSecondOfDay(long)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` from a second-of-day value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` with the specified second-of-day.
 The nanosecond field will be set to zero.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'secondOfDay', [/* parameter description */
					[/* text */ 't', `the second-of-day, from `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `24 * 60 * 60 - 1`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the second-of-day value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local time, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` from a text string such as `],
				[/* inline code block */ 'i', `10:15`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The string must represent a valid time and is parsed using
 `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatter#ISO_LOCAL_TIME`, `DateTimeFormatter.ISO_LOCAL_TIME`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse such as "10:15:30", not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.format.DateTimeParseException', [/* throw description */
					[/* text */ 't', `if the text cannot be parsed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed local time, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence,java.time.format.DateTimeFormatter)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` from a text string using a specific formatter.
 `],
				[/* block */ 'b', `
 The text is parsed using the formatter, returning a time.`]
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
				[/* text */ 't', `the parsed local time, not null`]
			]
		]]
	],
]);
