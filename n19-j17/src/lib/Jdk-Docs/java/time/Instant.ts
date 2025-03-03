import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.Instant', [
	[/* class description */
		[/* text */ 't', `An instantaneous point on the time-line.
 `],
		[/* block */ 'b', `
 This class models a single instantaneous point on the time-line.
 This might be used to record event time-stamps in the application.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The range of an instant requires the storage of a number larger than a `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', `.
 To achieve this, the class stores a `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', ` representing epoch-seconds and an
 `],
			[/* inline code block */ 'i', `int`],
			[/* text */ 't', ` representing nanosecond-of-second, which will always be between 0 and 999,999,999.
 The epoch-seconds are measured from the standard Java epoch of `],
			[/* inline code block */ 'i', `1970-01-01T00:00:00Z`],
			[/* text */ 't', `
 where instants after the epoch have positive values, and earlier instants have negative values.
 For both the epoch-second and nanosecond parts, a larger value is always later on the time-line
 than a smaller value.

 `]
		]],
		[/* block */ 'b', `Time-scale`],
		[/* block */ 'b', `
 The length of the solar day is the standard way that humans measure time.
 This has traditionally been subdivided into 24 hours of 60 minutes of 60 seconds,
 forming a 86400 second day.
 `],
		[/* block */ 'b', `
 Modern timekeeping is based on atomic clocks which precisely define an SI second
 relative to the transitions of a Caesium atom. The length of an SI second was defined
 to be very close to the 86400th fraction of a day.
 `],
		[/* block */ 'b', `
 Unfortunately, as the Earth rotates the length of the day varies.
 In addition, over time the average length of the day is getting longer as the Earth slows.
 As a result, the length of a solar day in 2012 is slightly longer than 86400 SI seconds.
 The actual length of any given day and the amount by which the Earth is slowing
 are not predictable and can only be determined by measurement.
 The UT1 time-scale captures the accurate length of day, but is only available some
 time after the day has completed.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The UTC time-scale is a standard approach to bundle up all the additional fractions
 of a second from UT1 into whole seconds, known as `],
			[/* text */ 't', `leap-seconds`],
			[/* text */ 't', `.
 A leap-second may be added or removed depending on the Earth's rotational changes.
 As such, UTC permits a day to have 86399 SI seconds or 86401 SI seconds where
 necessary in order to keep the day aligned with the Sun.
 `]
		]],
		[/* block */ 'b', `
 The modern UTC time-scale was introduced in 1972, introducing the concept of whole leap-seconds.
 Between 1958 and 1972, the definition of UTC was complex, with minor sub-second leaps and
 alterations to the length of the notional second. As of 2012, discussions are underway
 to change the definition of UTC again, with the potential to remove leap seconds or
 introduce other changes.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Given the complexity of accurate timekeeping described above, this Java API defines
 its own time-scale, the `],
			[/* text */ 't', `Java Time-Scale`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 The Java Time-Scale divides each calendar day into exactly 86400
 subdivisions, known as seconds.  These seconds may differ from the
 SI second.  It closely matches the de facto international civil time
 scale, the definition of which changes from time to time.
 `],
		[/* block */ 'b', `
 The Java Time-Scale has slightly different definitions for different
 segments of the time-line, each based on the consensus international
 time scale that is used as the basis for civil time. Whenever the
 internationally-agreed time scale is modified or replaced, a new
 segment of the Java Time-Scale must be defined for it.  Each segment
 must meet these requirements:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', `the Java Time-Scale shall closely match the underlying international
  civil time scale;`],
			[/* block */ 'b', `the Java Time-Scale shall exactly match the international civil
  time scale at noon each day;`],
			[/* block */ 'b', `the Java Time-Scale shall have a precisely-defined relationship to
  the international civil time scale.`]
		]],
		[/* text */ 't', `
 There are currently, as of 2013, two segments in the Java time-scale.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 For the segment from 1972-11-03 (exact boundary discussed below) until
 further notice, the consensus international time scale is UTC (with
 leap seconds).  In this segment, the Java Time-Scale is identical to
 `],
			[/* external link */ 'a', `http://www.cl.cam.ac.uk/~mgk25/time/utc-sls/`, `UTC-SLS`],
			[/* text */ 't', `.
 This is identical to UTC on days that do not have a leap second.
 On days that do have a leap second, the leap second is spread equally
 over the last 1000 seconds of the day, maintaining the appearance of
 exactly 86400 seconds per day.
 `]
		]],
		[/* block */ 'b', `
 For the segment prior to 1972-11-03, extending back arbitrarily far,
 the consensus international time scale is defined to be UT1, applied
 proleptically, which is equivalent to the (mean) solar time on the
 prime meridian (Greenwich). In this segment, the Java Time-Scale is
 identical to the consensus international time scale. The exact
 boundary between the two segments is the instant where UT1 = UTC
 between 1972-11-03T00:00 and 1972-11-04T12:00.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Implementations of the Java time-scale using the JSR-310 API are not
 required to provide any clock that is sub-second accurate, or that
 progresses monotonically or smoothly. Implementations are therefore
 not required to actually perform the UTC-SLS slew or to otherwise be
 aware of leap seconds. JSR-310 does, however, require that
 implementations must document the approach they use when defining a
 clock representing the current instant.
 See `],
			[/* reference */ 'r', `java.time.Clock`],
			[/* text */ 't', ` for details on the available clocks.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The Java time-scale is used for all date-time classes.
 This includes `],
			[/* inline code block */ 'i', `Instant`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `LocalDate`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `LocalTime`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `OffsetDateTime`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `ZonedDateTime`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `Duration`],
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
		[/* field */ 'EPOCH', [
			[/* field description */
				[/* text */ 't', `Constant for the 1970-01-01T00:00:00Z epoch instant.`]
			],
		]],
		[/* field */ 'MIN', [
			[/* field description */
				[/* text */ 't', `The minimum supported `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', `, '-1000000000-01-01T00:00Z'.
 This could be used by an application as a "far past" instant.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is one year earlier than the minimum `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', `.
 This provides sufficient values to handle the range of `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', `
 which affect the instant in addition to the local date-time.
 The value is also chosen such that the value of the year fits in
 an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'MAX', [
			[/* field description */
				[/* text */ 't', `The maximum supported `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', `, '1000000000-12-31T23:59:59.999999999Z'.
 This could be used by an application as a "far future" instant.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is one year later than the maximum `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', `.
 This provides sufficient values to handle the range of `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', `
 which affect the instant in addition to the local date-time.
 The value is also chosen such that the value of the year fits in
 an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.`]
				]]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'get(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this instant as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this instant for the value of the specified field.
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
					[/* inline code block */ 'i', `INSTANT_SECONDS`],
					[/* text */ 't', ` which is too
 large to fit in an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` and throws a `],
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
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this instant is equal to the specified instant.
 `],
				[/* block */ 'b', `
 The comparison is based on the time-line position of the instants.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other instant, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the other instant is equal to this one`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `A string representation of this instant using ISO-8601 representation.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The format used is the same as `],
					[/* reference */ 'r', `.DateTimeFormatter#ISO_INSTANT`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an ISO-8601 representation of this instant, not null`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for this instant.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'compareTo(java.time.Instant)', [
			[/* method description */
				[/* text */ 't', `Compares this instant to the specified instant.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based on the time-line position of the instants.
 It is "consistent with equals", as defined by `],
					[/* reference */ 'r', `java.lang.Comparable`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'otherInstant', [/* parameter description */
					[/* text */ 't', `the other instant to compare to, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if otherInstant is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the comparator value, negative if less, positive if greater`]
			]
		]],
		[/* method */ 'getLong(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the specified field from this instant as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This queries this instant for the value of the specified field.
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
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains an instant based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion extracts the `],
					[/* reference */ 'r', `.ChronoField#INSTANT_SECONDS`],
					[/* text */ 't', `
 and `],
					[/* reference */ 'r', `.ChronoField#NANO_OF_SECOND`],
					[/* text */ 't', ` fields.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method matches the signature of the functional interface `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
					[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
					[/* inline code block */ 'i', `Instant::from`],
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
					[/* inline code block */ 'i', `Instant`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the instant, not null`]
			]
		]],
		[/* method */ 'query(java.time.temporal.TemporalQuery)', [
			[/* method description */
				[/* text */ 't', `Queries this instant using the specified query.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This queries this instant using the specified query strategy object.
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
 This instant is used to enhance the accuracy of the returned range.
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
		[/* method */ 'isSupported(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified field is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if this instant can be queried for the specified field.
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
						[/* inline code block */ 'i', `MICRO_OF_SECOND`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLI_OF_SECOND`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `INSTANT_SECONDS`]
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
				[/* text */ 't', `true if the field is supported on this instant, false if not`]
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
		[/* method */ 'parse(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` from a text string such as
 `],
				[/* inline code block */ 'i', `2007-12-03T10:15:30.00Z`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The string must represent a valid instant in UTC and is parsed using
 `],
					[/* reference */ 'r', `.DateTimeFormatter#ISO_INSTANT`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.format.DateTimeParseException', [/* throw description */
					[/* text */ 't', `if the text cannot be parsed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed instant, not null`]
			]
		]],
		[/* method */ 'ofEpochMilli(long)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` using milliseconds from the
 epoch of 1970-01-01T00:00:00Z.
 `],
				[/* block */ 'b', `
 The seconds and nanoseconds are extracted from the specified milliseconds.`]
			],
			[/* parameters */
				[/* parameter */ 'epochMilli', [/* parameter description */
					[/* text */ 't', `the number of milliseconds from 1970-01-01T00:00:00Z`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the instant exceeds the maximum or minimum instant`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an instant, not null`]
			]
		]],
		[/* method */ 'getNano()', [
			[/* method description */
				[/* text */ 't', `Gets the number of nanoseconds, later along the time-line, from the start
 of the second.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The nanosecond-of-second value measures the total number of nanoseconds from
 the second returned by `],
					[/* reference */ 'r', `#getEpochSecond()`, `getEpochSecond()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the nanoseconds within the second, always positive, never exceeds 999,999,999`]
			]
		]],
		[/* method */ 'getEpochSecond()', [
			[/* method description */
				[/* text */ 't', `Gets the number of seconds from the Java epoch of 1970-01-01T00:00:00Z.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The epoch second count is a simple incrementing count of seconds where
 second 0 is 1970-01-01T00:00:00Z.
 The nanosecond part is returned by `],
					[/* reference */ 'r', `#getNano()`, `getNano()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the seconds from the epoch of 1970-01-01T00:00:00Z`]
			]
		]],
		[/* method */ 'ofEpochSecond(long,long)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` using seconds from the
 epoch of 1970-01-01T00:00:00Z and nanosecond fraction of second.
 `],
				[/* block */ 'b', `
 This method allows an arbitrary number of nanoseconds to be passed in.
 The factory will alter the values of the second and nanosecond in order
 to ensure that the stored nanosecond is in the range 0 to 999,999,999.
 For example, the following will result in exactly the same instant:
 `],
				[/* code block */ 'c', `  Instant.ofEpochSecond(3, 1);
  Instant.ofEpochSecond(4, -999_999_999);
  Instant.ofEpochSecond(2, 1000_000_001);
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'epochSecond', [/* parameter description */
					[/* text */ 't', `the number of seconds from 1970-01-01T00:00:00Z`]
				]],
				[/* parameter */ 'nanoAdjustment', [/* parameter description */
					[/* text */ 't', `the nanosecond adjustment to the number of seconds, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the instant exceeds the maximum or minimum instant`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an instant, not null`]
			]
		]],
		[/* method */ 'ofEpochSecond(long)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` using seconds from the
 epoch of 1970-01-01T00:00:00Z.
 `],
				[/* block */ 'b', `
 The nanosecond field is set to zero.`]
			],
			[/* parameters */
				[/* parameter */ 'epochSecond', [/* parameter description */
					[/* text */ 't', `the number of seconds from 1970-01-01T00:00:00Z`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the instant exceeds the maximum or minimum instant`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an instant, not null`]
			]
		]],
		[/* method */ 'now()', [
			[/* method description */
				[/* text */ 't', `Obtains the current instant from the system clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* reference */ 'r', `.Clock#systemUTC()`],
					[/* text */ 't', ` to
 obtain the current instant.
 `]
				]],
				[/* block */ 'b', `
 Using this method will prevent the ability to use an alternate time-source for
 testing because the clock is effectively hard-coded.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current instant using the system clock, not null`]
			]
		]],
		[/* method */ 'now(java.time.Clock)', [
			[/* method description */
				[/* text */ 't', `Obtains the current instant from the specified clock.
 `],
				[/* block */ 'b', `
 This will query the specified clock to obtain the current time.
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
				[/* text */ 't', `the current instant, not null`]
			]
		]],
		[/* method */ 'adjustInto(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adjusts the specified temporal object to have this instant.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with the instant changed to be the same as this.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The adjustment is equivalent to using `],
					[/* reference */ 'r', `.Temporal#with(java.time.temporal.TemporalField,long)`],
					[/* text */ 't', `
 twice, passing `],
					[/* reference */ 'r', `.ChronoField#INSTANT_SECONDS`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `.ChronoField#NANO_OF_SECOND`],
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
   temporal = thisInstant.adjustInto(temporal);
   temporal = temporal.with(thisInstant);
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
				[/* text */ 't', `Returns an adjusted copy of this instant.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', `, based on this one, with the instant adjusted.
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` based on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` with the adjustment made, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalField,long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this instant with the specified field set to a new value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `Instant`],
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
						[/* inline code block */ 'i', `NANO_OF_SECOND`],
						[/* text */ 't', ` -
  Returns an `],
						[/* inline code block */ 'i', `Instant`],
						[/* text */ 't', ` with the specified nano-of-second.
  The epoch-second will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MICRO_OF_SECOND`],
						[/* text */ 't', ` -
  Returns an `],
						[/* inline code block */ 'i', `Instant`],
						[/* text */ 't', ` with the nano-of-second replaced by the specified
  micro-of-second multiplied by 1,000. The epoch-second will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MILLI_OF_SECOND`],
						[/* text */ 't', ` -
  Returns an `],
						[/* inline code block */ 'i', `Instant`],
						[/* text */ 't', ` with the nano-of-second replaced by the specified
  milli-of-second multiplied by 1,000,000. The epoch-second will be unchanged.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `INSTANT_SECONDS`],
						[/* text */ 't', ` -
  Returns an `],
						[/* inline code block */ 'i', `Instant`],
						[/* text */ 't', ` with the specified epoch-second.
  The nano-of-second will be unchanged.
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` based on `],
				[/* inline code block */ 'i', `this`],
				[/* text */ 't', ` with the specified field set, not null`]
			]
		]],
		[/* method */ 'plus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this instant with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `Instant`],
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
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` based on this instant with the addition made, not null`]
			]
		]],
		[/* method */ 'plus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this instant with the specified amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `Instant`],
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
						[/* inline code block */ 'i', `NANOS`],
						[/* text */ 't', ` -
  Returns an `],
						[/* inline code block */ 'i', `Instant`],
						[/* text */ 't', ` with the specified number of nanoseconds added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusNanos(long)`, `plusNanos(long)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MICROS`],
						[/* text */ 't', ` -
  Returns an `],
						[/* inline code block */ 'i', `Instant`],
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
  Returns an `],
						[/* inline code block */ 'i', `Instant`],
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
  Returns an `],
						[/* inline code block */ 'i', `Instant`],
						[/* text */ 't', ` with the specified number of seconds added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusSeconds(long)`, `plusSeconds(long)`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `MINUTES`],
						[/* text */ 't', ` -
  Returns an `],
						[/* inline code block */ 'i', `Instant`],
						[/* text */ 't', ` with the specified number of minutes added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusSeconds(long)`, `plusSeconds(long)`],
						[/* text */ 't', ` with the amount
  multiplied by 60.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HOURS`],
						[/* text */ 't', ` -
  Returns an `],
						[/* inline code block */ 'i', `Instant`],
						[/* text */ 't', ` with the specified number of hours added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusSeconds(long)`, `plusSeconds(long)`],
						[/* text */ 't', ` with the amount
  multiplied by 3,600.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `HALF_DAYS`],
						[/* text */ 't', ` -
  Returns an `],
						[/* inline code block */ 'i', `Instant`],
						[/* text */ 't', ` with the specified number of half-days added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusSeconds(long)`, `plusSeconds(long)`],
						[/* text */ 't', ` with the amount
  multiplied by 43,200 (12 hours).
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `DAYS`],
						[/* text */ 't', ` -
  Returns an `],
						[/* inline code block */ 'i', `Instant`],
						[/* text */ 't', ` with the specified number of days added.
  This is equivalent to `],
						[/* reference */ 'r', `#plusSeconds(long)`, `plusSeconds(long)`],
						[/* text */ 't', ` with the amount
  multiplied by 86,400 (24 hours).
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` based on this instant with the specified amount added, not null`]
			]
		]],
		[/* method */ 'until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Calculates the amount of time until another instant in terms of the specified unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This calculates the amount of time between two `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', `
 objects in terms of a single `],
					[/* inline code block */ 'i', `TemporalUnit`],
					[/* text */ 't', `.
 The start and end points are `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` and the specified instant.
 The result will be negative if the end is before the start.
 The calculation returns a whole number, representing the number of
 complete units between the two instants.
 The `],
					[/* inline code block */ 'i', `Temporal`],
					[/* text */ 't', ` passed to this method is converted to a
 `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` using `],
					[/* reference */ 'r', `#from(java.time.temporal.TemporalAccessor)`, `from(TemporalAccessor)`],
					[/* text */ 't', `.
 For example, the amount in seconds between two dates can be calculated
 using `],
					[/* inline code block */ 'i', `startInstant.until(endInstant, SECONDS)`],
					[/* text */ 't', `.
 `]
				]],
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
   amount = start.until(end, SECONDS);
   amount = SECONDS.between(start, end);
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
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `HALF_DAYS`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `DAYS`],
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
					[/* text */ 't', `the end date, exclusive, which is converted to an `],
					[/* inline code block */ 'i', `Instant`],
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
					[/* inline code block */ 'i', `Instant`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the amount of time between this instant and the end instant`]
			]
		]],
		[/* method */ 'plusNanos(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this instant with the specified duration in nanoseconds added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'nanosToAdd', [/* parameter description */
					[/* text */ 't', `the nanoseconds to add, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the maximum or minimum instant`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` based on this instant with the specified nanoseconds added, not null`]
			]
		]],
		[/* method */ 'plusSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this instant with the specified duration in seconds added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'secondsToAdd', [/* parameter description */
					[/* text */ 't', `the seconds to add, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the maximum or minimum instant`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` based on this instant with the specified seconds added, not null`]
			]
		]],
		[/* method */ 'plusMillis(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this instant with the specified duration in milliseconds added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'millisToAdd', [/* parameter description */
					[/* text */ 't', `the milliseconds to add, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the maximum or minimum instant`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` based on this instant with the specified milliseconds added, not null`]
			]
		]],
		[/* method */ 'minus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this instant with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `Instant`],
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
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` based on this instant with the subtraction made, not null`]
			]
		]],
		[/* method */ 'minus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this instant with the specified amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `Instant`],
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
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` based on this instant with the specified amount subtracted, not null`]
			]
		]],
		[/* method */ 'minusSeconds(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this instant with the specified duration in seconds subtracted.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'secondsToSubtract', [/* parameter description */
					[/* text */ 't', `the seconds to subtract, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the maximum or minimum instant`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` based on this instant with the specified seconds subtracted, not null`]
			]
		]],
		[/* method */ 'minusMillis(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this instant with the specified duration in milliseconds subtracted.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'millisToSubtract', [/* parameter description */
					[/* text */ 't', `the milliseconds to subtract, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the maximum or minimum instant`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` based on this instant with the specified milliseconds subtracted, not null`]
			]
		]],
		[/* method */ 'minusNanos(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this instant with the specified duration in nanoseconds subtracted.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'nanosToSubtract', [/* parameter description */
					[/* text */ 't', `the nanoseconds to subtract, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the maximum or minimum instant`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` based on this instant with the specified nanoseconds subtracted, not null`]
			]
		]],
		[/* method */ 'truncatedTo(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` truncated to the specified unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Truncating the instant returns a copy of the original with fields
 smaller than the specified unit set to zero.
 The fields are calculated on the basis of using a UTC offset as seen
 in `],
					[/* inline code block */ 'i', `toString`],
					[/* text */ 't', `.
 For example, truncating with the `],
					[/* reference */ 'r', `.ChronoUnit#MINUTES`],
					[/* text */ 't', ` unit will
 round down to the nearest minute, setting the seconds and nanoseconds to zero.
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
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit to truncate to, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the unit is invalid for truncation`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` based on this instant with the time truncated, not null`]
			]
		]],
		[/* method */ 'isAfter(java.time.Instant)', [
			[/* method description */
				[/* text */ 't', `Checks if this instant is after the specified instant.
 `],
				[/* block */ 'b', `
 The comparison is based on the time-line position of the instants.`]
			],
			[/* parameters */
				[/* parameter */ 'otherInstant', [/* parameter description */
					[/* text */ 't', `the other instant to compare to, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if otherInstant is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if this instant is after the specified instant`]
			]
		]],
		[/* method */ 'isBefore(java.time.Instant)', [
			[/* method description */
				[/* text */ 't', `Checks if this instant is before the specified instant.
 `],
				[/* block */ 'b', `
 The comparison is based on the time-line position of the instants.`]
			],
			[/* parameters */
				[/* parameter */ 'otherInstant', [/* parameter description */
					[/* text */ 't', `the other instant to compare to, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if otherInstant is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `true if this instant is before the specified instant`]
			]
		]],
		[/* method */ 'atZone(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Combines this instant with a time-zone to create a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` formed from this instant at the
 specified time-zone. An exception will be thrown if the instant is too
 large to fit into a zoned date-time.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is equivalent to
 `],
					[/* reference */ 'r', `.ZonedDateTime#ofInstant(java.time.Instant,java.time.ZoneId)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the zone to combine with, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zoned date-time formed from this instant and the specified zone, not null`]
			]
		]],
		[/* method */ 'atOffset(java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Combines this instant with an offset to create an `],
				[/* inline code block */ 'i', `OffsetDateTime`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', ` formed from this instant at the
 specified offset from UTC/Greenwich. An exception will be thrown if the
 instant is too large to fit into an offset date-time.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is equivalent to
 `],
					[/* reference */ 'r', `.OffsetDateTime#ofInstant(java.time.Instant,java.time.ZoneId)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset to combine with, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the offset date-time formed from this instant and the specified offset, not null`]
			]
		]],
		[/* method */ 'toEpochMilli()', [
			[/* method description */
				[/* text */ 't', `Converts this instant to the number of milliseconds from the epoch
 of 1970-01-01T00:00:00Z.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this instant represents a point on the time-line too far in the future
 or past to fit in a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', ` milliseconds, then an exception is thrown.
 `]
				]],
				[/* block */ 'b', `
 If this instant has greater than millisecond precision, then the conversion
 will drop any excess precision information as though the amount in nanoseconds
 was subject to integer division by one million.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of milliseconds since the epoch of 1970-01-01T00:00:00Z`]
			]
		]]
	],
]);
