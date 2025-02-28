import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.Temporal', [
	[/* class description */
		[/* text */ 't', `Framework-level interface defining read-write access to a temporal object,
 such as a date, time, offset or some combination of these.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This is the base interface type for date, time and offset objects that
 are complete enough to be manipulated using plus and minus.
 It is implemented by those classes that can provide and manipulate information
 as `],
			[/* reference */ 'r', `java.time.temporal.TemporalField`],
			[/* text */ 't', ` or `],
			[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
			[/* text */ 't', `.
 See `],
			[/* reference */ 'r', `java.time.temporal.TemporalAccessor`],
			[/* text */ 't', ` for the read-only version of this interface.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Most date and time information can be represented as a number.
 These are modeled using `],
			[/* inline code block */ 'i', `TemporalField`],
			[/* text */ 't', ` with the number held using
 a `],
			[/* inline code block */ 'i', `long`],
			[/* text */ 't', ` to handle large values. Year, month and day-of-month are
 simple examples of fields, but they also include instant and offsets.
 See `],
			[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`],
			[/* text */ 't', ` for the standard set of fields.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Two pieces of date/time information cannot be represented by numbers,
 the `],
			[/* reference */ 'r', `java.time.chrono.Chronology`],
			[/* text */ 't', ` and the
 `],
			[/* reference */ 'r', `java.time.ZoneId`],
			[/* text */ 't', `.
 These can be accessed via `],
			[/* external link */ 'a', `TemporalAccessor.html#query(java.time.temporal.TemporalQuery)`, `queries`],
			[/* text */ 't', ` using
 the static methods defined on `],
			[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 This interface is a framework-level interface that should not be widely
 used in application code. Instead, applications should create and pass
 around instances of concrete types, such as `],
			[/* inline code block */ 'i', `LocalDate`],
			[/* text */ 't', `.
 There are many reasons for this, part of which is that implementations
 of this interface may be in calendar systems other than ISO.
 See `],
			[/* reference */ 'r', `java.time.chrono.ChronoLocalDate`],
			[/* text */ 't', ` for a fuller discussion of the issues.

 `]
		]],
		[/* block */ 'b', `When to implement`],
		[/* block */ 'b', `
 A class should implement this interface if it meets three criteria:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `it provides access to date/time/offset information, as per `],
				[/* inline code block */ 'i', `TemporalAccessor`]
			]],
			[/* block */ 'b', `the set of fields are contiguous from the largest to the smallest
 `],
			[/* block */ 'b', `the set of fields are complete, such that no other field is needed to define the
  valid range of values for the fields that are represented
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 Four examples make this clear:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `LocalDate`],
				[/* text */ 't', ` implements this interface as it represents a set of fields
  that are contiguous from days to forever and require no external information to determine
  the validity of each date. It is therefore able to implement plus/minus correctly.
 `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` implements this interface as it represents a set of fields
  that are contiguous from nanos to within days and require no external information to determine
  validity. It is able to implement plus/minus correctly, by wrapping around the day.
 `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `MonthDay`],
				[/* text */ 't', `, the combination of month-of-year and day-of-month, does not implement
  this interface.  While the combination is contiguous, from days to months within years,
  the combination does not have sufficient information to define the valid range of values
  for day-of-month.  As such, it is unable to implement plus/minus correctly.
 `]
			]],
			[/* block */ 'b', `The combination day-of-week and day-of-month ("Friday the 13th") should not implement
  this interface. It does not represent a contiguous set of fields, as days to weeks overlaps
  days to months.
 `]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'isSupported(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified unit is supported.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This checks if the specified unit can be added to, or subtracted from, this date-time.
 If false, then calling the `],
					[/* reference */ 'r', `plus(long, TemporalUnit)`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `minus`],
					[/* text */ 't', ` methods will throw an exception.`]
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
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the field is not supported`]
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
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
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
		[/* method */ 'until(java.time.temporal.Temporal,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Calculates the amount of time until another temporal in terms of the specified unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This calculates the amount of time between two temporal objects
 in terms of a single `],
					[/* inline code block */ 'i', `TemporalUnit`],
					[/* text */ 't', `.
 The start and end points are `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', ` and the specified temporal.
 The end point is converted to be of the same type as the start point if different.
 The result will be negative if the end is before the start.
 For example, the amount in hours between two temporal objects can be
 calculated using `],
					[/* inline code block */ 'i', `startTime.until(endTime, HOURS)`],
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
					[/* external link */ 'a', `TemporalUnit.html#between(java.time.temporal.Temporal,java.time.temporal.Temporal)`, `TemporalUnit.between(Temporal, Temporal)`],
					[/* text */ 't', `:
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent
   temporal = start.until(end, unit);
   temporal = unit.between(start, end);
 `],
				[/* text */ 't', `
 The choice should be made based on which makes the code more readable.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 For example, this method allows the number of days between two dates to
 be calculated:
 `],
				[/* code block */ 'c', `  long daysBetween = start.until(end, DAYS);
  // or alternatively
  long daysBetween = DAYS.between(start, end);
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'endExclusive', [/* parameter description */
					[/* text */ 't', `the end temporal, exclusive, converted to be of the
  same type as this object, not null`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit to measure the amount in, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the amount cannot be calculated, or the end
  temporal cannot be converted to the same type as this temporal`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the amount of time between this temporal object and the specified one
  in terms of the unit; positive if the specified object is later than this one,
  negative if it is earlier than this one`]
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
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the specified period subtracted, not null`]
			]
		]]
	],
]);
