import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.chrono.ChronoPeriod', [
	[/* class description */
		[/* text */ 't', `A date-based amount of time, such as '3 years, 4 months and 5 days' in an
 arbitrary chronology, intended for advanced globalization use cases.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This interface models a date-based amount of time in a calendar system.
 While most calendar systems use years, months and days, some do not.
 Therefore, this interface operates solely in terms of a set of supported
 units that are defined by the `],
			[/* inline code block */ 'i', `Chronology`],
			[/* text */ 't', `.
 The set of supported units is fixed for a given chronology.
 The amount of a supported unit may be set to zero.
 `]
		]],
		[/* block */ 'b', `
 The period is modeled as a directed amount of time, meaning that individual
 parts of the period may be negative.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this period is equal to another period, including the chronology.
 `],
				[/* block */ 'b', `
 Compares this period with another ensuring that the type, each amount and
 the chronology are the same.
 Note that this means that a period of "15 Months" is not equal to a period
 of "1 Year and 3 Months".`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other period`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this period.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this period as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The output will include the period amounts and chronology.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this period, not null`]
			]
		]],
		[/* method */ 'getChronology()', [
			[/* method description */
				[/* text */ 't', `Gets the chronology that defines the meaning of the supported units.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The period is defined by the chronology.
 It controls the supported units and restricts addition/subtraction
 to `],
					[/* inline code block */ 'i', `ChronoLocalDate`],
					[/* text */ 't', ` instances of the same chronology.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the chronology defining the period, not null`]
			]
		]],
		[/* method */ 'minus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the specified period subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the specified amount is a `],
					[/* inline code block */ 'i', `ChronoPeriod`],
					[/* text */ 't', ` then it must have
 the same chronology as this period. Implementations may choose to
 accept or reject other `],
					[/* inline code block */ 'i', `TemporalAmount`],
					[/* text */ 't', ` implementations.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'amountToSubtract', [/* parameter description */
					[/* text */ 't', `the period to subtract, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ChronoPeriod`],
				[/* text */ 't', ` based on this period with the requested period subtracted, not null`]
			]
		]],
		[/* method */ 'multipliedBy(int)', [
			[/* method description */
				[/* text */ 't', `Returns a new instance with each amount in this period in this period
 multiplied by the specified scalar.
 `],
				[/* block */ 'b', `
 This returns a period with each supported unit individually multiplied.
 For example, a period of "2 years, -3 months and 4 days" multiplied by
 3 will return "6 years, -9 months and 12 days".
 No normalization is performed.`]
			],
			[/* parameters */
				[/* parameter */ 'scalar', [/* parameter description */
					[/* text */ 't', `the scalar to multiply by, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ChronoPeriod`],
				[/* text */ 't', ` based on this period with the amounts multiplied
  by the scalar, not null`]
			]
		]],
		[/* method */ 'normalized()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the amounts of each unit normalized.
 `],
				[/* block */ 'b', `
 The process of normalization is specific to each calendar system.
 For example, in the ISO calendar system, the years and months are
 normalized but the days are not, such that "15 months" would be
 normalized to "1 year and 3 months".
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ChronoPeriod`],
				[/* text */ 't', ` based on this period with the amounts of each
  unit normalized, not null`]
			]
		]],
		[/* method */ 'plus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the specified period added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the specified amount is a `],
					[/* inline code block */ 'i', `ChronoPeriod`],
					[/* text */ 't', ` then it must have
 the same chronology as this period. Implementations may choose to
 accept or reject other `],
					[/* inline code block */ 'i', `TemporalAmount`],
					[/* text */ 't', ` implementations.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'amountToAdd', [/* parameter description */
					[/* text */ 't', `the period to add, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ChronoPeriod`],
				[/* text */ 't', ` based on this period with the requested period added, not null`]
			]
		]],
		[/* method */ 'addTo(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Adds this period to the specified temporal object.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with this period added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In most cases, it is clearer to reverse the calling pattern by using
 `],
					[/* reference */ 'r', `java.time.temporal.Temporal#plus(java.time.temporal.TemporalAmount)`, `Temporal.plus(TemporalAmount)`],
					[/* text */ 't', `.
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   dateTime = thisPeriod.addTo(dateTime);
   dateTime = dateTime.plus(thisPeriod);
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The specified temporal must have the same chronology as this period.
 This returns a temporal with the non-zero supported units added.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to adjust, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to add`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the adjustment made, not null`]
			]
		]],
		[/* method */ 'subtractFrom(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Subtracts this period from the specified temporal object.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with this period subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In most cases, it is clearer to reverse the calling pattern by using
 `],
					[/* reference */ 'r', `java.time.temporal.Temporal#minus(java.time.temporal.TemporalAmount)`, `Temporal.minus(TemporalAmount)`],
					[/* text */ 't', `.
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   dateTime = thisPeriod.subtractFrom(dateTime);
   dateTime = dateTime.minus(thisPeriod);
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The specified temporal must have the same chronology as this period.
 This returns a temporal with the non-zero supported units subtracted.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to adjust, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to subtract`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the adjustment made, not null`]
			]
		]],
		[/* method */ 'getUnits()', [
			[/* method description */
				[/* text */ 't', `Gets the set of units supported by this period.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The supported units are chronology specific.
 They will typically be `],
					[/* reference */ 'r', `java.time.temporal.ChronoUnit#YEARS`, `YEARS`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoUnit#MONTHS`, `MONTHS`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.time.temporal.ChronoUnit#DAYS`, `DAYS`],
					[/* text */ 't', `.
 They are returned in order from largest to smallest.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This set can be used in conjunction with `],
					[/* reference */ 'r', `#get(java.time.temporal.TemporalUnit)`, `get(TemporalUnit)`],
					[/* text */ 't', `
 to access the entire state of the period.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a list containing the supported units, not null`]
			]
		]],
		[/* method */ 'get(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the requested unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The supported units are chronology specific.
 They will typically be `],
					[/* reference */ 'r', `java.time.temporal.ChronoUnit#YEARS`, `YEARS`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoUnit#MONTHS`, `MONTHS`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.time.temporal.ChronoUnit#DAYS`, `DAYS`],
					[/* text */ 't', `.
 Requesting an unsupported unit will throw an exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `TemporalUnit`],
					[/* text */ 't', ` for which to return the value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]],
				[/* throw */ 'java.time.temporal.UnsupportedTemporalTypeException', [/* throw description */
					[/* text */ 't', `if the unit is not supported`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the long value of the unit`]
			]
		]],
		[/* method */ 'isNegative()', [
			[/* method description */
				[/* text */ 't', `Checks if any of the supported units of this period are negative.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if any unit of this period is negative`]
			]
		]],
		[/* method */ 'isZero()', [
			[/* method description */
				[/* text */ 't', `Checks if all the supported units of this period are zero.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this period is zero-length`]
			]
		]],
		[/* method */ 'negated()', [
			[/* method description */
				[/* text */ 't', `Returns a new instance with each amount in this period negated.
 `],
				[/* block */ 'b', `
 This returns a period with each supported unit individually negated.
 For example, a period of "2 years, -3 months and 4 days" will be
 negated to "-2 years, 3 months and -4 days".
 No normalization is performed.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs, which only happens if
  one of the units has the value `],
					[/* inline code block */ 'i', `Long.MIN_VALUE`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ChronoPeriod`],
				[/* text */ 't', ` based on this period with the amounts negated, not null`]
			]
		]],
		[/* method */ 'between(java.time.chrono.ChronoLocalDate,java.time.chrono.ChronoLocalDate)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `ChronoPeriod`],
				[/* text */ 't', ` consisting of amount of time between two dates.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The start date is included, but the end date is not.
 The period is calculated using `],
					[/* reference */ 'r', `java.time.chrono.ChronoLocalDate#until(java.time.chrono.ChronoLocalDate)`, `ChronoLocalDate.until(ChronoLocalDate)`],
					[/* text */ 't', `.
 As such, the calculation is chronology specific.
 `]
				]],
				[/* block */ 'b', `
 The chronology of the first date is used.
 The chronology of the second date is ignored, with the date being converted
 to the target chronology system before the calculation starts.
 `],
				[/* block */ 'b', `
 The result of this method can be a negative period if the end is before the start.
 In most cases, the positive/negative sign will be the same in each of the supported fields.`]
			],
			[/* parameters */
				[/* parameter */ 'startDateInclusive', [/* parameter description */
					[/* text */ 't', `the start date, inclusive, specifying the chronology of the calculation, not null`]
				]],
				[/* parameter */ 'endDateExclusive', [/* parameter description */
					[/* text */ 't', `the end date, exclusive, in any chronology, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the period between this date and the end date, not null`]
			]
		]]
	],
]);
