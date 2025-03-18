import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.chrono.IsoChronology', [
	[/* class description */
		[/* text */ 't', `The ISO calendar system.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This chronology defines the rules of the ISO calendar system.
 This calendar system is based on the ISO-8601 standard, which is the
 `],
			[/* text */ 't', `de facto`],
			[/* text */ 't', ` world calendar.
 `]
		]],
		[/* block */ 'b', `
 The fields are defined as follows:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', `era - There are two eras, 'Current Era' (CE) and 'Before Current Era' (BCE).
 `],
			[/* block */ 'b', `year-of-era - The year-of-era is the same as the proleptic-year for the current CE era.
  For the BCE era before the ISO epoch the year increases from 1 upwards as time goes backwards.
 `],
			[/* block */ 'b', `proleptic-year - The proleptic year is the same as the year-of-era for the
  current era. For the previous era, years have zero, then negative values.
 `],
			[/* block */ 'b', `month-of-year - There are 12 months in an ISO year, numbered from 1 to 12.
 `],
			[/* block */ 'b', `day-of-month - There are between 28 and 31 days in each of the ISO month, numbered from 1 to 31.
  Months 4, 6, 9 and 11 have 30 days, Months 1, 3, 5, 7, 8, 10 and 12 have 31 days.
  Month 2 has 28 days, or 29 in a leap year.
 `],
			[/* block */ 'b', `day-of-year - There are 365 days in a standard ISO year and 366 in a leap year.
  The days are numbered from 1 to 365 or 1 to 366.
 `],
			[/* block */ 'b', `leap-year - Leap years occur every 4 years, except where the year is divisble by 100 and not divisble by 400.
 `]
		]],
		[/* block */ 'b', '']
	],
	[/* fields */
		[/* field */ 'INSTANCE', [
			[/* field description */
				[/* text */ 't', `Singleton instance of the ISO chronology.`]
			],
		]]
	],
	/* constructors */,
	[/* methods */
		[/* method */ 'isLeapYear(long)', [
			[/* method description */
				[/* text */ 't', `Checks if the year is a leap year, according to the ISO proleptic
 calendar system rules.
 `],
				[/* block */ 'b', `
 This method applies the current rules for leap years across the whole time-line.
 In general, a year is a leap year if it is divisible by four without
 remainder. However, years divisible by 100, are not leap years, with
 the exception of years divisible by 400 which are.
 `],
				[/* block */ 'b', `
 For example, 1904 is a leap year it is divisible by 4.
 1900 was not a leap year as it is divisible by 100, however 2000 was a
 leap year as it is divisible by 400.
 `],
				[/* block */ 'b', `
 The calculation is proleptic - applying the same rules into the far future and far past.
 This is historically inaccurate, but is correct for the ISO-8601 standard.`]
			],
			[/* parameters */
				[/* parameter */ 'prolepticYear', [/* parameter description */
					[/* text */ 't', `the ISO proleptic year to check`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the year is leap, false otherwise`]
			]
		]],
		[/* method */ 'prolepticYear(java.time.chrono.Era,int)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Calculates the proleptic-year given the era and year-of-era.
 `],
					[/* block */ 'b', `
 This combines the era and year-of-era into the single proleptic-year field.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 If the chronology makes active use of eras, such as `],
						[/* inline code block */ 'i', `JapaneseChronology`],
						[/* text */ 't', `
 then the year-of-era will be validated against the era.
 For other chronologies, validation is optional.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'era', [/* parameter description */
					[/* text */ 't', `the era of the correct type for the chronology, not null`]
				]],
				[/* parameter */ 'yearOfEra', [/* parameter description */
					[/* text */ 't', `the chronology year-of-era`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the proleptic-year`]
			]
		]],
		[/* method */ 'getCalendarType()', [
			[/* method description */
				[/* text */ 't', `Gets the calendar type of the underlying calendar system - 'iso8601'.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The calendar type is an identifier defined by the
 `],
					[/* text */ 't', `Unicode Locale Data Markup Language (LDML)`],
					[/* text */ 't', ` specification.
 It can be used to lookup the `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', ` using `],
					[/* reference */ 'r', `java.time.chrono.Chronology#of(java.lang.String)`, `Chronology.of(String)`],
					[/* text */ 't', `.
 It can also be used as part of a locale, accessible via
 `],
					[/* reference */ 'r', `java.util.Locale#getUnicodeLocaleType(java.lang.String)`, `Locale.getUnicodeLocaleType(String)`],
					[/* text */ 't', ` with the key 'ca'.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the calendar system type - 'iso8601'`]
			]
		]],
		[/* method */ 'getId()', [
			[/* method description */
				[/* text */ 't', `Gets the ID of the chronology - 'ISO'.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ID uniquely identifies the `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', `.
 It can be used to lookup the `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', ` using `],
					[/* reference */ 'r', `java.time.chrono.Chronology#of(java.lang.String)`, `Chronology.of(String)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the chronology ID - 'ISO'`]
			]
		]],
		[/* method */ 'eraOf(int)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Creates the chronology era object from the numeric value.
 `],
					[/* block */ 'b', `
 The era is, conceptually, the largest division of the time-line.
 Most calendar systems have a single epoch dividing the time-line into two eras.
 However, some have multiple eras, such as one for the reign of each leader.
 The exact meaning is determined by the chronology according to the following constraints.
 `],
					[/* block */ 'b', `
 The era in use at 1970-01-01 must have the value 1.
 Later eras must have sequentially higher values.
 Earlier eras must have sequentially lower values.
 Each chronology must refer to an enum or similar singleton to provide the era values.
 `],
					[/* block */ 'b', `
 This method returns the singleton era of the correct type for the specified era value.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'eraValue', [/* parameter description */
					[/* text */ 't', `the era value`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the calendar system era, not null`]
			]
		]],
		[/* method */ 'date(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains an ISO local date from the proleptic-year, month-of-year
 and day-of-month fields.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is equivalent to `],
					[/* reference */ 'r', `java.time.LocalDate#of(int,int,int)`, `LocalDate.of(int, int, int)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'prolepticYear', [/* parameter description */
					[/* text */ 't', `the ISO proleptic-year`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the ISO month-of-year`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the ISO day-of-month`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the ISO local date, not null`]
			]
		]],
		[/* method */ 'date(java.time.chrono.Era,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains an ISO local date from the era, year-of-era, month-of-year
 and day-of-month fields.`]
			],
			[/* parameters */
				[/* parameter */ 'era', [/* parameter description */
					[/* text */ 't', `the ISO era, not null`]
				]],
				[/* parameter */ 'yearOfEra', [/* parameter description */
					[/* text */ 't', `the ISO year-of-era`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the ISO month-of-year`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the ISO day-of-month`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the type of `],
					[/* inline code block */ 'i', `era`],
					[/* text */ 't', ` is not `],
					[/* inline code block */ 'i', `IsoEra`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the ISO local date, not null`]
			]
		]],
		[/* method */ 'date(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an ISO local date from another date-time object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is equivalent to `],
					[/* reference */ 'r', `java.time.LocalDate#from(java.time.temporal.TemporalAccessor)`, `LocalDate.from(TemporalAccessor)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the date-time object to convert, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the ISO local date, not null`]
			]
		]],
		[/* method */ 'dateEpochDay(long)', [
			[/* method description */
				[/* text */ 't', `Obtains an ISO local date from the epoch-day.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is equivalent to `],
					[/* reference */ 'r', `java.time.LocalDate#ofEpochDay(long)`, `LocalDate.ofEpochDay(long)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'epochDay', [/* parameter description */
					[/* text */ 't', `the epoch day`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the ISO local date, not null`]
			]
		]],
		[/* method */ 'dateNow()', [
			[/* method description */
				[/* text */ 't', `Obtains the current ISO local date from the system clock in the default time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* reference */ 'r', `java.time.Clock#systemDefaultZone()`, `system clock`],
					[/* text */ 't', ` in the default
 time-zone to obtain the current date.
 `]
				]],
				[/* block */ 'b', `
 Using this method will prevent the ability to use an alternate clock for testing
 because the clock is hard-coded.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the current ISO local date using the system clock and default time-zone, not null`]
			]
		]],
		[/* method */ 'dateNow(java.time.Clock)', [
			[/* method description */
				[/* text */ 't', `Obtains the current ISO local date from the specified clock.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the specified clock to obtain the current date - today.
 Using this method allows the use of an alternate clock for testing.
 The alternate clock may be introduced using `],
					[/* reference */ 'r', `java.time.Clock`, `dependency injection`],
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
					[/* text */ 't', `if unable to create the date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the current ISO local date, not null`]
			]
		]],
		[/* method */ 'dateNow(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains the current ISO local date from the system clock in the specified time-zone.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will query the `],
					[/* reference */ 'r', `java.time.Clock#system(java.time.ZoneId)`, `system clock`],
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
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the current ISO local date using the system clock, not null`]
			]
		]],
		[/* method */ 'dateYearDay(int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains an ISO local date from the proleptic-year and day-of-year fields.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is equivalent to `],
					[/* reference */ 'r', `java.time.LocalDate#ofYearDay(int,int)`, `LocalDate.ofYearDay(int, int)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'prolepticYear', [/* parameter description */
					[/* text */ 't', `the ISO proleptic-year`]
				]],
				[/* parameter */ 'dayOfYear', [/* parameter description */
					[/* text */ 't', `the ISO day-of-year`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the ISO local date, not null`]
			]
		]],
		[/* method */ 'dateYearDay(java.time.chrono.Era,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains an ISO local date from the era, year-of-era and day-of-year fields.`]
			],
			[/* parameters */
				[/* parameter */ 'era', [/* parameter description */
					[/* text */ 't', `the ISO era, not null`]
				]],
				[/* parameter */ 'yearOfEra', [/* parameter description */
					[/* text */ 't', `the ISO year-of-era`]
				]],
				[/* parameter */ 'dayOfYear', [/* parameter description */
					[/* text */ 't', `the ISO day-of-year`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the ISO local date, not null`]
			]
		]],
		[/* method */ 'resolveDate(java.util.Map,java.time.format.ResolverStyle)', [
			[/* method description */
				[/* text */ 't', `Resolves parsed `],
				[/* inline code block */ 'i', `ChronoField`],
				[/* text */ 't', ` values into a date during parsing.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Most `],
					[/* inline code block */ 'i', `TemporalField`],
					[/* text */ 't', ` implementations are resolved using the
 resolve method on the field. By contrast, the `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` class
 defines fields that only have meaning relative to the chronology.
 As such, `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` date fields are resolved here in the
 context of a specific chronology.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` instances on the ISO calendar system are resolved
 as follows.
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `EPOCH_DAY`],
						[/* text */ 't', ` - If present, this is converted to a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', `
  and all other date fields are then cross-checked against the date.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `PROLEPTIC_MONTH`],
						[/* text */ 't', ` - If present, then it is split into the
  `],
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `MONTH_OF_YEAR`],
						[/* text */ 't', `. If the mode is strict or smart
  then the field is validated.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR_OF_ERA`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `ERA`],
						[/* text */ 't', ` - If both are present, then they
  are combined to form a `],
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', `. In lenient mode, the `],
						[/* inline code block */ 'i', `YEAR_OF_ERA`],
						[/* text */ 't', `
  range is not validated, in smart and strict mode it is. The `],
						[/* inline code block */ 'i', `ERA`],
						[/* text */ 't', ` is
  validated for range in all three modes. If only the `],
						[/* inline code block */ 'i', `YEAR_OF_ERA`],
						[/* text */ 't', ` is
  present, and the mode is smart or lenient, then the current era (CE/AD)
  is assumed. In strict mode, no era is assumed and the `],
						[/* inline code block */ 'i', `YEAR_OF_ERA`],
						[/* text */ 't', ` is
  left untouched. If only the `],
						[/* inline code block */ 'i', `ERA`],
						[/* text */ 't', ` is present, then it is left untouched.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `MONTH_OF_YEAR`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `DAY_OF_MONTH`],
						[/* text */ 't', ` -
  If all three are present, then they are combined to form a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', `.
  In all three modes, the `],
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` is validated. If the mode is smart or strict,
  then the month and day are validated, with the day validated from 1 to 31.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first of January in the requested year, then adding
  the difference in months, then the difference in days.
  If the mode is smart, and the day-of-month is greater than the maximum for
  the year-month, then the day-of-month is adjusted to the last day-of-month.
  If the mode is strict, then the three fields must form a valid date.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `DAY_OF_YEAR`],
						[/* text */ 't', ` -
  If both are present, then they are combined to form a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', `.
  In all three modes, the `],
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` is validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first of January in the requested year, then adding
  the difference in days.
  If the mode is smart or strict, then the two fields must form a valid date.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `MONTH_OF_YEAR`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `ALIGNED_WEEK_OF_MONTH`],
						[/* text */ 't', ` and
  `],
						[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_MONTH`],
						[/* text */ 't', ` -
  If all four are present, then they are combined to form a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', `.
  In all three modes, the `],
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` is validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first of January in the requested year, then adding
  the difference in months, then the difference in weeks, then in days.
  If the mode is smart or strict, then the all four fields are validated to
  their outer ranges. The date is then combined in a manner equivalent to
  creating a date on the first day of the requested year and month, then adding
  the amount in weeks and days to reach their values. If the mode is strict,
  the date is additionally validated to check that the day and week adjustment
  did not change the month.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `MONTH_OF_YEAR`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `ALIGNED_WEEK_OF_MONTH`],
						[/* text */ 't', ` and
  `],
						[/* inline code block */ 'i', `DAY_OF_WEEK`],
						[/* text */ 't', ` - If all four are present, then they are combined to
  form a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', `. The approach is the same as described above for
  years, months and weeks in `],
						[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_MONTH`],
						[/* text */ 't', `.
  The day-of-week is adjusted as the next or same matching day-of-week once
  the years, months and weeks have been handled.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `ALIGNED_WEEK_OF_YEAR`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_YEAR`],
						[/* text */ 't', ` -
  If all three are present, then they are combined to form a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', `.
  In all three modes, the `],
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', ` is validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first of January in the requested year, then adding
  the difference in weeks, then in days.
  If the mode is smart or strict, then the all three fields are validated to
  their outer ranges. The date is then combined in a manner equivalent to
  creating a date on the first day of the requested year, then adding
  the amount in weeks and days to reach their values. If the mode is strict,
  the date is additionally validated to check that the day and week adjustment
  did not change the year.
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `ALIGNED_WEEK_OF_YEAR`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `DAY_OF_WEEK`],
						[/* text */ 't', ` -
  If all three are present, then they are combined to form a `],
						[/* inline code block */ 'i', `LocalDate`],
						[/* text */ 't', `.
  The approach is the same as described above for years and weeks in
  `],
						[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_YEAR`],
						[/* text */ 't', `. The day-of-week is adjusted as the
  next or same matching day-of-week once the years and weeks have been handled.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'fieldValues', [/* parameter description */
					[/* text */ 't', `the map of fields to values, which can be updated, not null`]
				]],
				[/* parameter */ 'resolverStyle', [/* parameter description */
					[/* text */ 't', `the requested type of resolve, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the date cannot be resolved, typically
  because of a conflict in the input data`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the resolved date, null if insufficient information to create a date`]
			]
		]],
		[/* method */ 'localDateTime(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an ISO local date-time from another date-time object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is equivalent to `],
					[/* reference */ 'r', `java.time.LocalDateTime#from(java.time.temporal.TemporalAccessor)`, `LocalDateTime.from(TemporalAccessor)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the date-time object to convert, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date-time`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the ISO local date-time, not null`]
			]
		]],
		[/* method */ 'period(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a period for this chronology based on years, months and days.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a period tied to the ISO chronology using the specified
 years, months and days. See `],
					[/* reference */ 'r', `java.time.Period`, `Period`],
					[/* text */ 't', ` for further details.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'years', [/* parameter description */
					[/* text */ 't', `the number of years, may be negative`]
				]],
				[/* parameter */ 'months', [/* parameter description */
					[/* text */ 't', `the number of years, may be negative`]
				]],
				[/* parameter */ 'days', [/* parameter description */
					[/* text */ 't', `the number of years, may be negative`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the ISO period, not null`]
			]
		]],
		[/* method */ 'range(java.time.temporal.ChronoField)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Gets the range of valid values for the specified field.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 All fields can be expressed as a `],
						[/* inline code block */ 'i', `long`],
						[/* text */ 't', ` integer.
 This method returns an object that describes the valid range for that value.
 `]
					]],
					[/* block */ 'b', `
 Note that the result only describes the minimum and maximum valid values
 and it is important not to read too much into them. For example, there
 could be values within the range that are invalid for the field.
 `],
					[/* block */ 'b', `
 This method will return a result whether or not the chronology supports the field.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to get the range for, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the range of valid values for the field, not null`]
			]
		]],
		[/* method */ 'zonedDateTime(java.time.Instant,java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains an ISO zoned date-time in this chronology from an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is equivalent to `],
					[/* reference */ 'r', `java.time.ZonedDateTime#ofInstant(java.time.Instant,java.time.ZoneId)`, `ZonedDateTime.ofInstant(Instant, ZoneId)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'instant', [/* parameter description */
					[/* text */ 't', `the instant to create the date-time from, not null`]
				]],
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the time-zone, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the result exceeds the supported range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zoned date-time, not null`]
			]
		]],
		[/* method */ 'zonedDateTime(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an ISO zoned date-time from another date-time object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is equivalent to `],
					[/* reference */ 'r', `java.time.ZonedDateTime#from(java.time.temporal.TemporalAccessor)`, `ZonedDateTime.from(TemporalAccessor)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the date-time object to convert, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date-time`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the ISO zoned date-time, not null`]
			]
		]],
		[/* method */ 'eras()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Gets the list of eras for the chronology.
 `],
					[/* block */ 'b', `
 Most calendar systems have an era, within which the year has meaning.
 If the calendar system does not support the concept of eras, an empty
 list must be returned.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the list of eras for the chronology, may be immutable, not null`]
			]
		]],
		[/* method */ 'epochSecond(int,int,int,int,int,int,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Gets the number of seconds from the epoch of 1970-01-01T00:00:00Z.
 `],
				[/* block */ 'b', `
 The number of seconds is calculated using the year,
 month, day-of-month, hour, minute, second, and zoneOffset.`]
			],
			[/* parameters */
				[/* parameter */ 'prolepticYear', [/* parameter description */
					[/* text */ 't', `the year, from MIN_YEAR to MAX_YEAR`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month-of-year, from 1 to 12`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the day-of-month, from 1 to 31`]
				]],
				[/* parameter */ 'hour', [/* parameter description */
					[/* text */ 't', `the hour-of-day, from 0 to 23`]
				]],
				[/* parameter */ 'minute', [/* parameter description */
					[/* text */ 't', `the minute-of-hour, from 0 to 59`]
				]],
				[/* parameter */ 'second', [/* parameter description */
					[/* text */ 't', `the second-of-minute, from 0 to 59`]
				]],
				[/* parameter */ 'zoneOffset', [/* parameter description */
					[/* text */ 't', `the zone offset, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the value of any argument is out of range,
         or if the day-of-month is invalid for the month-of-year`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of seconds relative to 1970-01-01T00:00:00Z, may be negative`]
			]
		]]
	],
	/* enum values */ UDF
]);
