import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.WeekFields', [
	[/* class description */
		[/* text */ 't', `Localized definitions of the day-of-week, week-of-month and week-of-year fields.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 A standard week is seven days long, but cultures have different definitions for some
 other aspects of a week. This class represents the definition of the week, for the
 purpose of providing `],
			[/* reference */ 'r', `java.time.temporal.TemporalField`, `TemporalField`],
			[/* text */ 't', ` instances.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 WeekFields provides five fields,
 `],
			[/* reference */ 'r', `#dayOfWeek()`, `dayOfWeek()`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#weekOfMonth()`, `weekOfMonth()`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `#weekOfYear()`, `weekOfYear()`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `#weekOfWeekBasedYear()`, `weekOfWeekBasedYear()`],
			[/* text */ 't', `, and `],
			[/* reference */ 'r', `#weekBasedYear()`, `weekBasedYear()`],
			[/* text */ 't', `
 that provide access to the values from any `],
			[/* reference */ 'r', `java.time.temporal.Temporal`, `temporal object`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The computations for day-of-week, week-of-month, and week-of-year are based
 on the  `],
			[/* reference */ 'r', `java.time.temporal.ChronoField#YEAR`, `proleptic-year`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `java.time.temporal.ChronoField#MONTH_OF_YEAR`, `month-of-year`],
			[/* text */ 't', `,
 `],
			[/* reference */ 'r', `java.time.temporal.ChronoField#DAY_OF_MONTH`, `day-of-month`],
			[/* text */ 't', `, and
 `],
			[/* reference */ 'r', `java.time.temporal.ChronoField#DAY_OF_WEEK`, `ISO day-of-week`],
			[/* text */ 't', ` which are based on the
 `],
			[/* reference */ 'r', `java.time.temporal.ChronoField#EPOCH_DAY`, `epoch-day`],
			[/* text */ 't', ` and the chronology.
 The values may not be aligned with the `],
			[/* reference */ 'r', `java.time.temporal.ChronoField#YEAR_OF_ERA`, `year-of-Era`],
			[/* text */ 't', `
 depending on the Chronology.
 `]
		]],
		[/* block */ 'b', `A week is defined by:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', `The first day-of-week.
 For example, the ISO-8601 standard considers Monday to be the first day-of-week.
 `],
			[/* block */ 'b', `The minimal number of days in the first week.
 For example, the ISO-8601 standard counts the first week as needing at least 4 days.
 `]
		]],
		[/* text */ 't', `
 Together these two values allow a year or month to be divided into weeks.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Week of Month`],
		[/* text */ 't', `
 One field is used: week-of-month.
 The calculation ensures that weeks never overlap a month boundary.
 The month is divided into periods where each period starts on the defined first day-of-week.
 The earliest period is referred to as week 0 if it has less than the minimal number of days
 and week 1 if it has at least the minimal number of days.

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc', [
				[/* text */ 't', `Examples of WeekFields`]
			]],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Date`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Day-of-week`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `First day: Monday`],
						[/* new line */ 'n'],
						[/* text */ 't', `Minimal days: 4`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `First day: Monday`],
						[/* new line */ 'n'],
						[/* text */ 't', `Minimal days: 5`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `2008-12-31`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Wednesday`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 5 of December 2008`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 5 of December 2008`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `2009-01-01`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Thursday`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 1 of January 2009`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 0 of January 2009`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `2009-01-04`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Sunday`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 1 of January 2009`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 0 of January 2009`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `2009-01-05`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Monday`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 2 of January 2009`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 1 of January 2009`]
					]]
				]]
			]],
		],
		[/* text */ 't', `

 `],
		[/* block */ 'b', `Week of Year`],
		[/* text */ 't', `
 One field is used: week-of-year.
 The calculation ensures that weeks never overlap a year boundary.
 The year is divided into periods where each period starts on the defined first day-of-week.
 The earliest period is referred to as week 0 if it has less than the minimal number of days
 and week 1 if it has at least the minimal number of days.

 `],
		[/* block */ 'b', `Week Based Year`],
		[/* text */ 't', `
 Two fields are used for week-based-year, one for the
 `],
		[/* reference */ 'r', `#weekOfWeekBasedYear()`, `week-of-week-based-year`],
		[/* text */ 't', ` and one for
 `],
		[/* reference */ 'r', `#weekBasedYear()`, `week-based-year`],
		[/* text */ 't', `.  In a week-based-year, each week
 belongs to only a single year.  Week 1 of a year is the first week that
 starts on the first day-of-week and has at least the minimum number of days.
 The first and last weeks of a year may contain days from the
 previous calendar year or next calendar year respectively.

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc', [
				[/* text */ 't', `Examples of WeekFields for week-based-year`]
			]],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Date`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Day-of-week`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `First day: Monday`],
						[/* new line */ 'n'],
						[/* text */ 't', `Minimal days: 4`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `First day: Monday`],
						[/* new line */ 'n'],
						[/* text */ 't', `Minimal days: 5`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `2008-12-31`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Wednesday`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 1 of 2009`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 53 of 2008`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `2009-01-01`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Thursday`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 1 of 2009`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 53 of 2008`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `2009-01-04`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Sunday`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 1 of 2009`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 53 of 2008`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `2009-01-05`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Monday`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 2 of 2009`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 1 of 2009`]
					]]
				]]
			]],
		]
	],
	[/* fields */
		[/* field */ 'ISO', [
			[/* field description */
				[/* text */ 't', `The ISO-8601 definition, where a week starts on Monday and the first week
 has a minimum of 4 days.
 `],
				[/* block */ 'b', `
 The ISO-8601 standard defines a calendar system based on weeks.
 It uses the week-based-year and week-of-week-based-year concepts to split
 up the passage of days instead of the standard year/month/day.
 `],
				[/* block */ 'b', `
 Note that the first week may start in the previous calendar year.
 Note also that the first few days of a calendar year may be in the
 week-based-year corresponding to the previous calendar year.`]
			],
		]],
		[/* field */ 'SUNDAY_START', [
			[/* field description */
				[/* text */ 't', `The common definition of a week that starts on Sunday and the first week
 has a minimum of 1 day.
 `],
				[/* block */ 'b', `
 Defined as starting on Sunday and with a minimum of 1 day in the month.
 This week definition is in use in the US and other European countries.`]
			],
		]],
		[/* field */ 'WEEK_BASED_YEARS', [
			[/* field description */
				[/* text */ 't', `The unit that represents week-based-years for the purpose of addition and subtraction.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This allows a number of week-based-years to be added to, or subtracted from, a date.
 The unit is equal to either 52 or 53 weeks.
 The estimated duration of a week-based-year is the same as that of a standard ISO
 year at `],
					[/* inline code block */ 'i', `365.2425 Days`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', `
 The rules for addition add the number of week-based-years to the existing value
 for the week-based-year field retaining the week-of-week-based-year
 and day-of-week, unless the week number it too large for the target year.
 In that case, the week is set to the last week of the year
 with the same day-of-week.
 `],
				[/* block */ 'b', `
 This unit is an immutable and thread-safe singleton.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Checks if this `],
				[/* inline code block */ 'i', `WeekFields`],
				[/* text */ 't', ` is equal to the specified object.
 `],
				[/* block */ 'b', `
 The comparison is based on the entire state of the rules, which is
 the first day-of-week and minimal days.`]
			],
			[/* parameters */
				[/* parameter */ 'object', [/* parameter description */
					[/* text */ 't', `the other rules to compare to, null returns false`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this is equal to the specified rules`]
			]
		]],
		[/* method */ 'getMinimalDaysInFirstWeek()', [
			[/* method description */
				[/* text */ 't', `Gets the minimal number of days in the first week.
 `],
				[/* block */ 'b', `
 The number of days considered to define the first week of a month or year
 varies by culture.
 For example, the ISO-8601 requires 4 days (more than half a week) to
 be present before counting the first week.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minimal number of days in the first week of a month or year, from 1 to 7`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `A hash code for this `],
				[/* inline code block */ 'i', `WeekFields`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a suitable hash code`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `A string representation of this `],
				[/* inline code block */ 'i', `WeekFields`],
				[/* text */ 't', ` instance.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the string representation, not null`]
			]
		]],
		[/* method */ 'getFirstDayOfWeek()', [
			[/* method description */
				[/* text */ 't', `Gets the first day-of-week.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The first day-of-week varies by culture.
 For example, the US uses Sunday, while France and the ISO-8601 standard use Monday.
 This method returns the first day using the standard `],
					[/* inline code block */ 'i', `DayOfWeek`],
					[/* text */ 't', ` enum.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the first day-of-week, not null`]
			]
		]],
		[/* method */ 'dayOfWeek()', [
			[/* method description */
				[/* text */ 't', `Returns a field to access the day of week based on this `],
				[/* inline code block */ 'i', `WeekFields`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This is similar to `],
					[/* reference */ 'r', `java.time.temporal.ChronoField#DAY_OF_WEEK`, `ChronoField.DAY_OF_WEEK`],
					[/* text */ 't', ` but uses values for
 the day-of-week based on this `],
					[/* inline code block */ 'i', `WeekFields`],
					[/* text */ 't', `.
 The days are numbered from 1 to 7 where the
 `],
					[/* reference */ 'r', `#getFirstDayOfWeek()`, `first day-of-week`],
					[/* text */ 't', ` is assigned the value 1.
 `]
				]],
				[/* block */ 'b', `
 For example, if the first day-of-week is Sunday, then that will have the
 value 1, with other days ranging from Monday as 2 to Saturday as 7.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In the resolving phase of parsing, a localized day-of-week will be converted
 to a standardized `],
					[/* inline code block */ 'i', `ChronoField`],
					[/* text */ 't', ` day-of-week.
 The day-of-week must be in the valid range 1 to 7.
 Other fields in this class build dates using the standardized day-of-week.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a field providing access to the day-of-week with localized numbering, not null`]
			]
		]],
		[/* method */ 'weekBasedYear()', [
			[/* method description */
				[/* text */ 't', `Returns a field to access the year of a week-based-year based on this `],
				[/* inline code block */ 'i', `WeekFields`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This represents the concept of the year where weeks start on a fixed day-of-week,
 such as Monday and each week belongs to exactly one year.
 This field is typically used with `],
					[/* reference */ 'r', `#dayOfWeek()`, `dayOfWeek()`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `#weekOfWeekBasedYear()`, `weekOfWeekBasedYear()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Week one(1) is the week starting on the `],
					[/* reference */ 'r', `#getFirstDayOfWeek()`, `getFirstDayOfWeek()`],
					[/* text */ 't', `
 where there are at least `],
					[/* reference */ 'r', `#getMinimalDaysInFirstWeek()`, `getMinimalDaysInFirstWeek()`],
					[/* text */ 't', ` days in the year.
 Thus, week one may start before the start of the year.
 If the first week starts after the start of the year then the period before
 is in the last week of the previous year.
 `]
				]],
				[/* block */ 'b', `
 This field can be used with any calendar system.
 `],
				[/* block */ 'b', `
 In the resolving phase of parsing, a date can be created from a week-based-year,
 week-of-year and day-of-week.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `strict mode`],
					[/* text */ 't', `, all three fields are
 validated against their range of valid values. The week-of-year field
 is validated to ensure that the resulting week-based-year is the
 week-based-year requested.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `smart mode`],
					[/* text */ 't', `, all three fields are
 validated against their range of valid values. The week-of-week-based-year field
 is validated from 1 to 53, meaning that the resulting date can be in the
 following week-based-year to that specified.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#LENIENT`, `lenient mode`],
					[/* text */ 't', `, the year and day-of-week
 are validated against the range of valid values. The resulting date is calculated
 equivalent to the following three stage approach.
 First, create a date on the first day of the first week in the requested week-based-year.
 Then take the week-of-week-based-year, subtract one, and add the amount in weeks to the date.
 Finally, adjust to the correct day-of-week within the localized week.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a field providing access to the week-based-year, not null`]
			]
		]],
		[/* method */ 'weekOfMonth()', [
			[/* method description */
				[/* text */ 't', `Returns a field to access the week of month based on this `],
				[/* inline code block */ 'i', `WeekFields`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This represents the concept of the count of weeks within the month where weeks
 start on a fixed day-of-week, such as Monday.
 This field is typically used with `],
					[/* reference */ 'r', `#dayOfWeek()`, `dayOfWeek()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Week one (1) is the week starting on the `],
					[/* reference */ 'r', `#getFirstDayOfWeek()`, `getFirstDayOfWeek()`],
					[/* text */ 't', `
 where there are at least `],
					[/* reference */ 'r', `#getMinimalDaysInFirstWeek()`, `getMinimalDaysInFirstWeek()`],
					[/* text */ 't', ` days in the month.
 Thus, week one may start up to `],
					[/* inline code block */ 'i', `minDays`],
					[/* text */ 't', ` days before the start of the month.
 If the first week starts after the start of the month then the period before is week zero (0).
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For example:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - if the 1st day of the month is a Monday, week one starts on the 1st and there is no week zero`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - if the 2nd day of the month is a Monday, week one starts on the 2nd and the 1st is in week zero`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - if the 4th day of the month is a Monday, week one starts on the 4th and the 1st to 3rd is in week zero`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - if the 5th day of the month is a Monday, week two starts on the 5th and the 1st to 4th is in week one`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 `]
				]],
				[/* block */ 'b', `
 This field can be used with any calendar system.
 `],
				[/* block */ 'b', `
 In the resolving phase of parsing, a date can be created from a year,
 week-of-month, month-of-year and day-of-week.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `strict mode`],
					[/* text */ 't', `, all four fields are
 validated against their range of valid values. The week-of-month field
 is validated to ensure that the resulting month is the month requested.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `smart mode`],
					[/* text */ 't', `, all four fields are
 validated against their range of valid values. The week-of-month field
 is validated from 0 to 6, meaning that the resulting date can be in a
 different month to that specified.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#LENIENT`, `lenient mode`],
					[/* text */ 't', `, the year and day-of-week
 are validated against the range of valid values. The resulting date is calculated
 equivalent to the following four stage approach.
 First, create a date on the first day of the first week of January in the requested year.
 Then take the month-of-year, subtract one, and add the amount in months to the date.
 Then take the week-of-month, subtract one, and add the amount in weeks to the date.
 Finally, adjust to the correct day-of-week within the localized week.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a field providing access to the week-of-month, not null`]
			]
		]],
		[/* method */ 'weekOfWeekBasedYear()', [
			[/* method description */
				[/* text */ 't', `Returns a field to access the week of a week-based-year based on this `],
				[/* inline code block */ 'i', `WeekFields`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This represents the concept of the count of weeks within the year where weeks
 start on a fixed day-of-week, such as Monday and each week belongs to exactly one year.
 This field is typically used with `],
					[/* reference */ 'r', `#dayOfWeek()`, `dayOfWeek()`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `#weekBasedYear()`, `weekBasedYear()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Week one(1) is the week starting on the `],
					[/* reference */ 'r', `#getFirstDayOfWeek()`, `getFirstDayOfWeek()`],
					[/* text */ 't', `
 where there are at least `],
					[/* reference */ 'r', `#getMinimalDaysInFirstWeek()`, `getMinimalDaysInFirstWeek()`],
					[/* text */ 't', ` days in the year.
 If the first week starts after the start of the year then the period before
 is in the last week of the previous year.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For example:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - if the 1st day of the year is a Monday, week one starts on the 1st`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - if the 2nd day of the year is a Monday, week one starts on the 2nd and
   the 1st is in the last week of the previous year`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - if the 4th day of the year is a Monday, week one starts on the 4th and
   the 1st to 3rd is in the last week of the previous year`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - if the 5th day of the year is a Monday, week two starts on the 5th and
   the 1st to 4th is in week one`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 `]
				]],
				[/* block */ 'b', `
 This field can be used with any calendar system.
 `],
				[/* block */ 'b', `
 In the resolving phase of parsing, a date can be created from a week-based-year,
 week-of-year and day-of-week.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `strict mode`],
					[/* text */ 't', `, all three fields are
 validated against their range of valid values. The week-of-year field
 is validated to ensure that the resulting week-based-year is the
 week-based-year requested.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `smart mode`],
					[/* text */ 't', `, all three fields are
 validated against their range of valid values. The week-of-week-based-year field
 is validated from 1 to 53, meaning that the resulting date can be in the
 following week-based-year to that specified.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#LENIENT`, `lenient mode`],
					[/* text */ 't', `, the year and day-of-week
 are validated against the range of valid values. The resulting date is calculated
 equivalent to the following three stage approach.
 First, create a date on the first day of the first week in the requested week-based-year.
 Then take the week-of-week-based-year, subtract one, and add the amount in weeks to the date.
 Finally, adjust to the correct day-of-week within the localized week.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a field providing access to the week-of-week-based-year, not null`]
			]
		]],
		[/* method */ 'weekOfYear()', [
			[/* method description */
				[/* text */ 't', `Returns a field to access the week of year based on this `],
				[/* inline code block */ 'i', `WeekFields`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This represents the concept of the count of weeks within the year where weeks
 start on a fixed day-of-week, such as Monday.
 This field is typically used with `],
					[/* reference */ 'r', `#dayOfWeek()`, `dayOfWeek()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Week one(1) is the week starting on the `],
					[/* reference */ 'r', `#getFirstDayOfWeek()`, `getFirstDayOfWeek()`],
					[/* text */ 't', `
 where there are at least `],
					[/* reference */ 'r', `#getMinimalDaysInFirstWeek()`, `getMinimalDaysInFirstWeek()`],
					[/* text */ 't', ` days in the year.
 Thus, week one may start up to `],
					[/* inline code block */ 'i', `minDays`],
					[/* text */ 't', ` days before the start of the year.
 If the first week starts after the start of the year then the period before is week zero (0).
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 For example:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - if the 1st day of the year is a Monday, week one starts on the 1st and there is no week zero`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - if the 2nd day of the year is a Monday, week one starts on the 2nd and the 1st is in week zero`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - if the 4th day of the year is a Monday, week one starts on the 4th and the 1st to 3rd is in week zero`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 - if the 5th day of the year is a Monday, week two starts on the 5th and the 1st to 4th is in week one`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 `]
				]],
				[/* block */ 'b', `
 This field can be used with any calendar system.
 `],
				[/* block */ 'b', `
 In the resolving phase of parsing, a date can be created from a year,
 week-of-year and day-of-week.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#STRICT`, `strict mode`],
					[/* text */ 't', `, all three fields are
 validated against their range of valid values. The week-of-year field
 is validated to ensure that the resulting year is the year requested.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#SMART`, `smart mode`],
					[/* text */ 't', `, all three fields are
 validated against their range of valid values. The week-of-year field
 is validated from 0 to 54, meaning that the resulting date can be in a
 different year to that specified.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.time.format.ResolverStyle#LENIENT`, `lenient mode`],
					[/* text */ 't', `, the year and day-of-week
 are validated against the range of valid values. The resulting date is calculated
 equivalent to the following three stage approach.
 First, create a date on the first day of the first week in the requested year.
 Then take the week-of-year, subtract one, and add the amount in weeks to the date.
 Finally, adjust to the correct day-of-week within the localized week.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a field providing access to the week-of-year, not null`]
			]
		]],
		[/* method */ 'of(java.time.DayOfWeek,int)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `WeekFields`],
				[/* text */ 't', ` from the first day-of-week and minimal days.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The first day-of-week defines the ISO `],
					[/* inline code block */ 'i', `DayOfWeek`],
					[/* text */ 't', ` that is day 1 of the week.
 The minimal number of days in the first week defines how many days must be present
 in a month or year, starting from the first day-of-week, before the week is counted
 as the first week. A value of 1 will count the first day of the month or year as part
 of the first week, whereas a value of 7 will require the whole seven days to be in
 the new month or year.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 WeekFields instances are singletons; for each unique combination
 of `],
					[/* inline code block */ 'i', `firstDayOfWeek`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `minimalDaysInFirstWeek`],
					[/* text */ 't', `
 the same instance will be returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'firstDayOfWeek', [/* parameter description */
					[/* text */ 't', `the first day of the week, not null`]
				]],
				[/* parameter */ 'minimalDaysInFirstWeek', [/* parameter description */
					[/* text */ 't', `the minimal number of days in the first week, from 1 to 7`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the minimal days value is less than one
      or greater than 7`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the week-definition, not null`]
			]
		]],
		[/* method */ 'of(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `WeekFields`],
				[/* text */ 't', ` appropriate for a locale.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This will look up appropriate values from the provider of localization data.
 If the locale contains "fw" (First day of week) and/or "rg"
 (Region Override) `],
					[/* reference */ 'r', `java.util.Locale#def_locale_extension`, `Unicode extensions`],
					[/* text */ 't', `, returned instance will reflect the values specified with
 those extensions. If both "fw" and "rg" are specified, the value from
 the "fw" extension supersedes the implicit one from the "rg" extension.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the locale to use, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the week-definition, not null`]
			]
		]]
	],
]);
