import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.chrono.HijrahDate', [
	[/* class description */
		[/* text */ 't', `A date in the Hijrah calendar system.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This date operates using one of several variants of the
 `],
			[/* reference */ 'r', `java.time.chrono.HijrahChronology`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The Hijrah calendar has a different total of days in a year than
 Gregorian calendar, and the length of each month is based on the period
 of a complete revolution of the moon around the earth
 (as between successive new moons).
 Refer to the `],
			[/* reference */ 'r', `java.time.chrono.HijrahChronology`],
			[/* text */ 't', ` for details of supported variants.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Each HijrahDate is created bound to a particular HijrahChronology,
 The same chronology is propagated to each HijrahDate computed from the date.
 To use a different Hijrah variant, its HijrahChronology can be used
 to create new HijrahDate instances.
 Alternatively, the `],
			[/* reference */ 'r', `withVariant(java.time.chrono.HijrahChronology)`],
			[/* text */ 't', ` method can be used to convert
 to a new HijrahChronology.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 This is a `],
			[/* external link */ 'a', `../../../../java.base/java/lang/doc-files/ValueBased.html`, `value-based`],
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
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this date to another date, including the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Compares this `],
					[/* inline code block */ 'i', `HijrahDate`],
					[/* text */ 't', ` with another ensuring that the date is the same.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Only objects of type `],
					[/* inline code block */ 'i', `HijrahDate`],
					[/* text */ 't', ` are compared, other types return false.
 To compare the dates of two `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` instances, including dates
 in two different chronologies, use `],
					[/* external link */ 'a', `../temporal/ChronoField.html#EPOCH_DAY`, `ChronoField.EPOCH_DAY`],
					[/* text */ 't', ` as a comparator.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other date and the Chronologies are equal`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this date.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a suitable hash code based only on the Chronology and the date`]
			]
		]],
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
		[/* method */ 'of(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `HijrahDate`],
				[/* text */ 't', ` of the Islamic Umm Al-Qura calendar
 from the proleptic-year, month-of-year and day-of-month fields.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `HijrahDate`],
					[/* text */ 't', ` with the specified fields.
 The day must be valid for the year and month, otherwise an exception will be thrown.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'prolepticYear', [/* parameter description */
					[/* text */ 't', `the Hijrah proleptic-year`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the Hijrah month-of-year, from 1 to 12`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the Hijrah day-of-month, from 1 to 30`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the value of any field is out of range,
  or if the day-of-month is invalid for the month-year`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the date in Hijrah calendar system, not null`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `HijrahDate`],
				[/* text */ 't', ` of the Islamic Umm Al-Qura calendar from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains a date in the Hijrah calendar system based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `HijrahDate`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion typically uses the `],
					[/* external link */ 'a', `../temporal/ChronoField.html#EPOCH_DAY`, `EPOCH_DAY`],
					[/* text */ 't', `
 field, which is standardized across calendar systems.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method matches the signature of the functional interface `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
					[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
					[/* inline code block */ 'i', `HijrahDate::from`],
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
					[/* inline code block */ 'i', `HijrahDate`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the date in Hijrah calendar system, not null`]
			]
		]],
		[/* method */ 'range(java.time.temporal.TemporalField)', UDF],
		[/* method */ 'now(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains the current `],
				[/* inline code block */ 'i', `HijrahDate`],
				[/* text */ 't', ` of the Islamic Umm Al-Qura calendar
 in the specified time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* external link */ 'a', `../Clock.html#system(java.time.ZoneId)`, `system clock`],
					[/* text */ 't', ` to obtain the current date.
 Specifying the time-zone avoids dependence on the default time-zone.
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current date using the system clock, not null`]
			]
		]],
		[/* method */ 'now()', [
			[/* method description */
				[/* text */ 't', `Obtains the current `],
				[/* inline code block */ 'i', `HijrahDate`],
				[/* text */ 't', ` of the Islamic Umm Al-Qura calendar
 in the default time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* external link */ 'a', `../Clock.html#systemDefaultZone()`, `system clock`],
					[/* text */ 't', ` in the default
 time-zone to obtain the current date.
 `]
				]],
				[/* block */ 'b', `
 Using this method will prevent the ability to use an alternate clock for testing
 because the clock is hard-coded.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current date using the system clock and default time-zone, not null`]
			]
		]],
		[/* method */ 'now(java.time.Clock)', [
			[/* method description */
				[/* text */ 't', `Obtains the current `],
				[/* inline code block */ 'i', `HijrahDate`],
				[/* text */ 't', ` of the Islamic Umm Al-Qura calendar
 from the specified clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the specified clock to obtain the current date - today.
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
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the current date cannot be obtained`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the current date, not null`]
			]
		]],
		[/* method */ 'getChronology()', [
			[/* method description */
				[/* text */ 't', `Gets the chronology of this date, which is the Hijrah calendar system.
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
				[/* text */ 't', `the Hijrah chronology, not null`]
			]
		]],
		[/* method */ 'with(java.time.temporal.TemporalField,long)', [
			[/* method description */
				[/* block */ 'b', [
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
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to set in the result, not null`]
				]],
				[/* parameter */ 'newValue', [/* parameter description */
					[/* text */ 't', `the new value of the field in the result`]
				]]
			],
			/* throws */ UDF,
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
					[/* text */ 't', `if unable to make the adjustment.
     For example, if the adjuster requires an ISO chronology`]
				]],
				[/* throw */ 'java.lang.ArithmeticException', [/* throw description */
					[/* text */ 't', `if numeric overflow occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an object of the same type with the specified adjustment made, not null`]
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
		[/* method */ 'plus(long,java.time.temporal.TemporalUnit)', [
			[/* method description */
				[/* block */ 'b', [
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
				]]
			],
			[/* parameters */
				[/* parameter */ 'amountToAdd', [/* parameter description */
					[/* text */ 't', `the amount of the specified unit to add, may be negative`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit of the amount to add, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an object of the same type with the specified period added, not null`]
			]
		]],
		[/* method */ 'until(java.time.chrono.ChronoLocalDate)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Calculates the period between this date and another date as a `],
					[/* inline code block */ 'i', `ChronoPeriod`],
					[/* text */ 't', `.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 This calculates the period between two dates. All supplied chronologies
 calculate the period using years, months and days, however the
 `],
						[/* inline code block */ 'i', `ChronoPeriod`],
						[/* text */ 't', ` API allows the period to be represented using other units.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `
 The start and end points are `],
						[/* inline code block */ 'i', `this`],
						[/* text */ 't', ` and the specified date.
 The result will be negative if the end is before the start.
 The negative sign will be the same in each of year, month and day.
 `]
					]],
					[/* block */ 'b', `
 The calculation is performed using the chronology of this date.
 If necessary, the input date will be converted to match.
 `],
					[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'endDate', [/* parameter description */
					[/* text */ 't', `the end date, exclusive, which may be in any chronology, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the period between this date and the end date, not null`]
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
				[/* block */ 'b', [
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
				]]
			],
			[/* parameters */
				[/* parameter */ 'amountToSubtract', [/* parameter description */
					[/* text */ 't', `the amount of the specified unit to subtract, may be negative`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `the unit of the amount to subtract, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an object of the same type with the specified period subtracted, not null`]
			]
		]],
		[/* method */ 'isLeapYear()', [
			[/* method description */
				[/* text */ 't', `Checks if the year is a leap year, according to the Hijrah calendar system rules.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this date is in a leap year`]
			]
		]],
		[/* method */ 'atTime(java.time.LocalTime)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Combines this date with a time to create a `],
					[/* inline code block */ 'i', `ChronoLocalDateTime`],
					[/* text */ 't', `.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 This returns a `],
						[/* inline code block */ 'i', `ChronoLocalDateTime`],
						[/* text */ 't', ` formed from this date at the specified time.
 All possible combinations of date and time are valid.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'localTime', [/* parameter description */
					[/* text */ 't', `the local time to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the local date-time formed from this date and the specified time, not null`]
			]
		]],
		[/* method */ 'toEpochDay()', UDF],
		[/* method */ 'getEra()', [
			[/* method description */
				[/* text */ 't', `Gets the era applicable at this date.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The Hijrah calendar system has one era, 'AH',
 defined by `],
					[/* reference */ 'r', `enum class in java.time.chrono.HijrahEra`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the era applicable at this date, not null`]
			]
		]],
		[/* method */ 'lengthOfMonth()', [
			[/* method description */
				[/* text */ 't', `Returns the length of the month represented by this date.
 `],
				[/* block */ 'b', `
 This returns the length of the month in days.
 Month lengths in the Hijrah calendar system vary between 29 and 30 days.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the length of the month in days`]
			]
		]],
		[/* method */ 'lengthOfYear()', [
			[/* method description */
				[/* text */ 't', `Returns the length of the year represented by this date.
 `],
				[/* block */ 'b', `
 This returns the length of the year in days.
 A Hijrah calendar system year is typically shorter than
 that of the ISO calendar system.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the length of the year in days`]
			]
		]],
		[/* method */ 'withVariant(java.time.chrono.HijrahChronology)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `HijrahDate`],
				[/* text */ 't', ` with the Chronology requested.
 `],
				[/* block */ 'b', `
 The year, month, and day are checked against the new requested
 HijrahChronology.  If the chronology has a shorter month length
 for the month, the day is reduced to be the last day of the month.`]
			],
			[/* parameters */
				[/* parameter */ 'chronology', [/* parameter description */
					[/* text */ 't', `the new HijrahChonology, non-null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a HijrahDate with the requested HijrahChronology, non-null`]
			]
		]]
	],
]);
