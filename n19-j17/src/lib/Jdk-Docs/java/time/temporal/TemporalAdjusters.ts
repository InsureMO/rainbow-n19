import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.time.temporal.TemporalAdjusters', [
	[/* class description */
		[/* text */ 't', `Common and useful TemporalAdjusters.
 `],
		[/* block */ 'b', `
 Adjusters are a key tool for modifying temporal objects.
 They exist to externalize the process of adjustment, permitting different
 approaches, as per the strategy design pattern.
 Examples might be an adjuster that sets the date avoiding weekends, or one that
 sets the date to the last day of the month.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 There are two equivalent ways of using a `],
			[/* inline code block */ 'i', `TemporalAdjuster`],
			[/* text */ 't', `.
 The first is to invoke the method on the interface directly.
 The second is to use `],
			[/* reference */ 'r', `.Temporal#with(java.time.temporal.TemporalAdjuster)`],
			[/* text */ 't', `:
 `]
		]],
		[/* code block */ 'c', `   // these two lines are equivalent, but the second approach is recommended
   temporal = thisAdjuster.adjustInto(temporal);
   temporal = temporal.with(thisAdjuster);
 `],
		[/* text */ 't', `
 It is recommended to use the second approach, `],
		[/* inline code block */ 'i', `with(TemporalAdjuster)`],
		[/* text */ 't', `,
 as it is a lot clearer to read in code.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 This class contains a standard set of adjusters, available as static methods.
 These include:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', `finding the first or last day of the month
 `],
			[/* block */ 'b', `finding the first day of next month
 `],
			[/* block */ 'b', `finding the first or last day of the year
 `],
			[/* block */ 'b', `finding the first day of next year
 `],
			[/* block */ 'b', `finding the first or last day-of-week within a month, such as "first Wednesday in June"
 `],
			[/* block */ 'b', `finding the next or previous day-of-week, such as "next Thursday"
 `]
		]],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'next(java.time.DayOfWeek)', [
			[/* method description */
				[/* text */ 't', `Returns the next day-of-week adjuster, which adjusts the date to the
 first occurrence of the specified day-of-week after the date being adjusted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ISO calendar system behaves as follows:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 (a Saturday) for parameter (MONDAY) will return 2011-01-17 (two days later).`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 (a Saturday) for parameter (WEDNESDAY) will return 2011-01-19 (four days later).`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 (a Saturday) for parameter (SATURDAY) will return 2011-01-22 (seven days later).
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The behavior is suitable for use with most calendar systems.
 It uses the `],
					[/* inline code block */ 'i', `DAY_OF_WEEK`],
					[/* text */ 't', ` field and the `],
					[/* inline code block */ 'i', `DAYS`],
					[/* text */ 't', ` unit,
 and assumes a seven day week.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dayOfWeek', [/* parameter description */
					[/* text */ 't', `the day-of-week to move the date to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the next day-of-week adjuster, not null`]
			]
		]],
		[/* method */ 'previous(java.time.DayOfWeek)', [
			[/* method description */
				[/* text */ 't', `Returns the previous day-of-week adjuster, which adjusts the date to the
 first occurrence of the specified day-of-week before the date being adjusted.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ISO calendar system behaves as follows:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 (a Saturday) for parameter (MONDAY) will return 2011-01-10 (five days earlier).`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 (a Saturday) for parameter (WEDNESDAY) will return 2011-01-12 (three days earlier).`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 (a Saturday) for parameter (SATURDAY) will return 2011-01-08 (seven days earlier).
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The behavior is suitable for use with most calendar systems.
 It uses the `],
					[/* inline code block */ 'i', `DAY_OF_WEEK`],
					[/* text */ 't', ` field and the `],
					[/* inline code block */ 'i', `DAYS`],
					[/* text */ 't', ` unit,
 and assumes a seven day week.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dayOfWeek', [/* parameter description */
					[/* text */ 't', `the day-of-week to move the date to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the previous day-of-week adjuster, not null`]
			]
		]],
		[/* method */ 'lastDayOfMonth()', [
			[/* method description */
				[/* text */ 't', `Returns the "last day of month" adjuster, which returns a new date set to
 the last day of the current month.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ISO calendar system behaves as follows:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 will return 2011-01-31.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-02-15 will return 2011-02-28.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2012-02-15 will return 2012-02-29 (leap year).`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-04-15 will return 2011-04-30.
 `]
				]],
				[/* block */ 'b', `
 The behavior is suitable for use with most calendar systems.
 It is equivalent to:
 `],
				[/* code block */ 'c', `  long lastDay = temporal.range(DAY_OF_MONTH).getMaximum();
  temporal.with(DAY_OF_MONTH, lastDay);
 `],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the last day-of-month adjuster, not null`]
			]
		]],
		[/* method */ 'nextOrSame(java.time.DayOfWeek)', [
			[/* method description */
				[/* text */ 't', `Returns the next-or-same day-of-week adjuster, which adjusts the date to the
 first occurrence of the specified day-of-week after the date being adjusted
 unless it is already on that day in which case the same object is returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ISO calendar system behaves as follows:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 (a Saturday) for parameter (MONDAY) will return 2011-01-17 (two days later).`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 (a Saturday) for parameter (WEDNESDAY) will return 2011-01-19 (four days later).`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 (a Saturday) for parameter (SATURDAY) will return 2011-01-15 (same as input).
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The behavior is suitable for use with most calendar systems.
 It uses the `],
					[/* inline code block */ 'i', `DAY_OF_WEEK`],
					[/* text */ 't', ` field and the `],
					[/* inline code block */ 'i', `DAYS`],
					[/* text */ 't', ` unit,
 and assumes a seven day week.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dayOfWeek', [/* parameter description */
					[/* text */ 't', `the day-of-week to check for or move the date to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the next-or-same day-of-week adjuster, not null`]
			]
		]],
		[/* method */ 'previousOrSame(java.time.DayOfWeek)', [
			[/* method description */
				[/* text */ 't', `Returns the previous-or-same day-of-week adjuster, which adjusts the date to the
 first occurrence of the specified day-of-week before the date being adjusted
 unless it is already on that day in which case the same object is returned.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ISO calendar system behaves as follows:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 (a Saturday) for parameter (MONDAY) will return 2011-01-10 (five days earlier).`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 (a Saturday) for parameter (WEDNESDAY) will return 2011-01-12 (three days earlier).`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 (a Saturday) for parameter (SATURDAY) will return 2011-01-15 (same as input).
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The behavior is suitable for use with most calendar systems.
 It uses the `],
					[/* inline code block */ 'i', `DAY_OF_WEEK`],
					[/* text */ 't', ` field and the `],
					[/* inline code block */ 'i', `DAYS`],
					[/* text */ 't', ` unit,
 and assumes a seven day week.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dayOfWeek', [/* parameter description */
					[/* text */ 't', `the day-of-week to check for or move the date to, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the previous-or-same day-of-week adjuster, not null`]
			]
		]],
		[/* method */ 'firstDayOfYear()', [
			[/* method description */
				[/* text */ 't', `Returns the "first day of year" adjuster, which returns a new date set to
 the first day of the current year.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ISO calendar system behaves as follows:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 will return 2011-01-01.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-02-15 will return 2011-01-01.`],
					[/* new line */ 'n']
				]],
				[/* block */ 'b', `
 The behavior is suitable for use with most calendar systems.
 It is equivalent to:
 `],
				[/* code block */ 'c', `  temporal.with(DAY_OF_YEAR, 1);
 `],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the first day-of-year adjuster, not null`]
			]
		]],
		[/* method */ 'dayOfWeekInMonth(int,java.time.DayOfWeek)', [
			[/* method description */
				[/* text */ 't', `Returns the day-of-week in month adjuster, which returns a new date
 with the ordinal day-of-week based on the month.
 This is used for expressions like the 'second Tuesday in March'.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ISO calendar system behaves as follows:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-12-15 for (1,TUESDAY) will return 2011-12-06.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-12-15 for (2,TUESDAY) will return 2011-12-13.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-12-15 for (3,TUESDAY) will return 2011-12-20.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-12-15 for (4,TUESDAY) will return 2011-12-27.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-12-15 for (5,TUESDAY) will return 2012-01-03.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-12-15 for (-1,TUESDAY) will return 2011-12-27 (last in month).`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-12-15 for (-4,TUESDAY) will return 2011-12-06 (3 weeks before last in month).`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-12-15 for (-5,TUESDAY) will return 2011-11-29 (4 weeks before last in month).`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-12-15 for (0,TUESDAY) will return 2011-11-29 (last in previous month).`],
					[/* new line */ 'n']
				]],
				[/* block */ 'b', `
 For a positive or zero ordinal, the algorithm is equivalent to finding the first
 day-of-week that matches within the month and then adding a number of weeks to it.
 For a negative ordinal, the algorithm is equivalent to finding the last
 day-of-week that matches within the month and then subtracting a number of weeks to it.
 The ordinal number of weeks is not validated and is interpreted leniently
 according to this algorithm. This definition means that an ordinal of zero finds
 the last matching day-of-week in the previous month.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The behavior is suitable for use with most calendar systems.
 It uses the `],
					[/* inline code block */ 'i', `DAY_OF_WEEK`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` fields
 and the `],
					[/* inline code block */ 'i', `DAYS`],
					[/* text */ 't', ` unit, and assumes a seven day week.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ordinal', [/* parameter description */
					[/* text */ 't', `the week within the month, unbounded but typically from -5 to 5`]
				]],
				[/* parameter */ 'dayOfWeek', [/* parameter description */
					[/* text */ 't', `the day-of-week, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the day-of-week in month adjuster, not null`]
			]
		]],
		[/* method */ 'ofDateAdjuster(java.util.function.UnaryOperator)', [
			[/* method description */
				[/* text */ 't', `Obtains a `],
				[/* inline code block */ 'i', `TemporalAdjuster`],
				[/* text */ 't', ` that wraps a date adjuster.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `TemporalAdjuster`],
					[/* text */ 't', ` is based on the low level `],
					[/* inline code block */ 'i', `Temporal`],
					[/* text */ 't', ` interface.
 This method allows an adjustment from `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', ` to `],
					[/* inline code block */ 'i', `LocalDate`],
					[/* text */ 't', `
 to be wrapped to match the temporal-based interface.
 This is provided for convenience to make user-written adjusters simpler.
 `]
				]],
				[/* block */ 'b', `
 In general, user-written adjusters should be static constants:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `static TemporalAdjuster TWO_DAYS_LATER =
       TemporalAdjusters.ofDateAdjuster(date -> date.plusDays(2));`]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'dateBasedAdjuster', [/* parameter description */
					[/* text */ 't', `the date-based adjuster, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the temporal adjuster wrapping on the date adjuster, not null`]
			]
		]],
		[/* method */ 'firstDayOfMonth()', [
			[/* method description */
				[/* text */ 't', `Returns the "first day of month" adjuster, which returns a new date set to
 the first day of the current month.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ISO calendar system behaves as follows:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 will return 2011-01-01.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-02-15 will return 2011-02-01.
 `]
				]],
				[/* block */ 'b', `
 The behavior is suitable for use with most calendar systems.
 It is equivalent to:
 `],
				[/* code block */ 'c', `  temporal.with(DAY_OF_MONTH, 1);
 `],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the first day-of-month adjuster, not null`]
			]
		]],
		[/* method */ 'firstDayOfNextMonth()', [
			[/* method description */
				[/* text */ 't', `Returns the "first day of next month" adjuster, which returns a new date set to
 the first day of the next month.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ISO calendar system behaves as follows:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 will return 2011-02-01.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-02-15 will return 2011-03-01.
 `]
				]],
				[/* block */ 'b', `
 The behavior is suitable for use with most calendar systems.
 It is equivalent to:
 `],
				[/* code block */ 'c', `  temporal.with(DAY_OF_MONTH, 1).plus(1, MONTHS);
 `],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the first day of next month adjuster, not null`]
			]
		]],
		[/* method */ 'lastDayOfYear()', [
			[/* method description */
				[/* text */ 't', `Returns the "last day of year" adjuster, which returns a new date set to
 the last day of the current year.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ISO calendar system behaves as follows:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 will return 2011-12-31.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-02-15 will return 2011-12-31.`],
					[/* new line */ 'n']
				]],
				[/* block */ 'b', `
 The behavior is suitable for use with most calendar systems.
 It is equivalent to:
 `],
				[/* code block */ 'c', `  long lastDay = temporal.range(DAY_OF_YEAR).getMaximum();
  temporal.with(DAY_OF_YEAR, lastDay);
 `],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the last day-of-year adjuster, not null`]
			]
		]],
		[/* method */ 'firstDayOfNextYear()', [
			[/* method description */
				[/* text */ 't', `Returns the "first day of next year" adjuster, which returns a new date set to
 the first day of the next year.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ISO calendar system behaves as follows:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-01-15 will return 2012-01-01.
 `]
				]],
				[/* block */ 'b', `
 The behavior is suitable for use with most calendar systems.
 It is equivalent to:
 `],
				[/* code block */ 'c', `  temporal.with(DAY_OF_YEAR, 1).plus(1, YEARS);
 `],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the first day of next month adjuster, not null`]
			]
		]],
		[/* method */ 'firstInMonth(java.time.DayOfWeek)', [
			[/* method description */
				[/* text */ 't', `Returns the first in month adjuster, which returns a new date
 in the same month with the first matching day-of-week.
 This is used for expressions like 'first Tuesday in March'.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ISO calendar system behaves as follows:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-12-15 for (MONDAY) will return 2011-12-05.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-12-15 for (FRIDAY) will return 2011-12-02.`],
					[/* new line */ 'n']
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The behavior is suitable for use with most calendar systems.
 It uses the `],
					[/* inline code block */ 'i', `DAY_OF_WEEK`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` fields
 and the `],
					[/* inline code block */ 'i', `DAYS`],
					[/* text */ 't', ` unit, and assumes a seven day week.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dayOfWeek', [/* parameter description */
					[/* text */ 't', `the day-of-week, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the first in month adjuster, not null`]
			]
		]],
		[/* method */ 'lastInMonth(java.time.DayOfWeek)', [
			[/* method description */
				[/* text */ 't', `Returns the last in month adjuster, which returns a new date
 in the same month with the last matching day-of-week.
 This is used for expressions like 'last Tuesday in March'.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The ISO calendar system behaves as follows:`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-12-15 for (MONDAY) will return 2011-12-26.`],
					[/* new line */ 'n'],
					[/* text */ 't', `
 The input 2011-12-15 for (FRIDAY) will return 2011-12-30.`],
					[/* new line */ 'n']
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The behavior is suitable for use with most calendar systems.
 It uses the `],
					[/* inline code block */ 'i', `DAY_OF_WEEK`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` fields
 and the `],
					[/* inline code block */ 'i', `DAYS`],
					[/* text */ 't', ` unit, and assumes a seven day week.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dayOfWeek', [/* parameter description */
					[/* text */ 't', `the day-of-week, not null`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the first in month adjuster, not null`]
			]
		]]
	],
]);
