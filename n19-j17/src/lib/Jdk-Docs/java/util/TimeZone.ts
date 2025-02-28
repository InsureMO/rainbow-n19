import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.TimeZone', [
	[/* class description */
		[/* inline code block */ 'i', `TimeZone`],
		[/* text */ 't', ` represents a time zone offset, and also figures out daylight
 savings.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Typically, you get a `],
			[/* inline code block */ 'i', `TimeZone`],
			[/* text */ 't', ` using `],
			[/* inline code block */ 'i', `getDefault`],
			[/* text */ 't', `
 which creates a `],
			[/* inline code block */ 'i', `TimeZone`],
			[/* text */ 't', ` based on the time zone where the program
 is running. For example, for a program running in Japan, `],
			[/* inline code block */ 'i', `getDefault`],
			[/* text */ 't', `
 creates a `],
			[/* inline code block */ 'i', `TimeZone`],
			[/* text */ 't', ` object based on Japanese Standard Time.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 You can also get a `],
			[/* inline code block */ 'i', `TimeZone`],
			[/* text */ 't', ` using `],
			[/* inline code block */ 'i', `getTimeZone`],
			[/* text */ 't', `
 along with a time zone ID. For instance, the time zone ID for the
 U.S. Pacific Time zone is "America/Los_Angeles". So, you can get a
 U.S. Pacific Time `],
			[/* inline code block */ 'i', `TimeZone`],
			[/* text */ 't', ` object with:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', ` TimeZone tz = TimeZone.getTimeZone("America/Los_Angeles");
 `]
		]],
		[/* text */ 't', `
 You can use the `],
		[/* inline code block */ 'i', `getAvailableIDs`],
		[/* text */ 't', ` method to iterate through
 all the supported time zone IDs. You can then choose a
 supported ID to get a `],
		[/* inline code block */ 'i', `TimeZone`],
		[/* text */ 't', `.
 If the time zone you want is not represented by one of the
 supported IDs, then a custom time zone ID can be specified to
 produce a TimeZone. The syntax of a custom time zone ID is:

 `],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* text */ 't', `CustomID:`],
				[/* inline code block */ 'i', `GMT`],
				[/* text */ 't', `Sign`],
				[/* text */ 't', `Hours`],
				[/* inline code block */ 'i', `:`],
				[/* text */ 't', `Minutes`],
				[/* inline code block */ 'i', `GMT`],
				[/* text */ 't', `Sign`],
				[/* text */ 't', `Hours`],
				[/* text */ 't', `Minutes`],
				[/* inline code block */ 'i', `GMT`],
				[/* text */ 't', `Sign`],
				[/* text */ 't', `Hours`],
				[/* text */ 't', `Sign:`],
				[/* text */ 't', ` one of
         `],
				[/* inline code block */ 'i', `+ -`],
				[/* text */ 't', `Hours:`],
				[/* text */ 't', `Digit`],
				[/* text */ 't', `Digit`],
				[/* text */ 't', `Digit`],
				[/* text */ 't', `Minutes:`],
				[/* text */ 't', `Digit`],
				[/* text */ 't', `Digit`],
				[/* text */ 't', `Digit:`],
				[/* text */ 't', ` one of
         `],
				[/* inline code block */ 'i', `0 1 2 3 4 5 6 7 8 9`]
			]]
		]],
		[/* text */ 't', `Hours`],
		[/* text */ 't', ` must be between 0 to 23 and `],
		[/* text */ 't', `Minutes`],
		[/* text */ 't', ` must be
 between 00 to 59.  For example, "GMT+10" and "GMT+0010" mean ten
 hours and ten minutes ahead of GMT, respectively.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The format is locale independent and digits must be taken from the
 Basic Latin block of the Unicode standard. No daylight saving time
 transition schedule can be specified with a custom time zone ID. If
 the specified string doesn't match the syntax, `],
			[/* inline code block */ 'i', `"GMT"`],
			[/* text */ 't', `
 is used.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 When creating a `],
			[/* inline code block */ 'i', `TimeZone`],
			[/* text */ 't', `, the specified custom time
 zone ID is normalized in the following syntax:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', [
				[/* text */ 't', `NormalizedCustomID:`],
				[/* inline code block */ 'i', `GMT`],
				[/* text */ 't', `Sign`],
				[/* text */ 't', `TwoDigitHours`],
				[/* inline code block */ 'i', `:`],
				[/* text */ 't', `Minutes`],
				[/* text */ 't', `Sign:`],
				[/* text */ 't', ` one of
         `],
				[/* inline code block */ 'i', `+ -`],
				[/* text */ 't', `TwoDigitHours:`],
				[/* text */ 't', `Digit`],
				[/* text */ 't', `Digit`],
				[/* text */ 't', `Minutes:`],
				[/* text */ 't', `Digit`],
				[/* text */ 't', `Digit`],
				[/* text */ 't', `Digit:`],
				[/* text */ 't', ` one of
         `],
				[/* inline code block */ 'i', `0 1 2 3 4 5 6 7 8 9`]
			]]
		]],
		[/* text */ 't', `
 For example, TimeZone.getTimeZone("GMT-8").getID() returns "GMT-08:00".

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Three-letter time zone IDs`],
		[/* text */ 't', `

 For compatibility with JDK 1.1.x, some other three-letter time zone IDs
 (such as "PST", "CTT", "AST") are also supported. However, `],
		[/* text */ 't', `their
 use is deprecated`],
		[/* text */ 't', ` because the same abbreviation is often used
 for multiple time zones (for example, "CST" could be U.S. "Central Standard
 Time" and "China Standard Time"), and the Java platform can then only
 recognize one of them.`]
	],
	[/* fields */
		[/* field */ 'SHORT', [
			[/* field description */
				[/* text */ 't', `A style specifier for `],
				[/* inline code block */ 'i', `getDisplayName()`],
				[/* text */ 't', ` indicating
 a short name, such as "PST."`]
			],
		]],
		[/* field */ 'LONG', [
			[/* field description */
				[/* text */ 't', `A style specifier for `],
				[/* inline code block */ 'i', `getDisplayName()`],
				[/* text */ 't', ` indicating
 a long name, such as "Pacific Standard Time."`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Sole constructor.  (For invocation by subclass constructors, typically
 implicit.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Creates a copy of this `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this `],
				[/* inline code block */ 'i', `TimeZone`]
			]
		]],
		[/* method */ 'getDefault()', [
			[/* method description */
				[/* text */ 't', `Gets the default `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` of the Java virtual machine. If the
 cached default `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` is available, its clone is returned.
 Otherwise, the method takes the following steps to determine the default
 time zone.

 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Use the `],
						[/* inline code block */ 'i', `user.timezone`],
						[/* text */ 't', ` property value as the default
 time zone ID if it's available.`]
					]],
					[/* block */ 'b', `Detect the platform time zone ID. The source of the
 platform time zone and ID mapping may vary with implementation.`],
					[/* block */ 'b', [
						[/* text */ 't', `Use `],
						[/* inline code block */ 'i', `GMT`],
						[/* text */ 't', ` as the last resort if the given or detected
 time zone ID is unknown.`]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The default `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` created from the ID is cached,
 and its clone is returned. The `],
					[/* inline code block */ 'i', `user.timezone`],
					[/* text */ 't', ` property
 value is set to the ID upon return.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the default `],
				[/* inline code block */ 'i', `TimeZone`]
			]
		]],
		[/* method */ 'getOffset(int,int,int,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Gets the time zone offset, for current date, modified in case of
 daylight savings. This is the offset to add to UTC to get local time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method returns a historically correct offset if an
 underlying `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` implementation subclass
 supports historical Daylight Saving Time schedule and GMT
 offset changes.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'era', [/* parameter description */
					[/* text */ 't', `the era of the given date.`]
				]],
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the year in the given date.`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the month in the given date.
 Month is 0-based. e.g., 0 for January.`]
				]],
				[/* parameter */ 'day', [/* parameter description */
					[/* text */ 't', `the day-in-month of the given date.`]
				]],
				[/* parameter */ 'dayOfWeek', [/* parameter description */
					[/* text */ 't', `the day-of-week of the given date.`]
				]],
				[/* parameter */ 'milliseconds', [/* parameter description */
					[/* text */ 't', `the milliseconds in day in `],
					[/* text */ 't', `standard`],
					[/* text */ 't', `
 local time.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the offset in milliseconds to add to GMT to get local time.`]
			]
		]],
		[/* method */ 'getOffset(long)', [
			[/* method description */
				[/* text */ 't', `Returns the offset of this time zone from UTC at the specified
 date. If Daylight Saving Time is in effect at the specified
 date, the offset value is adjusted with the amount of daylight
 saving.
 `],
				[/* block */ 'b', `
 This method returns a historically correct offset value if an
 underlying TimeZone implementation subclass supports historical
 Daylight Saving Time schedule and GMT offset changes.`]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the date represented in milliseconds since January 1, 1970 00:00:00 GMT`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the amount of time in milliseconds to add to UTC to get local time.`]
			]
		]],
		[/* method */ 'getDisplayName()', [
			[/* method description */
				[/* text */ 't', `Returns a long standard time name of this `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` suitable for
 presentation to the user in the default locale.

 `],
				[/* block */ 'b', `This method is equivalent to:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* text */ 't', ` getDisplayName(false, `],
						[/* text */ 't', `LONG`],
						[/* text */ 't', `,
                Locale.getDefault(`],
						[/* external link */ 'a', `Locale.Category.html#DISPLAY`, `Locale.Category.DISPLAY`],
						[/* text */ 't', `))
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the human-readable name of this time zone in the default locale.`]
			]
		]],
		[/* method */ 'getDisplayName(boolean,int,java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a name in the specified `],
				[/* inline code block */ 'i', `style`],
				[/* text */ 't', ` of this `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', `
 suitable for presentation to the user in the specified `],
				[/* inline code block */ 'i', `locale`],
				[/* text */ 't', `. If the specified `],
				[/* inline code block */ 'i', `daylight`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, a Daylight
 Saving Time name is returned (even if this `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` doesn't
 observe Daylight Saving Time). Otherwise, a Standard Time name is
 returned.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `When looking up a time zone name, the `],
					[/* external link */ 'a', `ResourceBundle.Control.html#getCandidateLocales(java.lang.String,java.util.Locale)`, `default Locale search path of ResourceBundle`],
					[/* text */ 't', ` derived
 from the specified `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is used. (No `],
					[/* external link */ 'a', `ResourceBundle.Control.html#getFallbackLocale(java.lang.String,java.util.Locale)`, `fallback Locale`],
					[/* text */ 't', ` search is performed.) If a time zone name in any
 `],
					[/* inline code block */ 'i', `Locale`],
					[/* text */ 't', ` of the search path, including `],
					[/* external link */ 'a', `Locale.html#ROOT`, `Locale.ROOT`],
					[/* text */ 't', `, is
 found, the name is returned. Otherwise, a string in the
 `],
					[/* text */ 't', `normalized custom ID format`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'daylight', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` specifying a Daylight Saving Time name, or
                 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` specifying a Standard Time name`]
				]],
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `either `],
					[/* text */ 't', `LONG`],
					[/* text */ 't', ` or `],
					[/* text */ 't', `SHORT`]
				]],
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale in which to supply the display name.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `style`],
					[/* text */ 't', ` is invalid.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the human-readable name of this time zone in the given locale.`]
			]
		]],
		[/* method */ 'getDisplayName(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a long standard time name of this `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` suitable for
 presentation to the user in the specified `],
				[/* inline code block */ 'i', `locale`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `This method is equivalent to:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* text */ 't', ` getDisplayName(false, `],
						[/* text */ 't', `LONG`],
						[/* text */ 't', `, locale)
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale in which to supply the display name.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the human-readable name of this time zone in the given locale.`]
			]
		]],
		[/* method */ 'getDisplayName(boolean,int)', [
			[/* method description */
				[/* text */ 't', `Returns a name in the specified `],
				[/* inline code block */ 'i', `style`],
				[/* text */ 't', ` of this `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', `
 suitable for presentation to the user in the default locale. If the
 specified `],
				[/* inline code block */ 'i', `daylight`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, a Daylight Saving Time name
 is returned (even if this `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` doesn't observe Daylight Saving
 Time). Otherwise, a Standard Time name is returned.

 `],
				[/* block */ 'b', `This method is equivalent to:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', [
						[/* text */ 't', ` getDisplayName(daylight, style,
                Locale.getDefault(`],
						[/* external link */ 'a', `Locale.Category.html#DISPLAY`, `Locale.Category.DISPLAY`],
						[/* text */ 't', `))
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'daylight', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` specifying a Daylight Saving Time name, or
                 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` specifying a Standard Time name`]
				]],
				[/* parameter */ 'style', [/* parameter description */
					[/* text */ 't', `either `],
					[/* text */ 't', `LONG`],
					[/* text */ 't', ` or `],
					[/* text */ 't', `SHORT`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `style`],
					[/* text */ 't', ` is invalid.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the human-readable name of this time zone in the default locale.`]
			]
		]],
		[/* method */ 'setDefault(java.util.TimeZone)', [
			[/* method description */
				[/* text */ 't', `Sets the `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` that is returned by the `],
				[/* inline code block */ 'i', `getDefault`],
				[/* text */ 't', `
 method. `],
				[/* inline code block */ 'i', `zone`],
				[/* text */ 't', ` is cached. If `],
				[/* inline code block */ 'i', `zone`],
				[/* text */ 't', ` is null, the cached
 default `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` is cleared. This method doesn't change the value
 of the `],
				[/* inline code block */ 'i', `user.timezone`],
				[/* text */ 't', ` property.`]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the new default `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', `, or null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the security manager's `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', `
                           denies `],
					[/* inline code block */ 'i', `PropertyPermission("user.timezone", "write")`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'getID()', [
			[/* method description */
				[/* text */ 't', `Gets the ID of this time zone.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ID of this time zone.`]
			]
		]],
		[/* method */ 'toZoneId()', [
			[/* method description */
				[/* text */ 't', `Converts this `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` object to a `],
				[/* inline code block */ 'i', `ZoneId`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `ZoneId`],
				[/* text */ 't', ` representing the same time zone as this
         `],
				[/* inline code block */ 'i', `TimeZone`]
			]
		]],
		[/* method */ 'getTimeZone(java.time.ZoneId)', [
			[/* method description */
				[/* text */ 't', `Gets the `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` for the given `],
				[/* inline code block */ 'i', `zoneId`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'zoneId', [/* parameter description */
					[/* text */ 't', `a `],
					[/* reference */ 'r', `java.time.ZoneId`],
					[/* text */ 't', ` from which the time zone ID is obtained`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `zoneId`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the specified `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', `, or the GMT zone if the given ID
         cannot be understood.`]
			]
		]],
		[/* method */ 'getTimeZone(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Gets the `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` for the given ID.`]
			],
			[/* parameters */
				[/* parameter */ 'ID', [/* parameter description */
					[/* text */ 't', `the ID for a `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', `, either an abbreviation
 such as "PST", a full name such as "America/Los_Angeles", or a custom
 ID such as "GMT-8:00". Note that the support of abbreviations is
 for JDK 1.1.x compatibility only and full names should be used.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the specified `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', `, or the GMT zone if the given ID
 cannot be understood.`]
			]
		]],
		[/* method */ 'getDSTSavings()', [
			[/* method description */
				[/* text */ 't', `Returns the amount of time to be added to local standard time
 to get local wall clock time.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation returns 3600000 milliseconds
 (i.e., one hour) if a call to `],
					[/* reference */ 'r', `useDaylightTime()`],
					[/* text */ 't', `
 returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `. Otherwise, 0 (zero) is returned.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If an underlying `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` implementation subclass
 supports historical and future Daylight Saving Time schedule
 changes, this method returns the amount of saving time of the
 last known Daylight Saving Time rule that can be a future
 prediction.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the amount of saving time at any given time stamp is
 required, construct a `],
					[/* reference */ 'r', `java.util.Calendar`],
					[/* text */ 't', ` with this `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` and the time stamp, and call `],
					[/* external link */ 'a', `Calendar.html#get(int)`, `Calendar.get`],
					[/* inline code block */ 'i', `(`],
					[/* external link */ 'a', `Calendar.html#DST_OFFSET`, `Calendar.DST_OFFSET`],
					[/* inline code block */ 'i', `)`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the amount of saving time in milliseconds`]
			]
		]],
		[/* method */ 'hasSameRules(java.util.TimeZone)', [
			[/* method description */
				[/* text */ 't', `Returns true if this zone has the same rule and offset as another zone.
 That is, if this zone differs only in ID, if at all.  Returns false
 if the other zone is null.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` object to be compared with`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the other zone is not null and is the same as this one,
 with the possible exception of the ID`]
			]
		]],
		[/* method */ 'getRawOffset()', [
			[/* method description */
				[/* text */ 't', `Returns the amount of time in milliseconds to add to UTC to get
 standard time in this time zone. Because this value is not
 affected by daylight saving time, it is called `],
				[/* text */ 't', `raw
 offset`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If an underlying `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` implementation subclass
 supports historical GMT offset changes, the method returns the
 raw offset value of the current date. In Honolulu, for example,
 its raw offset changed from GMT-10:30 to GMT-10:00 in 1947, and
 this method always returns -36000000 milliseconds (i.e., -10
 hours).`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the amount of raw offset time in milliseconds to add to UTC.`]
			]
		]],
		[/* method */ 'inDaylightTime(java.util.Date)', [
			[/* method description */
				[/* text */ 't', `Queries if the given `],
				[/* inline code block */ 'i', `date`],
				[/* text */ 't', ` is in Daylight Saving Time in
 this time zone.`]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the given Date.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given date is in Daylight Saving Time,
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `, otherwise.`]
			]
		]],
		[/* method */ 'useDaylightTime()', [
			[/* method description */
				[/* text */ 't', `Queries if this `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` uses Daylight Saving Time.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If an underlying `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` implementation subclass
 supports historical and future Daylight Saving Time schedule
 changes, this method refers to the last known Daylight Saving Time
 rule that can be a future prediction and may not be the same as
 the current rule. Consider calling `],
					[/* reference */ 'r', `observesDaylightTime()`],
					[/* text */ 't', `
 if the current rule should also be taken into account.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` uses Daylight Saving Time,
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `, otherwise.`]
			]
		]],
		[/* method */ 'getAvailableIDs(int)', [
			[/* method description */
				[/* text */ 't', `Gets the available IDs according to the given time zone offset in milliseconds.`]
			],
			[/* parameters */
				[/* parameter */ 'rawOffset', [/* parameter description */
					[/* text */ 't', `the given time zone GMT offset in milliseconds.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array of IDs, where the time zone for that ID has
 the specified GMT offset. For example, "America/Phoenix" and "America/Denver"
 both have GMT-07:00, but differ in daylight saving behavior.`]
			]
		]],
		[/* method */ 'getAvailableIDs()', [
			[/* method description */
				[/* text */ 't', `Gets all the available IDs supported.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array of IDs.`]
			]
		]],
		[/* method */ 'setID(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the time zone ID. This does not change any other data in
 the time zone object.`]
			],
			[/* parameters */
				[/* parameter */ 'ID', [/* parameter description */
					[/* text */ 't', `the new time zone ID.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setRawOffset(int)', [
			[/* method description */
				[/* text */ 't', `Sets the base time zone offset to GMT.
 This is the offset to add to UTC to get local time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If an underlying `],
					[/* inline code block */ 'i', `TimeZone`],
					[/* text */ 't', ` implementation subclass
 supports historical GMT offset changes, the specified GMT
 offset is set as the latest GMT offset and the difference from
 the known latest GMT offset value is used to adjust all
 historical GMT offset values.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'offsetMillis', [/* parameter description */
					[/* text */ 't', `the given base time zone offset to GMT.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'observesDaylightTime()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` is currently in
 Daylight Saving Time, or if a transition from Standard Time to
 Daylight Saving Time occurs at any future time.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if
 `],
					[/* inline code block */ 'i', `useDaylightTime()`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `inDaylightTime(new Date())`],
					[/* text */ 't', `
 returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `TimeZone`],
				[/* text */ 't', ` is currently in
 Daylight Saving Time, or if a transition from Standard Time to
 Daylight Saving Time occurs at any future time; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `
 otherwise.`]
			]
		]]
	],
]);
