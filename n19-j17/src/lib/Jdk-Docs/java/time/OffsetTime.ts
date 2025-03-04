import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.OffsetTime', [
	[/* class description */
		[/* text */ 't', `A time with an offset from UTC/Greenwich in the ISO-8601 calendar system,
 such as `],
		[/* inline code block */ 'i', `10:15:30+01:00`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `OffsetTime`],
			[/* text */ 't', ` is an immutable date-time object that represents a time, often
 viewed as hour-minute-second-offset.
 This class stores all time fields, to a precision of nanoseconds,
 as well as a zone offset.
 For example, the value "13:45:30.123456789+02:00" can be stored
 in an `],
			[/* inline code block */ 'i', `OffsetTime`],
			[/* text */ 't', `.
 `]
		]],
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
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', `, '23:59:59.999999999-18:00'.
 This is the time just before midnight at the end of the day in the minimum offset
 (larger negative offsets are later on the time-line).
 This combines `],
				[/* reference */ 'r', `.LocalTime#MAX`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `.ZoneOffset#MIN`],
				[/* text */ 't', `.
 This could be used by an application as a "far future" date.`]
			],
		]],
		[/* field */ 'MIN', [
			[/* field description */
				[/* text */ 't', `The minimum supported `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', `, '00:00:00+18:00'.
 This is the time of midnight at the start of the day in the maximum offset
 (larger offsets are earlier on the time-line).
 This combines `],
				[/* reference */ 'r', `.LocalTime#MIN`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `.ZoneOffset#MAX`],
				[/* text */ 't', `.
 This could be used by an application as a "far past" date.`]
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
				[/* text */ 't', `Checks if this time is equal to another time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based on the local-time and the offset.
 To compare for the same instant on the time-line, use `],
					[/* reference */ 'r', `#isEqual(java.time.OffsetTime)`, `isEqual(OffsetTime)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Only objects of type `],
					[/* inline code block */ 'i', `OffsetTime`],
					[/* text */ 't', ` are compared, other types return false.
 To compare the underlying local time of two `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` instances,
 use `],
					[/* reference */ 'r', `.ChronoField#NANO_OF_DAY`],
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
		[/* method */ 'isAfter(java.time.OffsetTime)', [
			[/* method description */
				[/* text */ 't', `Checks if the instant of this `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` is after that of the
 specified time applying both times to a common date.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.OffsetTime)`, `compareTo(java.time.OffsetTime)`],
					[/* text */ 't', ` in that it
 only compares the instant of the time. This is equivalent to converting both
 times to an instant using the same date and comparing the instants.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other time to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is after the instant of the specified time`]
			]
		]],
		[/* method */ 'isBefore(java.time.OffsetTime)', [
			[/* method description */
				[/* text */ 't', `Checks if the instant of this `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` is before that of the
 specified time applying both times to a common date.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.OffsetTime)`, `compareTo(java.time.OffsetTime)`],
					[/* text */ 't', ` in that it
 only compares the instant of the time. This is equivalent to converting both
 times to an instant using the same date and comparing the instants.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other time to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is before the instant of the specified time`]
			]
		]],
		[/* method */ 'isEqual(java.time.OffsetTime)', [
			[/* method description */
				[/* text */ 't', `Checks if the instant of this `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` is equal to that of the
 specified time applying both times to a common date.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.OffsetTime)`, `compareTo(java.time.OffsetTime)`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#equals(java.lang.Object)`, `equals(java.lang.Object)`],
					[/* text */ 't', `
 in that it only compares the instant of the time. This is equivalent to converting both
 times to an instant using the same date and comparing the instants.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other time to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is equal to the instant of the specified time`]
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
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
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
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `OFFSET_SECONDS`]
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
 This checks if the specified unit can be added to, or subtracted from, this offset-time.
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
		[/* method */ 'compareTo(java.time.OffsetTime)', [
			[/* method description */
				[/* text */ 't', `Compares this `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` to another time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based first on the UTC equivalent instant, then on the local time.
 It is "consistent with equals", as defined by `],
					[/* reference */ 'r', `java.lang.Comparable`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 For example, the following is the comparator order:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `10:30+01:00`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `11:00+01:00`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `12:00+02:00`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `11:30+01:00`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `12:00+01:00`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `12:30+01:00`]
					]]
				]],
				[/* text */ 't', `
 Values #2 and #3 represent the same instant on the time-line.
 When two values represent the same instant, the local time is compared
 to distinguish them. This step is needed to make the ordering
 consistent with `],
				[/* inline code block */ 'i', `equals()`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 To compare the underlying local time of two `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` instances,
 use `],
					[/* reference */ 'r', `.ChronoField#NANO_OF_DAY`],
					[/* text */ 't', ` as a comparator.`]
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
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
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
				[/* inline code block */ 'i', `10:15:30+01:00`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The output will be one of the following ISO-8601 formats:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HH:mmXXXXX`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HH:mm:ssXXXXX`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HH:mm:ss.SSSXXXXX`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HH:mm:ss.SSSSSSXXXXX`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HH:mm:ss.SSSSSSSSSXXXXX`]
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
		[/* method */ 'toLocalTime()', [
			[/* method description */
				[/* text */ 't', `Gets the `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` part of this date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` with the same hour, minute, second and
 nanosecond as this date-time.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the time part of this date-time, not null`]
			]
		]],
		[/* method */ 'atDate(java.time.LocalDate)', [
			[/* method description */
				[/* text */ 't', `Combines this time with a date to create an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', ` formed from this time and the specified date.
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
				[/* text */ 't', `the offset date-time formed from this time and the specified date, not null`]
			]
		]],
		[/* method */ 'minus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this time with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetTime`],
					[/* text */ 't', `, based on this one, with the specified amount subtracted.
 The amount is typically `],
					[/* reference */ 'r', `java.time.Duration`],
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the subtraction made, not null`]
			]
		]],
		[/* method */ 'minus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this time with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetTime`],
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the specified amount subtracted, not null`]
			]
		]],
		[/* method */ 'minusHours(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
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
				[/* parameter */ 'hours', [/* parameter description */
					[/* text */ 't', `the hours to subtract, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the hours subtracted, not null`]
			]
		]],
		[/* method */ 'minusMinutes(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
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
				[/* parameter */ 'minutes', [/* parameter description */
					[/* text */ 't', `the minutes to subtract, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the minutes subtracted, not null`]
			]
		]],
		[/* method */ 'minusNanos(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
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
				[/* parameter */ 'nanos', [/* parameter description */
					[/* text */ 't', `the nanos to subtract, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the nanoseconds subtracted, not null`]
			]
		]],
		[/* method */ 'minusSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
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
				[/* parameter */ 'seconds', [/* parameter description */
					[/* text */ 't', `the seconds to subtract, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the seconds subtracted, not null`]
			]
		]],
		[/* method */ 'plus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this time with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetTime`],
					[/* text */ 't', `, based on this one, with the specified amount added.
 The amount is typically `],
					[/* reference */ 'r', `java.time.Duration`],
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the addition made, not null`]
			]
		]],
		[/* method */ 'plus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this time with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetTime`],
					[/* text */ 't', `, based on this one, with the amount
 in terms of the unit added. If it is not possible to add the amount, because the
 unit is not supported or for some other reason, an exception is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the field is a `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`],
					[/* text */ 't', ` then the addition is implemented by
 `],
					[/* reference */ 'r', `.LocalTime#plus(long,java.time.temporal.TemporalUnit)`],
					[/* text */ 't', `.
 The offset is not part of the calculation and will be unchanged in the result.
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the specified amount added, not null`]
			]
		]],
		[/* method */ 'plusHours(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
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
				[/* parameter */ 'hours', [/* parameter description */
					[/* text */ 't', `the hours to add, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the hours added, not null`]
			]
		]],
		[/* method */ 'plusMinutes(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
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
				[/* parameter */ 'minutes', [/* parameter description */
					[/* text */ 't', `the minutes to add, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the minutes added, not null`]
			]
		]],
		[/* method */ 'plusNanos(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
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
				[/* parameter */ 'nanos', [/* parameter description */
					[/* text */ 't', `the nanos to add, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the nanoseconds added, not null`]
			]
		]],
		[/* method */ 'plusSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
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
				[/* parameter */ 'seconds', [/* parameter description */
					[/* text */ 't', `the seconds to add, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the seconds added, not null`]
			]
		]],
		[/* method */ 'truncatedTo(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` with the time truncated.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Truncation returns a copy of the original time with fields
 smaller than the specified unit set to zero.
 For example, truncating with the `],
					[/* reference */ 'r', `.ChronoUnit#MINUTES`],
					[/* text */ 't', ` unit
 will set the second-of-minute and nano-of-second field to zero.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The unit must have a `],
					[/* reference */ 'r', `.TemporalUnit#getDuration()`],
					[/* text */ 't', `
 that divides into the length of a standard day without remainder.
 This includes all supplied time units on `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `.ChronoUnit#DAYS`],
					[/* text */ 't', `. Other units throw an exception.
 `]
				]],
				[/* block */ 'b', `
 The offset does not affect the calculation and will be the same in the result.
 `],
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the time truncated, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalAdjuster)', [
			[/* method description */
				[/* text */ 't', `Returns an adjusted copy of this time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetTime`],
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
 The classes `],
					[/* reference */ 'r', `java.time.LocalTime`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.time.ZoneOffset`],
					[/* text */ 't', ` implement `],
					[/* inline code block */ 'i', `TemporalAdjuster`],
					[/* text */ 't', `,
 thus this method can be used to change the time or offset:
 `]
				]],
				[/* code block */ 'c', `  result = offsetTime.with(time);
  result = offsetTime.with(offset);
 `],
				[/* block */ 'b', ''],
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
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
 This returns an `],
					[/* inline code block */ 'i', `OffsetTime`],
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
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
					[/* text */ 't', ` then the adjustment is implemented here.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `OFFSET_SECONDS`],
					[/* text */ 't', ` field will return a time with the specified offset.
 The local time is unaltered. If the new offset value is outside the valid range
 then a `],
					[/* inline code block */ 'i', `DateTimeException`],
					[/* text */ 't', ` will be thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The other `],
					[/* reference */ 'r', `#isSupported(java.time.temporal.TemporalField)`, `supported fields`],
					[/* text */ 't', ` will behave as per
 the matching method on `],
					[/* reference */ 'r', `.LocalTime#with(java.time.temporal.TemporalField,long)`],
					[/* text */ 't', ` LocalTime}.
 In this case, the offset is not part of the calculation and will be unchanged.
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` with the specified field set, not null`]
			]
		]],
		[/* method */ 'withHour(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` with the hour-of-day altered.
 `],
				[/* block */ 'b', `
 The offset does not affect the calculation and will be the same in the result.
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the requested hour, not null`]
			]
		]],
		[/* method */ 'withMinute(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` with the minute-of-hour altered.
 `],
				[/* block */ 'b', `
 The offset does not affect the calculation and will be the same in the result.
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the requested minute, not null`]
			]
		]],
		[/* method */ 'withNano(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` with the nano-of-second altered.
 `],
				[/* block */ 'b', `
 The offset does not affect the calculation and will be the same in the result.
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the requested nanosecond, not null`]
			]
		]],
		[/* method */ 'withOffsetSameInstant(java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` with the specified offset ensuring
 that the result is at the same instant on an implied day.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns an object with the specified `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` and a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', `
 adjusted by the difference between the two offsets.
 This will result in the old and new objects representing the same instant on an implied day.
 This is useful for finding the local time in a different offset.
 For example, if this time represents `],
					[/* inline code block */ 'i', `10:30+02:00`],
					[/* text */ 't', ` and the offset specified is
 `],
					[/* inline code block */ 'i', `+03:00`],
					[/* text */ 't', `, then this method will return `],
					[/* inline code block */ 'i', `11:30+03:00`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 To change the offset without adjusting the local time use `],
					[/* reference */ 'r', `#withOffsetSameLocal(java.time.ZoneOffset)`, `withOffsetSameLocal(java.time.ZoneOffset)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the zone offset to change to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the requested offset, not null`]
			]
		]],
		[/* method */ 'withOffsetSameLocal(java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` with the specified offset ensuring
 that the result has the same local time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns an object with the same `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` and the specified `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', `.
 No calculation is needed or performed.
 For example, if this time represents `],
					[/* inline code block */ 'i', `10:30+02:00`],
					[/* text */ 't', ` and the offset specified is
 `],
					[/* inline code block */ 'i', `+03:00`],
					[/* text */ 't', `, then this method will return `],
					[/* inline code block */ 'i', `10:30+03:00`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 To take into account the difference between the offsets, and adjust the time fields,
 use `],
					[/* reference */ 'r', `#withOffsetSameInstant(java.time.ZoneOffset)`, `withOffsetSameInstant(java.time.ZoneOffset)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the zone offset to change to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the requested offset, not null`]
			]
		]],
		[/* method */ 'withSecond(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` with the second-of-minute altered.
 `],
				[/* block */ 'b', `
 The offset does not affect the calculation and will be the same in the result.
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` based on this time with the requested second, not null`]
			]
		]],
		[/* method */ 'adjustInto(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adjusts the specified temporal object to have the same offset and time
 as this object.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with the offset and time changed to be the same as this.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The adjustment is equivalent to using `],
					[/* reference */ 'r', `.Temporal#with(java.time.temporal.TemporalField,long)`],
					[/* text */ 't', `
 twice, passing `],
					[/* reference */ 'r', `.ChronoField#NANO_OF_DAY`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `.ChronoField#OFFSET_SECONDS`],
					[/* text */ 't', ` as the fields.
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
   temporal = thisOffsetTime.adjustInto(temporal);
   temporal = temporal.with(thisOffsetTime);
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
		[/* method */ 'getOffset()', [
			[/* method description */
				[/* text */ 't', `Gets the zone offset, such as '+01:00'.
 `],
				[/* block */ 'b', `
 This is the offset of the local time from UTC/Greenwich.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the zone offset, not null`]
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
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
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
		[/* method */ 'toEpochSecond(java.time.LocalDate)', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` to the number of seconds since the epoch
 of 1970-01-01T00:00:00Z.
 `],
				[/* block */ 'b', `
 This combines this offset time with the specified date to calculate the
 epoch-second value, which is the number of elapsed seconds from
 1970-01-01T00:00:00Z.
 Instants on the time-line after the epoch are positive, earlier
 are negative.`]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the localdate, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of seconds since the epoch of 1970-01-01T00:00:00Z, may be negative`]
			]
		]],
		[/* method */ 'until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Calculates the amount of time until another time in terms of the specified unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This calculates the amount of time between two `],
					[/* inline code block */ 'i', `OffsetTime`],
					[/* text */ 't', `
 objects in terms of a single `],
					[/* inline code block */ 'i', `TemporalUnit`],
					[/* text */ 't', `.
 The start and end points are `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` and the specified time.
 The result will be negative if the end is before the start.
 For example, the amount in hours between two times can be calculated
 using `],
					[/* inline code block */ 'i', `startTime.until(endTime, HOURS)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `Temporal`],
					[/* text */ 't', ` passed to this method is converted to a
 `],
					[/* inline code block */ 'i', `OffsetTime`],
					[/* text */ 't', ` using `],
					[/* reference */ 'r', `#from(java.time.temporal.TemporalAccessor)`, `from(TemporalAccessor)`],
					[/* text */ 't', `.
 If the offset differs between the two times, then the specified
 end time is normalized to have the same offset as this time.
 `]
				]],
				[/* block */ 'b', `
 The calculation returns a whole number, representing the number of
 complete units between the two times.
 For example, the amount in hours between 11:30Z and 13:29Z will only
 be one hour as it is one minute short of two hours.
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
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`],
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
					[/* text */ 't', `the end time, exclusive, which is converted to an `],
					[/* inline code block */ 'i', `OffsetTime`],
					[/* text */ 't', `, not null`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit to measure the amount in, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the amount cannot be calculated, or the end
  temporal cannot be converted to an `],
					[/* inline code block */ 'i', `OffsetTime`]
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
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains an offset time based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `OffsetTime`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion extracts and combines the `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` and the
 `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` from the temporal object.
 Implementations are permitted to perform optimizations such as accessing
 those fields that are equivalent to the relevant objects.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method matches the signature of the functional interface `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
					[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
					[/* inline code block */ 'i', `OffsetTime::from`],
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
					[/* text */ 't', `if unable to convert to an `],
					[/* inline code block */ 'i', `OffsetTime`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the offset time, not null`]
			]
		]],
		[/* method */ 'now()', [
			[/* method description */
				[/* text */ 't', `Obtains the current time from the system clock in the default time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* reference */ 'r', `.Clock#systemDefaultZone()`],
					[/* text */ 't', ` in the default
 time-zone to obtain the current time.
 The offset will be calculated from the time-zone in the clock.
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
				[/* block */ 'b', `
 This will query the specified clock to obtain the current time.
 The offset will be calculated from the time-zone in the clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
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
					[/* reference */ 'r', `.Clock#system(java.time.ZoneId)`],
					[/* text */ 't', ` to obtain the current time.
 Specifying the time-zone avoids dependence on the default time-zone.
 The offset will be calculated from the specified time-zone.
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
		[/* method */ 'of(int,int,int,int,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` from an hour, minute, second and nanosecond.
 `],
				[/* block */ 'b', `
 This creates an offset time with the four specified fields.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method exists primarily for writing test cases.
 Non test-code will typically use other methods to create an offset time.
 `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` has two additional convenience variants of the
 equivalent factory method taking fewer arguments.
 They are not provided here to reduce the footprint of the API.`]
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
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the zone offset, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the value of any field is out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the offset time, not null`]
			]
		]],
		[/* method */ 'of(java.time.LocalTime,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` from a local time and an offset.`]
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
				[/* text */ 't', `the offset time, not null`]
			]
		]],
		[/* method */ 'ofInstant(java.time.Instant,java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` from an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` and zone ID.
 `],
				[/* block */ 'b', `
 This creates an offset time with the same instant as that specified.
 Finding the offset from UTC/Greenwich is simple as there is only one valid
 offset for each instant.
 `],
				[/* block */ 'b', `
 The date component of the instant is dropped during the conversion.
 This means that the conversion can never fail due to the instant being
 out of the valid range of dates.`]
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
				[/* text */ 't', `the offset time, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', ` from a text string such as `],
				[/* inline code block */ 'i', `10:15:30+01:00`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The string must represent a valid time and is parsed using
 `],
					[/* reference */ 'r', `.DateTimeFormatter#ISO_OFFSET_TIME`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse such as "10:15:30+01:00", not null`]
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
				[/* inline code block */ 'i', `OffsetTime`],
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
				[/* text */ 't', `the parsed offset time, not null`]
			]
		]]
	],
]);
