import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.SimpleTimeZone', [
	[/* class description */
		[/* inline code block */ 'i', `SimpleTimeZone`],
		[/* text */ 't', ` is a concrete subclass of `],
		[/* inline code block */ 'i', `TimeZone`],
		[/* text */ 't', `
 that represents a time zone for use with a Gregorian calendar.
 The class holds an offset from GMT, called `],
		[/* text */ 't', `raw offset`],
		[/* text */ 't', `, and start
 and end rules for a daylight saving time schedule.  Since it only holds
 single values for each, it cannot handle historical changes in the offset
 from GMT and the daylight saving schedule, except that the `],
		[/* reference */ 'r', `setStartYear`],
		[/* text */ 't', ` method can specify the year when the daylight
 saving time schedule starts in effect.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 To construct a `],
			[/* inline code block */ 'i', `SimpleTimeZone`],
			[/* text */ 't', ` with a daylight saving time
 schedule, the schedule can be described with a set of rules,
 `],
			[/* text */ 't', `start-rule`],
			[/* text */ 't', ` and `],
			[/* text */ 't', `end-rule`],
			[/* text */ 't', `. A day when daylight saving time
 starts or ends is specified by a combination of `],
			[/* text */ 't', `month`],
			[/* text */ 't', `,
 `],
			[/* text */ 't', `day-of-month`],
			[/* text */ 't', `, and `],
			[/* text */ 't', `day-of-week`],
			[/* text */ 't', ` values. The `],
			[/* text */ 't', `month`],
			[/* text */ 't', `
 value is represented by a Calendar `],
			[/* external link */ 'a', `Calendar.html#MONTH`, `MONTH`],
			[/* text */ 't', ` field
 value, such as `],
			[/* external link */ 'a', `Calendar.html#MARCH`, `Calendar.MARCH`],
			[/* text */ 't', `. The `],
			[/* text */ 't', `day-of-week`],
			[/* text */ 't', ` value is
 represented by a Calendar `],
			[/* external link */ 'a', `Calendar.html#DAY_OF_WEEK`, `DAY_OF_WEEK`],
			[/* text */ 't', ` value,
 such as `],
			[/* external link */ 'a', `Calendar.html#SUNDAY`, `SUNDAY`],
			[/* text */ 't', `. The meanings of value combinations
 are as follows.

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `Exact day of month`],
				[/* new line */ 'n'],
				[/* text */ 't', `
 To specify an exact day of month, set the `],
				[/* text */ 't', `month`],
				[/* text */ 't', ` and
 `],
				[/* text */ 't', `day-of-month`],
				[/* text */ 't', ` to an exact value, and `],
				[/* text */ 't', `day-of-week`],
				[/* text */ 't', ` to zero. For
 example, to specify March 1, set the `],
				[/* text */ 't', `month`],
				[/* text */ 't', ` to `],
				[/* external link */ 'a', `Calendar.html#MARCH`, `MARCH`],
				[/* text */ 't', `, `],
				[/* text */ 't', `day-of-month`],
				[/* text */ 't', ` to 1, and `],
				[/* text */ 't', `day-of-week`],
				[/* text */ 't', ` to 0.`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Day of week on or after day of month`],
				[/* new line */ 'n'],
				[/* text */ 't', `
 To specify a day of week on or after an exact day of month, set the
 `],
				[/* text */ 't', `month`],
				[/* text */ 't', ` to an exact month value, `],
				[/* text */ 't', `day-of-month`],
				[/* text */ 't', ` to the day on
 or after which the rule is applied, and `],
				[/* text */ 't', `day-of-week`],
				[/* text */ 't', ` to a negative `],
				[/* external link */ 'a', `Calendar.html#DAY_OF_WEEK`, `DAY_OF_WEEK`],
				[/* text */ 't', ` field value. For example, to specify the
 second Sunday of April, set `],
				[/* text */ 't', `month`],
				[/* text */ 't', ` to `],
				[/* external link */ 'a', `Calendar.html#APRIL`, `APRIL`],
				[/* text */ 't', `,
 `],
				[/* text */ 't', `day-of-month`],
				[/* text */ 't', ` to 8, and `],
				[/* text */ 't', `day-of-week`],
				[/* text */ 't', ` to `],
				[/* inline code block */ 'i', `-`],
				[/* external link */ 'a', `Calendar.html#SUNDAY`, `SUNDAY`],
				[/* text */ 't', `.`]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Day of week on or before day of month`],
				[/* new line */ 'n'],
				[/* text */ 't', `
 To specify a day of the week on or before an exact day of the month, set
 `],
				[/* text */ 't', `day-of-month`],
				[/* text */ 't', ` and `],
				[/* text */ 't', `day-of-week`],
				[/* text */ 't', ` to a negative value. For
 example, to specify the last Wednesday on or before the 21st of March, set
 `],
				[/* text */ 't', `month`],
				[/* text */ 't', ` to `],
				[/* external link */ 'a', `Calendar.html#MARCH`, `MARCH`],
				[/* text */ 't', `, `],
				[/* text */ 't', `day-of-month`],
				[/* text */ 't', ` is -21
 and `],
				[/* text */ 't', `day-of-week`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `-`],
				[/* external link */ 'a', `Calendar.html#WEDNESDAY`, `WEDNESDAY`],
				[/* text */ 't', `. `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', `Last day-of-week of month`],
				[/* new line */ 'n'],
				[/* text */ 't', `
 To specify, the last day-of-week of the month, set `],
				[/* text */ 't', `day-of-week`],
				[/* text */ 't', ` to a
 `],
				[/* external link */ 'a', `Calendar.html#DAY_OF_WEEK`, `DAY_OF_WEEK`],
				[/* text */ 't', ` value and `],
				[/* text */ 't', `day-of-month`],
				[/* text */ 't', ` to
 -1. For example, to specify the last Sunday of October, set `],
				[/* text */ 't', `month`],
				[/* text */ 't', `
 to `],
				[/* external link */ 'a', `Calendar.html#OCTOBER`, `OCTOBER`],
				[/* text */ 't', `, `],
				[/* text */ 't', `day-of-week`],
				[/* text */ 't', ` to `],
				[/* external link */ 'a', `Calendar.html#SUNDAY`, `SUNDAY`],
				[/* text */ 't', ` and `],
				[/* text */ 't', `day-of-month`],
				[/* text */ 't', ` to -1.  `]
			]]
		]],
		[/* text */ 't', `
 The time of the day at which daylight saving time starts or ends is
 specified by a millisecond value within the day. There are three kinds of
 `],
		[/* text */ 't', `mode`],
		[/* text */ 't', `s to specify the time: `],
		[/* text */ 't', `WALL_TIME`],
		[/* text */ 't', `, `],
		[/* text */ 't', `STANDARD_TIME`],
		[/* text */ 't', ` and `],
		[/* text */ 't', `UTC_TIME`],
		[/* text */ 't', `. For example, if daylight
 saving time ends
 at 2:00 am in the wall clock time, it can be specified by 7200000
 milliseconds in the `],
		[/* text */ 't', `WALL_TIME`],
		[/* text */ 't', ` mode. In this case, the wall clock time
 for an `],
		[/* text */ 't', `end-rule`],
		[/* text */ 't', ` means the same thing as the daylight time.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 The following are examples of parameters for constructing time zone objects.
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `// Base GMT offset: -8:00
      // DST starts:      at 2:00am in standard time
      //                  on the first Sunday in April
      // DST ends:        at 2:00am in daylight time
      //                  on the last Sunday in October
      // Save:            1 hour
      SimpleTimeZone(-28800000,
                     "America/Los_Angeles",
                     Calendar.APRIL, 1, -Calendar.SUNDAY,
                     7200000,
                     Calendar.OCTOBER, -1, Calendar.SUNDAY,
                     7200000,
                     3600000)

      // Base GMT offset: +1:00
      // DST starts:      at 1:00am in UTC time
      //                  on the last Sunday in March
      // DST ends:        at 1:00am in UTC time
      //                  on the last Sunday in October
      // Save:            1 hour
      SimpleTimeZone(3600000,
                     "Europe/Paris",
                     Calendar.MARCH, -1, Calendar.SUNDAY,
                     3600000, SimpleTimeZone.UTC_TIME,
                     Calendar.OCTOBER, -1, Calendar.SUNDAY,
                     3600000, SimpleTimeZone.UTC_TIME,
                     3600000)`]
		]],
		[/* text */ 't', `
 These parameter rules are also applicable to the set rule methods, such as
 `],
		[/* inline code block */ 'i', `setStartRule`],
		[/* text */ 't', `.`],
		[/* block */ 'b', '']
	],
	[/* fields */
		[/* field */ 'WALL_TIME', [
			[/* field description */
				[/* text */ 't', `Constant for a mode of start or end time specified as wall clock
 time.  Wall clock time is standard time for the onset rule, and
 daylight time for the end rule.`]
			],
		]],
		[/* field */ 'STANDARD_TIME', [
			[/* field description */
				[/* text */ 't', `Constant for a mode of start or end time specified as standard time.`]
			],
		]],
		[/* field */ 'UTC_TIME', [
			[/* field description */
				[/* text */ 't', `Constant for a mode of start or end time specified as UTC. European
 Union rules are specified as UTC time, for example.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(int,java.lang.String,int,int,int,int,int,int,int,int,int,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a SimpleTimeZone with the given base time zone offset from
 GMT, time zone ID, and rules for starting and ending the daylight
 time.
 This constructor takes the full set of the start and end rules
 parameters, including modes of `],
				[/* inline code block */ 'i', `startTime`],
				[/* text */ 't', ` and
 `],
				[/* inline code block */ 'i', `endTime`],
				[/* text */ 't', `. The mode specifies either `],
				[/* text */ 't', `wall time`],
				[/* text */ 't', ` or `],
				[/* text */ 't', `standard time`],
				[/* text */ 't', ` or `],
				[/* text */ 't', `UTC time`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'rawOffset', [/* parameter description */
					[/* text */ 't', `The given base time zone offset from GMT.`]
				]],
				[/* parameter */ 'ID', [/* parameter description */
					[/* text */ 't', `The time zone ID which is given to this object.`]
				]],
				[/* parameter */ 'startMonth', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting month. Month is
                        a `],
					[/* external link */ 'a', `Calendar.html#MONTH`, `MONTH`],
					[/* text */ 't', ` field
                        value (0-based. e.g., 0 for January).`]
				]],
				[/* parameter */ 'startDay', [/* parameter description */
					[/* text */ 't', `The day of the month on which the daylight saving time starts.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'startDayOfWeek', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting day-of-week.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'startTime', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting time in the time mode
                        specified by `],
					[/* inline code block */ 'i', `startTimeMode`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'startTimeMode', [/* parameter description */
					[/* text */ 't', `The mode of the start time specified by startTime.`]
				]],
				[/* parameter */ 'endMonth', [/* parameter description */
					[/* text */ 't', `The daylight saving time ending month. Month is
                        a `],
					[/* external link */ 'a', `Calendar.html#MONTH`, `MONTH`],
					[/* text */ 't', ` field
                        value (0-based. e.g., 9 for October).`]
				]],
				[/* parameter */ 'endDay', [/* parameter description */
					[/* text */ 't', `The day of the month on which the daylight saving time ends.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'endDayOfWeek', [/* parameter description */
					[/* text */ 't', `The daylight saving time ending day-of-week.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'endTime', [/* parameter description */
					[/* text */ 't', `The daylight saving ending time in time mode
                        specified by `],
					[/* inline code block */ 'i', `endTimeMode`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'endTimeMode', [/* parameter description */
					[/* text */ 't', `The mode of the end time specified by endTime`]
				]],
				[/* parameter */ 'dstSavings', [/* parameter description */
					[/* text */ 't', `The amount of time in milliseconds saved during
                        daylight saving time.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the month, day, dayOfWeek, time more, or
 time parameters are out of range for the start or end rule, or if a time mode
 value is invalid.`]
				]]
			]
		]],
		[/* constructor */ '<init>(int,java.lang.String,int,int,int,int,int,int,int,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a SimpleTimeZone with the given base time zone offset from
 GMT, time zone ID, and rules for starting and ending the daylight
 time.
 Both `],
				[/* inline code block */ 'i', `startTime`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `endTime`],
				[/* text */ 't', ` are assumed to be
 represented in the wall clock time. This constructor is equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `SimpleTimeZone(rawOffset,
                    ID,
                    startMonth,
                    startDay,
                    startDayOfWeek,
                    startTime,
                    SimpleTimeZone.WALL_TIME,
                    endMonth,
                    endDay,
                    endDayOfWeek,
                    endTime,
                    SimpleTimeZone.WALL_TIME,
                    dstSavings)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'rawOffset', [/* parameter description */
					[/* text */ 't', `The given base time zone offset from GMT.`]
				]],
				[/* parameter */ 'ID', [/* parameter description */
					[/* text */ 't', `The time zone ID which is given to this object.`]
				]],
				[/* parameter */ 'startMonth', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting month. Month is
                        a `],
					[/* external link */ 'a', `Calendar.html#MONTH`, `MONTH`],
					[/* text */ 't', ` field
                        value (0-based. e.g., 0 for January).`]
				]],
				[/* parameter */ 'startDay', [/* parameter description */
					[/* text */ 't', `The day of the month on which the daylight saving time starts.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'startDayOfWeek', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting day-of-week.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'startTime', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting time in local wall clock
                        time, which is local standard time in this case.`]
				]],
				[/* parameter */ 'endMonth', [/* parameter description */
					[/* text */ 't', `The daylight saving time ending month. Month is
                        a `],
					[/* external link */ 'a', `Calendar.html#MONTH`, `MONTH`],
					[/* text */ 't', ` field
                        value (0-based. e.g., 9 for October).`]
				]],
				[/* parameter */ 'endDay', [/* parameter description */
					[/* text */ 't', `The day of the month on which the daylight saving time ends.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'endDayOfWeek', [/* parameter description */
					[/* text */ 't', `The daylight saving time ending day-of-week.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'endTime', [/* parameter description */
					[/* text */ 't', `The daylight saving ending time in local wall clock time,
                        which is local daylight time in this case.`]
				]],
				[/* parameter */ 'dstSavings', [/* parameter description */
					[/* text */ 't', `The amount of time in milliseconds saved during
                        daylight saving time.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the month, day, dayOfWeek, or time
 parameters are out of range for the start or end rule`]
				]]
			]
		]],
		[/* constructor */ '<init>(int,java.lang.String,int,int,int,int,int,int,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a SimpleTimeZone with the given base time zone offset from
 GMT, time zone ID, and rules for starting and ending the daylight
 time.
 Both `],
				[/* inline code block */ 'i', `startTime`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `endTime`],
				[/* text */ 't', ` are specified to be
 represented in the wall clock time. The amount of daylight saving is
 assumed to be 3600000 milliseconds (i.e., one hour). This constructor is
 equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `SimpleTimeZone(rawOffset,
                    ID,
                    startMonth,
                    startDay,
                    startDayOfWeek,
                    startTime,
                    SimpleTimeZone.WALL_TIME,
                    endMonth,
                    endDay,
                    endDayOfWeek,
                    endTime,
                    SimpleTimeZone.WALL_TIME,
                    3600000)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'rawOffset', [/* parameter description */
					[/* text */ 't', `The given base time zone offset from GMT.`]
				]],
				[/* parameter */ 'ID', [/* parameter description */
					[/* text */ 't', `The time zone ID which is given to this object.`]
				]],
				[/* parameter */ 'startMonth', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting month. Month is
                        a `],
					[/* external link */ 'a', `Calendar.html#MONTH`, `MONTH`],
					[/* text */ 't', ` field value (0-based. e.g., 0
                        for January).`]
				]],
				[/* parameter */ 'startDay', [/* parameter description */
					[/* text */ 't', `The day of the month on which the daylight saving time starts.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'startDayOfWeek', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting day-of-week.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'startTime', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting time in local wall clock
                        time (in milliseconds within the day), which is local
                        standard time in this case.`]
				]],
				[/* parameter */ 'endMonth', [/* parameter description */
					[/* text */ 't', `The daylight saving time ending month. Month is
                        a `],
					[/* external link */ 'a', `Calendar.html#MONTH`, `MONTH`],
					[/* text */ 't', ` field
                        value (0-based. e.g., 9 for October).`]
				]],
				[/* parameter */ 'endDay', [/* parameter description */
					[/* text */ 't', `The day of the month on which the daylight saving time ends.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'endDayOfWeek', [/* parameter description */
					[/* text */ 't', `The daylight saving time ending day-of-week.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'endTime', [/* parameter description */
					[/* text */ 't', `The daylight saving ending time in local wall clock time,
                        (in milliseconds within the day) which is local daylight
                        time in this case.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the month, day, dayOfWeek, or time
 parameters are out of range for the start or end rule`]
				]]
			]
		]],
		[/* constructor */ '<init>(int,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a SimpleTimeZone with the given base time zone offset from GMT
 and time zone ID with no daylight saving time schedule.`]
			],
			[/* parameters */
				[/* parameter */ 'rawOffset', [/* parameter description */
					[/* text */ 't', `The base time zone offset in milliseconds to GMT.`]
				]],
				[/* parameter */ 'ID', [/* parameter description */
					[/* text */ 't', `The time zone name that is given to this instance.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the equality of two `],
				[/* inline code block */ 'i', `SimpleTimeZone`],
				[/* text */ 't', ` objects.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `SimpleTimeZone`],
					[/* text */ 't', ` object to be compared with.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `True if the given `],
				[/* inline code block */ 'i', `obj`],
				[/* text */ 't', ` is the same as this
             `],
				[/* inline code block */ 'i', `SimpleTimeZone`],
				[/* text */ 't', ` object; false otherwise.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this time zone.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this time zone.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Generates the hash code for the SimpleDateFormat object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code for this object`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Returns a clone of this `],
				[/* inline code block */ 'i', `SimpleTimeZone`],
				[/* text */ 't', ` instance.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a clone of this instance.`]
			]
		]],
		[/* method */ 'getOffset(int,int,int,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the difference in milliseconds between local time and
 UTC, taking into account both the raw offset and the effect of
 daylight saving, for the specified date and time.  This method
 assumes that the start and end month are distinct.  It also
 uses a default `],
				[/* reference */ 'r', `java.util.GregorianCalendar`],
				[/* text */ 't', ` object as its
 underlying calendar, such as for determining leap years.  Do
 not use the result of this method with a calendar other than a
 default `],
				[/* inline code block */ 'i', `GregorianCalendar`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Calendar.get(ZONE_OFFSET) + Calendar.get(DST_OFFSET)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'era', [/* parameter description */
					[/* text */ 't', `The era of the given date.`]
				]],
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `The year in the given date.`]
				]],
				[/* parameter */ 'month', [/* parameter description */
					[/* text */ 't', `The month in the given date. Month is 0-based. e.g.,
                  0 for January.`]
				]],
				[/* parameter */ 'day', [/* parameter description */
					[/* text */ 't', `The day-in-month of the given date.`]
				]],
				[/* parameter */ 'dayOfWeek', [/* parameter description */
					[/* text */ 't', `The day-of-week of the given date.`]
				]],
				[/* parameter */ 'millis', [/* parameter description */
					[/* text */ 't', `The milliseconds in day in `],
					[/* text */ 't', `standard`],
					[/* text */ 't', ` local time.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `era`],
					[/* text */ 't', `,
                  `],
					[/* inline code block */ 'i', `month`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `day`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `dayOfWeek`],
					[/* text */ 't', `,
                  or `],
					[/* inline code block */ 'i', `millis`],
					[/* text */ 't', ` parameters are out of range`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The milliseconds to add to UTC to get local time.`]
			]
		]],
		[/* method */ 'getOffset(long)', [
			[/* method description */
				[/* text */ 't', `Returns the offset of this time zone from UTC at the given
 time. If daylight saving time is in effect at the given time,
 the offset value is adjusted with the amount of daylight
 saving.`]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the time at which the time zone offset is found`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the amount of time in milliseconds to add to UTC to get
 local time.`]
			]
		]],
		[/* method */ 'getDSTSavings()', [
			[/* method description */
				[/* text */ 't', `Returns the amount of time in milliseconds that the clock is
 advanced during daylight saving time.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of milliseconds the time is advanced with
 respect to standard time when the daylight saving rules are in
 effect, or 0 (zero) if this time zone doesn't observe daylight
 saving time.`]
			]
		]],
		[/* method */ 'hasSameRules(java.util.TimeZone)', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this zone has the same rules and offset as another zone.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the TimeZone object to be compared with`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the given zone is a SimpleTimeZone and has the
 same rules and offset as this one`]
			]
		]],
		[/* method */ 'getRawOffset()', [
			[/* method description */
				[/* text */ 't', `Gets the GMT offset for this time zone.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the GMT offset value in milliseconds`]
			]
		]],
		[/* method */ 'inDaylightTime(java.util.Date)', [
			[/* method description */
				[/* text */ 't', `Queries if the given date is in daylight saving time.`]
			],
			[/* parameters */
				[/* parameter */ 'date', [/* parameter description */
					[/* text */ 't', `the given Date.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if daylight saving time is in effective at the
 given date; false otherwise.`]
			]
		]],
		[/* method */ 'useDaylightTime()', [
			[/* method description */
				[/* text */ 't', `Queries if this time zone uses daylight saving time.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if this time zone uses daylight saving time;
 false otherwise.`]
			]
		]],
		[/* method */ 'setRawOffset(int)', [
			[/* method description */
				[/* text */ 't', `Sets the base time zone offset to GMT.
 This is the offset to add to UTC to get local time.`]
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
				[/* inline code block */ 'i', `SimpleTimeZone`],
				[/* text */ 't', ` observes
 Daylight Saving Time. This method is equivalent to `],
				[/* reference */ 'r', `useDaylightTime()`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `SimpleTimeZone`],
				[/* text */ 't', ` observes
 Daylight Saving Time; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'setStartRule(int,int,int,int,boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the daylight saving time start rule to a weekday before or after the given date within
 a month, e.g., the first Monday on or after the 8th.`]
			],
			[/* parameters */
				[/* parameter */ 'startMonth', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting month. Month is
                        a `],
					[/* external link */ 'a', `Calendar.html#MONTH`, `MONTH`],
					[/* text */ 't', ` field
                        value (0-based. e.g., 0 for January).`]
				]],
				[/* parameter */ 'startDay', [/* parameter description */
					[/* text */ 't', `The day of the month on which the daylight saving time starts.`]
				]],
				[/* parameter */ 'startDayOfWeek', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting day-of-week.`]
				]],
				[/* parameter */ 'startTime', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting time in local wall clock
                        time, which is local standard time in this case.`]
				]],
				[/* parameter */ 'after', [/* parameter description */
					[/* text */ 't', `If true, this rule selects the first `],
					[/* inline code block */ 'i', `dayOfWeek`],
					[/* text */ 't', ` on or
                        `],
					[/* text */ 't', `after`],
					[/* inline code block */ 'i', `dayOfMonth`],
					[/* text */ 't', `.  If false, this rule
                        selects the last `],
					[/* inline code block */ 'i', `dayOfWeek`],
					[/* text */ 't', ` on or `],
					[/* text */ 't', `before`],
					[/* inline code block */ 'i', `dayOfMonth`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `startMonth`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `startDay`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `startDayOfWeek`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `startTime`],
					[/* text */ 't', ` parameters are out of range`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setStartRule(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Sets the daylight saving time start rule to a fixed date within a month.
 This method is equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `setStartRule(startMonth, startDay, 0, startTime)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'startMonth', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting month. Month is
                        a `],
					[/* external link */ 'a', `Calendar.html#MONTH`, `MONTH`],
					[/* text */ 't', ` field
                        value (0-based. e.g., 0 for January).`]
				]],
				[/* parameter */ 'startDay', [/* parameter description */
					[/* text */ 't', `The day of the month on which the daylight saving time starts.`]
				]],
				[/* parameter */ 'startTime', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting time in local wall clock
                        time, which is local standard time in this case.
                        See the class description for the special cases of this parameter.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `startMonth`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `startDayOfMonth`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `startTime`],
					[/* text */ 't', ` parameters are out of range`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setStartRule(int,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Sets the daylight saving time start rule. For example, if daylight saving
 time starts on the first Sunday in April at 2 am in local wall clock
 time, you can set the start rule by calling:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `setStartRule(Calendar.APRIL, 1, Calendar.SUNDAY, 2*60*60*1000);`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'startMonth', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting month. Month is
                        a `],
					[/* external link */ 'a', `Calendar.html#MONTH`, `MONTH`],
					[/* text */ 't', ` field
                        value (0-based. e.g., 0 for January).`]
				]],
				[/* parameter */ 'startDay', [/* parameter description */
					[/* text */ 't', `The day of the month on which the daylight saving time starts.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'startDayOfWeek', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting day-of-week.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'startTime', [/* parameter description */
					[/* text */ 't', `The daylight saving time starting time in local wall clock
                        time, which is local standard time in this case.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `startMonth`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `startDay`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `startDayOfWeek`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `startTime`],
					[/* text */ 't', ` parameters are out of range`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setEndRule(int,int,int,int)', [
			[/* method description */
				[/* text */ 't', `Sets the daylight saving time end rule. For example, if daylight saving time
 ends on the last Sunday in October at 2 am in wall clock time,
 you can set the end rule by calling:
 `],
				[/* inline code block */ 'i', `setEndRule(Calendar.OCTOBER, -1, Calendar.SUNDAY, 2*60*60*1000);`]
			],
			[/* parameters */
				[/* parameter */ 'endMonth', [/* parameter description */
					[/* text */ 't', `The daylight saving time ending month. Month is
                        a `],
					[/* external link */ 'a', `Calendar.html#MONTH`, `MONTH`],
					[/* text */ 't', ` field
                        value (0-based. e.g., 9 for October).`]
				]],
				[/* parameter */ 'endDay', [/* parameter description */
					[/* text */ 't', `The day of the month on which the daylight saving time ends.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'endDayOfWeek', [/* parameter description */
					[/* text */ 't', `The daylight saving time ending day-of-week.
                        See the class description for the special cases of this parameter.`]
				]],
				[/* parameter */ 'endTime', [/* parameter description */
					[/* text */ 't', `The daylight saving ending time in local wall clock time,
                        (in milliseconds within the day) which is local daylight
                        time in this case.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `endMonth`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `endDay`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `endDayOfWeek`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `endTime`],
					[/* text */ 't', ` parameters are out of range`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setEndRule(int,int,int,int,boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the daylight saving time end rule to a weekday before or after the given date within
 a month, e.g., the first Monday on or after the 8th.`]
			],
			[/* parameters */
				[/* parameter */ 'endMonth', [/* parameter description */
					[/* text */ 't', `The daylight saving time ending month. Month is
                        a `],
					[/* external link */ 'a', `Calendar.html#MONTH`, `MONTH`],
					[/* text */ 't', ` field
                        value (0-based. e.g., 9 for October).`]
				]],
				[/* parameter */ 'endDay', [/* parameter description */
					[/* text */ 't', `The day of the month on which the daylight saving time ends.`]
				]],
				[/* parameter */ 'endDayOfWeek', [/* parameter description */
					[/* text */ 't', `The daylight saving time ending day-of-week.`]
				]],
				[/* parameter */ 'endTime', [/* parameter description */
					[/* text */ 't', `The daylight saving ending time in local wall clock time,
                        (in milliseconds within the day) which is local daylight
                        time in this case.`]
				]],
				[/* parameter */ 'after', [/* parameter description */
					[/* text */ 't', `If true, this rule selects the first `],
					[/* inline code block */ 'i', `endDayOfWeek`],
					[/* text */ 't', ` on
                        or `],
					[/* text */ 't', `after`],
					[/* inline code block */ 'i', `endDay`],
					[/* text */ 't', `.  If false, this rule
                        selects the last `],
					[/* inline code block */ 'i', `endDayOfWeek`],
					[/* text */ 't', ` on or before
                        `],
					[/* inline code block */ 'i', `endDay`],
					[/* text */ 't', ` of the month.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `endMonth`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `endDay`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `endDayOfWeek`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `endTime`],
					[/* text */ 't', ` parameters are out of range`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setEndRule(int,int,int)', [
			[/* method description */
				[/* text */ 't', `Sets the daylight saving time end rule to a fixed date within a month.
 This method is equivalent to:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `setEndRule(endMonth, endDay, 0, endTime)`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'endMonth', [/* parameter description */
					[/* text */ 't', `The daylight saving time ending month. Month is
                        a `],
					[/* external link */ 'a', `Calendar.html#MONTH`, `MONTH`],
					[/* text */ 't', ` field
                        value (0-based. e.g., 9 for October).`]
				]],
				[/* parameter */ 'endDay', [/* parameter description */
					[/* text */ 't', `The day of the month on which the daylight saving time ends.`]
				]],
				[/* parameter */ 'endTime', [/* parameter description */
					[/* text */ 't', `The daylight saving ending time in local wall clock time,
                        (in milliseconds within the day) which is local daylight
                        time in this case.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `endMonth`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `endDay`],
					[/* text */ 't', `,
 or `],
					[/* inline code block */ 'i', `endTime`],
					[/* text */ 't', ` parameters are out of range`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setStartYear(int)', [
			[/* method description */
				[/* text */ 't', `Sets the daylight saving time starting year.`]
			],
			[/* parameters */
				[/* parameter */ 'year', [/* parameter description */
					[/* text */ 't', `The daylight saving starting year.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setDSTSavings(int)', [
			[/* method description */
				[/* text */ 't', `Sets the amount of time in milliseconds that the clock is advanced
 during daylight saving time.`]
			],
			[/* parameters */
				[/* parameter */ 'millisSavedDuringDST', [/* parameter description */
					[/* text */ 't', `the number of milliseconds the time is
 advanced with respect to standard time when the daylight saving time rules
 are in effect. A positive number, typically one hour (3600000).`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
