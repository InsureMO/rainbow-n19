import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.IsoFields', [
	[/* class description */
		[/* text */ 't', `Fields and units specific to the ISO-8601 calendar system,
 including quarter-of-year and week-based-year.
 `],
		[/* block */ 'b', `
 This class defines fields and units that are specific to the ISO calendar system.

 `],
		[/* block */ 'b', `Quarter of year`],
		[/* text */ 't', `
 The ISO-8601 standard is based on the standard civic 12 month year.
 This is commonly divided into four quarters, often abbreviated as Q1, Q2, Q3 and Q4.
 `],
		[/* block */ 'b', `
 January, February and March are in Q1.
 April, May and June are in Q2.
 July, August and September are in Q3.
 October, November and December are in Q4.
 `],
		[/* block */ 'b', `
 The complete date is expressed using three fields:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `DAY_OF_QUARTER`],
				[/* text */ 't', ` - the day within the quarter, from 1 to 90, 91 or 92
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `QUARTER_OF_YEAR`],
				[/* text */ 't', ` - the quarter within the year, from 1 to 4
 `]
			]],
			[/* block */ 'b', [
				[/* reference */ 'r', `.ChronoField#YEAR`],
				[/* text */ 't', ` - the standard ISO year
 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Week based years`],
		[/* text */ 't', `
 The ISO-8601 standard was originally intended as a data interchange format,
 defining a string format for dates and times. However, it also defines an
 alternate way of expressing the date, based on the concept of week-based-year.
 `],
		[/* block */ 'b', `
 The date is expressed using three fields:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* reference */ 'r', `.ChronoField#DAY_OF_WEEK`],
				[/* text */ 't', ` - the standard field defining the
  day-of-week from Monday (1) to Sunday (7)
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `WEEK_OF_WEEK_BASED_YEAR`],
				[/* text */ 't', ` - the week within the week-based-year
 `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `WEEK_BASED_YEAR`],
				[/* text */ 't', ` - the week-based-year
 `]
			]]
		]],
		[/* text */ 't', `
 The week-based-year itself is defined relative to the standard ISO proleptic year.
 It differs from the standard year in that it always starts on a Monday.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 The first week of a week-based-year is the first Monday-based week of the standard
 ISO year that has at least 4 days in the new year.
 `],
		[/* list */ 'l', [
			[/* block */ 'b', `If January 1st is Monday then week 1 starts on January 1st
 `],
			[/* block */ 'b', `If January 1st is Tuesday then week 1 starts on December 31st of the previous standard year
 `],
			[/* block */ 'b', `If January 1st is Wednesday then week 1 starts on December 30th of the previous standard year
 `],
			[/* block */ 'b', `If January 1st is Thursday then week 1 starts on December 29th of the previous standard year
 `],
			[/* block */ 'b', `If January 1st is Friday then week 1 starts on January 4th
 `],
			[/* block */ 'b', `If January 1st is Saturday then week 1 starts on January 3rd
 `],
			[/* block */ 'b', `If January 1st is Sunday then week 1 starts on January 2nd
 `]
		]],
		[/* text */ 't', `
 There are 52 weeks in most week-based years, however on occasion there are 53 weeks.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 For example:

 `],
		[/* table */ 'tbl',
			[/* caption */ 'tc', [
				[/* text */ 't', `Examples of Week based Years`]
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
						[/* text */ 't', `Field values`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `2008-12-28`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Sunday`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 52 of week-based-year 2008`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `2008-12-29`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Monday`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 1 of week-based-year 2009`]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `2008-12-31`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Wednesday`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `Week 1 of week-based-year 2009`]
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
						[/* text */ 't', `Week 1 of week-based-year 2009`]
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
						[/* text */ 't', `Week 1 of week-based-year 2009`]
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
						[/* text */ 't', `Week 2 of week-based-year 2009`]
					]]
				]]
			]],
		],
		[/* block */ 'b', '']
	],
	[/* fields */
		[/* field */ 'DAY_OF_QUARTER', [
			[/* field description */
				[/* text */ 't', `The field that represents the day-of-quarter.
 `],
				[/* block */ 'b', `
 This field allows the day-of-quarter value to be queried and set.
 The day-of-quarter has values from 1 to 90 in Q1 of a standard year, from 1 to 91
 in Q1 of a leap year, from 1 to 91 in Q2 and from 1 to 92 in Q3 and Q4.
 `],
				[/* block */ 'b', `
 The day-of-quarter can only be calculated if the day-of-year, month-of-year and year
 are available.
 `],
				[/* block */ 'b', `
 When setting this field, the value is allowed to be partially lenient, taking any
 value from 1 to 92. If the quarter has less than 92 days, then day 92, and
 potentially day 91, is in the following quarter.
 `],
				[/* block */ 'b', `
 In the resolving phase of parsing, a date can be created from a year,
 quarter-of-year and day-of-quarter.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.ResolverStyle#STRICT`],
					[/* text */ 't', `, all three fields are
 validated against their range of valid values. The day-of-quarter field
 is validated from 1 to 90, 91 or 92 depending on the year and quarter.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.ResolverStyle#SMART`],
					[/* text */ 't', `, all three fields are
 validated against their range of valid values. The day-of-quarter field is
 validated between 1 and 92, ignoring the actual range based on the year and quarter.
 If the day-of-quarter exceeds the actual range by one day, then the resulting date
 is one day later. If the day-of-quarter exceeds the actual range by two days,
 then the resulting date is two days later.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.ResolverStyle#LENIENT`],
					[/* text */ 't', `, only the year is validated
 against the range of valid values. The resulting date is calculated equivalent to
 the following three stage approach. First, create a date on the first of January
 in the requested year. Then take the quarter-of-year, subtract one, and add the
 amount in quarters to the date. Finally, take the day-of-quarter, subtract one,
 and add the amount in days to the date.
 `]
				]],
				[/* block */ 'b', `
 This unit is an immutable and thread-safe singleton.`]
			],
		]],
		[/* field */ 'QUARTER_OF_YEAR', [
			[/* field description */
				[/* text */ 't', `The field that represents the quarter-of-year.
 `],
				[/* block */ 'b', `
 This field allows the quarter-of-year value to be queried and set.
 The quarter-of-year has values from 1 to 4.
 `],
				[/* block */ 'b', `
 The quarter-of-year can only be calculated if the month-of-year is available.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In the resolving phase of parsing, a date can be created from a year,
 quarter-of-year and day-of-quarter.
 See `],
					[/* text */ 't', `DAY_OF_QUARTER`],
					[/* text */ 't', ` for details.
 `]
				]],
				[/* block */ 'b', `
 This unit is an immutable and thread-safe singleton.`]
			],
		]],
		[/* field */ 'WEEK_OF_WEEK_BASED_YEAR', [
			[/* field description */
				[/* text */ 't', `The field that represents the week-of-week-based-year.
 `],
				[/* block */ 'b', `
 This field allows the week of the week-based-year value to be queried and set.
 The week-of-week-based-year has values from 1 to 52, or 53 if the
 week-based-year has 53 weeks.
 `],
				[/* block */ 'b', `
 In the resolving phase of parsing, a date can be created from a
 week-based-year, week-of-week-based-year and day-of-week.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.ResolverStyle#STRICT`],
					[/* text */ 't', `, all three fields are
 validated against their range of valid values. The week-of-week-based-year
 field is validated from 1 to 52 or 53 depending on the week-based-year.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.ResolverStyle#SMART`],
					[/* text */ 't', `, all three fields are
 validated against their range of valid values. The week-of-week-based-year
 field is validated between 1 and 53, ignoring the week-based-year.
 If the week-of-week-based-year is 53, but the week-based-year only has
 52 weeks, then the resulting date is in week 1 of the following week-based-year.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In `],
					[/* reference */ 'r', `java.ResolverStyle#LENIENT`],
					[/* text */ 't', `, only the week-based-year
 is validated against the range of valid values. If the day-of-week is outside
 the range 1 to 7, then the resulting date is adjusted by a suitable number of
 weeks to reduce the day-of-week to the range 1 to 7. If the week-of-week-based-year
 value is outside the range 1 to 52, then any excess weeks are added or subtracted
 from the resulting date.
 `]
				]],
				[/* block */ 'b', `
 This unit is an immutable and thread-safe singleton.`]
			],
		]],
		[/* field */ 'WEEK_BASED_YEAR', [
			[/* field description */
				[/* text */ 't', `The field that represents the week-based-year.
 `],
				[/* block */ 'b', `
 This field allows the week-based-year value to be queried and set.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The field has a range that matches `],
					[/* reference */ 'r', `java.LocalDate#MAX`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `java.LocalDate#MIN`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 In the resolving phase of parsing, a date can be created from a
 week-based-year, week-of-week-based-year and day-of-week.
 See `],
					[/* text */ 't', `WEEK_OF_WEEK_BASED_YEAR`],
					[/* text */ 't', ` for details.
 `]
				]],
				[/* block */ 'b', `
 This unit is an immutable and thread-safe singleton.`]
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
 for the week-based-year field. If the resulting week-based-year only has 52 weeks,
 then the date will be in week 1 of the following week-based-year.
 `],
				[/* block */ 'b', `
 This unit is an immutable and thread-safe singleton.`]
			],
		]],
		[/* field */ 'QUARTER_YEARS', [
			[/* field description */
				[/* text */ 't', `Unit that represents the concept of a quarter-year.
 For the ISO calendar system, it is equal to 3 months.
 The estimated duration of a quarter-year is one quarter of `],
				[/* inline code block */ 'i', `365.2425 Days`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `
 This unit is an immutable and thread-safe singleton.`]
			],
		]]
	],
	/* constructors */ UDF,
	/* methods */ UDF,
]);
