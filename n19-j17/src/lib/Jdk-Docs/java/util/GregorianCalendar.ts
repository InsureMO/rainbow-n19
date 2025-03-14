import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.GregorianCalendar', [
	[/* class description */
		[/* inline code block */ 'i', `GregorianCalendar`],
		[/* text */ 't', ` is a concrete subclass of
 `],
		[/* inline code block */ 'i', `Calendar`],
		[/* text */ 't', ` and provides the standard calendar system
 used by most of the world.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', ` is a hybrid calendar that
 supports both the Julian and Gregorian calendar systems with the
 support of a single discontinuity, which corresponds by default to
 the Gregorian date when the Gregorian calendar was instituted
 (October 15, 1582 in some countries, later in others).  The cutover
 date may be changed by the caller by calling `],
			[/* reference */ 'r', `#setGregorianChange(java.util.Date)`, `setGregorianChange()`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Historically, in those countries which adopted the Gregorian calendar first,
 October 4, 1582 (Julian) was thus followed by October 15, 1582 (Gregorian). This calendar models
 this correctly.  Before the Gregorian cutover, `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', `
 implements the Julian calendar.  The only difference between the Gregorian
 and the Julian calendar is the leap year rule. The Julian calendar specifies
 leap years every four years, whereas the Gregorian calendar omits century
 years which are not divisible by 400.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', ` implements `],
			[/* text */ 't', `proleptic`],
			[/* text */ 't', ` Gregorian and
 Julian calendars. That is, dates are computed by extrapolating the current
 rules indefinitely far backward and forward in time. As a result,
 `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', ` may be used for all years to generate
 meaningful and consistent results. However, dates obtained using
 `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', ` are historically accurate only from March 1, 4
 AD onward, when modern Julian calendar rules were adopted.  Before this date,
 leap year rules were applied irregularly, and before 45 BC the Julian
 calendar did not even exist.

 `]
		]],
		[/* block */ 'b', `
 Prior to the institution of the Gregorian calendar, New Year's Day was
 March 25. To avoid confusion, this calendar always uses January 1. A manual
 adjustment may be made if desired for dates that are prior to the Gregorian
 changeover and which fall between January 1 and March 24.

 `],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `week_and_year`, `Week Of Year and Week Year`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Values calculated for the `],
			[/* reference */ 'r', `java.util.Calendar#WEEK_OF_YEAR`, `WEEK_OF_YEAR`],
			[/* text */ 't', ` field range from 1 to 53. The first week of a
 calendar year is the earliest seven day period starting on `],
			[/* reference */ 'r', `java.util.Calendar#getFirstDayOfWeek()`, `getFirstDayOfWeek()`],
			[/* text */ 't', ` that contains at
 least `],
			[/* reference */ 'r', `java.util.Calendar#getMinimalDaysInFirstWeek()`, `getMinimalDaysInFirstWeek()`],
			[/* text */ 't', ` days from that year. It thus depends
 on the values of `],
			[/* inline code block */ 'i', `getMinimalDaysInFirstWeek()`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `getFirstDayOfWeek()`],
			[/* text */ 't', `, and the day of the week of January 1. Weeks
 between week 1 of one year and week 1 of the following year
 (exclusive) are numbered sequentially from 2 to 52 or 53 (except
 for year(s) involved in the Julian-Gregorian transition).

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `getFirstDayOfWeek()`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `getMinimalDaysInFirstWeek()`],
			[/* text */ 't', ` values are initialized using
 locale-dependent resources when constructing a `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', `. `],
			[/* anchor */ 'r', '#-id', `iso8601_compatible_setting`, `The week determination is compatible`],
			[/* text */ 't', ` with the ISO 8601 standard when `],
			[/* inline code block */ 'i', `getFirstDayOfWeek()`],
			[/* text */ 't', ` is `],
			[/* inline code block */ 'i', `MONDAY`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `getMinimalDaysInFirstWeek()`],
			[/* text */ 't', ` is 4, which values are used in locales
 where the standard is preferred. These values can explicitly be set by
 calling `],
			[/* reference */ 'r', `java.util.Calendar#setFirstDayOfWeek(int)`, `setFirstDayOfWeek()`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `java.util.Calendar#setMinimalDaysInFirstWeek(int)`, `setMinimalDaysInFirstWeek()`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `A `],
			[/* anchor */ 'r', '#-id', `week_year`, `week year`],
			[/* text */ 't', ` is in sync with a
 `],
			[/* inline code block */ 'i', `WEEK_OF_YEAR`],
			[/* text */ 't', ` cycle. All weeks between the first and last
 weeks (inclusive) have the same `],
			[/* text */ 't', `week year`],
			[/* text */ 't', ` value.
 Therefore, the first and last days of a week year may have
 different calendar year values.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `For example, January 1, 1998 is a Thursday. If `],
			[/* inline code block */ 'i', `getFirstDayOfWeek()`],
			[/* text */ 't', ` is `],
			[/* inline code block */ 'i', `MONDAY`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `getMinimalDaysInFirstWeek()`],
			[/* text */ 't', ` is 4 (ISO 8601 standard compatible
 setting), then week 1 of 1998 starts on December 29, 1997, and ends
 on January 4, 1998. The week year is 1998 for the last three days
 of calendar year 1997. If, however, `],
			[/* inline code block */ 'i', `getFirstDayOfWeek()`],
			[/* text */ 't', ` is
 `],
			[/* inline code block */ 'i', `SUNDAY`],
			[/* text */ 't', `, then week 1 of 1998 starts on January 4, 1998, and
 ends on January 10, 1998; the first three days of 1998 then are
 part of week 53 of 1997 and their week year is 1997.

 `]
		]],
		[/* block */ 'b', `Week Of Month`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Values calculated for the `],
			[/* inline code block */ 'i', `WEEK_OF_MONTH`],
			[/* text */ 't', ` field range from 0
 to 6.  Week 1 of a month (the days with `],
			[/* inline code block */ 'i', `WEEK_OF_MONTH = 1`],
			[/* text */ 't', `) is the earliest set of at least
 `],
			[/* inline code block */ 'i', `getMinimalDaysInFirstWeek()`],
			[/* text */ 't', ` contiguous days in that month,
 ending on the day before `],
			[/* inline code block */ 'i', `getFirstDayOfWeek()`],
			[/* text */ 't', `.  Unlike
 week 1 of a year, week 1 of a month may be shorter than 7 days, need
 not start on `],
			[/* inline code block */ 'i', `getFirstDayOfWeek()`],
			[/* text */ 't', `, and will not include days of
 the previous month.  Days of a month before week 1 have a
 `],
			[/* inline code block */ 'i', `WEEK_OF_MONTH`],
			[/* text */ 't', ` of 0.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `For example, if `],
			[/* inline code block */ 'i', `getFirstDayOfWeek()`],
			[/* text */ 't', ` is `],
			[/* inline code block */ 'i', `SUNDAY`],
			[/* text */ 't', `
 and `],
			[/* inline code block */ 'i', `getMinimalDaysInFirstWeek()`],
			[/* text */ 't', ` is 4, then the first week of
 January 1998 is Sunday, January 4 through Saturday, January 10.  These days
 have a `],
			[/* inline code block */ 'i', `WEEK_OF_MONTH`],
			[/* text */ 't', ` of 1.  Thursday, January 1 through
 Saturday, January 3 have a `],
			[/* inline code block */ 'i', `WEEK_OF_MONTH`],
			[/* text */ 't', ` of 0.  If
 `],
			[/* inline code block */ 'i', `getMinimalDaysInFirstWeek()`],
			[/* text */ 't', ` is changed to 3, then January 1
 through January 3 have a `],
			[/* inline code block */ 'i', `WEEK_OF_MONTH`],
			[/* text */ 't', ` of 1.

 `]
		]],
		[/* block */ 'b', `Default Fields Values`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `clear`],
			[/* text */ 't', ` method sets calendar field(s)
 undefined. `],
			[/* inline code block */ 'i', `GregorianCalendar`],
			[/* text */ 't', ` uses the following
 default value for each calendar field if its value is undefined.

 `]
		]],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
          Field
       `]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
          Default Value
       `]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `ERA`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `AD`],
						[/* text */ 't', `
       `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `YEAR`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `1970`],
						[/* text */ 't', `
       `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `MONTH`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `JANUARY`],
						[/* text */ 't', `
       `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `DAY_OF_MONTH`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `1`],
						[/* text */ 't', `
       `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `DAY_OF_WEEK`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `the first day of week`],
						[/* text */ 't', `
       `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `WEEK_OF_MONTH`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `0`],
						[/* text */ 't', `
       `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `DAY_OF_WEEK_IN_MONTH`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `1`],
						[/* text */ 't', `
       `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `AM_PM`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `AM`],
						[/* text */ 't', `
       `]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `HOUR, HOUR_OF_DAY, MINUTE, SECOND, MILLISECOND`],
						[/* text */ 't', `
       `]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `
              `],
						[/* inline code block */ 'i', `0`],
						[/* text */ 't', `
       `]
					]]
				]]
			]],
		],
		[/* text */ 't', `
 `],
		[/* new line */ 'n'],
		[/* text */ 't', `Default values are not applicable for the fields not listed above.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Example:`],
		[/* block */ 'b', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', ` // get the supported ids for GMT-08:00 (Pacific Standard Time)
 String[] ids = TimeZone.getAvailableIDs(-8 * 60 * 60 * 1000);
 // if no ids were returned, something is wrong. get out.
 if (ids.length == 0)
     System.exit(0);

  // begin output
 System.out.println("Current Time");

 // create a Pacific Standard Time time zone
 SimpleTimeZone pdt = new SimpleTimeZone(-8 * 60 * 60 * 1000, ids[0]);

 // set up rules for Daylight Saving Time
 pdt.setStartRule(Calendar.APRIL, 1, Calendar.SUNDAY, 2 * 60 * 60 * 1000);
 pdt.setEndRule(Calendar.OCTOBER, -1, Calendar.SUNDAY, 2 * 60 * 60 * 1000);

 // create a GregorianCalendar with the Pacific Daylight time zone
 // and the current date and time
 Calendar calendar = new GregorianCalendar(pdt);
 Date trialTime = new Date();
 calendar.setTime(trialTime);

 // print out a bunch of interesting things
 System.out.println("ERA: " + calendar.get(Calendar.ERA));
 System.out.println("YEAR: " + calendar.get(Calendar.YEAR));
 System.out.println("MONTH: " + calendar.get(Calendar.MONTH));
 System.out.println("WEEK_OF_YEAR: " + calendar.get(Calendar.WEEK_OF_YEAR));
 System.out.println("WEEK_OF_MONTH: " + calendar.get(Calendar.WEEK_OF_MONTH));
 System.out.println("DATE: " + calendar.get(Calendar.DATE));
 System.out.println("DAY_OF_MONTH: " + calendar.get(Calendar.DAY_OF_MONTH));
 System.out.println("DAY_OF_YEAR: " + calendar.get(Calendar.DAY_OF_YEAR));
 System.out.println("DAY_OF_WEEK: " + calendar.get(Calendar.DAY_OF_WEEK));
 System.out.println("DAY_OF_WEEK_IN_MONTH: "
                    + calendar.get(Calendar.DAY_OF_WEEK_IN_MONTH));
 System.out.println("AM_PM: " + calendar.get(Calendar.AM_PM));
 System.out.println("HOUR: " + calendar.get(Calendar.HOUR));
 System.out.println("HOUR_OF_DAY: " + calendar.get(Calendar.HOUR_OF_DAY));
 System.out.println("MINUTE: " + calendar.get(Calendar.MINUTE));
 System.out.println("SECOND: " + calendar.get(Calendar.SECOND));
 System.out.println("MILLISECOND: " + calendar.get(Calendar.MILLISECOND));
 System.out.println("ZONE_OFFSET: "
                    + (calendar.get(Calendar.ZONE_OFFSET)/(60*60*1000)));
 System.out.println("DST_OFFSET: "
                    + (calendar.get(Calendar.DST_OFFSET)/(60*60*1000)));
 System.out.println("Current Time, with hour reset to 3");
 calendar.clear(Calendar.HOUR_OF_DAY); // so doesn't override
 calendar.set(Calendar.HOUR, 3);
 System.out.println("ERA: " + calendar.get(Calendar.ERA));
 System.out.println("YEAR: " + calendar.get(Calendar.YEAR));
 System.out.println("MONTH: " + calendar.get(Calendar.MONTH));
 System.out.println("WEEK_OF_YEAR: " + calendar.get(Calendar.WEEK_OF_YEAR));
 System.out.println("WEEK_OF_MONTH: " + calendar.get(Calendar.WEEK_OF_MONTH));
 System.out.println("DATE: " + calendar.get(Calendar.DATE));
 System.out.println("DAY_OF_MONTH: " + calendar.get(Calendar.DAY_OF_MONTH));
 System.out.println("DAY_OF_YEAR: " + calendar.get(Calendar.DAY_OF_YEAR));
 System.out.println("DAY_OF_WEEK: " + calendar.get(Calendar.DAY_OF_WEEK));
 System.out.println("DAY_OF_WEEK_IN_MONTH: "
                    + calendar.get(Calendar.DAY_OF_WEEK_IN_MONTH));
 System.out.println("AM_PM: " + calendar.get(Calendar.AM_PM));
 System.out.println("HOUR: " + calendar.get(Calendar.HOUR));
 System.out.println("HOUR_OF_DAY: " + calendar.get(Calendar.HOUR_OF_DAY));
 System.out.println("MINUTE: " + calendar.get(Calendar.MINUTE));
 System.out.println("SECOND: " + calendar.get(Calendar.SECOND));
 System.out.println("MILLISECOND: " + calendar.get(Calendar.MILLISECOND));
 System.out.println("ZONE_OFFSET: "
        + (calendar.get(Calendar.ZONE_OFFSET)/(60*60*1000))); // in hours
 System.out.println("DST_OFFSET: "
        + (calendar.get(Calendar.DST_OFFSET)/(60*60*1000))); // in hours
 `],
			[/* text */ 't', `
 `]
		]],
		[/* block */ 'b', '']
	],
	[/* fields */
		[/* field */ 'AD', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* inline code block */ 'i', `ERA`],
				[/* text */ 't', ` field indicating
 the common era (Anno Domini), also known as CE.
 The sequence of years at the transition from `],
				[/* inline code block */ 'i', `BC`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `AD`],
				[/* text */ 't', ` is
 ..., 2 BC, 1 BC, 1 AD, 2 AD,...`]
			],
		]],
		[/* field */ 'BC', [
			[/* field description */
				[/* text */ 't', `Value of the `],
				[/* inline code block */ 'i', `ERA`],
				[/* text */ 't', ` field indicating
 the period before the common era (before Christ), also known as BCE.
 The sequence of years at the transition from `],
				[/* inline code block */ 'i', `BC`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `AD`],
				[/* text */ 't', ` is
 ..., 2 BC, 1 BC, 1 AD, 2 AD,...`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a default `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` using the current time
 in the default time zone with the default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` with the given date set
 in the default time zone with the default locale.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `YEAR`],
					[/* text */ 't', ` calendar field in the calendar.`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `MONTH`],
					[/* text */ 't', ` calendar field in the calendar.
 Month value is 0-based. e.g., 0 for January.`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` calendar field in the calendar.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int,int,int,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` with the given date
 and time set for the default time zone with the default locale.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `YEAR`],
					[/* text */ 't', ` calendar field in the calendar.`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `MONTH`],
					[/* text */ 't', ` calendar field in the calendar.
 Month value is 0-based. e.g., 0 for January.`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` calendar field in the calendar.`]
				]],
				[/* parameter */ 'hourOfDay', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', ` calendar field
 in the calendar.`]
				]],
				[/* parameter */ 'minute', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `MINUTE`],
					[/* text */ 't', ` calendar field
 in the calendar.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int,int,int,int,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a GregorianCalendar with the given date
 and time set for the default time zone with the default locale.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `YEAR`],
					[/* text */ 't', ` calendar field in the calendar.`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `MONTH`],
					[/* text */ 't', ` calendar field in the calendar.
 Month value is 0-based. e.g., 0 for January.`]
				]],
				[/* parameter */ 'dayOfMonth', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` calendar field in the calendar.`]
				]],
				[/* parameter */ 'hourOfDay', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `HOUR_OF_DAY`],
					[/* text */ 't', ` calendar field
 in the calendar.`]
				]],
				[/* parameter */ 'minute', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `MINUTE`],
					[/* text */ 't', ` calendar field
 in the calendar.`]
				]],
				[/* parameter */ 'second', [/* parameter description */
					[/* text */ 't', `the value used to set the `],
					[/* inline code block */ 'i', `SECOND`],
					[/* text */ 't', ` calendar field
 in the calendar.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` based on the current time
 in the default time zone with the given locale.`]
			],
			[/* parameters */
				[/* parameter */ 'aLocale', [/* parameter description */
					[/* text */ 't', `the given locale.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.TimeZone)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` based on the current time
 in the given time zone with the default
 `],
				[/* reference */ 'r', `java.util.Locale.Category#FORMAT`, `FORMAT`],
				[/* text */ 't', ` locale.`]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the given time zone.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.util.TimeZone,java.util.Locale)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` based on the current time
 in the given time zone with the given locale.`]
			],
			[/* parameters */
				[/* parameter */ 'zone', [/* parameter description */
					[/* text */ 't', `the given time zone.`]
				]],
				[/* parameter */ 'aLocale', [/* parameter description */
					[/* text */ 't', `the given locale.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'computeFields()', [
			[/* method description */
				[/* text */ 't', `Converts the time value (millisecond offset from the `],
				[/* reference */ 'r', `java.util.Calendar#Epoch`, `Epoch`],
				[/* text */ 't', `) to calendar field values.
 The time is `],
				[/* text */ 't', `not`],
				[/* text */ 't', `
 recomputed first; to recompute the time, then the fields, call the
 `],
				[/* inline code block */ 'i', `complete`],
				[/* text */ 't', ` method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'computeTime()', [
			[/* method description */
				[/* text */ 't', `Converts calendar field values to the time value (millisecond
 offset from the `],
				[/* reference */ 'r', `java.util.Calendar#Epoch`, `Epoch`],
				[/* text */ 't', `).`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any calendar fields are invalid.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` to the specified
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `. The result is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and
 only if the argument is a `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` object
 that represents the same time value (millisecond offset from
 the `],
				[/* reference */ 'r', `java.util.Calendar#Epoch`, `Epoch`],
				[/* text */ 't', `) under the same
 `],
				[/* inline code block */ 'i', `Calendar`],
				[/* text */ 't', ` parameters and Gregorian change date as
 this object.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to compare with.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this object is equal to `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', `;
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isLeapYear(int)', [
			[/* method description */
				[/* text */ 't', `Determines if the given year is a leap year. Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if
 the given year is a leap year. To specify BC year numbers,
 `],
				[/* inline code block */ 'i', `1 - year number`],
				[/* text */ 't', ` must be given. For example, year BC 4 is
 specified as -3.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `the given year.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given year is a leap year; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isWeekDateSupported()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` indicating this `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', `
 supports week dates.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` (always)`]
			]
		]],
		[/* method */ 'getGregorianChange()', [
			[/* method description */
				[/* text */ 't', `Gets the Gregorian Calendar change date.  This is the point when the
 switch from Julian dates to Gregorian dates occurred. Default is
 October 15, 1582 (Gregorian). Previous to this, dates will be in the Julian
 calendar.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the Gregorian cutover date for this `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` object.`]
			]
		]],
		[/* method */ 'getActualMaximum(int)', [
			[/* method description */
				[/* text */ 't', `Returns the maximum value that this calendar field could have,
 taking into consideration the given time value and the current
 values of the
 `],
				[/* reference */ 'r', `java.util.Calendar#getFirstDayOfWeek()`, `getFirstDayOfWeek`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.util.Calendar#getMinimalDaysInFirstWeek()`, `getMinimalDaysInFirstWeek`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getGregorianChange()`, `getGregorianChange`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `java.util.Calendar#getTimeZone()`, `getTimeZone`],
				[/* text */ 't', ` methods.
 For example, if the date of this instance is February 1, 2004,
 the actual maximum value of the `],
				[/* inline code block */ 'i', `DAY_OF_MONTH`],
				[/* text */ 't', ` field
 is 29 because 2004 is a leap year, and if the date of this
 instance is February 1, 2005, it's 28.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method calculates the maximum value of `],
					[/* reference */ 'r', `java.util.Calendar#WEEK_OF_YEAR`, `WEEK_OF_YEAR`],
					[/* text */ 't', ` based on the `],
					[/* reference */ 'r', `java.util.Calendar#YEAR`, `YEAR`],
					[/* text */ 't', ` (calendar year) value, not the `],
					[/* text */ 't', `week year`],
					[/* text */ 't', `. Call `],
					[/* reference */ 'r', `#getWeeksInWeekYear()`, `getWeeksInWeekYear()`],
					[/* text */ 't', ` to get the maximum value of `],
					[/* inline code block */ 'i', `WEEK_OF_YEAR`],
					[/* text */ 't', ` in the week year of this `],
					[/* inline code block */ 'i', `GregorianCalendar`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum of the given field for the time value of
 this `],
				[/* inline code block */ 'i', `GregorianCalendar`]
			]
		]],
		[/* method */ 'getActualMinimum(int)', [
			[/* method description */
				[/* text */ 't', `Returns the minimum value that this calendar field could have,
 taking into consideration the given time value and the current
 values of the
 `],
				[/* reference */ 'r', `java.util.Calendar#getFirstDayOfWeek()`, `getFirstDayOfWeek`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.util.Calendar#getMinimalDaysInFirstWeek()`, `getMinimalDaysInFirstWeek`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getGregorianChange()`, `getGregorianChange`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `java.util.Calendar#getTimeZone()`, `getTimeZone`],
				[/* text */ 't', ` methods.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For example, if the Gregorian change date is January 10,
 1970 and the date of this `],
					[/* inline code block */ 'i', `GregorianCalendar`],
					[/* text */ 't', ` is
 January 20, 1970, the actual minimum value of the
 `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` field is 10 because the previous date
 of January 10, 1970 is December 27, 1996 (in the Julian
 calendar). Therefore, December 28, 1969 to January 9, 1970
 don't exist.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minimum of the given field for the time value of
 this `],
				[/* inline code block */ 'i', `GregorianCalendar`]
			]
		]],
		[/* method */ 'getGreatestMinimum(int)', [
			[/* method description */
				[/* text */ 't', `Returns the highest minimum value for the given calendar field
 of this `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` instance. The highest
 minimum value is defined as the largest value returned by
 `],
				[/* reference */ 'r', `#getActualMinimum(int)`, `getActualMinimum(int)`],
				[/* text */ 't', ` for any possible time value,
 taking into consideration the current values of the
 `],
				[/* reference */ 'r', `java.util.Calendar#getFirstDayOfWeek()`, `getFirstDayOfWeek`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.util.Calendar#getMinimalDaysInFirstWeek()`, `getMinimalDaysInFirstWeek`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getGregorianChange()`, `getGregorianChange`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `java.util.Calendar#getTimeZone()`, `getTimeZone`],
				[/* text */ 't', ` methods.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the highest minimum value for the given calendar field.`]
			]
		]],
		[/* method */ 'getLeastMaximum(int)', [
			[/* method description */
				[/* text */ 't', `Returns the lowest maximum value for the given calendar field
 of this `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` instance. The lowest
 maximum value is defined as the smallest value returned by
 `],
				[/* reference */ 'r', `#getActualMaximum(int)`, `getActualMaximum(int)`],
				[/* text */ 't', ` for any possible time value,
 taking into consideration the current values of the
 `],
				[/* reference */ 'r', `java.util.Calendar#getFirstDayOfWeek()`, `getFirstDayOfWeek`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.util.Calendar#getMinimalDaysInFirstWeek()`, `getMinimalDaysInFirstWeek`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getGregorianChange()`, `getGregorianChange`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `java.util.Calendar#getTimeZone()`, `getTimeZone`],
				[/* text */ 't', ` methods.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the lowest maximum value for the given calendar field.`]
			]
		]],
		[/* method */ 'getMaximum(int)', [
			[/* method description */
				[/* text */ 't', `Returns the maximum value for the given calendar field of this
 `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` instance. The maximum value is
 defined as the largest value returned by the `],
				[/* reference */ 'r', `java.util.Calendar#get(int)`, `get`],
				[/* text */ 't', ` method for any possible time value,
 taking into consideration the current values of the
 `],
				[/* reference */ 'r', `java.util.Calendar#getFirstDayOfWeek()`, `getFirstDayOfWeek`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.util.Calendar#getMinimalDaysInFirstWeek()`, `getMinimalDaysInFirstWeek`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getGregorianChange()`, `getGregorianChange`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `java.util.Calendar#getTimeZone()`, `getTimeZone`],
				[/* text */ 't', ` methods.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum value for the given calendar field.`]
			]
		]],
		[/* method */ 'getMinimum(int)', [
			[/* method description */
				[/* text */ 't', `Returns the minimum value for the given calendar field of this
 `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` instance. The minimum value is
 defined as the smallest value returned by the `],
				[/* reference */ 'r', `java.util.Calendar#get(int)`, `get`],
				[/* text */ 't', ` method for any possible time value,
 taking into consideration the current values of the
 `],
				[/* reference */ 'r', `java.util.Calendar#getFirstDayOfWeek()`, `getFirstDayOfWeek`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `java.util.Calendar#getMinimalDaysInFirstWeek()`, `getMinimalDaysInFirstWeek`],
				[/* text */ 't', `,
 `],
				[/* reference */ 'r', `#getGregorianChange()`, `getGregorianChange`],
				[/* text */ 't', ` and
 `],
				[/* reference */ 'r', `java.util.Calendar#getTimeZone()`, `getTimeZone`],
				[/* text */ 't', ` methods.`]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the minimum value for the given calendar field.`]
			]
		]],
		[/* method */ 'getWeeksInWeekYear()', [
			[/* method description */
				[/* text */ 't', `Returns the number of weeks in the `],
				[/* text */ 't', `week year`],
				[/* text */ 't', `
 represented by this `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `For example, if this `],
					[/* inline code block */ 'i', `GregorianCalendar`],
					[/* text */ 't', `'s date is
 December 31, 2008 with `],
					[/* text */ 't', `the ISO 8601 compatible setting`],
					[/* text */ 't', `, this method will return 53 for the
 period: December 29, 2008 to January 3, 2010 while `],
					[/* reference */ 'r', `#getActualMaximum(int)`, `getActualMaximum(WEEK_OF_YEAR)`],
					[/* text */ 't', ` will return
 52 for the period: December 31, 2007 to December 28, 2008.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of weeks in the week year.`]
			]
		]],
		[/* method */ 'getWeekYear()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* text */ 't', `week year`],
				[/* text */ 't', ` represented by this
 `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', `. The dates in the weeks between 1 and the
 maximum week number of the week year have the same week year value
 that may be one year before or after the `],
				[/* reference */ 'r', `java.util.Calendar#YEAR`, `YEAR`],
				[/* text */ 't', `
 (calendar year) value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method calls `],
					[/* reference */ 'r', `java.util.Calendar#complete()`, `Calendar.complete()`],
					[/* text */ 't', ` before
 calculating the week year.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any of the calendar fields is invalid in non-lenient mode.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the week year represented by this `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', `.
         If the `],
				[/* reference */ 'r', `java.util.Calendar#ERA`, `ERA`],
				[/* text */ 't', ` value is `],
				[/* text */ 't', `BC`],
				[/* text */ 't', `, the year is
         represented by 0 or a negative number: BC 1 is 0, BC 2
         is -1, BC 3 is -2, and so on.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Generates the hash code for this `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object.`]
			]
		]],
		[/* method */ 'clone()', UDF],
		[/* method */ 'getCalendarType()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `"gregory"`],
				[/* text */ 't', ` as the calendar type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `"gregory"`]
			]
		]],
		[/* method */ 'toZonedDateTime()', [
			[/* method description */
				[/* text */ 't', `Converts this object to a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` that represents
 the same point on the time-line as this `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Since this object supports a Julian-Gregorian cutover date and
 `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` does not, it is possible that the resulting year,
 month and day will have different values.  The result will represent the
 correct date in the ISO calendar system, which will also be the same value
 for Modified Julian Days.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a zoned date-time representing the same point on the time-line
  as this gregorian calendar`]
			]
		]],
		[/* method */ 'getTimeZone()', UDF],
		[/* method */ 'from(java.time.ZonedDateTime)', [
			[/* method description */
				[/* text */ 't', `Obtains an instance of `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` with the default locale
 from a `],
				[/* inline code block */ 'i', `ZonedDateTime`],
				[/* text */ 't', ` object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Since `],
					[/* inline code block */ 'i', `ZonedDateTime`],
					[/* text */ 't', ` does not support a Julian-Gregorian cutover
 date and uses ISO calendar system, the return GregorianCalendar is a pure
 Gregorian calendar and uses ISO 8601 standard for week definitions,
 which has `],
					[/* inline code block */ 'i', `MONDAY`],
					[/* text */ 't', ` as the `],
					[/* reference */ 'r', `java.util.Calendar#getFirstDayOfWeek()`, `FirstDayOfWeek`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `4`],
					[/* text */ 't', ` as the value of the
 `],
					[/* reference */ 'r', `java.util.Calendar#getMinimalDaysInFirstWeek()`, `MinimalDaysInFirstWeek`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* inline code block */ 'i', `ZoneDateTime`],
					[/* text */ 't', ` can store points on the time-line further in the
 future and further in the past than `],
					[/* inline code block */ 'i', `GregorianCalendar`],
					[/* text */ 't', `. In this
 scenario, this method will throw an `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', `
 exception.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'zdt', [/* parameter description */
					[/* text */ 't', `the zoned date-time object to convert`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `zdt`],
					[/* text */ 't', ` is null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the zoned date-time is too
 large to represent as a `],
					[/* inline code block */ 'i', `GregorianCalendar`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the gregorian calendar representing the same point on the
  time-line as the zoned date-time provided`]
			]
		]],
		[/* method */ 'add(int,int)', [
			[/* method description */
				[/* text */ 't', `Adds the specified (signed) amount of time to the given calendar field,
 based on the calendar's rules.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Add rule 1`],
					[/* text */ 't', `. The value of `],
					[/* inline code block */ 'i', `field`],
					[/* text */ 't', `
 after the call minus the value of `],
					[/* inline code block */ 'i', `field`],
					[/* text */ 't', ` before the
 call is `],
					[/* inline code block */ 'i', `amount`],
					[/* text */ 't', `, modulo any overflow that has occurred in
 `],
					[/* inline code block */ 'i', `field`],
					[/* text */ 't', `. Overflow occurs when a field value exceeds its
 range and, as a result, the next larger field is incremented or
 decremented and the field value is adjusted back into its range.`]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Add rule 2`],
					[/* text */ 't', `. If a smaller field is expected to be
 invariant, but it is impossible for it to be equal to its
 prior value because of changes in its minimum or maximum after
 `],
					[/* inline code block */ 'i', `field`],
					[/* text */ 't', ` is changed, then its value is adjusted to be as close
 as possible to its expected value. A smaller field represents a
 smaller unit of time. `],
					[/* inline code block */ 'i', `HOUR`],
					[/* text */ 't', ` is a smaller field than
 `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', `. No adjustment is made to smaller fields
 that are not expected to be invariant. The calendar system
 determines what fields are expected to be invariant.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field.`]
				]],
				[/* parameter */ 'amount', [/* parameter description */
					[/* text */ 't', `the amount of date or time to be added to the field.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `field`],
					[/* text */ 't', ` is
 `],
					[/* inline code block */ 'i', `ZONE_OFFSET`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `DST_OFFSET`],
					[/* text */ 't', `, or unknown,
 or if any calendar fields have out-of-range values in
 non-lenient mode.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'roll(int,boolean)', [
			[/* method description */
				[/* text */ 't', `Adds or subtracts (up/down) a single unit of time on the given time
 field without changing larger fields.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Example`],
					[/* text */ 't', `: Consider a `],
					[/* inline code block */ 'i', `GregorianCalendar`],
					[/* text */ 't', `
 originally set to December 31, 1999. Calling `],
					[/* reference */ 'r', `#roll(int,boolean)`, `roll(Calendar.MONTH, true)`],
					[/* text */ 't', `
 sets the calendar to January 31, 1999.  The `],
					[/* inline code block */ 'i', `YEAR`],
					[/* text */ 't', ` field is unchanged
 because it is a larger field than `],
					[/* inline code block */ 'i', `MONTH`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'up', [/* parameter description */
					[/* text */ 't', `indicates if the value of the specified calendar field is to be
 rolled up or rolled down. Use `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if rolling up, `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` otherwise.`]
				]],
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the time field.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `field`],
					[/* text */ 't', ` is
 `],
					[/* inline code block */ 'i', `ZONE_OFFSET`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `DST_OFFSET`],
					[/* text */ 't', `, or unknown,
 or if any calendar fields have out-of-range values in
 non-lenient mode.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'roll(int,int)', [
			[/* method description */
				[/* text */ 't', `Adds a signed amount to the specified calendar field without changing larger fields.
 A negative roll amount means to subtract from field without changing
 larger fields. If the specified amount is 0, this method performs nothing.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method calls `],
					[/* reference */ 'r', `java.util.Calendar#complete()`, `Calendar.complete()`],
					[/* text */ 't', ` before adding the
 amount so that all the calendar fields are normalized. If there
 is any calendar field having an out-of-range value in non-lenient mode, then an
 `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Example`],
					[/* text */ 't', `: Consider a `],
					[/* inline code block */ 'i', `GregorianCalendar`],
					[/* text */ 't', `
 originally set to August 31, 1999. Calling `],
					[/* inline code block */ 'i', `roll(Calendar.MONTH, 8)`],
					[/* text */ 't', ` sets the calendar to April 30, `],
					[/* text */ 't', `1999`],
					[/* text */ 't', `. Using a
 `],
					[/* inline code block */ 'i', `GregorianCalendar`],
					[/* text */ 't', `, the `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` field cannot
 be 31 in the month April. `],
					[/* inline code block */ 'i', `DAY_OF_MONTH`],
					[/* text */ 't', ` is set to the closest possible
 value, 30. The `],
					[/* inline code block */ 'i', `YEAR`],
					[/* text */ 't', ` field maintains the value of 1999 because it
 is a larger field than `],
					[/* inline code block */ 'i', `MONTH`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Example`],
					[/* text */ 't', `: Consider a `],
					[/* inline code block */ 'i', `GregorianCalendar`],
					[/* text */ 't', `
 originally set to Sunday June 6, 1999. Calling
 `],
					[/* inline code block */ 'i', `roll(Calendar.WEEK_OF_MONTH, -1)`],
					[/* text */ 't', ` sets the calendar to
 Tuesday June 1, 1999, whereas calling
 `],
					[/* inline code block */ 'i', `add(Calendar.WEEK_OF_MONTH, -1)`],
					[/* text */ 't', ` sets the calendar to
 Sunday May 30, 1999. This is because the roll rule imposes an
 additional constraint: The `],
					[/* inline code block */ 'i', `MONTH`],
					[/* text */ 't', ` must not change when the
 `],
					[/* inline code block */ 'i', `WEEK_OF_MONTH`],
					[/* text */ 't', ` is rolled. Taken together with add rule 1,
 the resultant date must be between Tuesday June 1 and Saturday June
 5. According to add rule 2, the `],
					[/* inline code block */ 'i', `DAY_OF_WEEK`],
					[/* text */ 't', `, an invariant
 when changing the `],
					[/* inline code block */ 'i', `WEEK_OF_MONTH`],
					[/* text */ 't', `, is set to Tuesday, the
 closest possible value to Sunday (where Sunday is the first day of the
 week).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'field', [/* parameter description */
					[/* text */ 't', `the calendar field.`]
				]],
				[/* parameter */ 'amount', [/* parameter description */
					[/* text */ 't', `the signed amount to add to `],
					[/* inline code block */ 'i', `field`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `field`],
					[/* text */ 't', ` is
 `],
					[/* inline code block */ 'i', `ZONE_OFFSET`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `DST_OFFSET`],
					[/* text */ 't', `, or unknown,
 or if any calendar fields have out-of-range values in
 non-lenient mode.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setGregorianChange(java.util.Date)', [
			[/* method description */
				[/* text */ 't', `Sets the `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` change date. This is the point when the switch
 from Julian dates to Gregorian dates occurred. Default is October 15,
 1582 (Gregorian). Previous to this, dates will be in the Julian calendar.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 To obtain a pure Julian calendar, set the change date to
 `],
					[/* inline code block */ 'i', `Date(Long.MAX_VALUE)`],
					[/* text */ 't', `.  To obtain a pure Gregorian calendar,
 set the change date to `],
					[/* inline code block */ 'i', `Date(Long.MIN_VALUE)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the given Gregorian cutover date.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setTimeZone(java.util.TimeZone)', UDF],
		[/* method */ 'setWeekDate(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Sets this `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', ` to the date given by the
 date specifiers - `],
				[/* text */ 't', `weekYear`],
				[/* text */ 't', `,
 `],
				[/* inline code block */ 'i', `weekOfYear`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `dayOfWeek`],
				[/* text */ 't', `. `],
				[/* inline code block */ 'i', `weekOfYear`],
				[/* text */ 't', `
 follows the `],
				[/* text */ 't', `WEEK_OF_YEAR numbering`],
				[/* text */ 't', `.  The `],
				[/* inline code block */ 'i', `dayOfWeek`],
				[/* text */ 't', ` value must be one of the
 `],
				[/* reference */ 'r', `java.util.Calendar#DAY_OF_WEEK`, `DAY_OF_WEEK`],
				[/* text */ 't', ` values: `],
				[/* reference */ 'r', `java.util.Calendar#SUNDAY`, `SUNDAY`],
				[/* text */ 't', ` to `],
				[/* reference */ 'r', `java.util.Calendar#SATURDAY`, `SATURDAY`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that the numeric day-of-week representation differs from
 the ISO 8601 standard, and that the `],
					[/* inline code block */ 'i', `weekOfYear`],
					[/* text */ 't', `
 numbering is compatible with the standard when `],
					[/* inline code block */ 'i', `getFirstDayOfWeek()`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `MONDAY`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `getMinimalDaysInFirstWeek()`],
					[/* text */ 't', ` is 4.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Unlike the `],
					[/* inline code block */ 'i', `set`],
					[/* text */ 't', ` method, all of the calendar fields
 and the instant of time value are calculated upon return.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `weekOfYear`],
					[/* text */ 't', ` is out of the valid week-of-year
 range in `],
					[/* inline code block */ 'i', `weekYear`],
					[/* text */ 't', `, the `],
					[/* inline code block */ 'i', `weekYear`],
					[/* text */ 't', `
 and `],
					[/* inline code block */ 'i', `weekOfYear`],
					[/* text */ 't', ` values are adjusted in lenient
 mode, or an `],
					[/* inline code block */ 'i', `IllegalArgumentException`],
					[/* text */ 't', ` is thrown in
 non-lenient mode.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'weekYear', [/* parameter description */
					[/* text */ 't', `the week year`]
				]],
				[/* parameter */ 'weekOfYear', [/* parameter description */
					[/* text */ 't', `the week number based on `],
					[/* inline code block */ 'i', `weekYear`]
				]],
				[/* parameter */ 'dayOfWeek', [/* parameter description */
					[/* text */ 't', `the day of week value: one of the constants
                    for the `],
					[/* reference */ 'r', `java.util.Calendar#DAY_OF_WEEK`, `DAY_OF_WEEK`],
					[/* text */ 't', ` field:
                    `],
					[/* reference */ 'r', `java.util.Calendar#SUNDAY`, `SUNDAY`],
					[/* text */ 't', `, ...,
                    `],
					[/* reference */ 'r', `java.util.Calendar#SATURDAY`, `SATURDAY`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if any of the given date specifiers is invalid,
            or if any of the calendar fields are inconsistent
            with the given date specifiers in non-lenient mode`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
