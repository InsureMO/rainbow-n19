import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.TemporalUnit', [
	[/* class description */
		[/* text */ 't', `A unit of date-time, such as Days or Hours.
 `],
		[/* block */ 'b', `
 Measurement of time is built on units, such as years, months, days, hours, minutes and seconds.
 Implementations of this interface represent those units.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 An instance of this interface represents the unit itself, rather than an amount of the unit.
 See `],
			[/* reference */ 'r', `java.time.Period`],
			[/* text */ 't', ` for a class that represents an amount in terms of the common units.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The most commonly used units are defined in `],
			[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`],
			[/* text */ 't', `.
 Further units are supplied in `],
			[/* reference */ 'r', `java.time.temporal.IsoFields`],
			[/* text */ 't', `.
 Units can also be written by application code by implementing this interface.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The unit works using double dispatch. Client code calls methods on a date-time like
 `],
			[/* inline code block */ 'i', `LocalDateTime`],
			[/* text */ 't', ` which check if the unit is a `],
			[/* inline code block */ 'i', `ChronoUnit`],
			[/* text */ 't', `.
 If it is, then the date-time must handle it.
 Otherwise, the method call is re-dispatched to the matching method in this interface.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Gets a descriptive name for the unit.
 `],
				[/* block */ 'b', `
 This should be in the plural and upper-first camel case, such as 'Days' or 'Minutes'.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of this unit, not null`]
			]
		]],
		[/* method */ 'between(java.time.temporal.Temporal,java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Calculates the amount of time between two temporal objects.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This calculates the amount in terms of this unit. The start and end
 points are supplied as temporal objects and must be of compatible types.
 The implementation will convert the second type to be an instance of the
 first type before the calculating the amount.
 The result will be negative if the end is before the start.
 For example, the amount in hours between two temporal objects can be
 calculated using `],
					[/* inline code block */ 'i', `HOURS.between(startTime, endTime)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The calculation returns a whole number, representing the number of
 complete units between the two temporals.
 For example, the amount in hours between the times 11:30 and 13:29
 will only be one hour as it is one minute short of two hours.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `],
					[/* reference */ 'r', `.Temporal#until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent
   between = thisUnit.between(start, end);
   between = start.until(end, thisUnit);
 `],
				[/* text */ 't', `
 The choice should be made based on which makes the code more readable.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 For example, this method allows the number of days between two dates to
 be calculated:
 `],
				[/* code block */ 'c', `  long daysBetween = DAYS.between(start, end);
  // or alternatively
  long daysBetween = start.until(end, DAYS);
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Implementations should perform any queries or calculations using the units
 available in `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`],
					[/* text */ 't', ` or the fields available in `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
					[/* text */ 't', `.
 If the unit is not supported an `],
					[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
					[/* text */ 't', ` must be thrown.
 Implementations must not alter the specified temporal objects.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal1Inclusive', [/* parameter description */
					[/* text */ 't', `the base temporal object, not null`]
				]],
				[/* parameter */ 'temporal2Exclusive', [/* parameter description */
					[/* text */ 't', `the other temporal object, exclusive, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the amount cannot be calculated, or the end
  temporal cannot be converted to the same type as the start temporal`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported by the temporal`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the amount of time between temporal1Inclusive and temporal2Exclusive
  in terms of this unit; positive if temporal2Exclusive is later than
  temporal1Inclusive, negative if earlier`]
			]
		]],
		[/* method */ 'isDateBased()', [
			[/* method description */
				[/* text */ 't', `Checks if this unit represents a component of a date.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A date is time-based if it can be used to imply meaning from a date.
 It must have a `],
					[/* reference */ 'r', `#getDuration()`, `duration`],
					[/* text */ 't', ` that is an integral
 multiple of the length of a standard day.
 Note that it is valid for both `],
					[/* inline code block */ 'i', `isDateBased()`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `isTimeBased()`],
					[/* text */ 't', `
 to return false, such as when representing a unit like 36 hours.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this unit is a component of a date`]
			]
		]],
		[/* method */ 'isTimeBased()', [
			[/* method description */
				[/* text */ 't', `Checks if this unit represents a component of a time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A unit is time-based if it can be used to imply meaning from a time.
 It must have a `],
					[/* reference */ 'r', `#getDuration()`, `duration`],
					[/* text */ 't', ` that divides into
 the length of a standard day without remainder.
 Note that it is valid for both `],
					[/* inline code block */ 'i', `isDateBased()`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `isTimeBased()`],
					[/* text */ 't', `
 to return false, such as when representing a unit like 36 hours.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this unit is a component of a time`]
			]
		]],
		[/* method */ 'isSupportedBy(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Checks if this unit is supported by the specified temporal object.
 `],
				[/* block */ 'b', `
 This checks that the implementing date-time can add/subtract this unit.
 This can be used to avoid throwing an exception.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This default implementation derives the value using
 `],
					[/* reference */ 'r', `.Temporal#plus(long,java.time.temporal.TemporalUnit)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to check, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the unit is supported`]
			]
		]],
		[/* method */ 'getDuration()', [
			[/* method description */
				[/* text */ 't', `Gets the duration of this unit, which may be an estimate.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 All units return a duration measured in standard nanoseconds from this method.
 The duration will be positive and non-zero.
 For example, an hour has a duration of `],
					[/* inline code block */ 'i', `60 * 60 * 1,000,000,000ns`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Some units may return an accurate duration while others return an estimate.
 For example, days have an estimated duration due to the possibility of
 daylight saving time changes.
 To determine if the duration is an estimate, use `],
					[/* reference */ 'r', `#isDurationEstimated()`, `isDurationEstimated()`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the duration of this unit, which may be an estimate, not null`]
			]
		]],
		[/* method */ 'isDurationEstimated()', [
			[/* method description */
				[/* text */ 't', `Checks if the duration of the unit is an estimate.
 `],
				[/* block */ 'b', `
 All units have a duration, however the duration is not always accurate.
 For example, days have an estimated duration due to the possibility of
 daylight saving time changes.
 This method returns true if the duration is an estimate and false if it is
 accurate. Note that accurate/estimated ignores leap seconds.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the duration is estimated, false if accurate`]
			]
		]],
		[/* method */ 'addTo(java.time.temporal.Temporal,long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of the specified temporal object with the specified period added.
 `],
				[/* block */ 'b', `
 The period added is a multiple of this unit. For example, this method
 could be used to add "3 days" to a date by calling this method on the
 instance representing "days", passing the date and the period "3".
 The period to be added may be negative, which is equivalent to subtraction.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `],
					[/* reference */ 'r', `.Temporal#plus(long,java.time.temporal.TemporalUnit)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisUnit.addTo(temporal);
   temporal = temporal.plus(thisUnit);
 `],
				[/* text */ 't', `
 It is recommended to use the second approach, `],
				[/* inline code block */ 'i', `plus(TemporalUnit)`],
				[/* text */ 't', `,
 as it is a lot clearer to read in code.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Implementations should perform any queries or calculations using the units
 available in `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`],
					[/* text */ 't', ` or the fields available in `],
					[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
					[/* text */ 't', `.
 If the unit is not supported an `],
					[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
					[/* text */ 't', ` must be thrown.
 `]
				]],
				[/* block */ 'b', `
 Implementations must not alter the specified temporal object.
 Instead, an adjusted copy of the original must be returned.
 This provides equivalent, safe behavior for immutable and mutable implementations.`]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to adjust, not null`]
				]],
				[/* parameter */ 'amount', [/* parameter description */
					[/* text */ 't', `the amount of this unit to add, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the amount cannot be added`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported by the temporal`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the adjusted temporal object, not null`]
			]
		]]
	],
]);
