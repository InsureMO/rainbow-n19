import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.format.DateTimeFormatterBuilder', [
	[/* class description */
		[/* text */ 't', `Builder to create date-time formatters.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This allows a `],
			[/* inline code block */ 'i', `DateTimeFormatter`],
			[/* text */ 't', ` to be created.
 All date-time formatters are created ultimately using this builder.
 `]
		]],
		[/* block */ 'b', `
 The basic elements of date-time can all be added:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', `Value - a numeric value`],
			[/* block */ 'b', `Fraction - a fractional value including the decimal place. Always use this when
 outputting fractions to ensure that the fraction is parsed correctly`],
			[/* block */ 'b', `Text - the textual equivalent for the value`],
			[/* block */ 'b', [
				[/* text */ 't', `OffsetId/Offset - the `],
				[/* reference */ 'r', `java.time.ZoneOffset`, `zone offset`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `ZoneId - the `],
				[/* reference */ 'r', `java.time.ZoneId`, `time-zone`],
				[/* text */ 't', ` id`]
			]],
			[/* block */ 'b', `ZoneText - the name of the time-zone`],
			[/* block */ 'b', [
				[/* text */ 't', `ChronologyId - the `],
				[/* reference */ 'r', `java.time.chrono.Chronology`, `chronology`],
				[/* text */ 't', ` id`]
			]],
			[/* block */ 'b', `ChronologyText - the name of the chronology`],
			[/* block */ 'b', `Literal - a text literal`],
			[/* block */ 'b', `Nested and Optional - formats can be nested or made optional`]
		]],
		[/* text */ 't', `
 In addition, any of the elements may be decorated by padding, either with spaces or any other character.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 Finally, a shorthand pattern, mostly compatible with `],
			[/* inline code block */ 'i', `java.text.SimpleDateFormat SimpleDateFormat`],
			[/* text */ 't', `
 can be used, see `],
			[/* reference */ 'r', `#appendPattern(java.lang.String)`, `appendPattern(String)`],
			[/* text */ 't', `.
 In practice, this simply parses the pattern and calls other methods on the builder.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new instance of the builder.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'toFormatter()', [
			[/* method description */
				[/* text */ 't', `Completes this builder by creating the `],
				[/* inline code block */ 'i', `DateTimeFormatter`],
				[/* text */ 't', `
 using the default locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will create a formatter with the `],
					[/* reference */ 'r', `java.util.Locale#getDefault(java.util.Locale.Category)`, `default FORMAT locale`],
					[/* text */ 't', `.
 Numbers will be printed and parsed using the standard DecimalStyle.
 The resolver style will be `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `SMART`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Calling this method will end any open optional sections by repeatedly
 calling `],
					[/* reference */ 'r', `#optionalEnd()`, `optionalEnd()`],
					[/* text */ 't', ` before creating the formatter.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This builder can still be used after creating the formatter if desired,
 although the state may have been changed by calls to `],
					[/* inline code block */ 'i', `optionalEnd`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the created formatter, not null`]
			]
		]],
		[/* method */ 'toFormatter(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Completes this builder by creating the `],
				[/* inline code block */ 'i', `DateTimeFormatter`],
				[/* text */ 't', `
 using the specified locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will create a formatter with the specified locale.
 Numbers will be printed and parsed using the standard DecimalStyle.
 The resolver style will be `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `SMART`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Calling this method will end any open optional sections by repeatedly
 calling `],
					[/* reference */ 'r', `#optionalEnd()`, `optionalEnd()`],
					[/* text */ 't', ` before creating the formatter.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This builder can still be used after creating the formatter if desired,
 although the state may have been changed by calls to `],
					[/* inline code block */ 'i', `optionalEnd`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale to use for formatting, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the created formatter, not null`]
			]
		]],
		[/* method */ 'append(java.time.format.DateTimeFormatter)', [
			[/* method description */
				[/* text */ 't', `Appends all the elements of a formatter to the builder.
 `],
				[/* block */ 'b', `
 This method has the same effect as appending each of the constituent
 parts of the formatter directly to this builder.`]
			],
			[/* parameters */
				[/* parameter */ 'formatter', [/* parameter description */
					[/* text */ 't', `the formatter to add, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendChronologyId()', [
			[/* method description */
				[/* text */ 't', `Appends the chronology ID, such as 'ISO' or 'ThaiBuddhist', to the formatter.
 `],
				[/* block */ 'b', `
 This appends an instruction to format/parse the chronology ID to the builder.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 During formatting, the chronology is obtained using a mechanism equivalent
 to querying the temporal with `],
					[/* reference */ 'r', `java.time.temporal.TemporalQueries#chronology()`, `TemporalQueries.chronology()`],
					[/* text */ 't', `.
 It will be printed using the result of `],
					[/* reference */ 'r', `java.time.chrono.Chronology#getId()`, `Chronology.getId()`],
					[/* text */ 't', `.
 If the chronology cannot be obtained then an exception is thrown unless the
 section of the formatter is optional.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 During parsing, the chronology is parsed and must match one of the chronologies
 in `],
					[/* reference */ 'r', `java.time.chrono.Chronology#getAvailableChronologies()`, `Chronology.getAvailableChronologies()`],
					[/* text */ 't', `.
 If the chronology cannot be parsed then an exception is thrown unless the
 section of the formatter is optional.
 The parser uses the `],
					[/* reference */ 'r', `#parseCaseInsensitive()`, `case sensitive`],
					[/* text */ 't', ` setting.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendChronologyText(java.time.format.TextStyle)', [
			[/* method description */
				[/* text */ 't', `Appends the chronology name to the formatter.
 `],
				[/* block */ 'b', `
 The calendar system name will be output during a format.
 If the chronology cannot be obtained then an exception will be thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'textStyle', [/* parameter description */
					[/* text */ 't', `the text style to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendDayPeriodText(java.time.format.TextStyle)', [
			[/* method description */
				[/* text */ 't', `Appends the day period text to the formatter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This appends an instruction to format/parse the textual name of the day period
 to the builder. Day periods are defined in LDML's
 `],
					[/* external link */ 'a', `https://unicode.org/reports/tr35/tr35-dates.html#dayPeriods`, `"day periods"`],
					[/* text */ 't', ` element.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 During formatting, the day period is obtained from `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', `, and
 optionally `],
					[/* inline code block */ 'i', `MINUTE_OF_HOUR`],
					[/* text */ 't', ` if exist. It will be mapped to a day period
 type defined in LDML, such as "morning1" and then it will be translated into
 text. Mapping to a day period type and its translation both depend on the
 locale in the formatter.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 During parsing, the text will be parsed into a day period type first. Then
 the parsed day period is combined with other fields to make a `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` in
 the resolving phase. If the `],
					[/* inline code block */ 'i', `HOUR_OF_AMPM`],
					[/* text */ 't', ` field is present, it is combined
 with the day period to make `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', ` taking into account any
 `],
					[/* inline code block */ 'i', `MINUTE_OF_HOUR`],
					[/* text */ 't', ` value. If `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', ` is present, it is validated
 against the day period taking into account any `],
					[/* inline code block */ 'i', `MINUTE_OF_HOUR`],
					[/* text */ 't', ` value. If a
 day period is present without `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `MINUTE_OF_HOUR`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `SECOND_OF_MINUTE`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `NANO_OF_SECOND`],
					[/* text */ 't', ` then the midpoint of the
 day period is set as the time in `],
					[/* inline code block */ 'i', `SMART`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `LENIENT`],
					[/* text */ 't', ` mode.
 For example, if the parsed day period type is "night1" and the period defined
 for it in the formatter locale is from 21:00 to 06:00, then it results in
 the `],
					[/* inline code block */ 'i', `LocalTime`],
					[/* text */ 't', ` of 01:30.
 If the resolved time conflicts with the day period, `],
					[/* inline code block */ 'i', `DateTimeException`],
					[/* text */ 't', ` is
 thrown in `],
					[/* inline code block */ 'i', `STRICT`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `SMART`],
					[/* text */ 't', ` mode. In `],
					[/* inline code block */ 'i', `LENIENT`],
					[/* text */ 't', ` mode, no
 exception is thrown and the parsed day period is ignored.
 `]
				]],
				[/* block */ 'b', `
 The "midnight" type allows both "00:00" as the start-of-day and "24:00" as the
 end-of-day, as long as they are valid with the resolved hour field.`]
			],
			[/* parameters */
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `the text style to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendFraction(java.time.temporal.TemporalField,int,int,boolean)', [
			[/* method description */
				[/* text */ 't', `Appends the fractional value of a date-time field to the formatter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The fractional value of the field will be output including the
 preceding decimal point. The preceding value is not output.
 For example, the second-of-minute value of 15 would be output as `],
					[/* inline code block */ 'i', `.25`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The width of the printed fraction can be controlled. Setting the
 minimum width to zero will cause no output to be generated.
 The printed fraction will have the minimum width necessary between
 the minimum and maximum widths - trailing zeroes are omitted.
 No rounding occurs due to the maximum width - digits are simply dropped.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When parsing in strict mode, the number of parsed digits must be between
 the minimum and maximum width. In strict mode, if the minimum and maximum widths
 are equal and there is no decimal point then the parser will
 participate in adjacent value parsing, see
 `],
					[/* reference */ 'r', `#appendValue(java.time.temporal.TemporalField,int)`, `appendValue(java.time.temporal.TemporalField, int)`],
					[/* text */ 't', `. When parsing in lenient mode,
 the minimum width is considered to be zero and the maximum is nine.
 `]
				]],
				[/* block */ 'b', `
 If the value cannot be obtained then an exception will be thrown.
 If the value is negative an exception will be thrown.
 If the field does not have a fixed set of valid values then an
 exception will be thrown.
 If the field value in the date-time to be printed is invalid it
 cannot be printed and an exception will be thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to append, not null`]
				]],
				[/* parameter */ 'minWidth', [/* parameter description */
					[/* text */ 't', `the minimum width of the field excluding the decimal point, from 0 to 9`]
				]],
				[/* parameter */ 'maxWidth', [/* parameter description */
					[/* text */ 't', `the maximum width of the field excluding the decimal point, from 1 to 9`]
				]],
				[/* parameter */ 'decimalPoint', [/* parameter description */
					[/* text */ 't', `whether to output the localized decimal point symbol`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the field has a variable set of valid values or
  either width is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendGenericZoneText(java.time.format.TextStyle)', [
			[/* method description */
				[/* text */ 't', `Appends the generic time-zone name, such as 'Pacific Time', to the formatter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This appends an instruction to format/parse the generic textual
 name of the zone to the builder. The generic name is the same throughout the whole
 year, ignoring any daylight saving changes. For example, 'Pacific Time' is the
 generic name, whereas 'Pacific Standard Time' and 'Pacific Daylight Time' are the
 specific names, see `],
					[/* reference */ 'r', `#appendZoneText(java.time.format.TextStyle)`, `appendZoneText(TextStyle)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 During formatting, the zone is obtained using a mechanism equivalent
 to querying the temporal with `],
					[/* reference */ 'r', `java.time.temporal.TemporalQueries#zoneId()`, `TemporalQueries.zoneId()`],
					[/* text */ 't', `.
 If the zone is a `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` it will be printed using the
 result of `],
					[/* reference */ 'r', `java.time.ZoneOffset#getId()`, `ZoneOffset.getId()`],
					[/* text */ 't', `.
 If the zone is not an offset, the textual name will be looked up
 for the locale set in the `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatter`, `DateTimeFormatter`],
					[/* text */ 't', `.
 If the lookup for text does not find any suitable result, then the
 `],
					[/* reference */ 'r', `java.time.ZoneId#getId()`, `ID`],
					[/* text */ 't', ` will be printed.
 If the zone cannot be obtained then an exception is thrown unless the
 section of the formatter is optional.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 During parsing, either the textual zone name, the zone ID or the offset
 is accepted. Many textual zone names are not unique, such as CST can be
 for both "Central Standard Time" and "China Standard Time". In this
 situation, the zone id will be determined by the region information from
 formatter's  `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatter#getLocale()`, `locale`],
					[/* text */ 't', ` and the standard
 zone id for that area, for example, America/New_York for the America Eastern zone.
 The `],
					[/* reference */ 'r', `#appendGenericZoneText(java.time.format.TextStyle,java.util.Set)`, `appendGenericZoneText(TextStyle, Set)`],
					[/* text */ 't', ` may be used
 to specify a set of preferred `],
					[/* reference */ 'r', `java.time.ZoneId`, `ZoneId`],
					[/* text */ 't', ` in this situation.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'textStyle', [/* parameter description */
					[/* text */ 't', `the text style to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendGenericZoneText(java.time.format.TextStyle,java.util.Set)', [
			[/* method description */
				[/* text */ 't', `Appends the generic time-zone name, such as 'Pacific Time', to the formatter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This appends an instruction to format/parse the generic textual
 name of the zone to the builder. The generic name is the same throughout the whole
 year, ignoring any daylight saving changes. For example, 'Pacific Time' is the
 generic name, whereas 'Pacific Standard Time' and 'Pacific Daylight Time' are the
 specific names, see `],
					[/* reference */ 'r', `#appendZoneText(java.time.format.TextStyle)`, `appendZoneText(TextStyle)`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method also allows a set of preferred `],
					[/* reference */ 'r', `java.time.ZoneId`, `ZoneId`],
					[/* text */ 't', ` to be
 specified for parsing. The matched preferred zone id will be used if the
 textural zone name being parsed is not unique.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 See `],
					[/* reference */ 'r', `#appendGenericZoneText(java.time.format.TextStyle)`, `appendGenericZoneText(TextStyle)`],
					[/* text */ 't', ` for details about
 formatting and parsing.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'textStyle', [/* parameter description */
					[/* text */ 't', `the text style to use, not null`]
				]],
				[/* parameter */ 'preferredZones', [/* parameter description */
					[/* text */ 't', `the set of preferred zone ids, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendInstant()', [
			[/* method description */
				[/* text */ 't', `Appends an instant using ISO-8601 to the formatter, formatting fractional
 digits in groups of three.
 `],
				[/* block */ 'b', `
 Instants have a fixed output format.
 They are converted to a date-time with a zone-offset of UTC and formatted
 using the standard ISO-8601 format.
 With this method, formatting nano-of-second outputs zero, three, six
 or nine digits as necessary.
 The localized decimal style is not used.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The instant is obtained using `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#INSTANT_SECONDS`, `INSTANT_SECONDS`],
					[/* text */ 't', `
 and optionally `],
					[/* inline code block */ 'i', `NANO_OF_SECOND`],
					[/* text */ 't', `. The value of `],
					[/* inline code block */ 'i', `INSTANT_SECONDS`],
					[/* text */ 't', `
 may be outside the maximum range of `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* reference */ 'r', `enum class in java.time.format.ResolverStyle`, `resolver style`],
					[/* text */ 't', ` has no effect on instant parsing.
 The end-of-day time of '24:00' is handled as midnight at the start of the following day.
 The leap-second time of '23:59:59' is handled to some degree, see
 `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatter#parsedLeapSecond()`, `DateTimeFormatter.parsedLeapSecond()`],
					[/* text */ 't', ` for full details.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When formatting, the instant will always be suffixed by 'Z' to indicate UTC.
 When parsing, the behaviour of `],
					[/* reference */ 'r', `#appendOffsetId()`, `appendOffsetId()`],
					[/* text */ 't', `
 will be used to parse the offset, converting the instant to UTC as necessary.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 An alternative to this method is to format/parse the instant as a single
 epoch-seconds value. That is achieved using `],
					[/* inline code block */ 'i', `appendValue(INSTANT_SECONDS)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendInstant(int)', [
			[/* method description */
				[/* text */ 't', `Appends an instant using ISO-8601 to the formatter with control over
 the number of fractional digits.
 `],
				[/* block */ 'b', `
 Instants have a fixed output format, although this method provides some
 control over the fractional digits. They are converted to a date-time
 with a zone-offset of UTC and printed using the standard ISO-8601 format.
 The localized decimal style is not used.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `fractionalDigits`],
					[/* text */ 't', ` parameter allows the output of the fractional
 second to be controlled. Specifying zero will cause no fractional digits
 to be output. From 1 to 9 will output an increasing number of digits, using
 zero right-padding if necessary. The special value -1 is used to output as
 many digits as necessary to avoid any trailing zeroes.
 `]
				]],
				[/* block */ 'b', `
 When parsing in strict mode, the number of parsed digits must match the
 fractional digits. When parsing in lenient mode, any number of fractional
 digits from zero to nine are accepted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The instant is obtained using `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#INSTANT_SECONDS`, `INSTANT_SECONDS`],
					[/* text */ 't', `
 and optionally `],
					[/* inline code block */ 'i', `NANO_OF_SECOND`],
					[/* text */ 't', `. The value of `],
					[/* inline code block */ 'i', `INSTANT_SECONDS`],
					[/* text */ 't', `
 may be outside the maximum range of `],
					[/* inline code block */ 'i', `LocalDateTime`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* reference */ 'r', `enum class in java.time.format.ResolverStyle`, `resolver style`],
					[/* text */ 't', ` has no effect on instant parsing.
 The end-of-day time of '24:00' is handled as midnight at the start of the following day.
 The leap-second time of '23:59:60' is handled to some degree, see
 `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatter#parsedLeapSecond()`, `DateTimeFormatter.parsedLeapSecond()`],
					[/* text */ 't', ` for full details.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 An alternative to this method is to format/parse the instant as a single
 epoch-seconds value. That is achieved using `],
					[/* inline code block */ 'i', `appendValue(INSTANT_SECONDS)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fractionalDigits', [/* parameter description */
					[/* text */ 't', `the number of fractional second digits to format with,
  from 0 to 9, or -1 to use as many digits as necessary`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the number of fractional digits is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendLiteral(char)', [
			[/* method description */
				[/* text */ 't', `Appends a character literal to the formatter.
 `],
				[/* block */ 'b', `
 This character will be output during a format.`]
			],
			[/* parameters */
				[/* parameter */ 'literal', [/* parameter description */
					[/* text */ 't', `the literal to append, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendLiteral(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Appends a string literal to the formatter.
 `],
				[/* block */ 'b', `
 This string will be output during a format.
 `],
				[/* block */ 'b', `
 If the literal is empty, nothing is added to the formatter.`]
			],
			[/* parameters */
				[/* parameter */ 'literal', [/* parameter description */
					[/* text */ 't', `the literal to append, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendLocalized(java.time.format.FormatStyle,java.time.format.FormatStyle)', [
			[/* method description */
				[/* text */ 't', `Appends a localized date-time pattern to the formatter.
 `],
				[/* block */ 'b', `
 This appends a localized section to the builder, suitable for outputting
 a date, time or date-time combination. The format of the localized
 section is lazily looked up based on four items:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `the `],
						[/* inline code block */ 'i', `dateStyle`],
						[/* text */ 't', ` specified to this method
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `the `],
						[/* inline code block */ 'i', `timeStyle`],
						[/* text */ 't', ` specified to this method
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `the `],
						[/* inline code block */ 'i', `Locale`],
						[/* text */ 't', ` of the `],
						[/* inline code block */ 'i', `DateTimeFormatter`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `the `],
						[/* inline code block */ 'i', `Chronology`],
						[/* text */ 't', `, selecting the best available
 `]
					]]
				]],
				[/* text */ 't', `
 During formatting, the chronology is obtained from the temporal object
 being formatted, which may have been overridden by
 `],
				[/* reference */ 'r', `java.time.format.DateTimeFormatter#withChronology(java.time.chrono.Chronology)`, `DateTimeFormatter.withChronology(Chronology)`],
				[/* text */ 't', `.
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
				[/* reference */ 'r', `java.time.format.DateTimeFormatter#withZone(java.time.ZoneId)`, `DateTimeFormatter.withZone(java.time.ZoneId)`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 During parsing, if a chronology has already been parsed, then it is used.
 Otherwise the default from `],
					[/* inline code block */ 'i', `DateTimeFormatter.withChronology(Chronology)`],
					[/* text */ 't', `
 is used, with `],
					[/* inline code block */ 'i', `IsoChronology`],
					[/* text */ 't', ` as the fallback.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that this method provides similar functionality to methods on
 `],
					[/* inline code block */ 'i', `DateFormat`],
					[/* text */ 't', ` such as `],
					[/* reference */ 'r', `java.text.DateFormat#getDateTimeInstance(int,int)`, `DateFormat.getDateTimeInstance(int, int)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dateStyle', [/* parameter description */
					[/* text */ 't', `the date style to use, null means no date required`]
				]],
				[/* parameter */ 'timeStyle', [/* parameter description */
					[/* text */ 't', `the time style to use, null means no time required`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if both the date and time styles are null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendLocalizedOffset(java.time.format.TextStyle)', [
			[/* method description */
				[/* text */ 't', `Appends the localized zone offset, such as 'GMT+01:00', to the formatter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This appends a localized zone offset to the builder, the format of the
 localized offset is controlled by the specified `],
					[/* reference */ 'r', `enum class in java.time.format.FormatStyle`, `style`],
					[/* text */ 't', `
 to this method:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* reference */ 'r', `java.time.format.TextStyle#FULL`, `full`],
						[/* text */ 't', ` - formats with localized offset text, such
 as 'GMT, 2-digit hour and minute field, optional second field if non-zero,
 and colon.
 `]
					]],
					[/* block */ 'b', [
						[/* reference */ 'r', `java.time.format.TextStyle#SHORT`, `short`],
						[/* text */ 't', ` - formats with localized offset text,
 such as 'GMT, hour without leading zero, optional 2-digit minute and
 second if non-zero, and colon.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 During formatting, the offset is obtained using a mechanism equivalent
 to querying the temporal with `],
					[/* reference */ 'r', `java.time.temporal.TemporalQueries#offset()`, `TemporalQueries.offset()`],
					[/* text */ 't', `.
 If the offset cannot be obtained then an exception is thrown unless the
 section of the formatter is optional.
 `]
				]],
				[/* block */ 'b', `
 During parsing, the offset is parsed using the format defined above.
 If the offset cannot be parsed then an exception is thrown unless the
 section of the formatter is optional.`]
			],
			[/* parameters */
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `the format style to use, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if style is neither `],
					[/* reference */ 'r', `java.time.format.TextStyle#FULL`, `full`],
					[/* text */ 't', ` nor `],
					[/* reference */ 'r', `java.time.format.TextStyle#SHORT`, `short`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendOffset(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Appends the zone offset, such as '+01:00', to the formatter.
 `],
				[/* block */ 'b', `
 This appends an instruction to format/parse the offset ID to the builder.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 During formatting, the offset is obtained using a mechanism equivalent
 to querying the temporal with `],
					[/* reference */ 'r', `java.time.temporal.TemporalQueries#offset()`, `TemporalQueries.offset()`],
					[/* text */ 't', `.
 It will be printed using the format defined below.
 If the offset cannot be obtained then an exception is thrown unless the
 section of the formatter is optional.
 `]
				]],
				[/* block */ 'b', `
 When parsing in strict mode, the input must contain the mandatory
 and optional elements are defined by the specified pattern.
 If the offset cannot be parsed then an exception is thrown unless
 the section of the formatter is optional.
 `],
				[/* block */ 'b', `
 When parsing in lenient mode, only the hours are mandatory - minutes
 and seconds are optional. The colons are required if the specified
 pattern contains a colon. If the specified pattern is "+HH", the
 presence of colons is determined by whether the character after the
 hour digits is a colon or not.
 If the offset cannot be parsed then an exception is thrown unless
 the section of the formatter is optional.
 `],
				[/* block */ 'b', `
 The format of the offset is controlled by a pattern which must be one
 of the following:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+HH`],
						[/* text */ 't', ` - hour only, ignoring minute and second
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+HHmm`],
						[/* text */ 't', ` - hour, with minute if non-zero, ignoring second, no colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+HH:mm`],
						[/* text */ 't', ` - hour, with minute if non-zero, ignoring second, with colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+HHMM`],
						[/* text */ 't', ` - hour and minute, ignoring second, no colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+HH:MM`],
						[/* text */ 't', ` - hour and minute, ignoring second, with colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+HHMMss`],
						[/* text */ 't', ` - hour and minute, with second if non-zero, no colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+HH:MM:ss`],
						[/* text */ 't', ` - hour and minute, with second if non-zero, with colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+HHMMSS`],
						[/* text */ 't', ` - hour, minute and second, no colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+HH:MM:SS`],
						[/* text */ 't', ` - hour, minute and second, with colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+HHmmss`],
						[/* text */ 't', ` - hour, with minute if non-zero or with minute and
 second if non-zero, no colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+HH:mm:ss`],
						[/* text */ 't', ` - hour, with minute if non-zero or with minute and
 second if non-zero, with colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+H`],
						[/* text */ 't', ` - hour only, ignoring minute and second
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+Hmm`],
						[/* text */ 't', ` - hour, with minute if non-zero, ignoring second, no colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+H:mm`],
						[/* text */ 't', ` - hour, with minute if non-zero, ignoring second, with colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+HMM`],
						[/* text */ 't', ` - hour and minute, ignoring second, no colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+H:MM`],
						[/* text */ 't', ` - hour and minute, ignoring second, with colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+HMMss`],
						[/* text */ 't', ` - hour and minute, with second if non-zero, no colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+H:MM:ss`],
						[/* text */ 't', ` - hour and minute, with second if non-zero, with colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+HMMSS`],
						[/* text */ 't', ` - hour, minute and second, no colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+H:MM:SS`],
						[/* text */ 't', ` - hour, minute and second, with colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+Hmmss`],
						[/* text */ 't', ` - hour, with minute if non-zero or with minute and
 second if non-zero, no colon
 `]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `+H:mm:ss`],
						[/* text */ 't', ` - hour, with minute if non-zero or with minute and
 second if non-zero, with colon
 `]
					]]
				]],
				[/* text */ 't', `
 Patterns containing "HH" will format and parse a two digit hour,
 zero-padded if necessary. Patterns containing "H" will format with no
 zero-padding, and parse either one or two digits.
 In lenient mode, the parser will be greedy and parse the maximum digits possible.
 The "no offset" text controls what text is printed when the total amount of
 the offset fields to be output is zero.
 Example values would be 'Z', '+00:00', 'UTC' or 'GMT'.
 Three formats are accepted for parsing UTC - the "no offset" text, and the
 plus and minus versions of zero defined by the pattern.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern to use, not null`]
				]],
				[/* parameter */ 'noOffsetText', [/* parameter description */
					[/* text */ 't', `the text to use when the offset is zero, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the pattern is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendOffsetId()', [
			[/* method description */
				[/* text */ 't', `Appends the zone offset, such as '+01:00', to the formatter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This appends an instruction to format/parse the offset ID to the builder.
 This is equivalent to calling `],
					[/* inline code block */ 'i', `appendOffset("+HH:mm:ss", "Z")`],
					[/* text */ 't', `.
 See `],
					[/* reference */ 'r', `#appendOffset(java.lang.String,java.lang.String)`, `appendOffset(String, String)`],
					[/* text */ 't', ` for details on formatting
 and parsing.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendOptional(java.time.format.DateTimeFormatter)', [
			[/* method description */
				[/* text */ 't', `Appends a formatter to the builder which will optionally format/parse.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method has the same effect as appending each of the constituent
 parts directly to this builder surrounded by an `],
					[/* reference */ 'r', `#optionalStart()`, `optionalStart()`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `#optionalEnd()`, `optionalEnd()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The formatter will format if data is available for all the fields contained within it.
 The formatter will parse if the string matches, otherwise no error is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'formatter', [/* parameter description */
					[/* text */ 't', `the formatter to add, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendPattern(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Appends the elements defined by the specified pattern to the builder.
 `],
				[/* block */ 'b', `
 All letters 'A' to 'Z' and 'a' to 'z' are reserved as pattern letters.
 The characters '#', '{' and '}' are reserved for future use.
 The characters '[' and ']' indicate optional patterns.
 The following pattern letters are defined:
 `],
				[/* code block */ 'c', `  Symbol  Meaning                     Presentation      Examples
  ------  -------                     ------------      -------
   G       era                         text              AD; Anno Domini; A
   u       year                        year              2004; 04
   y       year-of-era                 year              2004; 04
   D       day-of-year                 number            189
   M/L     month-of-year               number/text       7; 07; Jul; July; J
   d       day-of-month                number            10
   g       modified-julian-day         number            2451334

   Q/q     quarter-of-year             number/text       3; 03; Q3; 3rd quarter
   Y       week-based-year             year              1996; 96
   w       week-of-week-based-year     number            27
   W       week-of-month               number            4
   E       day-of-week                 text              Tue; Tuesday; T
   e/c     localized day-of-week       number/text       2; 02; Tue; Tuesday; T
   F       day-of-week-in-month        number            3

   a       am-pm-of-day                text              PM
   B       period-of-day               text              in the morning
   h       clock-hour-of-am-pm (1-12)  number            12
   K       hour-of-am-pm (0-11)        number            0
   k       clock-hour-of-day (1-24)    number            24

   H       hour-of-day (0-23)          number            0
   m       minute-of-hour              number            30
   s       second-of-minute            number            55
   S       fraction-of-second          fraction          978
   A       milli-of-day                number            1234
   n       nano-of-second              number            987654321
   N       nano-of-day                 number            1234000000

   V       time-zone ID                zone-id           America/Los_Angeles; Z; -08:30
   v       generic time-zone name      zone-name         PT, Pacific Time
   z       time-zone name              zone-name         Pacific Standard Time; PST
   O       localized zone-offset       offset-O          GMT+8; GMT+08:00; UTC-08:00;
   X       zone-offset 'Z' for zero    offset-X          Z; -08; -0830; -08:30; -083015; -08:30:15
   x       zone-offset                 offset-x          +0000; -08; -0830; -08:30; -083015; -08:30:15
   Z       zone-offset                 offset-Z          +0000; -0800; -08:00

   p       pad next                    pad modifier      1

   '       escape for text             delimiter
   ''      single quote                literal           '
   [       optional section start
   ]       optional section end
   #       reserved for future use
   {       reserved for future use
   }       reserved for future use
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The count of pattern letters determine the format.
 See `],
					[/* text */ 't', `DateTimeFormatter`],
					[/* text */ 't', ` for a user-focused description of the patterns.
 The following tables define how the pattern letters map to the builder.
 `]
				]],
				[/* block */ 'b', `Date fields`],
				[/* code block */ 'c', `  Pattern  Count  Equivalent builder methods
  -------  -----  --------------------------
    G       1      appendText(ChronoField.ERA, TextStyle.SHORT)
    GG      2      appendText(ChronoField.ERA, TextStyle.SHORT)
    GGG     3      appendText(ChronoField.ERA, TextStyle.SHORT)
    GGGG    4      appendText(ChronoField.ERA, TextStyle.FULL)
    GGGGG   5      appendText(ChronoField.ERA, TextStyle.NARROW)

    u       1      appendValue(ChronoField.YEAR, 1, 19, SignStyle.NORMAL)
    uu      2      appendValueReduced(ChronoField.YEAR, 2, 2, 2000)
    uuu     3      appendValue(ChronoField.YEAR, 3, 19, SignStyle.NORMAL)
    u..u    4..n   appendValue(ChronoField.YEAR, n, 19, SignStyle.EXCEEDS_PAD)
    y       1      appendValue(ChronoField.YEAR_OF_ERA, 1, 19, SignStyle.NORMAL)
    yy      2      appendValueReduced(ChronoField.YEAR_OF_ERA, 2, 2, 2000)
    yyy     3      appendValue(ChronoField.YEAR_OF_ERA, 3, 19, SignStyle.NORMAL)
    y..y    4..n   appendValue(ChronoField.YEAR_OF_ERA, n, 19, SignStyle.EXCEEDS_PAD)
    Y       1      append special localized WeekFields element for numeric week-based-year
    YY      2      append special localized WeekFields element for reduced numeric week-based-year 2 digits
    YYY     3      append special localized WeekFields element for numeric week-based-year (3, 19, SignStyle.NORMAL)
    Y..Y    4..n   append special localized WeekFields element for numeric week-based-year (n, 19, SignStyle.EXCEEDS_PAD)

    Q       1      appendValue(IsoFields.QUARTER_OF_YEAR)
    QQ      2      appendValue(IsoFields.QUARTER_OF_YEAR, 2)
    QQQ     3      appendText(IsoFields.QUARTER_OF_YEAR, TextStyle.SHORT)
    QQQQ    4      appendText(IsoFields.QUARTER_OF_YEAR, TextStyle.FULL)
    QQQQQ   5      appendText(IsoFields.QUARTER_OF_YEAR, TextStyle.NARROW)
    q       1      appendValue(IsoFields.QUARTER_OF_YEAR)
    qq      2      appendValue(IsoFields.QUARTER_OF_YEAR, 2)
    qqq     3      appendText(IsoFields.QUARTER_OF_YEAR, TextStyle.SHORT_STANDALONE)
    qqqq    4      appendText(IsoFields.QUARTER_OF_YEAR, TextStyle.FULL_STANDALONE)
    qqqqq   5      appendText(IsoFields.QUARTER_OF_YEAR, TextStyle.NARROW_STANDALONE)

    M       1      appendValue(ChronoField.MONTH_OF_YEAR)
    MM      2      appendValue(ChronoField.MONTH_OF_YEAR, 2)
    MMM     3      appendText(ChronoField.MONTH_OF_YEAR, TextStyle.SHORT)
    MMMM    4      appendText(ChronoField.MONTH_OF_YEAR, TextStyle.FULL)
    MMMMM   5      appendText(ChronoField.MONTH_OF_YEAR, TextStyle.NARROW)
    L       1      appendValue(ChronoField.MONTH_OF_YEAR)
    LL      2      appendValue(ChronoField.MONTH_OF_YEAR, 2)
    LLL     3      appendText(ChronoField.MONTH_OF_YEAR, TextStyle.SHORT_STANDALONE)
    LLLL    4      appendText(ChronoField.MONTH_OF_YEAR, TextStyle.FULL_STANDALONE)
    LLLLL   5      appendText(ChronoField.MONTH_OF_YEAR, TextStyle.NARROW_STANDALONE)

    w       1      append special localized WeekFields element for numeric week-of-year
    ww      2      append special localized WeekFields element for numeric week-of-year, zero-padded
    W       1      append special localized WeekFields element for numeric week-of-month
    d       1      appendValue(ChronoField.DAY_OF_MONTH)
    dd      2      appendValue(ChronoField.DAY_OF_MONTH, 2)
    D       1      appendValue(ChronoField.DAY_OF_YEAR)
    DD      2      appendValue(ChronoField.DAY_OF_YEAR, 2, 3, SignStyle.NOT_NEGATIVE)
    DDD     3      appendValue(ChronoField.DAY_OF_YEAR, 3)
    F       1      appendValue(ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH)
    g..g    1..n   appendValue(JulianFields.MODIFIED_JULIAN_DAY, n, 19, SignStyle.NORMAL)
    E       1      appendText(ChronoField.DAY_OF_WEEK, TextStyle.SHORT)
    EE      2      appendText(ChronoField.DAY_OF_WEEK, TextStyle.SHORT)
    EEE     3      appendText(ChronoField.DAY_OF_WEEK, TextStyle.SHORT)
    EEEE    4      appendText(ChronoField.DAY_OF_WEEK, TextStyle.FULL)
    EEEEE   5      appendText(ChronoField.DAY_OF_WEEK, TextStyle.NARROW)
    e       1      append special localized WeekFields element for numeric day-of-week
    ee      2      append special localized WeekFields element for numeric day-of-week, zero-padded
    eee     3      appendText(ChronoField.DAY_OF_WEEK, TextStyle.SHORT)
    eeee    4      appendText(ChronoField.DAY_OF_WEEK, TextStyle.FULL)
    eeeee   5      appendText(ChronoField.DAY_OF_WEEK, TextStyle.NARROW)
    c       1      append special localized WeekFields element for numeric day-of-week
    ccc     3      appendText(ChronoField.DAY_OF_WEEK, TextStyle.SHORT_STANDALONE)
    cccc    4      appendText(ChronoField.DAY_OF_WEEK, TextStyle.FULL_STANDALONE)
    ccccc   5      appendText(ChronoField.DAY_OF_WEEK, TextStyle.NARROW_STANDALONE)
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Time fields`],
				[/* code block */ 'c', `  Pattern  Count  Equivalent builder methods
  -------  -----  --------------------------
    a       1      appendText(ChronoField.AMPM_OF_DAY, TextStyle.SHORT)
    h       1      appendValue(ChronoField.CLOCK_HOUR_OF_AMPM)
    hh      2      appendValue(ChronoField.CLOCK_HOUR_OF_AMPM, 2)
    H       1      appendValue(ChronoField.HOUR_OF_DAY)
    HH      2      appendValue(ChronoField.HOUR_OF_DAY, 2)
    k       1      appendValue(ChronoField.CLOCK_HOUR_OF_DAY)
    kk      2      appendValue(ChronoField.CLOCK_HOUR_OF_DAY, 2)
    K       1      appendValue(ChronoField.HOUR_OF_AMPM)
    KK      2      appendValue(ChronoField.HOUR_OF_AMPM, 2)
    m       1      appendValue(ChronoField.MINUTE_OF_HOUR)
    mm      2      appendValue(ChronoField.MINUTE_OF_HOUR, 2)
    s       1      appendValue(ChronoField.SECOND_OF_MINUTE)
    ss      2      appendValue(ChronoField.SECOND_OF_MINUTE, 2)

    S..S    1..n   appendFraction(ChronoField.NANO_OF_SECOND, n, n, false)
    A..A    1..n   appendValue(ChronoField.MILLI_OF_DAY, n, 19, SignStyle.NOT_NEGATIVE)
    n..n    1..n   appendValue(ChronoField.NANO_OF_SECOND, n, 19, SignStyle.NOT_NEGATIVE)
    N..N    1..n   appendValue(ChronoField.NANO_OF_DAY, n, 19, SignStyle.NOT_NEGATIVE)
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Day periods`],
				[/* code block */ 'c', `  Pattern  Count  Equivalent builder methods
  -------  -----  --------------------------
    B       1      appendDayPeriodText(TextStyle.SHORT)
    BBBB    4      appendDayPeriodText(TextStyle.FULL)
    BBBBB   5      appendDayPeriodText(TextStyle.NARROW)
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Zone ID`],
					[/* text */ 't', `: Pattern letters to output `],
					[/* inline code block */ 'i', `ZoneId`],
					[/* text */ 't', `.
 `]
				]],
				[/* code block */ 'c', `  Pattern  Count  Equivalent builder methods
  -------  -----  --------------------------
    VV      2      appendZoneId()
    v       1      appendGenericZoneText(TextStyle.SHORT)
    vvvv    4      appendGenericZoneText(TextStyle.FULL)
    z       1      appendZoneText(TextStyle.SHORT)
    zz      2      appendZoneText(TextStyle.SHORT)
    zzz     3      appendZoneText(TextStyle.SHORT)
    zzzz    4      appendZoneText(TextStyle.FULL)
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `Zone offset`],
					[/* text */ 't', `: Pattern letters to output `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', `.
 `]
				]],
				[/* code block */ 'c', `  Pattern  Count  Equivalent builder methods
  -------  -----  --------------------------
    O       1      appendLocalizedOffset(TextStyle.SHORT)
    OOOO    4      appendLocalizedOffset(TextStyle.FULL)
    X       1      appendOffset("+HHmm","Z")
    XX      2      appendOffset("+HHMM","Z")
    XXX     3      appendOffset("+HH:MM","Z")
    XXXX    4      appendOffset("+HHMMss","Z")
    XXXXX   5      appendOffset("+HH:MM:ss","Z")
    x       1      appendOffset("+HHmm","+00")
    xx      2      appendOffset("+HHMM","+0000")
    xxx     3      appendOffset("+HH:MM","+00:00")
    xxxx    4      appendOffset("+HHMMss","+0000")
    xxxxx   5      appendOffset("+HH:MM:ss","+00:00")
    Z       1      appendOffset("+HHMM","+0000")
    ZZ      2      appendOffset("+HHMM","+0000")
    ZZZ     3      appendOffset("+HHMM","+0000")
    ZZZZ    4      appendLocalizedOffset(TextStyle.FULL)
    ZZZZZ   5      appendOffset("+HH:MM:ss","Z")
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Modifiers`],
				[/* code block */ 'c', `  Pattern  Count  Equivalent builder methods
  -------  -----  --------------------------
    [       1      optionalStart()
    ]       1      optionalEnd()
    p..p    1..n   padNext(n)
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 Any sequence of letters not specified above, unrecognized letter or
 reserved character will throw an exception.
 Future versions may add to the set of patterns.
 It is recommended to use single quotes around all characters that you want
 to output directly to ensure that future changes do not break your application.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that the pattern string is similar, but not identical, to
 `],
					[/* reference */ 'r', `java.text.SimpleDateFormat`, `SimpleDateFormat`],
					[/* text */ 't', `.
 The pattern string is also similar, but not identical, to that defined by the
 Unicode Common Locale Data Repository (CLDR/LDML).
 Pattern letters 'X' and 'u' are aligned with Unicode CLDR/LDML.
 By contrast, `],
					[/* inline code block */ 'i', `SimpleDateFormat`],
					[/* text */ 't', ` uses 'u' for the numeric day of week.
 Pattern letters 'y' and 'Y' parse years of two digits and more than 4 digits differently.
 Pattern letters 'n', 'A', 'N', and 'p' are added.
 Number types will reject large numbers.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'pattern', [/* parameter description */
					[/* text */ 't', `the pattern to add, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the pattern is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendText(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Appends the text of a date-time field to the formatter using the full
 text style.
 `],
				[/* block */ 'b', `
 The text of the field will be output during a format.
 The value must be within the valid range of the field.
 If the value cannot be obtained then an exception will be thrown.
 If the field has no textual representation, then the numeric value will be used.
 `],
				[/* block */ 'b', `
 The value will be printed as per the normal format of an integer value.
 Only negative numbers will be signed. No padding will be added.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to append, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendText(java.time.temporal.TemporalField,java.time.format.TextStyle)', [
			[/* method description */
				[/* text */ 't', `Appends the text of a date-time field to the formatter.
 `],
				[/* block */ 'b', `
 The text of the field will be output during a format.
 The value must be within the valid range of the field.
 If the value cannot be obtained then an exception will be thrown.
 If the field has no textual representation, then the numeric value will be used.
 `],
				[/* block */ 'b', `
 The value will be printed as per the normal format of an integer value.
 Only negative numbers will be signed. No padding will be added.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to append, not null`]
				]],
				[/* parameter */ 'textStyle', [/* parameter description */
					[/* text */ 't', `the text style to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendText(java.time.temporal.TemporalField,java.util.Map)', [
			[/* method description */
				[/* text */ 't', `Appends the text of a date-time field to the formatter using the specified
 map to supply the text.
 `],
				[/* block */ 'b', `
 The standard text outputting methods use the localized text in the JDK.
 This method allows that text to be specified directly.
 The supplied map is not validated by the builder to ensure that formatting or
 parsing is possible, thus an invalid map may throw an error during later use.
 `],
				[/* block */ 'b', `
 Supplying the map of text provides considerable flexibility in formatting and parsing.
 For example, a legacy application might require or supply the months of the
 year as "JNY", "FBY", "MCH" etc. These do not match the standard set of text
 for localized month names. Using this method, a map can be created which
 defines the connection between each value and the text:
 `],
				[/* code block */ 'c', ` Map<Long, String> map = new HashMap<>();
 map.put(1L, "JNY");
 map.put(2L, "FBY");
 map.put(3L, "MCH");
 ...
 builder.appendText(MONTH_OF_YEAR, map);
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `
 Other uses might be to output the value with a suffix, such as "1st", "2nd", "3rd",
 or as Roman numerals "I", "II", "III", "IV".
 `],
				[/* block */ 'b', `
 During formatting, the value is obtained and checked that it is in the valid range.
 If text is not available for the value then it is output as a number.
 During parsing, the parser will match against the map of text and numeric values.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to append, not null`]
				]],
				[/* parameter */ 'textLookup', [/* parameter description */
					[/* text */ 't', `the map from the value to the text`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendValue(java.time.temporal.TemporalField)', [
			[/* method description */
				[/* text */ 't', `Appends the value of a date-time field to the formatter using a normal
 output style.
 `],
				[/* block */ 'b', `
 The value of the field will be output during a format.
 If the value cannot be obtained then an exception will be thrown.
 `],
				[/* block */ 'b', `
 The value will be printed as per the normal format of an integer value.
 Only negative numbers will be signed. No padding will be added.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The parser for a variable width value such as this normally behaves greedily,
 requiring one digit, but accepting as many digits as possible.
 This behavior can be affected by 'adjacent value parsing'.
 See `],
					[/* reference */ 'r', `#appendValue(java.time.temporal.TemporalField,int)`, `appendValue(java.time.temporal.TemporalField, int)`],
					[/* text */ 't', ` for full details.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to append, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendValue(java.time.temporal.TemporalField,int)', [
			[/* method description */
				[/* text */ 't', `Appends the value of a date-time field to the formatter using a fixed
 width, zero-padded approach.
 `],
				[/* block */ 'b', `
 The value of the field will be output during a format.
 If the value cannot be obtained then an exception will be thrown.
 `],
				[/* block */ 'b', `
 The value will be zero-padded on the left. If the size of the value
 means that it cannot be printed within the width then an exception is thrown.
 If the value of the field is negative then an exception is thrown during formatting.
 `],
				[/* block */ 'b', `
 This method supports a special technique of parsing known as 'adjacent value parsing'.
 This technique solves the problem where a value, variable or fixed width, is followed by one or more
 fixed length values. The standard parser is greedy, and thus it would normally
 steal the digits that are needed by the fixed width value parsers that follow the
 variable width one.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 No action is required to initiate 'adjacent value parsing'.
 When a call to `],
					[/* inline code block */ 'i', `appendValue`],
					[/* text */ 't', ` is made, the builder
 enters adjacent value parsing setup mode. If the immediately subsequent method
 call or calls on the same builder are for a fixed width value, then the parser will reserve
 space so that the fixed width values can be parsed.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For example, consider `],
					[/* inline code block */ 'i', `builder.appendValue(YEAR).appendValue(MONTH_OF_YEAR, 2);`],
					[/* text */ 't', `
 The year is a variable width parse of between 1 and 19 digits.
 The month is a fixed width parse of 2 digits.
 Because these were appended to the same builder immediately after one another,
 the year parser will reserve two digits for the month to parse.
 Thus, the text '201106' will correctly parse to a year of 2011 and a month of 6.
 Without adjacent value parsing, the year would greedily parse all six digits and leave
 nothing for the month.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Adjacent value parsing applies to each set of fixed width not-negative values in the parser
 that immediately follow any kind of value, variable or fixed width.
 Calling any other append method will end the setup of adjacent value parsing.
 Thus, in the unlikely event that you need to avoid adjacent value parsing behavior,
 simply add the `],
					[/* inline code block */ 'i', `appendValue`],
					[/* text */ 't', ` to another `],
					[/* inline code block */ 'i', `DateTimeFormatterBuilder`],
					[/* text */ 't', `
 and add that to this builder.
 `]
				]],
				[/* block */ 'b', `
 If adjacent parsing is active, then parsing must match exactly the specified
 number of digits in both strict and lenient modes.
 In addition, no positive or negative sign is permitted.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to append, not null`]
				]],
				[/* parameter */ 'width', [/* parameter description */
					[/* text */ 't', `the width of the printed field, from 1 to 19`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the width is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendValue(java.time.temporal.TemporalField,int,int,java.time.format.SignStyle)', [
			[/* method description */
				[/* text */ 't', `Appends the value of a date-time field to the formatter providing full
 control over formatting.
 `],
				[/* block */ 'b', `
 The value of the field will be output during a format.
 If the value cannot be obtained then an exception will be thrown.
 `],
				[/* block */ 'b', `
 This method provides full control of the numeric formatting, including
 zero-padding and the positive/negative sign.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The parser for a variable width value such as this normally behaves greedily,
 accepting as many digits as possible.
 This behavior can be affected by 'adjacent value parsing'.
 See `],
					[/* reference */ 'r', `#appendValue(java.time.temporal.TemporalField,int)`, `appendValue(java.time.temporal.TemporalField, int)`],
					[/* text */ 't', ` for full details.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In strict parsing mode, the minimum number of parsed digits is `],
					[/* inline code block */ 'i', `minWidth`],
					[/* text */ 't', `
 and the maximum is `],
					[/* inline code block */ 'i', `maxWidth`],
					[/* text */ 't', `.
 In lenient parsing mode, the minimum number of parsed digits is one
 and the maximum is 19 (except as limited by adjacent value parsing).
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If this method is invoked with equal minimum and maximum widths and a sign style of
 `],
					[/* inline code block */ 'i', `NOT_NEGATIVE`],
					[/* text */ 't', ` then it delegates to `],
					[/* inline code block */ 'i', `appendValue(TemporalField,int)`],
					[/* text */ 't', `.
 In this scenario, the formatting and parsing behavior described there occur.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to append, not null`]
				]],
				[/* parameter */ 'minWidth', [/* parameter description */
					[/* text */ 't', `the minimum field width of the printed field, from 1 to 19`]
				]],
				[/* parameter */ 'maxWidth', [/* parameter description */
					[/* text */ 't', `the maximum field width of the printed field, from 1 to 19`]
				]],
				[/* parameter */ 'signStyle', [/* parameter description */
					[/* text */ 't', `the positive/negative output style, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the widths are invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendValueReduced(java.time.temporal.TemporalField,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Appends the reduced value of a date-time field to the formatter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Since fields such as year vary by chronology, it is recommended to use the
 `],
					[/* reference */ 'r', `#appendValueReduced(java.time.temporal.TemporalField,int,int,java.time.chrono.ChronoLocalDate)`, `appendValueReduced(TemporalField, int, int, ChronoLocalDate)`],
					[/* text */ 't', ` date}
 variant of this method in most cases. This variant is suitable for
 simple fields or working with only the ISO chronology.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For formatting, the `],
					[/* inline code block */ 'i', `width`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `maxWidth`],
					[/* text */ 't', ` are used to
 determine the number of characters to format.
 If they are equal then the format is fixed width.
 If the value of the field is within the range of the `],
					[/* inline code block */ 'i', `baseValue`],
					[/* text */ 't', ` using
 `],
					[/* inline code block */ 'i', `width`],
					[/* text */ 't', ` characters then the reduced value is formatted otherwise the value is
 truncated to fit `],
					[/* inline code block */ 'i', `maxWidth`],
					[/* text */ 't', `.
 The rightmost characters are output to match the width, left padding with zero.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For strict parsing, the number of characters allowed by `],
					[/* inline code block */ 'i', `width`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `maxWidth`],
					[/* text */ 't', ` are parsed.
 For lenient parsing, the number of characters must be at least 1 and less than 10.
 If the number of digits parsed is equal to `],
					[/* inline code block */ 'i', `width`],
					[/* text */ 't', ` and the value is positive,
 the value of the field is computed to be the first number greater than
 or equal to the `],
					[/* inline code block */ 'i', `baseValue`],
					[/* text */ 't', ` with the same least significant characters,
 otherwise the value parsed is the field value.
 This allows a reduced value to be entered for values in range of the baseValue
 and width and absolute values can be entered for values outside the range.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For example, a base value of `],
					[/* inline code block */ 'i', `1980`],
					[/* text */ 't', ` and a width of `],
					[/* inline code block */ 'i', `2`],
					[/* text */ 't', ` will have
 valid values from `],
					[/* inline code block */ 'i', `1980`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `2079`],
					[/* text */ 't', `.
 During parsing, the text `],
					[/* inline code block */ 'i', `"12"`],
					[/* text */ 't', ` will result in the value `],
					[/* inline code block */ 'i', `2012`],
					[/* text */ 't', ` as that
 is the value within the range where the last two characters are "12".
 By contrast, parsing the text `],
					[/* inline code block */ 'i', `"1915"`],
					[/* text */ 't', ` will result in the value `],
					[/* inline code block */ 'i', `1915`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to append, not null`]
				]],
				[/* parameter */ 'width', [/* parameter description */
					[/* text */ 't', `the field width of the printed and parsed field, from 1 to 10`]
				]],
				[/* parameter */ 'maxWidth', [/* parameter description */
					[/* text */ 't', `the maximum field width of the printed field, from 1 to 10`]
				]],
				[/* parameter */ 'baseValue', [/* parameter description */
					[/* text */ 't', `the base value of the range of valid values`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the width or base value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendValueReduced(java.time.temporal.TemporalField,int,int,java.time.chrono.ChronoLocalDate)', [
			[/* method description */
				[/* text */ 't', `Appends the reduced value of a date-time field to the formatter.
 `],
				[/* block */ 'b', `
 This is typically used for formatting and parsing a two digit year.
 `],
				[/* block */ 'b', `
 The base date is used to calculate the full value during parsing.
 For example, if the base date is 1950-01-01 then parsed values for
 a two digit year parse will be in the range 1950-01-01 to 2049-12-31.
 Only the year would be extracted from the date, thus a base date of
 1950-08-25 would also parse to the range 1950-01-01 to 2049-12-31.
 This behavior is necessary to support fields such as week-based-year
 or other calendar systems where the parsed value does not align with
 standard ISO years.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The exact behavior is as follows. Parse the full set of fields and
 determine the effective chronology using the last chronology if
 it appears more than once. Then convert the base date to the
 effective chronology. Then extract the specified field from the
 chronology-specific base date and use it to determine the
 `],
					[/* inline code block */ 'i', `baseValue`],
					[/* text */ 't', ` used below.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For formatting, the `],
					[/* inline code block */ 'i', `width`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `maxWidth`],
					[/* text */ 't', ` are used to
 determine the number of characters to format.
 If they are equal then the format is fixed width.
 If the value of the field is within the range of the `],
					[/* inline code block */ 'i', `baseValue`],
					[/* text */ 't', ` using
 `],
					[/* inline code block */ 'i', `width`],
					[/* text */ 't', ` characters then the reduced value is formatted otherwise the value is
 truncated to fit `],
					[/* inline code block */ 'i', `maxWidth`],
					[/* text */ 't', `.
 The rightmost characters are output to match the width, left padding with zero.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For strict parsing, the number of characters allowed by `],
					[/* inline code block */ 'i', `width`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `maxWidth`],
					[/* text */ 't', ` are parsed.
 For lenient parsing, the number of characters must be at least 1 and less than 10.
 If the number of digits parsed is equal to `],
					[/* inline code block */ 'i', `width`],
					[/* text */ 't', ` and the value is positive,
 the value of the field is computed to be the first number greater than
 or equal to the `],
					[/* inline code block */ 'i', `baseValue`],
					[/* text */ 't', ` with the same least significant characters,
 otherwise the value parsed is the field value.
 This allows a reduced value to be entered for values in range of the baseValue
 and width and absolute values can be entered for values outside the range.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For example, a base value of `],
					[/* inline code block */ 'i', `1980`],
					[/* text */ 't', ` and a width of `],
					[/* inline code block */ 'i', `2`],
					[/* text */ 't', ` will have
 valid values from `],
					[/* inline code block */ 'i', `1980`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `2079`],
					[/* text */ 't', `.
 During parsing, the text `],
					[/* inline code block */ 'i', `"12"`],
					[/* text */ 't', ` will result in the value `],
					[/* inline code block */ 'i', `2012`],
					[/* text */ 't', ` as that
 is the value within the range where the last two characters are "12".
 By contrast, parsing the text `],
					[/* inline code block */ 'i', `"1915"`],
					[/* text */ 't', ` will result in the value `],
					[/* inline code block */ 'i', `1915`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to append, not null`]
				]],
				[/* parameter */ 'width', [/* parameter description */
					[/* text */ 't', `the field width of the printed and parsed field, from 1 to 10`]
				]],
				[/* parameter */ 'maxWidth', [/* parameter description */
					[/* text */ 't', `the maximum field width of the printed field, from 1 to 10`]
				]],
				[/* parameter */ 'baseDate', [/* parameter description */
					[/* text */ 't', `the base date used to calculate the base value for the range
  of valid values in the parsed chronology, not null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the width or base value is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendZoneId()', [
			[/* method description */
				[/* text */ 't', `Appends the time-zone ID, such as 'Europe/Paris' or '+02:00', to the formatter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This appends an instruction to format/parse the zone ID to the builder.
 The zone ID is obtained in a strict manner suitable for `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `.
 By contrast, `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', ` does not have a zone ID suitable
 for use with this method, see `],
					[/* reference */ 'r', `#appendZoneOrOffsetId()`, `appendZoneOrOffsetId()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 During formatting, the zone is obtained using a mechanism equivalent
 to querying the temporal with `],
					[/* reference */ 'r', `java.time.temporal.TemporalQueries#zoneId()`, `TemporalQueries.zoneId()`],
					[/* text */ 't', `.
 It will be printed using the result of `],
					[/* reference */ 'r', `java.time.ZoneId#getId()`, `ZoneId.getId()`],
					[/* text */ 't', `.
 If the zone cannot be obtained then an exception is thrown unless the
 section of the formatter is optional.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 During parsing, the text must match a known zone or offset.
 There are two types of zone ID, offset-based, such as '+01:30' and
 region-based, such as 'Europe/London'. These are parsed differently.
 If the parse starts with '+', '-', 'UT', 'UTC' or 'GMT', then the parser
 expects an offset-based zone and will not match region-based zones.
 The offset ID, such as '+02:30', may be at the start of the parse,
 or prefixed by  'UT', 'UTC' or 'GMT'. The offset ID parsing is
 equivalent to using `],
					[/* reference */ 'r', `#appendOffset(java.lang.String,java.lang.String)`, `appendOffset(String, String)`],
					[/* text */ 't', ` using the
 arguments 'HH:MM:ss' and the no offset string '0'.
 If the parse starts with 'UT', 'UTC' or 'GMT', and the parser cannot
 match a following offset ID, then `],
					[/* reference */ 'r', `java.time.ZoneOffset#UTC`, `ZoneOffset.UTC`],
					[/* text */ 't', ` is selected.
 In all other cases, the list of known region-based zones is used to
 find the longest available match. If no match is found, and the parse
 starts with 'Z', then `],
					[/* inline code block */ 'i', `ZoneOffset.UTC`],
					[/* text */ 't', ` is selected.
 The parser uses the `],
					[/* reference */ 'r', `#parseCaseInsensitive()`, `case sensitive`],
					[/* text */ 't', ` setting.
 `]
				]],
				[/* block */ 'b', `
 For example, the following will parse:
 `],
				[/* code block */ 'c', `   "Europe/London"           -- ZoneId.of("Europe/London")
   "Z"                       -- ZoneOffset.UTC
   "UT"                      -- ZoneId.of("UT")
   "UTC"                     -- ZoneId.of("UTC")
   "GMT"                     -- ZoneId.of("GMT")
   "+01:30"                  -- ZoneOffset.of("+01:30")
   "UT+01:30"                -- ZoneOffset.of("+01:30")
   "UTC+01:30"               -- ZoneOffset.of("+01:30")
   "GMT+01:30"               -- ZoneOffset.of("+01:30")
 `],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendZoneOrOffsetId()', [
			[/* method description */
				[/* text */ 't', `Appends the time-zone ID, such as 'Europe/Paris' or '+02:00', to
 the formatter, using the best available zone ID.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This appends an instruction to format/parse the best available
 zone or offset ID to the builder.
 The zone ID is obtained in a lenient manner that first attempts to
 find a true zone ID, such as that on `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', `, and
 then attempts to find an offset, such as that on `],
					[/* inline code block */ 'i', `OffsetDateTime`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 During formatting, the zone is obtained using a mechanism equivalent
 to querying the temporal with `],
					[/* reference */ 'r', `java.time.temporal.TemporalQueries#zone()`, `TemporalQueries.zone()`],
					[/* text */ 't', `.
 It will be printed using the result of `],
					[/* reference */ 'r', `java.time.ZoneId#getId()`, `ZoneId.getId()`],
					[/* text */ 't', `.
 If the zone cannot be obtained then an exception is thrown unless the
 section of the formatter is optional.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 During parsing, the text must match a known zone or offset.
 There are two types of zone ID, offset-based, such as '+01:30' and
 region-based, such as 'Europe/London'. These are parsed differently.
 If the parse starts with '+', '-', 'UT', 'UTC' or 'GMT', then the parser
 expects an offset-based zone and will not match region-based zones.
 The offset ID, such as '+02:30', may be at the start of the parse,
 or prefixed by  'UT', 'UTC' or 'GMT'. The offset ID parsing is
 equivalent to using `],
					[/* reference */ 'r', `#appendOffset(java.lang.String,java.lang.String)`, `appendOffset(String, String)`],
					[/* text */ 't', ` using the
 arguments 'HH:MM:ss' and the no offset string '0'.
 If the parse starts with 'UT', 'UTC' or 'GMT', and the parser cannot
 match a following offset ID, then `],
					[/* reference */ 'r', `java.time.ZoneOffset#UTC`, `ZoneOffset.UTC`],
					[/* text */ 't', ` is selected.
 In all other cases, the list of known region-based zones is used to
 find the longest available match. If no match is found, and the parse
 starts with 'Z', then `],
					[/* inline code block */ 'i', `ZoneOffset.UTC`],
					[/* text */ 't', ` is selected.
 The parser uses the `],
					[/* reference */ 'r', `#parseCaseInsensitive()`, `case sensitive`],
					[/* text */ 't', ` setting.
 `]
				]],
				[/* block */ 'b', `
 For example, the following will parse:
 `],
				[/* code block */ 'c', `   "Europe/London"           -- ZoneId.of("Europe/London")
   "Z"                       -- ZoneOffset.UTC
   "UT"                      -- ZoneId.of("UT")
   "UTC"                     -- ZoneId.of("UTC")
   "GMT"                     -- ZoneId.of("GMT")
   "+01:30"                  -- ZoneOffset.of("+01:30")
   "UT+01:30"                -- ZoneOffset.of("UT+01:30")
   "UTC+01:30"               -- ZoneOffset.of("UTC+01:30")
   "GMT+01:30"               -- ZoneOffset.of("GMT+01:30")
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that this method is identical to `],
					[/* inline code block */ 'i', `appendZoneId()`],
					[/* text */ 't', ` except
 in the mechanism used to obtain the zone.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendZoneRegionId()', [
			[/* method description */
				[/* text */ 't', `Appends the time-zone region ID, such as 'Europe/Paris', to the formatter,
 rejecting the zone ID if it is a `],
				[/* inline code block */ 'i', `ZoneOffset`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This appends an instruction to format/parse the zone ID to the builder
 only if it is a region-based ID.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 During formatting, the zone is obtained using a mechanism equivalent
 to querying the temporal with `],
					[/* reference */ 'r', `java.time.temporal.TemporalQueries#zoneId()`, `TemporalQueries.zoneId()`],
					[/* text */ 't', `.
 If the zone is a `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` or it cannot be obtained then
 an exception is thrown unless the section of the formatter is optional.
 If the zone is not an offset, then the zone will be printed using
 the zone ID from `],
					[/* reference */ 'r', `java.time.ZoneId#getId()`, `ZoneId.getId()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 During parsing, the text must match a known zone or offset.
 There are two types of zone ID, offset-based, such as '+01:30' and
 region-based, such as 'Europe/London'. These are parsed differently.
 If the parse starts with '+', '-', 'UT', 'UTC' or 'GMT', then the parser
 expects an offset-based zone and will not match region-based zones.
 The offset ID, such as '+02:30', may be at the start of the parse,
 or prefixed by  'UT', 'UTC' or 'GMT'. The offset ID parsing is
 equivalent to using `],
					[/* reference */ 'r', `#appendOffset(java.lang.String,java.lang.String)`, `appendOffset(String, String)`],
					[/* text */ 't', ` using the
 arguments 'HH:MM:ss' and the no offset string '0'.
 If the parse starts with 'UT', 'UTC' or 'GMT', and the parser cannot
 match a following offset ID, then `],
					[/* reference */ 'r', `java.time.ZoneOffset#UTC`, `ZoneOffset.UTC`],
					[/* text */ 't', ` is selected.
 In all other cases, the list of known region-based zones is used to
 find the longest available match. If no match is found, and the parse
 starts with 'Z', then `],
					[/* inline code block */ 'i', `ZoneOffset.UTC`],
					[/* text */ 't', ` is selected.
 The parser uses the `],
					[/* reference */ 'r', `#parseCaseInsensitive()`, `case sensitive`],
					[/* text */ 't', ` setting.
 `]
				]],
				[/* block */ 'b', `
 For example, the following will parse:
 `],
				[/* code block */ 'c', `   "Europe/London"           -- ZoneId.of("Europe/London")
   "Z"                       -- ZoneOffset.UTC
   "UT"                      -- ZoneId.of("UT")
   "UTC"                     -- ZoneId.of("UTC")
   "GMT"                     -- ZoneId.of("GMT")
   "+01:30"                  -- ZoneOffset.of("+01:30")
   "UT+01:30"                -- ZoneOffset.of("+01:30")
   "UTC+01:30"               -- ZoneOffset.of("+01:30")
   "GMT+01:30"               -- ZoneOffset.of("+01:30")
 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 Note that this method is identical to `],
					[/* inline code block */ 'i', `appendZoneId()`],
					[/* text */ 't', ` except
 in the mechanism used to obtain the zone.
 Note also that parsing accepts offsets, whereas formatting will never
 produce one.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendZoneText(java.time.format.TextStyle)', [
			[/* method description */
				[/* text */ 't', `Appends the time-zone name, such as 'British Summer Time', to the formatter.
 `],
				[/* block */ 'b', `
 This appends an instruction to format/parse the textual name of the zone to
 the builder.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 During formatting, the zone is obtained using a mechanism equivalent
 to querying the temporal with `],
					[/* reference */ 'r', `java.time.temporal.TemporalQueries#zoneId()`, `TemporalQueries.zoneId()`],
					[/* text */ 't', `.
 If the zone is a `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` it will be printed using the
 result of `],
					[/* reference */ 'r', `java.time.ZoneOffset#getId()`, `ZoneOffset.getId()`],
					[/* text */ 't', `.
 If the zone is not an offset, the textual name will be looked up
 for the locale set in the `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatter`, `DateTimeFormatter`],
					[/* text */ 't', `.
 If the temporal object being printed represents an instant, or if it is a
 local date-time that is not in a daylight saving gap or overlap then
 the text will be the summer or winter time text as appropriate.
 If the lookup for text does not find any suitable result, then the
 `],
					[/* reference */ 'r', `java.time.ZoneId#getId()`, `ID`],
					[/* text */ 't', ` will be printed.
 If the zone cannot be obtained then an exception is thrown unless the
 section of the formatter is optional.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 During parsing, either the textual zone name, the zone ID or the offset
 is accepted. Many textual zone names are not unique, such as CST can be
 for both "Central Standard Time" and "China Standard Time". In this
 situation, the zone id will be determined by the region information from
 formatter's  `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatter#getLocale()`, `locale`],
					[/* text */ 't', ` and the standard
 zone id for that area, for example, America/New_York for the America Eastern
 zone. The `],
					[/* reference */ 'r', `#appendZoneText(java.time.format.TextStyle,java.util.Set)`, `appendZoneText(TextStyle, Set)`],
					[/* text */ 't', ` may be used
 to specify a set of preferred `],
					[/* reference */ 'r', `java.time.ZoneId`, `ZoneId`],
					[/* text */ 't', ` in this situation.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'textStyle', [/* parameter description */
					[/* text */ 't', `the text style to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'appendZoneText(java.time.format.TextStyle,java.util.Set)', [
			[/* method description */
				[/* text */ 't', `Appends the time-zone name, such as 'British Summer Time', to the formatter.
 `],
				[/* block */ 'b', `
 This appends an instruction to format/parse the textual name of the zone to
 the builder.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 During formatting, the zone is obtained using a mechanism equivalent
 to querying the temporal with `],
					[/* reference */ 'r', `java.time.temporal.TemporalQueries#zoneId()`, `TemporalQueries.zoneId()`],
					[/* text */ 't', `.
 If the zone is a `],
					[/* inline code block */ 'i', `ZoneOffset`],
					[/* text */ 't', ` it will be printed using the
 result of `],
					[/* reference */ 'r', `java.time.ZoneOffset#getId()`, `ZoneOffset.getId()`],
					[/* text */ 't', `.
 If the zone is not an offset, the textual name will be looked up
 for the locale set in the `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatter`, `DateTimeFormatter`],
					[/* text */ 't', `.
 If the temporal object being printed represents an instant, or if it is a
 local date-time that is not in a daylight saving gap or overlap, then the text
 will be the summer or winter time text as appropriate.
 If the lookup for text does not find any suitable result, then the
 `],
					[/* reference */ 'r', `java.time.ZoneId#getId()`, `ID`],
					[/* text */ 't', ` will be printed.
 If the zone cannot be obtained then an exception is thrown unless the
 section of the formatter is optional.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 During parsing, either the textual zone name, the zone ID or the offset
 is accepted. Many textual zone names are not unique, such as CST can be
 for both "Central Standard Time" and "China Standard Time". In this
 situation, the zone id will be determined by the region information from
 formatter's  `],
					[/* reference */ 'r', `java.time.format.DateTimeFormatter#getLocale()`, `locale`],
					[/* text */ 't', ` and the standard
 zone id for that area, for example, America/New_York for the America Eastern
 zone. This method also allows a set of preferred `],
					[/* reference */ 'r', `java.time.ZoneId`, `ZoneId`],
					[/* text */ 't', ` to be
 specified for parsing. The matched preferred zone id will be used if the
 textural zone name being parsed is not unique.
 `]
				]],
				[/* block */ 'b', `
 If the zone cannot be parsed then an exception is thrown unless the
 section of the formatter is optional.`]
			],
			[/* parameters */
				[/* parameter */ 'textStyle', [/* parameter description */
					[/* text */ 't', `the text style to use, not null`]
				]],
				[/* parameter */ 'preferredZones', [/* parameter description */
					[/* text */ 't', `the set of preferred zone ids, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'optionalEnd()', [
			[/* method description */
				[/* text */ 't', `Ends an optional section.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The output of formatting can include optional sections, which may be nested.
 An optional section is started by calling `],
					[/* reference */ 'r', `#optionalStart()`, `optionalStart()`],
					[/* text */ 't', ` and ended
 using this method (or at the end of the builder).
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Calling this method without having previously called `],
					[/* inline code block */ 'i', `optionalStart`],
					[/* text */ 't', `
 will throw an exception.
 Calling this method immediately after calling `],
					[/* inline code block */ 'i', `optionalStart`],
					[/* text */ 't', ` has no effect
 on the formatter other than ending the (empty) optional section.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 All elements in the optional section are treated as optional.
 During formatting, the section is only output if data is available in the
 `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` for all the elements in the section.
 During parsing, the whole section may be missing from the parsed string.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For example, consider a builder setup as
 `],
					[/* inline code block */ 'i', `builder.appendValue(HOUR_OF_DAY,2).optionalStart().appendValue(MINUTE_OF_HOUR,2).optionalEnd()`],
					[/* text */ 't', `.
 During formatting, the minute will only be output if its value can be obtained from the date-time.
 During parsing, the input will be successfully parsed whether the minute is present or not.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if there was no previous call to `],
					[/* inline code block */ 'i', `optionalStart`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'optionalStart()', [
			[/* method description */
				[/* text */ 't', `Mark the start of an optional section.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The output of formatting can include optional sections, which may be nested.
 An optional section is started by calling this method and ended by calling
 `],
					[/* reference */ 'r', `#optionalEnd()`, `optionalEnd()`],
					[/* text */ 't', ` or by ending the build process.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 All elements in the optional section are treated as optional.
 During formatting, the section is only output if data is available in the
 `],
					[/* inline code block */ 'i', `TemporalAccessor`],
					[/* text */ 't', ` for all the elements in the section.
 During parsing, the whole section may be missing from the parsed string.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For example, consider a builder setup as
 `],
					[/* inline code block */ 'i', `builder.appendValue(HOUR_OF_DAY,2).optionalStart().appendValue(MINUTE_OF_HOUR,2)`],
					[/* text */ 't', `.
 The optional section ends automatically at the end of the builder.
 During formatting, the minute will only be output if its value can be obtained from the date-time.
 During parsing, the input will be successfully parsed whether the minute is present or not.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'padNext(int)', [
			[/* method description */
				[/* text */ 't', `Causes the next added printer/parser to pad to a fixed width using a space.
 `],
				[/* block */ 'b', `
 This padding will pad to a fixed width using spaces.
 `],
				[/* block */ 'b', `
 During formatting, the decorated element will be output and then padded
 to the specified width. An exception will be thrown during formatting if
 the pad width is exceeded.
 `],
				[/* block */ 'b', `
 During parsing, the padding and decorated element are parsed.
 If parsing is lenient, then the pad width is treated as a maximum.
 The padding is parsed greedily. Thus, if the decorated element starts with
 the pad character, it will not be parsed.`]
			],
			[/* parameters */
				[/* parameter */ 'padWidth', [/* parameter description */
					[/* text */ 't', `the pad width, 1 or greater`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if pad width is too small`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'padNext(int,char)', [
			[/* method description */
				[/* text */ 't', `Causes the next added printer/parser to pad to a fixed width.
 `],
				[/* block */ 'b', `
 This padding is intended for padding other than zero-padding.
 Zero-padding should be achieved using the appendValue methods.
 `],
				[/* block */ 'b', `
 During formatting, the decorated element will be output and then padded
 to the specified width. An exception will be thrown during formatting if
 the pad width is exceeded.
 `],
				[/* block */ 'b', `
 During parsing, the padding and decorated element are parsed.
 If parsing is lenient, then the pad width is treated as a maximum.
 If parsing is case insensitive, then the pad character is matched ignoring case.
 The padding is parsed greedily. Thus, if the decorated element starts with
 the pad character, it will not be parsed.`]
			],
			[/* parameters */
				[/* parameter */ 'padWidth', [/* parameter description */
					[/* text */ 't', `the pad width, 1 or greater`]
				]],
				[/* parameter */ 'padChar', [/* parameter description */
					[/* text */ 't', `the pad character`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if pad width is too small`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'parseCaseInsensitive()', [
			[/* method description */
				[/* text */ 't', `Changes the parse style to be case insensitive for the remainder of the formatter.
 `],
				[/* block */ 'b', `
 Parsing can be case sensitive or insensitive - by default it is case sensitive.
 This method allows the case sensitivity setting of parsing to be changed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Calling this method changes the state of the builder such that all
 subsequent builder method calls will parse text in case insensitive mode.
 See `],
					[/* reference */ 'r', `#parseCaseSensitive()`, `parseCaseSensitive()`],
					[/* text */ 't', ` for the opposite setting.
 The parse case sensitive/insensitive methods may be called at any point
 in the builder, thus the parser can swap between case parsing modes
 multiple times during the parse.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'parseCaseSensitive()', [
			[/* method description */
				[/* text */ 't', `Changes the parse style to be case sensitive for the remainder of the formatter.
 `],
				[/* block */ 'b', `
 Parsing can be case sensitive or insensitive - by default it is case sensitive.
 This method allows the case sensitivity setting of parsing to be changed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Calling this method changes the state of the builder such that all
 subsequent builder method calls will parse text in case sensitive mode.
 See `],
					[/* reference */ 'r', `#parseCaseInsensitive()`, `parseCaseInsensitive()`],
					[/* text */ 't', ` for the opposite setting.
 The parse case sensitive/insensitive methods may be called at any point
 in the builder, thus the parser can swap between case parsing modes
 multiple times during the parse.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Since the default is case sensitive, this method should only be used after
 a previous call to `],
					[/* inline code block */ 'i', `#parseCaseInsensitive`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'parseDefaulting(java.time.temporal.TemporalField,long)', [
			[/* method description */
				[/* text */ 't', `Appends a default value for a field to the formatter for use in parsing.
 `],
				[/* block */ 'b', `
 This appends an instruction to the builder to inject a default value
 into the parsed result. This is especially useful in conjunction with
 optional parts of the formatter.
 `],
				[/* block */ 'b', `
 For example, consider a formatter that parses the year, followed by
 an optional month, with a further optional day-of-month. Using such a
 formatter would require the calling code to check whether a full date,
 year-month or just a year had been parsed. This method can be used to
 default the month and day-of-month to a sensible value, such as the
 first of the month, allowing the calling code to always get a date.
 `],
				[/* block */ 'b', `
 During formatting, this method has no effect.
 `],
				[/* block */ 'b', `
 During parsing, the current state of the parse is inspected.
 If the specified field has no associated value, because it has not been
 parsed successfully at that point, then the specified value is injected
 into the parse result. Injection is immediate, thus the field-value pair
 will be visible to any subsequent elements in the formatter.
 As such, this method is normally called at the end of the builder.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the field to default the value of, not null`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value to default the field to`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'parseLenient()', [
			[/* method description */
				[/* text */ 't', `Changes the parse style to be lenient for the remainder of the formatter.
 Note that case sensitivity is set separately to this method.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Parsing can be strict or lenient - by default it is strict.
 This controls the degree of flexibility in matching the text and sign styles.
 Applications calling this method should typically also call `],
					[/* reference */ 'r', `#parseCaseInsensitive()`, `parseCaseInsensitive()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 When used, this method changes the parsing to be lenient from this point onwards.
 The change will remain in force until the end of the formatter that is eventually
 constructed or until `],
					[/* inline code block */ 'i', `parseStrict`],
					[/* text */ 't', ` is called.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'parseStrict()', [
			[/* method description */
				[/* text */ 't', `Changes the parse style to be strict for the remainder of the formatter.
 `],
				[/* block */ 'b', `
 Parsing can be strict or lenient - by default it is strict.
 This controls the degree of flexibility in matching the text and sign styles.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 When used, this method changes the parsing to be strict from this point onwards.
 As strict is the default, this is normally only needed after calling `],
					[/* reference */ 'r', `#parseLenient()`, `parseLenient()`],
					[/* text */ 't', `.
 The change will remain in force until the end of the formatter that is eventually
 constructed or until `],
					[/* inline code block */ 'i', `parseLenient`],
					[/* text */ 't', ` is called.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this, for chaining, not null`]
			]
		]],
		[/* method */ 'getLocalizedDateTimePattern(java.time.format.FormatStyle,java.time.format.FormatStyle,java.time.chrono.Chronology,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Gets the formatting pattern for date and time styles for a locale and chronology.
 The locale and chronology are used to lookup the locale specific format
 for the requested dateStyle and/or timeStyle.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the locale contains the "rg" (region override)
 `],
					[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode extensions`],
					[/* text */ 't', `,
 the formatting pattern is overridden with the one appropriate for the region.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dateStyle', [/* parameter description */
					[/* text */ 't', `the FormatStyle for the date, null for time-only pattern`]
				]],
				[/* parameter */ 'timeStyle', [/* parameter description */
					[/* text */ 't', `the FormatStyle for the time, null for date-only pattern`]
				]],
				[/* parameter */ 'chrono', [/* parameter description */
					[/* text */ 't', `the Chronology, non-null`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale, non-null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if both dateStyle and timeStyle are null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the locale and Chronology specific formatting pattern`]
			]
		]]
	],
]);
