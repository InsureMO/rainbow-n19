import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.chrono.HijrahChronology', [
	[/* class description */
		[/* text */ 't', `The Hijrah calendar is a lunar calendar supporting Islamic calendars.
 `],
		[/* block */ 'b', `
 The HijrahChronology follows the rules of the Hijrah calendar system. The Hijrah
 calendar has several variants based on differences in when the new moon is
 determined to have occurred and where the observation is made.
 In some variants the length of each month is
 computed algorithmically from the astronomical data for the moon and earth and
 in others the length of the month is determined by an authorized sighting
 of the new moon. For the algorithmically based calendars the calendar
 can project into the future.
 For sighting based calendars only historical data from past
 sightings is available.
 `],
		[/* block */ 'b', `
 The length of each month is 29 or 30 days.
 Ordinary years have 354 days; leap years have 355 days.

 `],
		[/* block */ 'b', `
 CLDR and LDML identify variants:
 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Chronology ID`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Calendar Type`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Locale extension, see `],
						[/* reference */ 'r', `java.util.Locale`, `Locale`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Description`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Hijrah-umalqura`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `islamic-umalqura`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `ca-islamic-umalqura`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Islamic - Umm Al-Qura calendar of Saudi Arabia`]
					]]
				]]
			]],
		],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Additional variants may be available through `],
			[/* reference */ 'r', `java.time.chrono.Chronology#getAvailableChronologies()`, `Chronology.getAvailableChronologies()`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', `Example`],
		[/* text */ 't', `
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Selecting the chronology from the locale uses `],
			[/* reference */ 'r', `java.time.chrono.Chronology#ofLocale(java.util.Locale)`, `Chronology.ofLocale(java.util.Locale)`],
			[/* text */ 't', `
 to find the Chronology based on Locale supported BCP 47 extension mechanism
 to request a specific calendar ("ca"). For example,
 `]
		]],
		[/* text */ 't', `
 `],
		[/* code block */ 'c', `      Locale locale = Locale.forLanguageTag("en-US-u-ca-islamic-umalqura");
      Chronology chrono = Chronology.ofLocale(locale);
 `]
	],
	[/* fields */
		[/* field */ 'INSTANCE', [
			[/* field description */
				[/* text */ 't', `Singleton instance of the Islamic Umm Al-Qura calendar of Saudi Arabia.
 Other Hijrah chronology variants may be available from
 `],
				[/* reference */ 'r', `java.time.chrono.Chronology#getAvailableChronologies()`, `Chronology.getAvailableChronologies()`],
				[/* text */ 't', `.`]
			],
		]]
	],
	/* constructors */,
	[/* methods */
		[/* method */ 'isLeapYear(long)', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Checks if the specified year is a leap year.
 `],
					[/* block */ 'b', `
 A leap-year is a year of a longer length than normal.
 The exact meaning is determined by the chronology according to the following constraints.
 `],
					[/* list */ 'l', [
						[/* block */ 'b', `a leap-year must imply a year-length longer than a non leap-year.
 `],
						[/* block */ 'b', `a chronology that does not support the concept of a year must return false.
 `],
						[/* block */ 'b', `the correct result must be returned for all years within the
     valid range of years for the chronology.
 `]
					]],
					[/* text */ 't', `
 `],
					[/* block */ 'b', ''],
					[/* block */ 'b', `
 Outside the range of valid years an implementation is free to return
 either a best guess or false.
 An implementation must not throw an exception, even if the year is
 outside the range of valid years.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'prolepticYear', [/* parameter description */
					[/* text */ 't', `the proleptic-year to check, not validated for range`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the year is a leap year`]
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
				[/* text */ 't', `Gets the calendar type of the Islamic calendar.
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
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the calendar system type; non-null if the calendar has
    a standard type, otherwise null`]
			]
		]],
		[/* method */ 'getId()', [
			[/* method description */
				[/* text */ 't', `Gets the ID of the chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ID uniquely identifies the `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', `. It can be used to
 lookup the `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', ` using `],
					[/* reference */ 'r', `java.time.chrono.Chronology#of(java.lang.String)`, `Chronology.of(String)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the chronology ID, non-null`]
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
						[/* reference */ 'r', `java.time.temporal.TemporalQuery`, `TemporalQuery`],
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
			/* throws */,
			[/* return description */
				[/* text */ 't', `the local date-time in this chronology, not null`]
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
			/* throws */,
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
						[/* reference */ 'r', `java.time.temporal.TemporalQuery`, `TemporalQuery`],
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
			/* throws */,
			[/* return description */
				[/* text */ 't', `the zoned date-time in this chronology, not null`]
			]
		]],
		[/* method */ 'date(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in Hijrah calendar system from the
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
				[/* text */ 't', `the Hijrah local date, not null`]
			]
		]],
		[/* method */ 'date(java.time.chrono.Era,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in Hijrah calendar system from the
 era, year-of-era, month-of-year and day-of-month fields.`]
			],
			[/* parameters */
				[/* parameter */ 'era', [/* parameter description */
					[/* text */ 't', `the Hijrah era, not null`]
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
					[/* inline code block */ 'i', `HijrahEra`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Hijrah local date, not null`]
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
						[/* reference */ 'r', `java.time.temporal.ChronoField#EPOCH_DAY`, `EPOCH_DAY`],
						[/* text */ 't', `
 field, which is standardized across calendar systems.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `
 This method matches the signature of the functional interface `],
						[/* reference */ 'r', `java.time.temporal.TemporalQuery`, `TemporalQuery`],
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
			/* throws */,
			[/* return description */
				[/* text */ 't', `the local date in this chronology, not null`]
			]
		]],
		[/* method */ 'dateEpochDay(long)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in the Hijrah calendar system from the epoch-day.`]
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
				[/* text */ 't', `the Hijrah local date, not null`]
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
						[/* reference */ 'r', `java.time.Clock#systemDefaultZone()`, `system clock`],
						[/* text */ 't', ` in the default
 time-zone to obtain the current date.
 `]
					]],
					[/* block */ 'b', `
 Using this method will prevent the ability to use an alternate clock for testing
 because the clock is hard-coded.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the current local date using the system clock and default time-zone, not null`]
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
						[/* reference */ 'r', `java.time.Clock`, `dependency injection`],
						[/* text */ 't', `.`]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'clock', [/* parameter description */
					[/* text */ 't', `the clock to use, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the current local date, not null`]
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
						[/* reference */ 'r', `java.time.Clock#system(java.time.ZoneId)`, `system clock`],
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
			/* throws */,
			[/* return description */
				[/* text */ 't', `the current local date using the system clock, not null`]
			]
		]],
		[/* method */ 'dateYearDay(int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in Hijrah calendar system from the
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
					[/* text */ 't', `if the value of the year is out of range,
  or if the day-of-year is invalid for the year`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Hijrah local date, not null`]
			]
		]],
		[/* method */ 'dateYearDay(java.time.chrono.Era,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in Hijrah calendar system from the
 era, year-of-era and day-of-year fields.`]
			],
			[/* parameters */
				[/* parameter */ 'era', [/* parameter description */
					[/* text */ 't', `the Hijrah era, not null`]
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
					[/* inline code block */ 'i', `HijrahEra`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Hijrah local date, not null`]
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
						[/* text */ 't', `
 `],
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
					[/* text */ 't', `
 `],
					[/* block */ 'b', ''],
					[/* block */ 'b', [
						[/* text */ 't', `
 The default implementation is suitable for most calendar systems.
 If `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#YEAR_OF_ERA`, `ChronoField.YEAR_OF_ERA`],
						[/* text */ 't', ` is found without an `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#ERA`, `ChronoField.ERA`],
						[/* text */ 't', `
 then the last era in `],
						[/* reference */ 'r', `java.time.chrono.Chronology#eras()`, `Chronology.eras()`],
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
			/* throws */,
			[/* return description */
				[/* text */ 't', `the resolved date, null if insufficient information to create a date`]
			]
		]],
		[/* method */ 'eraOf(int)', [
			[/* method description */
				[/* text */ 't', `Creates the HijrahEra object from the numeric value.
 The Hijrah calendar system has only one era covering the
 proleptic years greater than zero.
 This method returns the singleton HijrahEra for the value 1.`]
			],
			[/* parameters */
				[/* parameter */ 'eraValue', [/* parameter description */
					[/* text */ 't', `the era value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the era`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the calendar system era, not null`]
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
		]]
	],
	/* enum values */ UDF
]);
