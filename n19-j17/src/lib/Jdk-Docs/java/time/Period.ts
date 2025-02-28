import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.time.Period', [
	[/* class description */
		[/* text */ 't', `A date-based amount of time in the ISO-8601 calendar system,
 such as '2 years, 3 months and 4 days'.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This class models a quantity or amount of time in terms of years, months and days.
 See `],
			[/* reference */ 'r', `java.time.Duration`],
			[/* text */ 't', ` for the time-based equivalent to this class.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Durations and periods differ in their treatment of daylight savings time
 when added to `],
			[/* reference */ 'r', `java.time.ZonedDateTime`],
			[/* text */ 't', `. A `],
			[/* inline code block */ 'i', `Duration`],
			[/* text */ 't', ` will add an exact
 number of seconds, thus a duration of one day is always exactly 24 hours.
 By contrast, a `],
			[/* inline code block */ 'i', `Period`],
			[/* text */ 't', ` will add a conceptual day, trying to maintain
 the local time.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 For example, consider adding a period of one day and a duration of one day to
 18:00 on the evening before a daylight savings gap. The `],
			[/* inline code block */ 'i', `Period`],
			[/* text */ 't', ` will add
 the conceptual day and result in a `],
			[/* inline code block */ 'i', `ZonedDateTime`],
			[/* text */ 't', ` at 18:00 the following day.
 By contrast, the `],
			[/* inline code block */ 'i', `Duration`],
			[/* text */ 't', ` will add exactly 24 hours, resulting in a
 `],
			[/* inline code block */ 'i', `ZonedDateTime`],
			[/* text */ 't', ` at 19:00 the following day (assuming a one hour DST gap).
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The supported units of a period are `],
			[/* external link */ 'a', `temporal/ChronoUnit.html#YEARS`, `YEARS`],
			[/* text */ 't', `,
 `],
			[/* external link */ 'a', `temporal/ChronoUnit.html#MONTHS`, `MONTHS`],
			[/* text */ 't', ` and `],
			[/* external link */ 'a', `temporal/ChronoUnit.html#DAYS`, `DAYS`],
			[/* text */ 't', `.
 All three fields are always present, but may be set to zero.
 `]
		]],
		[/* block */ 'b', `
 The ISO-8601 calendar system is the modern civil calendar system used today
 in most of the world. It is equivalent to the proleptic Gregorian calendar
 system, in which today's rules for leap years are applied for all time.
 `],
		[/* block */ 'b', `
 The period is modeled as a directed amount of time, meaning that individual parts of the
 period may be negative.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This is a `],
			[/* external link */ 'a', `../../../java.base/java/lang/doc-files/ValueBased.html`, `value-based`],
			[/* text */ 't', `
 class; programmers should treat instances that are
 `],
			[/* reference */ 'r', `equal`],
			[/* text */ 't', ` as interchangeable and should not
 use instances for synchronization, or unpredictable behavior may
 occur. For example, in a future release, synchronization may fail.
 The `],
			[/* inline code block */ 'i', `equals`],
			[/* text */ 't', ` method should be used for comparisons.`]
		]]
	],
	[/* fields */
		[/* field */ 'ZERO', [
			[/* field description */
				[/* text */ 't', `A constant for a period of zero.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'get(java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* text */ 't', `Gets the value of the requested unit.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a value for each of the three supported units,
 `],
					[/* external link */ 'a', `temporal/ChronoUnit.html#YEARS`, `YEARS`],
					[/* text */ 't', `, `],
					[/* external link */ 'a', `temporal/ChronoUnit.html#MONTHS`, `MONTHS`],
					[/* text */ 't', ` and
 `],
					[/* external link */ 'a', `temporal/ChronoUnit.html#DAYS`, `DAYS`],
					[/* text */ 't', `.
 All other units throw an exception.`]
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
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this period is equal to another period.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison is based on the type `],
					[/* inline code block */ 'i', `Period`],
					[/* text */ 't', ` and each of the three amounts.
 To be equal, the years, months and days units must be individually equal.
 Note that this means that a period of "15 Months" is not equal to a period
 of "1 Year and 3 Months".`]
				]]
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
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this period as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `, such as `],
				[/* inline code block */ 'i', `P6Y3M1D`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The output will be in the ISO-8601 period format.
 A zero period will be represented as zero days, 'P0D'.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this period, not null`]
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
		[/* method */ 'of(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` representing a number of years, months and days.
 `],
				[/* block */ 'b', `
 This creates an instance based on years, months and days.`]
			],
			[/* parameters */
				[/* parameter */ 'years', [/* parameter description */
					[/* text */ 't', `the amount of years, may be negative`]
				]],
				[/* parameter */ 'months', [/* parameter description */
					[/* text */ 't', `the amount of months, may be negative`]
				]],
				[/* parameter */ 'days', [/* parameter description */
					[/* text */ 't', `the amount of days, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the period of years, months and days, not null`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` from a temporal amount.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains a period based on the specified amount.
 A `],
					[/* inline code block */ 'i', `TemporalAmount`],
					[/* text */ 't', ` represents an  amount of time, which may be
 date-based or time-based, which this factory extracts to a `],
					[/* inline code block */ 'i', `Period`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion loops around the set of units from the amount and uses
 the `],
					[/* external link */ 'a', `temporal/ChronoUnit.html#YEARS`, `YEARS`],
					[/* text */ 't', `, `],
					[/* external link */ 'a', `temporal/ChronoUnit.html#MONTHS`, `MONTHS`],
					[/* text */ 't', `
 and `],
					[/* external link */ 'a', `temporal/ChronoUnit.html#DAYS`, `DAYS`],
					[/* text */ 't', ` units to create a period.
 If any other units are found then an exception is thrown.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the amount is a `],
					[/* inline code block */ 'i', `ChronoPeriod`],
					[/* text */ 't', ` then it must use the ISO chronology.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'amount', [/* parameter description */
					[/* text */ 't', `the temporal amount to convert, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to convert to a `],
					[/* inline code block */ 'i', `Period`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if the amount of years, months or days exceeds an int`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the equivalent period, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` from a text string such as `],
				[/* inline code block */ 'i', `PnYnMnD`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will parse the string produced by `],
					[/* inline code block */ 'i', `toString()`],
					[/* text */ 't', ` which is
 based on the ISO-8601 period formats `],
					[/* inline code block */ 'i', `PnYnMnD`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `PnW`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The string starts with an optional sign, denoted by the ASCII negative
 or positive symbol. If negative, the whole period is negated.
 The ASCII letter "P" is next in upper or lower case.
 There are then four sections, each consisting of a number and a suffix.
 At least one of the four sections must be present.
 The sections have suffixes in ASCII of "Y", "M", "W" and "D" for
 years, months, weeks and days, accepted in upper or lower case.
 The suffixes must occur in order.
 The number part of each section must consist of ASCII digits.
 The number may be prefixed by the ASCII negative or positive symbol.
 The number must parse to an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The leading plus/minus sign, and negative values for other units are
 not part of the ISO-8601 standard. In addition, ISO-8601 does not
 permit mixing between the `],
					[/* inline code block */ 'i', `PnYnMnD`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `PnW`],
					[/* text */ 't', ` formats.
 Any week-based input is multiplied by 7 and treated as a number of days.
 `]
				]],
				[/* block */ 'b', `
 For example, the following are valid inputs:
 `],
				[/* code block */ 'c', `   "P2Y"             -- Period.ofYears(2)
   "P3M"             -- Period.ofMonths(3)
   "P4W"             -- Period.ofWeeks(4)
   "P5D"             -- Period.ofDays(5)
   "P1Y2M3D"         -- Period.of(1, 2, 3)
   "P1Y2M3W4D"       -- Period.of(1, 2, 25)
   "P-1Y2M"          -- Period.of(-1, 2, 0)
   "-P1Y2M"          -- Period.of(-1, -2, 0)
 `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.format.DateTimeParseException', [/* throw description */
					[/* text */ 't', `if the text cannot be parsed to a period`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed period, not null`]
			]
		]],
		[/* method */ 'normalized()', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the years and months normalized.
 `],
				[/* block */ 'b', `
 This normalizes the years and months units, leaving the days unit unchanged.
 The months unit is adjusted to have an absolute value less than 12,
 with the years unit being adjusted to compensate. For example, a period of
 "1 Year and 15 months" will be normalized to "2 years and 3 months".
 `],
				[/* block */ 'b', `
 The sign of the years and months units will be the same after normalization.
 For example, a period of "1 year and -25 months" will be normalized to
 "-1 year and -1 month".
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
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` based on this period with excess months normalized to years, not null`]
			]
		]],
		[/* method */ 'between(java.time.LocalDate,java.time.LocalDate)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` consisting of the number of years, months,
 and days between two dates.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The start date is included, but the end date is not.
 The period is calculated by removing complete months, then calculating
 the remaining number of days, adjusting to ensure that both have the same sign.
 The number of months is then split into years and months based on a 12 month year.
 A month is considered if the end day-of-month is greater than or equal to the start day-of-month.
 For example, from `],
					[/* inline code block */ 'i', `2010-01-15`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `2011-03-18`],
					[/* text */ 't', ` is one year, two months and three days.
 `]
				]],
				[/* block */ 'b', `
 The result of this method can be a negative period if the end is before the start.
 The negative sign will be the same in each of year, month and day.`]
			],
			[/* parameters */
				[/* parameter */ 'startDateInclusive', [/* parameter description */
					[/* text */ 't', `the start date, inclusive, not null`]
				]],
				[/* parameter */ 'endDateExclusive', [/* parameter description */
					[/* text */ 't', `the end date, exclusive, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the period between this date and the end date, not null`]
			]
		]],
		[/* method */ 'isNegative()', [
			[/* method description */
				[/* text */ 't', `Checks if any of the three units of this period are negative.
 `],
				[/* block */ 'b', `
 This checks whether the years, months or days units are less than zero.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if any unit of this period is negative`]
			]
		]],
		[/* method */ 'isZero()', [
			[/* method description */
				[/* text */ 't', `Checks if all three units of this period are zero.
 `],
				[/* block */ 'b', `
 A zero period has the value zero for the years, months and days units.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this period is zero-length`]
			]
		]],
		[/* method */ 'getChronology()', [
			[/* method description */
				[/* text */ 't', `Gets the chronology of this period, which is the ISO calendar system.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', ` represents the calendar system in use.
 The ISO-8601 calendar system is the modern civil calendar system used today
 in most of the world. It is equivalent to the proleptic Gregorian calendar
 system, in which today's rules for leap years are applied for all time.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ISO chronology, not null`]
			]
		]],
		[/* method */ 'plus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the specified period added.
 `],
				[/* block */ 'b', `
 This operates separately on the years, months and days.
 No normalization is performed.
 `],
				[/* block */ 'b', `
 For example, "1 year, 6 months and 3 days" plus "2 years, 2 months and 2 days"
 returns "3 years, 8 months and 5 days".
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The specified amount is typically an instance of `],
					[/* inline code block */ 'i', `Period`],
					[/* text */ 't', `.
 Other types are interpreted using `],
					[/* reference */ 'r', `from(TemporalAmount)`],
					[/* text */ 't', `.
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
					[/* text */ 't', `if the specified amount has a non-ISO chronology or
  contains an invalid unit`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Period`],
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
 If the temporal has a chronology, it must be the ISO chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In most cases, it is clearer to reverse the calling pattern by using
 `],
					[/* external link */ 'a', `temporal/Temporal.html#plus(java.time.temporal.TemporalAmount)`, `Temporal.plus(TemporalAmount)`],
					[/* text */ 't', `.
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   dateTime = thisPeriod.addTo(dateTime);
   dateTime = dateTime.plus(thisPeriod);
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The calculation operates as follows.
 First, the chronology of the temporal is checked to ensure it is ISO chronology or null.
 Second, if the months are zero, the years are added if non-zero, otherwise
 the combination of years and months is added if non-zero.
 Finally, any days are added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This approach ensures that a partial period can be added to a partial date.
 For example, a period of years and/or months can be added to a `],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', `,
 but a period including days cannot.
 The approach also adds years and months together when necessary, which ensures
 correct behaviour at the end of the month.
 `]
				]],
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
		[/* method */ 'getUnits()', [
			[/* method description */
				[/* text */ 't', `Gets the set of units supported by this period.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The supported units are `],
					[/* external link */ 'a', `temporal/ChronoUnit.html#YEARS`, `YEARS`],
					[/* text */ 't', `,
 `],
					[/* external link */ 'a', `temporal/ChronoUnit.html#MONTHS`, `MONTHS`],
					[/* text */ 't', ` and `],
					[/* external link */ 'a', `temporal/ChronoUnit.html#DAYS`, `DAYS`],
					[/* text */ 't', `.
 They are returned in the order years, months, days.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This set can be used in conjunction with `],
					[/* reference */ 'r', `get(TemporalUnit)`],
					[/* text */ 't', `
 to access the entire state of the period.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a list containing the years, months and days units, not null`]
			]
		]],
		[/* method */ 'subtractFrom(java.time.temporal.Temporal)', [
			[/* method description */
				[/* text */ 't', `Subtracts this period from the specified temporal object.
 `],
				[/* block */ 'b', `
 This returns a temporal object of the same observable type as the input
 with this period subtracted.
 If the temporal has a chronology, it must be the ISO chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In most cases, it is clearer to reverse the calling pattern by using
 `],
					[/* external link */ 'a', `temporal/Temporal.html#minus(java.time.temporal.TemporalAmount)`, `Temporal.minus(TemporalAmount)`],
					[/* text */ 't', `.
 `]
				]],
				[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   dateTime = thisPeriod.subtractFrom(dateTime);
   dateTime = dateTime.minus(thisPeriod);
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 The calculation operates as follows.
 First, the chronology of the temporal is checked to ensure it is ISO chronology or null.
 Second, if the months are zero, the years are subtracted if non-zero, otherwise
 the combination of years and months is subtracted if non-zero.
 Finally, any days are subtracted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This approach ensures that a partial period can be subtracted from a partial date.
 For example, a period of years and/or months can be subtracted from a `],
					[/* inline code block */ 'i', `YearMonth`],
					[/* text */ 't', `,
 but a period including days cannot.
 The approach also subtracts years and months together when necessary, which ensures
 correct behaviour at the end of the month.
 `]
				]],
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
		[/* method */ 'negated()', [
			[/* method description */
				[/* text */ 't', `Returns a new instance with each amount in this period negated.
 `],
				[/* block */ 'b', `
 This returns a period with each of the years, months and days units
 individually negated.
 For example, a period of "2 years, -3 months and 4 days" will be
 negated to "-2 years, 3 months and -4 days".
 No normalization is performed.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs, which only happens if
  one of the units has the value `],
					[/* inline code block */ 'i', `Integer.MIN_VALUE`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` based on this period with the amounts negated, not null`]
			]
		]],
		[/* method */ 'multipliedBy(int)', [
			[/* method description */
				[/* text */ 't', `Returns a new instance with each element in this period multiplied
 by the specified scalar.
 `],
				[/* block */ 'b', `
 This returns a period with each of the years, months and days units
 individually multiplied.
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
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` based on this period with the amounts multiplied by the scalar, not null`]
			]
		]],
		[/* method */ 'plusDays(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the specified days added.
 `],
				[/* block */ 'b', `
 This adds the amount to the days unit in a copy of this period.
 The years and months units are unaffected.
 For example, "1 year, 6 months and 3 days" plus 2 days returns "1 year, 6 months and 5 days".
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'daysToAdd', [/* parameter description */
					[/* text */ 't', `the days to add, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` based on this period with the specified days added, not null`]
			]
		]],
		[/* method */ 'minus(java.time.temporal.TemporalAmount)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the specified period subtracted.
 `],
				[/* block */ 'b', `
 This operates separately on the years, months and days.
 No normalization is performed.
 `],
				[/* block */ 'b', `
 For example, "1 year, 6 months and 3 days" minus "2 years, 2 months and 2 days"
 returns "-1 years, 4 months and 1 day".
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The specified amount is typically an instance of `],
					[/* inline code block */ 'i', `Period`],
					[/* text */ 't', `.
 Other types are interpreted using `],
					[/* reference */ 'r', `from(TemporalAmount)`],
					[/* text */ 't', `.
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
					[/* text */ 't', `if the specified amount has a non-ISO chronology or
  contains an invalid unit`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` based on this period with the requested period subtracted, not null`]
			]
		]],
		[/* method */ 'ofDays(int)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` representing a number of days.
 `],
				[/* block */ 'b', `
 The resulting period will have the specified days.
 The years and months units will be zero.`]
			],
			[/* parameters */
				[/* parameter */ 'days', [/* parameter description */
					[/* text */ 't', `the number of days, positive or negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the period of days, not null`]
			]
		]],
		[/* method */ 'minusDays(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the specified days subtracted.
 `],
				[/* block */ 'b', `
 This subtracts the amount from the days unit in a copy of this period.
 The years and months units are unaffected.
 For example, "1 year, 6 months and 3 days" minus 2 days returns "1 year, 6 months and 1 day".
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'daysToSubtract', [/* parameter description */
					[/* text */ 't', `the months to subtract, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` based on this period with the specified days subtracted, not null`]
			]
		]],
		[/* method */ 'minusYears(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the specified years subtracted.
 `],
				[/* block */ 'b', `
 This subtracts the amount from the years unit in a copy of this period.
 The months and days units are unaffected.
 For example, "1 year, 6 months and 3 days" minus 2 years returns "-1 years, 6 months and 3 days".
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'yearsToSubtract', [/* parameter description */
					[/* text */ 't', `the years to subtract, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` based on this period with the specified years subtracted, not null`]
			]
		]],
		[/* method */ 'plusMonths(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the specified months added.
 `],
				[/* block */ 'b', `
 This adds the amount to the months unit in a copy of this period.
 The years and days units are unaffected.
 For example, "1 year, 6 months and 3 days" plus 2 months returns "1 year, 8 months and 3 days".
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'monthsToAdd', [/* parameter description */
					[/* text */ 't', `the months to add, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` based on this period with the specified months added, not null`]
			]
		]],
		[/* method */ 'getYears()', [
			[/* method description */
				[/* text */ 't', `Gets the amount of years of this period.
 `],
				[/* block */ 'b', `
 This returns the years unit.
 `],
				[/* block */ 'b', `
 The months unit is not automatically normalized with the years unit.
 This means that a period of "15 months" is different to a period
 of "1 year and 3 months".`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the amount of years of this period, may be negative`]
			]
		]],
		[/* method */ 'getMonths()', [
			[/* method description */
				[/* text */ 't', `Gets the amount of months of this period.
 `],
				[/* block */ 'b', `
 This returns the months unit.
 `],
				[/* block */ 'b', `
 The months unit is not automatically normalized with the years unit.
 This means that a period of "15 months" is different to a period
 of "1 year and 3 months".`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the amount of months of this period, may be negative`]
			]
		]],
		[/* method */ 'getDays()', [
			[/* method description */
				[/* text */ 't', `Gets the amount of days of this period.
 `],
				[/* block */ 'b', `
 This returns the days unit.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the amount of days of this period, may be negative`]
			]
		]],
		[/* method */ 'plusYears(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the specified years added.
 `],
				[/* block */ 'b', `
 This adds the amount to the years unit in a copy of this period.
 The months and days units are unaffected.
 For example, "1 year, 6 months and 3 days" plus 2 years returns "3 years, 6 months and 3 days".
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'yearsToAdd', [/* parameter description */
					[/* text */ 't', `the years to add, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` based on this period with the specified years added, not null`]
			]
		]],
		[/* method */ 'toTotalMonths()', [
			[/* method description */
				[/* text */ 't', `Gets the total number of months in this period.
 `],
				[/* block */ 'b', `
 This returns the total number of months in the period by multiplying the
 number of years by 12 and adding the number of months.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the total number of months in the period, may be negative`]
			]
		]],
		[/* method */ 'ofYears(int)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` representing a number of years.
 `],
				[/* block */ 'b', `
 The resulting period will have the specified years.
 The months and days units will be zero.`]
			],
			[/* parameters */
				[/* parameter */ 'years', [/* parameter description */
					[/* text */ 't', `the number of years, positive or negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the period of years, not null`]
			]
		]],
		[/* method */ 'ofMonths(int)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` representing a number of months.
 `],
				[/* block */ 'b', `
 The resulting period will have the specified months.
 The years and days units will be zero.`]
			],
			[/* parameters */
				[/* parameter */ 'months', [/* parameter description */
					[/* text */ 't', `the number of months, positive or negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the period of months, not null`]
			]
		]],
		[/* method */ 'ofWeeks(int)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` representing a number of weeks.
 `],
				[/* block */ 'b', `
 The resulting period will be day-based, with the amount of days
 equal to the number of weeks multiplied by 7.
 The years and months units will be zero.`]
			],
			[/* parameters */
				[/* parameter */ 'weeks', [/* parameter description */
					[/* text */ 't', `the number of weeks, positive or negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the period, with the input weeks converted to days, not null`]
			]
		]],
		[/* method */ 'withYears(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the specified amount of years.
 `],
				[/* block */ 'b', `
 This sets the amount of the years unit in a copy of this period.
 The months and days units are unaffected.
 `],
				[/* block */ 'b', `
 The months unit is not automatically normalized with the years unit.
 This means that a period of "15 months" is different to a period
 of "1 year and 3 months".
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'years', [/* parameter description */
					[/* text */ 't', `the years to represent, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` based on this period with the requested years, not null`]
			]
		]],
		[/* method */ 'withMonths(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the specified amount of months.
 `],
				[/* block */ 'b', `
 This sets the amount of the months unit in a copy of this period.
 The years and days units are unaffected.
 `],
				[/* block */ 'b', `
 The months unit is not automatically normalized with the years unit.
 This means that a period of "15 months" is different to a period
 of "1 year and 3 months".
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'months', [/* parameter description */
					[/* text */ 't', `the months to represent, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` based on this period with the requested months, not null`]
			]
		]],
		[/* method */ 'withDays(int)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the specified amount of days.
 `],
				[/* block */ 'b', `
 This sets the amount of the days unit in a copy of this period.
 The years and months units are unaffected.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'days', [/* parameter description */
					[/* text */ 't', `the days to represent, may be negative`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` based on this period with the requested days, not null`]
			]
		]],
		[/* method */ 'minusMonths(long)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this period with the specified months subtracted.
 `],
				[/* block */ 'b', `
 This subtracts the amount from the months unit in a copy of this period.
 The years and days units are unaffected.
 For example, "1 year, 6 months and 3 days" minus 2 months returns "1 year, 4 months and 3 days".
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'monthsToSubtract', [/* parameter description */
					[/* text */ 't', `the years to subtract, positive or negative`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Period`],
				[/* text */ 't', ` based on this period with the specified months subtracted, not null`]
			]
		]]
	],
]);
