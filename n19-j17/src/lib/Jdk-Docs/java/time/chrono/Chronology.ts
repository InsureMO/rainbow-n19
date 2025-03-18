import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.chrono.Chronology', [
	[/* class description */
		[/* text */ 't', `A calendar system, used to organize and identify dates.
 `],
		[/* block */ 'b', `
 The main date and time API is built on the ISO calendar system.
 The chronology operates behind the scenes to represent the general concept of a calendar system.
 For example, the Japanese, Minguo, Thai Buddhist and others.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Most other calendar systems also operate on the shared concepts of year, month and day,
 linked to the cycles of the Earth around the Sun, and the Moon around the Earth.
 These shared concepts are defined by `],
			[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
			[/* text */ 't', ` and are available
 for use by any `],
			[/* inline code block */ 'i', `Chronology`],
			[/* text */ 't', ` implementation:
 `]
		]],
		[/* code block */ 'c', `   LocalDate isoDate = ...
   ThaiBuddhistDate thaiDate = ...
   int isoYear = isoDate.get(ChronoField.YEAR);
   int thaiYear = thaiDate.get(ChronoField.YEAR);
 `],
		[/* text */ 't', `
 As shown, although the date objects are in different calendar systems, represented by different
 `],
		[/* inline code block */ 'i', `Chronology`],
		[/* text */ 't', ` instances, both can be queried using the same constant on `],
		[/* inline code block */ 'i', `ChronoField`],
		[/* text */ 't', `.
 For a full discussion of the implications of this, see `],
		[/* reference */ 'r', `java.time.chrono.ChronoLocalDate`, `ChronoLocalDate`],
		[/* text */ 't', `.
 In general, the advice is to use the known ISO-based `],
		[/* inline code block */ 'i', `LocalDate`],
		[/* text */ 't', `, rather than
 `],
		[/* inline code block */ 'i', `ChronoLocalDate`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 While a `],
			[/* inline code block */ 'i', `Chronology`],
			[/* text */ 't', ` object typically uses `],
			[/* inline code block */ 'i', `ChronoField`],
			[/* text */ 't', ` and is based on
 an era, year-of-era, month-of-year, day-of-month model of a date, this is not required.
 A `],
			[/* inline code block */ 'i', `Chronology`],
			[/* text */ 't', ` instance may represent a totally different kind of calendar system,
 such as the Mayan.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 In practical terms, the `],
			[/* inline code block */ 'i', `Chronology`],
			[/* text */ 't', ` instance also acts as a factory.
 The `],
			[/* reference */ 'r', `#of(java.lang.String)`, `of(String)`],
			[/* text */ 't', ` method allows an instance to be looked up by identifier,
 while the `],
			[/* reference */ 'r', `#ofLocale(java.util.Locale)`, `ofLocale(Locale)`],
			[/* text */ 't', ` method allows lookup by locale.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* inline code block */ 'i', `Chronology`],
			[/* text */ 't', ` instance provides a set of methods to create `],
			[/* inline code block */ 'i', `ChronoLocalDate`],
			[/* text */ 't', ` instances.
 The date classes are used to manipulate specific dates.
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` `],
				[/* reference */ 'r', `#dateNow()`, `dateNow()`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` `],
				[/* reference */ 'r', `#dateNow(java.time.Clock)`, `dateNow(clock)`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` `],
				[/* reference */ 'r', `#dateNow(java.time.ZoneId)`, `dateNow(zone)`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` `],
				[/* reference */ 'r', `#date(int,int,int)`, `date(yearProleptic, month, day)`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` `],
				[/* reference */ 'r', `#date(java.time.chrono.Era,int,int,int)`, `date(era, yearOfEra, month, day)`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` `],
				[/* reference */ 'r', `#dateYearDay(int,int)`, `dateYearDay(yearProleptic, dayOfYear)`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` `],
				[/* reference */ 'r', `#dateYearDay(java.time.chrono.Era,int,int)`, `dateYearDay(era, yearOfEra, dayOfYear)`],
				[/* text */ 't', `
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` `],
				[/* reference */ 'r', `#date(java.time.temporal.TemporalAccessor)`, `date(TemporalAccessor)`],
				[/* text */ 't', `
 `]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Adding New Calendars`],
		[/* text */ 't', `
 The set of available chronologies can be extended by applications.
 Adding a new calendar system requires the writing of an implementation of
 `],
		[/* inline code block */ 'i', `Chronology`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `ChronoLocalDate`],
		[/* text */ 't', ` and `],
		[/* inline code block */ 'i', `Era`],
		[/* text */ 't', `.
 The majority of the logic specific to the calendar system will be in the
 `],
		[/* inline code block */ 'i', `ChronoLocalDate`],
		[/* text */ 't', ` implementation.
 The `],
		[/* inline code block */ 'i', `Chronology`],
		[/* text */ 't', ` implementation acts as a factory.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 To permit the discovery of additional chronologies, the `],
			[/* reference */ 'r', `java.util.ServiceLoader`, `ServiceLoader`],
			[/* text */ 't', `
 is used. A file must be added to the `],
			[/* inline code block */ 'i', `META-INF/services`],
			[/* text */ 't', ` directory with the
 name 'java.time.chrono.Chronology' listing the implementation classes.
 See the ServiceLoader for more details on service loading.
 For lookup by id or calendarType, the system provided calendars are found
 first followed by application provided calendars.
 `]
		]],
		[/* block */ 'b', `
 Each chronology must define a chronology ID that is unique within the system.
 If the chronology represents a calendar system defined by the
 CLDR specification then the calendar type is the concatenation of the
 CLDR type and, if applicable, the CLDR variant.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this chronology is equal to another chronology.
 `],
				[/* block */ 'b', `
 The comparison is based on the entire state of the object.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to check, null returns false`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if this is equal to the other chronology`]
			]
		]],
		[/* method */ 'isLeapYear(long)', [
			[/* method description */
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
		[/* method */ 'compareTo(java.time.chrono.Chronology)', [
			[/* method description */
				[/* text */ 't', `Compares this chronology to another chronology.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The comparison order first by the chronology ID string, then by any
 additional information specific to the subclass.
 It is "consistent with equals", as defined by `],
					[/* reference */ 'r', `java.lang.Comparable`, `Comparable`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the other chronology to compare to, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the comparator value, negative if less, positive if greater`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this chronology.
 `],
				[/* block */ 'b', `
 The hash code should be based on the entire state of the object.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'prolepticYear(java.time.chrono.Era,int)', [
			[/* method description */
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
			],
			[/* parameters */
				[/* parameter */ 'era', [/* parameter description */
					[/* text */ 't', `the era of the correct type for the chronology, not null`]
				]],
				[/* parameter */ 'yearOfEra', [/* parameter description */
					[/* text */ 't', `the chronology year-of-era`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to convert to a proleptic-year,
  such as if the year is invalid for the era`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `era`],
					[/* text */ 't', ` is not of the correct type for the chronology`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the proleptic-year`]
			]
		]],
		[/* method */ 'getCalendarType()', [
			[/* method description */
				[/* text */ 't', `Gets the calendar type of the calendar system.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The calendar type is an identifier defined by the CLDR and
 `],
					[/* text */ 't', `Unicode Locale Data Markup Language (LDML)`],
					[/* text */ 't', ` specifications
 to uniquely identify a calendar.
 The `],
					[/* inline code block */ 'i', `getCalendarType`],
					[/* text */ 't', ` is the concatenation of the CLDR calendar type
 and the variant, if applicable, is appended separated by "-".
 The calendar type is used to lookup the `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', ` using `],
					[/* reference */ 'r', `#of(java.lang.String)`, `of(String)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the calendar system type, null if the calendar is not defined by CLDR/LDML`]
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
					[/* text */ 't', `.
 It can be used to lookup the `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', ` using `],
					[/* reference */ 'r', `#of(java.lang.String)`, `of(String)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the chronology ID, not null`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Outputs this chronology as a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 The format should include the entire state of the object.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a string representation of this chronology, not null`]
			]
		]],
		[/* method */ 'date(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in this chronology from the proleptic-year,
 month-of-year and day-of-month fields.`]
			],
			[/* parameters */
				[/* parameter */ 'prolepticYear', [/* parameter description */
					[/* text */ 't', `the chronology proleptic-year`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the chronology month-of-year`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the chronology day-of-month`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date in this chronology, not null`]
			]
		]],
		[/* method */ 'date(java.time.temporal.TemporalAccessor)', [
			[/* method description */
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
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to convert, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date in this chronology, not null`]
			]
		]],
		[/* method */ 'dateEpochDay(long)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in this chronology from the epoch-day.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The definition of `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#EPOCH_DAY`, `EPOCH_DAY`],
					[/* text */ 't', ` is the same
 for all calendar systems, thus it can be used for conversion.`]
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
				[/* text */ 't', `the local date in this chronology, not null`]
			]
		]],
		[/* method */ 'dateYearDay(int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in this chronology from the proleptic-year and
 day-of-year fields.`]
			],
			[/* parameters */
				[/* parameter */ 'prolepticYear', [/* parameter description */
					[/* text */ 't', `the chronology proleptic-year`]
				]],
				[/* parameter */ 'dayOfYear', [/* parameter description */
					[/* text */ 't', `the chronology day-of-year`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date in this chronology, not null`]
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
 The default implementation, which explains typical resolve behaviour,
 is provided in `],
					[/* reference */ 'r', `java.time.chrono.AbstractChronology`, `AbstractChronology`],
					[/* text */ 't', `.`]
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
		[/* method */ 'eraOf(int)', [
			[/* method description */
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
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to get the range for, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the range for the field cannot be obtained`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the range of valid values for the field, not null`]
			]
		]],
		[/* method */ 'eras()', [
			[/* method description */
				[/* text */ 't', `Gets the list of eras for the chronology.
 `],
				[/* block */ 'b', `
 Most calendar systems have an era, within which the year has meaning.
 If the calendar system does not support the concept of eras, an empty
 list must be returned.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the list of eras for the chronology, may be immutable, not null`]
			]
		]],
		[/* method */ 'getDisplayName(java.time.format.TextStyle,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the textual representation of this chronology.
 `],
				[/* block */ 'b', `
 This returns the textual name used to identify the chronology,
 suitable for presentation to the user.
 The parameters control the style of the returned text and the locale.`]
			],
			[/* parameters */
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `the style of the text required, not null`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale to use, not null`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the text value of the chronology, not null`]
			]
		]],
		[/* method */ 'date(java.time.chrono.Era,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in this chronology from the era, year-of-era,
 month-of-year and day-of-month fields.`]
			],
			[/* parameters */
				[/* parameter */ 'era', [/* parameter description */
					[/* text */ 't', `the era of the correct type for the chronology, not null`]
				]],
				[/* parameter */ 'yearOfEra', [/* parameter description */
					[/* text */ 't', `the chronology year-of-era`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the chronology month-of-year`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the chronology day-of-month`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `era`],
					[/* text */ 't', ` is not of the correct type for the chronology`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date in this chronology, not null`]
			]
		]],
		[/* method */ 'dateNow()', [
			[/* method description */
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
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the current local date using the system clock and default time-zone, not null`]
			]
		]],
		[/* method */ 'dateNow(java.time.Clock)', [
			[/* method description */
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
				[/* text */ 't', `the current local date, not null`]
			]
		]],
		[/* method */ 'dateNow(java.time.ZoneId)', [
			[/* method description */
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
				[/* text */ 't', `the current local date using the system clock, not null`]
			]
		]],
		[/* method */ 'dateYearDay(java.time.chrono.Era,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a local date in this chronology from the era, year-of-era and
 day-of-year fields.`]
			],
			[/* parameters */
				[/* parameter */ 'era', [/* parameter description */
					[/* text */ 't', `the era of the correct type for the chronology, not null`]
				]],
				[/* parameter */ 'yearOfEra', [/* parameter description */
					[/* text */ 't', `the chronology year-of-era`]
				]],
				[/* parameter */ 'dayOfYear', [/* parameter description */
					[/* text */ 't', `the chronology day-of-year`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date`]
				]],
				[/* throw */ 'java.lang.ClassCastException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `era`],
					[/* text */ 't', ` is not of the correct type for the chronology`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date in this chronology, not null`]
			]
		]],
		[/* method */ 'localDateTime(java.time.temporal.TemporalAccessor)', [
			[/* method description */
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
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to convert, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date-time`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the local date-time in this chronology, not null`]
			]
		]],
		[/* method */ 'period(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Obtains a period for this chronology based on years, months and days.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a period tied to this chronology using the specified
 years, months and days.  All supplied chronologies use periods
 based on years, months and days, however the `],
					[/* inline code block */ 'i', `ChronoPeriod`],
					[/* text */ 't', ` API
 allows the period to be represented using other units.`]
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
				[/* text */ 't', `the period in terms of this chronology, not null`]
			]
		]],
		[/* method */ 'zonedDateTime(java.time.Instant,java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `ChronoZonedDateTime`],
				[/* text */ 't', ` in this chronology from an `],
				[/* inline code block */ 'i', `Instant`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This obtains a zoned date-time with the same instant as that specified.`]
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
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to convert, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to create the date-time`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the zoned date-time in this chronology, not null`]
			]
		]],
		[/* method */ 'epochSecond(int,int,int,int,int,int,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Gets the number of seconds from the epoch of 1970-01-01T00:00:00Z.
 `],
				[/* block */ 'b', `
 The number of seconds is calculated using the proleptic-year,
 month, day-of-month, hour, minute, second, and zoneOffset.`]
			],
			[/* parameters */
				[/* parameter */ 'prolepticYear', [/* parameter description */
					[/* text */ 't', `the chronology proleptic-year`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the chronology month-of-year`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the chronology day-of-month`]
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
					[/* text */ 't', `if any of the values are out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of seconds relative to 1970-01-01T00:00:00Z, may be negative`]
			]
		]],
		[/* method */ 'epochSecond(java.time.chrono.Era,int,int,int,int,int,int,java.time.ZoneOffset)', [
			[/* method description */
				[/* text */ 't', `Gets the number of seconds from the epoch of 1970-01-01T00:00:00Z.
 `],
				[/* block */ 'b', `
 The number of seconds is calculated using the era, year-of-era,
 month, day-of-month, hour, minute, second, and zoneOffset.`]
			],
			[/* parameters */
				[/* parameter */ 'era', [/* parameter description */
					[/* text */ 't', `the era of the correct type for the chronology, not null`]
				]],
				[/* parameter */ 'yearOfEra', [/* parameter description */
					[/* text */ 't', `the chronology year-of-era`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the chronology month-of-year`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the chronology day-of-month`]
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
					[/* text */ 't', `if any of the values are out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of seconds relative to 1970-01-01T00:00:00Z, may be negative`]
			]
		]],
		[/* method */ 'from(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Chronology`],
				[/* text */ 't', ` from a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This obtains a chronology based on the specified temporal.
 A `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The conversion will obtain the chronology using `],
					[/* reference */ 'r', `java.time.temporal.TemporalQueries#chronology()`, `TemporalQueries.chronology()`],
					[/* text */ 't', `.
 If the specified temporal object does not have a chronology, `],
					[/* reference */ 'r', `java.time.chrono.IsoChronology`, `IsoChronology`],
					[/* text */ 't', ` is returned.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method matches the signature of the functional interface `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`, `TemporalQuery`],
					[/* text */ 't', `
 allowing it to be used as a query via method reference, `],
					[/* inline code block */ 'i', `Chronology::from`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal to convert, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if unable to convert to a `],
					[/* inline code block */ 'i', `Chronology`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the chronology, not null`]
			]
		]],
		[/* method */ 'of(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Chronology`],
				[/* text */ 't', ` from a chronology ID or
 calendar system type.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a chronology based on either the ID or the type.
 The `],
					[/* reference */ 'r', `#getId()`, `chronology ID`],
					[/* text */ 't', ` uniquely identifies the chronology.
 The `],
					[/* reference */ 'r', `#getCalendarType()`, `calendar system type`],
					[/* text */ 't', ` is defined by the
 CLDR specification.
 `]
				]],
				[/* block */ 'b', `
 The chronology may be a system chronology or a chronology
 provided by the application via ServiceLoader configuration.
 `],
				[/* block */ 'b', `
 Since some calendars can be customized, the ID or type typically refers
 to the default customization. For example, the Gregorian calendar can have multiple
 cutover dates from the Julian, but the lookup only provides the default cutover date.`]
			],
			[/* parameters */
				[/* parameter */ 'id', [/* parameter description */
					[/* text */ 't', `the chronology ID or calendar system type, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the chronology cannot be found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the chronology with the identifier requested, not null`]
			]
		]],
		[/* method */ 'ofLocale(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `Chronology`],
				[/* text */ 't', ` from a locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', ` based on the specified locale,
 typically returning `],
					[/* inline code block */ 'i', `IsoChronology`],
					[/* text */ 't', `. Other calendar systems
 are only returned if they are explicitly selected within the locale.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* reference */ 'r', `java.util.Locale`, `Locale`],
					[/* text */ 't', ` class provide access to a range of information useful
 for localizing an application. This includes the language and region,
 such as "en-GB" for English as used in Great Britain.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` class also supports an extension mechanism that
 can be used to identify a calendar system. The mechanism is a form
 of key-value pairs, where the calendar system has the key "ca".
 For example, the locale "en-JP-u-ca-japanese" represents the English
 language as used in Japan with the Japanese calendar system.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method finds the desired calendar system in a manner equivalent
 to passing "ca" to `],
					[/* reference */ 'r', `java.util.Locale#getUnicodeLocaleType(java.lang.String)`, `Locale.getUnicodeLocaleType(String)`],
					[/* text */ 't', `.
 If the "ca" key is not present, then `],
					[/* inline code block */ 'i', `IsoChronology`],
					[/* text */ 't', ` is returned.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that the behavior of this method differs from the older
 `],
					[/* reference */ 'r', `java.util.Calendar#getInstance(java.util.Locale)`, `Calendar.getInstance(Locale)`],
					[/* text */ 't', ` method.
 If that method receives a locale of "th_TH" it will return `],
					[/* inline code block */ 'i', `BuddhistCalendar`],
					[/* text */ 't', `.
 By contrast, this method will return `],
					[/* inline code block */ 'i', `IsoChronology`],
					[/* text */ 't', `.
 Passing the locale "th-TH-u-ca-buddhist" into either method will
 result in the Thai Buddhist calendar system and is therefore the
 recommended approach going forward for Thai calendar system localization.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 A similar, but simpler, situation occurs for the Japanese calendar system.
 The locale "jp_JP_JP" has previously been used to access the calendar.
 However, unlike the Thai locale, "ja_JP_JP" is automatically converted by
 `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` to the modern and recommended form of "ja-JP-u-ca-japanese".
 Thus, there is no difference in behavior between this method and
 `],
					[/* inline code block */ 'i', `Calendar#getInstance(Locale)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale to use to obtain the calendar system, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if the locale-specified calendar cannot be found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the calendar system associated with the locale, not null`]
			]
		]],
		[/* method */ 'getAvailableChronologies()', [
			[/* method description */
				[/* text */ 't', `Returns the available chronologies.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Each returned `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', ` is available for use in the system.
 The set of chronologies includes the system chronologies and
 any chronologies provided by the application via ServiceLoader
 configuration.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the independent, modifiable set of the available chronology IDs, not null`]
			]
		]]
	],
	/* enum values */ UDF
]);
