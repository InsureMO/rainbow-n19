import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.format.DateTimeFormatter', [
	[/* class description */
		[/* text */ 't', `Formatter for printing and parsing date-time objects.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This class provides the main application entry point for printing and parsing
 and provides common implementations of `],
			[/* inline code block */ 'i', `DateTimeFormatter`],
			[/* text */ 't', `:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Using predefined constants, such as `],
				[/* text */ 't', `ISO_LOCAL_DATE`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Using pattern letters, such as `],
				[/* inline code block */ 'i', `uuuu-MMM-dd`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Using localized styles, such as `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `medium`]
			]]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 More complex formatters are provided by
 `],
			[/* reference */ 'r', `java.time.format.DateTimeFormatterBuilder`, `DateTimeFormatterBuilder`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The main date-time classes provide two methods - one for formatting,
 `],
			[/* inline code block */ 'i', `format(DateTimeFormatter formatter)`],
			[/* text */ 't', `, and one for parsing,
 `],
			[/* inline code block */ 'i', `parse(CharSequence text, DateTimeFormatter formatter)`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `For example:
 `],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', `  LocalDate date = LocalDate.now();
  String text = date.format(formatter);
  LocalDate parsedDate = LocalDate.parse(text, formatter);
 `]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 In addition to the format, formatters can be created with desired Locale,
 Chronology, ZoneId, and DecimalStyle.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* reference */ 'r', `#withLocale(java.util.Locale)`, `withLocale`],
			[/* text */ 't', ` method returns a new formatter that
 overrides the locale. The locale affects some aspects of formatting and
 parsing. For example, the `],
			[/* reference */ 'r', `#ofLocalizedDate(java.time.format.FormatStyle)`, `ofLocalizedDate`],
			[/* text */ 't', ` provides a
 formatter that uses the locale specific date format.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* reference */ 'r', `#withChronology(java.time.chrono.Chronology)`, `withChronology`],
			[/* text */ 't', ` method returns a new formatter
 that overrides the chronology. If overridden, the date-time value is
 converted to the chronology before formatting. During parsing the date-time
 value is converted to the chronology before it is returned.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* reference */ 'r', `#withZone(java.time.ZoneId)`, `withZone`],
			[/* text */ 't', ` method returns a new formatter that overrides
 the zone. If overridden, the date-time value is converted to a ZonedDateTime
 with the requested ZoneId before formatting. During parsing the ZoneId is
 applied before the value is returned.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* reference */ 'r', `#withDecimalStyle(java.time.format.DecimalStyle)`, `withDecimalStyle`],
			[/* text */ 't', ` method returns a new formatter that
 overrides the `],
			[/* reference */ 'r', `java.time.format.DecimalStyle`, `DecimalStyle`],
			[/* text */ 't', `. The DecimalStyle symbols are used for
 formatting and parsing.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Some applications may need to use the older `],
			[/* reference */ 'r', `java.text.Format`, `java.text.Format`],
			[/* text */ 't', `
 class for formatting. The `],
			[/* reference */ 'r', `#toFormat()`, `toFormat()`],
			[/* text */ 't', ` method returns an
 implementation of `],
			[/* inline code block */ 'i', `java.text.Format`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', `Predefined Formatters`],
		[/* text */ 't', `
 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc', [
				[/* text */ 't', `Predefined Formatters`]
			]],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Formatter`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Description`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Example`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* reference */ 'r', `#ofLocalizedDate(java.time.format.FormatStyle)`, `ofLocalizedDate(dateStyle)`],
						[/* text */ 't', ` `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Formatter with date style from the locale `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` '2011-12-03'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#ofLocalizedTime(java.time.format.FormatStyle)`, `ofLocalizedTime(timeStyle)`],
						[/* text */ 't', ` `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Formatter with time style from the locale `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` '10:15:30'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#ofLocalizedDateTime(java.time.format.FormatStyle)`, `ofLocalizedDateTime(dateTimeStyle)`],
						[/* text */ 't', ` `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Formatter with a style for date and time from the locale`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` '3 Jun 2008 11:05:30'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* reference */ 'r', `#ofLocalizedDateTime(java.time.format.FormatStyle)`, `ofLocalizedDateTime(dateStyle,timeStyle)`],
						[/* text */ 't', `
 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Formatter with date and time styles from the locale `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` '3 Jun 2008 11:05'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `BASIC_ISO_DATE`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Basic ISO date `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'20111203'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `ISO_LOCAL_DATE`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` ISO Local Date `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'2011-12-03'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `ISO_OFFSET_DATE`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` ISO Date with offset `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'2011-12-03+01:00'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `ISO_DATE`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` ISO Date with or without offset `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` '2011-12-03+01:00'; '2011-12-03'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `ISO_LOCAL_TIME`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Time without offset `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'10:15:30'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `ISO_OFFSET_TIME`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Time with offset `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'10:15:30+01:00'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `ISO_TIME`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Time with or without offset `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'10:15:30+01:00'; '10:15:30'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `ISO_LOCAL_DATE_TIME`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` ISO Local Date and Time `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'2011-12-03T10:15:30'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `ISO_OFFSET_DATE_TIME`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Date Time with Offset
 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'2011-12-03T10:15:30+01:00'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `ISO_ZONED_DATE_TIME`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Zoned Date Time `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'2011-12-03T10:15:30+01:00[Europe/Paris]'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `ISO_DATE_TIME`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Date and time with ZoneId `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'2011-12-03T10:15:30+01:00[Europe/Paris]'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `ISO_ORDINAL_DATE`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Year and day of year `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'2012-337'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `ISO_WEEK_DATE`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Year and Week `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'2012-W48-6'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `ISO_INSTANT`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` Date and Time of an Instant `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'2011-12-03T10:15:30Z' `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', ` `],
						[/* text */ 't', `RFC_1123_DATE_TIME`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', ` RFC 1123 / RFC 822 `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'Tue, 3 Jun 2008 11:05:30 GMT'`]
					]]
				]]
			]],
		],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `Patterns for Formatting and Parsing`],
		[/* text */ 't', `
 Patterns are based on a simple sequence of letters and symbols.
 A pattern is used to create a Formatter using the
 `],
		[/* reference */ 'r', `#ofPattern(java.lang.String)`, `ofPattern(String)`],
		[/* text */ 't', ` and `],
		[/* reference */ 'r', `#ofPattern(java.lang.String,java.util.Locale)`, `ofPattern(String, Locale)`],
		[/* text */ 't', ` methods.
 For example,
 `],
		[/* inline code block */ 'i', `"d MMM uuuu"`],
		[/* text */ 't', ` will format 2011-12-03 as '3 Dec 2011'.
 A formatter created from a pattern can be used as many times as necessary,
 it is immutable and is thread-safe.
 `],
		[/* block */ 'b', `
 For example:
 `],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', `  LocalDate date = LocalDate.now();
  DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy MM dd");
  String text = date.format(formatter);
  LocalDate parsedDate = LocalDate.parse(text, formatter);
 `]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 All letters 'A' to 'Z' and 'a' to 'z' are reserved as pattern letters. The
 following pattern letters are defined:
 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc', [
				[/* text */ 't', `Pattern Letters and Symbols`]
			]],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Symbol`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Meaning`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Presentation`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Examples`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `G`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `era`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `text`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `AD; Anno Domini; A`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `u`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `year`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `year`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2004; 04`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `y`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `year-of-era`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `year`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2004; 04`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `D`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `day-of-year`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `189`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `M/L`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `month-of-year`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number/text`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `7; 07; Jul; July; J`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `d`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `day-of-month`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `10`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `g`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `modified-julian-day`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2451334`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Q/q`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `quarter-of-year`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number/text`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `3; 03; Q3; 3rd quarter`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Y`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `week-based-year`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `year`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1996; 96`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `w`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `week-of-week-based-year`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `27`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `W`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `week-of-month`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `4`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `E`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `day-of-week`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `text`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Tue; Tuesday; T`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `e/c`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `localized day-of-week`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number/text`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `2; 02; Tue; Tuesday; T`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `F`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `day-of-week-in-month`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `3`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `a`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `am-pm-of-day`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `text`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `PM`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `B`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `period-of-day`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `text`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `in the morning`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `h`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `clock-hour-of-am-pm (1-12)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `12`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `K`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `hour-of-am-pm (0-11)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `0`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `k`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `clock-hour-of-day (1-24)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `24`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `H`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `hour-of-day (0-23)`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `0`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `m`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `minute-of-hour`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `30`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `s`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `second-of-minute`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `55`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `S`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `fraction-of-second`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `fraction`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `978`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `A`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `milli-of-day`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1234`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `n`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `nano-of-second`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `987654321`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `N`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `nano-of-day`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `number`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1234000000`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `V`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `time-zone ID`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `zone-id`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `America/Los_Angeles; Z; -08:30`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `v`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `generic time-zone name`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `zone-name`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Pacific Time; PT`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `z`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `time-zone name`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `zone-name`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Pacific Standard Time; PST`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `O`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `localized zone-offset`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `offset-O`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `GMT+8; GMT+08:00; UTC-08:00`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `X`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `zone-offset 'Z' for zero`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `offset-X`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Z; -08; -0830; -08:30; -083015; -08:30:15`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `x`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `zone-offset`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `offset-x`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `+0000; -08; -0830; -08:30; -083015; -08:30:15`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Z`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `zone-offset`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `offset-Z`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `+0000; -0800; -08:00`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `p`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `pad next`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `pad modifier`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `1`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `'`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `escape for text`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `delimiter`]
					]],
					[/* table cell */ 'tbc']
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `''`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `single quote`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `literal`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `'`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `[`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `optional section start`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc']
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `]`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `optional section end`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc']
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `#`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `reserved for future use`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc']
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `{`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `reserved for future use`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc']
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `}`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `reserved for future use`]
					]],
					[/* table cell */ 'tbc'],
					[/* table cell */ 'tbc']
				]]
			]],
		],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 The count of pattern letters determines the format.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* text */ 't', `Text`],
			[/* text */ 't', `: The text style is determined based on the number of pattern
 letters used. Less than 4 pattern letters will use the
 `],
			[/* reference */ 'r', `java.time.format.TextStyle#SHORT`, `short form`],
			[/* text */ 't', `. Exactly 4 pattern letters will use the
 `],
			[/* reference */ 'r', `java.time.format.TextStyle#FULL`, `full form`],
			[/* text */ 't', `. Exactly 5 pattern letters will use the
 `],
			[/* reference */ 'r', `java.time.format.TextStyle#NARROW`, `narrow form`],
			[/* text */ 't', `.
 Pattern letters 'L', 'c', and 'q' specify the stand-alone form of the text styles.
 `]
		]],
		[/* block */ 'b', `Number`],
		[/* block */ 'b', `Number/Text`],
		[/* block */ 'b', `Fraction`],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* text */ 't', `Year`],
			[/* text */ 't', `: The count of letters determines the minimum field width below
 which padding is used. If the count of letters is two, then a
 `],
			[/* reference */ 'r', `java.time.format.DateTimeFormatterBuilder#appendValueReduced(java.time.temporal.TemporalField,int,int,int)`, `reduced`],
			[/* text */ 't', ` two digit form is
 used. For printing, this outputs the rightmost two digits. For parsing, this
 will parse using the base value of 2000, resulting in a year within the range
 2000 to 2099 inclusive. If the count of letters is less than four (but not
 two), then the sign is only output for negative years as per
 `],
			[/* reference */ 'r', `java.time.format.SignStyle#NORMAL`, `SignStyle.NORMAL`],
			[/* text */ 't', `. Otherwise, the sign is output if the pad width is
 exceeded, as per `],
			[/* reference */ 'r', `java.time.format.SignStyle#EXCEEDS_PAD`, `SignStyle.EXCEEDS_PAD`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* text */ 't', `ZoneId`],
			[/* text */ 't', `: This outputs the time-zone ID, such as 'Europe/Paris'. If the
 count of letters is two, then the time-zone ID is output. Any other count of
 letters throws `],
			[/* inline code block */ 'i', `IllegalArgumentException`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* text */ 't', `Zone names`],
			[/* text */ 't', `: This outputs the display name of the time-zone ID. If the
 pattern letter is 'z' the output is the daylight savings aware zone name.
 If there is insufficient information to determine whether DST applies,
 the name ignoring daylight savings time will be used.
 If the count of letters is one, two or three, then the short name is output.
 If the count of letters is four, then the full name is output.
 Five or more letters throws `],
			[/* inline code block */ 'i', `IllegalArgumentException`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 If the pattern letter is 'v' the output provides the zone name ignoring
 daylight savings time. If the count of letters is one, then the short name is output.
 If the count of letters is four, then the full name is output.
 Two, three and five or more letters throw `],
			[/* inline code block */ 'i', `IllegalArgumentException`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* text */ 't', `Offset X and x`],
			[/* text */ 't', `: This formats the offset based on the number of pattern
 letters. One letter outputs just the hour, such as '+01', unless the minute
 is non-zero in which case the minute is also output, such as '+0130'. Two
 letters outputs the hour and minute, without a colon, such as '+0130'. Three
 letters outputs the hour and minute, with a colon, such as '+01:30'. Four
 letters outputs the hour and minute and optional second, without a colon,
 such as '+013015'. Five letters outputs the hour and minute and optional
 second, with a colon, such as '+01:30:15'. Six or more letters throws
 `],
			[/* inline code block */ 'i', `IllegalArgumentException`],
			[/* text */ 't', `. Pattern letter 'X' (upper case) will output
 'Z' when the offset to be output would be zero, whereas pattern letter 'x'
 (lower case) will output '+00', '+0000', or '+00:00'.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* text */ 't', `Offset O`],
			[/* text */ 't', `: With a non-zero offset, this formats the localized offset
 based on the number of pattern letters. One letter outputs the
 `],
			[/* reference */ 'r', `java.time.format.TextStyle#SHORT`, `short`],
			[/* text */ 't', ` form of the localized offset, which is
 localized offset text, such as 'GMT', with hour without leading zero, optional
 2-digit minute and second if non-zero, and colon, for example 'GMT+8'. Four
 letters outputs the `],
			[/* reference */ 'r', `java.time.format.TextStyle#FULL`, `full`],
			[/* text */ 't', ` form, which is localized
 offset text, such as 'GMT, with 2-digit hour and minute field, optional second
 field if non-zero, and colon, for example 'GMT+08:00'. If the offset is zero,
 only localized text is output. Any other count of letters throws
 `],
			[/* inline code block */ 'i', `IllegalArgumentException`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* text */ 't', `Offset Z`],
			[/* text */ 't', `: This formats the offset based on the number of pattern
 letters. One, two or three letters outputs the hour and minute, without a
 colon, such as '+0130'. The output will be '+0000' when the offset is zero.
 Four letters outputs the `],
			[/* reference */ 'r', `java.time.format.TextStyle#FULL`, `full`],
			[/* text */ 't', ` form of localized
 offset, equivalent to four letters of Offset-O. The output will be the
 corresponding localized offset text if the offset is zero. Five
 letters outputs the hour, minute, with optional second if non-zero, with
 colon. It outputs 'Z' if the offset is zero.
 Six or more letters throws `],
			[/* inline code block */ 'i', `IllegalArgumentException`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* text */ 't', `Optional section`],
			[/* text */ 't', `: The optional section markers work exactly like
 calling `],
			[/* reference */ 'r', `java.time.format.DateTimeFormatterBuilder#optionalStart()`, `DateTimeFormatterBuilder.optionalStart()`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `java.time.format.DateTimeFormatterBuilder#optionalEnd()`, `DateTimeFormatterBuilder.optionalEnd()`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* text */ 't', `Pad modifier`],
			[/* text */ 't', `: Modifies the pattern that immediately follows to be
 padded with spaces. The pad width is determined by the number of pattern
 letters. This is the same as calling
 `],
			[/* reference */ 'r', `java.time.format.DateTimeFormatterBuilder#padNext(int)`, `DateTimeFormatterBuilder.padNext(int)`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 For example, 'ppH' outputs the hour-of-day padded on the left with spaces to
 a width of 2.
 `],
		[/* block */ 'b', `
 Any unrecognized letter is an error. Any non-letter character, other than
 '[', ']', '{', '}', '#' and the single quote will be output directly.
 Despite this, it is recommended to use single quotes around all characters
 that you want to output directly to ensure that future changes do not break
 your application.

 `],
		[/* block */ 'b', `Resolving`],
		[/* text */ 't', `
 Parsing is implemented as a two-phase operation.
 First, the text is parsed using the layout defined by the formatter, producing
 a `],
		[/* inline code block */ 'i', `Map`],
		[/* text */ 't', ` of field to value, a `],
		[/* inline code block */ 'i', `ZoneId`],
		[/* text */ 't', ` and a `],
		[/* inline code block */ 'i', `Chronology`],
		[/* text */ 't', `.
 Second, the parsed data is `],
		[/* text */ 't', `resolved`],
		[/* text */ 't', `, by validating, combining and
 simplifying the various fields into more useful ones.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Five parsing methods are supplied by this class.
 Four of these perform both the parse and resolve phases.
 The fifth method, `],
			[/* reference */ 'r', `#parseUnresolved(java.lang.CharSequence,java.text.ParsePosition)`, `parseUnresolved(CharSequence, ParsePosition)`],
			[/* text */ 't', `,
 only performs the first phase, leaving the result unresolved.
 As such, it is essentially a low-level operation.
 `]
		]],
		[/* block */ 'b', `
 The resolve phase is controlled by two parameters, set on this class.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* reference */ 'r', `enum class in java.time.format.ResolverStyle`, `ResolverStyle`],
			[/* text */ 't', ` is an enum that offers three different approaches,
 strict, smart and lenient. The smart option is the default.
 It can be set using `],
			[/* reference */ 'r', `#withResolverStyle(java.time.format.ResolverStyle)`, `withResolverStyle(ResolverStyle)`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* reference */ 'r', `#withResolverFields(java.time.temporal.TemporalField...)`, `withResolverFields(TemporalField...)`],
			[/* text */ 't', ` parameter allows the
 set of fields that will be resolved to be filtered before resolving starts.
 For example, if the formatter has parsed a year, month, day-of-month
 and day-of-year, then there are two approaches to resolve a date:
 (year + month + day-of-month) and (year + day-of-year).
 The resolver fields allows one of the two approaches to be selected.
 If no resolver fields are set then both approaches must result in the same date.
 `]
		]],
		[/* block */ 'b', `
 Resolving separate fields to form a complete date and time is a complex
 process with behaviour distributed across a number of classes.
 It follows these steps:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `The chronology is determined.
 The chronology of the result is either the chronology that was parsed,
 or if no chronology was parsed, it is the chronology set on this class,
 or if that is null, it is `],
				[/* inline code block */ 'i', `IsoChronology`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `ChronoField`],
				[/* text */ 't', ` date fields are resolved.
 This is achieved using `],
				[/* reference */ 'r', `java.time.chrono.Chronology#resolveDate(java.util.Map,java.time.format.ResolverStyle)`, `Chronology.resolveDate(Map, ResolverStyle)`],
				[/* text */ 't', `.
 Documentation about field resolution is located in the implementation
 of `],
				[/* inline code block */ 'i', `Chronology`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `ChronoField`],
				[/* text */ 't', ` time fields are resolved.
 This is documented on `],
				[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
				[/* text */ 't', ` and is the same for all chronologies.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Any fields that are not `],
				[/* inline code block */ 'i', `ChronoField`],
				[/* text */ 't', ` are processed.
 This is achieved using `],
				[/* reference */ 'r', `java.time.temporal.TemporalField#resolve(java.util.Map,java.time.temporal.TemporalAccessor,java.time.format.ResolverStyle)`, `TemporalField.resolve(Map, TemporalAccessor, ResolverStyle)`],
				[/* text */ 't', `.
 Documentation about field resolution is located in the implementation
 of `],
				[/* inline code block */ 'i', `TemporalField`],
				[/* text */ 't', `.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `ChronoField`],
				[/* text */ 't', ` date and time fields are re-resolved.
 This allows fields in step four to produce `],
				[/* inline code block */ 'i', `ChronoField`],
				[/* text */ 't', ` values
 and have them be processed into dates and times.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` is formed if there is at least an hour-of-day available.
 This involves providing default values for minute, second and fraction of second.
 `]
			]],
			[/* block */ 'b', `Any remaining unresolved fields are cross-checked against any
 date and/or time that was resolved. Thus, an earlier stage would resolve
 (year + month + day-of-month) to a date, and this stage would check that
 day-of-week was valid for the date.
 `],
			[/* block */ 'b', [
				[/* text */ 't', `If an `],
				[/* reference */ 'r', `#parsedExcessDays()`, `excess number of days`],
				[/* text */ 't', `
 was parsed then it is added to the date if a date is available.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` If a second-based field is present, but `],
				[/* inline code block */ 'i', `LocalTime`],
				[/* text */ 't', ` was not parsed,
 then the resolver ensures that milli, micro and nano second values are
 available to meet the contract of `],
				[/* reference */ 'r', `enum class in java.time.temporal.ChronoField`, `ChronoField`],
				[/* text */ 't', `.
 These will be set to zero if missing.
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `If both date and time were parsed and either an offset or zone is present,
 the field `],
				[/* reference */ 'r', `java.time.temporal.ChronoField#INSTANT_SECONDS`, `ChronoField.INSTANT_SECONDS`],
				[/* text */ 't', ` is created.
 If an offset was parsed then the offset will be combined with the
 `],
				[/* inline code block */ 'i', `LocalDateTime`],
				[/* text */ 't', ` to form the instant, with any zone ignored.
 If a `],
				[/* inline code block */ 'i', `ZoneId`],
				[/* text */ 't', ` was parsed without an offset then the zone will be
 combined with the `],
				[/* inline code block */ 'i', `LocalDateTime`],
				[/* text */ 't', ` to form the instant using the rules
 of `],
				[/* reference */ 'r', `java.time.chrono.ChronoLocalDateTime#atZone(java.time.ZoneId)`, `ChronoLocalDateTime.atZone(ZoneId)`],
				[/* text */ 't', `.
 `]
			]]
		]],
		[/* block */ 'b', '']
	],
	[/* fields */
		[/* field */ 'BASIC_ISO_DATE', [
			[/* field description */
				[/* text */ 't', `The ISO date formatter that formats or parses a date without an
 offset, such as '20111203'.
 `],
				[/* block */ 'b', `
 This returns an immutable formatter capable of formatting and parsing
 the ISO-8601 basic local date format.
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Four digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#YEAR`, `year`],
						[/* text */ 't', `.
  Only years in the range 0000 to 9999 are supported.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Two digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#MONTH_OF_YEAR`, `month-of-year`],
						[/* text */ 't', `.
  This is pre-padded by zero to ensure two digits.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Two digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#DAY_OF_MONTH`, `day-of-month`],
						[/* text */ 't', `.
  This is pre-padded by zero to ensure two digits.
 `]
					]],
					[/* block */ 'b', `If the offset is not available to format or parse then the format is complete.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `java.time.ZoneOffset#getId()`, `offset ID`],
						[/* text */ 't', ` without colons. If the offset has
  seconds then they will be handled even though this is not part of the ISO-8601 standard.
  The offset parsing is lenient, which allows the minutes and seconds to be optional.
  Parsing is case insensitive.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 As this formatter has an optional element, it may be necessary to parse using
 `],
					[/* reference */ 'r', `#parseBest(java.lang.CharSequence,java.time.temporal.TemporalQuery...)`, `parseBest(java.lang.CharSequence, java.time.temporal.TemporalQuery<?>...)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `STRICT`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]],
		[/* field */ 'ISO_DATE', [
			[/* field description */
				[/* text */ 't', `The ISO date formatter that formats or parses a date with the
 offset if available, such as '2011-12-03' or '2011-12-03+01:00'.
 `],
				[/* block */ 'b', `
 This returns an immutable formatter capable of formatting and parsing
 the ISO-8601 extended date format.
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* text */ 't', `ISO_LOCAL_DATE`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', `If the offset is not available then the format is complete.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `java.time.ZoneOffset#getId()`, `offset ID`],
						[/* text */ 't', `. If the offset has seconds then
  they will be handled even though this is not part of the ISO-8601 standard.
  Parsing is case insensitive.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 As this formatter has an optional element, it may be necessary to parse using
 `],
					[/* reference */ 'r', `#parseBest(java.lang.CharSequence,java.time.temporal.TemporalQuery...)`, `parseBest(java.lang.CharSequence, java.time.temporal.TemporalQuery<?>...)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `STRICT`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]],
		[/* field */ 'ISO_DATE_TIME', [
			[/* field description */
				[/* text */ 't', `The ISO-like date-time formatter that formats or parses a date-time with
 the offset and zone if available, such as '2011-12-03T10:15:30',
 '2011-12-03T10:15:30+01:00' or '2011-12-03T10:15:30+01:00[Europe/Paris]'.
 `],
				[/* block */ 'b', `
 This returns an immutable formatter capable of formatting and parsing
 the ISO-8601 extended local or offset date-time format, as well as the
 extended non-ISO form specifying the time-zone.
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* text */ 't', `ISO_LOCAL_DATE_TIME`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', `If the offset is not available to format or parse then the format is complete.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `java.time.ZoneOffset#getId()`, `offset ID`],
						[/* text */ 't', `. If the offset has seconds then
  they will be handled even though this is not part of the ISO-8601 standard.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the zone ID is not available or is a `],
						[/* inline code block */ 'i', `ZoneOffset`],
						[/* text */ 't', ` then the format is complete.
 `]
					]],
					[/* block */ 'b', `An open square bracket '['.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `java.time.ZoneId#getId()`, `zone ID`],
						[/* text */ 't', `. This is not part of the ISO-8601 standard.
  Parsing is case sensitive.
 `]
					]],
					[/* block */ 'b', `A close square bracket ']'.
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 As this formatter has an optional element, it may be necessary to parse using
 `],
					[/* reference */ 'r', `#parseBest(java.lang.CharSequence,java.time.temporal.TemporalQuery...)`, `parseBest(java.lang.CharSequence, java.time.temporal.TemporalQuery<?>...)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `STRICT`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]],
		[/* field */ 'ISO_INSTANT', [
			[/* field description */
				[/* text */ 't', `The ISO instant formatter that formats or parses an instant in UTC,
 such as '2011-12-03T10:15:30Z'.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns an immutable formatter capable of formatting and parsing
 the ISO-8601 instant format.
 When formatting, the instant will always be suffixed by 'Z' to indicate UTC.
 The second-of-minute is always output.
 The nano-of-second outputs zero, three, six or nine digits as necessary.
 When parsing, the behaviour of `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatterBuilder#appendOffsetId()`, `DateTimeFormatterBuilder.appendOffsetId()`],
					[/* text */ 't', `
 will be used to parse the offset, converting the instant to UTC as necessary.
 The time to at least the seconds field is required.
 Fractional seconds from zero to nine are parsed.
 The localized decimal style is not used.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is a special case formatter intended to allow a human readable form
 of an `],
					[/* reference */ 'r', `java.time.Instant`, `Instant`],
					[/* text */ 't', `. The `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` class is designed to
 only represent a point in time and internally stores a value in nanoseconds
 from a fixed epoch of 1970-01-01Z. As such, an `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` cannot be
 formatted as a date or time without providing some form of time-zone.
 This formatter allows the `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', ` to be formatted, by providing
 a suitable conversion using `],
					[/* inline code block */ 'i', `ZoneOffset.UTC`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* text */ 't', `ISO_OFFSET_DATE_TIME`],
						[/* text */ 't', ` where the instant is converted from
  `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#INSTANT_SECONDS`, `ChronoField.INSTANT_SECONDS`],
						[/* text */ 't', ` and `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#NANO_OF_SECOND`, `ChronoField.NANO_OF_SECOND`],
						[/* text */ 't', `
  using the `],
						[/* inline code block */ 'i', `UTC`],
						[/* text */ 't', ` offset. Parsing is case insensitive.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has no override chronology or zone.
 It uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `STRICT`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]],
		[/* field */ 'ISO_LOCAL_DATE', [
			[/* field description */
				[/* text */ 't', `The ISO date formatter that formats or parses a date without an
 offset, such as '2011-12-03'.
 `],
				[/* block */ 'b', `
 This returns an immutable formatter capable of formatting and parsing
 the ISO-8601 extended local date format.
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Four digits or more for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#YEAR`, `year`],
						[/* text */ 't', `.
 Years in the range 0000 to 9999 will be pre-padded by zero to ensure four digits.
 Years outside that range will have a prefixed positive or negative symbol.
 `]
					]],
					[/* block */ 'b', `A dash
 `],
					[/* block */ 'b', [
						[/* text */ 't', `Two digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#MONTH_OF_YEAR`, `month-of-year`],
						[/* text */ 't', `.
  This is pre-padded by zero to ensure two digits.
 `]
					]],
					[/* block */ 'b', `A dash
 `],
					[/* block */ 'b', [
						[/* text */ 't', `Two digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#DAY_OF_MONTH`, `day-of-month`],
						[/* text */ 't', `.
  This is pre-padded by zero to ensure two digits.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `STRICT`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]],
		[/* field */ 'ISO_LOCAL_DATE_TIME', [
			[/* field description */
				[/* text */ 't', `The ISO date-time formatter that formats or parses a date-time without
 an offset, such as '2011-12-03T10:15:30'.
 `],
				[/* block */ 'b', `
 This returns an immutable formatter capable of formatting and parsing
 the ISO-8601 extended offset date-time format.
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* text */ 't', `ISO_LOCAL_DATE`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', `The letter 'T'. Parsing is case insensitive.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* text */ 't', `ISO_LOCAL_TIME`],
						[/* text */ 't', `
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `STRICT`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]],
		[/* field */ 'ISO_LOCAL_TIME', [
			[/* field description */
				[/* text */ 't', `The ISO time formatter that formats or parses a time without an
 offset, such as '10:15' or '10:15:30'.
 `],
				[/* block */ 'b', `
 This returns an immutable formatter capable of formatting and parsing
 the ISO-8601 extended local time format.
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Two digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#HOUR_OF_DAY`, `hour-of-day`],
						[/* text */ 't', `.
  This is pre-padded by zero to ensure two digits.
 `]
					]],
					[/* block */ 'b', `A colon
 `],
					[/* block */ 'b', [
						[/* text */ 't', `Two digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#MINUTE_OF_HOUR`, `minute-of-hour`],
						[/* text */ 't', `.
  This is pre-padded by zero to ensure two digits.
 `]
					]],
					[/* block */ 'b', `If the second-of-minute is not available then the format is complete.
 `],
					[/* block */ 'b', `A colon
 `],
					[/* block */ 'b', [
						[/* text */ 't', `Two digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#SECOND_OF_MINUTE`, `second-of-minute`],
						[/* text */ 't', `.
  This is pre-padded by zero to ensure two digits.
 `]
					]],
					[/* block */ 'b', `If the nano-of-second is zero or not available then the format is complete.
 `],
					[/* block */ 'b', `A decimal point
 `],
					[/* block */ 'b', [
						[/* text */ 't', `One to nine digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#NANO_OF_SECOND`, `nano-of-second`],
						[/* text */ 't', `.
  As many digits will be output as required.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has no override chronology or zone.
 It uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `STRICT`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]],
		[/* field */ 'ISO_OFFSET_DATE', [
			[/* field description */
				[/* text */ 't', `The ISO date formatter that formats or parses a date with an
 offset, such as '2011-12-03+01:00'.
 `],
				[/* block */ 'b', `
 This returns an immutable formatter capable of formatting and parsing
 the ISO-8601 extended offset date format.
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* text */ 't', `ISO_LOCAL_DATE`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `java.time.ZoneOffset#getId()`, `offset ID`],
						[/* text */ 't', `. If the offset has seconds then
  they will be handled even though this is not part of the ISO-8601 standard.
  Parsing is case insensitive.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `STRICT`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]],
		[/* field */ 'ISO_OFFSET_DATE_TIME', [
			[/* field description */
				[/* text */ 't', `The ISO date-time formatter that formats or parses a date-time with an
 offset, such as '2011-12-03T10:15:30+01:00'.
 `],
				[/* block */ 'b', `
 This returns an immutable formatter capable of formatting and parsing
 the ISO-8601 extended offset date-time format.
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* text */ 't', `ISO_LOCAL_DATE_TIME`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `java.time.ZoneOffset#getId()`, `offset ID`],
						[/* text */ 't', `. If the offset has seconds then
  they will be handled even though this is not part of the ISO-8601 standard.
  The offset parsing is lenient, which allows the minutes and seconds to be optional.
  Parsing is case insensitive.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `STRICT`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]],
		[/* field */ 'ISO_OFFSET_TIME', [
			[/* field description */
				[/* text */ 't', `The ISO time formatter that formats or parses a time with an
 offset, such as '10:15+01:00' or '10:15:30+01:00'.
 `],
				[/* block */ 'b', `
 This returns an immutable formatter capable of formatting and parsing
 the ISO-8601 extended offset time format.
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* text */ 't', `ISO_LOCAL_TIME`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `java.time.ZoneOffset#getId()`, `offset ID`],
						[/* text */ 't', `. If the offset has seconds then
  they will be handled even though this is not part of the ISO-8601 standard.
  Parsing is case insensitive.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has no override chronology or zone.
 It uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `STRICT`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]],
		[/* field */ 'ISO_ORDINAL_DATE', [
			[/* field description */
				[/* text */ 't', `The ISO date formatter that formats or parses the ordinal date
 without an offset, such as '2012-337'.
 `],
				[/* block */ 'b', `
 This returns an immutable formatter capable of formatting and parsing
 the ISO-8601 extended ordinal date format.
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Four digits or more for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#YEAR`, `year`],
						[/* text */ 't', `.
 Years in the range 0000 to 9999 will be pre-padded by zero to ensure four digits.
 Years outside that range will have a prefixed positive or negative symbol.
 `]
					]],
					[/* block */ 'b', `A dash
 `],
					[/* block */ 'b', [
						[/* text */ 't', `Three digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#DAY_OF_YEAR`, `day-of-year`],
						[/* text */ 't', `.
  This is pre-padded by zero to ensure three digits.
 `]
					]],
					[/* block */ 'b', `If the offset is not available to format or parse then the format is complete.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `java.time.ZoneOffset#getId()`, `offset ID`],
						[/* text */ 't', `. If the offset has seconds then
  they will be handled even though this is not part of the ISO-8601 standard.
  Parsing is case insensitive.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 As this formatter has an optional element, it may be necessary to parse using
 `],
					[/* reference */ 'r', `#parseBest(java.lang.CharSequence,java.time.temporal.TemporalQuery...)`, `parseBest(java.lang.CharSequence, java.time.temporal.TemporalQuery<?>...)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `STRICT`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]],
		[/* field */ 'ISO_TIME', [
			[/* field description */
				[/* text */ 't', `The ISO time formatter that formats or parses a time, with the
 offset if available, such as '10:15', '10:15:30' or '10:15:30+01:00'.
 `],
				[/* block */ 'b', `
 This returns an immutable formatter capable of formatting and parsing
 the ISO-8601 extended offset time format.
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* text */ 't', `ISO_LOCAL_TIME`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', `If the offset is not available then the format is complete.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `java.time.ZoneOffset#getId()`, `offset ID`],
						[/* text */ 't', `. If the offset has seconds then
  they will be handled even though this is not part of the ISO-8601 standard.
  Parsing is case insensitive.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 As this formatter has an optional element, it may be necessary to parse using
 `],
					[/* reference */ 'r', `#parseBest(java.lang.CharSequence,java.time.temporal.TemporalQuery...)`, `parseBest(java.lang.CharSequence, java.time.temporal.TemporalQuery<?>...)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has no override chronology or zone.
 It uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `STRICT`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]],
		[/* field */ 'ISO_WEEK_DATE', [
			[/* field description */
				[/* text */ 't', `The ISO date formatter that formats or parses the week-based date
 without an offset, such as '2012-W48-6'.
 `],
				[/* block */ 'b', `
 This returns an immutable formatter capable of formatting and parsing
 the ISO-8601 extended week-based date format.
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Four digits or more for the `],
						[/* reference */ 'r', `java.time.temporal.IsoFields#WEEK_BASED_YEAR`, `week-based-year`],
						[/* text */ 't', `.
 Years in the range 0000 to 9999 will be pre-padded by zero to ensure four digits.
 Years outside that range will have a prefixed positive or negative symbol.
 `]
					]],
					[/* block */ 'b', `A dash
 `],
					[/* block */ 'b', `The letter 'W'. Parsing is case insensitive.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `Two digits for the `],
						[/* reference */ 'r', `java.time.temporal.IsoFields#WEEK_OF_WEEK_BASED_YEAR`, `week-of-week-based-year`],
						[/* text */ 't', `.
  This is pre-padded by zero to ensure three digits.
 `]
					]],
					[/* block */ 'b', `A dash
 `],
					[/* block */ 'b', [
						[/* text */ 't', `One digit for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#DAY_OF_WEEK`, `day-of-week`],
						[/* text */ 't', `.
  The value run from Monday (1) to Sunday (7).
 `]
					]],
					[/* block */ 'b', `If the offset is not available to format or parse then the format is complete.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `java.time.ZoneOffset#getId()`, `offset ID`],
						[/* text */ 't', `. If the offset has seconds then
  they will be handled even though this is not part of the ISO-8601 standard.
  Parsing is case insensitive.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 As this formatter has an optional element, it may be necessary to parse using
 `],
					[/* reference */ 'r', `#parseBest(java.lang.CharSequence,java.time.temporal.TemporalQuery...)`, `parseBest(java.lang.CharSequence, java.time.temporal.TemporalQuery<?>...)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `STRICT`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]],
		[/* field */ 'ISO_ZONED_DATE_TIME', [
			[/* field description */
				[/* text */ 't', `The ISO-like date-time formatter that formats or parses a date-time with
 offset and zone, such as '2011-12-03T10:15:30+01:00[Europe/Paris]'.
 `],
				[/* block */ 'b', `
 This returns an immutable formatter capable of formatting and parsing
 a format that extends the ISO-8601 extended offset date-time format
 to add the time-zone.
 The section in square brackets is not part of the ISO-8601 standard.
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* text */ 't', `ISO_OFFSET_DATE_TIME`],
						[/* text */ 't', `
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the zone ID is not available or is a `],
						[/* inline code block */ 'i', `ZoneOffset`],
						[/* text */ 't', ` then the format is complete.
 `]
					]],
					[/* block */ 'b', `An open square bracket '['.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `java.time.ZoneId#getId()`, `zone ID`],
						[/* text */ 't', `. This is not part of the ISO-8601 standard.
  Parsing is case sensitive.
 `]
					]],
					[/* block */ 'b', `A close square bracket ']'.
 `]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `STRICT`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]],
		[/* field */ 'RFC_1123_DATE_TIME', [
			[/* field description */
				[/* text */ 't', `The RFC-1123 date-time formatter, such as 'Tue, 3 Jun 2008 11:05:30 GMT'.
 `],
				[/* block */ 'b', `
 This returns an immutable formatter capable of formatting and parsing
 most of the RFC-1123 format.
 RFC-1123 updates RFC-822 changing the year from two digits to four.
 This implementation requires a four digit year.
 This implementation also does not handle North American or military zone
 names, only 'GMT' and offset amounts.
 `],
				[/* block */ 'b', `
 The format consists of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If the day-of-week is not available to format or parse then jump to day-of-month.
 `],
					[/* block */ 'b', [
						[/* text */ 't', `Three letter `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#DAY_OF_WEEK`, `day-of-week`],
						[/* text */ 't', ` in English.
 `]
					]],
					[/* block */ 'b', `A comma
 `],
					[/* block */ 'b', `A space
 `],
					[/* block */ 'b', [
						[/* text */ 't', `One or two digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#DAY_OF_MONTH`, `day-of-month`],
						[/* text */ 't', `.
 `]
					]],
					[/* block */ 'b', `A space
 `],
					[/* block */ 'b', [
						[/* text */ 't', `Three letter `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#MONTH_OF_YEAR`, `month-of-year`],
						[/* text */ 't', ` in English.
 `]
					]],
					[/* block */ 'b', `A space
 `],
					[/* block */ 'b', [
						[/* text */ 't', `Four digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#YEAR`, `year`],
						[/* text */ 't', `.
  Only years in the range 0000 to 9999 are supported.
 `]
					]],
					[/* block */ 'b', `A space
 `],
					[/* block */ 'b', [
						[/* text */ 't', `Two digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#HOUR_OF_DAY`, `hour-of-day`],
						[/* text */ 't', `.
  This is pre-padded by zero to ensure two digits.
 `]
					]],
					[/* block */ 'b', `A colon
 `],
					[/* block */ 'b', [
						[/* text */ 't', `Two digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#MINUTE_OF_HOUR`, `minute-of-hour`],
						[/* text */ 't', `.
  This is pre-padded by zero to ensure two digits.
 `]
					]],
					[/* block */ 'b', `If the second-of-minute is not available then jump to the next space.
 `],
					[/* block */ 'b', `A colon
 `],
					[/* block */ 'b', [
						[/* text */ 't', `Two digits for the `],
						[/* reference */ 'r', `java.time.temporal.ChronoField#SECOND_OF_MINUTE`, `second-of-minute`],
						[/* text */ 't', `.
  This is pre-padded by zero to ensure two digits.
 `]
					]],
					[/* block */ 'b', `A space
 `],
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* reference */ 'r', `java.time.ZoneOffset#getId()`, `offset ID`],
						[/* text */ 't', ` without colons or seconds.
  An offset of zero uses "GMT". North American zone names and military zone names are not handled.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 Parsing is case insensitive.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `SMART`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'parse(java.lang.CharSequence,java.time.temporal.TemporalQuery)', [
			[/* method description */
				[/* text */ 't', `Fully parses the text producing an object of the specified type.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Most applications should use this method for parsing.
 It parses the entire text to produce the required date-time.
 The query is typically a method reference to a `],
					[/* inline code block */ 'i', `from(TemporalAccessor)`],
					[/* text */ 't', ` method.
 For example:
 `]
				]],
				[/* code block */ 'c', `  LocalDateTime dt = parser.parse(str, LocalDateTime::from);
 `],
				[/* text */ 't', `
 If the parse completes without reading the entire length of the text,
 or a problem occurs during parsing or merging, then an exception is thrown.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse, not null`]
				]],
				[/* parameter */ 'query', [/* parameter description */
					[/* text */ 't', `the query defining the type to parse to, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.format.DateTimeParseException', [/* throw description */
					[/* text */ 't', `if unable to parse the requested result`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed date-time, not null`]
			]
		]],
		[/* method */ 'format(java.time.temporal.TemporalAccessor)', [
			[/* method description */
				[/* text */ 't', `Formats a date-time object using this formatter.
 `],
				[/* block */ 'b', `
 This formats the date-time to a String using the rules of the formatter.`]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to format, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if an error occurs during formatting`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the formatted string, not null`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a description of the underlying formatters.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a description of this formatter, not null`]
			]
		]],
		[/* method */ 'toFormat()', [
			[/* method description */
				[/* text */ 't', `Returns this formatter as a `],
				[/* inline code block */ 'i', `java.text.Format`],
				[/* text */ 't', ` instance.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned `],
					[/* reference */ 'r', `java.text.Format`, `Format`],
					[/* text */ 't', ` instance will format any `],
					[/* reference */ 'r', `java.time.temporal.TemporalAccessor`, `TemporalAccessor`],
					[/* text */ 't', `
 and parses to a resolved `],
					[/* reference */ 'r', `java.time.temporal.TemporalAccessor`, `TemporalAccessor`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Exceptions will follow the definitions of `],
					[/* inline code block */ 'i', `Format`],
					[/* text */ 't', `, see those methods
 for details about `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` during formatting and
 `],
					[/* inline code block */ 'i', `ParseException`],
					[/* text */ 't', ` or null during parsing.
 The format does not support attributing of the returned format string.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this formatter as a classic format instance, not null`]
			]
		]],
		[/* method */ 'toFormat(java.time.temporal.TemporalQuery)', [
			[/* method description */
				[/* text */ 't', `Returns this formatter as a `],
				[/* inline code block */ 'i', `java.text.Format`],
				[/* text */ 't', ` instance that will
 parse using the specified query.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned `],
					[/* reference */ 'r', `java.text.Format`, `Format`],
					[/* text */ 't', ` instance will format any `],
					[/* reference */ 'r', `java.time.temporal.TemporalAccessor`, `TemporalAccessor`],
					[/* text */ 't', `
 and parses to the type specified.
 The type must be one that is supported by `],
					[/* reference */ 'r', `#parse(java.lang.CharSequence)`, `parse(java.lang.CharSequence)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Exceptions will follow the definitions of `],
					[/* inline code block */ 'i', `Format`],
					[/* text */ 't', `, see those methods
 for details about `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` during formatting and
 `],
					[/* inline code block */ 'i', `ParseException`],
					[/* text */ 't', ` or null during parsing.
 The format does not support attributing of the returned format string.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'parseQuery', [/* parameter description */
					[/* text */ 't', `the query defining the type to parse to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this formatter as a classic format instance, not null`]
			]
		]],
		[/* method */ 'getChronology()', [
			[/* method description */
				[/* text */ 't', `Gets the overriding chronology to be used during formatting.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns the override chronology, used to convert dates.
 By default, a formatter has no override chronology, returning null.
 See `],
					[/* reference */ 'r', `#withChronology(java.time.chrono.Chronology)`, `withChronology(Chronology)`],
					[/* text */ 't', ` for more details on overriding.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the override chronology of this formatter, null if no override`]
			]
		]],
		[/* method */ 'localizedBy(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this formatter with localized values of the locale,
 calendar, region, decimal style and/or timezone, that supersede values in
 this formatter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is used to lookup any part of the formatter needing specific
 localization, such as the text or localized pattern. If the locale contains the
 "ca" (calendar), "nu" (numbering system), "rg" (region override), and/or
 "tz" (timezone)
 `],
					[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode extensions`],
					[/* text */ 't', `,
 the chronology, numbering system and/or the zone are overridden. If both "ca"
 and "rg" are specified, the chronology from the "ca" extension supersedes the
 implicit one from the "rg" extension. Same is true for the "nu" extension.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Unlike the `],
					[/* reference */ 'r', `#withLocale(java.util.Locale)`, `withLocale`],
					[/* text */ 't', ` method, the call to this method may
 produce a different formatter depending on the order of method chaining with
 other withXXXX() methods.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a formatter based on this formatter with localized values of
      the calendar, decimal style and/or timezone, that supersede values in this
      formatter.`]
			]
		]],
		[/* method */ 'withChronology(java.time.chrono.Chronology)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this formatter with a new override chronology.
 `],
				[/* block */ 'b', `
 This returns a formatter with similar state to this formatter but
 with the override chronology set.
 By default, a formatter has no override chronology, returning null.
 `],
				[/* block */ 'b', `
 If an override is added, then any date that is formatted or parsed will be affected.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When formatting, if the temporal object contains a date, then it will
 be converted to a date in the override chronology.
 Whether the temporal contains a date is determined by querying the
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#EPOCH_DAY`, `EPOCH_DAY`],
					[/* text */ 't', ` field.
 Any time or zone will be retained unaltered unless overridden.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the temporal object does not contain a date, but does contain one
 or more `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` date fields, then a `],
					[/* inline code block */ 'i', `DateTimeException`],
					[/* text */ 't', `
 is thrown. In all other cases, the override chronology is added to the temporal,
 replacing any previous chronology, but without changing the date/time.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing, there are two distinct cases to consider.
 If a chronology has been parsed directly from the text, perhaps because
 `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatterBuilder#appendChronologyId()`, `DateTimeFormatterBuilder.appendChronologyId()`],
					[/* text */ 't', ` was used, then
 this override chronology has no effect.
 If no zone has been parsed, then this override chronology will be used
 to interpret the `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` values into a date according to the
 date resolving rules of the chronology.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'chrono', [/* parameter description */
					[/* text */ 't', `the new chronology, null if no override`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a formatter based on this formatter with the requested override chronology, not null`]
			]
		]],
		[/* method */ 'withDecimalStyle(java.time.format.DecimalStyle)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this formatter with a new DecimalStyle.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'decimalStyle', [/* parameter description */
					[/* text */ 't', `the new DecimalStyle, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a formatter based on this formatter with the requested DecimalStyle, not null`]
			]
		]],
		[/* method */ 'withLocale(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this formatter with a new locale.
 `],
				[/* block */ 'b', `
 This is used to lookup any part of the formatter needing specific
 localization, such as the text or localized pattern.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The locale is stored as passed in, without further processing.
 If the locale has `],
					[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode extensions`],
					[/* text */ 't', `, they may be used later in text
 processing. To set the chronology, time-zone and decimal style from
 unicode extensions, see `],
					[/* reference */ 'r', `#localizedBy(java.util.Locale)`, `localizedBy()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the new locale, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a formatter based on this formatter with the requested locale, not null`]
			]
		]],
		[/* method */ 'withResolverFields(java.time.temporal.TemporalField...)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this formatter with a new set of resolver fields.
 `],
				[/* block */ 'b', `
 This returns a formatter with similar state to this formatter but with
 the resolver fields set. By default, a formatter has no resolver fields.
 `],
				[/* block */ 'b', `
 Changing the resolver fields only has an effect during parsing.
 Parsing a text string occurs in two phases.
 Phase 1 is a basic text parse according to the fields added to the builder.
 Phase 2 resolves the parsed field-value pairs into date and/or time objects.
 The resolver fields are used to filter the field-value pairs between phase 1 and 2.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This can be used to select between two or more ways that a date or time might
 be resolved. For example, if the formatter consists of year, month, day-of-month
 and day-of-year, then there are two ways to resolve a date.
 Calling this method with the arguments `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#YEAR`, `YEAR`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#DAY_OF_YEAR`, `DAY_OF_YEAR`],
					[/* text */ 't', ` will ensure that the date is
 resolved using the year and day-of-year, effectively meaning that the month
 and day-of-month are ignored during the resolving phase.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In a similar manner, this method can be used to ignore secondary fields that
 would otherwise be cross-checked. For example, if the formatter consists of year,
 month, day-of-month and day-of-week, then there is only one way to resolve a
 date, but the parsed value for day-of-week will be cross-checked against the
 resolved date. Calling this method with the arguments `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#YEAR`, `YEAR`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#MONTH_OF_YEAR`, `MONTH_OF_YEAR`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#DAY_OF_MONTH`, `DAY_OF_MONTH`],
					[/* text */ 't', ` will ensure that the date is
 resolved correctly, but without any cross-check for the day-of-week.
 `]
				]],
				[/* block */ 'b', `
 In implementation terms, this method behaves as follows. The result of the
 parsing phase can be considered to be a map of field to value. The behavior
 of this method is to cause that map to be filtered between phase 1 and 2,
 removing all fields other than those specified as arguments to this method.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'resolverFields', [/* parameter description */
					[/* text */ 't', `the new set of resolver fields, null if no fields`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a formatter based on this formatter with the requested resolver style, not null`]
			]
		]],
		[/* method */ 'withResolverFields(java.util.Set)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this formatter with a new set of resolver fields.
 `],
				[/* block */ 'b', `
 This returns a formatter with similar state to this formatter but with
 the resolver fields set. By default, a formatter has no resolver fields.
 `],
				[/* block */ 'b', `
 Changing the resolver fields only has an effect during parsing.
 Parsing a text string occurs in two phases.
 Phase 1 is a basic text parse according to the fields added to the builder.
 Phase 2 resolves the parsed field-value pairs into date and/or time objects.
 The resolver fields are used to filter the field-value pairs between phase 1 and 2.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This can be used to select between two or more ways that a date or time might
 be resolved. For example, if the formatter consists of year, month, day-of-month
 and day-of-year, then there are two ways to resolve a date.
 Calling this method with the arguments `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#YEAR`, `YEAR`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#DAY_OF_YEAR`, `DAY_OF_YEAR`],
					[/* text */ 't', ` will ensure that the date is
 resolved using the year and day-of-year, effectively meaning that the month
 and day-of-month are ignored during the resolving phase.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In a similar manner, this method can be used to ignore secondary fields that
 would otherwise be cross-checked. For example, if the formatter consists of year,
 month, day-of-month and day-of-week, then there is only one way to resolve a
 date, but the parsed value for day-of-week will be cross-checked against the
 resolved date. Calling this method with the arguments `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#YEAR`, `YEAR`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#MONTH_OF_YEAR`, `MONTH_OF_YEAR`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#DAY_OF_MONTH`, `DAY_OF_MONTH`],
					[/* text */ 't', ` will ensure that the date is
 resolved correctly, but without any cross-check for the day-of-week.
 `]
				]],
				[/* block */ 'b', `
 In implementation terms, this method behaves as follows. The result of the
 parsing phase can be considered to be a map of field to value. The behavior
 of this method is to cause that map to be filtered between phase 1 and 2,
 removing all fields other than those specified as arguments to this method.
 `],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'resolverFields', [/* parameter description */
					[/* text */ 't', `the new set of resolver fields, null if no fields`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a formatter based on this formatter with the requested resolver style, not null`]
			]
		]],
		[/* method */ 'withResolverStyle(java.time.format.ResolverStyle)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this formatter with a new resolver style.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a formatter with similar state to this formatter but
 with the resolver style set. By default, a formatter has the
 `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `SMART`],
					[/* text */ 't', ` resolver style.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Changing the resolver style only has an effect during parsing.
 Parsing a text string occurs in two phases.
 Phase 1 is a basic text parse according to the fields added to the builder.
 Phase 2 resolves the parsed field-value pairs into date and/or time objects.
 The resolver style is used to control how phase 2, resolving, happens.
 See `],
					[/* inline code block */ 'i', `ResolverStyle`],
					[/* text */ 't', ` for more information on the options available.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'resolverStyle', [/* parameter description */
					[/* text */ 't', `the new resolver style, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a formatter based on this formatter with the requested resolver style, not null`]
			]
		]],
		[/* method */ 'withZone(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Returns a copy of this formatter with a new override zone.
 `],
				[/* block */ 'b', `
 This returns a formatter with similar state to this formatter but
 with the override zone set.
 By default, a formatter has no override zone, returning null.
 `],
				[/* block */ 'b', `
 If an override is added, then any instant that is formatted or parsed will be affected.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When formatting, if the temporal object contains an instant, then it will
 be converted to a zoned date-time using the override zone.
 Whether the temporal is an instant is determined by querying the
 `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#INSTANT_SECONDS`, `INSTANT_SECONDS`],
					[/* text */ 't', ` field.
 If the input has a chronology then it will be retained unless overridden.
 If the input does not have a chronology, such as `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', `, then
 the ISO chronology will be used.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the temporal object does not contain an instant, but does contain
 an offset then an additional check is made. If the normalized override
 zone is an offset that differs from the offset of the temporal, then
 a `],
					[/* inline code block */ 'i', `DateTimeException`],
					[/* text */ 't', ` is thrown. In all other cases, the override
 zone is added to the temporal, replacing any previous zone, but without
 changing the date/time.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing, there are two distinct cases to consider.
 If a zone has been parsed directly from the text, perhaps because
 `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatterBuilder#appendZoneId()`, `DateTimeFormatterBuilder.appendZoneId()`],
					[/* text */ 't', ` was used, then
 this override zone has no effect.
 If no zone has been parsed, then this override zone will be included in
 the result of the parse where it can be used to build instants and date-times.
 `]
				]],
				[/* block */ 'b', `
 This instance is immutable and unaffected by this method call.`]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the new override zone, null if no override`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a formatter based on this formatter with the requested override zone, not null`]
			]
		]],
		[/* method */ 'getDecimalStyle()', [
			[/* method description */
				[/* text */ 't', `Gets the DecimalStyle to be used during formatting.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the locale of this formatter, not null`]
			]
		]],
		[/* method */ 'getResolverStyle()', [
			[/* method description */
				[/* text */ 't', `Gets the resolver style to use during parsing.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns the resolver style, used during the second phase of parsing
 when fields are resolved into dates and times.
 By default, a formatter has the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `SMART`],
					[/* text */ 't', ` resolver style.
 See `],
					[/* reference */ 'r', `#withResolverStyle(java.time.format.ResolverStyle)`, `withResolverStyle(ResolverStyle)`],
					[/* text */ 't', ` for more details.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the resolver style of this formatter, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Fully parses the text producing a temporal object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This parses the entire text producing a temporal object.
 It is typically more useful to use `],
					[/* reference */ 'r', `#parse(java.lang.CharSequence,java.time.temporal.TemporalQuery)`, `parse(CharSequence, TemporalQuery)`],
					[/* text */ 't', `.
 The result of this method is `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` which has been resolved,
 applying basic validation checks to help ensure a valid date-time.
 `]
				]],
				[/* block */ 'b', `
 If the parse completes without reading the entire length of the text,
 or a problem occurs during parsing or merging, then an exception is thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.format.DateTimeParseException', [/* throw description */
					[/* text */ 't', `if unable to parse the requested result`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed temporal object, not null`]
			]
		]],
		[/* method */ 'parse(java.lang.CharSequence,java.text.ParsePosition)', [
			[/* method description */
				[/* text */ 't', `Parses the text using this formatter, providing control over the text position.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This parses the text without requiring the parse to start from the beginning
 of the string or finish at the end.
 The result of this method is `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` which has been resolved,
 applying basic validation checks to help ensure a valid date-time.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The text will be parsed from the specified start `],
					[/* inline code block */ 'i', `ParsePosition`],
					[/* text */ 't', `.
 The entire length of the text does not have to be parsed, the `],
					[/* inline code block */ 'i', `ParsePosition`],
					[/* text */ 't', `
 will be updated with the index at the end of parsing.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The operation of this method is slightly different to similar methods using
 `],
					[/* inline code block */ 'i', `ParsePosition`],
					[/* text */ 't', ` on `],
					[/* inline code block */ 'i', `java.text.Format`],
					[/* text */ 't', `. That class will return
 errors using the error index on the `],
					[/* inline code block */ 'i', `ParsePosition`],
					[/* text */ 't', `. By contrast, this
 method will throw a `],
					[/* reference */ 'r', `java.time.format.DateTimeParseException`, `DateTimeParseException`],
					[/* text */ 't', ` if an error occurs, with
 the exception containing the error index.
 This change in behavior is necessary due to the increased complexity of
 parsing and resolving dates/times in this API.
 `]
				]],
				[/* block */ 'b', `
 If the formatter parses the same field more than once with different values,
 the result will be an error.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse, not null`]
				]],
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `the position to parse from, updated with length parsed
  and the index of any error, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.format.DateTimeParseException', [/* throw description */
					[/* text */ 't', `if unable to parse the requested result`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the position is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed temporal object, not null`]
			]
		]],
		[/* method */ 'parseBest(java.lang.CharSequence,java.time.temporal.TemporalQuery...)', [
			[/* method description */
				[/* text */ 't', `Fully parses the text producing an object of one of the specified types.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This parse method is convenient for use when the parser can handle optional elements.
 For example, a pattern of 'uuuu-MM-dd HH.mm[ VV]' can be fully parsed to a `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `,
 or partially parsed to a `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', `.
 The queries must be specified in order, starting from the best matching full-parse option
 and ending with the worst matching minimal parse option.
 The query is typically a method reference to a `],
					[/* inline code block */ 'i', `from(TemporalAccessor)`],
					[/* text */ 't', ` method.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The result is associated with the first type that successfully parses.
 Normally, applications will use `],
					[/* inline code block */ 'i', `instanceof`],
					[/* text */ 't', ` to check the result.
 For example:
 `]
				]],
				[/* code block */ 'c', `  TemporalAccessor dt = parser.parseBest(str, ZonedDateTime::from, LocalDateTime::from);
  if (dt instanceof ZonedDateTime) {
   ...
  } else {
   ...
  }
 `],
				[/* text */ 't', `
 If the parse completes without reading the entire length of the text,
 or a problem occurs during parsing or merging, then an exception is thrown.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse, not null`]
				]],
				[/* parameter */ 'queries', [/* parameter description */
					[/* text */ 't', `the queries defining the types to attempt to parse to,
  must implement `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', `, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if less than 2 types are specified`]
				]],
				[/* throw */ 'java.time.format.DateTimeParseException', [/* throw description */
					[/* text */ 't', `if unable to parse the requested result`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed date-time, not null`]
			]
		]],
		[/* method */ 'parseUnresolved(java.lang.CharSequence,java.text.ParsePosition)', [
			[/* method description */
				[/* text */ 't', `Parses the text using this formatter, without resolving the result, intended
 for advanced use cases.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Parsing is implemented as a two-phase operation.
 First, the text is parsed using the layout defined by the formatter, producing
 a `],
					[/* inline code block */ 'i', `Map`],
					[/* text */ 't', ` of field to value, a `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', ` and a `],
					[/* inline code block */ 'i', `Chronology`],
					[/* text */ 't', `.
 Second, the parsed data is `],
					[/* text */ 't', `resolved`],
					[/* text */ 't', `, by validating, combining and
 simplifying the various fields into more useful ones.
 This method performs the parsing stage but not the resolving stage.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The result of this method is `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` which represents the
 data as seen in the input. Values are not validated, thus parsing a date string
 of '2012-00-65' would result in a temporal with three fields - year of '2012',
 month of '0' and day-of-month of '65'.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The text will be parsed from the specified start `],
					[/* inline code block */ 'i', `ParsePosition`],
					[/* text */ 't', `.
 The entire length of the text does not have to be parsed, the `],
					[/* inline code block */ 'i', `ParsePosition`],
					[/* text */ 't', `
 will be updated with the index at the end of parsing.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Errors are returned using the error index field of the `],
					[/* inline code block */ 'i', `ParsePosition`],
					[/* text */ 't', `
 instead of `],
					[/* inline code block */ 'i', `DateTimeParseException`],
					[/* text */ 't', `.
 The returned error index will be set to an index indicative of the error.
 Callers must check for errors before using the result.
 `]
				]],
				[/* block */ 'b', `
 If the formatter parses the same field more than once with different values,
 the result will be an error.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method is intended for advanced use cases that need access to the
 internal state during parsing. Typical application code should use
 `],
					[/* reference */ 'r', `#parse(java.lang.CharSequence,java.time.temporal.TemporalQuery)`, `parse(CharSequence, TemporalQuery)`],
					[/* text */ 't', ` or the parse method on the target type.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text to parse, not null`]
				]],
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `the position to parse from, updated with length parsed
  and the index of any error, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if some problem occurs during parsing`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the position is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the parsed text, null if the parse results in an error`]
			]
		]],
		[/* method */ 'getZone()', [
			[/* method description */
				[/* text */ 't', `Gets the overriding zone to be used during formatting.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns the override zone, used to convert instants.
 By default, a formatter has no override zone, returning null.
 See `],
					[/* reference */ 'r', `#withZone(java.time.ZoneId)`, `withZone(ZoneId)`],
					[/* text */ 't', ` for more details on overriding.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the override zone of this formatter, null if no override`]
			]
		]],
		[/* method */ 'getLocale()', [
			[/* method description */
				[/* text */ 't', `Gets the locale to be used during formatting.
 `],
				[/* block */ 'b', `
 This is used to lookup any part of the formatter needing specific
 localization, such as the text or localized pattern.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the locale of this formatter, not null`]
			]
		]],
		[/* method */ 'getResolverFields()', [
			[/* method description */
				[/* text */ 't', `Gets the resolver fields to use during parsing.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns the resolver fields, used during the second phase of parsing
 when fields are resolved into dates and times.
 By default, a formatter has no resolver fields, and thus returns null.
 See `],
					[/* reference */ 'r', `#withResolverFields(java.util.Set)`, `withResolverFields(Set)`],
					[/* text */ 't', ` for more details.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the immutable set of resolver fields of this formatter, null if no fields`]
			]
		]],
		[/* method */ 'parsedLeapSecond()', [
			[/* method description */
				[/* text */ 't', `A query that provides access to whether a leap-second was parsed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a singleton `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`, `query`],
					[/* text */ 't', ` that provides
 access to additional information from the parse. The query always returns
 a non-null boolean, true if parsing saw a leap-second, false if not.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Instant parsing handles the special "leap second" time of '23:59:60'.
 Leap seconds occur at '23:59:60' in the UTC time-zone, but at other
 local times in different time-zones. To avoid this potential ambiguity,
 the handling of leap-seconds is limited to
 `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatterBuilder#appendInstant()`, `DateTimeFormatterBuilder.appendInstant()`],
					[/* text */ 't', `, as that method
 always parses the instant with the UTC zone offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the time '23:59:60' is received, then a simple conversion is applied,
 replacing the second-of-minute of 60 with 59. This query can be used
 on the parse result to determine if the leap-second adjustment was made.
 The query will return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if it did adjust to remove the
 leap-second, and `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` if not. Note that applying a leap-second
 smoothing mechanism, such as UTC-SLS, is the responsibility of the
 application, as follows:
 `]
				]],
				[/* code block */ 'c', `  TemporalAccessor parsed = formatter.parse(str);
  Instant instant = parsed.query(Instant::from);
  if (parsed.query(DateTimeFormatter.parsedLeapSecond())) {
    // validate leap-second is correct and apply correct smoothing
  }
 `],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a query that provides access to whether a leap-second was parsed`]
			]
		]],
		[/* method */ 'parsedExcessDays()', [
			[/* method description */
				[/* text */ 't', `A query that provides access to the excess days that were parsed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This returns a singleton `],
					[/* reference */ 'r', `java.time.temporal.TemporalQuery`, `query`],
					[/* text */ 't', ` that provides
 access to additional information from the parse. The query always returns
 a non-null period, with a zero period returned instead of null.
 `]
				]],
				[/* block */ 'b', `
 There are two situations where this query may return a non-zero period.
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the `],
						[/* inline code block */ 'i', `ResolverStyle`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `LENIENT`],
						[/* text */ 't', ` and a time is parsed
  without a date, then the complete result of the parse consists of a
  `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` and an excess `],
						[/* inline code block */ 'i', `Period`],
						[/* text */ 't', ` in days.

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the `],
						[/* inline code block */ 'i', `ResolverStyle`],
						[/* text */ 't', ` is `],
						[/* inline code block */ 'i', `SMART`],
						[/* text */ 't', ` and a time is parsed
  without a date where the time is 24:00:00, then the complete result of
  the parse consists of a `],
						[/* inline code block */ 'i', `LocalTime`],
						[/* text */ 't', ` of 00:00:00 and an excess
  `],
						[/* inline code block */ 'i', `Period`],
						[/* text */ 't', ` of one day.
 `]
					]]
				]],
				[/* text */ 't', `
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 In both cases, if a complete `],
					[/* inline code block */ 'i', `ChronoLocalDateTime`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `Instant`],
					[/* text */ 't', `
 is parsed, then the excess days are added to the date part.
 As a result, this query will return a zero period.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `SMART`],
					[/* text */ 't', ` behaviour handles the common "end of day" 24:00 value.
 Processing in `],
					[/* inline code block */ 'i', `LENIENT`],
					[/* text */ 't', ` mode also produces the same result:
 `]
				]],
				[/* code block */ 'c', `  Text to parse        Parsed object                         Excess days
  "2012-12-03T00:00"   LocalDateTime.of(2012, 12, 3, 0, 0)   ZERO
  "2012-12-03T24:00"   LocalDateTime.of(2012, 12, 4, 0, 0)   ZERO
  "00:00"              LocalTime.of(0, 0)                    ZERO
  "24:00"              LocalTime.of(0, 0)                    Period.ofDays(1)
 `],
				[/* text */ 't', `
 The query can be used as follows:
 `],
				[/* code block */ 'c', `  TemporalAccessor parsed = formatter.parse(str);
  LocalTime time = parsed.query(LocalTime::from);
  Period extraDays = parsed.query(DateTimeFormatter.parsedExcessDays());
 `],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a query that provides access to the excess days that were parsed`]
			]
		]],
		[/* method */ 'ofLocalizedDate(java.time.format.FormatStyle)', [
			[/* method description */
				[/* text */ 't', `Returns a locale specific date format for the ISO chronology.
 `],
				[/* block */ 'b', `
 This returns a formatter that will format or parse a date.
 The exact format pattern used varies by locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The locale is determined from the formatter. The formatter returned directly by
 this method will use the `],
					[/* reference */ 'r', `java.util.Locale#getDefault(java.util.Locale.Category)`, `default FORMAT locale`],
					[/* text */ 't', `.
 The locale can be controlled using `],
					[/* reference */ 'r', `#withLocale(java.util.Locale)`, `withLocale(Locale)`],
					[/* text */ 't', `
 on the result of this method.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that the localized pattern is looked up lazily.
 This `],
					[/* inline code block */ 'i', `DateTimeFormatter`],
					[/* text */ 't', ` holds the style required and the locale,
 looking up the pattern required on demand.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `SMART`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dateStyle', [/* parameter description */
					[/* text */ 't', `the formatter style to obtain, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the date formatter, not null`]
			]
		]],
		[/* method */ 'ofLocalizedDateTime(java.time.format.FormatStyle)', [
			[/* method description */
				[/* text */ 't', `Returns a locale specific date-time formatter for the ISO chronology.
 `],
				[/* block */ 'b', `
 This returns a formatter that will format or parse a date-time.
 The exact format pattern used varies by locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The locale is determined from the formatter. The formatter returned directly by
 this method will use the `],
					[/* reference */ 'r', `java.util.Locale#getDefault(java.util.Locale.Category)`, `default FORMAT locale`],
					[/* text */ 't', `.
 The locale can be controlled using `],
					[/* reference */ 'r', `#withLocale(java.util.Locale)`, `withLocale(Locale)`],
					[/* text */ 't', `
 on the result of this method.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that the localized pattern is looked up lazily.
 This `],
					[/* inline code block */ 'i', `DateTimeFormatter`],
					[/* text */ 't', ` holds the style required and the locale,
 looking up the pattern required on demand.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `SMART`],
					[/* text */ 't', ` resolver style.
 The `],
					[/* inline code block */ 'i', `FULL`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `LONG`],
					[/* text */ 't', ` styles typically require a time-zone.
 When formatting using these styles, a `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', ` must be available,
 either by using `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `#withZone(java.time.ZoneId)`, `withZone(java.time.ZoneId)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dateTimeStyle', [/* parameter description */
					[/* text */ 't', `the formatter style to obtain, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the date-time formatter, not null`]
			]
		]],
		[/* method */ 'ofLocalizedDateTime(java.time.format.FormatStyle,java.time.format.FormatStyle)', [
			[/* method description */
				[/* text */ 't', `Returns a locale specific date and time format for the ISO chronology.
 `],
				[/* block */ 'b', `
 This returns a formatter that will format or parse a date-time.
 The exact format pattern used varies by locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The locale is determined from the formatter. The formatter returned directly by
 this method will use the `],
					[/* reference */ 'r', `java.util.Locale#getDefault()`, `default FORMAT locale`],
					[/* text */ 't', `.
 The locale can be controlled using `],
					[/* reference */ 'r', `#withLocale(java.util.Locale)`, `withLocale(Locale)`],
					[/* text */ 't', `
 on the result of this method.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that the localized pattern is looked up lazily.
 This `],
					[/* inline code block */ 'i', `DateTimeFormatter`],
					[/* text */ 't', ` holds the style required and the locale,
 looking up the pattern required on demand.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `SMART`],
					[/* text */ 't', ` resolver style.
 The `],
					[/* inline code block */ 'i', `FULL`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `LONG`],
					[/* text */ 't', ` styles typically require a time-zone.
 When formatting using these styles, a `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', ` must be available,
 either by using `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `#withZone(java.time.ZoneId)`, `withZone(java.time.ZoneId)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dateStyle', [/* parameter description */
					[/* text */ 't', `the date formatter style to obtain, not null`]
				]],
				[/* parameter */ 'timeStyle', [/* parameter description */
					[/* text */ 't', `the time formatter style to obtain, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the date, time or date-time formatter, not null`]
			]
		]],
		[/* method */ 'ofLocalizedTime(java.time.format.FormatStyle)', [
			[/* method description */
				[/* text */ 't', `Returns a locale specific time format for the ISO chronology.
 `],
				[/* block */ 'b', `
 This returns a formatter that will format or parse a time.
 The exact format pattern used varies by locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The locale is determined from the formatter. The formatter returned directly by
 this method will use the `],
					[/* reference */ 'r', `java.util.Locale#getDefault(java.util.Locale.Category)`, `default FORMAT locale`],
					[/* text */ 't', `.
 The locale can be controlled using `],
					[/* reference */ 'r', `#withLocale(java.util.Locale)`, `withLocale(Locale)`],
					[/* text */ 't', `
 on the result of this method.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that the localized pattern is looked up lazily.
 This `],
					[/* inline code block */ 'i', `DateTimeFormatter`],
					[/* text */ 't', ` holds the style required and the locale,
 looking up the pattern required on demand.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has a chronology of ISO set to ensure dates in
 other calendar systems are correctly converted.
 It has no override zone and uses the `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `SMART`],
					[/* text */ 't', ` resolver style.
 The `],
					[/* inline code block */ 'i', `FULL`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `LONG`],
					[/* text */ 't', ` styles typically require a time-zone.
 When formatting using these styles, a `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', ` must be available,
 either by using `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `#withZone(java.time.ZoneId)`, `withZone(java.time.ZoneId)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'timeStyle', [/* parameter description */
					[/* text */ 't', `the formatter style to obtain, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the time formatter, not null`]
			]
		]],
		[/* method */ 'ofPattern(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Creates a formatter using the specified pattern.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method will create a formatter based on a simple
 `],
					[/* text */ 't', `pattern of letters and symbols`],
					[/* text */ 't', `
 as described in the class documentation.
 For example, `],
					[/* inline code block */ 'i', `d MMM uuuu`],
					[/* text */ 't', ` will format 2011-12-03 as '3 Dec 2011'.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The formatter will use the `],
					[/* reference */ 'r', `java.util.Locale#getDefault(java.util.Locale.Category)`, `default FORMAT locale`],
					[/* text */ 't', `.
 This can be changed using `],
					[/* reference */ 'r', `#withLocale(java.util.Locale)`, `withLocale(Locale)`],
					[/* text */ 't', ` on the returned formatter.
 Alternatively use the `],
					[/* reference */ 'r', `#ofPattern(java.lang.String,java.util.Locale)`, `ofPattern(String, Locale)`],
					[/* text */ 't', ` variant of this method.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has no override chronology or zone.
 It uses `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `SMART`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern to use, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the pattern is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the formatter based on the pattern, not null`]
			]
		]],
		[/* method */ 'ofPattern(java.lang.String,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Creates a formatter using the specified pattern and locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method will create a formatter based on a simple
 `],
					[/* text */ 't', `pattern of letters and symbols`],
					[/* text */ 't', `
 as described in the class documentation.
 For example, `],
					[/* inline code block */ 'i', `d MMM uuuu`],
					[/* text */ 't', ` will format 2011-12-03 as '3 Dec 2011'.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The formatter will use the specified locale.
 This can be changed using `],
					[/* reference */ 'r', `#withLocale(java.util.Locale)`, `withLocale(Locale)`],
					[/* text */ 't', ` on the returned formatter.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The returned formatter has no override chronology or zone.
 It uses `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `SMART`],
					[/* text */ 't', ` resolver style.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern to use, not null`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale to use, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the pattern is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the formatter based on the pattern, not null`]
			]
		]],
		[/* method */ 'formatTo(java.time.temporal.TemporalAccessor,java.lang.Appendable)', [
			[/* method description */
				[/* text */ 't', `Formats a date-time object to an `],
				[/* inline code block */ 'i', `Appendable`],
				[/* text */ 't', ` using this formatter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This outputs the formatted date-time to the specified destination.
 `],
					[/* reference */ 'r', `java.lang.Appendable`, `Appendable`],
					[/* text */ 't', ` is a general purpose interface that is implemented by all
 key character output classes including `],
					[/* inline code block */ 'i', `StringBuffer`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `StringBuilder`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `PrintStream`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `Writer`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Although `],
					[/* inline code block */ 'i', `Appendable`],
					[/* text */ 't', ` methods throw an `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', `, this method does not.
 Instead, any `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', ` is wrapped in a runtime exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'temporal', [/* parameter description */
					[/* text */ 't', `the temporal object to format, not null`]
				]],
				[/* parameter */ 'appendable', [/* parameter description */
					[/* text */ 't', `the appendable to format to, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.time.DateTimeException', [/* throw description */
					[/* text */ 't', `if an error occurs during formatting`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
