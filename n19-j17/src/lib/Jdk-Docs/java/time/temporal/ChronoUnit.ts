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
			[/* reference */ 'r', `java.time.temporal.TemporalUnit`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 These units are intended to be applicable in multiple calendar systems.
 For example, most non-ISO calendar systems define units of years, months and days,
 just with slightly different rules.
 The documentation of each unit explains how it operates.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
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
			/* throws */ UDF,
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
			/* parameters */ UDF,
			/* throws */ UDF,
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
			/* parameters */ UDF,
			/* throws */ UDF,
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
			/* parameters */ UDF,
			/* throws */ UDF,
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
			/* parameters */ UDF,
			/* throws */ UDF,
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
			/* parameters */ UDF,
			/* throws */ UDF,
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
			/* throws */ UDF,
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
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]]
	],
]);
