import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.ChronoUnit', [
	[/* class description */
		[/* text */ 't', `A standard set of date periods units.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This set of units provide unit-based access to manipulate a date, time or date-time.
 The standard set of units can be extended by implementing `],
			[/* reference */ 'r', `java.time.temporal.TemporalUnit`, `TemporalUnit`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 These units are intended to be applicable in multiple calendar systems.
 For example, most non-ISO calendar systems define units of years, months and days,
 just with slightly different rules.
 The documentation of each unit explains how it operates.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'addTo(java.time.temporal.Temporal,long)', [
			[/* method description */
				[/* block */ 'b', [
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
						[/* reference */ 'r', `java.time.temporal.Temporal#plus(long,java.time.temporal.TemporalUnit)`, `Temporal.plus(long, TemporalUnit)`],
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
						[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`, `ChronoUnit`],
						[/* text */ 't', ` or the fields available in `],
						[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
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
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to adjust, not null`]
				]],
				[/* parameter */ 'amount', [/* parameter description */
					[/* text */ 't', `the amount of this unit to add, positive or negative`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the adjusted temporal object, not null`]
			]
		]],
		[/* method */ 'isDateBased()', [
			[/* method description */
				[/* text */ 't', `Checks if this unit is a date unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 All units from days to eras inclusive are date-based.
 Time-based units and `],
					[/* inline code block */ 'i', `FOREVER`],
					[/* text */ 't', ` return false.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if a date unit, false if a time unit`]
			]
		]],
		[/* method */ 'isDurationEstimated()', [
			[/* method description */
				[/* text */ 't', `Checks if the duration of the unit is an estimate.
 `],
				[/* block */ 'b', `
 All time units in this class are considered to be accurate, while all date
 units in this class are considered to be estimated.
 `],
				[/* block */ 'b', `
 This definition ignores leap seconds, but considers that Days vary due to
 daylight saving time and months have different lengths.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the duration is estimated, false if accurate`]
			]
		]],
		[/* method */ 'isSupportedBy(java.time.temporal.Temporal)', UDF],
		[/* method */ 'isTimeBased()', [
			[/* method description */
				[/* text */ 't', `Checks if this unit is a time unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 All units from nanos to half-days inclusive are time-based.
 Date-based units and `],
					[/* inline code block */ 'i', `FOREVER`],
					[/* text */ 't', ` return false.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if a time unit, false if a date unit`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* block */ 'b', `Returns the name of this enum constant, as contained in the
 declaration.  This method may be overridden, though it typically
 isn't necessary or desirable.  An enum class should override this
 method when a more "programmer-friendly" string form exists.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the name of this enum constant`]
			]
		]],
		[/* method */ 'getDuration()', [
			[/* method description */
				[/* text */ 't', `Gets the estimated duration of this unit in the ISO calendar system.
 `],
				[/* block */ 'b', `
 All of the units in this class have an estimated duration.
 Days vary due to daylight saving time, while months have different lengths.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the estimated duration of this unit, not null`]
			]
		]],
		[/* method */ 'between(java.time.temporal.Temporal,java.time.temporal.Temporal)', [
			[/* method description */
				[/* block */ 'b', [
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
						[/* reference */ 'r', `java.time.temporal.Temporal#until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit)`, `Temporal.until(Temporal, TemporalUnit)`],
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
					[/* text */ 't', `
 `],
					[/* block */ 'b', ''],
					[/* block */ 'b', [
						[/* text */ 't', `
 Implementations should perform any queries or calculations using the units
 available in `],
						[/* reference */ 'r', `enum class in java.time.temporal.ChronoUnit`, `ChronoUnit`],
						[/* text */ 't', ` or the fields available in `],
						[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
						[/* text */ 't', `.
 If the unit is not supported an `],
						[/* inline code block */ 'i', `UnsupportedTemporalTypeException`],
						[/* text */ 't', ` must be thrown.
 Implementations must not alter the specified temporal objects.`]
					]]
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
			/* throws */,
			[/* return description */
				[/* text */ 't', `the amount of time between temporal1Inclusive and temporal2Exclusive
  in terms of this unit; positive if temporal2Exclusive is later than
  temporal1Inclusive, negative if earlier`]
			]
		]],
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the enum constant of this class with the specified name.
The string must match `],
				[/* text */ 't', `exactly`],
				[/* text */ 't', ` an identifier used to declare an
enum constant in this class.  (Extraneous whitespace characters are 
not permitted.)`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the enum constant to be returned.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this enum class has no constant with the specified name`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the enum constant with the specified name`]
			]
		]],
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the constants of this enum class, in
the order they are declared.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]]
	],
	[/* enum values */
		[/* enum value */ 'NANOS', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of a nanosecond, the smallest supported unit of time.
 For the ISO calendar system, it is equal to the 1,000,000,000th part of the second unit.`]
			],
		]],
		[/* enum value */ 'MICROS', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of a microsecond.
 For the ISO calendar system, it is equal to the 1,000,000th part of the second unit.`]
			],
		]],
		[/* enum value */ 'MILLIS', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of a millisecond.
 For the ISO calendar system, it is equal to the 1000th part of the second unit.`]
			],
		]],
		[/* enum value */ 'SECONDS', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of a second.
 For the ISO calendar system, it is equal to the second in the SI system
 of units, except around a leap-second.`]
			],
		]],
		[/* enum value */ 'MINUTES', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of a minute.
 For the ISO calendar system, it is equal to 60 seconds.`]
			],
		]],
		[/* enum value */ 'HOURS', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of an hour.
 For the ISO calendar system, it is equal to 60 minutes.`]
			],
		]],
		[/* enum value */ 'HALF_DAYS', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of half a day, as used in AM/PM.
 For the ISO calendar system, it is equal to 12 hours.`]
			],
		]],
		[/* enum value */ 'DAYS', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of a day.
 For the ISO calendar system, it is the standard day from midnight to midnight.
 The estimated duration of a day is `],
				[/* inline code block */ 'i', `24 Hours`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 When used with other calendar systems it must correspond to the day defined by
 the rising and setting of the Sun on Earth. It is not required that days begin
 at midnight - when converting between calendar systems, the date should be
 equivalent at midday.`]
			],
		]],
		[/* enum value */ 'WEEKS', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of a week.
 For the ISO calendar system, it is equal to 7 days.
 `],
				[/* block */ 'b', `
 When used with other calendar systems it must correspond to an integral number of days.`]
			],
		]],
		[/* enum value */ 'MONTHS', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of a month.
 For the ISO calendar system, the length of the month varies by month-of-year.
 The estimated duration of a month is one twelfth of `],
				[/* inline code block */ 'i', `365.2425 Days`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 When used with other calendar systems it must correspond to an integral number of days.`]
			],
		]],
		[/* enum value */ 'YEARS', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of a year.
 For the ISO calendar system, it is equal to 12 months.
 The estimated duration of a year is `],
				[/* inline code block */ 'i', `365.2425 Days`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 When used with other calendar systems it must correspond to an integral number of days
 or months roughly equal to a year defined by the passage of the Earth around the Sun.`]
			],
		]],
		[/* enum value */ 'DECADES', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of a decade.
 For the ISO calendar system, it is equal to 10 years.
 `],
				[/* block */ 'b', `
 When used with other calendar systems it must correspond to an integral number of days
 and is normally an integral number of years.`]
			],
		]],
		[/* enum value */ 'CENTURIES', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of a century.
 For the ISO calendar system, it is equal to 100 years.
 `],
				[/* block */ 'b', `
 When used with other calendar systems it must correspond to an integral number of days
 and is normally an integral number of years.`]
			],
		]],
		[/* enum value */ 'MILLENNIA', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of a millennium.
 For the ISO calendar system, it is equal to 1000 years.
 `],
				[/* block */ 'b', `
 When used with other calendar systems it must correspond to an integral number of days
 and is normally an integral number of years.`]
			],
		]],
		[/* enum value */ 'ERAS', [
			[/* enum value description */
				[/* text */ 't', `Unit that represents the concept of an era.
 The ISO calendar system doesn't have eras thus it is impossible to add
 an era to a date or date-time.
 The estimated duration of the era is artificially defined as `],
				[/* inline code block */ 'i', `1,000,000,000 Years`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 When used with other calendar systems there are no restrictions on the unit.`]
			],
		]],
		[/* enum value */ 'FOREVER', [
			[/* enum value description */
				[/* text */ 't', `Artificial unit that represents the concept of forever.
 This is primarily used with `],
				[/* reference */ 'r', `java.time.temporal.TemporalField`, `TemporalField`],
				[/* text */ 't', ` to represent unbounded fields
 such as the year or era.
 The estimated duration of this unit is artificially defined as the largest duration
 supported by `],
				[/* reference */ 'r', `java.time.Duration`, `Duration`],
				[/* text */ 't', `.`]
			],
		]]
	],
]);
