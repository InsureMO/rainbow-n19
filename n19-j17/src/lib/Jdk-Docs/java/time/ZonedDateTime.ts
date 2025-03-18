import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.ZonedDateTime', [
	[/* class description */
		[/* text */ 't', `A date-time with a time-zone in the ISO-8601 calendar system,
 such as `],
		[/* inline code block */ 'i', `2007-12-03T10:15:30+01:00 Europe/Paris`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* inline code block */ 'i', `ZonedDateTime`],
			[/* text */ 't', ` is an immutable representation of a date-time with a time-zone.
 This class stores all date and time fields, to a precision of nanoseconds,
 and a time-zone, with a zone offset used to handle ambiguous local date-times.
 For example, the value
 "2nd October 2007 at 13:45.30.123456789 +02:00 in the Europe/Paris time-zone"
 can be stored in a `],
			[/* inline code block */ 'i', `ZonedDateTime`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 This class handles conversion from the local time-line of `],
			[/* inline code block */ 'i', `LocalDateTime`],
			[/* text */ 't', `
 to the instant time-line of `],
			[/* inline code block */ 'i', `Instant`],
			[/* text */ 't', `.
 The difference between the two time-lines is the offset from UTC/Greenwich,
 represented by a `],
			[/* inline code block */ 'i', `ZoneOffset`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Converting between the two time-lines involves calculating the offset using the
 `],
			[/* reference */ 'r', `java.time.zone.ZoneRules`, `rules`],
			[/* text */ 't', ` accessed from the `],
			[/* inline code block */ 'i', `ZoneId`],
			[/* text */ 't', `.
 Obtaining the offset for an instant is simple, as there is exactly one valid
 offset for each instant. By contrast, obtaining the offset for a local date-time
 is not straightforward. There are three cases:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', `Normal, with one valid offset. For the vast majority of the year, the normal
  case applies, where there is a single valid offset for the local date-time.`],
			[/* block */ 'b', `Gap, with zero valid offsets. This is when clocks jump forward typically
  due to the spring daylight savings change from "winter" to "summer".
  In a gap there are local date-time values with no valid offset.`],
			[/* block */ 'b', `Overlap, with two valid offsets. This is when clocks are set back typically
  due to the autumn daylight savings change from "summer" to "winter".
  In an overlap there are local date-time values with two valid offsets.`]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 Any method that converts directly or implicitly from a local date-time to an
 instant by obtaining the offset has the potential to be complicated.
 `],
		[/* block */ 'b', `
 For Gaps, the general strategy is that if the local date-time falls in the
 middle of a Gap, then the resulting zoned date-time will have a local date-time
 shifted forwards by the length of the Gap, resulting in a date-time in the later
 offset, typically "summer" time.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 For Overlaps, the general strategy is that if the local date-time falls in the
 middle of an Overlap, then the previous offset will be retained. If there is no
 previous offset, or the previous offset is invalid, then the earlier offset is
 used, typically "summer" time.. Two additional methods,
 `],
			[/* reference */ 'r', `#withEarlierOffsetAtOverlap()`, `withEarlierOffsetAtOverlap()`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#withLaterOffsetAtOverlap()`, `withLaterOffsetAtOverlap()`],
			[/* text */ 't', `,
 help manage the case of an overlap.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 In terms of design, this class should be viewed primarily as the combination
 of a `],
			[/* inline code block */ 'i', `LocalDateTime`],
			[/* text */ 't', ` and a `],
			[/* inline code block */ 'i', `ZoneId`],
			[/* text */ 't', `. The `],
			[/* inline code block */ 'i', `ZoneOffset`],
			[/* text */ 't', ` is
 a vital, but secondary, piece of information, used to ensure that the class
 represents an instant, especially during a daylight savings overlap.
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
	/* fields */,
	/* constructors */,
	[/* methods */
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
				[/* text */ 't', `Checks if this date-time is equal to another date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based on the offset date-time and the zone.
 Only objects of type `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` are compared, other types return false.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other date-time`]
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
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
					[/* text */ 't', ` then the query is implemented here.
 The supported fields are:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `NANO_OF_SECOND`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `NANO_OF_DAY`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MICRO_OF_SECOND`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MICRO_OF_DAY`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLI_OF_SECOND`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLI_OF_DAY`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `SECOND_OF_MINUTE`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `SECOND_OF_DAY`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MINUTE_OF_HOUR`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MINUTE_OF_DAY`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HOUR_OF_AMPM`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `CLOCK_HOUR_OF_AMPM`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HOUR_OF_DAY`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `CLOCK_HOUR_OF_DAY`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `AMPM_OF_DAY`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `DAY_OF_WEEK`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_MONTH`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_YEAR`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `DAY_OF_MONTH`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `DAY_OF_YEAR`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `EPOCH_DAY`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ALIGNED_WEEK_OF_MONTH`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `ALIGNED_WEEK_OF_YEAR`],
						[/* text */ 't', `
 `]
					]],
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
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `INSTANT_SECONDS`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `OFFSET_SECONDS`],
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
				[/* text */ 't', `true if the field is supported on this date-time, false if not`]
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
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`, `ChronoUnit`],
					[/* text */ 't', ` then the query is implemented here.
 The supported units are:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `NANOS`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MICROS`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLIS`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `SECONDS`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MINUTES`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HOURS`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HALF_DAYS`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `DAYS`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `WEEKS`],
						[/* text */ 't', `
 `]
					]],
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
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
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
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the day-of-month, from 1 to 31`]
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
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the day-of-year, from 1 to 365, or 366 in a leap year`]
			]
		]],
		[/* method */ 'getHour()', [
			[/* method description */
				[/* text */ 't', `Gets the hour-of-day field.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the hour-of-day, from 0 to 23`]
			]
		]],
		[/* method */ 'getMinute()', [
			[/* method description */
				[/* text */ 't', `Gets the minute-of-hour field.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the minute-of-hour, from 0 to 59`]
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
		[/* method */ 'getNano()', [
			[/* method description */
				[/* text */ 't', `Gets the nano-of-second field.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the nano-of-second, from 0 to 999,999,999`]
			]
		]],
		[/* method */ 'getSecond()', [
			[/* method description */
				[/* text */ 't', `Gets the second-of-minute field.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the second-of-minute, from 0 to 59`]
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
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the year, from MIN_YEAR to MAX_YEAR`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this date-time.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
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
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this date-time as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, such as
 `],
				[/* inline code block */ 'i', `2007-12-03T10:15:30+01:00[Europe/Paris]`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The format consists of the `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` followed by the `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', `.
 If the `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', ` is not the same as the offset, then the ID is output.
 The output is compatible with ISO-8601 if the offset and ID are the same.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a string representation of this date-time, not null`]
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
					[/* reference */ 'r', `enum class in java.time.DayOfWeek`, `DayOfWeek`],
					[/* text */ 't', ` for the day-of-week.
 This avoids confusion as to what `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` values mean.
 If you need access to the primitive `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` value then the enum
 provides the `],
					[/* reference */ 'r', `java.time.DayOfWeek#getValue()`, `int value`],
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
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the day-of-week, not null`]
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
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the date part of this date-time, not null`]
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
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the local date-time part of this date-time, not null`]
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
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the time part of this date-time, not null`]
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
		[/* method */ 'toOffsetDateTime()', [
			[/* method description */
				[/* text */ 't', `Converts this date-time to an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This creates an offset date-time using the local date-time and offset.
 The zone ID is ignored.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an offset date-time representing the same local date-time and offset, not null`]
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
				[/* text */ 't', `Returns a copy of this date-time with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, based on this one, with the specified amount subtracted.
 The amount is typically `],
					[/* reference */ 'r', `java.time.Period`, `Period`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `java.time.Duration`, `Duration`],
					[/* text */ 't', ` but may be
 any other type implementing the `],
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
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the subtraction made, not null`]
			]
		]],
		[/* method */ 'minus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date-time with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, based on this one, with the amount
 in terms of the unit subtracted. If it is not possible to subtract the amount,
 because the unit is not supported or for some other reason, an exception is thrown.
 `]
				]],
				[/* block */ 'b', `
 The calculation for date and time units differ.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Date units operate on the local time-line.
 The period is first subtracted from the local date-time, then converted back
 to a zoned date-time using the zone ID.
 The conversion uses `],
					[/* reference */ 'r', `#ofLocal(java.time.LocalDateTime,java.time.ZoneId,java.time.ZoneOffset)`, `ofLocal(LocalDateTime, ZoneId, ZoneOffset)`],
					[/* text */ 't', `
 with the offset before the subtraction.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Time units operate on the instant time-line.
 The period is first subtracted from the local date-time, then converted back to
 a zoned date-time using the zone ID.
 The conversion uses `],
					[/* reference */ 'r', `#ofInstant(java.time.LocalDateTime,java.time.ZoneOffset,java.time.ZoneId)`, `ofInstant(LocalDateTime, ZoneOffset, ZoneId)`],
					[/* text */ 't', `
 with the offset before the subtraction.
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
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the specified amount subtracted, not null`]
			]
		]],
		[/* method */ 'minusDays(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of days subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#minusDays(long)`, `subtracting days`],
					[/* text */ 't', ` to the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
 `]
				]],
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the days subtracted, not null`]
			]
		]],
		[/* method */ 'minusHours(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of hours subtracted.
 `],
				[/* block */ 'b', `
 This operates on the instant time-line, such that subtracting one hour will
 always be a duration of one hour earlier.
 This may cause the local date-time to change by an amount other than one hour.
 Note that this is a different approach to that used by days, months and years,
 thus subtracting one day is not the same as adding 24 hours.
 `],
				[/* block */ 'b', `
 For example, consider a time-zone, such as 'Europe/Paris', where the
 Autumn DST cutover means that the local times 02:00 to 02:59 occur twice
 changing from offset +02:00 in summer to +01:00 in winter.
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `Subtracting one hour from 03:30+01:00 will result in 02:30+01:00
     (both in winter time)
 `],
					[/* block */ 'b', `Subtracting one hour from 02:30+01:00 will result in 02:30+02:00
     (moving from winter to summer time)
 `],
					[/* block */ 'b', `Subtracting one hour from 02:30+02:00 will result in 01:30+02:00
     (both in summer time)
 `],
					[/* block */ 'b', `Subtracting three hours from 03:30+01:00 will result in 01:30+02:00
     (moving from winter to summer time)
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the hours subtracted, not null`]
			]
		]],
		[/* method */ 'minusMinutes(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of minutes subtracted.
 `],
				[/* block */ 'b', `
 This operates on the instant time-line, such that subtracting one minute will
 always be a duration of one minute earlier.
 This may cause the local date-time to change by an amount other than one minute.
 Note that this is a different approach to that used by days, months and years.
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the minutes subtracted, not null`]
			]
		]],
		[/* method */ 'minusMonths(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of months subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#minusMonths(long)`, `subtracting months`],
					[/* text */ 't', ` to the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
 `]
				]],
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the months subtracted, not null`]
			]
		]],
		[/* method */ 'minusNanos(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of nanoseconds subtracted.
 `],
				[/* block */ 'b', `
 This operates on the instant time-line, such that subtracting one nano will
 always be a duration of one nano earlier.
 This may cause the local date-time to change by an amount other than one nano.
 Note that this is a different approach to that used by days, months and years.
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the nanoseconds subtracted, not null`]
			]
		]],
		[/* method */ 'minusSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of seconds subtracted.
 `],
				[/* block */ 'b', `
 This operates on the instant time-line, such that subtracting one second will
 always be a duration of one second earlier.
 This may cause the local date-time to change by an amount other than one second.
 Note that this is a different approach to that used by days, months and years.
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the seconds subtracted, not null`]
			]
		]],
		[/* method */ 'minusWeeks(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of weeks subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#minusWeeks(long)`, `subtracting weeks`],
					[/* text */ 't', ` to the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
 `]
				]],
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the weeks subtracted, not null`]
			]
		]],
		[/* method */ 'minusYears(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of years subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#minusYears(long)`, `subtracting years`],
					[/* text */ 't', ` to the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
 `]
				]],
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the years subtracted, not null`]
			]
		]],
		[/* method */ 'plus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date-time with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, based on this one, with the specified amount added.
 The amount is typically `],
					[/* reference */ 'r', `java.time.Period`, `Period`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `java.time.Duration`, `Duration`],
					[/* text */ 't', ` but may be
 any other type implementing the `],
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
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the addition made, not null`]
			]
		]],
		[/* method */ 'plus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date-time with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
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
 The zone is not part of the calculation and will be unchanged in the result.
 The calculation for date and time units differ.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Date units operate on the local time-line.
 The period is first added to the local date-time, then converted back
 to a zoned date-time using the zone ID.
 The conversion uses `],
					[/* reference */ 'r', `#ofLocal(java.time.LocalDateTime,java.time.ZoneId,java.time.ZoneOffset)`, `ofLocal(LocalDateTime, ZoneId, ZoneOffset)`],
					[/* text */ 't', `
 with the offset before the addition.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Time units operate on the instant time-line.
 The period is first added to the local date-time, then converted back to
 a zoned date-time using the zone ID.
 The conversion uses `],
					[/* reference */ 'r', `#ofInstant(java.time.LocalDateTime,java.time.ZoneOffset,java.time.ZoneId)`, `ofInstant(LocalDateTime, ZoneOffset, ZoneId)`],
					[/* text */ 't', `
 with the offset before the addition.
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
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the specified amount added, not null`]
			]
		]],
		[/* method */ 'plusDays(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of days added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#plusDays(long)`, `adding days`],
					[/* text */ 't', ` to the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
 `]
				]],
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the days added, not null`]
			]
		]],
		[/* method */ 'plusHours(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of hours added.
 `],
				[/* block */ 'b', `
 This operates on the instant time-line, such that adding one hour will
 always be a duration of one hour later.
 This may cause the local date-time to change by an amount other than one hour.
 Note that this is a different approach to that used by days, months and years,
 thus adding one day is not the same as adding 24 hours.
 `],
				[/* block */ 'b', `
 For example, consider a time-zone, such as 'Europe/Paris', where the
 Autumn DST cutover means that the local times 02:00 to 02:59 occur twice
 changing from offset +02:00 in summer to +01:00 in winter.
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `Adding one hour to 01:30+02:00 will result in 02:30+02:00
     (both in summer time)
 `],
					[/* block */ 'b', `Adding one hour to 02:30+02:00 will result in 02:30+01:00
     (moving from summer to winter time)
 `],
					[/* block */ 'b', `Adding one hour to 02:30+01:00 will result in 03:30+01:00
     (both in winter time)
 `],
					[/* block */ 'b', `Adding three hours to 01:30+02:00 will result in 03:30+01:00
     (moving from summer to winter time)
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the hours added, not null`]
			]
		]],
		[/* method */ 'plusMinutes(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of minutes added.
 `],
				[/* block */ 'b', `
 This operates on the instant time-line, such that adding one minute will
 always be a duration of one minute later.
 This may cause the local date-time to change by an amount other than one minute.
 Note that this is a different approach to that used by days, months and years.
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the minutes added, not null`]
			]
		]],
		[/* method */ 'plusMonths(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of months added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#plusMonths(long)`, `adding months`],
					[/* text */ 't', ` to the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
 `]
				]],
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the months added, not null`]
			]
		]],
		[/* method */ 'plusNanos(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of nanoseconds added.
 `],
				[/* block */ 'b', `
 This operates on the instant time-line, such that adding one nano will
 always be a duration of one nano later.
 This may cause the local date-time to change by an amount other than one nano.
 Note that this is a different approach to that used by days, months and years.
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
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the nanoseconds added, not null`]
			]
		]],
		[/* method */ 'plusSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of seconds added.
 `],
				[/* block */ 'b', `
 This operates on the instant time-line, such that adding one second will
 always be a duration of one second later.
 This may cause the local date-time to change by an amount other than one second.
 Note that this is a different approach to that used by days, months and years.
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the seconds added, not null`]
			]
		]],
		[/* method */ 'plusWeeks(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of weeks added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#plusWeeks(long)`, `adding weeks`],
					[/* text */ 't', ` to the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
 `]
				]],
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the weeks added, not null`]
			]
		]],
		[/* method */ 'plusYears(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the specified number of years added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#plusYears(long)`, `adding years`],
					[/* text */ 't', ` to the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
 `]
				]],
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the years added, not null`]
			]
		]],
		[/* method */ 'truncatedTo(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the time truncated.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Truncation returns a copy of the original date-time with fields
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
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#truncatedTo(java.time.temporal.TemporalUnit)`, `truncating`],
					[/* text */ 't', `
 the underlying local date-time. This is then converted back to a
 `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
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
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the time truncated, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalAdjuster)', [
			[/* method description */
				[/* text */ 't', `Returns an adjusted copy of this date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
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
					[/* reference */ 'r', `java.time.temporal.TemporalAdjusters`, `TemporalAdjusters`],
					[/* text */ 't', `.
 These include finding the "last day of the month" and "next Wednesday".
 Key date-time classes also implement the `],
					[/* inline code block */ 'i', `TemporalAdjuster`],
					[/* text */ 't', ` interface,
 such as `],
					[/* reference */ 'r', `enum class in java.time.Month`, `Month`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.time.MonthDay`, `MonthDay`],
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

  result = zonedDateTime.with(JULY).with(lastDayOfMonth());
 `],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The classes `],
					[/* reference */ 'r', `java.time.LocalDate`, `LocalDate`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.time.LocalTime`, `LocalTime`],
					[/* text */ 't', ` implement `],
					[/* inline code block */ 'i', `TemporalAdjuster`],
					[/* text */ 't', `,
 thus this method can be used to change the date, time or offset:
 `]
				]],
				[/* code block */ 'c', `  result = zonedDateTime.with(date);
  result = zonedDateTime.with(time);
 `],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* reference */ 'r', `java.time.ZoneOffset`, `ZoneOffset`],
					[/* text */ 't', ` also implements `],
					[/* inline code block */ 'i', `TemporalAdjuster`],
					[/* text */ 't', ` however using it
 as an argument typically has no effect. The offset of a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` is
 controlled primarily by the time-zone. As such, changing the offset does not generally
 make sense, because there is only one valid offset for the local date-time and zone.
 If the zoned date-time is in a daylight savings overlap, then the offset is used
 to switch between the two valid offsets. In all other cases, the offset is ignored.
 `]
				]],
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
				[/* inline code block */ 'i', `ZonedDateTime`],
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
 This returns a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
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
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
					[/* text */ 't', ` then the adjustment is implemented here.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `INSTANT_SECONDS`],
					[/* text */ 't', ` field will return a date-time with the specified instant.
 The zone and nano-of-second are unchanged.
 The result will have an offset derived from the new instant and original zone.
 If the new instant value is outside the valid range then a `],
					[/* inline code block */ 'i', `DateTimeException`],
					[/* text */ 't', ` will be thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `OFFSET_SECONDS`],
					[/* text */ 't', ` field will typically be ignored.
 The offset of a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` is controlled primarily by the time-zone.
 As such, changing the offset does not generally make sense, because there is only
 one valid offset for the local date-time and zone.
 If the zoned date-time is in a daylight savings overlap, then the offset is used
 to switch between the two valid offsets. In all other cases, the offset is ignored.
 If the new offset value is outside the valid range then a `],
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
					[/* reference */ 'r', `java.time.LocalDateTime#with(java.time.temporal.TemporalField,long)`, `LocalDateTime`],
					[/* text */ 't', `.
 The zone is not part of the calculation and will be unchanged.
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
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
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` with the specified field set, not null`]
			]
		]],
		[/* method */ 'withDayOfMonth(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the day-of-month altered.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#withDayOfMonth(int)`, `changing the day-of-month`],
					[/* text */ 't', ` of the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the requested day, not null`]
			]
		]],
		[/* method */ 'withDayOfYear(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the day-of-year altered.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#withDayOfYear(int)`, `changing the day-of-year`],
					[/* text */ 't', ` of the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date with the requested day, not null`]
			]
		]],
		[/* method */ 'withEarlierOffsetAtOverlap()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date-time changing the zone offset to the
 earlier of the two valid offsets at a local time-line overlap.
 `],
				[/* block */ 'b', `
 This method only has any effect when the local time-line overlaps, such as
 at an autumn daylight savings cutover. In this scenario, there are two
 valid offsets for the local date-time. Calling this method will return
 a zoned date-time with the earlier of the two selected.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this method is called when it is not an overlap, `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', `
 is returned.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the earlier offset, not null`]
			]
		]],
		[/* method */ 'withFixedOffsetZone()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date-time with the zone ID set to the offset.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a zoned date-time where the zone ID is the same as `],
					[/* reference */ 'r', `#getOffset()`, `getOffset()`],
					[/* text */ 't', `.
 The local date-time, offset and instant of the result will be the same as in this date-time.
 `]
				]],
				[/* block */ 'b', `
 Setting the date-time to a fixed single offset means that any future
 calculations, such as addition or subtraction, have no complex edge cases
 due to time-zone rules.
 This might also be useful when sending a zoned date-time across a network,
 as most protocols, such as ISO-8601, only handle offsets,
 and not region-based zone IDs.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is equivalent to `],
					[/* inline code block */ 'i', `ZonedDateTime.of(zdt.toLocalDateTime(), zdt.getOffset())`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the zone ID set to the offset, not null`]
			]
		]],
		[/* method */ 'withHour(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the hour-of-day altered.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#withHour(int)`, `changing the time`],
					[/* text */ 't', ` of the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
 `]
				]],
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
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the requested hour, not null`]
			]
		]],
		[/* method */ 'withLaterOffsetAtOverlap()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date-time changing the zone offset to the
 later of the two valid offsets at a local time-line overlap.
 `],
				[/* block */ 'b', `
 This method only has any effect when the local time-line overlaps, such as
 at an autumn daylight savings cutover. In this scenario, there are two
 valid offsets for the local date-time. Calling this method will return
 a zoned date-time with the later of the two selected.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this method is called when it is not an overlap, `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', `
 is returned.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the later offset, not null`]
			]
		]],
		[/* method */ 'withMinute(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the minute-of-hour altered.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#withMinute(int)`, `changing the time`],
					[/* text */ 't', ` of the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
 `]
				]],
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
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the requested minute, not null`]
			]
		]],
		[/* method */ 'withMonth(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the month-of-year altered.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#withMonth(int)`, `changing the month`],
					[/* text */ 't', ` of the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
 `]
				]],
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
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the requested month, not null`]
			]
		]],
		[/* method */ 'withNano(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the nano-of-second altered.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#withNano(int)`, `changing the time`],
					[/* text */ 't', ` of the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
 `]
				]],
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
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the requested nanosecond, not null`]
			]
		]],
		[/* method */ 'withSecond(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the second-of-minute altered.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#withSecond(int)`, `changing the time`],
					[/* text */ 't', ` of the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
 `]
				]],
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
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the requested second, not null`]
			]
		]],
		[/* method */ 'withYear(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` with the year altered.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This operates on the local time-line,
 `],
					[/* reference */ 'r', `java.time.LocalDateTime#withYear(int)`, `changing the year`],
					[/* text */ 't', ` of the local date-time.
 This is then converted back to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, using the zone ID
 to obtain the offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When converting back to `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, if the local date-time is in an overlap,
 then the offset will be retained if possible, otherwise the earlier offset will be used.
 If in a gap, the local date-time will be adjusted forward by the length of the gap.
 `]
				]],
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
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the requested year, not null`]
			]
		]],
		[/* method */ 'withZoneSameInstant(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date-time with a different time-zone,
 retaining the instant.
 `],
				[/* block */ 'b', `
 This method changes the time-zone and retains the instant.
 This normally results in a change to the local date-time.
 `],
				[/* block */ 'b', `
 This method is based on retaining the same instant, thus gaps and overlaps
 in the local time-line have no effect on the result.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 To change the offset while keeping the local time,
 use `],
					[/* reference */ 'r', `#withZoneSameLocal(java.time.ZoneId)`, `withZoneSameLocal(ZoneId)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone to change to, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported date range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the requested zone, not null`]
			]
		]],
		[/* method */ 'withZoneSameLocal(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date-time with a different time-zone,
 retaining the local date-time if possible.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method changes the time-zone and retains the local date-time.
 The local date-time is only changed if it is invalid for the new zone,
 determined using the same approach as
 `],
					[/* reference */ 'r', `#ofLocal(java.time.LocalDateTime,java.time.ZoneId,java.time.ZoneOffset)`, `ofLocal(LocalDateTime, ZoneId, ZoneOffset)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 To change the zone and adjust the local date-time,
 use `],
					[/* reference */ 'r', `#withZoneSameInstant(java.time.ZoneId)`, `withZoneSameInstant(ZoneId)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone to change to, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the requested zone, not null`]
			]
		]],
		[/* method */ 'getZone()', [
			[/* method description */
				[/* text */ 't', `Gets the time-zone, such as 'Europe/Paris'.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns the zone ID. This identifies the time-zone `],
					[/* reference */ 'r', `java.time.zone.ZoneRules`, `rules`],
					[/* text */ 't', `
 that determine when and how the offset from UTC/Greenwich changes.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The zone ID may be same as the `],
					[/* reference */ 'r', `#getOffset()`, `offset`],
					[/* text */ 't', `.
 If this is true, then any future calculations, such as addition or subtraction,
 have no complex edge cases due to time-zone rules.
 See also `],
					[/* reference */ 'r', `#withFixedOffsetZone()`, `withFixedOffsetZone()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the time-zone, not null`]
			]
		]],
		[/* method */ 'getOffset()', [
			[/* method description */
				[/* text */ 't', `Gets the zone offset, such as '+01:00'.
 `],
				[/* block */ 'b', `
 This is the offset of the local date-time from UTC/Greenwich.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the zone offset, not null`]
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
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
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
		[/* method */ 'until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Calculates the amount of time until another date-time in terms of the specified unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This calculates the amount of time between two `],
					[/* inline code block */ 'i', `ZonedDateTime`],
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
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` using `],
					[/* reference */ 'r', `#from(java.time.temporal.TemporalAccessor)`, `from(TemporalAccessor)`],
					[/* text */ 't', `.
 If the time-zone differs between the two zoned date-times, the specified
 end date-time is normalized to have the same zone as this date-time.
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
				[/* block */ 'b', `
 The calculation for date and time units differ.
 `],
				[/* block */ 'b', `
 Date units operate on the local time-line, using the local date-time.
 For example, the period from noon on day 1 to noon the following day
 in days will always be counted as exactly one day, irrespective of whether
 there was a daylight savings change or not.
 `],
				[/* block */ 'b', `
 Time units operate on the instant time-line.
 The calculation effectively converts both zoned date-times to instants
 and then calculates the period between the instants.
 For example, the period from noon on day 1 to noon the following day
 in hours may be 23, 24 or 25 hours (or some other amount) depending on
 whether there was a daylight savings change or not.
 `],
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
					[/* inline code block */ 'i', `ZonedDateTime`],
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
					[/* inline code block */ 'i', `ZonedDateTime`]
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
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains a zoned date-time based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion will first obtain a `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', ` from the temporal object,
 falling back to a `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` if necessary. It will then try to obtain
 an `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', `, falling back to a `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` if necessary.
 The result will be either the combination of `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', `
 with `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', `.
 Implementations are permitted to perform optimizations such as accessing
 those fields that are equivalent to the relevant objects.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method matches the signature of the functional interface `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`, `TemporalQuery`],
					[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
					[/* inline code block */ 'i', `ZonedDateTime::from`],
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
					[/* inline code block */ 'i', `ZonedDateTime`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zoned date-time, not null`]
			]
		]],
		[/* method */ 'now()', [
			[/* method description */
				[/* text */ 't', `Obtains the current date-time from the system clock in the default time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* reference */ 'r', `java.time.Clock#systemDefaultZone()`, `system clock`],
					[/* text */ 't', ` in the default
 time-zone to obtain the current date-time.
 The zone and offset will be set based on the time-zone in the clock.
 `]
				]],
				[/* block */ 'b', `
 Using this method will prevent the ability to use an alternate clock for testing
 because the clock is hard-coded.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the current date-time using the system clock, not null`]
			]
		]],
		[/* method */ 'now(java.time.Clock)', [
			[/* method description */
				[/* text */ 't', `Obtains the current date-time from the specified clock.
 `],
				[/* block */ 'b', `
 This will query the specified clock to obtain the current date-time.
 The zone and offset will be set based on the time-zone in the clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
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
					[/* reference */ 'r', `java.time.Clock#system(java.time.ZoneId)`, `system clock`],
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
			/* throws */,
			[/* return description */
				[/* text */ 't', `the current date-time using the system clock, not null`]
			]
		]],
		[/* method */ 'of(int,int,int,int,int,int,int,java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` from a year, month, day,
 hour, minute, second, nanosecond and time-zone.
 `],
				[/* block */ 'b', `
 This creates a zoned date-time matching the local date-time of the seven
 specified fields as closely as possible.
 Time-zone rules, such as daylight savings, mean that not every local date-time
 is valid for the specified zone, thus the local date-time may be adjusted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The local date-time is resolved to a single instant on the time-line.
 This is achieved by finding a valid offset from UTC/Greenwich for the local
 date-time as defined by the `],
					[/* reference */ 'r', `java.time.zone.ZoneRules`, `rules`],
					[/* text */ 't', ` of the zone ID.
`]
				]],
				[/* block */ 'b', `
 In most cases, there is only one valid offset for a local date-time.
 In the case of an overlap, when clocks are set back, there are two valid offsets.
 This method uses the earlier offset typically corresponding to "summer".
 `],
				[/* block */ 'b', `
 In the case of a gap, when clocks jump forward, there is no valid offset.
 Instead, the local date-time is adjusted to be later by the length of the gap.
 For a typical one hour daylight savings change, the local date-time will be
 moved one hour later into the offset typically corresponding to "summer".
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
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone, not null`]
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
		[/* method */ 'of(java.time.LocalDate,java.time.LocalTime,java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` from a local date and time.
 `],
				[/* block */ 'b', `
 This creates a zoned date-time matching the input local date and time as closely as possible.
 Time-zone rules, such as daylight savings, mean that not every local date-time
 is valid for the specified zone, thus the local date-time may be adjusted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The local date time and first combined to form a local date-time.
 The local date-time is then resolved to a single instant on the time-line.
 This is achieved by finding a valid offset from UTC/Greenwich for the local
 date-time as defined by the `],
					[/* reference */ 'r', `java.time.zone.ZoneRules`, `rules`],
					[/* text */ 't', ` of the zone ID.
`]
				]],
				[/* block */ 'b', `
 In most cases, there is only one valid offset for a local date-time.
 In the case of an overlap, when clocks are set back, there are two valid offsets.
 This method uses the earlier offset typically corresponding to "summer".
 `],
				[/* block */ 'b', `
 In the case of a gap, when clocks jump forward, there is no valid offset.
 Instead, the local date-time is adjusted to be later by the length of the gap.
 For a typical one hour daylight savings change, the local date-time will be
 moved one hour later into the offset typically corresponding to "summer".`]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the local date, not null`]
				]],
				[/* parameter */ 'time', [/* parameter description */
					[/* text */ 't', `the local time, not null`]
				]],
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the offset date-time, not null`]
			]
		]],
		[/* method */ 'of(java.time.LocalDateTime,java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` from a local date-time.
 `],
				[/* block */ 'b', `
 This creates a zoned date-time matching the input local date-time as closely as possible.
 Time-zone rules, such as daylight savings, mean that not every local date-time
 is valid for the specified zone, thus the local date-time may be adjusted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The local date-time is resolved to a single instant on the time-line.
 This is achieved by finding a valid offset from UTC/Greenwich for the local
 date-time as defined by the `],
					[/* reference */ 'r', `java.time.zone.ZoneRules`, `rules`],
					[/* text */ 't', ` of the zone ID.
`]
				]],
				[/* block */ 'b', `
 In most cases, there is only one valid offset for a local date-time.
 In the case of an overlap, when clocks are set back, there are two valid offsets.
 This method uses the earlier offset typically corresponding to "summer".
 `],
				[/* block */ 'b', `
 In the case of a gap, when clocks jump forward, there is no valid offset.
 Instead, the local date-time is adjusted to be later by the length of the gap.
 For a typical one hour daylight savings change, the local date-time will be
 moved one hour later into the offset typically corresponding to "summer".`]
			],
			[/* parameters */
				[/* parameter */ 'localDateTime', [/* parameter description */
					[/* text */ 't', `the local date-time, not null`]
				]],
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the zoned date-time, not null`]
			]
		]],
		[/* method */ 'ofInstant(java.time.Instant,java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` from an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This creates a zoned date-time with the same instant as that specified.
 Calling `],
					[/* reference */ 'r', `java.time.chrono.ChronoZonedDateTime#toInstant()`, `ChronoZonedDateTime.toInstant()`],
					[/* text */ 't', ` will return an instant equal to the one used here.
 `]
				]],
				[/* block */ 'b', `
 Converting an instant to a zoned date-time is simple as there is only one valid
 offset for each instant.`]
			],
			[/* parameters */
				[/* parameter */ 'instant', [/* parameter description */
					[/* text */ 't', `the instant to create the date-time from, not null`]
				]],
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zoned date-time, not null`]
			]
		]],
		[/* method */ 'ofInstant(java.time.LocalDateTime,java.time.ZoneOffset,java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` from the instant formed by combining
 the local date-time and offset.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This creates a zoned date-time by `],
					[/* reference */ 'r', `java.time.chrono.ChronoLocalDateTime#toInstant(java.time.ZoneOffset)`, `combining`],
					[/* text */ 't', `
 the `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', `.
 This combination uniquely specifies an instant without ambiguity.
 `]
				]],
				[/* block */ 'b', `
 Converting an instant to a zoned date-time is simple as there is only one valid
 offset for each instant. If the valid offset is different to the offset specified,
 then the date-time and offset of the zoned date-time will differ from those specified.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', ` to be used is a `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', `, this method is equivalent
 to `],
					[/* reference */ 'r', `#of(java.time.LocalDateTime,java.time.ZoneId)`, `of(LocalDateTime, ZoneId)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'localDateTime', [/* parameter description */
					[/* text */ 't', `the local date-time, not null`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the zone offset, not null`]
				]],
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the zoned date-time, not null`]
			]
		]],
		[/* method */ 'ofLocal(java.time.LocalDateTime,java.time.ZoneId,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` from a local date-time
 using the preferred offset if possible.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The local date-time is resolved to a single instant on the time-line.
 This is achieved by finding a valid offset from UTC/Greenwich for the local
 date-time as defined by the `],
					[/* reference */ 'r', `java.time.zone.ZoneRules`, `rules`],
					[/* text */ 't', ` of the zone ID.
`]
				]],
				[/* block */ 'b', `
 In most cases, there is only one valid offset for a local date-time.
 In the case of an overlap, where clocks are set back, there are two valid offsets.
 If the preferred offset is one of the valid offsets then it is used.
 Otherwise the earlier valid offset is used, typically corresponding to "summer".
 `],
				[/* block */ 'b', `
 In the case of a gap, where clocks jump forward, there is no valid offset.
 Instead, the local date-time is adjusted to be later by the length of the gap.
 For a typical one hour daylight savings change, the local date-time will be
 moved one hour later into the offset typically corresponding to "summer".`]
			],
			[/* parameters */
				[/* parameter */ 'localDateTime', [/* parameter description */
					[/* text */ 't', `the local date-time, not null`]
				]],
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone, not null`]
				]],
				[/* parameter */ 'preferredOffset', [/* parameter description */
					[/* text */ 't', `the zone offset, null if no preference`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the zoned date-time, not null`]
			]
		]],
		[/* method */ 'ofStrict(java.time.LocalDateTime,java.time.ZoneOffset,java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` strictly validating the
 combination of local date-time, offset and zone ID.
 `],
				[/* block */ 'b', `
 This creates a zoned date-time ensuring that the offset is valid for the
 local date-time according to the rules of the specified zone.
 If the offset is invalid, an exception is thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'localDateTime', [/* parameter description */
					[/* text */ 't', `the local date-time, not null`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the zone offset, not null`]
				]],
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the combination of arguments is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zoned date-time, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` from a text string such as
 `],
				[/* inline code block */ 'i', `2007-12-03T10:15:30+01:00[Europe/Paris]`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The string must represent a valid date-time and is parsed using
 `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatter#ISO_ZONED_DATE_TIME`, `DateTimeFormatter.ISO_ZONED_DATE_TIME`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse such as "2007-12-03T10:15:30+01:00[Europe/Paris]", not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.format.DateTimeParseException', [/* throw description */
					[/* text */ 't', `if the text cannot be parsed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed zoned date-time, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence,java.time.format.DateTimeFormatter)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ZonedDateTime`],
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
				[/* text */ 't', `the parsed zoned date-time, not null`]
			]
		]]
	],
	/* enum values */ UDF
]);
