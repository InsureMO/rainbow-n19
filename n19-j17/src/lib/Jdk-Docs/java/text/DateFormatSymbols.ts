import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.DateFormatSymbols', [
	[/* class description */
		[/* inline code block */ 'i', `DateFormatSymbols`],
		[/* text */ 't', ` is a public class for encapsulating
 localizable date-time formatting data, such as the names of the
 months, the names of the days of the week, and the time zone data.
 `],
		[/* inline code block */ 'i', `SimpleDateFormat`],
		[/* text */ 't', ` uses
 `],
		[/* inline code block */ 'i', `DateFormatSymbols`],
		[/* text */ 't', ` to encapsulate this information.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Typically you shouldn't use `],
			[/* inline code block */ 'i', `DateFormatSymbols`],
			[/* text */ 't', ` directly.
 Rather, you are encouraged to create a date-time formatter with the
 `],
			[/* inline code block */ 'i', `DateFormat`],
			[/* text */ 't', ` class's factory methods: `],
			[/* inline code block */ 'i', `getTimeInstance`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `getDateInstance`],
			[/* text */ 't', `, or `],
			[/* inline code block */ 'i', `getDateTimeInstance`],
			[/* text */ 't', `.
 These methods automatically create a `],
			[/* inline code block */ 'i', `DateFormatSymbols`],
			[/* text */ 't', ` for
 the formatter so that you don't have to. After the
 formatter is created, you may modify its format pattern using the
 `],
			[/* inline code block */ 'i', `setPattern`],
			[/* text */ 't', ` method. For more information about
 creating formatters using `],
			[/* inline code block */ 'i', `DateFormat`],
			[/* text */ 't', `'s factory methods,
 see `],
			[/* reference */ 'r', `java.text.DateFormat`, `DateFormat`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', `
 If you decide to create a date-time formatter with a specific
 format pattern for a specific locale, you can do so with:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` new SimpleDateFormat(aPattern, DateFormatSymbols.getInstance(aLocale)).
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `If the locale contains "rg" (region override)
 `],
			[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode extension`],
			[/* text */ 't', `,
 the symbols are overridden for the designated region.

 `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `DateFormatSymbols`],
			[/* text */ 't', ` objects are cloneable. When you obtain
 a `],
			[/* inline code block */ 'i', `DateFormatSymbols`],
			[/* text */ 't', ` object, feel free to modify the
 date-time formatting data. For instance, you can replace the localized
 date-time format pattern characters with the ones that you feel easy
 to remember. Or you can change the representative cities
 to your favorite ones.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 New `],
			[/* inline code block */ 'i', `DateFormatSymbols`],
			[/* text */ 't', ` subclasses may be added to support
 `],
			[/* inline code block */ 'i', `SimpleDateFormat`],
			[/* text */ 't', ` for date-time formatting for additional locales.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Construct a DateFormatSymbols object by loading format data from
 resources for the default `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', `
 locale. This constructor can only
 construct instances for the locales supported by the Java
 runtime environment, not for those supported by installed
 `],
				[/* reference */ 'r', `java.text.spi.DateFormatSymbolsProvider`, `DateFormatSymbolsProvider`],
				[/* text */ 't', `
 implementations. For full locale coverage, use the
 `],
				[/* reference */ 'r', `#getInstance(java.util.Locale)`, `getInstance`],
				[/* text */ 't', ` method.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling
 `],
					[/* reference */ 'r', `#%3Cinit%3E(java.util.Locale)`, `DateFormatSymbols(Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `if the resources for the default locale cannot be
             found or cannot be loaded.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Construct a DateFormatSymbols object by loading format data from
 resources for the given locale. This constructor can only
 construct instances for the locales supported by the Java
 runtime environment, not for those supported by installed
 `],
				[/* reference */ 'r', `java.text.spi.DateFormatSymbolsProvider`, `DateFormatSymbolsProvider`],
				[/* text */ 't', `
 implementations. For full locale coverage, use the
 `],
				[/* reference */ 'r', `#getInstance(java.util.Locale)`, `getInstance`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the desired locale`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.util.MissingResourceException', [/* throw description */
					[/* text */ 't', `if the resources for the specified locale cannot be
             found or cannot be loaded.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Override equals`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this object is the same as the obj
          argument; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Override hashCode.
 Generates a hash code for the DateFormatSymbols object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Overrides Cloneable`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
			]
		]],
		[/* method */ 'getLocalPatternChars()', [
			[/* method description */
				[/* text */ 't', `Gets localized date-time pattern characters. For example: 'u', 't', etc.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the localized date-time pattern characters.`]
			]
		]],
		[/* method */ 'getAmPmStrings()', [
			[/* method description */
				[/* text */ 't', `Gets ampm strings. For example: "AM" and "PM".`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ampm strings.`]
			]
		]],
		[/* method */ 'getEras()', [
			[/* method description */
				[/* text */ 't', `Gets era strings. For example: "AD" and "BC".`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the era strings.`]
			]
		]],
		[/* method */ 'getMonths()', [
			[/* method description */
				[/* text */ 't', `Gets month strings. For example: "January", "February", etc.
 An array with either 12 or 13 elements will be returned depending
 on whether or not `],
				[/* reference */ 'r', `java.util.Calendar#UNDECIMBER`, `Calendar.UNDECIMBER`],
				[/* text */ 't', `
 is supported. Use
 `],
				[/* reference */ 'r', `java.util.Calendar#JANUARY`, `Calendar.JANUARY`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.util.Calendar#FEBRUARY`, `Calendar.FEBRUARY`],
				[/* text */ 't', `,
 etc. to index the result array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the language requires different forms for formatting and
 stand-alone usages, this method returns month names in the
 formatting form. For example, the preferred month name for
 January in the Czech language is `],
					[/* text */ 't', `ledna`],
					[/* text */ 't', ` in the
 formatting form, while it is `],
					[/* text */ 't', `leden`],
					[/* text */ 't', ` in the stand-alone
 form. This method returns `],
					[/* inline code block */ 'i', `"ledna"`],
					[/* text */ 't', ` in this case. Refer
 to the `],
					[/* external link */ 'a', `http://unicode.org/reports/tr35/#Calendar_Elements`, `Calendar Elements in the Unicode Locale Data Markup Language (LDML) specification`],
					[/* text */ 't', ` for more details.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the month strings.`]
			]
		]],
		[/* method */ 'getShortMonths()', [
			[/* method description */
				[/* text */ 't', `Gets short month strings. For example: "Jan", "Feb", etc.
 An array with either 12 or 13 elements will be returned depending
 on whether or not `],
				[/* reference */ 'r', `java.util.Calendar#UNDECIMBER`, `Calendar.UNDECIMBER`],
				[/* text */ 't', `
 is supported. Use
 `],
				[/* reference */ 'r', `java.util.Calendar#JANUARY`, `Calendar.JANUARY`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.util.Calendar#FEBRUARY`, `Calendar.FEBRUARY`],
				[/* text */ 't', `,
 etc. to index the result array.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the language requires different forms for formatting and
 stand-alone usages, this method returns short month names in
 the formatting form. For example, the preferred abbreviation
 for January in the Catalan language is `],
					[/* text */ 't', `de gen.`],
					[/* text */ 't', ` in the
 formatting form, while it is `],
					[/* text */ 't', `gen.`],
					[/* text */ 't', ` in the stand-alone
 form. This method returns `],
					[/* inline code block */ 'i', `"de gen."`],
					[/* text */ 't', ` in this case. Refer
 to the `],
					[/* external link */ 'a', `http://unicode.org/reports/tr35/#Calendar_Elements`, `Calendar Elements in the Unicode Locale Data Markup Language (LDML) specification`],
					[/* text */ 't', ` for more details.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the short month strings.`]
			]
		]],
		[/* method */ 'getShortWeekdays()', [
			[/* method description */
				[/* text */ 't', `Gets short weekday strings. For example: "Sun", "Mon", etc.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the short weekday strings. Use
 `],
				[/* reference */ 'r', `java.util.Calendar#SUNDAY`, `Calendar.SUNDAY`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.util.Calendar#MONDAY`, `Calendar.MONDAY`],
				[/* text */ 't', `, etc. to index
 the result array.`]
			]
		]],
		[/* method */ 'getWeekdays()', [
			[/* method description */
				[/* text */ 't', `Gets weekday strings. For example: "Sunday", "Monday", etc.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the weekday strings. Use
 `],
				[/* reference */ 'r', `java.util.Calendar#SUNDAY`, `Calendar.SUNDAY`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.util.Calendar#MONDAY`, `Calendar.MONDAY`],
				[/* text */ 't', `, etc. to index
 the result array.`]
			]
		]],
		[/* method */ 'getZoneStrings()', [
			[/* method description */
				[/* text */ 't', `Gets time zone strings.  Use of this method is discouraged; use
 `],
				[/* reference */ 'r', `java.util.TimeZone#getDisplayName()`, `TimeZone.getDisplayName()`],
				[/* text */ 't', `
 instead.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The value returned is a
 two-dimensional array of strings of size `],
					[/* text */ 't', `n`],
					[/* text */ 't', ` by `],
					[/* text */ 't', `m`],
					[/* text */ 't', `,
 where `],
					[/* text */ 't', `m`],
					[/* text */ 't', ` is at least 5.  Each of the `],
					[/* text */ 't', `n`],
					[/* text */ 't', ` rows is an
 entry containing the localized names for a single `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', `.
 Each such row contains (with `],
					[/* inline code block */ 'i', `i`],
					[/* text */ 't', ` ranging from
 0..`],
					[/* text */ 't', `n`],
					[/* text */ 't', `-1):
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `zoneStrings[i][0]`],
						[/* text */ 't', ` - time zone ID`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `zoneStrings[i][1]`],
						[/* text */ 't', ` - long name of zone in standard
 time`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `zoneStrings[i][2]`],
						[/* text */ 't', ` - short name of zone in
 standard time`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `zoneStrings[i][3]`],
						[/* text */ 't', ` - long name of zone in daylight
 saving time`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `zoneStrings[i][4]`],
						[/* text */ 't', ` - short name of zone in daylight
 saving time`]
					]]
				]],
				[/* text */ 't', `
 The zone ID is `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` localized; it's one of the valid IDs of
 the `],
				[/* reference */ 'r', `java.util.TimeZone`, `TimeZone`],
				[/* text */ 't', ` class that are not
 `],
				[/* reference */ 'r', `java.util.TimeZone#CustomID`, `custom IDs`],
				[/* text */ 't', `.
 All other entries are localized names.  If a zone does not implement
 daylight saving time, the daylight saving time names should not be used.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* reference */ 'r', `#setZoneStrings(java.lang.String%5B%5D%5B%5D)`, `setZoneStrings`],
					[/* text */ 't', ` has been called
 on this `],
					[/* inline code block */ 'i', `DateFormatSymbols`],
					[/* text */ 't', ` instance, then the strings
 provided by that call are returned. Otherwise, the returned array
 contains names provided by the Java runtime and by installed
 `],
					[/* reference */ 'r', `java.util.spi.TimeZoneNameProvider`, `TimeZoneNameProvider`],
					[/* text */ 't', `
 implementations.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the time zone strings.`]
			]
		]],
		[/* method */ 'getInstance()', [
			[/* method description */
				[/* text */ 't', `Gets the `],
				[/* inline code block */ 'i', `DateFormatSymbols`],
				[/* text */ 't', ` instance for the default
 locale.  This method provides access to `],
				[/* inline code block */ 'i', `DateFormatSymbols`],
				[/* text */ 't', `
 instances for locales supported by the Java runtime itself as well
 as for those supported by installed
 `],
				[/* reference */ 'r', `java.text.spi.DateFormatSymbolsProvider`, `DateFormatSymbolsProvider`],
				[/* text */ 't', `
 implementations.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `This is equivalent to calling `],
					[/* reference */ 'r', `#getInstance(java.util.Locale)`, `getInstance(Locale.getDefault(Locale.Category.FORMAT))`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `DateFormatSymbols`],
				[/* text */ 't', ` instance.`]
			]
		]],
		[/* method */ 'getInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the `],
				[/* inline code block */ 'i', `DateFormatSymbols`],
				[/* text */ 't', ` instance for the specified
 locale.  This method provides access to `],
				[/* inline code block */ 'i', `DateFormatSymbols`],
				[/* text */ 't', `
 instances for locales supported by the Java runtime itself as well
 as for those supported by installed
 `],
				[/* reference */ 'r', `java.text.spi.DateFormatSymbolsProvider`, `DateFormatSymbolsProvider`],
				[/* text */ 't', `
 implementations.`]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the given locale.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `DateFormatSymbols`],
				[/* text */ 't', ` instance.`]
			]
		]],
		[/* method */ 'getAvailableLocales()', [
			[/* method description */
				[/* text */ 't', `Returns an array of all locales for which the
 `],
				[/* inline code block */ 'i', `getInstance`],
				[/* text */ 't', ` methods of this class can return
 localized instances.
 The returned array represents the union of locales supported by the
 Java runtime and by installed
 `],
				[/* reference */ 'r', `java.text.spi.DateFormatSymbolsProvider`, `DateFormatSymbolsProvider`],
				[/* text */ 't', `
 implementations.  It must contain at least a `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `
 instance equal to `],
				[/* reference */ 'r', `java.util.Locale#US`, `Locale.US`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An array of locales for which localized
         `],
				[/* inline code block */ 'i', `DateFormatSymbols`],
				[/* text */ 't', ` instances are available.`]
			]
		]],
		[/* method */ 'setAmPmStrings(java.lang.String[])', [
			[/* method description */
				[/* text */ 't', `Sets ampm strings. For example: "AM" and "PM".`]
			],
			[/* parameters */
				[/* parameter */ 'newAmpms', [/* parameter description */
					[/* text */ 't', `the new ampm strings.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setEras(java.lang.String[])', [
			[/* method description */
				[/* text */ 't', `Sets era strings. For example: "AD" and "BC".`]
			],
			[/* parameters */
				[/* parameter */ 'newEras', [/* parameter description */
					[/* text */ 't', `the new era strings.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setLocalPatternChars(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets localized date-time pattern characters. For example: 'u', 't', etc.`]
			],
			[/* parameters */
				[/* parameter */ 'newLocalPatternChars', [/* parameter description */
					[/* text */ 't', `the new localized date-time
 pattern characters.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setMonths(java.lang.String[])', [
			[/* method description */
				[/* text */ 't', `Sets month strings. For example: "January", "February", etc.`]
			],
			[/* parameters */
				[/* parameter */ 'newMonths', [/* parameter description */
					[/* text */ 't', `the new month strings. The array should
 be indexed by `],
					[/* reference */ 'r', `java.util.Calendar#JANUARY`, `Calendar.JANUARY`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Calendar#FEBRUARY`, `Calendar.FEBRUARY`],
					[/* text */ 't', `, etc.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setShortMonths(java.lang.String[])', [
			[/* method description */
				[/* text */ 't', `Sets short month strings. For example: "Jan", "Feb", etc.`]
			],
			[/* parameters */
				[/* parameter */ 'newShortMonths', [/* parameter description */
					[/* text */ 't', `the new short month strings. The array should
 be indexed by `],
					[/* reference */ 'r', `java.util.Calendar#JANUARY`, `Calendar.JANUARY`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Calendar#FEBRUARY`, `Calendar.FEBRUARY`],
					[/* text */ 't', `, etc.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setShortWeekdays(java.lang.String[])', [
			[/* method description */
				[/* text */ 't', `Sets short weekday strings. For example: "Sun", "Mon", etc.`]
			],
			[/* parameters */
				[/* parameter */ 'newShortWeekdays', [/* parameter description */
					[/* text */ 't', `the new short weekday strings. The array should
 be indexed by `],
					[/* reference */ 'r', `java.util.Calendar#SUNDAY`, `Calendar.SUNDAY`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Calendar#MONDAY`, `Calendar.MONDAY`],
					[/* text */ 't', `, etc.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setWeekdays(java.lang.String[])', [
			[/* method description */
				[/* text */ 't', `Sets weekday strings. For example: "Sunday", "Monday", etc.`]
			],
			[/* parameters */
				[/* parameter */ 'newWeekdays', [/* parameter description */
					[/* text */ 't', `the new weekday strings. The array should
 be indexed by `],
					[/* reference */ 'r', `java.util.Calendar#SUNDAY`, `Calendar.SUNDAY`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.util.Calendar#MONDAY`, `Calendar.MONDAY`],
					[/* text */ 't', `, etc.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setZoneStrings(java.lang.String[][])', [
			[/* method description */
				[/* text */ 't', `Sets time zone strings.  The argument must be a
 two-dimensional array of strings of size `],
				[/* text */ 't', `n`],
				[/* text */ 't', ` by `],
				[/* text */ 't', `m`],
				[/* text */ 't', `,
 where `],
				[/* text */ 't', `m`],
				[/* text */ 't', ` is at least 5.  Each of the `],
				[/* text */ 't', `n`],
				[/* text */ 't', ` rows is an
 entry containing the localized names for a single `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', `.
 Each such row contains (with `],
				[/* inline code block */ 'i', `i`],
				[/* text */ 't', ` ranging from
 0..`],
				[/* text */ 't', `n`],
				[/* text */ 't', `-1):
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `zoneStrings[i][0]`],
						[/* text */ 't', ` - time zone ID`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `zoneStrings[i][1]`],
						[/* text */ 't', ` - long name of zone in standard
 time`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `zoneStrings[i][2]`],
						[/* text */ 't', ` - short name of zone in
 standard time`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `zoneStrings[i][3]`],
						[/* text */ 't', ` - long name of zone in daylight
 saving time`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `zoneStrings[i][4]`],
						[/* text */ 't', ` - short name of zone in daylight
 saving time`]
					]]
				]],
				[/* text */ 't', `
 The zone ID is `],
				[/* text */ 't', `not`],
				[/* text */ 't', ` localized; it's one of the valid IDs of
 the `],
				[/* reference */ 'r', `java.util.TimeZone`, `TimeZone`],
				[/* text */ 't', ` class that are not
 `],
				[/* reference */ 'r', `java.util.TimeZone#CustomID`, `custom IDs`],
				[/* text */ 't', `.
 All other entries are localized names.`]
			],
			[/* parameters */
				[/* parameter */ 'newZoneStrings', [/* parameter description */
					[/* text */ 't', `the new time zone strings.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the length of any row in
    `],
					[/* inline code block */ 'i', `newZoneStrings`],
					[/* text */ 't', ` is less than 5`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `newZoneStrings`],
					[/* text */ 't', ` is null`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
