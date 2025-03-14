import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.chrono.ChronoZonedDateTime', [
	[/* class description */
		[/* text */ 't', `A date-time with a time-zone in an arbitrary chronology,
 intended for advanced globalization use cases.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `Most applications should declare method signatures, fields and variables
 as `],
			[/* reference */ 'r', `java.time.ZonedDateTime`, `ZonedDateTime`],
			[/* text */ 't', `, not this interface.`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `ChronoZonedDateTime`],
			[/* text */ 't', ` is the abstract representation of an offset date-time
 where the `],
			[/* inline code block */ 'i', `Chronology chronology`],
			[/* text */ 't', `, or calendar system, is pluggable.
 The date-time is defined in terms of fields expressed by `],
			[/* reference */ 'r', `java.time.temporal.TemporalField`, `TemporalField`],
			[/* text */ 't', `,
 where most common implementations are defined in `],
			[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
			[/* text */ 't', `.
 The chronology defines how the calendar system operates and the meaning of
 the standard fields.

 `]
		]],
		[/* block */ 'b', `When to use this interface`],
		[/* text */ 't', `
 The design of the API encourages the use of `],
		[/* inline code block */ 'i', `ZonedDateTime`],
		[/* text */ 't', ` rather than this
 interface, even in the case where the application needs to deal with multiple
 calendar systems. The rationale for this is explored in detail in `],
		[/* reference */ 'r', `java.time.chrono.ChronoLocalDate`, `ChronoLocalDate`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Ensure that the discussion in `],
			[/* inline code block */ 'i', `ChronoLocalDate`],
			[/* text */ 't', ` has been read and understood
 before using this interface.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this date-time is equal to another date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based on the offset date-time and the zone.
 To compare for the same instant on the time-line, use `],
					[/* reference */ 'r', `#compareTo(java.time.chrono.ChronoZonedDateTime)`, `compareTo(java.time.chrono.ChronoZonedDateTime<?>)`],
					[/* text */ 't', `.
 Only objects of type `],
					[/* inline code block */ 'i', `ChronoZonedDateTime`],
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
		[/* method */ 'isSupported(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified field is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if the specified field can be queried on this date-time.
 If false, then calling the `],
					[/* reference */ 'r', `java.time.temporal.TemporalAccessor#range(java.time.temporal.TemporalField)`, `range`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.time.temporal.TemporalAccessor#get(java.time.temporal.TemporalField)`, `get`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#with(java.time.temporal.TemporalField,long)`, `with(TemporalField, long)`],
					[/* text */ 't', `
 methods will throw an exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The set of supported fields is defined by the chronology and normally includes
 all `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` fields.
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
				[/* text */ 't', `true if the field can be queried, false if not`]
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
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this date-time as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The output will include the full zoned date-time.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this date-time, not null`]
			]
		]],
		[/* method */ 'toLocalDateTime()', [
			[/* method description */
				[/* text */ 't', `Gets the local date-time part of this date-time.
 `],
				[/* block */ 'b', `
 This returns a local date with the same year, month and day
 as this date-time.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the local date-time part of this date-time, not null`]
			]
		]],
		[/* method */ 'plus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns an object of the same type as this object with the specified period added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns a new object based on this one with the specified period added.
 For example, on a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `, this could be used to add a number of years, months or days.
 The returned object will have the same observable type as this object.
 `]
				]],
				[/* block */ 'b', `
 In some cases, changing a field is not fully defined. For example, if the target object is
 a date representing the 31st January, then adding one month would be unclear.
 In cases like this, the field is responsible for resolving the result. Typically it will choose
 the previous valid date, which would be the last valid day of February in this example.`]
			],
			[/* parameters */
				[/* parameter */ 'amountToAdd', [/* parameter description */
					[/* text */ 't', `the amount of the specified unit to add, may be negative`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit of the amount to add, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the unit cannot be added`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the specified period added, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalField,long)', [
			[/* method description */
				[/* text */ 't', `Returns an object of the same type as this object with the specified field altered.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a new object based on this one with the value for the specified field changed.
 For example, on a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `, this could be used to set the year, month or day-of-month.
 The returned object will have the same observable type as this object.
 `]
				]],
				[/* block */ 'b', `
 In some cases, changing a field is not fully defined. For example, if the target object is
 a date representing the 31st January, then changing the month to February would be unclear.
 In cases like this, the field is responsible for resolving the result. Typically it will choose
 the previous valid date, which would be the last valid day of February in this example.`]
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
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the specified field set, not null`]
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
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if no rules can be found for the zone`]
				]],
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if no rules are valid for this date-time`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ChronoZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the earlier offset, not null`]
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
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if no rules can be found for the zone`]
				]],
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if no rules are valid for this date-time`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ChronoZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the later offset, not null`]
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
				[/* inline code block */ 'i', `ChronoZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the requested zone, not null`]
			]
		]],
		[/* method */ 'withZoneSameLocal(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this date-time with a different time-zone,
 retaining the local date-time if possible.
 `],
				[/* block */ 'b', `
 This method changes the time-zone and retains the local date-time.
 The local date-time is only changed if it is invalid for the new zone.
 `],
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ChronoZonedDateTime`],
				[/* text */ 't', ` based on this date-time with the requested zone, not null`]
			]
		]],
		[/* method */ 'getZone()', [
			[/* method description */
				[/* text */ 't', `Gets the zone ID, such as 'Europe/Paris'.
 `],
				[/* block */ 'b', `
 This returns the stored time-zone id used to determine the time-zone rules.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the zone ID, not null`]
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
		[/* method */ 'isAfter(java.time.chrono.ChronoZonedDateTime)', [
			[/* method description */
				[/* text */ 't', `Checks if the instant of this date-time is after that of the specified date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.chrono.ChronoZonedDateTime)`, `compareTo(java.time.chrono.ChronoZonedDateTime<?>)`],
					[/* text */ 't', ` in that it
 only compares the instant of the date-time. This is equivalent to using
 `],
					[/* inline code block */ 'i', `dateTime1.toInstant().isAfter(dateTime2.toInstant());`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This default implementation performs the comparison based on the epoch-second
 and nano-of-second.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date-time to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is after the specified date-time`]
			]
		]],
		[/* method */ 'isBefore(java.time.chrono.ChronoZonedDateTime)', [
			[/* method description */
				[/* text */ 't', `Checks if the instant of this date-time is before that of the specified date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.chrono.ChronoZonedDateTime)`, `compareTo(java.time.chrono.ChronoZonedDateTime<?>)`],
					[/* text */ 't', ` in that it
 only compares the instant of the date-time. This is equivalent to using
 `],
					[/* inline code block */ 'i', `dateTime1.toInstant().isBefore(dateTime2.toInstant());`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This default implementation performs the comparison based on the epoch-second
 and nano-of-second.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date-time to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this point is before the specified date-time`]
			]
		]],
		[/* method */ 'isEqual(java.time.chrono.ChronoZonedDateTime)', [
			[/* method description */
				[/* text */ 't', `Checks if the instant of this date-time is equal to that of the specified date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.chrono.ChronoZonedDateTime)`, `compareTo(java.time.chrono.ChronoZonedDateTime<?>)`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `#equals(java.lang.Object)`, `equals(java.lang.Object)`],
					[/* text */ 't', `
 in that it only compares the instant of the date-time. This is equivalent to using
 `],
					[/* inline code block */ 'i', `dateTime1.toInstant().equals(dateTime2.toInstant());`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This default implementation performs the comparison based on the epoch-second
 and nano-of-second.`]
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
		[/* method */ 'isSupported(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified unit is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if the specified unit can be added to or subtracted from this date-time.
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
 The set of supported units is defined by the chronology and normally includes
 all `],
					[/* inline code block */ 'i', `ChronoUnit`],
					[/* text */ 't', ` units except `],
					[/* inline code block */ 'i', `FOREVER`],
					[/* text */ 't', `.
 `]
				]],
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
		[/* method */ 'toLocalDate()', [
			[/* method description */
				[/* text */ 't', `Gets the local date part of this date-time.
 `],
				[/* block */ 'b', `
 This returns a local date with the same year, month and day
 as this date-time.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the date part of this date-time, not null`]
			]
		]],
		[/* method */ 'compareTo(java.time.chrono.ChronoZonedDateTime)', [
			[/* method description */
				[/* text */ 't', `Compares this date-time to another date-time, including the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based first on the instant, then on the local date-time,
 then on the zone ID, then on the chronology.
 It is "consistent with equals", as defined by `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 If all the date-time objects being compared are in the same chronology, then the
 additional chronology stage is not required.
 `],
				[/* block */ 'b', `
 This default implementation performs the comparison defined above.`]
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
		[/* method */ 'get(java.time.temporal.TemporalField)', UDF],
		[/* method */ 'format(java.time.format.DateTimeFormatter)', [
			[/* method description */
				[/* text */ 't', `Formats this date-time using the specified formatter.
 `],
				[/* block */ 'b', `
 This date-time will be passed to the formatter to produce a string.
 `],
				[/* block */ 'b', `
 The default implementation must behave as follows:
 `],
				[/* code block */ 'c', `  return formatter.format(this);
 `],
				[/* block */ 'b', '']
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
		[/* method */ 'getChronology()', [
			[/* method description */
				[/* text */ 't', `Gets the chronology of this date-time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', ` represents the calendar system in use.
 The era and other fields in `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
					[/* text */ 't', ` are defined by the chronology.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the chronology, not null`]
			]
		]],
		[/* method */ 'minus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns an object of the same type as this object with an amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This adjusts this temporal, subtracting according to the rules of the specified amount.
 The amount is typically a `],
					[/* reference */ 'r', `java.time.Period`, `Period`],
					[/* text */ 't', ` but may be any other type implementing
 the `],
					[/* reference */ 'r', `java.time.temporal.TemporalAmount`, `TemporalAmount`],
					[/* text */ 't', ` interface, such as `],
					[/* reference */ 'r', `java.time.Duration`, `Duration`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Some example code indicating how and why this method is used:
 `],
				[/* code block */ 'c', `  date = date.minus(period);               // subtract a Period instance
  date = date.minus(duration);             // subtract a Duration instance
  date = date.minus(workingDays(6));       // example user-written workingDays method
 `],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that calling `],
					[/* inline code block */ 'i', `plus`],
					[/* text */ 't', ` followed by `],
					[/* inline code block */ 'i', `minus`],
					[/* text */ 't', ` is not guaranteed to
 return the same date-time.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'amount', [/* parameter description */
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
				[/* text */ 't', `an object of the same type with the specified adjustment made, not null`]
			]
		]],
		[/* method */ 'minus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Returns an object of the same type as this object with the specified period subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns a new object based on this one with the specified period subtracted.
 For example, on a `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `, this could be used to subtract a number of years, months or days.
 The returned object will have the same observable type as this object.
 `]
				]],
				[/* block */ 'b', `
 In some cases, changing a field is not fully defined. For example, if the target object is
 a date representing the 31st March, then subtracting one month would be unclear.
 In cases like this, the field is responsible for resolving the result. Typically it will choose
 the previous valid date, which would be the last valid day of February in this example.`]
			],
			[/* parameters */
				[/* parameter */ 'amountToSubtract', [/* parameter description */
					[/* text */ 't', `the amount of the specified unit to subtract, may be negative`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit of the amount to subtract, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the unit cannot be subtracted`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the specified period subtracted, not null`]
			]
		]],
		[/* method */ 'plus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns an object of the same type as this object with an amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This adjusts this temporal, adding according to the rules of the specified amount.
 The amount is typically a `],
					[/* reference */ 'r', `java.time.Period`, `Period`],
					[/* text */ 't', ` but may be any other type implementing
 the `],
					[/* reference */ 'r', `java.time.temporal.TemporalAmount`, `TemporalAmount`],
					[/* text */ 't', ` interface, such as `],
					[/* reference */ 'r', `java.time.Duration`, `Duration`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 Some example code indicating how and why this method is used:
 `],
				[/* code block */ 'c', `  date = date.plus(period);                // add a Period instance
  date = date.plus(duration);              // add a Duration instance
  date = date.plus(workingDays(6));        // example user-written workingDays method
 `],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that calling `],
					[/* inline code block */ 'i', `plus`],
					[/* text */ 't', ` followed by `],
					[/* inline code block */ 'i', `minus`],
					[/* text */ 't', ` is not guaranteed to
 return the same date-time.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'amount', [/* parameter description */
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
				[/* text */ 't', `an object of the same type with the specified adjustment made, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalAdjuster)', [
			[/* method description */
				[/* text */ 't', `Returns an adjusted object of the same type as this object with the adjustment made.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This adjusts this date-time according to the rules of the specified adjuster.
 A simple adjuster might simply set the one of the fields, such as the year field.
 A more complex adjuster might set the date to the last day of the month.
 A selection of common adjustments is provided in
 `],
					[/* reference */ 'r', `java.time.temporal.TemporalAdjusters`, `TemporalAdjusters`],
					[/* text */ 't', `.
 These include finding the "last day of the month" and "next Wednesday".
 The adjuster is responsible for handling special cases, such as the varying
 lengths of month and leap years.
 `]
				]],
				[/* block */ 'b', `
 Some example code indicating how and why this method is used:
 `],
				[/* code block */ 'c', `  date = date.with(Month.JULY);        // most key classes implement TemporalAdjuster
  date = date.with(lastDayOfMonth());  // static import from Adjusters
  date = date.with(next(WEDNESDAY));   // static import from Adjusters and DayOfWeek
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'adjuster', [/* parameter description */
					[/* text */ 't', `the adjuster to use, not null`]
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
				[/* text */ 't', `an object of the same type with the specified adjustment made, not null`]
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
 time-line as this date-time. The calculation combines the
 `],
					[/* reference */ 'r', `#toLocalDateTime()`, `local date-time`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `#getOffset()`, `offset`],
					[/* text */ 't', `.`]
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
		[/* method */ 'toLocalTime()', [
			[/* method description */
				[/* text */ 't', `Gets the local time part of this date-time.
 `],
				[/* block */ 'b', `
 This returns a local time with the same hour, minute, second and
 nanosecond as this date-time.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the time part of this date-time, not null`]
			]
		]],
		[/* method */ 'range(java.time.temporal.TemporalField)', UDF],
		[/* method */ 'getLong(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Gets the value of the specified field as a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.
 `],
					[/* block */ 'b', `
 This queries the date-time for the value of the specified field.
 The returned value may be outside the valid range of values for the field.
 If the date-time cannot return the value, because the field is unsupported or for
 some other reason, an exception will be thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to get, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value for the field`]
			]
		]],
		[/* method */ 'toEpochSecond()', [
			[/* method description */
				[/* text */ 't', `Converts this date-time to the number of seconds from the epoch
 of 1970-01-01T00:00:00Z.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This uses the `],
					[/* reference */ 'r', `#toLocalDateTime()`, `local date-time`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `#getOffset()`, `offset`],
					[/* text */ 't', ` to calculate the epoch-second value,
 which is the number of elapsed seconds from 1970-01-01T00:00:00Z.
 Instants on the time-line after the epoch are positive, earlier are negative.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of seconds from the epoch of 1970-01-01T00:00:00Z`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ChronoZonedDateTime`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This creates a zoned date-time based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `ChronoZonedDateTime`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion extracts and combines the chronology, date, time and zone
 from the temporal object. The behavior is equivalent to using
 `],
					[/* reference */ 'r', `java.time.chrono.Chronology#zonedDateTime(java.time.temporal.TemporalAccessor)`, `Chronology.zonedDateTime(TemporalAccessor)`],
					[/* text */ 't', ` with the extracted chronology.
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
					[/* inline code block */ 'i', `ChronoZonedDateTime::from`],
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
					[/* inline code block */ 'i', `ChronoZonedDateTime`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the date-time, not null`]
			]
		]],
		[/* method */ 'timeLineOrder()', [
			[/* method description */
				[/* text */ 't', `Gets a comparator that compares `],
				[/* inline code block */ 'i', `ChronoZonedDateTime`],
				[/* text */ 't', ` in
 time-line order ignoring the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This comparator differs from the comparison in `],
					[/* reference */ 'r', `#compareTo(java.time.chrono.ChronoZonedDateTime)`, `compareTo(java.time.chrono.ChronoZonedDateTime<?>)`],
					[/* text */ 't', ` in that it
 only compares the underlying instant and not the chronology.
 This allows dates in different calendar systems to be compared based
 on the position of the date-time on the instant time-line.
 The underlying comparison is equivalent to comparing the epoch-second and nano-of-second.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a comparator that compares in time-line order ignoring the chronology`]
			]
		]]
	],
]);
