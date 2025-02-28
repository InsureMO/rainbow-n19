import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.chrono.ChronoLocalDateTime', [
	[/* class description */
		[/* text */ 't', `A date-time without a time-zone in an arbitrary chronology, intended
 for advanced globalization use cases.
 `],
		[/* block */ 'b', [
			[/* reference */ 'r', `java.time.LocalDateTime`]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A `],
			[/* inline code block */ 'i', `ChronoLocalDateTime`],
			[/* text */ 't', ` is the abstract representation of a local date-time
 where the `],
			[/* inline code block */ 'i', `Chronology chronology`],
			[/* text */ 't', `, or calendar system, is pluggable.
 The date-time is defined in terms of fields expressed by `],
			[/* reference */ 'r', `java.time.temporal.TemporalField`],
			[/* text */ 't', `,
 where most common implementations are defined in `],
			[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
			[/* text */ 't', `.
 The chronology defines how the calendar system operates and the meaning of
 the standard fields.

 `]
		]],
		[/* block */ 'b', `When to use this interface`],
		[/* text */ 't', `
 The design of the API encourages the use of `],
		[/* inline code block */ 'i', `LocalDateTime`],
		[/* text */ 't', ` rather than this
 interface, even in the case where the application needs to deal with multiple
 calendar systems. The rationale for this is explored in detail in `],
		[/* reference */ 'r', `java.time.chrono.ChronoLocalDate`],
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
				[/* text */ 't', `Checks if this date-time is equal to another date-time, including the chronology.
 `],
				[/* block */ 'b', `
 Compares this date-time with another ensuring that the date-time and chronology are the same.`]
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
				[/* text */ 't', `Outputs this date-time as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The output will include the full local date-time.`]
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
		[/* method */ 'compareTo(java.time.chrono.ChronoLocalDateTime)', [
			[/* method description */
				[/* text */ 't', `Compares this date-time to another date-time, including the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based first on the underlying time-line date-time, then
 on the chronology.
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
						[/* inline code block */ 'i', `2012-12-03T12:00 (ISO)`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `2012-12-04T12:00 (ISO)`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `2555-12-04T12:00 (ThaiBuddhist)`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `2012-12-05T12:00 (ISO)`]
					]]
				]],
				[/* text */ 't', `
 Values #2 and #3 represent the same date-time on the time-line.
 When two values represent the same date-time, the chronology ID is compared to distinguish them.
 This step is needed to make the ordering "consistent with equals".
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 If all the date-time objects being compared are in the same chronology, then the
 additional chronology stage is not required and only the local date-time is used.
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
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `ChronoLocalDateTime`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains a local date-time based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `ChronoLocalDateTime`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion extracts and combines the chronology and the date-time
 from the temporal object. The behavior is equivalent to using
 `],
					[/* external link */ 'a', `Chronology.html#localDateTime(java.time.temporal.TemporalAccessor)`, `Chronology.localDateTime(TemporalAccessor)`],
					[/* text */ 't', ` with the extracted chronology.
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
					[/* inline code block */ 'i', `ChronoLocalDateTime::from`],
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
					[/* inline code block */ 'i', `ChronoLocalDateTime`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the date-time, not null`]
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
					[/* external link */ 'a', `../temporal/TemporalQuery.html#queryFrom(java.time.temporal.TemporalAccessor)`, `TemporalQuery.queryFrom(TemporalAccessor)`],
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
		[/* method */ 'isSupported(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified unit is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if the specified unit can be added to or subtracted from this date-time.
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
		[/* method */ 'isSupported(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified field is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if the specified field can be queried on this date-time.
 If false, then calling the `],
					[/* external link */ 'a', `../temporal/TemporalAccessor.html#range(java.time.temporal.TemporalField)`, `range`],
					[/* text */ 't', `,
 `],
					[/* external link */ 'a', `../temporal/TemporalAccessor.html#get(java.time.temporal.TemporalField)`, `get`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `with(TemporalField, long)`],
					[/* text */ 't', `
 methods will throw an exception.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The set of supported fields is defined by the chronology and normally includes
 all `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` date and time fields.
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
		[/* method */ 'isEqual(java.time.chrono.ChronoLocalDateTime)', [
			[/* method description */
				[/* text */ 't', `Checks if this date-time is equal to the specified date-time ignoring the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `compareTo(java.time.chrono.ChronoLocalDateTime<?>)`],
					[/* text */ 't', ` in that it
 only compares the underlying date and time and not the chronology.
 This allows date-times in different calendar systems to be compared based
 on the time-line position.
 `]
				]],
				[/* block */ 'b', `
 This default implementation performs the comparison based on the epoch-day
 and nano-of-day.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date-time to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the underlying date-time is equal to the specified date-time on the timeline`]
			]
		]],
		[/* method */ 'toEpochSecond(java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Converts this date-time to the number of seconds from the epoch
 of 1970-01-01T00:00:00Z.
 `],
				[/* block */ 'b', `
 This combines this local date-time and the specified offset to calculate the
 epoch-second value, which is the number of elapsed seconds from 1970-01-01T00:00:00Z.
 Instants on the time-line after the epoch are positive, earlier are negative.
 `],
				[/* block */ 'b', `
 This default implementation calculates from the epoch-day of the date and the
 second-of-day of the time.`]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset to use for the conversion, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of seconds from the epoch of 1970-01-01T00:00:00Z`]
			]
		]],
		[/* method */ 'toInstant(java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Converts this date-time to an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This combines this local date-time and the specified offset to form
 an `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This default implementation calculates from the epoch-day of the date and the
 second-of-day of the time.`]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset to use for the conversion, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', ` representing the same instant, not null`]
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
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
					[/* text */ 't', ` are defined by the chronology.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the chronology, not null`]
			]
		]],
		[/* method */ 'adjustInto(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adjusts the specified temporal object to have the same date and time as this object.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with the date and time changed to be the same as this.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The adjustment is equivalent to using `],
					[/* external link */ 'a', `../temporal/Temporal.html#with(java.time.temporal.TemporalField,long)`, `Temporal.with(TemporalField, long)`],
					[/* text */ 't', `
 twice, passing `],
					[/* external link */ 'a', `../temporal/ChronoField.html#EPOCH_DAY`, `ChronoField.EPOCH_DAY`],
					[/* text */ 't', ` and
 `],
					[/* external link */ 'a', `../temporal/ChronoField.html#NANO_OF_DAY`, `ChronoField.NANO_OF_DAY`],
					[/* text */ 't', ` as the fields.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In most cases, it is clearer to reverse the calling pattern by using
 `],
					[/* external link */ 'a', `../temporal/Temporal.html#with(java.time.temporal.TemporalAdjuster)`, `Temporal.with(TemporalAdjuster)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisLocalDateTime.adjustInto(temporal);
   temporal = temporal.with(thisLocalDateTime);
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
					[/* reference */ 'r', `java.time.temporal.TemporalAdjusters`],
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
		[/* method */ 'plus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns an object of the same type as this object with an amount added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This adjusts this temporal, adding according to the rules of the specified amount.
 The amount is typically a `],
					[/* reference */ 'r', `java.time.Period`],
					[/* text */ 't', ` but may be any other type implementing
 the `],
					[/* reference */ 'r', `java.time.temporal.TemporalAmount`],
					[/* text */ 't', ` interface, such as `],
					[/* reference */ 'r', `java.time.Duration`],
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
		[/* method */ 'minus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns an object of the same type as this object with an amount subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This adjusts this temporal, subtracting according to the rules of the specified amount.
 The amount is typically a `],
					[/* reference */ 'r', `java.time.Period`],
					[/* text */ 't', ` but may be any other type implementing
 the `],
					[/* reference */ 'r', `java.time.temporal.TemporalAmount`],
					[/* text */ 't', ` interface, such as `],
					[/* reference */ 'r', `java.time.Duration`],
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
		[/* method */ 'isAfter(java.time.chrono.ChronoLocalDateTime)', [
			[/* method description */
				[/* text */ 't', `Checks if this date-time is after the specified date-time ignoring the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `compareTo(java.time.chrono.ChronoLocalDateTime<?>)`],
					[/* text */ 't', ` in that it
 only compares the underlying date-time and not the chronology.
 This allows dates in different calendar systems to be compared based
 on the time-line position.
 `]
				]],
				[/* block */ 'b', `
 This default implementation performs the comparison based on the epoch-day
 and nano-of-day.`]
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
		[/* method */ 'isBefore(java.time.chrono.ChronoLocalDateTime)', [
			[/* method description */
				[/* text */ 't', `Checks if this date-time is before the specified date-time ignoring the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method differs from the comparison in `],
					[/* reference */ 'r', `compareTo(java.time.chrono.ChronoLocalDateTime<?>)`],
					[/* text */ 't', ` in that it
 only compares the underlying date-time and not the chronology.
 This allows dates in different calendar systems to be compared based
 on the time-line position.
 `]
				]],
				[/* block */ 'b', `
 This default implementation performs the comparison based on the epoch-day
 and nano-of-day.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other date-time to compare to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is before the specified date-time`]
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
		[/* method */ 'timeLineOrder()', [
			[/* method description */
				[/* text */ 't', `Gets a comparator that compares `],
				[/* inline code block */ 'i', `ChronoLocalDateTime`],
				[/* text */ 't', ` in
 time-line order ignoring the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This comparator differs from the comparison in `],
					[/* reference */ 'r', `compareTo(java.time.chrono.ChronoLocalDateTime<?>)`],
					[/* text */ 't', ` in that it
 only compares the underlying date-time and not the chronology.
 This allows dates in different calendar systems to be compared based
 on the position of the date-time on the local time-line.
 The underlying comparison is equivalent to comparing the epoch-day and nano-of-day.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a comparator that compares in time-line order ignoring the chronology`]
			]
		]],
		[/* method */ 'atZone(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Combines this time with a time-zone to create a `],
				[/* inline code block */ 'i', `ChronoZonedDateTime`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `ChronoZonedDateTime`],
					[/* text */ 't', ` formed from this date-time at the
 specified time-zone. The result will match this date-time as closely as possible.
 Time-zone rules, such as daylight savings, mean that not every local date-time
 is valid for the specified zone, thus the local date-time may be adjusted.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The local date-time is resolved to a single instant on the time-line.
 This is achieved by finding a valid offset from UTC/Greenwich for the local
 date-time as defined by the `],
					[/* reference */ 'r', `java.time.zone.ZoneRules`],
					[/* text */ 't', ` of the zone ID.
`]
				]],
				[/* block */ 'b', `
 In most cases, there is only one valid offset for a local date-time.
 In the case of an overlap, where clocks are set back, there are two valid offsets.
 This method uses the earlier offset typically corresponding to "summer".
 `],
				[/* block */ 'b', `
 In the case of a gap, where clocks jump forward, there is no valid offset.
 Instead, the local date-time is adjusted to be later by the length of the gap.
 For a typical one hour daylight savings change, the local date-time will be
 moved one hour later into the offset typically corresponding to "summer".
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 To obtain the later offset during an overlap, call
 `],
					[/* external link */ 'a', `ChronoZonedDateTime.html#withLaterOffsetAtOverlap()`, `ChronoZonedDateTime.withLaterOffsetAtOverlap()`],
					[/* text */ 't', ` on the result of this method.`]
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
		]]
	],
]);
