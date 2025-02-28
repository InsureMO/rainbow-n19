import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.chrono.MinguoChronology', [
	[/* class description */
		[/* text */ 't', `The Minguo calendar system.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This chronology defines the rules of the Minguo calendar system.
 This calendar system is primarily used in the Republic of China, often known as Taiwan.
 Dates are aligned such that `],
			[/* inline code block */ 'i', `0001-01-01 (Minguo)`],
			[/* text */ 't', ` is `],
			[/* inline code block */ 'i', `1912-01-01 (ISO)`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 The fields are defined as follows:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', `era - There are two eras, the current 'Republic' (ERA_ROC) and the previous era (ERA_BEFORE_ROC).
 `],
			[/* block */ 'b', `year-of-era - The year-of-era for the current era increases uniformly from the epoch at year one.
  For the previous era the year increases from one as time goes backwards.
  The value for the current era is equal to the ISO proleptic-year minus 1911.
 `],
			[/* block */ 'b', `proleptic-year - The proleptic year is the same as the year-of-era for the
  current era. For the previous era, years have zero, then negative values.
  The value is equal to the ISO proleptic-year minus 1911.
 `],
			[/* block */ 'b', `month-of-year - The Minguo month-of-year exactly matches ISO.
 `],
			[/* block */ 'b', `day-of-month - The Minguo day-of-month exactly matches ISO.
 `],
			[/* block */ 'b', `day-of-year - The Minguo day-of-year exactly matches ISO.
 `],
			[/* block */ 'b', `leap-year - The Minguo leap-year pattern exactly matches ISO, such that the two calendars
  are never out of step.
 `]
		]],
		[/* block */ 'b', '']
	],
	[/* fields */
		[/* field */ 'INSTANCE', [
			[/* field description */
				[/* text */ 't', `Singleton instance for the Minguo chronology.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getId()', [
			[/* method description */
				[/* text */ 't', `Gets the ID of the chronology - 'Minguo'.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ID uniquely identifies the `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', `.
 It can be used to lookup the `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', ` using `],
					[/* external link */ 'a', `Chronology.html#of(java.lang.String)`, `Chronology.of(String)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the chronology ID - 'Minguo'`]
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the range of valid values for the field, not null`]
			]
		]],
		[/* method */ 'getCalendarType()', [
			[/* method description */
				[/* text */ 't', `Gets the calendar type of the underlying calendar system - 'roc'.
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
					[/* external link */ 'a', `Chronology.html#of(java.lang.String)`, `Chronology.of(String)`],
					[/* text */ 't', `.
 It can also be used as part of a locale, accessible via
 `],
					[/* external link */ 'a', `../../util/Locale.html#getUnicodeLocaleType(java.lang.String)`, `Locale.getUnicodeLocaleType(String)`],
					[/* text */ 't', ` with the key 'ca'.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the calendar system type - 'roc'`]
			]
		]],
		[/* method */ 'isLeapYear(long)', [
			[/* method description */
				[/* text */ 't', `Checks if the specified year is a leap year.
 `],
				[/* block */ 'b', `
 Minguo leap years occur exactly in line with ISO leap years.
 This method does not validate the year passed in, and only has a
 well-defined result for years in the supported range.`]
			],
			[/* parameters */
				[/* parameter */ 'prolepticYear', [/* parameter description */
					[/* text */ 't', `the proleptic-year to check, not validated for range`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the year is a leap year`]
			]
		]],
		[/* method */ 'date(java.time.chrono.Era,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in Minguo calendar system from the
 era, year-of-era, month-of-year and day-of-month fields.`]
			],
			[/* parameters */
				[/* parameter */ 'era', [/* parameter description */
					[/* text */ 't', `the Minguo era, not null`]
				]],
				[/* parameter */ 'yearOfEra', [/* parameter description */
					[/* text */ 't', `the year-of-era`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month-of-year`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the day-of-month`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `era`],
					[/* text */ 't', ` is not a `],
					[/* inline code block */ 'i', `MinguoEra`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Minguo local date, not null`]
			]
		]],
		[/* method */ 'date(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Obtains a local date in this chronology from another temporal object.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 This obtains a date in this chronology based on the specified temporal.
 A `],
						[/* inline code block */ 'i', `TemporalAccessor`],
						[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
						[/* inline code block */ 'i', `ChronoLocalDate`],
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
						[/* inline code block */ 'i', `aChronology::date`],
						[/* text */ 't', `.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to convert, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the local date in this chronology, not null`]
			]
		]],
		[/* method */ 'date(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in Minguo calendar system from the
 proleptic-year, month-of-year and day-of-month fields.`]
			],
			[/* parameters */
				[/* parameter */ 'prolepticYear', [/* parameter description */
					[/* text */ 't', `the proleptic-year`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month-of-year`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the day-of-month`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Minguo local date, not null`]
			]
		]],
		[/* method */ 'dateEpochDay(long)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in the Minguo calendar system from the epoch-day.`]
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
				[/* text */ 't', `the Minguo local date, not null`]
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the proleptic-year`]
			]
		]],
		[/* method */ 'dateYearDay(int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in Minguo calendar system from the
 proleptic-year and day-of-year fields.`]
			],
			[/* parameters */
				[/* parameter */ 'prolepticYear', [/* parameter description */
					[/* text */ 't', `the proleptic-year`]
				]],
				[/* parameter */ 'dayOfYear', [/* parameter description */
					[/* text */ 't', `the day-of-year`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Minguo local date, not null`]
			]
		]],
		[/* method */ 'dateYearDay(java.time.chrono.Era,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in Minguo calendar system from the
 era, year-of-era and day-of-year fields.`]
			],
			[/* parameters */
				[/* parameter */ 'era', [/* parameter description */
					[/* text */ 't', `the Minguo era, not null`]
				]],
				[/* parameter */ 'yearOfEra', [/* parameter description */
					[/* text */ 't', `the year-of-era`]
				]],
				[/* parameter */ 'dayOfYear', [/* parameter description */
					[/* text */ 't', `the day-of-year`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `era`],
					[/* text */ 't', ` is not a `],
					[/* inline code block */ 'i', `MinguoEra`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Minguo local date, not null`]
			]
		]],
		[/* method */ 'dateNow()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Obtains the current local date in this chronology from the system clock in the default time-zone.
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
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current local date using the system clock and default time-zone, not null`]
			]
		]],
		[/* method */ 'dateNow(java.time.ZoneId)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Obtains the current local date in this chronology from the system clock in the specified time-zone.
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
				]]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the zone ID to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current local date using the system clock, not null`]
			]
		]],
		[/* method */ 'dateNow(java.time.Clock)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Obtains the current local date in this chronology from the specified clock.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 This will query the specified clock to obtain the current date - today.
 Using this method allows the use of an alternate clock for testing.
 The alternate clock may be introduced using `],
						[/* reference */ 'r', `java.time.Clock`],
						[/* text */ 't', `.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'clock', [/* parameter description */
					[/* text */ 't', `the clock to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current local date, not null`]
			]
		]],
		[/* method */ 'zonedDateTime(java.time.Instant,java.time.ZoneId)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Obtains a `],
					[/* inline code block */ 'i', `ChronoZonedDateTime`],
					[/* text */ 't', ` in this chronology from an `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', `.
 `],
					[/* block */ 'b', `
 This obtains a zoned date-time with the same instant as that specified.`]
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the zoned date-time, not null`]
			]
		]],
		[/* method */ 'zonedDateTime(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Obtains a `],
					[/* inline code block */ 'i', `ChronoZonedDateTime`],
					[/* text */ 't', ` in this chronology from another temporal object.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 This obtains a zoned date-time in this chronology based on the specified temporal.
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
 The conversion will first obtain a `],
						[/* inline code block */ 'i', `ZoneId`],
						[/* text */ 't', ` from the temporal object,
 falling back to a `],
						[/* inline code block */ 'i', `ZoneOffset`],
						[/* text */ 't', ` if necessary. It will then try to obtain
 an `],
						[/* inline code block */ 'i', `Instant`],
						[/* text */ 't', `, falling back to a `],
						[/* inline code block */ 'i', `ChronoLocalDateTime`],
						[/* text */ 't', ` if necessary.
 The result will be either the combination of `],
						[/* inline code block */ 'i', `ZoneId`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `ZoneOffset`],
						[/* text */ 't', `
 with `],
						[/* inline code block */ 'i', `Instant`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `ChronoLocalDateTime`],
						[/* text */ 't', `.
 Implementations are permitted to perform optimizations such as accessing
 those fields that are equivalent to the relevant objects.
 The result uses this chronology.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `
 This method matches the signature of the functional interface `],
						[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
						[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
						[/* inline code block */ 'i', `aChronology::zonedDateTime`],
						[/* text */ 't', `.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to convert, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the zoned date-time in this chronology, not null`]
			]
		]],
		[/* method */ 'localDateTime(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Obtains a local date-time in this chronology from another temporal object.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `
 This obtains a date-time in this chronology based on the specified temporal.
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
 The conversion extracts and combines the `],
						[/* inline code block */ 'i', `ChronoLocalDate`],
						[/* text */ 't', ` and the
 `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` from the temporal object.
 Implementations are permitted to perform optimizations such as accessing
 those fields that are equivalent to the relevant objects.
 The result uses this chronology.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `
 This method matches the signature of the functional interface `],
						[/* reference */ 'r', `java.time.temporal.TemporalQuery`],
						[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
						[/* inline code block */ 'i', `aChronology::localDateTime`],
						[/* text */ 't', `.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to convert, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the local date-time in this chronology, not null`]
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
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the calendar system era, not null`]
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
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the list of eras for the chronology, may be immutable, not null`]
			]
		]],
		[/* method */ 'resolveDate(java.util.Map,java.time.format.ResolverStyle)', [
			[/* method description */
				[/* block */ 'b', [
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
						[/* inline code block */ 'i', `ChronoField`],
						[/* text */ 't', ` instances are resolved by this method, which may
 be overridden in subclasses.
 `]
					]],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* inline code block */ 'i', `EPOCH_DAY`],
							[/* text */ 't', ` - If present, this is converted to a date and
  all other date fields are then cross-checked against the date.
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
  present, and the mode is smart or lenient, then the last available era
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
  If all three are present, then they are combined to form a date.
  In all three modes, the `],
							[/* inline code block */ 'i', `YEAR`],
							[/* text */ 't', ` is validated.
  If the mode is smart or strict, then the month and day are validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first day of the first month in the requested year,
  then adding the difference in months, then the difference in days.
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
  If both are present, then they are combined to form a date.
  In all three modes, the `],
							[/* inline code block */ 'i', `YEAR`],
							[/* text */ 't', ` is validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first day of the requested year, then adding
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
  If all four are present, then they are combined to form a date.
  In all three modes, the `],
							[/* inline code block */ 'i', `YEAR`],
							[/* text */ 't', ` is validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first day of the first month in the requested year, then adding
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
  form a date. The approach is the same as described above for
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
  If all three are present, then they are combined to form a date.
  In all three modes, the `],
							[/* inline code block */ 'i', `YEAR`],
							[/* text */ 't', ` is validated.
  If the mode is lenient, then the date is combined in a manner equivalent to
  creating a date on the first day of the requested year, then adding
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
  If all three are present, then they are combined to form a date.
  The approach is the same as described above for years and weeks in
  `],
							[/* inline code block */ 'i', `ALIGNED_DAY_OF_WEEK_IN_YEAR`],
							[/* text */ 't', `. The day-of-week is adjusted as the
  next or same matching day-of-week once the years and weeks have been handled.
 `]
						]]
					]],
					[/* block */ 'b', ''],
					[/* block */ 'b', [
						[/* text */ 't', `
 The default implementation is suitable for most calendar systems.
 If `],
						[/* external link */ 'a', `../temporal/ChronoField.html#YEAR_OF_ERA`, `ChronoField.YEAR_OF_ERA`],
						[/* text */ 't', ` is found without an `],
						[/* external link */ 'a', `../temporal/ChronoField.html#ERA`, `ChronoField.ERA`],
						[/* text */ 't', `
 then the last era in `],
						[/* external link */ 'a', `Chronology.html#eras()`, `Chronology.eras()`],
						[/* text */ 't', ` is used.
 The implementation assumes a 7 day week, that the first day-of-month
 has the value 1, that first day-of-year has the value 1, and that the
 first of the month and year always exists.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fieldValues', [/* parameter description */
					[/* text */ 't', `the map of fields to values, which can be updated, not null`]
				]],
				[/* parameter */ 'resolverStyle', [/* parameter description */
					[/* text */ 't', `the requested type of resolve, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the resolved date, null if insufficient information to create a date`]
			]
		]]
	],
]);
