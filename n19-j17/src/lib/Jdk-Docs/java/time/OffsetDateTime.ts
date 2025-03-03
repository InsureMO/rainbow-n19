import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.OffsetDateTime', [
	[/* class description */
		[/* text */ 't', `A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system,
 such as `],
		[/* inline code block */ 'i', `2007-12-03T10:15:30+01:00`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `OffsetDateTime`],
			[/* text */ 't', ` is an immutable representation of a date-time with an offset.
 This class stores all date and time fields, to a precision of nanoseconds,
 as well as the offset from UTC/Greenwich. For example, the value
 "2nd October 2007 at 13:45:30.123456789 +02:00" can be stored in an `],
			[/* inline code block */ 'i', `OffsetDateTime`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `OffsetDateTime`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `java.time.ZonedDateTime`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.time.Instant`],
			[/* text */ 't', ` all store an instant
 on the time-line to nanosecond precision.
 `],
			[/* inline code block */ 'i', `Instant`],
			[/* text */ 't', ` is the simplest, simply representing the instant.
 `],
			[/* inline code block */ 'i', `OffsetDateTime`],
			[/* text */ 't', ` adds to the instant the offset from UTC/Greenwich, which allows
 the local date-time to be obtained.
 `],
			[/* inline code block */ 'i', `ZonedDateTime`],
			[/* text */ 't', ` adds full time-zone rules.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 It is intended that `],
			[/* inline code block */ 'i', `ZonedDateTime`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `Instant`],
			[/* text */ 't', ` is used to model data
 in simpler applications. This class may be used when modeling date-time concepts in
 more detail, or when communicating to a database or in a network protocol.
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
		[/* field */ 'MIN', [
			[/* field description */
				[/* text */ 't', `The minimum supported `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', `, '-999999999-01-01T00:00:00+18:00'.
 This is the local date-time of midnight at the start of the minimum date
 in the maximum offset (larger offsets are earlier on the time-line).
 This combines `],
				[/* reference */ 'r', `.LocalDateTime#MIN`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `.ZoneOffset#MAX`],
				[/* text */ 't', `.
 This could be used by an application as a "far past" date-time.`]
			],
		]],
		[/* field */ 'MAX', [
			[/* field description */
				[/* text */ 't', `The maximum supported `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', `, '+999999999-12-31T23:59:59.999999999-18:00'.
 This is the local date-time just before midnight at the end of the maximum date
 in the minimum offset (larger negative offsets are later on the time-line).
 This combines `],
				[/* reference */ 'r', `.LocalDateTime#MAX`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `.ZoneOffset#MIN`],
				[/* text */ 't', `.
 This could be used by an application as a "far future" date-time.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'get(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this date-time as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this date-time for the value of the specified field.
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
 values based on this date-time, except `],
					[/* inline code block */ 'i', `NANO_OF_DAY`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `MICRO_OF_DAY`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `EPOCH_DAY`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `PROLEPTIC_MONTH`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `INSTANT_SECONDS`],
					[/* text */ 't', ` which are too
 large to fit in an `],
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
				[/* text */ 't', `Checks if this date-time is equal to another date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based on the local date-time and the offset.
 To compare for the same instant on the time-line, use `],
					[/* reference */ 'r', `#isEqual(java.time.OffsetDateTime)`, `isEqual(java.time.OffsetDateTime)`],
					[/* text */ 't', `.
 Only objects of type `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', ` are compared, other types return false.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other date-time`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this date-time as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, such as `],
				[/* inline code block */ 'i', `2007-12-03T10:15:30+01:00`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The output will be one of the following ISO-8601 formats:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `uuuu-MM-dd'T'HH:mmXXXXX`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `uuuu-MM-dd'T'HH:mm:ssXXXXX`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `uuuu-MM-dd'T'HH:mm:ss.SSSXXXXX`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `uuuu-MM-dd'T'HH:mm:ss.SSSSSSXXXXX`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `uuuu-MM-dd'T'HH:mm:ss.SSSSSSSSSXXXXX`]
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
				[/* text */ 't', `a string representation of this date-time, not null`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this date-time.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'compareTo(java.time.OffsetDateTime)', [
			[/* method description */
				[/* text */ 't', `Compares this date-time to another date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based on the instant then on the local date-time.
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
						[/* inline code block */ 'i', `2008-12-03T10:30+01:00`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `2008-12-03T11:00+01:00`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `2008-12-03T12:00+02:00`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `2008-12-03T11:30+01:00`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `2008-12-03T12:00+01:00`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `2008-12-03T12:30+01:00`]
					]]
				]],
				[/* text */ 't', `
 Values #2 and #3 represent the same instant on the time-line.
 When two values represent the same instant, the local date-time is compared
 to distinguish them. This step is needed to make the ordering
 consistent with `],
				[/* inline code block */ 'i', `equals()`],
				[/* text */ 't', `.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date-time to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the comparator value, negative if less, positive if greater`]
			]
		]],
		[/* method */ 'getLong(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this date-time as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this date-time for the value of the specified field.
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
 values based on this date-time.
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
				[/* text */ 't', `Formats this date-time using the specified formatter.
 `],
				[/* block */ 'b', `
 This date-time will be passed to the formatter to produce a string.`]
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
				[/* text */ 't', `the formatted date-time string, not null`]
			]
		]],
		[/* method */ 'of(java.time.LocalDate,java.time.LocalTime,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` from a date, time and offset.
 `],
				[/* block */ 'b', `
 This creates an offset date-time with the specified local date, time and offset.`]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the local date, not null`]
				]],
				[/* parameter */ 'time', [/* parameter description */
					[/* text */ 't', `the local time, not null`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the zone offset, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the offset date-time, not null`]
			]
		]],
		[/* method */ 'of(java.time.LocalDateTime,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` from a date-time and offset.
 `],
				[/* block */ 'b', `
 This creates an offset date-time with the specified local date-time and offset.`]
			],
			[/* parameters */
				[/* parameter */ 'dateTime', [/* parameter description */
					[/* text */ 't', `the local date-time, not null`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the zone offset, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the offset date-time, not null`]
			]
		]],
		[/* method */ 'of(int,int,int,int,int,int,int,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` from a year, month, day,
 hour, minute, second, nanosecond and offset.
 `],
				[/* block */ 'b', `
 This creates an offset date-time with the seven specified fields.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method exists primarily for writing test cases.
 Non test-code will typically use other methods to create an offset time.
 `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` has five additional convenience variants of the
 equivalent factory method taking fewer arguments.
 They are not provided here to reduce the footprint of the API.`]
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
				]],
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
					[/* text */ 't', `if the value of any field is out of range, or
  if the day-of-month is invalid for the month-year`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the offset date-time, not null`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains an offset date-time based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion will first obtain a `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` from the temporal object.
 It will then try to obtain a `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', `, falling back to an `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` if necessary.
 The result will be the combination of `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` with either
 with `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', `.
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
					[/* inline code block */ 'i', `OffsetDateTime::from`],
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
					[/* inline code block */ 'i', `OffsetDateTime`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the offset date-time, not null`]
			]
		]],
		[/* method */ 'query(java.time.temporal.TemporalQuery)', [
			[/* method description */
				[/* text */ 't', `Queries this date-time using the specified query.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries this date-time using the specified query strategy object.
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
		[/* method */ 'getOffset()', [
			[/* method description */
				[/* text */ 't', `Gets the zone offset, such as '+01:00'.
 `],
				[/* block */ 'b', `
 This is the offset of the local date-time from UTC/Greenwich.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the zone offset, not null`]
			]
		]],
		[/* method */ 'range(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the range of valid values for the specified field.
 `],
				[/* block */ 'b', `
 The range object expresses the minimum and maximum valid values for a field.
 This date-time is used to enhance the accuracy of the returned range.
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
		[/* method */ 'isSupported(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified unit is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if the specified unit can be added to, or subtracted from, this date-time.
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
					]],
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
 This checks if this date-time can be queried for the specified field.
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
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `INSTANT_SECONDS`]
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
				[/* text */ 't', `true if the field is supported on this date-time, false if not`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence,java.time.format.DateTimeFormatter)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` from a text string using a specific formatter.
 `],
				[/* block */ 'b', `
 The text is parsed using the formatter, returning a date-time.`]
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
				[/* text */ 't', `the parsed offset date-time, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` from a text string
 such as `],
				[/* inline code block */ 'i', `2007-12-03T10:15:30+01:00`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The string must represent a valid date-time and is parsed using
 `],
					[/* reference */ 'r', `.DateTimeFormatter#ISO_OFFSET_DATE_TIME`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse such as "2007-12-03T10:15:30+01:00", not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.format.DateTimeParseException', [/* throw description */
					[/* text */ 't', `if the text cannot be parsed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed offset date-time, not null`]
			]
		]],
		[/* method */ 'isEqual(java.time.OffsetDateTime)', [
			[/* method description */
				[/* text */ 't', `Checks if the instant of this date-time is equal to that of the specified date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.OffsetDateTime)`, `compareTo(java.time.OffsetDateTime)`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#equals(java.lang.Object)`, `equals(java.lang.Object)`],
					[/* text */ 't', `
 in that it only compares the instant of the date-time. This is equivalent to using
 `],
					[/* inline code block */ 'i', `dateTime1.toInstant().equals(dateTime2.toInstant());`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date-time to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the instant equals the instant of the specified date-time`]
			]
		]],
		[/* method */ 'toEpochSecond()', [
			[/* method description */
				[/* text */ 't', `Converts this date-time to the number of seconds from the epoch of 1970-01-01T00:00:00Z.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This allows this date-time to be converted to a value of the
 `],
					[/* reference */ 'r', `.ChronoField#INSTANT_SECONDS`],
					[/* text */ 't', ` field. This is primarily
 intended for low-level conversions rather than general application usage.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of seconds from the epoch of 1970-01-01T00:00:00Z`]
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
					[/* reference */ 'r', `#getMonth()`, `getMonth()`],
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
		[/* method */ 'ofInstant(java.time.Instant,java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` from an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` and zone ID.
 `],
				[/* block */ 'b', `
 This creates an offset date-time with the same instant as that specified.
 Finding the offset from UTC/Greenwich is simple as there is only one valid
 offset for each instant.`]
			],
			[/* parameters */
				[/* parameter */ 'instant', [/* parameter description */
					[/* text */ 't', `the instant to create the date-time from, not null`]
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
				[/* text */ 't', `the offset date-time, not null`]
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
		[/* method */ 'toInstant()', [
			[/* method description */
				[/* text */ 't', `Converts this date-time to an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` representing the same point on the
 time-line as this date-time.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` representing the same instant, not null`]
			]
		]],
		[/* method */ 'now(java.time.Clock)', [
			[/* method description */
				[/* text */ 't', `Obtains the current date-time from the specified clock.
 `],
				[/* block */ 'b', `
 This will query the specified clock to obtain the current date-time.
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
				[/* text */ 't', `the current date-time, not null`]
			]
		]],
		[/* method */ 'now(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains the current date-time from the system clock in the specified time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* reference */ 'r', `.Clock#system(java.time.ZoneId)`],
					[/* text */ 't', ` to obtain the current date-time.
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
				[/* text */ 't', `the current date-time using the system clock, not null`]
			]
		]],
		[/* method */ 'now()', [
			[/* method description */
				[/* text */ 't', `Obtains the current date-time from the system clock in the default time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* reference */ 'r', `.Clock#systemDefaultZone()`],
					[/* text */ 't', ` in the default
 time-zone to obtain the current date-time.
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
				[/* text */ 't', `the current date-time using the system clock, not null`]
			]
		]],
		[/* method */ 'adjustInto(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adjusts the specified temporal object to have the same offset, date
 and time as this object.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with the offset, date and time changed to be the same as this.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The adjustment is equivalent to using `],
					[/* reference */ 'r', `.Temporal#with(java.time.temporal.TemporalField,long)`],
					[/* text */ 't', `
 three times, passing `],
					[/* reference */ 'r', `.ChronoField#EPOCH_DAY`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `.ChronoField#NANO_OF_DAY`],
					[/* text */ 't', ` and `],
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
   temporal = thisOffsetDateTime.adjustInto(temporal);
   temporal = temporal.with(thisOffsetDateTime);
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
				[/* text */ 't', `Returns an adjusted copy of this date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', `, based on this one, with the date-time adjusted.
 The adjustment takes place using the specified adjuster strategy object.
 Read the documentation of the adjuster to understand what adjustment will be made.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 A simple adjuster might simply set the one of the fields, such as the year field.
 A more complex adjuster might set the date to the last day of the month.
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

  result = offsetDateTime.with(JULY).with(lastDayOfMonth());
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The classes `],
					[/* reference */ 'r', `java.time.LocalDate`],
					[/* text */ 't', `, `],
					[/* reference */ 'r', `java.time.LocalTime`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.time.ZoneOffset`],
					[/* text */ 't', ` implement
 `],
					[/* inline code block */ 'i', `TemporalAdjuster`],
					[/* text */ 't', `, thus this method can be used to change the date, time or offset:
 `]
				]],
				[/* code block */ 'c', `  result = offsetDateTime.with(date);
  result = offsetDateTime.with(time);
  result = offsetDateTime.with(offset);
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
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` with the adjustment made, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalField,long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date-time with the specified field set to a new value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', `, based on this one, with the value
 for the specified field changed.
 This can be used to change any supported field, such as the year, month or day-of-month.
 If it is not possible to set the value, because the field is not supported or for
 some other reason, an exception is thrown.
 `]
				]],
				[/* block */ 'b', `
 In some cases, changing the specified field can cause the resulting date-time to become invalid,
 such as changing the month from 31st January to February would make the day-of-month invalid.
 In cases like this, the field is responsible for resolving the date. Typically it will choose
 the previous valid date, which would be the last valid day of February in this example.
 `],
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
					[/* inline code block */ 'i', `INSTANT_SECONDS`],
					[/* text */ 't', ` field will return a date-time with the specified instant.
 The offset and nano-of-second are unchanged.
 If the new instant value is outside the valid range then a `],
					[/* inline code block */ 'i', `DateTimeException`],
					[/* text */ 't', ` will be thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `OFFSET_SECONDS`],
					[/* text */ 't', ` field will return a date-time with the specified offset.
 The local date-time is unaltered. If the new offset value is outside the valid range
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
					[/* reference */ 'r', `.LocalDateTime#with(java.time.temporal.TemporalField,long)`],
					[/* text */ 't', `.
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
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` with the specified field set, not null`]
			]
		]],
		[/* method */ 'plus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date-time with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', `, based on this one, with the specified amount added.
 The amount is typically `],
					[/* reference */ 'r', `java.time.Period`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `java.time.Duration`],
					[/* text */ 't', ` but may be
 any other type implementing the `],
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
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the addition made, not null`]
			]
		]],
		[/* method */ 'plus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date-time with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetDateTime`],
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
					[/* reference */ 'r', `.LocalDateTime#plus(long,java.time.temporal.TemporalUnit)`],
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
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the specified amount added, not null`]
			]
		]],
		[/* method */ 'until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Calculates the amount of time until another date-time in terms of the specified unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This calculates the amount of time between two `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', `
 objects in terms of a single `],
					[/* inline code block */ 'i', `TemporalUnit`],
					[/* text */ 't', `.
 The start and end points are `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` and the specified date-time.
 The result will be negative if the end is before the start.
 For example, the amount in days between two date-times can be calculated
 using `],
					[/* inline code block */ 'i', `startDateTime.until(endDateTime, DAYS)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `Temporal`],
					[/* text */ 't', ` passed to this method is converted to a
 `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', ` using `],
					[/* reference */ 'r', `#from(java.time.temporal.TemporalAccessor)`, `from(TemporalAccessor)`],
					[/* text */ 't', `.
 If the offset differs between the two date-times, the specified
 end date-time is normalized to have the same offset as this date-time.
 `]
				]],
				[/* block */ 'b', `
 The calculation returns a whole number, representing the number of
 complete units between the two date-times.
 For example, the amount in months between 2012-06-15T00:00Z and 2012-08-14T23:59Z
 will only be one month as it is one minute short of two months.
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
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `DAYS`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `WEEKS`],
					[/* text */ 't', `, `],
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
					[/* text */ 't', `the end date, exclusive, which is converted to an `],
					[/* inline code block */ 'i', `OffsetDateTime`],
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
					[/* inline code block */ 'i', `OffsetDateTime`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the amount of time between this date-time and the end date-time`]
			]
		]],
		[/* method */ 'plusNanos(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the specified number of nanoseconds added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'nanos', [/* parameter description */
					[/* text */ 't', `the nanos to add, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the unit cannot be added to this type`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the nanoseconds added, not null`]
			]
		]],
		[/* method */ 'plusSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the specified number of seconds added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'seconds', [/* parameter description */
					[/* text */ 't', `the seconds to add, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the seconds added, not null`]
			]
		]],
		[/* method */ 'plusDays(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this OffsetDateTime with the specified number of days added.
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
				[/* parameter */ 'days', [/* parameter description */
					[/* text */ 't', `the days to add, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the days added, not null`]
			]
		]],
		[/* method */ 'plusHours(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the specified number of hours added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'hours', [/* parameter description */
					[/* text */ 't', `the hours to add, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the hours added, not null`]
			]
		]],
		[/* method */ 'plusMinutes(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the specified number of minutes added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'minutes', [/* parameter description */
					[/* text */ 't', `the minutes to add, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the minutes added, not null`]
			]
		]],
		[/* method */ 'minus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date-time with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', `, based on this one, with the specified amount subtracted.
 The amount is typically `],
					[/* reference */ 'r', `java.time.Period`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `java.time.Duration`],
					[/* text */ 't', ` but may be
 any other type implementing the `],
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
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the subtraction made, not null`]
			]
		]],
		[/* method */ 'minus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date-time with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetDateTime`],
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
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the specified amount subtracted, not null`]
			]
		]],
		[/* method */ 'minusDays(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
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
				[/* parameter */ 'days', [/* parameter description */
					[/* text */ 't', `the days to subtract, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the days subtracted, not null`]
			]
		]],
		[/* method */ 'minusHours(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the specified number of hours subtracted.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'hours', [/* parameter description */
					[/* text */ 't', `the hours to subtract, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the hours subtracted, not null`]
			]
		]],
		[/* method */ 'minusMinutes(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the specified number of minutes subtracted.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'minutes', [/* parameter description */
					[/* text */ 't', `the minutes to subtract, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the minutes subtracted, not null`]
			]
		]],
		[/* method */ 'minusSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the specified number of seconds subtracted.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'seconds', [/* parameter description */
					[/* text */ 't', `the seconds to subtract, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the seconds subtracted, not null`]
			]
		]],
		[/* method */ 'minusNanos(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the specified number of nanoseconds subtracted.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'nanos', [/* parameter description */
					[/* text */ 't', `the nanos to subtract, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the nanoseconds subtracted, not null`]
			]
		]],
		[/* method */ 'truncatedTo(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the time truncated.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Truncation returns a copy of the original date-time with fields
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
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the time truncated, not null`]
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
					[/* reference */ 'r', `.DayOfWeek#getValue()`],
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
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the day-of-year altered.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The time and offset do not affect the calculation and will be the same in the result.
 If the resulting `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', ` is invalid, an exception is thrown.
 `]
				]],
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date with the requested day, not null`]
			]
		]],
		[/* method */ 'minusYears(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
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
				[/* parameter */ 'years', [/* parameter description */
					[/* text */ 't', `the years to subtract, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the years subtracted, not null`]
			]
		]],
		[/* method */ 'plusMonths(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
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
				[/* parameter */ 'months', [/* parameter description */
					[/* text */ 't', `the months to add, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the months added, not null`]
			]
		]],
		[/* method */ 'plusWeeks(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this OffsetDateTime with the specified number of weeks added.
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
				[/* parameter */ 'weeks', [/* parameter description */
					[/* text */ 't', `the weeks to add, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the weeks added, not null`]
			]
		]],
		[/* method */ 'plusYears(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
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
				[/* parameter */ 'years', [/* parameter description */
					[/* text */ 't', `the years to add, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the years added, not null`]
			]
		]],
		[/* method */ 'minusMonths(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
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
				[/* parameter */ 'months', [/* parameter description */
					[/* text */ 't', `the months to subtract, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the months subtracted, not null`]
			]
		]],
		[/* method */ 'isAfter(java.time.OffsetDateTime)', [
			[/* method description */
				[/* text */ 't', `Checks if the instant of this date-time is after that of the specified date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.OffsetDateTime)`, `compareTo(java.time.OffsetDateTime)`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#equals(java.lang.Object)`, `equals(java.lang.Object)`],
					[/* text */ 't', ` in that it
 only compares the instant of the date-time. This is equivalent to using
 `],
					[/* inline code block */ 'i', `dateTime1.toInstant().isAfter(dateTime2.toInstant());`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date-time to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is after the instant of the specified date-time`]
			]
		]],
		[/* method */ 'isBefore(java.time.OffsetDateTime)', [
			[/* method description */
				[/* text */ 't', `Checks if the instant of this date-time is before that of the specified date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.OffsetDateTime)`, `compareTo(java.time.OffsetDateTime)`],
					[/* text */ 't', ` in that it
 only compares the instant of the date-time. This is equivalent to using
 `],
					[/* inline code block */ 'i', `dateTime1.toInstant().isBefore(dateTime2.toInstant());`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date-time to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is before the instant of the specified date-time`]
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
					[/* reference */ 'r', `.Month#getValue()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the month-of-year, not null`]
			]
		]],
		[/* method */ 'toLocalDate()', [
			[/* method description */
				[/* text */ 't', `Gets the `],
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` part of this date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` with the same year, month and day
 as this date-time.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the date part of this date-time, not null`]
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
		[/* method */ 'timeLineOrder()', [
			[/* method description */
				[/* text */ 't', `Gets a comparator that compares two `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` instances
 based solely on the instant.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.OffsetDateTime)`, `compareTo(java.time.OffsetDateTime)`],
					[/* text */ 't', ` in that it
 only compares the underlying instant.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a comparator that compares in time-line order`]
			]
		]],
		[/* method */ 'toLocalDateTime()', [
			[/* method description */
				[/* text */ 't', `Gets the `],
				[/* inline code block */ 'i', `LocalDateTime`],
				[/* text */ 't', ` part of this date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` with the same year, month, day and time
 as this date-time.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the local date-time part of this date-time, not null`]
			]
		]],
		[/* method */ 'withYear(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the year altered.
 `],
				[/* block */ 'b', `
 The time and offset do not affect the calculation and will be the same in the result.
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the requested year, not null`]
			]
		]],
		[/* method */ 'withMonth(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the month-of-year altered.
 `],
				[/* block */ 'b', `
 The time and offset do not affect the calculation and will be the same in the result.
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the requested month, not null`]
			]
		]],
		[/* method */ 'withDayOfMonth(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the day-of-month altered.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the resulting `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', ` is invalid, an exception is thrown.
 The time and offset do not affect the calculation and will be the same in the result.
 `]
				]],
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the requested day, not null`]
			]
		]],
		[/* method */ 'withHour(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the hour-of-day altered.
 `],
				[/* block */ 'b', `
 The date and offset do not affect the calculation and will be the same in the result.
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
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the requested hour, not null`]
			]
		]],
		[/* method */ 'withMinute(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the minute-of-hour altered.
 `],
				[/* block */ 'b', `
 The date and offset do not affect the calculation and will be the same in the result.
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
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the requested minute, not null`]
			]
		]],
		[/* method */ 'withSecond(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the second-of-minute altered.
 `],
				[/* block */ 'b', `
 The date and offset do not affect the calculation and will be the same in the result.
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
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the requested second, not null`]
			]
		]],
		[/* method */ 'withNano(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the nano-of-second altered.
 `],
				[/* block */ 'b', `
 The date and offset do not affect the calculation and will be the same in the result.
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
					[/* text */ 't', `if the nano value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the requested nanosecond, not null`]
			]
		]],
		[/* method */ 'minusWeeks(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
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
				[/* parameter */ 'weeks', [/* parameter description */
					[/* text */ 't', `the weeks to subtract, may be negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the weeks subtracted, not null`]
			]
		]],
		[/* method */ 'toZonedDateTime()', [
			[/* method description */
				[/* text */ 't', `Converts this date-time to a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` using the offset as the zone ID.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This creates the simplest possible `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` using the offset
 as the zone ID.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 To control the time-zone used, see `],
					[/* reference */ 'r', `#atZoneSameInstant(java.time.ZoneId)`, `atZoneSameInstant(ZoneId)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `#atZoneSimilarLocal(java.time.ZoneId)`, `atZoneSimilarLocal(ZoneId)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a zoned date-time representing the same local date-time and offset, not null`]
			]
		]],
		[/* method */ 'withOffsetSameInstant(java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the specified offset ensuring
 that the result is at the same instant.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns an object with the specified `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` and a `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', `
 adjusted by the difference between the two offsets.
 This will result in the old and new objects representing the same instant.
 This is useful for finding the local time in a different offset.
 For example, if this time represents `],
					[/* inline code block */ 'i', `2007-12-03T10:30+02:00`],
					[/* text */ 't', ` and the offset specified is
 `],
					[/* inline code block */ 'i', `+03:00`],
					[/* text */ 't', `, then this method will return `],
					[/* inline code block */ 'i', `2007-12-03T11:30+03:00`],
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
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the requested offset, not null`]
			]
		]],
		[/* method */ 'withOffsetSameLocal(java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` with the specified offset ensuring
 that the result has the same local date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns an object with the same `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` and the specified `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', `.
 No calculation is needed or performed.
 For example, if this time represents `],
					[/* inline code block */ 'i', `2007-12-03T10:30+02:00`],
					[/* text */ 't', ` and the offset specified is
 `],
					[/* inline code block */ 'i', `+03:00`],
					[/* text */ 't', `, then this method will return `],
					[/* inline code block */ 'i', `2007-12-03T10:30+03:00`],
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
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', ` based on this date-time with the requested offset, not null`]
			]
		]],
		[/* method */ 'atZoneSameInstant(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Combines this date-time with a time-zone to create a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', `
 ensuring that the result has the same instant.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` formed from this date-time and the specified time-zone.
 This conversion will ignore the visible local date-time and use the underlying instant instead.
 This avoids any problems with local time-line gaps or overlaps.
 The result might have different values for fields such as hour, minute an even day.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 To attempt to retain the values of the fields, use `],
					[/* reference */ 'r', `#atZoneSimilarLocal(java.time.ZoneId)`, `atZoneSimilarLocal(ZoneId)`],
					[/* text */ 't', `.
 To use the offset as the zone ID, use `],
					[/* reference */ 'r', `#toZonedDateTime()`, `toZonedDateTime()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the zoned date-time formed from this date-time, not null`]
			]
		]],
		[/* method */ 'atZoneSimilarLocal(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Combines this date-time with a time-zone to create a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', `
 trying to keep the same local date and time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` formed from this date-time and the specified time-zone.
 Where possible, the result will have the same local date-time as this object.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Time-zone rules, such as daylight savings, mean that not every time on the
 local time-line exists. If the local date-time is in a gap or overlap according to
 the rules then a resolver is used to determine the resultant local time and offset.
 This method uses `],
					[/* reference */ 'r', `.ZonedDateTime#ofLocal(java.time.LocalDateTime,java.time.ZoneId,java.time.ZoneOffset)`],
					[/* text */ 't', `
 to retain the offset from this instance if possible.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Finer control over gaps and overlaps is available in two ways.
 If you simply want to use the later offset at overlaps then call
 `],
					[/* reference */ 'r', `.ZonedDateTime#withLaterOffsetAtOverlap()`],
					[/* text */ 't', ` immediately after this method.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 To create a zoned date-time at the same instant irrespective of the local time-line,
 use `],
					[/* reference */ 'r', `#atZoneSameInstant(java.time.ZoneId)`, `atZoneSameInstant(ZoneId)`],
					[/* text */ 't', `.
 To use the offset as the zone ID, use `],
					[/* reference */ 'r', `#toZonedDateTime()`, `toZonedDateTime()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the zoned date-time formed from this date and the earliest valid time for the zone, not null`]
			]
		]],
		[/* method */ 'toOffsetTime()', [
			[/* method description */
				[/* text */ 't', `Converts this date-time to an `],
				[/* inline code block */ 'i', `OffsetTime`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This returns an offset time with the same local time and offset.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an OffsetTime representing the time and offset, not null`]
			]
		]]
	],
]);
